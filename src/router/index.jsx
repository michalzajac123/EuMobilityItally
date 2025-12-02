import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("../pages/Layout"),
    children: [
      {
        index: true,
        lazy: () => import("../pages/HomePage/Home"),
      },
    ],
  },
]);
