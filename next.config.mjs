/** @type {import('next').NextConfig} */

import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            },
        ],
    },
    // env : {
    //     Next_API_URL: 'http://34.124.203.109:8081'
    // }
};

export default withPlaiceholder(nextConfig)