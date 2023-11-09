import Image from "next/image";

const AyudarteSeccion = () => {

	return (
		<div className="bg-con-primary min-h-[25rem] w-full flex">
			<div className="w-[40%] flex flex-col justify-center items-center px-10">
				<Image
					src="/assets/3Asset_3img.png"
					alt="Ayudarte"
					width={300}
					height={300}
				/>
			</div>
			<div className="w-[60%] flex flex-col justify-center items-center gap-y-10">
				<p className="text-con-yellow text-5xl font-semibold px-36 text-center">
					Ayudarte a encontrar información en línea
				</p>
				<p className="text-center text-gray-400 font-semibold text-xl w-[70%]">
					aprende a buscar y encontrar información en Internet es una habilidad valiosa. Te ayudaremos a dominarla
				</p>
			</div>
		</div>
	);
}

export default AyudarteSeccion;
