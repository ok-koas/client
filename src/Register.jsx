import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Register = () => {
  const [errors, setErrors] = useState({});

  const validateForm = (event) => {
    event.preventDefault();
    const formErrors = {};

    const fields = ["password", "ulangiPassword", "kodePos", "kelurahan"];
    fields.forEach(field => {
      const value = event.target[field].value.trim();
      if (!value) {
        formErrors[field] = "Field is required";
      }
    });

    setErrors(formErrors);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-20">
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
              <input
                type="text"
                id="namaLengkap"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nama Lengkap"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nomorHandphone"
              >
                Nomor Handphone
              </label>
              <input
                type="text"
                id="nomorHandphone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nomor Handphone"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email (Opsional)
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    {errors.password}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="ulangiPassword"
                >
                  Ulangi Password
                </label>
                <input
                  type="password"
                  id="ulangiPassword"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.ulangiPassword ? "border-red-500" : ""
                  }`}
                  placeholder="Ulangi Password"
                />
                {errors.ulangiPassword && (
                  <p className="text-red-500 text-xs italic">
                    {errors.ulangiPassword}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="kotaTempatLahir"
                >
                  Kota Tempat Lahir
                </label>
                <input
                  type="text"
                  id="kotaTempatLahir"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Kota Tempat Lahir"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="tanggalLahir"
                >
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  id="tanggalLahir"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
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
              <input
                type="text"
                id="alamat"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Alamat"
              />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="negara"
                >
                  Negara
                </label>
                <input
                  type="text"
                  id="negara"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Negara"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="provinsi"
                >
                  Provinsi
                </label>
                <input
                  type="text"
                  id="provinsi"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Provinsi"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="kota"
                >
                  Kota
                </label>
                <input
                  type="text"
                  id="kota"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Kota"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="kecamatan"
                >
                  Kecamatan
                </label>
                <input
                  type="text"
                  id="kecamatan"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Kecamatan"
                />
              </div>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="kelurahan"
                >
                  Kelurahan
                </label>
                <input
                  type="text"
                  id="kelurahan"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.kelurahan ? "border-red-500" : ""
                  }`}
                  placeholder="Kelurahan"
                />
                {errors.kelurahan && (
                  <p className="text-red-500 text-xs italic">
                    {errors.kelurahan}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="kodePos"
                >
                  Kode Pos
                </label>
                <input
                  type="text"
                  id="kodePos"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.kodePos ? "border-red-500" : ""
                  }`}
                  placeholder="Kode Pos"
                />
                {errors.kodePos && (
                  <p className="text-red-500 text-xs italic">
                    {errors.kodePos}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="riwayatKesehatan"
                >
                  Riwayat Kesehatan
                </label>
                <input
                  type="text"
                  id="riwayatKesehatan"
                  className="shadow appearance-none border-r-2 h-48 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Riwayat Kesehatan"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="nomorAsuransi"
                >
                  Asuransi
                </label>
                <input
                  type="text"
                  id="Asuransi"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Asuransi"
                />
              </div>
            </div>
            <div className="mb-4 ml-80">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 "
                htmlFor="asuransi"
              >
                Nomor Asuransi
              </label>
              <input
                type="text"
                id="Nomor asuransi"
                className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nomor Asuransi"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Daftar Sekarang
              </button>
            </div>
            <div className="text-center mt-4">
              <span className="text-gray-600">Atau</span>
            </div>
            <div className="text-center mt-2">
              <a href="/login" className="text-blue-500 hover:text-blue-700">
                Sudah mempunyai akun? Masuk
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
