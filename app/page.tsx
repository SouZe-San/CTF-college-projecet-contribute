import Image from 'next/image'
import HeroSection from '@/components/comps/landing-page-comps/herosection'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">

      <HeroSection></HeroSection>
    </main>
  )
}
