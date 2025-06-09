import Address from "../assets/address.svg"
import Email from "../assets/gmail.svg"
import Phone from "../assets/phone.svg"

function Info() {
    return (
        <section className="flex justify-between p-5">
            <div className="p-5 w-1/2 ml-20">
                <h2 className="text-5xl">Get In Touch!</h2>
                <p className="text-2xl">Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.</p>

                <div>
                    <div className="flex border-b pb-5">
                        <img src={Email} alt="Gmail" className="w-10"/>
                        <div>
                            <h3>Email</h3>
                            <p>vinhtran23042004@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex border-b pb-5">
                        <img src={Phone} alt="Phone Number" className="w-10"/>
                        <div>
                            <h3>Phone Number</h3>
                            <p>0366150204</p>
                        </div>
                    </div>

                    <div className="flex border-b pb-5">
                        <img src={Address} alt="Address" className="w-10"/>
                        <div>
                            <h3>Address</h3>
                            <p>Binh Tan District, HCMC</p>
                        </div>
                    </div>

                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8351529391566!2d106.59439867485648!3d10.747185089399789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d0053d028d1%3A0x808430dd11b1db55!2zUXXhuq1uIELDrG5oIFTDom4sIFRQIEhDTQ!5e0!3m2!1svi!2s!4v1749461175312!5m2!1svi!2s"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps - Binh Tan"
                            />
                    </div>
                </div>
            </div>

            <form className="p-5 w-4/10 mr-20 flex flex-col">
                    <label>Name</label>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <input type="text" className="border"></input>
                            <label>First</label>
                        </div>

                        <div className="flex flex-col">
                            <input type="text" className="border"></input>
                            <label>Last</label>
                        </div>
                    </div>

                    <label>Email</label>
                    <input type="text" className="border"></input>

                    <label>Title</label>
                    <input type="text" className="border"></input>

                    <label>Title</label>
                    <textarea className="border"></textarea>

                    <button type="submit" className="border">Submit</button>
                </form>
        </section>
    );
}

export default Info;