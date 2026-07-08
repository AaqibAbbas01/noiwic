import { Team } from "@/sections"
import Head from "next/head"

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Team — NOIWIC IT Solutions</title>
        <meta name="description" content="Meet the founders behind NOIWIC IT Solutions — visionaries passionate about building world-class digital products and empowering businesses globally." />
        <link rel="canonical" href="https://www.noiwic.com/team" />
        <meta property="og:title" content="Our Founders — NOIWIC IT Solutions" />
        <meta property="og:description" content="Meet the founders behind NOIWIC IT Solutions — visionaries passionate about building world-class digital products." />
        <meta property="og:url" content="https://www.noiwic.com/team" />
      </Head>
      <Team />
    </>
  )
}

export default TeamPage
