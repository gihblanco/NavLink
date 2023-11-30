import { Outlet } from "react-router-dom";
import Banner from "../Banner";

const Layout = () => {
    return (
        <div>
            <Banner/>
            <Outlet/>
        </div>
    )
}

export default Layout;