/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from public folder with router.basePath in React components.
  // So, the source code is “basePath-ready”.
  // You can remove basePath if you don’t need it.
  reactStrictMode: true,
  compiler: {
    emotion: true,
    styledComponents: true,
  },
  peerDependencies: {
    react: '^17.0.0 || ^18.0.0',
    'react-dom': '^17.0.0 || ^18.0.0',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
})

// /* eslint-disable import/no-extraneous-dependencies */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

// module.exports = withBundleAnalyzer({
//   eslint: {
//     dirs: ['.'],
//   },
//   poweredByHeader: false,
//   trailingSlash: true,
//   basePath: '',
//   // The starter code load resources from `public` folder with `router.basePath` in React components.
//   // So, the source code is "basePath-ready".
//   // You can remove `basePath` if you don't need it.
//   reactStrictMode: true,
//   peerDependencies: {
//     react: '^17.0.0 || ^18.0.0',
//     'react-dom': '^17.0.0 || ^18.0.0',
//   },
// })
