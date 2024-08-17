import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="bg-gray-50 pt-20 text-black py-8">
        <div className="container mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-6 gap-8">
            <div>
                <img src="https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp" className="w-20 h-20 ml-10 mix-blend-multiply md:ml-5"/>
                <p className="text-gray-500 font-semibold">Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
                <div className='flex flex-rows gap-2 mt-4 '>
                    <FontAwesomeIcon icon={faTwitter} className="size-8 md:size-5 hover:scale-150 cursor-pointer"/>
                    <FontAwesomeIcon icon={faFacebook}  className="size-8 md:size-5 hover:scale-150 cursor-pointer"/>
                    <FontAwesomeIcon icon={faInstagram} className="size-8 md:size-5 hover:scale-150 cursor-pointer"/>
                    <FontAwesomeIcon icon={faPinterest} className="size-8 md:size-5 hover:scale-150 cursor-pointer"/>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-4">For designers</h3>
                <ul className="space-y-2 ">
                <li className="text-gray-500 hover:underline">Go Pro!</li>
                <li className="text-gray-500 hover:underline">Explore design work</li>
                <li className="text-gray-500 hover:underline">Design blog</li>
                <li className="text-gray-500 hover:underline">Overtime podcast</li>
                <li className="text-gray-500 hover:underline">Playoffs</li>
                <li className="text-gray-500 hover:underline">Weekly Warm-Up</li>
                <li className="text-gray-500 hover:underline">Refer a Friend</li>
                <li className="text-gray-500 hover:underline">Code of conduct</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-4">Hire designers</h3>
                <ul className="space-y-2">
                <li className="text-gray-500 hover:underline">Post a job opening</li>
                <li className="text-gray-500 hover:underline">Post a freelance project</li>
                <li className="text-gray-500 hover:underline">Search for designers</li>
                <li className="text-black font-bold hover:underline">Brands</li>
                <li className="text-gray-500 hover:underline">Advertise with us</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                <li className="text-gray-500 hover:underline">About</li>
                <li className="text-gray-500 hover:underline">Careers</li>
                <li className="text-gray-500 hover:underline">Support</li>
                <li className="text-gray-500 hover:underline">Media kit</li>
                <li className="text-gray-500 hover:underline">Testimonials</li>
                <li className="text-gray-500 hover:underline">API</li>
                <li className="text-gray-500 hover:underline">Terms of service</li>
                <li className="text-gray-500 hover:underline">Privacy policy</li>
                <li className="text-gray-500 hover:underline">Cookie policy</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-4">Directories</h3>
                <ul className="space-y-2">
                <li className="text-gray-500 hover:underline">Design jobs</li>
                <li className="text-gray-500 hover:underline">Designers for hire</li>
                <li className="text-gray-500 hover:underline">Freelance designers for hire</li>
                <li className="text-gray-500 hover:underline">Tags</li>
                <li className="text-gray-500 hover:underline">Places</li>
                <li className="text-black font-bold hover:underline">Design assets</li>
                <li className="text-gray-500 hover:underline">Dribbble Marketplace</li>
                <li className="text-gray-500 hover:underline">Creative Market</li>
                <li className="text-gray-500 hover:underline">Fontspring</li>
                <li className="text-gray-500 hover:underline">Font Squirrel</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-4">Design Resources</h3>
                <ul className="space-y-2">
                <li className="text-gray-500 hover:underline">Freelancing</li>
                <li className="text-gray-500 hover:underline">Design Hiring</li>
                <li className="text-gray-500 hover:underline">Design Portfolio</li>
                <li className="text-gray-500 hover:underline">Design Education</li>
                <li className="text-gray-500 hover:underline">Creative Process</li>
                <li className="text-gray-500 hover:underline">Design Industry Trends</li>
                </ul>
            </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
                <p className="text-sm pt-5">© 2023 Dribbble. All rights reserved.</p>
                <p className="text-sm pt-5">20,501,853 shots dribbled</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;