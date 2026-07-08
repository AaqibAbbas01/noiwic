import Blog from "@/sections/Blog"
import Head from "next/head"

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blog — NOIWIC IT Solutions</title>
        <meta name="description" content="Read the latest insights on web development, mobile apps, AI agents, SaaS, digital marketing, and emerging tech trends from the NOIWIC IT Solutions team." />
        <link rel="canonical" href="https://www.noiwic.com/blogs" />
        <meta property="og:title" content="Blog — NOIWIC IT Solutions" />
        <meta property="og:description" content="Insights on web development, mobile apps, AI agents, SaaS, digital marketing, and emerging tech trends." />
        <meta property="og:url" content="https://www.noiwic.com/blogs" />
      </Head>
      <Blog />
    </>
  )
}

export default Blogs
