import VerifyComponent from "@/app/(reset-password)/_components/VerifyComponent";
import Image from "next/image";

const VerifyPage = () => {
    return (

        <div>
            <div>
                <Image
                    className="absolute mt-[15%] left-[39%]"
                    src="/images/verify-success.gif" alt="image" width={400} height={200} property=""/>
            </div>

            <VerifyComponent/>
        </div>

    )
}

export default VerifyPage
