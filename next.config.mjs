/** @type {import('next').NextConfig} */
const nextConfig = {
  // Limit compile workers for cPanel / shared hosting (avoids EAGAIN).
  // Do NOT set workerThreads: false — it can crash SWC/rayon with:
  // GlobalPoolAlreadyInitialized
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
