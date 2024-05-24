import { FC, ReactNode, useState } from "react";

type PropType = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export const Header = ({ image, children }: PropType) => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
};

export const Header2: FC<PropType> = ({ image, children }) => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
};

// export const Header:FC<PropType> = ({ image, children }) => {
//   return (
//     <header>
//       <img src={image.src} alt={image.alt} />
//       {children}
//     </header>
//   );
// };
// to jest inna forma zapisu tego co na gorze- efekt jest ten sam

//{ src: string; alt: string };
//children: ReactNode;

// skopiowane z innego pliku zeby miec rozpisana destrukturyzacje propsa z przypisaniem typu

type CourseGs = {
  name: string;
  description: string;
  id: number;
};
export const CourseGoal = (props: { title: string; description: string }) => {
  //po propsie jest {}, bo typujemy propsa jako obiekt z danymi wartosciami (tak samo jak w myType np)

  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </article>
  );
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

//=================================================================================================================

type CourseGoalTwoType = {
  title: string;
  description: string;
  children: ReactNode; //props ma wbudowany obiekt children??, children prop, wen=wnatrz komponentu w app.tsx/// czy treact node to specjalny typ dla danych wewnatrz komponentu w app.tsx?
  // type CourseGoalTwo = PropsWithChildren<title: string, description: string> cos takiego jeszce bylo, ktory leiej uzywac, czy musze sie na tym skupiac
  // jesli robię funkcję bez slowa function tylko w formie strazlkowej przypisujac do stalej export const CourseGoalTwo: FC <CourseGoalTwoProps> () => {}, czy w danym przykladzie dać FC, bo nie określamy typu funkcji, tylko typ propsow?, czy w tym przypadku między <> podaje się tylko typ propsa?
};

export const CourseGoalTwo = ({
  title,
  description,
  children,
}: CourseGoalTwoType) => {
  //z destrukturyzacją propsa => zeby nie musiec sie odwolywac po kropce
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </div>
      <button>DELETE</button>
    </article>
  );
};
