import Image from "next/image"
import logo from "../../public/images/event-master-logo.png"
import { AddSquare, Notification } from "iconsax-react"

export const NavbarComponent = ({className}) => {
    return (
        <div className={`${className} flex justify-between items-center py-6 px-14 border-b-[1px]`}>
            <h2 className="text-2xl">
                Overview
            </h2>
            <div className="space-x-10 flex items-center">
                <div className="bg-[#F7F9FB] p-3.5 rounded-full">
                    <Notification size="24" color="#344054" variant="Bulk" />
                </div>
                <div className="flex bg-[#F7F9FB] w-[157px] gap-2 p-4 rounded-md">
                    <AddSquare size="24" color="#344054" variant="Bulk" />
                    <p>New Event</p>
                </div>
                <div className="flex gap-4">
                    <div>
                        <p className="font-medium text-lg">Thomas Brown</p>
                        <p>ThomasNikola@gmail.com</p>
                    </div>
                    <Image src={logo} height={48} width={48} />
                </div>
            </div>
        </div>
    )
}