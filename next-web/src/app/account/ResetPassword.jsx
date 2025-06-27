import "./ResetPassword.css"

function ResetPassword() {
    return (
        <form className="w-[60%] mt-5 p-5 flex flex-col gap-5 rounded-2xl border border-gray-300 border-opacity-50 mb-10">
            <h2 className="text-[25px] pb-3 border-b">Reset Password</h2>

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label>Current Password</label>
                    <input className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%]"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label>New Password</label>
                    <input className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%]"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label>Confirm Password</label>
                    <input className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%]"></input>
                </div>
            </div>

            <button className="border border-[#C25C5C] text-[#C25C5C] rounded-2xl w-fit py-3 px-5">Reset Password</button>
        </form>
    );
}

export default ResetPassword;