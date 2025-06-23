"use client";

import Rates from "../rates/Rates"
import Avatar from "../../../public/avatar.jpg"
import { useState } from "react";
import Image from "next/image";
import "./Description_And_Review.css"

function Description_And_Review() {
    const [change, setChange] = useState(false);

    function changeToDescription() {
        setChange(false);
    }

    function changeToReview() {
        setChange(true);
    }


    return (
        <section className="mt-10">
            <div className="w-[80%] mx-auto border-t flex gap-10">
                <button className={`text-base ${!change ? 'border-t-3 border-t-[#C25C5C]' : ''}`} onClick={changeToDescription} id="description">Description</button>
                <button className={`text-base ${change ? 'border-t-3 border-t-[#C25C5C]' : ''}`} onClick={changeToReview} id="review">Review</button>
            </div>

            {!change ? <div className="w-[80%] mx-auto mt-5">
                            <p className="text-base" id="description-content">Discover the beauty of ceramics with our handcrafted. This exquisite piece combines artistry and function, making it a versatile addition to any space. Whether used as a decorative accent or a practical item, this ceramic creation adds a touch of elegance to your surroundings.</p>
                       </div> : 

                       <>
                            <div className="w-[80%] mx-auto mt-5 flex flex-col gap-5">
                                <div className="flex gap-5 p-5 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                    <Image src={Avatar} alt="Avatar" className="w-[60px] rounded-full avatar"/>

                                    <div className="flex flex-col gap-2">
                                        <Rates />
                                        <p>This shit is so ass!</p>
                                    </div>
                                </div>

                                <div className="flex gap-5 p-5 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                    <Image src={Avatar} alt="Avatar" className="w-[60px] rounded-full avatar"/>

                                    <div className="flex flex-col gap-2">
                                        <Rates />
                                        <p>This shit is so ass!</p>
                                    </div>
                                </div>

                                <div className="flex gap-5 p-5 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                    <Image src={Avatar} alt="Avatar" className="w-[60px] rounded-full avatar"/>

                                    <div className="flex flex-col gap-2">
                                        <Rates />
                                        <p>This shit is so ass!</p>
                                    </div>
                                </div>

                                <div className="flex gap-5 p-5 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                    <Image src={Avatar} alt="Avatar" className="w-[60px] rounded-full avatar"/>

                                    <div className="flex flex-col gap-2">
                                        <Rates />
                                        <p>This shit is so ass!</p>
                                    </div>
                                </div>

                                <button className="border text-base w-fit py-3 px-5 border-[#C25C5C] text-[#C25C5C] rounded-3xl mx-auto" id="load-more">Load More</button>
                            </div>
                            
                            <form className="w-[80%] mx-auto mt-10 p-10 flex flex-col gap-5 border border-gray-300 border-opacity-50" id="review-form">
                                <h2 className="text-xl" id="your-review">Your Review</h2>
                                <p className="text-base" id="review-content">We truly appreciate your review — it helps us make our products even better for you.</p>

                                <div className="flex gap-5">
                                    <label className="text-xl" id="your-rating">Your Ratings <span className="text-[red]">*</span></label>
                                    <Rates />
                                </div>

                                <label className="text-xl" id="your-review">Your Review <span className="text-[red]">*</span></label>
                                <textarea type="text" className="bg-[white] h-[120px] px-3 py-3 border border-gray-300 border-opacity-50 label-text" id="review-enter" />

                                <div className="flex gap-5" id="name-info">
                                    <div className="flex flex-col gap-5 w-[50%] name-infos">
                                        <label className="text-base label-text">Name <span className="text-[red]">*</span></label>
                                        <input type="text" className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50"></input>
                                    </div>

                                    <div className="flex flex-col gap-5 w-[50%] name-infos">
                                        <label className="text-base label-text">Email <span className="text-[red]">*</span></label>
                                        <input type="text" className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50"></input>
                                    </div>
                                </div>

                                <button type="submit" className="border text-base w-fit py-3 px-5 border-[#C25C5C] text-[#C25C5C]" id="submit">SUBMIT</button>
                            </form>
                        </>}
        </section>
    );
}

export default Description_And_Review;