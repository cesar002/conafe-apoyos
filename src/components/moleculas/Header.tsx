import Image from "next/image";

const Header = () => {

	return (
		<div className="bg-con-yellow min-h-[10rem] flex px-10">
			<div className="w-1/4 flex justify-center items-center">
				<Image
					src="/assets/8Asset_8logo.svg"
					alt="Conafe Logo"
					width={300}
					height={100}
				/>
			</div>
			<div className="w-3/4 flex justify-center items-center px-10">
				<p className="text-center text-3xl font-semibold">
					Apoyo Tecnólogico Para Fortalecer La Formación y La Continuidad De Estudios De Los Educadores Comunitarios
				</p>
			</div>
		</div>
	);
}

export default Header;
