import React from 'react'

import Headshot from '../assets/headshot.jpg'
import LinkedinLogo from '../assets/icon_linkedin.png'
import GithubLogo from '../assets/icon_github.png'
import ResumeLogo from '../assets/icon_resume.png'

function Header() {
	return (
		<>
			<div className="header-container">
				<img className="headshot" src={Headshot} alt="Jonahs Headshot" />
				<div className="bordered">
					<h1>Jonah Allen</h1>
					<h3>Fullstack Software Engineer</h3>
					<h5>
						Welcome to my portfolio! I am a developer who has a specialty for
					</h5>
					<h5>React.js Web Development and Mobile Android Development.</h5>
				</div>
			</div>
			<div className="social-buttons">
				<div
					className="social-button"
					onClick={() => {
						window.open('https://www.linkedin.com/in/jonahsallen/', '_blank')
					}}
				>
					<img
						style={{ height: '50px', width: '50px' }}
						src={LinkedinLogo}
						alt="LinkedIn Logo"
					/>
					<h5 style={{ color: 'white', marginLeft: '10px' }}>LinkedIn</h5>
				</div>
				<div
					className="social-button"
					onClick={() => {
						window.open('https://github.com/jbro129', '_blank')
					}}
				>
					<img
						style={{ height: '50px', width: '50px' }}
						src={GithubLogo}
						alt="Github Logo"
					/>
					<h5 style={{ color: 'white', marginLeft: '10px' }}>Github</h5>
				</div>
				<div
					className="social-button"
					onClick={() => {
						window.open(
							'https://jonah-portfolio.web.app/Jonah%20Allen%20-%20Resume.pdf',
							'_blank'
						)
					}}
				>
					<img
						style={{ height: '50px', width: '50px' }}
						src={ResumeLogo}
						alt="Resume Icon"
					/>
					<h5 style={{ color: 'white', marginLeft: '10px' }}>Resume</h5>
				</div>
			</div>
		</>
	)
}

export default Header
