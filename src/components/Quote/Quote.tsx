import "./Quote.scss";
import { Task } from "../../types/Task";
import { FormButtons } from "../FormButtons/FormButtons";

type Props = {
  quote: Task;
};

export const Quote: React.FC<Props> = ({
  quote: { id, title, duration, fee, estimatedCompletion },
}) => (
  <div className="quote">
    <p className="quote__heading">Quote</p>

    <p className="quote__description">
      {`You have received a quote. Please review it carefully. \n  \n If you accept the quote, the task will be automatically added to our queue and the fee will be included in your next invoice.`}
    </p>

    <section className="quote__body">
      <div className="quote__line">
        <p className="quote__title">ID</p>
        <p className="quote__content">{`#${id}`}</p>
      </div>

      <div className="quote__line">
        <p className="quote__title">Task</p>
        <p className="quote__content">{title}</p>
      </div>

      <div className="quote__line">
        <p className="quote__title">Duration</p>
        <p className="quote__content">{duration}</p>
      </div>

      <div className="quote__line">
        <p className="quote__title">Fee</p>
        <p className="quote__content">{fee}</p>
      </div>

      <div className="quote__line">
        <p className="quote__title">ETA</p>
        <p className="quote__content">{estimatedCompletion}</p>
      </div>
    </section>

    <FormButtons
      redTitle="Decline"
      redAction={() => alert('Quote declined')}
      greenTitle="Accept"
      greenAction={() => alert('Quote accepted')}
    />
  </div>
);
