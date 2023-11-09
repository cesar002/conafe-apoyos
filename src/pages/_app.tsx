import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
	<>
		<NextNProgress
			color='#9d2344ff'
			options={{ showSpinner: false }}
		/>
		<Component {...pageProps} />
	</>
  )
}
