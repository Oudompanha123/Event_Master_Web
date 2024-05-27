import { Paperclip2 } from "iconsax-react"

export const AboutCardComponent = () => {
    return (
        <div className="space-y-5 p-6 rounded-3xl border-2 border-slate-50 bg-white z-20">
            <Paperclip2 size="40" color="#344054" variant="Bulk" />
            <h2 className="text-2xl font-semibold">Streamline Registration</h2>
            <p className="text-lg font-light">The software would offer a user-friendly,
                online registration system that eliminates
                the need for manual processing. Moreover,
                automated features like confirmation emails,
                waitlist management, and attendance tracking
                would help organizers stay on top of the registration
                process.
            </p>
        </div>
    )
}