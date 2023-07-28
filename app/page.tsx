"use client"
import Image from 'next/image'
import HeroSection from '@/components/landing-page-comps/hero/herosection'
import Timer from '@/components/landing-page-comps/timer/timer'
import Rewards from '@/components/landing-page-comps/rewards/rewards'
import Topics from '@/components/landing-page-comps/topics/topics'
import Rules from '@/components/landing-page-comps/gameRules/rules'
import Footer from "@/components/landing-page-comps/footer/footer"
import Branding from "@/components/landing-page-comps/noFilterBranding/branding"



export default function Home() {

  return (
    <main>
        <HeroSection/>
        <Timer/>
        <Rewards/>
        <Topics/>
        <Rules/>
        <Footer/>
        <Branding/> 
    </main>
  )
}
