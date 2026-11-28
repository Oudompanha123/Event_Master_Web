"use client";
import { useMemo } from "react";
import DataTable from "@/shared/ui/data-table/DataTable";
import { DeleteAttendeeComponent } from "@/features/attendee/delete";

// attendee columns come from each event's registration form, so they are
// built at runtime; the name field is always moved to the front
const reorderFields = (fields) => {
  const nameField = ["name", "fullname"].find((field) => fields.includes(field));
  return nameField ? [nameField, ...fields.filter((field) => field !== nameField)] : fields;
};

export function AttendeeTable({ data, totalRecord, header = [], userRole, isSearch }) {
  const columns = useMemo(() => {
    const fields = reorderFields(header.length ? header : Object.keys(data?.[0]?.data ?? {}));
    const cols = fields.map((field) => ({
      id: field,
      header: field,
      accessorFn: (row) => row?.data?.[field],
      cell: ({ getValue }) => getValue() ?? "-",
    }));
    if (userRole !== "ROLE_USER") {
      cols.push({
        id: "action",
        header: "Action",
        cell: ({ row }) => (
          <DeleteAttendeeComponent attendeeId={row.original.attendeeId} userRole={userRole} />
        ),
      });
    }
    return cols;
  }, [header, data, userRole]);

  return (
    <DataTable
      columns={columns}
      data={data}
      totalRecord={totalRecord}
      getRowId={(row) => String(row.attendeeId)}
      minWidth={columns.length > 6 ? "960px" : "640px"}
      emptyTitle={isSearch ? "No results found" : "No attendees found for this event"}
      emptyDescription={isSearch ? "Please try another search!" : ""}
      emptyImage="/images/Search.gif"
    />
  );
}
