function History() {
    return (
        <section className="w-[60%] mt-5 p-5 flex flex-col gap-5 rounded-2xl border border-gray-300 border-opacity-50 mb-10">
            <h2 className="text-[25px] pb-3 border-b">Purchase History</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Products</th>
                        <th>Total Price</th>
                        <th>Payment</th>
                        <th>Status</th>
                    </tr>
                </thead>
            </table>
        </section>
    );
}

export default History;