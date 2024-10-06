import { data, answers } from "./data";
import { useEffect, useState } from "react";
import cx from "classnames";

export default function Game() {
  const [reveal, setReveal] = useState<boolean>(false);
  const [time, setTime] = useState<number>(60);
  const [score, setScore] = useState<number>(0);
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
    for (const i in answers) {
      if (answers[i].answer === answers[i].correct) {
        setScore((prevState) => prevState + 1);
      }
    }
    setReveal(true);
  }

  useEffect(() => {
    setTimeout(() => {
      if (time === 0) return evaluate();
      !reveal && setTime(time - 1);
    }, 1000);
  }, [time]);

  return (
    <div>
      <div className="time">
        {reveal ? `Your score: ${score}` : `Time left: ${time} s`}
      </div>

      {data.map((item, index) => (
        <div className="container" key={index}>
          <img src={item.img} width="300" />
          <div>
            <button
              onClick={() => choice(index, item.option1)}
              className={cx(
                selectedOptions[index] === item.option1 ? "active" : "",
                item.option1 === item.correct && reveal && "correct"
              )}
            >
              {item.option1}
            </button>
            <button
              onClick={() => choice(index, item.option2)}
              className={cx(
                selectedOptions[index] === item.option2 ? "active" : "",
                item.option2 === item.correct && reveal && "correct"
              )}
            >
              {item.option2}
            </button>
            <button
              onClick={() => choice(index, item.option3)}
              className={cx(
                selectedOptions[index] === item.option3 ? "active" : "",
                item.option3 === item.correct && reveal && "correct"
              )}
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
