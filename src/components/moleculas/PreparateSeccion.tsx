import Image from "next/image";

const PreparateSeccion = () => {

	return (
		<div className="bg-con-blue min-h-[30rem] w-full flex px-10">
			<div className="w-[60%] flex flex-col justify-center items-center gap-y-10 px-10">
				<p className="text-5xl text-con-yellow font-bold drop-shadow-md px-20 text-center">
					Prepárate para una experiencia educativa única
				</p>
				<p className="text-center text-white font-medium text-2xl">
					vamos a explorar nuevas formas de aprender juntos. Queremos promover el seguimiento, la observación y la práctica de la Relación Tutora a distancia y en línea...
				</p>
				<p className="text-center text-white font-medium text-2xl">
					Fortalecer la práctica pedagógica por medio de favorecer el acceso a información y textos.
				</p>
			</div>
			<div className="w-[40%] relative">
				<Image
					src="/assets/2Asset_2img.png"
					alt="Preparate"
					width={650}
					height={100}
					className="absolute bottom-0 left-0"
				/>
			</div>
		</div>
	);
}

export default PreparateSeccion;
