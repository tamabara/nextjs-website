import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Team } from '../components/team'
import { Features } from '../components/features'
import { Footer } from '../components/footer'
import { Screenshots } from '../components/screenshoots'
import { Video } from '../components/video'

export default function Home() {
  return (
   <>
    <Head>
      <title>Tamabara</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Video/>
    <Screenshots/>
    <Features/>
    <Team/>
    <Footer
      centertext="© Copyright 2022. All Rights Reserved."
      githublink="https://github.com/tamabara"
    />
   </>
  )
}
