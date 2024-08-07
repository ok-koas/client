import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { FaSadCry } from "react-icons/fa";
import LoadingPage from "./pages/LoadingPage";
import GuestPage from "./layouts/guest-page";

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
		path: "/",
		element: <GuestPage />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "tes",
				element: <LoadingPage />,
			},
			{
				index: true,
				element: (
					<Suspense fallback={<LoadingPage />}>
						<main className="mt-5 md:px-8 lg:px-16">
							<HeroSection />
							<AlasanSection />
							<Produk />
							<Hooker2 />
						</main>
					</Suspense>
				),
			},
			{
				path: "tentang-kami",
				element: (
					<Suspense fallback={<LoadingPage />}>
						<TentangKami />
					</Suspense>
				),
			},
			{
				path: "kirim-otp",
				element: (
					<Suspense fallback={<LoadingPage />}>
						<KirimOtp />
					</Suspense>
				),
			},
			{
				path: "verifikasi-berkas",
				element: (
					<Suspense fallback={<LoadingPage />}>
						<main className="flex-grow">
							<VerifBerkas />
						</main>
					</Suspense>
				),
			},
			{
				path: "pilih-akun",
				element: (
					<Suspense fallback={<LoadingPage />}>
						<main className="flex-grow">
							<ChooseLogin />
						</main>
					</Suspense>
				),
			},
			{
				path: "register",
				element: (
					<Suspense fallback={<LoadingPage />}>
						<Register />
					</Suspense>
				),
			},
			{
				path: "login",
				element: (
					<Suspense fallback={<LoadingPage />}>
						<Login /> {/* Add Login component here */}
					</Suspense>
				),
			},
			{
				path: "*",
				element: <Error404 />,
			},
			{
				path: "error500",
				element: <Error500 />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
