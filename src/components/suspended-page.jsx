import { Suspense } from "react";
import Title from "./Title";
import LoadingPage from "../pages/loading-page/LoadingPage";
import PropTypes from "prop-types";

const SuspendedPage = ({
	component: Component,
	title,
	loadingComponent: LoadingComponent,
}) => (
	<>
		<Title name={title} />
		<Suspense fallback={<LoadingComponent />}>
			<Component />
		</Suspense>
	</>
);

SuspendedPage.propTypes = {
	component: PropTypes.elementType.isRequired,
	loadingComponent: PropTypes.elementType,
	title: PropTypes.string.isRequired,
};

SuspendedPage.defaultProps = {
	loadingComponent: LoadingPage,
};

export default SuspendedPage;
