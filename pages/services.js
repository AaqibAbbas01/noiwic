import Services from "@/sections/Services"
import Head from "next/head"

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Services — NOIWIC IT Solutions</title>
        <meta name="description" content="Explore our full range of digital services — web development, mobile apps, AI agents, e-commerce, digital marketing, SaaS platforms, branding, and CRM solutions." />
        <link rel="canonical" href="https://noiwic.com/services" />
        <meta property="og:title" content="Our Services — NOIWIC IT Solutions" />
        <meta property="og:description" content="Web development, mobile apps, AI agents, e-commerce, digital marketing, SaaS, branding, and CRM solutions." />
        <meta property="og:url" content="https://noiwic.com/services" />
      </Head>
      <Services />
    </>
  )
}

export default ServicesPage
