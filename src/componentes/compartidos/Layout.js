import Footer from './Footer';
import Header from './Header';
import Principal from './Principal';
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <div>
            <Header></Header>
            <Principal>

                <Outlet />

            </Principal>
            <Footer></Footer>
        </div>
    );
}
