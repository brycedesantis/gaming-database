import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Carousel from "./Carousel"
import { FaLongArrowAltLeft } from "react-icons/fa"
import "../styles/GameDetails.css"

const myKey = "a0a3b1ec3e0c40ff905548d8bce03152"
export default function GameDetails() {
	const [gameInfo, setGameInfo] = useState({})
	const [carouselImages, setCarouselImages] = useState([])
	const location = useLocation()

	async function fetchGameInfo() {
		const screenshotImgSrc = []

		const fetchGame = await fetch(
			`https://api.rawg.io/api/games/${location.state.id}?key=${myKey}`
		)
		const fetchImages = await fetch(
			`https://api.rawg.io/api/games/${location.state.id}/screenshots?key=${myKey}`
		)

		const gameData = await fetchGame.json()
		const screenshots = await fetchImages.json()

		for (let i = 0; i < screenshots.results.length; i++) {
			screenshotImgSrc.push(screenshots.results[i].image)
		}

		setCarouselImages([...screenshotImgSrc])
		setGameInfo({
			title: gameData.name,
			description: gameData["description_raw"],
		})
	}

	useEffect(() => fetchGameInfo, [])

	return (
		<main className="details-page">
			<Link to="/">
				<button className="back-arrow">
					<FaLongArrowAltLeft />
					<h3>Back</h3>
				</button>
			</Link>
			<div
				className="game-details"
				style={{
					maxWidth: "1200px",
					width: "100%",
					aspectRatio: "8 /4",
					margin: "0 auto 0 0",
				}}
			>
				<h1>{gameInfo.title} </h1>
				<Carousel images={carouselImages} title={gameInfo.title} />
				<p className="game-details-info">{gameInfo.description}</p>
			</div>
		</main>
	)
}
