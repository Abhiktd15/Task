import {  faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.click()
    }

    return (
        <div className='flex flex-row bg-white justify-between '>
            
            <div>
                <img src="https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp" className="w-20 h-20  mix-blend-multiply md:ml-5 max-sm:size-30 max-sm:hidden max-sm:ml-4 "/>            
                <h3 className='p-4 pl-0 pr-0 font-bold max-sm:visible sm:hidden'>Dribble</h3>
            </div>
            <div className='flex flex-row pl-20 pt-8 max-sm:pt-0 gap-10 max-lg:flex-col max-lg:gap-1 max-sm:pl-5 max-sm:pr-0 max-sm:gap-0 max-sm:font-medium '>
                <li className='text-gray-500 font-bold list-none cursor-pointer hover:underline max-sm:font-semibold'>Inspiration</li>
                <li className='text-gray-500 font-bold list-none cursor-pointer hover:underline max-sm:font-semibold'>FindWork</li>
                <li className='text-gray-500 font-bold list-none cursor-pointer hover:underline max-sm:font-semibold'>LearnDesign</li>
                <li className='text-gray-500 font-bold list-none cursor-pointer hover:underline max-sm:font-semibold'>GoPro</li>
                <li className='text-gray-500 font-bold list-none cursor-pointer hover:underline max-sm:font-semibold'>HireDesigners</li>
            </div>
            <div className='flex flex-row gap-4 pt-6 max-sm:pt-0 items-start max-sm:flex-col max-sm:flex-shrink  max-sm:gap-2'>
                <div className=' flex flex-col ' >
                    <input type='text' ref={inputRef} placeholder='Search' className=' h-7 z-10 p-2 w-30 mt-2 border-2 rounded-lg border-black  bg-transparent cursor-pointer max-sm:w-20 ' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleClick} className=' absolute ml-40  pt-4 max-sm:invisible cursor-pointer' />
                </div>
                <div className='flex flex-row gap-2'>
                    <Link to='/profile' className='rounded-full w-10 h-10 hover:scale-125 '>
                        <img className='rounded-full ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8cTn1-RRcQ_T4-cf40vYi4sjFEADIdog1TqwvXO3kw&s'/>
                    </Link>
                    <Link to='/login'>
                        <FontAwesomeIcon icon={faRightFromBracket} className='size-6 pt-2 cursor-pointer hover:scale-125 hover:text-gray-400'/>
                    </Link>
                </div>
                <button style={{backgroundColor:"#EA4B8A"}} className='border-2 h-10 w-20 rounded-lg  hover:scale-105 text-white font-bold'>
                    Upload
                </button>
            </div>
        </div>
    )
}

export default Navbar