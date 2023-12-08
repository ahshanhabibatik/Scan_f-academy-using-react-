import { useState, useEffect } from 'react';
import CourseCards from './CourseCards';
import Footer from '../Footer/Footer';
import Navbar from '../../Navber/Navber';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
        });

        // Fetch course data (replace with your data source)
        fetch('/courseDetails.json')
            .then((response) => response.json())
            .then((data) => {
                setCourses(data);
            })
            .catch((error) => {
                console.error('Error fetching course details:', error);
            });
    }, []);

    // Function to handle the search button click
    const handleSearch = () => {
        // Filter courses based on the search term
        const filtered = courses.filter((course) =>
            course.courseTitle.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Update the state with filtered courses
        setFilteredCourses(filtered);
    };

    const bannerStyle = {
        backgroundImage: 'url("https://i.ibb.co/xDx3mJ8/banner-3.jpgCV/banner.jpgh")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div>
            <Navbar />
            <hr />
            <div className="flex items-center  text-center p-1">
                <div className=" text-white">
                    <Marquee pauseOnHover={true}>
                        <Link>
                            Latest News............ Dear learner We are excited to inform you that our upcoming courses are scheduled to kick off on January 24th. Mark your calendars and get ready to dive into a world of learning and growth at Scan_f Academy! Don't miss out on this opportunity to enhance your skills and knowledge. See you in class!
                        </Link>
                    </Marquee>
                   <hr className='mt-2' />
                </div>
            </div>

            <div  data-aos="fade-up" className="opacity-80 lg:h-96 mb-7 w-full py-4" style={bannerStyle}>
                <p className="lg:text-4xl  lg:mt-14 text-orange-500 font-bold text-center">
                    Scan_f Academy's Online Learning and Courses
                </p>
                <p className="text-white hidden md:block bg-slate-800 mt-4 mb-5 mx-auto text-justify border-2 border-orange-600 rounded-lg py-4 w-4/5 px-6">
                    Scan_f Academy is a cutting-edge online learning platform dedicated to providing individuals with a diverse range of high-quality courses and educational resources. With a special focus on technology and IT-related subjects, Scan_f Academy empowers learners to acquire valuable skills, stay updated with the latest industry trends, and advance their careers in the digital age.
                </p>
                <div className="flex  mt-4  md:mt-0 mx-auto justify-center">
                    <input
                        className="py-2 px-3 md:w-96"
                        type="text"
                        placeholder="Search by course title"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className="text-xl rounded-md font-bold text-orange-500 border px-2 py-2 border-red-700 hover:text-amber-500"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>

            <div>
                <h1 data-aos="fade-up" className="md:text-3xl font-bold text-white text-center mb-6">
                    Our Courses
                </h1>
                <div  data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3">
                    {filteredCourses.length > 0
                        ? filteredCourses.map((course) => (
                            <div data-aos="fade-up" key={course.id}>
                                <CourseCards course={course} />
                            </div>
                        ))
                        : courses.map((course) => (
                            <div data-aos="fade-up" key={course.id}>
                                <CourseCards course={course} />
                            </div>
                        ))}
                </div>
            </div>
            <hr />
            <Footer />
        </div>
    );
};

export default Home;
