import { useEffect, useState } from 'react';
import Navbar from '../../Navber/Navber';
import 'aos/dist/aos.css'; // Import the CSS

const StudentReview = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initialize AOS
        import('aos').then((aos) => {
            aos.init({
                duration: 1000, // Animation duration in milliseconds
            });
        });

        // Fetch reviews data
        fetch('course.json')
            .then((response) => response.json())
            .then((data) => {
                setReviews(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching reviews:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-2xl text-center text-orange-500'>Student Reviews</h1>

            <div className='grid mb-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {reviews.map((review) => (
                    <div key={review.id} data-aos="fade-up">
                        <div className=''>
                            <div className="card h-96 w-96 text-white  shadow-xl">

                                <div className="card-body">
                                    <h2 className="card-title">{review.courseTitle}</h2>
                                    <p className='text-white'>Name:{review.name}</p>
                                    <p>Rating: {review.rating}</p>
                                    <p>Review: {review.review}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default StudentReview;
