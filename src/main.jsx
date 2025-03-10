import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Homepage from "./routes/Homepage.jsx";
import PostListPage from "./routes/PostListPage.jsx";
import Write from "./routes/WritePage.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import Register from "./routes/RegisterPage.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:(
      <Homepage />
    )
  },
  {
    path: "/posts",
    element:(
      <PostListPage />
    )
  },
  {
    path: "/:slug",
    element:(
      <SinglePostPage/>
    )
  },{
    path: "/write",
    element:(
      <Write/>
    )
  },
  {
    path: "/login",
    element:(
      <LoginPage/>
    )
  },
  {
    path: "/register",
    element:(
      <Register/>
    )
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
