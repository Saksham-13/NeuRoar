
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
import TodoList from '@/components/todoist'
import axios from 'axios'
import Profile from '@/prog'
export async function getServerSideProps() {
  const res = await fetch('https://CoordinatedWarmBloatware.ebook1.repl.co/user', {
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
  const handlepoints = (points) => {
    console.log(points)
    setExp(points/100 +1)
    console.log(exp)
    axios.post('https://CoordinatedWarmBloatware.ebook1.repl.co/change', { value: points, email:"bob.johnson@example.com", var:"experience_level"})
      .then(response => console.log(response))
      .catch(error => console.log(error));
    setPoints(points);
  };
  
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const [data1, setData1] = useState(data);
  const [points,setPoints] = useState(data.data.user_profile.experience_level);
  const [exp,setExp]= useState(data.data.user_profile.experience_level/100 +1);
  console.log("point",points)
  console.log("exp",exp)
 const sampleData = [
    { title: "Meeting with clients", time: "2023-03-25T10:30:00" },
    { title: "Lunch break", time: "2023-03-25T12:00:00" },
    { title: "Team brainstorming session", time: "2023-03-25T14:00:00" },
    { title: "Finish project proposal", time: "2023-03-25T16:00:00" },
  ];
  
  console.log("data is",data.data.user_profile.experience_level)

  return (
    <div  style={{
      backgroundColor : "#0cbaba",
  backgroundImage: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)"
  
      }}
      className="h-full items-center"
      >
     
      
      <main
      
      >
        <Header />
        {/* div for display point alognsde profile component */}
        <div className='flex gap-4 mx-auto py-8  px-8'>

        <Profile points={points} expp={exp} />
        <div 
         className='text-white text-4xl font-bold'
         >
         {points}
          </div> 
        </div>
        {/* <TaskList tasks={data.data.daily_tasks} /> */}
        <div className='flex gap-4 mx-auto py-8  px-8'>
         {/* <div 
         className='text-white text-4xl font-bold'
         >
         {points}
          </div>  */}
          <div
          className='flex gap-6 mx-auto  my-3 items-center justify-between'
          > 
          <Link  href={{
    pathname: '/scedhule',
    query: {sampleData}
  }}>
        
        <div
          className=' rounded-full mx-10 w-40 h-40   border-gray-200'
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
    <Link  href='/bionic'>
        
        <div
          className=' rounded-full  mx-10 w-40 h-40   border-gray-200'
          style={{
            
            background: "background: rgba( 255, 255, 255, 0.25 )",
            backdropFilter: "blur( 4px )",
            boxShadow:  "23px 23px 45px #160016, -23px -23px 45px #5a0056"
            
          }}
        >
          <div className='flex flex-col items-center text-center font-mono justify-center h-full'>
            <h1 className='text-2xl font-bold text-white'>Bionic Reading</h1>
            </div>
          
        </div>

      
    </Link>
    <Link  href='/mood'>
        
        <div
          className=' rounded-full  mx-10 w-40 h-40   border-gray-200'
          style={{
            
            background: "background: rgba( 255, 255, 255, 0.25 )",
            backdropFilter: "blur( 4px )",
            boxShadow:  "23px 23px 45px #160016, -23px -23px 45px #5a0056"
            
          }}
        >
          <div className='flex flex-col items-center text-center font-mono justify-center h-full'>
            <h1 className='text-2xl font-bold text-white'>Mood Quiz</h1>
            </div>
          
        </div>

      
    </Link>
    
          </div>
        
        </div>
        <div className='item-center flex'>
        <Timer seconds="100"  />
        </div>
         <div 
         className='grid my-10 grid-cols-2 gap-4 mx-auto py-8 text-center font-mono px-8'
         >
          <div
          
          >

          <h2 className='text-2xl my-4 font-bold text-white'>Todo List</h2>
          <TodoList todo={data.data.todo_list} handlepoints={handlepoints} points={points}/>

          </div>
          <div>
          <h2 className='text-2xl font-bold my-4  text-white'>Daily Tasks</h2>
          <TodoList todo={data.data.daily_tasks} handlepoints={handlepoints} points={points}/>

          </div>

         </div>
        
      </main>
    </div>
  )
}
