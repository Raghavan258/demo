import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome Page</h1>
      <p>This is the landing page.</p>
      <div>
        <Link to="/app" style={{ marginRight: "1rem" }}>Go to App</Link>
        <Link to="/myapp">Go to MyApp</Link>
      </div>
    </div>
  );
}
