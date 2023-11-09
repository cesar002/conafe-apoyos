import Image from "next/image";

const GoogleSeccion = () => {

	return (
		<div className="bg-con-gray min-h-[35rem] flex flex-col py-10">
			<div className="flex justify-center items-center">
				<p className="text-gray-500 font-bold lg:text-5xl text-4xl">
					Además incluye
				</p>
			</div>
			<div className="flex lg:flex-row flex-col-reverse lg:mt-32 mt-10">
				<div className="lg:w-1/2 w-full relative">
					<div className="w-[30%] lg:w-auto">
						<Image
							src="/assets/5Asset_5img.png"
							alt="Manos"
							width={800}
							height={100}
							className="absolute lg:-bottom-52 -bottom-[26rem] -left-0"
						/>
					</div>
				</div>
				<div className="lg:w-1/2 w-full flex flex-col justify-center items-center gap-y-10">
					<div className="w-[80%] lg:w-auto">
						<Image
							src="/assets/07-Asset_15logoGGL.svg"
							alt="Google Suit"
							width={400}
							height={100}
						/>
					</div>
					<div className="w-[80%] lg:w-auto">
						<Image
							src="/assets/08-Asset_16logosGGL.svg"
							alt="Google Suit"
							width={600}
							height={100}
						/>
					</div>
				</div>
			</div>
			<div className="lg:mt-[13rem] mt-[30rem] flex flex-col justify-center items-center">
				<p className="text-gray-500 font-bold lg:text-5xl text-4xl text-center lg:text-left">
					Y certificació como  Google Educator
				</p>
				<ul className="list-disc lg:text-2xl text-lg text-gray-500 mt-10 lg:w-1/3 w-[80%]">
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

				<button className="bg-con-blue text-white font-medium text-lg lg:w-1/5 w-[80%] uppercase py-5 rounded-full mt-20">
					Registrate aqui
				</button>
			</div>
		</div>
	);
}

export default GoogleSeccion;
