import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Values from '@/components/Values'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <Navbar/>

      {/* Values */}
      <Values/>

      {/* Contact */}
      <Contact/>

      {/* Footer */}
      <Footer/>
      
    </>
  )
}
