import Image from "next/image";

const VerifyComponent = () => (
    <div className="flex flex-col items-center gap-6 text-center">
        <Image
            src="/images/verify-success.gif"
            alt=""
            width={300}
            height={300}
            unoptimized
            className="size-52 sm:size-64"
        />
        <div className="space-y-3">
            <h1 className="text-2xl font-extrabold text-purple-text-head sm:text-3xl">Congratulations!</h1>
            <p className="text-sm text-muted-foreground sm:text-base">You have set up the new password successfully.</p>
        </div>
    </div>
);

export default VerifyComponent
