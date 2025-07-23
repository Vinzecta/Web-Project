// Profile Section
"use client"

import Avatar from "../../../public/avatar.jpg"
import Image from "next/image";
import Information from "../../../public/information.svg"
import Address from "../../../public/address.svg"
import "./Profile.css"
import { Work_Sans } from "next/font/google";
import Error from "../error message/Error";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Profile() {
    const [formData, setFormData] = useState({
        first: "",
        last: "",
        email: "",
        address: {
            city: "",
            province: "",
            district: "",
            ward: "",
            street: "",
        }
    })
    const [blank, setBlank] = useState({
        first: "",
        last: "",
        email: "",
        address: "",
    })
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        
        const blankInput = {
            first: "",
            last: "",
            email: "",
        }
        const { first, last, email } = formData;
        const inputForm = { first, last, email };

        for (const key in blankInput) {
            if (inputForm[key] === "") {
                blankInput[key] = "Required!";
            }
        }

        setBlank(blankInput);

        if (formData.address.street === "") {
            setBlank({...blankInput, address: "Required!"});
        }

        for (const key in blankInput) {
            if (blankInput[key] !== "") {
                return;
            }
        }
    }

    useEffect(() => {
        for (const key in blank) {
            if (key === "address") {
                break;
            }

            if (blank[key] !== "" && formData[key] !== "") {
                setBlank({
                    ...blank,
                    [key]: "",
                })
            }
        }

        if (blank.address !== "" && formData.address.street !== "") {
            setBlank({...blank, address: ""});
        }
    }, [formData]);

    return (
        <form onSubmit={handleSubmit} className="w-[60%] mt-5 p-5 flex flex-col gap-5 rounded-2xl border border-gray-300 border-opacity-50 mb-10" id="profile-form">
            <h2 className="text-[25px] pb-3 border-b border-black font-medium text-[#C25C5C]" id="profile-information">Profile Information</h2>

            {/* Avatar */}
            <div className="flex flex-col gap-5">
                <Image src={Avatar} alt="Avatar" className="w-[120px] rounded-full mx-auto" id="profile-image"/>
                <button className={`text-base w-fit py-3 px-5 text-center border banner-p text-[#C25C5C] rounded-3xl mx-auto border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`} id="change-image">Change Image</button>
            </div>

            {/* Basic Information */}
            <div className="flex flex-col gap-5">
                <div className="flex gap-2 pb-3 border-b">
                    <Image src={Information} alt="Information" className="w-[20px]" />
                    <h3 className="text-[20px] font-medium text-[#424b4a]">Basic Information</h3>
                </div>

                <div className="flex justify-between basic-info">
                    <div className="w-[45%] flex flex-col gap-2 flex-info">
                        <div className="flex justify-between">
                            <label className={`${workSans.className} text-[#424b4a] font-bold`}>First Name <span className="text-[red]">*</span></label>
                            <AnimatePresence mode="wait">
                                {
                                    blank.first != "" && submit ? 
                                    <Error error={blank.first} /> :
                                    undefined
                                }
                            </AnimatePresence>
                        </div>
                        <input onInput={(e) => setFormData({...formData, first: e.target.value})} className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} font-normal`}></input>
                    </div>

                    <div className="w-[45%] flex flex-col gap-2 flex-info">
                        <div className="flex justify-between">
                            <label className={`${workSans.className} text-[#424b4a] font-bold`}>Last Name <span className="text-[red]">*</span></label>
                            <AnimatePresence mode="wait">
                                {
                                    blank.last !== "" && submit ? 
                                    <Error error={blank.last} /> :
                                    undefined
                                }
                            </AnimatePresence>
                        </div>
                        <input onInput={(e) => setFormData({...formData, last: e.target.value})} className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} font-normal`}></input>
                    </div>
                </div>

                <div className="flex justify-between basic-info">
                    <div className="w-[100%] flex flex-col gap-2 flex-info">
                        <div className="flex justify-between">
                            <label className={`${workSans.className} text-[#424b4a] font-bold`}>Email <span className="text-[red]">*</span></label>
                            <AnimatePresence mode="wait">
                                {
                                    blank.email !== "" && submit ?
                                    <Error error={blank.email} /> :
                                    undefined
                                }
                            </AnimatePresence>
                        </div>
                        <input onInput={(e) => setFormData({...formData, email: e.target.value})} className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} font-normal`}></input>
                    </div>
                </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-5">
                <div className="flex gap-2 pb-3 border-b">
                    <Image src={Address} alt="Address" className="w-[20px]" />
                    <h3 className="text-[20px] font-medium text-[#424b4a]">Address <span className="text-[red]">*</span></h3>
                </div>

                <div className="flex justify-between" id="address-info">
                    <div className="w-[20%] flex flex-col gap-2 address-flex">
                        <label className={`${workSans.className} text-[#424b4a] font-bold`}>City <span className="text-[red]">*</span></label>
                        <select className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} font-normal`}></select>
                    </div>

                    <div className="w-[20%] flex flex-col gap-2 address-flex">
                        <label className={`${workSans.className} text-[#424b4a] font-bold`}>Province <span className="text-[red]">*</span></label>
                        <select className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} font-normal`}></select>
                    </div>

                    <div className="w-[20%] flex flex-col gap-2 address-flex">
                        <label className={`${workSans.className} text-[#424b4a] font-bold`}>District <span className="text-[red]">*</span></label>
                        <select className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} font-normal`}></select>
                    </div>

                    <div className="w-[20%] flex flex-col gap-2 address-flex">
                        <label className={`${workSans.className} text-[#424b4a] font-bold`}>Ward <span className="text-[red]">*</span></label>
                        <select className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} font-normal`}></select>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <label className={`${workSans.className} text-[#424b4a] font-bold`}>Street Address <span className="text-[red]">*</span></label>
                        <AnimatePresence mode="wait">
                            {
                                blank.address !== "" && submit ?
                                <Error error={blank.address} /> :
                                undefined
                            }
                        </AnimatePresence>
                    </div>
                    <input onInput={(e) => setFormData({...formData, address: {...formData.address, street: e.target.value}})} type="text" className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} font-normal`}></input>
                </div>

                <button className={`text-base w-fit py-3 px-5 text-center border banner-p text-[#C25C5C] rounded-3xl mx-auto border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`}>Save Changes</button>
            </div>
        </form>
    );
}

export default Profile;