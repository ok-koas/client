import Navbar from "../../components/Navbar";
import { FaSearch, FaPencilAlt } from 'react-icons/fa'; // Gunakan react-icons/fa

const Tanyadokter = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4 bg-blue-50 min-h-screen">
        {/* Search Bar dan Button Buat Pertanyaan Baru */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center bg-gray-200 rounded-full w-1/2">
            <FaSearch className="ml-4 text-gray-500" />
            <input
              type="text"
              placeholder="Cari berdasarkan masalah utama anda..."
              className="w-full bg-gray-200 py-2 px-4 rounded-full focus:outline-none"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full flex items-center">
            <FaPencilAlt className="mr-2" />
            Buat Pertanyaan Baru
          </button>
        </div>

        {/* Daftar Pertanyaan */}
        <div className="space-y-4 ">
          <div className="bg-white p-4 rounded-lg shadow-md flex">
            <img
              src="https://via.placeholder.com/50"
              alt="profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-lg font-semibold">Sesak nafas tiba-tiba gejala penyakit apa?</p>
              <p className="text-sm text-gray-500">Oleh: Er**e</p>
              <p className="text-sm text-gray-500">Dijawab oleh dr. Riza Marlina - 2 jam yang lalu</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md flex">
            <img
              src="https://via.placeholder.com/50"
              alt="profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-lg font-semibold">Pusing kunang-kunang saat menjalani puasa</p>
              <p className="text-sm text-gray-500">Oleh: Er**e</p>
              <p className="text-sm text-gray-500">Dijawab oleh dr. Riza Marlina - 3 jam yang lalu</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md flex">
            <img
              src="https://via.placeholder.com/50"
              alt="profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-lg font-semibold">Diet untuk mengecilkan perut pria buncit</p>
              <p className="text-sm text-gray-500">Oleh: Er**e</p>
              <p className="text-sm text-gray-500">Dijawab oleh dr. Riza Marlina - 5 jam yang lalu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tanyadokter;
