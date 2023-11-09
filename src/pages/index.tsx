import AyudarteSeccion from "@/components/moleculas/AyudarteSeccion";
import CertificateSeccion from "@/components/moleculas/CertificateSeccion";
import ConectarSeccion from "@/components/moleculas/ConectarSeccion";
import GoogleSeccion from "@/components/moleculas/GoogleSeccion";
import Header from "@/components/moleculas/Header";
import PotenciarSeccion from "@/components/moleculas/PotenciarSeccion";
import PreparateSeccion from "@/components/moleculas/PreparateSeccion";

const Home = () => {

	return (
		<div className="min-h-screen bg-[#e4f1e7]">
			<Header />
			<PotenciarSeccion />
			<PreparateSeccion />
			<AyudarteSeccion />
			<ConectarSeccion />
			<GoogleSeccion />
			<CertificateSeccion />
		</div>
	);
}

export default Home;
