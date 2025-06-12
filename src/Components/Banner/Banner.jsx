function Banner ({welcome, title, content, image, button}) {
    return (
        <section className="">
            <div className="">
                <p className="text-sm">{welcome}</p>
                <h1 className="text-6xl">{title}</h1>
                <p className="text-2xl">{content}</p>
                <button className="text-base">{button}</button>
            </div>

            <div className="">
                <img src={image} alt='Banner Image' className="m-auto rounded-lg w-100"/>
            </div>
        </section>
    );
}

export default Banner;