import BlogCard from "@/components/BlogCard"
import { Title } from "@/components/common/Title"

const Blog = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <span className='eyebrow'>BLOG</span>
            <Title title='Our views on marketing, design & technology' />
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
