import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/home"
import { Product } from "./pages/product/product"

const MainRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/produtos/:id' element={<Product/>}></Route>
        </Routes>
    )
}

export default MainRoutes;