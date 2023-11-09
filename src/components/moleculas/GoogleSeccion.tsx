import Image from "next/image";

const GoogleSeccion = () => {

	return (
		<div className="bg-con-gray min-h-[25rem] px-10 flex">
			<div className="w-[40%] flex justify-center items-center relative">
				<Image
					src="/assets/5Asset_5img.png"
					alt="google-pc"
					width={800}
					height={800}
					className="absolute -bottom-10 -left-56"
				/>
			</div>
			<div className="w-[60%] flex flex-col justify-center items-center">
				<Image
					src="/assets/7Asset_7logo.svg"
					alt="google-docs"
					width={500}
					height={200}
				/>
			</div>
		</div>
	);
}

export default GoogleSeccion;
