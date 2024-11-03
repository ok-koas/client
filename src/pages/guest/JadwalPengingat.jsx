import PasienRegisterButton from "../../components/PasienRegisterButton";
import CalendarIcon from "../../components/CalendarIcon";
import ReminderIcon from "../../components/ReminderIcon";
import SyncIcon from "../../components/SyncIcon";

const JadwalPengingat = () => {
	return (
		<>
			<div className="container mb-10 mx-auto px-8 md:px-40">
				<h1 className="text-xl sm:text-3xl font-bold mb-6 md:mb-3 lg:mb-0">
					Jadwal dan Pengingat
				</h1>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm md:text-base">
					{/* Kalender Rotasi */}
					<div className="p-6 bg-neutral rounded-lg shadow-lg">
						<div className="flex items-center mb-4">
							<CalendarIcon className="text-secondary w-6 h-6 mr-2" />
							<h2 className="text-lg font-semibold">Kalender Rotasi</h2>
						</div>
						<p>
							Kalender yang menampilkan jadwal rotasi koas, termasuk shift kerja
							dan rotasi departemen. Memungkinkan mahasiswa koas untuk melihat
							dan merencanakan jadwal rotasi mereka secara lebih terstruktur.
						</p>
					</div>

					{/* Pengingat Tugas dan Ujian */}
					<div className="p-6 bg-neutral rounded-lg shadow-lg">
						<div className="flex items-center mb-4">
							<ReminderIcon className="text-secondary w-6 h-6 mr-2" />
							<h2 className="text-lg font-semibold">Pengingat Tugas dan Ujian</h2>
						</div>
						<p>
							Sistem pengingat yang membantu mengatur jadwal tugas, ujian, dan
							janji temu. Pengaturan pengingat bisa disesuaikan untuk harian,
							mingguan, atau bulanan, memastikan mahasiswa tidak melewatkan
							tanggung jawab penting.
						</p>
					</div>

					{/* Sinkronisasi Kalender */}
					<div className="p-6 bg-neutral rounded-lg shadow-lg">
						<div className="flex items-center mb-4">
							<SyncIcon className="text-secondary w-6 h-6 mr-2" />
							<h2 className="text-lg font-semibold">Sinkronisasi Kalender</h2>
						</div>
						<p>
							Integrasi dengan kalender pribadi seperti Google Calendar atau
							iCal. Fitur ini memungkinkan mahasiswa untuk menyinkronkan
							jadwal mereka, sehingga semua janji dan pengingat terkoordinasi
							dalam satu tempat.
						</p>
					</div>
				</div>

				{/* Register Button */}
				<div className="mt-10 flex justify-center">
					<PasienRegisterButton />
				</div>
			</div>
		</>
	);
};

export default JadwalPengingat;