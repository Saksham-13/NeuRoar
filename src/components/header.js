import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Header() {
  const { data: session } = useSession()

  const handleSignin = (e) => {
    e.preventDefault()
    signIn()
  }

  const handleSignout = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href='/' passHref>
                <div className="text-white text-2xl font-bold">NeuRoar</div>
              </Link>
              
            </div>
          </div>
          {session &&
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={session.user.image} alt={session.user.name} />
              </div>
              <div className="ml-3">
                <div className="text-white font-medium">{session.user.name}</div>
              </div>
            </div>
          }
          {session &&
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href='/dashboard' passHref>
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</div>
                </Link>
                <Link href='/faq' passHref>
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">FAQ</div>
                </Link>
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleSignout}>
                  Sign out
                </button>
              </div>
            </div>
          }
          {!session &&
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleSignin}>
                  Sign in
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}
