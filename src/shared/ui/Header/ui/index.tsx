import { FC } from "react";

import IconLogo from "../../../assets/images/svg/iconLogo.svg";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <IconLogo />
      </div>
      <div className="header__title"></div>
      <div className="header__author"></div>
    </header>
  );
};
