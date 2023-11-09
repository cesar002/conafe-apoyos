// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { FormData } from "formdata-node"

import Http from '@/Http'
import { EnvioDatos } from '@/Models/EnvioDatos'
import { LoginDatos } from '@/Models/LoginDatos';
import cambiarFormatoFecha from '@/utils/cambiarFormato';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	if(req.method !== 'POST') {
		return res.status(404).end();
	}

	const datos = req.body as EnvioDatos

	const form = new FormData();
	form.append('CURP', datos.CURP);
	form.append('PATERNO', datos.PATERNO);
	form.append('MATERNO', datos.MATERNO);
	form.append('NOMBRE', datos.NOMBRE);
	form.append('ESTADO', datos.ESTADO);
	form.append('NUMERO_CONTROL', datos.NUMERO_CONTROL);
	form.append('EMAIL', datos.EMAIL);
	form.append('MOVIL', datos.MOVIL);
	form.append('FECHA_INGRESO', cambiarFormatoFecha(datos.FECHA_INGRESO));
	form.append('TIPO_FIGURA', datos.TIPO_FIGURA);
	form.append('ESTUDIAS_ACTUALMENTE', datos.ESTUDIAS_ACTUALMENTE);
	form.append('TIPO_ESTUDIO', datos.TIPO_ESTUDIO);
	form.append('INSTITUCION_ESTUDIO', datos.INSTITUCION_ESTUDIO);
	form.append('DISPOSITIVO_ACADEMICO', datos.DISPOSITIVO_ACADEMICO);
	form.append('OPCION_EQUIPO', datos.OPCION_EQUIPO);
	form.append('ACEPTO_CARACTERISTICAS', datos.ACEPTO_CARACTERISTICAS);
	form.append('OPCION_PAGO', datos.OPCION_PAGO);
	form.append('NECESITA_CONTACTO', datos.NECESITA_CONTACTO);

	const { data: loginCredenciales } = await Http.post<LoginDatos>('/apps/form_conafe_services/accesstoken.php', {}, {
		headers: {
			Authorization: 'Basic RzqZldRR1dIYUdxR2Q6R2gxSlZaenRvbUJ2TjRPeg==R3FGT1Y3',
		}
	});

	const { data } = await Http.post<any>('/apps/form_conafe_services/api_registro_formulario.php', form, {
		headers: {
			Authorization: `Bearer ${loginCredenciales.ACCESTOKEN}`
		}
	});

	return res.status(200).json(data)
}
