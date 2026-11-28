"use client";
import { UrlSearchInput } from "@/shared/ui/url-search-input";

export default function SearchAttendeeComponent({ className }: { className?: string }) {
  return <UrlSearchInput label="Search attendees" placeholder="Search by name or phone number" className={className} />;
}
