const Produk = () => {
	return (
		<div className="bg-accent min-h-screen flex flex-col items-center p-10">
			<h1 className="text-lg md:text-3xl font-bold text-center mb-10">
				Layanan <span className="text-secondary">Kami</span>
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* Pasien Menanti */}
				<a href="/login" target="_blank">
					<div className="card bg-neutral w-70 shadow-xl mb-4">
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
				</a>

				{/* Step by Step */}
				<a href="/stepbystep" target="_blank">
					<div className="card bg-neutral w-70 shadow-xl mb-4">
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
				</a>

				{/* Interaksi dan Kolaborasi */}
				<a href="/login" target="_blank">
					<div className="card bg-neutral w-70 shadow-xl mb-4">
						<figure>
							<img
								src="src/assets/interaksi.webp"
								alt="Interaksi dan Kolaborasi"
								className="object-cover h-56 w-full"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title text-md md:text-lg">Interaksi dan Kolaborasi</h2>
							<p className="text-sm md:text-base">
								Forum diskusi dan chat, konsultasi dengan senior atau dosen, serta
								evaluasi diri dan feedback dari supervisor.
							</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Produk;