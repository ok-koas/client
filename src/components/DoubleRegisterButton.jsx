import React from "react";

const DoubleRegisterButton = () => {
  return (
    <div className="mt-6 md:flex md:justify-start">
      <button className="bg-red-500 hover:bg-red-600 focus-within:bg-red-700 mb-3 md:mb-0 text-white text-sm py-2 px-4 rounded-full md:rounded-none md:rounded-l-full">
        Daftar Sebagai Pasien
      </button>
      <button className="bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 text-black focus:text-white text-sm py-2 px-4 rounded-full md:rounded-none md:rounded-r-full">
        Daftar Sebagai Dokter
      </button>
    </div>
  );
};

export default DoubleRegisterButton;
