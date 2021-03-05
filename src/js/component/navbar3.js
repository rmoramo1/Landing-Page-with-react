//import react into the bundle
import React from "react";
import PropTypes from "prop-types";

//import your own components
export function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
			<div className="container-fluid">
				<div className="col-4">
					<a className="navbar-brand" href="#">
						{props.title}
					</a>
				</div>
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
					className="col-8 collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="col-8"></div>
					<div className="navbar-nav col-4">
						<a
							className="nav-link active"
							aria-current="page"
							href="#">
							{props.index}
						</a>
						<a className="nav-link" href="#">
							{props.About}
						</a>
						<a className="nav-link" href="#">
							{props.servicios}
						</a>
						<a
							className="nav-link disabled"
							href="#"
							tabIndex="-1"
							aria-disabled="true">
							{props.contacto}
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
Navbar.propTypes = {
	title: PropTypes.string,
	index: PropTypes.string,
	About: PropTypes.string,
	servicios: PropTypes.string,
	contacto: PropTypes.string
};
