import Header from "../header/Header";
import Footer from "../footer/Footer";
import Product_Detail from "./Product_Detail";
import Description_And_Review from "./Description_And_Review"
import Related from "./Related";
import ArrowUp from "../arrow up/ArrowUp";

function Detail() {
    return (
        <>
            <Header />
            <Product_Detail />
            <Description_And_Review />
            <Related />
            <Footer />
            <ArrowUp />
        </>
    );
}

export default Detail;