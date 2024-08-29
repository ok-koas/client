/* eslint-disable react/prop-types */
import { memo } from "react";
import { NavLink } from "react-router-dom";
import useLinker from "../../util/url/useLinker";
import titleCase from "../../util/text/titleCase";

const SidebarList = ({ name, Icon }) => {
	return (
		<li>
			<NavLink
				to={useLinker("", name)}
				className={({ isActive, isPending }) =>
					isActive
						? "bg-primary text-primary-content hover:bg-primary hover:text-primary-content focus:bg-primary focus:text-primary-content"
						: isPending
							? "bg-neutral text-black"
							: ""
				}
			>
				<Icon className="w-6 h-6 me-2" />
				{titleCase(name)}
			</NavLink>
		</li>
	);
};

export default memo(SidebarList);
