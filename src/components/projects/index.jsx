import { useState } from 'react'
import styles from './style.module.css'
import Project from '.././project'
import Modal from '.././modal'

const index = () => {
	const projects = [
		{
			title: 'C2 Montreal',
			src: 'c2montreal.png',
			color: '#000000',
		},
		{
			title: 'Office Studio',
			src: 'officestudio.png',
			color: '#8C8C8C',
		},
		{
			title: 'Locomotive',
			src: 'locomotive.png',
			color: '#EFE8D3',
		},
		{
			title: 'Silencio',
			src: 'silencio.png',
			color: '#706D63',
		},
	]
	const [modal, setModal] = useState({ active: false, index: 0 })
	return (
		<section className={styles.gallery}>
			<div className={styles.galleryBody}>
				{projects.map((project, index) => {
					return (
						<Project
							index={index}
							title={project.title}
							setModal={setModal}
							key={index}
						/>
					)
				})}
			</div>
			<Modal modal={modal} projects={projects} />
		</section>
	)
}

export default index
