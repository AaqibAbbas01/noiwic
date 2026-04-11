import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="googleae0364e15c7d5679" />

        {/* Character & Viewport */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Default OG Tags (overridden per page via next/head) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="NOIWIC IT Solutions" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Defaults */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@noiwic" />

        {/* Theme & Mobile */}
        <meta name="theme-color" content="#020408" />
        <meta name="msapplication-TileColor" content="#020408" />

        {/* SEO Extras */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="NOIWIC IT Solutions" />
        <meta name="publisher" content="NOIWIC IT Solutions" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="New Delhi" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&family=Syne+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
