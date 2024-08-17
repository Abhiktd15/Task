import { faCamera, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

const Profile = () => {
    const inputRef = useRef(null);
    const [location, setLocation] = useState("Enter a location");
    const [image, setImage] = useState("");

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleClick = () => {
        inputRef.current.click();
    };
    const handleChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };
    

    return (
        <div className="flex flex-col items-center justify-center mt-10  bg-white max-sm:mt-20">
            <div className=" w-auto bg-white  ">
                <h2 className="text-4xl font-extrabold mb-4">
                    Welcome! Let's create your profile
                </h2>
                <p className="text-gray-500 font-medium mb-6">
                    Let others get to know you better! You can do these later
                </p>

                <div className="mb-6">
                    <h3 className="text-lg font-extrabold mb-2 pl-14">Add an avatar</h3>
                    <div className="grid grid-cols-3 mt-5">
                        <div
                        className="w-40 h-40 ml-14 flex justify-center cursor-pointer  items-center rounded-full border-dotted border-4 border-gray-300 hover:scale-105"
                        onClick={handleClick}
                        >
                        {image ? (
                            <img
                            className="rounded-full h-40 w-40"
                            src={URL.createObjectURL(image)}
                            alt=""
                            />
                        ) : (
                            <FontAwesomeIcon
                            icon={faCamera}
                            color="lightgray "
                            className="size-6 hover:scale-110"
                            />
                        )}
                        <input
                            type="file"
                            onChange={handleChange}
                            ref={inputRef}
                            style={{ display: "none" }}
                        />
                        </div>
                        <div className="pt-10 pl-5 max-sm:invisible">
                            <span onClick={handleClick} className="border-2 border-gray-400 hover:bg-gray-100   rounded-lg font-semibold cursor-pointer mt-5 p-2">Choose Image</span>
                            <p className="text-gray-600 font-semibold mt-5">
                                <FontAwesomeIcon icon={faGreaterThan} className="size-4 " />
                                {' '}
                                Or choose one of our defaults
                            </p>
                        </div>
                    </div>
                </div>

                <div >
                    <h3 className="text-lg font-bold mb-2">Add your location</h3>
                    <input
                        type="text"
                        value={location}
                        style={{borderTopStyle:"none",borderLeftStyle:"none",borderRightStyle:"none"}}
                        onChange={handleLocationChange}
                        onClick={() => {setLocation('')}}
                        className="w-full px-3 py-2 border-gray-300 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter your location"
                    />
                </div>

            </div>
        </div>
    );
};

export default Profile;
