import { createBrowserRouter } from "react-router-dom";
import ArticlePage from "../pages/ArticlePage/ArticlePage";

export const router = createBrowserRouter([
  // --- Main Layout ---
  {
    path: "/",
    lazy: () => import("../pages/mainLayout.jsx"),
    children: [
      {
        index: true,
        lazy: () => import("../pages/HomePage/Home.jsx"),
      },
      {
        path: "contact",
        lazy: () => import("../pages/ContactPage/ContactView.jsx"),
      },
      {
        path: "faq",
        lazy: () => import("../pages/FAQPage/FAQView.jsx"),
      },
      {
        path: "accommodation",
        lazy: () => import("../pages/Accommodation/AccommodationView.jsx"),
      },
      {
        path: "article",
        element: <ArticlePage />,
      },
    ],
  },

  // --- Admin Layout (osobny root!) ---
  {
    path: "/admin",
    lazy: () => import("../pages/adminLayout.jsx"),
    children: [
      {
        index: true,
        lazy: () => import("../pages/AdminPanel/PanelView.jsx"),
      },
      {
        path: "login",
        lazy: () => import("../pages/AdminPanel/LoginView.jsx"),
      },
    ],
  },
]);
