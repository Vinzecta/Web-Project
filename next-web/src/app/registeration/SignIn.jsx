import Facebook from "../../assets/facebook.svg"
import Google from "../../assets/google.svg"
import Image from "next/image";

function SignIn() {
    return (
        <form>
            <h1>Sign In</h1>

            <label>Email</label>
            <input className="border"/>

            <label>Password</label>
            <input className="border"/>

            <p>Forgot Password?</p>

            <button className="border">Sign In</button>

            <p>Or</p>

            <div>
                <Image src={Facebook} alt="Facebook" />
                <p>Sign In with Facebook</p>
            </div>

            <div>
                <Image src={Google} alt="Google" />
                <p>Sign In with Google</p>
            </div>
        </form>
    );
}

export default SignIn;