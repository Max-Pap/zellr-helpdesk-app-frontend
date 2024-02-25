import React from "react";
import "./CustomNavLink.scss";
import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";

type Props = {
  title: string;
  viewToSet: string;
  activeImg: string;
  inActiveImg: string;
};

export const CustomNavLink: React.FC<Props> = ({
  title,
  viewToSet,
  activeImg,
  inActiveImg,
}) => {
  const location = useLocation();
  
  return (
    <NavLink
      className={cn("button", {
        "button--active": location.pathname === viewToSet,
      })}
      to={viewToSet}
    >
      <img
        src={location.pathname === viewToSet ? activeImg : inActiveImg}
        alt=""
        className="button__icon"
      />
      <p
        className={cn("button__label", {
          "button__label--active": location.pathname === viewToSet,
        })}
      >
        {title}
      </p>
    </NavLink>
  );
};
