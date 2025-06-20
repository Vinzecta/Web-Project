import Plus from "../assets/plus.svg"
import Minus from "../assets/minus.svg"
import Image from "next/image";

function Counter({...props}) {
    return (
        <div {...props}>
            <Image src={Minus} alt="Minus Icon" className="w-[30px] h-[30px] border"/>
            <p className="px-[30px] h-[30px] border text-base">1</p>
            <Image src={Plus} alt="Plus Icon" className="w-[30px] h-[30px] border"/>
        </div>
    );
}

export default Counter;