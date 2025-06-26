// Account Section

import Header from "../header/Header";
import Footer from "../footer/Footer";
import History from "./History";
import Payment from "./Payment";
import Profile from "./Profile";
import ResetPassword from "./ResetPassword";
import User from "../../../public/user.svg"
import Image from "next/image";
import Password from "../../../public/password.svg"
import Card from "../../../public/card.svg"
import Purchase from "../../../public/history.svg"
import Avatar from "../../../public/avatar.jpg"

function Account() {
    return (
        <>
            <Header />

            <h1 className="w-[80%] mx-auto mt-10 text-[32px] pb-3 border-b">Account</h1>
            <section className="w-[80%] mx-auto mt-10 flex justify-between mb-10">
                <div className="mt-5 flex flex-col gap-5 w-[30%]">
                    <div className="flex gap-2">
                        <Image src={Avatar} alt="Avatar" className="w-[50px] rounded-full" />
                        <div className="my-auto">
                            <p className="text-base">Username</p>
                            <p className="text-[10px]">Username@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-2 pb-3 border-b border-gray-300 border-opacity-50">
                        <Image src={User} alt="User" />
                        <p className="text-[20px]">Profile Information</p>
                    </div>

                    <div className="flex gap-2 pb-3 border-b border-gray-300 border-opacity-50">
                        <Image src={Password} alt="Password" className="w-[20px]"/>
                        <button className="text-[20px]">Reset Password</button>
                    </div>

                    <div className="flex gap-2 pb-3 border-b border-gray-300 border-opacity-50">
                        <Image src={Card} alt="Card" className="w-[20px]" />
                        <button className="text-[20px]">Payment Methods</button>
                    </div>

                    <div className="flex gap-2 pb-3 border-b border-gray-300 border-opacity-50">
                        <Image src={Purchase} alt="History" className="w-[20px]" />
                        <button className="text-[20px]">Purchase History</button>
                    </div>
                </div>
            
                {/* <Profile /> */}
                {/* <ResetPassword /> */}
                {/* <Payment /> */}
                <History />
            </section>
            
            <Footer />
        </>
    );
}

export default Account;