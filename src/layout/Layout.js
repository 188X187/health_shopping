import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Searching from "../components/search/Searching"

function Layout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="search" element={<Searching />}></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Layout