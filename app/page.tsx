import Image from 'next/image'
// import Footer from "@/components/comps/landing-page-comps/footer/footer"
// import HeroSection from '@/components/comps/landing-page-comps/hero/herosection'
// import Timer from '@/components/comps/landing-page-comps/timer/timer'
// import Topics from '@/components/comps/landing-page-comps/topics/topics'
// import Rules from '@/components/comps/landing-page-comps/gameRules/rules'
// import Branding from "@/components/comps/landing-page-comps/noFilterBranding/branding"
import HeroSection from '@/components/landing-page-comps/hero/herosection'
import Timer from '@/components/landing-page-comps/timer/timer'
import rewards from '@/components/landing-page-comps/rewards/rewards'
import Topics from '@/components/landing-page-comps/topics/topics'
import Rules from '@/components/landing-page-comps/gameRules/rules'
import Footer from "@/components/landing-page-comps/footer/footer"
import Branding from "@/components/landing-page-comps/noFilterBranding/branding"



export default function Home() {
  return (
    <main className="">
        <HeroSection/>
        <Timer/>
        <Topics/ >
        <Rules/>
        <Footer/>
        <Branding/> 
    </main>
  )
}
