'use client'

import { MegaImage } from "@/components/MegaImage"
import { ToogleBtn } from "../_components/Action/ToogleBtn"
import { Pagination } from "../_components/paginate/Pagination"

const Page = () => {
    return (
        <div className="h-full w-full">
            <ToogleBtn />
            <Pagination />
            <div className="!w-[500px] !h-[300px] relative object-cover">
                <MegaImage src={"https://firebasestorage.googleapis.com/v0/b/cloud-storage-next-8e2cc.appspot.com/o/joe-neric-HHunRG19kF8-unsplash.jpg?alt=media&token=1059d7c6-69b2-4fd9-9bc0-f19a19196411"} />
            </div>
        </div>

    )
}

export default Page