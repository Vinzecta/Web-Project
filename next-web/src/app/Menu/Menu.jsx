import { CloseCircleOutlined } from "@ant-design/icons"
import Image from "next/image"
import Avatar from "../../../public/avatar.jpg"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export default function MenuBar() {
    return (
        <section className="h-screen absolute bg-[#00000066] w-[100%] top-0 z-1">
            <div className="h-[100%] w-[35%] bg-white ml-auto">
                <div className="w-[100%] flex justify-between py-3 px-5 border-b border-gray-300 border-opacity-50">
                    <div className="flex gap-5">
                        <Image src={Avatar} className="rounded-full w-[50px]" alt="Avatar" />
                        <p className={`my-auto ${workSans.className} font-medium text-[#424b4a]`}>Username</p>
                    </div>

                    <CloseCircleOutlined />
                </div>


            </div>
        </section>
    )
}