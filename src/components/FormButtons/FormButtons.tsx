import React from "react";
import "./FormButtons.scss";

type Props = {
  redTitle?: string;
  redAction?: () => void;
  greenTitle?: string;
  greenAction?: () => void;
};

export const FormButtons: React.FC<Props> = ({
  redTitle = "Cancel",
  redAction,
  greenTitle = "Ok",
  greenAction,
}) => (
  <div className="buttons">
    {redTitle && redAction && (
      <button className="buttons__button buttons__red" onClick={redAction}>
        {redTitle}
      </button>
    )}

    <button className="buttons__button buttons__green" onClick={greenAction}>
      {greenTitle}
    </button>
  </div>
);
