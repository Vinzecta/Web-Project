import Momo from "../../../public/momo.svg"
import Zalopay from "../../../public/zalopay.svg"
import Paypal from "../../../public/paypal.svg"
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Image from "next/image";

function Payment() {
    return (
        <section className="w-[60%] mt-5 p-5 flex flex-col gap-5 rounded-2xl border border-gray-300 border-opacity-50 mb-10">
            <h2 className="text-[25px] pb-3 border-b">Payment Methods</h2>
            <p>Your Cards & Wallets</p>

            <div className="flex flex-col gap-5">
                <div className="flex justify-between h-[80px] p-3 border border-gray-300 border-opacity-50 rounded-3xl">
                    <div className="flex gap-5">
                        <Image src={Momo} alt="Momo" className="w-[50px]"/>
                        <p className="my-auto">Momo</p>
                    </div>
                    <RemoveCircleIcon className="my-auto" />
                </div>

                <div className="flex justify-between h-[80px] p-3 border border-gray-300 border-opacity-50 rounded-3xl">
                    <div className="flex gap-5">
                        <Image src={Zalopay} alt="Zalopay" className="w-[50px] my-auto"/>
                        <p className="my-auto">Zalopay</p>
                    </div>
                    <RemoveCircleIcon className="my-auto" />
                </div>

                <div className="flex justify-between h-[80px] p-3 border border-gray-300 border-opacity-50 rounded-3xl">
                    <div className="flex gap-5">
                        <Image src={Paypal} alt="Paypal" className="w-[50px]"/>
                        <p className="my-auto">Paypal</p>
                    </div>
                    <RemoveCircleIcon className="my-auto" />
                </div>
            </div>

            <button className="border border-[#C25C5C] text-[#C25C5C] rounded-2xl w-[100%] py-3 px-5 mx-auto">Add New Payment Method</button>
        </section>
    );
}

export default Payment;