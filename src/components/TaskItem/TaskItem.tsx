import "./TaskItem.scss";

export const TaskItem: React.FC = () => {
  const handleAlert = () => {
    alert("first alert");
  };

  const anotherAlert = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    alert("second alert");
  };

  const thirdAlert = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    alert("third alert");
  };

  return (
    <tr className="taskItem" onClick={handleAlert}>
      <td className="taskItem__cell taskItem__title">Test title</td>
      <td className="taskItem__cell">Test assigned to</td>
      <td className="taskItem__cell">Test Tags</td>
      <td className="taskItem__cell">Test Created</td>
      <td className="taskItem__cell">Test Acepted</td>
      <td className="taskItem__cell">Test Estimation</td>
      <td className="taskItem__cell">Test Estimated completion</td>
      <td className="taskItem__cell">
        <div className="taskItem__priority">
          <button
            className="taskItem__priorityButton taskItem__priorityButton--up"
            onClick={anotherAlert}
          />
          <button
            className="taskItem__priorityButton taskItem__priorityButton--down"
            onClick={thirdAlert}
          />
        </div>
      </td>
    </tr>
  );
};
