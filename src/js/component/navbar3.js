//import react into the bundle
import React from "react";

//import your own components
export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Grupo7
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							className="nav-link active"
							aria-current="page"
							href="#">
							Home
						</a>
						<a className="nav-link" href="#">
							About
						</a>
						<a className="nav-link" href="#">
							Services
						</a>
						<a
							className="nav-link disabled"
							href="#"
							tabIndex="-1"
							aria-disabled="true">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
