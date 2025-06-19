import Plus from "../assets/plus.svg"
import Minus from "../assets/minus.svg"

function Counter() {
    return (
        <div className="flex">
            <img src={Minus} alt="Minus Icon" className="w-[30px] border"/>
            <p className="px-[5%] h-[30px] border text-base">1</p>
            <img src={Plus} alt="Plus Icon" className="w-[30px] border"/>
        </div>
    );
}

export default Counter;