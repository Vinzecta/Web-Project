import Plus from "../../../public/plus.svg"
import Minus from "../../../public/minus.svg"
import Image from "next/image";

function Counter({...props}) {
    return (
        <div {...props}>
            <Image src={Minus} alt="Minus Icon" className="w-[30px] h-[30px] border border-t-[black] border-b-black border-l-black"/>
            <p className="px-[30px] h-[30px] border text-base">1</p>
            <Image src={Plus} alt="Plus Icon" className="w-[30px] h-[30px] border border-t-[black] border-b-black border-r-black"/>
        </div>
    );
}

export default Counter;