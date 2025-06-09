function Banner ({welcome, title, content, image, button}) {
    return (
        <section className="flex justify-between p-5">
            <div className="ml-20">
                <p>{welcome}</p>
                <h1>{title}</h1>
                <p>{content}</p>
                <button>{button}</button>
            </div>

            <div className="mr-20">
                <img src={image} alt='Banner Image'/>
            </div>
        </section>
    );
}

export default Banner;