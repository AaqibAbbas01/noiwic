import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post.id === parseInt(id))

  // Check if the post is found
  if (!post) {
    return (
      <div>
        <Head>
          <title>Post Not Found</title>
        </Head>
        <p>Post not found. Please go back to the blog list.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        {/* ... rest of your component */}
      </section>
    </>
  )
}

export default SinglePost
