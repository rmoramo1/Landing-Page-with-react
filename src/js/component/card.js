import React from "react";

export function Card(props) {
	return (
		<div className="Card">
			<img
				src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/4G_LOGO_NEGRO-01__1_/original.png?1560209943"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

export function sum() {
	return 8;
}
