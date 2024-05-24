import React, { ReactNode, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CourseGoal } from "./components/CourseGoals";
import beetle from "./img/beetle.jpeg";
import { Header } from "./components/Header";
import { CourseGoalTwo, CourseGoalThree } from "./components/Header";
import { CourseGoalsList } from "./components/CourseGoalsList";

export type CourseGoalType = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      //if my usestate currentstate depends on the old state
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: "Hardcoded title",
        description: "Hardcoded description",
      };
      return [...prevGoals, newGoal]; //updated state, array of goals in this case
    });
  };

  const handleDeleteGoal = (id: number) => {
    //id of the goal that should be deleted
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id)); // code that removes goal by id given in the paramater
    //generate new array from an existing array jeśli warunek to true
  };

  return (
    <div className="App">
      <CourseGoalsList goals={goals} /> {/* props = state*/}
      <button onClick={handleAddGoal}>Add Goal</button>
      {/* <Header image={{ src: beetle, alt: "just beetle" }}>
        <h1>My course goals</h1>
      </Header>

      <CourseGoalTwo title="Learning React + TS" description="description">
        <p>CHILDREN PROP</p>
      </CourseGoalTwo>

      <CourseGoalThree title="Learning React + TS" description="description" /> */}
    </div>
  );
}

export default App;
