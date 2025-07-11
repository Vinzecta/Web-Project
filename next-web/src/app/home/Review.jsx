import Rates from "../rates/Rates";
import Avatar from "../../../public/avatar.jpg"
import "./Review.css"
import Image from "next/image";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Review() {
    return (
        <section className="bg-[#F1F4F1] py-20">
            <div className="w-[80%] mx-auto flex flex-col gap-5">
                <p className={`text-sm font-medium ${workSans.className} text-[#C25C5C] uppercase`} id="testimonial">Testimonial</p>
                <h2 className="text-5xl font-medium text-[#C25C5C]" id="review-title">What Our Customer Say</h2>

                <div className="flex flex-wrap justify-between">
                    <div className="w-[49%] mb-10 bg-white p-10 flex flex-col gap-5 review-container">
                        <Rates readOnly/>
                        <p className={`text-base review font-normal ${workSans.className} text-[#424b4a]`}>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="flex gap-3">
                            <Image src={Avatar} alt="Avatar" className="rounded-full"/>
                            <div className="my-auto">
                                <p className={`text-base username font-normal ${workSans.className} text-[#C25C5C]`}>Abc</p>
                                <p className={`text-sm role font-normal ${workSans.className} text-[#424b4a]`}>Business man</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[49%] mb-10 bg-white p-10 flex flex-col gap-5 review-container">
                        <Rates readOnly/>
                        <p className={`text-base review font-normal ${workSans.className} text-[#424b4a]`}>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="flex gap-3">
                            <Image src={Avatar} alt="Avatar" className="rounded-full"/>
                            <div className="my-auto">
                                <p className={`text-base username font-normal ${workSans.className} text-[#C25C5C]`}>Abc</p>
                                <p className={`text-sm role font-normal ${workSans.className} text-[#424b4a]`}>Business man</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[49%] mb-10 bg-white p-10 flex flex-col gap-5 review-container">
                        <Rates readOnly/>
                        <p className={`text-base review font-normal ${workSans.className} text-[#424b4a]`}>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="flex gap-3">
                            <Image src={Avatar} alt="Avatar" className="rounded-full"/>
                            <div className="my-auto">
                                <p className={`text-base username font-normal ${workSans.className} text-[#C25C5C]`}>Abc</p>
                                <p className={`text-sm role font-normal ${workSans.className} text-[#424b4a]`}>Business man</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[49%] mb-10 bg-white p-10 flex flex-col gap-5 review-container">
                        <Rates readOnly/>
                        <p className={`text-base review font-normal ${workSans.className} text-[#424b4a]`}>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="flex gap-3">
                            <Image src={Avatar} alt="Avatar" className="rounded-full"/>
                            <div className="my-auto">
                                <p className={`text-base username font-normal ${workSans.className} text-[#C25C5C]`}>Abc</p>
                                <p className={`text-sm role font-normal ${workSans.className} text-[#424b4a]`}>Business man</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Review;