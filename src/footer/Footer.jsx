import Footer_Navigation from "./Footer_Navigation";

function Footer() {
    return (
        <footer>
            <Footer_Navigation/>
            <section className="flex justify-between border-t border-solid border-black p-5">
                <p className="text-2xl ml-20">&copy; Copyrights</p>
                <p className="text-2xl mr-20">All rights reserved</p>
            </section>
        </footer>
    );
}

export default Footer;