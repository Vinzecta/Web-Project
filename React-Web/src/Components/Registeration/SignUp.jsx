import Facebook from "../../assets/facebook.svg"
import Google from "../../assets/google.svg"

function SignUp() {
    return (
        <form>
            <h2>Sign Up</h2>

            <div>
                <div>
                    <label>First Name</label>
                    <input className="border"></input>
                </div>

                <div>
                    <label>Last Name</label>
                    <input className="border"></input>
                </div>
            </div>

            <label>Email</label>
            <input className="border"></input>

            <label>Password</label>
            <input className="border"></input>

            <label>Confirm Password</label>
            <input className="border"></input>

            <button className="border">Sign Up</button>

            <p>Have an account? <span>Sign In</span></p>

            <p>Or</p>

            <div>
                <img src={Facebook} alt="Facebook" />
                <p>Sign Up with Facebook</p>
            </div>

            <div>
                <img src={Google} alt="Google" />
                <p>Sign Up with Google</p>
            </div>
        </form>
    );
}

export default SignUp;