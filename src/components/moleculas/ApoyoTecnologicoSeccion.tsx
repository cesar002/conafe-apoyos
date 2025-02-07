import { useTranslations } from "next-intl";

const ApoyoTecnologicoSeccion = () => {
	const t = useTranslations();

	return (
		<div className="bg-[url('/assets/2Asset_25foto-BIEN.jpg')] min-h-[35rem] w-full flex flex-col justify-center items-center gap-y-10 py-10 lg:py-0 px-5 lg:px-0">
			<p className="text-white lg:text-5xl text-4xl font-bold lg:w-[50%] w-full text-center">
				{ t('seccion_4.titulo') }
			</p>
			<p className="text-white text-center lg:text-2xl text-xl lg:w-[70%]">
				{ t('seccion_4.parrafo_1') }
			</p>
		</div>
	)
}

export default ApoyoTecnologicoSeccion;
