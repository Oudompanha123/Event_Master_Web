import { ArrowLeft2 } from "iconsax-react"
import Link from "next/link"

export const RedirectBackComponent = ({link}) => {
    return (
        <Link href={link} className='flex font-medium bg-white border-2 shadow-xl my-8 border-slate-50 p-4 w-fit rounded-full cursor-pointer'>
            <ArrowLeft2 size="24" color="#222222" /> Go back to Home
        </Link>
    )
}