'use client'

import Link from "next/link";
import {useState} from "react";
import OtpInput from 'react18-input-otp';
import styles from '../style.module.css';


const VerifyRegisterComponent = () => {

    const [otp, setOtp] = useState('');
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };

    return (
        <div className="absolute mx-[29%] mt-[18%] left-[10%]">
            <form>
                <div className="-mt-16 mb-16">
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-purple-text-head flex justify-center">
                        Verify your OTP Code
                    </h2>
                    <p className="flex justify-center greyUi mt-6">Enter the 4 digits code that received your email.</p>
                </div>

                <OtpInput className={styles.inputStyle}
                          value={otp}
                          onChange={handleChange}
                          numInputs={4}
                />

                <div className="mt-16">
                    <Link href={`/login`}>
                        <div className="flex justify-center mt-10">
                            <button type="sign Up" id="sign-up"
                                    className="bg-purple-text text-white font-medium text-sm rounded-3xl px-44 py-3.5 hover:bg-violet-500 shadow-md shadow-violet-400">
                                Verify
                            </button>
                        </div>
                    </Link>
                    <Link href={`/signup`}>
                        <p className="flex justify-end text-blueUi mt-5"><u>Resend Code</u>
                        </p>
                    </Link>
                </div>
            </form>
        </div>
    )
}
export default VerifyRegisterComponent