import Head from 'next/head'
import { useRouter } from 'next/router'
import { blogdata } from '@/assets/data/dummydata'
import { defaultSeo, organization, routeSeo, siteUrl } from '@/lib/seo/siteMetadata'

const toAbsoluteUrl = (path) => {
  if (!path) return ''
  if (/^https?:\/\//.test(path)) return path
  const cleanPath = path.replace(/^\.\.\//, '/').replace(/^\/?public\//, '/')
  return `${siteUrl}${cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`}`
}

const toCanonicalPath = (asPath) => {
  const path = (asPath || '/').split('?')[0].split('#')[0]
  return path === '/index' ? '/' : path
}

const normalizeBlogDate = (date) => {
  if (!date) return undefined
  const parsed = new Date(date)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString()
}

const baseStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: organization.name,
    legalName: organization.legalName,
    url: organization.url,
    logo: organization.logo,
    email: organization.email,
    telephone: organization.telephone,
    sameAs: organization.sameAs,
    address: {
      '@type': 'PostalAddress',
      ...organization.address,
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: organization.name,
    image: organization.logo,
    url: organization.url,
    email: organization.email,
    telephone: organization.telephone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      ...organization.address,
    },
    areaServed: ['IN', 'AE', 'QA', 'US', 'GB'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: defaultSeo.siteName,
    url: siteUrl,
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
  },
]

const DefaultSeo = () => {
  const router = useRouter()
  const canonicalPath = toCanonicalPath(router.asPath)
  const routeKey = router.pathname === '/blogs/[id]' ? router.pathname : canonicalPath
  const blogPost = router.pathname === '/blogs/[id]'
    ? blogdata.find((post) => String(post.id) === String(router.query.id))
    : null

  const blogSeo = blogPost
    ? {
        title: `${blogPost.title} - NOIWIC IT Solutions`,
        description: `${blogPost.title}. Read expert insights from NOIWIC IT Solutions on ${blogPost.category.toLowerCase()}, digital products, and technology growth.`,
        image: blogPost.cover,
        type: 'article',
      }
    : null

  const seo = {
    ...defaultSeo,
    ...(routeSeo[routeKey] || routeSeo[canonicalPath] || {}),
    ...(blogSeo || {}),
  }

  const canonicalUrl = `${siteUrl}${canonicalPath === '/' ? '/' : canonicalPath}`
  const imageUrl = toAbsoluteUrl(seo.image || defaultSeo.image)
  const robots = seo.noindex
    ? 'noindex, nofollow, noarchive'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

  const breadcrumbItems = canonicalPath
    .split('/')
    .filter(Boolean)
    .map((part, index, parts) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: blogPost && index === parts.length - 1
        ? blogPost.title
        : part.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      item: `${siteUrl}/${parts.slice(0, index + 1).join('/')}`,
    }))

  const structuredData = [
    ...baseStructuredData,
    ...(seo.schema ? [{
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      url: canonicalUrl,
      description: seo.description,
      ...seo.schema,
    }] : []),
    ...(breadcrumbItems.length ? [{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
        ...breadcrumbItems,
      ],
    }] : []),
    ...(blogPost ? [{
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${canonicalUrl}#article`,
      headline: blogPost.title,
      description: seo.description,
      image: imageUrl,
      datePublished: normalizeBlogDate(blogPost.date),
      dateModified: normalizeBlogDate(blogPost.date),
      author: {
        '@type': 'Organization',
        name: organization.name,
      },
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
      mainEntityOfPage: canonicalUrl,
    }] : []),
  ]

  return (
    <Head>
      <title key="title">{seo.title}</title>
      <meta key="description" name="description" content={seo.description} />
      {seo.keywords && <meta key="keywords" name="keywords" content={seo.keywords.join(', ')} />}
      <meta key="robots" name="robots" content={robots} />
      <link key="canonical" rel="canonical" href={canonicalUrl} />

      <meta key="og:title" property="og:title" content={seo.title} />
      <meta key="og:description" property="og:description" content={seo.description} />
      <meta key="og:url" property="og:url" content={canonicalUrl} />
      <meta key="og:image" property="og:image" content={imageUrl} />
      <meta key="og:image:alt" property="og:image:alt" content={`${defaultSeo.siteName} digital services`} />
      <meta key="og:type" property="og:type" content={seo.type === 'article' ? 'article' : 'website'} />
      <meta key="og:site_name" property="og:site_name" content={defaultSeo.siteName} />
      <meta key="og:locale" property="og:locale" content="en_US" />

      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" name="twitter:title" content={seo.title} />
      <meta key="twitter:description" name="twitter:description" content={seo.description} />
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />

      {structuredData.map((data, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Head>
  )
}

export default DefaultSeo
