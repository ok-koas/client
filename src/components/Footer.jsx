import React from 'react';
import logo1 from '../assets/fkg.jpeg'; // Adjust the path as needed
import logo2 from '../assets/Ti.jpeg'; // Adjust the path as needed

const Footer = () => {
  return (
    <div className="bg-[#BFDFFE] w-full py-8 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-8">
        <div className="bg-white rounded-lg p-4 shadow-md border border-gray-300 w-full md:w-1/3">
          <div className="text-lg font-bold text-blue-500 text-center"><span className="text-black">OK-</span>Koas</div>
          <p className="text-gray-600 mt-2 text-left">
            Universitas Yarsi<br/>
            Menara YARSI, Jl. Let. Jend. Suprapto Kav. 13,<br/>
            Cempaka Putih, Jakarta Pusat, DKI Jakarta 10510, Indonesia.
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md border border-gray-300 w-full md:w-1/3">
          <div className="text-lg font-bold text-black-500 text-center">Kontak</div>
          <p className="text-gray-600 mt-2 text-left">
            Telephone: +62(21)4206675<br/>
            Fax: +62(21)4243177<br/>
            Email: registrar@yarsi.ac.id, pmbyarsi@yarsi.ac.id
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md border border-gray-300 w-full md:w-1/3">
          <div className="text-lg font-bold text-black-500 text-center">Didukung Oleh</div>
          <div className="flex justify-center items-center space-x-4 mt-2">
            <img src={logo1} alt="Universitas Yarsi" className="h-16"/>
            <img src={logo2} alt="Universitas Yarsi" className="h-16"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
