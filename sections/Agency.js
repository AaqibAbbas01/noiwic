import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <span className='eyebrow'>ABOUT AGENCY</span>
            <Title title="The last digital agency you'll ever need!" className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <h3 style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '2px' }}>Why Choose NOIWIC IT Solutions?</h3>
              <p className='desc-p'>Innovation: We stay at the forefront of technology trends to provide you with innovative solutions that give your business a competitive edge.</p>
              <p className='desc-p'>Dedicated Team: Our team of skilled professionals is passionate about delivering quality results and exceeding your expectations.</p>
              <p className='desc-p'>Client-Centric Approach: We believe in building strong client relationships, understanding your unique needs, and delivering tailored solutions that align with your objectives.</p>
              <p className='desc-p'>Quality Assurance: We are committed to delivering high-quality products and services, ensuring that every project meets the highest standards of performance and security.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 style={{ color: '#00c8ff' }}>10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 style={{ color: '#00c8ff' }}>100+</h1>
                  <h3>Successful projects</h3>
                </div>
                <div className='box'>
                  <h1 style={{ color: '#00c8ff' }}>12+</h1>
                  <h3>Countries served</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.png' alt='NOIWIC Team' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Our Vision' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <h3 style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '2px' }}>Our Vision for the Future</h3>
              <br />
              <p className='misson-p'>Our vision is to be a trusted partner for businesses worldwide, known for our expertise in leveraging technology to solve complex challenges and drive sustainable growth. We aim to be at the forefront of technological innovation, helping organizations thrive in an ever-evolving digital landscape.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
    </>
  )
}

export default Agency
