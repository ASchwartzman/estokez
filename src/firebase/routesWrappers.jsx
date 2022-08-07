import { useRouter } from 'next/router'
import { NextResponse } from 'next/server'
import { useEffect } from 'react'
import { useAuth } from './AuthProvider'

export function withPublic(Component) {
  return function WithPublic() {
    const router = useRouter()
    const auth = useAuth()

    useEffect(() => {
      if (auth.user) {
        router.replace('/dashboard')
      }
    }, [])

    // if (auth.user) {
    //   return (
    //     <h1>{`${auth.user.displayName} is logged in, redirecting to dashboard...`}</h1>
    //   )
    // }

    return <Component />
  }
}

export function withProtected(Component) {
  return function WithProtected() {
    const router = useRouter()
    const auth = useAuth()

    useEffect(() => {
      if (!auth.user) {
        router.push('/login')
      }
    }, [])

    if (!auth.user) {
      return <h1>No user authenticated, redirecting to login page...</h1>
    }

    return <Component />
  }
}
