import Image4 from "../../../public/image-4.jpg"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Forgot from "./Forgot"
import Image from "next/image"

function Registeration() {
    return (
        <section className="w-[60%] h-[80%] m-auto flex bg-white">
            <div className="w-[50%] h-[100%]">
                <Image src={Image4} alt="Image-4" className="h-full w-full object-fill" />
            </div>

            <SignIn />
            {/* <SignUp />
            <Forgot /> */}
        </section>
    );
}

export default Registeration