import Image5 from "../../assets/image-5.jpg"
import Image6 from "../../assets/image-6.jpg"
import "./Introduction.css"

function Introduction() {
    return (
        <section className="flex flex-col gap-5 mt-10">
            <p className="text-sm w-fit ml-[10%] text-[#025048]">About ShopName</p>
            <h2 className="text-5xl w-[65%] ml-[10%] text-[#025048]">The versatility of ceramics is what makes them truly remarkable, with their presence in various forms such as stoneware and porcelain.</h2>

            <div className="flex w-[80%] ml-[10%] gap-5">
                <img src={Image5} alt="Image 5"/>

                <div className="flex flex-col gap-5 m-auto">
                    <img src={Image6} alt="Image 6"/>
                    <h3 className="text-2xl text-[#025048]">Welcome to Ceramic Shop, where passion meets craftsmanship to bring you a world of timeless beauty and creativity.</h3>
                    <p className="text-base text-[#025048]">Our journey is steeped in the art of ceramics, where each piece tells a unique story. Get to know the heart and soul behind our store.</p>
                    <button className="text-base w-fit py-[10px] px-[30px] border banner-p text-[#025048] border-[#025048]">READ MORE!</button>
                </div>
            </div>
        </section>
    );
}

export default Introduction;