
import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import TaskList from '@/components/tasklist'
import Scedhule from './scedhule'
import { useRouter } from 'next/router'
import Timer from '../components/timer'
export async function getServerSideProps() {
  const res = await fetch('https://Hashcode.sakshamalok.repl.co/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'bob.johnson@example.com' })
      });
      const data = await res.json();
      console.log(data)

  return {
    props: {
      data
    }
  }
}
export default function Home(data) {
  
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const [data1, setData1] = useState(data);
 const sampleData = [
    { title: "Meeting with clients", time: "2023-03-25T10:30:00" },
    { title: "Lunch break", time: "2023-03-25T12:00:00" },
    { title: "Team brainstorming session", time: "2023-03-25T14:00:00" },
    { title: "Finish project proposal", time: "2023-03-25T16:00:00" },
  ];
  
  console.log("data is",data.data.username)

  return (
    <div  style={{
      backgroundColor : "#0cbaba",
  backgroundImage: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)"
  
      }}
      className="h-screen"
      >
     
      
      <main
      
      >
        <Header />
        {/* <TaskList tasks={data.data.daily_tasks} /> */}
        <Link  href={{
    pathname: '/scedhule',
    query: {sampleData}
  }}>
        
        <div
          className=' rounded-full  w-40 h-40   border-gray-200'
          style={{
            
            background: "background: rgba( 255, 255, 255, 0.25 )",
            backdropFilter: "blur( 4px )",
            boxShadow:  "23px 23px 45px #160016, -23px -23px 45px #5a0056"
            
          }}
        >
          <div className='flex flex-col items-center font-mono justify-center h-full'>
            <h1 className='text-2xl font-bold text-white'>Schedule</h1>
            </div>
          
        </div>

      
    </Link>
          <Timer seconds="100"  />
        

      </main>
    </div>
  )
}
