import { useTranslations } from "next-intl";

interface IPuedoSerCandidatoSeccionProps {
	handleClick?(): void;
}

const PuedoSerCandidatoSeccion = ({
	handleClick
}: IPuedoSerCandidatoSeccionProps) => {
	const t = useTranslations();

	return (
		<div className="bg-primary min-h-[50rem] w-full flex flex-col pb-10 px-5 lg:px-0">
			<div className="flex flex-col justify-center items-center gap-y-10">
				<p className="text-gray-400 text-center lg:text-2xl text-xl font-semibold w-full">
					{ t('seccion_8.titulo') }
				</p>
			</div>
			<div className="flex flex-col w-full lg:mt-24 mt-14 gap-y-5">
				<div className="flex w-full">
					<div className="lg:w-[10%]" />
					<div className="lg:w-[90%] w-full flex lg:flex-row flex-col lg:items-start items-center gap-y-5 gap-x-10">
						<span className="text-con-green lg:text-8xl text-7xl font-bold">
							1
						</span>
						<div className="bg-con-green h-24 flex items-center text-white lg:w-1/6 w-full px-3">
							<span className="lg:text-6xl text-5xl font-semibold">
								ECAR
							</span>
						</div>
					</div>
				</div>
				<div className="flex w-full">
					<div className="lg:w-[15%]" />
					<div className="lg:w-[85%] w-full flex lg:flex-row flex-col lg:items-start items-center gap-y-5 gap-x-10">
						<span className="text-con-green lg:text-8xl text-7xl font-bold">
							2
						</span>
						<div className="bg-con-green h-24 flex items-center text-white lg:w-1/6 w-full px-3">
							<span className="lg:text-6xl text-5xl font-semibold">
								ECA
							</span>
						</div>
					</div>
				</div>
				<div className="flex w-full">
					<div className="lg:w-[20%]" />
					<div className="xl:w-[80%] lg:w-[90%] w-full flex lg:flex-row flex-col lg:items-start items-center gap-y-5 gap-x-10">
						<span className="text-con-green lg:text-8xl text-7xl font-bold">
							3
						</span>
						<div className="bg-con-green lg:h-24 h-36 py-3 lg:py-0 flex items-center text-white lg:w-[40%] w-full px-5 gap-x-2">
							<span className="lg:text-6xl text-5xl font-semibold">
								EC
							</span>
							<p className="text-white xl:text-base lg:text-sm md:text-base">
								{ t('seccion_8.parrafo_3') }
							</p>
						</div>
					</div>
				</div>
				<div className="flex w-full">
					<div className="lg:w-[25%]" />
					<div className="lg:w-[75%] w-full flex lg:flex-row flex-col lg:items-start items-center gap-y-5 gap-x-10">
						<span className="text-con-green lg:text-8xl text-7xl font-bold">
							4
						</span>
						<div className="bg-con-green h-24 py-3 lg:py-0 flex items-center text-white lg:w-[50%] w-full px-5 gap-x-2">
							<span className="lg:text-6xl text-5xl font-semibold">
								EC
							</span>
							<p className="text-white text-base">
								{ t('seccion_8.parrafo_4') }
							</p>
						</div>
					</div>
				</div>
				<div className="flex w-full">
					<div className="lg:w-[30%]" />
					<div className="lg:w-[70%] w-full flex lg:flex-row flex-col lg:items-start items-center gap-y-5 gap-x-10">
						<span className="text-con-green lg:text-8xl text-7xl font-bold">
							5
						</span>
						<div className="bg-con-green py-3 h-24 lg:py-0 flex justify-start items-center text-white lg:w-[50%] w-full px-5 gap-x-2">
							<span className="lg:text-6xl text-5xl font-semibold">
								EC
							</span>
							<p className="text-white text-base ml-5">
								{ t('seccion_8.parrafo_5') }
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PuedoSerCandidatoSeccion;
