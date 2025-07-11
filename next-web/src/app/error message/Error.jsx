import { Work_Sans } from "next/font/google";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { motion, AnimatePresence } from "framer-motion";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export default function Error({error}) {
    return (
            <motion.div
            initial={{ opacity: 0, x: -20 }}        // bắt đầu lệch trái
            animate={{ opacity: 1, x: 0 }}          // trượt vào đúng vị trí
            exit={{ opacity: 0, x: -20 }}           // trượt ra khi biến mất
            transition={{
            type: "spring",       // hiệu ứng đàn hồi mượt
            stiffness: 250,       // độ cứng (giảm nếu muốn mềm hơn)
            damping: 50           // độ giảm chấn (cao hơn = mượt hơn)
            }} 
            className="bg-red-100 h-fit w-fit rounded-3xl px-2 flex justify-between gap-1 my-auto">
                <CancelOutlinedIcon className="text-red-700 my-auto" style={{fontSize: "15px"}}/>
                <p className={`text-red-700 ${workSans.className} font-medium text-sm`}>{error}</p>
            </motion.div>
    );
}