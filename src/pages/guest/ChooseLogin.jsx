import React from "react";
import { FaUser, FaUserMd } from "react-icons/fa";

const ChooseLogin = () => {
	return (
		<div className="flex flex-col items-center justify-center py-20">
			<div className="rounded-3xl p-6 bg-white shadow-xl max-w-lg w-full pt-6 pb-8 ">
				<h2 className="text-2xl font-semibold mb-6 text-center">
					Ingin Masuk Sebagai Apa?
				</h2>
				<div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0  items-center justify-center">
					<button
						className=" px-4 py-2 btn btn-primary w-full md:w-auto"
						type="button"
					>
						<FaUser className="mr-2" />
						Masuk sebagai pasien
					</button>
					<button
						className=" px-4 py-2 btn btn-secondary w-full md:w-auto"
						type="button"
					>
						<FaUserMd className="mr-2" />
						Masuk sebagai dokter
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChooseLogin;
