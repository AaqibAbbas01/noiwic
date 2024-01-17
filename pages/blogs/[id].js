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

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='TIPS & TRICKS / JANUARY 12, 2022' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='One of the UK’s most popular IT online magazines, ComputerWeekly, offers news and analysis on key topics for tech professionals.' />
              <p className='desc-p'> Started back in 1996, today it is a publication with millions of readers visiting to get the latest tech trends, opinions of market leaders, or in-depth analysis and reviews on digital transformation, regulations like the upcoming GDPR, etc.</p>
              <p className='desc-p'>Their contributors cover for industries such as healthcare, business services, finances, public sector, manufacturing, retail, media, telecom, transportation.</p>
              <p className='desc-p'>Topics range from data centers, enterprise software, IT management to automation, blockchain, mobile services, business intelligence software, etc. There’s also an editor’s blog.</p>
            </div>
          </div>
          <Banner />

          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title='Mashable - top news in tech industry' />

              <p className='desc-p'> As for the communicative and social side of IT leaders, the ever-entertaining Mashable constantly and fiercely highlights everything tech-related from social media, news, TV and culture.</p>
              <p className='desc-p'>It proves that business and technology are “mashable” with social networking and fun human nature pieces.</p>
              <p className='desc-p'>What you can take from this “voice of digital culture” is people’s view on how technology is influencing our lives, and thus a better understanding of user needs and user adoption of certain products.</p>
              <p className='desc-p'>Mashable is also a source of humor, memes and relevant tech jokes, as well as cultural trends, non-profit activities, climate science, and much more.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePost
