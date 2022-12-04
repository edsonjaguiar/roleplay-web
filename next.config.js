/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.discordapp.com',
            },
        ],
    },
};

module.exports = nextConfig;
