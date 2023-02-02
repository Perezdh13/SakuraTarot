import CardGroup from "./CardGroup";
import MainPage from "./MainPage"
import '../css/App.css';
import useState from "react"
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />
    },
    {
      path:"/prediction",
      element: <><h1>Haz click en las cartas</h1><CardGroup /></>
    }])

  return (
      <div className="main">
        <RouterProvider router={router} />
      </div>

  );
}

export default App;
