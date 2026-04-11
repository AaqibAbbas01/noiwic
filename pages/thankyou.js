import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const ThankYou = () => {
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          window.location.href = '/'
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Head>
        <title>Thank You — NOIWIC IT Solutions</title>
        <meta name="description" content="Thank you for reaching out to NOIWIC IT Solutions. We'll get back to you within 24 hours." />
      </Head>

      <section className="thankyou-page">
        <div className="container">
          <div className="thankyou-card">
            <div className="bracket-tl" />
            <div className="bracket-br" />
            <div className="thankyou-icon">&#10003;</div>
            <h1>Thank You!</h1>
            <p className="thankyou-sub">
              Your submission has been received successfully. Our team will review your
              requirements and get back to you within 24 hours.
            </p>
            <div className="thankyou-ctas">
              <Link href="/">
                <button className="button-primary">Back to Home</button>
              </Link>
              <Link href="/services">
                <button className="button-ghost">Explore Services</button>
              </Link>
            </div>
            <p className="thankyou-redirect">
              Redirecting to homepage in {countdown}s...
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ThankYou
