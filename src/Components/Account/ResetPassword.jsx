function ResetPassword() {
    return (
        <form>
            <h2>Reset Password</h2>

            <div>
                <label>Current Password</label>
                <input className="border"></input>

                <label>New Password</label>
                <input className="border"></input>

                <label>Confirm Password</label>
                <input className="border"></input>
            </div>

            <button className="border">Reset Password</button>
        </form>
    );
}

export default ResetPassword;