import { Badge } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

import skillsJson from './components/skills.json'
import ProjectCard from './components/ProjectCard'

function addSkills() {
	return skillsJson.map((skill) => {
		return (
			<Badge key={skill} className="skill-badge" bg="primary">
				{skill}
			</Badge>
		)
	})
}

function App() {
	return (
		<div className="App">
			<Header />
			<div className="bordered">
				<div className="body-block">
					<h1>Skills/Tools</h1>
					<h3>{addSkills()}</h3>
				</div>
				<div className="body-block">
					<h1>Projects</h1>
					<div className="projects">
						<ProjectCard
							title="TManager Android App"
							desc="Android app built in Java with Android Studio and is published to the Google Play Store."
							image="/assets/icon_tm.webp"
							roundIcon={true}
							button1txt="Source"
							button1click={() => {
								alert(
									'The TManager Android App source is private. If you are interested in seeing the code then please connect with me on LinkedIn and send me a message.'
								)
							}}
							button2txt="Google Play Store"
							button2click={() => {
								window.open(
									'https://play.google.com/store/apps/details?id=com.jbro129.tmanager',
									'_blank'
								)
							}}
						/>
						<ProjectCard
							title="TManager Web App"
							desc="A web implementation of my popular android app TManager. Built using the FERN stack."
							image="/assets/icon_tm.webp"
							roundIcon={true}
							button1txt="Source"
							button1click={() => {
								alert(
									'The TManager Web App source is private. If you interested in seeing the code then please connect with me on LinkedIn and send me a message.'
								)
							}}
							button2txt="Deployed"
							button2click={() => {
								window.open('https://tmanager-web.web.app/', '_blank')
							}}
						/>
						<ProjectCard
							title="Jbro129 YouTube Channel"
							desc="My YouTube channel that I grew to 250,000+ subscribers and have been working on since 2013."
							image="/assets/icon_jbro129.webp"
							roundIcon={true}
							button1txt="YouTube Channel"
							button1click={() => {
								window.open('https://www.youtube.com/Jbro129', '_blank')
							}}
						/>
						<ProjectCard
							title="SigDisplayer"
							desc="An android app that parses its own signature and displays it. Built in Java with Android Studio."
							image="/assets/icon_sigdisplayer.webp"
							roundIcon={true}
							button1txt="Source"
							button1click={() => {
								window.open('https://github.com/jbro129/SigDisplayer', '_blank')
							}}
						/>
						<ProjectCard
							title="The Brick Wall"
							desc="A website where users can post messages to a wall built with React.js, Firebase Auth, and Express.js."
							image="/assets/icon_thewall.webp"
							button1txt="Frontend"
							button1click={() => {
								window.open('https://github.com/jbro129/the-wall-app', '_blank')
							}}
							button2txt="Backend"
							button2click={() => {
								window.open('https://github.com/jbro129/the-wall-api', '_blank')
							}}
							button3txt="Deployed"
							button3click={() => {
								window.open('https://jonahs-wall-app.web.app/', '_blank')
							}}
						/>
						<ProjectCard
							title="CashRegister"
							desc="A minimalistic money calculator utility app built with React.js and the assets created using Photoshop."
							image="/assets/icon_cashregister.webp"
							roundIcon={true}
							button1txt="Source"
							button1click={() => {
								alert(
									'The CashRegister source is private. If you interested in seeing the code then please connect with me on LinkedIn and send me a message.'
								)
							}}
							button2txt="Deployed"
							button2click={() => {
								window.open('https://cashregister-web.web.app/', '_blank')
							}}
						/>
						<ProjectCard
							title="Jonahs Portfolio"
							desc="This is my portfolio that I built in React.js with Bootstrap and deployed with Firebase."
							image="/assets/headshot.webp"
							roundIcon={true}
							button1txt="Source"
							button1click={() => {
								window.open('https://github.com/jbro129/portfolio', '_blank')
							}}
							button2txt="Deployed"
							button2click={() => {
								alert('You are already here! :)')
							}}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default App
