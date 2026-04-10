import { Title, TitleLogo } from "./common/Title"

const phoneNumber = '9818404363'
const message = encodeURIComponent("Hi, I'd like to discuss a project with NOIWIC IT Solutions.")

const Banner = () => {
  return (
    <section className='banner'>
      <div className='container'>
        <div>
          <Title title='Ready to build something extraordinary?' /> <br />
          <TitleLogo title="NOIWIC" />
        </div>
        <div>
          <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
            <button className='button-primary'>Start a Project</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Banner
