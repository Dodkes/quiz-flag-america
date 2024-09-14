import { data } from "./data";

export default function Game() {
  function choice(option: string, correct: string) {
    console.log(option);
    console.log(correct);
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
            <button onClick={() => choice(item.option1, item.correct)}>
              {item.option1}
            </button>
            <button onClick={() => choice(item.option2, item.correct)}>
              {item.option2}
            </button>
            <button onClick={() => choice(item.option3, item.correct)}>
              {item.option3}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
