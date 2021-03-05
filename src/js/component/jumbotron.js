import React from "react";
import PropTypes from "prop-types";

export function Jumbotron(props) {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p>{props.contenido}</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				{props.btntext}
			</a>
		</div>
	);
}

Jumbotron.propTypes = {
	title: PropTypes.string,
	contenido: PropTypes.string,
	btntext: PropTypes.string
};
