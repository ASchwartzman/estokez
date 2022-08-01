import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { app, db, auth } from './firebase-config'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    })
    setLoading(false)
  }, [user])

  const firebaseSignUpWithEmailAndPassword = async (
    _email,
    _password,
    _displayName
  ) => {
    setLoading(true)
    setError(null)
    try {
      const user = await createUserWithEmailAndPassword(auth, _email, _password)
      const result = await updateProfile(auth.currentUser, {
        displayName: _displayName,
      })
      console.log(result)
      setUser(user)
      setError(null)
      console.log('recebaaa')
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
      const user = await signInWithEmailAndPassword(auth, _email, _password)
      setUser(user)
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
