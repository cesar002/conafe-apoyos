import Image from "next/image";
import { useTranslations } from "next-intl";

interface IComoAplicoSeccionProps {
	handleClick?(): void;
}

const ComoAplicoSeccion = ({
	handleClick
}: IComoAplicoSeccionProps) => {
	const t = useTranslations();

	return (
		<div className="bg-con-primary min-h-[30rem] flex flex-col pb-20 lg:px-0 px-5">
			<div className="flex justify-center items-center">
				<p className="text-con-blue lg:text-5xl text-4xl font-bold lg:w-[50%] w-full text-center">
					{ t('seccion_6.titulo') }
				</p>
			</div>
			<div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-3 mt-16">
				<div className="flex flex-col justify-center items-center">
					<Image
						src="/assets/iconos-aplicar-02.png"
						alt="imagen del apoyo"
						width={300}
						height={300}
					/>
					<p className="text-center text-lg text-gray-500 font-medium">
						{ t('seccion_6.parrafo_1') }
					</p>
					<p className="text-xs text-center text-gray-500 font-medium">
						{ t('seccion_6.parrafo_2') }
					</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src="/assets/email.png"
						alt="imagen del apoyo"
						width={300}
						height={300}
					/>
					<p className="text-center text-lg text-gray-500 font-medium">
						{ t('seccion_6.parrafo_3') }
					</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src="/assets/iconos-aplicar-04.png"
						alt="imagen del apoyo"
						width={300}
						height={300}
					/>
					<p className="text-center text-lg text-gray-500 font-medium">
						{ t('seccion_6.parrafo_4') }
					</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src="/assets/iconos-aplicar-05.png"
						alt="imagen del apoyo"
						width={300}
						height={300}
					/>
					<p className="text-center text-lg text-gray-500 font-medium">
						{ t('seccion_6.parrafo_5') }
					</p>
				</div>
			</div>
		</div>
	)
}

export default ComoAplicoSeccion;
