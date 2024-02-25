import React from "react";
import "./ActionButton.scss";

type Props = {
  action: () => void;
  actionName: string;
  imgSrc: string;
};

export const ActionButton: React.FC<Props> = ({
  action,
  actionName,
  imgSrc,
}) => (
  <button className="actionButton" onClick={action}>
    <img
      src={imgSrc}
      alt={actionName}
      className="actionButton__icon"
    />

    <p className="actionButton__label">{actionName}</p>
  </button>
);
