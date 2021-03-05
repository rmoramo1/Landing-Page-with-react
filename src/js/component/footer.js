import React from "react";
import Proptypes from "prop-types";

export function Footer(props) {
	return (
		<footer className="bg-dark text-center text-lg-start text-white">
			<div className="text-center p-3">
				{props.cpy}
				<a className="text-white" href="#">
					{props.linText}
				</a>
			</div>
		</footer>
	);
}
Footer.propTypes = {
	cpy: Proptypes.string,
	linText: Proptypes.string
};
