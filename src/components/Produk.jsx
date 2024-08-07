import React from "react";

const Produk = () => {
	return (
		<div className="bg-blue-50 min-h-screen flex flex-col items-center p-10">
			<h1 className="text-lg md:text-3xl font-bold text-center mb-10">
				Layanan <span className="text-blue-600">Kami</span>
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<div className="card w-70 shadow-xl mb-4">
					<figure>
						<img
							src="src/assets/waiting-place.jpg"
							alt="Pasien Menanti"
							className="object-cover h-56 w-full"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title text-md md:text-lg">Pasien Menanti</h2>
						<p className="text-sm md:text-base">
							Pendaftaran pasien dan pencocokan otomatis dengan koas berdasarkan
							spesialisasi dan ketersediaan. Notifikasi real-time untuk koas.
						</p>
					</div>
				</div>
				<div className="card w-70 shadow-xl mb-4">
					<figure>
						<img
							src="src/assets/step.png"
							alt="Step by Step"
							className="object-cover h-56 w-full"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title text-md md:text-lg">Step by Step</h2>
						<p className="text-sm md:text-base">
							Panduan terstruktur dari konsultasi pertama hingga kontrol
							berikutnya. Pengingat otomatis dan sistem poin untuk pasien.
						</p>
					</div>
				</div>
				<div className="card w-70 shadow-xl mb-4">
					<figure>
						<img
							src="src/assets/schedules-and-reminders.jpg"
							alt="Jadwal dan Pengingat"
							className="object-cover h-56 w-full"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title text-md md:text-lg">
							Jadwal dan Pengingat
						</h2>
						<p className="text-sm md:text-base">
							Kalender rotasi, pengingat tugas dan ujian, serta integrasi dengan
							kalender pribadi.
						</p>
					</div>
				</div>
				<div className="card w-70 shadow-xl mb-4">
					<figure>
						<img
							src="src/assets/management.jpg"
							alt="Manajemen Pasien"
							className="object-cover h-56 w-full"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title text-md md:text-lg">Manajemen Pasien</h2>
						<p className="text-sm md:text-base">
							Catatan medis elektronik lengkap, riwayat medis, hasil
							laboratorium, upload radiologi, dan telemedicine.
						</p>
					</div>
				</div>
				<div className="card w-70 shadow-xl mb-4">
					<figure>
						<img
							src="src/assets/Medis.jpeg"
							alt="Pustaka Medis"
							className="object-cover h-56 w-full"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title text-md md:text-lg">Pustaka Medis</h2>
						<p className="text-sm md:text-base">
							Akses cepat ke referensi medis, panduan klinis, jurnal,
							kasus-kasus umum, serta kuis dan soal latihan.
						</p>
					</div>
				</div>
				<div className="card w-70 shadow-xl mb-4">
					<figure>
						<img
							src="src/assets/interaksi.webp"
							alt="Interaksi dan Kolaborasi"
							className="object-cover h-56 w-full"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title text-md md:text-lg">
							Interaksi dan Kolaborasi
						</h2>
						<p className="text-sm md:text-base">
							Forum diskusi dan chat, konsultasi dengan senior atau dosen, serta
							evaluasi diri dan feedback dari supervisor.
						</p>
					</div>
				</div>
				{/* <a
          href="/link1"
          className="block bg-white p-6 rounded-lg shadow-md hover:opacity-80"
        >
          <div className="bg-gray-200 h-40 flex items-center justify-center mb-4">
            <img
              src="src/assets/waiting-place.jpg"
              alt="Pasien Menanti"
              className="object-cover h-full w-full"
            />
          </div>
          <h2 className="text-md md:text-lg font-semibold mb-2">
            Pasien Menanti
          </h2>
          <p className="text-sm md:text-base">
            Pendaftaran pasien dan pencocokan otomatis dengan koas berdasarkan
            spesialisasi dan ketersediaan. Notifikasi real-time untuk koas.
          </p>
        </a>
        <a
          href="/link2"
          className="block bg-white p-6 rounded-lg shadow-md hover:opacity-80"
        >
          <div className="bg-gray-200 h-40 flex items-center justify-center mb-4">
            <img
              src="src/assets/step.png"
              alt="Step by Step"
              className="object-cover h-full w-full"
            />
          </div>
          <h2 className="text-md md:text-lg font-semibold mb-2">
            Step by Step
          </h2>
          <p className="text-sm md:text-base">
            Panduan terstruktur dari konsultasi pertama hingga kontrol
            berikutnya. Pengingat otomatis dan sistem poin untuk pasien.
          </p>
        </a>
        <a
          href="/link3"
          className="block bg-white p-6 rounded-lg shadow-md hover:opacity-80"
        >
          <div className="bg-gray-200 h-40 flex items-center justify-center mb-4">
            <img
              src="src/assets/schedules-and-reminders.jpg"
              alt="Jadwal dan Pengingat"
              className="object-cover h-full w-full"
            />
          </div>
          <h2 className="text-md md:text-lg font-semibold mb-2">
            Jadwal dan Pengingat
          </h2>
          <p className="text-sm md:text-base">
            Kalender rotasi, pengingat tugas dan ujian, serta integrasi dengan
            kalender pribadi.
          </p>
        </a>
        <a
          href="/link4"
          className="block bg-white p-6 rounded-lg shadow-md hover:opacity-80"
        >
          <div className="bg-gray-200 h-40 flex items-center justify-center mb-4">
            <img
              src="src/assets/management.jpg"
              alt="Manajemen Pasien"
              className="object-cover h-full w-full"
            />
          </div>
          <h2 className="text-md md:text-lg font-semibold mb-2">
            Manajemen Pasien
          </h2>
          <p className="text-sm md:text-base">
            Catatan medis elektronik lengkap, riwayat medis, hasil laboratorium,
            upload radiologi, dan telemedicine.
          </p>
        </a>
        <a
          href="/link5"
          className="block bg-white p-6 rounded-lg shadow-md hover:opacity-80"
        >
          <div className="bg-gray-200 h-40 flex items-center justify-center mb-4">
            <img
              src="src/assets/Medis.jpeg"
              alt="Pustaka Medis"
              className="object-cover h-full w-full"
            />
          </div>
          <h2 className="text-md md:text-lg font-semibold mb-2">
            Pustaka Medis
          </h2>
          <p className="text-sm md:text-base">
            Akses cepat ke referensi medis, panduan klinis, jurnal, kasus-kasus
            umum, serta kuis dan soal latihan.
          </p>
        </a>
        <a
          href="/link6"
          className="block bg-white p-6 rounded-lg shadow-md hover:opacity-80"
        >
          <div className="bg-gray-200 h-40 flex items-center justify-center mb-4">
            <img
              src="src/assets/interaksi.webp"
              alt="Interaksi dan Kolaborasi"
              className="object-cover h-full w-full"
            />
          </div>
          <h2 className="text-md md:text-lg font-semibold mb-2">
            Interaksi dan Kolaborasi
          </h2>
          <p className="text-sm md:text-base">
            Forum diskusi dan chat, konsultasi dengan senior atau dosen, serta
            evaluasi diri dan feedback dari supervisor.
          </p>
        </a> */}
			</div>
		</div>
	);
};

export default Produk;
