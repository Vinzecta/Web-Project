import Momo from "../../assets/momo.svg"
import Zalopay from "../../assets/zalopay.svg"
import Paypal from "../../assets/paypal.svg"
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function Payment() {
    return (
        <section>
            <h2>Payment Methods</h2>
            <p>Your Cards & Wallets</p>

            <div>
                <div>
                    <img src={Momo} alt="Momo"/>
                    <p>Momo</p>
                    <RemoveCircleIcon />
                </div>

                <div>
                    <img src={Zalopay} alt="Zalopay"/>
                    <p>Zalopay</p>
                    <RemoveCircleIcon />
                </div>

                <div>
                    <img src={Paypal} alt="Paypal"/>
                    <p>Paypal</p>
                    <RemoveCircleIcon />
                </div>
            </div>

            <button className="border">Add New Payment Method</button>
        </section>
    );
}

export default Payment;