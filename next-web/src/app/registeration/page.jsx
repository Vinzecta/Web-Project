import Image4 from "../../../public/image-4.jpg"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Forgot from "./Forgot"
import Image from "next/image"
import "./page.css"

function Registeration() {
    return (
        <section className="w-[30%] h-[90%] m-auto flex bg-white" id="registeration-section">
            <SignIn />
        </section>
    );
}

export default Registeration