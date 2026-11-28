"use client";

import { useState } from "react";
import { Label } from "@/shared/ui/kit/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/kit/select";

// "" shows the placeholder (also in the server HTML); picking "Any ..." goes back to it.
const ANY = "__any__";

/** Status filter for the landing search. Calls `func` with true (open), false (closed) or "" for any. */
export const SelectStatusLanding = ({ func }: { func: (value: boolean | "") => void }) => {
    const [value, setValue] = useState("");

    const change = (v: string) => {
        setValue(v === ANY ? "" : v);
        func(v === ANY ? "" : v === "open");
    };

    return (
        <div className="space-y-2">
            <Label htmlFor="search-status" className="font-semibold text-primary-text">Status</Label>
            <Select value={value} onValueChange={change}>
                <SelectTrigger id="search-status" className="h-12! w-full rounded-full bg-white px-4">
                    <SelectValue placeholder="Any status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value={ANY}>Any status</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};
