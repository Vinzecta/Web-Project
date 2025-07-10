import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export default function Error({error}) {
    return (
        <div className="bg-red-100 h-fit p-5 w-[100%]">
            <p className={`text-red-700 ${workSans.className} font-medium text-sm`}>{error}</p>
        </div>
    );
}