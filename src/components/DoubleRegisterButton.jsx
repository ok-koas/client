import React from "react";

const DoubleRegisterButton = () => {
	return (
		<div className="mt-6 md:join">
			<button
				className="btn join-item bg-red-500 hover:bg-red-600 mb-3 md:mb-0 text-white text-sm rounded-full md:rounded-full "
				type="button"
			>
				Daftar Sebagai Pasien
			</button>
			<button
				className="btn join-item bg-gray-200 hover:bg-gray-300 text-black text-sm rounded-full md:rounded-full"
				type="button"
			>
				Daftar Sebagai Dokter
			</button>
		</div>
	);
};

export default DoubleRegisterButton;
