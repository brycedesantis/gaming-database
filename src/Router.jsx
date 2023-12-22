import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import GameDetails from "./Components/GameDetails"
import AllGames from "./Components/AllGames"

export default function Router() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			children: [
				{ index: true, element: <AllGames /> },
				{ path: "game-details/:slug", element: <GameDetails /> },
			],
		},
	])

	return <RouterProvider router={router} />
}
