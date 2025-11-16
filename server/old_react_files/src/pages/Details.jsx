import React from "react";
import { useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Details Page</h1>

      {/* Example Content */}
      <p className="text-gray-600 max-w-lg text-center mb-8">
        This is a sample details page. You can fill it with any information, images, or data related to the image you clicked on.
      </p>

      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          🏠 Back to Home
        </button>

        <a
          href="http://localhost/index.php"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          🌐 Go to Index.php
        </a>
      </div>
    </div>
  );
}

export default Details;