import Address from "../../../public/address.svg"
import Email from "../../../public/gmail.svg"
import Phone from "../../../public/phone.svg"
import "./Info.css"
import Image from "next/image"
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

function Info() {
    return (
        <section className="w-[80%] mx-auto py-20 flex justify-between gap-5" id="info-section">
            <div className="flex flex-col gap-5 w-[35%]" id="left">
                <h2 className="text-5xl font-medium text-[#C25C5C]" id="info-title">Get In Touch!</h2>
                <p className={`text-base font-normal text-[#424b4a] ${workSans.className}`} id="info-content">Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.</p>

                <div className="flex flex-col">
                    <div className="flex gap-2 py-5 border-b">
                        <Image src={Email} alt="Gmail" className="w-[18px] icon"/>
                        <div>
                            <h3 className={`text-sm info font-normal text-[#C25C5C] ${workSans.className}`}>EMAIL</h3>
                            <p className={`text-base detail font-normal text-[#424b4a] ${workSans.className}`}>vinhtran23042004@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex gap-2 py-5 border-b">
                        <Image src={Phone} alt="Phone Number" className="w-[18px] icon"/>
                        <div>
                            <h3 className={`text-sm info font-normal text-[#C25C5C] ${workSans.className}`}>PHONE NUMBER</h3>
                            <p className={`text-base detail font-normal text-[#424b4a] ${workSans.className}`}>0366150204</p>
                        </div>
                    </div>

                    <div className="flex gap-2 py-5 border-b">
                        <Image src={Address} alt="Address" className="w-[18px] icon"/>
                        <div>
                            <h3 className={`text-sm info font-normal text-[#C25C5C] ${workSans.className}`}>ADDRESS</h3>
                            <p className={`text-base detail font-normal text-[#424b4a] ${workSans.className}`}>Binh Tan District, HCMC</p>
                        </div>
                    </div>

                    <div className="py-5">
                        <iframe id="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8351529391566!2d106.59439867485648!3d10.747185089399789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d0053d028d1%3A0x808430dd11b1db55!2zUXXhuq1uIELDrG5oIFTDom4sIFRQIEhDTQ!5e0!3m2!1svi!2s!4v1749461175312!5m2!1svi!2s"
                            width="100%"
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

            <form className="flex flex-col gap-5 w-[65%] p-10 bg-[#F1F4F1] h-fit" id="right">
                    <label className={`text-base contact-info text-[#424b4a] font-bold ${workSans.className}`}>Name <span className="text-[red]">*</span></label>
                    <div className="flex justify-between" id="name-section">
                        <div className="flex flex-col gap-2 w-[45%] name-detail">
                            <input type="text" className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 text-[#424b4a] font-normal ${workSans.className}`}></input>
                            <label className={`text-xs text-[#424b4a] font-normal ${workSans.className}`}>First</label>
                        </div>

                        <div className="flex flex-col gap-2 w-[45%] name-detail">
                            <input type="text" className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 text-[#424b4a] font-normal ${workSans.className}`}></input>
                            <label className={`text-xs text-[#424b4a] font-normal ${workSans.className}`}>Last</label>
                        </div>
                    </div>

                    <label className={`text-base contact-info text-[#424b4a] font-bold ${workSans.className}`}>Email <span className="text-[red]">*</span></label>
                    <input type="text" className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 text-[#424b4a] font-normal ${workSans.className}`}></input>

                    <label className={`text-base contact-info text-[#424b4a] font-bold ${workSans.className}`}>Title <span className="text-[red]">*</span></label>
                    <input type="text" className={`bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 text-[#424b4a] font-normal ${workSans.className}`}></input>

                    <label className={`text-base contact-info text-[#424b4a] font-bold ${workSans.className}`}>Description <span className="text-[red]">*</span></label>
                    <textarea className={`bg-[white] h-[120px] px-3 py-3 border border-gray-300 border-opacity-50 text-[#424b4a] font-normal ${workSans.className}`}></textarea>

                    <button type="submit" className={`text-base w-fit py-3 px-5 text-center border banner-p text-[#C25C5C] border-[#C25C5C] font-medium ${workSans.className} hover:bg-[#C25C5C] hover:text-white delay-75 duration-300 flex justify-center items-center`} id="submit">SUBMIT</button>
                </form>
        </section>
    );
}

export default Info;