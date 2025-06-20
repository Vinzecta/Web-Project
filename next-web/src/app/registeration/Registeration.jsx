import Image from "../../assets/image-4.jpg"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Forgot from "./Forgot"
import Image from "next/image"

function Registeration() {
    return (
        <>
            <div>
                <Image src={Image} alt="Image" />
            </div>

            <SignIn />
            <SignUp />
            <Forgot />
        </>
    );
}

export default Registeration