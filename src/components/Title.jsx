import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

export default function Title(props) {
	const { separator, name } = props;

	return (
		<Helmet>
			<title>
				{name} {separator} OK-Koas
			</title>
		</Helmet>
	);
}

Title.propTypes = {
	separator: PropTypes.string,
	name: PropTypes.string,
};

Title.defaultProps = {
	separator: "|",
	name: "",
};
