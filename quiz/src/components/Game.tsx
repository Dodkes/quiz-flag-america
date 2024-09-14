import { data, answers } from "./data";
import { useState } from "react";

export default function Game() {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: string;
  }>({});

  function choice(index: number, option: string) {
    answers[index].answer = option;

    setSelectedOptions((prevState) => ({
      ...prevState,
      [index]: option,
    }));
  }

  function evaluate() {
    let score = 0;
    for (const i in answers) {
      if (answers[i].answer === answers[i].correct) {
        score++;
      }
    }
    console.log(score);
  }

  return (
    <div>
      <div className="time">
        <p>
          Time left: <span id="timeCount"></span> s
        </p>
      </div>

      {data.map((item, index) => (
        <div className="container" key={index}>
          <img src={item.img} width="300" />
          <div>
            <button
              onClick={() => choice(index, item.option1)}
              className={
                selectedOptions[index] === item.option1 ? "active" : ""
              }
            >
              {item.option1}
            </button>
            <button
              onClick={() => choice(index, item.option2)}
              className={
                selectedOptions[index] === item.option2 ? "active" : ""
              }
            >
              {item.option2}
            </button>
            <button
              onClick={() => choice(index, item.option3)}
              className={
                selectedOptions[index] === item.option3 ? "active" : ""
              }
            >
              {item.option3}
            </button>
          </div>
        </div>
      ))}
      <button onClick={() => evaluate()} className="evaluate-button">
        Evaluate test !
      </button>
    </div>
  );
}
