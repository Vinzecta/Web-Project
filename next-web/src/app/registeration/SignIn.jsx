import Facebook from "../../../public/facebook_color.svg"
import Google from "../../../public/google.svg"
import Image from "next/image";

function SignIn() {
    return (
        <form className="w-[50%] flex flex-col gap-5 p-5">
            <h1 className="text-[25px] text-center">Sign In</h1>

            <label className="text-base">Email</label>
            <input className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"/>

            <label className="text-base">Password</label>
            <input className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]"/>

            <p className="text-[14px] text-[#0000EE]">Forgot Password?</p>

            <button className="border border-[#C25C5C] text-[#C25C5C] rounded-2xl w-[100%] py-3">Sign In</button>

            <p className="text-base text-center">Or</p>

            <div className="flex gap-5 justify-center bg-[white] h-[50px] py-3 border border-gray-300 border-opacity-50 w-[100%] rounded-3xl">
                <Image src={Facebook} alt="Facebook" className="w-[30px]" />
                <p className="text-base my-auto">Sign In with Facebook</p>
            </div>

            <div className="flex gap-5 justify-center bg-[white] h-[50px] py-3 border border-gray-300 border-opacity-50 w-[100%] rounded-3xl">
                <Image src={Google} alt="Google" className="w-[30px]" />
                <p className="text-base my-auto">Sign In with Google</p>
            </div>
        </form>
    );
}

export default SignIn;