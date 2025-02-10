import ApoyoTecnologicoSeccion from "@/components/moleculas/ApoyoTecnologicoSeccion";
import CaracteristicasSeccion from "@/components/moleculas/CaracteristicasSeccion";
import ComoAplicoSeccion from "@/components/moleculas/ComoAplicoSeccion";
import FavoreceSeccion from "@/components/moleculas/FavoreceSeccion";
import FortaleceSeccion from "@/components/moleculas/FortaleceSeccion";
import GoogleSeccion from "@/components/moleculas/GoogleSeccion";
import Header from "@/components/moleculas/Header";
import PuedoSerCandidatoSeccion from "@/components/moleculas/PuedoSerCandidatoSeccion";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const Home = () => {
	const t = useTranslations();
	const router = useRouter();

	const irAlRegistro = () => {
		router.push('registro');
	}

	return (
		<div className="min-h-screen bg-[#e4f1e7]">
			<Header />
			<FavoreceSeccion />
			<div className="bg-[url('/assets/kid.jpg')] bg-center bg-no-repeat bg-cover lg:min-h-[40rem] min-h-[30rem] w-full p-10 flex lg:flex-row flex-col justify-between">
				<div className="xl:w-1/2 w-full h-full flex justify-center items-center min-h-[30rem]">
					<iframe width="660" height="415" src="https://www.youtube.com/embed/_Xb3vuNDteE?si=aF4ZPy-RKfZdrSwA&autoplay=1&mute=2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
				</div>
				<div className="flex flex-col xl:w-1/2 w-full gap-y-5 lg:justify-items-start lg:items-start justify-center items-center">
					<p className="text-white text-4xl lg:text-5xl font-bold lg:text-left text-center">
						{ t('seccion_2.titulo') }asdasd
					</p>
					<p className="text-white text-3xl font-light lg:text-left text-center">
						{ t('seccion_2.parrafo_1') }
					</p>
					<p className="text-white text-3xl font-light lg:text-left text-center">
						{ t('seccion_2.parrafo_2') }
					</p>
				</div>
			</div>
			<FortaleceSeccion />
			<ApoyoTecnologicoSeccion />
			<CaracteristicasSeccion />
			<ComoAplicoSeccion handleClick={irAlRegistro} />
			<section className="mt-10 mb-20 w-full bg-[#4C7DBA] p-10">
				<div className="p-3">
					<p className="text-white lg:text-3xl text-2xl lg:text-left text-center">
						{ t('seccion_7.titulo') }
					</p>
					<ul className="list-disc ml-10 text-white mt-5 text-xl">
						<li>
							{ t('seccion_7.parrafo_1') }
						</li>
						<li>
							{ t('seccion_7.parrafo_2') }
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
