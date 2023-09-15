import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Landing.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function LandingPage() {

	return (
		<div className={styles.container}>
			<h1 className={styles.titulo1}>WELCOME TO MY PROJECT HENRY COUNTRIES</h1>
			<h2 id={styles.titulo2}>Developed by
				<a className={`${styles.yellow} ${styles.scalingLink}`} href='https://www.linkedin.com/in/melody-balossino-26745021b/' target='_blank' rel="noreferrer">
					&nbsp;Melody Balossino&nbsp;
				</a>
				with <FontAwesomeIcon icon={faHeart} style={{color: "#a22f2f",}} />
			</h2>
			<Link to='/home' className='btn btn-primary'>Let's Travel  <FontAwesomeIcon icon={faPlane} style={{ color: 'black' }} /></Link>
		</div>
	)
}

export default LandingPage