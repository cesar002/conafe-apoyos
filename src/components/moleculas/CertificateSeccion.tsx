import Image from "next/image";

const CertificateSeccion = () => {

	return (
		<div className="bg-con-primary min-h-[30rem] w-full flex px-10">
			<div className="w-[60%] flex flex-col justify-center items-center gap-y-10">
				<p className="text-con-green text-5xl text-center font-semibold">
					Certifícate como Google Educator
				</p>
				<ul className="text-gray-400 font-semibold text-xl list-disc">
					<li>
						Curso en el IESPE para certificarte como Educador Google.
					</li>
					<li>
						Examen que simula la certificación online.
					</li>
					<li>
						Pase para certificarte con Google como Educador Google nivel 1.
					</li>
				</ul>
			</div>
			<div className="w-[40%] flex justify-center items-center">
				<Image
					src="/assets/6Asset_6img.png"
					alt="certificate"
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
}

export default CertificateSeccion;
