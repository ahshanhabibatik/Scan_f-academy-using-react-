import { Outlet } from "react-router-dom";



const Root = () => {
    return (
        <div className=" bg-slate-700  mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;