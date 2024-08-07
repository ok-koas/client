import React from "react";
import { FaUser, FaUserMd } from "react-icons/fa";

const ChooseLogin = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
			<div className="border border-black rounded-lg p-6 bg-white shadow-lg max-w-lg w-full">
				<h2 className="text-2xl font-semibold mb-6 text-center">
					Ingin Masuk Sebagai Apa?
				</h2>
				<div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
					<button
						className="flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 w-full md:w-auto"
						type="button"
					>
						<FaUser className="mr-2" />
						Masuk sebagai pasien
					</button>
					<button
						className="flex items-center justify-center px-4 py-2 bg-purple-500 text-white rounded-md shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-auto"
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
