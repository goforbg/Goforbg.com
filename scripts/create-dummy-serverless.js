const fs = require('fs')
const path = require('path')

// Create dummy .next/serverless/pages structure for Netlify plugin
// This is a workaround since the plugin expects serverless output
// but we're using static export (output: 'export')
// The plugin will copy these files to out/, but since they already exist
// from static export, we need to remove them from out/ first, then let
// the plugin copy them back

const nextDir = path.join(process.cwd(), '.next')
const serverlessDir = path.join(nextDir, 'serverless', 'pages')
const outDir = path.join(process.cwd(), 'out')

// Create directory structure
if (!fs.existsSync(serverlessDir)) {
  fs.mkdirSync(serverlessDir, { recursive: true })
}

function copyHtmlFiles(srcDir, destDir) {
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
      const newDestDir = path.join(destDir, file)
      if (!fs.existsSync(newDestDir)) {
        fs.mkdirSync(newDestDir, { recursive: true })
      }
      copyHtmlFiles(srcPath, newDestDir)
    } else if (file.endsWith('.html')) {
      // Copy HTML files to .next/serverless/pages structure
      // Remove from out/ first so plugin can copy it back
      const outPath = srcPath.replace(serverlessDir, outDir).replace('.next/serverless/pages', 'out')
      if (fs.existsSync(outPath)) {
        fs.unlinkSync(outPath)
        console.log(`✅ Removed ${outPath} to allow plugin to copy from .next/serverless/pages`)
      }
      fs.copyFileSync(srcPath, destPath)
      console.log(`✅ Copied ${srcPath} to ${destPath}`)
    }
  })
}

// Copy blog.html
const blogHtml = path.join(outDir, 'blog.html')
if (fs.existsSync(blogHtml)) {
  const destBlogHtml = path.join(serverlessDir, 'blog.html')
  // Copy first, then remove from out/
  fs.copyFileSync(blogHtml, destBlogHtml)
  console.log(`✅ Copied blog.html to .next/serverless/pages/`)
  fs.unlinkSync(blogHtml)
  console.log(`✅ Removed blog.html from out/ to allow plugin to copy`)
}

// Copy blog subdirectory
const blogDir = path.join(outDir, 'blog')
if (fs.existsSync(blogDir)) {
  const destBlogDir = path.join(serverlessDir, 'blog')
  if (!fs.existsSync(destBlogDir)) {
    fs.mkdirSync(destBlogDir, { recursive: true })
  }
  // First copy files to serverless, then remove from out
  const files = fs.readdirSync(blogDir)
  files.forEach((file) => {
    const srcPath = path.join(blogDir, file)
    const destPath = path.join(destBlogDir, file)
    if (file.endsWith('.html')) {
      // Copy first, then remove
      fs.copyFileSync(srcPath, destPath)
      console.log(`✅ Copied ${file} to .next/serverless/pages/blog/`)
      fs.unlinkSync(srcPath)
      console.log(`✅ Removed ${file} from out/blog/ to allow plugin to copy`)
    }
  })
  // Remove empty blog directory from out
  try {
    if (fs.existsSync(blogDir) && fs.readdirSync(blogDir).length === 0) {
      fs.rmdirSync(blogDir)
    }
  } catch (err) {
    // Directory might not be empty or already removed, ignore
  }
}

console.log('✅ Created dummy .next/serverless/pages structure for Netlify plugin')

