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
			<div className="bg-[url('/assets/kid.jpg')] bg-center bg-no-repeat bg-cover lg:min-h-[40rem] min-h-[30rem] w-full p-10 flex justify-end">
				<div className="flex flex-col xl:w-1/2 w-full gap-y-5 lg:justify-items-start lg:items-start justify-center items-center">
					<p className="text-white text-4xl lg:text-5xl font-bold lg:text-left text-center">
						Fortalece tu formación
					</p>
					<p className="text-white text-3xl font-light lg:text-left text-center">
						Potencia tus habilidades en la Relación Tutora y compleméntala con acceso a más recursos y capacitación.
					</p>
					<p className="text-white text-3xl font-light lg:text-left text-center">
						Queremos promover el seguimiento, la observación y tu práctica presencial y en línea.
					</p>
				</div>
			</div>
			<FortaleceSeccion />
			<ApoyoTecnologicoSeccion />
			<CaracteristicasSeccion />
			<ComoAplicoSeccion handleClick={irAlRegistro} />
			<section className="mt-10 mb-20 w-full px-10">
				<div className="border-2 border-blue-400 p-3">
					<p className="text-gray-600 lg:text-3xl text-2xl lg:text-left text-center">
						Se Convoca a Figuras Educativas del Consejo Nacional de Fomento Educativo que tengan interés en ser beneficiados con un apoyo adicional, correspondiente al 50% del costo de un equipo de cómputo.
					</p>
					<ul className="list-disc ml-10 text-gray-600 mt-5 text-xl">
						<li>
							Realiza tu registro de manera voluntaria.
						</li>
						<li>
							Podrás aplicar si eres figura educativa que presta su servicio social en el CONAFE (ECAR, ECA y EC)
						</li>
					</ul>
				</div>
			</section>
			<PuedoSerCandidatoSeccion handleClick={irAlRegistro} />
			<GoogleSeccion handleClick={irAlRegistro} />
		</div>
	);
}

export default Home;
