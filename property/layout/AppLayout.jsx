
import Footer from "./Footer"
import Navbar from "../component/Navbar"
import { Outlet } from "react-router-dom"
export const AppLayout = ()=>{
    return (
        <>
        < Navbar />
     
                <Outlet />
       
        <Footer />
        </>
    )
}

export default AppLayout;