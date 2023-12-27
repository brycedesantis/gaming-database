import {
	FaRegArrowAltCircleRight,
	FaRegArrowAltCircleLeft,
	FaCircle,
	FaDotCircle,
} from "react-icons/fa"
import "../styles/Carousel.css"
import { useState } from "react"

export default function Carousel({ images, title }) {
	const [imageIndex, setImageIndex] = useState(0)

	function showNextImage() {
		setImageIndex((index) => {
			if (index === images.length - 1) return 0
			return index + 1
		})
	}

	function showPrevImage() {
		setImageIndex((index) => {
			if (index === 0) return images.length - 1
			return index - 1
		})
	}

	return (
		<div className="carousel">
			<div className="image-holder">
				{images.map((image, index) => (
					<img
						key={image}
						src={image}
						alt={`${title} image ${index + 1}`}
						aria-hidden={imageIndex !== index}
						className="carousel-img"
						style={{ translate: `${-100 * imageIndex}%` }}
					/>
				))}
			</div>
			<button
				onClick={showPrevImage}
				className="arrow"
				style={{ left: 0 }}
				aria-label="View Previous Image"
			>
				<FaRegArrowAltCircleLeft />
			</button>
			<button
				onClick={showNextImage}
				className="arrow"
				style={{ right: 0 }}
				aria-label="View Next Image"
			>
				<FaRegArrowAltCircleRight />
			</button>
			<div className="carousel-dot-holder">
				{images.map((_, index) => (
					<button
						key={index}
						className="carousel-dot"
						aria-label={`View Image ${index}`}
						onClick={() => setImageIndex(index)}
					>
						{index === imageIndex ? <FaDotCircle /> : <FaCircle />}
					</button>
				))}
			</div>
		</div>
	)
}
