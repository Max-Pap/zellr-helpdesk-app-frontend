import React from "react";
import "./CustomCheckbox.scss";

type Props = {
  title?: string;
  value: boolean;
  setAction: () => void;
};

export const CustomCheckbox: React.FC<Props> = ({
  title,
  value,
  setAction,
}) => (
  <div>
    <label className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        checked={value}
        onChange={setAction}
      />
      <span className="checkbox__label">{title}</span>
    </label>
  </div>
);
