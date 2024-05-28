import { Calendar1 } from "iconsax-react"

export const OverviewCardComponent = () => {
    return (
        <div className={`space-y-7 p-4 bg-gradient-to-r from-[#7B61FF] to-[#8BB4FF] rounded-3xl text-white`}>
            <div className="flex items-center gap-4">
                <div className="p-2 rounded-full w-fit bg-white">
                    <Calendar1 size="32" color="#7B61FF" variant="Bulk" />
                </div>
                <p className="font-medium">Event Count</p>
            </div>
            <h2 className="font-bold text-3xl">128</h2>
        </div>
    )
}