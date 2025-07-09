import Facebook from "../../../public/facebook_color.svg"
import Google from "../../../public/google.svg"
import Image from "next/image";
import { Work_Sans } from "next/font/google";
import Link from "next/link";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function SignUp() {
    return (
        <form className="flex flex-col gap-5 p-5 m-auto">
            <h2 className="text-[25px] text-center text-[#C25C5C] font-medium">Sign Up</h2>

            <div className="flex justify-between">
                <div className="w-[45%] flex flex-col gap-5">
                    <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>First Name <span className="text-[red]">*</span></label>
                    <input className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"></input>
                </div>

                <div className="w-[45%] flex flex-col gap-5">
                    <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Last Name <span className="text-[red]">*</span></label>
                    <input className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"></input>
                </div>
            </div>

            <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Email <span className="text-[red]">*</span></label>
            <input className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"></input>

            <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Password <span className="text-[red]">*</span></label>
            <input className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"></input>

            <label className={`text-base ${workSans.className} font-bold text-[#424b4a]`}>Confirm Password <span className="text-[red]">*</span></label>
            <input className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"></input>

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