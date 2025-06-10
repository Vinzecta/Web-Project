import Rates from "../Rates";
import Avatar from "../../assets/avatar.jpg"

function Review() {
    return (
        <section>
            <p>Testimonial</p>
            <h2>What Our Customer Say</h2>

            <div>
                <div>
                    <Rates/>
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div>
                        <img src={Avatar} alt="Avatar"/>
                        <div>
                            <p>Abc</p>
                            <p>Business man</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Rates/>
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div>
                        <img src={Avatar} alt="Avatar"/>
                        <div>
                            <p>Abc</p>
                            <p>Business man</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Rates/>
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div>
                        <img src={Avatar} alt="Avatar"/>
                        <div>
                            <p>Abc</p>
                            <p>Business man</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Rates/>
                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div>
                        <img src={Avatar} alt="Avatar"/>
                        <div>
                            <p>Abc</p>
                            <p>Business man</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Review;