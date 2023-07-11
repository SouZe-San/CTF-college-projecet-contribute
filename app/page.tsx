import Image from 'next/image'
import HeroSection from '@/components/comps/landing-page-comps/herosection'
import Footer from "@/components/comps/landing-page-comps/footer"
// import HeroSection from '@/components/comps/landing-page-comps/herosection'
// import HeroSection from '@/components/comps/landing-page-comps/herosection'
// import HeroSection from '@/components/comps/landing-page-comps/herosection'
import Rules from '@/components/comps/landing-page-comps/rules'
import Branding from "@/components/comps/landing-page-comps/branding"
export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between px-24">

    
    <main className="">
      <HeroSection></HeroSection>
        <Rules/>
        <Footer/>
        <Branding/>
    </main>
  )
}
