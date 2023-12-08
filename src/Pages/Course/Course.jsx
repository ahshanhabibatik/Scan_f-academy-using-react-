import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../Navber/Navber';

import { FcRating } from 'react-icons/fc';
import { FaUser } from 'react-icons/fa6';
import Footer from '../Footer/Footer';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Course = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch('/courseDetails.json')
            .then((response) => response.json())
            .then((data) => {
                const selectedCourse = data.find((c) => c.id === id);
                setCourse(selectedCourse);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching course details:', error);
                setError(error);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1200,
            once: true,
            easing: 'ease-in-out',


        });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading course data: {error.message}</p>;
    }

    if (!course) {
        return <p>Course not found.</p>;
    }

    return (
        <div>
            <Navbar />
            <hr />
            <div className='grid mt-8 grid-cols-1 px-10 md:grid-cols-4'>

                <div className='col-span-4 w-full border'>
                    <h2 className='border-b-2 text-white text-xl md:text-4xl font-bold px-1 py-3'>{course.courseTitle}</h2>
                    <div className=' w-full shadow-xl card-container'>
                        <figure data-aos="fade-up"> {/* Apply AOS animation */}
                            <img src={course.image_url} alt='Course' style={{ width: '100%' }} />
                        </figure>

                        {/* Rating and enroll */}
                        <div className='flex items-center p-4 justify-between' data-aos="fade-up"> {/* Apply AOS animation */}
                            <div className='flex items-center gap-3'>
                                <FcRating />
                                <h1 className='text-white'> {course.rating.number}</h1>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaUser className='text-orange-400' />
                                <h1 className='text-white'>{course.totalEnroll}</h1>
                            </div>
                        </div>

                        {/* Course overview */}
                        <div data-aos="fade-up">
                            <h1 className='text-center text-orange-500 text-2xl md:text-4xl font-bold'>Course Overview</h1>
                        </div>

                        <div data-aos="fade-up"> {/* Apply AOS animation */}
                            <h1 className='p-4 text-white text-justify'>{course.details}</h1>
                        </div>
                        <div>
                            {/* Course Information */}
                            <div data-aos="fade-up">
                                <p className=' text-2xl md:text-4xl text-orange-500 font-bold text-center'>Course Information</p>
                                <div className='p-4 md:text-xl text-white md:flex justify-between'>
                                    <div>
                                        <li>Duration: {course.courseInfo.duration}</li>
                                        <li>Total Lectures: {course.courseInfo.totalLecture}</li>
                                        <li>Quiz: {course.courseInfo.quiz}</li>
                                        <li>Assignment: {course.courseInfo.assignment}</li>
                                        <li>Language: {course.courseInfo.language}</li>
                                        <li>Total Videos: {course.courseInfo.totalVideos}</li>
                                    </div>
                                    <div>
                                        <li>Course Id: {course.id}</li>
                                        <li>Trainer: {course.trainer.name}</li>
                                        <li>Stuff: {course.trainer.totalStuff}</li>
                                        <li>Institute: {course.trainer.institute}</li>
                                    </div>
                                </div>

                                {/* Course Content */}
                                <div className='p-4 '>
                                    <h1 className=' text-2xl md:text-4xl text-orange-500 font-bold text-center'>Course Content</h1>
                                    <ul className='list-disc text-white pl-8 md:text-xl'>
                                        {course.courseContent.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div data-aos="fade-up" className='flex justify-center    p-2 text-xl text-orange-500 hover:bg-amber-300'>
                                <Link to={`/premium/${id}`}>
                                    <button className='text-center'>Get Premium Access</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5 py-3'>
                <Footer />
            </div>
        </div>
    );
};

export default Course;
