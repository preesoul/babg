// ========== GAME CORE ==========
// Pure game logic - shared between PC and Mobile

// ========== DATA ==========
var CHARS = [
  // ===== Tier 1 (value5) =====
  // Gehenna 3yr
  {id:'kayoko', name:'Kayoko', school:'Gehenna',  tier:4,atk:5,hp:5,kw:[],            skin:'Kayoko (Dress)',   img:'Kayoko.png',         imgGold:'Kayoko_(Dress).png'},
  // Gehenna 1yr
  {id:'junko',  name:'Junko',   school:'Gehenna',  tier:1,atk:1,hp:2,kw:['selfdestruct'],            skin:'Junko (New Year)',       img:'Junko.png',          imgGold:'Junko_(New_Year).png'},
  // Millennium 1yr
  {id:'toki',   name:'Toki',   school:'Millennium',tier:2,atk:1,hp:4,kw:['survive'],   skin:'Toki (Bunny Girl)',     img:'Toki.png',           imgGold:'Toki_(Bunny_Girl).png'},
  {id:'midori', name:'Midori', school:'Millennium',tier:1,atk:2,hp:2,kw:[],            skin:'Midori (Maid)',   img:'Midori.png',         imgGold:'Midori_(Maid).png'},
  // Trinity 1yr
  {id:'mari',   name:'Mari',   school:'Trinity',tier:1,atk:1,hp:2,kw:['taunt'],     skin:'Mari (Idol)',     img:'Mari.png',           imgGold:'Mari_(Idol).png'},
  {id:'reisa',  name:'Reisa', school:'Trinity',tier:1,atk:2,hp:3,kw:['survive'],   skin:'Reisa (Magical Girl)', img:'Reisa.png',          imgGold:'Reisa_(Magical).png'},

  // ===== Tier 2 (value7) =====
  // Gehenna 1yr
  {id:'juri',    name:'Juri',   school:'Gehenna',  tier:1,atk:2,hp:2,kw:[],             skin:'Juri (Waitress)',img:'Juri.png',           imgGold:'Juri_(maid).png'},
  {id:'chinatsu',name:'Chinatsu', school:'Gehenna',  tier:2,atk:1,hp:4,kw:[],            skin:'Chinatsu (Hot Spring)',     img:'Chinatsu.png',       imgGold:'Chinatsu_(Hot_Spring).png'},
  // Millennium 1yr
  {id:'momoi',   name:'Momoi', school:'Millennium',tier:1,atk:2,hp:2,kw:['taunt'],     skin:'Momoi (Maid)',   img:'Momoi.png',          imgGold:'Momoi_(Maid).png'},
  // Millennium 2yr
  {id:'yuuka',   name:'Yuuka', school:'Millennium',tier:3,atk:4,hp:4,kw:['taunt','shield'],skin:'Yuuka (Sportswear)',   img:'Yuuka.png',          imgGold:'Yuuka_(Sportswear).png'},
  // Trinity 1yr
  {id:'kazusa',  name:'Kazusa', school:'Trinity',tier:2,atk:3,hp:2,kw:['pierce'],    skin:'Kazusa (Band)',     img:'Kazusa.png',         imgGold:'Kazusa_(Band).png'},
  {id:'mashiro', name:'Mashiro', school:'Trinity',tier:2,atk:4,hp:2,kw:['ranged'],    skin:'Mashiro (Swimsuit)',   img:'Mashiro.png',        imgGold:'Mashiro_(Swimsuit).png'},

  // ===== Tier 3 (value9) =====
  // Gehenna 2yr
  {id:'aru',     name:'Aru',   school:'Gehenna',  tier:5,atk:6,hp:5,kw:['preemptive','ambush'], skin:'Aru (Dress)',     img:'Aru.png',            imgGold:'Aru_(Dress).png'},
  {id:'kasumi',  name:'Kasumi', school:'Gehenna',  tier:4,atk:4,hp:6,kw:['ambush'],             skin:'Kasumi (Swimsuit)',   img:'Kasumi.png',         imgGold:'Kasumi_(Swimsuit).png'},  // +Battle Start(SOC)
  // Gehenna 3yr
  {id:'sena',    name:'Sena',   school:'Gehenna',  tier:5,atk:7,hp:4,kw:['pierce'],    locked:true, skin:'Sena (Casual)',       img:'Sena.png',           imgGold:'Sena_(Casual).png'},
  // Millennium 1yr
  {id:'arisu',   name:'Arisu', school:'Millennium',tier:4,atk:7,hp:3,kw:['pierce'],    skin:'Arisu (Maid)',   img:'Arisu.png',          imgGold:'Arisu_(Maid).png'},
  {id:'hibiki',  name:'Hibiki', school:'Millennium',tier:3,atk:4,hp:3,kw:[],             skin:'Hibiki (Cheerleader)',img:'Hibiki.png',          imgGold:'Hibiki_(Cheerleader).png'},
  {id:'yuzu',    name:'Yuzu',   school:'Millennium',tier:2,atk:2,hp:3,kw:[],            skin:'Yuzu (Maid)',     img:'Yuzu.png',           imgGold:'Yuzu_(Maid).png'},
  // Trinity 2yr
  {id:'ichika',  name:'Ichika', school:'Trinity',tier:3,atk:5,hp:1,kw:['shield','windfury'],skin:'Ichika (Swimsuit)',img:'Ichika.png',     imgGold:'Ichika_(Swimsuit).png'},
  {id:'hanako',  name:'Hanako', school:'Trinity',tier:4,atk:3,hp:6,kw:['poison'],    skin:'Hanako (Swimsuit)',   img:'Hanako.png',         imgGold:'Hanako_(Swimsuit).png'},
  {id:'hifumi',  name:'Hifumi', school:'Trinity',tier:3,atk:2,hp:3,kw:[],    skin:'Hifumi (Swimsuit)',   img:'Hifumi.png',         imgGold:'Hifumi_(Swimsuit).png'},

  // ===== Tier 4 (value12) =====
  // Gehenna 2yr
  {id:'iori',    name:'Iori', school:'Gehenna',  tier:3,atk:5,hp:1,kw:['shield','windfury'],skin:'Iori (Swimsuit)',img:'Iori.png',     imgGold:'Iori_(Swimsuit).png'},
  {id:'iroha',   name:'Iroha', school:'Gehenna',  tier:3,atk:3,hp:3,kw:[],            skin:'Iroha (Swimsuit)',   img:'Iroha.png',          imgGold:'Iroha_(Swimsuit).png'},
  // Millennium 1yr
  {id:'eimi',    name:'Eimi', school:'Millennium',tier:3,atk:3,hp:4,kw:['shield'],             skin:'Eimi (Swimsuit)',   img:'Eimi.png',           imgGold:'Eimi_(Swimsuit).png'},
  // Millennium 2yr
  {id:'noa',     name:'Noa',   school:'Millennium',tier:4,atk:2,hp:6,kw:['survive'],   skin:'Noa (Pajama)',     img:'Noa.png',            imgGold:'Noa_(Pajama).png'},
  // Trinity 2yr
  {id:'azusa',   name:'Azusa', school:'Trinity',tier:4,atk:5,hp:5,kw:['ambush'],            skin:'Azusa (Swimsuit)',   img:'Azusa.png',          imgGold:'Azusa_(Swimsuit).png'},
  // Trinity 3yr
  {id:'hinata',  name:'Hinata', school:'Trinity',tier:4,atk:3,hp:5,kw:['preemptive'],skin:'Hinata (Swimsuit)',   img:'Hinata.png',         imgGold:'Hinata_(Swimsuit).png'},

  // ===== Tier 5 (value15) =====
  // Gehenna 3yr
  {id:'ako',     name:'Ako',   school:'Gehenna',  tier:4,atk:3,hp:5,kw:['taunt'],     skin:'Ako (Dress)',     img:'Ako.png',            imgGold:'Ako_(Dress).png'},
  {id:'satsuki', name:'Satsuki', school:'Gehenna',  tier:5,atk:5,hp:6,kw:[],            skin:'Satsuki (Swimsuit)',   img:'Satsuki.png',        imgGold:'Satsuki_(Swinsuit).png'},
  // Millennium 3yr
  {id:'himari',  name:'Himari', school:'Millennium',tier:6,atk:6,hp:7,kw:[],            locked:true, skin:'Himari (Battle)',     img:'Himari.png',         imgGold:'Himari_(Battle).png'},
  {id:'rio',     name:'Rio',   school:'Millennium',tier:6,atk:7,hp:7,kw:[],            skin:'Rio (Battle)',       img:'Rio.png',            imgGold:'Rio_(Battle).png'},
  // Trinity 3yr
  {id:'sakurako',name:'Sakurako',school:'Trinity',tier:6,atk:7,hp:7,kw:[],           skin:'Sakurako (Idol)', img:'Sakurako.png',       imgGold:'Sakurako_(Idol).png'},
  {id:'ui',      name:'Ui',   school:'Trinity',tier:5,atk:6,hp:5,kw:['preemptive'],locked:true, skin:'Ui (Swimsuit)',     img:'Ui.png',             imgGold:'Ui_(Swimsuit).png'},

  // ===== Tier 6 (value18) =====
  // Gehenna 3yr
  {id:'hina',    name:'Hina',   school:'Gehenna',  tier:6,atk:13,hp:3,kw:['cleave'],   skin:'Hina (Dress)',     img:'Hina.png',           imgGold:'Hina_(Dress).png'},
  {id:'makoto',  name:'Makoto', school:'Gehenna',  tier:6,atk:7,hp:7,kw:[],            skin:'Makoto (Swimsuit)',   img:'Makoto.png',         imgGold:'Makoto_(Swimsuit).png'},
  // Millennium 3yr
  {id:'neru',    name:'Neru',   school:'Millennium',tier:5,atk:5,hp:5,kw:['shield','survive','ambush'],skin:'Neru (Bunny Girl)',img:'Neru.png',       imgGold:'Neru_(Bunny_Girl).png'},
  {id:'utaha',   name:'Utaha', school:'Millennium',tier:5,atk:5,hp:5,kw:['ambush'], skin:'Utaha (Cheerleader)',img:'Utaha.png',       imgGold:'Utaha_(Cheerleader).png'},
  // Trinity 3yr
  {id:'tsurugi', name:'Tsurugi', school:'Trinity',tier:6,atk:7,hp:7,kw:[],            skin:'Tsurugi (Swimsuit)',   img:'Tsurugi.png',        imgGold:'Tsurugi_(Swimsuit).png'},
  {id:'mine',    name:'Mine',   school:'Trinity',tier:6,atk:6,hp:6,kw:['taunt','shield','reborn'],skin:'Mine (Idol)',img:'Mine.png', imgGold:'Mine_(Idol).png'},

  // ===== Gehenna new =====
  // Gehenna 1yr
  {id:'haruka',  name:'Haruka', school:'Gehenna',  tier:1,atk:1,hp:2,kw:['preemptive'],   skin:'Haruka (New Year)',     img:'Haruka.png',         imgGold:'Haruka_(New_Year).png'},
  {id:'ibuki',   name:'Ibuki', school:'Gehenna',  tier:2,atk:2,hp:3,kw:[],               skin:'Ibuki (Swimsuit)',   img:'Ibuki.png',          imgGold:'Ibuki_(Swimsuit).png'},
  // Gehenna 2yr
  {id:'mutsuki', name:'Mutsuki', school:'Gehenna',  tier:2,atk:3,hp:2,kw:['pierce'],        skin:'Mutsuki (New Year)',     img:'Mutsuki.png',        imgGold:'Mutsuki_(New_Year).png'},
  {id:'chiaki',  name:'Chiaki', school:'Gehenna',  tier:3,atk:5,hp:3,kw:['ranged'],        skin:'Chiaki (Swimsuit)',   img:'Chiaki.png',         imgGold:'Chiaki_(Swimsuit).png'},
  // ===== Millennium new =====
  // Millennium 1yr
  {id:'koyuki',  name:'Koyuki', school:'Millennium',tier:2,atk:1,hp:1,kw:['preemptive'],   skin:'Koyuki (Pajama)',   img:'Koyuki.png',         imgGold:'Koyuki_(Pajama).png'},
  // Millennium 2yr
  {id:'akane',   name:'Akane', school:'Millennium',tier:3,atk:2,hp:4,kw:[],               skin:'Akane (Bunny Girl)',   img:'Akane.png',          imgGold:'Akane_(Bunny_Girl).png'},
  {id:'karin',   name:'Karin',   school:'Millennium',tier:4,atk:6,hp:3,kw:['ranged','pierce'],skin:'Karin (Bunny Girl)',   img:'Karin.png',          imgGold:'Karin_(Bunny_Girl).png'},
  // Millennium 3yr
  {id:'asuna',   name:'Asuna', school:'Millennium',tier:5,atk:7,hp:6,kw:[],               skin:'Asuna (Bunny Girl)',   img:'Asuna.png',          imgGold:'Asuna_(Bunny_Girl).png'},
  // ===== Trinity new =====
  // Trinity 1yr
  {id:'koharu',  name:'Koharu', school:'Trinity',tier:1,atk:1,hp:2,kw:['preemptive'],   skin:'Koharu (Swimsuit)',   img:'Koharu.png',         imgGold:'Koharu_(Swimsuit).png'},
  {id:'shimiko', name:'Shimiko', school:'Trinity',tier:2,atk:4,hp:4,kw:[],                skin:'Shimiko (Evil Boss)',img:'Shimiko.png',         imgGold:'Shimiko_Evil_boss.png'},
  // Trinity 2yr
  {id:'suzumi',  name:'Suzumi', school:'Trinity',tier:3,atk:2,hp:4,kw:[],                skin:'Suzumi (Magical Girl)', img:'Suzumi.png',          imgGold:'Suzumi_(Magical).png'},
  // Trinity 3yr
  {id:'hasumi',  name:'Hasumi', school:'Trinity',tier:5,atk:7,hp:5,kw:['ambush'],               skin:'Hasumi (Swimsuit)',   img:'Hasumi.png',         imgGold:'Hasumi_(Swimsuit).png'},
  // ===== GSC (neutral) =====
  // GSC 1yr
  {id:'haine',   name:'Haine', school:'GSC',tier:1,atk:3,hp:2,kw:[],            skin:'Haine (Interview)',   img:'Haine.png',          imgGold:'Haine_(Interview).png'},
  {id:'momoka',  name:'Momoka', school:'GSC',tier:2,atk:4,hp:3,kw:[],            skin:'Momoka (Flight Attendant)',   img:'Momoka.png',         imgGold:'Momoka_(flight).png'},
  // GSC 2yr
  {id:'ayumu',   name:'Ayumu', school:'GSC',tier:3,atk:5,hp:2,kw:[],            skin:'Ayumu (Flight Attendant)',   img:'Ayumu.png',          imgGold:'Ayumu_(flight).png'},
  {id:'aoi',     name:'Aoi', school:'GSC',tier:4,atk:5,hp:4,kw:[],            skin:'Aoi (Interview)',   img:'Aoi.png',            imgGold:'Aoi_(Interview).png'},
  // GSC 3yr
  {id:'kaya',    name:'Kaya',   school:'GSC',tier:5,atk:5,hp:5,kw:[],            locked:true, skin:'Kaya (Coup)',     img:'Kaya.png',           imgGold:'Kaya_(Coup).png'},
  {id:'lin',     name:'Rin',     school:'GSC',tier:6,atk:8,hp:8,kw:[],            locked:true, skin:'Rin (Flight Attendant)',       img:'Lin.png',            imgGold:'Lin_(flight).png'},

  // ===== Hyakkiyako =====
  // Hyakkiyako 1yr
  {id:'izuna',   name:'Izuna', school:'Hyakkiyako',tier:1,atk:2,hp:2,kw:[],            skin:'Izuna (Swimsuit)',   img:'Izuna.png',          imgGold:'Izuna_(Swimsuit).png'},
  {id:'pina',    name:'Pina',   school:'Hyakkiyako',tier:1,atk:2,hp:1,kw:['shield','taunt'],skin:'Pina (Guide)',  img:'Pina.png',           imgGold:'Pina_(Guide).png'},
  {id:'yukari',  name:'Yukari', school:'Hyakkiyako',tier:2,atk:2,hp:1,kw:['reborn','preemptive'],skin:'Yukari (Swimsuit)',img:'Yukari.png',     imgGold:'Yukari_(Swimsuit).png'},
  {id:'tsukuyo', name:'Tsukuyo', school:'Hyakkiyako',tier:2,atk:3,hp:2,kw:[],            skin:'Tsukuyo (Dress)',   img:'Tsukuyo.png',        imgGold:'Tsukuyo_(Dress).png'},
  // Hyakkiyako 2yr
  {id:'mimori',  name:'Mimori', school:'Hyakkiyako',tier:3,atk:2,hp:3,kw:['taunt'],skin:'Mimori (Swimsuit)',img:'Mimori.png',       imgGold:'Mimori_(Swimsuit).png'},
  {id:'renge',   name:'Renge',   school:'Hyakkiyako',tier:3,atk:3,hp:2,kw:['shield','preemptive'],skin:'Renge (Swimsuit)',img:'Renge.png',       imgGold:'Renge_(Swimsuit).png'},
  {id:'shizuko', name:'Shizuko', school:'Hyakkiyako',tier:5,atk:5,hp:6,kw:[],             skin:'Shizuko (Swimsuit)',   img:'Shizuko.png',        imgGold:'Shizuko_(Swimsuit).png'},
  {id:'tsubaki', name:'Tsubaki', school:'Hyakkiyako',tier:4,atk:4,hp:3,kw:['taunt','shield'],skin:'Tsubaki (Guide)',img:'Tsubaki.png',      imgGold:'Tsubaki_(Guide).png'},
  {id:'kikyou',  name:'Kikyou',   school:'Hyakkiyako',tier:4,atk:4,hp:4,kw:['windfury','preemptive','ambush'],skin:'Kikyou (Swimsuit)',img:'Kikyou.png',   imgGold:'Kikyou_(Swimsuit).png'},
  {id:'chise',   name:'Chise',   school:'Hyakkiyako',tier:4,atk:4,hp:5,kw:['taunt'],     locked:true, skin:'Chise (Swimsuit)',     img:'Chise.png',          imgGold:'Chise_(Swimsuit).png'},
  // Hyakkiyako 3yr
  {id:'nagusa',  name:'Nagusa', school:'Hyakkiyako',tier:6,atk:5,hp:7,kw:['preemptive'],skin:'Nagusa (Swimsuit)',img:'Nagusa.png',imgGold:'Nagusa_(Swimsuit).png'},
  {id:'wakamo',  name:'Wakamo', school:'Hyakkiyako',tier:6,atk:5,hp:7,kw:['preemptive'],locked:true, skin:'Wakamo (Swimsuit)',img:'Wakamo.png',imgGold:'Wakamo_(Swimsuit).png'},
  {id:'michiru', name:'Michiru', school:'Hyakkiyako',tier:5,atk:5,hp:5,kw:[],            skin:'Michiru (Dress)',   img:'Michiru.png',        imgGold:'Michiru_(Dress).png'},

  // ===== Abydos (unlock required) =====
  {id:'ayane',   name:'Ayane', school:'Abydos', tier:2, atk:2, hp:4, kw:['taunt'],          locked:true, skin:'Ayane (Swimsuit)',   img:'Ayane.png',          imgGold:'Ayane_(Swimsuit).png'},
  {id:'serika',  name:'Serika', school:'Abydos', tier:3, atk:4, hp:2, kw:['windfury'],       locked:true, skin:'Serika (Swimsuit)',   img:'Serika.png',         imgGold:'Serika_(Swimsuit).png'},
  {id:'nonomi',  name:'Nonomi', school:'Abydos', tier:4, atk:4, hp:4, kw:[],                 locked:true, skin:'Nonomi (Swimsuit)',   img:'Nonomi.png',         imgGold:'Nonomi_(Swimsuit).png'},
  {id:'shiroko', name:'Shiroko', school:'Abydos', tier:5, atk:7, hp:4, kw:['reborn'],         locked:true, skin:'Shiroko (Swimsuit)',   img:'Shiroko.png',        imgGold:'Shiroko_(Swimsuit).png'},
  {id:'hoshino', name:'Hoshino', school:'Abydos', tier:6, atk:5, hp:7, kw:['taunt','shield'], locked:true, skin:'Hoshino (Swimsuit)',   img:'Hoshino.png',        imgGold:'Hoshino_(Swimsuit).png'},

  // ===== Shanhaijing (unlock required) =====
  {id:'kokona',  name:'Kokona', school:'Shanhaijing', tier:1, atk:1, hp:2, kw:[],                locked:true, skin:'Kokona (Part-time)', img:'Kokona.png',         imgGold:'Kokona_(Work).png'},
  {id:'mina',    name:'Mina',   school:'Shanhaijing', tier:2, atk:2, hp:4, kw:['taunt'],          locked:true, skin:'Mina (Recorder)',       img:'Mina.png',           imgGold:'Mina_(Recorder).png'},
  {id:'reijo',   name:'Reijo', school:'Shanhaijing', tier:3, atk:4, hp:2, kw:['windfury'],       locked:true, skin:'Reijo (Casual)',       img:'Reijo.png',          imgGold:'Reijo_(Casual).png'},
  {id:'saya',    name:'Saya',   school:'Shanhaijing', tier:4, atk:4, hp:5, kw:[],                 locked:true, skin:'Saya (Casual)',         img:'Saya.png',           imgGold:'Saya_(Casual).png'},
  {id:'rumi',    name:'Rumi',   school:'Shanhaijing', tier:6, atk:7, hp:7, kw:[],                 locked:true, skin:'Rumi (Kid)',       img:'Rumi.png',           imgGold:'Rumi_(Kid).png'},
  {id:'shun',    name:'Shun',     school:'Shanhaijing', tier:5, atk:7, hp:3, kw:['ranged'],         locked:true, skin:'Shun (Kid)',         img:'Shun.png',           imgGold:'Shun_(Kid).png'},
  {id:'kisaki',  name:'Kisaki', school:'Shanhaijing', tier:6, atk:5, hp:7, kw:[],                 locked:true, skin:'Kisaki (Casual)',       img:'Kisaki.png',         imgGold:'Kisaki_(Casual).png'},
];

// ========== HIDDEN (7-star) ==========
var HIDDEN_CHARS = [
  // Gehenna
  {id:'gehenna_prefect',        name:'Gehenna Prefect Team',        school:'Gehenna',   tier:7, atk:10, hp:10, kw:['shield','windfury','cleave'], img:'unique/Gehenna_PrefectTeam.png'},
  {id:'gehenna_pandemonium',    name:'Pandemonium Society',               school:'Gehenna',   tier:7, atk:10, hp:10, kw:[],                                     img:'unique/Gehenna_pandemonium_Society.png'},
  {id:'gehenna_traingun',       name:'Forgotten Train Cannon',          school:'Gehenna',   tier:7, atk:6,  hp:6,  kw:[],                                     img:'unique/Gehenna_traingun.png'},
  // Trinity
  {id:'trinity_mika',           name:'Tea Party (Mika Host)',   school:'Trinity', tier:7, atk:30, hp:30, kw:[],                                     img:'unique/Trinity_mika.png'},
  {id:'trinity_nagisa',         name:'Tea Party (Nagisa Host)', school:'Trinity', tier:7, atk:10, hp:10, kw:[],                                     img:'unique/Trinity_nagisa.png'},
  {id:'trinity_seia',           name:'Tea Party (Seia Host)', school:'Trinity', tier:7, atk:0,  hp:2,  kw:[],                                     img:'unique/Trinity_seia.png'},
  // Millennium
  {id:'millennium_nameless',    name:'Princess of the Nameless Gods', school:'Millennium', tier:7, atk:20, hp:20, kw:[],                                     img:'unique/millennium_Nameless_God.png'},
  {id:'millennium_malkuth',     name:'Malkuth',               school:'Millennium', tier:7, atk:10, hp:20, kw:['shield','preemptive'],                img:'unique/Millennium_Malkuth.png'},
  {id:'millennium_death_momoi', name:'Death Momoi',          school:'Millennium', tier:7, atk:10, hp:10, kw:['shield','windfury','preemptive'],      img:'unique/Millennium_Death_momoi.png'},
  // Hyakkiyako
  {id:'hkyk_saikyo',            name:'Saikyo Ikaku Raion',       school:'Hyakkiyako', tier:7, atk:40, hp:40, kw:[],                                     img:'unique/HKYK_Saikyo_ikaku_raion.png'},
  {id:'hkyk_kuzunoha',          name:'Kuzunoha',            school:'Hyakkiyako', tier:7, atk:1, hp:1, kw:['shield','poison'],                    img:'unique/HKYK_Kuzunoha.png'},
  // new 7-star
  {id:'gehenna_p68',             name:'Problem Solver 68',            school:'Gehenna',   tier:7, atk:15, hp:15, kw:['pierce'],                               img:'unique/Problem_solver_68.png'},
  {id:'millennium_seminar',      name:'Millennium Seminar',      school:'Millennium', tier:7, atk:15, hp:15, kw:[],                                     img:'unique/Seminar.png'},
  {id:'millennium_cc',           name:'Cleaning&Clearing',    school:'Millennium', tier:7, atk:12, hp:12, kw:['ranged','shield'],                     img:'unique/Cleaning_Clearing.png'},
  {id:'trinity_makeup',          name:'Make Up Work Club',           school:'Trinity', tier:7, atk:10, hp:10, kw:[],                                     img:'unique/Make_Up_Work_Club.png'},
  {id:'trinity_justice',         name:'Justice Task Force',           school:'Trinity', tier:7, atk:10, hp:10, kw:['shield','windfury'],                   img:'unique/Justice_Task_Force.png'},
  // Abydos
  {id:'Shiroko_Terror',          name:'Shiroko Terror',          school:'Abydos', tier:7, atk:10, hp:10, kw:['shield'],                                   img:'unique/Shiroko_Terror.png'},
  // Shanhaijing
  {id:'shanhai_kiki',            name:'Kiki',                 school:'Shanhaijing',   tier:7, atk:1,  hp:1,  kw:['ambush'],                                   img:'unique/Kiki.png'},
  // Millennium (Kei series)
  {id:'Kei_usb',                 name:'Kei (USB)',            school:'Millennium', tier:7, atk:1,  hp:1,  kw:['shield'],                                   img:'unique/Kei_usb.png'},
  {id:'Arisu_Kei',               name:'Arisu & Kei',          school:'Millennium', tier:7, atk:40, hp:40, kw:['shield','ranged','preemptive'],              img:'unique/Arisu_Kei.png'},
];

// hidden character lookup helper
function findHiddenChar(id){for(var i=0;i<HIDDEN_CHARS.length;i++)if(HIDDEN_CHARS[i].id===id)return HIDDEN_CHARS[i];return null;}
function findAnyChar(id){for(var i=0;i<CHARS.length;i++)if(CHARS[i].id===id)return CHARS[i];return findHiddenChar(id);}

// stats color (green if above base, red if below base)
function statColor(baseId,isSkin,type,current){
  var tmpl=findAnyChar(baseId);if(!tmpl)return'';
  var base=isSkin?(type==='atk'?tmpl.atk*2+1:tmpl.hp*2+1):(type==='atk'?tmpl.atk:tmpl.hp);
  var _ol='text-shadow:-1.5px -1.5px 0 #000,1.5px -1.5px 0 #000,-1.5px 1.5px 0 #000,1.5px 1.5px 0 #000';
  if(current>base)return'color:#00ff00;font-weight:900;'+_ol;if(current<base)return'color:#ff0000;font-weight:900;'+_ol;return _ol;
}

// buff log helper
function logBuff(unit, source, atkDelta, hpDelta) {
  if(!unit._buffLog) unit._buffLog=[];
  if(atkDelta===0&&hpDelta===0) return;
  // merge if same source already exists
  for(var i=0;i<unit._buffLog.length;i++){
    if(unit._buffLog[i].src===source){
      unit._buffLog[i].atk+=atkDelta;
      unit._buffLog[i].hp+=hpDelta;
      return;
    }
  }
  unit._buffLog.push({src:source,atk:atkDelta,hp:hpDelta});
}

// keyword helper
function hasKw(unit, kw) { return unit.kw && unit.kw.indexOf(kw) !== -1; }
function addKw(unit, kw) { if(!unit.kw) unit.kw=[]; if(unit.kw.indexOf(kw)===-1) unit.kw.push(kw); }
function kwText(unit) { if(!unit.kw||unit.kw.length===0) return ''; var bid=unit.baseId||''; return unit.kw.filter(function(k){ if(k==='survive') return false; if(k==='preemptive') return false; return true; }).map(function(k){return '<span class="kw-tag">'+(KW_LABELS[k]||k)+'</span>';}).join(''); }

var KW_LABELS = {taunt:'Taunt',shield:'Shield',cleave:'Cleave',reborn:'Reborn',windfury:'Windfury',poison:'Venomous',pierce:'Pierce',survive:'Survive',preemptive:'Preemptive',ranged:'Ranged',selfdestruct:'Self-destruct',invincible:'Invincible',ambush:'Ambush'};
var KW_DESCS = {
  invincible:'Takes no damage.',
  taunt:'This student is attacked first.',
  shield:'Blocks damage once.',
  cleave:'Also attacks adjacent enemies.',
  reborn:'After being defeated for the first time, revives with 1 HP.',
  windfury:'Attacks twice per turn.',
  poison:'Instantly defeats the target when dealing damage.',
  pierce:'Excess damage is dealt to adjacent enemies.',
  survive:'Triggers when surviving after being hit.',
  preemptive:'Triggers on attack.',
  ranged:'Does not receive counterattacks.',
  selfdestruct:'Attacks with ATK + HP combined, then is defeated.',
  ambush:'Cannot be targeted until first attack.'
};
var TIER_COLORS = {1:'t1',2:'t2',3:'t3',4:'t4',5:'t5',6:'t6',7:'t7'};
var SCHOOL_ICONS = {'Gehenna':'../img/Icon/Gehenna.png','Millennium':'../img/Icon/Millennium.png','Trinity':'../img/Icon/Trinity.png','GSC':'../img/Icon/Council.png','Hyakkiyako':'../img/Icon/Hyakkiyako.png','Abydos':'../img/Icon/Abydos.png','Shanhaijing':'../img/Icon/Shanhaijing.png'};
var CHAR_GRADES = {
  kayoko:3, junko:1, toki:1, midori:1, mari:1, reisa:1,
  juri:1, chinatsu:1, momoi:1, yuuka:2, kazusa:1, mashiro:1,
  aru:2, kasumi:2, sena:3, arisu:1, hibiki:1, yuzu:1,
  ichika:2, hanako:2, hifumi:2,
  iori:2, iroha:2, eimi:2, noa:1, azusa:2, hinata:3,
  ako:3, satsuki:3, himari:3, rio:3, sakurako:3, ui:3,
  hina:3, makoto:3, neru:3, utaha:3, tsurugi:3, mine:3,
  haruka:1, ibuki:1, mutsuki:2, chiaki:2,
  koyuki:1, akane:2, karin:2, asuna:3,
  koharu:1, shimiko:1, suzumi:2, hasumi:3,
  haine:1, momoka:1, ayumu:2, aoi:2, kaya:3, lin:3,
  izuna:1, pina:1, yukari:1, tsukuyo:1,
  mimori:2, renge:2, shizuko:2, tsubaki:2, kikyou:2, chise:2,
  nagusa:3, wakamo:3, michiru:3,
  ayane:1, serika:2, nonomi:2, shiroko:3, hoshino:3,
  kokona:1, mina:1, reijo:2, saya:2, rumi:3, shun:3, kisaki:3
};
var SANDBOX = (typeof window!=='undefined' && (window.location.search.indexOf('sandbox=1')!==-1 || localStorage.getItem('babg_sandbox')==='1'));
if(typeof window!=='undefined') localStorage.removeItem('babg_sandbox');

// ===== Master Volume =====
// Intercept HTMLMediaElement.volume setter to scale by window._masterVolume multiplier.
// Raw value is saved in _babgRawVol to prevent multiplier stacking on repeated read/write during fade etc.
(function(){
  if(typeof window==='undefined')return;
  var saved=parseFloat(localStorage.getItem('babg_master_volume'));
  window._masterVolume=(isNaN(saved)?1:Math.max(0,Math.min(1,saved)));
  try{
    var proto=HTMLMediaElement.prototype;
    var desc=Object.getOwnPropertyDescriptor(proto,'volume');
    if(desc&&desc.set&&desc.get){
      var origSet=desc.set,origGet=desc.get;
      Object.defineProperty(proto,'volume',{
        get:function(){return this._babgRawVol!==undefined?this._babgRawVol:origGet.call(this);},
        set:function(v){this._babgRawVol=v;origSet.call(this,Math.max(0,Math.min(1,v*(window._masterVolume||1))));},
        configurable:true
      });
    }
  }catch(e){}
})();
function setMasterVolume(v){
  window._masterVolume=Math.max(0,Math.min(1,v));
  try{localStorage.setItem('babg_master_volume',String(window._masterVolume));}catch(e){}
  // Re-apply volume to all currently playing audio/video elements
  try{
    var els=document.querySelectorAll('audio,video');
    for(var i=0;i<els.length;i++){if(els[i]._babgRawVol!==undefined)els[i].volume=els[i]._babgRawVol;}
    if(typeof SFX_CACHE==='object')for(var k in SFX_CACHE){var a=SFX_CACHE[k];if(a&&a._babgRawVol!==undefined)a.volume=a._babgRawVol;}
  }catch(e){}
}
var UPGRADE_COSTS = [0,5,7,8,9,11];
var SHOP_SIZE = [0,3,4,4,5,5,6];
var MAX_BOARD = 5;
var BATTLE_MAX = 10;
var START_HP = 40;
var MAX_STONE = SANDBOX ? 20 : 10;

// Ability type classification
var BC_IDS  = {iroha:1, izuna:1, tsukuyo:1, tsubaki:1, michiru:1, kokona:1, kisaki:1};                               // Battlecry
var DR_IDS  = {chinatsu:1, ako:1, hifumi:1, azusa:1, kasumi:1, nagusa:1, juri:1, toramaru:1, junko:1, satsuki:1, yuzu:1, chise:1, airship:1, gehenna_prefect:1, gehenna_pandemonium:1, gehenna_traingun:1, trinity_seia:1, trinity_justice:1, gehenna_p68:1, hovercraft:1, millennium_cc:1, ayane:1, hoshino:1, Shiroko_Terror:1, mina:1, shanhai_kiki:1}; // Deathrattle
var SOC_IDS = {kayoko:1, midori:1, momoi:1, mari:1, tsurugi:1, sakurako:1, rio:1, himari:1, mine:1, hibiki:1, makoto:1, kaya:1, kasumi:1, ibuki:1, akane:1, iori:1, hanako:1, pina:1, michiru:1, eimi:1, gehenna_traingun:1, trinity_nagisa:1, millennium_nameless:1, millennium_death_momoi:1, hkyk_kuzunoha:1, gehenna_p68:1, millennium_seminar:1, trinity_justice:1, nonomi:1, Shiroko_Terror:1, mina:1, rumi:1, mutsuki:1}; // Battle Start
var SURV_IDS = {toki:1, neru:1, noa:1, reisa:1}; // Survive
var PASSIVE_IDS = {haine:1, momoka:1, ayumu:1, aoi:1, lin:1, asuna:1, hasumi:1, suzumi:1, sena:1, mimori:1, utaha:1, gehenna_traingun:1, trinity_mika:1, trinity_seia:1, shizuko:1, wakamo:1, millennium_cc:1, trinity_makeup:1, gehenna_prefect:1, gehenna_pandemonium:1, millennium_death_momoi:1, gehenna_p68:1, millennium_seminar:1, trinity_justice:1, trinity_nagisa:1, serika:1, shiroko:1, Shiroko_Terror:1, reijo:1, saya:1, shun:1, shanhai_kiki:1, haruka:1, Kei_usb:1, kazusa:1}; // Passive (recruit turn / always active)
var PRE_IDS = {aru:1, koyuki:1, koharu:1, trinity_mika:1, hkyk_kuzunoha:1, millennium_malkuth:1, millennium_death_momoi:1, Arisu_Kei:1}; // Preemptive ability (triggers before damage calculation on attack)

// ability descriptions (CSV based)
var ABILITY_DESCS = {
  juri:     {type:'Deathrattle',desc:'If other allies remain,\nsummons <Fanchan>. (1/1)\nGains +1/+1 for each allied Fanchan\ndefeated this game.',skinEffect:'Waitress Juri: Summon 2 Fanchan',skinEffectDesc:'Deathrattle: If other allies remain,\nsummons <span style="color:#ffd700;font-weight:700">2</span> <Fanchan>. (1/1)\nGains +1/+1 for each allied Fanchan\ndefeated this game.'},
  chinatsu: {type:'Deathrattle',desc:'Grants Shield to 1 random ally.',skinEffect:'Hot Spring Chinatsu: Reborn added',skinEffectDesc:'Reborn. Deathrattle: Grants Shield to 1 random ally.'},
  kayoko:   {type:'Battle Start',desc:'Reverses the placement order of opponent\'s 1st~5th students.',skinEffect:'Dress Kayoko: Taunt flip',skinEffectDesc:'Battle Start: <span style="color:#ffd700;font-weight:700">Removes Taunt from opponents, grants Taunt to those without it</span>.\nReverses placement order.'},
  midori:   {type:'Battle Start',desc:'+2/+2 per <Momoi>',skinEffect:'Maid Midori: ×+4/+4 per count\nBoth Maid: ×+8/+8',skinEffectDesc:'Battle Start: <span style="color:#ffd700;font-weight:700">+4/+4</span> per <Momoi>'},
  momoi:    {type:'Battle Start',desc:'+2/+2 per <Midori>',skinEffect:'Maid Momoi: ×+4/+4 per count\nBoth Maid: ×+8/+8',skinEffectDesc:'Battle Start: <span style="color:#ffd700;font-weight:700">+4/+4</span> per <Midori>'},
  mari:     {type:'Battle Start',desc:'allied all +2/+1',skinEffect:'Idol Mari: +3/+2',skinEffectDesc:'Battle Start: allied all <span style="color:#ffd700;font-weight:700">+3/+2</span>'},
  aru:      {type:'Preemptive',desc:'When attacking, ATK is doubled against 5~6 tier students.\nATK is halved (rounded down) against 1~2 tier students.',skinEffect:'Dress Aru: 3x',skinEffectDesc:'Preemptive: When attacking, ATK is <span style="color:#ffd700;font-weight:700">tripled</span> against 5~6 tier students.\nATK is halved (rounded down) against 1~2 tier students.'},
  kasumi:   {type:'Deathrattle',desc:'Deathrattle: Defeats the opponent that defeated her.',skinEffect:'Swimsuit Kasumi: Battle Start added (targets enemy with highest HP)',skinEffectDesc:'Battle Start: Targets the enemy with the highest HP.\nDeathrattle: Defeats the opponent that defeated her.'},
  iroha:    {type:'Battlecry',desc:'Replaced by <Toramaru>. (Toramaru: 5/1)\nWhen Toramaru is destroyed, returns as Iroha.',skinEffect:'Swimsuit Iroha: Toramaru 10/2\nWhen Toramaru is destroyed, returns as Iroha.',skinEffectDesc:'Battlecry: Replaced by <Toramaru>. (Toramaru: <span style="color:#ffd700;font-weight:700">10/2</span>)\nWhen Toramaru is destroyed, returns as Iroha.'},
  himari:   {type:'Battle Start',desc:'Adds a random base keyword to 2 allies.',skinEffect:'Battle Himari: all allies',skinEffectDesc:'Battle Start: Adds a random base keyword to <span style="color:#ffd700;font-weight:700">all</span> allies.'},
  rio:      {type:'Battle Start',desc:'Unifies all allies\' school to the leftmost ally\'s school.',skinEffect:'Battle Rio: Removes enemy school tags',skinEffectDesc:'Battle Start: Unifies all allies\' school to the leftmost ally\'s school.\n<span style="color:#ffd700;font-weight:700">Removes enemy school tags.</span>\nThis effect triggers first.'},
  ako:      {type:'Deathrattle',desc:'Gehenna students get +4/+4 this battle.',skinEffect:'Dress Ako: +8/+8',skinEffectDesc:'Deathrattle: Grants Gehenna students <span style="color:#ffd700;font-weight:700">+8/+8</span> this battle.'},
  kazusa:   {type:'Passive',desc:'Pierce. When an enemy is defeated by attack,\nsummons Reisa. (once per battle)',skinEffect:'Band Kazusa: Magical Girl Reisa summon',skinEffectDesc:'Pierce. Passive: When an enemy is defeated by attack,\nsummons Magical Girl Reisa. (once per battle)'},
  hifumi:   {type:'Deathrattle',desc:'Summons <Peroro-sama>. (3/1)\nIf Peroro-sama defeats an enemy, replaced by Hifumi.',skinEffect:'Swimsuit Hifumi: Peroro-sama 6/2',skinEffectDesc:'Deathrattle: Summons <Peroro-sama>. (Peroro-sama: <span style="color:#ffd700;font-weight:700">6/2</span>)\nIf Peroro-sama defeats an enemy, replaced by Hifumi.'},
  azusa:    {type:'Deathrattle',desc:'Deals -2 damage to all enemies.',skinEffect:'Swimsuit Azusa: -4 damage',skinEffectDesc:'Deathrattle: Deals <span style="color:#ffd700;font-weight:700">-4</span> damage to all enemies.'},
  sakurako: {type:'Battle Start',desc:'Triggers allied Trinity students\' Battle Start once more.',skinEffect:'Idol Sakurako: triggers twice more',skinEffectDesc:'Battle Start: Triggers allied Trinity students\' Battle Start <span style="color:#ffd700;font-weight:700">twice</span> more.'},
  tsurugi:  {type:'Battle Start',desc:'ATK/HP are doubled.\nTriggers last among Battle Start effects.',skinEffect:'Swimsuit Tsurugi: tripled',skinEffectDesc:'Battle Start: ATK/HP are <span style="color:#ffd700;font-weight:700">tripled</span>.'},
  mine:     {type:'Battle Start',desc:'Removes all Taunt from allies.',skinEffect:'Idol Mine: Removes all Taunt from allies and enemies.',skinEffectDesc:'Battle Start: Removes all Taunt from <span style="color:#ffd700;font-weight:700">allies and enemies</span>.'},
  toki:     {type:'Survive',desc:'Summons <Abi Eshuh>.\nHas ATK/HP equal to Schedule level.',skinEffect:'Bunny Girl Toki: Schedule level×2',skinEffectDesc:'Survive: Summons <Abi Eshuh>.\nHas ATK/HP equal to Schedule level<span style="color:#ffd700;font-weight:700">×2</span>.'},
  neru:     {type:'Survive',desc:'Gains one random base ability.',skinEffect:'Bunny Girl Neru: Gains two random abilities.',skinEffectDesc:'Survive: Gains <span style="color:#ffd700;font-weight:700">two</span> random base abilities.'},
  toramaru: {type:'Deathrattle',desc:'Summons the original Iroha.',skinEffect:'Skin Toramaru: Summons Swimsuit Iroha'},
  ui:       {type:'Preemptive',desc:'Removes all abilities from the opponent.',skinEffect:'Swimsuit Ui: Also removes from one adjacent opponent',skinEffectDesc:'Preemptive: Removes all abilities from <span style="color:#ffd700;font-weight:700">the opponent and one adjacent</span> student.'},
  junko:    {type:'Self-destruct / Deathrattle',desc:'Self-destruct: Combines ATK and HP to attack, then is defeated.\nDeathrattle: Summons <Dango>. (1/1)',skinEffect:'New Year Junko: Summons 2 Dango',skinEffectDesc:'Deathrattle: Summons <span style="color:#ffd700;font-weight:700">2</span> <Dango>. (Dango 1/1)'},
  eimi:     {type:'Battle Start',desc:'+1/+1 per allied Millennium student',skinEffect:'Swimsuit Eimi: +2/+2 per count',skinEffectDesc:'Battle Start: <span style="color:#ffd700;font-weight:700">+2/+2</span> per allied Millennium student'},
  sena:     {type:'Passive',desc:'Heals all allies\' HP by Pierce overkill damage.',skinEffect:'Casual Sena: overkill damage x2 heal',skinEffectDesc:'Passive: Heals all allies\' HP by Pierce overkill damage <span style="color:#ffd700;font-weight:700">x2</span>.'},
  satsuki:  {type:'Deathrattle',desc:'Steals the opponent that defeated her for 1 turn.',skinEffect:'Swimsuit Satsuki: Steals for 2 turns',skinEffectDesc:'Deathrattle: Steals the opponent that defeated her for <span style="color:#ffd700;font-weight:700">2 turns</span>.'},
  makoto:   {type:'Battle Start',desc:'Replaced by <Airship>.\nAirship: ally count×2 ATK/HP, Self-destruct',skinEffect:'Swimsuit Makoto: ally count×4\nAfter Airship Self-destruct, summons Afro Makoto',skinEffectDesc:'Battle Start: Replaced by <Airship>.\n(Airship: ally count<span style="color:#ffd700;font-weight:700">×4</span> ATK/HP, Self-destruct)'},
  hibiki:   {type:'Battle Start',desc:'All enemies -1/-1',skinEffect:'Cheerleader Hibiki: -2/-2',skinEffectDesc:'Battle Start: Grants all enemies <span style="color:#ffd700;font-weight:700">-2/-2</span>.'},
  yuzu:     {type:'Deathrattle',desc:'Summons <Avant-Garde Corps> with ATK/HP equal to\ndefeated allies this battle ×2.',skinEffect:'Maid Yuzu: defeated allies ×4',skinEffectDesc:'Deathrattle: Summons <Avant-Garde Corps> with ATK/HP equal to\ndefeated allies this battle <span style="color:#ffd700;font-weight:700">×4</span>.'},
  noa:      {type:'Survive',desc:'Copies opponent\'s ability (keyword).\nAlso grants it to allied Yuuka.',skinEffect:'Pajama Noa: Grants to all allied Millennium students',skinEffectDesc:'Survive: Copies opponent\'s ability (keyword).\n<span style="color:#ffd700;font-weight:700">Also grants to all allied Millennium students.</span>'},
  utaha:    {type:'Passive',desc:'When any Millennium token is summoned,\nadds ATK/HP equal to Schedule level.',skinEffect:'Cheerleader Utaha: Schedule level×2',skinEffectDesc:'Passive: When any Millennium token is summoned,\nadds ATK/HP equal to Schedule level<span style="color:#ffd700;font-weight:700">×2</span>.'},
  mashiro:  {type:'Ranged',desc:'Ranged attack. Does not take counter damage.',skinEffect:'Swimsuit Mashiro: Pierce added',skinEffectDesc:'Ranged+Pierce: Ranged attack + Pierce attack.\nPierces all enemies without counter damage.'},
  hinata:   {type:'Preemptive',desc:'Attacks 1~5 times.',skinEffect:'Swimsuit Hinata: Windfury added',skinEffectDesc:'<span style="color:#ffd700;font-weight:700">Windfury</span>. Preemptive: Attacks 1~5 times.'},
  airship:  {type:'Deathrattle',desc:'Summons <Afro Makoto>.',skinEffect:''},
  // 7-star hidden
  gehenna_prefect:        {type:'Passive / Deathrattle',hiddenCond:'Appears when Schale has Hina, Iori, Ako, and Chinatsu.',desc:'Appears by absorbing Hina, Iori, Ako, Chinatsu from Schale.\nAdds the sum of absorbed students\' ATK and HP respectively.\nDeathrattle: Permanently disappears this game.\nThen summons <Last Hina> (10/10, Cleave+Venomous).',skinEffect:'',quote:'Hina: Haa... let\'s finish this quickly.'},
  gehenna_pandemonium:    {type:'Passive / Deathrattle',hiddenCond:'Appears when Schale has Makoto, Satsuki, Iroha, Ibuki, and Chiaki.',desc:'Appears by absorbing Makoto, Satsuki, Iroha, Ibuki, Chiaki from Schale.\nBase stats 10/10 plus absorbed students\' ATK sum and HP sum.\nDeathrattle: Steals 2 random opponents for this battle.\nSummons golden Airship (Taunt) and golden Toramaru (Taunt).',skinEffect:'',quote:'Makoto: This time for sure, we\'ll wipe Trinity off the map of Kivotos!'},
  gehenna_traingun:       {type:'Passive / Battle Start / Deathrattle',hiddenCond:'Appears at Schedule Lv.6+, only Gehenna students recruited.',desc:'Does not attack.\nBattle Start: Deals 6 Cleave damage to all opponents.\nBattle Start trigger count increases each surviving battle.\nDeathrattle: Permanently disappears this game.',skinEffect:'',quote:'...Do not leave a single piece, a single fragment of what the <Thunder Emperor> left behind.'},
  trinity_mika:           {type:'Passive / Preemptive',hiddenCond:'Appears at Schedule Lv.6+, only Trinity students recruited.',desc:'Passive: Immune to damage and defeat from abilities/effects.\nCan only be defeated by battle damage.\nPreemptive: ATK is doubled when attacking Gehenna students.',skinEffect:'',quote:'Mika: Yep! You\'ve been waiting long, right? Now it\'s my turn to shine☆'},
  trinity_nagisa:         {type:'Passive / Battle Start',hiddenCond:'Appears when Schale has Mari, Sakurako, and Mine.',desc:'Passive: Adds +10/+10 to stat-adding effects\ntargeting Trinity students.\nPassive: Defeats the opponent that defeated her.\nBattle Start: Grants +10/+10 to Mari (Idol), Sakurako (Idol), Mine (Idol).',skinEffect:'',quote:'Nagisa: I greet you on behalf of Trinity.'},
  trinity_seia:           {type:'Passive / Deathrattle',hiddenCond:'Appears at Schedule Lv.6+, Schale is Trinity only, no HP damage taken this game.',desc:'Does not attack.\nAllied Trinity students (except herself) take no battle damage when defending.\nDeathrattle: All allied abilities are removed.\nSeia permanently disappears this game.',skinEffect:'',quote:'Seia: As such, all paths are bound to lead to one.'},
  millennium_nameless:    {type:'Battle Start',hiddenCond:'Appears at Schedule Lv.6+, only Millennium recruited, Arisu never recruited.',desc:'Destroys itself.\nDeals sequential damage from left with ATK+HP total.\nIgnores Shield, deals damage directly to HP.',skinEffect:'',quote:'???: In the end... everyone will get hurt someday.'},
  millennium_malkuth:     {type:'Preemptive',hiddenCond:'Appears at Schedule Lv.6+, summoned 10+ Millennium tokens this game.',desc:'Preemptive: Does not attack.\nInstead summons Sweeper (10/10, Shield, Self-destruct)\nequal to the number of allied Millennium students.\nIf Sweepers defeat the enemy, Malkuth does not attack.',skinEffect:'',quote:'Malkuth: A single will created beneath the flag. A pilgrim of the kingdom that reached the end of the world.',quote2:'Malkuth: ...My name is Malkuth.'},
  millennium_death_momoi: {type:'Passive / Preemptive',hiddenCond:'Appears when Schale has Momoi, Midori, Yuzu, and Arisu.',desc:'Appears by absorbing all Momoi from Schale.\nBase stats 10/10 plus absorbed Momoi\'s ATK sum and HP sum.\nPreemptive: If enemy stats are higher than base, removes granted stats then attacks.',skinEffect:'',quote:'Death Momoi: FATALITY!!!!',quoteCls:'chat-fatal'},
  sweeper:  {type:'Self-destruct',desc:'Shield. Self-destruct attack.',skinEffect:''},
  black_lord:{type:'Passive / Preemptive',desc:'Token summoned when Kiki is defeated.\nPassive: Immune to all effect kills/grants.\nPreemptive: Triggers when attacking.',skinEffect:''},
  // Hyakkiyako
  izuna:    {type:'Battlecry',desc:'All allies +1/+1 (including self)',skinEffect:'Swimsuit Izuna: +2/+2',skinEffectDesc:'Battlecry: All allies <span style="color:#ffd700;font-weight:700">+2/+2</span> (including self)'},
  tsukuyo:  {type:'Battlecry',desc:'All allies +1/+2 (including self)',skinEffect:'Dress Tsukuyo: +2/+4',skinEffectDesc:'Battlecry: Grants all allies <span style="color:#ffd700;font-weight:700">+2/+4</span>. (including self)'},
  yukari:   {type:'Preemptive',desc:'Stacks 1 <Succession> counter. (max 7)',skinEffect:'Swimsuit Yukari: Shield added',skinEffectDesc:'Preemptive: Stacks 1 <Succession> counter.\nAdditionally has <span style="color:#ffd700;font-weight:700">Shield</span>.'},
  mimori:   {type:'Passive',desc:'Sets the ATK of the enemy that attacked her\nto 0 for one round.',skinEffect:'Swimsuit Mimori: for this battle',skinEffectDesc:'Passive: Sets the ATK of the enemy that attacked her\nto 0 <span style="color:#ffd700;font-weight:700">for this battle</span>.'},
  renge:    {type:'Preemptive',desc:'Stacks 1 <Succession> counter. (max 7)',skinEffect:'Swimsuit Renge: Reborn added',skinEffectDesc:'Preemptive: Stacks 1 <Succession> counter.\nAdditionally has <span style="color:#ffd700;font-weight:700">Reborn</span>.'},
  shizuko:  {type:'Passive',desc:'Battlecry triggers 2 times.',skinEffect:'Swimsuit Shizuko: triggers 4 times',skinEffectDesc:'Passive: Battlecry triggers <span style="color:#ffd700;font-weight:700">4</span> times.'},
  tsubaki:  {type:'Battlecry',desc:'Allied Hyakkiyako students +2/+2 (including self)',skinEffect:'Guide Tsubaki: +4/+4',skinEffectDesc:'Battlecry: Grants allied Hyakkiyako students <span style="color:#ffd700;font-weight:700">+4/+4</span>. (including self)'},
  kikyou:   {type:'Preemptive',desc:'Stacks 1 <Succession> counter. (max 7)',skinEffect:'Swimsuit Kikyou: Shield added',skinEffectDesc:'Preemptive: Stacks 1 <Succession> counter.\nAdditionally has <span style="color:#ffd700;font-weight:700">Shield</span>.'},
  chise:    {type:'Deathrattle',desc:'Triggers 1 allied Hyakkiyako student\'s Battlecry.',skinEffect:'Swimsuit Chise: Triggers all Battlecries',skinEffectDesc:'Deathrattle: Triggers <span style="color:#ffd700;font-weight:700">all</span> allied Hyakkiyako\nstudents\' Battlecries.'},
  michiru:  {type:'Battle Start / Battlecry',desc:'Battle Start: Grants Ambush to 1 random allied Hyakkiyako student.\nBattlecry: Additionally triggers all other\nHyakkiyako students\' Battlecries.',skinEffect:'Dress Michiru: Ambush to 2 / Battlecry triggers twice',skinEffectDesc:'Battle Start: Grants Ambush to <span style="color:#ffd700;font-weight:700">2</span> random allied Hyakkiyako students.\nBattlecry: Additionally triggers all other\nHyakkiyako students\' Battlecries <span style="color:#ffd700;font-weight:700">twice</span>.'},
  nagusa:   {type:'Preemptive / Deathrattle',desc:'Attacks 2~5 times.\nStacks 1 <Succession> counter per hit. (max 7)\nDeathrattle: Defeats the opponent that defeated her.',skinEffect:'Swimsuit Nagusa: Reborn added',skinEffectDesc:'Preemptive: Attacks 2~5 times.\nStacks 1 <Succession> counter per hit.\nAdditionally has <span style="color:#ffd700;font-weight:700">Reborn</span>.\nDeathrattle: Defeats the opponent that defeated her.'},
  wakamo:   {type:'Preemptive / Passive',desc:'Attacks 2~5 times.\nStacks <Hovercraft> counter equal to hit count.\nPassive: When 4 counters are stacked, resets to 0 and summons <Hovercraft>.\n(Hovercraft: 10/10, Deathrattle: Summons Wakamo if none on allied field.)',skinEffect:'Swimsuit Wakamo: 4~10 hits, counter x2',skinEffectDesc:'Preemptive: Attacks <span style="color:#ffd700;font-weight:700">4~10</span> times.\nStacks <Hovercraft> counter equal to hit count<span style="color:#ffd700;font-weight:700">×2</span>.\nPassive: When 4 counters are stacked, resets to 0 and summons <Hovercraft>.\n(Hovercraft: 20/20, Deathrattle: Summons Wakamo if none on allied field.)'},
  hovercraft:{type:'Deathrattle',desc:'If all allied Wakamo are defeated,\nsummons Wakamo.\n(Golden Hovercraft: Summons Wakamo (Swimsuit))',skinEffect:'Skin Hovercraft: 20/20\nSummons Wakamo (Swimsuit)'},
  // Hyakkiyako 7-star
  hkyk_saikyo:   {type:'Hidden',hiddenCond:'Appears at Schedule Lv.6+, Schale consists of only Hyakkiyako students.',desc:'Pure power. 40/40 vanilla stats.',skinEffect:'',quote:'???: Anyway, it looked incredibly evil......'},
  hkyk_kuzunoha: {type:'Battle Start / Preemptive',hiddenCond:'Appears when an enemy has recruited/Discovered all 13 Hyakkiyako students this game.',desc:'On recruit, removes all students from Schale.\nBattle Start: Removes effects then defeats all students\nexcept Kuzunoha and opponent\'s 1st student.\nThis effect triggers first.\nPreemptive: Removes all effects from attack target.',skinEffect:'',quote:'Kuzunoha: Sooner or later... it\'s certain you\'ll no longer be who you are now.'},
  hkyk_showdown: {type:'Action Card',desc:'Grants Yukari, Renge, Kikyou, Nagusa\n+10/+10 and Shield, Windfury, Reborn.\n(includes Swimsuit versions)',skinEffect:''},
  // new 7-star
  gehenna_p68:            {type:'Passive / Battle Start / Deathrattle',hiddenCond:'Appears when Schale has Kayoko, Mutsuki, Haruka, and Aru.',desc:'Appears by absorbing Kayoko, Mutsuki, Haruka, Aru from Schale.\nBattle Start: Completely reverses opponent placement order.\nIgnores Taunt, targets the enemy with lowest HP.\nDeathrattle: Re-summons absorbed Aru, Kayoko, Mutsuki, Haruka with stats from when absorbed.',skinEffect:'',quote:'Aru: The cost of hiring us is quite expensive, you know? Sensei.'},
  millennium_seminar:     {type:'Passive / Battle Start',hiddenCond:'Appears when Schale has Yuuka, Noa, Koyuki, and Rio.',desc:'Appears by absorbing Yuuka, Noa, Koyuki, Rio from Schale.\nBattle Start: Removes all opponent abilities then swaps their ATK/HP.\nCopies up to 3 removed base abilities and up to 3 special abilities to self.',skinEffect:'',quote:'Rio: We will meet in a place without light.'},
  millennium_cc:          {type:'Passive / Deathrattle',hiddenCond:'Appears when Schale has Neru, Asuna, Akane, Karin, and Toki.',desc:'Appears by absorbing Neru, Asuna, Akane, Karin, Toki from Schale.\nPassive: <span style="color:#ffd700;font-weight:700">All allied coin tosses always succeed</span>.\nDeathrattle: Summons 4 <TNT> (1/20, Self-destruct) and 1 <Abi Eshuh Proto> (10/10).',skinEffect:'',quote:'Neru: Hey, everyone gather up. It\'s time to work.'},
  trinity_makeup:         {type:'Passive',hiddenCond:'Appears when Schale has Hifumi, Koharu, Hanako, and Azusa.',desc:'Appears by absorbing Hifumi, Koharu, Hanako, Azusa from Schale.\nIf the Make-Up Work Club survives a battle victory, sets opponent HP to 0.',skinEffect:'',quote:'Hifumi: So, let\'s start from now! Our story!',quote2:'Hifumi: A story of school and youth!!'},
  trinity_justice:        {type:'Passive / Battle Start / Deathrattle',hiddenCond:'Appears when Schale has Hasumi, Tsurugi, Mashiro, and Ichika.',desc:'Appears by absorbing Hasumi, Tsurugi, Mashiro, Ichika from Schale.\nPassive: Absorbs ATK and max HP of students defeated during battle.\nBattle Start: Triples own ATK and HP.\nDeathrattle: Summons Serious Tsurugi with <span style="color:#ffd700;font-weight:700">Shield, Windfury</span>.',skinEffect:'',quote:'Tsurugi: Now then, it\'s hunting time-!'},
  // ===== new characters =====
  ibuki:    {type:'Battle Start',desc:'Grants +5/+5 to allied Makoto, Chiaki, Satsuki, Iroha.',skinEffect:'Swimsuit Ibuki: +10/+10',skinEffectDesc:'Battle Start: Grants <span style="color:#ffd700;font-weight:700">+10/+10</span> to allied Makoto, Chiaki, Satsuki, Iroha.'},
  chiaki:   {type:'Ranged',desc:'Ranged attack. Does not take counter damage.',skinEffect:'Swimsuit Chiaki: Windfury added',skinEffectDesc:'Ranged+Windfury: Ranged attack. No counter damage.\nAttacks twice with <span style="color:#ffd700;font-weight:700">Windfury</span>.'},
  koyuki:   {type:'Preemptive',desc:'Swaps the attack target\'s ATK and HP\nfor this battle.',skinEffect:'Pajama Koyuki: additionally removes random opponent ability',skinEffectDesc:'Preemptive: Swaps the attack target\'s ATK and HP.\nAdditionally <span style="color:#ffd700;font-weight:700">removes one random opponent ability</span>.'},
  akane:    {type:'Battle Start',desc:'Grants allied Neru, Karin, Asuna, Akane, Toki\n"Deathrattle: Summon C4 (5/1 Self-destruct)".\n(Does not stack.)',skinEffect:'Bunny Girl Akane: Summons 2 C4',skinEffectDesc:'Battle Start: Grants allied Neru, Karin, Asuna, Akane, Toki\n"Deathrattle: Summon <span style="color:#ffd700;font-weight:700">2</span> C4 (5/1 Self-destruct)".\n(Does not stack.)'},
  karin:    {type:'Ranged+Pierce',desc:'Ranged attack + Pierce attack.\nPierces all enemies without counter damage.',skinEffect:'Bunny Girl Karin: Windfury added',skinEffectDesc:'Ranged+Pierce+<span style="color:#ffd700;font-weight:700">Windfury</span>: Ranged attack + Pierce attack.\nPierces all enemies without counter damage.\nAttacks twice with Windfury.'},
  asuna:    {type:'Passive',desc:'Asuna always wins the priority coin toss.',skinEffect:'Bunny Girl Asuna: leftmost ally also succeeds',skinEffectDesc:'Passive: Asuna always wins the priority coin toss.\nAdditionally, <span style="color:#ffd700;font-weight:700">the leftmost ally (excluding self)</span> also wins the coin toss.'},
  koharu:   {type:'Preemptive',desc:'When attacking, 5% chance to remove target\'s abilities\nand instantly kill them.',skinEffect:'Swimsuit Koharu: 10% chance',skinEffectDesc:'Preemptive: When attacking, <span style="color:#ffd700;font-weight:700">10%</span> chance to remove target\'s abilities\nand instantly kill them.'},
  hasumi:   {type:'Passive',desc:'Once per battle, absorbs ATK and HP\nof the first enemy defeated.',skinEffect:'Swimsuit Hasumi: absorbs double',skinEffectDesc:'Passive: Once per battle, absorbs ATK and HP\nof the first enemy defeated <span style="color:#ffd700;font-weight:700">at double rate</span>.'},
  suzumi:   {type:'Passive',desc:'Reduces all opponents\' coin toss chance by 30%.',skinEffect:'Magical Girl Suzumi: reduced by 60%',skinEffectDesc:'Passive: Reduces all opponents\' coin toss chance by <span style="color:#ffd700;font-weight:700">60%</span>.'},
  mutsuki:  {type:'Pierce',desc:'Pierce attack passes through the enemy and also attacks the one behind.',skinEffect:'New Year Mutsuki: Battle Start ATK+5',skinEffectDesc:'Pierce: Pierce attack passes through the enemy and also attacks the one behind.\n<span style="color:#ffd700;font-weight:700">Battle Start: ATK +5</span>'},
  haruka:   {type:'Passive',desc:'When Aru, Mutsuki, or Kayoko is attacked,\ncounterattacks the attacker 5 times.',skinEffect:'New Year Haruka: 10 counterattacks',skinEffectDesc:'Passive: When Aru, Mutsuki, or Kayoko is attacked,\ncounterattacks the attacker <span style="color:#ffd700;font-weight:700">10</span> times.'},
  // GSC
  haine:    {type:'Passive',desc:'When sold, all allies get +2/+2.',skinEffect:'Interview Haine: +4/+4',skinEffectDesc:'Passive: When sold, grants all allies <span style="color:#ffd700;font-weight:700">+4/+4</span>.'},
  momoka:   {type:'Passive',desc:'1 additional free reroll per turn.',skinEffect:'Flight Attendant Momoka: 2 free',skinEffectDesc:'Passive: <span style="color:#ffd700;font-weight:700">2</span> additional free rerolls per turn.'},
  ayumu:    {type:'Passive',desc:'Action card stat boosts gain +2/+2 additionally.',skinEffect:'Flight Attendant Ayumu: +4/+4 added',skinEffectDesc:'Passive: Action card stat boosts gain <span style="color:#ffd700;font-weight:700">+4/+4</span> additionally.'},
  aoi:      {type:'Passive',desc:'Gains +2 pyroxene additionally each turn.',skinEffect:'Interview Aoi: +4 added',skinEffectDesc:'Passive: Gains <span style="color:#ffd700;font-weight:700">+4</span> pyroxene additionally each turn.'},
  kaya:     {type:'Battle Start',desc:'Defeats the leftmost allied student and\nabsorbs their ATK and HP at 2x. (Triggers last)',skinEffect:'Coup Kaya: absorbs at 4x',skinEffectDesc:'Battle Start: Defeats the leftmost allied student and\nabsorbs their ATK and HP at <span style="color:#ffd700;font-weight:700">4x</span>.\n(Triggers last)'},
  lin:      {type:'Passive',desc:'Allied Deathrattle and Battlecry\ntrigger one additional time.',skinEffect:'Flight Attendant Lin: triggers twice more',skinEffectDesc:'Passive: Allied Deathrattle and Battlecry\ntrigger <span style="color:#ffd700;font-weight:700">two</span> additional times.'},
  // ===== Abydos =====
  ayane:    {type:'Deathrattle',desc:'Next turn pyroxene +1',skinEffect:'Swimsuit Ayane: pyroxene +2',skinEffectDesc:'Deathrattle: Next turn pyroxene <span style="color:#ffd700;font-weight:700">+2</span>'},
  serika:   {type:'Passive',desc:'When recruit phase ends, permanently adds remaining pyroxene to ATK and HP.',skinEffect:'Swimsuit Serika: adds at double.',skinEffectDesc:'Passive: When recruit phase ends, permanently adds remaining pyroxene to ATK and HP <span style="color:#ffd700;font-weight:700">at double</span>.'},
  nonomi:   {type:'Battle Start',desc:'Halves all pyroxene spent since Nonomi joined Schale,\nadds to leftmost student\'s ATK/HP. (rounded down)',skinEffect:'Swimsuit Nonomi: adds full amount without halving.',skinEffectDesc:'Battle Start: Adds all pyroxene spent since Nonomi joined Schale\nto leftmost student\'s ATK/HP <span style="color:#ffd700;font-weight:700">without halving</span>.'},
  shiroko:  {type:'Passive',desc:'Gains pyroxene next turn equal to\nenemies Shiroko defeated in battle.',skinEffect:'Swimsuit Shiroko: gains double.',skinEffectDesc:'Passive: Gains pyroxene next turn equal to <span style="color:#ffd700;font-weight:700">double</span>\nthe enemies Shiroko defeated in battle.'},
  hoshino:  {type:'Deathrattle',desc:'Grants own ATK and HP to 1 random ally.',skinEffect:'Swimsuit Hoshino: grants to 2 allies.',skinEffectDesc:'Deathrattle: Grants own ATK and HP to <span style="color:#ffd700;font-weight:700">2</span> random allies.'},
  Shiroko_Terror: {type:'Passive / Battle Start / Deathrattle',hiddenCond:'Appears when Schale has Shiroko, Hoshino, Nonomi, Ayane, and Serika.',desc:'Passive: Appears by absorbing Shiroko, Hoshino, Nonomi, Ayane, Serika from Schale.\nBattle Start: Destroys all except self and the enemy with highest HP.\nDeathrattle: Re-summons all absorbed students.',skinEffect:'',quote:'Shiroko: So maybe I too...... will be okay.'},
  // ===== Shanhaijing =====
  kokona:   {type:'Battlecry',desc:'Discovers a random student at or below Schedule level\n(excluding self) to the <span style="color:#ffd700;font-weight:700">bench</span>.\nDoes not trigger if bench is full.',skinEffect:'',skinEffectDesc:''},
  mina:     {type:'Battle Start / Deathrattle',desc:'Battle Start: Grants all allies -1/-1.\nDeathrattle: Grants all allies +3/+3.',skinEffect:'Recorder Mina: Deathrattle +6/+6',skinEffectDesc:'Battle Start: Grants all allies -1/-1.\nDeathrattle: Grants all allies <span style="color:#ffd700;font-weight:700">+6/+6</span>.'},
  reijo:    {type:'Passive',desc:'If she deals no damage,\nshe also takes no damage.',skinEffect:'Casual Reijo: Pierce added',skinEffectDesc:'Passive: If she deals no damage, she also takes no damage.\nAdditionally has <span style="color:#ffd700;font-weight:700">Pierce</span>.'},
  saya:     {type:'Passive',desc:'Immune to all effects during battle.',skinEffect:'Casual Saya: Immune to enemy effects only',skinEffectDesc:'Passive: Immune to <span style="color:#ffd700;font-weight:700">enemy</span> effects during battle.'},
  rumi:     {type:'Battle Start',desc:'Grants all base abilities on self\nto 1 random ally.',skinEffect:'Kid Rumi: to 2 allies',skinEffectDesc:'Battle Start: Grants all base abilities on self\nto <span style="color:#ffd700;font-weight:700">2</span> random allies.'},
  shun:     {type:'Passive',desc:'If an enemy is defeated by attack,\ndeals remaining damage to a random next target.',skinEffect:'Kid Shun: additional attack',skinEffectDesc:'Passive: If an enemy is defeated by attack,\n<span style="color:#ffd700;font-weight:700">additionally attacks</span> a random next target.'},
  kisaki:   {type:'Battlecry',desc:'Select 1 allied student and\nreplace with their skin version.',skinEffect:'Casual Kisaki: replaces all',skinEffectDesc:'Battlecry: Replaces <span style="color:#ffd700;font-weight:700">all</span> allied students\nwith their skin versions.'},
  shanhai_kiki: {type:'Passive',hiddenCond:'Appears at Schedule Lv.6+, Schale has Kisaki and 5+ Shanhaijing students.',desc:'Passive: Appears by absorbing Kisaki from Schale. Adds ATK and HP.\nWhen defeated, summons <Black Lord of Hyeonryongmun> (30/30).',skinEffect:'',quote:'Kiki: Waa-! High-er, high-er!! Kiki loves Sensei so much!!'},
  Kei_usb: {type:'Passive',hiddenCond:'Appears at Schedule Lv.6+, only Millennium recruited, Arisu in Schale, no enemy recruited the princess.',desc:'Does not attack.\nWhen taking battle damage, Arisu takes it instead.\nIf surviving at battle end, transforms into Arisu & Kei.',skinEffect:''},
  Arisu_Kei: {type:'Preemptive',desc:'Appears by absorbing Arisu and Kei from the board.\nPreemptive: Attacks all opponents once each from left.\nThis attack ignores Shield.',skinEffect:''},
  // ===== skin same (no change) =====
  reisa:    {type:'Survive',desc:'Summons Kazusa. (once per battle)',skinEffect:'Magical Girl Reisa: Summons Band Kazusa',skinEffectDesc:'Survive: Summons Band Kazusa. (once per battle)'},
  pina:     {type:'',desc:'',skinEffect:'Guide Pina: Battle Start +2/+2',skinEffectDesc:'Battle Start: Grants self <span style="color:#ffd700;font-weight:700">+2/+2</span>.'},
  hanako:   {type:'',desc:'',skinEffect:'Swimsuit Hanako: Battle Start HP+5',skinEffectDesc:'Battle Start: Grants self <span style="color:#ffd700;font-weight:700">+0/+5</span>.'},
  ichika:   {type:'',desc:'',skinEffect:'Swimsuit Ichika: Reborn added',skinEffectDesc:'Shield+Windfury+<span style="color:#ffd700;font-weight:700">Reborn</span>'},
  iori:     {type:'',desc:'',skinEffect:'Swimsuit Iori: Battle Start ATK+5',skinEffectDesc:'Battle Start: Grants self <span style="color:#ffd700;font-weight:700">+5/+0</span>.'},
  // ===== skin-only effects (skin added without base ability) =====
  shimiko:  {type:'',desc:'',skinEffect:'Evil Boss Shimiko: Shield, Cleave'},
  yuuka:    {type:'',desc:'',skinEffect:'Sportswear Yuuka: Battle Start +2/+2 to self'},
  arisu:    {type:'',desc:'',skinEffect:'Maid Arisu: Pierce changed to Cleave'},
  hina:     {type:'',desc:'',skinEffect:'Dress Hina: Shield, Windfury added',skinEffectDesc:'Cleave+<span style="color:#ffd700;font-weight:700">Shield+Windfury</span>: Shield and Windfury added to Cleave.'},
};

// ========== TOKENS ==========
var TOKENS = {
  panchan:   {id:'panchan',   name:'Panchan',       school:'Gehenna',   tier:0, atk:1, hp:1, kw:[],          img:'token/panchan.png'},
  toramaru:  {id:'toramaru',  name:'Toramaru',   school:'Gehenna',   tier:0, atk:5, hp:1, kw:[],          img:'token/toramaru.png'},
  cathpalug: {id:'cathpalug', name:'Cath Palug', school:'Trinity', tier:0, atk:4, hp:3, kw:[],  img:'token/CathPalug.png'},
  perorosama:{id:'perorosama',name:'Peroro-sama',   school:'Trinity', tier:0, atk:3, hp:1, kw:[],          img:'token/perorosama.png'},
  abi_eshuh: {id:'abi_eshuh', name:'Abi Eshuh',school:'Millennium', tier:0, atk:2, hp:2, kw:[],          img:'token/Abi_Eshuh.png'},
  dango:     {id:'dango',     name:'Dango',       school:'Gehenna',   tier:0, atk:1, hp:1, kw:[],          img:'token/Dango.png'},
  airship:   {id:'airship',   name:'Airship',     school:'Gehenna',   tier:0, atk:1, hp:1, kw:['selfdestruct'], img:'token/Airship.png'},
  makoto_perma:{id:'makoto_perma',name:'Perma-hair Makoto',school:'Gehenna',tier:0,atk:6,hp:6,kw:[],       img:'token/Makoto_(perma).png'},
  avant_garde:{id:'avant_garde',name:'Avant-garde Unit',school:'Millennium',tier:0, atk:1, hp:1, kw:[],        img:'token/Avant_garde.png'},
  thunder_e: {id:'thunder_e', name:'Thunder',     school:'Millennium', tier:0, atk:8, hp:2, kw:['shield'],  img:'token/Thunder_E.png'},
  sweeper:   {id:'sweeper',  name:'Sweeper',     school:'Millennium', tier:0, atk:10,hp:10,kw:['shield','selfdestruct'], img:'token/Sweeper.png'},
  hina_the_last:{id:'hina_the_last',name:'Hina the Last',school:'Gehenna',tier:0,atk:10,hp:10,kw:['cleave','poison'],img:'token/Hina_the_last.png'},
  hovercraft:{id:'hovercraft',name:'Hovercraft',school:'Hyakkiyako',tier:0, atk:10,hp:10,kw:[],          img:'token/HoverCraft.png'},
  c4:        {id:'c4',        name:'C4',          school:'Millennium', tier:0, atk:5, hp:1, kw:['selfdestruct'], img:'token/C4.png'},
  tnt:       {id:'tnt',       name:'TNT',         school:'Millennium', tier:0, atk:1, hp:20, kw:['selfdestruct'], img:'token/C4.png'},
  abi_eshuh_proto:{id:'abi_eshuh_proto',name:'Abi Eshuh Proto',school:'Millennium',tier:0, atk:10, hp:10, kw:[], img:'token/Abi_Eshuh.png'},
  black_lord:{id:'black_lord',name:'Black Lord of Hyeonryongmun',school:'Shanhaijing',tier:0,atk:30,hp:30,kw:['shield','preemptive'],img:'token/Black_lord.png'},
};

function makeToken(tokenId) {
  var tmpl = TOKENS[tokenId];
  if(!tmpl) return null;
  var tk = {
    id: tokenId+'_'+Math.random().toString(36).substr(2,5),
    baseId: tokenId,
    isToken: true,
    name: tmpl.name,
    school: tmpl.school,
    tier: tmpl.tier,
    atk: tmpl.atk,
    hp: tmpl.hp,
    maxHp: tmpl.hp,
    kw: (tmpl.kw||[]).slice(),
    isSkin: false,
    img: tmpl.img,
    copies: 1
  };
  if(G.rioSchool) tk.school=G.rioSchool;
  return tk;
}

// ========== MAGIC CARDS ==========
var BUFF_SPELL_IDS={encourage:1,gold_bullet:1,visit_plan:1,visit_buff:1,unity_mt:1,sensei:1,higher_body:1,lower_body:1,get_set_go:1};
var SPELLS = [
  {id:'encourage',name:'Encourage',cost:1,tier:1,desc:'All Schedule students ATK/HP +1',target:'auto',img:'../img/spell/encourage.png',
    effect:function(G){var ab=getAyumuBonus();for(var i=0;i<G.shop.length;i++){if(G.shop[i]&&!G.shop[i].isSpell){G.shop[i].atk+=1+ab;G.shop[i].hp+=1+ab;}}}},
  {id:'gacha',name:'Gacha Ticket +1',cost:2,tier:1,desc:'Randomly obtain 1 Schedule student',target:'auto',img:'../img/spell/gacha.png',
    effect:function(G){var p=G.players[0];var avail=[];for(var i=0;i<G.shop.length;i++){if(G.shop[i]&&!G.shop[i].isSpell)avail.push(i);}if(avail.length===0)return false;var pick=avail[Math.floor(Math.random()*avail.length)];var m=G.shop[pick];G.shop[pick]=null;
      // triple check (board+bench)
      var count=0;for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===m.baseId&&!p.board[j].isSkin)count++;}
      if(p.bench&&p.bench.baseId===m.baseId&&!p.bench.isSkin)count++;
      var willTriple=count>=2;
      if(p.board.length>=MAX_BOARD&&!willTriple)return false;
      if(willTriple){
        var tmpl=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id===m.baseId){tmpl=CHARS[j];break;}
        if(!tmpl){p.board.push(m);triggerBattlecry(m,p);return true;}
        var mKw=[],bAtk=0,bHp=0;var sources=[];
        for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===m.baseId&&!p.board[j].isSkin)sources.push(p.board[j]);}
        if(p.bench&&p.bench.baseId===m.baseId&&!p.bench.isSkin)sources.push(p.bench);
        sources.push(m);
        for(var j=0;j<sources.length;j++){var u=sources[j];for(var k=0;k<(u.kw||[]).length;k++){if(mKw.indexOf(u.kw[k])===-1)mKw.push(u.kw[k]);}bAtk+=u.atk-tmpl.atk;bHp+=u.hp-tmpl.hp;}
        var newBoard=[];var removed=0;
        for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===m.baseId&&!p.board[j].isSkin&&removed<2){removed++;}else{newBoard.push(p.board[j]);}}
        if(p.bench&&p.bench.baseId===m.baseId&&!p.bench.isSkin){p.bench=null;removed++;}
        p.board=newBoard;var gld=makeMinion(tmpl,true);gld.kw=mKw;gld.atk+=bAtk;gld.hp+=bHp;gld.maxHp=gld.hp;applySkinKwTransform(tmpl,gld);
        p.board.push(gld);triggerBattlecry(gld,p);showDiscover(p);
      } else {
        p.board.push(m);triggerBattlecry(m,p);
      }
      return true;}},
  {id:'gold_bullet',name:'Gold Bullet',cost:1,tier:1,desc:'select student ATK +4',target:'select_ally',img:'../img/spell/gold_bullet.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;var ab=getAyumuBonus();p.board[idx].atk+=4+ab;if(ab>0){p.board[idx].hp+=ab;p.board[idx].maxHp=(p.board[idx].maxHp||p.board[idx].hp)+ab;}logBuff(p.board[idx],'Gold Bullet',4+ab,ab);return true;}},
  {id:'savings',name:'Emergency Fund',cost:1,tier:2,desc:'Next reroll/turn gold +2',target:'auto',img:'../img/spell/savings.png',
    effect:function(G){G.bonusStone=(G.bonusStone||0)+2;}},
  {id:'visit_plan',name:'Regular Schedule',cost:3,tier:2,desc:'Schedule students ATK/HP +2 for this game',target:'auto',img:'../img/spell/visit_plan.png',
    effect:function(G){var ab=getAyumuBonus();var buff=2+ab;G.shopBuff=(G.shopBuff||0)+buff;
      // apply immediately to current shop
      for(var _vi=0;_vi<G.shop.length;_vi++){if(G.shop[_vi]&&!G.shop[_vi].isSpell&&!G.shop[_vi].isHidden){G.shop[_vi].atk+=buff;G.shop[_vi].hp+=buff;}}
    }},
  {id:'visit_buff',name:'After-school Class',cost:2,tier:2,desc:'select student +4/+4',target:'select_ally',img:'../img/spell/Hard_work.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;var ab=getAyumuBonus();p.board[idx].atk+=4+ab;p.board[idx].hp+=4+ab;p.board[idx].maxHp=(p.board[idx].maxHp||p.board[idx].hp)+4+ab;logBuff(p.board[idx],'After-school',4+ab,4+ab);return true;}},
  {id:'aggro',name:'Aggro Draw',cost:1,tier:3,desc:'Grant Taunt to selected student',target:'select_ally',img:'../img/spell/aggro.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;addKw(p.board[idx],'taunt');return true;}},
  {id:'promotion',name:'Schedule Promotion',cost:4,tier:3,desc:'upgrade cost -5',target:'auto',img:'../img/spell/promotion.png',
    effect:function(G){var p=G.players[0];p.upgradeCost=Math.max(0,p.upgradeCost-5);}},
  {id:'unity_mt',name:'Unity Retreat',cost:4,tier:3,desc:'Selected school students +4/+4',target:'select_school',img:'../img/spell/unity_mt.png',
    effect:function(G,school){var p=G.players[0];var ab=getAyumuBonus();var found=false;for(var i=0;i<p.board.length;i++){if(p.board[i].school===school){p.board[i].atk+=4+ab;p.board[i].hp+=4+ab;p.board[i].maxHp=(p.board[i].maxHp||p.board[i].hp)+4+ab;logBuff(p.board[i],'Unity Retreat',4+ab,4+ab);found=true;}}return found;}},
  {id:'mirror',name:'Mirror World',cost:6,tier:6,desc:'Duplicate selected student (once per game)',target:'select_ally',once:true,img:'../img/spell/mirror.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;var orig=p.board[idx];
      if(!orig.isSkin){var cnt=0;for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===orig.baseId&&!p.board[j].isSkin)cnt++;}
        if(p.bench&&p.bench.baseId===orig.baseId&&!p.bench.isSkin)cnt++;
        if(cnt>=2){var tmpl=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id===orig.baseId)tmpl=CHARS[j];
          if(!tmpl)return false;
          var mKw=[],bAtk=0,bHp=0;for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===orig.baseId&&!p.board[j].isSkin){var u=p.board[j];for(var k=0;k<(u.kw||[]).length;k++){if(mKw.indexOf(u.kw[k])===-1)mKw.push(u.kw[k]);}bAtk+=u.atk-tmpl.atk;bHp+=u.hp-tmpl.hp;}}
          if(p.bench&&p.bench.baseId===orig.baseId&&!p.bench.isSkin){var bu=p.bench;for(var k=0;k<(bu.kw||[]).length;k++){if(mKw.indexOf(bu.kw[k])===-1)mKw.push(bu.kw[k]);}bAtk+=bu.atk-tmpl.atk;bHp+=bu.hp-tmpl.hp;}
          bAtk+=orig.atk-tmpl.atk;bHp+=orig.hp-tmpl.hp;
          var newBoard=[];var removed=0;for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===orig.baseId&&!p.board[j].isSkin&&removed<2){removed++;}else{newBoard.push(p.board[j]);}}
          if(p.bench&&p.bench.baseId===orig.baseId&&!p.bench.isSkin){p.bench=null;removed++;}
          p.board=newBoard;var gld=makeMinion(tmpl,true);gld.kw=mKw;gld.atk+=bAtk;gld.hp+=bHp;gld.maxHp=gld.hp;applySkinKwTransform(tmpl,gld);p.board.push(gld);triggerBattlecry(gld,p);showDiscover(G.players[0]);return true;}}
      if(p.board.length>=MAX_BOARD){
        // full board but triple possible after duplication (existing 2 + copy = 3)
        if(!orig.isSkin){var cnt2=0;for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===orig.baseId&&!p.board[j].isSkin)cnt2++;}
          if(p.bench&&p.bench.baseId===orig.baseId&&!p.bench.isSkin)cnt2++;
          if(cnt2>=2){var tmpl2=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id===orig.baseId){tmpl2=CHARS[j];break;}
            if(tmpl2){var mKw2=[],bAtk2=0,bHp2=0;
              var srcs=[];for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===orig.baseId&&!p.board[j].isSkin)srcs.push(p.board[j]);}
              if(p.bench&&p.bench.baseId===orig.baseId&&!p.bench.isSkin)srcs.push(p.bench);
              for(var j=0;j<srcs.length;j++){var u=srcs[j];for(var k=0;k<(u.kw||[]).length;k++){if(mKw2.indexOf(u.kw[k])===-1)mKw2.push(u.kw[k]);}bAtk2+=u.atk-tmpl2.atk;bHp2+=u.hp-tmpl2.hp;}
              bAtk2+=orig.atk-tmpl2.atk;bHp2+=orig.hp-tmpl2.hp;
              if(p.bench&&p.bench.baseId===orig.baseId&&!p.bench.isSkin)p.bench=null;
              var newBoard2=[];var removed2=0;for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===orig.baseId&&!p.board[j].isSkin&&removed2<2){removed2++;}else{newBoard2.push(p.board[j]);}}
              p.board=newBoard2;var gld2=makeMinion(tmpl2,true);gld2.kw=mKw2;gld2.atk+=bAtk2;gld2.hp+=bHp2;gld2.maxHp=gld2.hp;applySkinKwTransform(tmpl2,gld2);p.board.push(gld2);triggerBattlecry(gld2,p);showDiscover(G.players[0]);return true;}}}
        return false;}
      var copy={id:orig.id+'_c'+Math.random().toString(36).substr(2,3),baseId:orig.baseId,name:orig.name,school:orig.school,tier:orig.tier,atk:orig.atk,hp:orig.hp,maxHp:orig.hp,kw:(orig.kw||[]).slice(),isSkin:orig.isSkin,img:orig.img,copies:1};
      p.board.push(copy);triggerBattlecry(copy,p);return true;}},
  {id:'clover',name:'Lucky Clover',cost:6,tier:4,desc:'Grant Shield to selected student',target:'select_ally',img:'../img/spell/clover.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;addKw(p.board[idx],'shield');return true;}},
  {id:'venom',name:'Viper Move',cost:3,tier:5,desc:'Grant Venomous to selected student',target:'select_ally',img:'../img/spell/venom.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;addKw(p.board[idx],'poison');return true;}},
  {id:'dressing',name:'Dressing Room',cost:7,tier:6,desc:'Change selected student to golden (once per game)',target:'select_ally',once:true,img:'../img/spell/dressing.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;var m=p.board[idx];if(m.isSkin)return false;var tmpl=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id===m.baseId)tmpl=CHARS[j];if(!tmpl)return false;var bonusAtk=m.atk-tmpl.atk;var bonusHp=m.hp-tmpl.hp;m.name=tmpl.skin;m.atk=tmpl.atk*2+1+bonusAtk;m.hp=tmpl.hp*2+1+bonusHp;m.maxHp=m.hp;m.isSkin=true;m.img=tmpl.imgGold;applySkinKwTransform(tmpl,m);return true;}},
  {id:'school_visit',name:'School Visit',cost:2,tier:5,desc:'Reroll with only selected school students',target:'select_school',img:'../img/spell/school_visit.png',
    effect:function(G,school){var p=G.players[0];var pool=getAvailableChars(p.tier).filter(function(c){return c.school===school;});if(pool.length===0)return false;var size=SHOP_SIZE[p.tier];var shop=[];for(var i=0;i<size;i++){var tmpl=pool[Math.floor(Math.random()*pool.length)];shop.push(makeMinion(tmpl,false));}applyShopBuff(shop);G.shop=shop;addSpellToShop();return true;}},
  {id:'sensei',name:'Sensei\'s Command',cost:7,tier:5,desc:'All allies +5/+5 (triggers twice)',target:'auto',img:'../img/spell/sensei.png',
    effect:function(G){var p=G.players[0];var ab=getAyumuBonus();for(var r=0;r<2;r++){for(var i=0;i<p.board.length;i++){p.board[i].atk+=5+ab;p.board[i].hp+=5+ab;p.board[i].maxHp=(p.board[i].maxHp||p.board[i].hp)+5+ab;logBuff(p.board[i],'Sensei\'s Command',5+ab,5+ab);}}}},
  // ===== New Spell Cards =====
  {id:'higher_body',name:'Upper Body Focus',cost:1,tier:1,desc:'select student +3/+1',target:'select_ally',img:'../img/spell/higher_body.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;var ab=getAyumuBonus();p.board[idx].atk+=3+ab;p.board[idx].hp+=1+ab;p.board[idx].maxHp=(p.board[idx].maxHp||p.board[idx].hp)+1+ab;logBuff(p.board[idx],'Upper Body Focus',3+ab,1+ab);return true;}},
  {id:'lower_body',name:'Lower Body Focus',cost:1,tier:1,desc:'select student +1/+3',target:'select_ally',img:'../img/spell/lower_body.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;var ab=getAyumuBonus();p.board[idx].atk+=1+ab;p.board[idx].hp+=3+ab;p.board[idx].maxHp=(p.board[idx].maxHp||p.board[idx].hp)+3+ab;logBuff(p.board[idx],'Lower Body Focus',1+ab,3+ab);return true;}},
  {id:'surveillance',name:'Surveillance Net',cost:1,tier:2,desc:'Next 2 rerolls free',target:'auto',img:'../img/spell/surveillance.png',
    effect:function(G){G.freeRerolls=(G.freeRerolls||0)+2;}},
  {id:'two_hands',name:'Dual Wield',cost:2,tier:2,desc:'Grant Windfury to selected student',target:'select_ally',img:'../img/spell/Two_hands.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;addKw(p.board[idx],'windfury');return true;}},
  {id:'arona_cheat',name:'Challenge, 33%!',cost:2,tier:3,desc:'33% chance to Discover a current tier student!\n(67% chance to fail)',target:'auto',img:'../img/spell/Arona_cheat.png',
    effect:function(G){if(Math.random()<0.33){var p=G.players[0];var cands=[];for(var i=0;i<CHARS.length;i++){if(CHARS[i].tier===p.tier&&G.pool[CHARS[i].id]>0)cands.push(CHARS[i]);}if(cands.length===0)return true;cands.sort(function(){return Math.random()-0.5;});showDiscoverCustom(cands.slice(0,3));return true;}return true;}},
  {id:'revive_standby',name:'Revive Standby',cost:2,tier:3,desc:'Grant Reborn to selected student',target:'select_ally',img:'../img/spell/Momoi_revive.jpg',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;addKw(p.board[idx],'reborn');return true;}},
  {id:'on_duty',name:'Who Visited Most?',cost:4,tier:4,desc:'Discover the most common school\'s student!',target:'auto',img:'../img/spell/on_duty.png',
    effect:function(G){var p=G.players[0];var sc={};for(var i=0;i<p.board.length;i++){var s=p.board[i].school;sc[s]=(sc[s]||0)+1;}var best=null,bc=0;for(var s in sc){if(sc[s]>bc){bc=sc[s];best=s;}}if(!best)return false;var cands=[];for(var i=0;i<CHARS.length;i++){if(CHARS[i].school===best&&CHARS[i].tier<=p.tier&&G.pool[CHARS[i].id]>0)cands.push(CHARS[i]);}if(cands.length===0)return false;cands.sort(function(){return Math.random()-0.5;});showDiscoverCustom(cands.slice(0,3));return true;}},
  {id:'get_set_go',name:'Get, Set, Go!',cost:5,tier:4,desc:'+8/+8 to 1 random per school',target:'auto',img:'../img/spell/get_set_go.jpg',
    effect:function(G){var p=G.players[0];var ab=getAyumuBonus();var schools={};for(var i=0;i<p.board.length;i++){var s=p.board[i].school;if(!schools[s])schools[s]=[];schools[s].push(i);}for(var s in schools){var arr=schools[s];var pick=arr[Math.floor(Math.random()*arr.length)];p.board[pick].atk+=8+ab;p.board[pick].hp+=8+ab;p.board[pick].maxHp=(p.board[pick].maxHp||p.board[pick].hp)+8+ab;logBuff(p.board[pick],'Get, Set, Go!',8+ab,8+ab);}return true;}},
  {id:'twins',name:'We Look Alike',cost:4,tier:5,desc:'Merge duplicate student into skin',target:'auto',img:'../img/spell/Twins.png',
    effect:function(G){var p=G.players[0];var counts={};for(var i=0;i<p.board.length;i++){if(!p.board[i].isSkin){var bid=p.board[i].baseId;counts[bid]=(counts[bid]||0)+1;}}var target=null;for(var bid in counts){if(counts[bid]>=2){target=bid;break;}}if(!target)return false;var tmpl=null;for(var i=0;i<CHARS.length;i++)if(CHARS[i].id===target){tmpl=CHARS[i];break;}if(!tmpl)return false;var mKw=[],bAtk=0,bHp=0,newBoard=[],removed=0;for(var i=0;i<p.board.length;i++){if(p.board[i].baseId===target&&!p.board[i].isSkin&&removed<2){var u=p.board[i];for(var k=0;k<(u.kw||[]).length;k++){if(mKw.indexOf(u.kw[k])===-1)mKw.push(u.kw[k]);}bAtk+=u.atk-tmpl.atk;bHp+=u.hp-tmpl.hp;removed++;}else{newBoard.push(p.board[i]);}}p.board=newBoard;var gld=makeMinion(tmpl,true);gld.kw=mKw;gld.atk+=bAtk;gld.hp+=bHp;gld.maxHp=gld.hp;applySkinKwTransform(tmpl,gld);p.board.push(gld);triggerBattlecry(gld,p);showDiscover(p);return true;}},
  {id:'on_your_mark',name:'On Your Mark',cost:3,tier:5,desc:'Grant 1 random base ability per school\n(no duplicates)',target:'auto',img:'../img/spell/On_your_mark.png',
    effect:function(G){var p=G.players[0];var basicPool=['taunt','shield','poison','reborn','cleave','pierce','ranged','windfury','selfdestruct'];var schools={};for(var i=0;i<p.board.length;i++){var s=p.board[i].school;if(!schools[s])schools[s]=[];schools[s].push(i);}var usedKw={};for(var s in schools){var arr=schools[s];var pick=arr[Math.floor(Math.random()*arr.length)];var u=p.board[pick];var avail=basicPool.filter(function(k){return !hasKw(u,k)&&!usedKw[k];});if(avail.length===0)continue;var kw=avail[Math.floor(Math.random()*avail.length)];addKw(u,kw);usedKw[kw]=true;}return true;}},
  {id:'bunny_toss',name:'Bunny Toss',cost:3,tier:6,desc:'Next battle coin toss success rate +30%',target:'auto',img:'../img/spell/bunny_toss.png',
    effect:function(G){G.bunnyTossBonus=(G.bunnyTossBonus||0)+0.30;}},
  {id:'poison_grail',name:'Poisoned Grail',cost:4,tier:6,desc:'Return 1 allied student,\nthen grant its ATK and HP to 1 random ally.',target:'select_ally',img:'../img/spell/consume.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;if(p.board.length<=1)return false;var removed=p.board.splice(idx,1)[0];returnToPool(removed.baseId,removed.isSkin?3:1);var targets=[];for(var i=0;i<p.board.length;i++)targets.push(i);if(targets.length===0)return false;var pick=targets[Math.floor(Math.random()*targets.length)];var ab=getAyumuBonus();p.board[pick].atk+=removed.atk+ab;p.board[pick].hp+=removed.hp+ab;p.board[pick].maxHp=(p.board[pick].maxHp||p.board[pick].hp)+removed.hp+ab;logBuff(p.board[pick],'Poisoned Grail',removed.atk+ab,removed.hp+ab);return true;}},
];

function getAvailableSpells(tier) {
  var p=G.players[0];
  return SPELLS.filter(function(s){
    if(s.tier>tier)return false;
    if(s.id==='promotion'&&p.tier>=6)return false;
    // We Look Alike: only show if a unit with 2 copies exists
    if(s.id==='twins'){
      var counts={};for(var i=0;i<p.board.length;i++){if(!p.board[i].isSkin){counts[p.board[i].baseId]=(counts[p.board[i].baseId]||0)+1;}}
      var hasPair=false;for(var bid in counts){if(counts[bid]>=2){hasPair=true;break;}}
      if(!hasPair)return false;
    }
    return true;
  });
}

function applyShopBuff(shop) {
  if(G.shopBuff && G.shopBuff>0){
    for(var i=0;i<shop.length;i++){if(shop[i]&&!shop[i].isSpell){shop[i].atk+=G.shopBuff;shop[i].hp+=G.shopBuff;}}
    // shopBuff is not reset — persists throughout the game
  }
}

function addSpellToShop() {
  var p=G.players[0];
  if(!G.usedOnceSpells) G.usedOnceSpells={};
  var available=getAvailableSpells(p.tier).filter(function(s){return !s.once||!G.usedOnceSpells[s.id];});
  if(available.length>0){
    var spell=available[Math.floor(Math.random()*available.length)];
    G.shop.push({isSpell:true,spell:spell,name:spell.name,cost:spell.cost,desc:spell.desc,tier:spell.tier,target:spell.target,img:spell.img||null});
  }
}

// ========== SHARED POOL ==========
var POOL_COPIES = {1:12,2:10,3:8,4:6,5:5,6:4,7:1};

function initPool() {
  var pool={};
  var unlocked=getUnlockedAbydos();
  for(var i=0;i<CHARS.length;i++){
    if(CHARS[i].locked && unlocked.indexOf(CHARS[i].id)===-1) continue;
    var copies=POOL_COPIES[CHARS[i].tier]||10;
    if(CHARS[i].school==='GSC') copies=Math.round(copies*0.7);
    pool[CHARS[i].id]=copies;
  }
  for(var i=0;i<HIDDEN_CHARS.length;i++){
    pool[HIDDEN_CHARS[i].id]=1;
  }
  return pool;
}
// ========== Eligma (Abydos unlock) System ==========
var ENIGMA_UNLOCK_COST = 5; // Cost per Mystery Release
// Mystery Release card pool — consume Eligma to release sequentially. Will be expanded.
var MYSTERY_CARD_POOL = ['ayane','serika','nonomi','shiroko','hoshino','kokona','mina','reijo','saya','rumi','shun','kisaki','sena','ui','himari','chise','wakamo','kaya','lin'];
var ABYDOS_LOCKED_IDS = MYSTERY_CARD_POOL; // Backward-compatible alias
var ABYDOS_UNLOCK_KEY = 'babg_abydos_unlocked';

// Released card list (localStorage, per account)
function _unlockKey(){
  var name=(window._babgLogin&&window._babgLogin.name)||'';
  return name?'babg_unlocked_'+name:ABYDOS_UNLOCK_KEY;
}
function getUnlockedAbydos() {
  try { return JSON.parse(localStorage.getItem(_unlockKey())||'[]'); } catch(e){return [];}
}
function setUnlockedAbydos(arr) {
  try { localStorage.setItem(_unlockKey(), JSON.stringify(arr)); } catch(e){}
}
// Last fetched Eligma points cache (for renderAll display)
function getEnigmaPoints() { return window._enigmaPointsCache||0; }

// 7-star unique recruit history (per account, localStorage + server pd.recruitedTier7 sync)
function _recruitedT7Key(){
  var name=(window._babgLogin&&window._babgLogin.name)||'';
  return name?'babg_recruited_t7_'+name:'babg_recruited_t7';
}
function getRecruitedTier7(){
  try { return JSON.parse(localStorage.getItem(_recruitedT7Key())||'[]'); } catch(e){return [];}
}
function setRecruitedTier7(arr){
  try { localStorage.setItem(_recruitedT7Key(), JSON.stringify(arr)); } catch(e){}
}
function recordRecruitTier7(baseId){
  if(!baseId)return;
  var list=getRecruitedTier7();
  if(list.indexOf(baseId)===-1){
    list.push(baseId);
    setRecruitedTier7(list);
    // Server sync (async, local is maintained even if fail)
    if(window._babgLogin&&window._babgLogin.name&&typeof fetchRecords==='function'){
      fetchRecords(function(err,data,sha){
        if(err||!data||!data.players)return;
        var pd=data.players[window._babgLogin.name];
        if(!pd)return;
        var srv=pd.recruitedTier7||[];
        var changed=false;
        for(var i=0;i<list.length;i++){if(srv.indexOf(list[i])===-1){srv.push(list[i]);changed=true;}}
        // Reverse merge from server to local
        for(var i=0;i<srv.length;i++){if(list.indexOf(srv[i])===-1){list.push(srv[i]);}}
        setRecruitedTier7(list);
        if(changed){
          pd.recruitedTier7=srv;
          if(typeof saveRecords==='function') saveRecords(data,sha,function(){});
        }
      });
    }
  }
}
// On login, merge server pd.recruitedTier7 to localStorage (cross-device sync)
function syncRecruitedTier7FromPd(pd){
  if(!pd||!pd.recruitedTier7||!pd.recruitedTier7.length)return;
  var list=getRecruitedTier7();
  var changed=false;
  for(var i=0;i<pd.recruitedTier7.length;i++){
    if(list.indexOf(pd.recruitedTier7[i])===-1){list.push(pd.recruitedTier7[i]);changed=true;}
  }
  if(changed)setRecruitedTier7(list);
}

// Mystery Release — called from quest window. Deducts from pd.points then saves to server.
var _mysteryUnlocking=false;
var _mysteryUnlockCooldown=0;
function doMysteryUnlock() {
  if(_mysteryUnlocking)return;
  // Cooldown: block re-call within 2 seconds after last release (prevent duplicate touch events)
  var now=Date.now();
  if(now-_mysteryUnlockCooldown<2000)return;
  if(!window._babgLogin||!window._babgLogin.name){alert('Login is required.');return;}
  _mysteryUnlocking=true;
  var _retries=0;
  function _tryUnlock(){
    var unlocked = getUnlockedAbydos();
    var locked = MYSTERY_CARD_POOL.filter(function(id){return unlocked.indexOf(id)===-1;});
    if(locked.length===0){_mysteryUnlocking=false;alert('No more Mystery Release cards to unlock.');return;}
    fetchRecords(function(err,data,sha){
      if(err||!data){_mysteryUnlocking=false;alert('Server connection failed. Please try again later.');return;}
      var pd=data.players[window._babgLogin.name];
      if(!pd){_mysteryUnlocking=false;alert('Player data not found.');return;}
      if(!pd.points||pd.points<ENIGMA_UNLOCK_COST){
        _mysteryUnlocking=false;alert('Insufficient Eligma.\nrequired: '+ENIGMA_UNLOCK_COST+'P / owned: '+(pd.points||0)+'P');return;
      }
      pd.points-=ENIGMA_UNLOCK_COST;
      // Merge lock list based on server data (reflect unlocks from other devices)
      var serverUnlocked=pd.unlockedAbydos||[];
      for(var _ui=0;_ui<serverUnlocked.length;_ui++){
        if(unlocked.indexOf(serverUnlocked[_ui])===-1) unlocked.push(serverUnlocked[_ui]);
      }
      var locked2=MYSTERY_CARD_POOL.filter(function(id){return unlocked.indexOf(id)===-1;});
      if(locked2.length===0){_mysteryUnlocking=false;alert('No more Mystery Release cards to unlock.');pd.points+=ENIGMA_UNLOCK_COST;return;}
      var pick=locked2[Math.floor(Math.random()*locked2.length)];
      unlocked.push(pick);
      pd.unlockedAbydos=unlocked.slice();
      saveRecords(data,sha,function(saveErr){
        if(saveErr){
          _retries++;
          if(_retries<=2){setTimeout(_tryUnlock,800);return;}
          _mysteryUnlocking=false;
          alert('Save failed. Please try again later.');
          return;
        }
        _mysteryUnlocking=false;
        _mysteryUnlockCooldown=Date.now();
        setUnlockedAbydos(unlocked);
        window._enigmaPointsCache=pd.points;
        var pickedName=pick,pickedImg='',pickedSchool='';
        for(var i=0;i<CHARS.length;i++){if(CHARS[i].id===pick){pickedName=CHARS[i].name;pickedImg=CHARS[i].img;pickedSchool=CHARS[i].school||'';break;}}
        if(typeof showUnlockPopup==='function') showUnlockPopup(pickedName,pickedImg,pickedSchool);
        else alert('[Mystery Release] '+pickedName+' release!');
        if(typeof renderQuestUI==='function') renderQuestUI();
        // Only call renderAll when game is in progress (prevent error on title/quest screen)
        if(typeof G!=='undefined'&&G&&G.players&&G.phase==='recruit'&&typeof renderAll==='function') renderAll();
      });
    });
  }
  _tryUnlock();
}

// Dev use: Eligma +10P (reflected on server)
function devAddEnigma() {
  if(!window._babgLogin||!window._babgLogin.name){alert('login required');return;}
  fetchRecords(function(err,data,sha){
    if(err||!data)return;
    var pd=data.players[window._babgLogin.name];
    if(!pd)return;
    pd.points=(pd.points||0)+10;
    saveRecords(data,sha,function(){
      window._enigmaPointsCache=pd.points;
      if(typeof renderQuestUI==='function') renderQuestUI();
      if(typeof renderAll==='function') renderAll();
    });
  });
}

function takeFromPool(charId) { if(SANDBOX)return true; if(G.pool[charId]>0){G.pool[charId]--;return true;} return false; }
function returnToPool(charId,count) {
  if(!count)count=1;
  var max=0;
  for(var i=0;i<CHARS.length;i++){if(CHARS[i].id===charId){max=POOL_COPIES[CHARS[i].tier];if(CHARS[i].school==='GSC')max=Math.round(max*0.7);break;}}
  G.pool[charId]=Math.min((G.pool[charId]||0)+count,max);
}

// ========== GAME STATE ==========
var G = {};
var swapFirst = -1;

function newGame() {
  deleteSave(); // Remove save data on new game
  resetQuestTracker();
  // 이games game 's 오버레이 정리 (Discover/battle 팝업 잔존 prevent)
  var _bo=document.getElementById('battle-overlay');if(_bo){_bo.classList.remove('active');_bo.style.zIndex='';}
  var _bia=document.getElementById('battle-intro-area');if(_bia)_bia.innerHTML='';
  var _ba=document.getElementById('battle-arena');if(_ba)_ba.style.display='';
  var _bl=document.getElementById('battle-log');if(_bl)_bl.style.display='';
  var players=[];
  var aiCount=SANDBOX?5:7;
  var aiNames=['Mika','Saori','Wakamo','Kokona','Mine','Hiyori','Kotama'];
  var startStone=SANDBOX?20:3;
  var playerName=window._babgLogin?window._babgLogin.name:'Sensei';
  players.push({id:0,name:playerName,hp:START_HP,tier:1,stone:startStone,board:[],bench:null,frozen:false,dead:false,isPlayer:true,upgradeCost:SANDBOX?0:UPGRADE_COSTS[1],turnStone:startStone});
  var aiStone=SANDBOX?20:3;var aiUpCost=SANDBOX?0:UPGRADE_COSTS[1];
  for(var i=0;i<aiCount;i++){
    var pType=i<4?AI_PERSONALITY_KEYS[i]:AI_PERSONALITY_KEYS[Math.floor(Math.random()*4)];
    players.push({id:i+1,name:aiNames[i%aiNames.length],hp:START_HP,tier:1,stone:aiStone,board:[],frozen:false,dead:false,isPlayer:false,upgradeCost:aiUpCost,turnStone:aiStone,purchasedSchools:{},totalDamageTaken:0,personality:AI_PERSONALITIES[pType],personalityType:pType});
  }
  G={players:players,turn:1,phase:'recruit',shop:[],aliveCount:SANDBOX?6:8,placement:0,frozen:false,bonusStone:0,shopBuff:0,pendingSpell:null,pool:initPool(),rioSchool:null,freeRerolls:0,
    purchasedSchools:{},totalDamageTaken:0,arisuDeathCount:0,arisuPurchased:false,millenniumTokenSummons:0,hiddenCardsOwned:{},hiddenCardsEverOwned:{},permanentAbilityBan:false,shopExclusions:[],keiseisenCounters:{},hovercraftCounter:0,soldHkyk:{},
    nonomiStoneSinceJoined:0,_shirokoTerrorAbsorbed:[],_shirokoKillsThisBattle:0,_ayaneDeathsThisBattle:0};
  rollShop();
  aiTurns();
  renderAll();
  // Background self-battle sim (20 games) — non-blocking UI
  if(!SANDBOX) setTimeout(function(){ runSimBatch(20); }, 500);
}

// skin(golden) keyword 변환: 각 character skin effect (원본 ability은 maintain됨)
function applySkinKwTransform(tmpl, unit){
  if(tmpl.id==='shimiko'){if(unit.kw.indexOf('cleave')===-1)unit.kw.push('cleave');if(unit.kw.indexOf('shield')===-1)unit.kw.push('shield');}
  // Chinatsu Hot Spring: Reborn add
  if(tmpl.id==='chinatsu'){if(unit.kw.indexOf('reborn')===-1)unit.kw.push('reborn');}
  // Arisu Maid: Pierce→Cleave (변경)
  if(tmpl.id==='arisu'){var pi=unit.kw.indexOf('pierce');if(pi!==-1)unit.kw.splice(pi,1);if(unit.kw.indexOf('cleave')===-1)unit.kw.push('cleave');}
  // Hina타 Swimsuit: Windfury add
  if(tmpl.id==='hinata'){if(unit.kw.indexOf('windfury')===-1)unit.kw.push('windfury');}
  // Hina Dress: Cleave maintain + Shield+Windfury add
  if(tmpl.id==='hina'){if(unit.kw.indexOf('shield')===-1)unit.kw.push('shield');if(unit.kw.indexOf('windfury')===-1)unit.kw.push('windfury');}
  // Mashiro Swimsuit: Pierce add
  if(tmpl.id==='mashiro'){if(unit.kw.indexOf('pierce')===-1)unit.kw.push('pierce');}
  // Chiaki Swimsuit: Windfury add
  if(tmpl.id==='chiaki'){if(unit.kw.indexOf('windfury')===-1)unit.kw.push('windfury');}
  // Kazusa Band: Reborn add
  if(tmpl.id==='kazusa'){if(unit.kw.indexOf('reborn')===-1)unit.kw.push('reborn');}
  // Karin Bunny Girl: Windfury add
  if(tmpl.id==='karin'){if(unit.kw.indexOf('windfury')===-1)unit.kw.push('windfury');}
  // Kikyou Swimsuit: Shield add
  if(tmpl.id==='kikyou'){if(unit.kw.indexOf('shield')===-1)unit.kw.push('shield');}
  // Renge Swimsuit: Reborn add
  if(tmpl.id==='renge'){if(unit.kw.indexOf('reborn')===-1)unit.kw.push('reborn');}
  // Yukari Swimsuit: Shield add
  if(tmpl.id==='yukari'){if(unit.kw.indexOf('shield')===-1)unit.kw.push('shield');}
  // Nagusa Swimsuit: Reborn add
  if(tmpl.id==='nagusa'){if(unit.kw.indexOf('reborn')===-1)unit.kw.push('reborn');}
  // Reijo Casual: Pierce add
  if(tmpl.id==='reijo'){if(unit.kw.indexOf('pierce')===-1)unit.kw.push('pierce');}
  // Ichika Swimsuit: Reborn add
  if(tmpl.id==='ichika'){if(unit.kw.indexOf('reborn')===-1)unit.kw.push('reborn');}
}

function makeMinion(template, skinUnit) {
  var unit={
    id: template.id+'_'+Math.random().toString(36).substr(2,5),
    baseId: template.id,
    name: skinUnit ? template.skin : template.name,
    school: template.school,
    tier: template.tier,
    atk: skinUnit ? template.atk*2+1 : template.atk,
    hp: skinUnit ? template.hp*2+1 : template.hp,
    maxHp: skinUnit ? template.hp*2+1 : template.hp,
    kw: (template.kw||[]).slice(),
    isSkin: skinUnit||false,
    img: skinUnit ? template.imgGold : template.img,
    copies: skinUnit?3:1,
    _buffLog: []
  };
  if(skinUnit) applySkinKwTransform(template, unit);
  return unit;
}

// ========== HIDDEN CONDITION CHECK ==========
function checkHiddenConditionsFor(p) {
  var eligible=[];
  var pSchools=p.isPlayer?G.purchasedSchools:(p.purchasedSchools||{});
  var pDmg=p.isPlayer?G.totalDamageTaken:(p.totalDamageTaken||0);
  function boardHas(id){for(var i=0;i<p.board.length;i++)if(p.board[i].baseId===id)return true;return false;}
  function boardHasGolden(id){for(var i=0;i<p.board.length;i++)if(p.board[i].baseId===id&&p.board[i].isSkin)return true;return false;}
  function onlySchool(school){var keys=Object.keys(pSchools);return keys.length===1&&keys[0]===school;}
  function boardOnlySchool(school){for(var i=0;i<p.board.length;i++)if(p.board[i].school!==school)return false;return p.board.length>0;}
  function notOwned(id){return !G.hiddenCardsEverOwned[id];}
  function inPool(id){return G.pool[id]>0;}

  // === board 멤버 condition (멤버 tier 자연 진입장벽 → Lv 제한 none) ===
  // Gehenna 선도부: Hina(5)+Iori(5)+Ako(4)+Chinatsu(2)
  if(notOwned('gehenna_prefect')&&inPool('gehenna_prefect')&&boardHas('hina')&&boardHas('iori')&&boardHas('ako')&&boardHas('chinatsu'))
    eligible.push('gehenna_prefect');
  // 만마전: Makoto(3)+Satsuki(3)+Iroha(3)+Ibuki(4)+Chiaki(2)
  if(notOwned('gehenna_pandemonium')&&inPool('gehenna_pandemonium')&&boardHas('makoto')&&boardHas('satsuki')&&boardHas('iroha')&&boardHas('ibuki')&&boardHas('chiaki'))
    eligible.push('gehenna_pandemonium');
  // 흥신소 68: Kayoko(1)+Mutsuki(1)+Haruka(1)+Aru(5)
  if(notOwned('gehenna_p68')&&inPool('gehenna_p68')&&boardHas('kayoko')&&boardHas('mutsuki')&&boardHas('haruka')&&boardHas('aru'))
    eligible.push('gehenna_p68');
  // Nagisa: Mari(1)+Sakurako(2)+Mine(6)
  if(notOwned('trinity_nagisa')&&inPool('trinity_nagisa')&&boardHas('mari')&&boardHas('sakurako')&&boardHas('mine'))
    eligible.push('trinity_nagisa');
  // 보충수업부: Hifumi(3)+Koharu(1)+Hanako(4)+Azusa(4)
  if(notOwned('trinity_makeup')&&inPool('trinity_makeup')&&boardHas('hifumi')&&boardHas('koharu')&&boardHas('hanako')&&boardHas('azusa'))
    eligible.push('trinity_makeup');
  // 정의실현부: Hasumi(5)+Tsurugi(3)+Mashiro(4)+Ichika(3)
  if(notOwned('trinity_justice')&&inPool('trinity_justice')&&boardHas('hasumi')&&boardHas('tsurugi')&&boardHas('mashiro')&&boardHas('ichika'))
    eligible.push('trinity_justice');
  // 데스 Momoi: Momoi(1)+Midori(1)+Yuzu(3)+Arisu(4)
  if(notOwned('millennium_death_momoi')&&inPool('millennium_death_momoi')&&boardHas('momoi')&&boardHas('midori')&&boardHas('yuzu')&&boardHas('arisu'))
    eligible.push('millennium_death_momoi');
  // Millennium Seminar: Yuuka(2)+Noa(3)+Koyuki(2)+Rio(5)
  if(notOwned('millennium_seminar')&&inPool('millennium_seminar')&&boardHas('yuuka')&&boardHas('noa')&&boardHas('koyuki')&&boardHas('rio'))
    eligible.push('millennium_seminar');
  // C&C: Neru(5)+Asuna(4)+Akane(3)+Karin(4)+Toki(5)
  if(notOwned('millennium_cc')&&inPool('millennium_cc')&&boardHas('neru')&&boardHas('asuna')&&boardHas('akane')&&boardHas('karin')&&boardHas('toki'))
    eligible.push('millennium_cc');
  // Shiroko Terror: Hoshino(5)+Shiroko(5)+Nonomi+Ayane+Serika
  if(notOwned('Shiroko_Terror')&&inPool('Shiroko_Terror')&&boardHas('hoshino')&&boardHas('shiroko')&&boardHas('nonomi')&&boardHas('ayane')&&boardHas('serika'))
    eligible.push('Shiroko_Terror');
  // Kiki: Kisaki(6) + Shanhaijing 5명 이상
  if(notOwned('shanhai_kiki')&&inPool('shanhai_kiki')&&boardHas('kisaki')){
    var shCount=0;for(var _sh=0;_sh<p.board.length;_sh++){if(p.board[_sh].school==='Shanhaijing')shCount++;}
    if(shCount>=5) eligible.push('shanhai_kiki');
  }
  // Kei(USB): Millennium 온리 + Lv.6 + Arisu board + 왕녀를 산 enemy none (분기 배타)
  if(notOwned('Kei_usb')&&inPool('Kei_usb')&&!G.hiddenCardsEverOwned['millennium_nameless']&&onlySchool('Millennium')&&p.tier>=6&&boardHas('arisu'))
    eligible.push('Kei_usb');
  // === 특수 condition (Lv.6 maintain — board condition이 없거나 약한 경우) ===
  // 열차포: Gehenna 온리 purchase
  if(notOwned('gehenna_traingun')&&inPool('gehenna_traingun')&&onlySchool('Gehenna')&&p.tier>=6)
    eligible.push('gehenna_traingun');
  // Mika: Trinity 온리 purchase
  if(notOwned('trinity_mika')&&inPool('trinity_mika')&&onlySchool('Trinity')&&p.tier>=6)
    eligible.push('trinity_mika');
  // Seia: damage0 + Trinity 온리 board
  if(notOwned('trinity_seia')&&inPool('trinity_seia')&&pDmg===0&&p.tier>=6&&boardOnlySchool('Trinity'))
    eligible.push('trinity_seia');
  // 최강일각라이온: Hyakkiyako 온리 board
  if(notOwned('hkyk_saikyo')&&inPool('hkyk_saikyo')&&boardOnlySchool('Hyakkiyako')&&p.tier>=6)
    eligible.push('hkyk_saikyo');
  // 왕녀: Millennium 온리 purchase + Lv.6 + Arisu를 산 enemy none
  // 왕녀: Millennium 온리 + Lv.6 + Arisu 미purchase + Kei를 산 enemy none (분기 배타)
  if(notOwned('millennium_nameless')&&inPool('millennium_nameless')&&!G.hiddenCardsEverOwned['Kei_usb']&&!G.hiddenCardsEverOwned['Arisu_Kei']&&onlySchool('Millennium')&&p.tier>=6&&!G.arisuPurchased)
    eligible.push('millennium_nameless');
  // Malkuth: Millennium token summon 10회+
  if(notOwned('millennium_malkuth')&&inPool('millennium_malkuth')&&p.tier>=6&&G.millenniumTokenSummons>=10)
    eligible.push('millennium_malkuth');
  // === 누enemy condition (Lv 무관) ===
  // Kuzunoha: Hyakkiyako 13명 all members purchase/Discover record
  if(notOwned('hkyk_kuzunoha')&&inPool('hkyk_kuzunoha')){
    var allHkykBought=true;
    for(var _hi=0;_hi<HKYK_ALL_IDS.length;_hi++){if(!G.soldHkyk[HKYK_ALL_IDS[_hi]]){allHkykBought=false;break;}}
    if(allHkykBought) eligible.push('hkyk_kuzunoha');
  }

  return eligible;
}

// 백화요란 Succession: hidden 액션card
var HKYK_SHOWDOWN_SPELL = {
  id:'hkyk_showdown',name:'Hyakkayouran Succession',cost:3,tier:7,desc:'Grant Yukari/Renge/Kikyou/Nagusa\n+10/+10, Shield, Windfury, Reborn, Venomous',target:'auto',once:true,
  effect:function(G2){
    var p=G2.players[0];
    var targets=['yukari','renge','kikyou','nagusa'];
    for(var i=0;i<p.board.length;i++){
      if(targets.indexOf(p.board[i].baseId)!==-1){
        p.board[i].atk+=10;p.board[i].hp+=10;p.board[i].maxHp=(p.board[i].maxHp||p.board[i].hp)+10;
        addKw(p.board[i],'shield');addKw(p.board[i],'windfury');addKw(p.board[i],'reborn');addKw(p.board[i],'poison');
        p.board[i]._keiseisenBuffed=true;
      }
    }
    G2.hiddenCardsEverOwned['hkyk_showdown']=true;
    // 하얀 이펙트 + 소리
    try{var snd=new Audio('../audio/keiseisen.mp3');snd.volume=0.7;snd.play();
      var fadeStart=Math.max(0,4);setTimeout(function(){var fi=setInterval(function(){snd.volume=Math.max(0,snd.volume-0.07);if(snd.volume<=0){clearInterval(fi);snd.pause();}},50);},fadeStart*1000);
    }catch(e){}
    var fl=document.createElement('div');fl.style.cssText='position:fixed;inset:0;background:rgba(255,248,220,0.85);pointer-events:none;z-index:9999;opacity:0;transition:opacity 0.5s ease-in;';
    document.body.appendChild(fl);
    requestAnimationFrame(function(){fl.style.opacity='1';});
    setTimeout(function(){fl.style.transition='opacity 2s ease-out';fl.style.opacity='0';setTimeout(function(){if(fl.parentNode)fl.remove();},2000);},1500);
    return true;
  }
};

function checkShowdownCondition(){
  if(G.hiddenCardsEverOwned['hkyk_showdown']) return false;
  var p=G.players[0];
  var targets=['yukari','renge','kikyou','nagusa'];
  if(!G.keiseisenCounters) return false;
  for(var t=0;t<targets.length;t++){
    // 해당 student이 board에 있고, 해당 baseId 's Succession counter 10 이상
    var onBoard=false;
    for(var i=0;i<p.board.length;i++){if(p.board[i].baseId===targets[t]){onBoard=true;break;}}
    if(!onBoard) return false;
    if((G.keiseisenCounters[targets[t]]||0)<7) return false;
  }
  return true;
}

function checkHiddenConditions() { return checkHiddenConditionsFor(G.players[0]); }

function injectHiddenToShop() {
  var eligible=checkHiddenConditions();
  // player tier 기반 7-star chance 테이블 (조합형 7-star용)
  var _pTier=(G.players[0]&&G.players[0].tier)||1;
  var _tierRates={1:0, 2:0, 3:0.10, 4:0.15, 5:0.30, 6:0.60};
  var _baseRate=_tierRates[_pTier]||0;
  // 단일 school exclusive/세레모니형 7-star: 6T 제한 자체 난이도라 고정 chance maintain
  var _singleSchoolRates={
    hkyk_saikyo:0.60,
    gehenna_traingun:0.60,
    trinity_mika:0.60,
    trinity_seia:0.60,
    Kei_usb:0.60,
    millennium_nameless:0.60,
    millennium_malkuth:0.60,
    hkyk_kuzunoha:0.60
  };
  for(var h=0;h<eligible.length;h++){
    var hid=eligible[h];
    var rate=(_singleSchoolRates[hid]!==undefined)?_singleSchoolRates[hid]:_baseRate;
    if(Math.random()<rate){
      var htmpl=findHiddenChar(hid);
      if(htmpl&&G.pool[htmpl.id]>0){
        var unit=makeHiddenMinion(htmpl);
        G.shop.push(unit);
      }
    }
  }
  // 백화요란 Succession 액션card
  if(checkShowdownCondition()&&Math.random()<0.30){
    G.shop.push({isSpell:true,isHidden:true,spell:HKYK_SHOWDOWN_SPELL,name:HKYK_SHOWDOWN_SPELL.name,cost:HKYK_SHOWDOWN_SPELL.cost,desc:HKYK_SHOWDOWN_SPELL.desc,tier:7,target:'auto'});
  }
}

function makeHiddenMinion(template) {
  return {
    id: template.id+'_'+Math.random().toString(36).substr(2,5),
    baseId: template.id,
    name: template.name,
    school: template.school,
    tier: template.tier,
    atk: template.atk,
    hp: template.hp,
    maxHp: template.hp,
    kw: (template.kw||[]).slice(),
    isSkin: false,
    img: template.img,
    copies: 1,
    isHidden: true,
    _buffLog: []
  };
}

// ========== SHOP ==========
function getAvailableChars(tier) {
  var unlockedAbydos = getUnlockedAbydos();
  var pool=[];
  for(var i=0;i<CHARS.length;i++){
    if(CHARS[i].tier<=tier){
      if(G.shopExclusions&&G.shopExclusions.indexOf(CHARS[i].id)!==-1) continue;
      if(CHARS[i].locked && unlockedAbydos.indexOf(CHARS[i].id)===-1) continue;
      pool.push(CHARS[i]);
    }
  }
  return pool;
}

function rollShop(force) {
  if(G.frozen && !force){
    // 얼린 상점: 빈 칸(null)만 새 card로 채움
    var p=G.players[0];
    var pool=getAvailableChars(p.tier);
    var filled=false;
    for(var i=0;i<G.shop.length;i++){
      if(G.shop[i]===null){
        var available=pool.filter(function(c){return G.pool[c.id]>0;});
        if(available.length===0)continue;
        var totalWeight=0;
        for(var j=0;j<available.length;j++)totalWeight+=G.pool[available[j].id];
        var roll=Math.random()*totalWeight;
        var cumul=0;var picked=available[0];
        for(var j=0;j<available.length;j++){cumul+=G.pool[available[j].id];if(roll<cumul){picked=available[j];break;}}
        takeFromPool(picked.id);
        var newUnit=makeMinion(picked,false);
        if(G.shopBuff>0){newUnit.atk+=G.shopBuff;newUnit.hp+=G.shopBuff;}
        G.shop[i]=newUnit;
        filled=true;
      }
    }
    G.frozen=false;
    return;
  }
  if(G.shop){for(var i=0;i<G.shop.length;i++){if(G.shop[i]&&!G.shop[i].isSpell)returnToPool(G.shop[i].baseId);}}
  var p=G.players[0];
  var pool=getAvailableChars(p.tier);
  var size=SHOP_SIZE[p.tier];
  var shop=[];
  for(var i=0;i<size;i++){
    var available=pool.filter(function(c){return G.pool[c.id]>0;});
    if(available.length===0)break;
    var totalWeight=0;
    for(var j=0;j<available.length;j++)totalWeight+=G.pool[available[j].id];
    var roll=Math.random()*totalWeight;
    var cumul=0;var picked=available[0];
    for(var j=0;j<available.length;j++){cumul+=G.pool[available[j].id];if(roll<cumul){picked=available[j];break;}}
    takeFromPool(picked.id);
    shop.push(makeMinion(picked,false));
  }
  applyShopBuff(shop);
  G.shop=shop;
  addSpellToShop();
  injectHiddenToShop();
  G.frozen=false;
}

function isGachaBlocked(){
  var p=G.players[0];
  if(p.board.length<MAX_BOARD)return false;
  // 풀board: 상점에 triple 가능한 unit이 있는지 확인
  for(var i=0;i<G.shop.length;i++){
    if(!G.shop[i]||G.shop[i].isSpell)continue;
    var count=0;
    for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===G.shop[i].baseId&&!p.board[j].isSkin)count++;}
    if(p.bench&&p.bench.baseId===G.shop[i].baseId&&!p.bench.isSkin)count++;
    if(count>=2)return false;
  }
  return true;
}
function buySpell(idx) {
  var p=G.players[0];
  var item=G.shop[idx];
  if(!item||!item.isSpell)return;
  if(p.stone<item.cost)return;
  var spell=item.spell;
  if(spell.id==='gacha'&&isGachaBlocked())return;
  // Discover series auto 주문: board 풀이면 차단
  var DISCOVER_SPELLS={arona_cheat:1,on_duty:1};
  if(DISCOVER_SPELLS[spell.id]&&p.board.length>=MAX_BOARD)return;
  if(spell.target==='select_ally'){
    if(p.board.length===0)return;
    if(spell.id==='mirror'&&p.board.length>=MAX_BOARD){
      var canTriple=false;var bCounts={};for(var _mi=0;_mi<p.board.length;_mi++){var _bid=p.board[_mi].baseId;if(!p.board[_mi].isSkin){bCounts[_bid]=(bCounts[_bid]||0)+1;if(bCounts[_bid]>=2)canTriple=true;}}
      if(!canTriple)return;}
    p.stone-=item.cost;trackNonomiStone(item.cost);G.shop[idx]=null;
    if(spell.once){if(!G.usedOnceSpells)G.usedOnceSpells={};G.usedOnceSpells[spell.id]=true;}
    G.pendingSpell=spell;renderAll();return;
  }
  if(spell.target==='select_school'){p.stone-=item.cost;trackNonomiStone(item.cost);G.shop[idx]=null;G.pendingSpell=spell;showSchoolSelect();return;}
  p.stone-=item.cost;trackNonomiStone(item.cost);G.shop[idx]=null;
  if(spell.once){if(!G.usedOnceSpells)G.usedOnceSpells={};G.usedOnceSpells[spell.id]=true;}
  var result=spell.effect(G);
  if(result===false){p.stone+=item.cost;if(spell.once)delete G.usedOnceSpells[spell.id];}
  else if(BUFF_SPELL_IDS[spell.id]){playSfx('buff',0.3);}
  else{playSfx(spell.tier>=5?'spell_high':'spell_low',0.3);}
  renderAll();
}

function applyPendingSpell(idx) {
  if(!G.pendingSpell)return;
  var result=G.pendingSpell.effect(G,idx);
  if(result!==false){
    if(BUFF_SPELL_IDS[G.pendingSpell.id]) playSfx('buff',0.3);
    else playSfx(G.pendingSpell.tier>=5?'spell_high':'spell_low',0.3);
  }
  G.pendingSpell=null;
  renderAll();
}

function showSchoolSelect() {
  var overlay=document.getElementById('battle-overlay');
  var schools=['Gehenna','Millennium','Trinity','Hyakkiyako','Abydos','Shanhaijing','GSC'];
  var html='<div class="battle-intro"><h3 style="margin-bottom:16px">Select a school</h3>';
  for(var i=0;i<schools.length;i++) html+='<button class="btn btn-blue school-pick" data-school="'+schools[i]+'" style="margin:4px 8px;padding:10px 24px;font-size:16px">'+schools[i]+'</button>';
  html+='</div>';
  document.getElementById('battle-intro-area').innerHTML=html;
  document.getElementById('battle-arena').style.display='none';
  document.getElementById('battle-log').style.display='none';
  document.getElementById('battle-result-box').style.display='none';
  document.getElementById('btn-continue').style.display='none';
  document.getElementById('btn-skip').style.display='none';
  overlay.classList.add('active');
  document.getElementById('battle-intro-area').addEventListener('click',function handler(e){
    var btn=e.target.closest('.school-pick');if(!btn)return;
    var school=btn.getAttribute('data-school');
    overlay.classList.remove('active');
    document.getElementById('battle-intro-area').innerHTML='';
    document.getElementById('battle-intro-area').removeEventListener('click',handler);
    if(G.pendingSpell){G.pendingSpell.effect(G,school);G.pendingSpell=null;}
    renderAll();
  });
}

function buyHiddenCard(idx) {
  var p=G.players[0];
  if(p.stone<3)return;
  var m=G.shop[idx];
  if(!m||!m.isHidden)return;
  var bid=m.baseId;
  // board 풀 check
  if(p.board.length>=MAX_BOARD){
    // absorb형은 board card를 remove하므로 OK
    var absorb=['gehenna_prefect','gehenna_pandemonium','millennium_death_momoi','gehenna_p68','millennium_seminar','millennium_cc','trinity_makeup','trinity_justice','hkyk_kuzunoha','Shiroko_Terror','shanhai_kiki','Kei_usb'];
    if(absorb.indexOf(bid)===-1) return;
  }
  p.stone-=3;
  trackNonomiStone(3);
  G.shop[idx]=null;
  takeFromPool(bid);
  G.hiddenCardsOwned[bid]=true;
  G.hiddenCardsEverOwned[bid]=true;
  if(m.school) G.purchasedSchools[m.school]=true;
  // 7-star recruit 이력 record (계정별)
  recordRecruitTier7(bid);
  // quest 트래킹: 7-star card 완성
  if(window._questTracker) window._questTracker.hiddenCompleted = true;

  // absorb형: 지정 unit remove + stats 합산
  if(bid==='gehenna_prefect'){
    var absorb=['hina','iori','ako','chinatsu'];
    var bonusAtk=0,bonusHp=0;
    var newBoard=[];
    for(var i=0;i<p.board.length;i++){
      if(absorb.indexOf(p.board[i].baseId)!==-1){
        bonusAtk+=p.board[i].atk;bonusHp+=p.board[i].hp;
        returnToPool(p.board[i].baseId,p.board[i].isSkin?3:1);
      } else { newBoard.push(p.board[i]); }
    }
    p.board=newBoard;
    m.atk+=bonusAtk;m.hp+=bonusHp;m.maxHp=m.hp;
  }
  else if(bid==='gehenna_pandemonium'){
    var absorb=['makoto','satsuki','iroha','ibuki','chiaki'];
    var bonusAtk=0,bonusHp=0;
    var newBoard=[];
    for(var i=0;i<p.board.length;i++){
      if(absorb.indexOf(p.board[i].baseId)!==-1){
        bonusAtk+=p.board[i].atk;bonusHp+=p.board[i].hp;
        returnToPool(p.board[i].baseId,p.board[i].isSkin?3:1);
      } else { newBoard.push(p.board[i]); }
    }
    p.board=newBoard;
    m.atk+=bonusAtk;m.hp+=bonusHp;m.maxHp=m.hp;
  }
  else if(bid==='millennium_death_momoi'){
    // 모든 Momoi remove
    var bonusAtk=0,bonusHp=0;
    var newBoard=[];
    for(var i=0;i<p.board.length;i++){
      if(p.board[i].baseId==='momoi'){
        bonusAtk+=p.board[i].atk;bonusHp+=p.board[i].hp;
        returnToPool(p.board[i].baseId,p.board[i].isSkin?3:1);
      } else { newBoard.push(p.board[i]); }
    }
    p.board=newBoard;
    m.atk+=bonusAtk;m.hp+=bonusHp;m.maxHp=m.hp;
    // 상점 제외
    if(G.shopExclusions.indexOf('momoi')===-1) G.shopExclusions.push('momoi');
  }
  else if(bid==='gehenna_p68'){
    var absorb=['kayoko','mutsuki','haruka','aru'];
    var bonusAtk=0,bonusHp=0;var newBoard=[];
    var p68Absorbed=[];
    for(var i=0;i<p.board.length;i++){
      if(absorb.indexOf(p.board[i].baseId)!==-1){
        bonusAtk+=p.board[i].atk;bonusHp+=p.board[i].hp;
        // Deathrattle용 스냅샷 save (absorb 시점 상태)
        p68Absorbed.push({id:p.board[i].id,baseId:p.board[i].baseId,name:p.board[i].name,school:p.board[i].school,tier:p.board[i].tier,atk:p.board[i].atk,hp:p.board[i].hp,maxHp:p.board[i].hp,kw:(p.board[i].kw||[]).slice(),img:p.board[i].img,isSkin:p.board[i].isSkin||false});
        returnToPool(p.board[i].baseId,p.board[i].isSkin?3:1);
      }else{newBoard.push(p.board[i]);}
    }
    p.board=newBoard;m.atk+=bonusAtk;m.hp+=bonusHp;m.maxHp=m.hp;
    m._p68Absorbed=p68Absorbed;
    G._p68Absorbed=p68Absorbed; // 전역 폴백 (Shiroko Terror와 동일 패Turn)
  }
  else if(bid==='millennium_seminar'){
    var absorb=['yuuka','noa','koyuki','rio'];
    var bonusAtk=0,bonusHp=0;var newBoard=[];
    for(var i=0;i<p.board.length;i++){
      if(absorb.indexOf(p.board[i].baseId)!==-1){bonusAtk+=p.board[i].atk;bonusHp+=p.board[i].hp;returnToPool(p.board[i].baseId,p.board[i].isSkin?3:1);}else{newBoard.push(p.board[i]);}
    }
    p.board=newBoard;m.atk+=bonusAtk;m.hp+=bonusHp;m.maxHp=m.hp;
  }
  else if(bid==='millennium_cc'){
    var absorb=['neru','asuna','akane','karin','toki'];
    var bonusAtk=0,bonusHp=0;var newBoard=[];
    for(var i=0;i<p.board.length;i++){
      if(absorb.indexOf(p.board[i].baseId)!==-1){bonusAtk+=p.board[i].atk;bonusHp+=p.board[i].hp;returnToPool(p.board[i].baseId,p.board[i].isSkin?3:1);}else{newBoard.push(p.board[i]);}
    }
    p.board=newBoard;m.atk+=bonusAtk;m.hp+=bonusHp;m.maxHp=m.hp;
  }
  else if(bid==='trinity_makeup'){
    var absorb=['hifumi','koharu','hanako','azusa'];
    var bonusAtk=0,bonusHp=0;var newBoard=[];
    for(var i=0;i<p.board.length;i++){
      if(absorb.indexOf(p.board[i].baseId)!==-1){bonusAtk+=p.board[i].atk;bonusHp+=p.board[i].hp;returnToPool(p.board[i].baseId,p.board[i].isSkin?3:1);}else{newBoard.push(p.board[i]);}
    }
    p.board=newBoard;m.atk+=bonusAtk;m.hp+=bonusHp;m.maxHp=m.hp;
  }
  else if(bid==='trinity_justice'){
    var absorb=['hasumi','tsurugi','mashiro','ichika'];
    var bonusAtk=0,bonusHp=0;var newBoard=[];
    for(var i=0;i<p.board.length;i++){
      if(absorb.indexOf(p.board[i].baseId)!==-1){bonusAtk+=p.board[i].atk;bonusHp+=p.board[i].hp;returnToPool(p.board[i].baseId,p.board[i].isSkin?3:1);}else{newBoard.push(p.board[i]);}
    }
    p.board=newBoard;m.atk+=bonusAtk;m.hp+=bonusHp;m.maxHp=m.hp;
  }

  // Kuzunoha: Schale 's 모든 student을 remove하고 등장
  else if(bid==='hkyk_kuzunoha'){
    for(var i=0;i<p.board.length;i++){returnToPool(p.board[i].baseId,p.board[i].isSkin?3:1);}
    p.board=[];
  }
  // Shiroko Terror: Abydos 5인을 absorb하며 등장
  else if(bid==='Shiroko_Terror'){
    var stAbsorbIds=['shiroko','hoshino','nonomi','ayane','serika'];
    var absorbedUnits=[];
    var newBoard=[];
    for(var i=0;i<p.board.length;i++){
      if(stAbsorbIds.indexOf(p.board[i].baseId)!==-1){
        // absorb 당시 상태 스냅샷 save (풀에는 반환하지 않음)
        absorbedUnits.push({
          id:p.board[i].id, baseId:p.board[i].baseId, name:p.board[i].name,
          school:p.board[i].school, tier:p.board[i].tier,
          atk:p.board[i].atk, hp:p.board[i].hp, maxHp:p.board[i].hp,
          kw:(p.board[i].kw||[]).slice(), img:p.board[i].img,
          isSkin:p.board[i].isSkin||false
        });
      } else { newBoard.push(p.board[i]); }
    }
    p.board=newBoard;
    // absorb한 student들 's stats을 Shiroko Terror에 합산
    var stBonusAtk=0,stBonusHp=0;
    for(var _sab=0;_sab<absorbedUnits.length;_sab++){stBonusAtk+=absorbedUnits[_sab].atk;stBonusHp+=absorbedUnits[_sab].hp;}
    m.atk+=stBonusAtk;m.hp+=stBonusHp;m.maxHp=m.hp;
    m._shirokoAbsorbed=absorbedUnits;
    G._shirokoTerrorAbsorbed=absorbedUnits;
    // Nonomi counter 초기화 (absorb됨)
    G.nonomiStoneSinceJoined=0;
  }

  // Kiki: Kisaki absorb
  else if(bid==='shanhai_kiki'){
    var newBoard=[];
    for(var i=0;i<p.board.length;i++){
      if(p.board[i].baseId==='kisaki'){
        m.atk+=p.board[i].atk;m.hp+=p.board[i].hp;m.maxHp=m.hp;
      } else { newBoard.push(p.board[i]); }
    }
    p.board=newBoard;
  }

  // Kei(USB): Arisu는 absorb하지 않음 — board에 같이 존재
  else if(bid==='Kei_usb'){
    // Arisu stats을 absorb하지 않고 그대로 add (Arisu는 board에 남음)
  }

  // 왕녀: Arisu 상점 제외
  if(bid==='millennium_nameless'){
    if(G.shopExclusions.indexOf('arisu')===-1) G.shopExclusions.push('arisu');
  }

  // 7-star 고유 연출
  if(HIDDEN_CARD_ENTRANCE[bid]){
    HIDDEN_CARD_ENTRANCE[bid](m,p,bid);
    return;
  }
  p.board.push(m);
  // BC 트리거 (만마전)
  if(BC_IDS[bid]) triggerBattlecry(m,p);
  playCardDrop(7);playRecruitVoice(bid);shakeScreen('heavy');
  renderAll();
}

// 7-star 등장 연출 helper
function _entranceCardLand(m,p){
  p.board.push(m);if(BC_IDS[m.baseId])triggerBattlecry(m,p);renderAll();
  var boardEl=document.getElementById('ui-board');var cards=boardEl?boardEl.querySelectorAll('.card'):[];var lc=cards[cards.length-1];
  if(lc){lc.style.transition='transform 0.06s ease-in-out';lc.style.transform='scale(1.15)';
    setTimeout(function(){lc.style.transform='translateX(-12px) rotate(-4deg)';
    setTimeout(function(){lc.style.transform='translateX(10px) rotate(3deg)';
    setTimeout(function(){lc.style.transform='translateX(-8px) rotate(-2.5deg)';
    setTimeout(function(){lc.style.transform='translateX(6px) rotate(2deg)';
    setTimeout(function(){lc.style.transform='translateX(-4px) rotate(-1deg)';
    setTimeout(function(){lc.style.transform='translateX(0) rotate(0) scale(1)';},60);},60);},60);},60);},60);},100);}
  playCardDrop(7);playRecruitVoice(m.baseId);
}
function _entranceBang(m,p){
  // 쿵 2번 → 쾅 착지
  // 주의: 예전에는 sfx/mika_footstep.webm을 footstep으로 썼는데,
  // 해당 파일에 Mika 보이스 섞여 있어 다른 7-star 등장 시 "Mika 보이스"가
  // 먼저 들리는 혼선이 있어 generic impact SFX로 replace.
  var step=0;
  function doStep(){
    if(step>=2){
      // 쾅 착지
      var fl=document.createElement('div');fl.style.cssText='position:fixed;inset:0;background:rgba(255,255,255,0.9);pointer-events:none;z-index:9999;transition:opacity 0.35s;';
      document.body.appendChild(fl);playSfx('attack_impact_large',0.8);shakeScreen('heavy');
      _entranceCardLand(m,p);
      setTimeout(function(){fl.style.opacity='0';setTimeout(function(){if(fl.parentNode)fl.remove();},350);},80);
      return;
    }
    playSfx('attack_impact_mid',0.5);
    shakeScreen('light');
    step++;
    setTimeout(doStep,1200);
  }
  doStep();
}
function _entranceGlow(m,p){
  var fl=document.createElement('div');fl.style.cssText='position:fixed;inset:0;background:rgba(255,248,220,0.85);pointer-events:none;z-index:9999;opacity:0;transition:opacity 1.2s ease-in;';
  document.body.appendChild(fl);
  requestAnimationFrame(function(){fl.style.opacity='1';});
  // card를 바로 add하고 렌더 (먹통 prevent)
  p.board.push(m);if(BC_IDS[m.baseId])triggerBattlecry(m,p);
  playRecruitVoice(m.baseId);
  renderAll();
  // card를 하얗게 → 점점 원래 색 restore
  var boardEl=document.getElementById('ui-board');var cards=boardEl?boardEl.querySelectorAll('.card'):[];
  var lastCard=cards[cards.length-1];
  if(lastCard){
    lastCard.style.filter='brightness(3) saturate(0)';
    lastCard.style.transition='filter 3s ease-out 1.5s';
    requestAnimationFrame(function(){requestAnimationFrame(function(){lastCard.style.filter='brightness(1) saturate(1)';});});
  }
  // 화면: 1.5초 maintain 후 2.5초간 restore
  setTimeout(function(){
    fl.style.transition='opacity 2.5s ease-out';fl.style.opacity='0';
    setTimeout(function(){if(fl.parentNode)fl.remove();},2500);
  },1500);
}
function _entranceDark(m,p){
  var fl=document.createElement('div');fl.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,1);pointer-events:none;z-index:9999;opacity:0;transition:opacity 0.3s;';
  document.body.appendChild(fl);
  requestAnimationFrame(function(){fl.style.opacity='1';});
  // card를 바로 add하고 렌더 (먹통 prevent)
  p.board.push(m);if(BC_IDS[m.baseId])triggerBattlecry(m,p);
  playRecruitVoice(m.baseId);
  renderAll();
  // card를 검정으로 → 점점 밝아짐
  var boardEl=document.getElementById('ui-board');var cards=boardEl?boardEl.querySelectorAll('.card'):[];
  var lastCard=cards[cards.length-1];
  if(lastCard){
    lastCard.style.filter='brightness(0)';
    lastCard.style.transition='filter 3.5s ease-out 1s';
    requestAnimationFrame(function(){requestAnimationFrame(function(){lastCard.style.filter='brightness(1)';});});
  }
  // 화면: 1초 maintain 후 3.5초간 밝아짐
  setTimeout(function(){
    fl.style.transition='opacity 3.5s ease-out';fl.style.opacity='0';
    setTimeout(function(){if(fl.parentNode)fl.remove();},3500);
  },1000);
}

// 7-star 고유 등장 연출
var HIDDEN_CARD_ENTRANCE = {
  Shiroko_Terror: function(m,p){_entranceDark(m,p);},
  // === 쾅! 등장 ===
  gehenna_prefect: function(m,p){_entranceBang(m,p);},
  gehenna_pandemonium: function(m,p){_entranceBang(m,p);},
  millennium_death_momoi: function(m,p){_entranceBang(m,p);},
  hkyk_saikyo: function(m,p){_entranceBang(m,p);},
  trinity_justice: function(m,p){_entranceBang(m,p);},
  millennium_cc: function(m,p){_entranceBang(m,p);},
  // === 금빛 밝아짐 (5초) ===
  trinity_seia: function(m,p){_entranceGlow(m,p);},
  trinity_nagisa: function(m,p){_entranceGlow(m,p);},
  hkyk_kuzunoha: function(m,p){_entranceGlow(m,p);},
  trinity_makeup: function(m,p){_entranceGlow(m,p);},
  // === 암전→서서히 밝아짐 ===
  millennium_nameless: function(m,p){_entranceDark(m,p);},
  millennium_malkuth: function(m,p){_entranceDark(m,p);},
  gehenna_traingun: function(m,p){_entranceDark(m,p);},
  gehenna_p68: function(m,p){_entranceDark(m,p);},
  millennium_seminar: function(m,p){_entranceDark(m,p);},

  // === Shanhaijing ===
  shanhai_kiki: function(m,p){_entranceGlow(m,p);},
  Kei_usb: function(m,p){
    // 일반 1~2성 summon처럼 조용하게
    p.board.push(m);playCardDrop(1);renderAll();
  },

  trinity_mika: function(m,p){
    var footSfx=new Audio('../sfx/mika_footstep.webm');
    footSfx.volume=0.5;
    var step=0;
    function doStep(){
      if(step>=3){
        // 착지!
        p.board.push(m);
        if(BC_IDS[m.baseId]) triggerBattlecry(m,p);
        var landing=new Audio('../sfx/mika_landing.webm');
        landing.volume=0.7;landing.play().catch(function(){});
        playSfx('attack_impact_large',0.5);
        shakeScreen('heavy');
        // 하늘에서 떨어지는 card 이펙트
        renderAll();
        var boardEl=document.getElementById('ui-board');
        var cards=boardEl.querySelectorAll('.card');
        var lastCard=cards[cards.length-1];
        if(lastCard){
          lastCard.style.transition='transform 0.06s ease-in-out';
          lastCard.style.transform='scale(1.15)';
          setTimeout(function(){
            lastCard.style.transform='translateX(-12px) rotate(-4deg)';
            setTimeout(function(){lastCard.style.transform='translateX(10px) rotate(3deg)';
            setTimeout(function(){lastCard.style.transform='translateX(-8px) rotate(-2.5deg)';
            setTimeout(function(){lastCard.style.transform='translateX(6px) rotate(2deg)';
            setTimeout(function(){lastCard.style.transform='translateX(-4px) rotate(-1deg)';
            setTimeout(function(){lastCard.style.transform='translateX(0) rotate(0) scale(1)';},60);},60);},60);},60);},60);
          },100);
        }
        return;
      }
      // 발소리 쿵
      footSfx.currentTime=0;footSfx.play().catch(function(){});
      shakeScreen('light');
      step++;
      setTimeout(doStep,1500);
    }
    doStep();
  }
};

function buyMinion(idx, insertIdx) {
  var p=G.players[0];
  if(p.stone<3)return;
  if(!G.shop[idx])return;
  var m=G.shop[idx];
  var count=0;
  for(var i=0;i<p.board.length;i++){if(p.board[i].baseId===m.baseId&&!p.board[i].isSkin)count++;}
  if(p.bench&&p.bench.baseId===m.baseId&&!p.bench.isSkin)count++;
  var willTriple=count>=2;
  if(p.board.length>=MAX_BOARD&&!willTriple)return;
  p.stone-=3;
  trackNonomiStone(3);
  G.shop[idx]=null;
  if(m.school) G.purchasedSchools[m.school]=true;
  // Arisu purchase record (Princess unlock condition: no enemy must have bought Arisu)
  if(m.baseId==='arisu') G.arisuPurchased=true;
  // Hyakkiyako purchase record (Kuzunoha unlock condition)
  if(HKYK_ALL_IDS.indexOf(m.baseId)!==-1) G.soldHkyk[m.baseId]=true;
  // quest tracking: recruit
  if(m.school && window._questTracker && window._questTracker.recruits[m.school] !== undefined) {
    window._questTracker.recruits[m.school]++;
  }
  var addedUnit;
  if(willTriple){
    playSfx('triple');
    // quest tracking: skin upgrade
    if(window._questTracker) window._questTracker.skins++;
    var tmpl=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id===m.baseId)tmpl=CHARS[j];
    var mergedKw=[],bonusAtk=0,bonusHp=0;
    var sources=[];for(var i=0;i<p.board.length;i++)if(p.board[i].baseId===m.baseId&&!p.board[i].isSkin)sources.push(p.board[i]);
    if(p.bench&&p.bench.baseId===m.baseId&&!p.bench.isSkin)sources.push(p.bench);
    sources.push(m);
    for(var i=0;i<sources.length;i++){
      var u=sources[i];
      for(var k=0;k<(u.kw||[]).length;k++)if(mergedKw.indexOf(u.kw[k])===-1)mergedKw.push(u.kw[k]);
      bonusAtk+=u.atk-tmpl.atk;bonusHp+=u.hp-tmpl.hp;
    }
    // remove merge sources from bench
    if(p.bench&&p.bench.baseId===m.baseId&&!p.bench.isSkin)p.bench=null;
    var newBoard=[];var removed=0;
    for(var i=0;i<p.board.length;i++){if(p.board[i].baseId===m.baseId&&!p.board[i].isSkin&&removed<2){removed++;}else{newBoard.push(p.board[i]);}}
    p.board=newBoard;
    var skinUnit=makeMinion(tmpl,true);skinUnit.kw=mergedKw;skinUnit.atk+=bonusAtk;skinUnit.hp+=bonusHp;skinUnit.maxHp=skinUnit.hp;
    applySkinKwTransform(tmpl,skinUnit);
    p.board.push(skinUnit);
    addedUnit=skinUnit;
  } else {
    if(insertIdx!==undefined&&insertIdx>=0&&insertIdx<p.board.length){p.board.splice(insertIdx,0,m);}
    else{p.board.push(m);}
    addedUnit=m;
  }
  triggerBattlecry(addedUnit,p);
  // recruit sound effect
  playCardDrop(addedUnit.tier);
  playRecruitVoice(addedUnit.baseId);
  // 5~6 star recruit screen shake
  if(addedUnit.tier>=5) shakeScreen(addedUnit.tier>=6?'heavy':'light');
  if(willTriple) { showDiscover(p); } else { renderAll(); }
}

// character recruit voice
var RECRUIT_VOICES = {
  satsuki: '../sfx/satsuki_recruit.webm',
  arisu: '../sfx/arisu_recruit.webm',
  makoto: '../sfx/makoto_recruit.m4a',
  hina: '../sfx/hina_recruit.webm',
  himari: '../sfx/himari_recruit.webm',
  wakamo: '../sfx/wakamo_recruit.webm',
  sakurako: '../sfx/sakurako_recruit.webm',
  tsurugi: '../sfx/tsurugi_recruit.webm',
  nagusa: '../sfx/nagusa_recruit.webm',
  mine: '../sfx/mine_recruit.webm',
  shizuko: '../sfx/shizuko_recruit.webm',
  rio: '../sfx/rio_recruit.webm',
  neru: '../sfx/neru_recruit.webm',
  michiru: '../sfx/michiru_recruit.webm',
  utaha: '../sfx/utaha_recruit.webm',
  asuna: '../sfx/asuna_recruit.webm',
  ui: '../sfx/ui_recruit.m4a',
  lin: '../sfx/lin_recruit.webm',
  hasumi: '../sfx/hasumi_recruit.webm',
  sena: '../sfx/sena_recruit.webm',
  aru: '../sfx/aru_recruit.m4a',
  kaya: '../audio/kaya_recruit.mp3',
  izuna: '../sfx/izuna_recruit.webm',
  tsukuyo: '../sfx/tsukuyo_recruit.webm',
  hoshino: '../audio/abydos_hoshino.mp3',
  shiroko: '../audio/abydos_shiroko.mp3',
  Shiroko_Terror: '../audio/abydos_shiroko_terror.mp3',
  gehenna_prefect: '../audio/gehenna_prefect.mp3',
  gehenna_pandemonium: '../audio/gehenna_pandemonium.mp3',
  gehenna_traingun: '../audio/gehenna_traingun.mp3',
  trinity_seia: '../audio/trinity_seia.mp3',
  trinity_nagisa: '../audio/trinity_nagisa.mp3',
  trinity_makeup: '../audio/trinity_makeup.mp3',
  trinity_justice: '../audio/trinity_justice.mp3',
  millennium_nameless: '../audio/millennium_nameless.mp3',
  millennium_malkuth: '../audio/millennium_malkuth.mp3',
  millennium_death_momoi: '../audio/millennium_death_momoi.mp3',
  millennium_cc: '../audio/millennium_cc.mp3',
  millennium_seminar: '../audio/millennium_seminar.mp3',
  hkyk_saikyo: '../audio/hovercraft.mp3',
  hkyk_kuzunoha: '../audio/hkyk_kuzunoha.mp3',
  gehenna_p68: '../audio/gehenna_p68.mp3',
  kisaki: '../audio/kisaki.mp3',
  rumi: '../audio/rumi.mp3',
  shun: '../audio/shun.mp3',
  shanhai_kiki: '../audio/shanhai_kiki.mp3'
};
function playRecruitVoice(baseId){
  var src=RECRUIT_VOICES[baseId];
  if(!src)return;
  try{
    var a=new Audio(src);a.volume=0.7;a.play();
    // smooth fadeOut over 1 second
    var dur=a.duration;
    a.addEventListener('loadedmetadata',function(){
      var fadeStart=Math.max(0,a.duration-1);
      setTimeout(function(){
        var fadeInt=setInterval(function(){
          a.volume=Math.max(0,a.volume-0.07);
          if(a.volume<=0){clearInterval(fadeInt);a.pause();}
        },50);
      },fadeStart*1000);
    });
  }catch(e){}
}
function playCardDrop(tier){
  tier=tier||1;
  if(tier>=5) playSfx('drop_high',0.5);
  else if(tier>=3) playSfx('drop_mid',0.5);
  else playSfx('drop_low',0.5);
}
var _cardPickSfx=null;
function playCardPick(){
  try{if(!_cardPickSfx)_cardPickSfx=new Audio('../sfx/card_pick.mp3');_cardPickSfx.currentTime=0;_cardPickSfx.volume=0.4;_cardPickSfx.play();}catch(e){}
}
// ===== SFX System =====
var SFX_CACHE={};
function playSfx(name,vol){
  vol=vol||0.5;
  var paths={
    levelup:'../sfx/wow_levelup.ogg',
    coinflip:'../sfx/FX_MulliganCoin03_CoinFlip.ogg',
    shield_on:'../sfx/taunt_shield_up.ogg',
    shield_break:'../sfx/Shared_Armor_Destroyed_1.ogg',
    taunt_on:'../sfx/taunt_shield_up.ogg',
    reroll:'../sfx/FX_MulliganCoin09_DeckShuffle.ogg',
    sell:'../sfx/GadgetzanAuctioneer_card_spawn_coins.ogg',
    triple:'../sfx/wow_levelup.ogg',
    battle_start:'../sfx/Brawl_Start_Bell.ogg',
    victory:'../sfx/the_coin_card.ogg',
    defeat:'../sfx/defeat_thunder_rumble_loop.ogg',
    heal:'../sfx/Holy_Heal_Cast_01.ogg',
    freeze:'../sfx/FrostBoltHit1.ogg',
    unfreeze:'../sfx/FrostArmorTarget1.ogg',
    hit:'../sfx/Brawl_punch_minion_out_1.ogg',
    deathrattle:'../sfx/Warlock_DrainLife_Cast_1.ogg',
    enrage:'../sfx/enrage.ogg',
    bomb:'../sfx/Bomb_Missile_Dynamite_Sound_01.ogg',
    secret:'../sfx/FX_Secret_Trigger.ogg',
    frost:'../sfx/FrostBoltHit1.ogg',
    coin_drop:'../sfx/FX_MulliganCoin01_HeroCoinDrop.ogg',
    attack_launch:'../sfx/Charge_Summon.ogg',
    attack_impact:'../sfx/FX_Minion_AttackImpact.ogg',
    attack_impact_mid:'../sfx/FX_Minion_AttackImpactMid.ogg',
    attack_impact_large:'../sfx/FX_Minion_AttackImpactLarge.ogg',
    whoosh:'../sfx/Lightning_Targeted_Whoosh_01.ogg',
    arrow_hit:'../sfx/Arrow_Targeted_Impact_01.ogg',
    backstab:'../sfx/backstab_impact_chestdru.ogg',
    fireball_impact:'../sfx/FX_FireballEvent04_SpellImpact_01.ogg',
    selfdestruct:'../sfx/Barrel_exp_base.ogg',
    poison:'../sfx/CrazedAlchemist_Transmute_Impact_1.ogg',
    soc_trigger:'../sfx/Generic_Untargeted_Cast_01.ogg',
    token_spawn:'../sfx/Nerubian_custom_spawn.ogg',
    cleave:'../sfx/Shared_ClawSlash_Impact_2.ogg',
    pierce:'../sfx/Shared_ClawSlash_Impact_1.ogg',
    windfury_hit:'../sfx/Shared_DoubleClawSlash_Impact_1.ogg',
    airship_explode:'../sfx/Shared_Fire_Impact_Large.ogg',
    stealth_on:'../sfx/stealth_on.ogg',
    battlecry:'../sfx/Battlecry_1.ogg',
    buff:'../sfx/Spell_Swordsmith_Missile_1.ogg',
    coin_toggle:'../sfx/tutorial_mission_hero_coin_mouse_over.ogg',
    hero_explode:'../sfx/hero_portrait_explode_1.ogg',
    aoe_damage:'../sfx/Arrow_Targeted_Explode_01.ogg',
    mika_footstep:'../sfx/mika_footstep.webm',
    mika_landing:'../sfx/mika_landing.webm',
    spell_low:'../sfx/Arrow_Targeted_Explode_01.ogg',
    spell_high:'../sfx/spell_HolyLight_cast_1.ogg',
    ui_open:'../sfx/Card_Transition_In.ogg',
    ui_close:'../sfx/Card_Transition_Out.ogg',
    game_start:'../sfx/tutorial_intro_box_opens.ogg',
    roster_open:'../sfx/collection_manager_book_open.ogg',
    roster_close:'../sfx/collection_manager_book_close.ogg',
    roster_click:'../sfx/collection_manager_book_latch_jiggle.ogg',
    drop_low:'../sfx/FX_MinionSummon_Drop.ogg',
    drop_mid:'../sfx/FX_MinionSummonMedium_Drop.ogg',
    drop_high:'../sfx/FX_MinionSummonLarge_Drop.ogg'
  };
  var src=paths[name];if(!src)return;
  try{
    if(!SFX_CACHE[name])SFX_CACHE[name]=new Audio(src);
    var a=SFX_CACHE[name];a.currentTime=0;a.volume=vol;a.play();
  }catch(e){}
}

function shakeScreen(intensity){
  var el=document.querySelector('.main-content')||document.body;
  var cls=intensity==='heavy'?'shake-heavy':'shake-light';
  el.classList.remove('shake-light','shake-heavy');
  void el.offsetWidth; // reflow to reset animation
  el.classList.add(cls);
  setTimeout(function(){el.classList.remove(cls);},500);
}

// ========== DISCOVER (Discover) ==========
function getDiscoverChoices(p) {
  // tutorial: fixed selection
  if(G.isTutorial && TUT.active){
    var tutIds=['kasumi','ichika','renge'];
    var res=[];
    for(var t=0;t<tutIds.length;t++){var c=findAnyChar(tutIds[t]);if(c)res.push(c);}
    return res;
  }
  var discoverTier = Math.min(p.tier + 1, 6);
  var unlocked=getUnlockedAbydos();
  var candidates = [];
  for(var i=0;i<CHARS.length;i++){
    if(CHARS[i].locked && unlocked.indexOf(CHARS[i].id)===-1) continue;
    if(CHARS[i].tier === discoverTier && G.pool[CHARS[i].id] > 0) candidates.push(CHARS[i]);
  }
  // if pool is empty, use current tier
  if(candidates.length === 0){
    for(var i=0;i<CHARS.length;i++){
      if(CHARS[i].locked && unlocked.indexOf(CHARS[i].id)===-1) continue;
      if(CHARS[i].tier === p.tier && G.pool[CHARS[i].id] > 0) candidates.push(CHARS[i]);
    }
  }
  // shuffle then pick up to 3
  candidates.sort(function(){return Math.random()-0.5;});
  return candidates.slice(0, 3);
}

function showDiscover(p) {
  console.trace('[DEBUG] showDiscover called, p.isPlayer='+p.isPlayer+', turn='+G.turn);
  if(!p.isPlayer){aiDiscover(p);return;} // if called by AI, switch to aiDiscover
  var choices = getDiscoverChoices(p);
  if(choices.length === 0) { renderAll(); return; }

  // during tutorial, hide overlay and bring battle-overlay to top
  if(TUT.active){
    document.getElementById('tutorial-overlay').classList.remove('active');
    document.getElementById('tutorial-bubble').style.display='none';
    document.getElementById('tut-arrow').classList.remove('active');
    // also remove interact class to prevent z-index conflict
    var hi=document.querySelectorAll('.tutorial-highlight,.tutorial-interact');
    for(var h=0;h<hi.length;h++){hi[h].classList.remove('tutorial-highlight');hi[h].classList.remove('tutorial-interact');}
  }
  var overlay = document.getElementById('battle-overlay');
  if(TUT.active) overlay.style.zIndex='550';
  var html = '<div class="battle-intro"><h3 style="margin-bottom:4px;color:#ffd700">Discover!</h3>';
  html += '<p style="color:#aab;font-size:13px;margin-bottom:16px">Select 1 student from the next tier</p>';
  html += '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">';
  for(var i=0;i<choices.length;i++){
    var c = choices[i];
    var kwt = (c.kw||[]).filter(function(k){return k!=='survive'&&k!=='preemptive';}).map(function(k){return KW_LABELS[k]||k;}).join(' ');
    var aTag = '';
    if(BC_IDS[c.id]) aTag+='<span class="ability-tag bc" style="cursor:default">Battlecry</span>';
    if(DR_IDS[c.id]) aTag+='<span class="ability-tag dr" style="cursor:default">Deathrattle</span>';
    if(SOC_IDS[c.id]&&!({iori:1,hanako:1,pina:1,kasumi:1})[c.id]) aTag+='<span class="ability-tag soc" style="cursor:default">Battle Start</span>';
    if(SURV_IDS[c.id]||(c.kw&&c.kw.indexOf('survive')!==-1)) aTag+='<span class="ability-tag" style="background:rgba(16,185,129,0.2);color:#6ee7b7;cursor:default">Survive</span>';
    if(PASSIVE_IDS[c.id]) aTag+='<span class="ability-tag" style="background:rgba(168,85,247,0.2);color:#c084fc;cursor:default">Passive</span>';
    if(PRE_IDS[c.id]||(c.kw&&c.kw.indexOf('preemptive')!==-1)) aTag+='<span class="ability-tag" style="background:rgba(251,191,36,0.2);color:#fbbf24;cursor:default">Preemptive</span>';
    html += '<div class="card tier'+c.tier+' discover-pick" data-discover="'+i+'" data-base-id="'+c.id+'" style="cursor:pointer;position:relative">';
    if(c.img) html += '<div class="card-bg"><img src="../img/'+c.img+'" onerror="this.parentElement.style.display=\'none\'"></div>';
    html += '<div class="card-inner">';
    var dIcon=SCHOOL_ICONS[c.school];if(dIcon)html+='<img class="school-logo" src="'+dIcon+'">';
    html += '<div class="tier-stars">'+starStr(c.tier)+'</div>';
    html += '<div class="card-spacer"></div>';
    html += '<div class="name-banner">'+c.name+'</div>';
    html += '<div class="keywords">'+(kwt||'&nbsp;')+'</div>';
    if(aTag) html += '<div style="text-align:center;padding:2px 6px;background:rgba(0,0,0,0.4)">'+aTag+'</div>';
    else html += '<div style="padding:2px 6px;background:rgba(0,0,0,0.4)">&nbsp;</div>';
    html += '<div class="stat-row"><div class="stat-atk" style="'+statColor(c.id,false,'atk',c.atk)+'">'+c.atk+'</div><div class="stat-hp" style="'+statColor(c.id,false,'hp',c.hp)+'">'+c.hp+'</div></div>';
    html += '</div></div>';
  }
  html += '</div></div>';

  document.getElementById('battle-intro-area').innerHTML = html;
  document.getElementById('battle-arena').style.display='none';
  document.getElementById('battle-log').style.display='none';
  document.getElementById('battle-result-box').style.display='none';
  document.getElementById('btn-continue').style.display='none';
  document.getElementById('btn-skip').style.display='none';
  overlay.classList.add('active');

  // tutorial 중이면 Discover select 차단 + 아로나 설명 트리거
  if(TUT.active){
    TUT.discoverBlocked=true;
    // Discover 창이 뜬 후 잠시 뒤 tutorial 다음 스텝 진행
    setTimeout(function(){
      var s=TUTORIAL_STEPS[TUT.step];
      if(s&&s.action==='waitBoard') tutNext(); // 48→49로 진행
    },500);
  }

  function doDiscoverSelect(idx){
    var fp=document.getElementById('discover-float-popup');if(fp)fp.remove();
    overlay.classList.remove('active');
    document.getElementById('battle-intro-area').innerHTML='';
    if(window._questTracker) window._questTracker.discovers++;
    var tmpl = choices[idx];
    // Hyakkiyako Discover도 purchase record으로 인정 (Kuzunoha condition)
    if(HKYK_ALL_IDS.indexOf(tmpl.id)!==-1) G.soldHkyk[tmpl.id]=true;
    if(tmpl.id==='arisu') G.arisuPurchased=true;
    if(takeFromPool(tmpl.id)){
      var added = addToBoard(p, makeMinion(tmpl, false));
      if(!added){
        var newUnit = makeMinion(tmpl, false);
        if(!p.bench){p.bench=newUnit;}
        else{p.board.push(newUnit);triggerBattlecry(newUnit,p);}
      }
    }
    overlay.style.zIndex='';
    renderAll();
    if(TUT.active){
      var ts=TUTORIAL_STEPS[TUT.step];
      if(ts&&ts.action==='waitDiscover') setTimeout(function(){tutNext();},300);
    }
  }
  document.getElementById('battle-intro-area').addEventListener('click', function handler(e){
    // floating 팝업 버튼 클릭
    if(e.target.closest('#dfp-select')){
      var fp=document.getElementById('discover-float-popup');
      if(!fp)return;
      if(TUT.active&&TUT.discoverBlocked)return;
      var idx=parseInt(fp.getAttribute('data-idx'));
      document.getElementById('battle-intro-area').removeEventListener('click',handler);
      doDiscoverSelect(idx);
      return;
    }
    if(e.target.closest('#dfp-detail')){
      var fp=document.getElementById('discover-float-popup');
      if(!fp)return;
      var bid=fp.getAttribute('data-bid');
      var pick=document.querySelector('.discover-pick[data-discover="'+fp.getAttribute('data-idx')+'"]');
      if(pick){var rect=pick.getBoundingClientRect();showTooltip(bid,rect,null);}
      return;
    }
    // card 클릭 → floating 팝업 표시
    var pick=e.target.closest('.discover-pick');
    if(!pick){
      // 빈 영역 클릭 시 tooltip + popup 정리
      if(typeof hideTooltip==='function') hideTooltip();
      var old=document.getElementById('discover-float-popup');if(old)old.remove();
      var allPicks=document.querySelectorAll('.discover-pick');
      for(var _dp=0;_dp<allPicks.length;_dp++) allPicks[_dp].style.outline='';
      return;
    }
    if(TUT.active&&TUT.discoverBlocked)return;
    if(typeof hideTooltip==='function') hideTooltip();
    var idx=pick.getAttribute('data-discover');
    var bid=pick.getAttribute('data-base-id');
    var old=document.getElementById('discover-float-popup');if(old)old.remove();
    var allPicks=document.querySelectorAll('.discover-pick');
    for(var _dp=0;_dp<allPicks.length;_dp++) allPicks[_dp].style.outline='';
    pick.style.outline='2px solid #ffd700';
    var rect=pick.getBoundingClientRect();
    var popup=document.createElement('div');
    popup.id='discover-float-popup';
    popup.setAttribute('data-idx',idx);
    popup.setAttribute('data-bid',bid);
    popup.style.cssText='position:fixed;z-index:999;display:flex;gap:6px;background:rgba(20,30,40,0.95);border:1px solid #ffd700;border-radius:8px;padding:6px 10px;';
    popup.style.left=(rect.left+rect.width/2)+'px';
    popup.style.top=(rect.bottom+4)+'px';
    popup.style.transform='translateX(-50%)';
    var btnSelect=document.createElement('button');btnSelect.className='btn btn-blue';btnSelect.style.cssText='font-size:12px;padding:4px 12px';btnSelect.innerHTML='<span class="btn-inner">select</span>';
    var btnDetail=document.createElement('button');btnDetail.className='btn btn-stone';btnDetail.style.cssText='font-size:12px;padding:4px 12px';btnDetail.innerHTML='<span class="btn-inner">Details</span>';
    popup.appendChild(btnSelect);popup.appendChild(btnDetail);
    document.body.appendChild(popup);
    btnSelect.addEventListener('click',function(ev){ev.stopPropagation();var fp=document.getElementById('discover-float-popup');if(fp)fp.remove();doDiscoverSelect(parseInt(idx));});
    btnDetail.addEventListener('click',function(ev){ev.stopPropagation();var pk=document.querySelector('.discover-pick[data-discover="'+idx+'"]');if(pk){var r=pk.getBoundingClientRect();showTooltip(bid,r,null);}});
  });
}

// 커스텀 Discover: 특정 후보 목록으로 Discover UI 표시
function showDiscoverCustom(choices) {
  console.trace('[DEBUG] showDiscoverCustom called, turn='+G.turn+', choices='+((choices||[]).map(function(c){return c.id||c.name;}).join(',')));
  if(!choices||choices.length===0){renderAll();return;}
  var p=G.players[0];
  var overlay=document.getElementById('battle-overlay');
  var html='<div class="battle-intro"><h3 style="margin-bottom:4px;color:#ffd700">Discover!</h3>';
  html+='<p style="color:#aab;font-size:13px;margin-bottom:16px">Select 1</p>';
  html+='<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">';
  for(var i=0;i<choices.length;i++){
    var c=choices[i];
    var kwt=(c.kw||[]).filter(function(k){return k!=='survive'&&k!=='preemptive';}).map(function(k){return KW_LABELS[k]||k;}).join(' ');
    var aTag='';
    if(BC_IDS[c.id])aTag+='<span class="ability-tag bc" style="cursor:default">Battlecry</span>';
    if(DR_IDS[c.id])aTag+='<span class="ability-tag dr" style="cursor:default">Deathrattle</span>';
    if(SOC_IDS[c.id])aTag+='<span class="ability-tag soc" style="cursor:default">Battle Start</span>';
    if(SURV_IDS[c.id]||(c.kw&&c.kw.indexOf('survive')!==-1))aTag+='<span class="ability-tag" style="background:rgba(16,185,129,0.2);color:#6ee7b7;cursor:default">Survive</span>';
    if(PASSIVE_IDS[c.id])aTag+='<span class="ability-tag" style="background:rgba(168,85,247,0.2);color:#c084fc;cursor:default">Passive</span>';
    if(PRE_IDS[c.id]||(c.kw&&c.kw.indexOf('preemptive')!==-1))aTag+='<span class="ability-tag" style="background:rgba(251,191,36,0.2);color:#fbbf24;cursor:default">Preemptive</span>';
    html+='<div class="card tier'+c.tier+' discover-pick" data-discover="'+i+'" data-base-id="'+c.id+'" style="cursor:pointer;position:relative">';
    if(c.img)html+='<div class="card-bg"><img src="../img/'+c.img+'" onerror="this.parentElement.style.display=\'none\'"></div>';
    html+='<div class="card-inner">';
    var dIcon=SCHOOL_ICONS[c.school];if(dIcon)html+='<img class="school-logo" src="'+dIcon+'">';
    html+='<div class="tier-stars">'+starStr(c.tier)+'</div><div class="card-spacer"></div>';
    html+='<div class="name-banner">'+c.name+'</div><div class="keywords">'+(kwt||'&nbsp;')+'</div>';
    if(aTag)html+='<div style="text-align:center;padding:2px 6px;background:rgba(0,0,0,0.4)">'+aTag+'</div>';
    else html+='<div style="padding:2px 6px;background:rgba(0,0,0,0.4)">&nbsp;</div>';
    html+='<div class="stat-row"><div class="stat-atk" style="'+statColor(c.id,false,'atk',c.atk)+'">'+c.atk+'</div><div class="stat-hp" style="'+statColor(c.id,false,'hp',c.hp)+'">'+c.hp+'</div></div></div></div>';
  }
  html+='</div></div>';
  document.getElementById('battle-intro-area').innerHTML=html;
  document.getElementById('battle-arena').style.display='none';
  document.getElementById('battle-log').style.display='none';
  document.getElementById('battle-result-box').style.display='none';
  document.getElementById('btn-continue').style.display='none';
  document.getElementById('btn-skip').style.display='none';
  overlay.classList.add('active');
  function doCustomSelect(idx){
    var fp=document.getElementById('discover-float-popup');if(fp)fp.remove();
    overlay.classList.remove('active');
    document.getElementById('battle-intro-area').innerHTML='';
    var chosen=choices[idx];if(!chosen){renderAll();return;}
    if(window._questTracker) window._questTracker.discovers++;
    // Hyakkiyako Discover도 purchase record으로 인정 (Kuzunoha condition)
    if(HKYK_ALL_IDS.indexOf(chosen.id)!==-1) G.soldHkyk[chosen.id]=true;
    if(chosen.id==='arisu') G.arisuPurchased=true;
    takeFromPool(chosen.id);
    var count=0;for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===chosen.id&&!p.board[j].isSkin)count++;}
    if(count>=2){
      var tmpl=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id===chosen.id){tmpl=CHARS[j];break;}
      if(tmpl){var nb=[],rm=0;for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===chosen.id&&!p.board[j].isSkin&&rm<2){rm++;}else{nb.push(p.board[j]);}}p.board=nb;var gld=makeMinion(tmpl,true);p.board.push(gld);triggerBattlecry(gld,p);showDiscover(p);return;}
    }
    if(p.board.length<MAX_BOARD){var m=makeMinion(chosen,false);p.board.push(m);triggerBattlecry(m,p);}
    renderAll();
  }
  document.getElementById('battle-intro-area').addEventListener('click',function handler(e){
    if(e.target.closest('#dfp-select')){
      var fp=document.getElementById('discover-float-popup');if(!fp)return;
      var idx=parseInt(fp.getAttribute('data-idx'));
      document.getElementById('battle-intro-area').removeEventListener('click',handler);
      doCustomSelect(idx);return;
    }
    if(e.target.closest('#dfp-detail')){
      var fp=document.getElementById('discover-float-popup');if(!fp)return;
      var bid=fp.getAttribute('data-bid');
      var pick=document.querySelector('.discover-pick[data-discover="'+fp.getAttribute('data-idx')+'"]');
      if(pick){var rect=pick.getBoundingClientRect();showTooltip(bid,rect,null);}
      return;
    }
    var pick=e.target.closest('.discover-pick');
    if(!pick){
      if(typeof hideTooltip==='function') hideTooltip();
      var old=document.getElementById('discover-float-popup');if(old)old.remove();
      var allPicks=document.querySelectorAll('.discover-pick');
      for(var _dp=0;_dp<allPicks.length;_dp++) allPicks[_dp].style.outline='';
      return;
    }
    if(typeof hideTooltip==='function') hideTooltip();
    var idx=pick.getAttribute('data-discover');
    var bid=pick.getAttribute('data-base-id');
    var old=document.getElementById('discover-float-popup');if(old)old.remove();
    var allPicks=document.querySelectorAll('.discover-pick');
    for(var _dp=0;_dp<allPicks.length;_dp++) allPicks[_dp].style.outline='';
    pick.style.outline='2px solid #ffd700';
    var rect=pick.getBoundingClientRect();
    var popup=document.createElement('div');
    popup.id='discover-float-popup';
    popup.setAttribute('data-idx',idx);
    popup.setAttribute('data-bid',bid);
    popup.style.cssText='position:fixed;z-index:999;display:flex;gap:6px;background:rgba(20,30,40,0.95);border:1px solid #ffd700;border-radius:8px;padding:6px 10px;';
    popup.style.left=(rect.left+rect.width/2)+'px';
    popup.style.top=(rect.bottom+4)+'px';
    popup.style.transform='translateX(-50%)';
    var btnSelect=document.createElement('button');btnSelect.className='btn btn-blue';btnSelect.style.cssText='font-size:12px;padding:4px 12px';btnSelect.innerHTML='<span class="btn-inner">select</span>';
    var btnDetail=document.createElement('button');btnDetail.className='btn btn-stone';btnDetail.style.cssText='font-size:12px;padding:4px 12px';btnDetail.innerHTML='<span class="btn-inner">Details</span>';
    popup.appendChild(btnSelect);popup.appendChild(btnDetail);
    document.body.appendChild(popup);
    btnSelect.addEventListener('click',function(ev){ev.stopPropagation();var fp=document.getElementById('discover-float-popup');if(fp)fp.remove();doCustomSelect(parseInt(idx));});
    btnDetail.addEventListener('click',function(ev){ev.stopPropagation();var pk=document.querySelector('.discover-pick[data-discover="'+idx+'"]');if(pk){var r=pk.getBoundingClientRect();showTooltip(bid,r,null);}});
  });
}

function aiDiscover(p) {
  var choices = getDiscoverChoices(p);
  if(choices.length === 0) return;
  // AI: 점수 most highest 것 select
  var best = null, bestScore = -1;
  for(var i=0;i<choices.length;i++){
    var s = choices[i].atk + choices[i].hp + choices[i].tier * 1.5;
    for(var k=0;k<(choices[i].kw||[]).length;k++){
      if(choices[i].kw[k]==='poison')s+=4;else if(choices[i].kw[k]==='cleave')s+=3;else if(choices[i].kw[k]==='shield')s+=2;else if(choices[i].kw[k]==='windfury')s+=3;
    }
    // triple 가능성 bonus
    for(var k=0;k<p.board.length;k++){if(p.board[k].baseId===choices[i].id&&!p.board[k].isSkin){s+=5;break;}}
    if(s > bestScore){bestScore = s; best = choices[i];}
  }
  if(best && takeFromPool(best.id)){
    addToBoard(p, makeMinion(best, false));
  }
}

// ========== ADD TO BOARD (triple check 포함) ==========
function addToBoard(p, m) {
  // recruit effect음 (모든 경로 공통)
  if(p.isPlayer){playCardDrop(m.tier);playRecruitVoice(m.baseId);if(m.tier>=5)shakeScreen(m.tier>=6?'heavy':'light');}
  // quest tracking: recruit (player만)
  if(p.isPlayer && m.school && window._questTracker && window._questTracker.recruits[m.school] !== undefined) {
    window._questTracker.recruits[m.school]++;
  }
  // triple check
  var count=0;
  for(var i=0;i<p.board.length;i++){
    if(p.board[i].baseId===m.baseId&&!p.board[i].isSkin) count++;
  }
  if(count>=2){
    // quest tracking: skin upgrade (player만)
    if(p.isPlayer && window._questTracker) window._questTracker.skins++;
    var tmpl=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id===m.baseId)tmpl=CHARS[j];
    var mergedKw=[],bonusAtk=0,bonusHp=0;
    var sources=[];for(var i=0;i<p.board.length;i++)if(p.board[i].baseId===m.baseId&&!p.board[i].isSkin)sources.push(p.board[i]);
    sources.push(m);
    for(var i=0;i<sources.length;i++){
      var u=sources[i];
      for(var k=0;k<(u.kw||[]).length;k++)if(mergedKw.indexOf(u.kw[k])===-1)mergedKw.push(u.kw[k]);
      bonusAtk+=u.atk-tmpl.atk;bonusHp+=u.hp-tmpl.hp;
    }
    var newBoard=[];var removed=0;
    for(var i=0;i<p.board.length;i++){
      if(p.board[i].baseId===m.baseId&&!p.board[i].isSkin&&removed<2){removed++;}
      else{newBoard.push(p.board[i]);}
    }
    p.board=newBoard;
    var skinUnit=makeMinion(tmpl,true);skinUnit.kw=mergedKw;skinUnit.atk+=bonusAtk;skinUnit.hp+=bonusHp;skinUnit.maxHp=skinUnit.hp;
    applySkinKwTransform(tmpl,skinUnit);
    p.board.push(skinUnit);
    triggerBattlecry(skinUnit,p);
    if(p.isPlayer){playSfx('triple');playRecruitVoice(skinUnit.baseId);shakeScreen('heavy');}
    // player면 Discover (AI는 aiDiscover 별도 호출)
    if(p.isPlayer) showDiscover(p);
    return skinUnit;
  }
  // triple No면 그냥 add
  if(p.board.length<MAX_BOARD){
    p.board.push(m);
    triggerBattlecry(m,p);
    return m;
  }
  return null;
}

// ========== BATTLECRY ==========
function triggerBattlecry(m, p) {
  var id=m.baseId;
  if(!BC_IDS[id]) return;
  if(G.permanentAbilityBan) return;
  if(p===G.players[0]) playSfx('battlecry',0.3);
  // Michiru chain 중이면 순수 1회만 trigger (Shizuko/린 증폭 안 됨)
  if(G._michiruChaining){
    _doBC(m,p);
    return;
  }
  var linRepeat=1+getLinExtraRecruit(p);
  var shizukoRepeat=getShizukoExtraRecruit(p);
  var totalRepeat=linRepeat+shizukoRepeat;
  for(var _lr=0;_lr<totalRepeat;_lr++){
    _doBC(m,p);
  }
}
function getShizukoExtraRecruit(p){
  var extra=0;
  for(var i=0;i<p.board.length;i++){if(p.board[i]&&p.board[i].baseId==='shizuko')extra+=p.board[i].isSkin?2:1;}
  return extra;
}
function _doBC(m, p) {
  var id=m.baseId;

  if(id==='iroha') {
    // Iroha를 Toramaru로 즉시 replace
    var idx=p.board.indexOf(m);
    if(idx<0) return;
    var isSkin=m.isSkin;
    var tora=makeToken('toramaru');
    tora.isToken=false; // board permanent unit이므로 battle 후 필터 target 아님
    if(isSkin){tora.atk=10;tora.hp=2;tora.maxHp=2;tora.name='Toramaru(golden)';tora.isSkin=true;tora.img='token/toramaru.png';}
    // baseId를 'iroha'로 maintain → 풀 추enemy + triple 인식
    tora.baseId='iroha';
    tora.irohaRef={isSkin:isSkin};
    p.board[idx]=tora;
  }

  // ===== Hyakkiyako Battlecry =====
  else if(id==='izuna') {
    // allied all +1/+1 (skin +2/+2)
    var izBuff=m.isSkin?2:1;
    for(var i=0;i<p.board.length;i++){
      p.board[i].atk+=izBuff;p.board[i].hp+=izBuff;
      p.board[i].maxHp=(p.board[i].maxHp||p.board[i].hp);p.board[i].maxHp+=izBuff;
      logBuff(p.board[i],m.name,izBuff,izBuff);
    }
  }
  else if(id==='tsukuyo') {
    var buff=m.isSkin?2:1;
    for(var i=0;i<p.board.length;i++){
      p.board[i].atk+=buff;p.board[i].hp+=buff;
      p.board[i].maxHp=(p.board[i].maxHp||p.board[i].hp);p.board[i].maxHp+=buff;
      logBuff(p.board[i],m.name,buff,buff);
    }
  }
  else if(id==='tsubaki') {
    // allied Hyakkiyako all +3/+3 (golden +6/+6)
    var buff=m.isSkin?6:3;
    for(var i=0;i<p.board.length;i++){
      if(p.board[i].school==='Hyakkiyako'){
        p.board[i].atk+=buff;p.board[i].hp+=buff;
        p.board[i].maxHp=(p.board[i].maxHp||p.board[i].hp);p.board[i].maxHp+=buff;
        logBuff(p.board[i],m.name,buff,buff);
      }
    }
  }
  else if(id==='michiru') {
    if(G._michiruChaining) return; // chain 중 자신 재trigger prevent
    // allied Hyakkiyako(자신 제외) BC chain (golden: 2회)
    G._michiruChaining=true;
    var repeat=m.isSkin?2:1;
    for(var r=0;r<repeat;r++){
      for(var i=0;i<p.board.length;i++){
        if(p.board[i].school==='Hyakkiyako'&&p.board[i].baseId!=='michiru'&&BC_IDS[p.board[i].baseId]){
          _doBC(p.board[i],p);
        }
      }
    }
    G._michiruChaining=false;
  }

  // ===== Shanhaijing Battlecry =====
  else if(id==='kokona'){
    // Kokona: Schedule level 이하 's random student(Kokona 제외)을 bench로 불러옵니다.
    if(!p.bench){
      var kkCands=CHARS.filter(function(c){return c.tier<=p.tier&&c.id!=='kokona';});
      var unlockedAby=getUnlockedAbydos();
      kkCands=kkCands.filter(function(c){return !c.locked||unlockedAby.indexOf(c.id)!==-1;});
      kkCands=kkCands.filter(function(c){return G.pool[c.id]>0;});
      if(kkCands.length>0){
        var pick=kkCands[Math.floor(Math.random()*kkCands.length)];
        if(takeFromPool(pick.id)){
          p.bench=makeMinion(pick,false);
        }
      }
    }
  }
  else if(id==='kisaki'){
    // Kisaki: allied student(Kisaki 제외, 비skin) 1인 select(skin: all members)을 skin으로 replace
    var ksTargets=[];
    for(var i=0;i<p.board.length;i++){if(!p.board[i].isSkin&&p.board[i].baseId!=='kisaki'&&!p.board[i].isHidden)ksTargets.push(i);}
    if(ksTargets.length>0){
      if(m.isSkin){
        // 골든 Kisaki: all members 자동 skin 변환
        for(var _ki=0;_ki<ksTargets.length;_ki++){
          _applySkinUpgrade(p.board[ksTargets[_ki]]);
        }
      } else if(p.isPlayer){
        // 일반 Kisaki (player): target select UI
        G.pendingSpell={id:'kisaki_bc',name:'Kisaki\'s Greeting',target:'select_ally',
          effect:function(G2,idx){
            var p2=G2.players[0];if(!p2.board[idx]||p2.board[idx].isSkin||p2.board[idx].isHidden)return false;
            _applySkinUpgrade(p2.board[idx]);
            return true;
          }};
        renderAll();
      } else {
        // AI: random 1인 자동 skin 변환
        var aiPick=ksTargets[Math.floor(Math.random()*ksTargets.length)];
        _applySkinUpgrade(p.board[aiPick]);
      }
    }
  }
  // 히Mari: Battlecry remove → Battle Start(SOC)으로 이동
}
function _applySkinUpgrade(u){
  var tmpl=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id===u.baseId){tmpl=CHARS[j];break;}
  if(!tmpl||!tmpl.skin)return;
  var bonusAtk=u.atk-tmpl.atk,bonusHp=u.hp-tmpl.hp;
  u.name=tmpl.skin;u.atk=tmpl.atk*2+1+bonusAtk;u.hp=tmpl.hp*2+1+bonusHp;u.maxHp=u.hp;
  u.isSkin=true;u.img=tmpl.imgGold;
  applySkinKwTransform(tmpl,u);
}

// ========== GSC Passive helper ==========
function getAyumuBonus(){
  var p=G.players[0];var bonus=0;
  for(var i=0;i<p.board.length;i++){if(p.board[i]&&p.board[i].baseId==='ayumu')bonus+=p.board[i].isSkin?4:2;}
  return bonus;
}
function getMomokaFreeRerolls(){
  var p=G.players[0];var free=0;
  for(var i=0;i<p.board.length;i++){if(p.board[i]&&p.board[i].baseId==='momoka')free+=p.board[i].isSkin?2:1;}
  return free;
}
function getAoiBonusStone(){
  var p=G.players[0];var bonus=0;
  for(var i=0;i<p.board.length;i++){if(p.board[i]&&p.board[i].baseId==='aoi')bonus+=p.board[i].isSkin?4:2;}
  return bonus;
}
function getLinExtra(side){
  var extra=0;
  for(var i=0;i<side.length;i++){if(side[i].alive&&side[i].baseId==='lin')extra+=side[i].isSkin?2:1;}
  return extra;
}
// Eimi Passive: Millennium summon 시 bonus
function getEimiSummonBonus(side){
  var bonus=0;
  // side 배열(battle중)이면 battle용, player 객체면 recruit용
  if(Array.isArray(side)){
    for(var i=0;i<side.length;i++){if(side[i].alive&&side[i].baseId==='utaha')bonus+=side[i].isSkin?2:1;}
  } else {
    for(var i=0;i<side.board.length;i++){if(side.board[i]&&side.board[i].baseId==='utaha')bonus+=side.board[i].isSkin?2:1;}
  }
  return bonus;
}
function applyEimiBonus(token, side){
  var mult=getEimiSummonBonus(side);
  if(mult>0){
    var tierLvl=G.players[0].tier||1;
    var bonus=tierLvl*mult;
    token.atk+=bonus;token.hp+=bonus;
    if(token.maxHp) token.maxHp+=bonus;
  }
}

function getLinExtraRecruit(p){
  var extra=0;
  for(var i=0;i<p.board.length;i++){if(p.board[i]&&p.board[i].baseId==='lin')extra+=p.board[i].isSkin?2:1;}
  return extra;
}

// ========== UNDO (sell 되돌리기) ==========
var lastSold=null;

function undoSell() {
  if(!lastSold) return;
  var p=G.players[0];
  if(p.board.length>=MAX_BOARD){lastSold=null;return;}
  // gold 회수
  p.stone-=1;
  if(p.stone<0){p.stone+=1;return;} // pyroxene 부족하면 취소
  // board에 restore
  p.board.splice(lastSold.idx,0,lastSold.unit);
  // 풀 되돌리기
  if(lastSold.unit.isHidden){
    G.hiddenCardsOwned[lastSold.unit.baseId]=true;
    // shopExclusions restore
    if(lastSold.exclusion){
      if(G.shopExclusions.indexOf(lastSold.exclusion)===-1) G.shopExclusions.push(lastSold.exclusion);
    }
  } else {
    takeFromPool(lastSold.unit.baseId);
    if(lastSold.unit.isSkin){takeFromPool(lastSold.unit.baseId);takeFromPool(lastSold.unit.baseId);}
  }
  // Haine buff 되돌리기
  if(lastSold.haineBuff){
    for(var i=0;i<p.board.length;i++){
      if(p.board[i]&&p.board[i]!==lastSold.unit){
        p.board[i].atk-=lastSold.haineBuff;p.board[i].hp-=lastSold.haineBuff;
        if(p.board[i].maxHp) p.board[i].maxHp-=lastSold.haineBuff;
      }
    }
  }
  lastSold=null;
  renderAll();
}

function showSellConfirm(onConfirm){
  var overlay=document.createElement('div');
  overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center';
  var box=document.createElement('div');
  box.style.cssText='background:#1e293b;border:2px solid #475569;border-radius:12px;padding:24px 32px;text-align:center;min-width:220px';
  var msg=document.createElement('div');
  msg.style.cssText='color:#f1f5f9;font-size:16px;margin-bottom:18px';
  msg.textContent='Really send back?';
  var btnRow=document.createElement('div');
  btnRow.style.cssText='display:flex;gap:12px;justify-content:center';
  var yesBtn=document.createElement('button');
  yesBtn.style.cssText='padding:8px 24px;border:none;border-radius:8px;font-size:15px;font-weight:bold;background:#ef4444;color:#fff;cursor:pointer';
  yesBtn.textContent='Yes';
  yesBtn.addEventListener('click',function(e){e.stopPropagation();overlay.remove();onConfirm();});
  var noBtn=document.createElement('button');
  noBtn.style.cssText='padding:8px 24px;border:none;border-radius:8px;font-size:15px;font-weight:bold;background:#475569;color:#fff;cursor:pointer';
  noBtn.textContent='No';
  noBtn.addEventListener('click',function(e){e.stopPropagation();overlay.remove();});
  btnRow.appendChild(yesBtn);btnRow.appendChild(noBtn);
  box.appendChild(msg);box.appendChild(btnRow);overlay.appendChild(box);
  overlay.addEventListener('click',function(e){if(e.target===overlay){overlay.remove();}});
  document.body.appendChild(overlay);
}
function sellMinion(idx) {
  var p=G.players[0];
  if(!p.board[idx])return;
  playSfx('sell',0.4);
  var m=p.board[idx];
  // undo용 save
  var undoData={unit:m,idx:idx,haineBuff:0,exclusion:null};
  // Haine Passive: 팔면 allied all +2/+2 (golden +4/+4)
  if(m.baseId==='haine'){
    var buff=m.isSkin?4:2;
    undoData.haineBuff=buff;
    for(var i=0;i<p.board.length;i++){
      if(p.board[i]&&p.board[i]!==m){
        p.board[i].atk+=buff;p.board[i].hp+=buff;
        if(!p.board[i].maxHp)p.board[i].maxHp=p.board[i].hp; else p.board[i].maxHp+=buff;
        logBuff(p.board[i],m.name+' sell',buff,buff);
      }
    }
  }
  p.stone+=1;
  // Nonomi sell 시 pyroxene counter 초기화
  if(m.baseId==='nonomi') G.nonomiStoneSinceJoined=0;
  // Shiroko Terror sell 시 absorb된 student 귀환
  if(m.baseId==='Shiroko_Terror'&&G._shirokoTerrorAbsorbed&&G._shirokoTerrorAbsorbed.length>0){
    for(var _sta=0;_sta<G._shirokoTerrorAbsorbed.length;_sta++){
      if(p.board.length<MAX_BOARD) p.board.push(G._shirokoTerrorAbsorbed[_sta]);
    }
    G._shirokoTerrorAbsorbed=[];
  }
  // Hyakkiyako sell 시에도 purchase record maintain (Kuzunoha condition은 purchase record 기준)
  // hidden card: 풀 반환하지 않고, 소유 해제 + 상점제외 해제
  if(m.isHidden){
    delete G.hiddenCardsOwned[m.baseId];
    if(m.baseId==='millennium_death_momoi'){
      var ei=G.shopExclusions.indexOf('momoi');if(ei!==-1){G.shopExclusions.splice(ei,1);undoData.exclusion='momoi';}
    }
    if(m.baseId==='millennium_nameless'){
      var ei=G.shopExclusions.indexOf('arisu');if(ei!==-1){G.shopExclusions.splice(ei,1);undoData.exclusion='arisu';}
    }
  } else {
    returnToPool(m.baseId,m.isSkin?3:1);
  }
  p.board.splice(idx,1);
  lastSold=undoData;
  renderAll();
}

// ========== 보관 (bench) ==========
function moveToBench(boardIdx) {
  var p=G.players[0];
  if(p.bench!==null) return; // 이미 보관 중
  if(!p.board[boardIdx]) return;
  p.bench=p.board[boardIdx];
  p.board.splice(boardIdx,1);
  lastSold=null;
  renderAll();
}
function moveFromBench() {
  var p=G.players[0];
  if(p.bench===null) return;
  // triple check
  var m=p.bench;
  var count=0;
  for(var i=0;i<p.board.length;i++){if(p.board[i].baseId===m.baseId&&!p.board[i].isSkin)count++;}
  var willTriple=count>=2;
  if(p.board.length>=MAX_BOARD&&!willTriple) return;
  p.bench=null;
  if(willTriple){
    playSfx('triple');
    var tmpl=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id===m.baseId){tmpl=CHARS[j];break;}
    if(tmpl){
      var mergedKw=[],bonusAtk=0,bonusHp=0;
      var sources=[];for(var i=0;i<p.board.length;i++)if(p.board[i].baseId===m.baseId&&!p.board[i].isSkin)sources.push(p.board[i]);
      sources.push(m);
      for(var i=0;i<sources.length;i++){var u=sources[i];for(var k=0;k<(u.kw||[]).length;k++)if(mergedKw.indexOf(u.kw[k])===-1)mergedKw.push(u.kw[k]);bonusAtk+=u.atk-tmpl.atk;bonusHp+=u.hp-tmpl.hp;}
      var newBoard=[];var removed=0;
      for(var i=0;i<p.board.length;i++){if(p.board[i].baseId===m.baseId&&!p.board[i].isSkin&&removed<2){removed++;}else{newBoard.push(p.board[i]);}}
      p.board=newBoard;var skinUnit=makeMinion(tmpl,true);skinUnit.kw=mergedKw;skinUnit.atk+=bonusAtk;skinUnit.hp+=bonusHp;skinUnit.maxHp=skinUnit.hp;
      applySkinKwTransform(tmpl,skinUnit);
      p.board.push(skinUnit);triggerBattlecry(skinUnit,p);showDiscover(p);return;
    }
  }
  p.board.push(m);
  triggerBattlecry(m,p);
  renderAll();
}
function sellBench() {
  var p=G.players[0];
  if(p.bench===null) return;
  playSfx('sell',0.4);
  var m=p.bench;
  // Haine Passive: bench에서 팔아도 allied all buff
  if(m.baseId==='haine'){
    var buff=m.isSkin?4:2;
    for(var i=0;i<p.board.length;i++){
      if(p.board[i]){
        p.board[i].atk+=buff;p.board[i].hp+=buff;
        if(!p.board[i].maxHp)p.board[i].maxHp=p.board[i].hp; else p.board[i].maxHp+=buff;
        logBuff(p.board[i],m.name+' sell',buff,buff);
      }
    }
  }
  p.stone+=1;
  if(m.isHidden){delete G.hiddenCardsOwned[m.baseId];}
  else{returnToPool(m.baseId,m.isSkin?3:1);}
  p.bench=null;
  renderAll();
}

function doReroll() {
  var p=G.players[0];
  lastSold=null;
  if(SANDBOX){playSfx('reroll',0.3);rollShop(true);renderAll();return;}
  if(G.freeRerolls&&G.freeRerolls>0){G.freeRerolls--;playSfx('reroll',0.3);rollShop(true);renderAll();return;}
  if(p.stone<1)return;p.stone-=1;trackNonomiStone(1);playSfx('reroll',0.3);rollShop(true);renderAll();
}
function doUpgrade() {
  var p=G.players[0];if(p.tier>=6)return;
  if(SANDBOX){p.tier++;p.upgradeCost=p.tier<6?0:99;playSfx('levelup');renderAll();}
  else{if(p.stone<p.upgradeCost)return;
  var _upCost=p.upgradeCost;p.stone-=_upCost;trackNonomiStone(_upCost);p.tier++;p.upgradeCost=p.tier<6?UPGRADE_COSTS[p.tier]:99;playSfx('levelup');renderAll();}
  if(TUT.active){
    var s=TUTORIAL_STEPS[TUT.step];
    if(s&&s.action==='waitUpgrade') setTimeout(function(){tutNext();},300);
  }
}
function doFreeze() { G.frozen=!G.frozen;playSfx(G.frozen?'freeze':'unfreeze');renderAll(); }

// ===== Nonomi pyroxene 소비 추enemy =====
function trackNonomiStone(amount) {
  var p=G.players[0];
  for(var _ni=0;_ni<p.board.length;_ni++){
    if(p.board[_ni].baseId==='nonomi'){
      G.nonomiStoneSinceJoined=(G.nonomiStoneSinceJoined||0)+amount;
      break;
    }
  }
}

function boardSwap(idx) {
  if(swapFirst===-1){swapFirst=idx;renderAll();}
  else{if(swapFirst!==idx){var p=G.players[0];var tmp=p.board[swapFirst];p.board[swapFirst]=p.board[idx];p.board[idx]=tmp;}swapFirst=-1;renderAll();}
}

// ========== AI ==========
var AI_LEVEL_TARGETS={2:2,3:5,4:7,5:9,6:11}; // aiShouldUpgrade 's idealTurns 참조용으로 maintain
var AI_PERSONALITIES={
  aggressive:{levelBias:15,buyThreshold:0,sellThreshold:0.7,hpDesperate:20,powerTurnSave:false},
  standard:{levelBias:0,buyThreshold:3,sellThreshold:0.85,hpDesperate:15,powerTurnSave:false},
  tempo:{levelBias:-10,buyThreshold:6,sellThreshold:0.9,hpDesperate:12,powerTurnSave:false},
  greedy:{levelBias:5,buyThreshold:3,sellThreshold:0.8,hpDesperate:15,powerTurnSave:true}
};
var AI_PERSONALITY_KEYS=['aggressive','standard','tempo','greedy'];
var HKYK_ALL_IDS=['izuna','pina','yukari','tsukuyo','mimori','renge','shizuko','tsubaki','kikyou','chise','nagusa','wakamo','michiru'];

// AI용 마법card effect (G.players[0] 하드코딩 우회 — p: AI player)
var AI_SPELL_EFFECTS={
  encourage: function(p){for(var i=0;i<p.board.length;i++){p.board[i].atk+=1;p.board[i].hp+=1;}},
  gold_bullet: function(p){
    var best=p.board[0];for(var i=1;i<p.board.length;i++)if(p.board[i].atk<best.atk)best=p.board[i];
    if(best)best.atk+=4;},
  visit_buff: function(p){
    var best=p.board[0];for(var i=1;i<p.board.length;i++)if(p.board[i].atk+p.board[i].hp>best.atk+best.hp)best=p.board[i];
    if(best){best.atk+=4;best.hp+=4;best.maxHp=(best.maxHp||best.hp)+4;}},
  unity_mt: function(p){
    var sc={};for(var i=0;i<p.board.length;i++){sc[p.board[i].school]=(sc[p.board[i].school]||0)+1;}
    var dom=null,dc=0;for(var s in sc)if(sc[s]>dc){dc=sc[s];dom=s;}
    if(dom)for(var i=0;i<p.board.length;i++)if(p.board[i].school===dom){p.board[i].atk+=4;p.board[i].hp+=4;}},
  aggro: function(p){
    var weak=p.board[0];for(var i=1;i<p.board.length;i++)if(p.board[i].atk+p.board[i].hp<weak.atk+weak.hp)weak=p.board[i];
    if(weak&&weak.kw.indexOf('taunt')===-1)weak.kw.push('taunt');},
  clover: function(p){
    var best=p.board[0];for(var i=1;i<p.board.length;i++)if(p.board[i].atk+p.board[i].hp>best.atk+best.hp)best=p.board[i];
    if(best&&best.kw.indexOf('shield')===-1)best.kw.push('shield');},
  venom: function(p){
    var best=p.board[0];for(var i=1;i<p.board.length;i++)if(p.board[i].atk>best.atk)best=p.board[i];
    if(best&&best.kw.indexOf('poison')===-1)best.kw.push('poison');},
  sensei: function(p){
    for(var r=0;r<2;r++)for(var i=0;i<p.board.length;i++){p.board[i].atk+=5;p.board[i].hp+=5;p.board[i].maxHp=(p.board[i].maxHp||p.board[i].hp)+5;}},
  higher_body: function(p){var best=p.board[0];for(var i=1;i<p.board.length;i++)if(p.board[i].atk<best.atk)best=p.board[i];if(best){best.atk+=3;best.hp+=1;}},
  lower_body: function(p){var best=p.board[0];for(var i=1;i<p.board.length;i++)if(p.board[i].hp<best.hp)best=p.board[i];if(best){best.atk+=1;best.hp+=3;}},
  surveillance: function(p){/* AI는 reroll 안 함 — 스킵 */},
  two_hands: function(p){var best=p.board[0];for(var i=1;i<p.board.length;i++)if(p.board[i].atk>best.atk)best=p.board[i];if(best&&best.kw.indexOf('windfury')===-1)best.kw.push('windfury');},
  revive_standby: function(p){var best=p.board[0];for(var i=1;i<p.board.length;i++)if(p.board[i].atk+p.board[i].hp>best.atk+best.hp)best=p.board[i];if(best&&best.kw.indexOf('reborn')===-1)best.kw.push('reborn');},
  get_set_go: function(p){var schools={};for(var i=0;i<p.board.length;i++){var s=p.board[i].school;if(!schools[s])schools[s]=[];schools[s].push(i);}for(var s in schools){var arr=schools[s];var pick=arr[Math.floor(Math.random()*arr.length)];p.board[pick].atk+=8;p.board[pick].hp+=8;}},
  on_your_mark: function(p){var basicPool=['taunt','shield','poison','reborn','cleave','pierce','ranged','windfury','selfdestruct'];var schools={};for(var i=0;i<p.board.length;i++){var s=p.board[i].school;if(!schools[s])schools[s]=[];schools[s].push(i);}var used={};for(var s in schools){var arr=schools[s];var pick=arr[Math.floor(Math.random()*arr.length)];var u=p.board[pick];var avail=basicPool.filter(function(k){return u.kw.indexOf(k)===-1&&!used[k];});if(avail.length>0){var kw=avail[Math.floor(Math.random()*avail.length)];u.kw.push(kw);used[kw]=true;}}},
};
var KW_SORT_ORDER={cleave:0,pierce:0,poison:1,windfury:2,ambush:2.5,shield:3,survive:4,reborn:5,taunt:99};

// ===== AI 덱 패Turn =====
var DECK_PATTERNS=[
  // Midori+Momoi덱: 두 장 확보 후 나머지는 자유 구성, 후반 벨류 역games 시 매각 가능
  {id:'midori_momoi',
   check:function(board){var hM=false,hD=false;for(var i=0;i<board.length;i++){if(board[i].baseId==='momoi')hM=true;if(board[i].baseId==='midori')hD=true;}return hM&&hD;},
   buyBonus:function(c,board){if(c.id==='momoi'||c.id==='midori')return 12;return 0;},
   sellProtect:function(u){if(u.baseId==='momoi'||u.baseId==='midori')return 8;return 0;}},
  // Cleave덱: Cleave unit 수 비례 시너지 (많을수록 add Cleave unit 우선도 상wins)
  {id:'cleave',
   check:function(board){var cnt=0;for(var i=0;i<board.length;i++){if(hasKw(board[i],'cleave')||hasKw(board[i],'pierce'))cnt++;}return cnt>=2;},
   buyBonus:function(c,board){if(!hasKw(c,'cleave')&&!hasKw(c,'pierce'))return 0;var cnt=0;for(var i=0;i<board.length;i++){if(hasKw(board[i],'cleave')||hasKw(board[i],'pierce'))cnt++;}return cnt*2;},
   sellProtect:function(u){return 0;}},
  // Trinity Battle Start덱/Tsurugi카야덱: SOC unit 시너지 (기작 유사)
  {id:'trinity_soc',
   check:function(board){var socCnt=0,hasTsurugi=false,hasKayaUnit=false;for(var i=0;i<board.length;i++){var bid=board[i].baseId;if(SOC_IDS[bid])socCnt++;if(bid==='tsurugi')hasTsurugi=true;if(bid==='kaya')hasKayaUnit=true;}return socCnt>=2||(hasTsurugi&&hasKayaUnit);},
   buyBonus:function(c,board){if(c.id==='tsurugi'||c.id==='kaya')return 8;if(SOC_IDS[c.id])return 5;return 0;},
   sellProtect:function(u){if(u.baseId==='tsurugi'||u.baseId==='kaya')return 5;if(SOC_IDS[u.baseId])return 3;return 0;}},
  // Tsubaki Battlecry덱: BC unit 시너지
  {id:'bc_tsubaki',
   check:function(board){var hasTsubaki=false,bcCnt=0;for(var i=0;i<board.length;i++){if(board[i].baseId==='tsubaki')hasTsubaki=true;if(BC_IDS[board[i].baseId])bcCnt++;}return hasTsubaki&&bcCnt>=2;},
   buyBonus:function(c,board){if(c.id==='tsubaki')return 12;if(BC_IDS[c.id])return 5;return 0;},
   sellProtect:function(u){if(u.baseId==='tsubaki')return 8;if(BC_IDS[u.baseId])return 3;return 0;}}
];

function aiUnitScore(u){
  var s=u.atk+u.hp;if(u.isSkin)s+=8;
  for(var k=0;k<(u.kw||[]).length;k++){
    if(u.kw[k]==='poison')s+=6;else if(u.kw[k]==='cleave')s+=5;
    else if(u.kw[k]==='shield')s+=4;else if(u.kw[k]==='windfury')s+=4;
    else if(u.kw[k]==='pierce')s+=3;else if(u.kw[k]==='reborn')s+=3;
    else if(u.kw[k]==='survive')s+=2;else if(u.kw[k]==='taunt')s+=2;
  }
  return s;
}

function aiShouldUpgrade(p){
  if(p.tier>=6) return false;
  if(p.stone<p.upgradeCost) return false;
  var pers=p.personality||AI_PERSONALITIES.standard;
  var goldAfterLevel=p.stone-p.upgradeCost;
  var canBuyAfter=Math.floor(goldAfterLevel/3);
  var boardStrength=0;
  for(var j=0;j<p.board.length;j++) boardStrength+=aiUnitScore(p.board[j]);

  var score=0;
  // Turn 압박: 이상enemy Turn 대비 얼마나 늦는지
  var idealTurns=[0,0,2,5,7,9,11];
  var turnDelta=G.turn-idealTurns[p.tier+1];
  score+=turnDelta*3;
  // level업 후 잔여 gold
  if(canBuyAfter>=2) score+=10;
  else if(canBuyAfter>=1) score+=3;
  else score-=8;
  // board 상태
  if(p.board.length>=MAX_BOARD) score+=5;
  if(p.board.length<=2) score-=10;
  // HP 압박
  if(p.hp<=pers.hpDesperate) score-=15;
  else if(p.hp>=30) score+=3;
  // 성격 바이어스
  score+=pers.levelBias;
  // greedy 파워Turn: 지금 0gold인데 다음 Turn이면 level+purchase 가능
  if(pers.powerTurnSave){
    var nextStone=Math.min(MAX_STONE,(p.turnStone||p.stone)+1);
    var nextCost=Math.max(0,p.upgradeCost-1);
    var nextGoldAfter=nextStone-nextCost;
    if(goldAfterLevel<3&&nextGoldAfter>=3) score-=12;
  }
  // free/1gold upgrade는 always
  if(p.upgradeCost<=1) score+=20;
  return score>0;
}

function aiProactiveSell(p,aiStrat){
  if(p.board.length<MAX_BOARD) return;
  if(p.stone>=3) return;
  var pers=p.personality||AI_PERSONALITIES.standard;
  var weakIdx=-1,weakScore=999;
  for(var j=0;j<p.board.length;j++){
    var sc=aiUnitScore(p.board[j]);
    if(!aiStrat.giveUp&&aiStrat.targetUnits.indexOf(p.board[j].baseId)!==-1) sc+=20;
    if(!aiStrat.giveUp&&aiStrat.dominantSchool&&p.board[j].school===aiStrat.dominantSchool) sc+=10;
    if(!aiStrat.giveUp&&aiStrat.deckPattern) sc+=aiStrat.deckPattern.sellProtect(p.board[j]);
    if(p.board[j].isSkin) sc+=30;
    if(sc<weakScore){weakScore=sc;weakIdx=j;}
  }
  var tierBaseline=p.tier*3+4;
  var sellBar=tierBaseline*pers.sellThreshold;
  if(weakIdx>=0&&weakScore<sellBar&&p.stone+1>=3){
    if(p.board[weakIdx].baseId==='haine'){
      var hBuff=p.board[weakIdx].isSkin?4:2;
      for(var j2=0;j2<p.board.length;j2++){if(p.board[j2]&&j2!==weakIdx){p.board[j2].atk+=hBuff;p.board[j2].hp+=hBuff;}}
    }
    returnToPool(p.board[weakIdx].baseId);p.stone+=1;p.board.splice(weakIdx,1);
  }
}

// AI 이미 takeFromPool 후 tmpl을 board에 add할 때 공통 process (triple check 포함)
function aiAddToBoardWithTriple(p,tmpl){
  var count=0;
  for(var i=0;i<p.board.length;i++)if(p.board[i].baseId===tmpl.id&&!p.board[i].isSkin)count++;
  if(count>=2){
    var srcs=[];
    for(var i=0;i<p.board.length;i++)if(p.board[i].baseId===tmpl.id&&!p.board[i].isSkin)srcs.push(p.board[i]);
    var mKw=[],bAtk=0,bHp=0;
    for(var i=0;i<srcs.length;i++){var u=srcs[i];for(var k=0;k<(u.kw||[]).length;k++)if(mKw.indexOf(u.kw[k])===-1)mKw.push(u.kw[k]);bAtk+=u.atk-tmpl.atk;bHp+=u.hp-tmpl.hp;}
    var nb=[],rm=0;
    for(var i=0;i<p.board.length;i++){if(p.board[i].baseId===tmpl.id&&!p.board[i].isSkin&&rm<2){rm++;}else{nb.push(p.board[i]);}}
    p.board=nb;
    var skin=makeMinion(tmpl,true);skin.kw=mKw;skin.atk+=bAtk;skin.hp+=bHp;skin.maxHp=skin.hp;
    applySkinKwTransform(tmpl,skin);
    p.board.push(skin);triggerBattlecry(skin,p);aiDiscover(p);
    return skin;
  } else {
    var nu=makeMinion(tmpl,false);p.board.push(nu);triggerBattlecry(nu,p);
    return nu;
  }
}

function aiSellReplace(p,aiStrat,aiPool){
  if(p.board.length<MAX_BOARD||p.stone<2) return;
  var pers=p.personality||AI_PERSONALITIES.standard;
  var weakIdx=-1,weakScore=999;
  for(var j=0;j<p.board.length;j++){
    var sc=aiUnitScore(p.board[j]);
    if(!aiStrat.giveUp&&aiStrat.targetUnits.indexOf(p.board[j].baseId)!==-1) sc+=20;
    if(!aiStrat.giveUp&&aiStrat.dominantSchool&&p.board[j].school===aiStrat.dominantSchool) sc+=10;
    if(!aiStrat.giveUp&&aiStrat.deckPattern) sc+=aiStrat.deckPattern.sellProtect(p.board[j]);
    if(p.board[j].isSkin) sc+=30;
    if(sc<weakScore){weakScore=sc;weakIdx=j;}
  }
  var highPool=aiPool.filter(function(c){return c.tier>=Math.max(1,p.tier-1)&&G.pool[c.id]>0;});
  if(highPool.length===0) highPool=aiPool.filter(function(c){return G.pool[c.id]>0;});
  if(highPool.length===0) return;
  var bestScore=0,bestTmpl=null;
  for(var j=0;j<highPool.length;j++){
    var s=highPool[j].atk+highPool[j].hp+highPool[j].tier*1.5;
    for(var k=0;k<(highPool[j].kw||[]).length;k++){
      if(highPool[j].kw[k]==='poison')s+=4;else if(highPool[j].kw[k]==='cleave')s+=3;
      else if(highPool[j].kw[k]==='shield')s+=2;else if(highPool[j].kw[k]==='windfury')s+=3;
    }
    if(DR_IDS[highPool[j].id])s+=5;if(SOC_IDS[highPool[j].id])s+=4;
    if(s>bestScore){bestScore=s;bestTmpl=highPool[j];}
  }
  if(!bestTmpl) return;
  // replace 후보 주력 school면 bonus, 약한 unit이 school 불일치면 마진 감소
  if(aiStrat.dominantSchool&&bestTmpl.school===aiStrat.dominantSchool) bestScore+=5;
  var replaceMargin=4;
  if(weakIdx>=0&&aiStrat.dominantSchool&&p.board[weakIdx].school!==aiStrat.dominantSchool) replaceMargin=1;
  if(bestScore>weakScore+replaceMargin&&weakIdx>=0&&!p.board[weakIdx].isSkin){
    if(p.board[weakIdx].baseId==='haine'){
      var hBuff=p.board[weakIdx].isSkin?4:2;
      for(var j2=0;j2<p.board.length;j2++){if(p.board[j2]&&j2!==weakIdx){p.board[j2].atk+=hBuff;p.board[j2].hp+=hBuff;}}
    }
    returnToPool(p.board[weakIdx].baseId);p.stone+=1;p.board.splice(weakIdx,1);
    if(p.stone>=3&&takeFromPool(bestTmpl.id)){
      aiAddToBoardWithTriple(p,bestTmpl);p.stone-=3;
    }
  }
}

function aiSpendRemainder(p){
  if(p.board.length===0||p.stone<2) return;
  var aiSpells=getAvailableSpells(p.tier).filter(function(s){return AI_SPELL_EFFECTS[s.id]&&s.cost<=p.stone;});
  if(aiSpells.length===0) return;
  aiSpells.sort(function(a,b){return a.cost-b.cost;});
  var sp=aiSpells[0];
  AI_SPELL_EFFECTS[sp.id](p);p.stone-=sp.cost;
}

function aiSortBoard(board){
  // 배치 우선순위: Taunt 맨앞 → Deathrattle/Self-destruct 앞쪽 → 일반 중간 → Preemptive/Ranged/Survive 뒤쪽
  function posScore(u){
    var s=50;
    var bid=u.baseId||'';
    var kw=u.kw||[];
    // 앞배치 (낮을수록 앞)
    if(kw.indexOf('taunt')!==-1) s=10; // Taunt 맨앞
    if(kw.indexOf('selfdestruct')!==-1) s=Math.min(s,15); // Self-destruct 앞쪽
    if(DR_IDS[bid]) s=Math.min(s,20); // Deathrattle unit 앞쪽
    if(kw.indexOf('reborn')!==-1) s=Math.min(s,25); // Reborn 앞쪽
    // 뒤배치 (높을수록 뒤)
    if(kw.indexOf('survive')!==-1) s=Math.max(s,70); // Survive 뒤쪽
    if(SURV_IDS[bid]) s=Math.max(s,70);
    if(kw.indexOf('preemptive')!==-1&&kw.indexOf('taunt')===-1) s=Math.max(s,75); // Preemptive 뒤쪽
    if(kw.indexOf('ranged')!==-1) s=Math.max(s,80); // Ranged 맨뒤
    // Shield은 앞쪽에 두면 1히트 absorb 가치 높음
    if(kw.indexOf('shield')!==-1&&s>30) s=Math.min(s,30);
    return s;
  }
  board.sort(function(a,b){
    var pa=posScore(a),pb=posScore(b);
    if(pa!==pb) return pa-pb;
    return b.hp-a.hp; // 같은 우선순위면 HP highest unit 앞
  });
}

function aiGetStrategy(p) {
  var strat={dominantSchool:null,schoolBonus:3,targetUnits:[],avoidOtherSchools:false,giveUp:false};
  if(p.hp<=12){strat.giveUp=true;return strat;}
  // Count schools on board
  var schoolCount={},total=p.board.length;
  for(var i=0;i<p.board.length;i++){var sc=p.board[i].school;schoolCount[sc]=(schoolCount[sc]||0)+1;}
  var bestSchool=null,bestCount=0;
  for(var sc in schoolCount){if(schoolCount[sc]>bestCount){bestCount=schoolCount[sc];bestSchool=sc;}}
  if(bestSchool&&total>0&&bestCount/total>=0.5) strat.dominantSchool=bestSchool;

  var pSchools=p.purchasedSchools||{};
  var schoolKeys=Object.keys(pSchools);
  var isSchoolPure=schoolKeys.length<=1;
  var pureSchool=schoolKeys.length===1?schoolKeys[0]:null;
  function boardHas(id){for(var i=0;i<p.board.length;i++)if(p.board[i].baseId===id)return true;return false;}
  function countNeeded(arr){var c=0;for(var i=0;i<arr.length;i++)if(boardHas(arr[i]))c++;return c;}

  // Define 7-star paths
  var paths=[
    {id:'gehenna_prefect',school:'Gehenna',units:['hina','iori','ako','chinatsu'],schoolOnly:false},
    {id:'gehenna_pandemonium',school:'Gehenna',units:['makoto','satsuki','iroha'],schoolOnly:false},
    {id:'gehenna_traingun',school:'Gehenna',units:[],schoolOnly:true},
    {id:'trinity_mika',school:'Trinity',units:[],schoolOnly:true},
    {id:'trinity_nagisa',school:'Trinity',units:['mari','sakurako','mine'],schoolOnly:false},
    {id:'trinity_seia',school:'Trinity',units:[],schoolOnly:true},
    {id:'millennium_death_momoi',school:'Millennium',units:['momoi','midori','yuzu','arisu'],schoolOnly:false},
    {id:'hkyk_saikyo',school:'Hyakkiyako',units:[],schoolOnly:true},
    {id:'hkyk_kuzunoha',school:'Hyakkiyako',units:[],schoolOnly:true}
  ];

  var bestPath=null,bestProgress=-1;
  for(var i=0;i<paths.length;i++){
    var path=paths[i];
    if(G.hiddenCardsEverOwned[path.id])continue;
    if(path.schoolOnly){
      if(!isSchoolPure)continue;
      if(pureSchool&&pureSchool!==path.school)continue;
      // School-only path: progress = board count of that school
      var prog=schoolCount[path.school]||0;
      if(prog>bestProgress){bestProgress=prog;bestPath=path;}
    } else {
      // Combo path: check how many needed units are on board
      var have=countNeeded(path.units);
      if(have>bestProgress){bestProgress=have;bestPath=path;}
    }
  }

  if(bestPath){
    if(bestPath.schoolOnly){
      strat.dominantSchool=bestPath.school;
      strat.avoidOtherSchools=true;
      // If already bought other school, impossible
      if(!isSchoolPure&&schoolKeys.length>0) strat.giveUp=true;
    } else {
      strat.dominantSchool=bestPath.school;
      strat.targetUnits=bestPath.units.slice();
      // Give up if tier>=5 and less than half needed units on board
      if(p.tier>=5&&bestProgress<bestPath.units.length/2) strat.giveUp=true;
    }
  }
  // 덱 패Turn detect (current board 기반)
  var activePat=null;
  for(var dp=0;dp<DECK_PATTERNS.length;dp++){if(DECK_PATTERNS[dp].check(p.board)){activePat=DECK_PATTERNS[dp];break;}}
  strat.deckPattern=activePat;
  return strat;
}

function aiTurns() {
  for(var i=1;i<G.players.length;i++){
    var p=G.players[i];if(p.dead)continue;
    // Phase 1: level업 판단 (스코어링)
    if(aiShouldUpgrade(p)){p.stone-=p.upgradeCost;p.tier++;p.upgradeCost=p.tier<6?UPGRADE_COSTS[p.tier]:99;}

    var aiStrat=aiGetStrategy(p);
    var aiPool=getAvailableChars(p.tier);
    // AI 마법card 사용: 가성비 highest 순으로 최대 2회
    if(p.board.length>0){
      var aiSpellCasts=0;
      while(aiSpellCasts<2){
        var aiSpells=getAvailableSpells(p.tier).filter(function(s){return AI_SPELL_EFFECTS[s.id]&&s.cost<=p.stone;});
        if(aiSpells.length===0) break;
        aiSpells.sort(function(a,b){return (b.tier/b.cost)-(a.tier/a.cost);});
        AI_SPELL_EFFECTS[aiSpells[0].id](p);
        p.stone-=aiSpells[0].cost;
        aiSpellCasts++;
      }
    }

    // Phase 3: Preemptiveenemy 매각 (board 풀 + gold 부족 시)
    aiProactiveSell(p,aiStrat);

    // Phase 4: purchase 루프
    var aiBuyLoop=0;
    while(p.stone>=3&&aiBuyLoop<20){
      aiBuyLoop++;
      var tripleTarget=null;var boardCounts={};
      for(var j=0;j<p.board.length;j++){if(!p.board[j].isSkin)boardCounts[p.board[j].baseId]=(boardCounts[p.board[j].baseId]||0)+1;}
      for(var bid in boardCounts){
        if(boardCounts[bid]>=2){for(var j=0;j<CHARS.length;j++){if(CHARS[j].id===bid&&CHARS[j].tier<=p.tier){tripleTarget=CHARS[j];break;}}if(tripleTarget)break;}
      }
      var tmpl;
      if(tripleTarget&&G.pool[tripleTarget.id]>0){tmpl=tripleTarget;}
      else{
        var candidates=aiPool.filter(function(c){return c.tier>=Math.max(1,p.tier-1)&&G.pool[c.id]>0;});
        if(candidates.length===0)candidates=aiPool.filter(function(c){return G.pool[c.id]>0;});
        if(candidates.length===0)break;
        // ε-greedy: sim 탐색 모드에서 10% chance로 완games 랜덤 purchase
        if(SIM_EXPLORE&&Math.random()<0.10){
          tmpl=candidates[Math.floor(Math.random()*candidates.length)];
        } else {
        var scored=candidates.map(function(c){
          var s=c.atk+c.hp+c.tier*1.5;
          for(var k=0;k<(c.kw||[]).length;k++){if(c.kw[k]==='poison')s+=4;else if(c.kw[k]==='cleave')s+=3;else if(c.kw[k]==='pierce')s+=2;else if(c.kw[k]==='shield')s+=2;else if(c.kw[k]==='windfury')s+=3;else if(c.kw[k]==='survive')s+=1;}
          // 특수ability bonus (Deathrattle/Battle Start/Battlecry/Preemptive/Survive/Passive)
          if(DR_IDS[c.id])s+=5;
          if(SOC_IDS[c.id])s+=4;
          if(BC_IDS[c.id])s+=4;
          if(PRE_IDS[c.id])s+=3;
          if(SURV_IDS[c.id])s+=3;
          if(PASSIVE_IDS[c.id])s+=3;
          var hasCopy=false;for(var k=0;k<p.board.length;k++){if(p.board[k].baseId===c.id&&!p.board[k].isSkin){hasCopy=true;break;}}
          if(hasCopy)s+=5;
          if(!aiStrat.giveUp){
            // school 시너지: 통일도 높을수록 bonus 증가
            if(aiStrat.dominantSchool&&c.school===aiStrat.dominantSchool){
              var schoolUnity=0;for(var _su=0;_su<p.board.length;_su++){if(p.board[_su].school===aiStrat.dominantSchool)schoolUnity++;}
              s+=3+schoolUnity*2; // base3 + allied 동일school당 +2 (최대 3+10=13)
            }
            if(aiStrat.targetUnits.indexOf(c.id)!==-1)s+=12;
            if(aiStrat.avoidOtherSchools&&aiStrat.dominantSchool&&c.school!==aiStrat.dominantSchool)s-=10;
            // board에 없는 school unit은 소폭 감점 (school 분산 prevent)
            if(p.board.length>=3&&aiStrat.dominantSchool&&c.school!==aiStrat.dominantSchool&&!aiStrat.avoidOtherSchools)s-=3;
          }
          // 덱 패Turn bonus
          if(aiStrat.deckPattern)s+=aiStrat.deckPattern.buyBonus(c,p.board);
          // Midori+Momoi 한 장만 있어도 짝 우선도 사games 부스팅
          if(!aiStrat.deckPattern||aiStrat.deckPattern.id!=='midori_momoi'){
            var _hM=false,_hD=false;
            for(var _bk=0;_bk<p.board.length;_bk++){if(p.board[_bk].baseId==='momoi')_hM=true;if(p.board[_bk].baseId==='midori')_hD=true;}
            if((_hM&&c.id==='midori')||(_hD&&c.id==='momoi'))s+=8;
          }
          // 자가대games sim 통계 기반 보정 (10판 이상 data 있는 card만)
          s+=simStatBonus(c.id);
          // Kasumi HP 연동 purchase 점수: HP 높으면 attack 픽 선호, 낮으면 방어enemy 픽, 2장 prevent
          if(c.id==='kasumi'){
            if(p.hp>=20) s-=2;
            else if(p.hp<=15) s+=1;
            var _hasKasumi=false;for(var _kk=0;_kk<p.board.length;_kk++){if(p.board[_kk].baseId==='kasumi'){_hasKasumi=true;break;}}
            if(_hasKasumi) s-=3;
          }
          return{tmpl:c,score:s+Math.random()*2};
        });
        scored.sort(function(a,b){return b.score-a.score;});
        tmpl=scored[0].tmpl;
        } // end ε-greedy else
      }
      if(!takeFromPool(tmpl.id))break;
      if(p.purchasedSchools) p.purchasedSchools[tmpl.school]=true;
      var baseCount=0;
      for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===tmpl.id&&!p.board[j].isSkin)baseCount++;}
      if(baseCount>=2){
        var newBoard=[];var removed=0;
        for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===tmpl.id&&!p.board[j].isSkin&&removed<2){removed++;}else{newBoard.push(p.board[j]);}}
        p.board=newBoard;
        var skinUnit=makeMinion(tmpl,true);p.board.push(skinUnit);p.stone-=3;
        triggerBattlecry(skinUnit,p);
        aiDiscover(p);
      } else if(p.board.length<MAX_BOARD){
        var newUnit=makeMinion(tmpl,false);p.board.push(newUnit);p.stone-=3;
        triggerBattlecry(newUnit,p);
      } else {returnToPool(tmpl.id);break;}
    }

    // Phase 4b: triple reroll (board 풀 + gold 남음 + 2장 있는 unit)
    if(p.board.length>=MAX_BOARD&&p.stone>=4){
      var tripleNeed=null;
      var bc2={};for(var j=0;j<p.board.length;j++){if(!p.board[j].isSkin)bc2[p.board[j].baseId]=(bc2[p.board[j].baseId]||0)+1;}
      for(var bid in bc2){if(bc2[bid]>=2&&G.pool[bid]>0){tripleNeed=bid;break;}}
      if(tripleNeed&&p.stone>=4){ // 1 reroll + 3 buy
        // 풀에 남아있으면 reroll해서 찾을 chance 존재 — 최대 2회 reroll 시도
        var rerollAttempts=Math.min(2,Math.floor((p.stone-3)/1));
        for(var ra=0;ra<rerollAttempts;ra++){
          if(G.pool[tripleNeed]<=0) break;
          p.stone-=1; // reroll cost
          // reroll로 찾았다고 가정 (chance = pool수/allpool * shop수)
          var totalPool=0;for(var pid in G.pool)totalPool+=G.pool[pid];
          var findChance=G.pool[tripleNeed]/Math.max(1,totalPool)*SHOP_SIZE[p.tier];
          if(Math.random()<findChance&&takeFromPool(tripleNeed)){
            // triple 완성!
            var ttmpl=null;for(var j=0;j<CHARS.length;j++){if(CHARS[j].id===tripleNeed){ttmpl=CHARS[j];break;}}
            if(ttmpl){
              var nb=[];var rm=0;
              for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===tripleNeed&&!p.board[j].isSkin&&rm<2){rm++;}else{nb.push(p.board[j]);}}
              p.board=nb;
              var su=makeMinion(ttmpl,true);p.board.push(su);p.stone-=3;
              triggerBattlecry(su,p);aiDiscover(p);
            }
            break;
          }
        }
      }
    }

    // Phase 5: 매각+replace (개선된 버전)
    aiSellReplace(p,aiStrat,aiPool);

    // Phase 5b: 후반 Kasumi 정리 (Turn 12+, HP 20+, tier3 초과 card purchase 가능 시)
    if(G.turn>=12&&p.hp>=20){
      var _kIdx=-1;for(var _kj=0;_kj<p.board.length;_kj++){if(p.board[_kj].baseId==='kasumi'&&!p.board[_kj].isSkin){_kIdx=_kj;break;}}
      if(_kIdx>=0&&p.stone+1>=3){
        var _upgPool=aiPool.filter(function(c){return c.tier>3&&G.pool[c.id]>0&&c.id!=='kasumi';});
        var _bestUpg=null,_bestUpgSc=0;
        for(var _uj=0;_uj<_upgPool.length;_uj++){var _us=_upgPool[_uj].atk+_upgPool[_uj].hp+_upgPool[_uj].tier*1.5;if(DR_IDS[_upgPool[_uj].id])_us+=5;if(SOC_IDS[_upgPool[_uj].id])_us+=4;if(_us>_bestUpgSc){_bestUpgSc=_us;_bestUpg=_upgPool[_uj];}}
        if(_bestUpg&&_bestUpgSc>aiUnitScore(p.board[_kIdx])+2){
          returnToPool(p.board[_kIdx].baseId);p.stone+=1;p.board.splice(_kIdx,1);
          if(p.stone>=3&&takeFromPool(_bestUpg.id)){aiAddToBoardWithTriple(p,_bestUpg);p.stone-=3;}
        }
      }
    }

    // Phase 6: 잔여 gold 소비 (남은 gold로 주문)
    aiSpendRemainder(p);
    p.board=p.board.filter(function(u){return !!u;});
    aiSortBoard(p.board);

    // AI 7-star hiddencard check (정당한 condition + chance)
    aiCheckHidden(p);
  }
}

function aiCheckHidden(p) {
  if(p.dead||p.isPlayer) return;
  var eligible=checkHiddenConditionsFor(p);
  for(var h=0;h<eligible.length;h++){
    var hid=eligible[h];
    var rate=0.60;
    if(Math.random()<rate){
      var htmpl=findHiddenChar(hid);
      if(!htmpl||G.pool[htmpl.id]<=0) continue;
      takeFromPool(htmpl.id);
      G.hiddenCardsEverOwned[hid]=true;
      var unit=makeHiddenMinion(htmpl);
      // absorb형 process
      if(hid==='gehenna_prefect'){
        var absorb=['hina','iori','ako','chinatsu'];
        var bAtk=0,bHp=0,nb=[];
        for(var j=0;j<p.board.length;j++){
          if(absorb.indexOf(p.board[j].baseId)!==-1){bAtk+=p.board[j].atk;bHp+=p.board[j].hp;returnToPool(p.board[j].baseId,p.board[j].isSkin?3:1);}
          else nb.push(p.board[j]);
        }
        p.board=nb;unit.atk+=bAtk;unit.hp+=bHp;unit.maxHp=unit.hp;
      } else if(hid==='gehenna_pandemonium'){
        var absorb=['makoto','satsuki','iroha','ibuki','chiaki'];
        var bAtk=0,bHp=0,nb=[];
        for(var j=0;j<p.board.length;j++){
          if(absorb.indexOf(p.board[j].baseId)!==-1){bAtk+=p.board[j].atk;bHp+=p.board[j].hp;returnToPool(p.board[j].baseId,p.board[j].isSkin?3:1);}
          else nb.push(p.board[j]);
        }
        p.board=nb;unit.atk+=bAtk;unit.hp+=bHp;unit.maxHp=unit.hp;
      } else if(hid==='millennium_death_momoi'){
        var bAtk=0,bHp=0,nb=[];
        for(var j=0;j<p.board.length;j++){
          if(p.board[j].baseId==='momoi'){bAtk+=p.board[j].atk;bHp+=p.board[j].hp;returnToPool(p.board[j].baseId,p.board[j].isSkin?3:1);}
          else nb.push(p.board[j]);
        }
        p.board=nb;unit.atk+=bAtk;unit.hp+=bHp;unit.maxHp=unit.hp;
      } else if(hid==='gehenna_p68'){
        var absorb=['kayoko','mutsuki','haruka','aru'];
        var bAtk=0,bHp=0,nb=[];var p68A=[];
        for(var j=0;j<p.board.length;j++){
          if(absorb.indexOf(p.board[j].baseId)!==-1){
            bAtk+=p.board[j].atk;bHp+=p.board[j].hp;
            p68A.push({id:p.board[j].id,baseId:p.board[j].baseId,name:p.board[j].name,school:p.board[j].school,tier:p.board[j].tier,atk:p.board[j].atk,hp:p.board[j].hp,maxHp:p.board[j].hp,kw:(p.board[j].kw||[]).slice(),img:p.board[j].img,isSkin:p.board[j].isSkin||false});
            returnToPool(p.board[j].baseId,p.board[j].isSkin?3:1);
          }else nb.push(p.board[j]);
        }
        p.board=nb;unit.atk+=bAtk;unit.hp+=bHp;unit.maxHp=unit.hp;unit._p68Absorbed=p68A;G._p68Absorbed=p68A;
      } else if(hid==='millennium_seminar'){
        var absorb=['yuuka','noa','koyuki','rio'];
        var bAtk=0,bHp=0,nb=[];
        for(var j=0;j<p.board.length;j++){if(absorb.indexOf(p.board[j].baseId)!==-1){bAtk+=p.board[j].atk;bHp+=p.board[j].hp;returnToPool(p.board[j].baseId,p.board[j].isSkin?3:1);}else nb.push(p.board[j]);}
        p.board=nb;unit.atk+=bAtk;unit.hp+=bHp;unit.maxHp=unit.hp;
      } else if(hid==='millennium_cc'){
        var absorb=['neru','asuna','akane','karin','toki'];
        var bAtk=0,bHp=0,nb=[];
        for(var j=0;j<p.board.length;j++){if(absorb.indexOf(p.board[j].baseId)!==-1){bAtk+=p.board[j].atk;bHp+=p.board[j].hp;returnToPool(p.board[j].baseId,p.board[j].isSkin?3:1);}else nb.push(p.board[j]);}
        p.board=nb;unit.atk+=bAtk;unit.hp+=bHp;unit.maxHp=unit.hp;
      } else if(hid==='trinity_makeup'){
        var absorb=['hifumi','koharu','hanako','azusa'];
        var bAtk=0,bHp=0,nb=[];
        for(var j=0;j<p.board.length;j++){if(absorb.indexOf(p.board[j].baseId)!==-1){bAtk+=p.board[j].atk;bHp+=p.board[j].hp;returnToPool(p.board[j].baseId,p.board[j].isSkin?3:1);}else nb.push(p.board[j]);}
        p.board=nb;unit.atk+=bAtk;unit.hp+=bHp;unit.maxHp=unit.hp;
      } else if(hid==='trinity_justice'){
        var absorb=['hasumi','tsurugi','mashiro','ichika'];
        var bAtk=0,bHp=0,nb=[];
        for(var j=0;j<p.board.length;j++){if(absorb.indexOf(p.board[j].baseId)!==-1){bAtk+=p.board[j].atk;bHp+=p.board[j].hp;returnToPool(p.board[j].baseId,p.board[j].isSkin?3:1);}else nb.push(p.board[j]);}
        p.board=nb;unit.atk+=bAtk;unit.hp+=bHp;unit.maxHp=unit.hp;
      }
      if(p.board.length<MAX_BOARD) p.board.push(unit);
    }
  }
}

// ========== BATTLE ==========

// Battle Start 트리거 (battle start 전)
function triggerSOC(u, mySide, otherSide, log) {
  var id=u.baseId;
  if(id==='kayoko'){
    // skin: Taunt flip
    if(u.isSkin){
      for(var i=0;i<otherSide.length;i++){
        if(!otherSide[i].alive)continue;
        var ti=otherSide[i].kw.indexOf('taunt');
        if(ti!==-1){otherSide[i].kw.splice(ti,1);}
        else{otherSide[i].kw.push('taunt');}
      }
      log.push({cls:'soc',text:'[Battle Start] '+u.name+': enemy Taunt flipped!'});
    }
    // enemy 1st~5th placement reversed
    var aliveIdx=[];for(var i=0;i<otherSide.length;i++)if(otherSide[i].alive)aliveIdx.push(i);
    var toRev=aliveIdx.slice(0,5);
    if(toRev.length>1){
      var units=toRev.map(function(idx){return otherSide[idx];});
      units.reverse();
      for(var i=0;i<toRev.length;i++)otherSide[toRev[i]]=units[i];
      log.push({cls:'soc',text:'[Battle Start] '+u.name+': enemy 1~'+toRev.length+' placement reversed!'});
    }
  }
  else if(id==='mutsuki'&&u.isSkin){
    // New Year Mutsuki: Battle Start ATK +5
    u.atk+=5;
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': ATK +5! ('+u.atk+')'});
  }
  else if(id==='midori'){
    // Momoi 수만큼 buff (Maid면 수×+4/+4, 둘 다 Maid면 수×+8/+8)
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].baseId==='momoi'){
        var buff=(u.isSkin&&mySide[i].isSkin)?8:(u.isSkin||mySide[i].isSkin)?4:2;
        u.atk+=buff;u.hp+=buff;
        log.push({cls:'soc',text:'[Battle Start] '+u.name+': Momoi → +'+buff+'/+'+buff});
      }
    }
  }
  else if(id==='momoi'){
    // Midori 수만큼 buff
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].baseId==='midori'){
        var buff=(u.isSkin&&mySide[i].isSkin)?8:(u.isSkin||mySide[i].isSkin)?4:2;
        u.atk+=buff;u.hp+=buff;
        log.push({cls:'soc',text:'[Battle Start] '+u.name+': Midori → +'+buff+'/+'+buff});
      }
    }
  }
  else if(id==='mari'){
    var atkBuff=u.isSkin?3:2,hpBuff=u.isSkin?2:1;
    var mariBuffed=[];
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=atkBuff;mySide[i].hp+=hpBuff;mariBuffed.push(mySide[i].name+'('+mySide[i].atk+'/'+mySide[i].hp+')');}}
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': allied all +'+atkBuff+'/+'+hpBuff});
    if(mariBuffed.length>0) log.push({cls:'soc',text:'  → '+mariBuffed.join(', ')});
  }
  else if(id==='tsurugi'){
    var mult=u.isSkin?3:2;
    u.atk=u.atk*mult; u.hp=u.hp*mult;
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': ATK/HP '+mult+'x! ('+u.atk+'/'+u.hp+')'});
  }
  else if(id==='rio'){
    // allied all school most left allied 's school로 통일
    var leftSchool=null;
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive){leftSchool=mySide[i].school;break;}}
    if(leftSchool){
      G.rioSchool=leftSchool;
      for(var i=0;i<mySide.length;i++){if(mySide[i].alive)mySide[i].school=leftSchool;}
      log.push({cls:'soc',text:'[Battle Start] '+u.name+': allied all school '+leftSchool+'unified!'});
      if(u.isSkin){
        for(var i=0;i<otherSide.length;i++){if(otherSide[i].alive)otherSide[i].school='';}
        log.push({cls:'soc',text:'[Battle Start] '+u.name+': enemy school tags removed!'});
      }
    }
  }
  else if(id==='himari'){
    // 히Mari Battle Start: allied 2인(skin: all members)to random baseability keyword add (no duplicates, battle exclusive)
    var basicPool=['taunt','shield','poison','reborn','cleave','pierce','ranged','windfury','selfdestruct'];
    var hmTargets=[];
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i]!==u)hmTargets.push(mySide[i]);}
    hmTargets.sort(function(){return Math.random()-0.5;});
    var hmCount=u.isSkin?hmTargets.length:Math.min(2,hmTargets.length);
    for(var _hmi=0;_hmi<hmCount;_hmi++){
      var _hmt=hmTargets[_hmi];
      var avail=basicPool.filter(function(k){return !hasKw(_hmt,k);});
      if(avail.length===0)continue;
      var pick=avail[Math.floor(Math.random()*avail.length)];
      addKw(_hmt,pick);
      log.push({cls:'soc',text:'[Battle Start] '+u.name+': '+_hmt.name+'to '+(KW_LABELS[pick]||pick)+' grant!'});
    }
  }
  else if(id==='mine'){
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&hasKw(mySide[i],'taunt')&&mySide[i]!==u){
        mySide[i].kw.splice(mySide[i].kw.indexOf('taunt'),1);
      }
    }
    if(u.isSkin){
      for(var i=0;i<otherSide.length;i++){
        if(otherSide[i].alive&&hasKw(otherSide[i],'taunt')){
          otherSide[i].kw.splice(otherSide[i].kw.indexOf('taunt'),1);
        }
      }
      log.push({cls:'soc',text:'[Battle Start] '+u.name+': allied enemy Taunt all removed!'});
    } else {
      log.push({cls:'soc',text:'[Battle Start] '+u.name+': allied Taunt all removed!'});
    }
  }
  else if(id==='hibiki'){
    var debuff=u.isSkin?2:1;
    var hibikiKills=[];
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive&&!otherSide[i].abilityImmune){
        otherSide[i].atk=Math.max(1,otherSide[i].atk-debuff);
        otherSide[i].hp-=debuff;
        if(otherSide[i].hp<=0){otherSide[i].hp=0;otherSide[i].alive=false;otherSide[i]._killedBy=u;log.push({cls:'kill',text:otherSide[i].name+' was defeated by debuff!'});hibikiKills.push(otherSide[i]);}
      }
    }
    for(var i=0;i<hibikiKills.length;i++) triggerDeathrattle(hibikiKills[i],otherSide,mySide,log);
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': enemy all -'+debuff+'/-'+debuff});
  }
  else if(id==='makoto'){
    // Makoto → Airship으로 replace
    var allyCount=0;for(var i=0;i<mySide.length;i++)if(mySide[i].alive)allyCount++;
    var mult=u.isSkin?4:2;
    var as=makeToken('airship');
    as.atk=allyCount*mult;as.hp=allyCount*mult;as.alive=true;as.poisonImmune=false;
    as.isSkin=u.isSkin;as.school='Gehenna';as.baseId='airship';
    as.makotoGolden=u.isSkin; // Airship DR에서 Afro Makoto summon 시 참조
    var idx=-1;for(var i=0;i<mySide.length;i++)if(mySide[i]===u){idx=i;break;}
    if(idx!==-1)mySide[idx]=as;
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': Airshipreplaced! ('+as.atk+'/'+as.hp+', Self-destruct)'});
  }
  else if(id==='kasumi'){
    // Kasumi Battle Start: skin exclusive. most HP이 highest enemy을 이번 Turn attack target으로 예정
    if(!u.isSkin) return;
    var bestHp=0,bestTarget=null;
    for(var i=0;i<otherSide.length;i++){if(otherSide[i].alive&&otherSide[i].hp>bestHp){bestHp=otherSide[i].hp;bestTarget=otherSide[i];}}
    if(bestTarget){
      u._forcedTarget=bestTarget;
      log.push({cls:'soc',text:'[Battle Start] '+u.name+': '+bestTarget.name+'(HP:'+bestTarget.hp+')is targeted!'});
    }
  }
  else if(id==='ibuki'){
    // Ibuki Battle Start: Makoto/Chiaki/Satsuki/Iroha +5/+5
    var ibukiTargets=['makoto','chiaki','satsuki','iroha'];
    var ibukiBuff=u.isSkin?10:5;var ibukiCount=0;
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&ibukiTargets.indexOf(mySide[i].baseId)!==-1){
        mySide[i].atk+=ibukiBuff;mySide[i].hp+=ibukiBuff;ibukiCount++;
        log.push({cls:'soc',text:'  → [Battle Start] '+mySide[i].name+': +'+ibukiBuff+'/+'+ibukiBuff+' ('+mySide[i].atk+'/'+mySide[i].hp+')'});
      }
    }
    if(ibukiCount>0)log.push({cls:'soc',text:'[Battle Start] '+u.name+': '+ibukiCount+'to +'+ibukiBuff+'/+'+ibukiBuff+'!'});
    else log.push({cls:'soc',text:'[Battle Start] '+u.name+': target none'});
  }
  else if(id==='iori'){
    // Iori Battle Start: skin exclusive. ATK +5
    if(!u.isSkin) return;
    u.atk+=5;
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': ATK +5! ('+u.atk+')'});
  }
  else if(id==='hanako'){
    // Hanako Battle Start: skin exclusive. HP +5
    if(!u.isSkin) return;
    u.hp+=5;u.maxHp=(u.maxHp||u.hp)+5;
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': HP +5! ('+u.hp+')'});
  }
  else if(id==='pina'){
    // Pina Battle Start: skin exclusive. 자신to +2/+2
    if(!u.isSkin) return;
    u.atk+=2;u.hp+=2;u.maxHp=(u.maxHp||u.hp)+2;
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': +2/+2! ('+u.atk+'/'+u.hp+')'});
  }
  else if(id==='akane'){
    // Akane Battle Start: Neru/Karin/Asuna/Akane/Tokito C4 Deathrattle grant
    var akaneTargets=['neru','karin','asuna','akane','toki'];
    var akaneCount=0;
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&akaneTargets.indexOf(mySide[i].baseId)!==-1){
        mySide[i]._akaneC4DR=true;mySide[i]._akaneC4Golden=u.isSkin;akaneCount++;
        log.push({cls:'soc',text:'  → [Battle Start] '+mySide[i].name+': C4 Deathrattle grant'+(u.isSkin?' (golden×2)':'')});
      }
    }
    if(akaneCount>0)log.push({cls:'soc',text:'[Battle Start] '+u.name+': '+akaneCount+'to C4 Deathrattle grant!'});
  }
  else if(id==='kaya'){
    // 맨 left survive allied을 defeat리고 stats absorb (golden: x2)
    var target=null;
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i]!==u){target=mySide[i];break;}}
    if(target){
      var mult=u.isSkin?4:2;
      var gainAtk=target.atk*mult,gainHp=target.hp*mult;
      target.alive=false;target._killedBy=u;
      u.atk+=gainAtk;u.hp+=gainHp;
      log.push({cls:'soc',text:'[Battle Start] '+u.name+': '+target.name+'absorbed! +'+gainAtk+'/+'+gainHp});
      triggerDeathrattle(target,mySide,otherSide,log);
    }
  }
  // ===== 7-star hidden Battle Start =====
  else if(id==='gehenna_traingun'){
    // 열차포: opponent all에 6 Ranged damage × (1+survivebattle수)
    var repeat=1+(u._battlesSurvived||0);
    for(var r=0;r<repeat;r++){
      var trainKills=[];
      for(var i=0;i<otherSide.length;i++){
        if(otherSide[i].alive&&!otherSide[i].abilityImmune){
          otherSide[i].hp-=6;
          if(otherSide[i].hp<=0){otherSide[i].hp=0;otherSide[i].alive=false;otherSide[i]._killedBy=u;trainKills.push(otherSide[i]);}
        }
      }
      for(var i=0;i<trainKills.length;i++) triggerDeathrattle(trainKills[i],otherSide,mySide,log);
    }
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': opponent all 6 damage ×'+repeat+'!'});
  }
  else if(id==='trinity_nagisa'){
    // Nagisa: Mari(Idol)/Sakurako(Idol)/Mine(Idol)to +10/+10
    var targets=['mari','sakurako','mine'];
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].isSkin&&targets.indexOf(mySide[i].baseId)!==-1){
        mySide[i].atk+=10;mySide[i].hp+=10;
        log.push({cls:'soc',text:'[Battle Start] '+u.name+': '+mySide[i].name+' +10/+10!'});
      }
    }
  }
  else if(id==='millennium_nameless'){
    // 왕녀: 자신 destroy → atk+hp 순차 damage (Shield ignore, HP에 직접)
    var totalDmg=u.atk+u.hp;
    u.alive=false;
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': self-destructs! '+totalDmg+' sequential damage! (Shield ignore)'});
    var alive=[];for(var i=0;i<otherSide.length;i++)if(otherSide[i].alive)alive.push(otherSide[i]);
    var remaining=totalDmg;
    for(var i=0;i<alive.length&&remaining>0;i++){
      var enemy=alive[i];
      if(enemy.abilityImmune) continue;
      // Shield ignore: HP에 직접 damage
      if(enemy.hp<=remaining){
        remaining-=enemy.hp;enemy.hp=0;enemy.alive=false;
        log.push({cls:'kill',text:enemy.name+'has been defeated! (remaining: '+remaining+')'});
        triggerDeathrattle(enemy,otherSide,mySide,log);
      } else {
        enemy.hp-=remaining;
        log.push({cls:'hit',text:enemy.name+'to '+remaining+' damage! (HP:'+enemy.hp+')'});
        remaining=0;
      }
    }
  }
  else if(id==='hkyk_kuzunoha'){
    // Kuzunoha: enemy Venomous remove + permanent 차단 플래그 + allied Hyakkiyako Venomous grant
    G.kuzunohaActive=true;
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive&&hasKw(otherSide[i],'poison')){
        otherSide[i].kw.splice(otherSide[i].kw.indexOf('poison'),1);
      }
    }
    var poisonGranted=[];
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].school==='Hyakkiyako'){addKw(mySide[i],'poison');poisonGranted.push(mySide[i].name);}
    }
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': enemy Venomous permanentlyly blocked! allied Hyakkiyako all Venomous!'});
    if(poisonGranted.length>0) log.push({cls:'soc',text:'  → Venomous grant: '+poisonGranted.join(', ')});
  }
  else if(id==='millennium_death_momoi'){
    // 데스 Momoi Battle Start: enemy all Taunt remove
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive&&hasKw(otherSide[i],'taunt')){
        otherSide[i].kw.splice(otherSide[i].kw.indexOf('taunt'),1);
      }
    }
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': enemy all Taunt remove!'});
  }
  // ===== new 7-star Battle Start =====
  else if(id==='gehenna_p68'){
    // 흥신소 68: opponent 배치 완games 역순 + 비Taunt 강제 타겟
    var aliveIdx=[];for(var i=0;i<otherSide.length;i++)if(otherSide[i].alive)aliveIdx.push(i);
    if(aliveIdx.length>1){
      var units=aliveIdx.map(function(idx){return otherSide[idx];});
      units.reverse();
      for(var i=0;i<aliveIdx.length;i++)otherSide[aliveIdx[i]]=units[i];
    }
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': opponent formation completely reversed!'});
    var nonTaunt=[];
    for(var i=0;i<otherSide.length;i++){if(otherSide[i].alive&&!hasKw(otherSide[i],'taunt'))nonTaunt.push(otherSide[i]);}
    if(nonTaunt.length>0){
      var pick=nonTaunt[Math.floor(Math.random()*nonTaunt.length)];
      u._forcedTarget=pick;
      log.push({cls:'soc',text:'[Battle Start] '+u.name+': '+pick.name+'forced target!'});
    }
  }
  else if(id==='trinity_justice'){
    // 정의실현부: 공체 3배
    u.atk*=3;u.hp*=3;
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': ATK/HP 3x! ('+u.atk+'/'+u.hp+')'});
  }
  else if(id==='millennium_seminar'){
    // Millennium Seminar: opponent ability 수집 → remove → 공체 swap → ability copy
    var basicKws=['taunt','shield','reborn','invincible','windfury','cleave','poison','pierce','ranged','selfdestruct'];
    var collectedBasic=[];
    var collectedSpecial=[];
    // 수집
    for(var i=0;i<otherSide.length;i++){
      var e=otherSide[i];if(!e.alive)continue;
      // base keyword 수집
      for(var k=0;k<e.kw.length;k++){
        if(basicKws.indexOf(e.kw[k])!==-1&&collectedBasic.indexOf(e.kw[k])===-1) collectedBasic.push(e.kw[k]);
      }
      // 특수ability 수집
      var eid=e.baseId;
      if(SOC_IDS[eid]&&collectedSpecial.indexOf(eid+'_soc')===-1) collectedSpecial.push({baseId:eid,type:'soc'});
      if(BC_IDS[eid]&&collectedSpecial.indexOf(eid+'_bc')===-1) collectedSpecial.push({baseId:eid,type:'bc'});
      if(DR_IDS[eid]&&collectedSpecial.indexOf(eid+'_dr')===-1) collectedSpecial.push({baseId:eid,type:'dr'});
      if(SURV_IDS[eid]&&collectedSpecial.indexOf(eid+'_surv')===-1) collectedSpecial.push({baseId:eid,type:'surv'});
      if(PRE_IDS[eid]&&collectedSpecial.indexOf(eid+'_pre')===-1) collectedSpecial.push({baseId:eid,type:'pre'});
      if(PASSIVE_IDS[eid]&&collectedSpecial.indexOf(eid+'_passive')===-1) collectedSpecial.push({baseId:eid,type:'passive'});
    }
    // opponent all ability remove (인라인)
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive){
        var _t=otherSide[i],_rm=[],_kp=[];
        for(var _k=0;_k<_t.kw.length;_k++){if(_t.kw[_k]==='preemptive')_kp.push(_t.kw[_k]);else _rm.push(KW_LABELS[_t.kw[_k]]||_t.kw[_k]);}
        _t.kw=_kp;_t._abilitiesStripped=true;
        if(_rm.length>0)log.push({cls:'kill',text:'[Battle Start] Seminar: '+_t.name+'\'s ability removed: '+_rm.join(', ')});
      }
    }
    // opponent all ATK/HP swap
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive){
        var tmpA=otherSide[i].atk;otherSide[i].atk=otherSide[i].hp;otherSide[i].hp=tmpA;
        log.push({cls:'soc',text:'[Battle Start] Seminar: '+otherSide[i].name+' ATK/HP swap → '+otherSide[i].atk+'/'+otherSide[i].hp});
      }
    }
    // base ability copied (최대 3개)
    var shuffledBasic=collectedBasic.sort(function(){return Math.random()-0.5;});
    var copyBasicCount=Math.min(3,shuffledBasic.length);
    for(var i=0;i<copyBasicCount;i++){
      addKw(u,shuffledBasic[i]);
      log.push({cls:'soc',text:'[Battle Start] Seminar: base ability copied → '+(KW_LABELS[shuffledBasic[i]]||shuffledBasic[i])});
    }
    // special ability copied (최대 3개)
    var shuffledSpecial=collectedSpecial.sort(function(){return Math.random()-0.5;});
    var copySpecialCount=Math.min(3,shuffledSpecial.length);
    u._copiedAbilities=[];
    for(var i=0;i<copySpecialCount;i++){
      u._copiedAbilities.push(shuffledSpecial[i]);
      var _spName=(findAnyChar(shuffledSpecial[i].baseId)||{}).name||shuffledSpecial[i].baseId;
      var _spType={soc:'Battle Start',dr:'Deathrattle',surv:'Survive',pre:'Preemptive',bc:'Battlecry',passive:'Passive'}[shuffledSpecial[i].type]||shuffledSpecial[i].type;
      log.push({cls:'soc',text:'[Battle Start] Seminar: special ability copied → '+_spName+' ('+_spType+')'});
    }
    // copy된 Battle Start 즉시 trigger
    for(var i=0;i<u._copiedAbilities.length;i++){
      var ca=u._copiedAbilities[i];
      if(ca.type==='soc'){
        var proxy={baseId:ca.baseId,name:u.name,atk:u.atk,hp:u.hp,kw:u.kw,alive:u.alive,isSkin:u.isSkin,school:u.school,sid:u.sid,_mySide:u._mySide,_forcedTarget:u._forcedTarget,_copiedAbilities:null};
        triggerSOC(proxy,mySide,otherSide,log);
        u.atk=proxy.atk;u.hp=proxy.hp;u._forcedTarget=proxy._forcedTarget;
      }
    }
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': opponent abilities removed + ATK/HP swapped + abilities copied!'});
  }
  // 미치�� Battle Start: allied Hyakkiyako random 1to Ambush grant
  else if(id==='eimi'){
    var milCount=0;
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i].school==='Millennium')milCount++;}
    var buff=u.isSkin?milCount*2:milCount;
    u.atk+=buff;u.hp+=buff;
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': Millennium '+milCount+' → +'+buff+'/+'+buff});
  }
  else if(id==='michiru'){
    var hkykAlive=[];
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].school==='Hyakkiyako'&&mySide[i]!==u&&!hasKw(mySide[i],'ambush'))
        hkykAlive.push(mySide[i]);
    }
    var targets=u.isSkin?2:1;
    for(var t=0;t<targets&&hkykAlive.length>0;t++){
      var pick=Math.floor(Math.random()*hkykAlive.length);
      var chosen=hkykAlive.splice(pick,1)[0];
      addKw(chosen,'ambush');
      log.push({cls:'soc',text:'[Battle Start] '+u.name+': '+chosen.name+'granted Ambush!'});
    }
  }
  else if(id==='nonomi'){
    // Nonomi Battle Start: Schale에 존재한 이후 소비된 pyroxene / 2 (내림)를 맨 left student ATK/HP에 add
    var nonomiStone=u.isSkin?(G.nonomiStoneSinceJoined||0):Math.floor((G.nonomiStoneSinceJoined||0)/2);
    if(nonomiStone>0&&mySide.length>0){
      var leftmost=null;
      for(var _nli=0;_nli<mySide.length;_nli++){if(mySide[_nli].alive){leftmost=mySide[_nli];break;}}
      if(leftmost){
        leftmost.atk+=nonomiStone;leftmost.hp+=nonomiStone;
        log.push({cls:'soc',text:'[Battle Start] '+u.name+': '+leftmost.name+'to +'+nonomiStone+'/+'+nonomiStone+' (spent pyroxene '+(G.nonomiStoneSinceJoined||0)+(u.isSkin?'':'  half')+')'});
      }
    } else {
      log.push({cls:'soc',text:'[Battle Start] '+u.name+': spent pyroxene none (0)'});
    }
  }
  else if(id==='mina'){
    // Mina Battle Start: allied all -1/-1
    for(var _mi=0;_mi<mySide.length;_mi++){
      if(mySide[_mi].alive&&!mySide[_mi].abilityImmune){mySide[_mi].atk=Math.max(1,mySide[_mi].atk-1);mySide[_mi].hp-=1;
        if(mySide[_mi].hp<=0){mySide[_mi].hp=1;}}
    }
    log.push({cls:'soc',text:'[Battle Start] '+u.name+': allied all -1/-1!'});
  }
  else if(id==='rumi'){
    // Rumi Battle Start: 자신 's baseability을 allied 1인(skin:2인)to copy
    var rumiKw=u.kw.filter(function(k){return k!=='survive'&&k!=='preemptive';});
    if(rumiKw.length>0){
      // 새 keyword를 받을 수 있는 target 우선 select
      var rumiCandsAll=[];var rumiCandsNew=[];
      for(var _ri=0;_ri<mySide.length;_ri++){
        if(!mySide[_ri].alive||mySide[_ri]===u||mySide[_ri].abilityImmune)continue;
        rumiCandsAll.push(mySide[_ri]);
        var _hasNew=false;for(var _rk=0;_rk<rumiKw.length;_rk++){if(mySide[_ri].kw.indexOf(rumiKw[_rk])===-1){_hasNew=true;break;}}
        if(_hasNew)rumiCandsNew.push(mySide[_ri]);
      }
      var rumiCands=rumiCandsNew.length>0?rumiCandsNew:rumiCandsAll;
      var rumiCount=u.isSkin?2:1;
      for(var _rc=0;_rc<rumiCount&&rumiCands.length>0;_rc++){
        var _rIdx=Math.floor(Math.random()*rumiCands.length);
        var rumiTarget=rumiCands.splice(_rIdx,1)[0];
        for(var _rk=0;_rk<rumiKw.length;_rk++){if(rumiTarget.kw.indexOf(rumiKw[_rk])===-1)rumiTarget.kw.push(rumiKw[_rk]);}
        log.push({cls:'soc',text:'[Battle Start] '+u.name+': '+rumiTarget.name+'to '+rumiKw.join(',')+' grant!'});
      }
    }
  }
  else if(id==='Shiroko_Terror'){
    // Shiroko Terror Battle Start: enemy most HP highest 1인 + 자신을 제외한 모든 student defeat림
    // 1. enemy에서 최고 HP 1인 선정
    var maxEnemyHp=-1;
    for(var _sti=0;_sti<otherSide.length;_sti++){
      if(otherSide[_sti].alive&&otherSide[_sti].hp>maxEnemyHp) maxEnemyHp=otherSide[_sti].hp;
    }
    var topEnemies=[];
    for(var _sti=0;_sti<otherSide.length;_sti++){
      if(otherSide[_sti].alive&&otherSide[_sti].hp===maxEnemyHp) topEnemies.push(otherSide[_sti]);
    }
    var spared=topEnemies.length>0?topEnemies[Math.floor(Math.random()*topEnemies.length)]:null;
    // trigger 시점 unit 스냅샷 (DR로 add되는 unit은 target에서 제외)
    var allyTargets=mySide.filter(function(m){return m.alive&&m!==u;});
    var enemyTargets=otherSide.filter(function(m){return m.alive&&m!==spared;});
    // 2. allied 자신 제외 all kill (먼저 — DR로 귀환할 student들이 다시 죽지 않도록)
    for(var _sti=0;_sti<allyTargets.length;_sti++){
      allyTargets[_sti].hp=0;allyTargets[_sti].alive=false;allyTargets[_sti]._killedBy=u;
      log.push({cls:'kill',text:'[Battle Start] '+u.name+': allied '+allyTargets[_sti].name+' kill!'});
      triggerDeathrattle(allyTargets[_sti],mySide,otherSide,log);
    }
    // 3. enemy all (최고HP 1인 제외) kill
    for(var _sti=0;_sti<enemyTargets.length;_sti++){
      enemyTargets[_sti].hp=0;enemyTargets[_sti].alive=false;enemyTargets[_sti]._killedBy=u;
      log.push({cls:'kill',text:'[Battle Start] '+u.name+': '+enemyTargets[_sti].name+' kill!'});
      triggerDeathrattle(enemyTargets[_sti],otherSide,mySide,log);
    }
    if(spared) log.push({cls:'soc',text:'[Battle Start] '+u.name+': '+spared.name+'survived! (HP '+spared.hp+')'});
  }
}

// Rio Battle Start용: battle 시 Battlecry effect (임시 buff, battle 후 원복)
// 린 Passive: BC add로 trigger
function getShizukoExtra(side){
  var extra=0;
  for(var i=0;i<side.length;i++){if(side[i].alive&&side[i].baseId==='shizuko')extra+=side[i].isSkin?2:1;}
  return extra;
}
function triggerSOC_battlecry(u, mySide, log) {
  var id=u.baseId;
  var linRepeat=1+getLinExtra(mySide)+getShizukoExtra(mySide);
  for(var _lr=0;_lr<linRepeat;_lr++){
    if(id==='izuna'){
      var atkB=u.isSkin?2:1,hpB=u.isSkin?2:1;
      for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=atkB;mySide[i].hp+=hpB;}}
      log.push({cls:'soc',text:'  → '+u.name+': allied all +'+atkB+'/+'+hpB+(_lr>0?' (addtrigger)':'')});
    }
    else if(id==='tsukuyo'){
      var atkB2=u.isSkin?2:1,hpB2=u.isSkin?4:2;
      for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=atkB2;mySide[i].hp+=hpB2;}}
      log.push({cls:'soc',text:'  → '+u.name+': allied all +'+atkB2+'/+'+hpB2+(_lr>0?' (addtrigger)':'')});
    }
    else if(id==='tsubaki'){
      var buff=u.isSkin?4:2;
      for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i].school==='Hyakkiyako'){mySide[i].atk+=buff;mySide[i].hp+=buff;}}
      log.push({cls:'soc',text:'  → '+u.name+': Hyakkiyako +'+buff+'/+'+buff+(_lr>0?' (addtrigger)':'')});
    }
    else if(id==='michiru'){
      // allied Hyakkiyako(자신 제외) BC chain (Michiru 재귀 prevent)
      var mRepeat=u.isSkin?2:1;
      for(var mr=0;mr<mRepeat;mr++){
        for(var i=0;i<mySide.length;i++){
          if(mySide[i].alive&&mySide[i].baseId!=='michiru'&&mySide[i].school==='Hyakkiyako'&&BC_IDS[mySide[i].baseId]){
            triggerSOC_battlecry_inner(mySide[i],mySide,log);
          }
        }
      }
      log.push({cls:'soc',text:'  → '+u.name+': Hyakkiyako BC chain!'+(_lr>0?' (addtrigger)':'')});
    }
  }
}
// Michiru chain용 내부 함수 (Shizuko/린 증폭 없이 1회)
function triggerSOC_battlecry_inner(u, mySide, log){
  var id=u.baseId;
  if(id==='izuna'){var atkB=u.isSkin?2:1,hpB=u.isSkin?2:1;for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=atkB;mySide[i].hp+=hpB;}}log.push({cls:'soc',text:'    → '+u.name+': allied all +'+atkB+'/+'+hpB+' (chain)'});}
  else if(id==='tsukuyo'){var atkB2=u.isSkin?2:1,hpB2=u.isSkin?4:2;for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=atkB2;mySide[i].hp+=hpB2;}}log.push({cls:'soc',text:'    → '+u.name+': allied all +'+atkB2+'/+'+hpB2+' (chain)'});}
  else if(id==='tsubaki'){var buff=u.isSkin?4:2;for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i].school==='Hyakkiyako'){mySide[i].atk+=buff;mySide[i].hp+=buff;}}log.push({cls:'soc',text:'    → '+u.name+': Hyakkiyako +'+buff+'/+'+buff+' (chain)'});}
}

function resolveStartOfCombat(a, b, log) {
  var aFirst=(a.length>b.length)?true:(b.length>a.length)?false:(Math.random()<0.5);
  function processSide(side, other){
    // Kuzunoha: 모든 Battle Start보다 먼저 trigger — 자신+enemy1번 제외 all members effectremove+kill
    for(var i=0;i<side.length;i++){
      if(side[i].alive&&side[i].baseId==='hkyk_kuzunoha'){
        log.push({cls:'soc',text:'[Battle Start] '+side[i].name+': Enlightenment Strike!'});
        // allied: Kuzunoha 제외 all members kill
        for(var j=0;j<side.length;j++){
          if(j!==i&&side[j].alive){
            stripAbilities(side[j],log);
            side[j].hp=0;side[j].alive=false;
            log.push({cls:'kill',text:side[j].name+'has been defeated!'});
          }
        }
        // enemy: 1번(인덱스 0) 제외 all members kill
        var firstEnemy=true;
        for(var j=0;j<other.length;j++){
          if(other[j].alive){
            if(firstEnemy){firstEnemy=false;continue;} // spare first one
            stripAbilities(other[j],log);
            other[j].hp=0;other[j].alive=false;
            log.push({cls:'kill',text:other[j].name+'has been defeated!'});
          }
        }
        break;
      }
    }
    // Rio: 다른 모든 Battle Start보다 먼저 trigger (school 통일)
    for(var i=0;i<side.length;i++){
      if(side[i].alive&&side[i].baseId==='rio') triggerSOC(side[i],side,other,log);
    }
    // Sakurako: Trinity Battle Start add count 합산 (일반 +1, golden +2, 중첩 가능)
    var trinityRepeat=1;
    for(var i=0;i<side.length;i++){
      if(side[i].alive&&side[i].baseId==='sakurako'){
        var extra=side[i].isSkin?2:1;
        trinityRepeat+=extra;
        log.push({cls:'soc',text:'[Battle Start] '+side[i].name+': Trinity Battle Start +'+extra+'hits!'});
      }
    }
    for(var i=0;i<side.length;i++){
      if(!side[i].alive||!SOC_IDS[side[i].baseId]||side[i].baseId==='sakurako'||side[i].baseId==='kaya'||side[i].baseId==='tsurugi'||side[i].baseId==='rio'||side[i].baseId==='hkyk_kuzunoha') continue;
      var repeat=(side[i].school==='Trinity')?trinityRepeat:1;
      for(var r=0;r<repeat;r++) triggerSOC(side[i],side,other,log);
    }
    // Tsurugi: 다른 Battle Start effect를 모두 받은 후 Last에 trigger (카야 제외)
    for(var i=0;i<side.length;i++){
      if(side[i].alive&&side[i].baseId==='tsurugi') triggerSOC(side[i],side,other,log);
    }
    // 카야는 Battle Start 중 most Last에 trigger
    for(var i=0;i<side.length;i++){
      if(side[i].alive&&side[i].baseId==='kaya') triggerSOC(side[i],side,other,log);
    }
  }
  if(aFirst){processSide(a,b);processSide(b,a);}
  else{processSide(b,a);processSide(a,b);}
  // Battle Start complete 후 7-star hidden character 대사 출력
  var quotedBids={};
  function outputQuotes(side,isEnemy){
    for(var i=0;i<side.length;i++){
      var u=side[i];
      if(!u.isHidden||quotedBids[u.baseId]) continue;
      var info=ABILITY_DESCS[u.baseId];
      if(info&&info.quote){
        quotedBids[u.baseId]=true;
        var baseCls=info.quoteCls?('chat '+info.quoteCls):'chat';
        var cls=isEnemy?(baseCls+' chat-fatal'):baseCls;
        log.push({cls:cls,text:info.quote});
        if(info.quote2) log.push({cls:isEnemy?'chat chat-fatal':'chat',text:info.quote2});
      }
    }
  }
  // 백화요란 Succession 대사: buff 받은 Nagusa allied에 있을 때
  function outputShowdownQuote(side,isEnemy){
    if(!G.hiddenCardsEverOwned||!G.hiddenCardsEverOwned['hkyk_showdown']) return;
    var hasKeiseisen=false;
    for(var i=0;i<side.length;i++){if(side[i].alive&&side[i].baseId==='nagusa'){hasKeiseisen=true;break;}}
    if(hasKeiseisen&&!quotedBids['hkyk_showdown']){
      quotedBids['hkyk_showdown']=true;
      var cls=isEnemy?'chat chat-fatal':'chat';
      log.push({cls:cls,text:'Nagusa: Waiting for the moment when a hundred flowers bloom together.'});
      log.push({cls:cls,text:'Nagusa: ...I challenge you to the Succession.'});
    }
  }
  // enemy에 7-star card 존재 시 빨간 경고
  if(b.some(function(u){return u.isHidden;}))
    log.push({cls:'chat chat-fatal',text:'⚠ Enemy has a 7-star card!'});
  if(aFirst){outputQuotes(a,false);outputShowdownQuote(a,false);outputQuotes(b,true);outputShowdownQuote(b,true);}
  else{outputQuotes(b,true);outputShowdownQuote(b,true);outputQuotes(a,false);outputShowdownQuote(a,false);}
}

// Deathrattle 트리거
function countAlive(side){var c=0;for(var i=0;i<side.length;i++)if(side[i].alive)c++;return c;}

function triggerDeathrattle(unit, mySide, otherSide, log) {
  var id=unit.baseId;
  // Fanchan death counter (Juri Deathrattle용)
  if(id==='panchan') mySide._panchanDeaths=(mySide._panchanDeaths||0)+1;
  // Toramaru(Iroha 변신)는 baseId 'iroha'지만 Toramaru DR이 있음
  if(unit.irohaRef) id='toramaru';
  // Akane C4 grant Deathrattle (린 반복 포함)
  if(unit._akaneC4DR&&!unit._abilitiesStripped&&!G.permanentAbilityBan){
    var c4LinRepeat=1+getLinExtra(mySide);
    for(var _c4lr=0;_c4lr<c4LinRepeat;_c4lr++){
      var c4Count=unit._akaneC4Golden?2:1;
      for(var _c4=0;_c4<c4Count;_c4++){
        if(countAlive(mySide)<BATTLE_MAX){
          var c4tk=makeToken('c4');c4tk.alive=true;c4tk.poisonImmune=false;c4tk._mySide=mySide;
          applyEimiBonus(c4tk,mySide);
          mySide.push(c4tk);
          log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': C4 summon! ('+c4tk.atk+'/'+c4tk.hp+')'+(_c4lr>0?' (Lin add)':'')});
        } else {
          log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': C4 summon fail (field full)'});
        }
      }
    }
  }
  // Nagusa Passive: 자신을 defeat린 opponent를 defeat림
  if(id==='trinity_nagisa'&&unit._killedBy){
    var killer=unit._killedBy;
    if(killer.alive&&!killer.abilityImmune&&!killer._sayaImmune&&!killer._effectImmune){
      killer.hp=0;killer.alive=false;
      log.push({cls:'kill',text:'[Passive] '+unit.name+': '+killer.name+'was defeated!'});
      triggerDeathrattle(killer,otherSide,mySide,log);
    }
  }
  var hasCopiedDR=unit._copiedAbilities&&unit._copiedAbilities.some(function(c){return c.type==='dr';});
  if(!DR_IDS[id]&&!unit._akaneC4DR&&!hasCopiedDR) return;
  if(unit._abilitiesStripped) return;
  if(G.permanentAbilityBan) return;
  if(DR_IDS[id]){
    var linRepeat=1+getLinExtra(mySide);
    for(var _lr=0;_lr<linRepeat;_lr++){
      _doDR(unit,mySide,otherSide,log);
    }
  }
  // Seminar copy DR 실행
  if(hasCopiedDR&&!unit._drProxyRunning){
    unit._drProxyRunning=true;
    for(var _ca=0;_ca<unit._copiedAbilities.length;_ca++){
      var ca=unit._copiedAbilities[_ca];
      if(ca.type==='dr'){
        var proxy={baseId:ca.baseId,name:unit.name,atk:unit.atk,hp:unit.hp,kw:unit.kw,alive:unit.alive,isSkin:unit.isSkin,school:unit.school,sid:unit.sid,_mySide:mySide,_copiedAbilities:null,_akaneC4DR:false};
        _doDR(proxy,mySide,otherSide,log);
      }
    }
    unit._drProxyRunning=false;
  }
}
function _doDR(unit, mySide, otherSide, log) {
  var id=unit.baseId;
  if(unit.irohaRef) id='toramaru';

  if(id==='juri'){
    // Juri Deathrattle: 다른 allied이 남아 있다면 Fanchan summon
    var allyCount=0;
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i]!==unit)allyCount++;}
    if(allyCount>0){
      var pcCount=unit.isSkin?2:1;
      var bonus=mySide._panchanDeaths||0;
      for(var pc_i=0;pc_i<pcCount;pc_i++){
        if(countAlive(mySide)>=BATTLE_MAX) break;
        var pc={id:'panchan_'+Math.random().toString(36).substr(2,4),baseId:'panchan',isToken:true,
          name:'Panchan',school:G.rioSchool||'Gehenna',tier:1,atk:1+bonus,hp:1+bonus,kw:[],img:'token/panchan.png',isSkin:false,alive:true,poisonImmune:false};
        pc._mySide=mySide;
        mySide.push(pc);
        log.push({cls:'soc',text:'[Deathrattle] '+unit.name+' → Fanchan summon! ('+pc.atk+'/'+pc.hp+')'});
      }
    } else {
      log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': No other allies — couldn\'t summon Fanchan!'});
    }
  }
  else if(id==='chinatsu'){
    // allied random 1인to Shield grant (skin도 1인 동일)
    var candidates=[];
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&!hasKw(mySide[i],'shield'))candidates.push(mySide[i]);}
    if(candidates.length>0){
      var pick=candidates[Math.floor(Math.random()*candidates.length)];
      addKw(pick,'shield');
      log.push({cls:'shield',text:'[Deathrattle] '+unit.name+': '+pick.name+'granted Shield!'});
    }
  }
  else if(id==='kasumi'||id==='nagusa'){
    // Kasumi/Nagusa를 죽인 opponent를 defeat림 (Reborn 존중)
    // killUnit은 runBattle 스코프 안이라 여기서 접근 불 → 인라인 process
    if(unit._killedBy){
      var killer=unit._killedBy;
      var _immune=killer.abilityImmune||killer._sayaImmune||killer._effectImmune;
      if(killer.alive&&!_immune){
        log.push({cls:'kill',text:'[Deathrattle] '+unit.name+': '+killer.name+'was defeated!'});
        killer.hp=0;
        if(hasKw(killer,'reborn')){
          killer.kw.splice(killer.kw.indexOf('reborn'),1);
          killer.hp=(killer.isSkin&&killer.baseId==='reisa')?(killer._reisaFullHp||killer.maxHp||1):1;
          log.push({cls:'shield',text:killer.name+'has been Reborn! (HP:'+killer.hp+')'});
          triggerDeathrattle(killer,otherSide,mySide,log);
        } else {
          killer.alive=false;
          killer._killedBy=unit;
          triggerDeathrattle(killer,otherSide,mySide,log);
        }
      } else if(killer.alive&&_immune){
        log.push({cls:'shield',text:killer.name+': immune! (effect death nullified)'});
      }
    }
  }
  else if(id==='ako'){
    var buff=unit.isSkin?10:5;
    var akoBuffed=[];
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i].school==='Gehenna'){mySide[i].atk+=buff;mySide[i].hp+=buff;akoBuffed.push(mySide[i].name+'('+mySide[i].atk+'/'+mySide[i].hp+')');}}
    // 'during this battle' 지속 buff 등록 — battle 중 새로 등장하는 Gehenna student에게도 enemy용
    G.battleSchoolBuff['Gehenna']=(G.battleSchoolBuff['Gehenna']||0)+buff;
    log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': allied Gehenna +'+buff+'/+'+buff});
    if(akoBuffed.length>0) log.push({cls:'soc',text:'  → '+akoBuffed.join(', ')});
  }
  else if(id==='kazusa'){
    if(countAlive(mySide)>=BATTLE_MAX) return;
    var atk=unit.isSkin?6:4,hp2=unit.isSkin?4:3;
    var cp={id:'cp_'+Math.random().toString(36).substr(2,4),baseId:'cathpalug',isToken:true,
      name:'Cath Palug',school:G.rioSchool||'Trinity',tier:6,atk:atk,hp:hp2,kw:[],img:'token/CathPalug.png',isSkin:false,alive:true,poisonImmune:false};
    mySide.push(cp);
    log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': Kaspalus summoned! ('+atk+'/'+hp2+')'});
  }
  else if(id==='hifumi'){
    if(countAlive(mySide)>=BATTLE_MAX) return;
    var pAtk=unit.isSkin?4:2,pHp=unit.isSkin?2:1;
    var pero={id:'pero_'+Math.random().toString(36).substr(2,4),baseId:'perorosama',isToken:true,
      name:'Peroro-sama',school:G.rioSchool||'Trinity',tier:3,atk:pAtk,hp:pHp,kw:[],img:'token/perorosama.png',isSkin:false,alive:true,poisonImmune:false,
      peroKillToHifumi:true,srcGolden:unit.isSkin};
    mySide.push(pero);
    log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': Peroro-sama summon! ('+pAtk+'/'+pHp+')'});
  }
  else if(id==='azusa'){
    var debuff=unit.isSkin?4:2;
    var azusaDebuffed=[];
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive&&!otherSide[i].abilityImmune){
        otherSide[i].atk=Math.max(1,otherSide[i].atk-debuff);
        otherSide[i].hp-=debuff;
        azusaDebuffed.push(otherSide[i].name+'('+otherSide[i].atk+'/'+Math.max(0,otherSide[i].hp)+')');
      }
    }
    log.push({cls:'kill',text:'[Deathrattle] '+unit.name+': enemy all -'+debuff+'/-'+debuff});
    if(azusaDebuffed.length>0) log.push({cls:'kill',text:'  → '+azusaDebuffed.join(', ')});
    // 디buff로 death 즉시 process + 죽메 trigger
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].hp<=0&&otherSide[i].alive){
        otherSide[i].alive=false;
        log.push({cls:'kill',text:otherSide[i].name+' was defeated by debuff!'});
        triggerDeathrattle(otherSide[i],otherSide,mySide,log);
      }
    }
  }
  else if(id==='toramaru'){
    // Iroha summon (irohaRef 기반, 1회만 — Lin addtrigger ignore)
    if(unit.irohaRef&&!unit._irohaReturned){
      unit._irohaReturned=true;
      var isGold=unit.irohaRef.isSkin;
      var tmpl=null;for(var i=0;i<CHARS.length;i++)if(CHARS[i].id==='iroha'){tmpl=CHARS[i];break;}
      if(tmpl&&countAlive(mySide)<BATTLE_MAX){
        var newIroha={id:'iroha_'+Math.random().toString(36).substr(2,4),baseId:'iroha',
          name:isGold?tmpl.skin:tmpl.name,school:tmpl.school,tier:tmpl.tier,
          atk:isGold?tmpl.atk*2+1:tmpl.atk,hp:isGold?tmpl.hp*2+1:tmpl.hp,
          kw:(tmpl.kw||[]).slice(),isSkin:isGold,img:isGold?tmpl.imgGold:tmpl.img,
          alive:true,poisonImmune:false,baseId:'iroha'};
        if(G.battleSchoolBuff&&G.battleSchoolBuff[newIroha.school]){
          var sbuff=G.battleSchoolBuff[newIroha.school];
          newIroha.atk+=sbuff;newIroha.hp+=sbuff;
        }
        mySide.push(newIroha);
        log.push({cls:'soc',text:'[Deathrattle] Toramaru: '+newIroha.name+' summon! ('+newIroha.atk+'/'+newIroha.hp+')'});
        if(G.battleSchoolBuff&&G.battleSchoolBuff[newIroha.school]&&G.battleSchoolBuff[newIroha.school]>0) log.push({cls:'soc',text:'  → in-battle school buff applied: +'+G.battleSchoolBuff[newIroha.school]+'/+'+G.battleSchoolBuff[newIroha.school]});
      }
    }
  }
  else if(id==='junko'){
    // Deathrattle: 쓰러질 때 Dango summon (golden: 2개)
    var count=unit.isSkin?2:1;
    for(var c=0;c<count;c++){
      if(countAlive(mySide)>=BATTLE_MAX) break;
      var dg={id:'dango_'+Math.random().toString(36).substr(2,4),baseId:'dango',isToken:true,
        name:'Dango',school:G.rioSchool||'Gehenna',tier:1,atk:1,hp:1,kw:[],img:'token/Dango.png',isSkin:false,alive:true,poisonImmune:false};
      mySide.push(dg);
    }
    log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': Dango '+count+'summoned! (each 1/1)'});
  }
  else if(id==='satsuki'){
    // Deathrattle: 자신을 죽인 opponent를 steal기 (1Turn, skin: 2Turn)
    if(unit._killedBy&&unit._killedBy.alive){
      var stolen=unit._killedBy;
      var stolenIdx=otherSide.indexOf(stolen);
      if(stolenIdx!==-1){
        var turns=unit.isSkin?2:1;
        otherSide.splice(stolenIdx,1);
        stolen._stolenTurns=turns;
        stolen._stolenFrom=otherSide;
        mySide.push(stolen);
        log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': '+stolen.name+': '+turns+'turns stolen!'});
      }
    }
  }
  else if(id==='yuzu'){
    // 이번 battle defeated allied 수 x2(skinx4) 's Avant-Garde Corps summon
    var deadCount=0;
    for(var i=0;i<mySide.length;i++)if(!mySide[i].alive)deadCount++;
    deadCount++; // including Yuzu herself
    var mult=unit.isSkin?4:2;
    var agAtk=deadCount*mult,agHp=deadCount*mult;
    if(countAlive(mySide)<BATTLE_MAX){
      var ag={id:'ag_'+Math.random().toString(36).substr(2,4),baseId:'avant_garde',isToken:true,
        name:'Avant-garde Unit',school:G.rioSchool||'Millennium',tier:3,atk:agAtk,hp:agHp,kw:[],img:'token/Avant_garde.png',isSkin:false,alive:true,poisonImmune:false};
      ag._mySide=mySide;
      var eimiPre=ag.atk;
      applyEimiBonus(ag,mySide);
      mySide.push(ag);
      G.millenniumTokenSummons=(G.millenniumTokenSummons||0)+1;
      log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': '+ag.name+' summon! ('+ag.atk+'/'+ag.hp+')'});
      if(ag.atk>eimiPre) log.push({cls:'soc',text:'  → [Passive] Eimi: Millennium summon bonus +'+( ag.atk-eimiPre)+'/+'+(ag.hp-agHp)});
    }
  }
  else if(id==='airship'){
    // Airship Self-destruct 후 Afro Makoto summon
    if(countAlive(mySide)<BATTLE_MAX){
      var mk={id:'mk_'+Math.random().toString(36).substr(2,4),baseId:'makoto_perma',isToken:true,
        name:'Perma-hair Makoto',school:G.rioSchool||'Gehenna',tier:6,atk:6,hp:6,kw:[],img:'token/Makoto_(perma).png',isSkin:false,alive:true,poisonImmune:false};
      if(unit.makotoGolden){mk.atk=12;mk.hp=12;}
      if(G.battleSchoolBuff&&G.battleSchoolBuff[mk.school]){var mbuff=G.battleSchoolBuff[mk.school];mk.atk+=mbuff;mk.hp+=mbuff;}
      mk._mySide=mySide;
      mySide.push(mk);
      log.push({cls:'soc',text:'[Deathrattle] Airship Self-destruct! Afro Makoto summon! ('+mk.atk+'/'+mk.hp+')'});
      if(G.battleSchoolBuff&&G.battleSchoolBuff[mk.school]&&G.battleSchoolBuff[mk.school]>0) log.push({cls:'soc',text:'  → in-battle school buff applied: +'+G.battleSchoolBuff[mk.school]+'/+'+G.battleSchoolBuff[mk.school]});
    }
  }
  // ===== 7-star hidden Deathrattle =====
  else if(id==='gehenna_prefect'){
    // Gehenna 선도부 DR: permanent 소멸 + Last Hina(10/10, Cleave+Venomous) summon
    unit._permanentlyDestroyed=true;
    log.push({cls:'kill',text:'[Deathrattle] '+unit.name+': permanently disappears from this game!'});
    if(countAlive(mySide)<BATTLE_MAX){
      var hina=makeToken('hina_the_last');
      hina.alive=true;hina.poisonImmune=false;hina.isToken=true;hina._mySide=mySide;
      mySide.push(hina);
      log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': <Last Hina> summon! ('+hina.atk+'/'+hina.hp+', Cleave+Venomous)'});
    }
  }
  else if(id==='gehenna_pandemonium'){
    // 만마games DR: opponent random 2인을 2Turn간 steal기 + golden Airship/Toramaru summon
    var stealCandidates=[];
    for(var i=0;i<otherSide.length;i++)if(otherSide[i].alive)stealCandidates.push(i);
    stealCandidates.sort(function(){return Math.random()-0.5;});
    var stealCount=Math.min(2,stealCandidates.length);
    for(var s=0;s<stealCount;s++){
      var sIdx=stealCandidates[s];
      var stolen=otherSide[sIdx];
      // 인덱스 보정: 이전에 splice했으면 인덱스 밀림 → 직접 참조
      var kIdx2=-1;for(var j=0;j<otherSide.length;j++)if(otherSide[j]===stolen){kIdx2=j;break;}
      if(kIdx2!==-1){
        otherSide.splice(kIdx2,1);
        stolen._stolenTurns=2;stolen._stolenFrom=otherSide;
        mySide.push(stolen);
        log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': '+stolen.name+': 2turns stolen!'});
      }
    }
    // golden Airship(Taunt) + golden Toramaru(Taunt) summon
    if(countAlive(mySide)<BATTLE_MAX){
      var gAirship=makeToken('airship');gAirship.atk=14;gAirship.hp=14;gAirship.isSkin=true;gAirship.isToken=false;addKw(gAirship,'taunt');gAirship.alive=true;gAirship._mySide=mySide;
      mySide.push(gAirship);
      log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': golden Airship(14/14, Taunt) summon!'});
    }
    if(countAlive(mySide)<BATTLE_MAX){
      var gTora=makeToken('toramaru');gTora.atk=10;gTora.hp=2;gTora.isSkin=true;gTora.isToken=false;addKw(gTora,'taunt');gTora.alive=true;gTora._mySide=mySide;
      mySide.push(gTora);
      log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': golden Toramaru(10/2, Taunt) summon!'});
    }
  }
  else if(id==='gehenna_traingun'){
    // 열차포: game에서 완전히 사라짐 (killUnit에서 _permanentlyDestroyed 설정됨)
    log.push({cls:'kill',text:'[Deathrattle] '+unit.name+': permanently disappears from this game!'});
  }
  else if(id==='trinity_seia'){
    // Seia: game에서 완전히 사라짐 (killUnit에서 process됨)
    log.push({cls:'kill',text:'[Deathrattle] '+unit.name+': permanently disappears from this game!'});
  }
  else if(id==='trinity_justice'){
    // 정의실현부 Deathrattle: Shield+Windfury를 가진 Tsurugi를 이번 battle 최대 ATK/HP로 summon
    if(countAlive(mySide)<BATTLE_MAX){
      var _tjAtk=Math.max(unit._peakAtk||0, unit.atk);
      var _tjHp=Math.max(unit._peakHp||0, unit.maxHp||unit.hp);
      var _tsurugiTmpl=null;
      for(var _ti=0;_ti<CHARS.length;_ti++)if(CHARS[_ti].id==='tsurugi'){_tsurugiTmpl=CHARS[_ti];break;}
      var _tsu={
        id:'tsurugi_'+Math.random().toString(36).substr(2,5),
        baseId:'tsurugi',
        name:_tsurugiTmpl?_tsurugiTmpl.name:'Tsurugi',
        school:'Trinity',
        tier:_tsurugiTmpl?_tsurugiTmpl.tier:6,
        atk:_tjAtk,
        hp:_tjHp,
        maxHp:_tjHp,
        kw:['shield','windfury'],
        img:_tsurugiTmpl?_tsurugiTmpl.img:'Tsurugi.png',
        isSkin:false,
        isToken:false,
        alive:true,
        poisonImmune:false,
        _mySide:mySide,
        _peakHp:_tjHp,
        _peakAtk:_tjAtk
      };
      mySide.push(_tsu);
      log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': Tsurugi summon! ('+_tjAtk+'/'+_tjHp+', Shield+Windfury)'});
    }
  }
  // ===== Hyakkiyako Deathrattle =====
  else if(id==='hovercraft'){
    // Hovercraft DR: allied Wakamo 모두 defeated 상태라면 Wakamo summon
    var wakamoAlive=false;
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i].baseId==='wakamo'){wakamoAlive=true;break;}}
    if(!wakamoAlive&&countAlive(mySide)<BATTLE_MAX){
      var wkTmpl=null;for(var i=0;i<CHARS.length;i++)if(CHARS[i].id==='wakamo'){wkTmpl=CHARS[i];break;}
      if(wkTmpl){
        var isGold=unit._wakamoGolden||unit.isSkin;
        var wk={id:'wk_'+Math.random().toString(36).substr(2,4),baseId:'wakamo',
          name:isGold?wkTmpl.skin:wkTmpl.name,school:'Hyakkiyako',tier:6,
          atk:isGold?wkTmpl.atk*2+1:wkTmpl.atk,hp:isGold?wkTmpl.hp*2+1:wkTmpl.hp,
          kw:(wkTmpl.kw||[]).slice(),isSkin:isGold,img:isGold?wkTmpl.imgGold:wkTmpl.img,
          alive:true,poisonImmune:false,_mySide:mySide,_hovercraftCounter:0};
        mySide.push(wk);
        log.push({cls:'soc',text:'[Deathrattle] Hovercraft: '+wk.name+' summon! ('+wk.atk+'/'+wk.hp+')'});
      }
    }
  }
  else if(id==='millennium_cc'){
    // C&C Deathrattle: TNT 4개 + Abi Eshuh Proto 1개 summon
    for(var _cci=0;_cci<4;_cci++){
      if(countAlive(mySide)>=BATTLE_MAX)break;
      var _tnt=makeToken('tnt');_tnt.alive=true;_tnt.poisonImmune=false;_tnt._mySide=mySide;
      applyEimiBonus(_tnt,mySide);
      mySide.push(_tnt);
      log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': TNT summon! ('+_tnt.atk+'/'+_tnt.hp+')'});
    }
    if(countAlive(mySide)<BATTLE_MAX){
      var _aep=makeToken('abi_eshuh_proto');_aep.alive=true;_aep.poisonImmune=false;_aep._mySide=mySide;
      applyEimiBonus(_aep,mySide);
      mySide.push(_aep);
      log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': Abi Eshuh Proto summon! ('+_aep.atk+'/'+_aep.hp+')'});
    }
  }
  else if(id==='chise'){
    // Chise Deathrattle: allied Hyakkiyako random 1명 's Battlecry trigger (golden: all members)
    var hkykBC=[];
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].school==='Hyakkiyako'&&mySide[i]!==unit&&BC_IDS[mySide[i].baseId])
        hkykBC.push(mySide[i]);
    }
    if(hkykBC.length>0){
      if(unit.isSkin){
        for(var i=0;i<hkykBC.length;i++){
          triggerSOC_battlecry_inner(hkykBC[i],mySide,log);
        }
        log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': Hyakkiyako all members Battlecry trigger!'});
      } else {
        var pick=hkykBC[Math.floor(Math.random()*hkykBC.length)];
        triggerSOC_battlecry_inner(pick,mySide,log);
        log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': '+pick.name+'\'s Battlecry triggered!'});
      }
    }
  }
  // ===== Shanhaijing Deathrattle =====
  else if(id==='mina'){
    // Mina Deathrattle: allied all +3/+3 (skin: +6/+6)
    var minaBuff=unit.isSkin?6:3;
    for(var _mi=0;_mi<mySide.length;_mi++){
      if(mySide[_mi].alive&&!mySide[_mi].abilityImmune){mySide[_mi].atk+=minaBuff;mySide[_mi].hp+=minaBuff;}
    }
    log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': allied all +'+minaBuff+'/+'+minaBuff+'!'});
  }
  else if(id==='shanhai_kiki'){
    // Kiki Deathrattle: Black Lord of Hyeonryongmun summon
    if(countAlive(mySide)<BATTLE_MAX){
      var bl=makeToken('black_lord');
      bl.alive=true;bl.isToken=true;bl._mySide=mySide;
      // Passive immune
      bl.abilityImmune=true;bl._effectImmune=true;
      mySide.push(bl);
      // audio 플래그를 log 엔트리에 심어 애니메이션 재생 시점(nextStep)에서 trigger
      log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': Black Lord of Hyeonryongmun summon! ('+bl.atk+'/'+bl.hp+')',audio:'black_lord'});
    }
  }
  // ===== Abydos Deathrattle =====
  else if(id==='ayane'){
    // Ayane Deathrattle: Next turn pyroxene +1
    var _ayaneBonus=unit.isSkin?2:1;
    G._ayaneDeathsThisBattle=(G._ayaneDeathsThisBattle||0)+_ayaneBonus;
    log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': Next turn pyroxene +'+_ayaneBonus+'!'});
  }
  else if(id==='hoshino'){
    // Hoshino Deathrattle: 자신 's ATK과 HP을 random allied 1인to grant
    var hoshinoCands=[];
    var _hoshinoHp=unit._peakHp||unit.maxHp||Math.max(1,unit.hp);
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i]!==unit)hoshinoCands.push(mySide[i]);}
    var hoshinoCount=unit.isSkin?2:1;
    for(var _hi=0;_hi<hoshinoCount&&hoshinoCands.length>0;_hi++){
      var _hpIdx=Math.floor(Math.random()*hoshinoCands.length);
      var hoshinoPick=hoshinoCands.splice(_hpIdx,1)[0];
      hoshinoPick.atk+=unit.atk;hoshinoPick.hp+=_hoshinoHp;
      log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': '+hoshinoPick.name+'to +'+unit.atk+'/+'+_hoshinoHp+' grant!'});
    }
  }
  else if(id==='Shiroko_Terror'){
    // Shiroko Terror Deathrattle: absorb한 student들을 absorb 당시 상태로 귀환
    var stAbsorbed=unit._shirokoAbsorbed||(G._shirokoTerrorAbsorbed||[]);
    if(stAbsorbed.length>0){
      for(var _si=0;_si<stAbsorbed.length;_si++){
        if(countAlive(mySide)>=BATTLE_MAX) break;
        var ab=stAbsorbed[_si];
        var revUnit={
          id:ab.id,baseId:ab.baseId,name:ab.name,school:ab.school||'Abydos',
          tier:ab.tier,atk:ab.atk,hp:ab.hp,maxHp:ab.hp,kw:(ab.kw||[]).slice(),
          img:ab.img,isSkin:ab.isSkin||false,isToken:false,
          alive:true,poisonImmune:false,_mySide:mySide,_shirokoTerrorSpawned:true
        };
        mySide.push(revUnit);
        log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': '+revUnit.name+' returned! ('+revUnit.atk+'/'+revUnit.hp+')'});
      }
    }
    unit._shirokoTerrorDRFired=true;
  }
  else if(id==='gehenna_p68'){
    // 흥신소 68 Deathrattle: absorb한 Aru·Kayoko·Mutsuki·Haruka를 absorb 당시 상태로 귀환
    // Shiroko Terror와 동일하게 전역 폴백(G._p68Absorbed) 사용 — copyUnit 누락/save-load 경유 상황 대Yes
    var p68Abs=unit._p68Absorbed||(G._p68Absorbed||[]);
    for(var _pi=0;_pi<p68Abs.length;_pi++){
      if(countAlive(mySide)>=BATTLE_MAX)break;
      var pab=p68Abs[_pi];
      var pRev={
        id:pab.id,baseId:pab.baseId,name:pab.name,school:pab.school||'Gehenna',
        tier:pab.tier,atk:pab.atk,hp:pab.hp,maxHp:pab.hp,kw:(pab.kw||[]).slice(),
        img:pab.img,isSkin:pab.isSkin||false,isToken:false,
        alive:true,poisonImmune:false,_mySide:mySide,_p68Spawned:true
      };
      mySide.push(pRev);
      log.push({cls:'soc',text:'[Deathrattle] '+unit.name+': '+pRev.name+' returned! ('+pRev.atk+'/'+pRev.hp+')'});
    }
  }
}

// Malkuth helper (전역)
function hasMalkuthOnSide(side){
  for(var i=0;i<side.length;i++)if(side[i].alive&&side[i].baseId==='millennium_malkuth')return true;
  return false;
}
function makeSweeper(side){
  var sw=makeToken('sweeper');
  sw.school='Millennium'; // rioSchool 오버라이드 prevent: 항상 Millennium
  sw.alive=true;sw.poisonImmune=false;sw.isToken=true;sw.baseId='sweeper';
  // Utaha Passive: Millennium token summon 시 Schedule level bonus
  if(side) applyEimiBonus(sw,side);
  // in-battle school buff applied
  if(G.battleSchoolBuff&&G.battleSchoolBuff['Millennium']){
    var sbuff=G.battleSchoolBuff['Millennium'];
    sw.atk+=sbuff;sw.hp+=sbuff;
  }
  return sw;
}

function runBattle(boardA, boardB, startWithA, opts) {
  var _G=(opts&&opts.simCtx)||G;
  // battle 중 obtain keyword board에 잔존하지 않도록 _baseKw 스냅샷 (sim 제외)
  if(!opts||!opts.simCtx){
    for(var _bk=0;_bk<boardA.length;_bk++) boardA[_bk]._baseKw=(boardA[_bk].kw||[]).slice();
    for(var _bk=0;_bk<boardB.length;_bk++) boardB[_bk]._baseKw=(boardB[_bk].kw||[]).slice();
  }
  _G.permanentAbilityBan=false;
  _G.battleSchoolBuff={};
  _G._reisaSummonedKazusa=false;
  _G._kazusaSummonedReisa=false;
  var skipSOC=!!(opts&&opts.skipSOC);
  var coinSeq=(opts&&opts.coinSeq)||null;
  var coinQueuePtr=0;
  var coinSeqKeys={};
  if(coinSeq){for(var _csk=0;_csk<coinSeq.length;_csk++)coinSeqKeys[coinSeq[_csk].side+':'+coinSeq[_csk].pos]=true;}
  function copyUnit(m){
    return{id:m.id,name:m.name,atk:m.atk,hp:m.hp,kw:(m.kw||[]).slice(),img:m.img,
      isSkin:m.isSkin,tier:m.tier,school:m.school||'',baseId:m.baseId||'',
      alive:skipSOC?(m.alive!==undefined?m.alive:true):true,
      _abilitiesStripped:skipSOC?(!!m.stripped):false,
      poisonImmune:false,irohaRef:m.irohaRef||null,_akaneC4DR:m._akaneC4DR||false,_akaneC4Golden:m._akaneC4Golden||false,
      noAttack:(m.baseId==='gehenna_traingun'||m.baseId==='trinity_seia'||m.baseId==='Kei_usb'),
      abilityImmune:(m.baseId==='trinity_mika'),
      _battlesSurvived:m._battlesSurvived||0,
      _keiseisenCounter:m._keiseisenCounter||0,
      _hovercraftCounter:m._hovercraftCounter||0,
      // Deathrattle absorb restore용 스냅샷 (흥신소68, Shiroko Terror 등)
      _p68Absorbed:(m._p68Absorbed||null),
      _shirokoAbsorbed:(m._shirokoAbsorbed||null),
      isHidden:m.isHidden||false,coinOff:m.coinOff||false};
  }
  var a=boardA.map(copyUnit);
  var b=boardB.map(copyUnit);
  a._panchanDeaths=(opts&&opts.panchanDeathsA)||0;
  b._panchanDeaths=(opts&&opts.panchanDeathsB)||0;
  // 사이드 참조 설정 (Seia Invincible 등에 required)
  for(var _si=0;_si<a.length;_si++) a[_si]._mySide=a;
  for(var _si=0;_si<b.length;_si++) b[_si]._mySide=b;
  // Kuzunoha permanent 차단: 이games game에서 Kuzunoha trigger했으면 b(enemy) 's Venomous remove
  if(_G.kuzunohaActive){
    for(var _kz=0;_kz<b.length;_kz++){var _pi=b[_kz].kw.indexOf('poison');if(_pi!==-1)b[_kz].kw.splice(_pi,1);}
  }
  var log=[];
  var steps=[];
  // battle 중 최대 HP/ATK 추enemy (Hoshino Deathrattle, 정의실현부 Deathrattle 등에 사용)
  for(var _pi=0;_pi<a.length;_pi++){a[_pi]._peakHp=a[_pi].hp;a[_pi]._peakAtk=a[_pi].atk;}
  for(var _pi=0;_pi<b.length;_pi++){b[_pi]._peakHp=b[_pi].hp;b[_pi]._peakAtk=b[_pi].atk;}
  var turnA=(startWithA!==undefined?startWithA:true);
  var idxA=0,idxB=0;
  var maxRounds=200;

  function snapshot(){
    function snapUnit(u){var bid=u.baseId||'';return{id:u.id,name:u.name,baseId:bid,atk:u.atk,hp:u.hp,maxHp:u.maxHp||u.hp,_peakHp:u._peakHp||u.hp,kw:u.kw.slice(),img:u.img,isSkin:u.isSkin,tier:u.tier,school:u.school||'',alive:u.alive,stripped:!!u._abilitiesStripped,coinOff:u.coinOff||false,_akaneC4DR:u._akaneC4DR||false,_akaneC4Golden:u._akaneC4Golden||false,irohaRef:u.irohaRef||null,_copiedAbilities:u._copiedAbilities||null,_keiseisenCounter:(_G.keiseisenCounters&&_G.keiseisenCounters[bid])||0,_hovercraftCounter:u._hovercraftCounter||0,isHidden:u.isHidden||false,noAttack:u.noAttack||false,abilityImmune:u.abilityImmune||false,_battlesSurvived:u._battlesSurvived||0,_hasAttacked:u._hasAttacked||false};}
    return{a:a.map(snapUnit),b:b.map(snapUnit)};
  }
  function getAlive(side){return side.filter(function(m){return m.alive;});}
  function findTarget(defenders){
    var alive=getAlive(defenders);if(alive.length===0)return null;
    // Ambush 필터: 아직 attack하지 않은 Ambush unit은 타겟 제외
    var visible=alive.filter(function(m){return !hasKw(m,'ambush')||m._hasAttacked;});
    var taunts=(visible.length>0?visible:alive).filter(function(m){return hasKw(m,'taunt');});
    if(taunts.length>0)return taunts[Math.floor(Math.random()*taunts.length)];
    if(visible.length>0)return visible[Math.floor(Math.random()*visible.length)];
    return alive[Math.floor(Math.random()*alive.length)];
  }

  function killUnit(unit,myArr,oppArr,log2,killedBy){
    // Mika: ability/effect에 의한 death immune (killedBy 없거나 ability death인 경우)
    if(unit.abilityImmune&&killedBy&&killedBy._isAbilityKill){
      log2.push({cls:'shield',text:unit.name+': immune!'});
      unit.hp=1;return;
    }
    if(hasKw(unit,'reborn')){
      unit.kw.splice(unit.kw.indexOf('reborn'),1);
      // Reisa Magical Girl: 최대 HP으로 Reborn
      if(unit.isSkin&&unit.baseId==='reisa'){
        unit.hp=unit._reisaFullHp||unit.maxHp||1;
      } else {unit.hp=1;}
      // Reborn 시 Shield 등 base keyword maintain (reborn만 remove)
      log2.push({cls:'shield',text:unit.name+'has been Reborn! (HP:'+unit.hp+')'});
      // Reborn 시에도 Deathrattle trigger (모든 DR 보유 unit)
      triggerDeathrattle(unit,myArr,oppArr,log2);
    } else {
      unit.alive=false;
      if(killedBy) unit._killedBy=killedBy;
      // Hasumi Passive: 첫 kill ATK/HP absorb
      var hasumiMax=killedBy&&killedBy.isSkin?2:1;
      if(killedBy&&killedBy.baseId==='hasumi'&&killedBy.hp>0&&!killedBy._poisonKilled&&(killedBy._hasumiAbsorbed||0)<hasumiMax){
        killedBy._hasumiAbsorbed=(killedBy._hasumiAbsorbed||0)+1;
        var absHp=unit._hpBeforeKill!==undefined?unit._hpBeforeKill:Math.max(0,unit.hp);
        killedBy.atk+=unit.atk;killedBy.hp+=absHp;killedBy.maxHp=killedBy.hp;
        log2.push({cls:'soc',text:'[Passive] '+killedBy.name+': '+unit.name+' absorb! +'+unit.atk+'/+'+absHp});
      }
      // 정의실현부 Passive: defeat린 enemy 's 공/최대HP absorb (매 킬마다)
      if(killedBy&&killedBy.baseId==='trinity_justice'&&killedBy.hp>0&&!killedBy._poisonKilled){
        var absHp2=unit._peakHp||unit.maxHp||Math.max(1,unit.hp);
        killedBy.atk+=unit.atk;killedBy.hp+=absHp2;killedBy.maxHp=killedBy.hp;
        log2.push({cls:'soc',text:'[Passive] '+killedBy.name+': '+unit.name+' absorb! +'+unit.atk+'/+'+absHp2});
      }
      // Arisu death 추enemy
      if(unit.baseId==='arisu') _G.arisuDeathCount=(_G.arisuDeathCount||0)+1;
      // Shiroko 킬 추enemy (Passive: 다음 Turn pyroxene)
      if(killedBy&&killedBy.baseId==='shiroko'&&killedBy._mySide===a){
        var _shirokoGain=killedBy.isSkin?2:1;
        _G._shirokoKillsThisBattle=(_G._shirokoKillsThisBattle||0)+_shirokoGain;
        log2.push({cls:'soc',text:'[Passive] '+killedBy.name+': pyroxene '+_shirokoGain+' gained!'});
      }
      // Seia death 페널티: allied all ability permanent remove
      if(unit.baseId==='trinity_seia'){
        _G.permanentAbilityBan=true;
        for(var _se=0;_se<myArr.length;_se++){
          if(myArr[_se].alive) stripAbilities(myArr[_se],log2);
        }
        log2.push({cls:'kill',text:'Seia defeated! All ally abilities removed!'});
        unit._permanentlyDestroyed=true;
      }
      // 열차포 permanent 소멸
      if(unit.baseId==='gehenna_traingun') unit._permanentlyDestroyed=true;
      log2.push({cls:'kill',text:unit.name+'has been defeated!'});
      triggerDeathrattle(unit,myArr,oppArr,log2);
    }
  }

  function dealHit(src,dst,log2,dmgOverride,isCombatDefense){
    var dmg=dmgOverride!==undefined?dmgOverride:src.atk;
    // invincible keyword (일반 Invincible)
    if(hasKw(dst,'invincible')){
      log2.push({cls:'shield',text:dst.name+': Invincible! Damage nullified'});
      return {blocked:true,overflow:0};
    }
    // Seia 예지: 방어 시 battle damage만 무효 (ability/effect damage는 통과)
    if(isCombatDefense&&dst.school==='Trinity'&&dst._mySide&&dst.baseId!=='trinity_seia'){
      for(var _sv=0;_sv<dst._mySide.length;_sv++){
        if(dst._mySide[_sv].alive&&dst._mySide[_sv].baseId==='trinity_seia'&&dst._mySide[_sv]!==dst){
          log2.push({cls:'shield',text:dst.name+': Evaded by Seia\'s foresight!'});
          return {blocked:true,overflow:0};
        }
      }
    }
    // Kei(USB) Passive: Kei Shield이 없을 때, battle damage를 Arisuto 전가
    if(dst.baseId==='Kei_usb'&&!hasKw(dst,'shield')&&dst.alive&&!dst._abilitiesStripped&&!_G.permanentAbilityBan&&dst._mySide){
      for(var _ka=0;_ka<dst._mySide.length;_ka++){
        if(dst._mySide[_ka].alive&&dst._mySide[_ka].baseId==='arisu'){
          var _arisuProxy=dst._mySide[_ka];
          // Arisu Shield check
          if(hasKw(_arisuProxy,'shield')){
            _arisuProxy.kw.splice(_arisuProxy.kw.indexOf('shield'),1);
            log2.push({cls:'soc',text:'[Passive] '+dst.name+': '+_arisuProxy.name+'takes the hit instead!'});
            log2.push({cls:'shield',text:_arisuProxy.name+'\'s Shield is broken!'});
            return {blocked:true,overflow:0,_keiRedirect:true};
          }
          log2.push({cls:'soc',text:'[Passive] '+dst.name+': '+_arisuProxy.name+'takes the damage instead!'});
          var _arisuHpBefore=_arisuProxy.hp;
          _arisuProxy.hp-=dmg;
          log2.push({cls:'hit',text:src.name+' '+_arisuProxy.name+'to '+dmg+' damage! (HP:'+Math.max(0,_arisuProxy.hp)+')'});
          // Arisu death process
          if(_arisuProxy.hp<=0){
            var _arisuArr=dst._mySide;
            var _oppArr=(dst._mySide===a)?b:a;
            resolveDeath(_arisuProxy,_arisuArr,_oppArr,log2,src);
          }
          var overflow2=dmg-_arisuHpBefore;
          return {blocked:false,overflow:overflow2>0?overflow2:0,_keiRedirect:true};
        }
      }
    }
    // Mimori Passive: 자신을 attack한 enemy 's atk을 한 바퀴 동안 0으로 (golden: during this battle)
    if(dst.baseId==='mimori'&&dst.alive&&!dst._abilitiesStripped&&!_G.permanentAbilityBan&&src!==dst){
      var mimTurns=dst.isSkin?99:1;
      if(!src._mimoriDebuff||src._mimoriDebuff<=0){
        src._mimoriOrigAtk=src.atk;src._mimoriDebuff=mimTurns;src.atk=0;
        log2.push({cls:'soc',text:'[Passive] '+dst.name+': '+src.name+' ATK 0! ('+(mimTurns>=99?'during battle':mimTurns+' hits')+')'});
      }
    }
    if(hasKw(dst,'shield')){
      dst.kw.splice(dst.kw.indexOf('shield'),1);
      log2.push({cls:'shield',text:dst.name+'\'s Shield is broken!'});
      return {blocked:true,overflow:0};
    } else {
      var hpBefore=dst.hp;
      dst.hp-=dmg;
      // absorb effect용: 치명타 직games HP 보존 (음수 hp로 absorb 시 attack자 death 버그 prevent)
      if(dst.hp<=0&&dst._hpBeforeKill===undefined) dst._hpBeforeKill=Math.max(0,hpBefore);
      log2.push({cls:'hit',text:src.name+' '+dst.name+'to '+dmg+' damage! (HP:'+Math.max(0,dst.hp)+')'});
      // Haruka Passive: Aru/Mutsuki/Kayoko damage받으면 counter 대기
      if(['aru','mutsuki','kayoko'].indexOf(dst.baseId)!==-1&&dst._mySide&&src._mySide&&!_G.permanentAbilityBan){
        for(var _hk=0;_hk<dst._mySide.length;_hk++){
          var _hku=dst._mySide[_hk];
          if(_hku.baseId==='haruka'&&_hku.alive&&!_hku._abilitiesStripped){
            _G._harukaCounterPending={haruka:_hku,target:src,harukaArr:dst._mySide,targetArr:src._mySide};
            break;
          }
        }
      }
      if(hasKw(src,'poison')&&dmg>=1&&dst.hp>0&&!dst.poisonImmune&&!dst.abilityImmune){
        dst.hp=0;dst._poisonKilled=true;
        log2.push({cls:'kill',text:src.name+'\'s Venom! '+dst.name+' instant kill!'});
      }
      var overflow=dmg-hpBefore;
      return {blocked:false,overflow:overflow>0?overflow:0};
    }
  }

  function resolveDeath(unit,myArr,oppArr,log2,killedBy){
    if(unit.hp<=0&&unit.alive)killUnit(unit,myArr,oppArr,log2,killedBy);
  }

  function peroCheck(attacker,defender,atkArr,log2){
    if(attacker.peroKillToHifumi&&!defender.alive){
      // Peroro-sama이 킬 → Hifumi로 replace (자신이 죽어도 trigger)
      var tmpl=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id==='hifumi'){tmpl=CHARS[j];break;}
      if(tmpl){
        var hif={id:'hif_'+Math.random().toString(36).substr(2,4),baseId:'hifumi',isToken:false,
          name:attacker.srcGolden?tmpl.skin:tmpl.name,school:'Trinity',tier:3,
          atk:attacker.srcGolden?tmpl.atk*2+1:tmpl.atk,hp:attacker.srcGolden?tmpl.hp*2+1:tmpl.hp,
          kw:[],img:attacker.srcGolden?tmpl.imgGold:tmpl.img,isSkin:attacker.srcGolden||false,alive:true,poisonImmune:false};
        // Peroro-sama 자리에 Hifumi replace
        var idx=atkArr.indexOf(attacker);
        if(idx!==-1){atkArr[idx]=hif;attacker.alive=false;}
        else{atkArr.push(hif);}
        log2.push({cls:'soc',text:'[Peroro-sama] enemy defeated! → '+hif.name+'replaced!'});
      }
    }
  }
  // Survive 트리거: 맞았는데 안 죽었을 때 (피격당할 때마다 check)
  function checkSurvive(unit,side,log2,hitBy){
    if(!unit.alive||unit.hp<=0) return;
    var hasCopiedSurv=unit._copiedAbilities&&unit._copiedAbilities.some(function(c){return c.type==='surv';});
    if((!hasKw(unit,'survive')||!SURV_IDS[unit.baseId])&&!hasCopiedSurv) return;
    if(unit._abilitiesStripped) return;
    if(_G.permanentAbilityBan) return;
    if(unit.baseId==='toki'){
      var ae;
      var tierLvl=(_G.players&&_G.players[0]?_G.players[0].tier:1)||1;
      ae=makeToken('abi_eshuh');var mult=unit.isSkin?2:1;ae.atk=tierLvl*mult;ae.hp=tierLvl*mult;ae.maxHp=ae.hp;
      ae.alive=true;ae.poisonImmune=false;ae._mySide=side;
      var eimiPreToki=ae.atk;
      applyEimiBonus(ae,side);
      side.push(ae);
      _G.millenniumTokenSummons=(_G.millenniumTokenSummons||0)+1;
      log2.push({cls:'soc',text:'[Survive] '+unit.name+': '+ae.name+' summon! ('+ae.atk+'/'+ae.hp+')'});
      if(ae.atk>eimiPreToki) log2.push({cls:'soc',text:'  → [Passive] Eimi: Millennium summon bonus +'+(ae.atk-eimiPreToki)+'/+'+(ae.atk-eimiPreToki)});
      surviveEffects.push({type:'summon',token:ae.baseId,isSkin:unit.isSkin});
    }
    else if(unit.baseId==='neru'){
      var pool=['taunt','shield','poison','reborn','cleave','pierce','ranged','windfury','selfdestruct'];
      var available=pool.filter(function(k){return !hasKw(unit,k);});
      if(available.length===0) return;
      var times=unit.isSkin?2:1;
      for(var t=0;t<times;t++){
        available=pool.filter(function(k){return !hasKw(unit,k);});
        if(available.length===0) break;
        var pick=available[Math.floor(Math.random()*available.length)];
        addKw(unit,pick);
        log2.push({cls:'soc',text:'[Survive] '+unit.name+': '+(KW_LABELS[pick]||pick)+' obtain!'});
        surviveEffects.push({type:'keyword',baseId:'neru',kw:pick});
      }
    }
    else if(unit.baseId==='reisa'){
      // Reisa Survive: Kazusa summon (battle 중 1회)
      if(!_G._reisaSummonedKazusa&&countAlive(side)<BATTLE_MAX){
        var kazTmpl=findAnyChar('kazusa');
        if(kazTmpl){
          _G._reisaSummonedKazusa=true;
          var kaz={id:'kaz_'+Math.random().toString(36).substr(2,4),baseId:'kazusa',isToken:true,
            name:kazTmpl.name,school:kazTmpl.school,tier:kazTmpl.tier,
            atk:unit.isSkin?(kazTmpl.atk*2+1):kazTmpl.atk,hp:unit.isSkin?(kazTmpl.hp*2+1):kazTmpl.hp,
            kw:kazTmpl.kw.slice(),img:unit.isSkin?kazTmpl.imgGold:kazTmpl.img,isSkin:unit.isSkin,alive:true,poisonImmune:false,_mySide:side};
          side.push(kaz);
          log2.push({cls:'soc',text:'[Survive] '+unit.name+': '+kaz.name+' summon! ('+kaz.atk+'/'+kaz.hp+')'});
        }
      }
    }
    else if(unit.baseId==='mimori'){
      // Mimori Survive: opponent all ATK -1 (golden -2)
      var debuff=unit.isSkin?2:1;
      var oppSide=(side===a)?b:a;
      for(var i=0;i<oppSide.length;i++){
        if(oppSide[i].alive) oppSide[i].atk=Math.max(0,oppSide[i].atk-debuff);
      }
      log2.push({cls:'soc',text:'[Survive] '+unit.name+': opponent all ATK -'+debuff});
      surviveEffects.push({type:'debuff',baseId:'mimori',amount:debuff});
    }
    else if(unit.baseId==='noa'&&hitBy){
      // opponent 's keyword를 copy
      var copied=[];
      for(var i=0;i<hitBy.kw.length;i++){
        var kk=hitBy.kw[i];
        if(!hasKw(unit,kk)){addKw(unit,kk);copied.push(KW_LABELS[kk]||kk);}
      }
      if(copied.length>0){
        log2.push({cls:'soc',text:'[Survive] '+unit.name+': '+hitBy.name+'\'s ability copied! ('+copied.join(', ')+')'});
        // Yuuka 있으면 Yuukaalso granted (golden: Millennium all)
        var targets=[];
        if(unit.isSkin){
          for(var i=0;i<side.length;i++){if(side[i].alive&&side[i].school==='Millennium'&&side[i]!==unit)targets.push(side[i]);}
        } else {
          for(var i=0;i<side.length;i++){if(side[i].alive&&side[i].baseId==='yuuka')targets.push(side[i]);}
        }
        for(var t=0;t<targets.length;t++){
          var tc=[];
          for(var j=0;j<hitBy.kw.length;j++){
            var kk2=hitBy.kw[j];
            if(!hasKw(targets[t],kk2)){addKw(targets[t],kk2);tc.push(KW_LABELS[kk2]||kk2);}
          }
          if(tc.length>0) log2.push({cls:'soc',text:'  → '+targets[t].name+'also granted: '+tc.join(', ')});
        }
        surviveEffects.push({type:'keyword',baseId:'noa',kw:copied.join(',')});
      }
    }
    // Seminar copy SURV 실행
    if(hasCopiedSurv&&!unit._survProxyRunning){
      unit._survProxyRunning=true;
      for(var _ca=0;_ca<unit._copiedAbilities.length;_ca++){
        var ca=unit._copiedAbilities[_ca];
        if(ca.type==='surv'){
          var proxy={baseId:ca.baseId,name:unit.name,atk:unit.atk,hp:unit.hp,kw:unit.kw.concat(['survive']),alive:unit.alive,isSkin:unit.isSkin,school:unit.school,sid:unit.sid,_mySide:unit._mySide,_copiedAbilities:null};
          checkSurvive(proxy,side,log2,hitBy);
          unit.atk=proxy.atk;unit.hp=proxy.hp;
        }
      }
      unit._survProxyRunning=false;
    }
  }

  function stripAbilities(target,log2){
    // keyword 전부 remove (Preemptive 제외)
    var removed=[];
    var keepKw=[];
    for(var i=0;i<target.kw.length;i++){
      if(target.kw[i]==='preemptive') keepKw.push(target.kw[i]);
      else removed.push(KW_LABELS[target.kw[i]]||target.kw[i]);
    }
    target.kw=keepKw;
    // Deathrattle·Battle Start 등 ability 등록 무효화
    target._abilitiesStripped=true;
    if(removed.length>0) log2.push({cls:'kill',text:'[Preemptive] '+target.name+'\'s ability removed: '+removed.join(', ')});
  }

  function triggerPreemptive(attacker,target,defArr,atkArr,log2){
    var hasCopiedPre=attacker._copiedAbilities&&attacker._copiedAbilities.some(function(c){return c.type==='pre';});
    if(!hasKw(attacker,'preemptive')&&!PRE_IDS[attacker.baseId]&&!hasCopiedPre) return false;
    if(_G.permanentAbilityBan) return false;
    // ===== Preemptive ability (PRE_IDS) =====
    if(attacker.baseId==='aru'){
      var tTier=target.tier||0;
      var origAtk=attacker.atk;var newAtk=origAtk;
      if(tTier>=5) newAtk=origAtk*2;
      else if(tTier>=1&&tTier<=2) newAtk=Math.max(1,Math.floor(origAtk/2));
      if(newAtk!==origAtk){
        attacker._aruOrigAtk=origAtk;attacker.atk=newAtk;
        log2.push({cls:'soc',text:'[Preemptive] '+attacker.name+': T'+tTier+' target → ATK '+origAtk+'→'+newAtk});
      }
      return false;
    }
    if(attacker.baseId==='koyuki'){
      if(!target._koyukiSwapped){
        var oldAtk=target.atk,oldHp=target.hp;
        target.atk=oldHp;target.hp=oldAtk;target._koyukiSwapped=true;
        log2.push({cls:'soc',text:'[Preemptive] '+attacker.name+': '+target.name+' ATK/HP swapped! ('+oldAtk+'/'+oldHp+'→'+target.atk+'/'+target.hp+')'});
      }
      // Pajama Koyuki: add로 opponent random ability 하나 remove
      if(attacker.isSkin&&target.kw&&target.kw.length>0){
        var rmIdx=Math.floor(Math.random()*target.kw.length);
        var rmKw=target.kw.splice(rmIdx,1)[0];
        log2.push({cls:'kill',text:'[Preemptive] '+attacker.name+': '+target.name+'\'s '+(KW_LABELS[rmKw]||rmKw)+' remove!'});
      }
      return false;
    }
    if(attacker.baseId==='koharu'){
      var chance=attacker.isSkin?0.1:0.05;
      if(Math.random()<chance){
        stripAbilities(target,log2);
        target.alive=false;target._killedBy=attacker;
        log2.push({cls:'kill',text:'[Preemptive] '+attacker.name+': '+target.name+' Execution! Instant kill!'});
        resolveDeath(target,defArr,atkArr,log2,attacker);
        return true;
      }
      return false;
    }
    if(attacker.baseId==='trinity_mika'){
      // Mika Preemptive: opponent Gehenna from이면 ATK 2배
      if(target.school==='Gehenna'||(target.isToken&&target.school==='Gehenna')){
        var origAtk=attacker.atk;
        attacker._mikaOrigAtk=origAtk;
        attacker.atk=origAtk*2;
        log2.push({cls:'soc',text:'[Preemptive] '+attacker.name+': Gehenna opponent → ATK 2x! ('+origAtk+'→'+attacker.atk+')'});
      }
      return false;
    }
    if(attacker.baseId==='ui'){
      stripAbilities(target,log2);
      // golden(Swimsuit Ui): 타겟 left 또는 right 1인도 ability remove
      if(attacker.isSkin){
        var tIdx=-1;for(var _ui=0;_ui<defArr.length;_ui++)if(defArr[_ui]===target){tIdx=_ui;break;}
        if(tIdx!==-1){
          var adj=null;
          // left 또는 right 중 살아있는 쪽
          var left=null,right=null;
          for(var _ui=tIdx-1;_ui>=0;_ui--){if(defArr[_ui].alive){left=defArr[_ui];break;}}
          for(var _ui=tIdx+1;_ui<defArr.length;_ui++){if(defArr[_ui].alive){right=defArr[_ui];break;}}
          if(left&&right) adj=Math.random()<0.5?left:right;
          else adj=left||right;
          if(adj) stripAbilities(adj,log2);
        }
      }
    }
    // Succession counter: Yukari, Renge, Kikyou (allied만 카운트)
    else if(attacker.baseId==='yukari'||attacker.baseId==='renge'||attacker.baseId==='kikyou'){
      if(attacker._mySide===a){
        var kAdd=attacker.isSkin?2:1;
        if(!_G.keiseisenCounters) _G.keiseisenCounters={};
        _G.keiseisenCounters[attacker.baseId]=Math.min(7,(_G.keiseisenCounters[attacker.baseId]||0)+kAdd);
        log2.push({cls:'soc',text:'[Preemptive] '+attacker.name+': Succession +'+kAdd+' (current: '+_G.keiseisenCounters[attacker.baseId]+')'});
      }
    }
    // Kuzunoha Preemptive: attack target 's 모든 effect(keyword) remove
    else if(attacker.baseId==='hkyk_kuzunoha'){
      if(target.kw&&target.kw.length>0){
        var removed=target.kw.map(function(k){return KW_LABELS[k]||k;}).join(', ');
        target.kw=[];
        log2.push({cls:'kill',text:'[Preemptive] '+attacker.name+': '+target.name+'\'s all effects removed! ('+removed+')'});
      }
      stripAbilities(target,log2);
    }
    // Nagusa: Preemptive 루프에서 process
    else if(attacker.baseId==='nagusa'){}
    // Wakamo: Preemptive 킬 후에 process
    else if(attacker.baseId==='wakamo'){}
    else if(attacker.baseId==='millennium_malkuth'){
      // Malkuth Preemptive: Sweeper 2체 summon → Malkuth Turn 내에서 즉시 Self-destruct attack
      // (stepLog에 add하지 않고 steps에 직접 push — 개별 애니메이션)
      var _mSide=(atkArr===a)?'a':'b';
      var _mDefSide=(_mSide==='a')?'b':'a';
      var _mAtkI=atkArr.indexOf(attacker);
      var _mDefI=defArr.indexOf(target);
      var sweepers=[];
      var summonLog=[];
      for(var sw=0;sw<2;sw++){
        var swp=makeSweeper(atkArr);swp._mySide=atkArr;swp.alive=true;
        atkArr.push(swp);
        _G.millenniumTokenSummons=(_G.millenniumTokenSummons||0)+1;
        summonLog.push({cls:'soc',text:'[Preemptive] '+attacker.name+': Sweeper summon! ('+swp.atk+'/'+swp.hp+')'});
        sweepers.push(swp);
      }
      // summon 스텝 (Malkuth card로 표시)
      for(var _sl=0;_sl<summonLog.length;_sl++)log.push(summonLog[_sl]);
      steps.push({atkSide:_mSide,atkIdx:_mAtkI,atkId:attacker.id,defSide:_mDefSide,defIdx:_mDefI,defId:target.id,log:summonLog,snap:snapshot()});
      // 각 Sweeper Self-destruct attack (Malkuth Turn 내 즉시 실행)
      for(var sw2=0;sw2<sweepers.length;sw2++){
        if(!target.alive)break; // enemy death → 나머지 Sweeper survive (다음 자기 차례에 attack)
        var _sw=sweepers[sw2];
        var swLog=[];
        var swDmg=_sw.atk+_sw.hp;
        swLog.push({cls:'hit',text:_sw.name+'\'s Self-destruct! ('+_sw.atk+'+'+_sw.hp+'='+swDmg+' damage)'});
        dealHit(_sw,target,swLog,swDmg);
        checkSurvive(target,defArr,swLog,_sw);
        resolveDeath(target,defArr,atkArr,swLog,_sw);
        _sw.alive=false; // Self-destruct death
        for(var _swl=0;_swl<swLog.length;_swl++)log.push(swLog[_swl]);
        steps.push({atkSide:_mSide,atkIdx:atkArr.indexOf(_sw),atkId:_sw.id,defSide:_mDefSide,defIdx:defArr.indexOf(target),defId:target.id,log:swLog,snap:snapshot()});
      }
      return true; // stepLog 비워서 메인 스텝 push prevent
    }
    else if(attacker.baseId==='Arisu_Kei'){
      // Arisu&Kei Preemptive: enemy all members을 left부터 1회씩 attack (Shield ignore, HP 직격)
      var _akSide=(atkArr===a)?'a':'b';
      var _akDefSide=(_akSide==='a')?'b':'a';
      var _akAtkI=atkArr.indexOf(attacker);
      var akLog=[];
      akLog.push({cls:'soc',text:'[Preemptive] '+attacker.name+': enemy all members sequential attack!'});
      for(var _ei=0;_ei<defArr.length;_ei++){
        var _enemy=defArr[_ei];
        if(!_enemy.alive)continue;
        // Shield ignore하고 HP 직격
        var _akDmg=attacker.atk;
        if(hasKw(_enemy,'shield')){
          _enemy.kw.splice(_enemy.kw.indexOf('shield'),1);
          akLog.push({cls:'shield',text:_enemy.name+'\'s Shield ignored!'});
        }
        _enemy.hp-=_akDmg;
        akLog.push({cls:'hit',text:attacker.name+' '+_enemy.name+'to '+_akDmg+' damage! (HP:'+Math.max(0,_enemy.hp)+')'});
        checkSurvive(_enemy,defArr,akLog,attacker);
        resolveDeath(_enemy,defArr,atkArr,akLog,attacker);
      }
      for(var _akl=0;_akl<akLog.length;_akl++)log.push(akLog[_akl]);
      steps.push({atkSide:_akSide,atkIdx:_akAtkI,atkId:attacker.id,defSide:_akDefSide,defIdx:0,defId:(defArr[0]||{}).id,log:akLog,snap:snapshot()});
      return true;
    }
    else if(attacker.baseId==='millennium_death_momoi'){
      // 데스 Momoi Preemptive: enemy grant 수치 초기화
      var baseTmpl=findAnyChar(target.baseId);
      if(baseTmpl){
        var baseAtk=target.isSkin?(baseTmpl.atk*2+1):baseTmpl.atk;
        var baseHp=target.isSkin?(baseTmpl.hp*2+1):baseTmpl.hp;
        if(target.atk>baseAtk||target.hp>baseHp){
          var oldAtk=target.atk,oldHp=target.hp;
          target.atk=baseAtk;target.hp=Math.min(target.hp,baseHp);
          log2.push({cls:'kill',text:'[Preemptive] '+attacker.name+': '+target.name+' granted stats removed! ('+oldAtk+'/'+oldHp+' → '+target.atk+'/'+target.hp+')'});
        }
      }
    }
    // Seminar copy PRE 실행
    if(hasCopiedPre&&!attacker._preProxyRunning){
      attacker._preProxyRunning=true;
      for(var _ca=0;_ca<attacker._copiedAbilities.length;_ca++){
        var ca=attacker._copiedAbilities[_ca];
        if(ca.type==='pre'){
          var proxy={baseId:ca.baseId,name:attacker.name,atk:attacker.atk,hp:attacker.hp,kw:attacker.kw,alive:attacker.alive,isSkin:attacker.isSkin,school:attacker.school,sid:attacker.sid,_mySide:attacker._mySide,_copiedAbilities:null};
          triggerPreemptive(proxy,target,defArr,atkArr,log2);
          attacker.atk=proxy.atk;attacker.hp=proxy.hp;
        }
      }
      attacker._preProxyRunning=false;
    }
    return false;
  }

  // (hasMalkuthOnSide, makeSweeper는 전역으로 이동됨)

  // Chise Passive: counter할 때 opponent ability random remove (골든: permanent remove)
  function checkChisePassive(chise,target,atkOrigBoard,log2){
    if(chise.baseId!=='chise'||!chise.alive) return;
    if(chise._abilitiesStripped||_G.permanentAbilityBan) return;
    var isGolden=chise.isSkin;
    var removable=[];
    for(var i=0;i<(target.kw||[]).length;i++){
      if(target.kw[i]!=='preemptive') removable.push(target.kw[i]);
    }
    if(DR_IDS[target.baseId]&&!target._abilitiesStripped) removable.push('_dr');
    if(BC_IDS[target.baseId]&&!target._abilitiesStripped) removable.push('_bc');
    if(SOC_IDS[target.baseId]&&!target._abilitiesStripped) removable.push('_soc');
    if(removable.length===0) return;
    removable.sort(function(){return Math.random()-0.5;});
    var pick=removable[0];
    if(pick==='_dr'||pick==='_bc'||pick==='_soc'){
      target._abilitiesStripped=true;
      if(isGolden&&atkOrigBoard){
        for(var _ob=0;_ob<atkOrigBoard.length;_ob++){
          if(atkOrigBoard[_ob].baseId===target.baseId){atkOrigBoard[_ob].stripped=true;break;}
        }
      }
      log2.push({cls:'kill',text:'[Chise] '+target.name+'\'s ability removed!'+(isGolden?' (permanent)':'')});
    } else {
      var kwIdx=target.kw.indexOf(pick);
      if(kwIdx!==-1){
        target.kw.splice(kwIdx,1);
        if(isGolden&&atkOrigBoard){
          for(var _ob=0;_ob<atkOrigBoard.length;_ob++){
            if(atkOrigBoard[_ob].baseId===target.baseId){
              var _origIdx=atkOrigBoard[_ob].kw.indexOf(pick);
              if(_origIdx!==-1) atkOrigBoard[_ob].kw.splice(_origIdx,1);
              if(atkOrigBoard[_ob]._baseKw){var _baseIdx=atkOrigBoard[_ob]._baseKw.indexOf(pick);if(_baseIdx!==-1)atkOrigBoard[_ob]._baseKw.splice(_baseIdx,1);}
              break;
            }
          }
        }
        log2.push({cls:'kill',text:'[Chise] '+target.name+'\'s '+(KW_LABELS[pick]||pick)+' remove!'+(isGolden?' (permanent)':'')});
      }
    }
  }

  function dealDamage(attacker,atkArr,defender,defArr,log2,isCleave,dmgOverride){
    var hitResult=dealHit(attacker,defender,log2,dmgOverride,true);
    // 방어자 맞고 살아남았으면 Survive check
    checkSurvive(defender,defArr,log2,attacker);
    // Reijo Passive: damage를 주지 못하면 counter도 받지 않음
    var _reijoBlock=(attacker.baseId==='reijo'&&!attacker._abilitiesStripped&&hitResult&&hitResult.blocked);
    if(!isCleave&&!hasKw(attacker,'ranged')&&!hasKw(attacker,'selfdestruct')&&!_reijoBlock){
      // Haruka counter: 5회(skin 10회) 다회 counter
      if(defender.baseId==='haruka'&&defender.alive&&!defender._abilitiesStripped){
        var counterHits=defender.isSkin?10:5;
        log2.push({cls:'hit',text:defender.name+'\'s counter! '+counterHits+'hits!'});
        for(var _ch=0;_ch<counterHits;_ch++){
          if(!attacker.alive||attacker.hp<=0)break;
          dealHit(defender,attacker,log2);
          checkSurvive(attacker,atkArr,log2,defender);
        }
      } else {
        var counterResult=dealHit(defender,attacker,log2);
        // attack자 counter 맞고 살아남았으면 Survive check
        checkSurvive(attacker,atkArr,log2,defender);
      }
      // Chise Passive: counter 후 opponent ability remove
      var _atkOrigBoard=(!opts||!opts.simCtx)?(atkArr===a?boardA:boardB):null;
      if(defender.alive) checkChisePassive(defender,attacker,_atkOrigBoard,log2);
    }
    resolveDeath(defender,defArr,atkArr,log2,attacker);
    if(!isCleave&&!hasKw(attacker,'ranged')&&!hasKw(attacker,'selfdestruct'))resolveDeath(attacker,atkArr,defArr,log2,defender);
    peroCheck(attacker,defender,atkArr,log2);
    return hitResult;
  }

  // Survive effect 추enemy (실제 board 반영용)
  var surviveEffects=[];

  // Saya Passive: battle 중 effect immune (base: all, skin: enemy만) — Battle Start 전에 설정
  for(var _sy=0;_sy<a.length;_sy++){if(a[_sy].baseId==='saya'&&a[_sy].alive&&!a[_sy]._abilitiesStripped){a[_sy]._sayaImmune=true;if(!a[_sy].isSkin)a[_sy].abilityImmune=true;}}
  for(var _sy=0;_sy<b.length;_sy++){if(b[_sy].baseId==='saya'&&b[_sy].alive&&!b[_sy]._abilitiesStripped){b[_sy]._sayaImmune=true;if(!b[_sy].isSkin)b[_sy].abilityImmune=true;}}

  // 초기 스냅샷 (Battle Start games 상태)
  steps.push({atkSide:null,atkIdx:-1,defSide:null,defIdx:-1,log:[],snap:snapshot()});

  // Battle Start phase (skipSOC 시 건너뜀)
  if(!skipSOC){
    var socLog=[];
    resolveStartOfCombat(a,b,socLog);
    if(socLog.length>0){
      for(var i=0;i<socLog.length;i++)log.push(socLog[i]);
      steps.push({atkSide:null,atkIdx:-1,defSide:null,defIdx:-1,log:socLog,snap:snapshot()});
    }
  }

  // Kiki Passive: field all 5/5 이하로 제한 (Battle Start 후 enemy용, Kiki 본인 제외)
  var _kikiOnField=false;
  for(var _kk=0;_kk<a.length;_kk++){if(a[_kk].alive&&a[_kk].baseId==='shanhai_kiki'){_kikiOnField=true;break;}}
  if(!_kikiOnField){for(var _kk=0;_kk<b.length;_kk++){if(b[_kk].alive&&b[_kk].baseId==='shanhai_kiki'){_kikiOnField=true;break;}}}
  if(_kikiOnField){
    var _both=a.concat(b);
    for(var _kk=0;_kk<_both.length;_kk++){
      // effect immune unit(Saya/Mika/검은 군주 등)은 Kiki 공체 제한을 받지 않음
      if(_both[_kk].alive&&_both[_kk].baseId!=='shanhai_kiki'&&!_both[_kk].abilityImmune&&!_both[_kk]._sayaImmune&&!_both[_kk]._effectImmune){
        if(_both[_kk].atk>5)_both[_kk].atk=5;
        if(_both[_kk].hp>5)_both[_kk].hp=5;
        if(_both[_kk].maxHp>5)_both[_kk].maxHp=5;
      }
    }
  }

  // attack 순서: all 배열에서 위치 포인터를 maintain하고, 죽은 unit은 건너뜀
  function findNextAttacker(arr, startPos){
    var len=arr.length;if(len===0)return{unit:null,pos:0};
    for(var i=0;i<len;i++){
      var idx=(startPos+i)%len;
      if(arr[idx].alive&&!arr[idx].noAttack&&arr[idx].atk>0)return{unit:arr[idx],pos:idx};
    }
    return{unit:null,pos:startPos};
  }

  // Reisa Magical Girl: Battle Start buff 후 풀 hp record
  for(var _r=0;_r<a.length;_r++)if(a[_r].isSkin&&a[_r].baseId==='reisa')a[_r]._reisaFullHp=a[_r].hp;
  for(var _r=0;_r<b.length;_r++)if(b[_r].isSkin&&b[_r].baseId==='reisa')b[_r]._reisaFullHp=b[_r].hp;

  for(var round=0;round<maxRounds;round++){
    var aliveA=getAlive(a),aliveB=getAlive(b);
    if(aliveA.length===0||aliveB.length===0)break;
    var atkArr2,defArr2;
    var nextAtk;
    if(coinSeq){
      // battle 중 summon된 token coinSeq에 add (테일즈 취급, 순서대로 뒤에 붙음)
      for(var _ti=0;_ti<a.length;_ti++){var _tk='a:'+_ti;if(!coinSeqKeys[_tk]){coinSeq.push({side:'a',pos:_ti});coinSeqKeys[_tk]=true;}}
      for(var _ti=0;_ti<b.length;_ti++){var _tk='b:'+_ti;if(!coinSeqKeys[_tk]){coinSeq.push({side:'b',pos:_ti});coinSeqKeys[_tk]=true;}}
      var _found=false;
      for(var _ct=0;_ct<coinSeq.length;_ct++){
        var _ci=coinSeq[(coinQueuePtr+_ct)%coinSeq.length];
        var _ca=_ci.side==='a'?a:b;
        var _cu=_ca[_ci.pos];
        if(_cu&&_cu.alive&&!_cu.noAttack&&_cu.atk>0){
          atkArr2=_ca;defArr2=_ci.side==='a'?b:a;
          turnA=(_ci.side==='a');
          nextAtk={unit:_cu,pos:_ci.pos};
          coinQueuePtr=(coinQueuePtr+_ct+1)%coinSeq.length;
          _found=true;break;
        }
      }
      if(!_found)break;
    }else{
      if(turnA){atkArr2=a;defArr2=b;}
      else{atkArr2=b;defArr2=a;}
      nextAtk=findNextAttacker(atkArr2, turnA?idxA:idxB);
      if(!nextAtk.unit)break;
    }
    var attacker=nextAtk.unit;
    if(!attacker)break;
    var strikes=hasKw(attacker,'windfury')?2:1;
    for(var s=0;s<strikes;s++){
      var target;
      // Kasumi Battle Start: 지정된 강제 타겟이 살아있으면 우선
      if(attacker._forcedTarget&&attacker._forcedTarget.alive){target=attacker._forcedTarget;attacker._forcedTarget=null;}
      else{target=findTarget(defArr2);}
      if(!target)break;
      var atkSide=turnA?'a':'b';
      var atkI=(atkSide==='a')?a.indexOf(attacker):b.indexOf(attacker);
      var defSide=turnA?'b':'a';
      var defI=(defSide==='a')?a.indexOf(target):b.indexOf(target);
      var stepLog=[];
      var stepMultiHits=0;
      // Ambush 해제: 첫 attack 시 Ambush 상태 해제
      if(!attacker._hasAttacked){attacker._hasAttacked=true;}
      // Windfury 2회째 attack 알림
      if(s>0) stepLog.push({cls:'hit',text:'  → [Windfury] '+attacker.name+': 2nd attack!'});
      // Preemptive (Ui: abilityremove, Utaha: 천둥이)
      var skipMain=triggerPreemptive(attacker,target,defArr2,atkArr2,stepLog);

      if(!skipMain){
        // Preemptive 다회 attack (Haruka/Hina타/Nagusa/Wakamo)
        if(['haruka','hinata','nagusa','wakamo'].indexOf(attacker.baseId)!==-1){
          var msMin,msMax,msHits;
          if(attacker.baseId==='haruka'){
            msHits=attacker.isSkin?10:5;
          }else if(attacker.baseId==='hinata'){
            msMin=1;msMax=5;
          }else{
            msMin=attacker.isSkin?4:2;msMax=attacker.isSkin?10:5;
            msHits=msMin+Math.floor(Math.random()*(msMax-msMin+1));
          }
          stepMultiHits=msHits;
          stepLog.push({cls:'hit',text:attacker.name+'\'s Preemptive! '+msHits+'hit attack!'});
          var msKillCount=0;
          for(var ms=0;ms<msHits;ms++){
            if(!target.alive||target.hp<=0)break;
            var msHit=dealHit(attacker,target,stepLog,undefined,true);
            checkSurvive(target,defArr2,stepLog,attacker);
            // Nagusa: 타격당 Succession counter (allied만)
            if(attacker.baseId==='nagusa'&&!msHit.blocked&&attacker._mySide===a){
              var kAdd2=attacker.isSkin?2:1;
              if(!_G.keiseisenCounters) _G.keiseisenCounters={};
              _G.keiseisenCounters['nagusa']=Math.min(7,(_G.keiseisenCounters['nagusa']||0)+kAdd2);
            }
            // Wakamo: 타격당 Hovercraft counter
            if(attacker.baseId==='wakamo'&&!msHit.blocked){
              var hcAdd=attacker.isSkin?2:1;
              attacker._hovercraftCounter=Math.min(4,(attacker._hovercraftCounter||0)+hcAdd);
              stepLog.push({cls:'soc',text:'[Preemptive] '+attacker.name+': Hovercraft counter +'+hcAdd+' (current: '+attacker._hovercraftCounter+')'});
              if(attacker._hovercraftCounter>=4){
                attacker._hovercraftCounter-=4;
                var hc=makeToken('hovercraft');
                hc.atk=attacker.isSkin?20:10;hc.hp=attacker.isSkin?20:10;
                hc.alive=true;hc.poisonImmune=false;hc._mySide=atkArr2;
                hc.isSkin=attacker.isSkin;hc._wakamoGolden=attacker.isSkin;
                applyEimiBonus(hc,atkArr2);
                if(countAlive(atkArr2)<BATTLE_MAX){atkArr2.push(hc);}
                stepLog.push({cls:'soc',text:'[Passive] '+attacker.name+': Hovercraft summon! ('+hc.atk+'/'+hc.hp+')'});
              }
            }
            if(target.hp<=0){msKillCount++;break;}
          }
          // 다회 attack 후 counter 1회
          if(target.alive){
            var msCounter=dealHit(target,attacker,stepLog);
            checkSurvive(attacker,atkArr2,stepLog,target);
          }
          resolveDeath(target,defArr2,atkArr2,stepLog,attacker);
          resolveDeath(attacker,atkArr2,defArr2,stepLog,target);
          peroCheck(attacker,target,atkArr2,stepLog);
        }
        // Self-destruct: 공+체 합산 attack 후 defeat
        else if(hasKw(attacker,'selfdestruct')){
          var sdDmg=attacker.atk+attacker.hp;
          stepLog.push({cls:'hit',text:attacker.name+'\'s Self-destruct! ('+attacker.atk+'+'+attacker.hp+'='+sdDmg+' damage)'});
          var hitResult=dealDamage(attacker,atkArr2,target,defArr2,stepLog,false,sdDmg);
          // Self-destruct unit 강제 death
          if(attacker.alive){
            killUnit(attacker,atkArr2,defArr2,stepLog,null);
          }
        }
        else {
          var hitResult=dealDamage(attacker,atkArr2,target,defArr2,stepLog,false);
          // Cleave
          if(hasKw(attacker,'cleave')){
            var aliveD=getAlive(defArr2);var tIdx=-1;
            for(var k=0;k<aliveD.length;k++)if(aliveD[k]===target)tIdx=k;
            var cleaveHit=false;
            if(tIdx>0&&aliveD[tIdx-1]){dealDamage(attacker,atkArr2,aliveD[tIdx-1],defArr2,stepLog,true);cleaveHit=true;}
            if(tIdx<aliveD.length-1&&aliveD[tIdx+1]){dealDamage(attacker,atkArr2,aliveD[tIdx+1],defArr2,stepLog,true);cleaveHit=true;}
            if(cleaveHit) stepLog.push({cls:'hit',text:'  → [Cleave] '+attacker.name+': adjacent attack!'});
          }
          // Pierce
          else if(hasKw(attacker,'pierce')&&!hitResult.blocked&&hitResult.overflow>0){
            // Sena: overflow damage로 allied all 회복
            if(attacker.baseId==='sena'){
              var healAmt=attacker.isSkin?hitResult.overflow*2:hitResult.overflow;
              stepLog.push({cls:'shield',text:attacker.name+'\'s Pierce! allied all HP +'+healAmt+' healed!'});
              for(var h=0;h<atkArr2.length;h++){if(atkArr2[h].alive)atkArr2[h].hp+=healAmt;}
            } else {
              // Arisu: overflow damage 양옆 전달
              var aliveD=getAlive(defArr2);var tIdx=-1;
              for(var k=0;k<aliveD.length;k++)if(aliveD[k]===target)tIdx=k;
              stepLog.push({cls:'hit',text:attacker.name+'\'s Pierce! overflow damage '+hitResult.overflow+'!'});
              if(tIdx>0&&aliveD[tIdx-1])dealDamage(attacker,atkArr2,aliveD[tIdx-1],defArr2,stepLog,true,hitResult.overflow);
              if(tIdx<aliveD.length-1&&aliveD[tIdx+1])dealDamage(attacker,atkArr2,aliveD[tIdx+1],defArr2,stepLog,true,hitResult.overflow);
            }
          }
          // 슌 Passive: 킬 시 chain (base: 오버킬 damage 전달, skin: add attack chain)
          // 별도 스텝으로 분리해서 애니메이션 재생
          if(attacker.baseId==='shun'&&!attacker._abilitiesStripped&&!target.alive&&hitResult&&!hitResult.blocked){
            if(!_G._shunPendingSteps)_G._shunPendingSteps=[];
            var _shunOverflow=hitResult.overflow;
            var _shunChain=0;
            while(_shunChain<20&&attacker.alive){
              var shunNext=findTarget(defArr2);
              if(!shunNext)break;
              var shunDefI2=(defSide==='a')?a.indexOf(shunNext):b.indexOf(shunNext);
              var shunLog=[];
              if(attacker.isSkin){
                shunLog.push({cls:'hit',text:'[Passive] '+attacker.name+': '+shunNext.name+'additional attack!'});
                var shunHit=dealDamage(attacker,atkArr2,shunNext,defArr2,shunLog,true);
                _G._shunPendingSteps.push({atkSide:atkSide,atkIdx:atkI,defSide:defSide,defIdx:shunDefI2,atkId:attacker.id,defId:shunNext.id,log:shunLog,snap:snapshot()});
                if(!shunNext.alive){_shunChain++;continue;}
                break;
              } else {
                if(_shunOverflow<=0)break;
                shunLog.push({cls:'hit',text:'[Passive] '+attacker.name+': remaining damage '+_shunOverflow+': '+shunNext.name+'to!'});
                var shunHit=dealDamage(attacker,atkArr2,shunNext,defArr2,shunLog,true,_shunOverflow);
                _G._shunPendingSteps.push({atkSide:atkSide,atkIdx:atkI,defSide:defSide,defIdx:shunDefI2,atkId:attacker.id,defId:shunNext.id,log:shunLog,snap:snapshot()});
                if(!shunNext.alive&&shunHit&&shunHit.overflow>0){_shunOverflow=shunHit.overflow;_shunChain++;continue;}
                break;
              }
            }
          }
        }
      }

          // Kazusa Passive: 킬 시 Reisa summon (battle 중 1회)
          if(attacker.baseId==='kazusa'&&!attacker._abilitiesStripped&&!target.alive&&hitResult&&!hitResult.blocked&&!_G._kazusaSummonedReisa){
            if(countAlive(atkArr2)<BATTLE_MAX){
              var reiTmpl=findAnyChar('reisa');
              if(reiTmpl){
                _G._kazusaSummonedReisa=true;
                var rei={id:'rei_'+Math.random().toString(36).substr(2,4),baseId:'reisa',isToken:true,
                  name:reiTmpl.name,school:reiTmpl.school,tier:reiTmpl.tier,
                  atk:attacker.isSkin?(reiTmpl.atk*2+1):reiTmpl.atk,hp:attacker.isSkin?(reiTmpl.hp*2+1):reiTmpl.hp,
                  kw:['survive'],img:attacker.isSkin?reiTmpl.imgGold:reiTmpl.img,isSkin:attacker.isSkin,alive:true,poisonImmune:false,_mySide:atkArr2};
                atkArr2.push(rei);
                stepLog.push({cls:'soc',text:'[Passive] '+attacker.name+': '+rei.name+' summon! ('+rei.atk+'/'+rei.hp+')'});
              }
            }
          }
      // steal기 Turn 카운트 (Satsuki DR로 steal긴 unit)
      if(attacker._stolenTurns){
        attacker._stolenTurns--;
        if(attacker._stolenTurns<=0&&attacker.alive){
          var stIdx=atkArr2.indexOf(attacker);
          if(stIdx!==-1)atkArr2.splice(stIdx,1);
          if(attacker._stolenFrom)attacker._stolenFrom.push(attacker);
          delete attacker._stolenTurns;delete attacker._stolenFrom;
          stepLog.push({cls:'soc',text:attacker.name+'returned to original side!'});
        }
      }

      // Aru/Mika Preemptive ATK restore
      if(attacker._aruOrigAtk!==undefined){attacker.atk=attacker._aruOrigAtk;delete attacker._aruOrigAtk;}
      if(attacker._mikaOrigAtk!==undefined){attacker.atk=attacker._mikaOrigAtk;delete attacker._mikaOrigAtk;}
      // Suzumi debuff Turn 감소
      if(attacker._suzumiDebuff>0){
        attacker._suzumiDebuff--;
        if(attacker._suzumiDebuff<=0&&attacker._suzumiOrigAtk!==undefined){
          attacker.atk=attacker._suzumiOrigAtk;delete attacker._suzumiOrigAtk;delete attacker._suzumiDebuff;
        }
      }
      // Mimori debuff Turn 감소
      if(attacker._mimoriDebuff>0&&attacker._mimoriDebuff<99){
        attacker._mimoriDebuff--;
        if(attacker._mimoriDebuff<=0&&attacker._mimoriOrigAtk!==undefined){
          attacker.atk=attacker._mimoriOrigAtk;delete attacker._mimoriOrigAtk;delete attacker._mimoriDebuff;
        }
      }
      if(stepLog.length>0){
        for(var sl=0;sl<stepLog.length;sl++)log.push(stepLog[sl]);
        // _peakHp / _peakAtk 갱신
        for(var _pp=0;_pp<a.length;_pp++){if(a[_pp].hp>(a[_pp]._peakHp||0))a[_pp]._peakHp=a[_pp].hp;if(a[_pp].atk>(a[_pp]._peakAtk||0))a[_pp]._peakAtk=a[_pp].atk;}
        for(var _pp=0;_pp<b.length;_pp++){if(b[_pp].hp>(b[_pp]._peakHp||0))b[_pp]._peakHp=b[_pp].hp;if(b[_pp].atk>(b[_pp]._peakAtk||0))b[_pp]._peakAtk=b[_pp].atk;}
        var stepObj={atkSide:atkSide,atkIdx:atkI,defSide:defSide,defIdx:defI,atkId:attacker.id,defId:target.id,log:stepLog,snap:snapshot()};
        if(stepMultiHits>0) stepObj.multiHits=stepMultiHits;
        if(attacker.baseId==='haruka'&&stepMultiHits>0) stepObj.pajdikUid=attacker.id;
        steps.push(stepObj);
        // 슌 Passive addattack steps
        if(_G._shunPendingSteps&&_G._shunPendingSteps.length>0){
          for(var _ss=0;_ss<_G._shunPendingSteps.length;_ss++){
            var _sStep=_G._shunPendingSteps[_ss];
            for(var _ssl=0;_ssl<_sStep.log.length;_ssl++)log.push(_sStep.log[_ssl]);
            steps.push(_sStep);
          }
          _G._shunPendingSteps=[];
        }
        // Haruka Passive counter step
        if(_G._harukaCounterPending){
          var _hcp=_G._harukaCounterPending;
          delete _G._harukaCounterPending;
          if(_hcp.haruka.alive&&_hcp.target.alive){
            var hcLog=[];
            var hcHits=_hcp.haruka.isSkin?10:5;
            hcLog.push({cls:'hit',text:'[Passive] '+_hcp.haruka.name+': counter! '+hcHits+'hit attack!'});
            for(var _hci=0;_hci<hcHits;_hci++){
              if(!_hcp.target.alive)break;
              dealHit(_hcp.haruka,_hcp.target,hcLog);
              checkSurvive(_hcp.target,_hcp.targetArr,hcLog,_hcp.haruka);
            }
            resolveDeath(_hcp.target,_hcp.targetArr,_hcp.harukaArr,hcLog,_hcp.haruka);
            for(var _hcl=0;_hcl<hcLog.length;_hcl++)log.push(hcLog[_hcl]);
            var hcSide=(_hcp.harukaArr===a)?'a':'b';
            var hcIdx=_hcp.harukaArr.indexOf(_hcp.haruka);
            var hcStep={atkSide:hcSide,atkIdx:hcIdx,defSide:hcSide==='a'?'b':'a',defIdx:_hcp.targetArr.indexOf(_hcp.target),atkId:_hcp.haruka.id,defId:_hcp.target.id,log:hcLog,snap:snapshot(),pajdikUid:_hcp.haruka.id};
            steps.push(hcStep);
          }
        }
      }
      if(!attacker.alive)break;if(getAlive(defArr2).length===0)break;
    }
    // 다음 포인터: current 위치+1 (배열 끝이면 0으로 순환) — coinSeq 모드에선 coinQueuePtr이 이미 갱신됨
    if(!coinSeq){
      if(turnA)idxA=(nextAtk.pos+1)%a.length;
      else idxB=(nextAtk.pos+1)%b.length;
      turnA=!turnA;
    }
  }

  var survivorsA=getAlive(a),survivorsB=getAlive(b);
  var result;
  if(survivorsA.length>0&&survivorsB.length===0)result='win';
  else if(survivorsA.length===0&&survivorsB.length>0)result='lose';
  else result='draw';

  var damage=0;
  if(result==='lose'){for(var i=0;i<survivorsB.length;i++)damage+=survivorsB[i].tier;}

  // 보충수업부 Passive: victory 시 survive해 있으면 opponent HP instant kill
  var makeupInstakill=false;
  if(result==='win'){
    for(var i=0;i<survivorsA.length;i++){
      if(survivorsA[i].baseId==='trinity_makeup'){makeupInstakill=true;break;}
    }
  }

  G.rioSchool=null;
  // battle end 후 board 원본 kw restore (sim 제외)
  if(!opts||!opts.simCtx){
    for(var _bk=0;_bk<boardA.length;_bk++) if(boardA[_bk]._baseKw!==undefined){boardA[_bk].kw=boardA[_bk]._baseKw.slice();delete boardA[_bk]._baseKw;}
    for(var _bk=0;_bk<boardB.length;_bk++) if(boardB[_bk]._baseKw!==undefined){boardB[_bk].kw=boardB[_bk]._baseKw.slice();delete boardB[_bk]._baseKw;}
  }
  return{result:result,log:log,steps:steps,survivorsA:survivorsA,survivorsB:survivorsB,damage:damage,surviveEffects:surviveEffects,_sideA:a,_makeupInstakill:makeupInstakill,panchanDeathsA:a._panchanDeaths||0,panchanDeathsB:b._panchanDeaths||0};
}

function _playBattleHiddenSfx(p,opp){
  var enemyHas7=false,allyHas7=false;
  if(opp&&opp.board){for(var i=0;i<opp.board.length;i++){if(opp.board[i].tier>=7||opp.board[i].isHidden){enemyHas7=true;break;}}}
  for(var i=0;i<p.board.length;i++){if(p.board[i].tier>=7||p.board[i].isHidden||p.board[i]._keiseisenBuffed){allyHas7=true;break;}}
  var src=null;
  if(enemyHas7) src='../audio/battle_hidden_enemy.mp3';
  else if(allyHas7) src='../audio/battle_hidden_ally.mp3';
  if(src){
    try{
      var a=new Audio(src);a.volume=0.6;a.play();
      // 3초부터 fadeout, 5초에 볼륨 0
      setTimeout(function(){
        var fadeInt=setInterval(function(){a.volume=Math.max(0,a.volume-0.03);if(a.volume<=0){clearInterval(fadeInt);a.pause();}},100);
      },3000);
    }catch(e){}
  }
}
function startBattle() {
  console.log('[DEBUG] startBattle called, phase='+G.phase+', turn='+G.turn);
  document.title='[battlestart] Turn'+G.turn+' '+Date.now();
  try {
  // 잔여 상태 초기화 (스펠 사용 후 상태 남아있을 경우 방어)
  G.pendingSpell=null;
  var _sho=document.querySelector('.spell-hint-overlay');if(_sho)_sho.remove();
  var _bov=document.getElementById('battle-overlay');if(_bov)_bov.classList.remove('active');
  var _bia=document.getElementById('battle-intro-area');if(_bia)_bia.innerHTML='';
  playSfx('battle_start');
  lastSold=null;
  _activeCoinOverlay=null;
  var p=G.players[0];
  // Serika Passive: recruit phase end 시 남은 pyroxene 모두 소비하여 ATK/HP에 permanent add
  if(p.stone>0){
    var _hasSerika=false;
    for(var _sk=0;_sk<p.board.length;_sk++){
      if(p.board[_sk].baseId==='serika'){_hasSerika=true;break;}
    }
    if(_hasSerika){
      var _serikaStone=p.stone;
      for(var _sk=0;_sk<p.board.length;_sk++){
        if(p.board[_sk].baseId==='serika'){
          var _sSt=_serikaStone*(p.board[_sk].isSkin?2:1);
          p.board[_sk].atk+=_sSt;p.board[_sk].hp+=_sSt;
          if(!p.board[_sk].maxHp)p.board[_sk].maxHp=p.board[_sk].hp;else p.board[_sk].maxHp+=_sSt;
          logBuff(p.board[_sk],'Serika Passive',_sSt,_sSt);
        }
      }
      trackNonomiStone(_serikaStone);
      p.stone=0;
    }
  }
  var alive=[];for(var i=1;i<G.players.length;i++)if(!G.players[i].dead)alive.push(G.players[i]);
  if(alive.length===0)return;
  var opp=alive[Math.floor(Math.random()*alive.length)];
  _playBattleHiddenSfx(p,opp);

  var boardSnapshot=p.board.map(function(u){
    return{id:u.id,atk:u.atk,hp:u.hp,maxHp:u.maxHp,kw:(u.kw||[]).slice(),name:u.name};
  });

  // 선/후공 두 경우 미리 계산 (coin 결과에 따라 select) — 글로벌 counter는 resultC만 반영
  _gBattleCounterSave=saveGBattleCounters();
  var pdA=p.panchanDeaths||0, pdB=opp.panchanDeaths||0;
  var resultA=runBattle(p.board,opp.board,true,{panchanDeathsA:pdA,panchanDeathsB:pdB});
  restoreGBattleCounters(_gBattleCounterSave);
  var resultB=runBattle(p.board,opp.board,false,{panchanDeathsA:pdA,panchanDeathsB:pdB});
  restoreGBattleCounters(_gBattleCounterSave);
  resultA._initPdA=pdA;resultA._initPdB=pdB;

  battleState.skip=false;
  var overlay=document.getElementById('battle-overlay');
  overlay.classList.add('active');
  document.getElementById('battle-arena').style.display='none';
  document.getElementById('battle-log').style.display='none';
  document.getElementById('battle-result-box').style.display='none';
  document.getElementById('btn-continue').style.display='none';
  document.getElementById('btn-skip').style.display='none';
  var intro=document.getElementById('battle-intro-area');
  intro.innerHTML='<div class="battle-intro"><div class="vs-name">Sensei <span style="color:#a78bfa">(Lv.'+p.tier+')</span></div><div class="vs-text">VS</div><div class="vs-name">'+opp.name+' <span style="color:#a78bfa">(Lv.'+opp.tier+')</span></div></div>';

  setTimeout(function(){
    intro.innerHTML='';
    // tutorial 중이면 battle 일시정지 — tutorial 끝나면 재개
    if(G.isTutorial && TUT.active && TUT.step < TUTORIAL_STEPS.length) {
      var s=TUTORIAL_STEPS[TUT.step];
      if(s && s.bubbleMode==='battle') {
        // battle field/log 미리 보이게
        document.getElementById('battle-arena').style.display='';
        document.getElementById('battle-log').style.display='';
        // 재개 함수 save — 원래 흐름을 이어감
        var _savedThis = this;
        TUT.battleResumeFn = function() {
          // battle-arena/log 숨긴 상태에서 정상 흐름 재개
          startBattleAnimation(resultA,opp,resultB,_battleChosenCallback);
        };
        tutShowStep();
        return;
      }
    }
    // Battle Start 이후, 첫 attack 전에 coin phase 삽입
    startBattleAnimation(resultA,opp,resultB,_battleChosenCallback);

    function _battleChosenCallback(chosen){
      var _questEnemyBoardLen = opp.board.length; // quest용 enemy board 크기 캡처
      // Juri death counter player에 반영
      p.panchanDeaths=chosen.panchanDeathsA||0;
      opp.panchanDeaths=chosen.panchanDeathsB||0;
      // coin draw: damage 없이 넘어가기
      if(chosen.coinDraw){
        chosen.damageText='Coin draw! Skipping battle.';
        _gBattleCounterSave=null;
        restoreBoardFromSnapshot(p,boardSnapshot);
        aiAutoBattles();
        return;
      }
      // coin 결과로 select된 battle 결과 process
      if(chosen.result!=='lose'){
        for(var _tg=0;_tg<p.board.length;_tg++){
          if(p.board[_tg].baseId==='gehenna_traingun') p.board[_tg]._battlesSurvived=(p.board[_tg]._battlesSurvived||0)+1;
        }
      }
      var dmgCap=9999;
      if(G.turn<=5)dmgCap=10;else if(G.aliveCount>4)dmgCap=15;
      if(chosen.result==='lose'){
        var dmg=chosen.damage+opp.tier;if(dmg>dmgCap)dmg=dmgCap;p.hp-=dmg;
        G.totalDamageTaken=(G.totalDamageTaken||0)+dmg;
        chosen.damageText='Defeat! Took '+dmg+' damage (Schedule '+opp.tier+' + minions '+(chosen.damage)+')';
      } else if(chosen.result==='win'){
        if(chosen._makeupInstakill){
          opp.hp=0;
          chosen.damageText='Victory! Make-Up Work Club\'s Passive: '+opp.name+'\'s HP set to 0!';
        } else {
          var dmg=0;for(var i=0;i<chosen.survivorsA.length;i++)dmg+=chosen.survivorsA[i].tier;
          dmg+=p.tier;if(dmg>dmgCap)dmg=dmgCap;opp.hp-=dmg;
          chosen.damageText='victory! '+opp.name+'to '+dmg+' damage';
        }
        if(opp.hp<=0){opp.dead=true;G.aliveCount--;for(var k=0;k<opp.board.length;k++)returnToPool(opp.board[k].baseId,opp.board[k].isSkin?3:1);opp.board=[];chosen._eliminated=true;}
      } else {
        chosen.damageText='draw!';
      }
      if(p.hp<=0){p.dead=true;G.placement=G.aliveCount;G.aliveCount--;chosen._eliminated=true;}
      var PERMA_DESTROY_IDS=['gehenna_traingun','trinity_seia','gehenna_prefect'];
      if(chosen.steps.length>0){
        var finalSnap=chosen.steps[chosen.steps.length-1].snap;
        if(finalSnap&&finalSnap.a){
          for(var _di=0;_di<finalSnap.a.length;_di++){
            if(!finalSnap.a[_di].alive&&PERMA_DESTROY_IDS.indexOf(finalSnap.a[_di].baseId)!==-1){
              for(var _dj=0;_dj<p.board.length;_dj++){
                if(p.board[_dj].baseId===finalSnap.a[_di].baseId) p.board[_dj]._permanentlyDestroyed=true;
              }
            }
          }
        }
        // enemy(opp) board에서도 permanent 소멸 card remove
        if(finalSnap&&finalSnap.b){
          for(var _di=0;_di<finalSnap.b.length;_di++){
            if(!finalSnap.b[_di].alive&&PERMA_DESTROY_IDS.indexOf(finalSnap.b[_di].baseId)!==-1){
              opp.board=opp.board.filter(function(u){return u.baseId!==finalSnap.b[_di].baseId;});
              returnToPool(finalSnap.b[_di].baseId,finalSnap.b[_di].isSkin?3:1);
            }
          }
        }
      }
      if(chosen._sideA){
        for(var _ci=0;_ci<chosen._sideA.length&&_ci<p.board.length;_ci++){
          if(chosen._sideA[_ci].baseId===p.board[_ci].baseId){
            if(chosen._sideA[_ci]._hovercraftCounter) p.board[_ci]._hovercraftCounter=chosen._sideA[_ci]._hovercraftCounter;
          }
        }
      }
      // quest 트래킹: 킬 수, 7-star card survive
      if(window._questTracker) {
        var enemyTotal = _questEnemyBoardLen;
        var enemySurvivors = (chosen.survivorsB||[]).length;
        window._questTracker.kills += (enemyTotal - enemySurvivors);
        // 7-star card survive check (victory 시)
        if(chosen.result==='win' && chosen.survivorsA) {
          for(var _qi=0;_qi<chosen.survivorsA.length;_qi++) {
            if(chosen.survivorsA[_qi].isHidden) { window._questTracker.hiddenSurvived = true; break; }
          }
        }
      }
      // Shiroko Terror DR check: restore 전에 플래그 save
      var _stDRFired=false;
      for(var _sti=0;_sti<p.board.length;_sti++){
        if(p.board[_sti].baseId==='Shiroko_Terror'&&p.board[_sti]._shirokoTerrorDRFired){_stDRFired=true;break;}
      }
      restoreBoardFromSnapshot(p,boardSnapshot);
      // Shiroko Passive: 이번 battle 킬 수만큼 다음 Turn pyroxene
      if(G._shirokoKillsThisBattle>0){
        G.bonusStone=(G.bonusStone||0)+G._shirokoKillsThisBattle;
        G._shirokoKillsThisBattle=0;
      }
      // Ayane Deathrattle: 이번 battle Ayane death 수만큼 다음 Turn pyroxene
      if(G._ayaneDeathsThisBattle>0){
        G.bonusStone=(G.bonusStone||0)+G._ayaneDeathsThisBattle;
        G._ayaneDeathsThisBattle=0;
      }
      // Kei(USB) survive → Arisu&Kei로 변환
      if(chosen.survivorsA){
        var _keiSurvived=false;
        for(var _ki=0;_ki<chosen.survivorsA.length;_ki++){
          if(chosen.survivorsA[_ki].baseId==='Kei_usb'){_keiSurvived=true;break;}
        }
        if(_keiSurvived){
          var akTmpl=findHiddenChar('Arisu_Kei');
          if(akTmpl){
            // board에서 Kei_usb와 arisu remove, Arisu_Kei add
            var akBonusAtk=0,akBonusHp=0;
            var akNewBoard=[];
            for(var _ki2=0;_ki2<p.board.length;_ki2++){
              if(p.board[_ki2].baseId==='Kei_usb'||p.board[_ki2].baseId==='arisu'){
                akBonusAtk+=p.board[_ki2].atk;akBonusHp+=p.board[_ki2].hp;
                returnToPool(p.board[_ki2].baseId,p.board[_ki2].isSkin?3:1);
              } else { akNewBoard.push(p.board[_ki2]); }
            }
            p.board=akNewBoard;
            var akUnit={id:'arisu_kei_'+Math.random().toString(36).substr(2,4),baseId:'Arisu_Kei',isHidden:true,
              name:akTmpl.name,school:akTmpl.school,tier:akTmpl.tier,
              atk:akTmpl.atk+akBonusAtk,hp:akTmpl.hp+akBonusHp,maxHp:akTmpl.hp+akBonusHp,
              kw:akTmpl.kw.slice(),img:akTmpl.img,isSkin:false,alive:true};
            p.board.push(akUnit);
            G.hiddenCardsOwned['Arisu_Kei']=true;G.hiddenCardsEverOwned['Arisu_Kei']=true;
            // 연출은 continueBattle → recruit phase 진입 시 재생
            G._pendingArisuKeiEntrance=true;
          }
        }
      }
      // Shiroko Terror DR: Deathrattle trigger 시 absorb된 student들 board 귀환
      if(_stDRFired){
        for(var _sti=0;_sti<p.board.length;_sti++){
          if(p.board[_sti].baseId==='Shiroko_Terror'){
            p.board.splice(_sti,1);
            if(G._shirokoTerrorAbsorbed&&G._shirokoTerrorAbsorbed.length>0){
              for(var _sj=0;_sj<G._shirokoTerrorAbsorbed.length;_sj++){
                if(p.board.length<MAX_BOARD) p.board.push(G._shirokoTerrorAbsorbed[_sj]);
              }
              G._shirokoTerrorAbsorbed=[];
              G.nonomiStoneSinceJoined=0;
            }
            break;
          }
        }
      }
      G.bunnyTossBonus=0; // Bunny Toss reset after battle
      aiAutoBattles();
    }
  },1500);
  } catch(e) {
    console.error('[startBattle ERROR]',e);
    document.title='[Error!] '+e.message;
    alert('Battle start error: '+e.message);
    var _bov2=document.getElementById('battle-overlay');if(_bov2)_bov2.classList.remove('active');
  }
}

function restoreBoardFromSnapshot(player, snapshot) {
  // permanent 소멸 card remove (열차포, Seia)
  player.board = player.board.filter(function(u){
    if(u._permanentlyDestroyed||u._permanentlyDestroyedId) return false;
    // battle 결과에서 permanent 소멸 표시된 baseId check
    return true;
  });
  // token remove (battle 중 summon된 Abi Eshuh 등)
  player.board = player.board.filter(function(u){ return !u.isToken; });
  // battle games stats/keyword로 원복
  for(var i=0;i<player.board.length;i++){
    var u=player.board[i];
    for(var j=0;j<snapshot.length;j++){
      if(snapshot[j].id===u.id){
        u.atk=snapshot[j].atk;
        u.hp=snapshot[j].hp;
        u.maxHp=snapshot[j].maxHp;
        u.kw=snapshot[j].kw.slice();
        u.name=snapshot[j].name;
        break;
      }
    }
  }
}

function aiAutoBattles() {
  var alive=[];for(var i=1;i<G.players.length;i++)if(!G.players[i].dead)alive.push(G.players[i]);
  var shuffled=alive.slice().sort(function(){return Math.random()-0.5;});
  for(var i=0;i+1<shuffled.length;i+=2){
    var a2=shuffled[i],b2=shuffled[i+1];
    var strA=0,strB=0;
    for(var j=0;j<a2.board.length;j++)strA+=a2.board[j].atk+a2.board[j].hp;
    for(var j=0;j<b2.board.length;j++)strB+=b2.board[j].atk+b2.board[j].hp;
    var total=strA+strB+1;
    var aiCap=9999;if(G.turn<=5)aiCap=10;else if(G.aliveCount>4)aiCap=15;
    // AI Fanchan counter 추정: Juri 보유 시 battle당 Fanchan death 추정 (skin=2, 일반=1)
    for(var j=0;j<a2.board.length;j++){if(a2.board[j].baseId==='juri'){a2.panchanDeaths=(a2.panchanDeaths||0)+(a2.board[j].isSkin?2:1);break;}}
    for(var j=0;j<b2.board.length;j++){if(b2.board[j].baseId==='juri'){b2.panchanDeaths=(b2.panchanDeaths||0)+(b2.board[j].isSkin?2:1);break;}}
    if(Math.random()<strA/total){var dmg=a2.tier+Math.floor(Math.random()*4)+1;if(dmg>aiCap)dmg=aiCap;b2.hp-=dmg;b2.totalDamageTaken=(b2.totalDamageTaken||0)+dmg;if(b2.hp<=0){b2.dead=true;G.aliveCount--;for(var k=0;k<b2.board.length;k++)returnToPool(b2.board[k].baseId,b2.board[k].isSkin?3:1);b2.board=[];}}
    else{var dmg=b2.tier+Math.floor(Math.random()*4)+1;if(dmg>aiCap)dmg=aiCap;a2.hp-=dmg;a2.totalDamageTaken=(a2.totalDamageTaken||0)+dmg;if(a2.hp<=0){a2.dead=true;G.aliveCount--;for(var k=0;k<a2.board.length;k++)returnToPool(a2.board[k].baseId,a2.board[k].isSkin?3:1);a2.board=[];}}
    // AI battle 후 permanent 소멸 card remove + 열차포 survive 카운트 (50% chance로 destroy)
    [a2,b2].forEach(function(ai){
      if(ai.dead)return;
      ai.board=ai.board.filter(function(u){
        if(u.baseId==='gehenna_traingun'&&Math.random()<0.5){returnToPool(u.baseId,u.isSkin?3:1);return false;}
        return true;
      });
    });
  }
}

var battleState={skip:false,speed:600};
var _activeCoinOverlay=null;
var _gBattleCounterSave=null;
function saveGBattleCounters(){
  return{millenniumTokenSummons:G.millenniumTokenSummons||0,arisuDeathCount:G.arisuDeathCount||0,
    permanentAbilityBan:!!G.permanentAbilityBan,
    keiseisenCounters:JSON.parse(JSON.stringify(G.keiseisenCounters||{})),
    _shirokoKillsThisBattle:0, _ayaneDeathsThisBattle:0};
}
function restoreGBattleCounters(s){
  G.millenniumTokenSummons=s.millenniumTokenSummons;G.arisuDeathCount=s.arisuDeathCount;
  G.permanentAbilityBan=s.permanentAbilityBan;G.keiseisenCounters=s.keiseisenCounters;
  G._shirokoKillsThisBattle=s._shirokoKillsThisBattle||0;
  G._ayaneDeathsThisBattle=s._ayaneDeathsThisBattle||0;
}
var BCOIN_BASE='../img/Icon/';
var BCOIN_SG='../img/UI/sunglasses.png';
var bSpinTimers={};var BCOIN_DUR=115;

function bStartSpinAlt(sid){
  var img=document.getElementById('bc-'+sid);if(!img)return;
  img.src=BCOIN_BASE+'coin_front.png';
  bSpinTimers[sid]=setTimeout(function(){
    if(img.classList.contains('spinning'))img.src=BCOIN_BASE+'coin_back.png';
    bSpinTimers[sid+'_iv']=setInterval(function(){
      if(!img.classList.contains('spinning'))return;
      img.src=img.src.indexOf('coin_back')!==-1?BCOIN_BASE+'coin_front.png':BCOIN_BASE+'coin_back.png';
    },Math.round(BCOIN_DUR/2));
  },Math.round(BCOIN_DUR*0.45));
}
function bStopSpinAlt(sid){
  clearTimeout(bSpinTimers[sid]);clearInterval(bSpinTimers[sid+'_iv']);
  delete bSpinTimers[sid];delete bSpinTimers[sid+'_iv'];
}
function bSettleCoin(sid,isHeads){
  var img=document.getElementById('bc-'+sid);if(!img)return;
  bStopSpinAlt(sid);img.className='bcoin-img';
  img.src=BCOIN_BASE+(isHeads?'coin_front.png':'coin_back.png');
}
function bCalcTurnOrder(cr,nA,nB,eFirst){
  // left부터 시각 열(visual col) 단위 스캔으로 선공 결정
  // card는 중앙 정렬이므로, 기물 수 enemy은 쪽 's col 0는 기물 수 많은 쪽 's col 0보다 더 right에 위치.
  // offset = floor((maxN - sideCount)/2)
  // 시각 col k → 실제 인덱스 (k - offset)
  // - 한 쪽만 앞면 → 그 쪽 선공
  // - 양쪽 앞면 + 기물 수 동일 → 재토스 (규칙5)
  // - 양쪽 앞면 + 기물 수 다름 → 다음 열로
  // - 양쪽 뒷면(또는 한 쪽 칸 none+뒷면) → 다음 열로
  // 스캔 끝까지 결판 안 남:
  // - 기물 수 다름 → 많은 쪽 선공 (규칙7,8)
  // - 기물 수 동일 → 재토스 (규칙9)
  var tied=false;
  var resolved=false;
  var maxN=Math.max(nA,nB);
  var aOff=Math.floor((maxN-nA)/2);
  var bOff=Math.floor((maxN-nB)/2);
  for(var vi=0;vi<maxN;vi++){
    var aIdx=vi-aOff;
    var bIdx=vi-bOff;
    var aHasCard=(aIdx>=0&&aIdx<nA);
    var bHasCard=(bIdx>=0&&bIdx<nB);
    var aHead=aHasCard&&(cr['a'+aIdx]===true);
    var bHead=bHasCard&&(cr['b'+bIdx]===true);
    if(aHead&&bHead){
      if(nA===nB){tied=true;resolved=true;break;}
      continue;
    }
    if(aHead&&!bHead){eFirst=false;resolved=true;break;}
    if(bHead&&!aHead){eFirst=true;resolved=true;break;}
    // 둘 다 뒷면 혹은 한 쪽 none+뒷면(card 자체 none) → 다음 열
  }
  if(!resolved){
    if(nA>nB)eFirst=false;
    else if(nB>nA)eFirst=true;
    else tied=true;
  }
  if(eFirst===undefined)eFirst=Math.random()<0.5;

  // 각 사이드 's 그룹별 리스트 (left부터)
  var aHeads=[],bHeads=[],aTails=[],bTails=[];
  for(var i=0;i<nA;i++){if(cr['a'+i]===true)aHeads.push('a'+i);else aTails.push('a'+i);}
  for(var i=0;i<nB;i++){if(cr['b'+i]===true)bHeads.push('b'+i);else bTails.push('b'+i);}

  // 번갈아 머지: bFirst true면 b부터 start, false면 a부터 start. 한 쪽 소진되면 나머지 연속.
  function _interleave(listA,listB,bFirst){
    var res=[],ia=0,ib=0,bTurn=bFirst;
    while(ia<listA.length||ib<listB.length){
      if(bTurn){
        if(ib<listB.length)res.push(listB[ib++]);
        else res.push(listA[ia++]);
      }else{
        if(ia<listA.length)res.push(listA[ia++]);
        else res.push(listB[ib++]);
      }
      bTurn=!bTurn;
    }
    return res;
  }

  // 앞면 그룹: eFirst면 b(enemy)부터, No면 a(allied)부터
  var starOrder=_interleave(aHeads,bHeads,eFirst);
  // 뒷면 그룹: 앞면 그룹 Last Turn자 's 반대 사이드부터 start (Turn 이어감)
  // 앞면 그룹이 비었다면 eFirst 그대로.
  var tailsBFirst;
  if(starOrder.length===0){
    tailsBFirst=eFirst;
  }else{
    var lastWasB=(starOrder[starOrder.length-1].charAt(0)==='b');
    tailsBFirst=!lastWasB;
  }
  var circOrder=_interleave(aTails,bTails,tailsBFirst);

  return{order:starOrder.concat(circOrder),eFirst:eFirst,tied:tied};
}

function buildCoinSeqForBattle(boardA,boardB,coinA,coinB,eFirst){
  // coinA[i]/coinB[i] = true(heads)/false(tails)/undefined(dead unit)
  // bCalcTurnOrder와 동일한 규칙: 번갈아 머지 (한 쪽 소진 시 나머지 연속),
  // 뒷면 그룹은 앞면 그룹 Last Turn자 's 반대 사이드부터 start.
  var aHeads=[],bHeads=[],aTails=[],bTails=[];
  for(var i=0;i<boardA.length;i++){
    if(!boardA[i].alive)continue;
    if(coinA[i]===true)aHeads.push({side:'a',pos:i});
    else if(coinA[i]===false)aTails.push({side:'a',pos:i});
  }
  for(var i=0;i<boardB.length;i++){
    if(!boardB[i].alive)continue;
    if(coinB[i]===true)bHeads.push({side:'b',pos:i});
    else if(coinB[i]===false)bTails.push({side:'b',pos:i});
  }
  function _mergeAlt(listA,listB,bFirst){
    var res=[],ia=0,ib=0,bTurn=bFirst;
    while(ia<listA.length||ib<listB.length){
      if(bTurn){
        if(ib<listB.length)res.push(listB[ib++]);
        else res.push(listA[ia++]);
      }else{
        if(ia<listA.length)res.push(listA[ia++]);
        else res.push(listB[ib++]);
      }
      bTurn=!bTurn;
    }
    return res;
  }
  var headsSeq=_mergeAlt(aHeads,bHeads,eFirst);
  var tailsBFirst;
  if(headsSeq.length===0)tailsBFirst=eFirst;
  else tailsBFirst=(headsSeq[headsSeq.length-1].side!=='b');
  var tailsSeq=_mergeAlt(aTails,bTails,tailsBFirst);
  return headsSeq.concat(tailsSeq);
}

function runBattleCoinPhase(snap,callback){
  var allyRow=document.getElementById('ally-row');
  var enemyRow=document.getElementById('enemy-row');
  function collectCards(row){
    var r=[];
    for(var i=0;i<row.children.length;i++){
      r.push({rowIdx:i,el:row.children[i]});
    }
    return r;
  }
  var aliveAlly=collectCards(allyRow);
  var aliveEnemy=collectCards(enemyRow);
  var nA=aliveAlly.length,nB=aliveEnemy.length;
  // snap에서 살아있는 unit만 필터 → DOM card와 인덱스 일치시킴
  var aliveSnapA=[];for(var j=0;j<snap.a.length;j++)if(snap.a[j].alive)aliveSnapA.push(snap.a[j]);
  var aliveSnapB=[];for(var j=0;j<snap.b.length;j++)if(snap.b[j].alive)aliveSnapB.push(snap.b[j]);
  for(var j=0;j<aliveAlly.length;j++){aliveAlly[j].sid='a'+j;aliveAlly[j].baseId=aliveSnapA[j]?aliveSnapA[j].baseId:'';}
  for(var j=0;j<aliveEnemy.length;j++){aliveEnemy[j].sid='b'+j;aliveEnemy[j].baseId=aliveSnapB[j]?aliveSnapB[j].baseId:'';}

  // snap에서 coinOff 정보 가져오기 (alive 필터된 인덱스 기준)
  var coinOffMap={};
  for(var j=0;j<aliveSnapA.length;j++)if(aliveSnapA[j].coinOff)coinOffMap['a'+j]=true;

  // Suzumi Passive: opponent coin success률 감소 (-20%, golden: -40%)
  var _suzumiPenaltyForEnemy=0,_suzumiPenaltyForAlly=0;
  for(var j=0;j<aliveSnapA.length;j++){if(aliveSnapA[j].baseId==='suzumi')_suzumiPenaltyForEnemy+=aliveSnapA[j].isSkin?0.6:0.3;}
  for(var j=0;j<aliveSnapB.length;j++){if(aliveSnapB[j].baseId==='suzumi')_suzumiPenaltyForAlly+=aliveSnapB[j].isSkin?0.6:0.3;}

  var coinsInjected=false;
  function injectCoin(ci,isEnemy){
    var card=ci.el,sid=ci.sid;
    var isOff=coinOffMap[sid];
    card.classList.add('has-coin');
    var cw=document.createElement('div');cw.className='bcoin-wrap show';cw.id='bcw-'+sid;
    if(isOff){
      cw.innerHTML='<div class="bcoin-ow"><img class="bcoin-img" id="bc-'+sid+'" src="'+BCOIN_BASE+'coin_back.png" style="opacity:0.4"><div class="bnum" id="bn-'+sid+'"></div><div class="bcrown" id="bcrn-'+sid+'"></div></div>';
    } else {
      cw.innerHTML='<div class="bcoin-ow"><img class="bcoin-img spinning" id="bc-'+sid+'" src="'+BCOIN_BASE+'coin_front.png"><div class="bnum" id="bn-'+sid+'"></div><div class="bcrown" id="bcrn-'+sid+'"></div></div>';
    }
    if(isEnemy)card.insertBefore(cw,card.firstChild);else card.appendChild(cw);
    if(!isOff){var mc=card.querySelector('.minicard');
    if(mc){var sg=document.createElement('img');sg.className='bmini-sg';sg.id='bsg-'+sid;sg.src=BCOIN_SG;mc.appendChild(sg);}}
  }
  function injectCoinsOnce(){
    if(coinsInjected)return;coinsInjected=true;
    for(var j=0;j<aliveEnemy.length;j++)injectCoin(aliveEnemy[j],true);
    for(var j=0;j<aliveAlly.length;j++)injectCoin(aliveAlly[j],false);
  }
  function startAllSpins(){
    for(var j=0;j<aliveEnemy.length;j++)bStartSpinAlt(aliveEnemy[j].sid);
    for(var j=0;j<aliveAlly.length;j++){if(!coinOffMap[aliveAlly[j].sid])bStartSpinAlt(aliveAlly[j].sid);}
  }
  function restartSpins(){
    // 기존 결과 초기화 후 다시 스핀
    for(var j=0;j<aliveEnemy.length;j++){
      var img=document.getElementById('bc-'+aliveEnemy[j].sid);
      if(img){img.src=BCOIN_BASE+'coin_front.png';img.className='bcoin-img spinning';img.style.opacity='';}
      var bn=document.getElementById('bn-'+aliveEnemy[j].sid);if(bn){bn.textContent='';bn.className='bnum';}
      var crn=document.getElementById('bcrn-'+aliveEnemy[j].sid);if(crn)crn.className='bcrown';
    }
    for(var j=0;j<aliveAlly.length;j++){
      if(coinOffMap[aliveAlly[j].sid])continue;
      var img=document.getElementById('bc-'+aliveAlly[j].sid);
      if(img){img.src=BCOIN_BASE+'coin_front.png';img.className='bcoin-img spinning';img.style.opacity='';}
      var bn=document.getElementById('bn-'+aliveAlly[j].sid);if(bn){bn.textContent='';bn.className='bnum';}
      var crn=document.getElementById('bcrn-'+aliveAlly[j].sid);if(crn)crn.className='bcrown';
    }
    startAllSpins();
  }

  var attempt=0;
  var MAX_COIN_ATTEMPTS=3;

  function doToss(){
    attempt++;
    if(attempt===1){injectCoinsOnce();startAllSpins();playSfx('coinflip',0.4);}
    else{restartSpins();}

    setTimeout(function(){
      var cr={};
      var _btBonus=G.bunnyTossBonus||0;
      for(var j=0;j<aliveEnemy.length;j++)cr[aliveEnemy[j].sid]=Math.random()<Math.max(0,0.5-_suzumiPenaltyForEnemy);
      // C&C Passive: allied all coin toss 항상 success
      var _hasCC=aliveAlly.some(function(u){return u.baseId==='millennium_cc';});
      for(var j=0;j<aliveAlly.length;j++){var _u=aliveAlly[j];var _isAsuna=(_u.baseId==='asuna');var _forceSuccess=_isAsuna||_hasCC;cr[_u.sid]=coinOffMap[_u.sid]?false:(_forceSuccess?true:Math.random()<Math.max(0,0.5+_btBonus-_suzumiPenaltyForAlly));}
      // Bunny Girl Asuna skin: 자신 제외 맨 left allied도 coin toss success
      var _asunaGold=aliveAlly.some(function(u){return (u.baseId==='asuna'||u.baseId==='millennium_cc')&&u.isSkin;});
      if(_asunaGold){for(var _aj=0;_aj<aliveAlly.length;_aj++){var _lu=aliveAlly[_aj];if(_lu.baseId!=='asuna'&&_lu.baseId!=='millennium_cc'&&!coinOffMap[_lu.sid]){cr[_lu.sid]=true;break;}}}
      for(var j=0;j<aliveEnemy.length;j++)bSettleCoin(aliveEnemy[j].sid,cr[aliveEnemy[j].sid]);
      var _asunaCoinMsg=false;
      for(var j=0;j<aliveAlly.length;j++){
        if(!coinOffMap[aliveAlly[j].sid])bSettleCoin(aliveAlly[j].sid,cr[aliveAlly[j].sid]);
        if((aliveAlly[j].baseId==='asuna'||aliveAlly[j].baseId==='millennium_cc')&&cr[aliveAlly[j].sid])_asunaCoinMsg=true;
      }
      if(_asunaCoinMsg){
        var logEl3=document.getElementById('battle-log');
        if(logEl3){var amsg=document.createElement('div');amsg.style.cssText='text-align:center;color:#fbbf24;font-weight:700;font-size:13px;padding:4px';amsg.textContent='⭐ Asuna Lucky coin toss rolled!';logEl3.appendChild(amsg);logEl3.scrollTop=logEl3.scrollHeight;}
      }

      setTimeout(function(){
        var calcResult=bCalcTurnOrder(cr,nA,nB);
        var order=calcResult.order;var eFirst=calcResult.eFirst;

        // Asuna priority: 동률 시 allied에 Asuna 있으면 allied 선공
        if(calcResult.tied){
          var _hasAsuna=aliveAlly.some(function(u){return u.baseId==='asuna'||u.baseId==='millennium_cc';});
          if(_hasAsuna){
            calcResult.tied=false;eFirst=false;calcResult.eFirst=false;
            // order 배열을 새 eFirst(allied 선공) 기준으로 재계산
            var _newOrder=[],_maxN=Math.max(nA,nB);
            for(var _oi=0;_oi<_maxN;_oi++){
              if(_oi<nA&&cr['a'+_oi])_newOrder.push('a'+_oi);
              if(_oi<nB&&cr['b'+_oi])_newOrder.push('b'+_oi);
            }
            for(var _oi=0;_oi<_maxN;_oi++){
              if(_oi<nA&&!cr['a'+_oi])_newOrder.push('a'+_oi);
              if(_oi<nB&&!cr['b'+_oi])_newOrder.push('b'+_oi);
            }
            order=_newOrder;calcResult.order=_newOrder;
            var logEl2=document.getElementById('battle-log');
            if(logEl2){var asunaMsg=document.createElement('div');asunaMsg.style.cssText='text-align:center;color:#fbbf24;font-weight:700;font-size:13px;padding:2px';asunaMsg.textContent='⭐ Asuna\'s priority!';logEl2.appendChild(asunaMsg);logEl2.scrollTop=logEl2.scrollHeight;}
          }
        }
        // 동률 detect → 재토스 또는 draw
        if(calcResult.tied&&attempt<MAX_COIN_ATTEMPTS){
          // 동률 표시 후 재토스
          var logEl=document.getElementById('battle-log');
          if(logEl){var tieMsg=document.createElement('div');tieMsg.style.cssText='text-align:center;color:#f0c060;font-weight:700;font-size:14px;padding:4px';tieMsg.textContent='⚡ Tie! Retoss ('+attempt+'/'+MAX_COIN_ATTEMPTS+')';logEl.appendChild(tieMsg);logEl.scrollTop=logEl.scrollHeight;}
          setTimeout(function(){doToss();},1200);
          return;
        }
        if(calcResult.tied&&attempt>=MAX_COIN_ATTEMPTS){
          // 3회 동률 → draw
          var logEl=document.getElementById('battle-log');
          if(logEl){var drawMsg=document.createElement('div');drawMsg.style.cssText='text-align:center;color:#ff6b6b;font-weight:900;font-size:16px;padding:6px';drawMsg.textContent='💫 3 consecutive ties! Draw!';logEl.appendChild(drawMsg);logEl.scrollTop=logEl.scrollHeight;}
          _activeCoinOverlay=null;
          setTimeout(function(){callback('draw',{cr:cr,nA:nA,nB:nB,eFirst:eFirst,coinDraw:true});},1500);
          return;
        }

        // 정상 결과 process
        var allyFirst=order.length>0&&order[0][0]==='a';
        order.forEach(function(sid,idx){
          var el=document.getElementById('bn-'+sid);
          if(el){el.textContent=idx+1;el.className='bnum show'+(idx===0?' first-num':'');}
          if(idx===0){
            var img=document.getElementById('bc-'+sid);if(img)img.src=BCOIN_BASE+'coin_first.png';
            var crown=document.getElementById('bcrn-'+sid);if(crown)crown.className='bcrown show';
          }
        });
        for(var j=0;j<aliveEnemy.length;j++){if(cr[aliveEnemy[j].sid]){var sg=document.getElementById('bsg-'+aliveEnemy[j].sid);if(sg)sg.className='bmini-sg show';}}
        for(var j=0;j<aliveAlly.length;j++){if(cr[aliveAlly[j].sid]){var sg=document.getElementById('bsg-'+aliveAlly[j].sid);if(sg)sg.className='bmini-sg show';}}

        // _activeCoinOverlay save (renderBattleSnap마다 재주입용)
        var _origTotal=aliveAlly.length+aliveEnemy.length;
        var aliveAIds=[],aliveBIds=[];
        for(var _q=0;_q<snap.a.length;_q++)if(snap.a[_q].alive)aliveAIds.push(snap.a[_q].id);
        for(var _q=0;_q<snap.b.length;_q++)if(snap.b[_q].alive)aliveBIds.push(snap.b[_q].id);
        _activeCoinOverlay={
          allyCoins:aliveAlly.map(function(c,ci){var idx=order.indexOf(c.sid);return{uid:aliveAIds[ci]||'',isHeads:cr[c.sid],turnNum:idx+1,isFirst:idx===0,coinOff:!!coinOffMap[c.sid]};}),
          enemyCoins:aliveEnemy.map(function(c,ci){var idx=order.indexOf(c.sid);return{uid:aliveBIds[ci]||'',isHeads:cr[c.sid],turnNum:idx+1,isFirst:idx===0};}),
          tokenCoinMap:{},nextTokenNum:_origTotal+1
        };

        // 선글라스 1초 maintain 후 페이드
        setTimeout(function(){
          for(var j=0;j<aliveEnemy.length;j++){var sg=document.getElementById('bsg-'+aliveEnemy[j].sid);if(sg)sg.className='bmini-sg';}
          for(var j=0;j<aliveAlly.length;j++){var sg=document.getElementById('bsg-'+aliveAlly[j].sid);if(sg)sg.className='bmini-sg';}
          setTimeout(function(){callback(allyFirst,{cr:cr,nA:nA,nB:nB,eFirst:eFirst});},400);
        },1000);
      },300);
    },2000);
  }
  doToss();
}

function showBattle(result,player,opp) {
  battleState.skip=false;
  var overlay=document.getElementById('battle-overlay');
  overlay.classList.add('active');
  document.getElementById('battle-arena').style.display='none';
  document.getElementById('battle-log').style.display='none';
  document.getElementById('battle-result-box').style.display='none';
  document.getElementById('btn-continue').style.display='none';
  document.getElementById('btn-skip').style.display='none';
  var intro=document.getElementById('battle-intro-area');
  intro.innerHTML='<div class="battle-intro"><div class="vs-name">Sensei <span style="color:#a78bfa">(Lv.'+player.tier+')</span></div><div class="vs-text">VS</div><div class="vs-name">'+opp.name+' <span style="color:#a78bfa">(Lv.'+opp.tier+')</span></div></div>';
  setTimeout(function(){intro.innerHTML='';startBattleAnimation(result,opp);},1500);
}

function startBattleAnimation(result,opp,altResult,onCoinResult) {
  document.getElementById('battle-arena').style.display='block';
  document.getElementById('battle-log').style.display='block';
  document.getElementById('btn-skip').style.display='';
  document.getElementById('enemy-label').textContent=opp.name;
  document.getElementById('ally-label').textContent='Sensei';
  var logEl=document.getElementById('battle-log');logEl.innerHTML='';
  var steps=result.steps;
  // 시각 흐름 순서: 초기 스냅 → 코인 애니 → 개전 → 공격
  // altResult가 있으면 코인 페이즈 진입 가능. result.steps에서 SOC 단계를 제외하여
  // 초기 스냅 직후 곧바로 코인 페이즈가 트리거되도록 한다. SOC는 코인 후 resultC에서 재생됨.
  if(altResult&&steps&&steps.length>0){
    var _filtered=[steps[0]];
    for(var _fi=1;_fi<steps.length;_fi++){
      if(steps[_fi].atkSide===null) continue;
      _filtered.push(steps[_fi]);
    }
    steps=_filtered;
  }
  var activeResult=result;
  if(!steps||steps.length===0){
    if(onCoinResult)onCoinResult(activeResult);
    finishBattle(activeResult);return;
  }
  renderBattleSnap(steps[0].snap);
  var stepIdx=1;
  var coinPhaseShown=false;
  function nextStep(){
    if(battleState.skip||stepIdx>=steps.length){
      if(steps.length>0)renderBattleSnap(steps[steps.length-1].snap);
      if(!coinPhaseShown&&onCoinResult){onCoinResult(activeResult);}
      finishBattle(activeResult);return;
    }
    var prevSnap=steps[stepIdx-1].snap;
    var step=steps[stepIdx];
    var currSnap=step.snap;
    // SOC 단계 (atkSide===null) — Battle Start buff 이펙트
    if(step.atkSide===null){
      renderBattleSnap(currSnap);
      appendLog(step.log,logEl);
      playSfx('soc_trigger',0.3);
      // Cleave damage detect (Hibiki/Azusa/열차포 등) → AoE effect음
      var hasAoeDmg=false;
      if(step.log){for(var _l=0;_l<step.log.length;_l++){var _t=step.log[_l].text||'';if(_t.indexOf('enemy all')!==-1||_t.indexOf('Cleave damage')!==-1||_t.indexOf('was defeated by debuff')!==-1){hasAoeDmg=true;break;}}}
      if(hasAoeDmg) setTimeout(function(){playSfx('aoe_damage',0.4);},200);
      // death detect → 히어로 폭발
      ['a','b'].forEach(function(side){for(var i=0;i<currSnap[side].length;i++){var prev2=prevSnap[side]&&prevSnap[side][i];var curr2=currSnap[side][i];if(prev2&&prev2.alive&&curr2&&!curr2.alive){playSfx('aoe_damage',0.3);break;}}});
      // stats 변화 detect → 반짝 이펙트
      applySocEffects(prevSnap,currSnap);
      // Ambush grant detect → 은신음
      ['a','b'].forEach(function(side){for(var i=0;i<currSnap[side].length;i++){var prev=prevSnap[side]&&prevSnap[side][i];var curr=currSnap[side][i];if(curr&&curr.kw&&curr.kw.indexOf('ambush')!==-1&&(!prev||!prev.kw||prev.kw.indexOf('ambush')===-1))playSfx('stealth_on',0.3);}});
      stepIdx++;setTimeout(nextStep,battleState.speed);return;
    }
    // coin phase: Battle Start complete 후, 첫 attack 직games 1회
    if(!coinPhaseShown&&altResult){
      coinPhaseShown=true;
      document.getElementById('btn-skip').style.display='none';
      runBattleCoinPhase(prevSnap,function(allyFirst,coinInfo){
        document.getElementById('btn-skip').style.display='';
        // coin draw: battle 스킵
        if(allyFirst==='draw'&&coinInfo.coinDraw){
          var drawResult={result:'draw',damage:0,damageText:'Coin draw! Skipping battle.',steps:steps,survivorsA:[],survivorsB:[],coinDraw:true};
          _gBattleCounterSave=null;_activeCoinOverlay=null;
          activeResult=drawResult;
          if(onCoinResult)onCoinResult(drawResult);
          finishBattle(drawResult);
          return;
        }
        // 코인 직전 보드 상태 = 초기 스냅 (SOC는 이제 resultC에서 코인 후 재생됨)
        var preSOCsnap=steps[0].snap;
        var boardA=preSOCsnap.a;var boardB=preSOCsnap.b;
        // coin 결과를 board 포지션 인덱스로 매핑
        var aliveIdxA=[],aliveIdxB=[];
        for(var _ai=0;_ai<boardA.length;_ai++)if(boardA[_ai].alive)aliveIdxA.push(_ai);
        for(var _bi=0;_bi<boardB.length;_bi++)if(boardB[_bi].alive)aliveIdxB.push(_bi);
        var coinA={},coinB={};
        for(var _j=0;_j<aliveIdxA.length;_j++)coinA[aliveIdxA[_j]]=coinInfo.cr['a'+_j];
        for(var _j=0;_j<aliveIdxB.length;_j++)coinB[aliveIdxB[_j]]=coinInfo.cr['b'+_j];
        var coinSeq=buildCoinSeqForBattle(boardA,boardB,coinA,coinB,coinInfo.eFirst);
        // resultC만 글로벌 counter에 실제 반영
        if(_gBattleCounterSave)restoreGBattleCounters(_gBattleCounterSave);
        // 시각 흐름: resultC가 SOC를 실행 (코인 후)
        var resultC=runBattle(boardA,boardB,allyFirst,{skipSOC:false,coinSeq:coinSeq,panchanDeathsA:result._initPdA||0,panchanDeathsB:result._initPdB||0});
        _gBattleCounterSave=null;
        activeResult=resultC;
        if(onCoinResult)onCoinResult(resultC);
        steps=resultC.steps;
        stepIdx=1;
        nextStep();
      });
      return;
    }
    // attack 단계: 3phase 애니메이션
    var atkIsAlly=(step.atkSide==='a');
    var changes=findChanges(prevSnap,currSnap);
    // Malkuth 선언 스텝: summon log만 표시하고 넘어감
    var isMalkuthDecl=prevSnap[step.atkSide]&&prevSnap[step.atkSide][step.atkIdx]&&prevSnap[step.atkSide][step.atkIdx].baseId==='millennium_malkuth';
    if(isMalkuthDecl&&step.log&&step.log.some(function(l){return(l.text||'').indexOf('Sweeper summon')!==-1;})){
      renderBattleSnap(currSnap);
      appendLog(step.log,logEl);
      playSfx('soc_trigger',0.4);
      stepIdx++;setTimeout(nextStep,600);
      return;
    }
    // Phase 1: 느리게 들어올리기 (350ms)
    renderBattleSnap(prevSnap);
    var atkRow=atkIsAlly?document.getElementById('ally-row'):document.getElementById('enemy-row');
    var defRow=atkIsAlly?document.getElementById('enemy-row'):document.getElementById('ally-row');
    var atkCard=step.atkId?atkRow.querySelector('[data-uid="'+step.atkId+'"]'):atkRow.children[step.atkIdx];
    var defCard=step.defId?defRow.querySelector('[data-uid="'+step.defId+'"]'):defRow.children[step.defIdx];
    // 실제 좌표 차이 계산 — opponent card 바로 앞까지 이동
    var slamVars={rot:'0deg',x:'0px',y:atkIsAlly?'-80px':'80px'};
    if(atkCard&&defCard){
      var ar=atkCard.getBoundingClientRect();
      var dr=defCard.getBoundingClientRect();
      var dx=(dr.left+dr.width/2)-(ar.left+ar.width/2);
      var dy=(dr.top+dr.height/2)-(ar.top+ar.height/2);
      // 살짝 앞에서 멈추도록 (card 겹치지 않게 20% 짧게)
      dx*=0.85; dy*=0.85;
      var angle=Math.max(-20,Math.min(20,dx/12));
      slamVars={rot:angle+'deg',x:dx+'px',y:dy+'px'};
    }
    if(atkCard){
      atkCard.style.setProperty('--lunge-rot',slamVars.rot);
      atkCard.style.setProperty('--slam-x',slamVars.x);
      atkCard.style.setProperty('--slam-y',slamVars.y);
      atkCard.classList.add('lift');
      var atkSnap=prevSnap[step.atkSide]&&prevSnap[step.atkSide][step.atkIdx];
      if(atkSnap&&atkSnap.kw&&atkSnap.kw.indexOf('ambush')!==-1&&!atkSnap._hasAttacked) playSfx('backstab',0.4);
      else playSfx('attack_launch',0.3);
    }
    setTimeout(function(){
      if(battleState.skip){stepIdx=steps.length;nextStep();return;}
      // Phase 2: 폭발enemy으로 opponent card까지 돌진 (200ms)
      if(atkCard){atkCard.classList.remove('lift');atkCard.classList.add('slam');}
      setTimeout(function(){
        if(battleState.skip){stepIdx=steps.length;nextStep();return;}

        // 다회 타격 애니메이션
        var mHits=step.multiHits||0;
        if(mHits>0&&atkCard){
          atkCard.classList.remove('slam');
          atkCard.classList.add('multihit');
          var hitDone=0;
          var hitTimer=setInterval(function(){
            hitDone++;
            // 타격마다 작은 플래시 + 타격음
            playSfx('hit',0.25);
            if(defCard){
              var dr2=defCard.getBoundingClientRect();
              var fl=document.createElement('div');
              fl.className='multi-flash';
              fl.style.left=(dr2.left+dr2.width/2-15+(Math.random()*20-10))+'px';
              fl.style.top=(dr2.top+dr2.height/2-15+(Math.random()*20-10))+'px';
              fl.style.position='fixed';
              document.body.appendChild(fl);
              setTimeout(function(){if(fl.parentNode)fl.parentNode.removeChild(fl);},150);
            }
            if(hitDone>=mHits){
              clearInterval(hitTimer);
              if(atkCard)atkCard.classList.remove('multihit');
              // Phase 3: 최종 임팩트
              doPhase3();
            }
          },80);
        } else {
          doPhase3();
        }

        function doPhase3(){
          // Phase 3: 임팩트! 플래시 + 넉백 + damage (500ms)
          var atkSnap2=prevSnap[step.atkSide]&&prevSnap[step.atkSide][step.atkIdx];
          // Self-destruct exclusive
          if(atkSnap2&&atkSnap2.kw&&atkSnap2.kw.indexOf('selfdestruct')!==-1){playSfx('selfdestruct',0.5);}
          // Windfury exclusive
          else if(atkSnap2&&atkSnap2.kw&&atkSnap2.kw.indexOf('windfury')!==-1){playSfx('windfury_hit',0.4);}
          // ATK 기반 충돌음
          else{
            var atkVal=atkSnap2?atkSnap2.atk:5;
            if(atkVal>=11) playSfx('attack_impact_large',0.5);
            else if(atkVal>=6) playSfx('attack_impact_mid',0.4);
            else playSfx('attack_impact',0.4);
          }
          // Venomous add음
          if(atkSnap2&&atkSnap2.kw&&atkSnap2.kw.indexOf('poison')!==-1) playSfx('poison',0.4);
          // Cleave 0.3초 후
          if(atkSnap2&&atkSnap2.kw&&atkSnap2.kw.indexOf('cleave')!==-1) setTimeout(function(){playSfx('cleave',0.3);},300);
          // Pierce 0.3초 후
          if(atkSnap2&&atkSnap2.kw&&atkSnap2.kw.indexOf('pierce')!==-1){
            setTimeout(function(){playSfx('pierce',0.3);},300);
          }
          // Deathrattle 등 Cleave damage log detect (Azusa 등)
          if(step.log){for(var _al=0;_al<step.log.length;_al++){var _at=step.log[_al].text||'';if(_at.indexOf('enemy all')!==-1){setTimeout(function(){playSfx('aoe_damage',0.4);},300);break;}}}
          // 커스텀 audio 플래그 detect (Kiki Deathrattle → 검은 군주 summon음 등)
          if(step.log){for(var _cl=0;_cl<step.log.length;_cl++){var _le=step.log[_cl];if(_le&&_le.audio==='black_lord'){setTimeout(function(){try{var snd=new Audio('../audio/black_lord.mp3');snd.volume=0.7;snd.play();}catch(e){}},300);break;}}}
          renderBattleSnap(currSnap);
          // attack자 원위치 복귀
          var atkRow2=atkIsAlly?document.getElementById('ally-row'):document.getElementById('enemy-row');
          var atkCard2=step.atkId?atkRow2.querySelector('[data-uid="'+step.atkId+'"]'):atkRow2.children[step.atkIdx];
          if(atkCard2){
            atkCard2.style.setProperty('--lunge-rot',slamVars.rot);
            atkCard2.style.setProperty('--slam-x',slamVars.x);
            atkCard2.style.setProperty('--slam-y',slamVars.y);
            atkCard2.classList.add('slam-return');
          }
          applyHitEffects(changes,step,atkIsAlly);
          appendLog(step.log,logEl);
          setTimeout(function(){
            if(battleState.skip){stepIdx=steps.length;nextStep();return;}
            // Phase 4: 클린 렌더
            renderBattleSnap(currSnap);
            stepIdx++;setTimeout(nextStep,150);
          },500);
        }
      },200);
    },350);
  }
  setTimeout(nextStep,400);
}

function findChanges(prevSnap,currSnap){
  var changes={a:[],b:[]};
  ['a','b'].forEach(function(side){
    for(var i=0;i<currSnap[side].length;i++){
      var prev=prevSnap[side][i];var curr=currSnap[side][i];
      if(!prev)continue;
      var c={idx:i,uid:curr.id,hpLost:0,shieldBroken:false,died:false,reborn:false,newlyDead:false};
      if(prev.hp>curr.hp)c.hpLost=prev.hp-curr.hp;
      if(prev.kw.indexOf('shield')!==-1&&curr.kw.indexOf('shield')===-1)c.shieldBroken=true;
      if(prev.alive&&!curr.alive)c.newlyDead=true;
      // Reborn detect: shield 있었는데 사라지고 hp=1이 된 경우
      if(prev.kw.indexOf('reborn')!==-1&&curr.kw.indexOf('reborn')===-1&&curr.alive&&curr.hp===1)c.reborn=true;
      if(c.hpLost>0||c.shieldBroken||c.newlyDead||c.reborn)changes[side].push(c);
    }
    // 새로 add된 unit (summon) detect
    if(currSnap[side].length>prevSnap[side].length){
      for(var j=prevSnap[side].length;j<currSnap[side].length;j++){
        changes[side].push({idx:j,uid:currSnap[side][j].id,hpLost:0,shieldBroken:false,died:false,reborn:false,newlyDead:false,summoned:true});
      }
    }
  });
  return changes;
}

function applyHitEffects(changes,step,atkIsAlly){
  // 최대 damage 계산 → 화면 흔들림 강도
  var maxDmg=0;
  ['a','b'].forEach(function(s){for(var i=0;i<changes[s].length;i++)if(changes[s][i].hpLost>maxDmg)maxDmg=changes[s][i].hpLost;});
  if(maxDmg>=10){
    var overlay=document.getElementById('battle-overlay');
    overlay.classList.remove('screen-shake');
    void overlay.offsetWidth;
    overlay.classList.add('screen-shake');
    setTimeout(function(){overlay.classList.remove('screen-shake');},400);
  }
  var allyRow=document.getElementById('ally-row');
  var enemyRow=document.getElementById('enemy-row');
  ['a','b'].forEach(function(side){
    var row=(side==='a')?allyRow:enemyRow;
    for(var i=0;i<changes[side].length;i++){
      var c=changes[side][i];
      var card=c.uid?row.querySelector('[data-uid="'+c.uid+'"]'):row.children[c.idx];if(!card)continue;
      if(c.shieldBroken){
        card.classList.add('shield-pop');
        spawnDmgNum(card,'Shield!',true);
      } else if(c.hpLost>0||c.newlyDead){
        // 임팩트 플래시
        spawnImpactFlash(card);
        // 넉백 + 흔들림
        card.classList.add('knockback');
        card.classList.add('hit-shake');
        if(c.hpLost>0)spawnDmgNum(card,'-'+c.hpLost,false);
        if(c.newlyDead){
          setTimeout(function(cd){cd.classList.add('dying');}.bind(null,card),350);
        }
      }
      if(c.reborn){
        setTimeout(function(cd){spawnDmgNum(cd,'Reborn!',true);}.bind(null,card),400);
      }
    }
  });
  // Haruka 빠직 이펙트
  if(step.pajdikUid){
    var pajRow=(step.atkSide==='a')?allyRow:enemyRow;
    var pajCard=pajRow.querySelector('[data-uid="'+step.pajdikUid+'"]');
    if(pajCard) spawnPajdik(pajCard);
  }
}

function spawnImpactFlash(parentEl){
  var el=document.createElement('div');
  el.className='impact-flash';
  parentEl.style.position='relative';
  parentEl.appendChild(el);
  setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el);},350);
}

function applySocEffects(prevSnap,currSnap){
  var allyRow=document.getElementById('ally-row');
  var enemyRow=document.getElementById('enemy-row');
  ['a','b'].forEach(function(side){
    var row=(side==='a')?allyRow:enemyRow;
    for(var i=0;i<currSnap[side].length;i++){
      var prev=prevSnap[side]&&prevSnap[side][i]?prevSnap[side][i]:null;
      var curr=currSnap[side][i];
      if(!prev)continue;
      var atkDiff=curr.atk-prev.atk;
      var hpDiff=curr.hp-prev.hp;
      if(atkDiff>0||hpDiff>0){
        var card=curr.id?row.querySelector('[data-uid="'+curr.id+'"]'):row.children[i];if(!card)continue;
        card.classList.add('soc-glow');
        var txt='+';
        if(atkDiff>0&&hpDiff>0) txt='+'+atkDiff+'/+'+hpDiff;
        else if(atkDiff>0) txt='+'+atkDiff+' ATK';
        else txt='+'+hpDiff+' HP';
        var el=document.createElement('div');
        el.className='soc-buff-num';
        el.textContent=txt;
        card.style.position='relative';
        card.appendChild(el);
        setTimeout(function(c,e){c.classList.remove('soc-glow');if(e.parentNode)e.parentNode.removeChild(e);}.bind(null,card,el),800);
      }
    }
  });
}

function spawnPajdik(parentEl){
  var el=document.createElement('div');
  el.className='pajdik-text';
  el.textContent='Crack!';
  parentEl.style.position='relative';
  parentEl.appendChild(el);
  setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el);},1200);
}

function spawnDmgNum(parentEl,text,isShield){
  var el=document.createElement('div');
  el.className='dmg-num'+(isShield?' shield-txt':'');
  el.textContent=text;
  parentEl.style.position='relative';
  parentEl.appendChild(el);
  setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el);},900);
}

function appendLog(logArr,logEl){
  for(var i=0;i<logArr.length;i++){
    var div=document.createElement('div');div.className=logArr[i].cls;div.textContent=logArr[i].text;logEl.appendChild(div);
  }
  logEl.scrollTop=logEl.scrollHeight;
}

function renderBattleSnap(snap) {
  var allyRow=document.getElementById('ally-row');var enemyRow=document.getElementById('enemy-row');
  var aHtml='',bHtml='';
  for(var i=0;i<snap.a.length;i++){var u=snap.a[i];if(!u.alive)continue;aHtml+='<div class="bcard" data-uid="'+u.id+'">'+miniCardHtml(u)+'</div>';}
  for(var i=0;i<snap.b.length;i++){var u=snap.b[i];if(!u.alive)continue;bHtml+='<div class="bcard enemy" data-uid="'+u.id+'">'+miniCardHtml(u)+'</div>';}
  allyRow.innerHTML=aHtml||'<div style="color:#666">Empty field</div>';
  enemyRow.innerHTML=bHtml||'<div style="color:#666">Empty field</div>';
  // 6명 이상이면 해당 편만 compact
  var aAlive=0;for(var i=0;i<snap.a.length;i++)if(snap.a[i].alive)aAlive++;
  var bAlive=0;for(var i=0;i<snap.b.length;i++)if(snap.b[i].alive)bAlive++;
  if(aAlive>MAX_BOARD)allyRow.classList.add('compact');else allyRow.classList.remove('compact');
  if(bAlive>MAX_BOARD)enemyRow.classList.add('compact');else enemyRow.classList.remove('compact');
  if(_activeCoinOverlay)reinjectCoinOverlay();
}

function reinjectCoinOverlay(){
  var aco=_activeCoinOverlay;if(!aco)return;
  var allyRow=document.getElementById('ally-row');
  var enemyRow=document.getElementById('enemy-row');
  // Collect known uids
  var knownUids={};
  function injectSettled(row,coinData,isEnemy){
    if(!row||!coinData.uid)return;
    var card=row.querySelector('[data-uid="'+coinData.uid+'"]');
    if(!card)return;
    knownUids[coinData.uid]=true;
    card.classList.add('has-coin');
    var coinSrc=coinData.isFirst?BCOIN_BASE+'coin_first.png':(coinData.isHeads?BCOIN_BASE+'coin_front.png':BCOIN_BASE+'coin_back.png');
    var offStyle=coinData.coinOff?' style="opacity:0.4"':'';
    var cw=document.createElement('div');cw.className='bcoin-wrap show';
    cw.innerHTML='<div class="bcoin-ow"><img class="bcoin-img" src="'+coinSrc+'"'+offStyle+'><div class="bnum show'+(coinData.isFirst?' first-num':'')+'" style="opacity:1">'+coinData.turnNum+'</div>'+(coinData.isFirst?'<div class="bcrown show" style="opacity:1">👑</div>':'')+'</div>';
    if(isEnemy)card.insertBefore(cw,card.firstChild);else card.appendChild(cw);
  }
  if(allyRow)for(var k=0;k<aco.allyCoins.length;k++)injectSettled(allyRow,aco.allyCoins[k],false);
  if(enemyRow)for(var k=0;k<aco.enemyCoins.length;k++)injectSettled(enemyRow,aco.enemyCoins[k],true);
  // Tokens summoned after coin toss: coin_back + grant summon order number
  function injectTokenRow(row,prefix,isEnemy){
    if(!row||!aco.tokenCoinMap)return;
    for(var i=0;i<row.children.length;i++){
      var card=row.children[i];
      var uid=card.getAttribute('data-uid')||'';
      if(knownUids[uid])continue;
      var key=prefix+':'+uid;
      if(!aco.tokenCoinMap[key])aco.tokenCoinMap[key]={turnNum:aco.nextTokenNum++};
      var tn=aco.tokenCoinMap[key].turnNum;
      card.classList.add('has-coin');
      var cw=document.createElement('div');cw.className='bcoin-wrap show';
      cw.innerHTML='<div class="bcoin-ow"><img class="bcoin-img" src="'+BCOIN_BASE+'coin_back.png"></div>';
      if(isEnemy)card.insertBefore(cw,card.firstChild);else card.appendChild(cw);
    }
  }
  injectTokenRow(allyRow,'a',false);
  injectTokenRow(enemyRow,'b',true);
}

var _elimPlaying=false;
function playEliminationEffect(cb){
  if(_elimPlaying){if(cb)cb();return;}
  _elimPlaying=true;
  var flash=document.getElementById('elim-flash');
  // Clean up previous remnants
  flash.classList.remove('active');
  document.body.classList.remove('shaking');
  var oldRings=document.querySelectorAll('.elim-ring');for(var r=0;r<oldRings.length;r++)oldRings[r].remove();
  var oldCracks=document.querySelectorAll('.elim-crack');for(var c=0;c<oldCracks.length;c++)oldCracks[c].remove();
  void flash.offsetWidth; // Force reflow — ensure CSS animation re-trigger
  document.body.classList.add('shaking');
  flash.classList.add('active');
  var ring=document.createElement('div');ring.className='elim-ring';
  ring.style.left='50%';ring.style.top='45%';document.body.appendChild(ring);
  for(var i=0;i<5;i++){
    var crack=document.createElement('div');crack.className='elim-crack';
    crack.style.left=(40+Math.random()*20)+'%';crack.style.top=(35+Math.random()*20)+'%';
    crack.style.width=(100+Math.random()*200)+'px';
    crack.style.transform='rotate('+(Math.random()*360)+'deg) scaleX(0)';
    document.body.appendChild(crack);
  }
  setTimeout(function(){
    document.body.classList.remove('shaking');
    flash.classList.remove('active');
    var rings=document.querySelectorAll('.elim-ring');for(var r=0;r<rings.length;r++)rings[r].remove();
    var cracks=document.querySelectorAll('.elim-crack');for(var c=0;c<cracks.length;c++)cracks[c].remove();
    _elimPlaying=false;
    if(cb)cb();
  },750);
}

function finishBattle(result) {
  _activeCoinOverlay=null;
  document.getElementById('btn-skip').style.display='none';
  var eliminated=result._eliminated;
  function _showResult(){
    document.getElementById('battle-result-box').style.display='block';
    document.getElementById('btn-continue').style.display='';
    var resEl=document.getElementById('battle-result');
    resEl.className='battle-result '+result.result;
    resEl.textContent=result.result==='win'?'victory!':result.result==='lose'?'defeat...':'draw';
    document.getElementById('battle-damage').textContent=result.damageText;
    // tutorial: advance to next step when result screen appears
    if(TUT.active && TUT.waitingFor==='battleResult'){
      TUT.waitingFor=null;
      // Hide continue button to show tutorial on top of result screen (managed by tutorial)
      document.getElementById('btn-continue').style.display='none';
      setTimeout(function(){tutNext();},500);
    }
  }
  if(eliminated){playSfx('hero_explode',0.6);shakeScreen('heavy');playEliminationEffect(_showResult);}
  else{_showResult();}
}

function miniCardHtml(m){
  var cls='minicard'+(m.isSkin?' skin':'')+(hasKw(m,'ambush')&&!m._hasAttacked?' ambush':'')+(hasKw(m,'taunt')?' has-taunt':'');
  var shieldOrb=hasKw(m,'shield')?'<div class="shield-orb"></div>':'';
  var bgTag=m.img?'<div class="mini-bg"><img src="../img/'+m.img+'" onerror="this.parentElement.style.display=\'none\'">'+shieldOrb+'</div>':'';
  var baseAttr=' data-base-id="'+(m.baseId||'')+'" data-mini-atk="'+m.atk+'" data-mini-hp="'+m.hp+'" data-mini-kw="'+(m.kw||[]).join(',')+'" data-mini-name="'+m.name+'" data-mini-img="'+(m.img||'')+'" data-mini-golden="'+(m.isSkin?'1':'')+'"';
  var kwHtml='';
  if(m.stripped){
    kwHtml='<div class="keywords" style="color:#666;text-decoration:line-through">'+kwText(m)+'<span class="stripped-x">✕</span></div>';
  } else if(kwText(m)){
    kwHtml='<div class="keywords">'+kwText(m)+'</div>';
  }
  var sIcon=SCHOOL_ICONS[m.school];var sLogoTag=sIcon?'<img class="school-logo" src="'+sIcon+'">':'';
  // Mini card ability tags
  var miniAbilTag='';
  var bid=m.baseId||'';
  if(BC_IDS[bid]) miniAbilTag+='<span class="ability-tag bc" style="font-size:8px;padding:0 3px">Battlecry</span>';
  if(DR_IDS[bid]) miniAbilTag+='<span class="ability-tag dr" style="font-size:8px;padding:0 3px">Deathrattle</span>';
  var SKIN_ONLY_SOC={iori:1,hanako:1,pina:1,kasumi:1};
  if(SOC_IDS[bid]&&!(SKIN_ONLY_SOC[bid]&&!m.isSkin)) miniAbilTag+='<span class="ability-tag soc" style="font-size:8px;padding:0 3px">Battle Start</span>';
  if(SURV_IDS[bid]||(m.kw&&m.kw.indexOf('survive')!==-1)) miniAbilTag+='<span class="ability-tag" style="font-size:8px;padding:0 3px;background:rgba(16,185,129,0.2);color:#6ee7b7;border:1px solid rgba(16,185,129,0.4)">Survive</span>';
  if(PASSIVE_IDS[bid]) miniAbilTag+='<span class="ability-tag" style="font-size:8px;padding:0 3px;background:rgba(168,85,247,0.2);color:#c084fc;border:1px solid rgba(168,85,247,0.4)">Passive</span>';
  if(PRE_IDS[bid]||(m.kw&&m.kw.indexOf('preemptive')!==-1)) miniAbilTag+='<span class="ability-tag" style="font-size:8px;padding:0 3px;background:rgba(251,191,36,0.2);color:#fbbf24;border:1px solid rgba(251,191,36,0.4)">Preemptive</span>';
  var miniAbilHtml=miniAbilTag?'<div style="text-align:center;background:rgba(0,0,0,0.4);padding:0 2px">'+miniAbilTag+'</div>':'';
  // Display counter during battle
  var counterHtml='';
  if(bid==='wakamo'&&m._hovercraftCounter>0){
    counterHtml='<div class="battle-counter" style="background:rgba(59,130,246,0.3);border:1px solid rgba(59,130,246,0.6);color:#93c5fd">🚁 '+m._hovercraftCounter+'/4</div>';
  }
  if((bid==='nagusa'||bid==='yukari'||bid==='renge'||bid==='kikyou')&&m._keiseisenCounter>0){
    counterHtml='<div class="battle-counter" style="background:rgba(251,191,36,0.3);border:1px solid rgba(251,191,36,0.6);color:#fde68a">⚔ '+m._keiseisenCounter+'</div>';
  }
  var SKIN_ONLY_SOC_M={iori:1,hanako:1,pina:1,kasumi:1};
  var SVG_ICONS={
    SOC:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><path d='M3 9v6h3l7 5V4L6 9H3z' fill='#FFAA00' stroke='#CC7700' stroke-width='1.5' stroke-linejoin='round'/><path d='M16 8.5a5 5 0 0 1 0 7' stroke='#FFD700' stroke-width='2.5' stroke-linecap='round'/></svg>",
    BC:"<svg width='16' height='16' viewBox='-1 -1 26 26' fill='none'><path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9z' fill='#FFD700' stroke='#CC8800' stroke-width='1.5'/><path d='M14 21a2.5 2.5 0 0 1-4 0' stroke='#CC8800' stroke-width='2' stroke-linecap='round'/></svg>",
    DR:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><path d='M12 2C7 2 3 5.5 3 10.5c0 3.5 2 6 4.5 7.5L8 22h8l.5-4c2.5-1.5 4.5-4 4.5-7.5C21 5.5 17 2 12 2z' fill='#F0F0F0' stroke='#222' stroke-width='2.8'/><circle cx='9' cy='10.5' r='2.5' fill='#333'/><circle cx='15' cy='10.5' r='2.5' fill='#333'/></svg>",
    PASSIVE:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><path d='M12 1l2 7h7l-5.5 4.5 2 7L12 15l-5.5 4.5 2-7L3 8h7l2-7z' fill='#E85D75' stroke='#CC2060' stroke-width='1.5' stroke-linejoin='round'/></svg>",
    PRE:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><path d='M13 2L5 13h6l-1 9 9-12h-6l2-8z' fill='#FFBB00' stroke='#CC8800' stroke-width='1.5' stroke-linejoin='round'/></svg>",
    SURV:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><g transform='rotate(-10 12 12)'><ellipse cx='12' cy='10' rx='10' ry='8.5' fill='#70B840' stroke='#222' stroke-width='2.5'/><path d='M3 13.5c0 0 0 2 1.5 3h15c1.5-1 1.5-3 1.5-3' fill='#4A8A28' stroke='#222' stroke-width='2.5'/></g><path d='M8 17l-1 4' stroke='#5A5A3A' stroke-width='2.5' stroke-linecap='round'/><path d='M16 17l1 4' stroke='#5A5A3A' stroke-width='2.5' stroke-linecap='round'/></svg>",
    reborn:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><path d='M12 22V10' stroke='#4A8C10' stroke-width='4' stroke-linecap='round'/><path d='M12 10c0-6 6-9 10-10-1.5 5-5 8.5-10 10z' fill='#7ED321' stroke='#4A8C10' stroke-width='2' stroke-linejoin='round'/><path d='M12 12c0-5-5.5-8-9-9 1.5 4.5 5 7.5 9 9z' fill='#9BE94A' stroke='#4A8C10' stroke-width='2' stroke-linejoin='round'/></svg>",
    poison:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><circle cx='12' cy='12' r='9' fill='#A050E0'/><circle cx='9' cy='10.5' r='2.2' fill='#1A0030'/><circle cx='15' cy='10.5' r='2.2' fill='#1A0030'/><circle cx='9' cy='10' r='0.7' fill='#FF60FF'/><circle cx='15' cy='10' r='0.7' fill='#FF60FF'/><path d='M9 15.5c1.5 1.2 4.5 1.2 6 0' stroke='#1A0030' stroke-width='2' stroke-linecap='round' fill='none'/></svg>",
    selfdestruct:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><circle cx='11' cy='14' r='8' fill='#6A3D9A'/><path d='M15 6l1.5-3' stroke='#999' stroke-width='3' stroke-linecap='round'/><circle cx='18' cy='2.5' r='2' fill='#FF8800'/></svg>",
    taunt:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><path d='M12 3L4 7v5c0 5.5 3.5 9 8 11 4.5-2 8-5.5 8-11V7l-8-4z' fill='#3B7DD8' stroke='#5BA0F0' stroke-width='2'/></svg>",
    shield:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><circle cx='12' cy='12' r='9' fill='#FFD700' fill-opacity='0.15' stroke='#FFD700' stroke-width='3.5'/></svg>",
    cleave:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><circle cx='12' cy='20' r='2.2' fill='#60C0FF'/><path d='M8.5 17a5 5 0 0 1 7 0' stroke='#60C0FF' stroke-width='3.2' stroke-linecap='round' fill='none'/><path d='M5.5 14a9.5 9.5 0 0 1 13 0' stroke='#40A0E0' stroke-width='3.2' stroke-linecap='round' fill='none'/><path d='M2.5 11a14 14 0 0 1 19 0' stroke='#3090D0' stroke-width='3.2' stroke-linecap='round' fill='none'/></svg>",
    windfury:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><path d='M3 5l9 7-9 7' stroke='#FF8C00' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' fill='none'/><path d='M12 5l9 7-9 7' stroke='#FF4400' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' fill='none'/></svg>",
    pierce:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><line x1='12' y1='22' x2='12' y2='6' stroke='#D4A020' stroke-width='3.5' stroke-linecap='round'/><path d='M12 2v4M6 7l6-5 6 5M4 10l2-3M20 10l-2-3' stroke='#FFD700' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' fill='none'/></svg>",
    ranged:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><circle cx='12' cy='12' r='8' stroke='#D04040' stroke-width='2.5' fill='none'/><circle cx='12' cy='12' r='2.5' fill='#FF4444'/><path d='M12 2v5M12 17v5M2 12h5M17 12h5' stroke='#D04040' stroke-width='2.5' stroke-linecap='round'/></svg>",
    invincible:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><path d='M5 18h14v2.5H5z' fill='#E8A800'/><path d='M5 18L3 7l4.5 4L12 4l4.5 7L21 7l-2 11z' fill='#FFD700' stroke='#B8860B' stroke-width='1.5' stroke-linejoin='round'/></svg>",
    ambush:"<svg width='16' height='16' viewBox='0 0 24 24' fill='none'><rect x='2' y='2' width='20' height='20' rx='4' fill='#404050' stroke='#666' stroke-width='1.5'/><circle cx='12' cy='12' r='6' fill='#999' opacity='0.5'/><circle cx='10' cy='10' r='4' fill='#BBB' opacity='0.4'/></svg>"
  };
  var mIconBar='';
  if(SOC_IDS[bid]&&!(SKIN_ONLY_SOC_M[bid]&&!m.isSkin)) mIconBar+='<span class="abi">'+SVG_ICONS.SOC+'</span>';
  if(BC_IDS[bid]) mIconBar+='<span class="abi">'+SVG_ICONS.BC+'</span>';
  if(DR_IDS[bid]) mIconBar+='<span class="abi">'+SVG_ICONS.DR+'</span>';
  if(PASSIVE_IDS[bid]) mIconBar+='<span class="abi">'+SVG_ICONS.PASSIVE+'</span>';
  if(PRE_IDS[bid]||(m.kw&&m.kw.indexOf('preemptive')!==-1)) mIconBar+='<span class="abi">'+SVG_ICONS.PRE+'</span>';
  if(SURV_IDS[bid]||(m.kw&&m.kw.indexOf('survive')!==-1)) mIconBar+='<span class="abi">'+SVG_ICONS.SURV+'</span>';
  if(hasKw(m,'reborn')) mIconBar+='<span class="abi">'+SVG_ICONS.reborn+'</span>';
  if(hasKw(m,'poison')) mIconBar+='<span class="abi">'+SVG_ICONS.poison+'</span>';
  if(hasKw(m,'selfdestruct')) mIconBar+='<span class="abi">'+SVG_ICONS.selfdestruct+'</span>';
  if(hasKw(m,'taunt')) mIconBar+='<span class="abi">'+SVG_ICONS.taunt+'</span>';
  if(hasKw(m,'shield')) mIconBar+='<span class="abi">'+SVG_ICONS.shield+'</span>';
  if(hasKw(m,'cleave')) mIconBar+='<span class="abi">'+SVG_ICONS.cleave+'</span>';
  if(hasKw(m,'windfury')) mIconBar+='<span class="abi">'+SVG_ICONS.windfury+'</span>';
  if(hasKw(m,'pierce')) mIconBar+='<span class="abi">'+SVG_ICONS.pierce+'</span>';
  if(hasKw(m,'ranged')) mIconBar+='<span class="abi">'+SVG_ICONS.ranged+'</span>';
  if(hasKw(m,'invincible')) mIconBar+='<span class="abi">'+SVG_ICONS.invincible+'</span>';
  if(hasKw(m,'ambush')) mIconBar+='<span class="abi">'+SVG_ICONS.ambush+'</span>';
  var mIconHtml=mIconBar?'<div class="ability-icons">'+mIconBar+'</div>':'';
  return '<div class="'+cls+'"'+baseAttr+'>'+bgTag+sLogoTag+mIconHtml+'<div class="mini-inner"><div class="name">'+m.name+'</div>'+
    '<div class="mini-stats"><div class="mini-atk" style="'+statColor(m.baseId,m.isSkin,'atk',m.atk)+'">'+m.atk+'</div><div class="mini-hp" style="'+(m._peakHp&&m.hp<m._peakHp?'color:#ff0000;font-weight:900;text-shadow:-1.5px -1.5px 0 #000,1.5px -1.5px 0 #000,-1.5px 1.5px 0 #000,1.5px 1.5px 0 #000':statColor(m.baseId,m.isSkin,'hp',m.hp))+'">'+m.hp+'</div></div>'+
    kwHtml+miniAbilHtml+counterHtml+'</div></div>';
}

function continueBattle() {
  document.getElementById('battle-overlay').classList.remove('active');
  var p=G.players[0];
  if(p.dead){showGameOver();return;}
  if(G.aliveCount<=1){G.placement=1;showGameOver();return;}
  nextTurn();
  // Arisu&Kei transformation effect (right after entering recruit phase)
  if(G._pendingArisuKeiEntrance){
    delete G._pendingArisuKeiEntrance;
    try{var _akSnd=new Audio('../audio/arisu_kei.mp3');_akSnd.volume=0.6;_akSnd.play();
      _akSnd.addEventListener('timeupdate',function(){if(_akSnd.duration-_akSnd.currentTime<0.3&&_akSnd.volume>0){_akSnd.volume=Math.max(0,_akSnd.volume-0.05);}});
    }catch(e){}
    var _akFl=document.createElement('div');_akFl.style.cssText='position:fixed;inset:0;background:rgba(255,248,220,0.85);pointer-events:none;z-index:9999;opacity:0;transition:opacity 1.2s ease-in;';
    document.body.appendChild(_akFl);
    requestAnimationFrame(function(){_akFl.style.opacity='1';});
    var _akBoardEl=document.getElementById('ui-board');var _akCards=_akBoardEl?_akBoardEl.querySelectorAll('.card'):[];
    var _akLast=_akCards[_akCards.length-1];
    if(_akLast){_akLast.style.filter='brightness(3) saturate(0)';_akLast.style.transition='filter 3s ease-out 1.5s';requestAnimationFrame(function(){requestAnimationFrame(function(){_akLast.style.filter='brightness(1) saturate(1)';});});}
    setTimeout(function(){_akFl.style.transition='opacity 2.5s ease-out';_akFl.style.opacity='0';setTimeout(function(){if(_akFl.parentNode)_akFl.remove();},2500);},1500);
  }
}

function nextTurn() {
  G.turn++;var p=G.players[0];
  if(SANDBOX){p.stone=20;p.turnStone=20;p.upgradeCost=0;G.bonusStone=0;}
  else{p.turnStone=Math.min(MAX_STONE,p.turnStone+1);
  p.stone=p.turnStone+(G.bonusStone||0)+getAoiBonusStone();G.bonusStone=0;}
  G.freeRerolls=getMomokaFreeRerolls();
  if(p.upgradeCost>0)p.upgradeCost=Math.max(0,p.upgradeCost-1);
  for(var i=1;i<G.players.length;i++){
    var ai=G.players[i];if(ai.dead)continue;
    if(SANDBOX){ai.turnStone=MAX_STONE;ai.stone=MAX_STONE;ai.upgradeCost=0;}
    else{ai.turnStone=Math.min(MAX_STONE,ai.turnStone+1);
    var aiAoiBonus=0;for(var j=0;j<ai.board.length;j++){if(ai.board[j]&&ai.board[j].baseId==='aoi')aiAoiBonus+=ai.board[j].isSkin?4:2;}
    ai.stone=ai.turnStone+aiAoiBonus;
    if(ai.upgradeCost>0)ai.upgradeCost=Math.max(0,ai.upgradeCost-1);}
  }
  aiTurns();rollShop();renderAll();
  saveGame(); // Auto save every turn
}

// ===== Progress save/restore =====
var SAVE_KEY='babg_save';
function saveGame(){
  try{
    var saveData={
      players:G.players.map(function(p){
        return{id:p.id,name:p.name,hp:p.hp,tier:p.tier,stone:p.stone,turnStone:p.turnStone,
          upgradeCost:p.upgradeCost,dead:p.dead,isPlayer:p.isPlayer,frozen:p.frozen,
          purchasedSchools:p.purchasedSchools||{},totalDamageTaken:p.totalDamageTaken||0,
          panchanDeaths:p.panchanDeaths||0,
          personalityType:p.personalityType||'standard',
          board:p.board.map(function(u){
            return{id:u.id,baseId:u.baseId,name:u.name,school:u.school,tier:u.tier,
              atk:u.atk,hp:u.hp,maxHp:u.maxHp||u.hp,kw:(u.kw||[]).slice(),
              img:u.img,isSkin:u.isSkin,isHidden:u.isHidden||false,
              coinOff:u.coinOff||false,noAttack:u.noAttack||false,
              abilityImmune:u.abilityImmune||false,
              _battlesSurvived:u._battlesSurvived||0,
              _hovercraftCounter:u._hovercraftCounter||0,
              _akaneC4DR:u._akaneC4DR||false,_akaneC4Golden:u._akaneC4Golden||false,
              _keiseisenBuffed:u._keiseisenBuffed||false};
          }),
          bench:p.bench?{id:p.bench.id,baseId:p.bench.baseId,name:p.bench.name,school:p.bench.school,
            tier:p.bench.tier,atk:p.bench.atk,hp:p.bench.hp,maxHp:p.bench.maxHp||p.bench.hp,
            kw:(p.bench.kw||[]).slice(),img:p.bench.img,isSkin:p.bench.isSkin}:null
        };
      }),
      turn:G.turn,phase:G.phase,aliveCount:G.aliveCount,placement:G.placement,
      shop:G.shop.map(function(s){if(!s)return null;if(s.isSpell)return{isSpell:true,spell:s.spell,name:s.name,cost:s.cost,desc:s.desc,tier:s.tier,target:s.target,img:s.img||null};if(s.isHidden)return{isHidden:true,baseId:s.baseId,name:s.name,school:s.school,tier:s.tier,atk:s.atk,hp:s.hp,kw:(s.kw||[]).slice(),img:s.img};return{id:s.id,baseId:s.baseId,name:s.name,school:s.school,tier:s.tier,atk:s.atk,hp:s.hp,kw:(s.kw||[]).slice(),img:s.img,isSkin:s.isSkin||false,cost:s.cost||3};}),
      frozen:G.frozen||false,
      bonusStone:G.bonusStone||0,shopBuff:G.shopBuff||0,freeRerolls:G.freeRerolls||0,
      pool:G.pool,hiddenCardsOwned:G.hiddenCardsOwned,hiddenCardsEverOwned:G.hiddenCardsEverOwned,
      permanentAbilityBan:G.permanentAbilityBan,shopExclusions:G.shopExclusions,
      keiseisenCounters:G.keiseisenCounters,millenniumTokenSummons:G.millenniumTokenSummons,
      arisuDeathCount:G.arisuDeathCount,arisuPurchased:G.arisuPurchased||false,soldHkyk:G.soldHkyk||{},
      usedOnceSpells:G.usedOnceSpells||{},
      bunnyTossBonus:G.bunnyTossBonus||0,
      nonomiStoneSinceJoined:G.nonomiStoneSinceJoined||0,
      _shirokoTerrorAbsorbed:G._shirokoTerrorAbsorbed||[],
      savedAt:Date.now()
    };
    localStorage.setItem(SAVE_KEY,JSON.stringify(saveData));
  }catch(e){}
}
function loadGame(){
  try{
    var raw=localStorage.getItem(SAVE_KEY);
    if(!raw)return null;
    return JSON.parse(raw);
  }catch(e){return null;}
}
function deleteSave(){
  localStorage.removeItem(SAVE_KEY);
}
function hasSavedGame(){
  return !!localStorage.getItem(SAVE_KEY);
}
function restoreGame(save){
  var players=save.players.map(function(p){
    var restored={id:p.id,name:p.name,hp:p.hp,tier:p.tier,stone:p.stone,turnStone:p.turnStone,
      upgradeCost:p.upgradeCost,dead:p.dead,isPlayer:p.isPlayer,frozen:p.frozen||false,
      purchasedSchools:p.purchasedSchools||{},totalDamageTaken:p.totalDamageTaken||0,
      panchanDeaths:p.panchanDeaths||0,
      personality:AI_PERSONALITIES[p.personalityType||'standard'],
      personalityType:p.personalityType||'standard',
      board:p.board.map(function(u){
        return{id:u.id,baseId:u.baseId,name:u.name,school:u.school,tier:u.tier,
          atk:u.atk,hp:u.hp,maxHp:u.maxHp||u.hp,kw:u.kw||[],
          img:u.img,isSkin:u.isSkin||false,isHidden:u.isHidden||false,
          coinOff:u.coinOff||false,noAttack:u.noAttack||false,
          abilityImmune:u.abilityImmune||false,
          _battlesSurvived:u._battlesSurvived||0,
          _hovercraftCounter:u._hovercraftCounter||0,
          _akaneC4DR:u._akaneC4DR||false,_akaneC4Golden:u._akaneC4Golden||false};
      }),
      bench:p.bench?{id:p.bench.id,baseId:p.bench.baseId,name:p.bench.name,school:p.bench.school,
        tier:p.bench.tier,atk:p.bench.atk,hp:p.bench.hp,maxHp:p.bench.maxHp||p.bench.hp,
        kw:p.bench.kw||[],img:p.bench.img,isSkin:p.bench.isSkin||false}:null
    };
    return restored;
  });
  G={players:players,turn:save.turn,phase:save.phase||'recruit',
    shop:save.shop||[],aliveCount:save.aliveCount,placement:save.placement||0,
    frozen:save.frozen||false,bonusStone:save.bonusStone||0,shopBuff:save.shopBuff||0,
    pendingSpell:null,pool:save.pool,rioSchool:null,freeRerolls:save.freeRerolls||0,
    purchasedSchools:players[0].purchasedSchools||{},
    totalDamageTaken:save.totalDamageTaken||0,
    arisuDeathCount:save.arisuDeathCount||0,
    arisuPurchased:save.arisuPurchased||false,
    millenniumTokenSummons:save.millenniumTokenSummons||0,
    hiddenCardsOwned:save.hiddenCardsOwned||{},
    hiddenCardsEverOwned:save.hiddenCardsEverOwned||{},
    permanentAbilityBan:save.permanentAbilityBan||false,
    shopExclusions:save.shopExclusions||[],
    keiseisenCounters:save.keiseisenCounters||{},
    hovercraftCounter:0,soldHkyk:save.soldHkyk||{},
    usedOnceSpells:save.usedOnceSpells||{},
    bunnyTossBonus:save.bunnyTossBonus||0,
    nonomiStoneSinceJoined:save.nonomiStoneSinceJoined||0,
    _shirokoTerrorAbsorbed:save._shirokoTerrorAbsorbed||[]};
  rollShop();
}

// ===== Quest system =====
var REPEAT_QUESTS = [
  {id:'repeat_play1', name:'Play 1 Game (Repeatable)', target:1, points:2, repeatable:true}
];
var DAILY_QUESTS = [
  {id:'play3', name:'Play 3 Games', target:3, points:5},
  {id:'win1', name:'Win 1st Place Once', target:1, points:5},
  {id:'trinity10', name:'Recruit Trinity Students 10 Times', target:10, points:5},
  {id:'gehenna10', name:'Gehenna student 10x recruit', target:10, points:5},
  {id:'hyakkiyako10', name:'Hyakkiyako student 10x recruit', target:10, points:5},
  {id:'millennium10', name:'Millennium student 10x recruit', target:10, points:5},
  {id:'kill10', name:'Defeat 10 Students', target:10, points:5},
  {id:'skin3', name:'Upgrade to Skin 3 Times via Recruit', target:3, points:5},
  {id:'discover3', name:'Discover! 3 Times', target:3, points:5}
];
var WEEKLY_QUESTS = [
  {id:'win3', name:'Win 1st place 3 times', target:3, points:10},
  {id:'play10', name:'Play 10 Games', target:10, points:10},
  {id:'discover10', name:'Discover! 10 Times', target:10, points:10},
  {id:'skin10', name:'Upgrade to Skin 10 Times via Recruit', target:10, points:10},
  {id:'hidden1', name:'Complete a 7-star card', target:1, points:10},
  {id:'hidden_win', name:'Win 1st with 7-star card surviving', target:1, points:10}
];

window._questTracker = {
  recruits: {'Trinity':0, 'Gehenna':0, 'Hyakkiyako':0, 'Millennium':0},
  kills: 0,
  discovers: 0,
  skins: 0,
  hiddenCompleted: false,
  hiddenSurvived: false
};

function resetQuestTracker() {
  window._questTracker = {
    recruits: {'Trinity':0, 'Gehenna':0, 'Hyakkiyako':0, 'Millennium':0},
    kills: 0,
    discovers: 0,
    skins: 0,
    hiddenCompleted: false,
    hiddenSurvived: false
  };
}

function getTodayStr() {
  var d = new Date();
  var mm = String(d.getMonth()+1).padStart(2,'0');
  var dd = String(d.getDate()).padStart(2,'0');
  return d.getFullYear()+'-'+mm+'-'+dd;
}

function getMondayStr() {
  var d = new Date();
  var day = d.getDay(); // 0=Sun
  var diff = day === 0 ? 6 : day - 1; // days since Monday
  var monday = new Date(d);
  monday.setDate(d.getDate() - diff);
  var mm = String(monday.getMonth()+1).padStart(2,'0');
  var dd = String(monday.getDate()).padStart(2,'0');
  return monday.getFullYear()+'-'+mm+'-'+dd;
}

function pickRandom(arr, count) {
  var copy = arr.slice();
  var result = [];
  for (var i = 0; i < count && copy.length > 0; i++) {
    var idx = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(idx, 1)[0]);
  }
  return result;
}

function initQuestState(playerData) {
  var today = getTodayStr();
  var monday = getMondayStr();
  if (!playerData.questState) {
    playerData.questState = {daily: {date: '', quests: [], rerolled: false}, weekly: {weekStart: '', quests: []}};
  }
  if (!playerData.points) playerData.points = 0;
  var qs = playerData.questState;
  // Validation: force refresh if quest not in current definitions
  var dailyIds={};for(var _qi=0;_qi<DAILY_QUESTS.length;_qi++)dailyIds[DAILY_QUESTS[_qi].id]=true;
  var weeklyIds={};for(var _qi=0;_qi<WEEKLY_QUESTS.length;_qi++)weeklyIds[WEEKLY_QUESTS[_qi].id]=true;
  var dailyValid=true;if(qs.daily.quests){for(var _qi=0;_qi<qs.daily.quests.length;_qi++){if(!dailyIds[qs.daily.quests[_qi].id]){dailyValid=false;break;}}}
  var weeklyValid=true;if(qs.weekly.quests){for(var _qi=0;_qi<qs.weekly.quests.length;_qi++){if(!weeklyIds[qs.weekly.quests[_qi].id]){weeklyValid=false;break;}}}
  if(!dailyValid) qs.daily.date='';
  if(!weeklyValid) qs.weekly.weekStart='';
  // Daily quest refresh
  if (qs.daily.date !== today) {
    var picked = pickRandom(DAILY_QUESTS, 3);
    qs.daily = {
      date: today,
      quests: picked.map(function(q) { return {id: q.id, progress: 0, completed: false}; }),
      rerolled: false
    };
  }
  // Weekly quest refresh
  if (qs.weekly.weekStart !== monday) {
    var wpicked = pickRandom(WEEKLY_QUESTS, 3);
    qs.weekly = {
      weekStart: monday,
      quests: wpicked.map(function(q) { return {id: q.id, progress: 0, completed: false}; })
    };
  }
  // Repeatable quest (always exists, reset on complete, regenerate on ID change)
  var repeatValid=true;
  if(qs.repeat&&qs.repeat.quests){
    var repeatIds={};for(var _qi=0;_qi<REPEAT_QUESTS.length;_qi++)repeatIds[REPEAT_QUESTS[_qi].id]=true;
    for(var _qi=0;_qi<qs.repeat.quests.length;_qi++){if(!repeatIds[qs.repeat.quests[_qi].id]){repeatValid=false;break;}}
  }
  if (!qs.repeat||!repeatValid) {
    qs.repeat = {quests: REPEAT_QUESTS.map(function(q) { return {id: q.id, progress: 0, completed: false}; })};
  }
  return playerData;
}

function updateQuestProgress(playerData, tracker, placement) {
  if (!playerData.questState) return playerData;
  if (!playerData.points) playerData.points = 0;
  var qs = playerData.questState;

  // Build quest definition map
  var allQuests = {};
  for (var i = 0; i < DAILY_QUESTS.length; i++) allQuests[DAILY_QUESTS[i].id] = DAILY_QUESTS[i];
  for (var i = 0; i < WEEKLY_QUESTS.length; i++) allQuests[WEEKLY_QUESTS[i].id] = WEEKLY_QUESTS[i];
  for (var i = 0; i < REPEAT_QUESTS.length; i++) allQuests[REPEAT_QUESTS[i].id] = REPEAT_QUESTS[i];

  function updateList(questList) {
    for (var i = 0; i < questList.length; i++) {
      var q = questList[i];
      if (q.completed) continue;
      var def = allQuests[q.id];
      if (!def) continue;

      // Update progress
      if (q.id === 'repeat_play1') {
        q.progress += 1;
      } else if (q.id === 'play3' || q.id === 'play10') {
        q.progress += 1;
      } else if (q.id === 'win1' || q.id === 'win3') {
        if (placement === 1) q.progress += 1;
      } else if (q.id === 'trinity10') {
        q.progress += tracker.recruits['Trinity'] || 0;
      } else if (q.id === 'gehenna10') {
        q.progress += tracker.recruits['Gehenna'] || 0;
      } else if (q.id === 'hyakkiyako10') {
        q.progress += tracker.recruits['Hyakkiyako'] || 0;
      } else if (q.id === 'millennium10') {
        q.progress += tracker.recruits['Millennium'] || 0;
      } else if (q.id === 'kill10') {
        q.progress += tracker.kills || 0;
      } else if (q.id === 'discover10' || q.id === 'discover3') {
        q.progress += tracker.discovers || 0;
      } else if (q.id === 'skin10' || q.id === 'skin3') {
        q.progress += tracker.skins || 0;
      } else if (q.id === 'hidden1') {
        if (tracker.hiddenCompleted) q.progress += 1;
      } else if (q.id === 'hidden_win') {
        if (tracker.hiddenSurvived && placement === 1) q.progress += 1;
      }
      // login, login3 are not processed in submitGameRecord (processed in checkLoginQuest)

      // complete check
      if (q.progress >= def.target && !q.completed) {
        q.completed = true;
        playerData.points += def.points;
      }
    }
  }

  updateList(qs.daily.quests);
  updateList(qs.weekly.quests);
  // Repeatable quest: reset progress on complete
  if(qs.repeat&&qs.repeat.quests){
    updateList(qs.repeat.quests);
    for(var _rq=0;_rq<qs.repeat.quests.length;_rq++){
      if(qs.repeat.quests[_rq].completed){
        qs.repeat.quests[_rq].progress=0;
        qs.repeat.quests[_rq].completed=false;
      }
    }
  }
  return playerData;
}

function checkLoginQuest() {
  var login = window._babgLogin;
  if (!login || !login.name) return;
  fetchRecords(function(err, data, sha) {
    if (err || !data) return;
    if (!data.players) return;
    var name = login.name;
    if (!data.players[name]) return;
    var pd = data.players[name];
    pd = initQuestState(pd);

    var today = getTodayStr();
    // 이미 오늘 login process했는지 check
    if (pd.questState._lastLoginDate === today) return;
    pd.questState._lastLoginDate = today;

    // 일일 login quest 진행
    var allQuests = {};
    for (var i = 0; i < DAILY_QUESTS.length; i++) allQuests[DAILY_QUESTS[i].id] = DAILY_QUESTS[i];
    for (var i = 0; i < WEEKLY_QUESTS.length; i++) allQuests[WEEKLY_QUESTS[i].id] = WEEKLY_QUESTS[i];

    function processLogin(questList) {
      for (var i = 0; i < questList.length; i++) {
        var q = questList[i];
        if (q.completed) continue;
        if (q.id === 'login' || q.id === 'login3') {
          q.progress += 1;
          var def = allQuests[q.id];
          if (def && q.progress >= def.target && !q.completed) {
            q.completed = true;
            if (!pd.points) pd.points = 0;
            pd.points += def.points;
          }
        }
      }
    }
    processLogin(pd.questState.daily.quests);
    processLogin(pd.questState.weekly.quests);

    data.players[name] = pd;
    saveRecords(data, sha, function(e) {
      if (e) console.log('login quest save fail:', e);
      else console.log('login quest process complete');
    });
  });
}

function rerollDailyQuest(questIndex) {
  var login = window._babgLogin;
  if (!login || !login.name) return;
  fetchRecords(function(err, data, sha) {
    if (err || !data || !data.players) return;
    var name = login.name;
    if (!data.players[name]) return;
    var pd = data.players[name];
    pd = initQuestState(pd);
    var qs = pd.questState;
    if (qs.daily.rerolled) { console.log('Already rerolled today'); return; }
    if (questIndex < 0 || questIndex >= qs.daily.quests.length) return;
    if (qs.daily.quests[questIndex].completed) return;

    // current 활성 quest ID 목록
    var activeIds = {};
    for (var i = 0; i < qs.daily.quests.length; i++) activeIds[qs.daily.quests[i].id] = true;
    // 대체 가능한 quest 필터
    var candidates = DAILY_QUESTS.filter(function(q) { return !activeIds[q.id]; });
    if (candidates.length === 0) return;
    var newQuest = candidates[Math.floor(Math.random() * candidates.length)];
    qs.daily.quests[questIndex] = {id: newQuest.id, progress: 0, completed: false};
    qs.daily.rerolled = true;

    data.players[name] = pd;
    saveRecords(data, sha, function(e) {
      if (e) console.log('reroll save fail:', e);
      else console.log('quest reroll complete');
    });
  });
}

// ===== Record System (Worker Proxy) =====
var RECORDS_API='https://babg-records.preesoul.workers.dev';

function fetchRecords(cb){
  fetch(RECORDS_API).then(function(r){
    if(!r.ok) throw new Error('API '+r.status);
    return r.json();
  }).then(function(data){
    cb(null,data.content,data.sha);
  }).catch(function(e){cb(e,null,null);});
}

function saveRecords(data,sha,cb){
  fetch(RECORDS_API,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({content:data,sha:sha})
  }).then(function(r){
    if(!r.ok) throw new Error('API '+r.status);
    return r.json();
  }).then(function(res){
    if(cb)cb(null,res);
  }).catch(function(e){if(cb)cb(e);});
}

function submitGameRecord(){
  var login=window._babgLogin;
  if(!login||!login.name)return;
  var p=G.players[0];
  var boardData=p.board.map(function(u){
    return{name:u.name,baseId:u.baseId,atk:u.atk,hp:u.hp,tier:u.tier,kw:(u.kw||[]).slice(),isSkin:u.isSkin||false,img:u.img||'',school:u.school||''};
  });
  var record={
    date:new Date().toISOString().slice(0,19),
    placement:G.placement,
    turn:G.turn,
    tier:p.tier,
    board:boardData
  };
  var tracker = window._questTracker || {recruits:{'Trinity':0,'Gehenna':0,'Hyakkiyako':0,'Millennium':0},kills:0,discovers:0,skins:0,hiddenCompleted:false,hiddenSurvived:false};
  var placement = G.placement;
  var _retried=false;
  function _doSubmit(){
    fetchRecords(function(err,data,sha){
      if(err||!data){console.log('record save fail:',err);if(!_retried){_retried=true;setTimeout(_doSubmit,2000);}return;}
      if(!data.players)data.players={};
      var name=login.name;
      if(!data.players[name]){
        data.players[name]={records:[],points:0,questState:null};
      }
      data.players[name].records.push(record);
      // 최근 10전만 maintain
      if(data.players[name].records.length>10) data.players[name].records=data.players[name].records.slice(-10);
      // quest 진행도 업데이트
      data.players[name] = initQuestState(data.players[name]);
      data.players[name] = updateQuestProgress(data.players[name], tracker, placement);
      saveRecords(data,sha,function(e){
        if(e){console.log('record save fail:',e);if(!_retried){_retried=true;setTimeout(_doSubmit,2000);}}
        else console.log('Record save complete (incl. quests)');
      });
    });
  }
  _doSubmit();
}

function _renderRecordCard(r,showPin,pinIdx){
  var placeColor=r.placement===1?'#ffd700':r.placement<=3?'#60a5fa':'#c0d0e0';
  var h='<div style="margin-bottom:12px;padding:8px;background:rgba(0,0,0,0.2);border-radius:6px;border-left:3px solid '+placeColor+'">';
  h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">';
  if(showPin) h+='<label style="cursor:pointer;display:flex;align-items:center;gap:4px"><input type="checkbox" class="pin-check" data-pin-idx="'+pinIdx+'" '+(r.pinned?'checked':'')+' style="cursor:pointer"><span style="font-size:10px;color:#6a8a9e">Public</span></label>';
  h+='<span style="color:'+placeColor+';font-weight:900;font-size:18px">'+r.placement+'th</span>';
  h+='<span style="color:#6a8a9e;font-size:11px">'+r.date.slice(0,16).replace('T',' ')+' | Turn '+r.turn+' | Lv.'+r.tier+'</span>';
  h+='</div>';
  h+='<div style="display:flex;gap:8px;flex-wrap:wrap">';
  var board=r.board||[];
  for(var j=0;j<board.length;j++){
    var u=board[j];
    if(typeof u==='string'){
      h+='<div style="background:#1e2d3d;border:2px solid #3a5a6e;border-radius:4px;padding:4px 8px;font-size:11px;color:#c0d0e0">'+u+'</div>';
    } else {
      // 미unlock card는 hidden 표시
      var _unlocked=getUnlockedAbydos();
      var _charDef=findAnyChar(u.baseId);
      var _isLocked=_charDef&&_charDef.locked&&_unlocked.indexOf(u.baseId)===-1;
      if(_isLocked){
        var fakeHidden={id:'hidden_rec',baseId:'hidden',name:'???',school:'',tier:u.tier||1,atk:0,hp:0,kw:[],isSkin:false,img:'Hidden_card.png',coinOff:false};
        h+='<div class="rec-card" style="transform:scale(0.75);transform-origin:top left;margin-right:-42px;margin-bottom:-55px;pointer-events:none;opacity:0.5;filter:grayscale(1)">'+cardHtml(fakeHidden,j,true)+'</div>';
      } else {
        var fakeUnit={id:u.baseId+'_rec',baseId:u.baseId,name:u.name,school:u.school||'',tier:u.tier||1,atk:u.atk,hp:u.hp,kw:(u.kw||[]).slice(),isSkin:u.isSkin||false,img:u.img||'',coinOff:false};
        h+='<div class="rec-card" style="transform:scale(0.75);transform-origin:top left;margin-right:-42px;margin-bottom:-55px;pointer-events:none">'+cardHtml(fakeUnit,j,true)+'</div>';
      }
    }
  }
  h+='</div></div>';
  return h;
}
var _recData=null,_recSha=null;
function renderRecords(){
  var el=document.getElementById('records-content');
  el.innerHTML='Loading...';
  fetchRecords(function(err,data,sha){
    if(err||!data){el.innerHTML='Could not load records.';return;}
    _recData=data;_recSha=sha;
    if(!data.players||Object.keys(data.players).length===0){el.innerHTML='No records yet.';return;}
    var html='';
    var myName=window._babgLogin?window._babgLogin.name:null;
    // 내 record
    if(myName&&data.players[myName]){
      var p=data.players[myName];
      var recs=p.records||[];
      var wins=recs.filter(function(r){return r.placement===1;}).length;
      html+='<div style="margin-bottom:20px;padding:12px;background:rgba(255,255,255,0.05);border-radius:8px;border:1px solid #3a5a6e">';
      html+='<div style="font-size:16px;font-weight:700;color:#ffd700;margin-bottom:4px">'+myName+' <span style="font-size:12px;color:#6a8a9e">('+recs.length+'games '+wins+'wins)</span></div>';
      html+='<div style="font-size:10px;color:#6a8a9e;margin-bottom:12px">Check to make records Public for other Senseis</div>';
      if(recs.length===0){html+='<div style="color:#6a8a9e">record none</div>';}
      else{for(var i=recs.length-1;i>=0;i--) html+=_renderRecordCard(recs[i],true,i);}
      html+='</div>';
    }
    // 다른 Sensei들 's Public record
    var otherPinned=[];
    for(var name in data.players){
      if(name===myName) continue;
      var recs2=data.players[name].records||[];
      for(var i=0;i<recs2.length;i++){
        if(recs2[i].pinned) otherPinned.push(recs2[i]);
      }
    }
    if(otherPinned.length>0){
      // 셔플 후 최대 10개
      otherPinned.sort(function(){return Math.random()-0.5;});
      otherPinned=otherPinned.slice(0,10);
      html+='<div style="margin-top:24px;border-top:2px solid rgba(255,255,255,0.1);padding-top:16px">';
      html+='<div style="font-size:15px;font-weight:700;color:#a78bfa;margin-bottom:12px">Other Senseis Records</div>';
      for(var i=0;i<otherPinned.length;i++) html+=_renderRecordCard(otherPinned[i],false,-1);
      html+='</div>';
    }
    el.innerHTML=html;
    // 핀 check박스 이벤트
    el.querySelectorAll('.pin-check').forEach(function(cb){
      cb.addEventListener('change',function(){
        var idx=parseInt(this.getAttribute('data-pin-idx'));
        if(!myName||!_recData||!_recData.players[myName])return;
        var recs=_recData.players[myName].records;
        if(recs[idx]) recs[idx].pinned=this.checked;
        saveRecords(_recData,_recSha,function(){});
      });
    });
  });
}

// ===== 자가대games 온라인 학습 시스템 =====

// 3단계: card별 승패 통계
var SIM_STATS = {};
var SIM_RUNNING = false;
var SIM_EXPLORE = false; // ε-greedy 탐색 모드 (runSimBatch 내부에서만 true)

// 4단계: sim 통계 기반 purchase 점수 보정 (winRate 0.5 기준 ±3)
function simStatBonus(cardId) {
  var s = SIM_STATS[cardId];
  if(!s || (s.win + s.loss) < 10) return 0;
  var wr = s.win / (s.win + s.loss);
  return Math.max(-3, Math.min(3, (wr - 0.5) * 6));
}

// 3단계: game 결과 집계
// 1등 board 's card → win++, 나머지 모든 player board 's card → loss++
// (같은 card 1등과 2등 모두 가지고 있으면 win 1 + loss 1로 50% 수렴)
function simCollectStats(players) {
  var alive = [];
  var dead = [];
  for(var i = 1; i < players.length; i++) {
    if(!players[i].dead) alive.push(players[i]);
    else dead.push(players[i]);
  }
  alive.sort(function(a, b){
    if(b.hp !== a.hp) return b.hp - a.hp;
    return b.board.length - a.board.length;
  });
  dead.sort(function(a, b){ return (a.totalDamageTaken||0) - (b.totalDamageTaken||0); });
  var ranked = alive.concat(dead);
  if(ranked.length === 0) return;
  // 상위 50% → win, 하위 50% → loss (모든 AI card 집계)
  var half = Math.ceil(ranked.length / 2);
  for(var r = 0; r < ranked.length; r++) {
    var p = ranked[r];
    var isWin = (r < half);
    var cards = (p.dead && p.finalBoard) ? p.finalBoard : p.board;
    for(var j = 0; j < cards.length; j++) {
      var bid = cards[j].baseId;
      if(!bid) continue;
      if(!SIM_STATS[bid]) SIM_STATS[bid] = {win:0, loss:0};
      if(isWin) SIM_STATS[bid].win++; else SIM_STATS[bid].loss++;
    }
  }
}

// 2단계: 실battle 기반 배틀 phase
function simBattlePhase() {
  var alive = [];
  for(var i = 1; i < G.players.length; i++) {
    if(!G.players[i].dead) alive.push(G.players[i]);
  }
  var shuffled = alive.slice().sort(function(){return Math.random()-0.5;});
  var simCtx = {
    permanentAbilityBan:false, battleSchoolBuff:{},
    kuzunohaActive:false, millenniumTokenSummons:0,
    arisuDeathCount:0, keiseisenCounters:{},
    players:G.players
  };
  for(var i = 0; i+1 < shuffled.length; i += 2) {
    var pa = shuffled[i], pb = shuffled[i+1];
    if(!pa.board.length && !pb.board.length) continue;
    var res = runBattle(pa.board, pb.board, true, {simCtx:simCtx, skipSOC:false});
    if(res.result === 'win') {
      var dmg = pa.tier + Math.min(res.damage, 8);
      pb.hp -= dmg;
      pb.totalDamageTaken = (pb.totalDamageTaken||0) + dmg;
      if(pb.hp <= 0){pb.dead=true;G.aliveCount--;pb.finalBoard=pb.board.slice();pb.board=[];}
    } else if(res.result === 'lose') {
      var dmg2 = pb.tier + Math.min(res.damage, 8);
      pa.hp -= dmg2;
      pa.totalDamageTaken = (pa.totalDamageTaken||0) + dmg2;
      if(pa.hp <= 0){pa.dead=true;G.aliveCount--;pa.finalBoard=pa.board.slice();pa.board=[];}
    }
  }
}

// 1game sim레이션 실행 (G save→replace→sim→restore)
function runSimGame() {
  var saved = {
    players:G.players, pool:G.pool, turn:G.turn, aliveCount:G.aliveCount,
    hiddenCardsEverOwned:G.hiddenCardsEverOwned, kuzunohaActive:G.kuzunohaActive,
    permanentAbilityBan:G.permanentAbilityBan, battleSchoolBuff:G.battleSchoolBuff,
    millenniumTokenSummons:G.millenniumTokenSummons, arisuDeathCount:G.arisuDeathCount,
    keiseisenCounters:G.keiseisenCounters, bonusStone:G.bonusStone, freeRerolls:G.freeRerolls,
    phase:G.phase, shop:G.shop
  };
  try {
    // sim 풀: 모든 card 각 6장
    var simPool = {};
    for(var ci = 0; ci < CHARS.length; ci++) simPool[CHARS[ci].id] = 6;
    G.pool = simPool;

    // 더미(index 0) + AI 4명 구성
    var simPlayers = [{id:'sim_dummy',hp:0,dead:true,board:[],isPlayer:false,purchasedSchools:{},stone:0,turnStone:0,tier:1,upgradeCost:99}];
    for(var si = 0; si < 4; si++) {
      var simPType=AI_PERSONALITY_KEYS[si%4];
      simPlayers.push({
        id:'sim_'+si, name:'SimAI_'+si,
        hp:40, stone:3, turnStone:2,
        tier:1, upgradeCost:UPGRADE_COSTS[1],
        board:[], dead:false, isPlayer:false,
        purchasedSchools:{}, totalDamageTaken:0,
        personality:AI_PERSONALITIES[simPType], personalityType:simPType
      });
    }
    G.players = simPlayers;
    G.turn = 1; G.aliveCount = 4;
    G.hiddenCardsEverOwned = {};
    G.kuzunohaActive = false; G.permanentAbilityBan = false;
    G.battleSchoolBuff = {}; G.millenniumTokenSummons = 0;
    G.arisuDeathCount = 0; G.keiseisenCounters = {};
    G.bonusStone = 0; G.freeRerolls = 0;
    G.phase = 'recruit'; G.shop = [];

    // 최대 25Turn sim
    for(var t = 0; t < 25 && G.aliveCount > 1; t++) {
      G.turn = t + 1;
      for(var pi = 1; pi < G.players.length; pi++) {
        var sp = G.players[pi];
        if(sp.dead) continue;
        sp.turnStone = Math.min(MAX_STONE, sp.turnStone + 1);
        sp.stone = sp.turnStone;
        if(sp.upgradeCost > 0) sp.upgradeCost = Math.max(0, sp.upgradeCost - 1);
      }
      aiTurns();      // 기존 AI 로직 재활용 (i=1부터)
      simBattlePhase();
    }
    simCollectStats(G.players);
  } catch(e) {
    console.warn('[SIM] game error:', e);
  } finally {
    G.players = saved.players; G.pool = saved.pool; G.turn = saved.turn;
    G.aliveCount = saved.aliveCount; G.hiddenCardsEverOwned = saved.hiddenCardsEverOwned;
    G.kuzunohaActive = saved.kuzunohaActive; G.permanentAbilityBan = saved.permanentAbilityBan;
    G.battleSchoolBuff = saved.battleSchoolBuff; G.millenniumTokenSummons = saved.millenniumTokenSummons;
    G.arisuDeathCount = saved.arisuDeathCount; G.keiseisenCounters = saved.keiseisenCounters;
    G.bonusStone = saved.bonusStone; G.freeRerolls = saved.freeRerolls;
    G.phase = saved.phase; G.shop = saved.shop;
  }
}

// 5단계: N판 비동기 배치 실행
// 순수 랜덤 AI — 전략/점수 없이 purchase 가능한 card 중 random select
function simRandomTurns() {
  for(var i = 1; i < G.players.length; i++) {
    var p = G.players[i];
    if(p.dead) continue;
    // tier 업: 40% chance + 스톤 여유 있을 때
    if(p.tier < 6 && p.stone >= p.upgradeCost && Math.random() < 0.4) {
      p.stone -= p.upgradeCost;
      p.tier++;
      p.upgradeCost = p.tier < 6 ? UPGRADE_COSTS[p.tier] : 99;
    }
    // purchase: 스톤 있고 board 자리 있으면 랜덤 card purchase
    var buyLoop = 0;
    while(p.stone >= 3 && p.board.length < MAX_BOARD && buyLoop < 20) {
      buyLoop++;
      var avail = CHARS.filter(function(c){ return c.tier <= p.tier && G.pool[c.id] > 0; });
      if(avail.length === 0) break;
      var tmpl = avail[Math.floor(Math.random() * avail.length)];
      if(!takeFromPool(tmpl.id)) break;
      // triple check
      var baseCount = 0;
      for(var j = 0; j < p.board.length; j++) {
        if(p.board[j].baseId === tmpl.id && !p.board[j].isSkin) baseCount++;
      }
      if(baseCount >= 2) {
        var newBoard = []; var removed = 0;
        for(var j = 0; j < p.board.length; j++) {
          if(p.board[j].baseId === tmpl.id && !p.board[j].isSkin && removed < 2) removed++;
          else newBoard.push(p.board[j]);
        }
        p.board = newBoard;
        var skinUnit = makeMinion(tmpl, true); p.board.push(skinUnit); p.stone -= 3;
      } else if(p.board.length < MAX_BOARD) {
        var newUnit = makeMinion(tmpl, false); p.board.push(newUnit); p.stone -= 3;
      } else {
        returnToPool(tmpl.id); break;
      }
    }
  }
}

// 순수 랜덤 AI로 돌리는 sim (전략 편향 없이 card 자체 성능 측정용)
function runSimGameRandom() {
  var saved = {
    players:G.players, pool:G.pool, turn:G.turn, aliveCount:G.aliveCount,
    hiddenCardsEverOwned:G.hiddenCardsEverOwned, kuzunohaActive:G.kuzunohaActive,
    permanentAbilityBan:G.permanentAbilityBan, battleSchoolBuff:G.battleSchoolBuff,
    millenniumTokenSummons:G.millenniumTokenSummons, arisuDeathCount:G.arisuDeathCount,
    keiseisenCounters:G.keiseisenCounters, bonusStone:G.bonusStone, freeRerolls:G.freeRerolls,
    phase:G.phase, shop:G.shop
  };
  try {
    var simPool = {};
    for(var ci = 0; ci < CHARS.length; ci++) simPool[CHARS[ci].id] = 6;
    G.pool = simPool;
    var simPlayers = [{id:'sim_dummy',hp:0,dead:true,board:[],isPlayer:false,purchasedSchools:{},stone:0,turnStone:0,tier:1,upgradeCost:99}];
    for(var si = 0; si < 4; si++) {
      simPlayers.push({
        id:'sim_'+si, name:'RandAI_'+si,
        hp:40, stone:3, turnStone:2,
        tier:1, upgradeCost:UPGRADE_COSTS[1],
        board:[], dead:false, isPlayer:false,
        purchasedSchools:{}, totalDamageTaken:0,
        personality:AI_PERSONALITIES.standard, personalityType:'standard'
      });
    }
    G.players = simPlayers;
    G.turn = 1; G.aliveCount = 4;
    G.hiddenCardsEverOwned = {};
    G.kuzunohaActive = false; G.permanentAbilityBan = false;
    G.battleSchoolBuff = {}; G.millenniumTokenSummons = 0;
    G.arisuDeathCount = 0; G.keiseisenCounters = {};
    G.bonusStone = 0; G.freeRerolls = 0;
    G.phase = 'recruit'; G.shop = [];

    for(var t = 0; t < 25 && G.aliveCount > 1; t++) {
      G.turn = t + 1;
      for(var pi = 1; pi < G.players.length; pi++) {
        var sp = G.players[pi];
        if(sp.dead) continue;
        sp.turnStone = Math.min(MAX_STONE, sp.turnStone + 1);
        sp.stone = sp.turnStone;
        if(sp.upgradeCost > 0) sp.upgradeCost = Math.max(0, sp.upgradeCost - 1);
      }
      simRandomTurns();   // 전략 없이 순수 랜덤
      simBattlePhase();
    }
    simCollectStats(G.players);
  } catch(e) {
    console.warn('[SIM-RAND] game error:', e);
  } finally {
    G.players = saved.players; G.pool = saved.pool; G.turn = saved.turn;
    G.aliveCount = saved.aliveCount; G.hiddenCardsEverOwned = saved.hiddenCardsEverOwned;
    G.kuzunohaActive = saved.kuzunohaActive; G.permanentAbilityBan = saved.permanentAbilityBan;
    G.battleSchoolBuff = saved.battleSchoolBuff; G.millenniumTokenSummons = saved.millenniumTokenSummons;
    G.arisuDeathCount = saved.arisuDeathCount; G.keiseisenCounters = saved.keiseisenCounters;
    G.bonusStone = saved.bonusStone; G.freeRerolls = saved.freeRerolls;
    G.phase = saved.phase; G.shop = saved.shop;
  }
}

function runSimBatch(N, onDone) {
  if(SIM_RUNNING) return;
  SIM_RUNNING = true;
  SIM_EXPLORE = true; // 탐색 모드 ON (sim exclusive)
  var count = 0;
  function step() {
    if(count >= N) {
      SIM_RUNNING = false;
      SIM_EXPLORE = false; // 탐색 모드 OFF (실제 game 복귀)
      console.log('[SIM] '+N+'game complete. Stats updated.');
      if(onDone) onDone(SIM_STATS);
      return;
    }
    runSimGame();
    count++;
    setTimeout(step, 0);
  }
  setTimeout(step, 0);
}
