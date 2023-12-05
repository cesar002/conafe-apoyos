/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
	return [
		{
			source: '/',
			destination: '/mantenimiento',
			permanent: false,
		},
		{
			source: '/registro',
			destination: '/mantenimiento',
			permanent: false,
		},
	];
  },
}

module.exports = nextConfig
