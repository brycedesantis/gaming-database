import { Link } from "react-router-dom"
import "../styles/Drawer.css"

export default function Drawer() {
	const listItems = {
		"popular-games": "Popular games",
		"coming-soon": "Coming soon",
		"all-games": "All games",
	}

	return (
		<div className="drawer-sidebar">
			<Link to={"/"}>
				<h1>Home</h1>
			</Link>
			<ul className="drawer-list">
				{Object.keys(listItems).map((item, index) => (
					<li className="drawer-list-items" key={index}>
						{listItems[item]}
					</li>
				))}
			</ul>
		</div>
	)
}
