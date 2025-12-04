import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("../pages/Layout"),
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
    ],
  },
]);
