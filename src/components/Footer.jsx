import logo_masjid from "../assets/lambang-masjid-yarsi.png";
import Logo from "./Logo";

const Footer = () => {
	return (
		<div className="bg-footer w-full py-8 px-4 shadow-inner">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-start space-y-4 md:space-y-0 md:space-x-8">
				<div className="bg-neutral rounded-lg p-4 shadow-md border border-gray-300 w-full md:w-1/3">
					<Logo className="text-xl md:text-2xl" />
					<p className="text-sm md:text-base mt-2 text-left">
						Universitas Yarsi
						<br />
						Menara YARSI, Jl. Let. Jend. Suprapto Kav. 13,
						<br />
						Cempaka Putih, Jakarta Pusat, DKI Jakarta 10510, Indonesia.
					</p>
				</div>
				<div className="bg-neutral rounded-lg p-4 shadow-md border border-gray-300 w-full md:w-1/3">
					<div className="text-lg font-bold">Kontak</div>
					<p className="text-sm md:text-base mt-2 text-left">
						Telephone: +62(21)4206675
						<br />
						Fax: +62(21)4243177
						<br />
						Email: registrar@yarsi.ac.id, pmbyarsi@yarsi.ac.id
					</p>
				</div>
				<div className="bg-neutral rounded-lg p-4 shadow-md border border-gray-300 w-full md:w-1/3">
					<div className="text-lg font-bold">Didukung Oleh</div>
					<div className="flex  space-x-4 mt-2">
						<img src={logo_masjid} alt="Masjid Jami Yarsi" className="h-16" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
