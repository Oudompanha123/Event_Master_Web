"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { buttonVariants } from "@/shared/ui/kit/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from "@/shared/ui/kit/pagination";

type Props = {
  /** 0-based */
  pageIndex: number;
  pageCount: number;
  /** server paging: each page is a link (keeps the URL shareable) */
  hrefFor?: (index: number) => string;
  /** client paging */
  onPageChange?: (index: number) => void;
};

/** Page numbers to show: first, last, and a window around the current page, with gaps as "…". */
export function pageWindow(current: number, count: number, siblings = 1): (number | "gap")[] {
  const pages = new Set([0, count - 1]);
  for (let i = current - siblings; i <= current + siblings; i++) if (i >= 0 && i < count) pages.add(i);
  const sorted = [...pages].sort((a, b) => a - b);
  const out: (number | "gap")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) out.push(p - sorted[i - 1] === 2 ? p - 1 : "gap");
    out.push(p);
  });
  return out;
}

/** shadcn Pagination, with Next links for server paging and buttons for client paging. */
export function DataTablePagination({ pageIndex, pageCount, hrefFor, onPageChange }: Props) {
  const item = (index: number, label: ReactNode, opts: { active?: boolean; disabled?: boolean; aria?: string; className?: string } = {}) => {
    const className = cn(
      buttonVariants({ variant: opts.active ? "default" : "ghost", size: typeof label === "number" ? "icon" : "default" }),
      "rounded-full",
      opts.disabled && "pointer-events-none opacity-50",
      opts.className,
    );
    const common = { "aria-label": opts.aria, "aria-current": opts.active ? ("page" as const) : undefined, className };
    if (opts.disabled) return <span aria-disabled="true" {...common}>{label}</span>;
    return hrefFor ? (
      <Link href={hrefFor(index)} scroll={false} {...common}>{label}</Link>
    ) : (
      <button type="button" onClick={() => onPageChange?.(index)} {...common}>{label}</button>
    );
  };

  return (
    <Pagination className="mx-0 w-auto">
      <PaginationContent>
        <PaginationItem>
          {item(pageIndex - 1, <><ChevronLeft aria-hidden="true" /><span className="hidden sm:inline">Prev</span></>, {
            disabled: pageIndex === 0,
            aria: "Go to previous page",
            className: "px-3",
          })}
        </PaginationItem>
        {pageWindow(pageIndex, pageCount).map((p, i) => (
          <PaginationItem key={p === "gap" ? `gap-${i}` : p}>
            {p === "gap" ? <PaginationEllipsis /> : item(p, p + 1, { active: p === pageIndex, aria: `Page ${p + 1}` })}
          </PaginationItem>
        ))}
        <PaginationItem>
          {item(pageIndex + 1, <><span className="hidden sm:inline">Next</span><ChevronRight aria-hidden="true" /></>, {
            disabled: pageIndex >= pageCount - 1,
            aria: "Go to next page",
            className: "px-3",
          })}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
