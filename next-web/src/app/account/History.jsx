import "./History.css"
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function History() {
    return (
        // <section className="w-[60%] mt-5 p-5 flex flex-col gap-5 rounded-2xl border border-gray-300 border-opacity-50 mb-10" id="history-section">
        //     <h2 className="text-[25px] pb-3 border-b">Purchase History</h2>

        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>ID</th>
        //                 <th>Date</th>
        //                 <th>Products</th>
        //                 <th>Total Price</th>
        //                 <th>Payment</th>
        //                 <th>Status</th>
        //             </tr>
        //         </thead>
        //     </table>
        // </section>

        <section className="bg-white rounded-lg shadow-md p-5 w-[60%] h-fit mx-auto" id="history-section">
            <h2 className="text-xl font-medium mb-2 text-[#C25C5C]">Purchase History</h2>
            <hr className="mb-4" />

            <div className="overflow-x-auto overflow-y-auto max-h-[500px]">
                <table className={`min-w-full text-left text-sm ${workSans.className}`}>
                <thead>
                    <tr className="font-semibold whitespace-nowrap">
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Products</th>
                    <th className="px-4 py-2">Total Price</th>
                    <th className="px-4 py-2">Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Table rows here */}
                    <tr className="border-t">
                    <td className="px-4 py-2">001</td>
                    <td className="px-4 py-2">2025-06-27</td>
                    <td className="px-4 py-2">Product A</td>
                    <td className="px-4 py-2">$99.99</td>
                    <td className="px-4 py-2 text-green-600 font-medium">Paid</td>
                    </tr>

                    <tr className="border-t">
                    <td className="px-4 py-2">001</td>
                    <td className="px-4 py-2">2025-06-27</td>
                    <td className="px-4 py-2">Product A</td>
                    <td className="px-4 py-2">$99.99</td>
                    <td className="px-4 py-2 text-green-600 font-medium">Paid</td>
                    </tr>

                    <tr className="border-t">
                    <td className="px-4 py-2">001</td>
                    <td className="px-4 py-2">2025-06-27</td>
                    <td className="px-4 py-2">Product A</td>
                    <td className="px-4 py-2">$99.99</td>
                    <td className="px-4 py-2 text-green-600 font-medium">Paid</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </section>

    );
}

export default History;