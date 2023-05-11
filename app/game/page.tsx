import { GameCanvas } from '@/components/canvas/game'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VXLverse',
  description:
    'VXLverse is a revolutionary online platform designed to empower users to both create and play a wide variety of RPG games. Our mission is to provide an interactive and engaging space for game enthusiasts, offering them the opportunity to showcase their creativity and be rewarded for it.',
  keywords: 'Game Development, RPG, VXLverse, 3D Modeling, Game Design, IndieDev, Gaming',
  manifest: '/manifest.json',
}

export default function Page(props: { params: {}; searchParams: { id?: string } }) {
  return <GameCanvas id={props.searchParams.id} />
}