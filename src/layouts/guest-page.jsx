import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function GuestPage() {
	return (
		<>
			<Helmet>
				<body className="bg-accent pt-24"/>
			</Helmet>
			<Navbar />
			<main className="pt-24">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
