import AlasanSection from "../../components/AlasanSection";
import HeroSection from "../../components/HeroSection";
import Hookers2 from "../../components/Hooker2";
import Produk from "../../components/Produk";

export default function HomePage() {
	return (
		<main className="md:px-8 lg:px-16">
			<HeroSection />
			<AlasanSection />
			<Produk />
			<Hookers2 />
		</main>
	);
}
