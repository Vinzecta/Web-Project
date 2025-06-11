import Rates from "../Rates"
import Avatar from "../../assets/avatar.jpg"

function Description_And_Review() {
    return (
        <section>
            <div>
                <p>Description</p>
                <p>Review</p>
            </div>

            {/* Description */}
            <div>
                <p>Discover the beauty of ceramics with our handcrafted. This exquisite piece combines artistry and function, making it a versatile addition to any space. Whether used as a decorative accent or a practical item, this ceramic creation adds a touch of elegance to your surroundings.</p>
            </div>

            {/* Reviews */}
            <div>
                <div>
                    <Rates />
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <div>
                        <img src={Avatar} alt="Avatar"/>
                        <p>User A</p>
                    </div>
                </div>

                <div>
                    <Rates />
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <div>
                        <img src={Avatar} alt="Avatar"/>
                        <p>User A</p>
                    </div>
                </div>

                <div>
                    <Rates />
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <div>
                        <img src={Avatar} alt="Avatar"/>
                        <p>User A</p>
                    </div>
                </div>

                <div>
                    <Rates />
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <div>
                        <img src={Avatar} alt="Avatar"/>
                        <p>User A</p>
                    </div>
                </div>
                <button className="border">Load More</button>
            </div>

            {/* Your Reviews */}
            <div>
                <h2>Your Review</h2>
                <p>We truly appreciate your review — it helps us make our products even better for you.</p>

                {/* Ratings */}
                <div>
                    <label>Your Ratings</label>
                    <Rates />
                </div>

                <label>Your Review</label>
                <textarea type="text" className="border" />

                <div>
                    <div>
                        <label>Name</label>
                        <input type="text" className="border"></input>
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="text" className="border"></input>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Description_And_Review;