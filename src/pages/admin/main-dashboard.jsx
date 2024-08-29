import { lazy, Suspense } from "react";
import { FaUserInjured } from "react-icons/fa";
import { FaUserDoctor, FaUserGroup } from "react-icons/fa6";
const StatsOne = lazy(() => import("../../components/stats/StatsOne"));

export default function MainDashboard() {
	return (
		<>
			<div className="grid grid-cols-12 gap-5 mb-5">
				<Suspense fallback="Loading">
					<StatsOne
						Icon={FaUserGroup}
						iconClass={"text-primary"}
						title={"Jumlah Pengguna"}
						value={"26K"}
						valueClass={"text-primary"}
						description={"21% lebih banyak dari bulan lalu"}
						className={"shadow-xl rounded-xl col-span-4"}
					/>
				</Suspense>
				<div className="stats shadow-xl col-span-8">
					<StatsOne
						Icon={FaUserInjured}
						iconClass={"text-secondary"}
						title={"Jumlah Pasien"}
						value={"2.6K"}
						valueClass={"text-secondary"}
						description={"21% lebih banyak dari bulan lalu"}
					/>
					<StatsOne
						Icon={FaUserDoctor}
						title={"Jumlah Dokter"}
						value={"21K"}
						description={"15 pertemuan terjadwal hari ini"}
					/>
				</div>
				<div className="stats shadow-xl col-span-8">
					<StatsOne
						title={"Jumlah Dokter"}
						value={"21K"}
						description={"15 pertemuan terjadwal hari ini"}
					/>
					<StatsOne
						title={"Jumlah Dokter"}
						value={"21K"}
						description={"15 pertemuan terjadwal hari ini"}
					/>
				</div>
				<StatsOne
					title={"Jumlah Dokter"}
					value={"21K"}
					description={"15 pertemuan terjadwal hari ini"}
					className={"col-span-4 shadow-xl rounded-xl"}
				/>
			</div>
		</>
	);
}
