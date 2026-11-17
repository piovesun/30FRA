// Motore del gioco "Cosa hai nell'armadio?"
(function(){
  // frasi di più parole -> un solo segno
  const FRASI = [
    ["occhiali da sole","occhiali_sole"],["occhiali scuri","occhiali_sole"],["occhiali tondi","occhiali_tondi"],
    ["giacca di pelle","giacca_pelle"],["giubbotto di pelle","giacca_pelle"],["giubbino di pelle","giacca_pelle"],["chiodo","giacca_pelle"],
    ["giacca di jeans","giacca_jeans"],["giubbotto di jeans","giacca_jeans"],
    ["scarpe da ginnastica","sneakers"],["calze a rete","calze_rete"],["collant a rete","calze_rete"],
    ["camicia hawaiana","camicia_hawaiana"],["camicia a fiori","camicia_hawaiana"],
    ["cappello da cowboy","cappello_cowboy"],["cappello di paglia","cappello_paglia"],["cappello a punta","cappello_punta"],
    ["cappello con piuma","cappello_piuma"],["cappello con fiori","cappello_fiori"],["cappello da cuoco","cappello_cuoco"],
    ["corona di fiori","corona_fiori"],["spada laser","spada_laser"],["noci di cocco","noci_cocco"],["noce di cocco","noci_cocco"],
    ["mazza da cricket","mazza"],["mazza da baseball","mazza"],["palla da bowling","bowling"],
    ["macchina fotografica","macchina_foto"],["muta da sub","muta"],["abito da sposa","abito_sposa"],["vestito da sposa","abito_sposa"],
    ["babbo natale","babbo_natale"],["guanti da boxe","guanti_boxe"],["ciglia finte","ciglia"],["occhi finti","occhi_finti"],
    ["maniche a sbuffo","maniche_sbuffo"],["testa rasata","rasato"],["capelli rasati","rasato"],["pelato","rasato"],["calvo","rasato"],
    ["capelli lunghi","capelli_lunghi"],["unghie lunghe","unghie"],["vote for pedro","pedro"],["costume da elfo","elfo"],
    ["divisa da cameriera","divisa_cameriera"],["divisa da hostess","divisa_hostess"],["divisa scolastica","divisa_scuola"],
    ["tuta da pilota","tuta_pilota"],["camice","camice"],["bianco e nero","righe"],["a righe","righe"],["a quadri","quadri"],
    ["a quadretti","quadri"],["a pois","pois"],["a fiori","fiori"],["parrucca bianca e nera","parrucca_crudelia"],
    ["vestito lungo","vestito_lungo"],["abito lungo","vestito_lungo"],["cappotto lungo","cappotto"],
    ["pantaloni larghi","pantaloni"],["guanti lunghi","guanti_lunghi"],["completo gessato","completo"],
    ["rosa rossa","fiore_rosso"],["maschera da hockey","maschera_hockey"],["camicia da notte","camicia_notte"],["costume da bagno","costume_bagno"],
    ["giacca da cuoco","giacca_cuoco"],["giacca di raso","giacca"],["pantaloni a vita alta","pantaloni"],["divisa scout","divisa_scout"],
    ["tre chignon","chignon"],["a macchie","mucca"],["gonna scozzese","gonna quadri"],["guanto con le lame","guanto artigli"],["gonna a ruota","gonna"],["tutto nero","nero"],["tutta nera","nero"],["tutto rosa","rosa"]
  ];
  const CAPI = {
    maglietta:"maglietta magliette maglia maglie tshirt t shirt tee",
    canottiera:"canottiera canottiere canotta canotte top",
    felpa:"felpa felpe hoodie",
    camicia:"camicia camicie camicetta camicette",
    maglione:"maglione maglioni pullover dolcevita",
    cardigan:"cardigan golfino",
    giacca:"giacca giacche blazer giubbotto giubbino giaccone bomber piumino",
    cappotto:"cappotto cappotti trench soprabito",
    impermeabile:"impermeabile impermeabili kway",
    pantaloni:"pantaloni pantalone calzoni",
    pantaloncini:"pantaloncini shorts bermuda",
    gonna:"gonna gonne minigonna gonnellino",
    vestito:"vestito vestiti abito abiti abitino tubino",
    completo:"completo completi tailleur",
    smoking:"smoking frac",
    tuta:"tuta tute salopette",
    cravatta:"cravatta cravatte",
    papillon:"papillon farfallino",
    gilet:"gilet gile panciotto smanicato",
    bretelle:"bretelle",
    cintura:"cintura cinture cinta",
    sciarpa:"sciarpa sciarpe stola",
    foulard:"foulard",
    bandana:"bandana",
    cappello:"cappello cappelli fedora",
    cappellino:"cappellino berretto",
    basco:"basco",
    bombetta:"bombetta",
    cilindro:"cilindro",
    cuffia:"cuffia cuffietta",
    corona:"corona coroncina",
    cerchietto:"cerchietto",
    fiocco:"fiocco fiocchetto",
    parrucca:"parrucca parrucche",
    occhiali:"occhiali",
    guanti:"guanti guanto",
    stivali:"stivali stivale",
    scarpe:"scarpe scarpa scarpette",
    ballerine:"ballerine",
    sandali:"sandali",
    ciabatte:"ciabatte infradito",
    tacchi:"tacchi",
    calze:"calze collant calzamaglia",
    calzini:"calzini calzettoni",
    accappatoio:"accappatoio",
    vestaglia:"vestaglia",
    pigiama:"pigiama",
    mantello:"mantello mantella",
    tunica:"tunica saio",
    kimono:"kimono",
    grembiule:"grembiule",
    divisa:"divisa uniforme",
    perle:"perle perla",
    collana:"collana medaglione",
    corsetto:"corsetto",
    maschera:"maschera",
    trucco:"trucco",
    katana:"katana",
    spada:"spada",
    forbici:"forbici",
    ascia:"ascia accetta",
    coltello:"coltello",
    frusta:"frusta",
    ombrello:"ombrello",
    bastone:"bastone",
    scopa:"scopa",
    pipa:"pipa",
    chitarra:"chitarra",
    ukulele:"ukulele",
    palloncino:"palloncino",
    valigetta:"valigetta ventiquattrore",
    piume:"piume piuma boa",
    frange:"frange frangia",
    pelliccia:"pelliccia",
    cicatrice:"cicatrice",
    baffi:"baffi baffetti",
    barba:"barba",
    trecce:"trecce treccia codini",
    caschetto:"caschetto",
    gesso:"gesso",
    sangue:"sangue",
    corna:"corna",
    turbante:"turbante",
    zaino:"zaino",
    casco:"casco",
    armatura:"armatura",
    chignon:"chignon",
    cresta:"cresta",
    ciuffo:"ciuffo",
    colletto:"colletto",
    clown:"clown pagliaccio",
    sigaro:"sigaro",
    sigaretta:"sigaretta bocchino",
    distintivo:"distintivo",
    cerotto:"cerotto",
    gobba:"gobba",
    paglia:"paglia",
    libro:"libro",
    borsa:"borsa",
    pianta:"pianta",
    velo:"velo",
    jabot:"jabot",
    paillettes:"paillettes lustrini brillantini",
    girocollo:"girocollo choker",
    lampadina:"lampadina",
    fucile:"fucile pistola",
    retina:"retina",
    imbuto:"imbuto",
    cestino:"cestino",
    mela:"mela",
    coda:"coda",
    conchiglie:"conchiglie",
    orecchie:"orecchie",
    bottoni:"bottoni",
    barchetta:"barchetta",
    corpetto:"corpetto",
    body:"body",
    capelli:"capelli",
    cioccolatini:"cioccolatini",
    bicicletta:"bicicletta bici triciclo",
    tende:"tende tenda",
    velluto:"velluto",
    tutu:"tutu",
    bende:"bende benda bendaggi",
    uncino:"uncino",
    bacchetta:"bacchetta",
    orecchini:"orecchini orecchino",
    artigli:"artigli lame",
    croce:"croce crocifisso",
    racchetta:"racchetta",
    carota:"carota",
    palloncini:"palloncini",
    stuzzicadenti:"stuzzicadenti",
    diamanti:"diamanti",
    cuciture:"cuciture",
    costume:"costume",
    sombrero:"sombrero",
    fascia:"fascia",
    top:"",
  };
  const COLORI = [
    [/^ross[oaie]$|^bordeaux$|^bordo$|^red$/,"rosso"],[/^rosa$|^fucsia$|^pink$/,"rosa"],
    [/^ner[oaie]$|^black$/,"nero"],[/^bianc(o|a|hi|he)$|^white$/,"bianco"],
    [/^giall[oaie]$|^senape$|^yellow$/,"giallo"],[/^verd[ei]$|^green$|^militare$/,"verde"],
    [/^marron[ei]?$|^brown$|^cioccolato$/,"marrone"],[/^blu$|^blue$|^navy$/,"blu"],
    [/^azzurr[oaie]$|^celest[ei]$|^turchese$|^ceruleo$/,"azzurro"],[/^viola$|^lilla$|^purple$/,"viola"],
    [/^grig(io|ia|i|ie)$|^grey$|^gray$/,"grigio"],[/^arancion[ei]$|^arancio$|^orange$/,"arancione"],
    [/^beige$|^kaki$|^khaki$|^cammello$|^panna$|^crema$/,"beige"],[/^oro$|^dorat[oaie]$/,"oro"],
    [/^argent(o|at[oaie])$/,"argento"],[/^trasparent[ei]$/,"trasparente"],
    [/^righe$|^rigat[oaie]$/,"righe"],[/^quadri$|^scozzes[ei]$/,"quadri"],[/^pois$/,"pois"],
    [/^leopardat[oaie]$|^maculat[oaie]$/,"leopardato"],[/^fiori$|^fiorat[oaie]$|^floreal[ei]$/,"fiori"],
    [/^pelle$/,"pelle"],[/^jeans$|^denim$/,"jeans"],[/^bianco$/,"bianco"],[/^biond[oaie]$/,"biondo"],
    [/^lungh[ie]$|^lung[oa]$/,"lungo"],[/^patchwork$/,"patchwork"],[/^mucca$/,"mucca"],[/^cotonat[oaie]$/,"cotonato"],[/^raso$|^satin$/,"raso"],[/^tond[oaie]$/,"tondo"],[/^colorat[oaie]$/,"colorato"]
  ];
  const MAPPA = {};
  for (const [k,v] of Object.entries(CAPI)) v.split(" ").filter(Boolean).forEach(w=>MAPPA[w]=k);
  const ATTR_FRASI = new Set(["righe","quadri","pois","fiori","nero","rosa","mucca"]);
  const SPECIALI = new Set(FRASI.map(f=>f[1]).filter(x=>!ATTR_FRASI.has(x) && !x.includes(" ")));
  const PADRE = {occhiali_sole:"occhiali",occhiali_tondi:"occhiali",maschera_hockey:"maschera",cappello_cowboy:"cappello",
    cappello_paglia:"cappello",cappello_punta:"cappello",cappello_piuma:"cappello",cappello_fiori:"cappello",cappello_cuoco:"cappello",
    calze_rete:"calze",camicia_hawaiana:"camicia",vestito_lungo:"vestito",guanti_lunghi:"guanti",abito_sposa:"vestito",
    divisa_cameriera:"divisa",divisa_hostess:"divisa",divisa_scuola:"divisa",divisa_scout:"divisa",tuta_pilota:"tuta",
    corona_fiori:"corona",spada_laser:"spada",camicia_notte:"pigiama",giacca_cuoco:"giacca",guanti_boxe:"guanti"};

  function norm(s){
    return " "+s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")
      .replace(/t-shirt/g,"tshirt").replace(/k-way/g,"kway").replace(/[^a-z0-9_]+/g," ")+" ";
  }
  function colore(w){ for (const [re,c] of COLORI) if (re.test(w)) return c; return null; }

  // restituisce {capi:[{c, alias:Set, attr:Set}], attr:Set}
  function analizza(testo){
    let s = norm(testo);
    for (const [f,r] of [...FRASI].sort((a,b)=>b[0].length-a[0].length)) s = s.split(" "+f+" ").join(" "+r+" ");
    const toks = s.trim().split(/\s+/);
    const out=[], tutti=new Set(), liberi=new Set();
    let ultimo=null;
    for (const w of toks){
      if (SPECIALI.has(w) || MAPPA[w]){
        const c = SPECIALI.has(w) ? w : MAPPA[w];
        if (c==="giacca_pelle") ultimo={c:"giacca", alias:new Set(["giacca","giacca_pelle"]), attr:new Set(["pelle"])};
        else if (c==="giacca_jeans") ultimo={c:"giacca", alias:new Set(["giacca"]), attr:new Set(["jeans"])};
        else ultimo={c, alias:new Set([c].concat(PADRE[c]?[PADRE[c]]:[])), attr:new Set()};
        out.push(ultimo);
        continue;
      }
      const col = colore(w);
      if (col){
        if (col==="jeans" && (!ultimo || ultimo.attr.size)) { ultimo={c:"pantaloni",alias:new Set(["pantaloni"]),attr:new Set(["blu","jeans"])}; out.push(ultimo); tutti.add("blu"); continue; }
        tutti.add(col);
        if (ultimo) ultimo.attr.add(col); else liberi.add(col);
      }
    }
    return {capi:out, attr:tutti, liberi};
  }

  // ogni capo citato negli indizi diventa un requisito
  const DB = (window.PERSONAGGI||[]).map(p=>{
    const req=[], visti=new Set(), attrSolo=new Set();
    for (const t of p.t){
      const a=analizza(t);
      if (!a.capi.length){ a.attr.forEach(x=>attrSolo.add(x)); continue; }
      for (const x of a.capi){
        const k=x.c+"|"+[...x.attr].sort().join(",");
        if (visti.has(k)) continue; visti.add(k);
        req.push({c:x.c, alias:x.alias, attr:[...x.attr]});
      }
    }
    return {...p, req, attrSolo:[...attrSolo]};
  });

  function voto(r, x){
    const ok = x.alias.has(r.c) || r.alias.has(x.c);
    if (!ok) return 0;
    const esatto = (x.c===r.c) ? 0.5 : 0;
    if (!r.attr.length) return 2+esatto;
    if (r.attr.every(a=>x.attr.has(a))) return 3+esatto;
    if (!x.attr.size) return 1.2;
    if (r.attr.some(a=>x.attr.has(a))) return 1.6;
    return 0.2;
  }

  function punteggio(p, u){
    // abbinamento goloso: ogni capo dell'utente vale per un solo requisito
    const coppie=[];
    p.req.forEach((r,i)=>u.capi.forEach((x,j)=>{const v=voto(r,x); if(v>0) coppie.push([v,i,j]);}));
    coppie.sort((a,b)=>b[0]-a[0]);
    const ri=new Set(), uj=new Set(); let tot=0, presi=0;
    for (const [v,i,j] of coppie){ if(ri.has(i)||uj.has(j)) continue; ri.add(i); uj.add(j); tot+=v; if(v>=1) presi++; }
    const attrOk = p.attrSolo.filter(a=>u.attr.has(a)).length;
    tot += Math.min(attrOk,2);
    if (attrOk) presi++;
    // colori scritti da soli ("tutto rosa"): valgono sui capi di quel colore
    if (u.liberi && u.liberi.size){
      let k=0; p.req.forEach((r,i)=>{ if(!ri.has(i) && r.attr.some(a=>u.liberi.has(a))) k++; });
      if (k){ tot+=Math.min(k,2)*0.9; presi++; }
    }
    const avanzi = u.capi.length - uj.size;
    return tot - 0.4*avanzi + (presi>=2?0.5:0);
  }

  window.cercaPersonaggio = function(testo){
    const u = analizza(testo);
    if (!u.capi.length && !u.attr.size) return {capito:false, risultati:[]};
    const r = DB.map(p=>({p, s:punteggio(p,u)})).filter(x=>x.s>=1.8).sort((a,b)=>b.s-a.s).slice(0,3);
    return {capito:true, risultati:r.map(x=>x.p)};
  };
  window._armadio = {analizza, DB};
})();
