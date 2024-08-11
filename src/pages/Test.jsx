import React from "react";

export default function Test() {
	return (
		<>
			<div className="grid grid-cols-12 gap-5 min-h-screen">
				<div className="col-span-3">
					<div className="drawer lg:drawer-open">
						<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
						<div className="drawer-content flex flex-col items-center justify-center">
							{/* Page content here */}
							<label
								htmlFor="my-drawer-2"
								className="btn btn-primary drawer-button lg:hidden"
							>
								Open drawer
							</label>
						</div>
						<div className="drawer-side">
							<label
								htmlFor="my-drawer-2"
								aria-label="close sidebar"
								className="drawer-overlay"
							/>
							<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
								{/* Sidebar content here */}
								<li>
									<a href="#1">Sidebar Item 1</a>
								</li>
								<li>
									<a href="#2">Sidebar Item 2</a>
								</li>
							</ul>
						</div>
					</div>{" "}
				</div>
				<div className="col-auto">sad</div>
			</div>
		</>
	);
}
