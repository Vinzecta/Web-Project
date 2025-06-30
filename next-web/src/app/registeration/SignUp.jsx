import Facebook from "../../../public/facebook_color.svg"
import Google from "../../../public/google.svg"
import Image from "next/image";

function SignUp() {
    return (
        <form className="flex flex-col gap-5 p-5 m-auto">
            <h2 className="text-[25px] text-center">Sign Up</h2>

            <div className="flex justify-between">
                <div className="w-[45%] flex flex-col gap-5">
                    <label className="text-base">First Name</label>
                    <input className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"></input>
                </div>

                <div className="w-[45%] flex flex-col gap-5">
                    <label className="text-base">Last Name</label>
                    <input className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"></input>
                </div>
            </div>

            <label className="text-base">Email</label>
            <input className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"></input>

            <label className="text-base">Password</label>
            <input className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"></input>

            <label className="text-base">Confirm Password</label>
            <input className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"></input>

            <button className="border border-[#C25C5C] text-[#C25C5C] rounded-2xl w-[100%] py-3">Sign Up</button>

            <p className="text-base text-center">Or</p>

            <div className="flex gap-5 justify-center bg-[white] h-[50px] py-3 border border-gray-300 border-opacity-50 w-[100%] rounded-3xl">
                <Image src={Facebook} alt="Facebook" className="w-[30px]" />
                <p className="text-base my-auto">Sign Up with Facebook</p>
            </div>

            <div className="flex gap-5 justify-center bg-[white] h-[50px] py-3 border border-gray-300 border-opacity-50 w-[100%] rounded-3xl">
                <Image src={Google} alt="Google" className="w-[30px]" />
                <p className="text-base my-auto">Sign Up with Google</p>
            </div>

            <p className="text-[14px] text-center">Have an account? <span className="text-[#0000EE]">Sign In</span></p>
        </form>
    );
}

export default SignUp;