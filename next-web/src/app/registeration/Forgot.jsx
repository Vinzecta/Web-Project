function Forgot() {
    return (
        <form className="w-[100%] flex flex-col gap-5 p-5 my-auto" id="forgot-form">
            <h2 className="text-[25px] text-center">Forgot Password?</h2>
            <p className="text-base text-center">Enter your email address below and we’ll send you a link to reset your password.</p>

            <label className="text-base">Email</label>
            <input className="bg-[white] h-[50px] p-3 border border-gray-300 border-opacity-50 w-[100%]" />

            <button className="border border-[#C25C5C] text-[#C25C5C] rounded-2xl w-[100%] py-3">Continue</button>
        </form>
    );
}

export default Forgot;