// View Cart Section

import Header from "../header/Header"
import Footer from "../footer/Footer"
import Order_Detail from "./Order_Detail"
import Price_Summary from "./Price_Summary";
import ArrowUp from "../arrow up/ArrowUp";

function Cart() {
    return (
        <>
            <Header />
            <Order_Detail />
            <Price_Summary />
            <Footer />
            <ArrowUp />
        </>
    );
}

export default Cart;    
