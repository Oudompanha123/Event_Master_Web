"use client";
import DataTable from "@/shared/ui/data-table/DataTable";
import { RegisterActionComponent } from "@/features/user-request/approve";

const columns = [
  { accessorKey: "memberName", header: "Name", meta: { className: "w-56" } },
  { accessorKey: "gender", header: "Gender", cell: ({ getValue }) => getValue() || "No gender" },
  { accessorKey: "phone", header: "Phone Number" },
  { accessorKey: "email", header: "Email" },
  {
    id: "action",
    header: "Action",
    meta: { headerClassName: "text-center" },
    cell: ({ row }) => (
      <div className="flex justify-center">
        <RegisterActionComponent memberId={row.original.memberId} />
      </div>
    ),
  },
];

export function UserRequestTable({ data, totalRecord }) {
  return (
    <DataTable
      columns={columns}
      data={data}
      totalRecord={totalRecord}
      getRowId={(row) => String(row.memberId)}
      emptyTitle="No user request"
      emptyDescription="New sign-up requests will show up here."
    />
  );
}
