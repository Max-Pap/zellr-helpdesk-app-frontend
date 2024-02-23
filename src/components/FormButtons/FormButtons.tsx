import React from "react";
import "./FormButtons.scss";

type Props = {
  redTitle?: string;
  redAction: () => void;
  greenTitle: string;
  greenAction?: () => void;
};

export const FormButtons: React.FC<Props> = ({
  redTitle,
  redAction,
  greenTitle,
  greenAction,
}) => (
  <div className="buttons">
    <button className="buttons__button buttons__red" onClick={redAction}>
      {redTitle}
    </button>

    <button className="buttons__button buttons__green" onClick={greenAction}>
      {greenTitle}
    </button>
  </div>
);
