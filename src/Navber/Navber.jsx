import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import imgUser from '../../public/user.png';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    };

    const links = (
        <>
            <li className="text-xl font-bold"><NavLink to={'/'}>Courses</NavLink></li>
            <li className="text-xl  font-bold"><NavLink to={'/faq'}> FAQ</NavLink></li>
            <li className="text-xl  font-bold"><NavLink to={'/blog'}>Blog</NavLink></li>
            <li className="text-xl  font-bold"><NavLink to={'/reviews'}>Reviews</NavLink></li>
            
        </>
    );

    return (
        <div className="navbar px-10  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn text-orange-500 btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  text-orange-500 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost  hidden lg:block   text-orange-500 text-3xl  font-bold normal-case">Scan_f Academy</a>
            </div>
            <div className="navbar-center hidden text-xl text-orange-400 lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>


            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user ? (user.photoURL || imgUser) : imgUser} alt="User" />
                    </div>
                </label>
                {user ? (
                    <Link to={"/login"}>
                        <button onClick={handleSignOut} className="text-xl rounded-md text-red-800 border px-2 py-2 border-red-700 ">
                            Log Out
                        </button>
                    </Link>
                ) : (
                    <Link to={'/login'}>
                        <button className=" text-xl rounded-md text-red-800 border px-2 py-2 border-red-700 ">Login</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
