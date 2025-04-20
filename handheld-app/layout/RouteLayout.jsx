import { Outlet } from "react-router-dom"
import NavBar from "../src/NavBar"
import Footer from "../src/foots"

export function RouteLayout() {
    return (
        <div>
            <NavBar />
            <div className="boxContainer">
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}