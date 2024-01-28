import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Why Choose Noiwic IT Solutions?' />
              <p className='desc-p'>Innovation: We stay at the forefront of technology trends to provide you with innovative solutions that give your business a competitive edge.</p>
              <p className='desc-p'>Dedicated Team: Our team of skilled professionals is passionate about delivering quality results and exceeding your expectations.</p>
              <p className='desc-p'>Client-Centric Approach: We believe in building strong client relationships, understanding your unique needs, and delivering tailored solutions that align with your objectives.</p>
              <p className='desc-p'>Quality Assurance: We are committed to delivering high-quality products and services, ensuring that every project meets the highest standards of performance and security.</p>
              <p className='desc-p'>Affordable Pricing: We offer competitive pricing structures, ensuring that you receive exceptional value for your investment.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.png' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our Vision for the Future' />
              <br />
              <p className='misson-p'>Our vision is to be a trusted partner for businesses worldwide, known for our expertise in leveraging technology to solve complex challenges and drive sustainable growth. We aim to be at the forefront of technological innovation, helping organizations thrive in an ever-evolving digital landscape.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
