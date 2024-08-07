import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function GuestPage() {
	return (
		<>
			<Navbar />;
			<Outlet />
			<Footer />
		</>
	);
}
