/** @type {import('next').NextConfig} */

import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            },
            {
                protocol: 'http',
                hostname: '34.124.203.109',
            },
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                protocol: 'http',
                hostname: '**',
            },
            {
                protocol: 'http',
                hostname: '192.168.1.4'
            }
        ],
    }
};

export default withPlaiceholder(nextConfig)