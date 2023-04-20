module.exports = {
  async redirects() {
    return [
      {
        source: '/meet',
        destination: 'https://meet.google.com/ocg-bsyh-vbk',
        permanent: false,
        basePath: false
      },
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    return config
  },
  images: {
    loader: 'imgix' // this is a hack until the bug is fixed
  }
}
