import React from 'react'

const DoubleRegisterButton = () => {
    return (
        <div className="mt-6 md:flex md:justify-start">
            <button className="bg-red-500 mb-3 md:mb-0 text-white text-sm py-2 px-4 rounded-full md:rounded-none md:rounded-l-full">Daftar Sebagai Dokter</button>
            <button className="bg-gray-200 text-black text-sm py-2 px-4 rounded-full md:rounded-none md:rounded-r-full">Daftar Sebagai Pasien</button>
          </div>
    )
}

export default DoubleRegisterButton;