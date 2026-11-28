"use client";
import { useMemo, type ReactNode } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Role } from "@/shared/types/auth";
import DataTable from "@/shared/ui/data-table/DataTable";
import { DeleteAssetComponent, EditAssetComponents } from "@/features/asset/manage";

// asset cells are shown as small bordered pills
export interface Asset {
  assetId: number;
  assetName: string;
  qty: number;
  unit: string;
  createdAt?: string;
}

interface AssetTableProps {
  data: Asset[] | undefined;
  totalRecord?: number;
  userRole?: Role | string;
}

const Pill = ({ className = "", children }: { className?: string; children: ReactNode }) => (
  <div className={`border rounded-radiusUi px-3 py-1 text-center ${className}`}>{children}</div>
);

export function AssetTable({ data, totalRecord, userRole }: AssetTableProps) {
  const columns = useMemo(() => {
    const cols: ColumnDef<Asset>[] = [
      { accessorKey: "assetName", header: "Asset Name", cell: ({ getValue }) => <Pill>{getValue<string>()}</Pill> },
      {
        accessorKey: "qty",
        header: "Qty",
        cell: ({ getValue }) => <Pill className={getValue<number>() <= 0 ? "text-redUi" : ""}>{getValue<number>()}</Pill>,
      },
      { accessorKey: "unit", header: "Unit", cell: ({ getValue }) => <Pill>{getValue<string>()}</Pill> },
      { accessorKey: "createdAt", header: "Created At", cell: ({ getValue }) => <Pill>{getValue<string>()}</Pill> },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => {
          const outOfStock = row.original.qty <= 0;
          return (
            <Pill className={outOfStock ? "bg-softRedUi" : "bg-softGreenUi"}>
              {outOfStock ? "Out of stock" : "In stock"}
            </Pill>
          );
        },
      },
    ];
    if (userRole !== "ROLE_USER") {
      cols.push({
        id: "action",
        header: "Action",
        meta: { headerClassName: "text-center" },
        cell: ({ row }) => (
          <div className="flex justify-center items-center gap-3">
            <DeleteAssetComponent assetIdprop={row.original.assetId} />
            <EditAssetComponents
              assetEdit={row.original.assetId}
              name={row.original.assetName}
              qty={row.original.qty}
              unit={row.original.unit}
            />
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
      getRowId={(row) => String(row.assetId)}
    />
  );
}
