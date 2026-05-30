import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import { CursorHalo, PageTransition } from '../lib/animations'

const LandingPageLayout = () => {
  const location = useLocation()
  return (
    <div className="min-h-screen flex flex-col">
      <CursorHalo />
      <Navbar />
      <main className="grow">
        <PageTransition transitionKey={location.pathname}>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}

export default LandingPageLayout