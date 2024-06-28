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
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'http',
                hostname: '192.168.42.36',
            },
            {
                protocol: 'http',
                hostname: '**',
            },
            {
                protocol: 'http',
                hostname: '34.124.203.109',
            }
        ],
    }
};

export default withPlaiceholder(nextConfig);
