import { Hero } from "@/sections"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>NOIWIC IT Solutions — The Last Digital Agency You'll Ever Need</title>
        <meta name="description" content="NOIWIC IT Solutions is a full-service digital agency based in New Delhi. We build websites, mobile apps, SaaS platforms, e-commerce stores, AI agents, and CRM systems for businesses across 12+ countries." />
        <meta name="keywords" content="web development, mobile app development, SaaS, e-commerce, digital marketing, AI agents, CRM, branding, IT solutions, New Delhi, India" />
        <link rel="canonical" href="https://noiwic.com/" />

        <meta property="og:title" content="NOIWIC IT Solutions — The Last Digital Agency You'll Ever Need" />
        <meta property="og:description" content="We architect high-performance digital ecosystems — from AI-powered automation and SaaS platforms to e-commerce, branding, and full-stack product development." />
        <meta property="og:url" content="https://noiwic.com/" />
        <meta property="og:image" content="https://noiwic.com/images/og-image.png" />

        <meta name="twitter:title" content="NOIWIC IT Solutions — The Last Digital Agency You'll Ever Need" />
        <meta name="twitter:description" content="We architect high-performance digital ecosystems — from AI-powered automation and SaaS platforms to e-commerce, branding, and full-stack product development." />
        <meta name="twitter:image" content="https://noiwic.com/images/og-image.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://noiwic.com/#organization",
                  "name": "NOIWIC IT Solutions",
                  "url": "https://noiwic.com",
                  "logo": "https://noiwic.com/images/logo.png",
                  "description": "Full-service digital agency specializing in web development, mobile apps, SaaS, AI agents, e-commerce, branding, CRM, and digital marketing.",
                  "foundingDate": "2014",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Plot 28, Mehrauli - Badarpur Rd, Saiyad Ul Ajaib Village, Sainik Farm",
                    "addressLocality": "New Delhi",
                    "addressRegion": "Delhi",
                    "postalCode": "110030",
                    "addressCountry": "IN"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-8595900509",
                    "contactType": "sales",
                    "availableLanguage": ["English", "Hindi"]
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/noiwic/",
                    "https://www.instagram.com/noiwicitsolutions/",
                    "https://twitter.com/noiwic"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://noiwic.com/#website",
                  "url": "https://noiwic.com",
                  "name": "NOIWIC IT Solutions",
                  "publisher": { "@id": "https://noiwic.com/#organization" },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://noiwic.com/showcase?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "ProfessionalService",
                  "name": "NOIWIC IT Solutions",
                  "image": "https://noiwic.com/images/og-image.png",
                  "priceRange": "$$",
                  "telephone": "+91-8595900509",
                  "url": "https://noiwic.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Plot 28, Mehrauli - Badarpur Rd, Saiyad Ul Ajaib Village, Sainik Farm",
                    "addressLocality": "New Delhi",
                    "addressRegion": "Delhi",
                    "postalCode": "110030",
                    "addressCountry": "IN"
                  },
                  "areaServed": "Worldwide",
                  "serviceType": ["Web Development", "Mobile App Development", "SaaS Development", "E-Commerce", "Digital Marketing", "AI Agents", "Branding", "CRM Solutions"]
                }
              ]
            })
          }}
        />
      </Head>
      <Hero />
    </>
  )
}
