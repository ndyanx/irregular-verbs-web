const data = [
  ["arise", "arose", "arisen", "surgir (de un problema/situación) - surgió - surgido", "aráis", "aróus", "arísn"],
  ["awake", "awoke", "awoken", "estar despierto (formal) - estuvo despierto - estado despierto", "awéik", "awók", "awóukn"],
  ["am/are/is", "was/were", "been", "ser/estar - fue/estuvo - sido/estado", "em / ar / is", "waz / wer", "bín"],
  ["bear", "bore", "born/borne", "soportar - soportó - soportado / dar a luz (born=nacido, borne=llevado)", "ber", "bor", "born"],
  ["beat", "beat", "beaten", "golpear/vencer - golpeó/venció - golpeado/vencido", "bit", "bit", "bítn"],
  ["become", "became", "become", "convertirse en - se convirtió en - convertido", "bikám", "bikéim", "bikám"],
  ["begin", "began", "begun", "empezar - empezó - empezado", "bigín", "bigán", "bigán"],
  ["bend", "bent", "bent", "doblar(se) - dobló - doblado", "bend", "bent", "bent"],
  ["bet", "bet", "bet", "apostar - apostó - apostado", "bet", "bet", "bet"],
  ["bind", "bound", "bound", "atar/unir - ató/unió - atado/unido", "baind", "baund", "baund"],
  ["bite", "bit", "bitten", "morder - mordió - mordido", "bait", "bit", "bítn"],
  ["bleed", "bled", "bled", "sangrar - sangró - sangrado", "blid", "bled", "bled"],
  ["blow", "blew", "blown", "soplar/explotar - sopló/explotó - soplado/explotado", "blou", "blu", "blóun"],
  ["break", "broke", "broken", "romper(se) - rompió - roto", "breik", "brouk", "bróukn"],
  ["bring", "brought", "brought", "traer - trajo - traído", "bring", "brot", "brot"],
  ["build", "built", "built", "construir - construyó - construido", "bild", "bilt", "bilt"],
  ["burn", "burned/burnt", "burned/burnt", "quemar(se) - quemó - quemado", "bern", "bernd / bernt", "bernd / bernt"],
  ["burst", "burst", "burst", "explotar/reventar - estalló - estallado", "berst", "berst", "berst"],
  ["buy", "bought", "bought", "comprar - compró - comprado", "bai", "bot", "bot"],
  ["catch", "caught", "caught", "atrapar - atrapó - atrapado", "katch", "kot", "kot"],
  ["choose", "chose", "chosen", "elegir - eligió - elegido", "chús", "chous", "chóusn"],
  ["come", "came", "come", "venir - vino - venido", "kam", "keim", "kam"],
  ["cost", "cost", "cost", "costar - costó - costado", "kost", "kost", "kost"],
  ["cut", "cut", "cut", "cortar - cortó - cortado", "kot", "kot", "kot"],
  ["deal", "dealt", "dealt", "tratar (deal with=lidiar con) - trató - tratado", "dil", "delt", "delt"],
  ["dig", "dug", "dug", "cavar - cavó - cavado", "dig", "dag", "dag"],
  ["do", "did", "done", "hacer - hizo - hecho", "du", "díd", "don"],
  ["draw", "drew", "drawn", "dibujar - dibujó - dibujado", "drau", "dru", "dron"],
  ["dream", "dreamed/dreamt", "dreamed/dreamt", "soñar - soñó - soñado", "drim", "drimd / dremt", "drimd / dremt"],
  ["drink", "drank", "drunk", "beber - bebió - bebido", "drink", "dránk", "drank"],
  ["drive", "drove", "driven", "conducir - condujo - conducido", "dráiv", "droov", "drívn"],
  ["eat", "ate", "eaten", "comer - comió - comido", "it", "eit", "ítn"],
  ["fall", "fell", "fallen", "caer(se) - cayó - caído", "fóll", "fel", "fólen"],
  ["feed", "fed", "fed", "alimentar - alimentó - alimentado", "fíd", "fed", "fed"],
  ["feel", "felt", "felt", "sentir(se) - sintió - sentido", "fíil", "felt", "felt"],
  ["fight", "fought", "fought", "pelear - peleó - peleado", "fáit", "fot", "fot"],
  ["find", "found", "found", "encontrar - encontró - encontrado", "fáind", "faund", "faund"],
  ["fly", "flew", "flown", "volar - voló - volado", "flái", "flú", "flóun"],
  ["forget", "forgot", "forgotten", "olvidar - olvidó - olvidado", "forguét", "forgót", "forgótn"],
  ["forgive", "forgave", "forgiven", "perdonar - perdonó - perdonado", "forgív", "forgév", "forgívn"],
  ["freeze", "froze", "frozen", "congelar(se) - congeló - congelado", "fríz", "fróuz", "fróuzn"],
  ["get", "got", "gotten", "obtener - obtuvo - obtenido (gotten=US)", "guét", "gót", "gótn"], // Corregido: participio solo "gotten"
  ["give", "gave", "given", "dar - dio - dado", "guív", "géiv", "guívn"],
  ["go", "went", "gone", "ir - fue - ido", "góu", "uént", "gon"],
  ["grind", "ground", "ground", "moler - molió - molido", "graind", "graund", "graund"],
  ["grow", "grew", "grown", "crecer - creció - crecido", "gróu", "grú", "gróun"],
  ["hang", "hung", "hung", "colgar - colgó - colgado (ahorcar=hanged)", "háng", "háng", "háng"],
  ["have", "had", "had", "tener - tuvo - tenido", "jav", "jád", "jád"],
  ["hear", "heard", "heard", "oír - oyó - oído", "jír", "jérd", "jérd"],
  ["hide", "hid", "hidden", "esconder(se) - escondió - escondido", "jaid", "jid", "jídn"],
  ["hit", "hit", "hit", "golpear - golpeó - golpeado", "jit", "jit", "jit"],
  ["hold", "held", "held", "sostener - sostuvo - sostenido", "jould", "jeld", "jeld"],
  ["hurt", "hurt", "hurt", "herir - hirió - herido", "jert", "jert", "jert"],
  ["keep", "kept", "kept", "guardar - guardó - guardado", "kíp", "kept", "kept"],
  ["know", "knew", "known", "saber - supo - sabido", "nóu", "nú", "nóun"],
  ["lay", "laid", "laid", "poner (objetos) - puso - puesto (≠lie=echarse)", "léi", "léid", "léid"],
  ["lead", "led", "led", "guiar - guió - guiado", "liid", "led", "led"],
  ["learn", "learned/learnt", "learned/learnt", "aprender - aprendió - aprendido", "lern", "lernd / lernt", "lernd / lernt"],
  ["leave", "left", "left", "dejar - dejó - dejado", "lív", "left", "left"],
  ["lend", "lent", "lent", "prestar - prestó - prestado", "lend", "lent", "lent"],
  ["let", "let", "let", "permitir - permitió - permitido", "let", "let", "let"],
  ["lie", "lay", "lain", "echarse - se echó - echado (≠lay=poner)", "lai", "lei", "lein"], // Corregido: solo formas de "echarse"
  ["light", "lit", "lit", "encender - encendió - encendido", "láit", "lit", "lit"],
  ["lose", "lost", "lost", "perder - perdió - perdido", "lúus", "lost", "lost"],
  ["make", "made", "made", "hacer - hizo - hecho", "meik", "meid", "meid"],
  ["mean", "meant", "meant", "significar - significó - significado", "mín", "ment", "ment"],
  ["meet", "met", "met", "encontrar(se) - encontró - encontrado", "miit", "met", "met"],
  ["pay", "paid", "paid", "pagar - pagó - pagado", "pei", "peid", "peid"],
  ["put", "put", "put", "poner - puso - puesto", "put", "put", "put"],
  ["quit", "quit", "quit", "dejar - dejó - dejado", "kwit", "kwit", "kwit"],
  ["read", "read", "read", "leer - leyó - leído", "ríid", "red", "red"],
  ["ride", "rode", "ridden", "montar - montó - montado", "ráid", "ród", "rídn"],
  ["ring", "rang", "rung", "sonar - sonó - sonado", "ring", "rang", "rang"],
  ["rise", "rose", "risen", "levantarse - se levantó - levantado", "ráis", "róuz", "rízn"],
  ["run", "ran", "run", "correr - corrió - corrido", "rán", "rán", "rán"],
  ["say", "said", "said", "decir - dijo - dicho", "sei", "sed", "sed"],
  ["see", "saw", "seen", "ver - vio - visto", "sí", "só", "sín"],
  ["seek", "sought", "sought", "buscar - buscó - buscado", "sík", "soht", "soht"],
  ["shake", "shook", "shaken", "sacudir - sacudió - sacudido", "sheik", "shúk", "shéikn"],
  ["sell", "sold", "sold", "vender - vendió - vendido", "sel", "sóuld", "sóuld"],
  ["send", "sent", "sent", "enviar - envió - enviado", "send", "sent", "sent"],
  ["set", "set", "set", "poner - puso - puesto", "set", "set", "set"],
  ["shine", "shone/shined", "shone/shined", "brillar - brilló - brillado", "sháin", "shón / sháind", "shón / sháind"],
  ["shoot", "shot", "shot", "disparar - disparó - disparado", "shut", "shat", "shat"],
  ["show", "showed", "shown/showed", "mostrar - mostró - mostrado", "shou", "shoud", "shóun / shoud"],
  ["shrink", "shrank", "shrunk", "encoger(se) - encogió - encogido", "shrínk", "shránk", "shrank"],
  ["shut", "shut", "shut", "cerrar - cerró - cerrado", "shat", "shat", "shat"],
  ["sing", "sang", "sung", "cantar - cantó - cantado", "sing", "sáng", "sang"],
  ["sink", "sank", "sunk", "hundir(se) - hundió - hundido", "sink", "sánk", "sank"],
  ["sit", "sat", "sat", "sentar(se) - se sentó - sentado", "sit", "sát", "sát"],
  ["sleep", "slept", "slept", "dormir - durmió - dormido", "slíp", "slept", "slept"],
  ["slide", "slid", "slid", "deslizar(se) - deslizó - deslizado", "slaid", "slid", "slid"],
  ["speak", "spoke", "spoken", "hablar - habló - hablado", "spík", "spóuk", "spóukn"],
  ["speed", "sped", "sped", "acelerar - aceleró - acelerado", "spíd", "spéd", "spéd"],
  ["spend", "spent", "spent", "gastar - gastó - gastado", "spénd", "spént", "spént"],
  ["split", "split", "split", "dividir(se) - dividió - dividido", "split", "split", "split"],
  ["spread", "spread", "spread", "extender(se) - extendió - extendido", "spred", "spred", "spred"],
  ["stand", "stood", "stood", "estar de pie - estuvo de pie - estado de pie", "stánd", "stúd", "stúd"],
  ["steal", "stole", "stolen", "robar - robó - robado", "stíl", "stoul", "stóuln"],
  ["stick", "stuck", "stuck", "pegar(se) - pegó - pegado", "stík", "sták", "sták"],
  ["sting", "stung", "stung", "picar - picó - picado", "stíng", "stúng", "stúng"],
  ["stink", "stank", "stunk", "apestar - apestó - apestado", "stink", "stánk", "stank"],
  ["strike", "struck", "struck/stricken", "golpear - golpeó - golpeado (stricken=afectado)", "straik", "strák", "strák / stríkn"],
  ["string", "strung", "strung", "atar - ató - atado", "stríng", "strúng", "strúng"],
  ["swear", "swore", "sworn", "jurar - juró - jurado", "swér", "swór", "swórn"],
  ["sweep", "swept", "swept", "barrer - barrió - barrido", "swíp", "swept", "swept"],
  ["swim", "swam", "swum", "nadar - nadó - nadado", "swím", "swám", "swam"],
  ["take", "took", "taken", "tomar - tomó - tomado", "téik", "túk", "téikn"],
  ["teach", "taught", "taught", "enseñar - enseñó - enseñado", "tíich", "tót", "tót"],
  ["tear", "tore", "torn", "rasgar - rasgó - rasgado", "tíar", "tór", "tórn"],
  ["tell", "told", "told", "decir - dijo - dicho", "tél", "tóuld", "tóuld"],
  ["think", "thought", "thought", "pensar - pensó - pensado", "zink", "zóut", "zóut"],
  ["throw", "threw", "thrown", "lanzar - lanzó - lanzado", "zróu", "zrú", "zróun"],
  ["understand", "understood", "understood", "entender - entendió - entendido", "ánderstánd", "ánderstúd", "ánderstúd"],
  ["wake", "woke", "woken", "despertar(se) - despertó - despertado", "wéik", "wóuk", "wóukn"], // Corregido: formas principales
  ["wear", "wore", "worn", "usar (ropa) - usó - usado", "wér", "wór", "wórn"],
  ["wed", "wedded/wed", "wedded/wed", "casarse - se casó - casado", "wéd", "wédid / wed", "wédid / wed"],
  ["weep", "wept", "wept", "llorar - lloró - llorado", "wíip", "wept", "wept"],
  ["wet", "wet/wetted", "wet/wetted", "mojar(se) - mojó - mojado", "wét", "wét / wétid", "wét / wétid"],
  ["win", "won", "won", "ganar - ganó - ganado", "wín", "wón", "wón"],
  ["wind", "wound", "wound", "enrollar - enrolló - enrollado (≠wind=viento)", "wínd", "wúnd", "wúnd"],
  ["write", "wrote", "written", "escribir - escribió - escrito", "ráit", "rout", "rítn"]
];

let currentPage = 1;
let rowsPerPage = 25;
let filteredData = [...data];
let soundEnabled = false;
let showParticiple = true;
let currentlyHighlighted = null;
let currentSort = 'default';
let inactivityTimer;
const controlsContainer = document.querySelector('.controls-container');
const MOBILE_BREAKPOINT = 768;
const INACTIVITY_DELAY = 3000;
const commonVerbs = ["be", "have", "do", "say", "go", "get", "make", "take", "come", "see"];

// Elementos del DOM
const tableBody = document.querySelector("tbody");
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
const rowsSelector = document.getElementById("rowsPerPage");
const searchInput = document.getElementById("searchInput");
const toggleSoundBtn = document.getElementById("toggle-sound");
const toggleParticipleBtn = document.getElementById("toggle-participle");
const sortOrder = document.getElementById("sortOrder");

/**
 * Reproduce audio del texto usando síntesis de voz
 * @param {string} text - Texto a pronunciar
 * @param {string} lang - Código de idioma (por defecto 'en-US')
 */
function speakWord(text, lang = 'en-US') {
  if (!soundEnabled || !text) return;
  
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    
    const parts = text.split('/');
    
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

/**
 * Verifica si la vista actual es móvil
 * @returns {boolean} - True si es vista móvil
 */
function isMobileView() {
  return window.innerWidth <= MOBILE_BREAKPOINT;
}

/**
 * Muestra los controles y reinicia temporizador de inactividad
 */
function showControls() {
  if (!isMobileView()) return;
  controlsContainer.style.opacity = '1';
  controlsContainer.style.pointerEvents = 'auto';
  resetInactivityTimer();
}

/**
 * Oculta los controles después de inactividad
 */
function hideControls() {
  controlsContainer.style.opacity = '0';
  controlsContainer.style.pointerEvents = 'none';
}

/**
 * Reinicia el temporizador de inactividad
 */
function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(hideControls, INACTIVITY_DELAY);
}

/**
 * Configura listeners para detectar inactividad
 */
function setupInactivityListener() {
  if (!isMobileView()) {
    controlsContainer.style.opacity = '1';
    controlsContainer.style.pointerEvents = 'auto';
    return;
  }

  controlsContainer.style.transition = 'opacity 0.3s ease';
  const activityEvents = ['mousemove', 'touchstart', 'scroll', 'click'];
  activityEvents.forEach(event => {
    document.addEventListener(event, showControls);
  });
  showControls();
}

/**
 * Ordena los datos según el criterio actual
 */
function sortData() {
  switch(currentSort) {
    case 'identical':
      filteredData.sort((a, b) => {
        const aIdentical = (a[0] === a[1] && a[1] === a[2]) ? 0 : 1;
        const bIdentical = (b[0] === b[1] && b[1] === b[2]) ? 0 : 1;
        return aIdentical - bIdentical || a[0].localeCompare(b[0]);
      });
      break;
      
    case 'easy':
      filteredData.sort((a, b) => {
        const scoreA = a[0].length + 
                     (a[0] === a[1] && a[1] === a[2] ? 0 : 5) + 
                     (commonVerbs.includes(a[0]) ? -10 : 0);
        const scoreB = b[0].length + 
                     (b[0] === b[1] && b[1] === b[2] ? 0 : 5) + 
                     (commonVerbs.includes(b[0]) ? -10 : 0);
        return scoreA - scoreB || a[0].localeCompare(b[0]);
      });
      break;
      
    case 'common':
      filteredData.sort((a, b) => {
        const aIndex = commonVerbs.indexOf(a[0]);
        const bIndex = commonVerbs.indexOf(b[0]);
        return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
      });
      break;
      
    default: // 'default' (A-Z)
      filteredData.sort((a, b) => a[0].localeCompare(b[0]));
  }
}

/**
 * Filtra datos según búsqueda y aplica ordenamiento
 */
function filterData() {
  const searchQuery = searchInput.value.toLowerCase();
  filteredData = [...data];
  
  if(searchQuery) {
    filteredData = filteredData.filter(([present, past, participle, meaning, presPron, pastPron, partPron]) => {
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
  currentPage = 1;
  renderTable();
}

/**
 * Renderiza la tabla con los datos actuales
 */
function renderTable() {
  tableBody.innerHTML = "";
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageData = filteredData.slice(start, end);

  pageData.forEach(([present, past, participle, meaning, presPron, pastPron, partPron]) => {
    let meaningParts = typeof meaning === 'string' ? meaning.split(" - ") : [present, past, participle];
    let presentMeaning = meaningParts[0];
    let pastMeaning = meaningParts[1];
    let participleMeaning = showParticiple ? meaningParts[2] : null;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="present-cell">${present}<br><small>(${presPron})</small></td>
      <td class="past-cell">${past}<br><small>(${pastPron})</small></td>
      <td class="participle-cell">${participle}<br><small>(${partPron})</small></td>
      <td class="meaning-cell">
        <div class="meaning-wrapper">
          <span class="present-meaning">${presentMeaning}</span>
          <span class="meaning-separator"> - </span>
          <span class="past-meaning">${pastMeaning}</span>
          ${showParticiple ? `
            <span class="meaning-separator"> - </span>
            <span class="participle-meaning">${participleMeaning}</span>
          ` : ''}
        </div>
      </td>
    `;

    const highlight = (element, word) => {
      if (currentlyHighlighted) currentlyHighlighted.classList.remove('highlight');
      element.classList.add('highlight');
      currentlyHighlighted = element;
      speakWord(word);
    };

    row.querySelector('.present-cell').addEventListener('click', () => {
      highlight(row.querySelector('.present-meaning'), present);
      row.querySelector('.past-meaning').classList.remove('highlight');
      if (showParticiple) {
        row.querySelector('.participle-meaning').classList.remove('highlight');
      }
    });

    row.querySelector('.past-cell').addEventListener('click', () => {
      highlight(row.querySelector('.past-meaning'), past);
      row.querySelector('.present-meaning').classList.remove('highlight');
      if (showParticiple) {
        row.querySelector('.participle-meaning').classList.remove('highlight');
      }
    });

    if (showParticiple) {
      row.querySelector('.participle-cell').addEventListener('click', () => {
        highlight(row.querySelector('.participle-meaning'), participle);
        row.querySelector('.present-meaning').classList.remove('highlight');
        row.querySelector('.past-meaning').classList.remove('highlight');
      });
    }

    tableBody.appendChild(row);
  });

  document.querySelectorAll('.participle-cell, th.participle-column').forEach(el => {
    el.style.display = showParticiple ? '' : 'none';
  });

  updatePageInfo();
}

/**
 * Actualiza la información de paginación
 */
function updatePageInfo() {
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  pageInfo.textContent = `Página ${currentPage} de ${totalPages} | Orden: ${{
    default: 'A-Z',
    identical: 'Iguales',
    easy: 'Fáciles',
    common: 'Comunes'
  }[currentSort]}`;
  
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

// ============ EVENTOS ============
sortOrder.addEventListener('change', function() {
  currentSort = this.value;
  searchInput.value = '';
  filterData();
});

toggleSoundBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  toggleSoundBtn.textContent = soundEnabled ? '🔊 Sonido ON' : '🔈 Sonido OFF';
  toggleSoundBtn.style.backgroundColor = soundEnabled ? '#4CAF50' : '';
  localStorage.setItem('soundEnabled', soundEnabled);
});

toggleParticipleBtn.addEventListener('click', () => {
  showParticiple = !showParticiple;
  toggleParticipleBtn.textContent = showParticiple ? '👁️ Ocultar Participio' : '👁️ Mostrar Participio';
  toggleParticipleBtn.classList.toggle('hidden', !showParticiple);
  localStorage.setItem('showParticiple', showParticiple);
  renderTable();
});

prevBtn.addEventListener("click", () => currentPage > 1 && (currentPage--, renderTable()));
nextBtn.addEventListener("click", () => currentPage < Math.ceil(filteredData.length / rowsPerPage) && (currentPage++, renderTable()));
rowsSelector.addEventListener("change", () => {
  rowsPerPage = parseInt(rowsSelector.value);
  currentPage = 1;
  renderTable();
});
searchInput.addEventListener("input", () => filterData());
document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem('darkMode', document.body.classList.contains("dark-mode"));
});

/**
 * Inicializa la aplicación cargando preferencias y configurando listeners
 */
function init() {
  soundEnabled = localStorage.getItem('soundEnabled') === 'true';
  showParticiple = localStorage.getItem('showParticiple') !== 'false';
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add("dark-mode");
  }

  toggleSoundBtn.textContent = soundEnabled ? '🔊 Sonido ON' : '🔈 Sonido OFF';
  toggleSoundBtn.style.backgroundColor = soundEnabled ? '#4CAF50' : '';
  toggleParticipleBtn.textContent = showParticiple ? '👁️ Ocultar Participio' : '👁️ Mostrar Participio';
  toggleParticipleBtn.classList.toggle('hidden', !showParticiple);

  setupInactivityListener();
  controlsContainer.addEventListener('mouseenter', showControls);
  renderTable();
}

init();

window.addEventListener('resize', () => {
  if (isMobileView()) {
    setupInactivityListener();
  } else {
    controlsContainer.style.opacity = '1';
    controlsContainer.style.pointerEvents = 'auto';
    clearTimeout(inactivityTimer);
  }
});