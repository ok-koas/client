import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

export default function Title({ separator, name }) {
	const title =
		name !== "" ? (
			<title>
				{name} {separator} Ok-Koas
			</title>
		) : (
			<title>Ok-Koas</title>
		);
	return <Helmet>{title}</Helmet>;
}

Title.propTypes = {
	separator: PropTypes.string,
	name: PropTypes.string,
};

Title.defaultProps = {
	separator: "|",
	name: "",
};
