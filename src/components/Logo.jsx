import React from "react";
import { Link } from "react-router-dom";

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

export default Logo;
