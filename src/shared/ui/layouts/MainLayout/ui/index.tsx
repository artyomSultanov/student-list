import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../../../Header";

export const MainLayout: FC = () => {
  return (
    <div className="main-layout">
      <div className="main-layout__header">
        <Header />
      </div>
      <body className="main-layout__body">
        <Outlet />
      </body>
    </div>
  );
};
