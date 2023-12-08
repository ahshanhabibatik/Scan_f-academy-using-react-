import { useEffect } from "react";
import Navbar from "../../Navber/Navber";
import Footer from "../Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';



const FAQ = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the animation duration (in milliseconds)
            easing: 'ease-in-out', // Set the animation easing (e.g., 'ease', 'linear', 'ease-in-out', etc.)
        });
    }, []);
    return (
        <div>
            <Navbar></Navbar>
            <hr />
            <div data-aos="fade-up" className="mx-10 mt-5 mb-3 border-2 border-orange-500 rounded-lg px-3 py-3  ">

                <h1 className="md:text-2xl text-orange-500">What is Scan_f Academy?</h1>
                <p className="text-justify text-white">
                    Scan_f Academy is an online learning platform that offers a wide range of courses and educational resources to empower individuals to acquire new skills and knowledge. It provides a diverse catalog of courses across various fields.
                </p>

                <h1 className="md:text-2xl text-orange-500"> What sets Scan_f Academy apart from other online learning platforms?</h1>
                <p className="text-justify text-white">
                    Scan_f Academy stands out due to its diverse course catalog, with a special focus on technology and IT-related subjects. It offers high-quality educational resources and is committed to enhancing the learning experience.
                </p>


                <h1 className="md:text-2xl text-orange-500">What i Are the courses at Scan_f Academy free?</h1>
                <p className="text-justify text-white">
                    Scan_f Academy offers both free and premium courses. Users can choose between free courses and premium courses that provide additional content and features.
                </p>


                <h1 className="md:text-2xl text-orange-500">What types of courses are available?</h1>
                <p className="text-justify text-white">
                    Scan_f Academy offers courses in a wide range of categories, including technology, business, arts, and sciences. You can find courses on topics like coding, digital marketing, and more.
                </p>

                <h1 className="md:text-2xl text-orange-500">How do I enroll in a course?</h1>
                <p className="text-justify text-white">
                    Enrolling in a course at Scan_f Academy is easy. Simply sign up, browse the course catalog, select your preferred course, and start your learning journey.
                </p>

                <h1 className="md:text-2xl text-orange-500"> Who are the instructors at Scan_f Academy?</h1>
                <p className="text-justify text-white">
                    The instructors at Scan_f Academy are industry experts with impressive qualifications and practical experience in their respective fields. They bring real-world insights to the virtual classroom.al marketing, and more.
                </p>

                <h1 className="md:text-2xl text-orange-500"> Can I access courses on my schedule?</h1>
                <p className="text-justify text-white">
                    Yes, Scan_f Academy courses are designed to be flexible. You can access course content at your convenience, making it easy to fit learning into your schedule.
                </p>


                <h1 className="md:text-2xl text-orange-500"> What are the benefits of premium access?</h1>
                <p className="text-justify text-white">
                    Premium access at Scan_f Academy offers exclusive benefits, including access to advanced course content and features that enhance the learning experience.
                </p>

                <h1 className="md:text-2xl text-orange-500"> How do I subscribe to premium membership?</h1>
                <p className="text-justify text-white">
                    To subscribe to premium membership, visit the Scan_f Academy website and select the premium membership option.
                </p>

                <h1 className="md:text-2xl text-orange-500">  Are there success stories from Scan_f Academy learners?</h1>
                <p className="text-justify text-white">
                    Yes, many learners have achieved career advancements and personal growth through Scan_f Academy. Success stories include landing new job positions and starting successful ventures.
                </p>
            </div>
            <hr />
            <Footer></Footer>
        </div>

    );
};

export default FAQ;