"use client"

import { useState } from "react";
import Image from "next/image";
import Paid from "../../../public/paid.svg"
import User from "../../../public/user.svg"
import Bill from "../../../public/bill.svg"
import Card from "../../../public/card.svg"
import Cash from "../../../public/cash.svg" 
import Select from "../select/Select";  

export default function Price_Summary() {
    return (
        <section>
            <div>
                <Image src={Bill} alt="Paid Logo" />
                <h2>Billing Detail</h2>
            </div>

            <div>
                <div>
                    <Image src={User} alt="User" />
                    <h3>Customer Information</h3>
                </div>

                <p>Name: <span>Vinzecta</span></p>
                <p>Phone Number: <span>0366150204</span></p>
                <p>Address: <span>Binh Tan District, HCMC</span></p>
            </div>

            <div>
                <div>
                    <Image src={Paid} alt="Paid Icon"/>
                    <h3>Total Amount</h3>
                </div>

                <div>
                    <p>Subtotal:</p>
                    <p>$1000</p>
                </div>

                <div>
                    <p>Shipment Cost <span>(3km): </span></p>
                    <p>$1</p>
                </div>

                <div>
                    <input placeholder="Enter the coupon"/>
                    <button>Apply</button>
                </div>

                <div>
                    <p>Total: </p>
                    <p>$1001</p>
                </div>
            </div>

            <div>
                <div>
                    <Image src={Card} alt="Card" />
                    <h3>Payment Method</h3>
                </div>

                <Select />
            </div>
        </section>
    );
}