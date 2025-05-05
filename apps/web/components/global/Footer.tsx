import {Instagram, Twitter, Linkedin, Github} from "lucide-react";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2">
                        <a href="#" className="text-2xl font-bold text-pink-600 inline-block mb-4">
                            Zap<span className="text-gray-800">labs</span>
                        </a>
                        <p className="text-gray-600 mb-6 max-w-sm">
                            Automate your workflows and connect your favorite apps with our easy-to-use no-code
                            platform.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors"
                            >
                                <Twitter className="w-4 h-4"/>
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors"
                            >
                                <Instagram className="w-4 h-4"/>
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors"
                            >
                                <Linkedin className="w-4 h-4"/>
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors"
                            >
                                <Github className="w-4 h-4"/>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
                        <ul className="space-y-2">
                            {["Features", "Integrations", "Pricing", "Changelog", "Docs"].map(
                                (item, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-pink-600 transition-colors"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-2">
                            {[
                                "About",
                                "Customers",
                                "Careers",
                                "Blog",
                                "Contact",
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-pink-600 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {[
                                "Community",
                                "Help Center",
                                "Partners",
                                "Status",
                                "Privacy Policy",
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-pink-600 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Zaplabs. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <ul className="flex space-x-6">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                                >
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                                >
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                                >
                                    Cookies
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
