// Account Section

import Header from "../header/Header";
import Footer from "../footer/Footer";
import History from "./History";
import Payment from "./Payment";
import Profile from "./Profile";
import ResetPassword from "./ResetPassword";

function Account() {
    return (
        <>
            <Header />

            <section>
                <p>Profile Information</p>
                <p>Reset Password</p>
                <p>Payment Methods</p>
                <p>Purchase History</p>
            </section>

            <Profile />
            <ResetPassword />
            <Payment />
            <History />
            
            <Footer />
        </>
    );
}

export default Account;