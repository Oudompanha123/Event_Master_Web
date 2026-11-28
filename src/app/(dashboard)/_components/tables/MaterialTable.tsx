"use client";
import { useMemo, useState, type KeyboardEvent } from "react";
import type { ColumnDef, Table } from "@tanstack/react-table";
import { FaAngleDown } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Edit } from "@/components/icons";
import { toast } from "react-toastify";
import DataTable from "@/components/table/DataTable";
import Dropdown from "../DropdownSupporterComponent";
import { MaterialActionButton } from "../MaterialActionButtton";
import {
  UpdateMaterialService,
  UpdateMaterialStatusService,
} from "@/services/dashboard/materialService";

export type MaterialStatus = "Pending" | "OnGoing" | "Done" | "Issue";

const STATUSES: MaterialStatus[] = ["Pending", "OnGoing", "Done", "Issue"];
const STATUS_COLORS: Record<MaterialStatus, string> = {
  Pending: "#FBBC04",
  OnGoing: "#551FFF",
  Done: "#038446",
  Issue: "#D72222",
};

export interface Supporter {
  id: number;
  name: string;
  avatar?: string;
}

/** supporters as stored by the API: `{ data: [...] }` */
export interface SupporterSelection {
  data: Supporter[];
}

/**
 * Fields of a saved material (from the API) and of a new, unsaved row
 * (from MaterialComponent). Saved rows use `materialId`/`handlerId`/
 * `supporters`; new rows use `id`/`handler`/`supporterIds`.
 */
export interface MaterialFields {
  materialId?: number;
  id?: string;
  materialName?: string;
  inputValue?: string;
  qty?: number | string;
  unit?: string;
  assignDate?: string;
  dueDate?: string;
  handlerId?: number | string;
  handler?: string;
  handlerName?: string;
  picture?: string;
  supporters?: SupporterSelection | string | null;
  supporterIds?: SupporterSelection;
  status?: MaterialStatus;
  remark?: string;
  eventId?: number | string;
}

/** a row of the table: material fields plus bookkeeping */
export interface MaterialRow extends MaterialFields {
  _key: string;
  _isNew: boolean;
  _newIndex?: number;
}

export type MaterialFieldErrors = Partial<Record<"materialName" | "name" | "qty" | "unit" | "dueDate", string>>;

interface Member {
  memberId: number;
  memberName: string;
}

interface Asset {
  assetName: string;
}

/** edit state and callbacks handed to the cells through `table.options.meta` */
interface MaterialTableMeta {
  userRole?: string;
  userId?: number;
  memberData?: Member[];
  assets?: Asset[];
  checkedRows: Array<number | string>;
  onToggleChecked: (id: number | string) => void;
  selectAllChecked?: boolean;
  onSelectAll?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openStatus: string | null;
  setOpenStatus: (key: string | null) => void;
  onChanged?: () => void;
  valuesOf: (row: MaterialRow) => MaterialFields;
  isEditing: (row: MaterialRow) => boolean;
  canEditFields: (row: MaterialRow) => boolean;
  errorsOf: (row: MaterialRow) => MaterialFieldErrors;
  setField: (row: MaterialRow, patch: Partial<MaterialFields>) => void;
  startEdit: (row: MaterialRow) => void;
  cancelEdit: (row: MaterialRow) => void;
  saveEdit: (row: MaterialRow) => Promise<void>;
  removeNewRow: (id: string) => void;
}

// DataTable passes our meta through untouched, so this cast is safe
const metaOf = (table: Table<MaterialRow>) => table.options.meta as MaterialTableMeta;

const inputClass = (hasError: unknown, extra = "") =>
  `border text-primary-text text-base px-2 h-10 rounded-xl font-normal focus:outline-none ${extra} ${
    hasError ? "border-red-600 shake-animation" : ""
  }`;

// allow only digits, one dot and editing keys in quantity inputs
const numericKeysOnly = (e: KeyboardEvent<HTMLInputElement>) => {
  const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "."];
  if (!(e.key >= "0" && e.key <= "9") && !allowed.includes(e.key)) e.preventDefault();
};

const toast$ = {
  ok: (m: string) => toast.success(m, { position: "top-center" }),
  err: (m: string) => toast.error(m, { position: "top-center" }),
};

function validateMaterial(item: MaterialFields, endDate?: string): MaterialFieldErrors {
  const errors: MaterialFieldErrors = {};
  const today = new Date().toISOString().split("T")[0];
  if (!item.materialName) errors.materialName = "Name is required";
  if (!item.qty) errors.qty = "Quantity is required";
  else if (isNaN(Number(item.qty)) || Number(item.qty) <= 0) errors.qty = "Quantity must be greater than 0";
  if (!item.unit) errors.unit = "Unit is required";
  if (!item.dueDate) errors.dueDate = "Due date is required.";
  else if (endDate && item.dueDate > endDate) errors.dueDate = `Due date must be before ${endDate}.`;
  else if (item.dueDate < today) errors.dueDate = "Due date cannot be in the past.";
  return errors;
}

/** item-name input with suggestions from the asset list */
interface AssetNameInputProps {
  value?: string;
  onChange: (value: string) => void;
  readOnly: boolean;
  hasError: unknown;
  assets?: Asset[];
}

function AssetNameInput({ value, onChange, readOnly, hasError, assets }: AssetNameInputProps) {
  const [focused, setFocused] = useState(false);
  const suggestions = useMemo(() => {
    if (!value || readOnly) return [];
    const q = value.toLowerCase();
    return (assets ?? [])
      .map((a) => a.assetName)
      .filter((name) => name?.toLowerCase().includes(q) && name !== value)
      .slice(0, 20);
  }, [value, readOnly, assets]);

  return (
    <div className="relative w-32">
      <input
        type="text"
        className={inputClass(hasError, "w-full")}
        value={value ?? ""}
        readOnly={readOnly}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        // delay so a click on a suggestion lands before the list closes
        onBlur={() => setTimeout(() => setFocused(false), 120)}
      />
      {focused && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full max-h-[150px] overflow-y-auto bg-white shadow-lg rounded-b-xl">
          {suggestions.map((name) => (
            <li
              key={name}
              className="px-3 py-2 cursor-pointer text-black hover:bg-gray-100"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onChange(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** status pill with a dropdown when editable */
interface StatusCellProps {
  status?: MaterialStatus;
  editable: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onChange: (status: MaterialStatus) => void;
}

function StatusCell({ status, editable, isOpen, onToggle, onChange }: StatusCellProps) {
  return (
    <div className="relative bg-white p-[7px] border rounded-xl w-28">
      <button
        type="button"
        className={`flex items-center ${editable ? "cursor-pointer" : "cursor-default"}`}
        onClick={() => editable && onToggle()}
      >
        <span
          className="flex px-1 py-1 w-16 text-xs font-semibold justify-center rounded-full text-white"
          style={{ backgroundColor: STATUS_COLORS[status] ?? "#000" }}
        >
          {status}
        </span>
        {editable && <FaAngleDown className="ml-2" />}
      </button>
      {editable && isOpen && (
        <div className="absolute left-0 z-50 mt-1 w-[130px] bg-white border border-gray-300 rounded-lg shadow-lg">
          {STATUSES.map((option) => (
            <div
              key={option}
              className="px-4 py-3 cursor-pointer hover:bg-gray-200"
              onClick={() => onChange(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface MaterialTableProps {
  savedRows?: MaterialFields[] | null;
  newRows?: MaterialFields[];
  newRowErrors?: MaterialFieldErrors[];
  updateNewRow: (rowId: string, patch: Partial<MaterialFields>) => void;
  removeNewRow: (rowId: string) => void;
  checkedRows: Array<number | string>;
  onToggleChecked: (id: number | string) => void;
  selectAllChecked: boolean;
  onSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  memberData?: Member[];
  assets?: Asset[];
  eventId?: number | string;
  userRole?: string;
  userId?: number;
  endDate?: string;
  onChanged?: () => void;
  isSearching?: boolean;
}

/**
 * Material table: saved materials and new (unsaved) rows in one TanStack table.
 *
 * New rows live in the parent (MaterialComponent), which saves them in bulk.
 * Editing a saved row is handled here: its draft, errors and edit mode are
 * kept per row key and handed to the cells through `table.options.meta`, so
 * the column definitions never change and inputs keep focus while typing.
 */
export function MaterialTable({
  savedRows,
  newRows,
  newRowErrors,
  updateNewRow,
  removeNewRow,
  checkedRows,
  onToggleChecked,
  selectAllChecked,
  onSelectAll,
  memberData,
  assets,
  eventId,
  userRole,
  userId,
  endDate,
  onChanged,
  isSearching,
}: MaterialTableProps) {
  const [editing, setEditing] = useState<Record<string, MaterialFields>>({}); // key -> draft of a saved row in edit mode
  const [editErrors, setEditErrors] = useState<Record<string, MaterialFieldErrors>>({}); // key -> field errors
  const [openStatus, setOpenStatus] = useState<string | null>(null); // key of the open status dropdown

  const data = useMemo<MaterialRow[]>(
    () => [
      ...(savedRows ?? []).map((m) => ({ ...m, _key: `m_${m.materialId}`, _isNew: false })),
      ...(newRows ?? []).map((r, i) => ({ ...r, _key: r.id, _isNew: true, _newIndex: i })),
    ],
    [savedRows, newRows]
  );

  const meta: MaterialTableMeta = {
    userRole,
    userId,
    memberData,
    assets,
    checkedRows,
    onToggleChecked,
    openStatus,
    setOpenStatus,
    onChanged,

    // current values shown in a row: its draft while editing, otherwise the row itself
    valuesOf: (row) => (row._isNew ? row : editing[row._key] ?? row),
    isEditing: (row) => row._isNew || Boolean(editing[row._key]),
    // a plain user who handles the material may only change its status
    canEditFields: (row) =>
      row._isNew ||
      (Boolean(editing[row._key]) &&
        !(userRole === "ROLE_USER" && Number(row.handlerId) === Number(userId))),
    errorsOf: (row) =>
      row._isNew ? newRowErrors?.[row._newIndex] ?? {} : editErrors[row._key] ?? {},

    setField: (row, patch) => {
      if (row._isNew) updateNewRow(row.id, patch);
      else setEditing((prev) => ({ ...prev, [row._key]: { ...prev[row._key], ...patch } }));
    },
    startEdit: (row) =>
      setEditing((prev) => ({ ...prev, [row._key]: { ...row, eventId } })),
    cancelEdit: (row) => {
      setEditing(({ [row._key]: _, ...rest }) => rest);
      setEditErrors(({ [row._key]: _, ...rest }) => rest);
      onChanged?.();
    },
    saveEdit: async (row) => {
      const draft = editing[row._key];
      const errors = validateMaterial(draft, endDate);
      setEditErrors((prev) => ({ ...prev, [row._key]: errors }));
      if (Object.keys(errors).length > 0) {
        toast$.err("Please input fields correctly before submitting!");
        return;
      }
      try {
        if (userRole === "ROLE_USER" && Number(draft.handlerId) === Number(userId)) {
          await UpdateMaterialStatusService(draft.status, draft.materialId);
        } else {
          await UpdateMaterialService(draft, draft.materialId);
        }
        toast$.ok("Material updated successfully!");
        setEditing(({ [row._key]: _, ...rest }) => rest);
        onChanged?.();
      } catch (err) {
        console.error("Update material failed:", err);
        toast$.err("Error updating material!");
      }
    },
    removeNewRow,
  };

  // column defs are created once; everything that changes is read from meta
  const columns = useMemo(() => {
    const cols: ColumnDef<MaterialRow>[] = [];
    if (userRole !== "ROLE_USER") {
      cols.push({
        id: "select",
        header: ({ table }) => (
          <input
            type="checkbox"
            aria-label="Select all"
            className="w-4 h-4 align-middle"
            checked={metaOf(table).selectAllChecked}
            onChange={metaOf(table).onSelectAll}
          />
        ),
        meta: { className: "w-4", headerClassName: "w-4" },
        cell: ({ row, table }) => {
          const id = row.original._isNew ? row.original.id : row.original.materialId;
          return (
            <input
              type="checkbox"
              aria-label="Select row"
              className="w-4 h-4 align-middle"
              checked={metaOf(table).checkedRows.includes(id)}
              onChange={() => metaOf(table).onToggleChecked(id)}
            />
          );
        },
      });
    }

    cols.push(
      { id: "no", header: "No", cell: ({ row }) => row.index + 1 },
      {
        id: "materialName",
        header: "Item Name",
        cell: ({ row, table }) => {
          const m = metaOf(table);
          const v = m.valuesOf(row.original);
          return (
            <AssetNameInput
              value={v.materialName}
              readOnly={!m.canEditFields(row.original)}
              hasError={m.errorsOf(row.original).materialName || m.errorsOf(row.original).name}
              assets={m.assets}
              onChange={(value) => m.setField(row.original, { materialName: value, inputValue: value })}
            />
          );
        },
      },
      {
        id: "qty",
        header: "Qty",
        cell: ({ row, table }) => {
          const m = metaOf(table);
          return (
            <input
              type="text"
              inputMode="decimal"
              className={inputClass(m.errorsOf(row.original).qty, "w-20")}
              value={m.valuesOf(row.original).qty ?? ""}
              readOnly={!m.canEditFields(row.original)}
              onKeyDown={numericKeysOnly}
              onChange={(e) => !isNaN(Number(e.target.value)) && m.setField(row.original, { qty: e.target.value })}
            />
          );
        },
      },
      {
        id: "unit",
        header: "Unit",
        cell: ({ row, table }) => {
          const m = metaOf(table);
          return (
            <input
              type="text"
              className={inputClass(m.errorsOf(row.original).unit, "w-24")}
              value={m.valuesOf(row.original).unit ?? ""}
              readOnly={!m.canEditFields(row.original)}
              onChange={(e) => m.setField(row.original, { unit: e.target.value })}
            />
          );
        },
      },
      {
        id: "dueDate",
        header: "Due Date",
        cell: ({ row, table }) => {
          const m = metaOf(table);
          return (
            <input
              type="date"
              className={inputClass(m.errorsOf(row.original).dueDate, "text-sm text-gray-900")}
              value={m.valuesOf(row.original).dueDate ?? ""}
              readOnly={!m.canEditFields(row.original)}
              onChange={(e) => m.setField(row.original, { dueDate: e.target.value })}
            />
          );
        },
      },
      {
        id: "handler",
        header: "Handler",
        cell: ({ row, table }) => {
          const m = metaOf(table);
          const editable = m.canEditFields(row.original);
          const v = m.valuesOf(row.original);
          // new rows keep the handler in `handler`, saved rows in `handlerId`
          const value = row.original._isNew ? v.handler : v.handlerId;
          return (
            <select
              className={`border text-black text-sm rounded-xl block w-28 p-2.5 focus:outline-none ${
                editable ? "" : "appearance-none"
              }`}
              value={value ?? ""}
              disabled={!editable}
              onChange={(e) =>
                m.setField(row.original, row.original._isNew ? { handler: e.target.value } : { handlerId: e.target.value })
              }
            >
              <option value=""></option>
              {m.memberData?.map((member) => (
                <option key={member.memberId} value={member.memberId}>
                  {member.memberName}
                </option>
              ))}
            </select>
          );
        },
      },
      {
        id: "supporters",
        header: "Supporters",
        cell: ({ row, table }) => {
          const m = metaOf(table);
          const isNew = row.original._isNew;
          return (
            <Dropdown
              selectedSupporters={isNew ? row.original.supporterIds : m.valuesOf(row.original).supporters}
              readOnly={!m.canEditFields(row.original)}
              onSupporterChange={(value) =>
                m.setField(row.original, isNew ? { supporterIds: value } : { supporters: value })
              }
            />
          );
        },
      },
      {
        id: "status",
        header: "Status",
        cell: ({ row, table }) => {
          const m = metaOf(table);
          const key = row.original._key;
          return (
            <StatusCell
              status={m.valuesOf(row.original).status}
              editable={m.isEditing(row.original)}
              isOpen={m.openStatus === key}
              onToggle={() => m.setOpenStatus(m.openStatus === key ? null : key)}
              onChange={(status) => {
                m.setField(row.original, { status });
                m.setOpenStatus(null);
              }}
            />
          );
        },
      },
      {
        id: "action",
        header: "Action",
        cell: ({ row, table }) => {
          const m = metaOf(table);
          const r = row.original;
          if (r._isNew) {
            return (
              <button type="button" aria-label="Remove row" onClick={() => m.removeNewRow(r.id)}>
                <CiCircleRemove color="red" className="w-6 h-6" />
              </button>
            );
          }
          if (m.isEditing(r)) {
            return (
              <div className="flex gap-2">
                <Edit className="cursor-pointer" size="24" color="#16AE65" onClick={() => m.saveEdit(r)} />
                <IoCloseCircleOutline className="cursor-pointer" size="24" color="red" onClick={() => m.cancelEdit(r)} />
              </div>
            );
          }
          return (
            <MaterialActionButton
              data={r}
              onEdit={() => m.startEdit(r)}
              userRole={m.userRole}
              handler={r.handlerId}
              userId={m.userId}
              onDeleted={m.onChanged}
            />
          );
        },
      }
    );
    return cols;
  }, [userRole]);

  return (
    <DataTable
      columns={columns}
      data={data}
      meta={{ ...meta, selectAllChecked, onSelectAll }}
      getRowId={(row) => row._key}
      paginate={false}
      showIndex={false}
      minWidth="1100px"
      containerClassName="min-h-[500px] pb-40"
      headerClassName="h-14 drop-shadow text-primary-text bg-[#F0F1F3] uppercase text-sm"
      cellClassName="px-2 py-2 text-sm"
      rowClassName="hover:bg-gray-50"
      emptyTitle={isSearching ? "No results found" : "You don’t have any material!"}
      emptyDescription={isSearching ? "Please try another search!" : "Please create material for your event!"}
      emptyImage={isSearching ? "/images/Search.gif" : "/images/empty-amico.png"}
    />
  );
}
