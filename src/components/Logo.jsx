import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Logo = ({ size = "2xl", isActive = false }) => {
	return (
		<Link to={isActive ? "/" : ""}>
			<div className={`text-${size} font-bold mb-4 md:mb-0 select-none`}>
				<span className="text-black">OK</span>
				<span className="text-blue-600">-Koas</span>
			</div>
		</Link>
	);
};

Logo.propTypes = {
	size: PropTypes.string,
	isActive: PropTypes.boolean,
};

export default Logo;
