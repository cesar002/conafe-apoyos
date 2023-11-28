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
				<p className="text-center lg:text-5xl text-2xl font-bold text-white">
					Apoyo tecnólogico para Educadores Comunitarios
				</p>
			</div>
		</div>
	);
}

export default Header;
