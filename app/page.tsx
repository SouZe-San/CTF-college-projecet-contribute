import Image from 'next/image'
<<<<<<< HEAD
import HeroSection from '@/components/comps/landing-page-comps/herosection'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">

      <HeroSection></HeroSection>
=======
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
>>>>>>> 8885bef424b01a448b83ad0fe72759bed72fe90e
    </main>
  )
}
