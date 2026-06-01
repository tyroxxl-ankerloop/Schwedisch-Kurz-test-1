const modules = [
  {
    id: "start",
    title: "Start: hej und tack",
    tag: "Begrüßung, Höflichkeit",
    tasks: [
      "Schreibe: Hallo!",
      "Schreibe: Danke.",
      "Schreibe: Entschuldigung.",
      "Schreibe: Auf Wiedersehen."
    ],
    expected: ["Hej!", "Tack.", "Ursäkta.", "Hej då."]
  },
  {
    id: "intro",
    title: "Selbstvorstellung",
    tag: "Name, Herkunft, Wohnort",
    tasks: [
      "Schreibe: Ich heiße Jay.",
      "Schreibe: Ich komme aus der Schweiz.",
      "Schreibe: Ich wohne in Turbenthal.",
      "Schreibe: Ich spreche ein bisschen Schwedisch."
    ],
    expected: ["Jag heter Jay.", "Jag kommer från Schweiz.", "Jag bor i Turbenthal.", "Jag talar lite svenska."]
  },
  {
    id: "questions",
    title: "Fragen und Antworten",
    tag: "Ja/Nein und W-Fragen",
    tasks: [
      "Beantworte: Vad heter du?",
      "Beantworte: Var bor du?",
      "Beantworte: Vilka språk talar du?",
      "Beantworte: Kan du tala svenska?"
    ],
    expected: ["Jag heter Jay.", "Jag bor i Turbenthal.", "Jag talar tyska och engelska.", "Ja, jag kan tala lite svenska."]
  },
  {
    id: "pronouns",
    title: "Pronomen und är",
    tag: "jag, du, han, hon, vi",
    tasks: [
      "Schreibe: Ich bin Jay.",
      "Schreibe: Du bist nett.",
      "Schreibe: Er ist müde.",
      "Schreibe: Wir sind in der Schweiz."
    ],
    expected: ["Jag är Jay.", "Du är snäll.", "Han är trött.", "Vi är i Schweiz."]
  },
  {
    id: "numbers",
    title: "Zahlen",
    tag: "0-100, Alter, Preis",
    tasks: [
      "Schreibe: Ich bin 35 Jahre alt.",
      "Schreibe: Es kostet 100 Kronen.",
      "Schreibe: Ich habe zwei Kinder.",
      "Schreibe: Meine Telefonnummer ist 123."
    ],
    expected: ["Jag är 35 år.", "Det kostar 100 kronor.", "Jag har två barn.", "Mitt telefonnummer är 123."]
  },
  {
    id: "alphabet",
    title: "Buchstabieren",
    tag: "Name, E-Mail, Aussprache",
    tasks: [
      "Schreibe: Wie schreibt man das?",
      "Schreibe: Ich heiße Jay.",
      "Schreibe: Meine E-Mail ist jay@example.com.",
      "Schreibe: Kannst du wiederholen?"
    ],
    expected: ["Hur stavas det?", "Jag heter Jay.", "Min e-post är jay@example.com.", "Kan du upprepa?"]
  },
  {
    id: "languages",
    title: "Sprachen und Lernen",
    tag: "talar, lär mig",
    tasks: [
      "Schreibe: Ich spreche Deutsch und Englisch.",
      "Schreibe: Ich spreche nicht viel Schwedisch.",
      "Schreibe: Ich lerne Schwedisch.",
      "Schreibe: Meine Schwester lernt Schwedisch."
    ],
    expected: ["Jag talar tyska och engelska.", "Jag talar inte mycket svenska.", "Jag lär mig svenska.", "Min syster lär sig svenska."]
  },
  {
    id: "family",
    title: "Familie",
    tag: "har, ingen, inga",
    tasks: [
      "Schreibe: Ich habe eine Familie.",
      "Schreibe: Ich habe eine Schwester.",
      "Schreibe: Ich habe keinen Bruder.",
      "Schreibe: Ich habe keine Kinder."
    ],
    expected: ["Jag har en familj.", "Jag har en syster.", "Jag har ingen bror.", "Jag har inga barn."]
  },
  {
    id: "possessive",
    title: "Besitz",
    tag: "min, mitt, mina, din",
    tasks: [
      "Schreibe: Meine Mutter wohnt in der Schweiz.",
      "Schreibe: Mein Kind spricht Deutsch.",
      "Schreibe: Meine Kinder wohnen hier.",
      "Schreibe: Deine Schwester lernt Schwedisch."
    ],
    expected: ["Min mamma bor i Schweiz.", "Mitt barn talar tyska.", "Mina barn bor här.", "Din syster lär sig svenska."]
  },
  {
    id: "work",
    title: "Arbeit",
    tag: "arbetar med, arbetar i",
    tasks: [
      "Schreibe: Ich arbeite mit Transport.",
      "Schreibe: Ich arbeite mit Logistik.",
      "Schreibe: Ich arbeite in Volketswil.",
      "Schreibe: Ich arbeite nicht in Zürich."
    ],
    expected: ["Jag arbetar med transport.", "Jag arbetar med logistik.", "Jag arbetar i Volketswil.", "Jag arbetar inte i Zürich."]
  },
  {
    id: "articles",
    title: "en/ett und Substantive",
    tag: "unbestimmt, bestimmt",
    tasks: [
      "Schreibe: ein Auto.",
      "Schreibe: das Auto.",
      "Schreibe: ein Haus.",
      "Schreibe: das Haus."
    ],
    expected: ["En bil.", "Bilen.", "Ett hus.", "Huset."]
  },
  {
    id: "plural",
    title: "Plural einfach",
    tag: "ein, viele, keine",
    tasks: [
      "Schreibe: Ich habe ein Kind.",
      "Schreibe: Ich habe zwei Kinder.",
      "Schreibe: Ich habe keine Kinder.",
      "Schreibe: Ich habe viele Freunde."
    ],
    expected: ["Jag har ett barn.", "Jag har två barn.", "Jag har inga barn.", "Jag har många vänner."]
  },
  {
    id: "adjectives",
    title: "Eigenschaften",
    tag: "gut, groß, klein, müde",
    tasks: [
      "Schreibe: Das Auto ist groß.",
      "Schreibe: Das Haus ist groß.",
      "Schreibe: Ich bin müde.",
      "Schreibe: Schwedisch ist gut."
    ],
    expected: ["Bilen är stor.", "Huset är stort.", "Jag är trött.", "Svenska är bra."]
  },
  {
    id: "day",
    title: "Tagesablauf",
    tag: "äter, dricker, jobbar",
    tasks: [
      "Schreibe: Ich esse Frühstück.",
      "Schreibe: Ich trinke Kaffee.",
      "Schreibe: Ich arbeite in Volketswil.",
      "Schreibe: Ich lerne Schwedisch."
    ],
    expected: ["Jag äter frukost.", "Jag dricker kaffe.", "Jag jobbar i Volketswil.", "Jag läser svenska."]
  },
  {
    id: "time",
    title: "Uhrzeit und Tage",
    tag: "klockan, idag, imorgon",
    tasks: [
      "Schreibe: Wie spät ist es?",
      "Schreibe: Es ist acht Uhr.",
      "Schreibe: Heute arbeite ich.",
      "Schreibe: Morgen lerne ich Schwedisch."
    ],
    expected: ["Vad är klockan?", "Klockan är åtta.", "Idag jobbar jag.", "Imorgon läser jag svenska."]
  },
  {
    id: "food",
    title: "Essen und Trinken",
    tag: "Restaurant, Café, Einkauf",
    tasks: [
      "Schreibe: Ich möchte Kaffee.",
      "Schreibe: Ich esse Frühstück.",
      "Schreibe: Was kostet das?",
      "Schreibe: Ich möchte bezahlen."
    ],
    expected: ["Jag vill ha kaffe.", "Jag äter frukost.", "Vad kostar det?", "Jag vill betala."]
  },
  {
    id: "shopping",
    title: "Einkaufen",
    tag: "Preis, Größe, Hilfe",
    tasks: [
      "Schreibe: Ich suche eine Jacke.",
      "Schreibe: Haben Sie das in Blau?",
      "Schreibe: Es ist zu teuer.",
      "Schreibe: Ich nehme das."
    ],
    expected: ["Jag letar efter en jacka.", "Har ni den i blått?", "Det är för dyrt.", "Jag tar den."]
  },
  {
    id: "directions",
    title: "Weg und Orte",
    tag: "wo, nach links, Bahnhof",
    tasks: [
      "Schreibe: Wo ist der Bahnhof?",
      "Schreibe: Gehen Sie geradeaus.",
      "Schreibe: Biegen Sie links ab.",
      "Schreibe: Ich wohne in der Nähe."
    ],
    expected: ["Var ligger stationen?", "Gå rakt fram.", "Sväng vänster.", "Jag bor nära."]
  },
  {
    id: "travel",
    title: "Reisen und Verkehr",
    tag: "Bus, Zug, Ticket",
    tasks: [
      "Schreibe: Ich möchte ein Ticket kaufen.",
      "Schreibe: Wann fährt der Zug?",
      "Schreibe: Der Bus kommt um acht.",
      "Schreibe: Ich reise nach Stockholm."
    ],
    expected: ["Jag vill köpa en biljett.", "När går tåget?", "Bussen kommer klockan åtta.", "Jag reser till Stockholm."]
  },
  {
    id: "home",
    title: "Wohnen",
    tag: "Wohnung, Zimmer, Möbel",
    tasks: [
      "Schreibe: Ich wohne in einer Wohnung.",
      "Schreibe: Meine Wohnung ist klein.",
      "Schreibe: Ich habe ein Zimmer.",
      "Schreibe: Die Küche ist groß."
    ],
    expected: ["Jag bor i en lägenhet.", "Min lägenhet är liten.", "Jag har ett rum.", "Köket är stort."]
  },
  {
    id: "weather",
    title: "Wetter",
    tag: "kalt, warm, regnet",
    tasks: [
      "Schreibe: Wie ist das Wetter?",
      "Schreibe: Es ist kalt heute.",
      "Schreibe: Es regnet.",
      "Schreibe: Im Sommer ist es warm."
    ],
    expected: ["Hur är vädret?", "Det är kallt idag.", "Det regnar.", "På sommaren är det varmt."]
  },
  {
    id: "health",
    title: "Körper und Gesundheit",
    tag: "Arzt, Schmerzen, müde",
    tasks: [
      "Schreibe: Ich habe Kopfschmerzen.",
      "Schreibe: Ich bin krank.",
      "Schreibe: Ich brauche einen Arzt.",
      "Schreibe: Mir geht es nicht gut."
    ],
    expected: ["Jag har huvudvärk.", "Jag är sjuk.", "Jag behöver en läkare.", "Jag mår inte bra."]
  },
  {
    id: "inte",
    title: "Verneinung mit inte",
    tag: "inte nach dem ersten Verb",
    tasks: [
      "Schreibe: Ich spreche nicht Schwedisch.",
      "Schreibe: Ich kann nicht viel Schwedisch sprechen.",
      "Schreibe: Ich will nicht in Zürich wohnen.",
      "Schreibe: Meine Schwester lernt nicht Schwedisch."
    ],
    expected: ["Jag talar inte svenska.", "Jag kan inte tala mycket svenska.", "Jag vill inte bo i Zürich.", "Min syster lär sig inte svenska."]
  },
  {
    id: "modal",
    title: "kan/vill + Grundform",
    tag: "tala, bo, lära mig",
    tasks: [
      "Schreibe: Ich kann ein bisschen Schwedisch sprechen.",
      "Schreibe: Ich will Schwedisch lernen.",
      "Schreibe: Ich will in Schweden wohnen.",
      "Schreibe: Ich kann nicht viel Schwedisch sprechen."
    ],
    expected: ["Jag kan tala lite svenska.", "Jag vill lära mig svenska.", "Jag vill bo i Sverige.", "Jag kan inte tala mycket svenska."]
  },
  {
    id: "wordorder",
    title: "Wortstellung",
    tag: "Verb auf Position 2",
    tasks: [
      "Schreibe: Heute arbeite ich in Volketswil.",
      "Schreibe: Morgen lerne ich Schwedisch.",
      "Schreibe: Am Abend trinke ich Kaffee.",
      "Schreibe: Jetzt wohne ich in der Schweiz."
    ],
    expected: ["Idag jobbar jag i Volketswil.", "Imorgon läser jag svenska.", "På kvällen dricker jag kaffe.", "Nu bor jag i Schweiz."]
  },
  {
    id: "prepositions",
    title: "Präpositionen",
    tag: "i, på, från, till, med",
    tasks: [
      "Schreibe: Ich wohne in der Schweiz.",
      "Schreibe: Ich arbeite bei/in einem Unternehmen.",
      "Schreibe: Ich komme aus Zürich.",
      "Schreibe: Ich fahre nach Stockholm."
    ],
    expected: ["Jag bor i Schweiz.", "Jag arbetar på ett företag.", "Jag kommer från Zürich.", "Jag åker till Stockholm."]
  },
  {
    id: "past",
    title: "Vergangenheit light",
    tag: "var, hade, gjorde",
    tasks: [
      "Schreibe: Gestern war ich zu Hause.",
      "Schreibe: Ich hatte Kaffee.",
      "Schreibe: Was hast du gestern gemacht?",
      "Schreibe: Ich arbeitete gestern."
    ],
    expected: ["Igår var jag hemma.", "Jag hade kaffe.", "Vad gjorde du igår?", "Jag jobbade igår."]
  },
  {
    id: "future",
    title: "Zukunft light",
    tag: "ska, vill, imorgon",
    tasks: [
      "Schreibe: Morgen werde ich arbeiten.",
      "Schreibe: Ich werde Schwedisch lernen.",
      "Schreibe: Ich möchte nach Schweden reisen.",
      "Schreibe: Nächste Woche kaufe ich ein Ticket."
    ],
    expected: ["Imorgon ska jag jobba.", "Jag ska lära mig svenska.", "Jag vill resa till Sverige.", "Nästa vecka köper jag en biljett."]
  },
  {
    id: "imperative",
    title: "Bitten und Aufforderungen",
    tag: "kan du, hjälp mig, öppna",
    tasks: [
      "Schreibe: Kannst du mir helfen?",
      "Schreibe: Wiederhole bitte.",
      "Schreibe: Sprich langsam.",
      "Schreibe: Schreib das bitte."
    ],
    expected: ["Kan du hjälpa mig?", "Upprepa gärna.", "Tala långsamt.", "Skriv det gärna."]
  },
  {
    id: "dialog",
    title: "Mini-Dialog",
    tag: "kurzer Alltag",
    tasks: [
      "Schreibe einen Mini-Dialog mit Hej.",
      "Frage: Wie geht es dir?",
      "Antworte: Mir geht es gut, danke.",
      "Frage zurück: Und dir?"
    ],
    expected: ["Hej!", "Hur mår du?", "Jag mår bra, tack.", "Och du?"]
  },
  {
    id: "a1review",
    title: "A1-Abschlussrunde",
    tag: "frei kombinieren",
    tasks: [
      "Schreibe 4-6 Sätze über dich.",
      "Nutze mindestens einmal inte.",
      "Nutze mindestens einmal kan oder vill.",
      "Nutze ein Thema: Arbeit, Familie, Wohnen, Essen oder Reise."
    ],
    expected: ["Jag heter Jay.", "Jag bor i Turbenthal.", "Jag kan tala lite svenska.", "Jag arbetar med transport."]
  }
];

const rules = [
  { pattern: /\bja\s+(heter|kommer|bor|talar|kan|vill|har|arbetar|jobbar|äter|dricker|läser|lär)\b/i, label: "ja/jag", fix: "Schreibe jag für ich. Ja bedeutet nur ja.", example: "Jag heter Jay." },
  { pattern: /\bjag am\b|\bjag ist\b|\bjag bin\b/i, label: "är", fix: "Sein heißt auf Schwedisch är.", example: "Jag är Jay." },
  { pattern: /\bdu bist\b|\bdu är du\b/i, label: "du är", fix: "Für du bist schreibst du du är.", example: "Du är snäll." },
  { pattern: /\bhan har trött\b|\bhon har trött\b|\bjag har trött\b/i, label: "är/har", fix: "Müde sein nutzt är, nicht har.", example: "Jag är trött." },
  { pattern: /\bjag kan talar\b/i, label: "kan + Grundform", fix: "Nach kan steht die Grundform: tala, nicht talar.", example: "Jag kan tala svenska." },
  { pattern: /\bjag vill talar\b/i, label: "vill + Grundform", fix: "Nach vill steht die Grundform: tala, nicht talar.", example: "Jag vill tala svenska." },
  { pattern: /\bjag vill bor\b/i, label: "vill + Grundform", fix: "Nach vill steht die Grundform: bo, nicht bor.", example: "Jag vill bo i Sverige." },
  { pattern: /\bjag kan bor\b/i, label: "kan + Grundform", fix: "Nach kan steht die Grundform: bo, nicht bor.", example: "Jag kan bo i Sverige." },
  { pattern: /\bska jobbar\b|\bska arbetar\b|\bska läser\b|\bska reser\b/i, label: "ska + Grundform", fix: "Nach ska steht die Grundform.", example: "Imorgon ska jag jobba." },
  { pattern: /\bkan tala inte\b|\bvill bo inte\b|\bkan mycket inte\b/i, label: "inte", fix: "Inte steht nach dem ersten Verb.", example: "Jag kan inte tala svenska." },
  { pattern: /\bjag inte (talar|bor|har|är|jobbar|arbetar)\b/i, label: "inte", fix: "Bei einfachen Sätzen steht inte nach dem Verb.", example: "Jag talar inte svenska." },
  { pattern: /\bsvenksa\b/i, label: "Rechtschreibung", fix: "Das Wort heißt svenska.", example: "Jag talar svenska." },
  { pattern: /\bmacket\b/i, label: "Rechtschreibung", fix: "Das Wort heißt mycket.", example: "Jag talar inte mycket svenska." },
  { pattern: /\bfäretag\b/i, label: "Rechtschreibung", fix: "Das Wort heißt företag.", example: "Jag arbetar på ett företag." },
  { pattern: /\barbeter\b/i, label: "Rechtschreibung", fix: "Das Wort heißt arbetar.", example: "Jag arbetar med transport." },
  { pattern: /\bjobber\b/i, label: "Rechtschreibung", fix: "Das Wort heißt jobbar.", example: "Jag jobbar i Volketswil." },
  { pattern: /\bdryckar\b/i, label: "Rechtschreibung", fix: "Das Wort heißt dricker.", example: "Jag dricker kaffe." },
  { pattern: /\bursakta\b/i, label: "Rechtschreibung", fix: "Mit Umlaut: ursäkta.", example: "Ursäkta." },
  { pattern: /\bhej do\b|\bhejdå\b/i, label: "Grußformel", fix: "Schreibe hej då getrennt.", example: "Hej då." },
  { pattern: /\bin (Zürich|Stockholm|Volketswil|Schweiz|Sverige)\b/i, label: "i/in", fix: "Auf Schwedisch nutzt du hier i, nicht in.", example: "Jag bor i Schweiz." },
  { pattern: /\bmit\b/i, label: "med/mit", fix: "Auf Schwedisch heißt mit: med.", example: "Jag arbetar med transport." },
  { pattern: /\bfrån Sverige\b.*\bbo\b|\bbor från\b/i, label: "från/i", fix: "Kommen nutzt från. Wohnen nutzt i.", example: "Jag kommer från Schweiz. Jag bor i Schweiz." },
  { pattern: /\bingen barn\b/i, label: "ingen/inga", fix: "Barn ist hier Plural. Nutze inga.", example: "Jag har inga barn." },
  { pattern: /\binga bror\b|\binga syster\b|\binga mamma\b|\binga pappa\b/i, label: "ingen/inga", fix: "Bei Singular-en-Wörtern nutzt du ingen.", example: "Jag har ingen bror." },
  { pattern: /\bmin barn\b|\bmin hus\b|\bmin rum\b/i, label: "min/mitt", fix: "Bei ett-Wörtern nutzt du mitt.", example: "Mitt barn talar tyska." },
  { pattern: /\bmitt mamma\b|\bmitt pappa\b|\bmitt syster\b|\bmitt bror\b/i, label: "min/mitt", fix: "Bei en-Wörtern nutzt du min.", example: "Min mamma bor i Schweiz." },
  { pattern: /\bmin barn\b|\bmitt barnen\b/i, label: "mina", fix: "Für Plural nutzt du mina.", example: "Mina barn bor här." },
  { pattern: /\ben hus\b/i, label: "en/ett", fix: "Hus ist ein ett-Wort.", example: "Ett hus." },
  { pattern: /\bett bil\b|\bett lägenhet\b|\bett jacka\b/i, label: "en/ett", fix: "Diese Wörter sind en-Wörter.", example: "En bil. En lägenhet. En jacka." },
  { pattern: /\bbil är\b/i, label: "bestimmte Form", fix: "Wenn du das Auto meinst: bilen.", example: "Bilen är stor." },
  { pattern: /\bhus är\b/i, label: "bestimmte Form", fix: "Wenn du das Haus meinst: huset.", example: "Huset är stort." },
  { pattern: /\bhuset är stor\b/i, label: "Adjektiv", fix: "Bei ett-Wörtern bekommt das Adjektiv oft -t.", example: "Huset är stort." },
  { pattern: /\bbilen är stort\b/i, label: "Adjektiv", fix: "Bei en-Wörtern ohne Neutrum: stor.", example: "Bilen är stor." },
  { pattern: /\bvad klockan\b|\bhur mycket är klockan\b/i, label: "Uhrzeit", fix: "Frage nach der Uhrzeit mit vad är klockan?", example: "Vad är klockan?" },
  { pattern: /\bklockan åtta\b/i, label: "Uhrzeit", fix: "Bei Es ist acht Uhr nutzt du klockan är åtta.", example: "Klockan är åtta." },
  { pattern: /\bidag jag\b|\bimorgon jag\b|\bnu jag\b/i, label: "Wortstellung", fix: "Wenn der Satz mit idag/imorgon/nu beginnt, kommt das Verb auf Position 2.", example: "Idag jobbar jag." },
  { pattern: /\bjag vill kaffe\b/i, label: "vill ha", fix: "Für ich möchte etwas nutzt du vill ha.", example: "Jag vill ha kaffe." },
  { pattern: /\bvad kostar den\b/i, label: "det/den", fix: "Allgemein fragst du meistens vad kostar det?", example: "Vad kostar det?" },
  { pattern: /\bjag behöver läkare\b/i, label: "Artikel", fix: "Bei einen Arzt nutzt du en läkare.", example: "Jag behöver en läkare." },
  { pattern: /\bjag har huvud värk\b/i, label: "Rechtschreibung", fix: "Kopfschmerzen schreibt man huvudvärk.", example: "Jag har huvudvärk." },
  { pattern: /\bvar är stationen\b/i, label: "liegt", fix: "Für wo liegt nutzt du var ligger.", example: "Var ligger stationen?" },
  { pattern: /\btill Schweiz\b|\btill Zürich\b.*\bbor\b/i, label: "i/till", fix: "Wohnen ist i. Bewegung/Reise ist till.", example: "Jag bor i Schweiz. Jag åker till Stockholm." },
  { pattern: /\bigår jag\b/i, label: "Wortstellung", fix: "Nach igår kommt das Verb auf Position 2.", example: "Igår var jag hemma." },
  { pattern: /\bjag var jobbar\b|\bjag jobbade hemma\?/i, label: "Vergangenheit", fix: "Für ich arbeitete nutzt du jobbade.", example: "Jag jobbade igår." },
  { pattern: /\bmin syster lär mig\b|\bmin mamma lär mig\b/i, label: "reflexiv", fix: "Bei min syster/min mamma heißt es lär sig.", example: "Min syster lär sig svenska." },
  { pattern: /\bdu lär mig\b/i, label: "reflexiv", fix: "Bei du heißt es lär dig.", example: "Du lär dig svenska." }
];

const roastMessages = [
  "Hier hast du maximal verkackt. Der Satz liegt rauchend im Straßengraben, aber wir ziehen ihn da wieder raus.",
  "Autsch. Das war kein Schwedisch, das war ein frontaler Grammatikunfall mit Totalschaden.",
  "Du hast die Regel gesehen und sie behandelt wie eine rote Ampel um drei Uhr morgens. Dumm gelaufen.",
  "Dieser Satz ist so kaputt, dass selbst der Papierkorb ihn mit spitzen Fingern anfassen würde.",
  "Grammatikalisch hast du gerade das Wohnzimmer angezündet und gefragt, ob es hier warm ist.",
  "Das war sprachlich ein Griff ins Klo. Tief. Mit beiden Händen. Jetzt waschen wir das sauber.",
  "Dein Satz hat A1 gesehen und ist panisch rückwärts aus dem Fenster gesprungen.",
  "Schwedisch hat diesen Satz gelesen und direkt eine einstweilige Verfügung beantragt.",
  "Das war kein Fehler mehr, das war ein Verbrechen gegen einfache Satzstellung.",
  "Du hast die Grammatik gerade öffentlich hingerichtet. Ohne Prozess. Ohne Würde.",
  "Dieser Satz ist mit Anlauf gegen die Wand gelaufen und hat danach der Wand die Schuld gegeben.",
  "Das ist so schief, dass sogar ein kaputter IKEA-Schrank stabiler wirkt.",
  "Dein Schwedisch hat gerade versucht, cool zu wirken, und ist auf einer Bananenschale aus 'inte' ausgerutscht.",
  "Hier riecht es nach verbranntem Satzbau und schlechten Entscheidungen.",
  "Du hast gerade ein kleines sprachliches Massaker angerichtet. Zum Glück ist A1 robust.",
  "Der Satz ist nicht falsch abgebogen. Der hat das Lenkrad aus dem Fenster geworfen.",
  "Das war eine grammatikalische Bankrotterklärung mit hübscher Beleuchtung.",
  "Wunderschön daneben. Wie Dart spielen mit verbundenen Augen und einem Vorschlaghammer.",
  "Der Satz wollte elegant sein, ist aber mit dem Gesicht zuerst in die Verbtabelle gefallen.",
  "Das war nicht knapp falsch. Das war falsch mit Ansage, Blaskapelle und brennendem Banner.",
  "Du hast Schwedisch gerade behandelt wie ein Rätsel, bei dem du die Anleitung gegessen hast.",
  "Dieser Satz braucht keine Korrektur, der braucht Abrissgenehmigung. Danach bauen wir neu."
];

const winMessages = [
  "Sauber. Das war tatsächlich Schwedisch.",
  "Gut. Kein grammatikalischer Notarzt nötig.",
  "Passt. Dein zukünftiges Schwedisch-Ich nickt zufrieden.",
  "Richtig. Kurz genießen, dann weiterarbeiten."
];

const defaultState = {
  activeModule: "intro",
  today: 0,
  totalErrors: 0,
  modules: Object.fromEntries(modules.map((module) => [module.id, { correctStreak: 0, status: "unsicher", attempts: 0 }])),
  errors: {}
};

let state = loadState();

function loadState() {
  const saved = localStorage.getItem("svenska-a1-state");
  if (!saved) return structuredClone(defaultState);
  return { ...structuredClone(defaultState), ...JSON.parse(saved) };
}

function saveState() {
  localStorage.setItem("svenska-a1-state", JSON.stringify(state));
}

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[.!?]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getActiveModule() {
  return modules.find((module) => module.id === state.activeModule) || modules[0];
}

function render() {
  const active = getActiveModule();
  const moduleState = state.modules[active.id];
  document.getElementById("moduleTag").textContent = active.tag;
  document.getElementById("moduleTitle").textContent = active.title;
  document.getElementById("topicStatus").textContent = moduleState.status;
  document.getElementById("todayCount").textContent = state.today;
  document.getElementById("masteredCount").textContent = Object.values(state.modules).filter((item) => item.status === "verstanden").length;
  document.getElementById("errorCount").textContent = state.totalErrors;
  document.getElementById("taskTitle").textContent = "Schreibe maximal 4-6 kurze Sätze.";
  document.getElementById("taskList").innerHTML = active.tasks.map((task) => `<li>${task}</li>`).join("");
  renderModules();
  renderErrorFocus();
}

function renderModules() {
  document.getElementById("moduleList").innerHTML = modules
    .map((module) => {
      const item = state.modules[module.id];
      const active = module.id === state.activeModule ? " active" : "";
      return `<button class="module-button${active}" data-module="${module.id}" type="button">
        ${module.title}
        <span>${item.status} · Serie ${item.correctStreak}/2</span>
      </button>`;
    })
    .join("");
}

function renderErrorFocus() {
  const entries = Object.entries(state.errors).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const list = document.getElementById("errorFocus");
  if (!entries.length) {
    list.innerHTML = "<li>Noch keine typischen Fehler erkannt.</li>";
    return;
  }
  list.innerHTML = entries.map(([label, count]) => `<li>${label}: ${count}x</li>`).join("");
}

function checkAnswer(answer, active) {
  const normalizedAnswer = normalize(answer);
  const expectedHits = active.expected.filter((sentence) => normalizedAnswer.includes(normalize(sentence)));
  const foundRules = rules.filter((rule) => rule.pattern.test(answer));
  const missing = active.expected.filter((sentence) => !normalizedAnswer.includes(normalize(sentence)));
  const enoughExpected = expectedHits.length >= Math.min(3, active.expected.length);
  const passed = foundRules.length === 0 && enoughExpected;
  return { passed, expectedHits, foundRules, missing };
}

function applyResult(result, active) {
  const moduleState = state.modules[active.id];
  const wasMastered = moduleState.status === "verstanden";
  moduleState.attempts += 1;
  state.today += 1;

  if (result.passed) {
    moduleState.correctStreak += 1;
    moduleState.status = moduleState.correctStreak >= 2 ? "verstanden" : "fast sicher";
  } else {
    moduleState.correctStreak = 0;
    moduleState.status = "unsicher";
    state.totalErrors += Math.max(1, result.foundRules.length);
    result.foundRules.forEach((rule) => {
      state.errors[rule.label] = (state.errors[rule.label] || 0) + 1;
    });
  }

  saveState();
  return !wasMastered && moduleState.status === "verstanden";
}

function renderFeedback(result, active) {
  const feedback = document.getElementById("feedback");
  const nextModule = modules[(modules.findIndex((module) => module.id === active.id) + 1) % modules.length];
  const moduleState = state.modules[active.id];
  const items = [];
  const roast = roastMessages[Math.floor(Math.random() * roastMessages.length)];
  const win = winMessages[Math.floor(Math.random() * winMessages.length)];

  if (result.passed) {
    items.push(`<div class="feedback-item ok"><strong>${win}</strong>Das Muster sitzt in dieser Aufgabe. Serie: ${moduleState.correctStreak}/2.</div>`);
  } else {
    items.push(`<div class="feedback-item warn"><strong>${roast}</strong>Ich zeige dir nur die wichtigsten Punkte, damit es A1-gerecht bleibt.</div>`);
  }

  result.foundRules.forEach((rule) => {
    items.push(`<div class="feedback-item bad"><strong>${rule.label}</strong>${rule.fix}<br>Korrekt: <em>${rule.example}</em></div>`);
  });

  if (!result.foundRules.length && result.missing.length) {
    items.push(`<div class="feedback-item bad"><strong>Unvollständig</strong>Diese Sätze fehlten oder waren zu anders formuliert:<br>${result.missing.map((item) => `<em>${item}</em>`).join("<br>")}</div>`);
  }

  const repetition = active.expected.slice(0, 2).join(" / ");
  items.push(`<div class="feedback-item ok"><strong>Kleine Wiederholung</strong>Schreibe gleich noch einmal frei mit diesem Muster: ${repetition}</div>`);

  if (moduleState.correctStreak >= 2) {
    items.push(`<div class="feedback-item ok"><strong>Nächstes Thema bereit</strong>Du kannst jetzt zu "${nextModule.title}" weitergehen.</div>`);
  }

  feedback.innerHTML = `<h3>Korrektur</h3>${items.join("")}`;
  feedback.classList.remove("hidden");
}

function triggerCelebration() {
  const celebration = document.getElementById("celebration");
  if (!celebration) return;
  celebration.classList.remove("fly");
  void celebration.offsetWidth;
  celebration.classList.add("fly");
}

function goNext() {
  const currentIndex = modules.findIndex((module) => module.id === state.activeModule);
  const current = getActiveModule();
  const currentState = state.modules[current.id];

  if (currentState.correctStreak >= 2) {
    state.activeModule = modules[(currentIndex + 1) % modules.length].id;
  } else {
    const weak = Object.entries(state.errors).sort((a, b) => b[1] - a[1])[0];
    if (weak) {
      const target = modules.find((module) => module.tag.toLowerCase().includes(weak[0].toLowerCase())) || modules[currentIndex];
      state.activeModule = target.id;
    }
  }

  saveState();
  document.getElementById("answerInput").value = "";
  document.getElementById("feedback").classList.add("hidden");
  render();
}

document.getElementById("moduleList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-module]");
  if (!button) return;
  state.activeModule = button.dataset.module;
  saveState();
  document.getElementById("feedback").classList.add("hidden");
  render();
});

document.getElementById("answerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = document.getElementById("answerInput").value.trim();
  if (!answer) return;
  const active = getActiveModule();
  const result = checkAnswer(answer, active);
  const justMastered = applyResult(result, active);
  render();
  renderFeedback(result, active);
  if (justMastered) triggerCelebration();
});

document.getElementById("nextBtn").addEventListener("click", goNext);

document.getElementById("resetBtn").addEventListener("click", () => {
  if (!confirm("Fortschritt wirklich zurücksetzen?")) return;
  localStorage.removeItem("svenska-a1-state");
  state = loadState();
  document.getElementById("answerInput").value = "";
  document.getElementById("feedback").classList.add("hidden");
  render();
});

render();
