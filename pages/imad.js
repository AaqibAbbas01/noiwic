import Head from 'next/head'

const Imad = () => {
  return (
    <>
      <Head>
        <title>Muhammad Imad — NOIWIC IT Solutions</title>
      </Head>
      <div className="profile-page">
        <div className="profile-content">
          <img src='/images/cofounder.jpg' alt='Muhammad Imad' className="profile-img" />
          <h1>Muhammad Imad</h1>
          <h2>Co-Founder & CEO</h2>
          <p>
            With over 7 years of extensive experience in the dynamic field of Information Technology, I am honored to lead Noiwic as the Co-Founder and CEO. My journey in the IT industry has been marked by a passion for innovation, a commitment to excellence, and a deep understanding of the evolving technological landscape.
          </p>
          <p>
            Noiwic was founded with a vision to not only provide IT services but also contribute to the community by creating meaningful job opportunities. Our commitment goes beyond delivering solutions; it extends to fostering an environment where talent thrives and individuals find purpose and growth.
          </p>
          <p>
            As we embark on this journey, I am excited about leveraging technology to meet our clients&apos; needs and make a positive impact on employment in the IT sector. Our team at Noiwic is dedicated to pushing boundaries, fostering innovation, and creating a workplace where talents are nurtured and careers flourish.
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

export default Imad
