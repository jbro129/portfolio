import React from 'react'

function Header() {
	return (
		<>
			<div className="header-container">
				<img
					className="headshot"
					src="/assets/headshot.webp"
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
						src="/assets/icon_linkedin.webp"
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
						src="/assets/icon_github.webp"
						alt="Github Logo"
						onDragStart={(e) => e.preventDefault()}
					/>
					<h5 className="social-text">Github</h5>
				</div>
				<div
					className="social-button"
					onClick={() => {
						window.open("https://storage.googleapis.com/storage-jsa/Jonah%20Allen%20-%20Resume.pdf", '_blank')
					}}
				>
					<img
						style={{ height: '50px', width: '50px' }}
						src="/assets/icon_resume.webp"
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
