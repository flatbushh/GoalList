import { FormEvent } from "react";

export const NewGoal = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text"></input>
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text"></input>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};
