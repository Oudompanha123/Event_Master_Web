export const AgendaComponent = ({ time, title, description }) => {
    return (
        <div className="flex rounded-3xl border-2 border-slate-50 p-5 odd:bg-softwhiteUi even:bg-white">
            <div className="px-4">
                <div className="w-1 bg-green-500 h-full"></div>
            </div>
            <div className="space-y-4 w-full">
                <p className="font-light">3:00 PM - 4:00 PM</p>
                <p className="font-medium text-xl">Guest Registeration</p>
                {description &&
                    <div>
                        <hr />
                        <p className="w-2/3 font-light">
                            Fun game & activity booths all around,food & drinks on offer,live Dj,test rides,Vespa club
                            Cambodia signup & Card collection
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}