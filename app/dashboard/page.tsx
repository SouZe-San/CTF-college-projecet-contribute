import React from 'react'

import RankingBlock from '../../components/comps/Dashboard/RankingBlock'
import Branding from '@/components/landing-page-comps/noFilterBranding/branding'


const geSore = async () => {
  try {
    
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

  } catch (error) {
    console.log(error)
  }
}

const getFormId = async () => {
  try {
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
    
  } catch (error) {
    
    console.log(error)
  }
};
const page = async () => {
  const [scoreData, teamIdData] = await Promise.all([geSore(), getFormId()]); 

  return (
    <div className='mb-8'>
      {scoreData && teamIdData ?
<RankingBlock scoreData={scoreData} teamIdData={teamIdData} />
:
<h1>Some Network Issue</h1>

      }
    <Branding/>
    </div>
  )
}

export default page