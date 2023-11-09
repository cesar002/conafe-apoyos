import Image from "next/image";

interface IGoogleSeccionProps {
	handleClick?(): void
}

const GoogleSeccion = ({
	handleClick
}: IGoogleSeccionProps) => {
	//Para tus actividades academicas ¿utilizas algún dispositivo electronico?
	//¿Que dispositivo utilizas mas para tus actividades academicas
	return (
		<>
		<div className="bg-[url('/assets/3Asset_26foto-BIEN.jpg')] lg:min-h-[50rem] min-h-[20rem] bg-cover bg-no-repeat flex lg:flex-row flex-col lg:p-20 p-10">
			<div className="lg:w-1/2 w-full flex justify-center lg:mb-0 mb-10">
				<p className="text-white font-bold lg:text-6xl text-4xl">
					Además incluye
				</p>
			</div>
			<div className="lg:w-1/2 w-full flex flex-col gap-y-10 justify-center items-center">
				<Image
					src="/assets/4Asset_22google-blanco.svg"
					alt="Google Suit"
					width={600}
					height={100}
				/>
				<Image
					src="/assets/08-Asset_16logosGGL.svg"
					alt="Google Suit"
					width={600}
					height={100}
				/>
			</div>
		</div>
		<div className="lg:mt-[13rem] mt-[3rem] flex flex-col py-10 bg-con-primary">
			<div className="flex lg:flex-row flex-col lg:min-h-[25rem] min-h-[30rem] lg:mt-0 mt-[15rem]">
				<div className="lg:w-1/2 w-full relative">
					<Image
						src="/assets/5Asset_5img.png"
						alt="Manos"
						width={850}
						height={100}
						className="absolute lg:-bottom-52 -bottom-[1rem] -left-0"
					/>
				</div>
				<div className="lg:w-1/2 w-full relative lg:mt-0 mt-14">
					<p className="text-gray-500 font-bold lg:text-5xl text-4xl text-center lg:text-left">
						Y certificación como  Google Educator
					</p>
					<ul className="list-disc lg:text-2xl text-lg text-gray-500 mt-10 lg:w-1/2 w-full flex flex-col justify-center lg:items-start items-center px-10">
						<li>
							<strong>Curso en línea</strong> para certificarte como Google Educator.
						</li>
						<li>
							Examen de <strong>simulación para la certificación</strong> online.
						</li>
						<li>
							<strong>Pase</strong> para certificarte con Google como Educador Google nivel 1.
						</li>
					</ul>

					<Image
						src="/assets/6Asset_6img.png"
						alt="Manos"
						width={400}
						height={400}
						className="absolute -bottom-[10rem] right-0 lg:block hidden"
					/>
				</div>
			</div>

			<div className="flex justify-center items-center">
				<button className="bg-con-blue text-white font-medium text-lg lg:w-1/5 w-[80%] uppercase py-5 rounded-full lg:mt-20"
					onClick={handleClick}
				>
					Regístrate aquí
				</button>
			</div>
		</div>
		</>
		// <div className="bg-con-gray min-h-[35rem] flex flex-col py-10">
		// 	<div className="flex lg:flex-row flex-col-reverse lg:mt-32 mt-10">
		// 		<div className="lg:w-1/2 w-full relative">
		// 			<div className="w-[30%] lg:w-auto">
						// <Image
						// 	src="/assets/5Asset_5img.png"
						// 	alt="Manos"
						// 	width={850}
						// 	height={100}
						// 	className="absolute lg:-bottom-52 -bottom-[26rem] -left-0"
						// />
		// 			</div>
		// 		</div>
		// 		<div className="lg:w-1/2 w-full flex flex-col justify-center items-center gap-y-10">
		// 			<p className="text-gray-500 font-bold lg:text-6xl text-4xl">
		// 				Además incluye
		// 			</p>
		// 			<div className="w-[80%] lg:w-auto">
		// 				<Image
		// 					src="/assets/07-Asset_15logoGGL.svg"
		// 					alt="Google Suit"
		// 					width={400}
		// 					height={100}
		// 				/>
		// 			</div>
		// 			<div className="w-[80%] lg:w-auto">
						// <Image
						// 	src="/assets/08-Asset_16logosGGL.svg"
						// 	alt="Google Suit"
						// 	width={600}
						// 	height={100}
						// />
		// 			</div>
		// 		</div>
		// 	</div>
			// <div className="lg:mt-[13rem] mt-[30rem] flex flex-col justify-center items-center">
			// 	<p className="text-gray-500 font-bold lg:text-5xl text-4xl text-center lg:text-left">
			// 		Y certificación como  Google Educator
			// 	</p>
			// 	<ul className="list-disc lg:text-2xl text-lg text-gray-500 mt-10 lg:w-1/2 w-[80%] flex flex-col justify-center items-sta">
			// 		<li>
			// 			<strong>Curso en línea</strong> para certificarte como Google Educator.
			// 		</li>
			// 		<li>
			// 			Examen de <strong>simulación para la certificación</strong> online.
			// 		</li>
			// 		<li>
			// 			<strong>Pase</strong> para certificarte con Google como Educador Google nivel 1.
			// 		</li>
			// 	</ul>

			// 	<button className="bg-con-blue text-white font-medium text-lg lg:w-1/5 w-[80%] uppercase py-5 rounded-full mt-20"
			// 		onClick={handleClick}
			// 	>
			// 		Regístrate aquí
			// 	</button>
			// </div>
		// </div>
	);
}

export default GoogleSeccion;
