function Purchase() {
    return (
        <section>
            <h2>Payment Method</h2>

            <div>
                <select className="border">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </select>
                <p>Add new payment method</p>
            </div>

            <button className="border">Place Order $101</button>
        </section>
    );
}

export default Purchase;