import Image from 'next/image'
import Footer from "@/components/comps/landing-page-comps/footer"
// import HeroSection from '@/components/comps/landing-page-comps/herosection'
// import HeroSection from '@/components/comps/landing-page-comps/herosection'
// import HeroSection from '@/components/comps/landing-page-comps/herosection'
import Rules from '@/components/comps/landing-page-comps/rules'
import Branding from "@/components/comps/landing-page-comps/branding"

export default function Home() {
  return (
    <main className="">
        <Rules/>
        <Footer/>
        <Branding/>
    </main>
  )
}
