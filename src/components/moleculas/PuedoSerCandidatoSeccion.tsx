const PuedoSerCandidatoSeccion = () => {

	return (
		<div className="bg-primary min-h-[50rem] w-full flex flex-col pb-10 px-5 lg:px-0">
			<div className="flex flex-col justify-center items-center gap-y-10">
				<p className="text-con-green lg:text-5xl text-4xl font-bold text-center">
					¿Puedo ser candidato?
				</p>
				<p className="text-gray-400 text-center lg:text-2xl text-xl font-semibold lg:w-1/2 w-full">
					<strong>Se dará preferencia en la asignación</strong> del apoyo tecnológico, en orden prioritario, a los siguientes conjuntos:
				</p>
			</div>
			<div className="flex flex-col w-full lg:mt-24 mt-14 gap-y-5">
				<div className="flex w-full">
					<div className="lg:w-[10%]" />
					<div className="lg:w-[90%] w-full flex lg:flex-row flex-col lg:items-start items-center gap-y-5 gap-x-10">
						<span className="text-con-green lg:text-8xl text-7xl font-bold">
							1
						</span>
						<div className="bg-con-green py-3 lg:py-0 flex justify-center items-center text-white lg:w-1/6 w-full">
							<span className="lg:text-6xl text-5xl font-semibold">
								ECAR
							</span>
						</div>
					</div>
				</div>
				<div className="flex w-full">
					<div className="lg:w-[15%]" />
					<div className="lg:w-[85%] w-full flex lg:flex-row flex-col lg:items-start items-center gap-y-5 gap-x-10">
						<span className="text-con-green lg:text-8xl text-7xl font-bold">
							2
						</span>
						<div className="bg-con-green py-3 lg:py-0 flex justify-center items-center text-white lg:w-1/6 w-full">
							<span className="lg:text-6xl text-5xl font-semibold">
								ECA
							</span>
						</div>
					</div>
				</div>
				<div className="flex w-full">
					<div className="lg:w-[20%]" />
					<div className="lg:w-[80%] w-full flex lg:flex-row flex-col lg:items-start items-center gap-y-5 gap-x-10">
						<span className="text-con-green lg:text-8xl text-7xl font-bold">
							3
						</span>
						<div className="bg-con-green py-3 lg:py-0 flex justify-center items-center text-white lg:w-[40%] w-full px-5 gap-x-2">
							<span className="lg:text-6xl text-5xl font-semibold">
								EC
							</span>
							<p className="text-white text-sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque animi expedita sequi esse delectus ullam voluptas nostrum obcaecati tempora dolor. Ducimus tempore deleniti dolores ex provident facere temporibus, excepturi neque!
							</p>
						</div>
					</div>
				</div>
				<div className="flex w-full">
					<div className="lg:w-[25%]" />
					<div className="lg:w-[75%] w-full flex lg:flex-row flex-col lg:items-start items-center gap-y-5 gap-x-10">
						<span className="text-con-green lg:text-8xl text-7xl font-bold">
							4
						</span>
						<div className="bg-con-green py-3 lg:py-0 flex justify-center items-center text-white lg:w-[50%] w-full px-5 gap-x-2">
							<span className="lg:text-6xl text-5xl font-semibold">
								EC
							</span>
							<p className="text-white text-sm">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque animi expedita sequi esse delectus
							</p>
						</div>
					</div>
				</div>
				<div className="flex w-full">
					<div className="lg:w-[30%]" />
					<div className="lg:w-[70%] w-full flex lg:flex-row flex-col lg:items-start items-center gap-y-5 gap-x-10">
						<span className="text-con-green lg:text-8xl text-7xl font-bold">
							5
						</span>
						<div className="bg-con-green py-3 lg:py-0 flex justify-start items-center text-white lg:w-[50%] w-full px-5 gap-x-2">
							<span className="lg:text-6xl text-5xl font-semibold">
								EC
							</span>
							<p className="text-white text-sm ml-5">
								Lorem ipsum dolor sit amet consectetur
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center mt-16">
				<button className="bg-con-green py-5  text-white font-medium text-lg lg:w-1/5 w-full uppercase rounded-full">
					Registrate aqui
				</button>
			</div>
		</div>
	)
}

export default PuedoSerCandidatoSeccion;
