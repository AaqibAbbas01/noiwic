export const siteUrl = 'https://noiwic.com'

export const defaultSeo = {
  siteName: 'NOIWIC IT Solutions',
  title: "NOIWIC IT Solutions - Web Development, Apps, AI Agents & Digital Marketing",
  description:
    'NOIWIC IT Solutions is a New Delhi digital agency building websites, mobile apps, SaaS products, e-commerce stores, AI agents, CRM systems, branding, and digital marketing campaigns.',
  image: '/images/og-image.svg',
  twitterHandle: '@noiwic',
}

export const organization = {
  name: 'NOIWIC IT Solutions',
  legalName: 'NOIWIC IT Solutions',
  url: siteUrl,
  logo: `${siteUrl}/images/og-image.svg`,
  telephone: '+91 8595900509',
  email: 'contact@noiwic.com',
  address: {
    streetAddress: 'Plot 28, Mehrauli - Badarpur Rd, Sainik Farm',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110030',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/noiwic-it-solutions/',
    'https://www.instagram.com/noiwic/',
  ],
}

const serviceSchema = {
  serviceType: 'ProfessionalService',
  areaServed: ['India', 'United Arab Emirates', 'Qatar', 'United States', 'United Kingdom'],
  provider: {
    '@type': 'Organization',
    name: organization.name,
    url: organization.url,
  },
}

export const routeSeo = {
  '/': {
    title: "NOIWIC IT Solutions - The Last Digital Agency You'll Ever Need",
    description:
      'Full-service digital agency in New Delhi for websites, mobile apps, SaaS platforms, e-commerce stores, AI agents, CRM systems, branding, and digital marketing.',
    keywords: [
      'digital agency New Delhi',
      'web development company India',
      'mobile app development',
      'AI agents',
      'SaaS development',
      'e-commerce development',
      'digital marketing agency',
    ],
  },
  '/agency': {
    title: 'About NOIWIC IT Solutions - Digital Agency in New Delhi',
    description:
      'Learn about NOIWIC IT Solutions, a New Delhi digital agency delivering 100+ web, app, SaaS, AI, e-commerce, branding, CRM, and marketing projects across 12+ countries.',
  },
  '/services': {
    title: 'Digital Services - Web, Apps, AI, SaaS, CRM & Marketing',
    description:
      'Explore NOIWIC IT Solutions services: web development, mobile apps, AI agents, e-commerce, digital marketing, branding, SaaS platforms, CRM, and automation testing.',
  },
  '/webdev': {
    title: 'Web Development Company in Delhi - React, Next.js & SEO Websites',
    description:
      'High-performance website and web app development using React, Next.js, Node.js, CMS, Shopify, and SEO-first architecture for startups and growing businesses.',
    type: 'service',
    schema: { ...serviceSchema, name: 'Web Development Services' },
  },
  '/mobileapp': {
    title: 'Mobile App Development Company - iOS, Android, React Native & Flutter',
    description:
      'Native and cross-platform mobile app development for iOS and Android using React Native, Flutter, Swift, Kotlin, Firebase, analytics, and app store launch support.',
    type: 'service',
    schema: { ...serviceSchema, name: 'Mobile App Development Services' },
  },
  '/ecommerce': {
    title: 'E-Commerce Development Services - Shopify, WooCommerce & Custom Stores',
    description:
      'End-to-end e-commerce development with Shopify, WooCommerce, headless commerce, payment gateways, inventory workflows, SEO, analytics, and conversion optimization.',
    type: 'service',
    schema: { ...serviceSchema, name: 'E-Commerce Development Services' },
  },
  '/digitalmarketing': {
    title: 'Digital Marketing Agency - SEO, PPC, Social Media & Growth Strategy',
    description:
      'Data-driven digital marketing services including SEO, PPC advertising, social media marketing, content, email automation, analytics, and growth strategy.',
    type: 'service',
    schema: { ...serviceSchema, name: 'Digital Marketing Services' },
  },
  '/branding': {
    title: 'Branding & Identity Design Services - Logos, Guidelines & Brand Systems',
    description:
      'Brand identity design services for logos, visual systems, brand guidelines, packaging, print design, motion graphics, and scalable brand strategy.',
    type: 'service',
    schema: { ...serviceSchema, name: 'Branding and Identity Design Services' },
  },
  '/saas': {
    title: 'SaaS Development Company - MVPs, Multi-Tenant Apps & Cloud Platforms',
    description:
      'Scalable SaaS development for MVPs and enterprise platforms with multi-tenant architecture, subscription billing, dashboards, APIs, DevOps, and cloud infrastructure.',
    type: 'service',
    schema: { ...serviceSchema, name: 'SaaS Development Services' },
  },
  '/crm': {
    title: 'CRM Development Services - Custom CRM, Automation & Analytics',
    description:
      'Custom CRM development, Salesforce and HubSpot integrations, sales pipeline automation, customer data platforms, reporting, analytics, and workflow automation.',
    type: 'service',
    schema: { ...serviceSchema, name: 'CRM Development Services' },
  },
  '/ai-agents': {
    title: 'AI Agent Development Services - WhatsApp, Voice & Workflow Automation',
    description:
      'Custom AI agents for WhatsApp, websites, customer support, voice, e-commerce, analytics, bookings, CRM workflows, and 24/7 business automation.',
    type: 'service',
    schema: { ...serviceSchema, name: 'AI Agent Development Services' },
  },
  '/automation-testing': {
    title: 'Automation Testing Services - Playwright, Cypress, API & CI/CD QA',
    description:
      'Enterprise QA automation with Playwright, Cypress, API testing, UI testing, CI/CD pipelines, AI-powered testing, performance testing, and flaky test fixes.',
    type: 'service',
    schema: { ...serviceSchema, name: 'Automation Testing Services' },
  },
  '/showcase': {
    title: 'Portfolio & Case Studies - NOIWIC IT Solutions Projects',
    description:
      'Explore NOIWIC IT Solutions projects across SaaS, e-commerce, mobile apps, AI automation, corporate websites, hiring platforms, and digital transformation.',
  },
  '/blogs': {
    title: 'Digital Product, AI, SaaS & Marketing Blog - NOIWIC IT Solutions',
    description:
      'Read insights from NOIWIC IT Solutions on AI agents, web development, mobile apps, SaaS products, e-commerce, digital marketing, and emerging technology trends.',
  },
  '/contact': {
    title: 'Contact NOIWIC IT Solutions - Start Your Digital Project',
    description:
      'Contact NOIWIC IT Solutions in New Delhi for web development, mobile apps, SaaS, AI agents, e-commerce, CRM, branding, marketing, and automation testing.',
  },
  '/team': {
    title: 'NOIWIC IT Solutions Team - Founders & Leadership',
    description:
      'Meet the founders and leadership team behind NOIWIC IT Solutions, a digital agency building technology products and growth systems for businesses worldwide.',
  },
  '/aaqib': {
    title: 'Aaqib Abbas - Founder, NOIWIC IT Solutions',
    description:
      'Aaqib Abbas is the founder of NOIWIC IT Solutions, leading digital product, web, app, SaaS, e-commerce, and AI automation projects.',
    image: '/images/founder.png',
  },
  '/nawab': {
    title: 'Nawab Khan - Co-Founder, NOIWIC IT Solutions',
    description:
      'Nawab Khan is co-founder of NOIWIC IT Solutions, helping businesses transform ideas into technology products and growth-focused digital systems.',
    image: '/images/cmo.jpg',
  },
  '/asif': {
    title: 'Asif Hussain - Co-Founder, NOIWIC IT Solutions',
    description:
      'Asif Hussain is co-founder of NOIWIC IT Solutions, driving partnerships, business development, and digital strategy for clients across industries.',
    image: '/images/asif.png',
  },
  '/thankyou': {
    title: 'Thank You - NOIWIC IT Solutions',
    description: "Thank you for reaching out to NOIWIC IT Solutions. We'll respond within 24 hours.",
    noindex: true,
  },
  '/admin': {
    title: 'Admin - NOIWIC IT Solutions',
    description: 'NOIWIC IT Solutions admin area.',
    noindex: true,
  },
}

export const publicSitemapRoutes = [
  '/',
  '/agency',
  '/services',
  '/webdev',
  '/mobileapp',
  '/ecommerce',
  '/digitalmarketing',
  '/branding',
  '/saas',
  '/crm',
  '/ai-agents',
  '/automation-testing',
  '/showcase',
  '/blogs',
  '/contact',
  '/team',
  '/aaqib',
  '/nawab',
  '/asif',
]
