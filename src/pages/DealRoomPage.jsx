import React from 'react'
import DealRoomHero from '../components/DealRoom/DealRoomHero'
import DealRoomIntro from '../components/DealRoom/DealRoomIntro'
import DealRoomStats from '../components/DealRoom/DealRoomStats'
import DealRoomSectors from '../components/DealRoom/DealRoomSectors'
import DealRoomProjects from '../components/DealRoom/DealRoomProjects'
import DealRoomHub from '../components/DealRoom/DealRoomHub'

const DealRoomPage = () => {
  return (
    <>
      <DealRoomHero />
      <DealRoomIntro />
      <DealRoomStats />
      <DealRoomSectors />
      <DealRoomProjects />
      <DealRoomHub />
    </>
  )
}

export default DealRoomPage
