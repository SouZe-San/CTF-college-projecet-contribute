import React from 'react'
import '@/components/styles/notValid/style.scss'
import RankingBlock from '../../components/comps/Dashboard/RankingBlock'
import Branding from '@/components/landing-page-comps/noFilterBranding/branding'
import { connection } from "@/actions/connection";
const host = connection.host
import { cookies } from 'next/headers'


const geSore = async (cookie:string) => {

  const URL = `${host}/score`
  try {
    const response =  await fetch(URL,{
      cache: 'no-cache',
      headers: {
              // Accept: 'application/json',
              'Content-Type': 'application/json',
              Cookie: cookie,
            },
      credentials: 'same-origin',
    }
    
    )
    const data = await response.json()

    return data

  } catch (error) {
    console.log(error)
  }
}

const getFormId = async (cookie:string) => {
  try {
    const URL = `${host}/id`
    const response = await fetch(URL, {
      cache: "no-cache",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
        Cookie: cookie,
      },
      credentials: 'same-origin',
    });
  
    const data = await response.json();
    return data;
    
  } catch (error) {
    
    console.log(error)
  }
};
const page = async () => {
const cookieStore = cookies()
const cookData = cookieStore.get('teamId')
const cookie = `${cookData?.name}=${cookData?.value}`
const [scoreData, teamIdData] = await Promise.all([geSore(cookie), getFormId(cookie)]); 

  return (
    <div className='mb-8 mt-32'>

      {scoreData && teamIdData ?
<RankingBlock scoreData={scoreData} teamIdData={teamIdData} />
:
<h1 className='flex justify-center items-center text-center text-5xl my-12 h-[65vh] noConnection'>Not logged in <br/> or Connection Problem ...</h1>

      }
    <Branding/>
    </div>
  )
}

export default page