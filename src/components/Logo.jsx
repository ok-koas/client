import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Logo = ({ size = "2xl", isActive = false, className }) => {
	return (
		<Link to={isActive ? "/" : ""}>
			<div
				className={`text-${size} font-bold mb-4 md:mb-0 select-none ${className}`}
			>
				<span className="text-neutral-content">OK</span>
				<span className="text-secondary">-Koas</span>
			</div>
		</Link>
	);
};

Logo.propTypes = {
	size: PropTypes.string,
	isActive: PropTypes.boolean,
	className: PropTypes.string,
};

export default Logo;
