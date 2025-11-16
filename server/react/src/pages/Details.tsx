// Import the useNavigate hook from React Router, which allows navigation in code
import { useNavigate } from "react-router-dom";

function Details() {
  // Create a navigate function so you can move to different routes programmatically
  const navigate = useNavigate();

  return (
    // Outer page container with full-screen height, centered layout, and light gray background
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">

      {/* Page header with large bold text */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Details Page</h1>

      {/* Paragraph text explaining the purpose of the page */}
      <p className="text-gray-600 max-w-lg text-center mb-8">
        This is a sample details page. You can fill it with any information, images, or data related to the image you clicked on.
      </p>

      {/* Container that holds the two navigation buttons side-by-side */}
      <div className="flex space-x-4">

        {/* Button that navigates back to the Home page */}
        <button
          // When clicked, navigate to the "/" route
          onClick={() => navigate("/")}
          // Tailwind styling for a blue button with hover animation
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          🏠 Back to Home
        </button>

        {/* Link (not a button) that goes to a local PHP file via normal browser navigation */}
        <a
          // Normal href link to your PHP index file running on localhost
          href="http://localhost/index.php"
          // Tailwind styling for a green button-like link
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          🌐 Go to Index.php
        </a>

      </div>
    </div>
  );
}

// Export the component so it can be used elsewhere in your app
export default Details;
