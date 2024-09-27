import AlasanSection from "../../components/AlasanSection";
import HeroSection2 from "../../components/HeroSection2";
import Hookers from "../../components/Hooker";
import Produk from "../../components/Produk";

export default function Beranda() {
	return (
		<main className="md:px-8 lg:px-16">
			<HeroSection2 />
			<AlasanSection />
			<Produk />
			<Hookers />
		</main>
	);
}
