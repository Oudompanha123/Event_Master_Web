'use client'

import { CategoryDeleteAction } from "./Action/CategoryDeleteAction";
import { CategoryEditAction } from "./Action/CategoryEditAction";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";

export const OverviewTable = ({allCategory}) => {
    const [data, setData] = useState();
    useEffect(() => {
        
        
    }, [])
    return (
        <table className="table w-full px-1 border-separate border-spacing-y-3">
            <thead className="h-14 shadow-soft text-primary-text rounded-radiusUi bg-[#FFFFFF] uppercase">
                <tr className="text-xs lg:text-base">
                    <th className="px-5 py-2 font-medium rounded-l-radiusUi">No</th>
                    <th className="px-5 py-2 font-medium">Name</th>
                    <th className="px-5 py-2 font-medium">Created At</th>
                    <th className="px-5 py-2 font-medium">Created By</th>
                    <th className="px-5 py-2 font-medium rounded-r-radiusUi">Action</th>
                </tr>
            </thead>
            <tbody>
                {allCategory.payload.map((x, index) => {
                    const formatDate = dateString => new Date(dateString).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
                    const inputDate = x.createAt;
                    const formattedDate = formatDate(inputDate);
                    const formated = formattedDate;
                    return (
                        <tr key={x.categoryId} className={`h-14 shadow-soft rounded-radiusUi odd:bg-softwhiteUi even:bg-white text-primary-text`}>
                            <td className="px-5 py-2 text-xs xl:text-base rounded-l-radiusUi">{index + 1}</td>
                            <td className="px-5 py-2 text-xs xl:text-base">{x?.categoryName}</td>
                            <td className="px-5 py-2 text-xs xl:text-base">{formated}</td>
                            <td className="px-5 py-2 text-xs xl:text-base">{x?.createBy}</td>
                            <td className="px-5 py-2 text-xs xl:text-base rounded-r-radiusUi">
                                <div className="flex items-center gap-2 lg:gap-4">
                                    <CategoryDeleteAction cateId={x?.categoryId} />
                                    <CategoryEditAction cateId={x?.categoryId} />
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}