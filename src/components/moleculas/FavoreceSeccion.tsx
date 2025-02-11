import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const FavoreceSeccion = () => {
	const { locale } = useRouter();
	const t = useTranslations();

	return (
		<div className="bg-[url('/assets/4Asset_27foto-BIEN.jpg')] bg-center bg-cover lg:min-h-[35rem] min-h-[40rem] w-full flex px-5 lg:px-20 lg:py-36 py-10">
			<div className="flex flex-col xl:w-1/2 w-full gap-y-5 lg:justify-items-start lg:items-start justify-center items-center">
				{ locale == 'en' &&
				<h2 className="text-white text-4xl lg:text-5xl font-bold text-left">
					BRIDGE <br/>
					Bridging Digital Divides: National Initiative for Educational Technology Access in Rural Mexico.
				</h2>
				}

				<p className={`text-white ${ locale == 'en' ? 'text-3xl' : 'text-4xl lg:text-5xl' } font-bold lg:text-left text-center`}>
					{ t('seccion_1.titulo') }
				</p>
				<p className="text-white text-3xl font-light lg:text-left text-center">
					{ t('seccion_1.parrafo_1') }
				</p>
				<p className="text-white text-3xl font-light lg:text-left text-center">
					{ t('seccion_1.parrafo_2') }
				</p>
			</div>
		</div>
	)
}

export default FavoreceSeccion;
