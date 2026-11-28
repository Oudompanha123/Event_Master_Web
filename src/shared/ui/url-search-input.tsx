"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/ui/kit/input";

type UrlSearchInputProps = {
  placeholder: string;
  /** accessible name, e.g. "Search members" */
  label: string;
  /** query-string key (default "query") */
  param?: string;
  className?: string;
};

/**
 * Search box that keeps its value in the URL (`?query=`), so server pages can read it.
 * Debounced (300 ms) and drops `?page=` so a new search starts on page 1.
 */
export function UrlSearchInput({ placeholder, label, param = "query", className }: UrlSearchInputProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const update = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (term) params.set(param, term);
    else params.delete(param);
    params.delete("page");
    const qs = params.toString();
    replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, 300);

  return (
    <div role="search" className={cn("relative w-full", className)}>
      <Search className="pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <Input
        type="search"
        aria-label={label}
        placeholder={placeholder}
        defaultValue={searchParams.get(param) ?? ""}
        onChange={(e) => update(e.target.value)}
        className="h-11 rounded-full bg-white pl-11"
      />
    </div>
  );
}
