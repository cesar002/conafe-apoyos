import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface Response<T = any> extends AxiosResponse<T>{}

const Http: AxiosInstance = axios.create({
	baseURL: 'https://corporativo.edilar.com',
	timeout: 900000,
	headers: {
		Accept: 'application/json',
	}
});

export default Http;
