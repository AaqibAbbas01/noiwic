import { Contact } from "@/sections"
import Head from "next/head"

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact — NOIWIC IT Solutions</title>
        <meta name="description" content="Get in touch with NOIWIC IT Solutions. Visit us at Plot 28, Mehrauli - Badarpur Rd, Sainik Farm, New Delhi 110030. Call +91 8595900509 or enquire on WhatsApp." />
        <link rel="canonical" href="https://www.noiwic.com/contact" />
        <meta property="og:title" content="Contact NOIWIC IT Solutions" />
        <meta property="og:description" content="Get in touch with NOIWIC IT Solutions. Visit us in New Delhi or enquire on WhatsApp." />
        <meta property="og:url" content="https://www.noiwic.com/contact" />
      </Head>
      <Contact />
    </>
  )
}

export default ContactPage
