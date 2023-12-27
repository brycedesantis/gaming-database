import { useState } from "react"
import { useLocation } from "react-router-dom"

const myKey = "a0a3b1ec3e0c40ff905548d8bce03152"
export default function GameDetails() {
	const [gameInfo, setGameInfo] = useState({})
	const location = useLocation()

	async function fetchMe() {
		const fetchGame = await fetch(
			`https://api.rawg.io/api/games/${location.state.id}?key=${myKey}`
		)
		const fetchImages = await fetch(
			`https://api.rawg.io/api/games/${location.state.id}/screenshots?key=${myKey}`
		)

		const gameData = await fetchGame.json()
		const screenshots = await fetchImages.json()

		setGameInfo({
			title: gameData.name,
			description: gameData["description_raw"],
		})
		console.log(screenshots.results)
	}
	return (
		<>
			<button onClick={fetchMe}></button>
			<div className="back-button">BACK</div>
			<div className="game-details">
				<div className="game-details-img">
					<img
						src={location.state.imageSrc}
						alt={`${location.state.title} cover art`}
					/>
				</div>
				<div className="game-details-info">
					<h1>Page for {location.state.title} </h1>
					<p>{}</p>
				</div>
			</div>
		</>
	)
}
