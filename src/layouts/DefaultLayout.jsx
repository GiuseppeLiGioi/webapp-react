import Header from "../components/Header"
import {Outlet} from "react-router-dom"

import GlobalContext from "../contexts/GlobalContext"
import Loader from "../components/Loader"
import { useContext } from "react"

function DefaultLayout () {
    const { isLoading } = useContext(GlobalContext);
    console.log("Loader status:", isLoading);
    return(
        <>
        <Header />
        <main className="container">
            
            <Outlet />

        </main>

        {isLoading && <Loader />}
        
        </>

    )
}

export default DefaultLayout