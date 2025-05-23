import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleLinkClick = () => {
		setIsOpen(false); // Close the menu when a link is clicked
	};

	return (
		<nav className="bg-accent fixed w-full z-20 top-0 start-0 border-b border-blue-200 shadow-md md:px-10 glass bg-opacity-30 select-none">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Logo isActive />

				{/* Right-side buttons */}
				<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					<Link to="/login" onClick={handleLinkClick}>
						<button className="btn btn-primary hidden md:flex" type="button">
							Masuk
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<title>People icon</title>
								<path d="M8 10.667 10.667 8m0 0L8 5.333M10.667 8H5.333m9.334 0A6.667 6.667 0 1 1 1.333 8a6.667 6.667 0 0 1 13.334 0Z" stroke="#FEE9E7" />
							</svg>
						</button>
					</Link>
					{/* Hamburger Menu Button */}
					<button
						onClick={toggleMenu}
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
						aria-controls="navbar-sticky"
						aria-expanded={isOpen}
					>
						<span className="sr-only">Open main menu</span>
						<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
						</svg>
					</button>
				</div>

				{/* Navbar Links */}
				<div className={`${isOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
					<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-blue-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
						<li>
							<NavLink
								exact
								to="/"
								className={({ isActive, isPending, isTransitioning }) => {
									let classNames = "block py-2 px-3 rounded md:bg-transparent md:p-0";
									if (isPending) {
										classNames += " text-gray-700";
									} else if (isActive) {
										classNames += " text-secondary";
									} else if (isTransitioning) {
										classNames += " animate-bounce";
									}
									return classNames;
								}}
								onClick={handleLinkClick}
							>
								Beranda
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/tentang-kami"
								className={({ isActive, isPending, isTransitioning }) => {
									let classNames = "block py-2 px-3 rounded md:bg-transparent md:p-0";
									if (isPending) {
										classNames += " text-gray-700";
									} else if (isActive) {
										classNames += " text-secondary";
									} else if (isTransitioning) {
										classNames += " animate-bounce";
									}
									return classNames;
								}}
								onClick={handleLinkClick}
							>
								Tentang Kami
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/login"
								className={({ isActive, isPending, isTransitioning }) => {
									let classNames = "md:hidden py-2 px-3 rounded md:bg-transparent md:p-0";
									if (isPending) {
										classNames += " text-red-700";
									} else if (isActive) {
										classNames += " text-secondary";
									} else if (isTransitioning) {
										classNames += " animate-bounce";
									}
									return classNames;
								}}
								onClick={handleLinkClick}
							>
								Masuk
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;