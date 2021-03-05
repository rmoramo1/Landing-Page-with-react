import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jumbotron />
			title="A Warm Welcome!" contendo="This is a simple hero unit, a
			simple jumbotron-style component for calling extra attention to
			featured content or information." btntext="Call to Action" />
		</div>
	);
}
