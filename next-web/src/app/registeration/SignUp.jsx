"use client"

import Facebook from "../../../public/facebook_color.svg"
import Google from "../../../public/google.svg"
import Image from "next/image";
import { Work_Sans } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import Error from "../error message/Error";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function SignUp() {
    const [formData, setFormData] = useState({first: "", last: "", email: "", password: "", confirm: ""});
    const [error, setError] = useState({});
    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    const [touch, setTouch] = useState({first: false, last: false, email: false, password: false, confirm: false});
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
    setDidMount(true);
    }, []);

    useEffect(() => {
        if (!didMount) {
            return;
        }

        const formError = {first: "", last: "", email: [], password: [], confirm: []}
        if (formData.first === "") {
            formError.first = "First name is required!";
        }

        if (formData.last === "") {
            formError.last = "Last name is required!";
        }

        if (!emailRegex.test(formData.email)) {
            formError.email.push("Email is invalid!");
        }

        if (formData.email === "") {
            formError.email.push("This field is required!");
        }

        if (formData.password === "") {
            formError.password.push("This field is required!");
        }

        if (formData.confirm === "") {
            formError.confirm.push("This field is required!");
        }

        if (formData.confirm != formData.password) {
            formError.confirm.push("Password does not match!");
        }

        setError(formError);
    }, [formData])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    const handleTouch = (e) => {
        const {name} = e.target;
        setTouch(prev => ({...prev, [name]: true}));
    }

    return (
        <form className="flex flex-col gap-5 p-5 m-auto">
            <h2 className="text-[25px] text-center text-[#C25C5C] font-medium">Sign Up</h2>

            <div className="flex justify-between">
                <div className="w-[45%] flex flex-col gap-5">
                    <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>First Name <span className="text-[red]">*</span></label>
                    <input name="first" onChange={handleChange} className={`bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} text-[#424b4a] font-normal`}></input>
                </div>

                <div className="w-[45%] flex flex-col gap-5">
                    <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Last Name <span className="text-[red]">*</span></label>
                    <input name="last" onChange={handleChange} className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"></input>
                </div>
            </div>

            {
                touch.first && error.first.length > 0 ? <Error error={error.first} /> : undefined
            }

            {
                touch.last && error.last.length > 0 ? <Error error={error.last} /> : undefined
            }

            <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Email <span className="text-[red]">*</span></label>
            <input name="email" onChange={handleChange} className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"></input>

            {
                touch.email && error.email.length > 0 ? error.email.map((errors, index) => <Error key={index} error={errors} />) : undefined
            }

            <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Password <span className="text-[red]">*</span></label>
            <input name="password" onChange={handleChange} className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"></input>

            {
                touch.password && error.password.length > 0 ? error.password.map((errors, index) => <Error key={index} error={errors} />) : undefined
            }

            <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Confirm Password <span className="text-[red]">*</span></label>
            <input name="confirm" onChange={handleChange} className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"></input>

            {
                touch.confirm && error.confirm.length > 0 ? error.confirm.map((errors, index) => <Error key={index} error={errors} />) : undefined
            }

            <button className={`text-base w-1/1 py-3 px-5 text-center border banner-p text-[#C25C5C] rounded-3xl mx-auto border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`}>Sign Up</button>

            <p className={`text-base text-center ${workSans.className} font-normal text-[#424b4a]`}>Or</p>

            <div className="flex gap-5 justify-center bg-[white] h-[50px] py-3 border border-gray-300 border-opacity-50 w-[100%] rounded-3xl">
                <Image src={Facebook} alt="Facebook" className="w-[30px]" />
                <p className={`text-base my-auto ${workSans.className} font-medium text-[#424b4a]`}>Sign Up with Facebook</p>
            </div>

            <div className="flex gap-5 justify-center bg-[white] h-[50px] py-3 border border-gray-300 border-opacity-50 w-[100%] rounded-3xl">
                <Image src={Google} alt="Google" className="w-[30px]" />
                <p className={`text-base my-auto ${workSans.className} font-medium text-[#424b4a]`}>Sign Up with Google</p>
            </div>

            <p className={`text-[14px] text-center ${workSans.className} font-normal text-[#424b4a]`}>Have an account? <span className="text-[#0000EE] hover:underline"><Link href="/registeration/sign-in">Sign In</Link></span></p>
        </form>
    );
}

export default SignUp;