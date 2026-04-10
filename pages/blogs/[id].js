import { blogdata } from "@/assets/data/dummydata"
import { Title } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((p) => p.id === parseInt(id))

  if (!post) {
    return (
      <div style={{ padding: '120px 0', textAlign: 'center' }}>
        <Head>
          <title>Post Not Found — NOIWIC IT Solutions</title>
        </Head>
        <div className="container">
          <Title title="Post Not Found" />
          <p style={{ color: '#5a7a9a', marginTop: '20px' }}>
            This blog post could not be found. Please go back to the blog list.
          </p>
        </div>
      </div>
    )
  }

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

export default SinglePost
