"use client";

import { useEffect, useState } from "react";
import { getAllCategoryLandingAction } from "@/entities/event/api/landingAction";
import { Label } from "@/shared/ui/kit/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/kit/select";

// "" shows the placeholder (also in the server HTML); picking "Any ..." goes back to it.
const ANY = "__any__";

/** Category filter for the landing search. Calls `func` with the category name, or "" for any. */
export const SelectDropdownLanding = ({ func }: { func: (value: string) => void; height?: string; label?: string }) => {
    const [options, setOptions] = useState<string[]>([]);
    const [value, setValue] = useState("");

    useEffect(() => {
        getAllCategoryLandingAction().then((res) => setOptions(Array.isArray(res?.payload) ? res.payload : []));
    }, []);

    const change = (v: string) => {
        setValue(v === ANY ? "" : v);
        func(v === ANY ? "" : v);
    };

    return (
        <div className="space-y-2">
            <Label htmlFor="search-category" className="font-semibold text-primary-text">Event Category</Label>
            <Select value={value} onValueChange={change}>
                <SelectTrigger id="search-category" className="h-12! w-full rounded-full bg-white px-4">
                    <SelectValue placeholder="Any category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value={ANY}>Any category</SelectItem>
                    {options.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};
