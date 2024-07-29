import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Register = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-20">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Registrasi Pengguna</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="namaLengkap">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="namaLengkap"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nama Lengkap"
              />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tanggalLahir">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  id="tanggalLahir"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jenisKelamin">
                  Jenis Kelamin
                </label>
                <input
                  type="text"
                  id="jenisKelamin"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Jenis Kelamin"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alamat">
                Alamat
              </label>
              <input
                type="text"
                id="alamat"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Alamat"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="riwayatKesehatan">
                Riwayat Kesehatan (opsional)
              </label>
              <textarea
                id="riwayatKesehatan"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Riwayat Kesehatan"
              ></textarea>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="asuransi">
                  Asuransi (opsional)
                </label>
                <input
                  type="text"
                  id="asuransi"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Asuransi"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nomorPolis">
                  Nomor Polis Asuransi (Harus diisi jika berasuransi)
                </label>
                <input
                  type="text"
                  id="nomorPolis"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nomor Polis Asuransi"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Lanjut
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
