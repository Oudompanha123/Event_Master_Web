'use client'

import { CategoryDeleteAction } from "./Action/CategoryDeleteAction";
import { CategoryEditAction } from "./Action/CategoryEditAction";
import { useEffect, useState } from "react";
import { getAllCategoryAction } from "@/actions/categoryAction";
import { RPaginate } from "./RPaginate";

export const OverviewTable = () => {
    const [data, setData] = useState();
    const [navigate, setNavigate] = useState();

    const getData = async () => {
        try {
            const data = await getAllCategoryAction(navigate);
            setData(data);
        } catch (err) {
            console.log(`something error while fetching ${err}`)
        }
    }

    const navigatePage = (page) => {
        console.log(`i trigger ${page}`)
        setNavigate(page + 1)
    }

    useEffect(() => {
        getData();
    }, [navigate])

    return (
        <div>
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
                    {data?.payload?.map((x, index) => {
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
                                        <CategoryEditAction cateId={x?.categoryId} name={x?.categoryName} />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="w-full flex justify-end mt-8">
                <RPaginate totalData={data?.totalRecord} func={navigatePage} />
            </div>
        </div>
    )
}