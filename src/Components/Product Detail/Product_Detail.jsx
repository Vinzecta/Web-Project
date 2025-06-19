import Image7 from "../../assets/image-7.jpg"
import Counter from "../Counter";

function Product_Detail() {
    return (
        <section className="w-[80%] mx-auto mt-10 flex justify-between">
            <div className="h-[20%] w-[50%]">
                <img src={Image7} alt="Image 7" className="h-full w-full object-cover" />  
            </div>

            <div className="w-[40%] flex flex-col gap-5">
                 <p className="text-sm">Home/Ceramic/Ceramic Pot</p>
                 <h4 className="text-base">CERAMIC</h4>
                 <h3 className="text-[32px]">Ceramic Plant Pot</h3>
                 <p className="text-2xl"><span className="line-through">$100</span> $99</p>
                 <p className="text-base">Discover the beauty of ceramics with our handcrafted. This exquisite piece combines artistry and function, making it a versatile addition to any space. Whether used as a decorative accent or a practical item, this ceramic creation adds a touch of elegance to your surroundings.</p>   
                 <div>
                     <Counter />
                     <button className="border text-base">ADD TO CART</button>
                 </div>
            </div>
        </section>
    );
}

export default Product_Detail;