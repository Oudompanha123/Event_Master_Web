"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type RowData,
  type SortingState,
  type TableMeta,
} from "@tanstack/react-table";
import { cn } from "@/shared/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/kit/table";
import { DataTablePagination } from "./DataTablePagination";

// extra per-column styling read by DataTable (see `meta` below)
declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    /** classes for every <td> of the column */
    className?: string;
    /** classes for the column's <th> */
    headerClassName?: string;
  }
}

export interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[] | null | undefined;
  totalRecord?: number;
  pageSize?: number;
  paginate?: boolean;
  showIndex?: boolean;
  enableSorting?: boolean;
  getRowId?: (row: TData, index: number) => string;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyImage?: string;
  minWidth?: string;
  rowClassName?: string;
  headerClassName?: string;
  cellClassName?: string;
  containerClassName?: string;
  meta?: TableMeta<TData>;
}

/**
 * Shared dashboard table: TanStack Table (headless) rendered with shadcn/ui's Table.
 *
 * Columns use the normal TanStack column-def format. Extra styling goes in `meta`:
 *   { accessorKey: "email", header: "Email", meta: { className: "w-64", headerClassName: "text-center" } }
 *
 * Pagination
 *   - Server side (when `totalRecord` is given): the page lives in the URL as `?page=N` (1-based);
 *     other query params (e.g. `?query=`) are kept. Page buttons are real links.
 *   - Client side: leave out `totalRecord` and the table pages `data` itself.
 *   - `paginate={false}` turns pagination off.
 *
 * The *ClassName props are merged over the defaults (not replacing them).
 * `minWidth` is the width below which the table scrolls sideways instead of squashing columns.
 * `meta` is TanStack table meta, readable in cells as `table.options.meta` (e.g. edit state).
 */
export default function DataTable<TData = any>({
  columns,
  data,
  totalRecord,
  pageSize = 8,
  paginate = true,
  showIndex = true,
  enableSorting = false,
  getRowId,
  emptyTitle = "No results found",
  emptyDescription = "Please try another search!",
  emptyImage = "/images/empty-amico.png",
  minWidth = "640px",
  rowClassName,
  headerClassName,
  cellClassName,
  containerClassName,
  meta,
}: DataTableProps<TData>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const rows = useMemo(() => data ?? [], [data]);
  const isServerPaging = paginate && typeof totalRecord === "number";

  // server paging: the URL owns the page; client paging: local state does
  const urlPage = Math.max(1, Number(searchParams.get("page")) || 1);
  const [clientPage, setClientPage] = useState(0);
  const pageIndex = isServerPaging ? urlPage - 1 : clientPage;

  const [sorting, setSorting] = useState<SortingState>([]);

  const allColumns = useMemo<ColumnDef<TData, any>[]>(() => {
    if (!showIndex) return columns;
    return [
      {
        id: "__index",
        header: "No",
        enableSorting: false,
        meta: { className: "w-14 text-muted-foreground", headerClassName: "w-14" },
        // number rows across pages: page 2 starts at 9 when pageSize is 8
        cell: ({ row, table }) => {
          const visible = table.getRowModel().rows.findIndex((r) => r.id === row.id);
          return pageIndex * pageSize + visible + 1;
        },
      },
      ...columns,
    ];
  }, [columns, showIndex, pageIndex, pageSize]);

  const table = useReactTable({
    data: rows,
    columns: allColumns,
    getRowId,
    meta,
    state: { sorting, pagination: { pageIndex, pageSize } },
    enableSorting,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    manualPagination: !paginate || isServerPaging,
    getPaginationRowModel: paginate && !isServerPaging ? getPaginationRowModel() : undefined,
    pageCount: isServerPaging ? Math.ceil(totalRecord / pageSize) : undefined,
  });

  const pageCount = table.getPageCount();
  const visibleRows = table.getRowModel().rows;
  const isEmpty = rows.length === 0;
  const total = isServerPaging ? totalRecord : rows.length;

  const pageHref = (index: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(index + 1));
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <div className={cn("w-full overflow-hidden rounded-2xl border", containerClassName)}>
        <Table style={{ minWidth }}>
          <TableHeader className={cn("bg-muted", headerClassName)}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort();
                  const sorted = header.column.getIsSorted();
                  const content = header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext());
                  const SortIcon = sorted === "asc" ? ArrowUp : sorted === "desc" ? ArrowDown : ArrowUpDown;
                  return (
                    <TableHead
                      key={header.id}
                      scope="col"
                      aria-sort={sorted === "asc" ? "ascending" : sorted === "desc" ? "descending" : undefined}
                      className={cn(
                        "h-12 px-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase",
                        cellClassName,
                        header.column.columnDef.meta?.headerClassName,
                      )}
                    >
                      {canSort ? (
                        <button
                          type="button"
                          onClick={header.column.getToggleSortingHandler()}
                          className="-mx-1 inline-flex items-center gap-1.5 rounded px-1 uppercase hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {content}
                          <SortIcon className="size-3.5" aria-hidden="true" />
                        </button>
                      ) : (
                        content
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {visibleRows.map((row) => (
              <TableRow key={row.id} className={cn("text-primary-text", rowClassName)}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className={cn("h-14 px-4 text-sm", cellClassName, cell.column.columnDef.meta?.className)}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {isEmpty && (
          <div className="flex min-h-[40vh] w-full flex-col items-center justify-center gap-2 px-4 pb-10 text-center">
            <Image src={emptyImage} alt="" width={180} height={180} unoptimized={emptyImage.endsWith(".gif")} />
            <p className="text-xl font-semibold text-primary-text sm:text-2xl">{emptyTitle}</p>
            {emptyDescription && <p className="text-muted-foreground sm:text-lg">{emptyDescription}</p>}
          </div>
        )}
      </div>

      {paginate && !isEmpty && pageCount > 1 && (
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Showing {pageIndex * pageSize + 1}–{Math.min((pageIndex + 1) * pageSize, total)} of {total}
          </p>
          <DataTablePagination
            pageIndex={Math.min(pageIndex, pageCount - 1)}
            pageCount={pageCount}
            hrefFor={isServerPaging ? pageHref : undefined}
            onPageChange={isServerPaging ? undefined : setClientPage}
          />
        </div>
      )}
    </div>
  );
}
