import Image from "next/image";

const Header = () => {

	return (
		<div className="min-h-[15rem] w-full bg-[#9d2344] flex lg:flex-row flex-col lg:justify-start justify-center items-center gap-y-5">
			<div className="md:w-1/4 w-full flex justify-center items-center">
				<Image
					src="/assets/fondo_conafe_nuevo.svg"
					alt="Conafe Logo"
					width={300}
					height={100}
				/>
			</div>
			<div className="md:w-3/4 w-full flex justify-center items-center lg:px-10">
				<p className="lg:text-left text-center lg:text-4xl md:text-2xl text-lg font-bold text-white">
					Convocataria para el Fortalecimiento del Desempeño Académico y Profesional de las Figuras Educativas mediante un Apoyo Económico adicional  para acceder a dispositivos Tecnológicos.
				</p>
			</div>
		</div>
	);
}

export default Header;
