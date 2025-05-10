const data = [
    // Presente, Pasado, Significado, Pronunciación Presente, Pronunciación Pasado
    ["arise", "arose", "surgir", "aráis", "aróus"],
    ["awake", "awoke", "despertar(se)", "awéik", "awók"],
    ["am / are / is", "was / were", "ser / estar", "am/is/ar", "guás / güer"],
    ["bear", "bore", "soportar / nacer", "ber", "bor"],
    ["beat", "beat", "golpear", "bit", "bit"],
    ["become", "became", "convertirse", "bikám", "bikéim"],
    ["begin", "began", "empezar", "bigín", "bigán"],
    ["bend", "bent", "doblar", "bend", "bent"],
    ["bet", "bet", "apostar", "bet", "bet"],
    ["bind", "bound", "atar", "baind", "baund"],
    ["bite", "bit", "morder", "bait", "bit"],
    ["bleed", "bled", "sangrar", "blid", "bled"],
    ["blow", "blew", "soplar", "blou", "blu"],
    ["break", "broke", "romper", "breik", "brouk"],
    ["bring", "brought", "traer", "bring", "brot"],
    ["build", "built", "construir", "bild", "bilt"],
    ["burn", "burned / burnt", "quemar", "bern", "bernd / bernt"],
    ["burst", "burst", "estallar", "berst", "berst"],
    ["buy", "bought", "comprar", "bai", "bot"],
    ["catch", "caught", "atrapar", "katch", "kot"],
    ["choose", "chose", "elegir", "chús", "chous"],
    ["come", "came", "venir", "kam", "keim"],
    ["cost", "cost", "costar", "kost", "kost"],
    ["cut", "cut", "cortar", "kot", "kot"],
    ["deal", "dealt", "tratar (con)", "dil", "delt"],
    ["dig", "dug", "excavar", "dig", "dag"],
    ["do", "did", "hacer", "du", "díd"],
    ["draw", "drew", "dibujar", "drau", "dru"],
    ["dream", "dreamed / drean", "soñar", "drim", "drimd"],
    ["drink", "drank", "beber", "drink", "dránk"],
    ["drive", "drove", "conducir", "dráiv", "droov"],
    ["eat", "ate", "comer", "it", "eit"],
    ["fall", "fell", "caer", "fóll", "fel"],
    ["feed", "fed", "alimentar", "fíd", "fed"],
    ["feel", "felt", "sentir", "fíil", "felt"],
    ["fight", "fought", "pelear", "fáit", "fot"],
    ["find", "found", "encontrar", "fáind", "faund"],
    ["fly", "flew", "volar", "flái", "flú"],
    ["forget", "forgot", "olvidar", "forguét", "forgót"],
    ["forgive", "forgave", "perdonar", "forgív", "forgév"],
    ["freeze", "froze", "congelar", "fríz", "fróuz"],
    ["get", "got", "obtener", "guét", "gót"],
    ["give", "gave", "dar", "guív", "géiv"],
    ["go", "went", "ir", "góu", "uént"],
    ["grind", "ground", "moler", "graind", "graund"],
    ["grow", "grew", "crecer", "gróu", "grú"],
    ["hang", "hung", "colgar", "háng", "háng"],
    ["have / has", "had", "tener", "jav", "jád"],
    ["hear", "heard", "oír", "jír", "jérd"],
    ["hide", "hid", "esconder", "jaid", "jid"],
    ["hit", "hit", "golpear", "jit", "jit"],
    ["hold", "held", "sostener", "jould", "jeld"],
    ["hurt", "hurt", "herir", "jert", "jert"],
    ["keep", "kept", "mantener", "kíp", "kept"],
    ["know", "knew", "saber", "nóu", "nú"],
    ["lay", "laid", "poner", "léi", "léid"],
    ["lead", "led", "guiar", "liid", "led"],
    ["learn", "learned / learnt", "aprender", "lern", "lernt"],
    ["leave", "left", "dejar", "lív", "left"],
    ["lend", "lent", "prestar", "lend", "lent"],
    ["let", "let", "dejar", "let", "let"],
    ["lie", "lay", "mentir", "lai", "lei"],
    ["light", "lit", "iluminar", "láit", "lit"],
    ["lose", "lost", "perder", "lúus", "lost"],
    ["make", "made", "hacer", "meik", "meid"],
    ["mean", "meant", "significar", "mín", "ment"],
    ["meet", "met", "encontrarse", "miit", "met"],
    ["pay", "paid", "pagar", "pei", "peid"],
    ["put", "put", "poner", "put", "put"],
    ["quit", "quit", "dejar", "kwit", "kwit"],
    ["read", "read", "leer", "ríid", "red"],
    ["ride", "rode", "montar", "ráid", "ród"],
    ["ring", "rang", "sonar", "ring", "rang"],
    ["rise", "rose", "elevar", "ráis", "róuz"],
    ["run", "ran", "correr", "rán", "rán"],
    ["say", "said", "decir", "sei", "sed"],
    ["see", "saw", "ver", "sí", "só"],
    ["seek", "sought", "buscar", "sík", "soht"],
    ["shake", "shook", "agitar", "sheik", "shúk"],
    ["sell", "sold", "vender", "sel", "sóuld"],
    ["send", "sent", "enviar", "send", "sent"],
    ["set", "set", "poner", "set", "set"],
    ["shine", "shone / shined", "brillar", "sháin", "shón"],
    ["shoot", "shot", "disparar", "shut", "shat"],
    ["show", "showed", "mostrar", "shou", "shoud"],
    ["shrink", "shrank", "encoger", "shrínk", "shránk"],
    ["shut", "shut", "cerrar", "shat", "shat"],
    ["sing", "sang", "cantar", "sing", "sáng"],
    ["sink", "sank", "hundir", "sink", "sánk"],
    ["sit", "sat", "sentarse", "sit", "sát"],
    ["sleep", "slept", "dormir", "slíp", "slept"],
    ["slide", "slid", "deslizar", "slaid", "slid"],
    ["speak", "spoke", "hablar", "spík", "spóuk"],
    ["speed", "sped", "acelerar", "spíd", "spéd"],
    ["spend", "spent", "gastar", "spénd", "spént"],
    ["split", "split", "dividir", "split", "split"],
    ["spread", "spread", "extender", "spred", "spred"],
    ["stand", "stood", "estar de pie", "stánd", "stúd"],
    ["steal", "stole", "robar", "stíl", "stoul"],
    ["stick", "stuck", "pegar", "stík", "sták"],
    ["sting", "stung", "picar", "stíng", "stúng"],
    ["stink", "stank", "apestar", "stink", "stánk"],
    ["strike", "struck", "golpear", "straik", "strák"],
    ["string", "strung", "atar", "stríng", "strúng"],
    ["swear", "swore", "juramentar", "swér", "swór"],
    ["sweep", "swept", "barrer", "swíp", "swept"],
    ["swim", "swam", "nadar", "swím", "swám"],
    ["take", "took", "tomar", "téik", "túk"],
    ["teach", "taught", "enseñar", "tíich", "tót"],
    ["tear", "tore", "rasgar", "tíar", "tór"],
    ["tell", "told", "contar", "tél", "tóuld"],
    ["think", "thought", "pensar", "zink", "zóut"],
    ["throw", "threw", "lanzar", "zróu", "zrú"],
    ["understand", "understood", "entender", "ánderstánd", "ánderstúd"],
    ["wake", "woke", "despertar", "wéik", "wóuk"],
    ["wear", "wore", "vestir", "wér", "wór"],
    ["wed", "wedded / wed", "casarse", "wéd", "wéd"],
    ["weep", "wept", "llorar", "wíip", "wept"],
    ["wet", "wet / wetted", "mojar", "wét", "wét"],
    ["win", "won", "ganar", "wín", "wón"],
    ["wind", "wound", "soplar", "wínd", "wúnd"],
    ["write", "wrote", "escribir", "ráit", "rout"]
  ];
  
  
  let currentPage = 1;
  let rowsPerPage = 25;
  let filteredData = [...data]; // Data filtrada para la búsqueda
  
  const tableBody = document.querySelector("tbody");
  const pageInfo = document.getElementById("pageInfo");
  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");
  const rowsSelector = document.getElementById("rowsPerPage");
  const searchInput = document.getElementById("searchInput");
  
  function renderTable() {
    tableBody.innerHTML = "";
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filteredData.slice(start, end);
  
    for (const [present, past, meaning, presPron, pastPron] of pageData) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${present}<br><small>(${presPron})</small></td>
        <td>${past}<br><small>(${pastPron})</small></td>
        <td>${meaning}</td>
      `;
      tableBody.appendChild(row);
    }
  
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
  
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }
  
  // Función para filtrar los datos por la barra de búsqueda
  function filterData() {
    const searchQuery = searchInput.value.toLowerCase();
    filteredData = data.filter(([present, past, meaning, presPron, pastPron]) => {
      return (
        present.toLowerCase().includes(searchQuery) ||
        past.toLowerCase().includes(searchQuery) ||
        meaning.toLowerCase().includes(searchQuery) ||
        presPron.toLowerCase().includes(searchQuery) ||
        pastPron.toLowerCase().includes(searchQuery)
      );
    });
    currentPage = 1; // Resetear a la primera página al realizar una búsqueda
    renderTable();
  }
  
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderTable();
    }
  });
  
  nextBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(filteredData.length / rowsPerPage)) {
      currentPage++;
      renderTable();
    }
  });
  
  rowsSelector.addEventListener("change", () => {
    rowsPerPage = parseInt(rowsSelector.value);
    currentPage = 1;
    renderTable();
  });
  
  searchInput.addEventListener("input", filterData);
  
  document.getElementById("toggle-mode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  renderTable();
  