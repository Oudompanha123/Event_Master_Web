import Image from "next/image";
import VerifyRegisterComponent from "@/features/auth/verify-register/ui/VerifyRegisterComponent";

const VerifyRegisterPage = async (props) => {
    const searchParams = await props.searchParams;
    const email = searchParams?.email ?? "";
    return (
        <main className="flex min-h-dvh items-center justify-center bg-primary-purple p-4 sm:p-8">
            <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg">
                {/* the SVG draws its own card ~9px inside its canvas: overhang so that edge is clipped */}
                <div aria-hidden="true" className="pointer-events-none absolute -inset-2">
                    <Image
                        src="/images/verify-otp-rg.svg"
                        alt=""
                        fill
                        sizes="(min-width: 672px) 672px, 100vw"
                        className="object-cover"
                    />
                </div>
                <div className="relative px-5 py-16 sm:px-12 sm:py-24">
                    <VerifyRegisterComponent email={email} />
                </div>
            </div>
        </main>
    )
}
export default VerifyRegisterPage
