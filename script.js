const poemTextElement = document.querySelector('.poem-text');

const poemLines = [
    "In de tuin van vreugde,",
    "Groeit blijdschap snel in aarde",
    "Een cadeau vol grondstoffen,",
    "Voor toegevoegde waarde.",
    "",
    "Een schop in de juiste richting,",
    "Voor de tuinliefhebber, zeker waar.",
    "Wordt elk zaadje geplant,",
    "Met een liefdevol gebaar.",
    "",
    "Een gieter die zijn straal eens verliest,",
    "Een hark die van z'n stokje gaat.",
    "Handen uit de mouwen steken,",
    "Daarvoor is het nooit te laat.",
    "",
    "Op deze trouwerij, geheel rustiek",
    "Waar elegantie de boventoon voert,",
    "Zorgt een aardig kadootje voor paniek,",
    "Wanneer deze een jurk of pak beroert:",
    "",
    "Dus het kado dan maar wat later",
    "Hierbij dan slechts een wijs.",
    "Straks zonneschijn en water,",
    "Nu eerst dan jullie huwelijksreis",
    "",
    "Graaf in de humor,",
    "In de grond van ons bestaan,",
    "Dit geschenk zal altijd,",
    "In goede aarde staan.",
    "","","","","","","",
];

function typeLine(line, callback) {
    let index = 0;
    const typingInterval = setInterval(() => {
        if (index < line.length) {
            poemTextElement.innerHTML += line[index];
            index++;
        } else {
            poemTextElement.innerHTML += "<br/>";
            clearInterval(typingInterval);
            setTimeout(callback, 10);
        }
    }, 100);
}

function populatePoemText() {
    let lineIndex = 0;

    function nextLine() {
        if (lineIndex < poemLines.length) {
            typeLine(poemLines[lineIndex], nextLine);
            lineIndex++;
        }
    }

    nextLine();
}

populatePoemText()
