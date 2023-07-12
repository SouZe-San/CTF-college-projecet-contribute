import React from 'react'


import Challenges from '../../components/comps/Challenges/Challenges'
import NavBar from '@/components/comps/landing-page-comps/navbar'
const page = () => {
  return (
    <div  className='md:mx-12 mb-8'>

      <NavBar/>
      <Challenges/>
    </div>
  )
}

export default page
