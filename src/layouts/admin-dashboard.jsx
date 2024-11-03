import Logo from "../components/Logo";
import NavbarDashboard from "../components/dashboards/navbar-dashboard";
import SidebarList from "../components/admin-dashboard/sidebar-list";
import { FaTooth, FaUserInjured } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
         
export default function AdminDashboard() {
	return (
		<div className="drawer lg:drawer-open">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content here */}
				<NavbarDashboard />
				<div className="min-h-screen p-5">
					<Outlet />
				</div>
			</div>
			<div className="drawer-side w-72 lg:w-full">
				<label
					htmlFor="my-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
				/>
				<ul className="menu min-h-full w-80 p-4">
					{/* Sidebar content here */}
					<Logo className="md:ms-5" />
					<div className="divider" />
					<SidebarList name={"User management"} Icon={FaUsersGear} />
					<SidebarList name={"Patient management"} Icon={FaUserInjured} />
					<SidebarList name={"Doctor management"} Icon={FaTooth} />
				</ul>
			</div>
		</div>
	);
}
