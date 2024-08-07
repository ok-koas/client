import React from "react";

const AlasanSection = () => {
	return (
		<section className="text-center py-5 mx-5 bg-blue-50 grid grid-cols-10">
			<h2 className="text-lg md:text-3xl font-bold mb-4 col-start-2 col-span-8">
				Kenapa <span className="text-black">OK</span>
				<span className="text-blue-600">-Koas</span>?
			</h2>
			<span className="text-orange-500 text-5xl font-bold col-start-1 lg:col-start-2 text-end font-seymour-one">
				&ldquo;
			</span>
			<div className="col-span-9" />
			<p className="text-sm md:text-lg mx-auto max-w-full md:max-w-2xl col-start-2 col-span-8">
				<span className="text-black">OK</span>
				<span className="text-blue-600">-Koas</span> memudahkan mahasiswa koas
				dalam menjalankan tugas klinis mereka dengan menyediakan solusi praktis
				dan efisien untuk manajemen pasien, jadwal, dan akses informasi medis
				serta meningkatkan kinerja dan pengalaman koas dalam praktik
				sehari-hari.
			</p>
			<div className="col-span-9" />
			<span className="text-orange-500 text-5xl font-bold col-start-10 lg:col-start-9 text-start font-seymour-one">
				&rdquo;
			</span>
		</section>
	);
};

export default AlasanSection;
