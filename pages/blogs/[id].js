import { blogdata } from "@/assets/data/dummydata"
import { Title } from "@/components/common/Title"
import Head from "next/head"

const SinglePost = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} — NOIWIC IT Solutions</title>
      </Head>
      <section className='post-details bg-top' style={{ padding: '120px 0 80px' }}>
        <div className="container">
          <div className="heading-title">
            <span className="eyebrow">{post.category}</span>
            <Title title={post.title} />
            <p>{post.date}</p>
          </div>
          {post.cover && (
            <img src={post.cover} alt={post.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginTop: '40px' }} />
          )}
        </div>
      </section>
    </>
  )
}

export const getStaticPaths = async () => ({
  paths: blogdata.map((post) => ({
    params: { id: String(post.id) },
  })),
  fallback: false,
})

export const getStaticProps = async ({ params }) => {
  const post = blogdata.find((item) => String(item.id) === String(params.id))

  return {
    props: { post },
  }
}

export default SinglePost
