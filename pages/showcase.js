import { ShowCase } from "@/sections"
import Head from "next/head"

const ShowcasePage = () => {
  return (
    <>
      <Head>
        <title>Showcase — NOIWIC IT Solutions</title>
        <meta name="description" content="Explore our portfolio of 100+ successful projects — SaaS platforms, e-commerce stores, mobile apps, and AI-powered solutions delivered across 12+ countries." />
        <link rel="canonical" href="https://noiwic.com/showcase" />
        <meta property="og:title" content="Our Work — NOIWIC IT Solutions" />
        <meta property="og:description" content="Explore our portfolio of 100+ successful projects across SaaS, e-commerce, mobile apps, and AI-powered solutions." />
        <meta property="og:url" content="https://noiwic.com/showcase" />
      </Head>
      <ShowCase />
    </>
  )
}

export default ShowcasePage
