"use client";
import { useMemo } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Role } from "@/types/auth";
import DataTable from "@/components/table/DataTable";
import { MemberComponent } from "../MemberProfileComponent";
import { MemberRoleComponent } from "../MemberRoleComponent";
import { DeleteMemberbutton } from "../DeleteMemberbutton";

export interface Member {
  memberId: number;
  memberName: string;
  gender?: string;
  email: string;
  address?: string;
  role: Role;
  picture?: string;
}

interface MemberTableProps {
  data: Member[] | undefined;
  totalRecord?: number;
  userRole?: Role | string;
  userId?: number;
}

export function MemberTable({ data, totalRecord, userRole, userId }: MemberTableProps) {
  const columns = useMemo(() => {
    const cols: ColumnDef<Member>[] = [
      {
        accessorKey: "memberName",
        header: "Name",
        meta: { className: "sm:w-48" },
        cell: ({ row }) => <MemberComponent memberInfo={row.original} />,
      },
      { accessorKey: "gender", header: "Gender", cell: ({ getValue }) => getValue<string>() || "No gender" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "address", header: "Address" },
      {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => (
          <MemberRoleComponent
            memberId={row.original.memberId}
            memberRoles={row.original.role} // role of the member in this row
            userRole={userRole} // role of the logged-in user
            userId={userId}
          />
        ),
      },
    ];
    // only admins can delete members
    if (userRole === "ROLE_ADMIN") {
      cols.push({
        id: "action",
        header: "Action",
        cell: ({ row }) => <DeleteMemberbutton member={row.original} />,
      });
    }
    return cols;
  }, [userRole, userId]);

  return (
    <DataTable
      columns={columns}
      data={data}
      totalRecord={totalRecord}
      getRowId={(row) => String(row.memberId)}
    />
  );
}
