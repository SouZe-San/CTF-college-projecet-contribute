import React from 'react'


import Challenges from '../../components/comps/Challenges/Challenges'
import NavBar from '@/components/comps/landing-page-comps/navbar'
import Branding from '@/components/comps/landing-page-comps/branding'
const page = () => {
  return (
    <div  className='md:mx-12'>

      <NavBar/>
      <Challenges/>
      <Branding />
    </div>
  )
}

export default page
