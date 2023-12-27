import { Link } from "react-router-dom"
import "../styles/Card.css"
import { v4 as uuidv4 } from "uuid"

export default function Card({ id, title, genre, rating, imageSrc, slug }) {
	return (
		<div className="card-element">
			<div className="card-img">
				<Link to={`game-details/${slug}`} state={{ id }}>
					<img src={imageSrc} alt={`${title} cover art`} />
				</Link>
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
