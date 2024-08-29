import { NavLink, useMatches } from "react-router-dom";
import titleCase from "../util/text/titleCase";

export default function Breadcrumb() {
	const matches = useMatches();

	const crumbs = matches
		.filter((match) => match.handle?.breadcrumb)
		.map((match) => {
			const { breadcrumb } = match.handle;
			return {
				title: breadcrumb || titleCase(match.pathname),
				path: match.pathname,
			};
		});
	return (
		<nav className="breadcrumbs text-sm max-w-32 sm:text-lg sm:max-w-md md:max-w-lg lg:max-w-xl">
			<ul>
				{crumbs.map((crumb, index) => {
					const isLast = index === crumbs.length - 1;

					return (
						<li key={crumb.path}>
							{isLast ? (
								<span className="text-2xl">{crumb.title}</span>
							) : (
								<NavLink
									className={"link link-hover link-primary"}
									to={crumb.path}
								>
									{crumb.title}
								</NavLink>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
