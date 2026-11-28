import { MegaImage } from "@/shared/ui/MegaImage"
import { ToogleBtn } from "@/shared/ui/ToogleBtn"
import { Pagination } from "@/shared/ui/Pagination"
import { ToastContainer } from "react-toastify"

const Page = () => {
    return (
        <div className="h-full w-full">
            {/* playground toggle: nothing to save, so the change handler is a no-op */}
            <ToogleBtn func={() => {}} isPost={false} />
            <Pagination />
            <div className="w-[500px]! h-[300px]! relative object-cover">
                {/* <MegaImage src={"https://firebasestorage.googleapis.com/v0/b/cloud-storage-next-8e2cc.appspot.com/o/joe-neric-HHunRG19kF8-unsplash.jpg?alt=media&token=1059d7c6-69b2-4fd9-9bc0-f19a19196411"} /> */}
                <MegaImage
                    className=""
                    src={'https://firebasestorage.googleapis.com/v0/b/cloud-storage-next-8e2cc.appspot.com/o/paolo-feser-d6UCfbY3zMc-unsplash.jpg?alt=media&token=9624e26d-387d-4aa2-a802-f4065464745f'}
                />
            </div>
            <ToastContainer autoClose={2000} />
        </div>

    )
}

export default Page