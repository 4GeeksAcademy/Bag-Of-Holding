import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="header-secondary">
			<Link to="/">
				<span className="accent navbar-brand mb-0 h1">BAG OF HOLDING</span>
			</Link>
			<div className="ml-auto">
				<Link to="">
					<button className="accent btn btn-primary">LOGIN</button>
				</Link>
			</div>
		</nav>
	);
};