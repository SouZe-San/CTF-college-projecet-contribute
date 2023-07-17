import Image from 'next/image'
import HeroSection from '@/components/comps/landing-page-comps/herosection'
import Footer from "@/components/comps/landing-page-comps/footer"
import Timer from '@/components/comps/landing-page-comps/timer'
import Topics from '@/components/comps/landing-page-comps/topics'
import Rules from '@/components/comps/landing-page-comps/rules'
import Branding from "@/components/comps/landing-page-comps/branding"
export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between px-24">

    
    <main className="">
        <HeroSection/>
        <Timer/>
        <Topics/>
        <Rules/>
        <Footer/>
        <Branding/>
    </main>
  )
}
