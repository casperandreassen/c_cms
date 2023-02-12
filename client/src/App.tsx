import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoute";
import ManageProjects from "./pages/ManageProjects";
import ManageAssets from "./pages/ManageAssets";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/manage" element={<PrivateRoutes />}>
        <Route path="/manage/projects" element={<ManageProjects />} />
        <Route path="/manage/assets" element={<ManageAssets />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
