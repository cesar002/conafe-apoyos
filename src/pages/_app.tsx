import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { IntlProvider } from "next-intl";
import NextNProgress from 'nextjs-progressbar';
import messagesEn from "../locales/en.json";
import messagesEs from "../locales/es.json";
import { useRouter } from 'next/router';

const messages: any = { en: messagesEn, es: messagesEs };

export default function App({ Component, pageProps }: AppProps) {
	const { locale } = useRouter();

  return (
	<>
		<NextNProgress
			color='#9d2344ff'
			options={{ showSpinner: false }}
		/>
		<IntlProvider locale={locale ?? 'es'} messages={messages[locale ?? 'es']}>
			<Component {...pageProps} />
		</IntlProvider>
	</>
  )
}
