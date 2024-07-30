import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AlasanSection from "./components/AlasanSection";
import Produk from "./components/Produk";
import Hooker from "./components/Hooker";
import Hooker2 from "./components/Hooker2";
import Footer from "./components/Footer";
import TentangKami from "./TentangKami";
import Register from "./Register";
import Login from "./Login";  // Import Login component
import ErrorPage from "./error-page";
import Error404 from "./Error404";
import Error500 from "./Error500";
import KirimOtp from "./KirimOtp";
import VerifBerkas from "./Verifberkas";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <main className="mt-5 md:px-8 lg:px-16">
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
    path: "/KirimOtp",
    element: (
      <div>
        <Navbar />
        <KirimOtp />
        <Footer />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/VerifBerkas",
    element: (
      <div>
        <Navbar />
        <main className="flex-grow">
          <VerifBerkas />
        </main>
        <Footer />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: (
      <div>
        <Register />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />  {/* Add Login component here */}
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
