import { useResolvedPath } from "react-router-dom";
import slugify from "./slugify";

const useLinker = (currentPath, name) => {
	const resolvedPath = useResolvedPath(currentPath).pathname;
	return `${resolvedPath}/${slugify(name)}`;
};

export default useLinker;
