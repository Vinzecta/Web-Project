"use client"

import { useState } from "react";
import Image from "next/image";
import Paid from "../../../public/paid.svg"
import User from "../../../public/user.svg"

export default function Price_Summary() {
    let address = "super ultra provip";
    const [newAddress, setnewAddress] = useState(false);
    const [modifyAdress, setmodifyAddress] = useState(address);

    function addressModification() {
        setnewAddress(true);
    }

    function saveAddress() {
        setnewAddress(false);
    }

    function changeAddress(e) {
        setmodifyAddress(e.target.value);
    }

    return (
        <section className="w-[80%] mx-auto mt-10">
            <div className="flex gap-2">
                <Image src={Paid} alt="Billing paid" className="w-[32px]"/>
                <h2 className="text-[32px]">Billing Detail</h2>
            </div>

            <div className="w-[100%] p-3">
                <div>
                    <Image src={User} alt="user" />
                    <h3 className="text-[20px]">Customer Information</h3>
                </div>

                <div>
                    <p>Customer Name: <span>Vinzecta</span></p>
                    {!newAddress ? <>
                                        <p>{modifyAdress} <span onClick={addressModification}>Change?</span></p>
                                    </>
                                : <>
                                            <input type="text" value={modifyAdress} onChange={changeAddress} />
                                            <button onClick={saveAddress}>Save</button>
                                    </>}
                </div>
            </div>
        </section>
    );
}