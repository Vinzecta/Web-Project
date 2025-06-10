import Plus from "../assets/plus.svg"
import Minus from "../assets/minus.svg"

function Counter() {
    return (
        <div>
            <img src={Minus} alt="Minus Icon" />
            <p>1</p>
            <img src={Plus} alt="Plus Icon" />
        </div>
    );
}

export default Counter;