import Image from "next/image";

const FavoreceSeccion = () => {

	return (
		<div className="bg-[url('/assets/4Asset_27foto-BIEN.jpg')] bg-center bg-cover lg:min-h-[35rem] min-h-[40rem] w-full flex px-5 lg:px-20 lg:py-36 py-10">
			<div className="flex flex-col xl:w-1/2 w-full gap-y-5 lg:justify-items-start lg:items-start justify-center items-center">
				<p className="text-white text-4xl lg:text-5xl font-bold lg:text-left text-center">
					Fortalece tu formación
				</p>
				<p className="text-white text-3xl font-light lg:text-left text-center">
					Potencia tus habilidades en la Relación Tutora y compleméntala con acceso a más recursos y capacitación.
				</p>
				<p className="text-white text-3xl font-light lg:text-left text-center">
					Queremos promover el seguimiento, la observación y tu práctica presencial y en línea.
				</p>
			</div>
			{/* <div className="lg:w-[40%] relative flex justify-center items-center">
				<Image
					src="/assets/nueva-img-home.png"
					alt=""
					width={500}
					height={100}
					className="absolute lg:-bottom-14 -bottom-[40rem]"
				/>
			</div>
			<div className="lg:w-[60%] flex flex-col justify-center gap-y-10">
				<p className="text-con-red lg:text-5xl text-4xl lg:text-left text-center font-bold lg:w-[80%]">
					Favorece la continuidad de tus estudios
				</p>
				<p className="text-gray-400 font-semibold lg:text-2xl text-xl text-center lg:text-left">
					<strong className="text-gray-500">Queremos</strong> que tengas todas las herramientas para seguir estudiando desde cualquier lugar.
				</p>
			</div> */}
		</div>
	)
}

export default FavoreceSeccion;
