import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="text-2xl font-bold mb-4 md:mb-0">
        <span className="text-black">OK</span>
        <span className="text-blue-600">-Koas</span>
      </div>
    </Link>
  );
};

export default Logo;
