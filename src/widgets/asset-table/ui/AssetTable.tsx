"use client";
import { useMemo } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Role } from "@/shared/types/auth";
import DataTable from "@/shared/ui/data-table/DataTable";
import { DeleteAssetComponent, EditAssetComponents } from "@/features/asset/manage";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/kit/badge";

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

export function AssetTable({ data, totalRecord, userRole }: AssetTableProps) {
  const columns = useMemo(() => {
    const cols: ColumnDef<Asset>[] = [
      { accessorKey: "assetName", header: "Asset Name", meta: { className: "font-medium" } },
      {
        accessorKey: "qty",
        header: "Qty",
        meta: { className: "tabular-nums" },
        cell: ({ getValue }) => <span className={getValue<number>() <= 0 ? "font-medium text-red-ui" : ""}>{getValue<number>()}</span>,
      },
      { accessorKey: "unit", header: "Unit" },
      { accessorKey: "createdAt", header: "Created At", meta: { className: "text-muted-foreground" } },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => {
          const outOfStock = row.original.qty <= 0;
          return (
            <Badge
              variant="outline"
              className={cn("rounded-full border-0 px-2.5", outOfStock ? "bg-soft-red-ui text-red-ui" : "bg-soft-green-ui text-green-ui")}
            >
              {outOfStock ? "Out of stock" : "In stock"}
            </Badge>
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
