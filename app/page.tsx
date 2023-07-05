import Image from 'next/image'
import HeroSection from '@/components/comps/landing-page-comps/herosection'

export default function Home() {
  return (
    <main className="w-full">
      {/* <h1 className="text-4xl font-bold text-center">Hello world</h1> */}
      {/* <Image src="/images/nextjs.svg" width={300} height={300} alt='something about something' /> */}
      <HeroSection></HeroSection>
    </main>
  )
}
