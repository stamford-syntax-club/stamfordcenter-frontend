/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.stamford.dev",
				port: "",
				pathname: "**",
			},
		],
	},
};

module.exports = nextConfig;
