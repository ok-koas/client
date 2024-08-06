import React, { useState } from "react";
import {
  FaUserPlus,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaLock,
  FaGlobe,
  FaMapPin,
  FaCalendarDay,
  FaMapSigns,
  FaMapMarked,
  FaCity,
  FaMountain,
  FaMap,
  FaRegBuilding,
  FaUserNurse,
  FaHouseUser,
  FaLockOpen,
  FaRegUser,
  FaUserTag,
  FaAddressBook,
} from "react-icons/fa";

const Register = () => {
  const [errors, setErrors] = useState({});

  const validateForm = (event) => {
    event.preventDefault();
    const formErrors = {};

    const fields = ["password", "ulangiPassword", "kodePos", "kelurahan"];
    fields.forEach((field) => {
      const value = event.target[field].value.trim();
      if (!value) {
        formErrors[field] = "Field is required";
      }
    });

    setErrors(formErrors);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-20 mt-10">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Registrasi Pengguna
          </h2>
          <form onSubmit={validateForm}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
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
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Contoh: Muhammad Subardjo"
                  required
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 gap-5">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Contoh: muhammad.subardjo"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Contoh: 6283812345678"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
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
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Contoh: ahmad.subardjo@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="mb-1 md:grid md:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                    className={`block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
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
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold my-2"
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
                    className={`block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
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
              </div>
            </div>
            <p className="text-blue-500 mb-4">
              Password harus memiliki 8 huruf yang setidaknya terdiri dari 1
              huruf besar, 1 huruf kecil, dan 1 angka
            </p>
            <div className="mb-4 md:grid md:grid-cols-2 gap-4">
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Kota Tempat Lahir"
                    required
                  />
                </div>
              </div>
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold my-2"
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
                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
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
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Contoh: Jalan Cempaka Raya No. 12, Rt.2/Rw.3"
                  rows={2}
                  required
                />
              </div>
            </div>
            <div className="mb-4 md:grid md:grid-cols-2 gap-4">
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Negara"
                    required
                  />
                </div>
              </div>
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold my-2"
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
                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Provinsi"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-4 md:grid md:grid-cols-2 gap-4">
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Kota"
                    required
                  />
                </div>
              </div>{" "}
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold my-2"
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
                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Kecamatan"
                    required
                  />
                </div>
              </div>
            </div>{" "}
            <div className="mb-4 md:grid md:grid-cols-2 gap-4">
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
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
                    className={`block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
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
              </div>{" "}
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold my-2"
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
                    className={`block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
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
              </div>
            </div>
            <div className="mb-4 md:grid md:grid-cols-2 gap-5">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="riwayatKesehatan"
                >
                  Riwayat Kesehatan{" "}
                  <span className="text-gray-500">(Opsional)</span>
                </label>
                <textarea
                  name="medical_history"
                  type="text"
                  id="riwayatKesehatan"
                  className="shadow appearance-none border-r-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Riwayat Kesehatan"
                  rows={6}
                />
              </div>
              <div>
                <div className="mb-5">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="Asuransi"
                  >
                    Asuransi <span className="text-gray-500">(Opsional)</span>
                  </label>
                  <input
                    name="insurance_name"
                    type="text"
                    id="Asuransi"
                    className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Asuransi"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 "
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
                    className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Nomor Asuransi"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn"
              >
                <FaUserPlus className="h-5 w-5 mr-2" />
                Daftar Sekarang
              </button>
            </div>
            <div className="text-center mt-4">
              <span className="text-gray-600">Atau</span>
            </div>
            <div className="text-center mt-2">
              Sudah mempunyai akun?
              <a href="/login" className="text-red-500 hover:text-red-700">
                &nbsp;Masuk
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
