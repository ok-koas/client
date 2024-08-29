import { RouterProvider } from "react-router-dom";
import routerConfig from "./Router";

export default function App() {
	return <RouterProvider router={routerConfig} />;
}
