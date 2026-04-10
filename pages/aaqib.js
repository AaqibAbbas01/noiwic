import Head from 'next/head'

const Aaqib = () => {
  return (
    <>
      <Head>
        <title>Aaqib Abbas — NOIWIC IT Solutions</title>
      </Head>
      <div className="profile-page">
        <div className="profile-content">
          <img src='/images/ceo.jpg' alt='Aaqib Abbas' className="profile-img" />
          <h1>Aaqib Abbas</h1>
          <h2>Founder & CTO</h2>
          <p>
            With an illustrious career spanning over 7 years in the ever-evolving realm of Information Technology, I am both honored and thrilled to serve as the Co-Founder and CTO of Noiwic. My professional journey has been defined by an unwavering commitment to innovation, a relentless pursuit of excellence, and an innate understanding of the rapidly shifting technological landscape.
          </p>
          <p>
            Throughout my tenure in the industry, I have had the privilege of spearheading an array of transformative projects. These endeavors have ranged from pioneering web and app development ventures to crafting seamless and immersive E-commerce experiences.
          </p>
          <p>
            The inception of Noiwic was driven by a visionary purpose — not solely to deliver exceptional IT services, but also to catalyze positive change within our community. We are guided by a mission that transcends the mere provision of solutions; it extends to creating an ecosystem where talent flourishes.
          </p>
          <p>
            I extend my heartfelt gratitude for being a cherished part of our narrative. Together, let us architect a future where technology becomes an instrument of transformative change, enriching lives and empowering entire communities.
          </p>
        </div>

        <style jsx>{`
          .profile-page {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 120px 20px 80px;
          }
          .profile-content {
            max-width: 700px;
            text-align: center;
            background: rgba(8, 15, 26, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(0, 200, 255, 0.1);
            padding: 60px 40px;
          }
          .profile-img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #00c8ff;
            margin-bottom: 30px;
          }
          h1 {
            font-family: 'Orbitron', sans-serif;
            font-size: 28px;
            color: #00c8ff;
            margin-bottom: 8px;
          }
          h2 {
            font-family: 'Syne Mono', monospace;
            font-size: 14px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #5a7a9a;
            margin-bottom: 30px;
          }
          p {
            font-family: 'Syne', sans-serif;
            color: #5a7a9a;
            line-height: 1.7;
            margin-bottom: 16px;
          }
          @media (max-width: 768px) {
            .profile-content { padding: 40px 24px; }
            .profile-img { width: 150px; height: 150px; }
          }
        `}</style>
      </div>
    </>
  )
}

export default Aaqib
