// App.jsx
import { RouterProvider } from "react-router-dom";
import routerConfig from "./Router";
import { ChatProvider } from './context/ChatContext';

export default function App() {
    return (
        <ChatProvider>
            <RouterProvider router={routerConfig} />
        </ChatProvider>
    );
}