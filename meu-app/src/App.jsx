import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/auth";
import PrivateRoute from "./PrivateRoute.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Alunos from "./pages/alunos/Alunos.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        
        <Route
          path="/alunos"
          element={
            <PrivateRoute>
              <Alunos />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;