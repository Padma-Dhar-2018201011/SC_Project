(function (chrome) {

    var badWord = 'bitch';

    console.log('preparing to inject...');

    document.addEventListener('keyup', keySrokeDetection, false);
    
    //here we are detecting the input given by the user

    function keySrokeDetection(e) {
        var x = e.keyCode;

        if (x < 65 || x > 127) {
            console.log("ignoring keypress.we only care about letters..");
            return;
        }

        if (x > 90 && x < 97) {
            console.log("ignoring keypress.we only care about letters..");
            return;
        }

        var keychar = String.fromCharCode(x);

        var elName = e.target.nodeName;

        if (elName == 'INPUT' || elName == 'TEXTAREA') {
            var original = e.target.value;

            var obj = scanString(original);
            var key = obj["keyword"];
            var word = scanString(original)["vocabulary"];

            if (word.length > 0) {
                console.log('detected!');
                var highlightedWord = '[' + word.toUpperCase() + ']';
                e.target.value = original.replace(word, highlightedWord);

                setTimeout(function () {
                    alert(description[key]);
                }, 100);

            }
        } else {

            var original = e.target.textContent;

            var obj = scanString(original);
            var key = obj["keyword"];
            var word = scanString(original)["vocabulary"];

            if (word.length > 0) {
                console.log('detected!');
                var highlightedWord = '[' + word.toUpperCase() + ']';
                e.target.textContent = original.replace(word, highlightedWord);

                setTimeout(function () {
                    alert(description[key]);
                }, 100);
            }

        }
    }

    function checkForBadWord(word) {

        return badWords.filter(function (element) {
            return element["vocabulary"] === word;
        });

    }

    function scanString(str) {
        if (str.length < 4)
            return '';

        var separateWords = str.split(" ");

        var found = '';
        for (i = 0; i < separateWords.length; i++) {

            found = checkForBadWord(separateWords[i]);

            if (found.length > 0) {
                console.log('found!');
                return found[0];
            }

        }
        return found;
    }

    var badWords = [
        {
            "vocabulary": "slut",
            "offensiveness": "0",
            "keyword": "Woman"
        },
        {
            "vocabulary": "whore",
            "offensiveness": "0",
            "keyword": "Woman"
        },
        {
            "vocabulary": "muzrat",
            "offensiveness": "0",
            "keyword": "Muslim"
        },
        {
            "vocabulary": "towelhead",
            "offensiveness": "0",
            "keyword": "Muslim"
        },
        {
            "vocabulary": "abachabu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "abagima",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "abaisia",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "abazungu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "abbo",
            "offensiveness": "0.00",
            "keyword": "Aborigine"
        },
        {
            "vocabulary": "abeed",
            "offensiveness": "0.89",
            "keyword": "Black"
        },
        {
            "vocabulary": "abelungu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "abid",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "abo",
            "offensiveness": "0.00",
            "keyword": "Aborigine"
        },
        {
            "vocabulary": "af",
            "offensiveness": "0.00",
            "keyword": "African"
        },
        {
            "vocabulary": "African catfish",
            "offensiveness": "0.00",
            "keyword": "Muslim"
        },
        {
            "vocabulary": "Africoon",
            "offensiveness": "0.00",
            "keyword": "African"
        },
        {
            "vocabulary": "Afro-Saxon",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Ahab",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Ahmadiyah",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Ainu",
            "offensiveness": "0.51",
            "keyword": "NA"
        },
        {
            "vocabulary": "Ajam",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ajayee",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "akata",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "akhbaroshim",
            "offensiveness": "0.00",
            "keyword": "Muslim"
        },
        {
            "vocabulary": "alaman",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "albino",
            "offensiveness": "0.00",
            "keyword": "White"
        },
        {
            "vocabulary": "alligator bait",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "allochtoon",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "amakwerekwere",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ambattar",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ame koh",
            "offensiveness": "0.88",
            "keyword": "NA"
        },
        {
            "vocabulary": "Americoon",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "AmeriKKKan",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Ami",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "anchor baby",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ang mor",
            "offensiveness": "0.00",
            "keyword": "White"
        },
        {
            "vocabulary": "Angie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "arabush",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "aracuano",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "arapis",
            "offensiveness": "0.65",
            "keyword": "African"
        },
        {
            "vocabulary": "Argie",
            "offensiveness": "0.03",
            "keyword": "NA"
        },
        {
            "vocabulary": "Armo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Asylschmarotzer",
            "offensiveness": "1.00",
            "keyword": "Refugee"
        },
        {
            "vocabulary": "avalivavandu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "avaseeve",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "azn",
            "offensiveness": "0.00",
            "keyword": "Asian"
        },
        {
            "vocabulary": "azungu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "badugudugu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bahadur",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bai tou",
            "offensiveness": "0.00",
            "keyword": "White"
        },
        {
            "vocabulary": "baijo",
            "offensiveness": "0.72",
            "keyword": "NA"
        },
        {
            "vocabulary": "Baitola",
            "offensiveness": "0.00",
            "keyword": "Gay"
        },
        {
            "vocabulary": "bak guiy",
            "offensiveness": "0.62",
            "keyword": "White"
        },
        {
            "vocabulary": "balija",
            "offensiveness": "0.00",
            "keyword": "Muslim"
        },
        {
            "vocabulary": "baluba",
            "offensiveness": "0.00",
            "keyword": "African"
        },
        {
            "vocabulary": "baluga",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "bamboo coon",
            "offensiveness": "0.93",
            "keyword": "Chinese"
        },
        {
            "vocabulary": "banana bender",
            "offensiveness": "0.10",
            "keyword": "NA"
        },
        {
            "vocabulary": "banana lander",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Bangla",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "banjo lips",
            "offensiveness": "0.51",
            "keyword": "Black"
        },
        {
            "vocabulary": "bans and cans",
            "offensiveness": "0.13",
            "keyword": "Hispanic"
        },
        {
            "vocabulary": "basungu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Bazi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bazungu",
            "offensiveness": "0.03",
            "keyword": "NA"
        },
        {
            "vocabulary": "beach nigger",
            "offensiveness": "0.67",
            "keyword": "NA"
        },
        {
            "vocabulary": "bean dipper",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "beaner",
            "offensiveness": "0.58",
            "keyword": "Hispanic"
        },
        {
            "vocabulary": "beaner shnitzel",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "beaney",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "belegana",
            "offensiveness": "0.00",
            "keyword": "White"
        },
        {
            "vocabulary": "berberaap",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bergie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "beur",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "beurette",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bhrempti",
            "offensiveness": "0.00",
            "keyword": "Indian"
        },
        {
            "vocabulary": "biba",
            "offensiveness": "0.00",
            "keyword": "Gay"
        },
        {
            "vocabulary": "bicha",
            "offensiveness": "0.00",
            "keyword": "Gay"
        },
        {
            "vocabulary": "bichinha",
            "offensiveness": "0.00",
            "keyword": "Gay"
        },
        {
            "vocabulary": "bint",
            "offensiveness": "0.10",
            "keyword": "Woman"
        },
        {
            "vocabulary": "bitch",
            "offensiveness": "0.00",
            "keyword": "Woman"
        },
        {
        	"vocabulary": "fuck",
        	"offensiveness": "0.00",
        	"keyword": "NA"
        },
        {
            "vocabulary": "bitter clinger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bix nood",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "black Barbie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "black dago",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "blaxican",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "blockhead",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bludger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bluegum",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "boche",
            "offensiveness": "0.20",
            "keyword": "NA"
        },
        {
            "vocabulary": "boffer",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "bog hopper",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Bog Irish",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bog jumper",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bog trotter",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bogan",
            "offensiveness": "0.10",
            "keyword": "NA"
        },
        {
            "vocabulary": "bohunk",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "boiola",
            "offensiveness": "0.00",
            "keyword": "Gay"
        },
        {
            "vocabulary": "bolillo",
            "offensiveness": "0.00",
            "keyword": "White"
        },
        {
            "vocabulary": "boofer",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "boojie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "book book",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "booner",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "boong",
            "offensiveness": "0.00",
            "keyword": "Aborigine"
        },
        {
            "vocabulary": "boonga",
            "offensiveness": "0.00",
            "keyword": "Aborigine"
        },
        {
            "vocabulary": "boonie",
            "offensiveness": "0.00",
            "keyword": "Aborigine"
        },
        {
            "vocabulary": "bor",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "border bunny",
            "offensiveness": "0.00",
            "keyword": "Hispanic"
        },
        {
            "vocabulary": "border hopper",
            "offensiveness": "0.00",
            "keyword": "Hispanic"
        },
        {
            "vocabulary": "border jumper",
            "offensiveness": "0.00",
            "keyword": "Hispanic"
        },
        {
            "vocabulary": "border nigger",
            "offensiveness": "0.00",
            "keyword": "Hispanic"
        },
        {
            "vocabulary": "bosche",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "boskur",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bosyanju",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bougnoule",
            "offensiveness": "0.24",
            "keyword": "African"
        },
        {
            "vocabulary": "boxhead",
            "offensiveness": "0.89",
            "keyword": "NA"
        },
        {
            "vocabulary": "bozgor",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "brass ankle",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "buckethead",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Buddhahead",
            "offensiveness": "0.00",
            "keyword": "Asian"
        },
        {
            "vocabulary": "budos olah",
            "offensiveness": "0.58",
            "keyword": "NA"
        },
        {
            "vocabulary": "buffie",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "bug eater",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bugre",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "buk buk",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bule",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "buleh",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Bulgaroskopian",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bumblebee",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "bume",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "burrhead",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "butterhead",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "buzi",
            "offensiveness": "0.00",
            "keyword": "Gay"
        },
        {
            "vocabulary": "cab nigger",
            "offensiveness": "0.79",
            "keyword": "Indian"
        },
        {
            "vocabulary": "cabezas cuadradas",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cabezita negra",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "caboclo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "caboco",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "caco",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cacorro",
            "offensiveness": "0.00",
            "keyword": "Gay"
        },
        {
            "vocabulary": "cafuzo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "camel cowboy",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "camel fucker",
            "offensiveness": "0.74",
            "keyword": "NA"
        },
        {
            "vocabulary": "camel humper",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "camel jacker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "camel jockey",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "can eater",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "carcamano",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "carpet pilot",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "carrot snapper",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "casado",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Caublasian",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cave nigger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cefur",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cerrero",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cetnik",
            "offensiveness": "0.97",
            "keyword": "NA"
        },
        {
            "vocabulary": "chach chach",
            "offensiveness": "0.00",
            "keyword": "Jew"
        },
        {
            "vocabulary": "chakh chakh",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chalckiliyar",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chale",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "champinon",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chan koro",
            "offensiveness": "0.79",
            "keyword": "Chinese"
        },
        {
            "vocabulary": "chankoro",
            "offensiveness": "1.00",
            "keyword": "Chinese"
        },
        {
            "vocabulary": "chapat",
            "offensiveness": "0.00",
            "keyword": "Asian"
        },
        {
            "vocabulary": "chapata",
            "offensiveness": "0.00",
            "keyword": "Asian"
        },
        {
            "vocabulary": "chapeton",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chapetona",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chapin",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chapina",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chapta",
            "offensiveness": "0.00",
            "keyword": "Asian"
        },
        {
            "vocabulary": "charnega",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "charnego",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "charva",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "charver",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chav",
            "offensiveness": "0.03",
            "keyword": "NA"
        },
        {
            "vocabulary": "chee chee",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cheena",
            "offensiveness": "0.00",
            "keyword": "Chinese"
        },
        {
            "vocabulary": "cheese eating surrender monkey",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chefur",
            "offensiveness": "0.89",
            "keyword": "NA"
        },
        {
            "vocabulary": "chekwa",
            "offensiveness": "0.00",
            "keyword": "Chinese"
        },
        {
            "vocabulary": "chele",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chernozhopiy",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "cheuchter",
            "offensiveness": "0.03",
            "keyword": "NA"
        },
        {
            "vocabulary": "chi chi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chigger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Chilango",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chili shitter",
            "offensiveness": "0.00",
            "keyword": "Hispanic"
        },
        {
            "vocabulary": "Chinaman",
            "offensiveness": "0.40",
            "keyword": "NA"
        },
        {
            "vocabulary": "Chinese wetback",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Chinetoque",
            "offensiveness": "0.00",
            "keyword": "Chinese"
        },
        {
            "vocabulary": "ching chong",
            "offensiveness": "0.34",
            "keyword": "Chinese"
        },
        {
            "vocabulary": "chingeleshi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chinig",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chinja chinja",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chink a billy",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chizungu",
            "offensiveness": "0.48",
            "keyword": "NA"
        },
        {
            "vocabulary": "chleuh",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cholero",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cholo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chon",
            "offensiveness": "0.89",
            "keyword": "NA"
        },
        {
            "vocabulary": "chon koh",
            "offensiveness": "0.82",
            "keyword": "NA"
        },
        {
            "vocabulary": "chonky",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "choochter",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chorik",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chosenjin",
            "offensiveness": "0.51",
            "keyword": "NA"
        },
        {
            "vocabulary": "Christ killer",
            "offensiveness": "0.86",
            "keyword": "Jew"
        },
        {
            "vocabulary": "chuchter",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "chupta",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ciapak",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ciapaty",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Cioara",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "clamhead",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cocolo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "coolie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "coon",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "coon ass",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cotton picker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cow kisser",
            "offensiveness": "0.00",
            "keyword": "Indian"
        },
        {
            "vocabulary": "cowboy killer",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cripple",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "crucco",
            "offensiveness": "0.27",
            "keyword": "NA"
        },
        {
            "vocabulary": "culona inchiavabile",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cultuurverrijker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "cunt",
            "offensiveness": "0.59",
            "keyword": "NA"
        },
        {
            "vocabulary": "curry muncher",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "curry slurper",
            "offensiveness": "0.50",
            "keyword": "NA"
        },
        {
            "vocabulary": "curry stinker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Cushi",
            "offensiveness": "0.00",
            "keyword": "African"
        },
        {
            "vocabulary": "Cushite",
            "offensiveness": "0.00",
            "keyword": "African"
        },
        {
            "vocabulary": "dago",
            "offensiveness": "0.52",
            "keyword": "NA"
        },
        {
            "vocabulary": "dambaya",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "darkey",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "darkie",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "darky",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "ddang kong",
            "offensiveness": "0.65",
            "keyword": "NA"
        },
        {
            "vocabulary": "dego",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "demala",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "dhimmi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "diaper head",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "dinge",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "dingo fucker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "disminuidos",
            "offensiveness": "0.00",
            "keyword": "Disabled"
        },
        {
            "vocabulary": "ditsoon",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "div",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "divvy",
            "offensiveness": "0.06",
            "keyword": "NA"
        },
        {
            "vocabulary": "dogan",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "dogun",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "dole bludger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "domes",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "doryphore",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "doss",
            "offensiveness": "0.00",
            "keyword": "Jew"
        },
        {
            "vocabulary": "dot head",
            "offensiveness": "0.00",
            "keyword": "Indian"
        },
        {
            "vocabulary": "dune coon",
            "offensiveness": "0.00",
            "keyword": "Arab"
        },
        {
            "vocabulary": "dune nigger",
            "offensiveness": "0.00",
            "keyword": "Arab"
        },
        {
            "vocabulary": "dyke",
            "offensiveness": "0.88",
            "keyword": "Lesbian"
        },
        {
            "vocabulary": "dyke jumper",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "eh hole",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "el abeed",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "emoit",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "escuaca",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "eurotrash",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "eyetie",
            "offensiveness": "0.86",
            "keyword": "NA"
        },
        {
            "vocabulary": "fag",
            "offensiveness": "0.30",
            "keyword": "Gay"
        },
        {
            "vocabulary": "faggot",
            "offensiveness": "0.98",
            "keyword": "Gay"
        },
        {
            "vocabulary": "falang",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Fan Kuei",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "fanook",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "farang",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "faranji",
            "offensiveness": "0.33",
            "keyword": "NA"
        },
        {
            "vocabulary": "fashisty",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "fenucca",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "filhos da terra",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "finook",
            "offensiveness": "0.00",
            "keyword": "Gay"
        },
        {
            "vocabulary": "firangi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "FOB",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "fog nigger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Fotze",
            "offensiveness": "1.00",
            "keyword": "Woman"
        },
        {
            "vocabulary": "frits",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "fritsove",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Fritz",
            "offensiveness": "0.06",
            "keyword": "NA"
        },
        {
            "vocabulary": "frog",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Froschschenkelfresser",
            "offensiveness": "0.03",
            "keyword": "NA"
        },
        {
            "vocabulary": "fryc",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "fryce",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "fuzzy wuzzy",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "gabacho",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "gaijin",
            "offensiveness": "0.24",
            "keyword": "NA"
        },
        {
            "vocabulary": "gaiko",
            "offensiveness": "0.20",
            "keyword": "NA"
        },
        {
            "vocabulary": "gator bait",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Gaurkh",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "geitenneuker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Gerudo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "gew",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ghetto hamster",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "giaour ",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "gin jockey",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ginzo",
            "offensiveness": "0.96",
            "keyword": "NA"
        },
        {
            "vocabulary": "gipp",
            "offensiveness": "0.00",
            "keyword": "Roma"
        },
        {
            "vocabulary": "gippo",
            "offensiveness": "0.00",
            "keyword": "Roma"
        },
        {
            "vocabulary": "Glatze",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "gokiburi",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "golliwog",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "goober",
            "offensiveness": "0.08",
            "keyword": "NA"
        },
        {
            "vocabulary": "gook",
            "offensiveness": "1.00",
            "keyword": "Asian"
        },
        {
            "vocabulary": "gook eye",
            "offensiveness": "0.00",
            "keyword": "Asian"
        },
        {
            "vocabulary": "gooky",
            "offensiveness": "0.00",
            "keyword": "Asian"
        },
        {
            "vocabulary": "goomba",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "goombah",
            "offensiveness": "0.88",
            "keyword": "NA"
        },
        {
            "vocabulary": "gora",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "goy",
            "offensiveness": "0.70",
            "keyword": "NA"
        },
        {
            "vocabulary": "goyim",
            "offensiveness": "0.81",
            "keyword": "NA"
        },
        {
            "vocabulary": "goyum",
            "offensiveness": "0.03",
            "keyword": "NA"
        },
        {
            "vocabulary": "greaseball",
            "offensiveness": "0.94",
            "keyword": "NA"
        },
        {
            "vocabulary": "greaser",
            "offensiveness": "0.86",
            "keyword": "NA"
        },
        {
            "vocabulary": "gringa",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "gringo",
            "offensiveness": "0.62",
            "keyword": "NA"
        },
        {
            "vocabulary": "groid",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "guajiro ",
            "offensiveness": "0.34",
            "keyword": "NA"
        },
        {
            "vocabulary": "guala",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "guala guala",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "gub",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "gubba",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "guera",
            "offensiveness": "0.48",
            "keyword": "NA"
        },
        {
            "vocabulary": "guero",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "guerro",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "guinea",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "guizi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "gummihals",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "gun burglar",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "gurrier",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "gwailo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Gwat",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "gweilo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "gyp",
            "offensiveness": "1.00",
            "keyword": "Roma"
        },
        {
            "vocabulary": "gypo",
            "offensiveness": "0.00",
            "keyword": "Roma"
        },
        {
            "vocabulary": "gyppie",
            "offensiveness": "0.00",
            "keyword": "Roma"
        },
        {
            "vocabulary": "gyppo",
            "offensiveness": "0.99",
            "keyword": "Roma"
        },
        {
            "vocabulary": "gyppy",
            "offensiveness": "0.00",
            "keyword": "Roma"
        },
        {
            "vocabulary": "haatmeneer",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "hadji",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "hagwei",
            "offensiveness": "0.24",
            "keyword": "Black"
        },
        {
            "vocabulary": "hairyback",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "haji",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "hajji",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "half breed",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "halfrican",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "hamba",
            "offensiveness": "0.00",
            "keyword": "Muslim"
        },
        {
            "vocabulary": "hambaya",
            "offensiveness": "0.75",
            "keyword": "Muslim"
        },
        {
            "vocabulary": "han nichi",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "haole",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "hapankaali",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "hapshi",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "hayquay",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "hayseed",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "hebe",
            "offensiveness": "1.00",
            "keyword": "Jew"
        },
        {
            "vocabulary": "hebro",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "heeb",
            "offensiveness": "1.00",
            "keyword": "Jew"
        },
        {
            "vocabulary": "heinie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Helga",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "hick",
            "offensiveness": "0.50",
            "keyword": "NA"
        },
        {
            "vocabulary": "higger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "hillbilly",
            "offensiveness": "0.24",
            "keyword": "NA"
        },
        {
            "vocabulary": "Hitomodoki",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "hoe",
            "offensiveness": "0.00",
            "keyword": "Woman"
        },
        {
            "vocabulary": "homppeli",
            "offensiveness": "0.65",
            "keyword": "Gay"
        },
        {
            "vocabulary": "honkey",
            "offensiveness": "0.00",
            "keyword": "White"
        },
        {
            "vocabulary": "honkie",
            "offensiveness": "0.00",
            "keyword": "White"
        },
        {
            "vocabulary": "honky",
            "offensiveness": "0.00",
            "keyword": "White"
        },
        {
            "vocabulary": "Honyak",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Honyock",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "house nigger",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "Hun",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Hunkie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Hunky",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Hunni",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Hunyak",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Hunyock",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Hure",
            "offensiveness": "0.75",
            "keyword": "Woman"
        },
        {
            "vocabulary": "Hurensohn",
            "offensiveness": "0.86",
            "keyword": "NA"
        },
        {
            "vocabulary": "hymie",
            "offensiveness": "1.00",
            "keyword": "Jew"
        },
        {
            "vocabulary": "ice monkey",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ice nigger",
            "offensiveness": "0.21",
            "keyword": "NA"
        },
        {
            "vocabulary": "ikey",
            "offensiveness": "0.73",
            "keyword": "Jew"
        },
        {
            "vocabulary": "ikey mo",
            "offensiveness": "0.29",
            "keyword": "Jew"
        },
        {
            "vocabulary": "ikizungu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "iky",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "imeet",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "impedido",
            "offensiveness": "0.00",
            "keyword": "Disabled"
        },
        {
            "vocabulary": "incapaz",
            "offensiveness": "0.00",
            "keyword": "Disabled"
        },
        {
            "vocabulary": "indio",
            "offensiveness": "0.82",
            "keyword": "NA"
        },
        {
            "vocabulary": "indio ladino",
            "offensiveness": "0.51",
            "keyword": "NA"
        },
        {
            "vocabulary": "Indon",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "injun",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Inselaffen",
            "offensiveness": "0.27",
            "keyword": "NA"
        },
        {
            "vocabulary": "intsik",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "invalidos",
            "offensiveness": "0.00",
            "keyword": "Disabled"
        },
        {
            "vocabulary": "inyenzi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "island nigger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ita koh",
            "offensiveness": "0.68",
            "keyword": "NA"
        },
        {
            "vocabulary": "jabonee",
            "offensiveness": "0.72",
            "keyword": "NA"
        },
        {
            "vocabulary": "jant",
            "offensiveness": "0.24",
            "keyword": "NA"
        },
        {
            "vocabulary": "Jap",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Japana",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "japie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Japse",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "jareer",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "jathi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Jewbacca",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "jhant",
            "offensiveness": "0.24",
            "keyword": "NA"
        },
        {
            "vocabulary": "jibaro",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "jigaboo",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "jigarooni",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "jigg",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "jigga",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "jiggabo",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "jiggaboo",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "jigger",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "Jihadi",
            "offensiveness": "0.69",
            "keyword": "NA"
        },
        {
            "vocabulary": "jijjiboo",
            "offensiveness": "0.50",
            "keyword": "NA"
        },
        {
            "vocabulary": "Jim Fish",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "jincho",
            "offensiveness": "0.00",
            "keyword": "White"
        },
        {
            "vocabulary": "Jincho papujo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "jockie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "jocky",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "jokuoye",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Judensau",
            "offensiveness": "0.93",
            "keyword": "Jew"
        },
        {
            "vocabulary": "Judenschwein",
            "offensiveness": "0.96",
            "keyword": "Jew"
        },
        {
            "vocabulary": "jungle bunny",
            "offensiveness": "0.82",
            "keyword": "Black"
        },
        {
            "vocabulary": "Junior Mint",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kaaskop",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kabisi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kabloonuk",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kaeriya",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kaffer",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kaffir",
            "offensiveness": "0.46",
            "keyword": "NA"
        },
        {
            "vocabulary": "kaffre",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kafir",
            "offensiveness": "0.48",
            "keyword": "NA"
        },
        {
            "vocabulary": "kafiri",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kala",
            "offensiveness": "0.79",
            "keyword": "NA"
        },
        {
            "vocabulary": "kalar",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kalla",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kallathoni",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kallathonni",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kalmuk",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kalmuki",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kamelenneuker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Kanacke",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Kanaker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kansarme",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "karaiyar",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "katol",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Katzenfresser",
            "offensiveness": "0.43",
            "keyword": "NA"
        },
        {
            "vocabulary": "keling",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "khazar",
            "offensiveness": "0.00",
            "keyword": "Jew"
        },
        {
            "vocabulary": "kihii",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kiingereza",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kijuju",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kike",
            "offensiveness": "0.85",
            "keyword": "Jew"
        },
        {
            "vocabulary": "Kinderficker",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Kizungu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Klandestin",
            "offensiveness": "0.82",
            "keyword": "NA"
        },
        {
            "vocabulary": "knacker",
            "offensiveness": "0.33",
            "keyword": "NA"
        },
        {
            "vocabulary": "kochchiya",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kokujin",
            "offensiveness": "0.09",
            "keyword": "Black"
        },
        {
            "vocabulary": "komunjara",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kopvoddrager",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kotiya",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Krueppel",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kuffar",
            "offensiveness": "0.72",
            "keyword": "NA"
        },
        {
            "vocabulary": "kurombo",
            "offensiveness": "0.47",
            "keyword": "NA"
        },
        {
            "vocabulary": "kurwa",
            "offensiveness": "0.55",
            "keyword": "NA"
        },
        {
            "vocabulary": "Kushi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Kushite",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kut-marokkaan",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kutmarokkaan",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kwai lo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kwerekwere",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kweri kweri",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kwiri kwiri",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "kyke",
            "offensiveness": "0.00",
            "keyword": "Jew"
        },
        {
            "vocabulary": "labu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "lagartona",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "laikci",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "lamemurata",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Landya",
            "offensiveness": "0.00",
            "keyword": "Muslim"
        },
        {
            "vocabulary": "langsiya",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "lansiya",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "laowai",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "latrino",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "lawn jockey",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "Lebbo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "lemonhead",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "leprechaun",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "lesbo",
            "offensiveness": "0.65",
            "keyword": "Lesbian"
        },
        {
            "vocabulary": "levis",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "limey",
            "offensiveness": "0.27",
            "keyword": "NA"
        },
        {
            "vocabulary": "ling ling",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "lofan",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "longuu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "longuulkitkit",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "lowlander",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "lubra",
            "offensiveness": "0.00",
            "keyword": "Aborigine"
        },
        {
            "vocabulary": "lugan",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Lugenpresse",
            "offensiveness": "0.16",
            "keyword": "NA"
        },
        {
            "vocabulary": "lungereza",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "macaca",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Macaco",
            "offensiveness": "0.50",
            "keyword": "NA"
        },
        {
            "vocabulary": "macaroni",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Macedonist",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "macengi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mack",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mackerel snapper ",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "maekka",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "maessa",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Makaronifresser",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "malaun",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "maldito Bori",
            "offensiveness": "0.17",
            "keyword": "NA"
        },
        {
            "vocabulary": "malingsia",
            "offensiveness": "0.55",
            "keyword": "NA"
        },
        {
            "vocabulary": "mameluco",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mandilon",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mangia cake",
            "offensiveness": "0.53",
            "keyword": "NA"
        },
        {
            "vocabulary": "mangiacrauti",
            "offensiveness": "0.20",
            "keyword": "NA"
        },
        {
            "vocabulary": "mangiapatate",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "maricon",
            "offensiveness": "0.00",
            "keyword": "Gay"
        },
        {
            "vocabulary": "marrano",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "marron",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mattaya",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mayate",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "medelander",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "meiguo guizi",
            "offensiveness": "0.82",
            "keyword": "NA"
        },
        {
            "vocabulary": "melanzana",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Merkin",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mestico",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mestizo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mezza fanook",
            "offensiveness": "0.34",
            "keyword": "Gay"
        },
        {
            "vocabulary": "Mickey Finn",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mil bag",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "minusvalido",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Missgeburt",
            "offensiveness": "0.82",
            "keyword": "NA"
        },
        {
            "vocabulary": "mithangel",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "moch",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mocho",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mockey",
            "offensiveness": "0.00",
            "keyword": "Jew"
        },
        {
            "vocabulary": "mockie",
            "offensiveness": "0.00",
            "keyword": "Jew"
        },
        {
            "vocabulary": "mocky",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mocro",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "modaya",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "moelander",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mof",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "moffen",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mogolico",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "moher",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mojado",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mojo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "moke",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "moky",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mollo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mong",
            "offensiveness": "0.00",
            "keyword": "Disabled"
        },
        {
            "vocabulary": "mongolo",
            "offensiveness": "0.00",
            "keyword": "Disabled"
        },
        {
            "vocabulary": "monser",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mook",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mooley",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mooliachi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "moolie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "moon cricket",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "moro",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "moss eater",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mosshead",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "moulie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "moulignon",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "moulinyan",
            "offensiveness": "0.32",
            "keyword": "NA"
        },
        {
            "vocabulary": "moxy",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mud duck",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "mud person",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mud shark",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mudugudugu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "muk",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "muktuk",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mulato",
            "offensiveness": "0.24",
            "keyword": "NA"
        },
        {
            "vocabulary": "mulignan",
            "offensiveness": "0.55",
            "keyword": "Black"
        },
        {
            "vocabulary": "mung",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "munt",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "munter",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "murungu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mustalainen",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mustalaiset",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "musungu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "muttal",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "muzungu",
            "offensiveness": "0.05",
            "keyword": "NA"
        },
        {
            "vocabulary": "muzzie",
            "offensiveness": "0.59",
            "keyword": "Muslim"
        },
        {
            "vocabulary": "mwiji",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "mzungu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "naca",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "nacho",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "naco",
            "offensiveness": "0.48",
            "keyword": "NA"
        },
        {
            "vocabulary": "Natsi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Natzisty",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Nazi",
            "offensiveness": "0.49",
            "keyword": "NA"
        },
        {
            "vocabulary": "neche",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "neechee",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "neejee",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Neger",
            "offensiveness": "0.48",
            "keyword": "NA"
        },
        {
            "vocabulary": "negro",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "negro de mierda",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Nemcurji",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Nemskutarji",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "neres",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "net head",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "newfie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ngetik",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "nguoi tau",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "nicca",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "nichi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "nichiwa",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "nidge",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "niemra",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "niemry",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "nig",
            "offensiveness": "0.50",
            "keyword": "Black"
        },
        {
            "vocabulary": "nig nog",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "nigar",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "niger",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "nigette",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "nigga",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "niggah",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "niggar",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "nigger",
            "offensiveness": "0.72",
            "keyword": "Black"
        },
        {
            "vocabulary": "nigglet",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "niggor",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "niggress",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "nigguh",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "niggur",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "niglet",
            "offensiveness": "1.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "nigor",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "nigra",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "nigre",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "niknok",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "niksmann",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "nip",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "nitchee",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "nitchie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "nitchy",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Northern monkey",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ocker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "octaroon",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "octroon",
            "offensiveness": "0.29",
            "keyword": "NA"
        },
        {
            "vocabulary": "ofay",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ola",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Orangie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "osuuji",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "otuwa",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "oven dodger",
            "offensiveness": "0.34",
            "keyword": "Jew"
        },
        {
            "vocabulary": "pakeha",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "paki",
            "offensiveness": "0.90",
            "keyword": "NA"
        },
        {
            "vocabulary": "pakka",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "paleface",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "palla",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "pancake face",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "papist",
            "offensiveness": "0.37",
            "keyword": "NA"
        },
        {
            "vocabulary": "papoose",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "paraiyar",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "parangi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "payoponi",
            "offensiveness": "0.48",
            "keyword": "NA"
        },
        {
            "vocabulary": "peckerwood",
            "offensiveness": "0.48",
            "keyword": "NA"
        },
        {
            "vocabulary": "peela",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "pendatang",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Penner",
            "offensiveness": "0.36",
            "keyword": "NA"
        },
        {
            "vocabulary": "pepik",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "perroflauta",
            "offensiveness": "0.52",
            "keyword": "NA"
        },
        {
            "vocabulary": "pickaninny",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "Piefke",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Piffke",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "piker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "pikey",
            "offensiveness": "0.03",
            "keyword": "NA"
        },
        {
            "vocabulary": "piky",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "pinche negro",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "pindos",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "pineapple nigger",
            "offensiveness": "0.47",
            "keyword": "NA"
        },
        {
            "vocabulary": "ping pang",
            "offensiveness": "0.00",
            "keyword": "Asian"
        },
        {
            "vocabulary": "plastic paddy",
            "offensiveness": "0.33",
            "keyword": "NA"
        },
        {
            "vocabulary": "pocha",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "pocho",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "poebe",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "poep",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "pohm",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "pointy head",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "polack",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "polacos",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Polake",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "pollo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "pom",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "pommie grant",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "pommy",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "popolo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "porch monkey",
            "offensiveness": "0.67",
            "keyword": "NA"
        },
        {
            "vocabulary": "powderburn",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "prairie nigger",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Preiss",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "prieto",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "proddy dog",
            "offensiveness": "0.52",
            "keyword": "NA"
        },
        {
            "vocabulary": "proddywhoddy",
            "offensiveness": "0.50",
            "keyword": "NA"
        },
        {
            "vocabulary": "proddywoddy",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Prusak",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Prusatsi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Pseudomacedonian",
            "offensiveness": "0.86",
            "keyword": "NA"
        },
        {
            "vocabulary": "pussy",
            "offensiveness": "0.27",
            "keyword": "NA"
        },
        {
            "vocabulary": "puta",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "putain",
            "offensiveness": "0.72",
            "keyword": "NA"
        },
        {
            "vocabulary": "pute",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "puto",
            "offensiveness": "0.44",
            "keyword": "NA"
        },
        {
            "vocabulary": "quadroon",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "quashie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "queer",
            "offensiveness": "0.16",
            "keyword": "NA"
        },
        {
            "vocabulary": "race traitor",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "raghead",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "razakars",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "red bone",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "redlegs",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "redskin",
            "offensiveness": "0.89",
            "keyword": "NA"
        },
        {
            "vocabulary": "retard",
            "offensiveness": "0.65",
            "keyword": "Disabled"
        },
        {
            "vocabulary": "retarded",
            "offensiveness": "0.24",
            "keyword": "NA"
        },
        {
            "vocabulary": "retrasado mental",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Rhine monkey",
            "offensiveness": "0.37",
            "keyword": "NA"
        },
        {
            "vocabulary": "riben guizi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ricepicker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "rifaap",
            "offensiveness": "0.33",
            "keyword": "NA"
        },
        {
            "vocabulary": "rifaapje",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "rital",
            "offensiveness": "0.79",
            "keyword": "NA"
        },
        {
            "vocabulary": "roofucker",
            "offensiveness": "0.93",
            "keyword": "NA"
        },
        {
            "vocabulary": "rooinek",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "rosuke",
            "offensiveness": "0.82",
            "keyword": "NA"
        },
        {
            "vocabulary": "roundeye",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "rube",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "rubwa",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ruco",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Russellite ",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "rutuku",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "saeedi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sakkiliya",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sakkiliyar",
            "offensiveness": "0.96",
            "keyword": "NA"
        },
        {
            "vocabulary": "saks",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "salope",
            "offensiveness": "0.96",
            "keyword": "NA"
        },
        {
            "vocabulary": "sambo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sand nigger",
            "offensiveness": "0.30",
            "keyword": "NA"
        },
        {
            "vocabulary": "Sapatao",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sart",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sauschwob",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sawney",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sayeedi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sayoku",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "scag",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "scallie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "scally",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "scan2ger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "scheiss Ami",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "schiptar",
            "offensiveness": "0.37",
            "keyword": "NA"
        },
        {
            "vocabulary": "Schlampe",
            "offensiveness": "0.68",
            "keyword": "NA"
        },
        {
            "vocabulary": "Schlitzauge",
            "offensiveness": "0.82",
            "keyword": "NA"
        },
        {
            "vocabulary": "schvartse",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Schwanzlutscher",
            "offensiveness": "0.62",
            "keyword": "NA"
        },
        {
            "vocabulary": "schwartze",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "schwarze",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "schwarzer",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Schwuchtel",
            "offensiveness": "0.89",
            "keyword": "NA"
        },
        {
            "vocabulary": "scobe",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "scuffer",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "semihole",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "senga",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "seppo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "septic",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sesat",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "shade",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "shagitz",
            "offensiveness": "0.50",
            "keyword": "NA"
        },
        {
            "vocabulary": "shahktor",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "shahktyer",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "shant",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "shanty Irish",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sheeny",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sheepfucker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sheigetz",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sheister",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Shelta",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "shemale",
            "offensiveness": "0.71",
            "keyword": "NA"
        },
        {
            "vocabulary": "shiksa",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "shit heel",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "shit kicker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "shkutzim",
            "offensiveness": "0.24",
            "keyword": "NA"
        },
        {
            "vocabulary": "shvartz",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "shyster",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sideways cooter",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sideways pussy",
            "offensiveness": "0.48",
            "keyword": "NA"
        },
        {
            "vocabulary": "sideways vagina",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "skag",
            "offensiveness": "0.00",
            "keyword": "Woman"
        },
        {
            "vocabulary": "skanger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "skinny",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Skopiana",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Skopianika",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Skopjan",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Skopjian",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "slag",
            "offensiveness": "0.10",
            "keyword": "NA"
        },
        {
            "vocabulary": "slampa",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "slant eye",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "slopehead",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "slopey",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "slopy",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "smick",
            "offensiveness": "0.27",
            "keyword": "NA"
        },
        {
            "vocabulary": "smoke jumper",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "smoked Irish",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "smoked Irishman",
            "offensiveness": "0.03",
            "keyword": "NA"
        },
        {
            "vocabulary": "sokac",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sokomokabul",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sooty",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "soqi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "soup taker ",
            "offensiveness": "0.33",
            "keyword": "NA"
        },
        {
            "vocabulary": "Southern fairy",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Spast",
            "offensiveness": "0.19",
            "keyword": "NA"
        },
        {
            "vocabulary": "Spasti",
            "offensiveness": "0.48",
            "keyword": "NA"
        },
        {
            "vocabulary": "spear chucker",
            "offensiveness": "0.86",
            "keyword": "NA"
        },
        {
            "vocabulary": "sperg",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "spic",
            "offensiveness": "0.95",
            "keyword": "NA"
        },
        {
            "vocabulary": "spice nigger",
            "offensiveness": "0.56",
            "keyword": "NA"
        },
        {
            "vocabulary": "spick",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "spickaboo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "spide",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "spig",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "spigger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "spigotty",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "spik",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "spike",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "spink",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "spiv",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "spook",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "squarehead",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "squaw",
            "offensiveness": "0.79",
            "keyword": "NA"
        },
        {
            "vocabulary": "squinty",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "steek",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "stump jumper",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sub human",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sucker fish",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "sudaca",
            "offensiveness": "0.91",
            "keyword": "NA"
        },
        {
            "vocabulary": "sudda",
            "offensiveness": "0.31",
            "keyword": "NA"
        },
        {
            "vocabulary": "surrender monkey",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Svab",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Svaba",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "szkop",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "szwab",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tabeetsu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Taig",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tapette",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tapori",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tar baby",
            "offensiveness": "0.65",
            "keyword": "Black"
        },
        {
            "vocabulary": "teabagger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Teague",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Teg",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Teig",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tek millet",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tenker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tete carree",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "teuchtar",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "teuchter",
            "offensiveness": "0.03",
            "keyword": "NA"
        },
        {
            "vocabulary": "thalaya",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "thambiya",
            "offensiveness": "0.68",
            "keyword": "NA"
        },
        {
            "vocabulary": "thicklips",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "thurumba",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "timber nigger",
            "offensiveness": "0.98",
            "keyword": "NA"
        },
        {
            "vocabulary": "tincker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tinkar",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tinkard",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tinkere",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tizzone",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tizzoni",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "touch of the tar brush",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "towel head",
            "offensiveness": "0.10",
            "keyword": "NA"
        },
        {
            "vocabulary": "trailer park trash",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "trailer trash",
            "offensiveness": "0.16",
            "keyword": "NA"
        },
        {
            "vocabulary": "tranny",
            "offensiveness": "0.40",
            "keyword": "NA"
        },
        {
            "vocabulary": "tree jumper",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "trucin",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Tschusch",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tsekwa",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tugo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tunnel digger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Tunte",
            "offensiveness": "0.48",
            "keyword": "NA"
        },
        {
            "vocabulary": "twat",
            "offensiveness": "0.05",
            "keyword": "NA"
        },
        {
            "vocabulary": "Twinkie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tyncar",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tynekere",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tynkard",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tynkare",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tynker",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "tynkere",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Ubangee",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Ubangi",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "umlungu",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "umuzungu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "uncircumcised baboon",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "uncivilised",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "uncivilized",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Uncle Tom",
            "offensiveness": "0.72",
            "keyword": "Black"
        },
        {
            "vocabulary": "Untermensch",
            "offensiveness": "0.86",
            "keyword": "NA"
        },
        {
            "vocabulary": "Untermenschen",
            "offensiveness": "0.96",
            "keyword": "NA"
        },
        {
            "vocabulary": "uriti ja Mutigania wa wa Kunati",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ustasa",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "uzko glaziye",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "varungu",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Velcro head",
            "offensiveness": "0.00",
            "keyword": "Black"
        },
        {
            "vocabulary": "Viado",
            "offensiveness": "0.48",
            "keyword": "NA"
        },
        {
            "vocabulary": "vlah",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "wagon burner",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "WASP",
            "offensiveness": "0.03",
            "keyword": "NA"
        },
        {
            "vocabulary": "wazungu",
            "offensiveness": "0.01",
            "keyword": "NA"
        },
        {
            "vocabulary": "wetback",
            "offensiveness": "0.74",
            "keyword": "NA"
        },
        {
            "vocabulary": "wexican",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "whigger",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "white nigger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "white trash",
            "offensiveness": "0.72",
            "keyword": "NA"
        },
        {
            "vocabulary": "whitey",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "whore from Fife",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "WIC",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "wigga",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "wigger",
            "offensiveness": "0.02",
            "keyword": "NA"
        },
        {
            "vocabulary": "wiggerette",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "wog",
            "offensiveness": "0.83",
            "keyword": "NA"
        },
        {
            "vocabulary": "wop",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "yardie",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "yellow bone",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "yid",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "yob",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "yobbo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "yokel",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "yom",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "youn",
            "offensiveness": "1.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "yuon",
            "offensiveness": "0.86",
            "keyword": "NA"
        },
        {
            "vocabulary": "zainichi",
            "offensiveness": "0.79",
            "keyword": "NA"
        },
        {
            "vocabulary": "zambaggoa",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "zambo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "zandneger",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "zebra",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Zecke",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "Ziegenficker",
            "offensiveness": "0.68",
            "keyword": "NA"
        },
        {
            "vocabulary": "zigabo",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "zigeuner",
            "offensiveness": "0.24",
            "keyword": "NA"
        },
        {
            "vocabulary": "Zionazi",
            "offensiveness": "0.93",
            "keyword": "Jew"
        },
        {
            "vocabulary": "zipperhead",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "zippohead",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ZOG",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "ZOG lover",
            "offensiveness": "0.00",
            "keyword": "NA"
        },
        {
            "vocabulary": "zorra",
            "offensiveness": "0.75",
            "keyword": "NA"
        }
    ];

    var description = {
        Muslim: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nHelp eliminate hate speech. Please take a minute to reflect on its impact before you hit send.",
        Buddhist: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\n Buddhism is a religion of peace.\n\nPlease take a minute to reflect on its impact before you hit send.",
        Aborigine: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        African: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        Black: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        White: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        Refugee: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        Asian: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        Gay: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        Chinese: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        Hispanic: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        Indian: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        Woman: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech against women has been detected in your message. A majority of Indian Women experience sexually inappropriate comments on Social media platforms.\n\nHelp eliminate hate speech. Please take a minute to reflect on its impact before you hit send.",
        Jew: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        Disabled: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        Arab: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        Lesbian: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        Roma: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send.",
        NA: "Hey!\n\nDo you really want to write that?\n\nPotential hate speech has been detected in your message.\n\nPlease take a minute to reflect on its impact before you hit send."
    }

}

(chrome));
