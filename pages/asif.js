import Head from 'next/head'

const Asif = () => {
  return (
    <>
      <Head>
        <title>Asif Hussain — NOIWIC IT Solutions</title>
      </Head>
      <div className="profile-page">
        <div className="profile-content">
          <img src='/images/asif.png' alt='Asif Hussain' className="profile-img" />
          <h1>Asif Hussain</h1>
          <h2>Co-Founder</h2>
          <p>
            As Co-Founder of NOIWIC IT Solutions, Asif brings a sharp business acumen and a deep commitment to building technology that creates real-world impact. His strategic vision has been instrumental in shaping the company&apos;s growth trajectory and expanding its reach across multiple industries and geographies.
          </p>
          <p>
            With a keen eye for market opportunities and client needs, Asif drives NOIWIC&apos;s business development efforts, forging strong partnerships and ensuring that every project delivers measurable value. His leadership style emphasizes collaboration, innovation, and a relentless focus on quality.
          </p>
          <p>
            Asif is passionate about leveraging technology to empower businesses of all sizes. Under his guidance, NOIWIC has successfully delivered 100+ projects across 12+ countries, building a reputation for reliability, excellence, and forward-thinking solutions in the digital space.
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

export default Asif
