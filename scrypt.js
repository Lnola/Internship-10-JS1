let userChoice;
let sentence = "";
let selection=["1","2","3","4","1.","2.","3.","4."]
do {
    userChoice = prompt("Odaberi redni broj algoritma koji zelis izvrsiti\n\n"
        + " 1 \u25B8 Sentence reverse\n\n"
        + " 2 \u25B8 Max letters\n\n"
        + " 3 \u25B8 Capitalize\n\n"
        + " 4 \u25B8 Word reverse\n\n"
        + " KRAJ \u25B8 Kraj programa");

    if (userChoice !== null && userChoice !== "KRAJ" && userChoice !== "kraj" && userChoice !== "Kraj" && userChoice !== "" && selection.includes(userChoice)) {
        sentence = prompt("Unesite tekst za algoritam", "Unesi recenicu");
        if (sentence === undefined || sentence === "" || sentence === null) {
            alert("Moras unjeti recenicu")
            console.log(sentence);
        }
    }

    switch (userChoice) {
        case "1" || "1.":
            let reverseSentence = reverseString(sentence).join("");
            alert(reverseSentence);
            break;
        case "2" || "2.":
            let maxLetter = getMaxLetter(sentence);
            alert("Slovo " + maxLetter.letter + " pojavljuje se " + maxLetter.numberOfRepetitions + " puta");
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
            if (confirm("Zelis li prekinuti program?"))
                userChoice = null;
            break;
        case null:
            break;
        default:
            alert("Unesi redni broj algoritma za nastavak ili rijec Kraj za izlazak");
    }

} while (userChoice !== null)


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