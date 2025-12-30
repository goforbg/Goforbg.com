const fs = require('fs')
const path = require('path')

const outDir = path.join(process.cwd(), 'out')

if (fs.existsSync(outDir)) {
  console.log('Cleaning out directory...')
  fs.rmSync(outDir, { recursive: true, force: true })
  console.log('✅ out directory cleaned')
} else {
  console.log('out directory does not exist, skipping cleanup')
}

