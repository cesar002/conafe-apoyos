import Image from "next/image";

const ConectarSeccion = () => {
	return (
		<div className="bg-con-primary min-h-[25rem] w-full flex">
			<div className="w-1/2 flex flex-col justify-center items-center gap-y-10">
				<p className="text-con-blue text-5xl font-semibold px-36 text-center">
					Conectar con tus compañeros
				</p>
				<p className="text-center text-gray-400 font-semibold text-xl w-[70%]">
					Creemos que aprendes mejor cuando trabajas en equipo. Vamos a facilitar la comunicación y colaboración entre tú y tus compañeros de estudio
				</p>
			</div>
			<div className="w-1/2 flex flex-col justify-center items-center px-10">
				<Image
					src="/assets/4Asset_4img.png"
					alt="Conectar"
					width={500}
					height={550}
				/>
			</div>
		</div>
	);
}

export default ConectarSeccion;
