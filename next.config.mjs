/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['assets.coingecko.com'],
    },
    redirects: async() => {
        return [
          {
            source: '/',
            destination: '/bitcoin',
            permanent: false
          }
        ];
      },
};

export default nextConfig;
