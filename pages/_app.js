import Layout from "@/components/common/Layout"
import DefaultSeo from "@/components/seo/DefaultSeo"
import "@/styles/main.scss"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <DefaultSeo />
    </>
  )
}
