import "./Story.css"

function Story() {
    return (
        <section className="w-[80%] mx-auto flex justify-between mt-30" id="story-section">
            <div className="w-[45%] flex flex-col gap-5" id="left-story">
                <p className="text-sm" id="story">Our Story</p>
                <h1 className="text-5xl" id="story-title">Explore CeramicShop and Our Ceramic Artistry</h1>
            </div>

            <div className="w-[40%]" id="right-story">
                <p className="text-base" id="story-content">Step into the world of CeramicShop, where we’re dedicated to crafting elegant, functional ceramics that elevate your everyday life. Our journey is a testament to the artistry and craftsmanship that infuse each unique piece. Discover our story, meet the talented artisans who bring these creations to life, and experience the exceptional beauty that our ceramics add to your surroundings. Explore the heart and soul of our store, where every piece is a work of art, designed to make your moments more beautiful and special.​</p>
            </div>
        </section>
    );
}

export default Story;