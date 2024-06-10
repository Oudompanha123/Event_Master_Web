'use client'

import Link from "next/link";
import styles from "@/app/(reset-password)/style.module.css";
import OtpInput from "react18-input-otp";
import {useState} from "react";
import {useRouter} from "next/navigation";

const VerifyRegisterComponent = () => {

    const [rgotp, setRgotp] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (enteredOtp) => {
        setRgotp('');
        if (!/^\d+$/.test(enteredOtp)) {
            setErrorMessage("Please enter only numbers.");
            return;
        }
        setRgotp(enteredOtp);
        setErrorMessage('');
    };


    const handleKeyDown = (event) => {
        if (event.key === 'Backspace') {
            event.preventDefault();
            setOtp(prev => prev.slice(0, -1));// Remove the last character
            const prevInput = event.target.previousElementSibling;
            if (prevInput) {
                prevInput.focus();
            }
        }
    }

    const router = useRouter();

    return (
        <div className="absolute mx-[29%] mt-[14%] left-[9.5%]">
            <form>
                <div className="mt-5 mb-12">
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-purple-text-head flex justify-center">
                        Enter 4 Digits Code
                    </h2>
                    <p className="flex justify-center greyUi mt-6">Enter the 4 digits code that received your email.</p>
                </div>

                <OtpInput inputStyle={styles.inputStyle}
                          value={rgotp}
                          onChange={handleChange}
                          onKeyDown={handleKeyDown}
                          numInputs={4}
                />

                {errorMessage && <p className="text-red-600 mt-3 ml-4">{errorMessage}</p>}

                <button
                    onClick={() => router.push('/login')}
                    type="button"
                    id="continue"
                    className={`bg-purple-text text-white font-medium text-sm rounded-3xl px-44 py-3.5 mt-12 shadow-md shadow-violet-400 ${rgotp.length !== 4 ? "opacity-50 cursor-not-allowed" : "hover:bg-violet-500"}`}
                    disabled={rgotp.length !== 4}
                >
                    Continue
                </button>


                <Link href={`/verify-register`}>
                    <p className="flex justify-end text-blueUi mt-5"><u>Resend Code</u>
                    </p>
                </Link>
            </form>


        </div>
    )
}
export default VerifyRegisterComponent