import Auth from "../pages/Auth/auth";
import Home from "../pages/Home/home";
import Login from "../pages/Login/Login";
import AboutYou from "../pages/Register/Aboutyou";
import CreatePassword from "../pages/Register/CreatePassword";
import Register from "../pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function WebRoutes() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/create-password" element={<CreatePassword />} />
                    <Route path="/about-you" element={<AboutYou />} />
                    <Route path="/auth" element={<Auth />}/>
                    <Route path="/home" element={<Home />}>
                    </Route>

                </Routes>
            </Router>
        </div>
    );
}