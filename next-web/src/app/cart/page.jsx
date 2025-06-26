// View Cart Section

import Header from "../header/Header"
import Footer from "../footer/Footer"
import Order_Detail from "./Order_Detail"
import Purchase from "./Purchase";
import Price_Summary from "./Price_Summary";

function Cart() {
    return (
        <>
            <Header />
            <Order_Detail />
            <Price_Summary />
            <Footer />
        </>
    );
}

export default Cart;    
