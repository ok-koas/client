import { useState, lazy, Suspense } from "react";
import InputSkeletal from "../../components/skeletons/InputSkeletal";
import { Link } from "react-router-dom";

const FaUserPlus = lazy(() =>
	import("react-icons/fa").then((module) => ({ default: module.FaUserPlus })),
);
const FaUser = lazy(() =>
	import("react-icons/fa").then((module) => ({ default: module.FaUser })),
);
const FaPhone = lazy(() =>
	import("react-icons/fa").then((module) => ({ default: module.FaPhone })),
);
const FaEnvelope = lazy(() =>
	import("react-icons/fa").then((module) => ({ default: module.FaEnvelope })),
);
const FaLock = lazy(() =>
	import("react-icons/fa").then((module) => ({ default: module.FaLock })),
);
const FaGlobe = lazy(() =>
	import("react-icons/fa").then((module) => ({ default: module.FaGlobe })),
);
const FaCalendarDay = lazy(() =>
	import("react-icons/fa").then((module) => ({
		default: module.FaCalendarDay,
	})),
);
const FaMapSigns = lazy(() =>
	import("react-icons/fa").then((module) => ({ default: module.FaMapSigns })),
);
const FaMapMarked = lazy(() =>
	import("react-icons/fa").then((module) => ({ default: module.FaMapMarked })),
);
const FaCity = lazy(() =>
	import("react-icons/fa").then((module) => ({ default: module.FaCity })),
);
const FaMap = lazy(() =>
	import("react-icons/fa").then((module) => ({ default: module.FaMap })),
);
const FaHouseUser = lazy(() =>
	import("react-icons/fa").then((module) => ({ default: module.FaHouseUser })),
);
const FaLockOpen = lazy(() =>
	import("react-icons/fa").then((module) => ({ default: module.FaLockOpen })),
);
const FaUserTag = lazy(() =>
	import("react-icons/fa").then((module) => ({ default: module.FaUserTag })),
);
const FaAddressBook = lazy(() =>
	import("react-icons/fa").then((module) => ({
		default: module.FaAddressBook,
	})),
);

const Register = () => {
	const [errors, setErrors] = useState({});

	const validateForm = (event) => {
		event.preventDefault();
		const formErrors = {};

		const fields = ["password", "ulangiPassword", "kodePos", "kelurahan"];
		for (const field of fields) {
			const value = event.target[field].value.trim();
			if (!value) {
				formErrors[field] = "Field is required";
			}
		}

		setErrors(formErrors);
	};

	return (
		<>
			<div className="container mx-auto sm:px-4 md:pb-10 md:pt-5 ">
				<div className="bg-neutral shadow-md rounded-lg p-8 max-w-2xl mx-auto">
					<h2 className="text-xl md:text-3xl font-bold mb-6 text-center">
						Registrasi Pengguna
					</h2>
					<form onSubmit={validateForm}>
						<div className="mb-4">
							<Suspense fallback={<InputSkeletal />}>
								<label
									className="block text-primary-gray text-sm font-bold mb-2"
									htmlFor="namaLengkap"
								>
									Nama Lengkap
								</label>
								<div className="flex items-center border rounded-md">
									<FaUser className="h-5 w-5 text-gray-400 mx-2" />
									<input
										name="full_name"
										type="text"
										id="namaLengkap"
										className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs"
										placeholder="Contoh: Muhammad Subardjo"
										required
									/>
								</div>
							</Suspense>
						</div>
						<div className="md:grid md:grid-cols-2 gap-5">
							<div className="mb-4">
								<Suspense fallback={<InputSkeletal />}>
									<label
										className="block text-primary-gray text-sm font-bold mb-2"
										htmlFor="username"
									>
										Username
									</label>
									<div className="flex items-center border rounded-md">
										<FaUserTag className="h-5 w-5 text-gray-400 mx-2" />
										<input
											type="text"
											name="username"
											id="username"
											className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs"
											placeholder="Contoh: muhammad.subardjo"
											required
										/>
									</div>
								</Suspense>
							</div>
							<div className="mb-4">
								<Suspense fallback={<InputSkeletal />}>
									<label
										className="block text-primary-gray text-sm font-bold mb-2"
										htmlFor="nomorHandphone"
									>
										Nomor Handphone
									</label>
									<div className="flex items-center border rounded-md">
										<FaPhone className="h-5 w-5 text-gray-400 mx-2" />
										<input
											name="phone_number"
											type="number"
											id="nomorHandphone"
											min={0}
											className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs"
											placeholder="Contoh: 6283812345678"
											required
										/>
									</div>
								</Suspense>
							</div>
						</div>
						<div className="mb-4">
							<Suspense fallback={<InputSkeletal />}>
								<label
									className="block text-primary-gray text-sm font-bold mb-2"
									htmlFor="email"
								>
									Email (Opsional)
								</label>
								<div className="flex items-center border rounded-md">
									<FaEnvelope className="h-5 w-5 text-gray-400 mx-2" />
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs"
										placeholder="Contoh: ahmad.subardjo@gmail.com"
										required
									/>
								</div>
							</Suspense>
						</div>
						<div className="mb-1 md:grid md:grid-cols-2 gap-5">
							<div>
								<Suspense fallback={<InputSkeletal />}>
									<label
										className="block text-primary-gray text-sm font-bold mb-2"
										htmlFor="password"
									>
										Password
									</label>
									<div className="flex items-center border rounded-md">
										<FaLock className="h-5 w-5 text-gray-400 mx-2" />
										<input
											name="password"
											type="password"
											id="password"
											minLength={8}
											className={`block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs ${
												errors.password ? "border-red-500" : ""
											}`}
											pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
											title="Password harus memiliki 8 huruf yang setidaknya terdiri dari 1
              huruf besar, 1 huruf kecil, dan 1 angka"
											placeholder="Password"
											required
										/>
										{errors.password && (
											<p className="text-red-500 text-xs italic">
												{errors.password}
											</p>
										)}
									</div>
								</Suspense>
							</div>
							<div>
								<Suspense fallback={<InputSkeletal />}>
									<label
										className="block text-primary-gray text-sm font-bold my-2"
										htmlFor="ulangiPassword"
									>
										Ulangi Password
									</label>
									<div className="flex items-center border rounded-md">
										<FaLockOpen className="h-5 w-5 text-gray-400 mx-2" />
										<input
											name="repeat_password"
											type="password"
											id="ulangiPassword"
											minLength={8}
											className={`block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs ${
												errors.ulangiPassword ? "border-red-500" : ""
											}`}
											pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
											title="Password harus memiliki 8 huruf yang setidaknya terdiri dari 1
              huruf besar, 1 huruf kecil, dan 1 angka"
											placeholder="Ulangi Password"
											required
										/>
										{errors.ulangiPassword && (
											<p className="text-red-500 text-xs italic">
												{errors.ulangiPassword}
											</p>
										)}
									</div>
								</Suspense>
							</div>
						</div>
						<Suspense fallback={<div className="skeleton h-10 rounded-none" />}>
							<p className="text-accent0 mb-4 text-sm">
								Password harus memiliki 8 huruf yang setidaknya terdiri dari 1
								huruf besar, 1 huruf kecil, dan 1 angka
							</p>
						</Suspense>
						<div className="mb-4 md:grid md:grid-cols-2 gap-4">
							<div>
								<Suspense fallback={<InputSkeletal />}>
									<label
										className="block text-primary-gray text-sm font-bold mb-2"
										htmlFor="kotaTempatLahir"
									>
										Kota Tempat Lahir
									</label>
									<div className="flex items-center border rounded-md">
										<FaHouseUser className="h-5 w-5 text-gray-400 mx-2" />
										<input
											name="place_of_birth"
											type="text"
											id="kotaTempatLahir"
											className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs"
											placeholder="Kota Tempat Lahir"
											required
										/>
									</div>
								</Suspense>
							</div>
							<div>
								<Suspense fallback={<InputSkeletal />}>
									<label
										className="block text-primary-gray text-sm font-bold my-2"
										htmlFor="tanggalLahir"
									>
										Tanggal Lahir
									</label>
									<div className="flex items-center border rounded-md">
										<FaCalendarDay className="h-5 w-5 text-gray-400 mx-2" />
										<input
											name="date_of_birth"
											type="date"
											id="tanggalLahir"
											className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs"
											required
										/>
									</div>
								</Suspense>
							</div>
						</div>
						<div className="mb-4">
							<Suspense fallback={<InputSkeletal />}>
								<label
									className="block text-primary-gray text-sm font-bold mb-2"
									htmlFor="alamat"
								>
									Alamat{" "}
									<span className="text-gray-600">
										(tanpa kelurahan, kecamatan, kota, dan provinsi)
									</span>
								</label>
								<div className="flex items-center border rounded-md">
									<FaAddressBook className="h-5 w-5 text-gray-400 mx-2" />
									<textarea
										name="address"
										type="text"
										id="alamat"
										className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs"
										placeholder="Contoh: Jalan Cempaka Raya No. 12, Rt.2/Rw.3"
										rows={2}
										required
									/>
								</div>
							</Suspense>
						</div>
						<div className="mb-4 md:grid md:grid-cols-2 gap-4">
							<div>
								<Suspense fallback={<InputSkeletal />}>
									<label
										className="block text-primary-gray text-sm font-bold mb-2"
										htmlFor="negara"
									>
										Negara
									</label>
									<div className="flex items-center border rounded-md">
										<FaGlobe className="h-5 w-5 text-gray-400 mx-2" />
										<input
											name="country"
											type="text"
											id="negara"
											className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs"
											placeholder="Negara"
											required
										/>
									</div>
								</Suspense>
							</div>
							<div>
								<Suspense fallback={<InputSkeletal />}>
									<label
										className="block text-primary-gray text-sm font-bold my-2"
										htmlFor="provinsi"
									>
										Provinsi
									</label>
									<div className="flex items-center border rounded-md">
										<FaMap className="h-5 w-5 text-gray-400 mx-2" />
										<input
											name="province"
											type="text"
											id="provinsi"
											className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs"
											placeholder="Provinsi"
											required
										/>
									</div>
								</Suspense>
							</div>
						</div>
						<div className="mb-4 md:grid md:grid-cols-2 gap-4">
							<div>
								<Suspense fallback={<InputSkeletal />}>
									<label
										className="block text-primary-gray text-sm font-bold mb-2"
										htmlFor="kota"
									>
										Kota
									</label>
									<div className="flex items-center border rounded-md">
										<FaCity className="h-5 w-5 text-gray-400 mx-2" />
										<input
											name="city"
											type="text"
											id="kota"
											className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs"
											placeholder="Kota"
											required
										/>
									</div>
								</Suspense>
							</div>{" "}
							<div>
								<Suspense fallback={<InputSkeletal />}>
									<label
										className="block text-primary-gray text-sm font-bold my-2"
										htmlFor="kecamatan"
									>
										Kecamatan
									</label>
									<div className="flex items-center border rounded-md">
										<FaMapMarked className="h-5 w-5 text-gray-400 mx-2" />
										<input
											name="district"
											type="text"
											id="kecamatan"
											className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs"
											placeholder="Kecamatan"
											required
										/>
									</div>
								</Suspense>
							</div>
						</div>{" "}
						<div className="mb-4 md:grid md:grid-cols-2 gap-4">
							<div>
								<Suspense fallback={<InputSkeletal />}>
									<label
										className="block text-primary-gray text-sm font-bold mb-2"
										htmlFor="kelurahan"
									>
										Kelurahan
									</label>
									<div className="flex items-center border rounded-md">
										<FaMapSigns className="h-5 w-5 text-gray-400 mx-2" />
										<input
											name="subdistrict"
											type="text"
											id="kelurahan"
											className={`block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs ${
												errors.kelurahan ? "border-red-500" : ""
											}`}
											placeholder="Kelurahan"
											required
										/>
										{errors.kelurahan && (
											<p className="text-red-500 text-xs italic">
												{errors.kelurahan}
											</p>
										)}
									</div>
								</Suspense>
							</div>{" "}
							<div>
								<Suspense fallback={<InputSkeletal />}>
									<label
										className="block text-primary-gray text-sm font-bold my-2"
										htmlFor="kodePos"
									>
										Kode Pos
									</label>
									<div className="flex items-center border rounded-md">
										<FaEnvelope className="h-5 w-5 text-gray-400 mx-2" />
										<input
											name="postal_code"
											type="text"
											id="kodePos"
											className={`block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs ${
												errors.kodePos ? "border-red-500" : ""
											}`}
											placeholder="Kode Pos"
											required
										/>
										{errors.kodePos && (
											<p className="text-red-500 text-xs italic">
												{errors.kodePos}
											</p>
										)}
									</div>
								</Suspense>
							</div>
						</div>
						<div className="mb-4 md:grid md:grid-cols-2 gap-5">
							<div>
								<Suspense fallback={<InputSkeletal />}>
									<label
										className="block text-primary-gray text-sm font-bold mb-2"
										htmlFor="riwayatKesehatan"
									>
										Riwayat Kesehatan{" "}
										<span className="text-gray-500">(Opsional)</span>
									</label>
									<textarea
										name="medical_history"
										type="text"
										id="riwayatKesehatan"
										className="shadow appearance-none border-r-2 rounded w-full py-2 px-3 text-primary-gray leading-tight focus:outline-none focus:shadow-outline"
										placeholder="Riwayat Kesehatan"
										rows={6}
									/>
								</Suspense>
							</div>
							<div>
								<div className="mb-5">
									<Suspense fallback={<InputSkeletal />}>
										<label
											className="block text-primary-gray text-sm font-bold mb-2"
											htmlFor="Asuransi"
										>
											Asuransi <span className="text-gray-500">(Opsional)</span>
										</label>
										<input
											name="insurance_name"
											type="text"
											id="Asuransi"
											className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  text-xs"
											placeholder="Asuransi"
										/>
									</Suspense>
								</div>
								<div>
									<Suspense fallback={<InputSkeletal />}>
										<label
											className="block text-primary-gray text-sm font-bold mb-2 "
											htmlFor="nomor-asuransi"
										>
											Nomor Polis Asuransi{" "}
											<span className="text-gray-500">
												(Harus diisi jika memiliki asuransi)
											</span>
										</label>
										<input
											name="insurance_policy_number"
											type="text"
											id="nomor-asuransi"
											className="shadow appearance-none border rounded w-full py-2 px-4 text-primary-gray leading-tight focus:outline-none focus:shadow-outline text-xs"
											placeholder="Nomor Asuransi"
										/>
									</Suspense>
								</div>
							</div>
						</div>
						<div className="flex justify-center mb-4">
							<button type="submit" className="btn btn-primary w-full">
								<FaUserPlus className="h-5 w-5 mr-2 hidden sm:block" />
								Daftar Sekarang
							</button>
						</div>
						<div className="text-center mt-4">
							<div className="divider divider-secondary">
								<span className="text-gray-600">Atau</span>
							</div>
						</div>
						<div className="text-center mt-2">
							Sudah mempunyai akun?
							<Link to="/login" className="text-red-500 hover:text-red-700">
								&nbsp;Masuk
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Register;
