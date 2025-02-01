/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com','assets.aceternity.com','plus.unsplash.com'],
    },
};

module.exports = {
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true }
};

export default nextConfig;
