import { teamdata } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title } from "@/components/common/Title"

const Team = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <span className='eyebrow'>MEET THE FOUNDERS</span>
            <Title title='The visionaries behind NOIWIC' className='title-bg' />
          </div>
          <div className='grid-3 py'>
            {teamdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
