"use client";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="container-fluid shadow-sm">
            {/* Navbar */}
            <div>
            <nav className="container mx-auto flex justify-between items-center px-4 py-4 relative">
                {/* Logo */}
                <img
                    src="https://demo-milano.myshopify.com/cdn/shop/files/logo.png?v=1742650856&width=165"
                    alt="Logo"
                    className="w-24 h-auto"
                />

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-black mb-0">
                    <li className="fw-bold"><Link className="text-decoration-none text-black" href="/">Home</Link></li>
                    <li className="fw-bold">About</li>
                    <li className="fw-bold"><Link className="text-decoration-none text-black" href="./ShowAllProducts">Products</Link></li>
                    <li className="fw-bold">Blog</li>
                    <li className="fw-bold">Buy Theme</li>
                    <li className="fw-bold"><Link className="text-decoration-none text-black" href="./Signup">Signup</Link></li>
                </ul>

                {/* Icons + Hamburger */}
                <div className="flex items-center gap-3 md:gap-4">
                    {/* Search Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                    </svg>

                    {/* Heart Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                    </svg>

                    {/* Cart Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                        <path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                    </svg>

                    {/* Hamburger */}
                    <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#000000">
                            {menuOpen ? (
                                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            ) : (
                                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-start p-4 gap-4 md:hidden shadow-md z-50">
                       <li className="fw-bold"><Link className="text-decoration-none text-black" href="/">Home</Link></li>
                    <li className="fw-bold">About</li>
                    <li className="fw-bold"><Link className="text-decoration-none text-black" href="./ShowAllProducts">Products</Link></li>
                    <li className="fw-bold">Blog</li>
                    <li className="fw-bold">Buy Theme</li>
                    <li className="fw-bold"><Link className="text-decoration-none text-black" href="./Signup">Signup</Link></li>
                    </ul>
                )}
            </nav>
        </div>
        </div>
    )

}


export default Navbar