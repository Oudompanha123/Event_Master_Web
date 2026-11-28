"use client";
import { UrlSearchInput } from "@/shared/ui/url-search-input";

export const SearchMemberComponent = ({ className }: { className?: string }) => (
  <UrlSearchInput label="Search members" placeholder="Search by name" className={className} />
);
