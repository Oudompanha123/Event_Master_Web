"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type PaginationState,
  type RowData,
  type SortingState,
  type TableMeta,
  type Updater,
} from "@tanstack/react-table";

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
 * Shared table for the dashboard, built on TanStack Table (headless) and
 * styled like the existing EventMaster tables.
 *
 * Columns use the normal TanStack column-def format. Extra styling goes in
 * `meta`:
 *   { accessorKey: "email", header: "Email",
 *     meta: { className: "w-64", headerClassName: "text-center" } }
 *
 * Pagination
 *   - Server side (default when `totalRecord` is given): the page lives in the
 *     URL as `?page=N` (1-based), like the old RPaginate. Other query params,
 *     e.g. `?query=`, are kept when the page changes.
 *   - Client side: leave out `totalRecord` and the table pages `data` itself.
 *   - `paginate={false}` turns pagination off.
 *
 * @param {object}   props
 * @param {Array}    props.columns            TanStack column defs
 * @param {Array}    props.data               rows for the current page
 * @param {number}  [props.totalRecord]       total rows on the server (server-side paging)
 * @param {number}  [props.pageSize=8]
 * @param {boolean} [props.paginate=true]
 * @param {boolean} [props.showIndex=true]    adds the "NO" column, offset by page
 * @param {boolean} [props.enableSorting=false] click headers to sort the rows shown
 * @param {Function}[props.getRowId]          stable row key, e.g. row => row.memberId
 * @param {string}  [props.emptyTitle]
 * @param {string}  [props.emptyDescription]
 * @param {string}  [props.emptyImage]
 * @param {string}  [props.minWidth="640px"]  table min width before it scrolls sideways
 * @param {string}  [props.rowClassName]      extra classes for every body row
 * @param {string}  [props.headerClassName]   classes for <thead> (replaces the default look)
 * @param {string}  [props.cellClassName]     padding/text classes for every <td> and <th>
 * @param {string}  [props.containerClassName] extra classes for the scroll container
 * @param {object}  [props.meta]              TanStack table meta, readable in cells as
 *                                            `table.options.meta` (e.g. edit state)
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
  rowClassName = "",
  headerClassName = "h-14 shadow-soft text-primary-text bg-white uppercase",
  cellClassName = "px-5 py-2 text-xs xl:text-base",
  containerClassName = "",
  meta,
}: DataTableProps<TData>) {
  const router = useRouter();
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
        meta: { className: "w-16" },
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
    state: {
      sorting,
      pagination: { pageIndex, pageSize },
    },
    enableSorting,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    manualPagination: !paginate || isServerPaging,
    getPaginationRowModel: paginate && !isServerPaging ? getPaginationRowModel() : undefined,
    pageCount: isServerPaging ? Math.ceil(totalRecord / pageSize) : undefined,
    onPaginationChange: (updater: Updater<PaginationState>) => {
      const next = typeof updater === "function" ? updater({ pageIndex, pageSize }) : updater;
      goToPage(next.pageIndex);
    },
  });

  function goToPage(index: number) {
    if (!isServerPaging) {
      setClientPage(index);
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(index + 1));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const pageCount = table.getPageCount();
  const visibleRows = table.getRowModel().rows;
  const isEmpty = rows.length === 0;
  const lastColumn = table.getVisibleLeafColumns().length - 1;

  // round the outer corners of the first and last cell so each row is a pill
  const edge = (index) =>
    index === 0 ? "rounded-l-radiusUi" : index === lastColumn ? "rounded-r-radiusUi" : "";

  return (
    <div className="flex flex-col w-full">
      <div className={`w-full overflow-x-auto ${containerClassName}`}>
        <table
          className="w-full px-1 border-separate border-spacing-y-3 text-left"
          style={{ minWidth }}
        >
          <thead className={headerClassName}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="text-xs lg:text-base">
                {headerGroup.headers.map((header, index) => {
                  const canSort = header.column.getCanSort();
                  const sorted = header.column.getIsSorted();
                  return (
                    <th
                      key={header.id}
                      scope="col"
                      className={`${cellClassName} font-medium ${edge(index)} ${
                        header.column.columnDef.meta?.headerClassName ?? ""
                      } ${canSort ? "cursor-pointer select-none" : ""}`}
                      onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                      aria-sort={sorted === "asc" ? "ascending" : sorted === "desc" ? "descending" : undefined}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                      {sorted === "asc" && " ▲"}
                      {sorted === "desc" && " ▼"}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {visibleRows.map((row) => (
              <tr
                key={row.id}
                className={`h-14 shadow-soft text-primary-text odd:bg-softwhiteUi even:bg-white ${rowClassName}`}
              >
                {row.getVisibleCells().map((cell, index) => (
                  <td
                    key={cell.id}
                    className={`${cellClassName} ${edge(index)} ${
                      cell.column.columnDef.meta?.className ?? ""
                    }`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEmpty && (
        <div className="justify-center min-h-[40vh] w-full space-y-2 pb-10 flex flex-col items-center">
          <Image src={emptyImage} alt="" width={180} height={180} priority />
          <p className="text-center text-2xl font-semibold text-primary-text">{emptyTitle}</p>
          {emptyDescription && (
            <p className="text-center text-xl text-gray-500">{emptyDescription}</p>
          )}
        </div>
      )}

      {paginate && !isEmpty && pageCount > 1 && (
        <div className="w-full flex justify-end mt-8 mb-8">
          <ReactPaginate
            containerClassName="pagination"
            activeClassName="active"
            pageClassName="page-item"
            breakLabel="..."
            previousLabel="Prev"
            nextLabel="Next"
            pageCount={pageCount}
            forcePage={Math.min(pageIndex, pageCount - 1)}
            onPageChange={({ selected }) => table.setPageIndex(selected)}
          />
        </div>
      )}
    </div>
  );
}
