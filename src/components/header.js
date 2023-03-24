import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
export default function Header () {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault()
    signIn()
  }

  const handleSignout = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight"><Link href='/'>Neuroar</Link></span>
      </div>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight"><Link href='/dashboard'>Dashboard</Link></span>
      </div>
      {/* div to disply name of user from session.user.title */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">{session && session.user.name}</span>
        </div>
      <div className="flex">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        {session && <Link href="#" onClick={handleSignout} className="btn-signin">Sign out</Link>  }

        {!session && <Link href="#" onClick={handleSignin}  className="btn-signin">Sign in</Link>  }
        </button>
      </div>
    </nav>
    </>
  )
}