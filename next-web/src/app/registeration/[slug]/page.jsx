"use client"

import SignIn from "../SignIn"
import SignUp from "../SignUp"
import Forgot from "../Forgot"
import { useRouter, useParams } from "next/navigation"
import { useEffect } from "react"
import "../page.css"
import { notFound } from "next/navigation"

export default function RegisterationPage() {
    const params = useParams();

    const validSlug = ["sign-in", "sign-up", "forgot"];
    if(!validSlug.includes(params.slug)) {
        return notFound();
    }

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