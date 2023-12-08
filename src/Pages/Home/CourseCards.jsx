import { FcRating } from "react-icons/fc";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const CourseCards = ({ course }) => {
    const { id, image_url, courseTitle, trainer, courseInfo, rating, totalEnroll, price } = course;

    return (
        <div>
            <div className="card mx-auto w-80 lg:w-96 border-2 h-4/5 mb-4">
                <figure><img style={{ height: '220px' }} src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white font-bold">{courseTitle}</h2>
                    <p className="text-gray-400"> <span >Trained by: </span> <span> {trainer.name}</span></p>
                    <p> <span className="text-white">Total lecture: </span> <span className="text-orange-500"> {courseInfo.totalLecture}</span> <span className="text-orange-400">++ </span></p>
                    <p><span className="text-white">Time duration:</span> <span className="text-orange-500"> {courseInfo.duration}</span> <span className="text-orange-400" >++ </span></p>
                    <p><span className="text-white">Course Price:</span> <span className="text-orange-500"> {price}</span> <span className="text-orange-500"> $</span></p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <FcRating className="text-orange-400"></FcRating>
                            <h1 className="text-white">  {rating.number}</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaUser className="text-orange-400"></FaUser>
                            <h1 className="text-white">{totalEnroll}</h1>
                        </div>

                    </div>
                    <Link to={`/course/${id}`}>
                        <div className="card-actions px-10 py-1 rounded-lg shadow-md justify-center border w-full  hover:bg-amber-400">

                            <div className="card-actions px-10 py-1 justify-center text-orange-500  ">

                                <button>Details</button>
                            </div>
                        </div>
                    </Link>


                </div>
            </div>
        </div >
    );
};

CourseCards.propTypes = {
    course: PropTypes.shape({
        price: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        courseTitle: PropTypes.string.isRequired,
        trainer: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        courseInfo: PropTypes.shape({
            totalLecture: PropTypes.number.isRequired,
            duration: PropTypes.string.isRequired,
        }).isRequired,
        rating: PropTypes.shape({
            number: PropTypes.number.isRequired,
        }).isRequired,
        totalEnroll: PropTypes.number.isRequired,
    }).isRequired,
};

export default CourseCards;