import Image5 from "../../assets/image-5.jpg"

function Category() {
    return (
        <section className="flex w-[80%] gap-5 mt-10 ml-[10%]">
            <div className="flex flex-col gap-5 w-1/2">
                <p className="text-sm">THE BEST OR CERMAICS</p>
                <h2 className="text-5xl">Our Products Category​</h2>
                <p className="text-base">Explore our exquisite collection of ceramic treasures that elevate your spaces and celebrate the artistry of craftsmanship. From dinnerware to decor, each piece in our product range is a testament to quality, style, and the timeless beauty of ceramics.</p>
                <div className="">
                    <img src={Image5} alt="Image 5"/>
                    <div className="">
                        <p className="">Stylish Ceramic Home Decor</p>
                        <p className="">Starting from just $99.00</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5 w-1/2 ">
                <div style={{ backgroundImage: `url(${Image5})` }} className="bg-cover bg-center h-full w-full">
                    <div>
                        <p className="text-2xl">Product A</p>
                        <p className="text-base">Start from $1</p>
                    </div>
                </div>

                <div>
                    <div style={{ backgroundImage: `url(${Image5})` }} className="bg-cover bg-center h-full w-full">
                        <p className="text-2xl">Product A</p>
                        <p className="text-base">Start from $1</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category;