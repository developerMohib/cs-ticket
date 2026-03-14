import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative shadow bg-white shadow-[#E9E9E9]">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">

                {/* Logo */}
                <div className="flex items-center justify-between">
                    <a href="/">
                        <span className="text-[#130B2D] font-bold" >CS — Ticket System</span>
                    </a>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 hover:text-gray-600 focus:outline-none"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 8h16M4 16h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu */}
                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white 
          md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center
          ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"}`}
                >
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <a href="/" className="my-2 text-gray-700 hover:text-blue-500 md:mx-4 md:my-0">
                            Home
                        </a>
                        <a className="my-2 text-gray-700 hover:text-blue-500 md:mx-4 md:my-0" href="/">
                            FAQ
                        </a>
                        <a className="my-2 text-gray-700 hover:text-blue-500 md:mx-4 md:my-0" href="/">
                            Blog
                        </a>
                        <a className="my-2 text-gray-700 hover:text-blue-500 md:mx-4 md:my-0" href="/">
                            Download
                        </a>
                        <a className="my-2 text-gray-700 hover:text-blue-500 md:mx-4 md:my-0" href="/">
                            About
                        </a>
                        <a className="my-2 text-gray-700 hover:text-blue-500 md:mx-4 md:my-0" href="/">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}