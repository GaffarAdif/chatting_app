// src/App.jsx
import React from "react";
import AppRouter from "./route/router"; // Adjust the path as necessary
import { AppProvider } from "./context/AppContext"; // Import the AppProvider



function App() {
  return (
    <AppProvider>
      <div className="App">
        <AppRouter />
      </div>
    </AppProvider>
  );
}

export default App;
