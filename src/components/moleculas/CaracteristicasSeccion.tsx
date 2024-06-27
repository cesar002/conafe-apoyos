import Image from "next/image";

interface ICaracteristicasSeccionProps {
	handleClick?(): void;
}

const CaracteristicasSeccion = ({
	handleClick
}: ICaracteristicasSeccionProps) => {

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
						Modelo: HP 200 G9-edu /892R5LA#ABM
					</li>
					<li>
						Pantalla: LCD 14” HD
					</li>
					<li>
						Memoria RAM: 8 GB (1x(GB) DDR4 3200)
					</li>
					<li>
						Disco duro: SSD 512 GB
					</li>
					<li>
						Sistema operativo: Windows 11 Home, 64 bits
					</li>
				</ul>
				<span className="text-sm text-gray-500">
					*SSD tienen velocidades más rápidas, mayor durabilidad y eficiencia que los HDD
				</span>
			</div>
		</div>
	)
}

export default CaracteristicasSeccion;
