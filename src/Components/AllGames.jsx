import { useEffect, useState } from "react"
import Card from "./Card"
import { v4 as uuidv4 } from "uuid"

export default function AllGames() {
	const [gameList, setGameList] = useState([])

	const myKey = "a0a3b1ec3e0c40ff905548d8bce03152"

	async function getGames() {
		const saveData = []

		const fetchGame = await fetch(`https://api.rawg.io/api/games?key=${myKey}`)
		const gameData = await fetchGame.json()

		for (let i = 0; i < 20; i++) {
			let spreadGenres = []
			gameData.results[i].genres.forEach((item) => {
				spreadGenres.push(item.name)
			})
			saveData.push({
				id: gameData.results[i].id,
				title: gameData.results[i].name,
				genre: spreadGenres,
				rating: gameData.results[i]["esrb_rating"].name,
				imageSrc: gameData.results[i]["background_image"],
				slug: gameData.results[i].slug,
			})
		}
		setGameList([...saveData])
	}

	useEffect(() => getGames, [])

	return (
		<main className="content">
			{gameList.map((game) => {
				return (
					<>
						<Card
							key={uuidv4}
							id={game.id}
							title={game.title}
							genre={game.genre}
							rating={game.rating}
							imageSrc={game.imageSrc}
							slug={game.slug}
						/>
					</>
				)
			})}
		</main>
	)
}
