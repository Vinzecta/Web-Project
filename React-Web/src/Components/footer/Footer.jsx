import Footer_Navigation from "./Footer_Navigation";
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <Footer_Navigation/>
            <section className="flex justify-between p-10 border-t bg-[#F1F4F1]" id="copy-rights">
                <p className="text-base ml-35">&copy; Copyrights</p>
                <p className="text-base mr-35">All rights reserved</p>
            </section>
        </footer>
    );
}

export default Footer;