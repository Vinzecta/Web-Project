"use client"

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState, useEffect } from 'react';

export default function ArrowUp() {
    const [arrowScroll, setArrowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setArrowScroll(true);
            } else {
                setArrowScroll(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollUp = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
        <>
            {
                arrowScroll ? 
                <div onClick={scrollUp} className='fixed bottom-10 right-10 z-50 rounded-full p-2 bg-[#C25C5C] hover:scale-120 transition-transform duration-300 cursor-pointer'>
                    <ArrowUpwardIcon sx={{color: "white"}} />
                </div> :
                undefined
            }
        </>
    );
};