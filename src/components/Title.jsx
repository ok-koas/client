import React from "react";
import { Helmet } from "react-helmet";

export default function TItle(props) {
	const separator = props.separator ?? "|";
	const name = props.name ?? "";

	return (
		<Helmet>
			<title>
				{name} {separator} OK-Koas
			</title>
		</Helmet>
	);
}
