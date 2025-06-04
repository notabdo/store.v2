    /** @type {import('next').NextConfig} */
    const nextConfig = {

        env: {
            TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
            TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID
        },
        
        typescript: {
        // Disable TypeScript errors during build
        ignoreBuildErrors: true,
        },
        eslint: {
        // Disable ESLint errors during build
        ignoreDuringBuilds: true,
        },
        // Add any other configurations your project needs
    };
    
    module.exports = nextConfig;