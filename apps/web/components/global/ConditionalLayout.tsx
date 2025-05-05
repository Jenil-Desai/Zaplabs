"use client";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import {usePathname} from "next/navigation";

const ConditionalLayout = ({children}: { children: React.ReactNode }) => {
    const currentPath = usePathname();

    // Define the routes where the Navbar and Footer should be displayed
    const navbarRoutes = ["/", "/404"];

    // Check if the current path matches any of the defined routes exactly
    const shouldRenderNavbar = navbarRoutes.includes(currentPath);

    return (
        <>
            {shouldRenderNavbar && <Navbar/>}
            {children}
            {shouldRenderNavbar && <Footer/>}
        </>
    );
};

export default ConditionalLayout;