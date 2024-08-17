import Card from './Card';
import { Link } from 'react-router-dom';

const ProfileSetupPage = () => {

    return (
        <div className="flex flex-col items-center justify-center  bg-white">
            <div className=" w-auto p-6 bg-white ">
                <div className="flex flex-col justify-center items-center mb-6">
                    <h2 className="text-4xl font-extrabold max-sm:text-3xl">What brings you to Dribbble?</h2>
                    <p className="text-gray-400 mt-6 justify-center items-center mb-6 font-bold ">
                        Select the options that best describe you. Don't worry, you can explore other options later.
                    </p>
                </div>
                <div className="grid grid-cols-1  lg:grid-cols-3  sm:grid-cols-2  gap-10">
                    <Card 
                        image={"https://cdn.dribbble.com/userupload/13793379/file/original-230d7a74d0ef6389d6678a215583669f.png?resize=400x300&vertical=center"}
                        alt={"Designer"} 
                        text={"I'm a designer looking to share my work"}
                        brief={"With over 7 million shots from a vast community of designers, Dribble is the leading source of design inspiration."}
                    />
                    <Card 
                        image={'https://cdn.dribbble.com/userupload/13872650/file/still-409f28ef2baeae28aa8cbfc87f9cf86f.png?resize=400x300&vertical=center'}
                        alt={"Hiring"}
                        text={"I'm  looking to hire a designer"}
                        brief={"With over 7 million shots from a vast community of designers, Dribble is the leading source of design inspiration."}
                    />
                    <Card 
                        image={"https://cdn.dribbble.com/userupload/13764451/file/original-96df3f742e8c58c38d40898813d76d3f.jpg?resize=400x300&vertical=center"} 
                        alt={"Design"}
                        text={"I'm looking for design inspiration"}
                        brief={"With over 7 million shots from a vast community of designers, Dribble is the leading source of design inspiration."}
                    />
                </div>

                <p className="text-gray-600 mt-4 mb-5 ml-20 max-sm:ml-5">Anything else? You can select multiple</p>
                <Link to="/home" className="bg-pink-500  rounded-lg font-bold text-white border-2 ml-20  p-2 max-sm:ml-40    " >FINISH</Link>        

            </div>
        </div>
    );
};

export default ProfileSetupPage;