import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courseName, setCourseName] = useState([]);

    useEffect(() => {
        // Fetch course data from your JSON file or API
        fetch('course.json')
            .then((res) => res.json())
            .then((data) => setCourseName(data))
            .catch((error) => console.error('Error fetching course data:', error));
    }, [])

    return (
        <div className="pb-3 leftsideStyle">
            <h5>Learn Language:</h5>
            {courseName.map((c) => (
                <p key={c.id}>
                    <Link to={`/course/${c.id}`} className="text-warning">
                        {c.name}
                    </Link>
                </p>
            ))}
        </div>
    );
};

export default LeftSideNav;
