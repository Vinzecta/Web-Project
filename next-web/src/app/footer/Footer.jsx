import Footer_Navigation from "./Footer_Navigation";
import "./Footer.css"

function Footer() {
    return (
        <footer className="bg-[#F1F4F1]">
            <Footer_Navigation/>
            <hr />
            <section className="flex w-[80%] mx-auto justify-between py-10 bg-[#F1F4F1]" id="copy-rights">
                <p className="text-base">&copy; Copyrights</p>
                <p className="text-base">All rights reserved</p>
            </section>
        </footer>
    );
}

export default Footer;