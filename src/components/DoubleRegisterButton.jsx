import React from "react";

const DoubleRegisterButton = () => {
	return (
		<div className="mt-6 md:join">
			<button
				className="btn btn-primary border-primary join-item  mb-3 md:mb-0 rounded-full md:rounded-full "
				type="button"
			>
				Daftar Sebagai Pasien
			</button>
			<button
				className="btn btn-ghost border-primary join-item rounded-full md:rounded-full"
				type="button"
			>
				Daftar Sebagai Dokter
			</button>
		</div>
	);
};

export default DoubleRegisterButton;
