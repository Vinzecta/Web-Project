// Profile Section
import Avatar from "../../assets/avatar.jpg"

function Profile() {
    return (
        <form>
            <h2>Profile Information</h2>

            {/* Avatar */}
            <div>
                <img src={Avatar} alt="Avatar" />
                <button className="border">Change Image</button>
            </div>

            {/* Basic Information */}
            <div>
                <h3>Basic Information</h3>
                <div>
                    <label>First Name</label>
                    <input className="border"></input>
                </div>

                <div>
                    <label>Last Name</label>
                    <input className="border"></input>
                </div>

                <div>
                    <label>Username</label>
                    <input className="border"></input>
                </div>

                <div>
                    <label>Email</label>
                    <input className="border"></input>
                </div>
            </div>

            {/* Address */}
            <div>
                <div>
                    <label>City</label>
                    <select className="border"></select>
                </div>

                <div>
                    <label>Province</label>
                    <select className="border"></select>
                </div>

                <div>
                    <label>District</label>
                    <select className="border"></select>
                </div>

                <div>
                    <label>Ward</label>
                    <select className="border"></select>
                </div>
            </div>
        </form>
    );
}

export default Profile;