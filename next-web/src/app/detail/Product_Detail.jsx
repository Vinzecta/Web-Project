import Image7 from "../../../public/image-7.jpg"
import Counter from "../counter/Counter";
import "./Product_Detail.css"
import Image from "next/image";

function Product_Detail() {
    return (
        <section className="w-[80%] mx-auto mt-10 flex gap-10" id="detail-section">
            <div className="w-[50%] flex gap-2" id="image-container">
                <div className="flex flex-col gap-2 w-fit h-fit" id="small-image-container">
                    <Image src={Image7} alt="Image 7" className="w-[120px]" />
                    <Image src={Image7} alt="Image 7" className="w-[120px]" />
                </div>

                <Image src={Image7} alt="Image 7" className="h-full w-full object-cover" />
            </div>

            <div className="w-[50%] flex flex-col gap-5" id="info-container">
                 <p className="text-sm">Home / Ceramic / Ceramic Pot</p>
                 <h4 className="text-base" id="product-category">CERAMIC, CERAMIC COATING, POTTERY</h4>
                 <h3 className="text-[32px]" id="product-name">Ceramic Plant Pot</h3>
                 <p className="text-2xl" id="price"><span className="line-through">$100</span> $99</p>
                 <p className="text-base" id="description">Discover the beauty of ceramics with our handcrafted. This exquisite piece combines artistry and function, making it a versatile addition to any space. Whether used as a decorative accent or a practical item, this ceramic creation adds a touch of elegance to your surroundings.</p>   
                 <div className="flex gap-10 pb-5 border-b" id="quantity">
                     <Counter className="flex my-auto" />
                     <button className="text-base text-[#C25C5C] w-fit py-[10px] px-[30px] border border-[#C25C5C] banner-p">ADD TO CART</button>
                 </div>

                 <p className="text-base" id="category">Categories: <span>Ceramic, Ceramic Coating, Pottery</span></p>
            </div>
        </section>
    );
}

export default Product_Detail;