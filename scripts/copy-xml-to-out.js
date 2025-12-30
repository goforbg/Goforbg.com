const fs = require('fs')
const path = require('path')

// Copy XML files from public to out directory after build
const filesToCopy = ['sitemap.xml', 'index.xml']

filesToCopy.forEach((file) => {
  const source = path.join(process.cwd(), 'public', file)
  const dest = path.join(process.cwd(), 'out', file)

  if (fs.existsSync(source)) {
    // Ensure out directory exists
    const outDir = path.dirname(dest)
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true })
    }

    fs.copyFileSync(source, dest)
    console.log(`✅ Copied ${file} to out/${file}`)
  } else {
    console.warn(`⚠️  ${file} not found in public directory`)
  }
})

console.log('✅ XML files copied to out directory')

