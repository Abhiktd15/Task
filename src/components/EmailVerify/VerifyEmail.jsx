import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VerifyEmail = () => {
    return (
        <div className='bg-white mt-10 flex flex-col justify-center items-center gap-5'>
            <h1 className='text-3xl font-bold max-sm:text-2xl'>Please verify your email...</h1>
            <div className='flex-row flex relative'>
                <FontAwesomeIcon icon={faEnvelopeCircleCheck} className='size-20 cursor-pointer hover:scale-105 text-pink-500' />
            </div>
            <p className=' text-xl text-gray-500 font-semibold max-sm:font-mono  max-sm:text-sm'> We've sent a confirmation email to <span className='font-bold text-black'>account@refero.design</span></p>
            <p className=' text-xl text-gray-500 font-semibold max-sm:font-mono max-sm:text-sm'>Click the confirmation link in that email to begin using Dribble.</p>
            <p className=' text-xl text-gray-500 font-semibold max-sm:font-mono max-sm:text-sm'>Didn't receive the email? Check your Span folder, it may have been caught by a filter. </p>
            <p className=' text-xl text-gray-500 font-semibold max-sm:font-mono max-sm:text-sm'>If you still don't see it, you can <span className='text-pink-500 font-bold hover:underline cursor-pointer'>resend the confirmation email.</span></p>
            <p className=' text-xl text-gray-500 font-semibold max-sm:font-mono max-sm:text-sm'>Wrong Email address? <span className='text-pink-500 font-bold cursor-pointer hover:underline hover:text-blue-400'>Change it.</span></p>    
        </div>
    );
};

export default VerifyEmail;
