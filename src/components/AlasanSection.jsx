import React from 'react';

const AlasanSection = () => {
  return (
    <section className="text-center py-16 bg-blue-50">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Kenapa <span className="text-black">OK</span><span className="text-blue-600">-Koas</span>?
      </h2>
      <p className="text-base md:text-lg mx-auto max-w-full md:max-w-2xl">
        <span className="text-orange-500 text-4xl font-bold">&ldquo;</span>
        <span className="text-black">OK</span><span className="text-blue-600">-Koas</span> memudahkan mahasiswa koas dalam menjalankan tugas klinis mereka dengan menyediakan solusi praktis dan efisien untuk manajemen pasien, jadwal, dan akses informasi medis serta meningkatkan kinerja dan pengalaman koas dalam praktik 
        sehari-hari.
        <span className="text-orange-500 text-4xl font-bold">&rdquo;</span> 
      </p>
    </section>
  );
};

export default AlasanSection;