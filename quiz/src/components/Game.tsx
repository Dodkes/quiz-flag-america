import Costarica from "../assets/costarica.png";
import Brazil from "../assets/brazil.png";
import Columbia from "../assets/columbia.png";
import Peru from "../assets/peru.jpg";
import Venezuela from "../assets/venezuela.png";
import Mexico from "../assets/mexico.png";
import Uruguay from "../assets/uruguay.png";
import Chile from "../assets/chile.png";
import Honduras from "../assets/honduras.png";
import PuertoRico from "../assets/puerto-rico.jpg";

export default function Game() {
  const options = [
    {
      option1: "Chile",
      option2: "Costarica",
      option3: "Guatemala",
      correct: "Costarica",
      img: Costarica,
    },
    {
      option1: "Haiti",
      option2: "Argentina",
      option3: "Brazil",
      correct: "Brazil",
      img: Brazil,
    },
    {
      option1: "Cuba",
      option2: "Columbia",
      option3: "Bolivia",
      correct: "Columbia",
      img: Columbia,
    },
    {
      option1: "Peru",
      option2: "Puerto Rico",
      option3: "Panama",
      correct: "Peru",
      img: Peru,
    },
    {
      option1: "Uruguay",
      option2: "Guyana",
      option3: "Venezuela",
      correct: "Venezuela",
      img: Venezuela,
    },
    {
      option1: "Surinam",
      option2: "Grenada",
      option3: "Mexico",
      correct: "Mexico",
      img: Mexico,
    },
    {
      option1: "Anguilla",
      option2: "Uruguay",
      option3: "Barbado",
      correct: "Uruguay",
      img: Uruguay,
    },
    {
      option1: "Chile",
      option2: "Honduras",
      option3: "Panama",
      correct: "Chile",
      img: Chile,
    },
    {
      option1: "Aruba",
      option2: "Guatemala",
      option3: "Panama",
      correct: "Honduras",
      img: Honduras,
    },
    {
      option1: "Puerto Rico",
      option2: "Haiti",
      option3: "Paraguay",
      correct: "Puerto Rico",
      img: PuertoRico,
    },
  ];

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

      {options.map((item, index) => (
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

      {/* <div className="container">
        <img src="./assets/costarica.png" width="300" />
        <div className="buttons-container" id="costarica">
          <button id="1" className="choice(this.id)">
            Chile
          </button>
          <button id="2" className="choice(this.id)">
            Costarica
          </button>
          <button id="3" className="choice(this.id)">
            Guatemala
          </button>
        </div>
      </div> */}
    </div>
  );
}
