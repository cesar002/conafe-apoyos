import Image from "next/image";

interface ICaracteristicasSeccionProps {
	handleClick?(): void;
}

const CaracteristicasSeccion = ({
	handleClick
}: ICaracteristicasSeccionProps) => {

	return (
		<div className="bg-con-primary min-h-[30rem] flex lg:flex-row flex-col">
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
						Disco duro: 500 GB
					</li>
					<li>
						Procesador CORE i3
					</li>
					<li>
						Memoria RAM: 8 GB
					</li>
					<li>
						La marca puede variar
					</li>
				</ul>
				<button className="bg-con-red py-5 uppercase text-white lg:w-[40%] w-full rounded-full font-medium text-lg"
					onClick={handleClick}
				>
					Regístrate aquí
				</button>
			</div>
		</div>
	)
}

export default CaracteristicasSeccion;
