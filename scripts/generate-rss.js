const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

// Simple function to get all blog posts without using path aliases
function getAllFilesFrontMatter(folder) {
  const prefixPaths = path.join(process.cwd(), 'data', folder)
  const files = []

  function getAllFilesRecursively(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        getAllFilesRecursively(fullPath)
      } else if (entry.isFile() && (entry.name.endsWith('.mdx') || entry.name.endsWith('.md'))) {
        files.push(fullPath)
      }
    }
  }

  getAllFilesRecursively(prefixPaths)

  const allFrontMatter = []

  files.forEach((file) => {
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    const source = fs.readFileSync(file, 'utf8')
    const { data } = matter(source)
    if (data.draft !== true) {
      const slug = fileName.replace(/\.(mdx|md)/, '')
      allFrontMatter.push({ ...data, slug })
    }
  })

  // Sort by date descending
  return allFrontMatter.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })
}

function generateRss(posts, page = 'index.xml') {
  const siteMetadata = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/siteMetadata.json'), 'utf8')
  )

  const generateRssItem = (post) => `
  <item>
    <guid>${siteMetadata.siteUrl}/blog/${post.slug}</guid>
    <title>${post.title}</title>
    <link>${siteMetadata.siteUrl}/blog/${post.slug}</link>
    <description>${post.summary || ''}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${siteMetadata.email} (${siteMetadata.author})</author>
    ${(post.tags || []).map((t) => `<category>${t}</category>`).join('')}
  </item>
`

  return `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${siteMetadata.title}</title>
      <link>${siteMetadata.siteUrl}/blog</link>
      <description>${siteMetadata.description}</description>
      <language>${siteMetadata.language}</language>
      <managingEditor>${siteMetadata.email} (${siteMetadata.author})</managingEditor>
      <webMaster>${siteMetadata.email} (${siteMetadata.author})</webMaster>
      <lastBuildDate>${posts.length > 0 ? new Date(posts[0].date).toUTCString() : new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${siteMetadata.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`
}

function generate() {
  const posts = getAllFilesFrontMatter('blog')
  const rss = generateRss(posts)
  fs.writeFileSync('./public/index.xml', rss)
  console.log('✅ RSS feed generated at public/index.xml')
}

generate()

