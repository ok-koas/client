import { lazy } from "react";

export const TentangKami = lazy(() => import("../pages/guest/TentangKami"));
export const Register = lazy(() => import("../pages/guest/Register"));
export const Login = lazy(() => import("../pages/guest/Login"));
export const Error404 = lazy(() => import("../pages/Errors/Error404"));
export const KirimOtp = lazy(() => import("../pages/guest/KirimOtp"));
export const VerifBerkas = lazy(() => import("../pages/guest/VerifBerkas"));
export const ChooseLogin = lazy(() => import("../pages/guest/ChooseLogin"));
export const Tanyadokter = lazy(() => import("../pages/guest/Tanyadokter"));
export const UserManagement = lazy(
	() => import("../pages/admin/user-management"),
);
export const PatientManagement = lazy(
	() => import("../pages/admin/patient-management"),
);
export const DoctorManagement = lazy(
	() => import("../pages/admin/doctor-management"),
);
export const MainDashboard = lazy(
	() => import("../pages/admin/main-dashboard"),
);
