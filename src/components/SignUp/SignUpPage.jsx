
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Link,useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const navigate = useNavigate()
    const inputRef = useRef(null)

    const handleSubmit = () => {
        navigate('/profile')
    }
    const handleShowPassword =() => {
        if(inputRef.current.type ==='password'){
            inputRef.current.type = 'text'
        }else{
            inputRef.current.type = 'password'
        }
    }
    
    return (
        <div className="flex h-screen">
            
            {/* Left Pane */}
            <div style={{backgroundColor:"#F2D184"}} className="hidden lg:flex overflow-y-clip  justify-center flex-1 text-black">
                <div className="flex-col overflow-visible">
                    {/* <h1 style={{fontWeight:"800",textTransform:"uppercase",fontFamily:"Mona Sans",animation:"dribble 1.5s infinite alternate"}} className="text-3xl italic mt-4 ml-10 ">Dribble</h1> */}
                    <img src="https://logowik.com/content/uploads/images/dribbble.jpg" className="w-20 h-20 ml-10 mix-blend-multiply"/>
                    <h2 style={{color:"#845F13",fontWeight:"800"}} className="text-4xl ml-10  p-10 ">Discover the world's top Designers & Creatives.</h2>
                    <h1 style={{color:"#845F",fontWeight:"600"}} className="absolute pt-80 mt-10 ml-20 lg:mt-4">Art by <span className="hover:underline cursor-pointer">Abhishek</span></h1>
                    <img src="https://img.freepik.com/free-photo/fun-3d-illustration-cartoon-teenage-girl-with-rain-gear_183364-80088.jpg?w=360&t=st=1712053178~exp=1712053778~hmac=674b061410f9f10a04ffed427c818b8995ebb6bbba7cf7dad011eeb897039fb9" className="w-60 h-100 ml-80 opacity-80 rounded-lg lg:ml-20  xl:ml-80 "/>
                </div>
            </div>
            
            {/* Right Pane */}
            <div className="w-full bg-white lg:w-2/3 flex items-center justify-center">
                
                <div className="max-w-md w-full p-6">
                <h1 style={{fontWeight:"800"}} className="text-3xl font-semibold mb-6 text-gray-900 text-center">
                    Sign Up to Dribble
                </h1>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-row gap-4 max-sm:flex-col">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-bold text-gray-700"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                required
                                className="mt-1 p-2 w-full bg-gray-200 border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-bold text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 p-2 w-full bg-gray-200 border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="block text-sm font-bold text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            ref={inputRef}
                            name="password"
                            placeholder="6+ characters"
                            required
                            className="mt-1 p-2 w-full bg-gray-200 border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                        />
                        <FontAwesomeIcon icon={faEye} onClick={handleShowPassword} className="absolute mt-4 right-6 cursor-pointer hover:text-gray-400"/>
                    </div>
                    <div className="flex">
                        <input type="checkbox" required className="flex items-start"/>
                        <p className="p-3 font-extralight text-gray-500">Creating an account means you're okay with our <span className="text-blue-500 font-semibold">Terms of Service, Privacy Policy,</span> and our default <span className="text-blue-500 font-semibold">Notification Settings.</span></p>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full font-bold text-white bg-pink-600 p-2 rounded-md hover:bg-pink-500 focus:outline-none focus:bg-pink-400  focus:ring-2 focus:ring-offset-2 focus:ring-pink-600 transition-colors duration-300"
                        >
                            Create Account
                        </button>
                    </div>
                    <div className=" text-sm text-gray-600 text-start  ">
                        <p className="font-bold">
                        Already have an account ?{" "}
                            <Link to='/login' className="text-blue-600 hover:underline">
                                Login here
                            </Link>
                        </p>
                </div>
                </form>
                <p className="p-3 text-gray-400 font-extralight ">This site is protected by reCAPTCHA and the Google <span className="text-blue-400 font-semibold">Privacy Policy</span> and <span className="text-blue-400 font-semibold">Terms of Service </span> apply.</p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
