import Counter from "../counter/Counter";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Image7 from "../../../public/image-7.jpg";
import Image from "next/image";

function Order_Detail() {
    return (
        <section className="w-[80%] mx-auto mt-5 text-[16px]">
            <table className="w-[100%] text-center align-middle">
                <thead>
                    <tr className="bg-[#f1f4f1] border border-gray-300 border-opacity-50">
                        <th className="py-3">&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody className="border border-gray-300 border-opacity-50">
                    <tr>
                        <td className="p-2"><HighlightOffIcon /></td>
                        <td className="p-2"> <Image src={Image7} alt="Image 7" className="w-auto h-20 object-contain" /></td>
                        <td className="px-20">Ceramic Plant Pot</td>
                        <td className="px-20">$99</td>
                        <td className="px-20"><Counter className="flex justify-center" /></td>
                        <td className="px-20">$99</td>
                    </tr>
                </tbody>

                <tbody className="border border-gray-300 border-opacity-50">
                    <tr>
                        <td className="p-2"><HighlightOffIcon /></td>
                        <td className="p-2"> <Image src={Image7} alt="Image 7" className="w-auto h-20 object-contain" /></td>
                        <td className="px-20">Ceramic Plant Pot</td>
                        <td className="px-20">$99</td>
                        <td className="px-20"><Counter className="flex justify-center" /></td>
                        <td className="px-20">$99</td>
                    </tr>
                </tbody>

                <tbody className="border border-gray-300 border-opacity-50">
                    <tr>
                        <td className="p-2"><HighlightOffIcon /></td>
                        <td className="p-2"> <Image src={Image7} alt="Image 7" className="w-auto h-20 object-contain" /></td>
                        <td className="px-20">Ceramic Plant Pot</td>
                        <td className="px-20">$99</td>
                        <td className="px-20"><Counter className="flex justify-center" /></td>
                        <td className="px-20">$99</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Order_Detail;
