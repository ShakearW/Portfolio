// Import the useNavigate hook from React Router (used to navigate programmatically)
import { useNavigate } from "react-router-dom";

function Home() {
  // Create a navigate function that lets us move to different routes in the app
  const navigate = useNavigate();

  return (
    // A full-screen container with centered content and a light gray background
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      
      // Page title styled with large bold text
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>

      {/* Button that navigates to the '/details' page when clicked */}
      <button
        // When the button is clicked, navigate to the Details route
        onClick={() => navigate("/details")}
        // Tailwind classes for styling: blue background, white text, rounded edges, hover effect
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        {/* Button label with an emoji */}
        🔍 Go to Details Page
      </button>

    </div>
  );
}

// Export the Home component so it can be used in other files
export default Home;
