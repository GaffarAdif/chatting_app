// src/router.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import ChatPage from "../pages/ChatPage";
import NotFoundPage from "../pages/NotFoundPage"; // Optional

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> {/* Default route */}
          <Route path="chat" element={<ChatPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Optional for handling 404 */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
