import { TaskItem } from "../TaskItem/TaskItem";
import "./TaskTable.scss";

export const TaskTable: React.FC = () => {
  return (
    <div className="block">
      <table className="taskTable">
        <thead className="taskTable__head">
          <tr className="taskTable__headRow">
            <td className="taskTable__cell taskTable__title">Title</td>
            <td className="taskTable__cell">Assigned to</td>
            <td className="taskTable__cell">Tags</td>
            <td className="taskTable__cell">Created</td>
            <td className="taskTable__cell">Acepted</td>
            <td className="taskTable__cell">Estimation</td>
            <td className="taskTable__cell">Estimated completion</td>
            <td className="taskTable__cell"></td>
          </tr>
        </thead>

        <tbody className="taskTable__body">
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
          <TaskItem />
        </tbody>
      </table>
    </div>
  );
};
