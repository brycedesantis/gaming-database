import "../styles/Navbar.css"

export default function Navbar() {
	return (
		<header style={{ width: "100%", gridColumn: "1/3" }}>
			<div className="header-item header-container">
				<div className="header-item">
					<h1>I.T.S Gaming</h1>
				</div>
				<div className="header-item header-search-box">
					<form className="header-form">
						<input
							className="header-form-input"
							type="search"
							name="search-box"
							placeholder="Search our database"
						/>
					</form>
				</div>
				<div className="header-item header-user-icons">
					<div className="avatar-icon">
						{/**Placeholder div for user avatar */}
					</div>
					<h3>My Library</h3>
					<h3>...</h3>
				</div>
			</div>
		</header>
	)
}
