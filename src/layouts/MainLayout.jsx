import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";


function MainLayout() {
    return (
        <div className="layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;
