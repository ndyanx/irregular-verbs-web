const data = [
  // Presente, Pasado, Participio, Significado (Presente - Pasado - Participio), Pronunciación Presente, Pronunciación Pasado, Pronunciación Participio
  ["arise", "arose", "arisen", "surge - surgió - surgido", "aráis", "aróus", "arísn"],
  ["awake", "awoke", "awoken", "despierta - despertó - despertado", "awéik", "awók", "awóukn"],
  ["be", "was/were", "been", "es/está - fue/estuvo - sido/estado", "bi", "waz / wer", "bín"],
  ["bear", "bore", "born", "soporta - soportó - soportado / nace - nació - nacido", "ber", "bor", "born"],
  ["beat", "beat", "beaten", "golpea - golpeó - golpeado", "bit", "bit", "bítn"],
  ["become", "became", "become", "se convierte - se convirtió - convertido", "bikám", "bikéim", "bikám"],
  ["begin", "began", "begun", "empieza - empezó - empezado", "bigín", "bigán", "bigán"],
  ["bend", "bent", "bent", "dobla - dobló - doblado", "bend", "bent", "bent"],
  ["bet", "bet", "bet", "apuesta - apostó - apostado", "bet", "bet", "bet"],
  ["bind", "bound", "bound", "ata - ató - atado", "baind", "baund", "baund"],
  ["bite", "bit", "bitten", "muerde - mordió - mordido", "bait", "bit", "bítn"],
  ["bleed", "bled", "bled", "sangra - sangró - sangrado", "blid", "bled", "bled"],
  ["blow", "blew", "blown", "sopla - sopló - soplado", "blou", "blu", "blóun"],
  ["break", "broke", "broken", "rompe - rompió - roto", "breik", "brouk", "bróukn"],
  ["bring", "brought", "brought", "trae - trajo - traído", "bring", "brot", "brot"],
  ["build", "built", "built", "construye - construyó - construido", "bild", "bilt", "bilt"],
  ["burn", "burned/burnt", "burned/burnt", "quema - quemó - quemado", "bern", "bernd / bernt", "bernd / bernt"],
  ["burst", "burst", "burst", "estalla - estalló - estallado", "berst", "berst", "berst"],
  ["buy", "bought", "bought", "compra - compró - comprado", "bai", "bot", "bot"],
  ["catch", "caught", "caught", "atrapa - atrapó - atrapado", "katch", "kot", "kot"],
  ["choose", "chose", "chosen", "elige - eligió - elegido", "chús", "chous", "chóusn"],
  ["come", "came", "come", "viene - vino - venido", "kam", "keim", "kam"],
  ["cost", "cost", "cost", "cuesta - costó - costado", "kost", "kost", "kost"],
  ["cut", "cut", "cut", "corta - cortó - cortado", "kot", "kot", "kot"],
  ["deal", "dealt", "dealt", "trata - trató - tratado", "dil", "delt", "delt"],
  ["dig", "dug", "dug", "excava - excavó - excavado", "dig", "dag", "dag"],
  ["do", "did", "done", "hace - hizo - hecho", "du", "díd", "don"],
  ["draw", "drew", "drawn", "dibuja - dibujó - dibujado", "drau", "dru", "dron"],
  ["dream", "dreamed/dreamt", "dreamed/dreamt", "sueña - soñó - soñado", "drim", "drimd / dremt", "drimd / dremt"],
  ["drink", "drank", "drunk", "bebe - bebió - bebido", "drink", "dránk", "drank"],
  ["drive", "drove", "driven", "conduce - condujo - conducido", "dráiv", "droov", "drívn"],
  ["eat", "ate", "eaten", "come - comió - comido", "it", "eit", "ítn"],
  ["fall", "fell", "fallen", "cae - cayó - caído", "fóll", "fel", "fólen"],
  ["feed", "fed", "fed", "alimenta - alimentó - alimentado", "fíd", "fed", "fed"],
  ["feel", "felt", "felt", "siente - sintió - sentido", "fíil", "felt", "felt"],
  ["fight", "fought", "fought", "pelea - peleó - peleado", "fáit", "fot", "fot"],
  ["find", "found", "found", "encuentra - encontró - encontrado", "fáind", "faund", "faund"],
  ["fly", "flew", "flown", "vuela - voló - volado", "flái", "flú", "flóun"],
  ["forget", "forgot", "forgotten", "olvida - olvidó - olvidado", "forguét", "forgót", "forgótn"],
  ["forgive", "forgave", "forgiven", "perdona - perdonó - perdonado", "forgív", "forgév", "forgívn"],
  ["freeze", "froze", "frozen", "congela - congeló - congelado", "fríz", "fróuz", "fróuzn"],
  ["get", "got", "gotten", "obtiene - obtuvo - obtenido", "guét", "gót", "gótn"],
  ["give", "gave", "given", "da - dio - dado", "guív", "géiv", "guívn"],
  ["go", "went", "gone", "va - fue - ido", "góu", "uént", "gon"],
  ["grind", "ground", "ground", "muele - molió - molido", "graind", "graund", "graund"],
  ["grow", "grew", "grown", "crece - creció - crecido", "gróu", "grú", "gróun"],
  ["hang", "hung", "hung", "cuelga - colgó - colgado", "háng", "háng", "háng"],
  ["have", "had", "had", "tiene - tuvo - tenido", "jav", "jád", "jád"],
  ["hear", "heard", "heard", "oye - oyó - oído", "jír", "jérd", "jérd"],
  ["hide", "hid", "hidden", "esconde - escondió - escondido", "jaid", "jid", "jídn"],
  ["hit", "hit", "hit", "golpea - golpeó - golpeado", "jit", "jit", "jit"],
  ["hold", "held", "held", "sostiene - sostuvo - sostenido", "jould", "jeld", "jeld"],
  ["hurt", "hurt", "hurt", "hiere - hirió - herido", "jert", "jert", "jert"],
  ["keep", "kept", "kept", "mantiene - mantuvo - mantenido", "kíp", "kept", "kept"],
  ["know", "knew", "known", "sabe - supo - sabido", "nóu", "nú", "nóun"],
  ["lay", "laid", "laid", "pone - puso - puesto", "léi", "léid", "léid"],
  ["lead", "led", "led", "guía - guió - guiado", "liid", "led", "led"],
  ["learn", "learned/learnt", "learned/learnt", "aprende - aprendió - aprendido", "lern", "lernd / lernt", "lernd / lernt"],
  ["leave", "left", "left", "deja - dejó - dejado", "lív", "left", "left"],
  ["lend", "lent", "lent", "presta - prestó - prestado", "lend", "lent", "lent"],
  ["let", "let", "let", "deja - dejó - dejado", "let", "let", "let"],
  ["lie", "lay", "lain", "miente - mintió - mentido", "lai", "lei", "lein"],
  ["light", "lit", "lit", "ilumina - iluminó - iluminado", "láit", "lit", "lit"],
  ["lose", "lost", "lost", "pierde - perdió - perdido", "lúus", "lost", "lost"],
  ["make", "made", "made", "hace - hizo - hecho", "meik", "meid", "meid"],
  ["mean", "meant", "meant", "significa - significó - significado", "mín", "ment", "ment"],
  ["meet", "met", "met", "encuentra - encontró - encontrado", "miit", "met", "met"],
  ["pay", "paid", "paid", "paga - pagó - pagado", "pei", "peid", "peid"],
  ["put", "put", "put", "pone - puso - puesto", "put", "put", "put"],
  ["quit", "quit", "quit", "deja - dejó - dejado", "kwit", "kwit", "kwit"],
  ["read", "read", "read", "lee - leyó - leído", "ríid", "red", "red"],
  ["ride", "rode", "ridden", "monta - montó - montado", "ráid", "ród", "rídn"],
  ["ring", "rang", "rung", "suena - sonó - sonado", "ring", "rang", "rang"],
  ["rise", "rose", "risen", "se eleva - se elevó - elevado", "ráis", "róuz", "rízn"],
  ["run", "ran", "run", "corre - corrió - corrido", "rán", "rán", "rán"],
  ["say", "said", "said", "dice - dijo - dicho", "sei", "sed", "sed"],
  ["see", "saw", "seen", "ve - vio - visto", "sí", "só", "sín"],
  ["seek", "sought", "sought", "busca - buscó - buscado", "sík", "soht", "soht"],
  ["shake", "shook", "shaken", "agita - agitó - agitado", "sheik", "shúk", "shéikn"],
  ["sell", "sold", "sold", "vende - vendió - vendido", "sel", "sóuld", "sóuld"],
  ["send", "sent", "sent", "envía - envió - enviado", "send", "sent", "sent"],
  ["set", "set", "set", "pone - puso - puesto", "set", "set", "set"],
  ["shine", "shone/shined", "shone/shined", "brilla - brilló - brillado", "sháin", "shón", "shón"],
  ["shoot", "shot", "shot", "dispara - disparó - disparado", "shut", "shat", "shat"],
  ["show", "showed", "shown/showed", "muestra - mostró - mostrado", "shou", "shoud", "shóun / shoud"],
  ["shrink", "shrank", "shrunk", "encoge - encogió - encogido", "shrínk", "shránk", "shrank"],
  ["shut", "shut", "shut", "cierra - cerró - cerrado", "shat", "shat", "shat"],
  ["sing", "sang", "sung", "canta - cantó - cantado", "sing", "sáng", "sang"],
  ["sink", "sank", "sunk", "hunde - hundió - hundido", "sink", "sánk", "sank"],
  ["sit", "sat", "sat", "se sienta - se sentó - sentado", "sit", "sát", "sát"],
  ["sleep", "slept", "slept", "duerme - durmió - dormido", "slíp", "slept", "slept"],
  ["slide", "slid", "slid", "desliza - deslizó - deslizado", "slaid", "slid", "slid"],
  ["speak", "spoke", "spoken", "habla - habló - hablado", "spík", "spóuk", "spóukn"],
  ["speed", "sped", "sped", "acelera - aceleró - acelerado", "spíd", "spéd", "spéd"],
  ["spend", "spent", "spent", "gasta - gastó - gastado", "spénd", "spént", "spént"],
  ["split", "split", "split", "divide - dividió - dividido", "split", "split", "split"],
  ["spread", "spread", "spread", "extiende - extendió - extendido", "spred", "spred", "spred"],
  ["stand", "stood", "stood", "está de pie - estuvo de pie - estado de pie", "stánd", "stúd", "stúd"],
  ["steal", "stole", "stolen", "roba - robó - robado", "stíl", "stoul", "stóuln"],
  ["stick", "stuck", "stuck", "pega - pegó - pegado", "stík", "sták", "sták"],
  ["sting", "stung", "stung", "pica - picó - picado", "stíng", "stúng", "stúng"],
  ["stink", "stank", "stunk", "apesta - apestó - apestado", "stink", "stánk", "stank"],
  ["strike", "struck", "struck/stricken", "golpea - golpeó - golpeado", "straik", "strák", "strák / stríkn"],
  ["string", "strung", "strung", "ata - ató - atado", "stríng", "strúng", "strúng"],
  ["swear", "swore", "sworn", "jura - juró - jurado", "swér", "swór", "swórn"],
  ["sweep", "swept", "swept", "barre - barrió - barrido", "swíp", "swept", "swept"],
  ["swim", "swam", "swum", "nada - nadó - nadado", "swím", "swám", "swam"],
  ["take", "took", "taken", "toma - tomó - tomado", "téik", "túk", "téikn"],
  ["teach", "taught", "taught", "enseña - enseñó - enseñado", "tíich", "tót", "tót"],
  ["tear", "tore", "torn", "rasga - rasgó - rasgado", "tíar", "tór", "tórn"],
  ["tell", "told", "told", "cuenta - contó - contado", "tél", "tóuld", "tóuld"],
  ["think", "thought", "thought", "piensa - pensó - pensado", "zink", "zóut", "zóut"],
  ["throw", "threw", "thrown", "lanza - lanzó - lanzado", "zróu", "zrú", "zróun"],
  ["understand", "understood", "understood", "entiende - entendió - entendido", "ánderstánd", "ánderstúd", "ánderstúd"],
  ["wake", "woke", "woken", "despierta - despertó - despertado", "wéik", "wóuk", "wóukn"],
  ["wear", "wore", "worn", "viste - vistió - vestido", "wér", "wór", "wórn"],
  ["wed", "wedded/wed", "wedded/wed", "se casa - se casó - casado", "wéd", "wéd", "wéd"],
  ["weep", "wept", "wept", "llora - lloró - llorado", "wíip", "wept", "wept"],
  ["wet", "wet/wetted", "wet/wetted", "moja - mojó - mojado", "wét", "wét", "wét"],
  ["win", "won", "won", "gana - ganó - ganado", "wín", "wón", "wón"],
  ["wind", "wound", "wound", "sopla - sopló - soplado", "wínd", "wúnd", "wúnd"],
  ["write", "wrote", "written", "escribe - escribió - escrito", "ráit", "rout", "rítn"]
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
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
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