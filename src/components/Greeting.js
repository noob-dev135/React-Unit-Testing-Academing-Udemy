import { useState } from "react";

export default function Greeting() {
  const [isTextChanged, setIsTextChanged] = useState(false);
  const changeTextHandler = () => setIsTextChanged(true);
  return (
    <div>
      <h1>Hello World</h1>
      { isTextChanged ? <p>Text Changed!</p> : <p>Its good to see you!</p> }
      <button onClick={changeTextHandler}>Change text</button>
    </div>
  );
}