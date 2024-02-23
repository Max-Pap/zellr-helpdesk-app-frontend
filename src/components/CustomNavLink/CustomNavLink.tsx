import React from "react";
import "./CustomNavLink.scss";
import { NavLink } from "react-router-dom";
import cn from "classnames";

type Props = {
  title: string;
  currentView?: string;
  viewToSet: string;
  changeViewAction: (viewToSet: string) => void;
  activeImg: string;
  inActiveImg: string;
};

export const CustomNavLink: React.FC<Props> = ({
  title,
  currentView,
  viewToSet,
  changeViewAction,
  activeImg,
  inActiveImg,
}) => (
  <NavLink
    className={cn("button", {
      "button--active": currentView === viewToSet,
    })}
    onClick={() => changeViewAction(viewToSet)}
    to={`/${viewToSet}`}
  >
    <img
      src={currentView === viewToSet ? activeImg : inActiveImg}
      alt=""
      className="button__icon"
    />
    <p
      className={cn("button__label", {
        "button__label--active": currentView === viewToSet,
      })}
    >
      {title}
    </p>
  </NavLink>
);
