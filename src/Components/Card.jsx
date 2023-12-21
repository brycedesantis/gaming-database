import "../styles/Card.css"
import { v4 as uuidv4 } from "uuid"

export default function Card({ title, genre, rating, imageSrc }) {
	return (
		<div className="card-element">
			<div className="card-img">
				<img src={imageSrc} alt={`${title} cover art`} />
			</div>
			<div className="card-platform-icons"></div>
			<div className="card-info">
				<div className="card-title">
					<h2>{title}</h2>
				</div>
				<div className="card-rating">{rating}</div>
				<div className="card-genre">
					{genre.map((type) => {
						return <h5 key={uuidv4}>{type}</h5>
					})}
				</div>
			</div>
		</div>
	)
}
