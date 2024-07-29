import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AlasanSection from "./components/AlasanSection";
import Produk from "./components/Produk";
import Hooker from "./components/Hooker";
import Footer from "./components/Footer";
import TentangKami from "./TentangKami";
import Register from "./Register";
import ErrorPage from "./error-page";
import Error404 from "./Error404";
import Error500 from "./Error500";
import Hooker2 from "./components/Hooker2";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <main className="px-4 md:px-8 lg:px-16">
          <HeroSection />
          <AlasanSection />
          <Produk />
          <Hooker2 />
        </main>
        <Footer />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/tentang-kami",
    element: (
      <div>
        <Navbar />
        <TentangKami />
        <Footer />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: (
      <div>
        <Navbar />
        <Register />
        <Footer />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "/error500",
    element: <Error500 />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
