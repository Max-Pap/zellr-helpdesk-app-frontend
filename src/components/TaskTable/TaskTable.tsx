import { TaskItem } from "../TaskItem/TaskItem";
import "./TaskTable.scss";

export const TaskTable: React.FC = () => {
  return (
    <section className="taskTableContainer">
      <table className="taskTable">
        <thead className="taskTable__head">
          <tr className="taskTable__headRow">
            <th className="taskTable__cell taskTable__title">Title</th>
            <th className="taskTable__cell">Assigned to</th>
            <th className="taskTable__cell">Tags</th>
            <th className="taskTable__cell">Created</th>
            <th className="taskTable__cell">Acepted</th>
            <th className="taskTable__cell">Estimation</th>
            <th className="taskTable__cell">Estimated completion</th>
            <th className="taskTable__cell"></th>
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
          <TaskItem />
          <TaskItem />
          <TaskItem />

        </tbody>
      </table>
    </section>
  );
};
