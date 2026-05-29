import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  adminLogin as apiLogin,
  adminLogout as apiLogout,
  adminMe,
  adminRegister as apiRegister,
  getToken,
  setToken,
} from '../lib/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [token, setTokenState] = useState(() => getToken())

  // On mount (or when the token changes), hydrate the user from /admin/auth/me.
  useEffect(() => {
    let cancelled = false
    if (!token) {
      setUser(null)
      setLoading(false)
      return () => {}
    }
    setLoading(true)
    adminMe()
      .then((res) => {
        if (cancelled) return
        const u = res?.user || null
        if (u && u.is_admin) {
          setUser(u)
        } else {
          // Token belongs to a non-admin or is invalid — clear it.
          setToken(null)
          setTokenState(null)
          setUser(null)
        }
      })
      .catch(() => {
        if (cancelled) return
        setToken(null)
        setTokenState(null)
        setUser(null)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [token])

  const login = useCallback(async (credentials) => {
    const res = await apiLogin(credentials)
    setToken(res.token)
    setTokenState(res.token)
    setUser(res.user)
    return res.user
  }, [])

  const register = useCallback(async (payload) => {
    const res = await apiRegister(payload)
    setToken(res.token)
    setTokenState(res.token)
    setUser(res.user)
    return res.user
  }, [])

  const logout = useCallback(async () => {
    try {
      await apiLogout()
    } catch {
      // Even if the server call fails (expired token, network), clear locally.
    }
    setToken(null)
    setTokenState(null)
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      isAuthenticated: !!user,
      isAdmin: !!user?.is_admin,
      login,
      register,
      logout,
    }),
    [user, token, loading, login, register, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
