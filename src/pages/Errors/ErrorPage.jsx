import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
			<div className="bg-neutral shadow-md rounded-lg p-8 max-w-md mx-auto text-center">
				<h1 className="text-4xl font-bold text-secondary mb-4">Oops!</h1>
				<p className="text-gray-700 mb-4">
					Sorry, an unexpected error has occurred.
				</p>
				<p className="text-gray-500 mb-8">
					<i>{error.statusText || error.message}</i>
				</p>
				<button
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
					type="button"
				>
					Go Back Home
				</button>
			</div>
		</div>
	);
}
