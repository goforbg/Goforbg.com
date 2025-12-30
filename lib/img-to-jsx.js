import { visit } from 'unist-util-visit'
import sizeOf from 'image-size'
import fs from 'fs'

// This is a rehype plugin that converts img tags to Next.js Image components
export default function imgToJsx() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'img') {
        const src = node.properties.src
        if (src && src.startsWith('/static/')) {
          const imagePath = `${process.cwd()}/public${src}`
          if (fs.existsSync(imagePath)) {
            try {
              const dimensions = sizeOf(imagePath)
              const alt = node.properties.alt || ''

              // Convert img element to MDX JSX
              const jsxNode = {
                type: 'mdxJsxFlowElement',
                name: 'Image',
                attributes: [
                  {
                    type: 'mdxJsxAttribute',
                    name: 'alt',
                    value: alt,
                  },
                  {
                    type: 'mdxJsxAttribute',
                    name: 'src',
                    value: src,
                  },
                  {
                    type: 'mdxJsxAttribute',
                    name: 'width',
                    value: dimensions.width,
                  },
                  {
                    type: 'mdxJsxAttribute',
                    name: 'height',
                    value: dimensions.height,
                  },
                ],
                children: [],
              }

              // Replace the img node with the JSX node
              if (parent && parent.children) {
                parent.children[index] = jsxNode
              }
            } catch (error) {
              console.error(`Error processing image ${src}:`, error)
            }
          }
        }
      }
    })
  }
}
