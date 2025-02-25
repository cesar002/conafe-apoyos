import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
			<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.css" rel="stylesheet" />
			<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js" defer></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/datepicker.min.js" defer></script>
			<link rel="icon" href="/assets/1Asset_18favicon.png" />
		</Head>
      <body className='bg-[#e4f1e7]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
