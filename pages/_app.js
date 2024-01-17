import Layout from "@/components/common/Layout"
import "@/styles/main.scss"

// Rest of your _app.js/_app.tsx file...



export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
