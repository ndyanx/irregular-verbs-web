const data = [
// Presente, Pasado, Significado (Presente - Pasado), Pronunciación Presente, Pronunciación Pasado
["arise", "arose", "surge - surgió", "aráis", "aróus"],
["awake", "awoke", "despierta - despertó", "awéik", "awók"],
["am / are / is", "was / were", "es/está - fue/estuvo", "am/is/ar", "guás / güer"],
["bear", "bore", "soporta - soportó / nace - nació", "ber", "bor"],
["beat", "beat", "golpea - golpeó", "bit", "bit"],
["become", "became", "se convierte - se convirtió", "bikám", "bikéim"],
["begin", "began", "empieza - empezó", "bigín", "bigán"],
["bend", "bent", "dobla - dobló", "bend", "bent"],
["bet", "bet", "apuesta - apostó", "bet", "bet"],
["bind", "bound", "ata - ató", "baind", "baund"],
["bite", "bit", "muerde - mordió", "bait", "bit"],
["bleed", "bled", "sangra - sangró", "blid", "bled"],
["blow", "blew", "sopla - sopló", "blou", "blu"],
["break", "broke", "rompe - rompió", "breik", "brouk"],
["bring", "brought", "trae - trajo", "bring", "brot"],
["build", "built", "construye - construyó", "bild", "bilt"],
["burn", "burned / burnt", "quema - quemó", "bern", "bernd / bernt"],
["burst", "burst", "estalla - estalló", "berst", "berst"],
["buy", "bought", "compra - compró", "bai", "bot"],
["catch", "caught", "atrapa - atrapó", "katch", "kot"],
["choose", "chose", "elige - eligió", "chús", "chous"],
["come", "came", "viene - vino", "kam", "keim"],
["cost", "cost", "cuesta - costó", "kost", "kost"],
["cut", "cut", "corta - cortó", "kot", "kot"],
["deal", "dealt", "trata - trató", "dil", "delt"],
["dig", "dug", "excava - excavó", "dig", "dag"],
["do", "did", "hace - hizo", "du", "díd"],
["draw", "drew", "dibuja - dibujó", "drau", "dru"],
["dream", "dreamed / dreamt", "sueña - soñó", "drim", "drimd"],
["drink", "drank", "bebe - bebió", "drink", "dránk"],
["drive", "drove", "conduce - condujo", "dráiv", "droov"],
["eat", "ate", "come - comió", "it", "eit"],
["fall", "fell", "cae - cayó", "fóll", "fel"],
["feed", "fed", "alimenta - alimentó", "fíd", "fed"],
["feel", "felt", "siente - sintió", "fíil", "felt"],
["fight", "fought", "pelea - peleó", "fáit", "fot"],
["find", "found", "encuentra - encontró", "fáind", "faund"],
["fly", "flew", "vuela - voló", "flái", "flú"],
["forget", "forgot", "olvida - olvidó", "forguét", "forgót"],
["forgive", "forgave", "perdona - perdonó", "forgív", "forgév"],
["freeze", "froze", "congela - congeló", "fríz", "fróuz"],
["get", "got", "obtiene - obtuvo", "guét", "gót"],
["give", "gave", "da - dio", "guív", "géiv"],
["go", "went", "va - fue", "góu", "uént"],
["grind", "ground", "muele - molió", "graind", "graund"],
["grow", "grew", "crece - creció", "gróu", "grú"],
["hang", "hung", "cuelga - colgó", "háng", "háng"],
["have / has", "had", "tiene - tuvo", "jav", "jád"],
["hear", "heard", "oye - oyó", "jír", "jérd"],
["hide", "hid", "esconde - escondió", "jaid", "jid"],
["hit", "hit", "golpea - golpeó", "jit", "jit"],
["hold", "held", "sostiene - sostuvo", "jould", "jeld"],
["hurt", "hurt", "hiere - hirió", "jert", "jert"],
["keep", "kept", "mantiene - mantuvo", "kíp", "kept"],
["know", "knew", "sabe - supo", "nóu", "nú"],
["lay", "laid", "pone - puso", "léi", "léid"],
["lead", "led", "guía - guió", "liid", "led"],
["learn", "learned / learnt", "aprende - aprendió", "lern", "lernt"],
["leave", "left", "deja - dejó", "lív", "left"],
["lend", "lent", "presta - prestó", "lend", "lent"],
["let", "let", "deja - dejó", "let", "let"],
["lie", "lay", "miente - mintió", "lai", "lei"],
["light", "lit", "ilumina - iluminó", "láit", "lit"],
["lose", "lost", "pierde - perdió", "lúus", "lost"],
["make", "made", "hace - hizo", "meik", "meid"],
["mean", "meant", "significa - significó", "mín", "ment"],
["meet", "met", "encuentra - encontró", "miit", "met"],
["pay", "paid", "paga - pagó", "pei", "peid"],
["put", "put", "pone - puso", "put", "put"],
["quit", "quit", "deja - dejó", "kwit", "kwit"],
["read", "read", "lee - leyó", "ríid", "red"],
["ride", "rode", "monta - montó", "ráid", "ród"],
["ring", "rang", "suena - sonó", "ring", "rang"],
["rise", "rose", "se eleva - se elevó", "ráis", "róuz"],
["run", "ran", "corre - corrió", "rán", "rán"],
["say", "said", "dice - dijo", "sei", "sed"],
["see", "saw", "ve - vio", "sí", "só"],
["seek", "sought", "busca - buscó", "sík", "soht"],
["shake", "shook", "agita - agitó", "sheik", "shúk"],
["sell", "sold", "vende - vendió", "sel", "sóuld"],
["send", "sent", "envía - envió", "send", "sent"],
["set", "set", "pone - puso", "set", "set"],
["shine", "shone / shined", "brilla - brilló", "sháin", "shón"],
["shoot", "shot", "dispara - disparó", "shut", "shat"],
["show", "showed", "muestra - mostró", "shou", "shoud"],
["shrink", "shrank", "encoge - encogió", "shrínk", "shránk"],
["shut", "shut", "cierra - cerró", "shat", "shat"],
["sing", "sang", "canta - cantó", "sing", "sáng"],
["sink", "sank", "hunde - hundió", "sink", "sánk"],
["sit", "sat", "se sienta - se sentó", "sit", "sát"],
["sleep", "slept", "duerme - durmió", "slíp", "slept"],
["slide", "slid", "desliza - deslizó", "slaid", "slid"],
["speak", "spoke", "habla - habló", "spík", "spóuk"],
["speed", "sped", "acelera - aceleró", "spíd", "spéd"],
["spend", "spent", "gasta - gastó", "spénd", "spént"],
["split", "split", "divide - dividió", "split", "split"],
["spread", "spread", "extiende - extendió", "spred", "spred"],
["stand", "stood", "está de pie - estuvo de pie", "stánd", "stúd"],
["steal", "stole", "roba - robó", "stíl", "stoul"],
["stick", "stuck", "pega - pegó", "stík", "sták"],
["sting", "stung", "pica - picó", "stíng", "stúng"],
["stink", "stank", "apesta - apestó", "stink", "stánk"],
["strike", "struck", "golpea - golpeó", "straik", "strák"],
["string", "strung", "ata - ató", "stríng", "strúng"],
["swear", "swore", "jura - juró", "swér", "swór"],
["sweep", "swept", "barre - barrió", "swíp", "swept"],
["swim", "swam", "nada - nadó", "swím", "swám"],
["take", "took", "toma - tomó", "téik", "túk"],
["teach", "taught", "enseña - enseñó", "tíich", "tót"],
["tear", "tore", "rasga - rasgó", "tíar", "tór"],
["tell", "told", "cuenta - contó", "tél", "tóuld"],
["think", "thought", "piensa - pensó", "zink", "zóut"],
["throw", "threw", "lanza - lanzó", "zróu", "zrú"],
["understand", "understood", "entiende - entendió", "ánderstánd", "ánderstúd"],
["wake", "woke", "despierta - despertó", "wéik", "wóuk"],
["wear", "wore", "viste - vistió", "wér", "wór"],
["wed", "wedded / wed", "se casa - se casó", "wéd", "wéd"],
["weep", "wept", "llora - lloró", "wíip", "wept"],
["wet", "wet / wetted", "moja - mojó", "wét", "wét"],
["win", "won", "gana - ganó", "wín", "wón"],
["wind", "wound", "sopla - sopló", "wínd", "wúnd"],
["write", "wrote", "escribe - escribió", "ráit", "rout"]
];

let currentPage = 1;
let rowsPerPage = 25;
let filteredData = [...data];
let soundEnabled = false;
let currentlyHighlighted = null;
let currentSort = 'default';
const commonVerbs = ["be", "have", "do", "say", "go", "get", "make", "take", "come", "see"];

// Elementos del DOM
const tableBody = document.querySelector("tbody");
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
const rowsSelector = document.getElementById("rowsPerPage");
const searchInput = document.getElementById("searchInput");
const toggleSoundBtn = document.getElementById("toggle-sound");
const sortOrder = document.getElementById("sortOrder");

// ============ CONTROL DE AUDIO ============
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

// ============ SISTEMA DE ORDENAMIENTO ============
function sortData() {
  switch(currentSort) {
    case 'identical':
      filteredData.sort((a, b) => {
        const aIdentical = (a[0] === a[1]) ? 0 : 1;
        const bIdentical = (b[0] === b[1]) ? 0 : 1;
        return aIdentical - bIdentical;
      });
      break;
      
    case 'easy':
      filteredData.sort((a, b) => {
        const scoreA = a[0].length + (a[0] === a[1] ? 0 : 5) + (commonVerbs.includes(a[0]) ? -10 : 0);
        const scoreB = b[0].length + (b[0] === b[1] ? 0 : 5) + (commonVerbs.includes(b[0]) ? -10 : 0);
        return scoreA - scoreB;
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

// ============ FILTRADO Y PAGINACIÓN ============
function filterData() {
  const searchQuery = searchInput.value.toLowerCase();

  filteredData = [...data];

  
  if(searchQuery) {
    filteredData = filteredData.filter(([present, past, meaning, presPron, pastPron]) => {
      return (
        present.toLowerCase().includes(searchQuery) ||
        past.toLowerCase().includes(searchQuery) ||
        (typeof meaning === 'string' && meaning.toLowerCase().includes(searchQuery)) ||
        presPron.toLowerCase().includes(searchQuery) ||
        pastPron.toLowerCase().includes(searchQuery)
      );
    });
  }

  sortData();
  currentPage = 1;
  renderTable();
}

// ============ RENDERIZADO ============
function renderTable() {
  tableBody.innerHTML = "";
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageData = filteredData.slice(start, end);

  pageData.forEach(([present, past, meaning, presPron, pastPron]) => {
    const [presentMeaning = present, pastMeaning = past] = typeof meaning === 'string' ? meaning.split(" - ") : [];
    
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="present-cell">${present}<br><small>(${presPron})</small></td>
      <td class="past-cell">${past}<br><small>(${pastPron})</small></td>
      <td class="meaning-cell">
        <div class="meaning-wrapper">
          <span class="present-meaning">${presentMeaning}</span>
          <span class="meaning-separator"> - </span>
          <span class="past-meaning">${pastMeaning}</span>
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
    });

    row.querySelector('.past-cell').addEventListener('click', () => {
      highlight(row.querySelector('.past-meaning'), past);
      row.querySelector('.present-meaning').classList.remove('highlight');
    });

    tableBody.appendChild(row);
  });

  updatePageInfo();
}

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

toggleSoundBtn?.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  toggleSoundBtn.textContent = soundEnabled ? '🔊 Sonido ON' : '🔈 Sonido OFF';
  toggleSoundBtn.style.backgroundColor = soundEnabled ? '#4CAF50' : '';
});

prevBtn.addEventListener("click", () => currentPage > 1 && (currentPage--, renderTable()));
nextBtn.addEventListener("click", () => currentPage < Math.ceil(filteredData.length / rowsPerPage) && (currentPage++, renderTable()));
rowsSelector.addEventListener("change", () => (rowsPerPage = parseInt(rowsSelector.value), currentPage = 1, renderTable()))
searchInput.addEventListener("input", () => filterData());
document.getElementById("toggle-mode").addEventListener("click", () => document.body.classList.toggle("dark-mode"));

// ============ INICIALIZACIÓN ============
renderTable();