import Drawer from "./Drawer"
import Navbar from "./Navbar"
import "../styles/BasePage.css"
import { Outlet } from "react-router-dom"

export default function Base() {
	return (
		<div className="container">
			<Navbar />
			<Drawer />
			<div className="outlet-holder">
				<Outlet />
			</div>
		</div>
	)
}
