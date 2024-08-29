import { FaBars, FaBell, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";

export default function NavbarDashboard() {
	return (
		<div className="navbar sticky top-0 bg-base-100 justify-between">
			<div className="">
				<label
					htmlFor="my-drawer"
					className="btn btn-primary me-2 drawer-button swap swap-rotate lg:hidden"
				>
					<input type="checkbox" />
					<FaBars className="swap-off" />
					<FaTimes className="swap-on" />
				</label>
				<h2 className="font-semibold md:text-lg">
					<Breadcrumb />
				</h2>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-hover dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
						<div className="indicator">
							<FaBell className="w-5 h-5" />
							<span className="badge badge-sm badge-primary indicator-item">
								8
							</span>
						</div>
					</div>
					<div className="card card-compact dropdown-content bg-neutral z-[1] w-52 shadow">
						<div className="card-body">
							<span className="text-lg font-bold">8 Items</span>
							<span className="text-info">Subtotal: $999</span>
							<div className="card-actions">
								<button className="btn btn-primary btn-block" type="button">
									View cart
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className=" dropdown dropdown-hover dropdown-bottom dropdown-end">
					<button
						tabIndex={0}
						className="btn btn-ghost btn-circle avatar"
						type="button"
					>
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/>
						</div>
					</button>
					<ul className="dropdown-content menu bg-neutral rounded-box z-[1] w-52 p-2 shadow">
						<li>
							<NavLink to={"#s"} className="justify-between">
								Profile
								<span className="badge badge-primary">New</span>
							</NavLink>
						</li>
						<li>
							<NavLink to={"#s"}>Settings</NavLink>
						</li>
						<li>
							<NavLink to={"#s"}>Logout</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
