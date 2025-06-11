// View Cart Section

import Header from "../header/Header"
import Footer from "../footer/Footer"
import Order_Detail from "./Order_Detail"
import Purchase from "./Purchase";

function Cart() {
    return (
        <>
            <Header />

            <h1>Cart</h1>
            <Order_Detail />
            <Purchase />
            <Footer />
        </>
    );
}

export default Cart;    
