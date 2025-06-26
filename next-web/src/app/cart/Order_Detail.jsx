import Counter from "../counter/Counter";
import Image7 from "../../../public/image-7.jpg";
import Image from "next/image";
import Cancel from "../../../public/cancel.svg"
import Cart from "../../../public/cart.svg"

function Order_Detail() {
    return (
        <section className="w-[80%] mx-auto mt-10">
            <div className="flex gap-5 pb-5 border-b">
                <Image src={Cart} alt="Cart" className="w-[30px]" />
                <h1 className="text-[32px]">Cart</h1>
            </div>

            <div className="flex w-[100%] bg-[#f8f4f4] border border-gray-300 border-opacity-50 mt-10">
                <div className="w-[50px] p-3">&nbsp;</div>
                <div className="w-[80px] p-3">&nbsp;</div>
                <div className="flex-1 text-center p-3">Product</div>
                <div className="flex-1 text-center p-3">Price</div>
                <div className="flex-1 text-center p-3">Quantity</div>
                <div className="flex-1 text-center p-3">Subtotal</div>
            </div>

            <div className="flex w-[100%] border-b border-l border-r border-gray-300 border-opacity-50">
                <div className="w-[50px] p-3 my-auto"><Image src={Cancel} alt="Cancel" className="w-[20px]"/></div>
                <div className="w-[80px] p-3"><Image src={Image7} alt="Image7" className="w-[80px]" /></div>
                <div className="flex-1 p-3 text-center my-auto">Ceramic Plant Plot</div>
                <div className="flex-1 p-3 text-center my-auto">$100</div>
                <div className="flex-1 p-3 my-auto"><Counter className="flex items-center w-fit h-fit mx-auto"/></div>
                <div className="flex-1 p-3 text-center my-auto">$100</div>
            </div>

            <div className="flex w-[100%] border-b border-l border-r border-gray-300 border-opacity-50">
                <div className="w-[50px] p-3 my-auto"><Image src={Cancel} alt="Cancel" className="w-[20px]"/></div>
                <div className="w-[80px] p-3"><Image src={Image7} alt="Image7" className="w-[80px]" /></div>
                <div className="flex-1 p-3 text-center my-auto">Ceramic Plant Pot</div>
                <div className="flex-1 p-3 text-center my-auto">$100</div>
                <div className="flex-1 p-3 my-auto"><Counter className="flex items-center w-fit h-fit mx-auto"/></div>
                <div className="flex-1 p-3 text-center my-auto">$100</div>
            </div>

            <div className="flex w-[100%] border-b border-l border-r border-gray-300 border-opacity-50">
                <div className="w-[50px] p-3 my-auto"><Image src={Cancel} alt="Cancel" className="w-[20px]"/></div>
                <div className="w-[80px] p-3"><Image src={Image7} alt="Image7" className="w-[80px]" /></div>
                <div className="flex-1 p-3 text-center my-auto">Ceramic Plant Pot</div>
                <div className="flex-1 p-3 text-center my-auto">$100</div>
                <div className="flex-1 p-3 my-auto"><Counter className="flex items-center w-fit h-fit mx-auto"/></div>
                <div className="flex-1 p-3 text-center my-auto">$100</div>
            </div>
        </section>
    );
}

export default Order_Detail;
