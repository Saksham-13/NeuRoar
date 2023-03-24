import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"


  return (
    <div >
      <Head>
        <title>Nextjs | Next-Auth</title>

      </Head>
      <Header />
      <main >
        <h1 className="">Authentication in Next.js app using Next-Auth</h1>
        <div >
           {loading && <div className={styles.title}>Loading...</div>}
           {
            session &&
              <>
               <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
               <img src={session.user.image} alt="" className={styles.avatar} />
              </>
            }
           {
            !session &&
              <>
               <p className={styles.title}>Please Sign in</p>
               <img src="https://cdn.dribbble.com/users/759083/screenshots/6915953/2.gif" alt="" className={styles.avatar} />

              </>
           }
         </div>
      </main>
    </div>
  )
}