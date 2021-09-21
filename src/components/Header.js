import React from 'react'

import Headshot from '../assets/headshot.webp'
import LinkedinLogo from '../assets/icon_linkedin.webp'
import GithubLogo from '../assets/icon_github.webp'
import ResumeLogo from '../assets/icon_resume.webp'

import Resume from '../assets/Jonah_Allen_Resume.pdf'

function Header() {
	return (
		<>
			<div className="header-container">
				<img
					className="headshot"
					src={Headshot}
					alt="Jonahs Headshot"
					onDragStart={(e) => e.preventDefault()}
				/>
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
						onDragStart={(e) => e.preventDefault()}
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
						onDragStart={(e) => e.preventDefault()}
					/>
					<h5 className="social-text">Github</h5>
				</div>
				<div
					className="social-button"
					onClick={() => {
						window.open(Resume, '_blank')
					}}
				>
					<img
						style={{ height: '50px', width: '50px' }}
						src={ResumeLogo}
						alt="Resume Icon"
						onDragStart={(e) => e.preventDefault()}
					/>
					<h5 style={{ color: 'white', marginLeft: '10px' }}>Resume</h5>
				</div>
			</div>
		</>
	)
}

export default Header
