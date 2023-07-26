import React from 'react'
import '@/components/styles/notValid/style.scss'

import Challenges from '../../components/comps/Challenges/Challenges'
import Branding from '@/components/landing-page-comps/noFilterBranding/branding'

import { connection } from "@/actions/connection";
const host = connection.host

import { cookies } from 'next/headers'

const getChallenges = async (cookie:string) => {
  console.log("Get all challenge")
  const URL =`${host}/challenges`
  try {
    const response =  await fetch(URL,{
      headers: {
              Accept: 'application/json',
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
  

const page = async () => {

const cookieStore = cookies()
console.log(cookieStore.getAll())
const cookData = cookieStore.get('teamId')

const cookie = `${cookData?.name}=${cookData?.value}`
console.log(cookie)
// Get All Data
  const allChallenges = await getChallenges(cookie)


  return (
    <div  className='md:mx-12  mt-24 pt-16'>

      {
        allChallenges ?
        <Challenges allChallenges={allChallenges} />
        : <h1 className='text-white text-center text-5xl my-12 h-[65vh] noConnection pt-20 '>
          Not logged in <br/> or Connection Problem ...</h1>
      }
      <Branding />
    </div>
  )
}

export default page
