const fs = require('fs')
const path = require('path')

// Create dummy .next/serverless/pages structure for Netlify plugin
// This is a workaround since the plugin expects serverless output
// but we're using static export (output: 'export')

const nextDir = path.join(process.cwd(), '.next')
const serverlessDir = path.join(nextDir, 'serverless', 'pages')

// Create directory structure
if (!fs.existsSync(serverlessDir)) {
  fs.mkdirSync(serverlessDir, { recursive: true })
}

// Get all HTML files from out directory
const outDir = path.join(process.cwd(), 'out')

function copyHtmlFiles(srcDir, destDir, basePath = '') {
  if (!fs.existsSync(srcDir)) {
    return
  }

  const files = fs.readdirSync(srcDir)

  files.forEach((file) => {
    const srcPath = path.join(srcDir, file)
    const destPath = path.join(destDir, file)
    const stat = fs.statSync(srcPath)

    if (stat.isDirectory()) {
      // Recursively copy subdirectories
      const newBasePath = path.join(basePath, file)
      const newDestDir = path.join(destDir, file)
      if (!fs.existsSync(newDestDir)) {
        fs.mkdirSync(newDestDir, { recursive: true })
      }
      copyHtmlFiles(srcPath, newDestDir, newBasePath)
    } else if (file.endsWith('.html')) {
      // Copy HTML files to .next/serverless/pages structure
      fs.copyFileSync(srcPath, destPath)
      console.log(`✅ Copied ${srcPath} to ${destPath}`)
    }
  })
}

// Copy blog.html
const blogHtml = path.join(outDir, 'blog.html')
if (fs.existsSync(blogHtml)) {
  const destBlogHtml = path.join(serverlessDir, 'blog.html')
  fs.copyFileSync(blogHtml, destBlogHtml)
  console.log(`✅ Copied blog.html to .next/serverless/pages/`)
}

// Copy blog subdirectory
const blogDir = path.join(outDir, 'blog')
if (fs.existsSync(blogDir)) {
  const destBlogDir = path.join(serverlessDir, 'blog')
  if (!fs.existsSync(destBlogDir)) {
    fs.mkdirSync(destBlogDir, { recursive: true })
  }
  copyHtmlFiles(blogDir, destBlogDir, 'blog')
}

console.log('✅ Created dummy .next/serverless/pages structure for Netlify plugin')

