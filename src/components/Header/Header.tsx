import React from "react";
import "./Header.scss";
import { Logo } from "../Logo/Logo";

export const Header: React.FC = () => (
  <div className="header">
    <div className="header__logo">
      <Logo />
    </div>
  </div>
);
