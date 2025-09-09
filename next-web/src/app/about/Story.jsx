import "./Story.css"
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Story() {
    return (
        <section className="w-[80%] mx-auto flex justify-between mt-30" id="story-section">
            <div className="w-[45%] flex flex-col gap-5" id="left-story">
                <p className={`text-sm font-medium ${workSans.className} text-[#C25C5C] uppercase`} id="story">Our Story</p>
                <h1 className="text-5xl font-medium text-[#C25C5C]" id="story-title">Explore Ceramic Shop and Our Ceramic Artistry</h1>
            </div>

            <div className="w-[40%]" id="right-story">
                <p className={`text-base font-normal ${workSans.className} text-[#424b4a]`} id="story-content">Step into the world of Duc Loi, where we’re dedicated to crafting elegant, functional ceramics that elevate your everyday life. Our journey is a testament to the artistry and craftsmanship that infuse each unique piece. Discover our story, meet the talented artisans who bring these creations to life, and experience the exceptional beauty that our ceramics add to your surroundings. Explore the heart and soul of our store, where every piece is a work of art, designed to make your moments more beautiful and special.​</p>
            </div>
        </section>
    );
}

export default Story;