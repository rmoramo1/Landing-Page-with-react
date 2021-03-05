import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="Card shadow-lg my-3">
			<img className="img-fluid" src={props.img} alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.texto}</p>
				<a href="#" className="btn btn-primary">
					{props.linkTexto}
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	title: PropTypes.string,
	texto: PropTypes.string,
	linkTexto: PropTypes.string,
	img: PropTypes.string
};
