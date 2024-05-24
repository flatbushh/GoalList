import { CourseGoal } from "./CourseGoals";
import { CourseGoalType } from "../App";

type CourseGoalListProps = {
  goals: CourseGoalType[];
};

export const CourseGoalsList = ({ goals }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <div>
            <li key={goal.id}>
              <CourseGoal
                id={goal.id}
                title={goal.title}
                description={goal.description}
              />
            </li>
          </div>
        );
      })}
    </ul>
  );
};
