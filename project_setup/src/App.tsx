import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Components/AppRoutes/AppRoutes";

function App() {
  const isAuthenticated = true; // Replace with your auth logic
  return (
    <Router>
      <AppRoutes isAuthenticated={isAuthenticated} />
    </Router>
  );
}

export default App;
