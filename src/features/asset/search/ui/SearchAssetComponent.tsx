"use client";
import { UrlSearchInput } from "@/shared/ui/url-search-input";

export const SearchAssetComponent = ({ className }: { className?: string }) => (
  <UrlSearchInput label="Search assets" placeholder="Search by asset name" className={className} />
);
