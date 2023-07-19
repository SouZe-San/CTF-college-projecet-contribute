import React from 'react'

import RankingBlock from '../../components/comps/Dashboard/RankingBlock'
import Branding from '@/components/landing-page-comps/noFilterBranding/branding'


const geSore = async () => {
  const URL = "https://fuku-api-specs.netlify.app/score"
  const response =  await fetch(URL,{
    cache: 'no-cache',
    next:{
      revalidate:5
    },
    headers: {
            'Content-Type': 'application/json',
            Cookie: 'teamId=TNU2730',
          },
  }
  
  )
  const data = await response.json()
  return data
}

const getFormId = async () => {
  const URL = "https://fuku-api-specs.netlify.app/id";
  const response = await fetch(URL, {
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Cookie: "teamId=TNU2730",
    },
  });

  const data = await response.json();
  return data;
};
const page = async () => {
  const [scoreData, teamIdData] = await Promise.all([geSore(), getFormId()]); 


  return (
    <div className='mb-8'>
    <RankingBlock scoreData={scoreData} teamIdData={teamIdData} />
    <Branding/>
    </div>
  )
}

export default page