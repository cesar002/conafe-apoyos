// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Http from '@/Http';
import { OpcionesGenerales } from '@/Models/OpcionesGenerales';
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	if(req.method !== 'GET') {
		return res.status(404).end();
	}


	const { data: opcionesGenerales } = await Http.get<OpcionesGenerales>('/sitio_club/services/json_formulario.php');

	res.status(200).json(opcionesGenerales)
}
