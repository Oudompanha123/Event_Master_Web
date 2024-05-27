import Link from "next/link"


export const FooterComponent = () => {
    return (
        <footer className="space-y-6 pt-32 pb-16 container">
            <h2 className="font-extrabold text-3xl">EventMaster</h2>
            <p className="font-light w-1/3">EventMaster is a comprehensive, user-friendly event management system that streamlines every aspect of event planning and execution.</p>
            <div className="flex gap-10">
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
            </div>
            <hr />
            <div className="flex justify-between">
                <p className="font-light">@Copyright 2024 EventMaster</p>
                <div className="flex">
                    <p>facebook</p>
                    <p>google</p>
                </div>
            </div>
        </footer>
    )
}