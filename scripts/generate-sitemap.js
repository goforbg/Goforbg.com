const fs = require('fs')
const path = require('path')

;(async () => {
  // Use dynamic imports for ES modules
  const { globby } = await import('globby')
  const prettier = await import('prettier')
  const siteMetadata = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/siteMetadata.json'), 'utf8')
  )

  const prettierConfig = await prettier.default.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.js',
    'data/**/*.mdx',
    'data/**/*.md',
    'public/tags/**/*.xml',
    '!pages/_*.js',
    '!pages/api',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages/', '/')
                  .replace('data/blog', '/blog')
                  .replace('public/', '/')
                  .replace('.js', '')
                  .replace('.mdx', '')
                  .replace('.md', '')
                  .replace('/index.xml', '')
                const route = path === '/index' ? '' : path
                return `
                        <url>
                            <loc>${`${siteMetadata.siteUrl}${route}`}</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  const formatted = await prettier.default.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted)
})()
