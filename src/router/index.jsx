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
        path: "article",
        element: <ArticlePage />,
      },
      {
        path: "accommodation",
        lazy: () =>
          import("../pages/Partners/Accommodation/AccommodationView.jsx"),
      },
      {
        path: "companies",
        lazy: () => import("../pages/Partners/Companies/CompaniesView.jsx"),
      },
      {
        path: "projects",
        lazy: () => import("../pages/ProjectsPage/ProjectsPage.jsx"),
      },

      {
        path: "restaurants",
        lazy: () => import("../pages/Partners/Restaurants/RestaurantsView.jsx"),
      },
    ],
  },

  // --- Admin Layout ---
  {
    path: "/admin",
    lazy: () => import("../pages/adminLayout.jsx"),
    children: [
      {
        index: true,
        lazy: () => import("../pages/AdminPanel/PanelView/PanelView.jsx"),
      },
      {
        path: "login",
        lazy: () => import("../pages/AdminPanel/LoginView/LoginView.jsx"),
      },
    ],
  },
]);
