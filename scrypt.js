let userChoice = prompt("Odaberi redni broj algoritma koji zelis izvrsiti\n\n"
    + " 1 \u25B8 Sentence reverse\n\n"
    + " 2 \u25B8 Max letters\n\n"
    + " 3 \u25B8 Capitalize\n\n"
    + " 4 \u25B8 Word reverse\n\n"
    + " KRAJ \u25B8 Kraj programa");
let sentence = prompt("Unesite tekst za algoritam", "Unesi recenicu");

let reverseSentence = reverseString(sentence).join("");
console.log(reverseSentence);

let maxLetter = getMaxLetter(sentence);
console.log(maxLetter);

let capitaliseSentence = capitaliseWords(sentence);
console.log(capitaliseSentence);

let wordReverse = reverseOnlyWords(sentence);
console.log(wordReverse);


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
        reversedString.push(reverseString(word).join(""))
    }

    return reversedString.join(" ");
}