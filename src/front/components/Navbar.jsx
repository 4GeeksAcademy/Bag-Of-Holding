import { Link } from "react-router-dom";

export const Navbar = () => {
	let token = localStorage.getItem("token");
	const logOut = () => {
		localStorage.removeItem("token")
		localStorage.removeItem("user_id")
		localStorage.removeItem("character_id")
	}
	return (
		<nav className="navbar header-secondary">
			{
				token
					? <Link to="/characterselection">
						<span className="navbar-brand mb-0 h1 accent">BAG OF HOLDING</span>
					</Link>
					: <Link to="/">
						<span className="navbar-brand mb-0 h1 accent">BAG OF HOLDING</span>
					</Link>
			}

			<div className="ml-auto">
				{
					token
						? <span>
							<Link to="/characterselection">
								<button className="accent btn btn-primary navbar-button">Character Selection</button>
							</Link>
							<Link to="/charactercreator">
								<button className="accent btn btn-primary navbar-button">Character Creator</button>
							</Link>
							<Link to="/character">
								<button className="accent btn btn-primary navbar-button">Character Site</button>
							</Link>
							<Link to="/spells">
								<button className="accent btn btn-primary navbar-button">Spells</button>
							</Link>
							<Link to="/">
								<button
									className="accent btn btn-primary navbar-button"
									onClick={logOut}
								>
									Log Out
								</button>
							</Link>
						</span>
						: ""
				}
			</div>
		</nav>
	);
};