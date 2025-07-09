"use client"

import SignIn from "../SignIn"
import SignUp from "../SignUp"
import Forgot from "../Forgot"
import { useRouter, useParams } from "next/navigation"
import { useEffect } from "react"
import "../page.css"

export default function RegisterationPage() {
    const params = useParams();
    const router = useRouter();

    useEffect(() => {
        const validSlug = ["sign-in", "sign-up", "forgot"];

        if(!validSlug.includes(params.slug)) {
            router.push("/home");
        }
    }, [params.slug, router]);

    return (
        <section className="w-[30%] h-[90%] m-auto flex bg-white" id="registeration-section">
                {
                    params.slug === "sign-in" ? <SignIn /> :
                    params.slug === "sign-up" ? <SignUp /> :
                    params.slug === "forgot" ? <Forgot /> : undefined
                }
        </section>
    );
}