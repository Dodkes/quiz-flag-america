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

interface Option {
    option1: string;
    option2: string;
    option3: string;
    correct: string;
    img: string;
}

export const data: Option[] = [
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