import React from 'react'

import MediaKitHero from '../components/MediaKit/MediaKitHero'
import AboutBoilerplate from '../components/MediaKit/AboutBoilerplate'
import EssentialInfo from '../components/MediaKit/EssentialInfo'
import DownloadableMediaAssets from '../components/MediaKit/DownloadableMediaAssets'
import UsageGuidelines from '../components/MediaKit/UsageGuidelines'
import InvestmentSection from '../components/HomePage/InvestmentSection'




export default function MediaKitPage() {
  return (
    <>
      <MediaKitHero />
      <AboutBoilerplate />
      <EssentialInfo />
      <DownloadableMediaAssets />
      <UsageGuidelines />
      <InvestmentSection />
    </>
  )
}
