import axios from "axios";
import { Formik, FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';

import Http from "@/Http";
import { LoginDatos } from "@/Models/LoginDatos";
import { OpcionesCONAFE } from "@/Models/OpcionesCONAFE";
import { OpcionesGenerales } from "@/Models/OpcionesGenerales";
import { EnvioDatos } from "@/Models/EnvioDatos";
import Loading from "@/components/moleculas/Loading";
import Link from "next/link";
import Header from "@/components/moleculas/Header";

interface IRegistroPageProps {
	opcionesCONAFE: OpcionesCONAFE | null;
}

const Registro = (props: IRegistroPageProps) => {

	const [ timeout, setTimeoutInternal ] = useState<any>(null);
	const [ numeroControl, setNumeroControl ] = useState('');
	const [ consultando, setConsultando ] = useState(false);
	const [ consultaFinalizada, setConsultaFinalizada ] = useState(false);
	const [ datosUsuario, setDatosUsuario ] = useState<any>(null);
	const [ procesoFinalizado, setProcesoFinalizado ] = useState(false);
	const [ opcionesGenerales, setOpcionesGenerales ] = useState<OpcionesGenerales | null>(null);
	const [ enviandoDatos, setEnviandoDatos ] = useState(false);

	const obtenerDatosGenerales = async () => {
		const { data } = await axios.get('/api/datos-generales');
		setOpcionesGenerales(data);
	}

	const buscarUsuario = async () => {
		try {
			setConsultando(true);
			setConsultaFinalizada(false);
			const { data } = await axios.post<any, any>('/api/busqueda-numero-control', {
				numeroControl: numeroControl,
			});

			setDatosUsuario(data);
		} catch (error) {

		}finally{
			setConsultando(false);
			setConsultaFinalizada(true);
		}
	}

	const buscarUsuarioTimeout = () => {
		clearTimeout(timeout);
		const time = setTimeout(() => {
			setConsultando(true);
			setConsultaFinalizada(false);
			axios.post<any, any>('/api/busqueda-numero-control', {
				numeroControl: numeroControl,
			}).then(resp => {
				const { data } = resp;
				setDatosUsuario(data);
			})
			.finally(()=>{
				setConsultando(false);
				setConsultaFinalizada(true);
			})
		}, 500);
		setTimeoutInternal(time)
	}

	const enviarInformacion = async (values: EnvioDatos, helpers: FormikHelpers<EnvioDatos>) => {
		const datos: EnvioDatos = {
			...values,
			INSTITUCION_ESTUDIO: values.ESTUDIAS_ACTUALMENTE == 'SI' ? values.INSTITUCION_ESTUDIO : '',
			TIPO_ESTUDIO: values.ESTUDIAS_ACTUALMENTE == 'SI' ? values.TIPO_ESTUDIO : '',
			DISPOSITIVO_ACADEMICO: values.UTILIZAS_EQUIPO_COMPUTO == 'SI' ? values.DISPOSITIVO_ACADEMICO : '',
		}
		try {
			setEnviandoDatos(true);
			const { data } = await axios.post<any>('/api/enviar-datos', datos);
			if(data.MENSAJE_API == "REGISTRO GENERADO"){
				setProcesoFinalizado(true);
			}
		} catch (error: any) {
			console.error(error)
		}finally{
			setEnviandoDatos(false);
		}
	}


	useEffect(()=>{
		obtenerDatosGenerales();
	}, []);

	useEffect(()=>{
		if(!numeroControl)
			return;

		buscarUsuarioTimeout();
	}, [numeroControl]);

	return (
		<div className="bg-con-primary min-h-screen w-full">
			<Header />
			<div className="lg:px-32 lg:py-28 px-5 lg:mt-0 ">
				<div className="flex justify-center items-center">
					{ procesoFinalizado &&
					<div className="flex flex-col gap-y-10">
						<h3 className="text-[#9d2344] lg:text-7xl text-5xl font-bold text-center">
							¡Muchas gracias por aplicar!
						</h3>
						<p className="text-gray-700 font-semibold text-center lg:text-3xl text-lg">
							Tus respuestas han sido registradas, pronto te contactaremos con más detalles del avance de tu aplicación
						</p>
						<div className="flex justify-center items-center">
							<Link
								href="/"
								className="text-xl text-gray-500 hover:text-gray-800"
							>
								Regresar
							</Link>
						</div>
					</div>
					}
					{ !procesoFinalizado &&
					<div className="lg:w-[70%] w-full bg-white shadow-lg p-10 rounded-lg">
						<Formik
							initialValues={{
								CURP: datosUsuario?.FIGURA?.CURP ?? '',
								PATERNO: datosUsuario?.FIGURA?.PATERNO ?? '',
								MATERNO: datosUsuario?.FIGURA?.MATERNO ?? '',
								NOMBRE: datosUsuario?.FIGURA?.NOMBRE ?? '',
								ESTADO: datosUsuario?.FIGURA?.ESTADO ?? '',
								NUMERO_CONTROL: datosUsuario?.FIGURA?.NUMERO_CONTROL ?? '',
								EMAIL: '',
								MOVIL: '',
								FECHA_INGRESO: '',
								TIPO_FIGURA: '',
								ESTUDIAS_ACTUALMENTE: '',
								TIPO_ESTUDIO: '',
								INSTITUCION_ESTUDIO: '',
								DISPOSITIVO_ACADEMICO: '',
								OPCION_EQUIPO: '1',
								ACEPTO_CARACTERISTICAS: false,
								UTILIZAS_EQUIPO_COMPUTO: '',
								NECESITA_CONTACTO: 'SI',
								OPCION_PAGO: '',
							}}
							validationSchema={ Yup.object().shape({
								CURP: Yup.string().required('Campo requerido'),
								PATERNO: Yup.string().required('Campo requerido'),
								MATERNO: Yup.string().required('Campo requerido'),
								NOMBRE: Yup.string().required('Campo requerido'),
								ESTADO: Yup.string().required('Campo requerido'),
								NUMERO_CONTROL: Yup.string().required('Campo requerido'),
								EMAIL: Yup.string().required('Campo requerido').email('El campo debe ser un Email'),
								MOVIL: Yup.string()
											.matches(/^[1-9]\d*$/, 'El campo debe ser un número de telefono')
											.min(10, 'El campo debe ser de 10 dígitos')
											.max(10, 'El campo debe ser de 10 dígitos')
											.required('Campo requerido'),
								FECHA_INGRESO: Yup.string().required('Campo requerido'),
								TIPO_FIGURA: Yup.string().required('Campo requerido'),
								ESTUDIAS_ACTUALMENTE: Yup.string().required('Campo requerido'),
								TIPO_ESTUDIO: Yup.string().when('ESTUDIAS_ACTUALMENTE', {
									is: 'SI',
									then: Yup.string().required('Campo requerido')
								}),
								INSTITUCION_ESTUDIO: Yup.string().when('ESTUDIAS_ACTUALMENTE', {
									is: 'SI',
									then: Yup.string().required('Campo requerido'),
								}),
								UTILIZAS_EQUIPO_COMPUTO: Yup.string().oneOf(['SI', 'NO'], 'Opción invalida').required('Campo requerido'),
								DISPOSITIVO_ACADEMICO: Yup.string().when('UTILIZAS_EQUIPO_COMPUTO', {
									is: 'SI',
									then: Yup.string().required('Campo requerido')
								}),
								OPCION_EQUIPO: Yup.string().required('Campo requerido'),
								ACEPTO_CARACTERISTICAS: Yup.boolean().oneOf([true], 'Debes aceptar las características del equipo').required('Campo requerido'),
								OPCION_PAGO: Yup.string().required('Campo requerido'),
							}) }
							onSubmit={enviarInformacion}
							enableReinitialize
						>
							{({
								values,
								touched,
								errors,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting,
							})=>(
							<form onSubmit={handleSubmit} className="w-full">
								<div className="mb-10">
									<label htmlFor="numero_control" className="block mb-2 text-sm font-medium text-gray-900">
										Número de control<span className="text-red-600">*</span>
									</label>
									<input type="text" id="numero_control" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required
										value={numeroControl}
										onChange={e => setNumeroControl(e.target.value)}
										disabled={isSubmitting}
									/>
									<button className="p-3 lg:w-36 w-full h-10 bg-con-blue flex justify-center items-center text-white rounded-md mt-3"
										disabled={consultando}
										onClick={buscarUsuario}
									>
										Buscar
									</button>
								</div>
								{ consultando &&
								<div className="flex justify-center items-center mt-10">
									<div role="status">
										<svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
											<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
										</svg>
										<span className="sr-only">Loading...</span>
									</div>
								</div>
								}
								{ consultaFinalizada && datosUsuario && datosUsuario.FIGURA_VALIDA == 'N' &&
								<div className="flex justify-center items-center mt-10">
									<p className="text-2xl text-gray-500">
										¡No se encontró la figura!
									</p>
								</div>
								}
								{ consultaFinalizada && datosUsuario && datosUsuario.FIGURA_VALIDA != 'N' &&
								<>
									<div className="mb-6">
										<label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900">
											Nombre <span className="text-red-600">*</span>
										</label>
										<input type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required
											value={values.NOMBRE}
											disabled
										/>
										{ errors.NOMBRE && touched.NOMBRE &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.NOMBRE }
										</span>
										}
									</div>

									<div className="mb-6">
										<label htmlFor="apellido_paterno" className="block mb-2 text-sm font-medium text-gray-900">
											Apellido paterno<span className="text-red-600">*</span>
										</label>
										<input type="text" id="apellido_paterno" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required
											value={values.PATERNO}
											disabled
										/>
										{ errors.PATERNO && touched.PATERNO &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.PATERNO }
										</span>
										}
									</div>

									<div className="mb-6">
										<label htmlFor="apellido_materno" className="block mb-2 text-sm font-medium text-gray-900">
											Apellido materno <span className="text-red-600">*</span>
										</label>
										<input type="text" id="apellido_materno" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required
											value={values.MATERNO}
											disabled
										/>
										{ errors.MATERNO && touched.MATERNO &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.MATERNO }
										</span>
										}
									</div>

									<div className="mb-6 hidden">
										<label htmlFor="numero_conafe" className="block mb-2 text-sm font-medium text-gray-900">
											Número de Control CONAFE <span className="text-red-600">*</span>
										</label>
										<input type="text" id="numero_conafe" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required
											value={values.NUMERO_CONTROL}
											disabled
										/>
										{ errors.NUMERO_CONTROL && touched.NUMERO_CONTROL &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.NUMERO_CONTROL }
										</span>
										}
									</div>

									<div className="mb-6">
										<label htmlFor="curp" className="block mb-2 text-sm font-medium text-gray-900">
											CURP <span className="text-red-600">*</span>
										</label>
										<input type="text" id="curp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required
											value={values.CURP}
											disabled
										/>
										{ errors.CURP && touched.CURP &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.CURP }
										</span>
										}
									</div>

									<div className="mb-6">
										<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
											Correo electrónico <span className="text-red-600">*</span>
										</label>
										<input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required
											name="EMAIL"
											value={values.EMAIL}
											onChange={handleChange}
											onBlur={handleBlur}
											disabled={isSubmitting}
										/>
										{ errors.EMAIL && touched.EMAIL &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.EMAIL }
										</span>
										}
									</div>

									<div className="mb-6">
										<label htmlFor="numero_celular" className="block mb-2 text-sm font-medium text-gray-900">
											Número celular a diez dígitos <span className="text-red-600">*</span>
										</label>
										<input type="text" id="numero_celular" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required
											name="MOVIL"
											value={values.MOVIL}
											onChange={handleChange}
											onBlur={handleBlur}
											disabled={isSubmitting}
											maxLength={10}
										/>
										{ errors.MOVIL && touched.MOVIL &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.MOVIL }
										</span>
										}
									</div>

									<div className="mb-6">
										<label htmlFor="estado" className="block mb-2 text-sm font-medium text-gray-900">
											Entidad en donde soy Educador Comunitario <span className="text-red-600">*</span>
										</label>
										<select id="estado" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required
											name="ESTADO"
											value={values.ESTADO}
											onChange={handleChange}
											onBlur={handleBlur}
											disabled={isSubmitting}
										>
											<option value="">Elige</option>
											{  opcionesGenerales?.ESTADOS.map(estado =>
											<option value={estado.VALUE} key={estado.VALUE}>{estado.TEXT}</option>
											) }
										</select>
										{ errors.ESTADO && touched.ESTADO &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.ESTADO }
										</span>
										}
									</div>

									<div className="mb-6">
										<label htmlFor="fecha_ingreso" className="block mb-2 text-sm font-medium text-gray-900">
											Fecha de Ingreso a CONAFE <span className="text-red-600">*</span>
										</label>
										<input  type="date" id="fecha_ingreso" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Fecha de Ingreso a CONAFE"
											required
											name="FECHA_INGRESO"
											value={values.FECHA_INGRESO}
											onChange={handleChange}
											onBlur={handleBlur}
											disabled={isSubmitting}
										/>
										{ errors.FECHA_INGRESO && touched.FECHA_INGRESO &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.FECHA_INGRESO }
										</span>
										}
									</div>

									<div className="mb-6">
										<label htmlFor="tipo_figuras" className="block mb-2 text-sm font-medium text-gray-900">
											Tipo de figura <span className="text-red-600">*</span>
										</label>
										<select id="tipo_figuras" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											required
											name="TIPO_FIGURA"
											value={values.TIPO_FIGURA}
											onChange={handleChange}
											onBlur={handleBlur}
											disabled={isSubmitting}
										>
											{ props.opcionesCONAFE?.TIPO_FIGURA.map(tipo =>
											<option value={tipo.VALUE} key={tipo.VALUE}>{tipo.TEXT}</option>
											) }
										</select>
										{ errors.TIPO_FIGURA && touched.TIPO_FIGURA &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.TIPO_FIGURA }
										</span>
										}
									</div>

									<div className="mb-6">
										<label htmlFor="estudias" className="block mb-2 text-sm font-medium text-gray-900">
											Estudias actualmente <span className="text-red-600">*</span>
										</label>
										<select id="estudias" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											required
											name="ESTUDIAS_ACTUALMENTE"
											value={values.ESTUDIAS_ACTUALMENTE}
											onChange={handleChange}
											onBlur={handleBlur}
											disabled={isSubmitting}
										>
											<option value="">Elige</option>
											<option value="SI">Sí</option>
											<option value="NO">No</option>
										</select>
										{ errors.ESTUDIAS_ACTUALMENTE && touched.ESTUDIAS_ACTUALMENTE &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.ESTUDIAS_ACTUALMENTE }
										</span>
										}
									</div>

									{ values.ESTUDIAS_ACTUALMENTE == "SI" &&
									<>
									<div className="mb-6">
										<label htmlFor="tipo_estudio" className="block mb-2 text-sm font-medium text-gray-900">
											¿Qué nivel estás cursando en este ciclo (2023-2024)?  <span className="text-red-600">*</span>
										</label>
										<select id="tipo_estudio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											required
											name="TIPO_ESTUDIO"
											value={values.TIPO_ESTUDIO}
											onChange={handleChange}
											onBlur={handleBlur}
											disabled={isSubmitting}
										>
											{ props.opcionesCONAFE?.TIPO_ESTUDIO.map(tipo =>
											<option value={tipo.VALUE} key={tipo.VALUE}>{tipo.TEXT}</option>
											) }
										</select>
										{ errors.TIPO_ESTUDIO && touched.TIPO_ESTUDIO &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.TIPO_ESTUDIO }
										</span>
										}
									</div>
									<div className="mb-6">
										<label htmlFor="nombre_institucion" className="block mb-2 text-sm font-medium text-gray-900">
											¿Cuál es el nombre de la Institución donde estudias?  <span className="text-red-600">*</span>
										</label>
										<input type="text" id="nombre_institucion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required
											name="INSTITUCION_ESTUDIO"
											value={values.INSTITUCION_ESTUDIO}
											onChange={handleChange}
											onBlur={handleBlur}
											disabled={isSubmitting}
										/>
										{ errors.INSTITUCION_ESTUDIO && touched.INSTITUCION_ESTUDIO &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.INSTITUCION_ESTUDIO }
										</span>
										}
									</div>
									</>
									}


									<div className="mb-6">
										<label htmlFor="usas_dispositivos" className="block mb-2 text-sm font-medium text-gray-900">
											Para tus actividades academicas ¿utilizas algún dispositivo electronico? <span className="text-red-600">*</span>
										</label>
										<select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											name="UTILIZAS_EQUIPO_COMPUTO"
											value={values.UTILIZAS_EQUIPO_COMPUTO}
											onChange={handleChange}
											onBlur={handleBlur}
											disabled={isSubmitting}
											id="usas_dispositivos"
										>
											<option value="">Elige</option>
											<option value="SI">Sí</option>
											<option value="NO">No</option>
										</select>
										{ errors.UTILIZAS_EQUIPO_COMPUTO && touched.UTILIZAS_EQUIPO_COMPUTO &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.UTILIZAS_EQUIPO_COMPUTO }
										</span>
										}
									</div>

									{ values.UTILIZAS_EQUIPO_COMPUTO == 'SI' &&
									<div className="mb-6">
										<label htmlFor="dispositivo_usas" className="block mb-2 text-sm font-medium text-gray-900">
											¿Qué dispositivo utilizas mas para tus actividades academicas? <span className="text-red-600">*</span>
										</label>
										<select id="dispositivo_usas" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											required
											name="DISPOSITIVO_ACADEMICO"
											value={values.DISPOSITIVO_ACADEMICO}
											onChange={handleChange}
											onBlur={handleBlur}
											disabled={isSubmitting}
										>
											{ props.opcionesCONAFE?.DISPOSITIVO_ACADEMICO.map(dis =>
											<option value={dis.VALUE} key={dis.VALUE}>{dis.TEXT}</option>
											) }
										</select>
										{ errors.DISPOSITIVO_ACADEMICO && touched.DISPOSITIVO_ACADEMICO &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.DISPOSITIVO_ACADEMICO }
										</span>
										}
									</div>
									}

									<div className="mb-6 text-gray-600">
										<p>
											Equipo de cómputo incluido:
										</p>
										<p className="text-sm my-3">
											El equipo que ofrece este programa considera los requerimientos generales para entornos educativos y profesionales. Se trata de fabricantes reconocidos por su calidad (HP, Lenovo, Huawei, Asus, Acer u otro), durabilidad y ciclo de vida. Cuentan con 1 año de garantía y soporte con el fabricante.
										</p>

										<select id="opcion_de_equipo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 hidden"
											required
											name="OPCION_EQUIPO"
											value={values.OPCION_EQUIPO}
											onChange={handleChange}
											onBlur={handleBlur}
											disabled
										>
											{ props.opcionesCONAFE?.OPCION_EQUIPO.map(op =>
											<option value={op.VALUE} key={op.VALUE}>{op.TEXT}</option>
											) }
										</select>

										<p className="text-sm">
											{ props.opcionesCONAFE?.OPCION_EQUIPO[1].TEXT }.
										</p>

										<p className="text-sm mt-3">
											Los equipos incluyen acceso a las herramientas de productividad, comunicación y colaboración de Google Workspace for Education en el dominio educativo @conafe.nuevaescuela.mx y capacitación en línea para certificarse en Google Educator Nivel 1.
										</p>
									</div>

									{/* <div className="mb-6 hidden">
										<label className="block mb-2 text-sm font-medium text-gray-900">
											Acepto las carácterísticas <span className="text-red-600">*</span>
										</label>

										<div className="flex items-center mb-4">
											<input id="opcion_1" type="radio" name="ACEPTO_CARACTERISTICAS" value="SI" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
												required
												checked={ values.ACEPTO_CARACTERISTICAS == "SI" }
												onChange={handleChange}
												onBlur={handleBlur}
												disabled={isSubmitting}
											/>
											<label htmlFor="opcion_1" className="block ml-2 text-base text-gray-900">
												Sí Acepto
											</label>
										</div>

										<div className="flex items-center mb-4">
											<input id="opcion_2" type="radio" name="ACEPTO_CARACTERISTICAS" value="NO" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
												required
												checked={ values.ACEPTO_CARACTERISTICAS == "NO" }
												onChange={handleChange}
												onBlur={handleBlur}
												disabled={isSubmitting}
											/>
											<label htmlFor="opcion_2" className="block ml-2 text-base text-gray-900">
												No
											</label>
										</div>
									</div> */}

									<div className="mb-6">
										{/* <ul className="list-disc text-gray-500 text-base ml-5 mt-3 mb-3">
											<li>Curso para la certificación como Educador Google Nivel 1</li>
											<li>Simulador para la certificación como Educador Google Nivel 1</li>
											<li>Cupón para presentar el examen de certificación como Educador Google Nivel 1</li>
										</ul> */}
										<div className="flex items-center mb-4">
											<input id="opcion_1_1" type="checkbox" name="ACEPTO_CARACTERISTICAS" value="1" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
												required
												checked={ values.ACEPTO_CARACTERISTICAS }
												onChange={handleChange}
												onBlur={handleBlur}
												disabled={isSubmitting}
											/>
											<label htmlFor="opcion_1_1" className="block ml-2 text-base text-gray-900">
												Estoy informado y acepto las características del equipo.
											</label>
										</div>
										{ errors.ACEPTO_CARACTERISTICAS && touched.ACEPTO_CARACTERISTICAS &&
											<span className="text-red-600 text-sm ml-2">
												{ errors.ACEPTO_CARACTERISTICAS }
											</span>
										}
									</div>

									<div className="mb-6">
										<p className="text-gray-700 mb-2">
											Entiendo que el equipo será entregado en la Coordinación Territorial Estatal después de completar el pago total del mismo.
										</p>
										<p className="text-gray-700 mb-2">
											El equipo tiene un costo de $8,900.00 mxn. Como parte de este Apoyo Tecnológico para Educadores Comunitarios, CONAFE aportará $4,450.00 mxn, la diferencia será completada por mi en el siguiente plazo:
										</p>
										<select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											required
											name="OPCION_PAGO"
											value={values.OPCION_PAGO}
											onChange={handleChange}
											onBlur={handleBlur}
											disabled={isSubmitting}
										>
											{ props.opcionesCONAFE?.OPCION_PAGO.map(pago =>
											<option value={pago.VALUE} key={pago.VALUE}>{pago.TEXT}</option>
											) }
										</select>
										{ errors.OPCION_PAGO && touched.OPCION_PAGO &&
										<span className="text-red-600 text-sm ml-2">
											{ errors.OPCION_PAGO }
										</span>
										}
									</div>

									<div className="mb-6 mt-14 flex justify-center items-center">
										<button type="submit" className="p-3 lg:w-1/2 w-full bg-con-blue hover:bg-blue-800 text-white text-lg font-semibold rounded-lg"
											disabled={isSubmitting}
										>
											Enviar
										</button>
									</div>
								</>
								}


							</form>
							) }
						</Formik>
					</div>
					}
				</div>
			</div>
			<Loading visible={enviandoDatos} />
		</div>
	);
}

export default Registro;

export async function getServerSideProps() {
	try {
		const { data: loginCredenciales } = await Http.post<LoginDatos>('/apps/form_conafe_services/accesstoken.php', {}, {
			headers: {
				Authorization: 'Basic RzqZldRR1dIYUdxR2Q6R2gxSlZaenRvbUJ2TjRPeg==R3FGT1Y3',
			}
		});

		const { data: opcionesCONAFE } = await Http.get<OpcionesCONAFE>('/apps/form_conafe_services/api_json_formulario.php', {
			headers: {
				Authorization: `Bearer ${loginCredenciales.ACCESTOKEN}`
			}
		});

		return {
			props: {
				opcionesCONAFE,
			}
		}
	} catch (error) {
		return {
			props: {
				opcionesCONAFE: null,
			}
		}
	}

}
