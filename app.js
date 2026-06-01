const modules = [
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
  }
];

const rules = [
  { pattern: /\bja\s+(heter|kommer|bor|talar|kan|vill|har|arbetar|jobbar|äter|dricker|läser|lär)\b/i, label: "ja/jag", fix: "Schreibe jag für ich. Ja bedeutet nur ja.", example: "Jag heter Jay." },
  { pattern: /\bjag kan talar\b/i, label: "kan + Grundform", fix: "Nach kan steht die Grundform: tala, nicht talar.", example: "Jag kan tala svenska." },
  { pattern: /\bjag vill talar\b/i, label: "vill + Grundform", fix: "Nach vill steht die Grundform: tala, nicht talar.", example: "Jag vill tala svenska." },
  { pattern: /\bjag vill bor\b/i, label: "vill + Grundform", fix: "Nach vill steht die Grundform: bo, nicht bor.", example: "Jag vill bo i Sverige." },
  { pattern: /\bjag kan bor\b/i, label: "kan + Grundform", fix: "Nach kan steht die Grundform: bo, nicht bor.", example: "Jag kan bo i Sverige." },
  { pattern: /\bkan tala inte\b|\bvill bo inte\b|\bkan mycket inte\b/i, label: "inte", fix: "Inte steht nach dem ersten Verb.", example: "Jag kan inte tala svenska." },
  { pattern: /\bsvenksa\b/i, label: "Rechtschreibung", fix: "Das Wort heißt svenska.", example: "Jag talar svenska." },
  { pattern: /\bmacket\b/i, label: "Rechtschreibung", fix: "Das Wort heißt mycket.", example: "Jag talar inte mycket svenska." },
  { pattern: /\bfäretag\b/i, label: "Rechtschreibung", fix: "Das Wort heißt företag.", example: "Jag arbetar på ett företag." },
  { pattern: /\barbeter\b/i, label: "Rechtschreibung", fix: "Das Wort heißt arbetar.", example: "Jag arbetar med transport." },
  { pattern: /\bjobber\b/i, label: "Rechtschreibung", fix: "Das Wort heißt jobbar.", example: "Jag jobbar i Volketswil." },
  { pattern: /\bdryckar\b/i, label: "Rechtschreibung", fix: "Das Wort heißt dricker.", example: "Jag dricker kaffe." },
  { pattern: /\bin (Zürich|Stockholm|Volketswil|Schweiz|Sverige)\b/i, label: "i/in", fix: "Auf Schwedisch nutzt du hier i, nicht in.", example: "Jag bor i Schweiz." },
  { pattern: /\bmit\b/i, label: "med/mit", fix: "Auf Schwedisch heißt mit: med.", example: "Jag arbetar med transport." },
  { pattern: /\bingen barn\b/i, label: "ingen/inga", fix: "Barn ist hier Plural. Nutze inga.", example: "Jag har inga barn." },
  { pattern: /\binga bror\b|\binga syster\b|\binga mamma\b|\binga pappa\b/i, label: "ingen/inga", fix: "Bei Singular-en-Wörtern nutzt du ingen.", example: "Jag har ingen bror." },
  { pattern: /\bmin syster lär mig\b|\bmin mamma lär mig\b/i, label: "reflexiv", fix: "Bei min syster/min mamma heißt es lär sig.", example: "Min syster lär sig svenska." },
  { pattern: /\bdu lär mig\b/i, label: "reflexiv", fix: "Bei du heißt es lär dig.", example: "Du lär dig svenska." }
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
}

function renderFeedback(result, active) {
  const feedback = document.getElementById("feedback");
  const nextModule = modules[(modules.findIndex((module) => module.id === active.id) + 1) % modules.length];
  const moduleState = state.modules[active.id];
  const items = [];

  if (result.passed) {
    items.push(`<div class="feedback-item ok"><strong>Gut gemacht.</strong>Das Muster sitzt in dieser Aufgabe. Serie: ${moduleState.correctStreak}/2.</div>`);
  } else {
    items.push(`<div class="feedback-item warn"><strong>Noch nicht ganz.</strong>Ich zeige dir nur die wichtigsten Punkte, damit es A1-gerecht bleibt.</div>`);
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
  applyResult(result, active);
  render();
  renderFeedback(result, active);
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
