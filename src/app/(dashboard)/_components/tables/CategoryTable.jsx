"use client";
import { useMemo } from "react";
import DataTable from "@/components/table/DataTable";
import { CategoryDeleteAction } from "../Action/CategoryDeleteAction";
import { CategoryEditAction } from "../Action/CategoryEditAction";

const formatDate = (value) =>
  value
    ? new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "-";

export function CategoryTable({ data, totalRecord, userRole }) {
  const columns = useMemo(() => {
    const cols = [
      { accessorKey: "categoryName", header: "Name" },
      { accessorKey: "createAt", header: "Created At", cell: ({ getValue }) => formatDate(getValue()) },
      { accessorKey: "createBy", header: "Created By" },
    ];
    if (userRole !== "ROLE_USER") {
      cols.push({
        id: "action",
        header: "Action",
        cell: ({ row }) => (
          <div className="flex items-center gap-2 lg:gap-4">
            <CategoryDeleteAction cateId={row.original.categoryId} />
            <CategoryEditAction cateId={row.original.categoryId} name={row.original.categoryName} />
          </div>
        ),
      });
    }
    return cols;
  }, [userRole]);

  return (
    <DataTable
      columns={columns}
      data={data}
      totalRecord={totalRecord}
      getRowId={(row) => String(row.categoryId)}
      emptyTitle="No category yet"
      emptyDescription="Create a category to group your events."
    />
  );
}
