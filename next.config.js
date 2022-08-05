/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["links.papareact.com","image.tmdb.org","bit.ly","app.bitly.com"]
  }
}

module.exports = nextConfig
