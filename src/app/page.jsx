'use client'


import { useEffect } from 'react'

import Hero from '../components/hero'
import Projects from '../components/projects'

export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default
			const locomotiveScroll = new LocomotiveScroll()
		})()
	}, [])


	return (
		<main>
			<Hero />
			<Projects />
		</main>
	)
}
