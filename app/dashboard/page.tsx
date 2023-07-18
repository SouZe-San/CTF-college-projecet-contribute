import React from 'react'

import RankingBlock from '../../components/comps/Dashboard/RankingBlock'
import Branding from '@/components/landing-page-comps/noFilterBranding/branding'


const geSore = async () => {
  const response =  await fetch("https://fuku-api-specs.netlify.app/score",{
    headers: {
            'Content-Type': 'application/json',
            Cookie: 'teamId=team200',
          },
  }
  
  )
  const data = await response.json()
  return data
}

const page = async () => {
  // const Score = await geSore()

  return (
    <div className='mb-8'>
    <RankingBlock/>
    <Branding/>
    </div>
  )
}

export default page