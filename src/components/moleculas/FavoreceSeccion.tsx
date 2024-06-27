import Image from "next/image";

const FavoreceSeccion = () => {

	return (
		<div className="bg-[url('/assets/4Asset_27foto-BIEN.jpg')] bg-center bg-cover lg:min-h-[35rem] min-h-[40rem] w-full flex px-5 lg:px-20 lg:py-36 py-10">
			<div className="flex flex-col xl:w-1/2 w-full gap-y-5 lg:justify-items-start lg:items-start justify-center items-center">
				<p className="text-white text-4xl lg:text-5xl font-bold lg:text-left text-center">
					Impulsa tu desempeño académico
				</p>
				<p className="text-white text-3xl font-light lg:text-left text-center">
					Desarrolla actividades que favorezcan el Modelo de Educación Comunitaria y la Relación Tutora cuenta con más herramientas de búsqueda e investigación para el desarrollo de temas de interés.
				</p>
			</div>
		</div>
	)
}

export default FavoreceSeccion;
