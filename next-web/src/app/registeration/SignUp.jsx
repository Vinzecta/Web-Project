"use client"

import Facebook from "../../../public/facebook_color.svg"
import Google from "../../../public/google.svg"
import Image from "next/image";
import { Work_Sans } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import Error from "../error message/Error";
import { AnimatePresence } from "framer-motion";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function SignUp() {
    const [formData, setFormData] = useState({first: "", last: "", email: "", password: "", confirm: ""});
    const [required, setRequired] = useState({first: "", last: "", email: "", password: "", confirm: ""});
    const [submit, setSubmit] = useState(false);

    const changeBlankError = (form) => {
        if (formData[form] !== "" && required[form] !== "") {
            setRequired(prev => ({ ...prev, [form]: "" }));
        }
    }

    useEffect(() => {
        for (const key in formData) {
            changeBlankError(key);
        }
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);

        const blankInput = {first: "", last: "", email: "", password: "", confirm: ""};
        if (formData.first.trim() === "") {
            blankInput.first = "This field is required!";
        }

        if (formData.last.trim() === "") {
            blankInput.last = "This field is required!";
        }

        if (formData.email.trim() === "") {
            blankInput.email = "This field is required!";
        }

        if (formData.password === "") {
            blankInput.password = "This field is required!"
        }

        if (formData.confirm === "") {
            blankInput.confirm = "This field is required!";
        }

        setRequired(blankInput);

        for (const key in blankInput) {
            if (blankInput[key] != "") {
                return;
            }
        }

    };

    return (
        <form className="w-[100%] flex flex-col gap-5 p-5 m-auto" onSubmit={handleSubmit}>
            <h2 className="text-[25px] text-center text-[#C25C5C] font-medium">Sign Up</h2>

            <div className="flex justify-between">
                <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>First Name <span className="text-[red]">*</span></label>
                <AnimatePresence mode="wait">
                    {
                        (required.first != "" && submit) ? <Error error={required.first} /> : undefined
                    }
                </AnimatePresence>
            </div>
            <input onInput={(e) => setFormData({...formData, first: e.target.value})} name="first" className={`bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} text-[#424b4a] font-normal`}></input>

            <div className="flex justify-between">
                <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Last Name <span className="text-[red]">*</span></label>
                <AnimatePresence mode="wait">
                    {
                        (required.last != "" && submit) ? <Error error={required.last} /> : undefined
                    }
                </AnimatePresence>
            </div>
            <input onInput={(e) => setFormData({...formData, last: e.target.value})} name="last" className={`bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} text-[#424b4a] font-normal`}></input>

            <div className="flex justify-between">
                <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Email <span className="text-[red]">*</span></label>
                <AnimatePresence mode="wait">
                    {
                        (required.email != "" && submit) ? <Error error={required.email} /> : undefined
                    }
                </AnimatePresence>
            </div>
            <input onInput={(e) => setFormData({...formData, email: e.target.value})} name="email" className={`bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} text-[#424b4a] font-normal`}></input>

            <div className="flex justify-between">
                <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Password <span className="text-[red]">*</span></label>
                <AnimatePresence mode="wait">
                    {
                        (required.password != "" && submit) ? <Error error={required.password} /> : undefined
                    }
                </AnimatePresence>
            </div>
            <input onInput={(e) => setFormData({...formData, password: e.target.value})} name="password" className={`bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} text-[#424b4a] font-normal`}></input>

            <div className="flex justify-between">
                <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Confirm Password <span className="text-[red]">*</span></label>
                <AnimatePresence mode="wait">
                    {
                        (required.confirm != "" && submit) ? <Error error={required.confirm} /> : undefined
                    }
                </AnimatePresence>
            </div>
            <input onInput={(e) => setFormData({...formData, confirm: e.target.value})} name="confirm" className={`bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} text-[#424b4a] font-normal`}></input>

            <button className={`text-base w-1/1 py-3 px-5 text-center border banner-p text-[#C25C5C] rounded-3xl mx-auto border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`}>Sign Up</button>

            <p className={`text-base text-center ${workSans.className} font-normal text-[#424b4a]`}>Or</p>

            <div className="flex gap-5 justify-center bg-[white] h-[50px] py-3 border border-gray-300 border-opacity-50 w-[100%] rounded-3xl hover:scale-105 cursor-pointer transition-transform duration-300">
                <Image src={Facebook} alt="Facebook" className="w-[30px]" />
                <p className={`text-base my-auto ${workSans.className} font-medium text-[#424b4a]`}>Sign Up with Facebook</p>
            </div>

            <div className="flex gap-5 justify-center bg-[white] h-[50px] py-3 border border-gray-300 border-opacity-50 w-[100%] rounded-3xl hover:scale-105 cursor-pointer transition-transform duration-300">
                <Image src={Google} alt="Google" className="w-[30px]" />
                <p className={`text-base my-auto ${workSans.className} font-medium text-[#424b4a]`}>Sign Up with Google</p>
            </div>

            <p className={`text-[14px] text-center ${workSans.className} font-normal text-[#424b4a]`}>Have an account? <span className="text-[#0000EE] hover:underline"><Link href="/registeration/sign-in">Sign In</Link></span></p>
        </form>
    );
}

export default SignUp;