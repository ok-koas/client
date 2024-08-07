import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { FaSadCry } from "react-icons/fa";
import LoadingPage from "./pages/LoadingPage";

// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import AlasanSection from "./components/AlasanSection";
// import Produk from "./components/Produk";
// import Hooker from "./components/Hooker";
// import Hooker2 from "./components/Hooker2";
// import Footer from "./components/Footer";
// import TentangKami from "./TentangKami";
// import Register from "./Register";
// import Login from "./Login";
// import ErrorPage from "./ErrorPage";
// import Error404 from "./Error404";
// import Error500 from "./Error500";
// import KirimOtp from "./KirimOtp";
// import VerifBerkas from "./VerifBerkas";
// import ChooseLogin from "./ChooseLogin";
const Navbar = lazy(() => import("./components/Navbar"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const AlasanSection = lazy(() => import("./components/AlasanSection"));
const Produk = lazy(() => import("./components/Produk"));
const Hooker = lazy(() => import("./components/Hooker"));
const Hooker2 = lazy(() => import("./components/Hooker2"));
const Footer = lazy(() => import("./components/Footer"));
const TentangKami = lazy(() => import("./pages/guest/TentangKami"));
const Register = lazy(() => import("./pages/guest/Register"));
const Login = lazy(() => import("./pages/guest/Login"));
const ErrorPage = lazy(() => import("./pages/Errors/ErrorPage"));
const Error404 = lazy(() => import("./pages/Errors/Error404"));
const Error500 = lazy(() => import("./pages/Errors/Error500"));
const KirimOtp = lazy(() => import("./pages/guest/KirimOtp"));
const VerifBerkas = lazy(() => import("./pages/guest/VerifBerkas"));
const ChooseLogin = lazy(() => import("./pages/guest/ChooseLogin"));

export const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const router = createBrowserRouter([
	{
		path: "tes",
		element: <LoadingPage />,
	},
	{
		path: "/",
		element: (
			<>
				<Navbar />
				<Suspense fallback={<LoadingPage />}>
					<main className="mt-5 md:px-8 lg:px-16">
						<HeroSection />
						<AlasanSection />
						<Produk />
						<Hooker2 />
					</main>
					<Footer />
				</Suspense>
			</>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/tentang-kami",
		element: (
			<>
				<Navbar />
				<Suspense fallback={<LoadingPage />}>
					<TentangKami />
					<Footer />
				</Suspense>
			</>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/KirimOtp",
		element: (
			<>
				<Navbar />
				<Suspense fallback={<LoadingPage />}>
					<KirimOtp />
					<Footer />
				</Suspense>
			</>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/VerifBerkas",
		element: (
			<>
				<Navbar />
				<Suspense fallback={<LoadingPage />}>
					<main className="flex-grow">
						<VerifBerkas />
					</main>
					<Footer />
				</Suspense>
			</>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/ChooseLogin",
		element: (
			<>
				<Navbar />
				<Suspense fallback={<LoadingPage />}>
					<main className="flex-grow">
						<ChooseLogin />
					</main>
					<Footer />
				</Suspense>
			</>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/register",
		element: (
			<>
				<Navbar />
				<Suspense fallback={<LoadingPage />}>
					<Register />
					<Footer />
				</Suspense>
			</>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/login",
		element: (
			<>
				<Navbar />
				<Suspense fallback={<LoadingPage />}>
					<Login /> {/* Add Login component here */}
					<Footer />
				</Suspense>
			</>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "*",
		element: <Error404 />,
	},
	{
		path: "/error500",
		element: <Error500 />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
