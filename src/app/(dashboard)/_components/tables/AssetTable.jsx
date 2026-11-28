"use client";
import { useMemo } from "react";
import DataTable from "@/components/table/DataTable";
import { DeleteAssetComponent } from "../DeleteAssetComponent";
import { EditAssetComponents } from "../EditAssetComponents";

// asset cells are shown as small bordered pills
const Pill = ({ className = "", children }) => (
  <div className={`border rounded-radiusUi px-3 py-1 text-center ${className}`}>{children}</div>
);

export function AssetTable({ data, totalRecord, userRole }) {
  const columns = useMemo(() => {
    const cols = [
      { accessorKey: "assetName", header: "Asset Name", cell: ({ getValue }) => <Pill>{getValue()}</Pill> },
      {
        accessorKey: "qty",
        header: "Qty",
        cell: ({ getValue }) => <Pill className={getValue() <= 0 ? "text-redUi" : ""}>{getValue()}</Pill>,
      },
      { accessorKey: "unit", header: "Unit", cell: ({ getValue }) => <Pill>{getValue()}</Pill> },
      { accessorKey: "createdAt", header: "Created At", cell: ({ getValue }) => <Pill>{getValue()}</Pill> },
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
