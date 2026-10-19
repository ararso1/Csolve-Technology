/** @type {import('next').NextConfig} */
const nextConfig = {
  // cPanel / CloudLinux: keep SWC workers minimal to avoid rayon crashes
  // (GlobalPoolAlreadyInitialized / EAGAIN from NPROC limits).
  // Do NOT set experimental.workerThreads: false — that triggers the panic.
  experimental: {
    cpus: 1,
    webpackBuildWorker: false,
  },
};

export default nextConfig;
