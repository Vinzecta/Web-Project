"use client"

import Facebook from "../../../public/facebook_color.svg"
import Google from "../../../public/google.svg"
import Image from "next/image";
import { Work_Sans } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import Error from "../error message/Error";
import { CheckBox } from "@mui/icons-material";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function SignIn() {
    const [formData, setFormData] = useState({email: "", password: ""});
    const [error, setError] = useState({});
    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    const [touch, setTouch] = useState({email: false, password: false});
    const [didMount, setDidMount] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
    setDidMount(true);
    }, []);

    useEffect(() => {
        if (!didMount) {
            return;
        }

        const formError = {email: [], password: []};

        if (!emailRegex.test(formData.email)) {
            formError.email.push("Email is invalid!");
        }

        if (formData.email === "") {
            formError.email.push("This field is required!");
        }

        if (formData.password === "") {
            formError.password.push("This field is required!");
        }

        setError(formError);
    }, [formData]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    const handleTouch = (e) => {
        const {name} = e.target;
        setTouch(prev => ({...prev, [name]: true}));
    }

    return (
        <form className="w-[100%] flex flex-col gap-5 p-5 my-auto">
            <h1 className="text-[25px] text-center text-[#C25C5C] font-medium">Sign In</h1>

            <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Email <span className="text-[red]">*</span></label>
            <input name="email" onChange={handleChange} onBlur={handleTouch} className={`bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} font-normal text-[#424b4a]`}/>

            {
                touch.email && error.email.length > 0 ? error.email.map((errors, index) => <Error key={index} error={errors} />) : undefined
            }

            <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Password <span className="text-[red]">*</span></label>
            <input type={showPassword ? "text" : "password"} name="password" onChange={handleChange} onBlur={handleTouch} className={`bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} font-normal text-[#424b4a]`}/>

            {
                touch.password && error.password.length > 0 ? error.password.map((errors, index) => <Error key={index} error={errors} />) : undefined
            }

            <div className="flex gap-2">
                <input type="checkbox" onClick={() => setShowPassword(prev => !prev)} />
                <p className={`text-sm ${workSans.className} font-normal text-[#424b4a]`}>Show password</p>
            </div>

            <Link href="/registeration/forgot" className={`text-[14px] text-[#0000EE] ${workSans.className} font-normal hover:underline text-right`}>Forgot Password?</Link>

            <button className={`text-base w-1/1 py-3 px-5 text-center border banner-p text-[#C25C5C] rounded-3xl mx-auto border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`}>Sign In</button>

            <p className={`text-base text-center ${workSans.className} text-[#424b4a] font-normal`}>Or</p>

            <div className="flex gap-5 justify-center bg-[white] h-[50px] py-3 border border-gray-300 border-opacity-50 w-[100%] rounded-3xl">
                <Image src={Facebook} alt="Facebook" className="w-[30px]" />
                <p className={`text-base my-auto ${workSans.className} text-[#424b4a] font-medium`}>Sign In with Facebook</p>
            </div>

            <div className="flex gap-5 justify-center bg-[white] h-[50px] py-3 border border-gray-300 border-opacity-50 w-[100%] rounded-3xl">
                <Image src={Google} alt="Google" className="w-[30px]" />
                <p className={`text-base my-auto ${workSans.className} text-[#424b4a] font-medium`}>Sign In with Google</p>
            </div>

            <p className={`text-[14px] text-center ${workSans.className} tex-[#424b4a] font-normal`}>Don't have account? <span className="text-[#0000EE] hover:underline"><Link href="/registeration/sign-up">Click here to sign up</Link></span></p>
        </form>
    );
}

export default SignIn;