import Image from "../../assets/image-4.jpg"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Forgot from "./Forgot"

function Registeration() {
    return (
        <>
            <div>
                <img src={Image} alt="Image" />
            </div>

            <SignIn />
            <SignUp />
            <Forgot />
        </>
    );
}

export default Registeration