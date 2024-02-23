import React from "react";
import "./Modal.scss";

type Props = {
  children: JSX.Element;
};

export const Modal: React.FC<Props> = ({ children }) => (
  <div className="modal">{children}</div>
);
