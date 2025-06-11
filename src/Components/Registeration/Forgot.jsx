function Forgot() {
    return (
        <form>
            <h2>Forgot Password?</h2>
            <p>Enter your email address below and we’ll send you a link to reset your password.</p>

            <label>Email</label>
            <input className="border" />

            <button className="border">Continue</button>
        </form>
    );
}

export default Forgot;