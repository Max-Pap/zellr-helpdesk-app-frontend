import React from "react";
import "./CustomInput.scss";
import cn from "classnames";

type Props = {
  title?: string;
  value: string;
  setAction: (value: string) => void;
  clearAction: () => void;
  errorNoValue?: boolean;
  errorShortValue?: string;
};

export const CustomInput: React.FC<Props> = ({
  title,
  value,
  setAction,
  clearAction,
  errorNoValue,
  errorShortValue,
}) => (
  <div className="customInput">
    <p className="customInput__title">{title}</p>

    <div className="customInput__input">
      <input
        type="text"
        value={value}
        onChange={(e) => setAction(e.target.value)}
        className={cn("customInput__field", {
          "customInput__field--error": errorNoValue,
        })}
      />

      {value !== "" && (
        <button className="customInput__clear" onClick={clearAction} />
      )}

      {value !== "" && errorShortValue && (
        <p className="customInput__warning">{errorShortValue}</p>
      )}
    </div>
  </div>
);
