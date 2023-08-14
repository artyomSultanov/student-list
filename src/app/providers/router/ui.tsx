import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { APP_ROUTES_CONFIG } from "./config";

export const AppRouter: FC = () => {
  const router = createBrowserRouter(APP_ROUTES_CONFIG);

  return <RouterProvider router={router} />;
};
