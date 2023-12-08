import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../../Navber/Navber";
import Footer from '../Footer/Footer';
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from 'react-toastify';
import 'aos/dist/aos.css';  
import AOS from 'aos'; 

const PremiumAccess = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`/courseDetails.json`)
            .then((response) => response.json())
            .then((data) => {
                const selectedCourse = data.find((c) => c.id === id);
                setCourse(selectedCourse);
            })
            .catch((error) => {
                console.error('Error fetching course details:', error);
            });
 
        AOS.init();
    }, [id]);

    const handlePremiumAccess = () => {
        toast.success('Successfully accessed premium course!');
    };

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar></Navbar>
            <hr />

            <div className='mt-8'>
                <div className='flex mx-auto justify-center py-8'>
                    <div className='border-2 space-y-3 border-orange-400 px-2 md:px-4 py-7 rounded-lg w-80 md:w-3/4' data-aos="fade-up">
                        <h1 className='text-center font-bold text-orange-500 text-2xl'>Checkout</h1>
                        <h1 className='text-white md:text-2xl font-bold'> {course.courseTitle}</h1>
                        <h1 className='text-gray-300'>Course Id: {course.id}</h1>
                        <h1 className='text-gray-300'>Price: {course.price} $</h1>

                        <p className='text-justify md:text-xl text-white'>Thank you for purchasing Premium course. Our team will contact you within 12 hours.</p>

                        <p className='text-center text-orange-500 font-bold text-2xl mt-3'>Your Information</p>
                        <p><span className='text-white md:text-xl'>Name: </span> <span className="md:text-xl text-orange-500"> {user.displayName}</span></p>
                        <p><span className='text-white md:text-xl'>Email: </span> <span className="md:text-xl text-orange-500"> {user.email}</span></p>
                        <p><span className='text-white md:text-xl'>UID: </span> <span className="md:text-xl text-orange-500"> {user.uid}</span></p>

                        <div className='flex gap-3'>
                            <p className='text-blue-500 underline cursor-pointer' onClick={handlePremiumAccess}>Access Premium Course</p>
                            <p className='text-blue-500 underline cursor-pointer'>Scan_f Academy</p>
                            <p className='text-blue-500 underline cursor-pointer'>All courses</p>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="mt-28" />
            <Footer></Footer>
        </div>
    );
};

export default PremiumAccess;
