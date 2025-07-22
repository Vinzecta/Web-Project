/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",            // Đường dẫn gốc
        destination: "/home",   // Trang sẽ chuyển đến
        permanent: true         // 301 Redirect (tốt cho SEO)
      },
    ];
  },
};

export default nextConfig;
