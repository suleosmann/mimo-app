import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes"
import { AuthProvider } from "./context/AuthContext"

function App() {

  return (
    <AuthProvider>
      <Router>
      <AllRoutes/>
    </Router>
    </AuthProvider>
  )
}

export default App
