import "../styles/Drawer.css"

export default function Drawer() {
	const listItems = ["Popular games", "Coming soon", "All games"]

	return (
		<div className="drawer-sidebar">
			<h1>Home</h1>
			<ul className="drawer-list">
				{listItems.map((item, index) => {
					return (
						<li className="drawer-list-items" key={index}>
							{item}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
