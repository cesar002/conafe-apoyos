import { useRouter } from "next/router";

import ApoyoTecnologicoSeccion from "@/components/moleculas/ApoyoTecnologicoSeccion";
import CaracteristicasSeccion from "@/components/moleculas/CaracteristicasSeccion";
import ComoAplicoSeccion from "@/components/moleculas/ComoAplicoSeccion";
import FavoreceSeccion from "@/components/moleculas/FavoreceSeccion";
import FortaleceSeccion from "@/components/moleculas/FortaleceSeccion";
import GoogleSeccion from "@/components/moleculas/GoogleSeccion";
import Header from "@/components/moleculas/Header";
import PuedoSerCandidatoSeccion from "@/components/moleculas/PuedoSerCandidatoSeccion";

const Home = () => {
	const router = useRouter();

	const irAlRegistro = () => {
		router.push('registro');
	}

	return (
		<div className="min-h-screen bg-[#e4f1e7]">
			<Header />
			<FavoreceSeccion />
			<FortaleceSeccion />
			<ApoyoTecnologicoSeccion />
			<CaracteristicasSeccion handleClick={irAlRegistro} />
			<ComoAplicoSeccion />
			<PuedoSerCandidatoSeccion handleClick={irAlRegistro} />
			<GoogleSeccion handleClick={irAlRegistro} />
		</div>
	);
}

export default Home;
