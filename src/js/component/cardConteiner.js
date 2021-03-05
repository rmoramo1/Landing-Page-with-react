import React from "react";
import { Card } from "./card";

const CardConteiner = () => {
	return (
		<div className="row">
			<div className="col-12 col-md-6 col-lg-3">
				<Card
					img="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/4G_LOGO_NEGRO-01__1_/original.png?1560209943"
					title="Card 1"
					texto="Some quick example text to build on the card title and make up the bulk of the cards content."
					linkTexto="Go somewhere"
				/>
			</div>
			<div className="col-12 col-md-6 col-lg-3">
				<Card
					img="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/4G_LOGO_NEGRO-01__1_/original.png?1560209943"
					title="Card 2"
					texto="Some quick example text to build on the card title and make up the bulk of the cards content."
					linkTexto="Go somewhere"
				/>
			</div>
			<div className="col-12 col-md-6 col-lg-3">
				<Card
					img="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/4G_LOGO_NEGRO-01__1_/original.png?1560209943"
					title="Card 3"
					texto="Some quick example text to build on the card title and make up the bulk of the cards content."
					linkTexto="Go somewhere"
				/>
			</div>
			<div className="col-12 col-md-6 col-lg-3">
				<Card
					img="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/4G_LOGO_NEGRO-01__1_/original.png?1560209943"
					title="Card 4"
					texto="Some quick example text to build on the card title and make up the bulk of the cards content."
					linkTexto="Go somewhere"
				/>
			</div>
		</div>
	);
};

export default CardConteiner;
