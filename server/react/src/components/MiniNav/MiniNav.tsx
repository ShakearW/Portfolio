import { useNavigate } from "react-router-dom";
import "../../styles/mininav.css";

export default function MiniNav() {
  const navigate = useNavigate();

  return (
    <nav className="site-mininav">
      <ul>
        {/* Home (React route) */}
        <li>
          <button onClick={() => navigate("/extra")}>
            Home
          </button>
        </li>
        {/* WMS Project */}
        <li>
          <button onClick={() => navigate("/details")}>
            Project
          </button>
        </li>

        {/* HTML FAV MOVIE */}
        <li>
          <button onClick={() => navigate("/movie")}>
            Extra Page 
          </button>
        </li>

        {/* Back to Portfolio (external site) */}
        <li>
          <button onClick={() => navigate("/")}>
            Portfolio
          </button>
        </li>

      </ul>
    </nav>
  );
}
