import MiniNavBar from "../components/MiniNav/MiniNav";

import "../styles/wms.css";
import "../styles/movie.css";

export default function Movie() {
  return (
    <>
      <MiniNavBar />

      {/* ✅ SCOPED MOVIE PAGE WRAPPER */}
      <div className="movie-page details-page page-offset">
        <div className="details-wrap">
          <h1 className="movie-title">The Dark Knight</h1>
          <p className="movie-subtitle">HTML5 Page → React Conversion</p>

          <div id="wrapper" className="movie-wrapper">
            <main className="movie-main">
              <img
                src="/images/batman.jpeg"
                alt="Batman Movie Poster"
                className="movie-image"
              />

              <h2 className="movie-h2">Quick Run Down</h2>

              <p className="movie-p">
                Gotham City is in chaos as crime runs rampant. Batman, aided by
                Commissioner Gordon and District Attorney Harvey Dent, faces the
                anarchic Joker who challenges the city and Batman&apos;s moral limits.
              </p>

              <p className="movie-p">
                Directed by Christopher Nolan, The Dark Knight is celebrated for
                its complex characters, thrilling action scenes, and Heath
                Ledger’s legendary performance.
              </p>

              <h3 className="movie-h3">Iconic Quotes</h3>
              <p className="movie-p">
                &quot;Why so serious?&quot; — Joker
                <br />
                &quot;You either die a hero, or you live long enough to see yourself
                become the villain.&quot; — Harvey Dent
              </p>

              <table className="actor-table">
                <thead>
                  <tr>
                    <th>Actor</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Christian Bale</td>
                    <td>Bruce Wayne (Batman)</td>
                  </tr>
                  <tr>
                    <td>Heath Ledger</td>
                    <td>Joker</td>
                  </tr>
                  <tr>
                    <td>Gary Oldman</td>
                    <td>James Gordon</td>
                  </tr>
                  <tr>
                    <td>Aaron Eckhart</td>
                    <td>Harvey Dent</td>
                  </tr>
                  <tr>
                    <td>Michael Caine</td>
                    <td>Alfred</td>
                  </tr>
                </tbody>
              </table>
            </main>

            <footer className="movie-footer">
              © 2025 Shakear Wilson. All rights reserved.
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
