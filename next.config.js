module.exports = {
  output: 'export',
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

    // Handle CommonJS packages in ESM context
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
    }

    return config
  },
  images: {
    unoptimized: true,
    deviceSizes: [320, 420, 768, 1024, 1200],
    formats: ['image/avif', 'image/webp'],
  },
}
