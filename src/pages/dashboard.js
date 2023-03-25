
import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import TaskList from '@/components/tasklist'
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
  console.log("data is",data.data.username)

  return (
    <div >
      <Head>
        <title>Nextjs | Next-Auth</title>

      </Head>
      <Header />
      <main >
        hi
        <TaskList tasks={data.data.daily_tasks} />
      </main>
    </div>
  )
}
