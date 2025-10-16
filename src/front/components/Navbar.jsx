import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar header-secondary">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 accent">BAG OF HOLDING</span>
			</Link>
			<div className="ml-auto">
				<Link to="">
					<button className="accent btn btn-primary navbar-button">Login</button>
				</Link>
			</div>
		</nav>
	);
};