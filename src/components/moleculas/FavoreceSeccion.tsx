import Image from "next/image";

const FavoreceSeccion = () => {

	return (
		<div className="bg-con-primary lg:min-h-[25rem] min-h-[40rem] w-full flex lg:flex-row flex-col lg:py-0 py-10">
			<div className="lg:w-[40%] relative flex justify-center items-center">
				<Image
					src="/assets/03-Asset_11img.png"
					alt=""
					width={450}
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
			</div>
		</div>
	)
}

export default FavoreceSeccion;
