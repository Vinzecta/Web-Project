import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Forgot() {
    return (
        <form className="w-[100%] flex flex-col gap-5 p-5 my-auto" id="forgot-form">
            <h2 className="text-[25px] text-center font-medium text-[#C25C5C]">Forgot Password?</h2>
            <p className={`text-base text-center ${workSans.className} font-normal text-[#424b4a]`}>Enter your email address below and we’ll send you a link to reset your password.</p>

            <label className={`text-base ${workSans} font-bold text-[#424b4a]`}>Email <span className="text-[red]">*</span></label>
            <input className={`bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%] ${workSans.className} font-normal text-[#424b4a]`} />

            <button className={`text-base w-1/1 py-3 px-5 text-center border banner-p text-[#C25C5C] rounded-3xl mx-auto border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`}>Continue</button>
        </form>
    );
}

export default Forgot;