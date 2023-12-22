import { useParams } from "react-router-dom"

export default function GameDetails() {
	const { slug } = useParams()

	return (
		<div>
			<h1>Page for {slug}</h1>
		</div>
	)
}
