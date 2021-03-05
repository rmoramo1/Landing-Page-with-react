import React from "react";
import { Jumbotron } from "./jumbotron.js";
import CardConteiner from "./cardConteiner";
import { Navbar } from "./navbar3";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron
				title="A Warm Welcome!"
				contendo="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
				btntext="Call to Action"
			/>
			<CardConteiner />
			<Footer />
		</div>
	);
}
