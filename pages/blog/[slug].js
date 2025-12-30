import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug, getFiles, getAllFilesFrontMatter, formatSlug } from '@/lib/mdx'
import PostLayout from '@/layouts/PostLayout'
import MDXComponents from '@/components/MDXComponents'

export async function getStaticPaths() {
  const posts = getFiles('blog')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug)
  const posts = await getAllFilesFrontMatter('blog')
  const postIndex = posts.findIndex((post) => formatSlug(post.slug) === params.slug)
  const prev = postIndex > 0 ? posts[postIndex - 1] : null
  const next = postIndex < posts.length - 1 ? posts[postIndex + 1] : null

  return { props: { post, prev, next } }
}

export default function BlogPost({ post, prev, next }) {
  const { mdxSource, frontMatter } = post
  return (
    <PostLayout frontMatter={frontMatter} prev={prev} next={next}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </PostLayout>
  )
}
