function Banner ({welcome, title, content, image, button}) {
    return (
        <section className="flex justify-between p-5">
            <div className="ml-20 p-5 w-1/2 m-auto">
                <p>{welcome}</p>
                <h1 className="text-6xl">{title}</h1>
                <p className="text-2xl">{content}</p>
                <button className="border">{button}</button>
            </div>

            <div className="mr-20 w-1/2">
                <img src={image} alt='Banner Image' className="m-auto rounded-lg w-100"/>
            </div>
        </section>
    );
}

export default Banner;