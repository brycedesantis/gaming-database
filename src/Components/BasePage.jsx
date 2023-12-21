import Drawer from "./Drawer"
import Navbar from "./Navbar"
import "../styles/BasePage.css"

export default function Base() {
	return (
		<div className="container">
			<Navbar />
			<Drawer />
			<main className="content">
				<h1>Filler Text</h1>
			</main>
		</div>
	)
}
