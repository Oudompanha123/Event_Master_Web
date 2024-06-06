'use client'

import Link from "next/link";
import styles from "@/app/(reset-password)/style.module.css";
import OtpInput from "react18-input-otp";
import {useState} from "react";
import {useRouter} from "next/navigation";

const VerifyOTPComponent = () => {

    const [otp, setOtp] = useState('');
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };

    const router = useRouter();

    return (
        <div className="absolute mx-[29%] mt-[18%] left-[9.5%]">
            <form>
                <div className="mt-5 mb-12">
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-purple-text-head flex justify-center">
                        Enter 4 Digits Code
                    </h2>
                    <p className="flex justify-center greyUi mt-6">Enter the 4 digits code that received your email.</p>
                </div>

                <OtpInput inputStyle={styles.inputStyle}
                          value={otp}
                          onChange={handleChange}
                          numInputs={4}
                />

                <button
                    onClick={() => router.push('/set-new-password')}
                    type="button"
                    id="continue"
                    className={`bg-purple-text text-white font-medium text-sm rounded-3xl px-44 py-3.5 mt-12 shadow-md shadow-violet-400 ${otp.length !== 4 ? "opacity-50 cursor-not-allowed" : "hover:bg-violet-500"}`}
                    disabled={otp.length !== 4}
                >
                    Continue
                </button>


                <Link href={`/verify-otp`}>
                    <p className="flex justify-end text-blueUi mt-5"><u>Resend Code</u>
                    </p>
                </Link>
            </form>


        </div>
    )
}
export default VerifyOTPComponent
