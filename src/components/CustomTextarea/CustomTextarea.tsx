import React from "react";
import "./CustomTextarea.scss";
import cn from "classnames";

type Props = {
  title?: string;
  value: string;
  setAction: (value: string) => void;
  clearAction: () => void;
  errorNoValue?: boolean;
  errorShortValue?: string;
};

export const CustomTextarea: React.FC<Props> = ({
  title,
  value,
  setAction,
  clearAction,
  errorNoValue,
  errorShortValue,
}) => (
  <div className="customTextarea">
    <p className="customTextarea__title">{title}</p>
    <div className="customTextarea__textarea">
      <textarea
        value={value}
        onChange={(e) => setAction(e.target.value)}
        className={cn("customTextarea__field", {
          "customTextarea__field--error": errorNoValue,
        })}
      />

      {value !== "" && (
        <button className="customTextarea__clear" onClick={clearAction} />
      )}

      {value !== "" && errorShortValue && (
        <p className="customTextarea__warning">{errorShortValue}</p>
      )}
    </div>
  </div>
);
