/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep builds working on low-limit cPanel / shared hosts
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};

export default nextConfig;
