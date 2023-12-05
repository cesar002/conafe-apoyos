import Image from "next/image";

const Mantenimiento = () => {

	return (
		<div className="h-screen w-full flex flex-col justify-center items-center gap-5 bg-white">
			<Image
				src="/assets/nueva-img-home.png"
				alt="Imagen"
				width={500}
				height={100}
			/>
			<span className="text-4xl text-[#9d2344] font-bold text-center">
				Sitio esta en matenimiento
			</span>
			<span className="text-2xl text-[#9d2344] text-center">
				Volveremos lo más pronto posible.
			</span>
		</div>
	);
}

export default Mantenimiento;
