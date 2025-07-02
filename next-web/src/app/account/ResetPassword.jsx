import "./ResetPassword.css"
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function ResetPassword() {
    return (
        <form className="w-[60%] mt-5 p-5 flex flex-col gap-5 rounded-2xl border border-gray-300 border-opacity-50 mb-10">
            <h2 className="text-[25px] pb-3 border-b border-black text-[#C25C5C] font-medium">Reset Password</h2>

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label className={`${workSans.className} text-[#424b4a] font-bold`}>Current Password <span className="text-[red]">*</span></label>
                    <input className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%]"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className={`${workSans.className} text-[#424b4a] font-bold`}>New Password <span className="text-[red]">*</span></label>
                    <input className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%]"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label className={`${workSans.className} text-[#424b4a] font-bold`}>Confirm Password <span className="text-[red]">*</span></label>
                    <input className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%]"></input>
                </div>
            </div>

            <button className={`text-base w-fit py-3 px-5 text-center border banner-p text-[#C25C5C] rounded-3xl border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`}>Reset Password</button>
        </form>
    );
}

export default ResetPassword;