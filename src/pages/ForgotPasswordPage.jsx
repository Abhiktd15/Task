import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    const [placeholder,setPlaceholder] = useState('Enter your Email')

    const handleClick = () => {
        setPlaceholder('')
    }
    return (
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-20"
                    src="https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp"
                    alt="Your Company"
                />
                <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Enter email to reset password
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
                className="space-y-6"
            >
                <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-bold leading-6 text-gray-900"
                >
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        required
                        type="email"
                        placeholder={placeholder}
                        onClick={() => handleClick()}
                        autoComplete='off'
                        className="block w-full p-2 placeholder:text-sm placeholder:font-bold placeholder:px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Send Email
                </button>
                </div>
            </form>

            <p className="mt-10 text-center font-semibold text-gray-400">
                Send me back to{' '}
                <Link
                to="/login"
                className="font-bold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                Login
                </Link>
            </p>
            </div>
        </div>
        </>
    );
}