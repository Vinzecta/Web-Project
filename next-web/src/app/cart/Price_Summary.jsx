"use client"

import { useState } from "react";

export default function Price_Summary() {
    let address = "super ultra provip"
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
            <div>
                {!newAddress ? <>
                                    <p>Your address: {modifyAdress} <span onClick={addressModification}>Change?</span></p>
                                </>
                             : <>
                                    <input type="text" value={modifyAdress} onChange={changeAddress} />
                                    <button onClick={saveAddress}>Save</button>
                               </>}
            </div>

            <div className="flex justify-between">
                <p>Subtotal:</p>
                <p>$99</p>
            </div>
        </section>
    );
}