/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports={
    experimental:{
        cache: {
            excludeCacheId: 'my-cache-id',
          },
    }
}
