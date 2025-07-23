"use client"

import "./ResetPassword.css"
import { Work_Sans } from "next/font/google";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState, useEffect } from "react";
import Error from "../error message/Error";
import { AnimatePresence } from "framer-motion";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function ResetPassword() {
    const [formData, setFormData] = useState({
        current: "",
        new: "",
        confirm: "",
    });

    const [blank, setBlank] = useState({
        current: "",
        new: "",
        confirm: "",
    });

    const [submit, setSubmit] = useState(false);
    const [typing, setTyping] = useState({
        current: formData.current.length > 0,
        new: formData.new.length > 0,
        confirm: formData.confirm.length > 0
    });

    const [seePassword, setSeePassword] = useState({
        current: false,
        new: false,
        confirm: false
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);

        const blankError = {
            current: "",
            new: "",
            confirm: "",
        }

        for (const key in formData) {
            if (formData[key] === "") {
                blankError[key] = "Required!"
            }
        }

        setBlank(blankError);
    }

    useEffect(() => {
        for (const key in formData) {
            if (blank[key] !== "" && formData[key] !== "") {
                setBlank({...blank, [key]: ""})
            }
        }

        setTyping({
            current: formData.current.length > 0,
            new: formData.new.length > 0,
            confirm: formData.confirm.length > 0
        })
    }, [formData]);

    return (
        <form onSubmit={handleSubmit} className="w-[60%] mt-5 p-5 flex flex-col gap-5 rounded-2xl border border-gray-300 border-opacity-50 mb-10">
            <h2 className="text-[25px] pb-3 border-b border-black text-[#C25C5C] font-medium">Reset Password</h2>

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <label className={`${workSans.className} text-[#424b4a] font-bold`}>Current Password <span className="text-[red]">*</span></label>
                        <AnimatePresence mode="wait">
                            {
                                blank.current !== "" && submit ? 
                                <Error error={blank.current} />:
                                undefined
                            }
                        </AnimatePresence>
                    </div>
                    <div className="relative w-full">
                        <input type={seePassword.current ? "text" : "password"} onInput={(e) => setFormData({...formData, current: e.target.value})} className={`bg-[white] h-[50px] px-3 pr-10 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} font-normal text-[#424b4a]`} />
                        {
                            typing.current ? 
                            seePassword.current ?
                            <VisibilityOutlinedIcon onClick={() => setSeePassword((prev) => ({...prev, current: !prev.current}))} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" sx={{color: "#999999", fontWeight: "light"}} /> :
                            <VisibilityOffOutlinedIcon onClick={() => setSeePassword((prev) => ({...prev, current: !prev.current}))} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" sx={{color: "#999999", fontWeight: "light"}} /> :
                            undefined
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <label className={`${workSans.className} text-[#424b4a] font-bold`}>New Password <span className="text-[red]">*</span></label>
                        <AnimatePresence mode="wait">
                            {
                                blank.new !== "" && submit ? 
                                <Error error={blank.new} /> :
                                undefined
                            }
                        </AnimatePresence>
                    </div>
                    <div className="relative w-full">
                        <input type={seePassword.new ? "text" : "password"} onInput={(e) => setFormData({...formData, new: e.target.value})} className={`bg-[white] h-[50px] px-3 pr-10 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} font-normal text-[#424b4a]`} />
                        {
                            typing.new ? 
                            seePassword.new ?
                            <VisibilityOutlinedIcon onClick={() => setSeePassword((prev) => ({...prev, new: !prev.new}))} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" sx={{color: "#999999", fontWeight: "light"}} /> :
                            <VisibilityOffOutlinedIcon onClick={() => setSeePassword((prev) => ({...prev, new: !prev.new}))} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" sx={{color: "#999999", fontWeight: "light"}} /> :
                            undefined
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <label className={`${workSans.className} text-[#424b4a] font-bold`}>Confirm Password <span className="text-[red]">*</span></label>
                        <AnimatePresence mode="wait">
                            {
                                blank.confirm !== "" && submit ? 
                                <Error error={blank.confirm} /> :
                                undefined
                            }
                        </AnimatePresence>
                    </div>
                    <div className="relative w-full">
                        <input type={seePassword.confirm ? "text" : "password"} onInput={(e) => setFormData({...formData, confirm: e.target.value})} className={`bg-[white] h-[50px] px-3 pr-10 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} font-normal text-[#424b4a]`} />
                        {
                            typing.confirm ? 
                            seePassword.confirm ?
                            <VisibilityOutlinedIcon onClick={() => setSeePassword((prev) => ({...prev, confirm: !prev.confirm}))} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" sx={{color: "#999999", fontWeight: "light"}} /> :
                            <VisibilityOffOutlinedIcon onClick={() => setSeePassword((prev) => ({...prev, confirm: !prev.confirm}))} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" sx={{color: "#999999", fontWeight: "light"}} /> :
                            undefined
                        }
                    </div>
                </div>
            </div>

            <button className={`text-base w-fit py-3 px-5 text-center border banner-p text-[#C25C5C] rounded-3xl border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`}>Reset Password</button>
        </form>
    );
}

export default ResetPassword;