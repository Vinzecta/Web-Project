"use client"

import Facebook from "../../../public/facebook_color.svg"
import Google from "../../../public/google.svg"
import Image from "next/image";
import { Work_Sans } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import Error from "../error message/Error";
import { AnimatePresence } from "framer-motion";
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useRouter } from "next/navigation";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function SignUp() {
    const [formData, setFormData] = useState({first: "", last: "", email: "", password: "", confirm: ""});
    const [required, setRequired] = useState({first: "", last: "", email: "", password: "", confirm: ""});
    const [submit, setSubmit] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [error, setError] = useState({email: "", password: [false, false, false], confirm: ""});
    const uppercase = /[A-Z]/;
    const special = /[^a-zA-Z0-9]/;
    const [type, setType] = useState({password: formData.password.length > 0, confirm: formData.confirm.length > 0})
    const [showPassword, setShowPassword] = useState({password: false, confirm: false});
    const router = useRouter();
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit(true);

        const blankInput = {first: "", last: "", email: "", password: "", confirm: ""};
        const errors = {email: "", password: [formData.password.length >= 8, uppercase.test(formData.password), special.test(formData.password)], confirm: ""};
        if (formData.first.trim() === "") {
            blankInput.first = "This field is required!";
        }

        if (formData.last.trim() === "") {
            blankInput.last = "This field is required!";
        }

        if (formData.email.trim() === "") {
            if (error.email != "") {
                errors.email = "";
            }
            blankInput.email = "This field is required!";
        } else if (!emailRegex.test(formData.email)) {
            errors.email = "Invalid email format";
        }

        if (formData.password === "") {
            blankInput.password = "This field is required!"
        } 

        if (formData.confirm === "") {
            blankInput.confirm = "This field is required!";
        } else {
            if (formData.confirm !== formData.password) {
                errors.confirm = "Password does not match!";
            }
        }

        setRequired(blankInput);
        setError(errors);

        for (const key in blankInput) {
            if (blankInput[key] !== "") {
                return;
            }
        }

        for (const key in errors) {
            const value = errors[key];

            if (Array.isArray(value)) {
                if (value.some(v => !v)) {
                    return;
                }
            } else {
                if (value !== "") {
                    return;
                }
            }
        }
 
        try {
            const res = await fetch("/api/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json();
            router.push("/home");
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => { 
        const lengthRequire = formData.password.length >= 8;
        const uppercaseRequire = uppercase.test(formData.password);
        const specialRequire = special.test(formData.password);

        setError(prev => ({...prev, password: [lengthRequire, uppercaseRequire, specialRequire]}));
        setType({password: formData.password.length > 0, confirm: formData.confirm.length > 0})
    }, [formData.password, formData.confirm])

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
                        (required.email != "" && submit) ? <Error error={required.email} /> :
                        (error.email !== "" && submit) && <Error error={error.email} />
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

            <div>
                <input type={showPassword.password ? "text" : "password"} onInput={(e) => setFormData({...formData, password: e.target.value})} name="password" className={`bg-[white] h-[50px] p-3 pr-10 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} text-[#424b4a] font-normal`} />

                {
                    type.password ? 
                    showPassword.password ? 
                    <VisibilityOutlinedIcon onClick={() => setShowPassword((prev) => ({...prev, password: !prev.password}))} className="absolute translate-y-[55%] left-[61%] cursor-pointer" sx={{color: "#999999", fontWeight: "light"}} /> : 
                    <VisibilityOffOutlinedIcon onClick={() => setShowPassword((prev) => ({...prev, password: !prev.password}))} className="absolute translate-y-[55%] left-[61%] cursor-pointer" sx={{color: "#999999", fontWeight: "light"}} /> :
                    undefined
                }
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    {
                        error.password[0] ? <CheckIcon sx={{width: "15px", color: "#27AE60"}} /> : <ClearIcon sx={{width: "15px", color: "#b91c1c"}} />
                    }
                    <p className={`${workSans.className} font-light ${error.password[0] ? "text-[#27AE60]" : "text-red-700"} text-xs my-auto`}>Password must have at least 8 characters</p>
                </div>

                <div className="flex gap-2">
                    {
                        error.password[1] ? <CheckIcon sx={{width: "15px", color: "#27AE60"}} /> : <ClearIcon sx={{width: "15px", color: "#b91c1c"}} />
                    }
                    <p className={`${workSans.className} font-light ${error.password[1] ? "text-[#27AE60]" : "text-red-700"} text-xs my-auto`}>Password must have at least 1 uppercase (A-Z)</p>
                </div>

                <div className="flex gap-2">
                    {
                        error.password[2] ? <CheckIcon sx={{width: "15px", color: "#27AE60"}} /> : <ClearIcon sx={{width: "15px", color: "#b91c1c"}} />
                    }
                    <p className={`${workSans.className} font-light ${error.password[2] ? "text-[#27AE60]" : "text-red-700"} text-xs my-auto`}>Password must have at least 1 special characters (!@#$)</p>
                </div>
            </div>

            <div className="flex justify-between">
                <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Confirm Password <span className="text-[red]">*</span></label>
                <AnimatePresence mode="wait">
                    {
                        (required.confirm != "" && submit) ? <Error error={required.confirm} /> :
                        (error.confirm != "" && submit) ? <Error error={error.confirm} /> : undefined
                    }
                </AnimatePresence>
            </div>

            <div>
                <input type={showPassword.confirm ? "text" : "password"} onInput={(e) => setFormData({...formData, confirm: e.target.value})} name="confirm" className={`bg-[white] h-[50px] p-3 pr-10 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} text-[#424b4a] font-normal`} />
                {
                    type.confirm ? 
                    showPassword.confirm ? 
                    <VisibilityOutlinedIcon onClick={() => setShowPassword((prev) => ({...prev, confirm: !prev.confirm}))} className="absolute translate-y-[55%] left-[61%] cursor-pointer" sx={{color: "#999999", fontWeight: "light"}} /> : 
                    <VisibilityOffOutlinedIcon onClick={() => setShowPassword((prev) => ({...prev, confirm: !prev.confirm}))} className="absolute translate-y-[55%] left-[61%] cursor-pointer" sx={{color: "#999999", fontWeight: "light"}} /> :
                    undefined
                }
            </div>

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