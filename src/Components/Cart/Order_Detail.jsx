import Counter from "../Counter";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Image7 from "../../assets/image-7.jpg";

function Order_Detail() {
    return (
        <table>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src={Image7} alt="Image 7" /></td>
                    <td>Ceramic Plant Pot</td>
                    <td>$99</td>
                    <td><Counter /></td>
                    <td>$99</td>
                    <td><DisabledByDefaultIcon /></td>
                </tr>
                <tr>
                    <td>
                        <p>Your address: Binh Tan District, Ho Chi Minh City <span>Change?</span></p>
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>Subtotal:</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>$99</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>Shipment Cost:</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>$2</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>Discount</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>-$0</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>Have Coupon?</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>$101</td>
                    <td>&nbsp;</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Order_Detail;
