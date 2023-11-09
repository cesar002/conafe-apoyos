import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
			<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.css" rel="stylesheet" />
			<link rel="icon" href="/assets/1Asset_18favicon.png" />
		</Head>
      <body>
        <Main />
        <NextScript />
		  <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js" defer></script>
		  <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/datepicker.min.js" defer></script>
      </body>
    </Html>
  )
}
