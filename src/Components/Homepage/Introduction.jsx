import Image5 from "../../assets/image-5.jpg"
import Image6 from "../../assets/image-6.jpg"

function Introduction() {
    return (
        <section>
            <p>About ShopName</p>
            <h2>At [Shop Name], we offer quality [products/services] with reliable service and fair prices. Proudly serving [your market or location], we're here to help you find what you need—quickly and easily.</h2>

            <div>
                <img src={Image5} alt="Image 5"/>

                <div>
                    <img src={Image6} alt="Image 6"/>
                    <h3>Welcome to ShopName, where passion meets quality to bring you a collection of thoughtfully crafted products. </h3>
                    <p>Every item has a story — made with care, chosen with purpose. Discover the heart and inspiration behind everything we offer.</p>
                    <button>Read More!</button>
                </div>
            </div>
        </section>
    );
}

export default Introduction;