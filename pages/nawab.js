import Head from 'next/head'

const Nawab = () => {
  return (
    <>
      <Head>
        <title>Nawab Khan — NOIWIC IT Solutions</title>
      </Head>
      <div className="profile-page">
        <div className="profile-content">
          <img src='/images/cmo.jpg' alt='Nawab Khan' className="profile-img" />
          <h1>Nawab Khan</h1>
          <h2>Founder & CMO</h2>
          <p>
            At the helm of Noiwic, I proudly assume the role of CMO and Founder, bringing to the table over 8 years of immersive experience in our dynamic industry.
          </p>
          <p>
            With a fervent commitment to innovation, I lead a team that thrives on pushing boundaries and delivering exceptional solutions.
          </p>
          <p>
            Join us on this thrilling journey as we transform concepts into triumphs at Noiwic.
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

export default Nawab
