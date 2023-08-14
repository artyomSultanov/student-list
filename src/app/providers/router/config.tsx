import { StudentsPage } from "pages/StudentsPage";
import { RouteObject } from "react-router-dom";
import { MainLayout } from "shared/ui/layouts/MainLayout/ui";

import { RoutePaths } from "./constants";

// Можно по-разному упростить процесс добавления новых роутов, но в рамках тестового оставлю такой
export const APP_ROUTES_CONFIG: RouteObject[] = [
  {
    path: RoutePaths.ROOT,
    element: <MainLayout />,
    children: [
      {
        path: RoutePaths.STUDENTS,
        element: <StudentsPage />,
      },
    ],
  },
];
