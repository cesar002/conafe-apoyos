import Image from "next/image";

const PotenciarSeccion = () => {

	return (
		<div className="min-h-[25rem] w-full flex bg-white px-10">
			<div className="w-[40%] relative">
				<Image
					src="/assets/1Asset_1img.png"
					alt="Potenciar"
					width={600}
					height={300}
					className="absolute bottom-0 left-0"
				/>
			</div>
			<div className="w-[60%] flex justify-center items-center flex-col gap-y-10">
				<p className="text-con-red text-5xl font-bold">
					Potenciar tu aprendizaje en línea
				</p>
				<p className="text-left text-gray-400 font-semibold text-xl">
					Queremos que tengas todas las herramientas para seguir estudiando desde cualquier lugar
				</p>
			</div>
		</div>
	);
}

export default PotenciarSeccion;
