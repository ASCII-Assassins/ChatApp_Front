import Navbar from "./Navbar"
// import Footer from "./Footer"
import { Outlet } from "react-router-dom"
export default function DefaultLayout() {
    return (
        <>
            <main className="flex h-screen bg-[#0f0f0f] text-white">
                <Navbar />
                <Outlet />
            </main>
        </>
    )
}
