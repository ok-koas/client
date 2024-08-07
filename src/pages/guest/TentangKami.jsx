import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DoubleRegisterButton from "../../components/DoubleRegisterButton";
import PeopleDiscussingImage from "../../components/PeopleDiscussingImage";

const TentangKami = () => {
  return (
    <>
      <div className="container mt-10 mx-auto px-8 md:px-40 py-16">
        <h1 className="text-xl sm:text-3xl font-bold mb-6 md:mb-3 lg:mb-0">
          Tentang OK-Koas
        </h1>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mb-5 flex justify-center align-middle lg:hidden">
            <div className="w-3/4">
              <PeopleDiscussingImage />
            </div>
          </div>
          <div className="text-sm md:text-base lg:w-1/2">
            <p className="mb-4">
              <strong>OK-Koas</strong> adalah platform yang dirancang untuk
              mempermudah mahasiswa program koas dalam menjalankan tugas klinis
              mereka.
            </p>
            <p className="mb-4">
              Kami menyediakan solusi praktis dan efisien yang terintegrasi
              dalam sebuah platform berbasis website, yang membantu meningkatkan
              kinerja dan pengalaman koas dalam praktik klinis sehari-hari.
            </p>
            <p className="mb-4">
              Di <strong>OK-Koas</strong>, kami memahami tantangan yang dihadapi
              oleh koas, mulai dari manajemen pasien hingga koordinasi jadwal
              dan akses informasi medis.
            </p>
            <p className="mb-4">
              Oleh karena itu, kami mengembangkan berbagai fitur yang dirancang
              khusus untuk mendukung kebutuhan koas dalam lingkungan klinis yang
              dinamis dan penuh tuntutan.
            </p>
            <DoubleRegisterButton />
          </div>
          <div className="hidden lg:w-1/2 mt-6 lg:mt-0 lg:flex lg:justify-center">
            <PeopleDiscussingImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default TentangKami;
