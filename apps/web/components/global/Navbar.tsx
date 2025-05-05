import {useState, useEffect} from "react";
import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";
import {redirect} from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-md py-3 shadow-sm"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold text-pink-600">
                        Zap<span className="text-gray-800">labs</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a
                        href="#features"
                        className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
                    >
                        Features
                    </a>
                    <a
                        href="#workflow"
                        className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
                    >
                        How It Works
                    </a>
                    <a
                        href="#testimonials"
                        className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
                    >
                        Testimonials
                    </a>
                    <a
                        href="#pricing"
                        className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
                    >
                        Pricing
                    </a>
                </nav>

                <div className="hidden md:flex items-center space-x-4">
                    <Button variant="outline" size="sm" onClick={() => redirect("/login")}>
                        Log in
                    </Button>
                    <Button className="bg-pink-500 hover:bg-pink-600 text-white" size="sm"
                            onClick={() => redirect("/register")}>
                        Start Free Trial
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white w-full py-4 px-6 shadow-md">
                    <nav className="flex flex-col space-y-4">
                        <a
                            href="#features"
                            className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="#workflow"
                            className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            How It Works
                        </a>
                        <a
                            href="#testimonials"
                            className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Testimonials
                        </a>
                        <a
                            href="#pricing"
                            className="text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Pricing
                        </a>
                        <div className="flex flex-col space-y-2 pt-4">
                            <Button variant="outline" className="w-full justify-center" size="sm"
                                    onClick={() => redirect("/login")}>
                                Log in
                            </Button>
                            <Button className="w-full justify-center bg-pink-500 hover:bg-pink-600 text-white"
                                    size="sm" onClick={() => redirect("/register")}>
                                Start Free Trial
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
