import React from 'react'
import DealRoomHero from '../components/DealRoom/DealRoomHero'
import DealRoomIntro from '../components/DealRoom/DealRoomIntro'
import DealRoomStats from '../components/DealRoom/DealRoomStats'
import DealRoomSectors from '../components/DealRoom/DealRoomSectors'
import DealRoomProjects from '../components/DealRoom/DealRoomProjects'
import DealRoomHub from '../components/DealRoom/DealRoomHub'
import { Reveal, Spotlight } from '../lib/animations'

const DealRoomPage = () => {
  return (
    <>
      <Spotlight color="rgba(253, 236, 63, 0.18)" size={620}>
        <Reveal direction="fade" duration={900}>
          <DealRoomHero />
        </Reveal>
      </Spotlight>
      <Reveal direction="up"><DealRoomIntro /></Reveal>
      <Reveal direction="up"><DealRoomStats /></Reveal>
      <Reveal direction="up"><DealRoomSectors /></Reveal>
      <Reveal direction="up"><DealRoomProjects /></Reveal>
      <Spotlight color="rgba(99, 202, 168, 0.20)" size={560}>
        <Reveal direction="up"><DealRoomHub /></Reveal>
      </Spotlight>
    </>
  )
}

export default DealRoomPage
