import Plus from "../../../public/plus.svg"
import Minus from "../../../public/minus.svg"
import Image from "next/image";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Counter({ ...props }) {
    return (
        <div {...props}>
            <div className="border border-gray-300 border-opacity-50 p-2">
                <Image src={Minus} alt="Minus Icon" className="w-4 h-4 object-contain" />
            </div>
            <p className={`px-4 py-1 flex items-center justify-center border border-gray-300 border-opacity-50 text-base font-normal ${workSans.className} text-[#424b4a]`}>
                1
            </p>
            <div className="border border-gray-300 border-opacity-50 p-2">
                <Image src={Plus} alt="Plus Icon" className="w-4 h-4 object-contain" />
            </div>
        </div>
    );
}

export default Counter;
