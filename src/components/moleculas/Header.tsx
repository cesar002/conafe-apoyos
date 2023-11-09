import Image from "next/image";

const Header = () => {

	return (
		<div className="min-h-[15rem] w-full bg-[#9d2344] flex lg:flex-row flex-col lg:justify-start justify-center items-center gap-y-5">
			<div className="w-1/4 flex justify-center items-center">
				<Image
					src="/assets/02-Asset_10logo52.svg"
					alt="Conafe Logo"
					width={300}
					height={100}
				/>
			</div>
			<div className="w-3/4 flex justify-center items-center lg:px-10">
				<p className="text-center lg:text-4xl text-2xl font-bold text-white">
					Apoyo Tecnólogico Para Educadores Comunitarios
				</p>
			</div>
		</div>
	);
}

export default Header;
