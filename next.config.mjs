/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, 
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
                protocol: "https",
                port: "",
                pathname: "/**",
            },
            {
                hostname: "512pixels.net",
                 protocol: "https",
                port: "",
                pathname: "/**",
            }
        ],
    },
};

export default nextConfig;
