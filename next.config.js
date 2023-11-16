/** @type {import('next').NextConfig} */
const nextConfig = {
    image: {
        remotePatterns: [{hostname: "images.unsplash.com"}]
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
