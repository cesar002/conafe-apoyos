import Image from "next/image";

const ComoAplicoSeccion = () => {

	return (
		<div className="bg-con-primary min-h-[30rem] flex flex-col pb-20">
			<div className="flex justify-center items-center">
				<p className="text-con-blue lg:text-5xl text-4xl font-bold lg:w-[30%] w-full text-center">
					¿Cómo aplico para el apoyo?
				</p>
			</div>
			<div className="flex lg:flex-row flex-col justify-around lg:items-start items-center mt-16 gap-y-10">
				<div className="flex justify-center items-center flex-col lg:w-1/3 w-full">
					<Image
						src="/assets/04-Asset_12img.png"
						alt=""
						width={230}
						height={230}
					/>
					<p className="lg:text-2xl text-xl text-gray-400 mt-5">
						Realiza la <strong>solicitud en línea</strong>
					</p>
				</div>
				<div className="flex justify-center items-center flex-col lg:w-1/3 w-full">
					<Image
						src="/assets/05-Asset_13img.png"
						alt=""
						width={300}
						height={300}
					/>
					<p className="lg:text-2xl text-xl text-gray-400 mt-5 text-center w-1/2">
						<strong>Firma carta compromiso</strong> de recibir el apoyo tecnológico de CONAFE
					</p>
				</div>
				<div className="flex justify-center items-center flex-col lg:w-1/3 w-full">
					<Image
						src="/assets/06-Asset_14img.png"
						alt=""
						width={300}
						height={300}
					/>
					<p className="lg:text-2xl text-xl text-gray-400 mt-5 text-center w-1/2">
						<strong>Permanece en la práctica educativa</strong> durante el ciclo escolar 2023 - 2024
					</p>
				</div>
			</div>
		</div>
	)
}

export default ComoAplicoSeccion;
