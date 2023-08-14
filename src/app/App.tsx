import "./styles/index.scss";

import { FC } from "react";

import { AppRouter } from "./providers/router";

export const App: FC = () => {
  return <AppRouter />;
};
