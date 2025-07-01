import "./Goal.css"

import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Goal() {
    return (
        <section className="w-[80%] mx-auto flex gap-10 py-[5%]" id="goal-section">
            <div className="w-[50%] flex flex-col gap-5" id="vision">
                <h2 className="text-3xl goal-title font-medium text-[#C25C5C]">Our Vision</h2>
                <p className={`text-base goal-content font-normal ${workSans.className} text-[#424b4a]`}>Our vision is to infuse every home with the timeless beauty and functionality of ceramics. We are dedicated to creating elegant, handcrafted ceramic pieces that elevate everyday living, whether it's enjoying a meal, decorating a space, or finding the perfect gift. Our mission is to inspire and bring artistry into daily life, providing a canvas of creativity through ceramics.</p>
            </div>

            <div className="w-[50%] flex flex-col gap-5" id="goal">
                <h2 className="text-3xl goal-title font-medium text-[#C25C5C]">Our Goal</h2>
                <p className={`text-base goal-content font-normal ${workSans.className} text-[#424b4a]`}>Our values are the foundation upon which [Your Ceramicis built. We prioritize craftsmanship, quality, and creativity in all that we do. Integrity, authenticity, and sustainability are at the core of our values, ensuring that our products reflect not just beauty, but also ethical and environmental responsibility. We believe in the power of ceramics to connect people, transform spaces, and create lasting memories.</p>
            </div>
        </section>
    );
}

export default Goal;