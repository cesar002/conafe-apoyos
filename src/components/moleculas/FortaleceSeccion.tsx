import Image from "next/image";

const FortaleceSeccion = () => {

	return (
		<div className="bg-con-blue lg:min-h-[25rem] min-h-[32rem] flex lg:flex-row flex-col w-full lg:py-0 py-10 px-5 lg:px-0">
			<div className="lg:w-[60%] w-full flex flex-col justify-center items-center gap-y-10">
				<p className="lg:text-5xl text-4xl text-con-yellow drop-shadow-md font-semibold text-center lg:text-left">
					Fortalece tu formación
				</p>
				<p className="text-white lg:text-2xl text-xl font-semibold text-center lg:text-left lg:w-[70%]">
					Potencia tus habilidades en la Relación Tutora y compleméntala con acceso a más recursos y capacitación.
				</p>
				<p className="text-white lg:text-2xl text-xl font-semibold text-center lg:text-left lg:w-[70%]">
					Queremos promover el seguimiento, la observación y tu práctica <strong className="font-black">profesional presencial y en línea.</strong>
				</p>
				{/* <p className="text-white lg:text-2xl text-xl font-semibold text-center lg:text-left lg:w-[70%]">
					Fortalecer la práctica pedagógica por medio de favorecer el <strong>acceso a información y textos.</strong>
				</p> */}
			</div>
			<div className="lg:w-[40%] w-full flex justify-center items-center relative">
				<Image
					src="/assets/2Asset_2img.png"
					alt="Fortalece"
					width={800}
					height={100}
					className="absolute xl:bottom-0 -bottom-[15rem] lg:-left-56 -left-16"
				/>
			</div>
		</div>
	)
}

export default FortaleceSeccion;
