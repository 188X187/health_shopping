import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Searching from "../components/search/Searching"
import { Stack } from "react-bootstrap"
import GlobalNav from "../components/common/GlobalNav"
import Filter from "../components/search/Filter"
import CartApple from "../components/cart_apple/CartApple"

function Layout() {
    return (
        <Stack gap={3}>
            <div className="p-2"><GlobalNav /></div>
            <div className="p-2">

                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />}></Route>
                        <Route path="search" element={<Searching />}></Route>
                        <Route path="filter" element={<Filter />}></Route>
                        <Route path="cart" element={<CartApple />}></Route>
                    </Routes>
                </BrowserRouter>


            </div>

        </Stack>
    )
}

export default Layout