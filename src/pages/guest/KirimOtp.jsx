import { useState } from "react";
import OTPInput from "react-otp-input";

const KirimOtp = () => {
	const [otp, setOtp] = useState();

	return (
		<>
			<div className="flex items-center justify-center py-20 bg-gray-100">
				<form className="w-64 md:w-80 lg:w-96 h-auto bg-neutral flex flex-col items-center justify-center p-5 gap-5 relative shadow-md rounded-lg">
					<span className="text-lg md:text-xl lg:text-2xl font-bold text-black">
						Masukkan OTP
					</span>
					<p className="text-xs md:text-sm lg:text-base text-black text-center leading-4">
						Kami telah mengirim kode verifikasi ke SMS anda
					</p>
					<OTPInput
						value={otp}
						onChange={setOtp}
						onPaste={(event) => {
							setOtp(event.clipboardData.getData("text"));
						}}
						numInputs={4}
						inputType="number"
						renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
						renderInput={(props) => <input {...props} />}
						shouldAutoFocus={true}
						placeholder="*"
						skipDefaultStyles={true}
						inputStyle={
							"bg-gray-300 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-center border-none rounded-md caret-red-500 text-gray-700 outline-none font-semibold focus:bg-blue-100 transition duration-300"
						}
					/>
					{/* <div className="w-full flex flex-row gap-2 md:gap-3 lg:gap-4 items-center justify-center">
					<input
						required
						maxLength="1"
						type="text"
						className="bg-gray-300 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-center border-none rounded-md caret-accent0 text-gray-700 outline-none font-semibold focus:bg-blue-100 transition duration-300"
					/>
					<input
						required
						maxLength="1"
						type="text"
						className="bg-gray-300 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-center border-none rounded-md caret-accent0 text-gray-700 outline-none font-semibold focus:bg-blue-100 transition duration-300"
					/>
					<input
						required
						maxLength="1"
						type="text"
						className="bg-gray-300 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-center border-none rounded-md caret-accent0 text-gray-700 outline-none font-semibold focus:bg-blue-100 transition duration-300"
					/>
					<input
						required
						maxLength="1"
						type="text"
						className="bg-gray-300 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-center border-none rounded-md caret-accent0 text-gray-700 outline-none font-semibold focus:bg-blue-100 transition duration-300"
					/>
				</div> */}
					<button
						className="btn btn-primary text-md md:text-lg w-full h-8 md:h-10 lg:h-12  text-white font-semibold rounded-md cursor-pointer  transition duration-200"
						type="submit"
					>
						Verifikasi
					</button>
					<p className="text-xs md:text-sm lg:text-base text-black w-full flex flex-col items-center justify-center gap-1">
						Tidak menerima kodenya?
						<form action="" method="post">
							<button
								className="bg-transparent border-none text-red-500 cursor-pointer text-base font-bold"
								type="submit"
							>
								Minta ulang
							</button>
						</form>
					</p>
				</form>
			</div>
		</>
	);
};

export default KirimOtp;
