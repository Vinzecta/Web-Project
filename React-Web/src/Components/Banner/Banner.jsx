import "./Banner.css"

function Banner ({welcome, title, content, image, button}) {
    return (
        <section className="bg-[#C25C5C] flex justify-around py-[2%]" id="banner-section">
            <div className="w-1/2 my-auto flex flex-col gap-5 relative left-15" id="banner-left">
                <p className="text-sm text-white banner-p">{welcome}</p>
                <h1 className="text-6xl text-white w-[50%]" id="banner-h1">{title}</h1>
                <p className="text-2xl text-white banner-p">{content}</p>
                {button ? <button className="text-base text-white w-fit py-[10px] px-[30px] border border-white banner-p">{button}</button> : undefined}
            </div>

            <div className="w-fit relative right-14" id="banner-right">
                <img src={image} alt='Banner Image' className="m-auto rounded-lg w-100"/>
            </div>
        </section>
    );
}

export default Banner;