import { useRef, useState } from 'react'

const Card = (props) => {
    const inputRef = useRef(null)
    const [isChecked,setIsChecked] = useState(false)
    
    const handleClick = () => {
        inputRef.current.click()
        setIsChecked(!isChecked)
    }
    
    return (
            <div
                className="w-80 h-auto border-2 border-gray-300   flex flex-col justify-center items-center rounded-3xl md:w-60 p-6 cursor-pointer sm:w-60 sm:ml-8 max-sm:w-60 shadow-lg hover:scale-105 hover:border-pink-500 hover:border-4"
                onClick={handleClick}
            >
                <img
                src={props.image}
                alt={props.alt}
                className="mx-auto mb-4 rounded-3xl "
                />
                <h3 className="text-lg font-bold mb-2 ml-10">{props.text}</h3>
                <div>
                    {isChecked && <p className='text-gray-500 font-semibold'>{props.brief}</p>}
                </div>
                <input type="checkbox" ref={inputRef} onClick={handleClick} className='accent-pink-500 mt-4 size-5 ' readOnly/>
            </div>
    )
}

export default Card