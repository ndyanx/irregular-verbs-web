const data = [
  ["arise", "arose", "arisen", "surgir (problema/situación) - surgió - surgido", "aráis", "aróus", "arísn"],
  ["awake", "awoke", "awoken", "despertar(se) - despertó - despertado", "awéik", "awóuk", "awóuken"],
  ["am / are / is", "was / were", "been", "ser/estar - fue/estuvo - sido/estado", "em / ar / is", "wós / wér", "bín"],
  ["bear", "bore", "borne / born*", "soportar (*born=nacer) - soportó - soportado/nacido*", "ber", "bor", "born / born*"],
  ["beat", "beat", "beaten", "golpear/vencer - golpeó/venció - golpeado/vencido", "bít", "bít", "bíten"],
  ["become", "became", "become", "convertirse - se convirtió - convertido", "bikám", "bikéim", "bikám"],
  ["begin", "began", "begun", "empezar - empezó - empezado", "bigín", "bigán", "bigán"],
  ["bend", "bent", "bent", "doblar(se) - dobló - doblado", "bend", "bent", "bent"],
  ["bet", "bet", "bet", "apostar - apostó - apostado", "bet", "bet", "bet"],
  ["bind", "bound", "bound", "atar/unir - ató/unió - atado/unido", "báind", "báund", "báund"],
  ["bite", "bit", "bitten", "morder - mordió - mordido", "báit", "bít", "bíten"],
  ["bleed", "bled", "bled", "sangrar - sangró - sangrado", "blíd", "bled", "bled"],
  ["blow", "blew", "blown", "soplar - sopló - soplado", "blóu", "blú", "blóun"],
  ["break", "broke", "broken", "romper - rompió - roto", "bréik", "bróuk", "bróuken"],
  ["bring", "brought", "brought", "traer - trajo - traído", "bring", "brot", "brot"],
  ["build", "built", "built", "construir - construyó - construido", "bild", "bilt", "bilt"],
  ["burn", "burned / burnt", "burned / burnt**", "quemar(se) - quemó - quemado", "bern", "bernd / bernt", "bernd / bernt"],
  ["burst", "burst", "burst", "explotar - explotó - explotado", "berst", "berst", "berst"],
  ["buy", "bought", "bought", "comprar - compró - comprado", "bái", "bot", "bot"],
  ["catch", "caught", "caught", "atrapar - atrapó - atrapado", "kach", "kot", "kot"],
  ["choose", "chose", "chosen", "elegir - eligió - elegido", "chus", "chóus", "chóusen"],
  ["come", "came", "come", "venir - vino - venido", "kam", "kéim", "kam"],
  ["cost", "cost", "cost", "costar - costó - costado", "kost", "kost", "kost"],
  ["cut", "cut", "cut", "cortar - cortó - cortado", "kat", "kat", "kat"],
  ["deal", "dealt", "dealt", "tratar (con algo) - trató - tratado", "díl", "delt", "delt"],
  ["dig", "dug", "dug", "cavar - cavó - cavado", "dig", "dag", "dag"],
  ["do", "did", "done", "hacer - hizo - hecho", "du", "did", "dan"],
  ["draw", "drew", "drawn", "dibujar - dibujó - dibujado", "dro", "dru", "dron"],
  ["dream", "dreamed / dreamt", "dreamed / dreamt**", "soñar - soñó - soñado", "drím", "drímt / drámt", "drímt / drámt"],
  ["drink", "drank", "drunk", "beber - bebió - bebido", "drink", "drank", "drank"],
  ["drive", "drove", "driven", "conducir - condujo - conducido", "dráiv", "dróuv", "dríven"],
  ["eat", "ate", "eaten", "comer - comió - comido", "ít", "éit", "íten"],
  ["fall", "fell", "fallen", "caer(se) - cayó - caído", "fol", "fel", "fólen"],
  ["feed", "fed", "fed", "alimentar - alimentó - alimentado", "fíd", "fed", "fed"],
  ["feel", "felt", "felt", "sentir - sintió - sentido", "fíl", "felt", "felt"],
  ["fight", "fought", "fought", "pelear - peleó - peleado", "fáit", "fot", "fot"],
  ["find", "found", "found", "encontrar - encontró - encontrado", "fáind", "fáund", "fáund"],
  ["fly", "flew", "flown", "volar - voló - volado", "flái", "flú", "flóun"],
  ["forget", "forgot", "forgotten", "olvidar - olvidó - olvidado", "forguét", "forgót", "forgóten"],
  ["forgive", "forgave", "forgiven", "perdonar - perdonó - perdonado", "forguív", "forguéiv", "forguíven"],
  ["freeze", "froze", "frozen", "congelar(se) - congeló - congelado", "frís", "fróus", "fróusen"],
  ["get", "got", "gotten", "obtener - obtuvo - obtenido", "guét", "got", "góten"],
  ["give", "gave", "given", "dar - dio - dado", "guív", "guéiv", "guíven"],
  ["go", "went", "gone", "ir - fue - ido", "góu", "wént", "gón"],
  ["grind", "ground", "ground", "moler - molió - molido", "gráind", "gráund", "gráund"],
  ["grow", "grew", "grown", "crecer - creció - crecido", "gróu", "grú", "gróun"],
  ["hang", "hung", "hung", "colgar - colgó - colgado", "hang", "hang", "hang"],
  ["have / has", "had", "had", "tener - tuvo - tenido", "hav / has", "had", "had"],
  ["hear", "heard", "heard", "oír - oyó - oído", "jír", "jerd", "jerd"],
  ["hide", "hid", "hidden", "esconder(se) - escondió - escondido", "jáid", "jid", "jíden"],
  ["hit", "hit", "hit", "golpear/impactar - golpeó - golpeado", "jit", "jit", "jit"],
  ["hold", "held", "held", "sostener - sostuvo - sostenido", "jóuld", "jeld", "jeld"],
  ["hurt", "hurt", "hurt", "herir/doler - hirió/dolió - herido/dolido", "jert", "jert", "jert"],
  ["keep", "kept", "kept", "guardar - guardó - guardado", "kíp", "kept", "kept"],
  ["know", "knew", "known", "saber/conocer - supo/conoció - sabido/conocido", "nóu", "niú", "nóun"],
  ["lay", "laid", "laid", "poner (objeto) - puso - puesto", "léi", "léid", "léid"],
  ["lead", "led", "led", "guiar - guió - guiado", "líd", "led", "led"],
  ["learn", "learned / learnt", "learned / learnt**", "aprender - aprendió - aprendido", "lern", "lernd / lernt", "lernd / lernt"],
  ["leave", "left", "left", "dejar/irse - dejó/se fue - dejado/ido", "lív", "left", "left"],
  ["lend", "lent", "lent", "prestar - prestó - prestado", "lend", "lent", "lent"],
  ["let", "let", "let", "permitir - permitió - permitido", "let", "let", "let"],
  ["lie", "lay / lied", "lain / lied*", "mentir - mintio - mentido", "lái", "léi / láid", "léin / láid"],
  ["light", "lit", "lit", "encender - encendió - encendido", "láit", "lit", "lit"],
  ["lose", "lost", "lost", "perder - perdió - perdido", "lús", "lost", "lost"],
  ["make", "made", "made", "hacer - hizo - hecho", "méik", "méid", "méid"],
  ["mean", "meant", "meant", "significar - significó - significado", "mín", "ment", "ment"],
  ["meet", "met", "met", "conocer(se) - conoció - conocido", "mít", "met", "met"],
  ["pay", "paid", "paid", "pagar - pagó - pagado", "péi", "péid", "péid"],
  ["put", "put", "put", "poner - puso - puesto", "put", "put", "put"],
  ["quit", "quit", "quit", "dejar (actividad) - dejó - dejado", "kuít", "kuít", "kuít"],
  ["read", "read", "read", "leer - leyó - leído", "ríd", "red", "red"],
  ["ride", "rode", "ridden", "montar - montó - montado", "ráid", "róud", "ríden"],
  ["ring", "rang", "rung", "sonar - sonó - sonado", "ring", "rang", "rang"],
  ["rise", "rose", "risen", "levantarse - se levantó - levantado", "ráis", "róus", "rísn"],
  ["run", "ran", "run", "correr - corrió - corrido", "ran", "ran", "ran"],
  ["say", "said", "said", "decir - dijo - dicho", "séi", "sed", "sed"],
  ["see", "saw", "seen", "ver - vio - visto", "sí", "so", "sín"],
  ["seek", "sought", "sought", "buscar - buscó - buscado", "sík", "sot", "sot"],
  ["shake", "shook", "shaken", "sacudir - sacudió - sacudido", "shéik", "shuk", "shéiken"],
  ["shine", "shone / shined", "shone / shined*", "brillar(lustrar) - brilló/lustró - brillado/lustrado", "sháin", "shón / sháind", "shón / sháind"],
  ["shoot", "shot", "shot", "disparar - disparó - disparado", "shút", "shot", "shot"],
  ["show", "showed", "shown", "mostrar - mostró - mostrado", "shóu", "shóud", "shóun"],
  ["shrink", "shrank", "shrunk", "encoger(se) - encogió - encogido", "shrink", "shrank", "shrank"],
  ["shut", "shut", "shut", "cerrar - cerró - cerrado", "shat", "shat", "shat"],
  ["sing", "sang", "sung", "cantar - cantó - cantado", "sing", "sang", "sang"],
  ["sink", "sank", "sunk", "hundir(se) - se hundió - hundido", "sink", "sank", "sank"],
  ["sit", "sat", "sat", "sentar(se) - se sentó - sentado", "sit", "sat", "sat"],
  ["sleep", "slept", "slept", "dormir - durmió - dormido", "slíp", "slept", "slept"],
  ["slide", "slid", "slid", "deslizar(se) - deslizó - deslizado", "sláid", "slid", "slid"],
  ["speak", "spoke", "spoken", "hablar - habló - hablado", "spík", "spóuk", "spóuken"],
  ["speed", "sped", "sped", "acelerar - aceleró - acelerado", "spíd", "sped", "sped"],
  ["spend", "spent", "spent", "gastar - gastó - gastado", "spend", "spent", "spent"],
  ["split", "split", "split", "dividir(se) - dividió - dividido", "split", "split", "split"],
  ["spread", "spread", "spread", "extender(se) - extendió - extendido", "spred", "spred", "spred"],
  ["stand", "stood", "stood", "estar de pie - estuvo de pie - estado de pie", "stand", "stud", "stud"],
  ["steal", "stole", "stolen", "robar - robó - robado", "stíl", "stól", "stólen"],
  ["stick", "stuck", "stuck", "pegar(se) - pegó - pegado", "stik", "stak", "stak"],
  ["sting", "stung", "stung", "picar (insecto) - picó - picado", "sting", "stang", "stang"],
  ["stink", "stank", "stunk", "apestar - apestó - apestado", "stink", "stank", "stank"],
  ["strike", "struck", "struck", "golpear con fuerza - golpeó - golpeado", "stráik", "strak", "strak"],
  ["swear", "swore", "sworn", "jurar - juró - jurado", "swer", "swor", "sworn"],
  ["sweep", "swept", "swept", "barrer - barrió - barrido", "swíp", "swept", "swept"],
  ["swim", "swam", "swum", "nadar - nadó - nadado", "swim", "swam", "swam"],
  ["take", "took", "taken", "tomar - tomó - tomado", "téik", "tuk", "téiken"],
  ["teach", "taught", "taught", "enseñar - enseñó - enseñado", "tích", "tot", "tot"],
  ["tear", "tore", "torn", "romper/rasgar - rompió/rasgó - roto/rasgado", "ter", "tor", "torn"],
  ["tell", "told", "told", "decir - dijo - dicho", "tel", "told", "told"],
  ["think", "thought", "thought", "pensar - pensó - pensado", "zink", "zot", "zot"],
  ["throw", "threw", "thrown", "lanzar - lanzó - lanzado", "zróu", "zru", "zróun"],
  ["understand", "understood", "understood", "entender - entendió - entendido", "anderstánd", "anderstúd", "anderstúd"],
  ["wake", "woke / waked", "woken / waked / woke**", "despertar(se) - despertó - despertado", "wéik", "wóuk / wéikt", "wóuken / wéikt / wóuk"],
  ["wear", "wore", "worn", "usar (ropa) - usó - usado", "wer", "wor", "worn"],
  ["wed", "wedded / wed", "wedded / wed**", "casar(se) - se casó - casado", "wed", "wédid / wed", "wédid / wed"],
  ["weep", "wept", "wept", "llorar - lloró - llorado", "wíp", "wept", "wept"],
  ["wet", "wet / wetted", "wet / wetted**", "mojar - mojó - mojado", "wet", "wet / wétid", "wet / wétid"],
  ["win", "won", "won", "ganar - ganó - ganado", "win", "won", "won"],
  ["wind", "wound", "wound", "enrollar - enrolló - enrollado", "wáind", "wáund", "wáund"],
  ["write", "wrote", "written", "escribir - escribió - escrito", "ráit", "róut", "ríten"]
];

// ============ VARIABLES GLOBALES ============
const DOM_ELEMENTS = {
  tableBody: document.querySelector("tbody"),
  pageInfo: document.getElementById("pageInfo"),
  prevBtn: document.getElementById("prevPage"),
  nextBtn: document.getElementById("nextPage"),
  rowsSelector: document.getElementById("rowsPerPage"),
  searchInput: document.getElementById("searchInput"),
  soundBtn: document.getElementById("toggle-sound"),
  toggleParticipleBtn: document.getElementById("toggle-participle"),
  sortOrder: document.getElementById("sortOrder"),
  modeBtn: document.getElementById("toggle-mode"),
  quizButton: document.getElementById('quiz-button'),
  quizModal: document.getElementById('quiz-modal'),
  closeQuiz: document.getElementById('close-quiz'),
  quizQuestion: document.getElementById('quiz-question'),
  quizAnswer: document.getElementById('quiz-answer'),
  quizSubmit: document.getElementById('quiz-submit'),
  quizFeedback: document.getElementById('quiz-feedback'),
  quizStats: document.getElementById('quiz-stats')
};

const APP_STATE = {
  currentPage: 1,
  rowsPerPage: 25,
  filteredData: [...data],
  soundEnabled: false,
  showParticiple: true,
  currentlyHighlighted: null,
  currentSort: 'default',
  currentQuizVerb: null,
  quizScore: 0,
  quizAttempts: 0,
  showParticipleInQuiz: true
};

const QUESTION_TYPES = [
  { type: 'meaning_to_base', text: (verb) => `¿Cuál es el verbo en presente para "${verb[3].split(" - ")[0]}"?` },
  { type: 'meaning_to_past', text: (verb) => `¿Cuál es el pasado de "${verb[3].split(" - ")[0]}"?` },
  { type: 'meaning_to_participle', text: (verb) => `¿Cuál es el participio de "${verb[3].split(" - ")[0]}"?` },
  { type: 'base_to_past', text: (verb) => `¿Cuál es el pasado de "${verb[0]}"?` },
  { type: 'base_to_participle', text: (verb) => `¿Cuál es el participio de "${verb[0]}"?` },
  { type: 'past_to_base', text: (verb) => `¿Cuál es el presente de "${verb[1]}"?` }
];

const COMMON_VERBS = ["be", "have", "do", "say", "go", "get", "make", "take", "come", "see"];

// ============ FUNCIONES DE UTILIDAD ============
/**
 * Reproduce audio del texto usando síntesis de voz
 * @param {string} text - Texto a pronunciar
 * @param {string} lang - Código de idioma (por defecto 'en-US')
 */
function speakWord(text, lang = 'en-US') {
  if (!APP_STATE.soundEnabled || !text) return;
  
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    
    const parts = text.replace('*', '').split('/');
    
    parts.forEach((part, index) => {
      if (part) {
        const utterance = new SpeechSynthesisUtterance(part.trim());
        utterance.lang = lang;
        utterance.rate = 0.9;
        speechSynthesis.speak(utterance);
      }
      if (index < parts.length - 1) {
        const pause = new SpeechSynthesisUtterance('');
        pause.lang = lang;
        pause.rate = 0.1;
        speechSynthesis.speak(pause);
      }
    });
  }
}

// ============ FUNCIONES DE ORDENAMIENTO Y FILTRADO ============
/**
 * Ordena los datos según el criterio actual
 */
function sortData() {
  switch(APP_STATE.currentSort) {
    case 'identical':
      APP_STATE.filteredData.sort((a, b) => {
        const aIdentical = (a[0] === a[1] && a[1] === a[2]) ? 0 : 1;
        const bIdentical = (b[0] === b[1] && b[1] === b[2]) ? 0 : 1;
        return aIdentical - bIdentical || a[0].localeCompare(b[0]);
      });
      break;
      
    case 'easy':
      APP_STATE.filteredData.sort((a, b) => {
        const scoreA = a[0].length + 
                     (a[0] === a[1] && a[1] === a[2] ? 0 : 5) + 
                     (COMMON_VERBS.includes(a[0]) ? -10 : 0);
        const scoreB = b[0].length + 
                     (b[0] === b[1] && b[1] === b[2] ? 0 : 5) + 
                     (COMMON_VERBS.includes(b[0]) ? -10 : 0);
        return scoreA - scoreB || a[0].localeCompare(b[0]);
      });
      break;
      
    case 'common':
      APP_STATE.filteredData.sort((a, b) => {
        const aIndex = COMMON_VERBS.indexOf(a[0]);
        const bIndex = COMMON_VERBS.indexOf(b[0]);
        return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
      });
      break;
      
    default: // 'default' (A-Z)
      APP_STATE.filteredData.sort((a, b) => a[0].localeCompare(b[0]));
  }
}

/**
 * Filtra datos según búsqueda y aplica ordenamiento
 */
function filterData() {
  const searchQuery = DOM_ELEMENTS.searchInput.value.toLowerCase();
  APP_STATE.filteredData = [...data];
  
  if(searchQuery) {
    APP_STATE.filteredData = APP_STATE.filteredData.filter(([present, past, participle, meaning, presPron, pastPron, partPron]) => {
      return (
        present.toLowerCase().includes(searchQuery) ||
        past.toLowerCase().includes(searchQuery) ||
        participle.toLowerCase().includes(searchQuery) ||
        (typeof meaning === 'string' && meaning.toLowerCase().includes(searchQuery)) ||
        presPron.toLowerCase().includes(searchQuery) ||
        pastPron.toLowerCase().includes(searchQuery) ||
        partPron.toLowerCase().includes(searchQuery)
      );
    });
  }

  sortData();
  APP_STATE.currentPage = 1;
  renderTable();
}

// ============ FUNCIONES DE RENDERIZADO ============
/**
 * Renderiza la tabla con los datos actuales
 */
function renderTable() {
  DOM_ELEMENTS.tableBody.innerHTML = "";
  const start = (APP_STATE.currentPage - 1) * APP_STATE.rowsPerPage;
  const end = start + APP_STATE.rowsPerPage;
  const pageData = APP_STATE.filteredData.slice(start, end);

  pageData.forEach(([present, past, participle, meaning, presPron, pastPron, partPron]) => {
    let meaningParts = typeof meaning === 'string' ? meaning.split(" - ") : [present, past, participle];
    let presentMeaning = meaningParts[0];
    let pastMeaning = meaningParts[1];
    let participleMeaning = APP_STATE.showParticiple ? meaningParts[2] : null;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="present-cell">${present}<br><small>${presPron}</small></td>
      <td class="past-cell">${past}<br><small>${pastPron}</small></td>
      <td class="participle-cell">${participle}<br><small>${partPron}</small></td>
      <td class="meaning-cell">
        <div class="meaning-wrapper">
          <span class="present-meaning">${presentMeaning}</span>
          <span class="meaning-separator"> - </span>
          <span class="past-meaning">${pastMeaning}</span>
          ${APP_STATE.showParticiple ? `
            <span class="meaning-separator"> - </span>
            <span class="participle-meaning">${participleMeaning}</span>
          ` : ''}
        </div>
      </td>
    `;

    const highlight = (element, word) => {
      if (APP_STATE.currentlyHighlighted) APP_STATE.currentlyHighlighted.classList.remove('highlight');
      element.classList.add('highlight');
      APP_STATE.currentlyHighlighted = element;
      speakWord(word);
    };

    row.querySelector('.present-cell').addEventListener('click', () => {
      highlight(row.querySelector('.present-meaning'), present);
      row.querySelector('.past-meaning').classList.remove('highlight');
      if (APP_STATE.showParticiple) {
        row.querySelector('.participle-meaning').classList.remove('highlight');
      }
    });

    row.querySelector('.past-cell').addEventListener('click', () => {
      highlight(row.querySelector('.past-meaning'), past);
      row.querySelector('.present-meaning').classList.remove('highlight');
      if (APP_STATE.showParticiple) {
        row.querySelector('.participle-meaning').classList.remove('highlight');
      }
    });

    if (APP_STATE.showParticiple) {
      row.querySelector('.participle-cell').addEventListener('click', () => {
        highlight(row.querySelector('.participle-meaning'), participle);
        row.querySelector('.present-meaning').classList.remove('highlight');
        row.querySelector('.past-meaning').classList.remove('highlight');
      });
    }

    DOM_ELEMENTS.tableBody.appendChild(row);
  });

  document.querySelectorAll('.participle-cell, th.participle-column').forEach(el => {
    el.style.display = APP_STATE.showParticiple ? '' : 'none';
  });

  updatePageInfo();
}

/**
 * Actualiza la información de paginación
 */
function updatePageInfo() {
  const totalPages = Math.ceil(APP_STATE.filteredData.length / APP_STATE.rowsPerPage);
  const sortNames = {
    default: 'A-Z',
    identical: 'Formas Idénticas',
    easy: 'Más Fáciles',
    common: 'Más Comunes'
  };
  
  DOM_ELEMENTS.pageInfo.textContent = `Página ${APP_STATE.currentPage} de ${totalPages} | ${sortNames[APP_STATE.currentSort]}`;
  
  DOM_ELEMENTS.prevBtn.disabled = APP_STATE.currentPage === 1;
  DOM_ELEMENTS.nextBtn.disabled = APP_STATE.currentPage === totalPages;
}

// ============ FUNCIONES DEL JUEGO ============
/**
 * Generar nueva pregunta aleatoria
 */
function generateNewQuestion() {
  // Filtrar tipos de pregunta basado en si el participio está activo
  const availableTypes = QUESTION_TYPES.filter(type => {
    if (type.type.includes('participle')) return APP_STATE.showParticipleInQuiz;
    return true;
  });
  
  const randomType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
  APP_STATE.currentQuizVerb = data[Math.floor(Math.random() * data.length)];
  
  DOM_ELEMENTS.quizQuestion.textContent = randomType.text(APP_STATE.currentQuizVerb);
  DOM_ELEMENTS.quizAnswer.value = '';
  DOM_ELEMENTS.quizFeedback.textContent = '';
  DOM_ELEMENTS.quizAnswer.focus();
  
  // Actualizar estadísticas
  DOM_ELEMENTS.quizStats.textContent = `Aciertos: ${APP_STATE.quizScore} / Intentos: ${APP_STATE.quizAttempts}`;
}

/**
 * Verificar respuesta del juego
 */
function checkAnswer() {
  const userAnswer = DOM_ELEMENTS.quizAnswer.value.trim().toLowerCase();
  let correctAnswers = [];
  let isCorrect = false;
  
  // Determinar respuestas correctas basado en el tipo de pregunta
  if (DOM_ELEMENTS.quizQuestion.textContent.includes('presente')) {
    correctAnswers = [APP_STATE.currentQuizVerb[0].toLowerCase()];
  } else if (DOM_ELEMENTS.quizQuestion.textContent.includes('pasado')) {
    correctAnswers = APP_STATE.currentQuizVerb[1].toLowerCase().split('/').map(s => s.trim());
  } else if (DOM_ELEMENTS.quizQuestion.textContent.includes('participio')) {
    correctAnswers = APP_STATE.currentQuizVerb[2].toLowerCase().split('/').map(s => s.trim().replace('*', ''));
  }
  
  // Verificar si la respuesta es correcta (incluyendo variantes)
  isCorrect = correctAnswers.some(correct => 
    userAnswer === correct || 
    (correct.includes(' ') && userAnswer === correct.replace(' ', ''))
  );
  
  // Mostrar feedback
  if (isCorrect) {
    APP_STATE.quizScore++;
    DOM_ELEMENTS.quizFeedback.textContent = '¡Correcto!';
    DOM_ELEMENTS.quizFeedback.className = 'quiz-feedback correct';
    setTimeout(generateNewQuestion, 1500);
  } else {
    DOM_ELEMENTS.quizFeedback.innerHTML = `Incorrecto. La respuesta correcta era: <strong>${correctAnswers.join(' o ')}</strong>`;
    DOM_ELEMENTS.quizFeedback.className = 'quiz-feedback wrong';
  }
  
  APP_STATE.quizAttempts++;
  DOM_ELEMENTS.quizStats.textContent = `Aciertos: ${APP_STATE.quizScore} / Intentos: ${APP_STATE.quizAttempts}`;
}

// ============ MANEJADORES DE EVENTOS ============
function setupEventListeners() {
  // Eventos de la tabla principal
  DOM_ELEMENTS.sortOrder.addEventListener('change', function() {
    APP_STATE.currentSort = this.value;
    DOM_ELEMENTS.searchInput.value = '';
    filterData();
  });

  DOM_ELEMENTS.soundBtn.addEventListener('click', () => {
    APP_STATE.soundEnabled = !APP_STATE.soundEnabled;
    DOM_ELEMENTS.soundBtn.classList.toggle('active');
    localStorage.setItem('soundEnabled', APP_STATE.soundEnabled);
    
    // Actualizar icono según estado
    const soundIcon = DOM_ELEMENTS.soundBtn.querySelector('.sound-icon');
    const soundWaves = DOM_ELEMENTS.soundBtn.querySelectorAll('.sound-wave');
    
    if (APP_STATE.soundEnabled) {
      soundIcon.style.stroke = '#2ecc71';
      soundWaves.forEach(wave => wave.style.stroke = '#2ecc71');
    } else {
      soundIcon.style.stroke = '#f72585';
      soundWaves.forEach(wave => wave.style.stroke = '#f72585');
    }
  });

  DOM_ELEMENTS.toggleParticipleBtn.addEventListener('click', () => {
    APP_STATE.showParticiple = !APP_STATE.showParticiple;
    DOM_ELEMENTS.toggleParticipleBtn.querySelector('span').textContent = 
      APP_STATE.showParticiple ? 'Participio' : 'Mostrar Participio';
    localStorage.setItem('showParticiple', APP_STATE.showParticiple);
    renderTable();
    
    // Efecto visual
    DOM_ELEMENTS.toggleParticipleBtn.classList.toggle('active');
  });

  DOM_ELEMENTS.prevBtn.addEventListener("click", () => {
    if (APP_STATE.currentPage > 1) {
      APP_STATE.currentPage--;
      renderTable();
    }
  });

  DOM_ELEMENTS.nextBtn.addEventListener("click", () => {
    if (APP_STATE.currentPage < Math.ceil(APP_STATE.filteredData.length / APP_STATE.rowsPerPage)) {
      APP_STATE.currentPage++;
      renderTable();
    }
  });

  DOM_ELEMENTS.rowsSelector.addEventListener("change", () => {
    APP_STATE.rowsPerPage = parseInt(DOM_ELEMENTS.rowsSelector.value);
    APP_STATE.currentPage = 1;
    renderTable();
  });

  DOM_ELEMENTS.searchInput.addEventListener("input", () => filterData());

  DOM_ELEMENTS.modeBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem('darkMode', document.body.classList.contains("dark-mode"));
    DOM_ELEMENTS.modeBtn.classList.toggle('active');
    
    // Actualizar icono de luna/sol
    const moonIcon = DOM_ELEMENTS.modeBtn.querySelector('.moon-icon');
    if (document.body.classList.contains("dark-mode")) {
      moonIcon.style.stroke = 'white';
      moonIcon.style.fill = 'white';
    } else {
      moonIcon.style.stroke = '';
      moonIcon.style.fill = 'none';
    }
  });

  // Eventos del juego
  DOM_ELEMENTS.quizButton.addEventListener('click', () => {
    DOM_ELEMENTS.quizModal.style.display = 'flex';
    generateNewQuestion();
    DOM_ELEMENTS.quizAnswer.focus();
  });

  DOM_ELEMENTS.closeQuiz.addEventListener('click', () => {
    DOM_ELEMENTS.quizModal.style.display = 'none';
  });

  DOM_ELEMENTS.quizSubmit.addEventListener('click', checkAnswer);
  DOM_ELEMENTS.quizAnswer.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAnswer();
  });
  
  // Sincronizar con el toggle de participio
  if (DOM_ELEMENTS.toggleParticipleBtn) {
    APP_STATE.showParticipleInQuiz = DOM_ELEMENTS.toggleParticipleBtn.classList.contains('active');
    DOM_ELEMENTS.toggleParticipleBtn.addEventListener('click', () => {
      APP_STATE.showParticipleInQuiz = !APP_STATE.showParticipleInQuiz;
    });
  }

  // Manejar redimensionamiento de ventana
  window.addEventListener('resize', updatePageInfo);
}

// ============ INICIALIZACIÓN ============
function init() {
  // Cargar preferencias
  APP_STATE.soundEnabled = localStorage.getItem('soundEnabled') === 'true';
  APP_STATE.showParticiple = localStorage.getItem('showParticiple') !== 'false';
  
  // Aplicar modo oscuro si está activado
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add("dark-mode");
    DOM_ELEMENTS.modeBtn.classList.add('active');
    DOM_ELEMENTS.modeBtn.querySelector('.moon-icon').style.fill = 'white';
  }

  // Configurar estado inicial de los controles
  DOM_ELEMENTS.soundBtn.classList.toggle('active', APP_STATE.soundEnabled);
  const soundIcon = DOM_ELEMENTS.soundBtn.querySelector('.sound-icon');
  const soundWaves = DOM_ELEMENTS.soundBtn.querySelectorAll('.sound-wave');
  
  if (APP_STATE.soundEnabled) {
    soundIcon.style.stroke = '#2ecc71';
    soundWaves.forEach(wave => wave.style.stroke = '#2ecc71');
  } else {
    soundIcon.style.stroke = '#f72585';
    soundWaves.forEach(wave => wave.style.stroke = '#f72585');
  }
  
  DOM_ELEMENTS.toggleParticipleBtn.querySelector('span').textContent = 
    APP_STATE.showParticiple ? 'Participio' : 'Mostrar Participio';
  DOM_ELEMENTS.toggleParticipleBtn.classList.toggle('active', APP_STATE.showParticiple);

  // Configurar event listeners
  setupEventListeners();

  // Renderizar tabla inicial
  renderTable();
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);