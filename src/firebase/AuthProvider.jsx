import { createContext, useContext, Context, useState } from 'react'
import { useRouter } from 'next/router'
import { app, db, auth } from './firebase-config'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    }
    setLoading(false)
    setError(null)
  })

  const firebaseSignUpWithEmailAndPassword = async (_email, _password) => {
    setLoading(true)
    setError(null)
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        _email,
        _password
      )
      setUser(userCredentials.user)
      setError(null)
      router.push('/dashboard')
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const firebaseSignInWithEmailAndPassword = async (_email, _password) => {
    try {
      setLoading(true)
      setError(null)
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        _email,
        _password
      )
      setUser(userCredentials.user)
      setError(null)
      router.push('/dashboard')
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const firebaseSignOut = async () => {
    try {
      setLoading(true)
      await signOut(auth)
      setError(null)
      setUser(null)
      router.push('/login')
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loading,
        firebaseSignInWithEmailAndPassword,
        firebaseSignUpWithEmailAndPassword,
        firebaseSignOut,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
