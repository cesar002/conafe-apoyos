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
			<div className="bg-[url('/assets/kid.jpg')] bg-center bg-no-repeat bg-cover lg:min-h-[40rem] min-h-[30rem] w-full p-10 flex justify-center items-center">
				<p className="text-white font-semibold lg:text-3xl text-2xl lg:text-left text-center">
					Impulsa tu desempeño académico Desarrolla actividades que favorezcan el Modelo de Educación Comunitaria y la Relación Tutora cuenta con más herramientas de búsqueda e investigación para el desarrollo de temas de interés
				</p>
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
