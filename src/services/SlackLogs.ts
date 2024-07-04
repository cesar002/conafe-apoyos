import axios from 'axios';

const URL_WEBHOOK = 'https://hooks.slack.com/services/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';

interface IInfoObject {
	title: string;
	value: string;
	short?: boolean;
}

export enum TYPE_MESSAGE {
	SUCCESS,
	INFO,
	ERROR,
	WARNING,
}

const convertTypeMessegeToColor = (type: TYPE_MESSAGE) => {
	switch (type) {
		case TYPE_MESSAGE.SUCCESS:
			return '#25CB3B'
		case TYPE_MESSAGE.INFO:
			return '#00E0FF';
		case TYPE_MESSAGE.ERROR:
			return '#25CB3B';
		case TYPE_MESSAGE.WARNING:
			return '#F5EA03';
		default:
			return '#DCDCDC';
	}
}

export default {
	send: async (mensaje: string, infoObject: IInfoObject[] = [], type: TYPE_MESSAGE = TYPE_MESSAGE.SUCCESS): Promise<void> => {
		if(!URL_WEBHOOK) return;

		const color = convertTypeMessegeToColor(type);

		try {
			try {
				await axios.post(URL_WEBHOOK, {
					as_user: false,
					username: 'Red Magisterial Logs',
					text: mensaje,
					attachments: [{
						color: color,
						fields: infoObject,
					}]
				}, { headers: { 'Content-type': 'application/json' } })
			} catch (error) {
				console.error(error)
			}
		} catch (error) {
			console.error(error)
		}
	},
	error: async (mensaje: string, infoObject: IInfoObject[] = []): Promise<void> => {
		//if(import.meta.env.NODE_ENV !== 'production'){return;}

		if(!URL_WEBHOOK) return;

		try {
			try {
				await axios.post(URL_WEBHOOK, {
					as_user: false,
					username: 'Error',
					text: mensaje,
					icon_emoji: ':bangbang:',
					attachments: [{
						color: '#C0392B',
						fields: infoObject,
					}]
				}, { headers: { 'Content-type': 'application/json' } })
			} catch (error) {
				console.error(error)
			}
		} catch (error) {
			console.error(error)
		}
	},
	info: async (mensaje: string, infoObject: IInfoObject[] = []): Promise<void>  => {
		//if(import.meta.env.NODE_ENV !== 'production'){return;}

		if(!URL_WEBHOOK) return;

		try {
			await axios.post(URL_WEBHOOK, {
				as_user: false,
				username: 'Info',
				text: mensaje,
				icon_emoji: ':bell:',
				attachments: [{
					color: '#00E0FF',
					fields: infoObject,
				}]
			}, { headers: { 'Content-type': 'application/json' } })
		} catch (error) {
			console.error(error)
		}
	},
	success: async (mensaje: string, infoObject: IInfoObject[] = []): Promise<void> => {
		//if(import.meta.env.NODE_ENV !== 'production'){return;}

		if(!URL_WEBHOOK) return;

		try {
			await axios.post(URL_WEBHOOK, {
				as_user: false,
				username: 'Success',
				text: mensaje,
				icon_emoji: ':white_check_mark:',
				attachments: [{
					color: '#25CB3B',
					fields: infoObject,
				}]
			}, { headers: { 'Content-type': 'application/json' } })
		} catch (error) {
			console.error(error)
		}
	}
}
