import { ReactNode } from "react";
import { useState } from "react";

export const CourseGoal = ({
  id,
  title,
  description,
  onDelete,
}: {
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}) => {
  //po propsie jest {}, bo typujemy propsa jako obiekt z danymi wartosciami (tak samo jak w myType np)

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => onDelete(id)}>Delete Goal</button>
    </div>
  );
};

//=================================================================================================================

type CourseGoalTwoType = {
  title: string;
  description: string;
  children: ReactNode; //props ma wbudowany obiekt children??, children prop, wen=wnatrz komponentu w app.tsx/// czy treact node to specjalny typ dla danych wewnatrz komponentu w app.tsx?
  // type CourseGoalTwo = PropsWithChildren<title: string, description: string> cos takiego jeszce bylo, ktory leiej uzywac, czy musze sie na tym skupiac
  // jesli robię funkcję bez slowa function tylko w formie strazlkowej przypisujac do stalej export const CourseGoalTwo: FC <CourseGoalTwoProps> () => {}, czy w danym przykladzie dać FC, bo nie określamy typu funkcji, tylko typ propsow?, czy w tym przypadku między <> podaje się tylko typ propsa?
};

//==================================================================================================================
export const CourseGoalThree = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>DELETE</button>
    </article>
  );
};

// export const CourseGoal = (props: { title: string; description: string }) => {
//   //po propsie jest {}, bo typujemy propsa jako obiekt z danymi wartosciami (tak samo jak w myType np)

//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//       <button>Delete Goal</button>
//     </div>
//   );
// };
