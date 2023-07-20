import React from 'react'


import Challenges from '../../components/comps/Challenges/Challenges'
import Branding from '@/components/landing-page-comps/noFilterBranding/branding'

const getChallenges = async () => {
  console.log('getChallenges')
  const URL ="https://fuku-api-specs.netlify.app/challenges"
  const response =  await fetch(URL,{
    headers: {
            'Content-Type': 'application/json',
            Cookie: 'teamId=TNU2730',
          },
  }
  
  )
  const data = await response.json()
  return data
}
  

const page = async () => {
// Get All Data
  const allChallenges = await getChallenges()

  return (
    <div  className='md:mx-12'>
      <Challenges allChallenges={allChallenges} />
      <Branding />
    </div>
  )
}

export default page
