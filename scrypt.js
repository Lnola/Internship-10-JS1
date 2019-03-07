let userChoice;
let sentence = "";
let selection = ["1", "2", "3", "4", "1.", "2.", "3.", "4."];
do {
  userChoice = prompt(
    "Odaberi redni broj algoritma koji zelis izvrsiti\n\n" +
      " 1 \u25B8 Sentence reverse\n\n" +
      " 2 \u25B8 Max letters\n\n" +
      " 3 \u25B8 Capitalize\n\n" +
      " 4 \u25B8 Word reverse\n\n" +
      " KRAJ \u25B8 Kraj programa"
  );

  if (
    userChoice !== null &&
    userChoice !== "KRAJ" &&
    userChoice !== "kraj" &&
    userChoice !== "Kraj" &&
    userChoice !== "" &&
    selection.includes(userChoice)
  ) {
    sentence = prompt("Unesite tekst za algoritam", "Unesi recenicu");
    if (sentence === undefined || sentence === "" || sentence === null) {
      alert("Moras unjeti recenicu");
    }
  }

  switch (userChoice) {
    case "1" || "1.":
      let reverseSentence = reverseString(sentence).join("");
      alert(reverseSentence);
      break;
    case "2" || "2.":
      let maxLetter = getMaxLetter(sentence);
      alert(
        "Slovo " +
          maxLetter.letter +
          " pojavljuje se " +
          maxLetter.numberOfRepetitions +
          " puta"
      );
      break;
    case "3" || "3.":
      let capitaliseSentence = capitaliseWords(sentence);
      alert(capitaliseSentence);
      break;
    case "4" || "4.":
      let wordReverse = reverseOnlyWords(sentence);
      alert(wordReverse);
      break;
    case "kraj" || "KRAJ" || "Kraj":
      if (confirm("Zelis li prekinuti program?")) userChoice = null;
      break;
    case null:
      break;
    default:
      alert("Unesi redni broj algoritma za nastavak ili rijec Kraj za izlazak");
  }
} while (userChoice !== null);

// FUNCTIONS

function reverseString(stringToSort) {
  let reverseString = [];
  for (let i = stringToSort.length - 1; i > -1; i--) {
    reverseString.push(stringToSort[i]);
  }

  return reverseString;
}

function getMaxLetter(stringToCheck) {
  let sortedString = reverseString(stringToCheck).sort();

  let maxLetter = {
    letter: sortedString[0],
    numberOfRepetitions: 1
  };

  let letterCounter = 1;
  for (let i = 0; i < sortedString.length; i++) {
    if (sortedString[i] === sortedString[i + 1]) {
      letterCounter++;
    } else {
      letterCounter = 1;
    }
    if (letterCounter > maxLetter.numberOfRepetitions) {
      maxLetter.letter = sortedString[i];
      maxLetter.numberOfRepetitions = letterCounter;
    }
  }

  return maxLetter;
}

function capitaliseWords(stringToCapitalise) {
  let splitString = stringToCapitalise.split(" ");
  let formatedSentence = "";

  for (let word of splitString) {
    formatedSentence += word[0].toUpperCase();
    for (let i = 1; i < word.length; i++) {
      formatedSentence += word[i].toLowerCase();
    }
    formatedSentence += " ";
  }

  return formatedSentence;
}

function reverseOnlyWords(stringToReverse) {
  stringToReverse = stringToReverse.split(" ");
  let reversedString = [];

  for (let word of stringToReverse) {
    reversedString.push(reverseString(word).join(""));
  }

  return reversedString.join(" ");
}

// OBJEKTNI

let array = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  }
];

let arraySortedByHeight = array.sort(compareHeights);
console.log("Likovi sortirani po visini: ",arraySortedByHeight);
console.log("Srednja masa: ",getAverageHeight());

function compareHeights(a, b) {
  let heightA = a.height;
  let heightB = b.height;

  let status = 0;
  if (heightA > heightB) {
    status = 1;
  } else if (heightB > heightA) {
    status = -1;
  }

  return status;
}

function getAverageHeight() {
  summ = 0;
  for (let character of array) {
    summ += character.mass;
  }

  return summ / array.length;
}
