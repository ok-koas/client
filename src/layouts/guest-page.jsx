import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function GuestPage() {
	return (
		<>
			<Navbar />;
			<main className="bg-blue-50">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
