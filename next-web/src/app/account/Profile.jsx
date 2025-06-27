// Profile Section
import Avatar from "../../../public/avatar.jpg"
import Image from "next/image";
import Information from "../../../public/information.svg"
import Address from "../../../public/address.svg"
import "./Profile.css"

function Profile() {
    return (
        <form className="w-[60%] mt-5 p-5 flex flex-col gap-5 rounded-2xl border border-gray-300 border-opacity-50 mb-10" id="profile-form">
            <h2 className="text-[25px] pb-3 border-b" id="profile-information">Profile Information</h2>

            {/* Avatar */}
            <div className="flex flex-col gap-5">
                <Image src={Avatar} alt="Avatar" className="w-[120px] rounded-full mx-auto" id="profile-image"/>
                <button className="py-3 w-fit px-5 mx-auto rounded-3xl border border-[#C25C5C] text-[#C25C5C]" id="change-image">Change Image</button>
            </div>

            {/* Basic Information */}
            <div className="flex flex-col gap-5">
                <div className="flex gap-2 pb-3 border-b">
                    <Image src={Information} alt="Information" className="w-[20px]" />
                    <h3 className="text-[20px]">Basic Information</h3>
                </div>

                <div className="flex justify-between basic-info">
                    <div className="w-[45%] flex flex-col gap-2 flex-info">
                        <label>First Name</label>
                        <input className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%]"></input>
                    </div>

                    <div className="w-[45%] flex flex-col gap-2 flex-info">
                        <label>Last Name</label>
                        <input className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%]"></input>
                    </div>
                </div>

                <div className="flex justify-between basic-info">
                    <div className="w-[45%] flex flex-col gap-2 flex-info">
                        <label>Username</label>
                        <input className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50"></input>
                    </div>

                    <div className="w-[45%] flex flex-col gap-2 flex-info">
                        <label>Email</label>
                        <input className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50"></input>
                    </div>
                </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-5">
                <div className="flex gap-2 pb-3 border-b">
                    <Image src={Address} alt="Address" className="w-[20px]" />
                    <h3 className="text-[20px]">Address</h3>
                </div>

                <div className="flex justify-between" id="address-info">
                    <div className="w-[20%] flex flex-col gap-2 address-flex">
                        <label>City</label>
                        <select className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%]"></select>
                    </div>

                    <div className="w-[20%] flex flex-col gap-2 address-flex">
                        <label>Province</label>
                        <select className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%]"></select>
                    </div>

                    <div className="w-[20%] flex flex-col gap-2 address-flex">
                        <label>District</label>
                        <select className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%]"></select>
                    </div>

                    <div className="w-[20%] flex flex-col gap-2 address-flex">
                        <label>Ward</label>
                        <select className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50 w-[100%]"></select>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label>Street Address</label>
                    <input type="text" className="bg-[white] h-[50px] px-3 border border-gray-300 border-opacity-50"></input>
                </div>

                <button className="border border-[#C25C5C] text-[#C25C5C] rounded-2xl w-fit py-3 px-5 mx-auto">Save Changes</button>
            </div>
        </form>
    );
}

export default Profile;