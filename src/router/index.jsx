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
      {
        path: "contact",
        lazy: () => import("../pages/ContactPage/ContactView"),
      },
      {
        path: "faq",
        lazy: () => import("../pages/FAQPage/FAQView"),
      }
    ],
  },
]);
