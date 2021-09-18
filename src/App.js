import { Badge } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import './App.css'

import skillsJson from './components/skills.json'

function addSkills() {
	return skillsJson.map((skill) => {
		return (
			<Badge className="skill-badge" bg="primary">
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
				<h1>Skills/Tools</h1>
				<h3>{addSkills()}</h3>
			</div>
		</div>
	)
}

export default App
