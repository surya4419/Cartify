import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { HeroBanner } from './components/HeroBanner'
import { ProductGrid } from './components/ProductGrid'
import { goCartAssistant } from './components/goCartAssistant'
import { FloatinggoCartButton } from './components/FloatinggoCartButton'
import { CheckoutPage } from './components/CheckoutPage'
import { useStore } from './store/useStore'
import { supabase } from './lib/supabase'

function HomePage() {
  return (
    <>
      <Header />
      <HeroBanner />
      <ProductGrid />
      <goCartAssistant />
      <FloatinggoCartButton />
    </>
  )
}

function App() {
  const { loadProducts, setUser, user } = useStore()

  useEffect(() => {
    // Load initial data
    loadProducts()

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          full_name: session.user.user_metadata?.full_name
        })
      }
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          full_name: session.user.user_metadata?.full_name
        })
      } else {
        setUser(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [loadProducts, setUser])

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
       
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={user ? <CheckoutPage /> : <Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App