import { Team } from "@/sections"
import Head from "next/head"

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Team — NOIWIC IT Solutions</title>
        <meta name="description" content="Meet the talented team behind NOIWIC IT Solutions — experienced developers, designers, and strategists passionate about building world-class digital products." />
        <link rel="canonical" href="https://noiwic.com/team" />
        <meta property="og:title" content="Our Team — NOIWIC IT Solutions" />
        <meta property="og:description" content="Meet the talented team behind NOIWIC IT Solutions — experienced developers, designers, and strategists." />
        <meta property="og:url" content="https://noiwic.com/team" />
      </Head>
      <Team />
    </>
  )
}

export default TeamPage
