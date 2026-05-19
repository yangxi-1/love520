/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // ⭐关键：开启静态导出
  images: {
    unoptimized: true  // ⭐OSS 必须加，否则图片会炸
  }
}

module.exports = nextConfig