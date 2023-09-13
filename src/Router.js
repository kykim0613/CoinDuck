import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Header from "./components/Header";

const Router = () => {
    return (
        <BrowserRouter>
        <Header />
        <Outlet />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;