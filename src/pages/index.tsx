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
			<div className="w-full min-h-[15rem] p-10 flex justify-center items-center">
				<p className="text-gray-600 lg:text-xl text-sm">
					Se Convoca a Figuras Educativas del Consejo Nacional de Fomento Educativo que quieran ser beneficiados con un apoyo adicional, correspondiente al 50% del costo de un equipo de cómputo.
					En esta fase podrán ser beneficiados alrededor de 10 mil Figuras Educativas, que se registrarán bajo los siguientes criterios:
					Realizar su registro de manera voluntaria.
					Podrán aplicar a este apoyo todas las figuras educativas que prestan su servicio social en el CONAFE (ECAR, ECA y EC)
					Debido a que los recursos son limitados, y que en cada fase será necesario aplicar criterios de prelación para la asignación de los mismos, es muy importante que incorpores tus datos correctamente (tipo de figura educativa, fecha de ingreso al CONAFE, qué estudias y en qué institución)
				</p>
			</div>
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
			<PuedoSerCandidatoSeccion handleClick={irAlRegistro} />
			<GoogleSeccion handleClick={irAlRegistro} />
		</div>
	);
}

export default Home;
