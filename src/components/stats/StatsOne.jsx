import PropTypes from "prop-types";
import { RxValueNone } from "react-icons/rx";
export default function StatsOne({
	className,
	Icon = RxValueNone,
	title,
	value,
	description,
	iconClass,
	titleClass,
	valueClass,
	descriptionClass,
}) {
	return (
		<>
			<div className={`stat ${className}`}>
				<div className={"stat-figure"}>
					<Icon className={`w-12 h-12 ${iconClass}`} />
				</div>
				<span className={`stat-title ${titleClass}`}>{title}</span>
				<span className={`stat-value ${valueClass}`}>{value}</span>
				<span className={`stat-desc ${descriptionClass}`}>{description}</span>
			</div>
		</>
	);
}

StatsOne.propTypes = {
	Icon: PropTypes.elementType,
	description: PropTypes.string,
	descriptionClass: PropTypes.string,
	iconClass: PropTypes.string,
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
	titleClass: PropTypes.string,
	value: PropTypes.string.isRequired,
	valueClass: PropTypes.string,
};
