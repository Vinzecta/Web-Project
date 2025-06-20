import Header from "../header/Header";
import Footer from "../footer/footer";
import Product_Detail from "./Product_Detail";
import Description_And_Review from "./Description_And_Review"
import Related from "./Related";

function Detail() {
    return (
        <>
            <Header />
            <Product_Detail />
            <Description_And_Review />
            {/* <Related /> */}
            <Footer />
        </>
    );
}

export default Detail;