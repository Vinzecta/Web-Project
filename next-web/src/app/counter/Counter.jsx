import Plus from "../../../public/plus.svg"
import Minus from "../../../public/minus.svg"
import Image from "next/image";

function Counter({ ...props }) {
    return (
        <div className="flex items-center w-fit h-fit" {...props}>
            <div className="border border-gray-300 border-opacity-50 p-2">
                <Image src={Minus} alt="Minus Icon" className="w-4 h-4 object-contain" />
            </div>
            <p className="px-4 flex items-center justify-center border border-gray-300 border-opacity-50 text-base">
                1
            </p>
            <div className="border border-gray-300 border-opacity-50 p-2">
                <Image src={Plus} alt="Plus Icon" className="w-4 h-4 object-contain" />
            </div>
        </div>
    );
}

export default Counter;
