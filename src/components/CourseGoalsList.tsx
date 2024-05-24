import { CourseGoal } from "./CourseGoals";
import { CourseGoalType } from "../App";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

export const CourseGoalsList = ({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) => {
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
                onDelete={onDeleteGoal}
              />
            </li>
          </div>
        );
      })}
    </ul>
  );
};
