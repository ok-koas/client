import React, { Fragment } from "react";

export default function LoadingPage() {
  return (
    <div className="min-h-screen flex justify-center align-middle">
      <span className="loading loading-ring loading-lg text-red-500"></span>
    </div>
  );
}
