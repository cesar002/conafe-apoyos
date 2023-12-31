import Image from "next/image";

interface IComoAplicoSeccionProps {
	handleClick?(): void;
}

const ComoAplicoSeccion = ({
	handleClick
}: IComoAplicoSeccionProps) => {

	return (
		<div className="bg-con-primary min-h-[30rem] flex flex-col pb-20 lg:px-0 px-5">
			<div className="flex justify-center items-center">
				<p className="text-con-blue lg:text-5xl text-4xl font-bold lg:w-[50%] w-full text-center">
					¿Cómo aplico para el apoyo?
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
					<p className="text-center text-lg text-gray-500">
						Realiza la <span className="font-bold text-gray-600">solicitud en linea</span>
					</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src="/assets/iconos-aplicar-03.png"
						alt="imagen del apoyo"
						width={300}
						height={300}
					/>
					<p className="text-center text-lg text-gray-500">
						La <span className="font-bold text-gray-600">Coordinación territorial te va a notificar</span> si eres de los beneficiados con el apoyo
					</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src="/assets/iconos-aplicar-04.png"
						alt="imagen del apoyo"
						width={300}
						height={300}
					/>
					<p className="text-center text-lg text-gray-500">
						<span className="font-bold text-gray-500">Firma carta compromiso</span> de recibir el apoyo tecnológico del CONAFE
					</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src="/assets/iconos-aplicar-05.png"
						alt="imagen del apoyo"
						width={300}
						height={300}
					/>
					<p className="text-center text-lg text-gray-500">
						<span className="font-bold text-gray-500">Permanece en la práctica educativa</span> durante el ciclo escolar 2023-2024
					</p>
				</div>
			</div>
			<div className="flex justify-center items-center mt-14">
				<button className="bg-con-blue py-5 uppercase text-white font-bold lg:w-[20%] w-full rounded-full text-lg"
					onClick={handleClick}
				>
					Regístrate aquí
				</button>
			</div>
		</div>
	)
}

export default ComoAplicoSeccion;
