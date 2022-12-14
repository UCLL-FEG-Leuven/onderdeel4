let willekeurigGetal; // Hierin zal de startSpel() functie een willekeurig getal plaatsen.
let aantalBeurten; // Hierin zal de startSpel() functie een 0 zetten. Bij het gokken zal dit telkens met 1 verhoogd worden.

// Deze code zorgt voor het ophalen van de DOM elementen. 
// Aangezien de DOM niet wijzigt kan er gebruik worden gemaakt van 'const'.
const getalInput = document.getElementById("getal");
const resultaatParagraph = document.getElementById("resultaat");
const spelFormulier = document.querySelector("form");

// Deze code onderschept 'submit' events van de form (bijvoorbeeld als je op Enter drukt of als je op de submit button klikt)
spelFormulier.addEventListener("submit", (e) => {
    // Dit zorgt ervoor dat het standaard gedrag van de browser bij een submit wordt uigeschakeld (= refresh van de pagina) 
    // Wij zorgen voor de afhandeling van dit event!
    e.preventDefault();

    // Heeft de speler juist gegokt?
    let gokResultaat = ikDoeEenGok(getalInput.value);
    switch (gokResultaat) {
        case -1:
            resultaatParagraph.innerText = "Hoger!";
            break;
        case 0:
            resultaatParagraph.innerText = `Je hebt het getal in ${aantalBeurten} beurten geraden.`;
            break;
        case 1:
            resultaatParagraph.innerText = "Lager!";
            break;
    }
});

// Het spel kan starten!
startSpel();

/*
 * Hieronder staat de 'logica' van het spel. In principe zou je dat in een apart bestand kunnen steken, of beter nog: in een class.
 * Maar voor deze eerste oefening gaan we nog geen classes gebruiken.
 * Bemerk ook dat de logica van het spel geen gebruik maakt van de DOM (vb. geen getElementById).
 * Op die manier heeft onderstaande code maar één verantwoordelijkheid en is die bijvoorbeeld herbruikbaar.
 * */

// Deze functie start een nieuw spel.
// Dat houdt in dat de computer een willekeurig getal kiest en dat het aantal beurten (terug) op 0 wordt gezet.
function startSpel() {
    willekeurigGetal = kiesEenWillekeurigGetal();
    aantalBeurten = 0;
}

// Deze functie wordt uitgevoerd telkens de speler een getal heeft gekozen.
function ikDoeEenGok(getal) {
    aantalBeurten++;

    if (getal < willekeurigGetal) {
        return -1; // te laag
    } else if (getal > willekeurigGetal) {
        return 1; // te hoog
    } else {
        return 0; // juist!
    }
}

function kiesEenWillekeurigGetal() {
    // De drie onderstaande lijnen werden geschreven om duidelijk te maken wat er moet gebeuren om 
    // met Math.random willekeurige natuurlijk getallen te genereren.
    // in principe zou dit ook in één lijn kunnen: return Math.round(Math.random() * 100);
    let willekeurigKommagetalTussen0en1 = Math.random(); // [0, 1[ (een kommagetal tussen 0 en 1, inclusief 0, exclusief 1)
    let willekeurigKommagetalTussen0en100 = willekeurigKommagetalTussen0en1 * 100; // [0, 100[
    let willekeurigNatuurlijkgetalTussen0en100 = Math.round(willekeurigKommagetalTussen0en100); // [0,1,2,...,100] (100 kan er ook in zitten want 99.601 zal bijvoorbeeld afgerond worden naar 100)

    return willekeurigNatuurlijkgetalTussen0en100;
}