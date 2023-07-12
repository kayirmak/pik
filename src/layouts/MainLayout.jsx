import { Outlet } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import ScrollOnTop from "../components/ScrollOnTop/ScrollOnTop";

function MainLayout() {
    return (
        <div className="layout">
            <ScrollOnTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;
