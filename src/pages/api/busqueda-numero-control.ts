// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { FormData } from "formdata-node"
import Http from '@/Http';
import { LoginDatos } from '@/Models/LoginDatos';


export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	if(req.method !== 'POST') {
		return res.status(404).end();
	}

	const numeroControl = req.body.numeroControl as string;
	const form = new FormData();

	form.append('NUMERO_CONTROL', numeroControl);

	const { data: loginCredenciales } = await Http.post<LoginDatos>('/apps/form_conafe_services/accesstoken.php', {}, {
		headers: {
			Authorization: 'Basic RzqZldRR1dIYUdxR2Q6R2gxSlZaenRvbUJ2TjRPeg==R3FGT1Y3',
		}
	});

	const { data: consulta } = await Http.post('/apps/form_conafe_services/api_busqueda_figura.php', form, {
		headers: {
			Authorization: `Bearer ${loginCredenciales.ACCESTOKEN}`
		}
	});

	res.status(200).json(consulta)
}
