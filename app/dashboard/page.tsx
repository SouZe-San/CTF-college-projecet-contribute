import React from 'react'

import RankingBlock from '../../components/comps/Dashboard/RankingBlock'
import Branding from '@/components/landing-page-comps/noFilterBranding/branding'
import { connection } from "@/actions/connection";
const host = connection.host

const geSore = async () => {
  try {
    
    const URL = `${host}/score`
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
    const URL = `${host}/id`
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
    <div className='mb-8 mt-32'>

      {scoreData && teamIdData ?
<RankingBlock scoreData={scoreData} teamIdData={teamIdData} />
:
<h1 className='text-center text-4xl text-emerald-700'>Some Network Issue</h1>

      }
    <Branding/>
    </div>
  )
}

export default page