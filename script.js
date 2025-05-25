// Wort-Emoji-Datenbank (über 120 Wörter)
const wordEmojiPairs = [
    // Einfache Wörter (3-5 Buchstaben)
    { word: "KATZE", emoji: "🐱" },
    { word: "HUND", emoji: "🐶" },
    { word: "AUTO", emoji: "🚗" },
    { word: "BALL", emoji: "⚽" },
    { word: "BAUM", emoji: "🌳" },
    { word: "HAUS", emoji: "🏠" },
    { word: "SONNE", emoji: "☀️" },
    { word: "MOND", emoji: "🌙" },
    { word: "STERN", emoji: "⭐" },
    { word: "HERZ", emoji: "❤️" },
    { word: "BLUME", emoji: "🌸" },
    { word: "VOGEL", emoji: "🐦" },
    { word: "FISCH", emoji: "🐟" },
    { word: "APFEL", emoji: "🍎" },
    { word: "BROT", emoji: "🍞" },
    { word: "BUCH", emoji: "📚" },
    { word: "BOOT", emoji: "⛵" },
    { word: "KRONE", emoji: "👑" },
    { word: "MUSIK", emoji: "🎵" },
    { word: "PIZZA", emoji: "🍕" },
    { word: "KUCHEN", emoji: "🎂" },
    { word: "BRILLE", emoji: "👓" },
    { word: "KAMERA", emoji: "📷" },
    { word: "BANANE", emoji: "🍌" },
    { word: "KÄSE", emoji: "🧀" },
    { word: "LAMPE", emoji: "💡" },
    { word: "MAUS", emoji: "🐭" },
    { word: "ORANGE", emoji: "🍊" },
    { word: "PANDA", emoji: "🐼" },
    { word: "RADIO", emoji: "📻" },
    { word: "TIGER", emoji: "🐅" },
    { word: "ZEBRA", emoji: "🦓" },
    { word: "LÖWE", emoji: "🦁" },
    { word: "BIENE", emoji: "🐝" },
    { word: "FROSCH", emoji: "🐸" },
    { word: "KEKSE", emoji: "🍪" },
    { word: "MILCH", emoji: "🥛" },
    { word: "TOAST", emoji: "🍞" },
    { word: "KARROTE", emoji: "🥕" },
    { word: "TOMAT", emoji: "🍅" },
    
    // Tiere
    { word: "ELEFANT", emoji: "🐘" },
    { word: "GIRAFFE", emoji: "🦒" },
    { word: "PINGUIN", emoji: "🐧" },
    { word: "EULE", emoji: "🦉" },
    { word: "PFERD", emoji: "🐴" },
    { word: "SCHAF", emoji: "🐑" },
    { word: "SCHWEIN", emoji: "🐷" },
    { word: "KUH", emoji: "🐄" },
    { word: "HUHN", emoji: "🐔" },
    { word: "HASE", emoji: "🐰" },
    { word: "IGEL", emoji: "🦔" },
    { word: "FUCHS", emoji: "🦊" },
    { word: "BÄR", emoji: "🐻" },
    { word: "AFFE", emoji: "🐵" },
    { word: "ENTE", emoji: "🦆" },
    { word: "WURM", emoji: "🪱" },
    { word: "KRABBE", emoji: "🦀" },
    { word: "DELFIN", emoji: "🐬" },
    { word: "HAI", emoji: "🦈" },
    { word: "TUKAN", emoji: "🦜" },
    
    // Fahrzeuge und Transport
    { word: "FLUGZEUG", emoji: "✈️" },
    { word: "ZUG", emoji: "🚂" },
    { word: "BUS", emoji: "🚌" },
    { word: "FAHRRAD", emoji: "🚲" },
    { word: "MOTORRAD", emoji: "🏍️" },
    { word: "TAXI", emoji: "🚕" },
    { word: "FEUERWEHR", emoji: "🚒" },
    { word: "POLIZEI", emoji: "🚓" },
    { word: "RAKETE", emoji: "🚀" },
    { word: "HUBSCHR", emoji: "🚁" },
    { word: "SCHIFF", emoji: "🚢" },
    { word: "YACHT", emoji: "🛥️" },
    { word: "UFO", emoji: "🛸" },
    
    // Essen und Trinken
    { word: "HAMBURGER", emoji: "🍔" },
    { word: "POMMES", emoji: "🍟" },
    { word: "HOTDOG", emoji: "🌭" },
    { word: "SPAGHETTI", emoji: "🍝" },
    { word: "REIS", emoji: "🍚" },
    { word: "SUSHI", emoji: "🍣" },
    { word: "DONUT", emoji: "🍩" },
    { word: "EIS", emoji: "🍦" },
    { word: "SCHOKOLADE", emoji: "🍫" },
    { word: "BONBON", emoji: "🍬" },
    { word: "LUTSCHER", emoji: "🍭" },
    { word: "POPCORN", emoji: "🍿" },
    { word: "KAFFEE", emoji: "☕" },
    { word: "LIMONADE", emoji: "🥤" },
    { word: "WASSER", emoji: "💧" },
    { word: "WEIN", emoji: "🍷" },
    { word: "BIER", emoji: "🍺" },
    
    // Berufe und Menschen
    { word: "ARZT", emoji: "👨‍⚕️" },
    { word: "LEHRER", emoji: "👨‍🏫" },
    { word: "POLIZIST", emoji: "👮" },
    { word: "KOCH", emoji: "👨‍🍳" },
    { word: "PILOT", emoji: "👨‍✈️" },
    { word: "NINJA", emoji: "🥷" },
    { word: "PIRAT", emoji: "🏴‍☠️" },
    { word: "KÖNIG", emoji: "👑" },
    { word: "QUEEN", emoji: "👸" },
    { word: "ZAUBERER", emoji: "🧙‍♂️" },
    { word: "FAMILIE", emoji: "👨‍👩‍👧‍👦" },
    { word: "BABY", emoji: "👶" },
    
    // Objekte und Gegenstände
    { word: "TELEFON", emoji: "📱" },
    { word: "COMPUTER", emoji: "💻" },
    { word: "FERNSEHER", emoji: "📺" },
    { word: "UHR", emoji: "⏰" },
    { word: "SCHLÜSSEL", emoji: "🔑" },
    { word: "SCHERE", emoji: "✂️" },
    { word: "HAMMER", emoji: "🔨" },
    { word: "PINSEL", emoji: "🖌️" },
    { word: "BLEISTIFT", emoji: "✏️" },
    { word: "REGENSCHIRM", emoji: "☂️" },
    { word: "TASCHE", emoji: "👜" },
    { word: "KOFFER", emoji: "🧳" },
    { word: "GESCHENK", emoji: "🎁" },
    { word: "BALLON", emoji: "🎈" },
    { word: "KERZE", emoji: "🕯️" },
    
    // Sport und Spiel
    { word: "FUSSBALL", emoji: "⚽" },
    { word: "BASKETBALL", emoji: "🏀" },
    { word: "TENNIS", emoji: "🎾" },
    { word: "VOLLEYBALL", emoji: "🏐" },
    { word: "BASEBALL", emoji: "⚾" },
    { word: "GOLF", emoji: "⛳" },
    { word: "SCHWIMMEN", emoji: "🏊" },
    { word: "SKATEN", emoji: "🛹" },
    { word: "FAHRRAD", emoji: "🚴" },
    { word: "PUZZLE", emoji: "🧩" },
    { word: "SPIELZEUG", emoji: "🧸" },
    { word: "DRACHEN", emoji: "🪁" },
    
    // Natur und Wetter
    { word: "REGENBOGEN", emoji: "🌈" },
    { word: "REGEN", emoji: "🌧️" },
    { word: "SCHNEE", emoji: "❄️" },
    { word: "BLITZ", emoji: "⚡" },
    { word: "WOLKE", emoji: "☁️" },
    { word: "WIND", emoji: "💨" },
    { word: "FEUER", emoji: "🔥" },
    { word: "BERG", emoji: "⛰️" },
    { word: "VULKAN", emoji: "🌋" },
    { word: "INSEL", emoji: "🏝️" },
    { word: "STRAND", emoji: "🏖️" },
    { word: "WÜSTE", emoji: "🏜️" },
    { word: "WALD", emoji: "🌲" },
    { word: "KAKTUS", emoji: "🌵" },
    
    // Gebäude und Orte
    { word: "SCHULE", emoji: "🏫" },
    { word: "SCHLOSS", emoji: "🏰" },
    { word: "KIRCHE", emoji: "⛪" },
    { word: "KRANKENHAUS", emoji: "🏥" },
    { word: "FABRIK", emoji: "🏭" },
    { word: "BÜRO", emoji: "🏢" },
    { word: "LADEN", emoji: "🏪" },
    { word: "HOTEL", emoji: "🏨" },
    { word: "BANK", emoji: "🏦" },
    { word: "MUSEUM", emoji: "🏛️" },
    { word: "KINO", emoji: "🎬" },
    { word: "THEATER", emoji: "🎭" },
    { word: "ZIRKUS", emoji: "🎪" },
    
    // Fantasie und Märchen
    { word: "DRACHE", emoji: "🐉" },
    { word: "EINHORN", emoji: "🦄" },
    { word: "ROBOTER", emoji: "🤖" },
    { word: "DINOSAURIER", emoji: "🦕" },
    { word: "MONSTER", emoji: "👹" },
    { word: "GEIST", emoji: "👻" },
    { word: "ALIEN", emoji: "👽" },
    { word: "VAMPIR", emoji: "🧛" },
    { word: "ZOMBIE", emoji: "🧟" },
    
    // Musik und Kunst
    { word: "GITARRE", emoji: "🎸" },
    { word: "KLAVIER", emoji: "🎹" },
    { word: "XYLOPHON", emoji: "🎹" },
    { word: "TROMPETE", emoji: "🎺" },
    { word: "MIKROFON", emoji: "🎤" },
    { word: "KOPFHÖRER", emoji: "🎧" },
    { word: "MALEREI", emoji: "🎨" },
    { word: "PALETTE", emoji: "🎨" },
    
    // Spezielle Events
    { word: "GEBURTSTAG", emoji: "🎂" },
    { word: "HOCHZEIT", emoji: "💒" },
    { word: "WEIHNACHTEN", emoji: "🎄" },
    { word: "HALLOWEEN", emoji: "🎃" },
    { word: "PARTY", emoji: "🎉" },
    { word: "FEUERWERK", emoji: "🎆" },
    
    // Weitere Tiere
    { word: "SCHMETTERLING", emoji: "🦋" },
    { word: "SPINNE", emoji: "🕷️" },
    { word: "MARIENKÄFER", emoji: "🐞" },
    { word: "SCHNECKE", emoji: "🐌" },
    { word: "AMEISE", emoji: "🐜" },
    { word: "SALAMANDER", emoji: "🦎" },
    { word: "SCHLANGE", emoji: "🐍" },
    { word: "SCHILDKRÖTE", emoji: "🐢" },
    { word: "OKTOPUS", emoji: "🐙" },
    { word: "QUALLE", emoji: "🪼" },
    { word: "SEESTERN", emoji: "⭐" },
    { word: "FLAMINGO", emoji: "🦩" },
    { word: "PFAU", emoji: "🦚" },
    { word: "HAHN", emoji: "🐓" },
    { word: "ZIEGE", emoji: "🐐" },
    { word: "RENTIER", emoji: "🦌" },
    { word: "KAMEL", emoji: "🐪" },
    { word: "LAMA", emoji: "🦙" },
    { word: "NASHORN", emoji: "🦏" },
    { word: "HIPPO", emoji: "🦛" },
    { word: "GORILLA", emoji: "🦍" },
    { word: "FAULTIER", emoji: "🦥" },
    { word: "OTTER", emoji: "🦦" },
    { word: "STINKTIER", emoji: "🦨" },
    { word: "BIBER", emoji: "🦫" },
    { word: "MAMMUT", emoji: "🦣" },
    
    // Mehr Essen
    { word: "ERDBEERE", emoji: "🍓" },
    { word: "KIRSCHE", emoji: "🍒" },
    { word: "PFIRSICH", emoji: "🍑" },
    { word: "ANANAS", emoji: "🍍" },
    { word: "MANGO", emoji: "🥭" },
    { word: "AVOCADO", emoji: "🥑" },
    { word: "GURKE", emoji: "🥒" },
    { word: "PAPRIKA", emoji: "🫑" },
    { word: "MAIS", emoji: "🌽" },
    { word: "AUBERGINE", emoji: "🍆" },
    { word: "ZWIEBEL", emoji: "🧅" },
    { word: "KNOBLAUCH", emoji: "🧄" },
    { word: "SELLERIE", emoji: "🥬" },
    { word: "BROKKOLI", emoji: "🥦" },
    { word: "SALAT", emoji: "🥗" },
    { word: "SUPPE", emoji: "🍲" },
    { word: "BURRITO", emoji: "🌯" },
    { word: "BREZE", emoji: "🥨" },
    { word: "CROISSANT", emoji: "🥐" },
    { word: "WAFFLE", emoji: "🧇" }
];

// Level 2: Assoziations-Paare (Wort → Assoziation)
const associationPairs = [
    // Adjektive - Eigenschaften
    { word: "HEIß", emoji: "🔥" },
    { word: "KALT", emoji: "❄️" },
    { word: "SCHNELL", emoji: "⚡" },
    { word: "LANGSAM", emoji: "🐌" },
    { word: "GROß", emoji: "🦕" },
    { word: "KLEIN", emoji: "🐜" },
    { word: "LAUT", emoji: "📢" },
    { word: "LEISE", emoji: "🤫" },
    { word: "HELL", emoji: "💡" },
    { word: "DUNKEL", emoji: "🌚" },
    { word: "WEICH", emoji: "🧸" },
    { word: "HART", emoji: "🪨" },
    { word: "SÜSS", emoji: "🍯" },
    { word: "SAUER", emoji: "🍋" },
    { word: "STARK", emoji: "💪" },
    { word: "SCHWER", emoji: "🏋️" },
    { word: "LEICHT", emoji: "🪶" },
    { word: "NASS", emoji: "💧" },
    { word: "TROCKEN", emoji: "🏜️" },
    { word: "GLATT", emoji: "🧊" },
    
    // Verben - Aktivitäten
    { word: "FLIEGEN", emoji: "✈️" },
    { word: "SCHWIMMEN", emoji: "🏊" },
    { word: "LAUFEN", emoji: "🏃" },
    { word: "ESSEN", emoji: "🍽️" },
    { word: "TRINKEN", emoji: "🥤" },
    { word: "SCHLAFEN", emoji: "🛏️" },
    { word: "FAHREN", emoji: "🚗" },
    { word: "SPIELEN", emoji: "🎮" },
    { word: "LESEN", emoji: "📖" },
    { word: "SCHREIBEN", emoji: "✏️" },
    { word: "MALEN", emoji: "🎨" },
    { word: "SINGEN", emoji: "🎤" },
    { word: "TANZEN", emoji: "💃" },
    { word: "KOCHEN", emoji: "🍳" },
    { word: "BACKEN", emoji: "👨‍🍳" },
    { word: "PUTZEN", emoji: "🧽" },
    { word: "WASCHEN", emoji: "🧼" },
    { word: "BAUEN", emoji: "🔨" },
    { word: "ARBEITEN", emoji: "💼" },
    { word: "LERNEN", emoji: "🎓" },
    
    // Ursache → Wirkung
    { word: "FEUER", emoji: "🚒" },
    { word: "REGEN", emoji: "☂️" },
    { word: "UNFALL", emoji: "🚑" },
    { word: "RÄUBER", emoji: "👮" },
    { word: "KRANKHEIT", emoji: "💉" },
    { word: "MÜLL", emoji: "🗑️" },
    { word: "GEFAHR", emoji: "⚠️" },
    { word: "HILFE", emoji: "🆘" },
    { word: "NOTRUF", emoji: "📞" },
    { word: "VERLETZT", emoji: "🩹" },
    
    // Problem → Lösung
    { word: "DURST", emoji: "💧" },
    { word: "HUNGER", emoji: "🍞" },
    { word: "MÜDE", emoji: "😴" },
    { word: "VERLOREN", emoji: "🧭" },
    { word: "SCHMUTZIG", emoji: "🧼" },
    { word: "KAPUTT", emoji: "🔧" },
    { word: "FINSTER", emoji: "🔦" },
    { word: "VERGESSEN", emoji: "📝" },
    
    // Aktivität → Ort/Objekt
    { word: "EINKAUFEN", emoji: "🛒" },
    { word: "SPORT", emoji: "🏆" },
    { word: "URLAUB", emoji: "🏖️" },
    { word: "SCHULE", emoji: "🎒" },
    { word: "GEBURTSTAG", emoji: "🎂" },
    { word: "WEIHNACHTEN", emoji: "🎄" },
    { word: "PICKNICK", emoji: "🧺" },
    { word: "CAMPING", emoji: "⛺" },
    { word: "KINO", emoji: "🍿" },
    { word: "KONZERT", emoji: "🎵" },
    
    // Eigenschaft → Beruf/Person
    { word: "KRANKE", emoji: "👨‍⚕️" },
    { word: "STUDENT", emoji: "👨‍🎓" },
    { word: "KÜNSTLER", emoji: "🎭" },
    { word: "MUSIKER", emoji: "🎸" },
    { word: "BAUER", emoji: "🚜" },
    { word: "PILOT", emoji: "👨‍✈️" },
    { word: "RICHTER", emoji: "⚖️" },
    
    // Wetter → Reaktion
    { word: "SONNIG", emoji: "🕶️" },
    { word: "WINDIG", emoji: "🪁" },
    { word: "STURM", emoji: "🌪️" },
    { word: "GEWITTER", emoji: "⛈️" },
    { word: "SCHNEE", emoji: "⛷️" },
    { word: "NEBEL", emoji: "🌫️" },
    
    // Emotion → Symbol
    { word: "GLÜCKLICH", emoji: "😊" },
    { word: "TRAURIG", emoji: "😢" },
    { word: "WÜTEND", emoji: "😡" },
    { word: "ÄNGSTLICH", emoji: "😨" },
    { word: "ÜBERRASCHT", emoji: "😲" },
    { word: "LIEBE", emoji: "💕" },
    { word: "FREUDE", emoji: "🎉" },
    { word: "STOLZ", emoji: "🏅" },
    
    // Zeit → Symbol
    { word: "MORGEN", emoji: "🌅" },
    { word: "ABEND", emoji: "🌆" },
    { word: "NACHT", emoji: "🌙" },
    { word: "WOCHENENDE", emoji: "🎯" },
    { word: "FERIEN", emoji: "🏝️" },
    { word: "WINTER", emoji: "⛄" },
    { word: "SOMMER", emoji: "🌻" },
    { word: "FRÜHLING", emoji: "🌷" },
    { word: "HERBST", emoji: "🍂" },
    
    // Gesundheit → Objekt
    { word: "ZÄHNE", emoji: "🦷" },
    { word: "HAARE", emoji: "💇" },
    { word: "FITNESS", emoji: "🏃‍♀️" },
    { word: "MEDIZIN", emoji: "💊" },
    { word: "BRILLE", emoji: "👓" },
    
    // Technologie → Funktion
    { word: "HANDY", emoji: "📱" },
    { word: "INTERNET", emoji: "🌐" },
    { word: "EMAIL", emoji: "📧" },
    { word: "FOTO", emoji: "📸" },
    { word: "MUSIK", emoji: "🎧" },
    { word: "SPIEL", emoji: "🎲" },
    { word: "FILM", emoji: "🎬" }
];

// Level 3: Buchstaben-Paare (Großbuchstabe → Kleinbuchstabe)
const letterPairs = [
    // Grundbuchstaben A-Z (ohne zu einfache: C, O, S, V, X)
    { word: "A", emoji: "a" },
    { word: "B", emoji: "b" },
    { word: "D", emoji: "d" },
    { word: "E", emoji: "e" },
    { word: "F", emoji: "f" },
    { word: "G", emoji: "g" },
    { word: "H", emoji: "h" },
    { word: "I", emoji: "i" },
    { word: "J", emoji: "j" },
    { word: "K", emoji: "k" },
    { word: "L", emoji: "l" },
    { word: "M", emoji: "m" },
    { word: "N", emoji: "n" },
    { word: "P", emoji: "p" },
    { word: "Q", emoji: "q" },
    { word: "R", emoji: "r" },
    { word: "T", emoji: "t" },
    { word: "U", emoji: "u" },
    { word: "W", emoji: "w" },
    { word: "Y", emoji: "y" },
    { word: "Z", emoji: "z" },
    
    // Deutsche Umlaute (ohne ß - zu einfach)
    { word: "Ä", emoji: "ä" },
    { word: "Ö", emoji: "ö" },
    { word: "Ü", emoji: "ü" }
];

// Alle Kleinbuchstaben für falsche Antworten in Level 3
const allLowercase = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "ä", "ö", "ü"
];

// Alle verfügbaren Emojis für falsche Antworten (Level 1 & 2)
const allEmojis = [
    // Grundlegende Emojis
    "🐱", "🐶", "🚗", "⚽", "🌳", "🏠", "☀️", "🌙", "⭐", "❤️",
    "🌸", "🐦", "🐟", "🍎", "🍞", "📚", "⛵", "👑", "🎵", "🍕",
    "🎂", "👓", "📷", "🍌", "🧀", "💡", "🐭", "🍊", "🐼", "📻",
    
    // Tiere
    "🐘", "🦒", "🦁", "🐧", "🦉", "🐴", "🐑", "🐷", "🐄", "🐔",
    "🐰", "🦔", "🦊", "🐻", "🐵", "🦆", "🪱", "🦀", "🐬", "🦈",
    "🦜", "🐝", "🐸", "🐅", "🦓", "🦋", "🕷️", "🐞", "🐌", "🐜",
    "🦎", "🐍", "🐢", "🐙", "🪼", "🦩", "🦚", "🐓", "🐐", "🦌",
    "🐪", "🦙", "🦏", "🦛", "🦍", "🦥", "🦦", "🦨", "🦫", "🦣",
    
    // Fahrzeuge
    "✈️", "🚂", "🚌", "🚲", "🏍️", "🚕", "🚒", "🚓", "🚀", "🚁",
    "🚢", "🛥️", "🛸", "🚴",
    
    // Essen und Trinken
    "🍔", "🍟", "🌭", "🍝", "🍚", "🍣", "🍩", "🍦", "🍫", "🍬",
    "🍭", "🍿", "☕", "🥤", "💧", "🍷", "🍺", "🍪", "🥛", "🥕",
    "🍅", "🍓", "🍒", "🍑", "🍍", "🥭", "🥑", "🥒", "🫑", "🌽",
    "🍆", "🧅", "🧄", "🥬", "🥦", "🥗", "🍲", "🌯", "🌮", "🥨",
    "🥐", "🥖", "🥞", "🧇",
    
    // Menschen und Berufe
    "👨‍⚕️", "👨‍🏫", "👮", "👨‍🍳", "👨‍✈️", "🥷", "🏴‍☠️", "👸", "🧙‍♂️",
    "👨‍👩‍👧‍👦", "👶",
    
    // Objekte
    "📱", "💻", "📺", "⏰", "🔑", "✂️", "🔨", "🖌️", "✏️", "☂️",
    "👜", "🧳", "🎁", "🎈", "🕯️",
    
    // Sport
    "🏀", "🎾", "🏐", "⚾", "⛳", "🏊", "🛹", "🧩", "🧸", "🪁",
    
    // Natur
    "🌈", "🌧️", "❄️", "⚡", "☁️", "💨", "🔥", "⛰️", "🌋", "🏝️",
    "🏖️", "🏜️", "🌲", "🌵",
    
    // Gebäude
    "🏫", "🏰", "⛪", "🏥", "🏭", "🏢", "🏪", "🏨", "🏦", "🏛️",
    "🎬", "🎭", "🎪",
    
    // Fantasie
    "🐉", "🦄", "🤖", "🦕", "👹", "👻", "👽", "🧛", "🧟",
    
    // Musik
    "🎸", "🎹", "🎺", "🎤", "🎧", "🎨",
    
    // Events
    "💒", "🎄", "🎃", "🎉", "🎆",
    
    // Zusätzliche Emojis für mehr Variation
    "🎯", "🎲", "🎳", "🎮", "🕹️", "🎰", "🃏", "🀄", "🎪", "🎨",
    "🎭", "🎪", "🎢", "🎡", "🎠", "⚽", "🏈", "🏉", "🎱", "🏓",
    "🏸", "🥅", "⛸️", "🛷", "🥌", "🎿", "⛷️", "🏂", "🪂", "🏋️",
    "🤸", "🤾", "🏌️", "🏇", "🧘", "🏄", "🚣", "🧗", "🚵", "🚴",
    "🏆", "🥇", "🥈", "🥉", "🏅", "🎖️"
];

// Spielzustand
let currentLevel = 1;
let currentWordPair = null;
let correctEmojiIndex = -1;
let score = 0;
let maxScore = 10;
let gameInProgress = true;

// DOM-Elemente
const currentWordElement = document.getElementById('current-word');
const scoreElement = document.getElementById('score');
const emojiButtons = document.querySelectorAll('.emoji-button');
const feedbackMessage = document.getElementById('feedback-message');
const feedbackText = document.getElementById('feedback-text');
const successModal = document.getElementById('success-modal');
const playAgainButton = document.getElementById('play-again');
const confettiContainer = document.getElementById('confetti-container');

// Level-Switcher Elemente
const levelButtons = document.querySelectorAll('.level-button');
const level1Button = document.getElementById('level-1-btn');
const level2Button = document.getElementById('level-2-btn');

// Level-spezifische Konfiguration
const levelConfig = {
    1: {
        name: "Wort → Emoji",
        wordPairs: wordEmojiPairs,
        setupFunction: setupLevel1,
        clickHandler: handleLevel1Click
    },
    2: {
        name: "Assoziation",
        wordPairs: associationPairs,
        setupFunction: setupLevel2,
        clickHandler: handleLevel2Click
    },
    3: {
        name: "Buchstaben",
        wordPairs: letterPairs,
        setupFunction: setupLevel3,
        clickHandler: handleLevel3Click
    }
};

// Level-System Funktionen
function switchLevel(newLevel) {
    if (newLevel === currentLevel) return;
    
    // Aktuelles Spiel stoppen
    gameInProgress = false;
    stopConfetti();
    hideSuccessModal();
    hideFeeback();
    
    // Level wechseln
    currentLevel = newLevel;
    
    // UI aktualisieren
    levelButtons.forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.level) === currentLevel) {
            btn.classList.add('active');
        }
    });
    
    // Level-spezifische CSS-Klassen
    updateLevelClasses();
    
    // Spiel für neues Level zurücksetzen
    resetGame();
}

// Level-spezifische CSS-Klassen aktualisieren
function updateLevelClasses() {
    const gameContainer = document.querySelector('.game-container');
    
    // Alle Level-Klassen entfernen
    gameContainer.classList.remove('level-1', 'level-2', 'level-3');
    
    // Aktuelle Level-Klasse hinzufügen
    gameContainer.classList.add(`level-${currentLevel}`);
}

// Level 1 Setup (aktuelles Spiel)
function setupLevel1() {
    setupEmojiButtons();
}

// Level 2 Setup (Assoziations-Spiel)
function setupLevel2() {
    setupEmojiButtons(); // Gleiche Button-Logik wie Level 1
}

// Level 3 Setup (Buchstaben-Spiel)
function setupLevel3() {
    setupEmojiButtons(); // Gleiche Button-Logik wie Level 1
}

// Level 1 Click Handler (aktuelles Spiel)
function handleLevel1Click(event) {
    return handleLevel1EmojiClick(event); // Korrigierter Handler
}

// Level 2 Click Handler (Assoziations-Spiel)
function handleLevel2Click(event) {
    return handleLevel1EmojiClick(event); // Gleiche Klick-Logik wie Level 1
}

// Level 3 Click Handler (Buchstaben-Spiel)
function handleLevel3Click(event) {
    return handleLevel1EmojiClick(event); // Gleiche Klick-Logik wie Level 1
}

// Zufällige Wortauswahl
function getRandomWord() {
    const currentWordPairs = levelConfig[currentLevel].wordPairs;
    if (currentWordPairs.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * currentWordPairs.length);
    return currentWordPairs[randomIndex];
}

// Zufällige Emojis/Buchstaben für falsche Antworten generieren
function getRandomEmojis(excludeEmoji, count = 3) {
    let sourceArray;
    
    // Je nach Level verschiedene Quellen für falsche Antworten
    if (currentLevel === 3) {
        sourceArray = allLowercase;
    } else {
        sourceArray = allEmojis;
    }
    
    const filteredItems = sourceArray.filter(item => item !== excludeEmoji);
    const shuffled = [...filteredItems].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Emoji-Buttons mischen und setzen
function setupEmojiButtons() {
    if (!currentWordPair) return;
    
    // Zufällige Position für richtiges Emoji (0-3)
    correctEmojiIndex = Math.floor(Math.random() * 4);
    
    // Falsche Emojis generieren
    const wrongEmojis = getRandomEmojis(currentWordPair.emoji, 3);
    
    // Alle Emojis für die Buttons
    const buttonEmojis = [];
    let wrongEmojiIndex = 0;
    
    for (let i = 0; i < 4; i++) {
        if (i === correctEmojiIndex) {
            buttonEmojis.push(currentWordPair.emoji);
        } else {
            buttonEmojis.push(wrongEmojis[wrongEmojiIndex]);
            wrongEmojiIndex++;
        }
    }
    
    // Buttons setzen
    emojiButtons.forEach((button, index) => {
        const emojiSpan = button.querySelector('.emoji');
        emojiSpan.textContent = buttonEmojis[index];
        
        // Event-Listener entfernen und neu hinzufügen
        button.removeEventListener('click', handleEmojiClick);
        button.addEventListener('click', handleEmojiClick);
        
        // Vollständiges Reset aller Styles (besonders wichtig für Mobile)
        button.classList.remove('correct', 'wrong');
        button.style.pointerEvents = 'auto';
        button.style.transform = ''; // Tastatur-Effekte entfernen
        button.style.borderColor = ''; // Gelben Rand entfernen
        button.style.backgroundColor = ''; // Background-Color zurücksetzen
        button.style.boxShadow = ''; // Box-Shadow zurücksetzen
        
        // iOS-spezifische Resets für persistente gelbe Ränder
        button.style.webkitTransform = ''; // Webkit-Transform für iOS
        button.style.border = ''; // Border komplett zurücksetzen
        button.style.outline = 'none'; // Outline zurücksetzen
        button.style.webkitAppearance = 'none'; // Webkit-Appearance
        button.style.webkitFocusRingColor = 'transparent'; // Focus-Ring
        button.style.webkitTapHighlightColor = 'rgba(0,0,0,0)'; // Tap-Highlight
        
        // Force-Reset durch inline styles
        button.setAttribute('style', 
            'pointer-events: auto; ' +
            'border: 4px solid #87CEEB !important; ' +
            'border-radius: 20px !important; ' +
            'outline: none !important; ' +
            '-webkit-appearance: none !important; ' +
            '-webkit-focus-ring-color: transparent !important; ' +
            '-webkit-tap-highlight-color: rgba(0,0,0,0) !important; ' +
            'transform: none !important; ' +
            '-webkit-transform: none !important; ' +
            'box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important; ' +
            'background: white !important;'
        );
        
        // Blur-Event erzwingen für iOS
        button.blur();
        
        // CSS-Classes vollständig entfernen und wieder hinzufügen
        const originalClasses = button.className;
        button.className = '';
        setTimeout(() => {
            button.className = originalClasses;
            // Zusätzlicher Transform und Box-Shadow Reset nach Class-Reset
            button.style.transform = 'none';
            button.style.webkitTransform = 'none';
            button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            button.style.background = 'white';
        }, 10);
    });
}

// Neues Spiel starten
function startNewRound() {
    if (!gameInProgress) return;
    
    currentWordPair = getRandomWord();
    if (!currentWordPair) return; // Falls keine Wörter für aktuelles Level
    
    currentWordElement.textContent = currentWordPair.word;
    currentWordElement.classList.remove('correct');
    
    // Zusätzlicher Reset aller Button-Transforms vor dem Setup
    emojiButtons.forEach(button => {
        button.style.transform = 'none';
        button.style.webkitTransform = 'none';
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        button.style.background = 'white';
        button.classList.remove('correct', 'wrong');
    });
    
    // Level-spezifisches Setup
    levelConfig[currentLevel].setupFunction();
    hideFeeback();
}

// Emoji-Klick behandeln
function handleEmojiClick(event) {
    if (!gameInProgress) return;
    
    // Level-spezifischen Click Handler verwenden
    return levelConfig[currentLevel].clickHandler(event);
}

// Original Level 1 Click Handler (ehemals handleEmojiClick)
function handleLevel1EmojiClick(event) {
    const clickedButton = event.currentTarget;
    const clickedIndex = parseInt(clickedButton.getAttribute('data-index'));
    
    // Alle Buttons deaktivieren
    emojiButtons.forEach(button => {
        button.style.pointerEvents = 'none';
    });
    
    if (clickedIndex === correctEmojiIndex) {
        // Richtige Antwort!
        handleCorrectAnswer(clickedButton);
    } else {
        // Falsche Antwort
        handleWrongAnswer(clickedButton);
    }
}

// Richtige Antwort behandeln
function handleCorrectAnswer(button) {
    // Animationen hinzufügen
    button.classList.add('correct');
    currentWordElement.classList.add('correct');
    
    // Feedback anzeigen
    showFeedback('SUPER! 🌟', false);
    
    // Konfetti für richtige Antwort!
    startConfetti(false);
    
    // Score erhöhen
    score++;
    scoreElement.textContent = score;
    
    // Nach 1,5 Sekunden nächste Runde oder Erfolgsmeldung
    setTimeout(() => {
        if (score >= maxScore) {
            showSuccessModal();
        } else {
            startNewRound();
        }
    }, 1500);
}

// Falsche Antwort behandeln
function handleWrongAnswer(button) {
    // Wackel-Animation
    button.classList.add('wrong');
    
    // Sanftes Feedback
    showFeedback('Probier nochmal! 😊', true);
    
    // Nach 1 Sekunde Buttons wieder aktivieren
    setTimeout(() => {
        emojiButtons.forEach(btn => {
            btn.style.pointerEvents = 'auto';
            btn.classList.remove('wrong');
            
            // iOS-spezifische Border-Resets
            btn.blur(); // Focus entfernen
            btn.style.border = '4px solid #87CEEB !important';
            btn.style.outline = 'none !important';
            btn.style.webkitAppearance = 'none !important';
            btn.style.webkitFocusRingColor = 'transparent !important';
            
            // Transform-Reset für iOS
            btn.style.transform = 'none';
            btn.style.webkitTransform = 'none';
            
            // Box-Shadow und Background Reset für iOS
            btn.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            btn.style.background = 'white';
        });
        hideFeeback();
    }, 1000);
}

// Feedback anzeigen
function showFeedback(message, isError = false) {
    feedbackText.textContent = message;
    feedbackMessage.classList.toggle('error', isError);
    feedbackMessage.classList.remove('hidden');
}

// Feedback verstecken
function hideFeeback() {
    feedbackMessage.classList.add('hidden');
}

// Erfolgsmeldung anzeigen
function showSuccessModal() {
    gameInProgress = false;
    successModal.classList.remove('hidden');
    startConfetti(true);
}

// Erfolgsmeldung verstecken
function hideSuccessModal() {
    successModal.classList.add('hidden');
    stopConfetti();
}

// Konfetti-Animation starten
function startConfetti(isEndGame = false) {
    confettiContainer.classList.remove('hidden');
    
    // Viel mehr Konfetti für richtige Antworten! Mega-Konfetti für Endspiel
    const confettiCount = isEndGame ? 150 : 60;
    const duration = isEndGame ? 5000 : 3000;
    
    // Erfolgs- und Feier-Emojis für Konfetti
    const confettiEmojis = [
        '❤️', '💖', '💕', '💗', '💝', // Herzen
        '⭐', '🌟', '✨', '💫', '🌠', // Sterne
        '🎉', '🎊', '🥳', '🎈', '🎆', '🎇', // Party
        '😀', '😃', '😄', '😊', '🤗', '😍', // Glückliche Gesichter
        '👏', '🙌', '👍', '💪', '✌️', '🤝', // Erfolgsgesten
        '🏆', '🥇', '🏅', '👑', '💎', // Erfolgs-Symbole
        '🌈', '🦄', '🐻', '🐸', '🐰', // Süße Tiere/Natur
        '🍀', '🌺', '🌸', '🌻', '🌷', // Glücks-Symbole
        '🎪', '🎭', '🎨', '🎁', '🍭', // Spaß-Objekte
        '☀️', '🌙', '⚡', '🔥', '💥' // Energie-Symbole
    ];
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Zufälliges Emoji auswählen
            const randomEmoji = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
            confetti.textContent = randomEmoji;
            
            // Initial komplett unsichtbar und weit oben positionieren
            confetti.style.visibility = 'hidden';
            confetti.style.position = 'absolute';
            confetti.style.top = '-200px'; // Weit außerhalb des sichtbaren Bereichs
            
            // Zufällige Position - breiter gestreut
            confetti.style.left = (Math.random() * 120 - 10) + '%';
            
            // Größere Emoji-Größen
            const size = Math.random() * 1.5 + 1.2; // 1.2-2.7em für Emojis
            confetti.style.fontSize = size + 'em';
            
            // Zufällige Drehung beim Start
            const initialRotation = Math.random() * 360;
            confetti.style.transform = `rotate(${initialRotation}deg)`;
            
            // Zusätzliche visuelle Effekte
            confetti.style.opacity = Math.random() * 0.3 + 0.7;
            
            confettiContainer.appendChild(confetti);
            
            // Nach kurzer Zeit sichtbar machen und Animation starten
            setTimeout(() => {
                confetti.style.visibility = 'visible';
                confetti.style.animationDelay = Math.random() * 0.2 + 's';
                confetti.style.animationDuration = (Math.random() * 1.5 + 3) + 's';
                
                // Konfetti nach Animation entfernen
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, duration + 2000);
            }, 50); // 50ms Delay
        }, i * (isEndGame ? 20 : 30));
    }
    
    // Automatisch nach bestimmter Zeit stoppen (nur für einzelne richtige Antworten)
    if (!isEndGame) {
        setTimeout(() => {
            // Nur verstecken wenn nicht Endspiel und nicht zu viele Konfetti noch aktiv
            if (!successModal.classList.contains('hidden')) return;
            
            // Sanfteres Ausblenden - warten bis weniger Konfetti aktiv sind
            const activeConfetti = confettiContainer.children.length;
            if (activeConfetti < 10) {
                confettiContainer.style.opacity = '0.5';
                setTimeout(() => {
                    if (confettiContainer.children.length < 5) {
                        stopConfetti();
                    }
                }, 1000);
            }
        }, duration - 500);
    }
}

// Konfetti stoppen
function stopConfetti() {
    // Sanftes Ausblenden
    confettiContainer.style.transition = 'opacity 0.5s ease-out';
    confettiContainer.style.opacity = '0';
    
    setTimeout(() => {
        confettiContainer.classList.add('hidden');
        confettiContainer.innerHTML = '';
        // Opacity zurücksetzen für nächstes Mal
        confettiContainer.style.opacity = '';
        confettiContainer.style.transition = '';
    }, 500);
}

// Spiel zurücksetzen
function resetGame() {
    score = 0;
    scoreElement.textContent = score;
    gameInProgress = true;
    hideSuccessModal();
    startNewRound();
}

// Event-Listener hinzufügen
playAgainButton.addEventListener('click', resetGame);

// Level-Switcher Event-Listener
levelButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const newLevel = parseInt(e.currentTarget.dataset.level);
        switchLevel(newLevel);
    });
});

// Konfetti Test Buttons (nur wenn sie existieren)
const testConfettiButton = document.getElementById('test-confetti');
const testMegaConfettiButton = document.getElementById('test-mega-confetti');

if (testConfettiButton) {
    testConfettiButton.addEventListener('click', () => {
        startConfetti(false); // Normales Konfetti (60 Emojis, 3 Sekunden)
    });
}

if (testMegaConfettiButton) {
    testMegaConfettiButton.addEventListener('click', () => {
        startConfetti(true); // MEGA Konfetti (150 Emojis, 5 Sekunden)
    });
}

// Spiel starten
document.addEventListener('DOMContentLoaded', () => {
    // Level 1 als Standard aktivieren
    currentLevel = 1;
    levelButtons.forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.level) === currentLevel) {
            btn.classList.add('active');
        }
    });
    
    // Level-spezifische CSS-Klassen setzen
    updateLevelClasses();
    
    // Erstes Spiel starten
    startNewRound();
});

// Debugging-Funktion (kann entfernt werden)
function debugGameState() {
    console.log('Current Word:', currentWordPair?.word);
    console.log('Correct Emoji:', currentWordPair?.emoji);
    console.log('Correct Index:', correctEmojiIndex);
    console.log('Score:', score);
}

// Keyboard-Support für Accessibility (Zahlen und Numpad)
document.addEventListener('keydown', (event) => {
    if (!gameInProgress) {
        // Wenn Spiel beendet ist und Enter gedrückt wird
        if (event.key === 'Enter' && !successModal.classList.contains('hidden')) {
            event.preventDefault();
            playAgainButton.click();
            return;
        }
        return;
    }
    
    const keyMap = {
        // Normale Zahlen-Tasten
        '1': 0,
        '2': 1,
        '3': 2,
        '4': 3,
        // Numpad-Tasten
        'Numpad1': 0,
        'Numpad2': 1,
        'Numpad3': 2,
        'Numpad4': 3
    };
    
    if (keyMap.hasOwnProperty(event.key)) {
        event.preventDefault(); // Verhindert Standard-Verhalten
        const index = keyMap[event.key];
        
        // Visueller Feedback für Tastatur-Eingabe
        const targetButton = emojiButtons[index];
        targetButton.style.transform = 'translateY(-3px)';
        targetButton.style.borderColor = '#FFD700';
        
        // Button klicken
        setTimeout(() => {
            targetButton.click();
        }, 100);
        
        // Visuellen Effekt nach kurzer Zeit zurücksetzen
        setTimeout(() => {
            // Immer zurücksetzen, nicht nur wenn pointerEvents aktiv
            targetButton.style.transform = '';
            targetButton.style.borderColor = '';
        }, 200);
    }
});

// Touch-Events für bessere Mobile-Erfahrung
emojiButtons.forEach(button => {
    // TouchStart für visuelles Feedback, aber ohne preventDefault
    button.addEventListener('touchstart', (e) => {
        // Kein preventDefault - das blockiert die Click-Events auf iOS!
        button.style.transform = 'translateY(-2px)';
    });
    
    // TouchEnd für Reset
    button.addEventListener('touchend', (e) => {
        setTimeout(() => {
            if (button.style.pointerEvents !== 'none') {
                button.style.transform = '';
            }
        }, 100);
    });
}); 