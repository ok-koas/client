import { createBrowserRouter, Link } from "react-router-dom";
import GuestPage from "./layouts/guest-page";
import ErrorPage from "./pages/Errors/ErrorPage";
import AdminDashboard from "./layouts/admin-dashboard";
import HomePage from "./pages/guest/HomePage";
import SuspendedPage from "./components/suspended-page";
import * as lazy from "./components/lazy-components";

const routerConfig = createBrowserRouter([
	{
		path: "/",
		element: <GuestPage />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <SuspendedPage title="" component={HomePage} />,
				handle: { breadcrumb: "Home" },
			},
			{
				path: "tentang-kami",
				element: (
					<SuspendedPage title="Tentang Kami" component={lazy.TentangKami} />
				),
				handle: { breadcrumb: "Tentang Kami" },
			},
			{
				path: "kirim-otp",
				element: (
					<SuspendedPage title="Verifikasi OTP" component={lazy.KirimOtp} />
				),
				handle: { breadcrumb: "Verifikasi OTP" },
			},
			{
				path: "verifikasi-berkas",
				element: (
					<SuspendedPage
						title="Verifikasi Berkas"
						component={lazy.VerifBerkas}
					/>
				),
				handle: { breadcrumb: "Verifikasi Berkas" },
			},
			{
				path: "pilih-akun",
				element: (
					<SuspendedPage title="Pilih Akun" component={lazy.ChooseLogin} />
				),
				handle: { breadcrumb: "Pilih Akun" },
			},
			{
				path: "register",
				element: <SuspendedPage title="Register" component={lazy.Register} />,
				handle: { breadcrumb: "Register" },
			},
			{
				path: "login",
				element: <SuspendedPage title="Login" component={lazy.Login} />,
				handle: { breadcrumb: "Login" },
			},
			{
				path: "*",
				element: (
					<SuspendedPage
						title="Halaman tidak ditemukan"
						component={lazy.Error404}
					/>
				),
				handle: { breadcrumb: "404" },
			},
		],
	},
	{
		path: "admin",
		element: <SuspendedPage component={AdminDashboard} />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: (
					<SuspendedPage
						title="Admin Dashboard"
						component={lazy.MainDashboard}
					/>
				),
				handle: { breadcrumb: "Main Dashboard" },
			},
			{
				path: "user-management",
				handle: { breadcrumb: "Manage User" },
				children: [
					{
						index: true,
						element: (
							<SuspendedPage
								title="User Management"
								component={lazy.UserManagement}
							/>
						),
					},
					{
						path: "1",
						handle: { breadcrumb: "1" },
						children: [
							{
								index: true,
								element: (
									<>
										tes1{" "}
										<Link to={"2"} className="link link-primary">
											Tes wow 2
										</Link>
									</>
								),
							},
							{
								path: "2",
								handle: { breadcrumb: 2 },
								children: [{ index: true, element: <>wow</> }],
							},
						],
					},
				],
			},
			{
				path: "patient-management",
				handle: { breadcrumb: "Manage Patient" },
				children: [
					{
						index: true,
						element: (
							<SuspendedPage
								title="Patient Management"
								component={lazy.PatientManagement}
							/>
						),
					},
				],
			},
			{
				path: "doctor-management",
				handle: { breadcrumb: "Manage Doctor" },
				children: [
					{
						index: true,
						element: (
							<SuspendedPage
								title="Doctor Management"
								component={lazy.DoctorManagement}
							/>
						),
					},
				],
			},
		],
	},
	{
		path: "*",
		element: <ErrorPage />,
	},
]);

export default routerConfig;
