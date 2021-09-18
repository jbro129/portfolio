import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Project({
	title,
	desc,
	image,
	button1txt,
	button1click,
	button2txt,
	button2click,
	button3txt,
	button3click,
}) {
	return (
		<Card style={{ width: '20rem' }} className="bordered">
			<Card.Img variant="top" style={{ padding: '1rem', borderRadius: "44%" }} src={image} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{desc}</Card.Text>

				<div className="project-buttons">
					<Button
						variant="primary"
						style={{ margin: '5px' }}
						onClick={button1click}
					>
						{button1txt}
					</Button>
					{button2click && button2txt && (
						<Button
							variant="primary"
							style={{ margin: '5px' }}
							onClick={button2click}
						>
							{button2txt}
						</Button>
					)}
					{button3click && button3txt && (
						<Button
							variant="primary"
							style={{ margin: '5px' }}
							onClick={button3click}
						>
							{button3txt}
						</Button>
					)}
				</div>
			</Card.Body>
		</Card>
	)
}

export default Project
