import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AlasanSection from "./components/AlasanSection";
import Produk from "./components/Produk";
import Hooker from "./components/Hooker";
import Footer from "./components/Footer";
import TentangKami from "./TentangKami";
import Register from "./Register"; // Import the Register component
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <main className="px-4  md:px-8 lg:px-16">
          <HeroSection />
          <AlasanSection />
          <Produk />
          <Hooker />
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
      </div>
    ),
  },
  {
    path: "/register", // Define the route for Register component
    element: (
      <div>
        <Navbar />
        <Register />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
