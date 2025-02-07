import Image from "next/image";
import { useTranslations } from "next-intl";

interface ICaracteristicasSeccionProps {
	handleClick?(): void;
}

const CaracteristicasSeccion = ({
	handleClick
}: ICaracteristicasSeccionProps) => {
	const t = useTranslations();

	return (
		<div className="bg-con-primary min-h-[30rem] flex lg:flex-row flex-col lg:py-0 py-10">
			<div className="lg:w-[40%] w-full flex lg:justify-end justify-center items-center">
				<div className="w-1/2 lg:w-auto">
					<Image
						src="/assets/09-Asset_17img.png"
						alt="Equipo de computos"
						width={400}
						height={100}
					/>
				</div>
			</div>
			<div className="lg:w-[60%] w-full flex flex-col justify-center items-start px-20 gap-y-10 mt-5 lg:mt-0">
				<ul className="text-gray-400 lg:text-2xl text-xl font-semibold list-disc">
					<li>
						{ t('seccion_5.parrafo_1') }
					</li>
					<li>
						{ t('seccion_5.parrafo_2') }
					</li>
					<li>
						{ t('seccion_5.parrafo_3') }
					</li>
					<li>
						{ t('seccion_5.parrafo_4') }
					</li>
					<li>
						{ t('seccion_5.parrafo_5') }
					</li>
				</ul>
				<span className="text-sm text-gray-500">
					{ t('seccion_5.parrafo_6') }
				</span>
			</div>
		</div>
	)
}

export default CaracteristicasSeccion;
