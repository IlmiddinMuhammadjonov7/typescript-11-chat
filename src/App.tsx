import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chats from "./pages/Chats";
import Login from "./pages/Login";
import { CssBaseline } from "@mui/material";

const router = createBrowserRouter([
  { path: "/", element: <Chats /> },
  { path: "/login", element: <Login /> },
]);

const App = () => {
  return (
    <div>
      <CssBaseline />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
