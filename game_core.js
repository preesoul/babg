// ========== GAME CORE ==========
// Pure game logic - shared between PC and Mobile

// ========== DATA ==========
var CHARS = [
  // ===== Tier 1 (밸류5) =====
  // 게헨나 3학년
  {id:'kayoko', name:'카요코', school:'게헨나',  tier:5,atk:7,hp:8,kw:[],            skin:'카요코(드레스)',   img:'Kayoko.png',         imgGold:'Kayoko_(Dress).png'},
  // 게헨나 1학년
  {id:'junko',  name:'준코',   school:'게헨나',  tier:1,atk:1,hp:3,kw:['selfdestruct'],            skin:'준코(새해)',       img:'Junko.png',          imgGold:'Junko_(New_Year).png'},
  // 밀레니엄 1학년
  {id:'toki',   name:'토키',   school:'밀레니엄',tier:1,atk:1,hp:3,kw:['survive'],   skin:'토키(바니걸)',     img:'Toki.png',           imgGold:'Toki_(Bunny_Girl).png'},
  {id:'midori', name:'미도리', school:'밀레니엄',tier:1,atk:3,hp:2,kw:[],            skin:'미도리(메이드)',   img:'Midori.png',         imgGold:'Midori_(Maid).png'},
  // 트리니티 1학년
  {id:'mari',   name:'마리',   school:'트리니티',tier:1,atk:1,hp:2,kw:['taunt'],     skin:'마리(아이돌)',     img:'Mari.png',           imgGold:'Mari_(Idol).png'},
  {id:'reisa',  name:'레이사', school:'트리니티',tier:1,atk:2,hp:2,kw:['reborn'],    skin:'레이사(마법소녀)', img:'Reisa.png',          imgGold:'Reisa_(Magical).png'},

  // ===== Tier 2 (밸류7) =====
  // 게헨나 1학년
  {id:'juri',    name:'주리',   school:'게헨나',  tier:2,atk:2,hp:5,kw:[],            skin:'주리(웨이트리스)',img:'Juri.png',           imgGold:'Juri_(maid).png'},
  {id:'chinatsu',name:'치나츠', school:'게헨나',  tier:2,atk:1,hp:4,kw:['reborn'],    skin:'치나츠(온천)',     img:'Chinatsu.png',       imgGold:'Chinatsu_(Hot_Spring).png'},
  // 밀레니엄 1학년
  {id:'momoi',   name:'모모이', school:'밀레니엄',tier:2,atk:3,hp:3,kw:['taunt'],     skin:'모모이(메이드)',   img:'Momoi.png',          imgGold:'Momoi_(Maid).png'},
  // 밀레니엄 2학년
  {id:'yuuka',   name:'유우카', school:'밀레니엄',tier:2,atk:4,hp:4,kw:['taunt'],     skin:'유우카(체육복)',   img:'Yuuka.png',          imgGold:'Yuuka_(Sportswear).png'},
  // 트리니티 1학년
  {id:'kazusa',  name:'카즈사', school:'트리니티',tier:2,atk:3,hp:2,kw:[],            skin:'카즈사(밴드)',     img:'Kazusa.png',         imgGold:'Kazusa_(Band).png'},
  {id:'mashiro', name:'마시로', school:'트리니티',tier:2,atk:3,hp:1,kw:['ranged'],    skin:'마시로(수영복)',   img:'Mashiro.png',        imgGold:'Mashiro_(Swimsuit).png'},

  // ===== Tier 3 (밸류9) =====
  // 게헨나 2학년
  {id:'aru',     name:'아루',   school:'게헨나',  tier:4,atk:5,hp:3,kw:['preemptive'], skin:'아루(드레스)',     img:'Aru.png',            imgGold:'Aru_(Dress).png'},
  {id:'kasumi',  name:'카스미', school:'게헨나',  tier:3,atk:4,hp:2,kw:[],            skin:'카스미(수영복)',   img:'Kasumi.png',         imgGold:'Kasumi_(Swimsuit).png'},  // +개전(SOC)
  // 게헨나 3학년
  {id:'sena',    name:'세나',   school:'게헨나',  tier:3,atk:5,hp:2,kw:['pierce'],    skin:'세나(사복)',       img:'Sena.png',           imgGold:'Sena_(Casual).png'},
  // 밀레니엄 1학년
  {id:'arisu',   name:'아리스', school:'밀레니엄',tier:4,atk:9,hp:2,kw:['pierce'],    skin:'아리스(메이드)',   img:'Arisu.png',          imgGold:'Arisu_(Maid).png'},
  {id:'hibiki',  name:'히비키', school:'밀레니엄',tier:3,atk:3,hp:3,kw:[],            skin:'히비키(치어리더)',img:'Hibiki.png',          imgGold:'Hibiki_(Cheerleader).png'},
  {id:'yuzu',    name:'유즈',   school:'밀레니엄',tier:3,atk:3,hp:3,kw:[],            skin:'유즈(메이드)',     img:'Yuzu.png',           imgGold:'Yuzu_(Maid).png'},
  // 트리니티 2학년
  {id:'ichika',  name:'이치카', school:'트리니티',tier:3,atk:5,hp:1,kw:['shield','windfury'],skin:'이치카(수영복)',img:'Ichika.png',     imgGold:'Ichika_(Swimsuit).png'},
  {id:'hanako',  name:'하나코', school:'트리니티',tier:3,atk:3,hp:5,kw:['poison'],    skin:'하나코(수영복)',   img:'Hanako.png',         imgGold:'Hanako_(Swimsuit).png'},
  {id:'hifumi',  name:'히후미', school:'트리니티',tier:3,atk:4,hp:4,kw:['reborn'],    skin:'히후미(수영복)',   img:'Hifumi.png',         imgGold:'Hifumi_(Swimsuit).png'},

  // ===== Tier 4 (밸류12) =====
  // 게헨나 2학년
  {id:'iori',    name:'이오리', school:'게헨나',  tier:4,atk:7,hp:1,kw:['shield','windfury'],skin:'이오리(수영복)',img:'Iori.png',     imgGold:'Iori_(Swimsuit).png'},
  {id:'iroha',   name:'이로하', school:'게헨나',  tier:4,atk:3,hp:2,kw:[],            skin:'이로하(수영복)',   img:'Iroha.png',          imgGold:'Iroha_(Swimsuit).png'},
  // 밀레니엄 1학년
  {id:'eimi',    name:'에이미', school:'밀레니엄',tier:3,atk:5,hp:4,kw:[],             skin:'에이미(수영복)',   img:'Eimi.png',           imgGold:'Eimi_(Swimsuit).png'},
  // 밀레니엄 2학년
  {id:'noa',     name:'노아',   school:'밀레니엄',tier:2,atk:2,hp:5,kw:['survive'],   skin:'노아(파자마)',     img:'Noa.png',            imgGold:'Noa_(Pajama).png'},
  // 트리니티 2학년
  {id:'azusa',   name:'아즈사', school:'트리니티',tier:4,atk:5,hp:3,kw:[],            skin:'아즈사(수영복)',   img:'Azusa.png',          imgGold:'Azusa_(Swimsuit).png'},
  // 트리니티 3학년
  {id:'hinata',  name:'히나타', school:'트리니티',tier:4,atk:2,hp:8,kw:['preemptive'],skin:'히나타(수영복)',   img:'Hinata.png',         imgGold:'Hinata_(Swimsuit).png'},

  // ===== Tier 5 (밸류15) =====
  // 게헨나 3학년
  {id:'ako',     name:'아코',   school:'게헨나',  tier:5,atk:6,hp:5,kw:['taunt'],     skin:'아코(드레스)',     img:'Ako.png',            imgGold:'Ako_(Dress).png'},
  {id:'satsuki', name:'사츠키', school:'게헨나',  tier:5,atk:3,hp:8,kw:[],            skin:'사츠키(수영복)',   img:'Satsuki.png',        imgGold:'Satsuki_(Swinsuit).png'},
  // 밀레니엄 3학년
  {id:'himari',  name:'히마리', school:'밀레니엄',tier:6,atk:6,hp:6,kw:[],            skin:'히마리(임전)',     img:'Himari.png',         imgGold:'Himari_(Battle).png'},
  {id:'rio',     name:'리오',   school:'밀레니엄',tier:6,atk:8,hp:8,kw:[],            skin:'리오(임전)',       img:'Rio.png',            imgGold:'Rio_(Battle).png'},
  // 트리니티 3학년
  {id:'sakurako',name:'사쿠라코',school:'트리니티',tier:5,atk:5,hp:9,kw:[],           skin:'사쿠라코(아이돌)', img:'Sakurako.png',       imgGold:'Sakurako_(Idol).png'},
  {id:'ui',      name:'우이',   school:'트리니티',tier:5,atk:8,hp:5,kw:['preemptive'],skin:'우이(수영복)',     img:'Ui.png',             imgGold:'Ui_(Swimsuit).png'},

  // ===== Tier 6 (밸류18) =====
  // 게헨나 3학년
  {id:'hina',    name:'히나',   school:'게헨나',  tier:6,atk:15,hp:5,kw:['cleave'],   skin:'히나(드레스)',     img:'Hina.png',           imgGold:'Hina_(Dress).png'},
  {id:'makoto',  name:'마코토', school:'게헨나',  tier:6,atk:6,hp:6,kw:[],            skin:'마코토(수영복)',   img:'Makoto.png',         imgGold:'Makoto_(Swimsuit).png'},
  // 밀레니엄 3학년
  {id:'neru',    name:'네루',   school:'밀레니엄',tier:5,atk:9,hp:7,kw:['shield','survive'],skin:'네루(바니걸)',img:'Neru.png',       imgGold:'Neru_(Bunny_Girl).png'},
  {id:'utaha',   name:'우타하', school:'밀레니엄',tier:5,atk:4,hp:4,kw:['preemptive'],skin:'우타하(치어리더)',img:'Utaha.png',       imgGold:'Utaha_(Cheerleader).png'},
  // 트리니티 3학년
  {id:'tsurugi', name:'츠루기', school:'트리니티',tier:6,atk:10,hp:10,kw:[],           skin:'츠루기(수영복)',   img:'Tsurugi.png',        imgGold:'Tsurugi_(Swimsuit).png'},
  {id:'mine',    name:'미네',   school:'트리니티',tier:6,atk:9,hp:5,kw:['taunt','shield','reborn'],skin:'미네(아이돌)',img:'Mine.png', imgGold:'Mine_(Idol).png'},

  // ===== 게헨나 신규 =====
  // 게헨나 1학년
  {id:'haruka',  name:'하루카', school:'게헨나',  tier:1,atk:1,hp:2,kw:['preemptive'],   skin:'하루카(새해)',     img:'Haruka.png',         imgGold:'Haruka_(New_Year).png'},
  {id:'ibuki',   name:'이부키', school:'게헨나',  tier:1,atk:1,hp:1,kw:[],               skin:'이부키(수영복)',   img:'Ibuki.png',          imgGold:'Ibuki_(Swimsuit).png'},
  // 게헨나 2학년
  {id:'mutsuki', name:'무츠키', school:'게헨나',  tier:2,atk:3,hp:2,kw:['pierce'],        skin:'무츠키(새해)',     img:'Mutsuki.png',        imgGold:'Mutsuki_(New_Year).png'},
  {id:'chiaki',  name:'치아키', school:'게헨나',  tier:3,atk:5,hp:3,kw:['ranged'],        skin:'치아키(수영복)',   img:'Chiaki.png',         imgGold:'Chiaki_(Swimsuit).png'},
  // ===== 밀레니엄 신규 =====
  // 밀레니엄 1학년
  {id:'koyuki',  name:'코유키', school:'밀레니엄',tier:1,atk:1,hp:2,kw:['preemptive'],   skin:'코유키(파자마)',   img:'Koyuki.png',         imgGold:'Koyuki_(Pajama).png'},
  // 밀레니엄 2학년
  {id:'akane',   name:'아카네', school:'밀레니엄',tier:3,atk:2,hp:4,kw:[],               skin:'아카네(버니걸)',   img:'Akane.png',          imgGold:'Akane_(Bunny_Girl).png'},
  {id:'karin',   name:'카린',   school:'밀레니엄',tier:5,atk:6,hp:5,kw:['ranged','pierce'],skin:'카린(버니걸)',   img:'Karin.png',          imgGold:'Karin_(Bunny_Girl).png'},
  // 밀레니엄 3학년
  {id:'asuna',   name:'아스나', school:'밀레니엄',tier:5,atk:8,hp:6,kw:[],               skin:'아스나(버니걸)',   img:'Asuna.png',          imgGold:'Asuna_(Bunny_Girl).png'},
  // ===== 트리니티 신규 =====
  // 트리니티 1학년
  {id:'koharu',  name:'코하루', school:'트리니티',tier:1,atk:2,hp:2,kw:['preemptive'],   skin:'코하루(수영복)',   img:'Koharu.png',         imgGold:'Koharu_(Swimsuit).png'},
  {id:'shimiko', name:'시미코', school:'트리니티',tier:2,atk:5,hp:3,kw:[],               skin:'시미코(악의 간부)',img:'Shimiko.png',         imgGold:'Shimiko_Evil_boss.png'},
  // 트리니티 2학년
  {id:'suzumi',  name:'스즈미', school:'트리니티',tier:4,atk:3,hp:7,kw:[],               skin:'스즈미(마법소녀)', img:'Suzumi.png',          imgGold:'Suzumi_(Magical).png'},
  // 트리니티 3학년
  {id:'hasumi',  name:'하스미', school:'트리니티',tier:5,atk:5,hp:7,kw:[],               skin:'하스미(수영복)',   img:'Hasumi.png',         imgGold:'Hasumi_(Swimsuit).png'},
  // ===== 총학생회 (중립) =====
  // 총학생회 1학년
  {id:'haine',   name:'하이네', school:'총학생회',tier:1,atk:3,hp:2,kw:[],            skin:'하이네(인터뷰)',   img:'Haine.png',          imgGold:'Haine_(Interview).png'},
  {id:'momoka',  name:'모모카', school:'총학생회',tier:2,atk:4,hp:3,kw:[],            skin:'모모카(승무원)',   img:'Momoka.png',         imgGold:'Momoka_(flight).png'},
  // 총학생회 2학년
  {id:'ayumu',   name:'아유무', school:'총학생회',tier:3,atk:5,hp:2,kw:[],            skin:'아유무(승무원)',   img:'Ayumu.png',          imgGold:'Ayumu_(flight).png'},
  {id:'aoi',     name:'아오이', school:'총학생회',tier:4,atk:5,hp:4,kw:[],            skin:'아오이(인터뷰)',   img:'Aoi.png',            imgGold:'Aoi_(Interview).png'},
  // 총학생회 3학년
  {id:'kaya',    name:'카야',   school:'총학생회',tier:5,atk:5,hp:10,kw:[],           skin:'카야(쿠데타)',     img:'Kaya.png',           imgGold:'Kaya_(Coup).png'},
  {id:'lin',     name:'린',     school:'총학생회',tier:6,atk:2,hp:8,kw:[],            skin:'린(승무원)',       img:'Lin.png',            imgGold:'Lin_(flight).png'},

  // ===== 백귀야행 =====
  // 백귀야행 1학년
  {id:'izuna',   name:'이즈나', school:'백귀야행',tier:1,atk:1,hp:2,kw:[],            skin:'이즈나(수영복)',   img:'Izuna.png',          imgGold:'Izuna_(Swimsuit).png'},
  {id:'pina',    name:'피나',   school:'백귀야행',tier:1,atk:2,hp:2,kw:['taunt','reborn'],skin:'피나(가이드)',  img:'Pina.png',           imgGold:'Pina_(Guide).png'},
  {id:'yukari',  name:'유카리', school:'백귀야행',tier:2,atk:3,hp:2,kw:['reborn','preemptive'],skin:'유카리(수영복)',img:'Yukari.png',     imgGold:'Yukari_(Swimsuit).png'},
  {id:'tsukuyo', name:'츠쿠요', school:'백귀야행',tier:2,atk:3,hp:2,kw:[],            skin:'츠쿠요(드레스)',   img:'Tsukuyo.png',        imgGold:'Tsukuyo_(Dress).png'},
  // 백귀야행 2학년
  {id:'mimori',  name:'미모리', school:'백귀야행',tier:3,atk:2,hp:4,kw:['taunt','survive'],skin:'미모리(수영복)',img:'Mimori.png',       imgGold:'Mimori_(Swimsuit).png'},
  {id:'renge',   name:'렌게',   school:'백귀야행',tier:3,atk:4,hp:2,kw:['shield','preemptive'],skin:'렌게(수영복)',img:'Renge.png',       imgGold:'Renge_(Swimsuit).png'},
  {id:'shizuko', name:'시즈코', school:'백귀야행',tier:5,atk:6,hp:6,kw:[],            skin:'시즈코(수영복)',   img:'Shizuko.png',        imgGold:'Shizuko_(Swimsuit).png'},
  {id:'tsubaki', name:'츠바키', school:'백귀야행',tier:4,atk:4,hp:3,kw:['taunt','shield'],skin:'츠바키(가이드)',img:'Tsubaki.png',      imgGold:'Tsubaki_(Guide).png'},
  {id:'kikyou',  name:'키쿄',   school:'백귀야행',tier:4,atk:5,hp:7,kw:['windfury','preemptive'],skin:'키쿄(수영복)',img:'Kikyou.png',   imgGold:'Kikyou_(Swimsuit).png'},
  {id:'chise',   name:'치세',   school:'백귀야행',tier:5,atk:5,hp:5,kw:[],            skin:'치세(수영복)',     img:'Chise.png',          imgGold:'Chise_(Swimsuit).png'},
  // 백귀야행 3학년
  {id:'nagusa',  name:'나구사', school:'백귀야행',tier:6,atk:5,hp:9,kw:['preemptive'],skin:'나구사(수영복)',img:'Nagusa.png',imgGold:'Nagusa_(Swimsuit).png'},
  {id:'wakamo',  name:'와카모', school:'백귀야행',tier:6,atk:4,hp:10,kw:['preemptive'],skin:'와카모(수영복)',img:'Wakamo.png',imgGold:'Wakamo_(Swimsuit).png'},
  {id:'michiru', name:'미치루', school:'백귀야행',tier:5,atk:5,hp:5,kw:[],            skin:'미치루(드레스)',   img:'Michiru.png',        imgGold:'Michiru_(Dress).png'},
];

// ========== HIDDEN (7성) ==========
var HIDDEN_CHARS = [
  // 게헨나
  {id:'gehenna_prefect',        name:'게헨나 선도부',        school:'게헨나',   tier:7, atk:10, hp:10, kw:['shield','windfury','cleave'], img:'unique/Gehenna_PrefectTeam.png'},
  {id:'gehenna_pandemonium',    name:'만마전',               school:'게헨나',   tier:7, atk:10, hp:10, kw:[],                                     img:'unique/Gehenna_pandemonium_Society.png'},
  {id:'gehenna_traingun',       name:'잊힌 열차포',          school:'게헨나',   tier:7, atk:6,  hp:6,  kw:[],                                     img:'unique/Gehenna_traingun.png'},
  // 트리니티
  {id:'trinity_mika',           name:'티파티(미카 호스트)',   school:'트리니티', tier:7, atk:30, hp:30, kw:[],                                     img:'unique/Trinity_mika.png'},
  {id:'trinity_nagisa',         name:'티파티(나기사 호스트)', school:'트리니티', tier:7, atk:10, hp:10, kw:[],                                     img:'unique/Trinity_nagisa.png'},
  {id:'trinity_seia',           name:'티파티(세이아 호스트)', school:'트리니티', tier:7, atk:0,  hp:2,  kw:[],                                     img:'unique/Trinity_seia.png'},
  // 밀레니엄
  {id:'millennium_nameless',    name:'이름없는 신들의 왕녀', school:'밀레니엄', tier:7, atk:20, hp:20, kw:[],                                     img:'unique/millennium_Nameless_God.png'},
  {id:'millennium_malkuth',     name:'말쿠트',               school:'밀레니엄', tier:7, atk:10, hp:20, kw:['shield','preemptive'],                img:'unique/Millennium_Malkuth.png'},
  {id:'millennium_death_momoi', name:'데스 모모이',          school:'밀레니엄', tier:7, atk:10, hp:10, kw:['shield','windfury','preemptive'],      img:'unique/Millennium_Death_momoi.png'},
  // 백귀야행
  {id:'hkyk_saikyo',            name:'최강일각라이온',       school:'백귀야행', tier:7, atk:50, hp:50, kw:[],                                     img:'unique/HKYK_Saikyo_ikaku_raion.png'},
  {id:'hkyk_kuzunoha',          name:'쿠즈노하',            school:'백귀야행', tier:7, atk:1, hp:1, kw:['shield','poison'],                    img:'unique/HKYK_Kuzunoha.png'},
  // 신규 7성
  {id:'gehenna_p68',             name:'흥신소 68',            school:'게헨나',   tier:7, atk:15, hp:15, kw:['pierce'],                               img:'unique/Problem_solver_68.png'},
  {id:'millennium_seminar',      name:'밀레니엄 세미나',      school:'밀레니엄', tier:7, atk:15, hp:15, kw:[],                                     img:'unique/Seminar.png'},
  {id:'millennium_cc',           name:'Cleaning&Clearing',    school:'밀레니엄', tier:7, atk:12, hp:12, kw:['ranged','shield'],                     img:'unique/Cleaning_Clearing.png'},
  {id:'trinity_makeup',          name:'보충수업부',           school:'트리니티', tier:7, atk:10, hp:10, kw:[],                                     img:'unique/Make_Up_Work_Club.png'},
  {id:'trinity_justice',         name:'정의실현부',           school:'트리니티', tier:7, atk:10, hp:10, kw:['shield','windfury'],                   img:'unique/Justice_Task_Force.png'},
];

// 히든 캐릭터 조회 헬퍼
function findHiddenChar(id){for(var i=0;i<HIDDEN_CHARS.length;i++)if(HIDDEN_CHARS[i].id===id)return HIDDEN_CHARS[i];return null;}
function findAnyChar(id){for(var i=0;i<CHARS.length;i++)if(CHARS[i].id===id)return CHARS[i];return findHiddenChar(id);}

// 버프 로그 헬퍼
function logBuff(unit, source, atkDelta, hpDelta) {
  if(!unit._buffLog) unit._buffLog=[];
  if(atkDelta===0&&hpDelta===0) return;
  // 같은 소스가 이미 있으면 합산
  for(var i=0;i<unit._buffLog.length;i++){
    if(unit._buffLog[i].src===source){
      unit._buffLog[i].atk+=atkDelta;
      unit._buffLog[i].hp+=hpDelta;
      return;
    }
  }
  unit._buffLog.push({src:source,atk:atkDelta,hp:hpDelta});
}

// 키워드 헬퍼
function hasKw(unit, kw) { return unit.kw && unit.kw.indexOf(kw) !== -1; }
function addKw(unit, kw) { if(!unit.kw) unit.kw=[]; if(unit.kw.indexOf(kw)===-1) unit.kw.push(kw); }
function kwText(unit) { if(!unit.kw||unit.kw.length===0) return ''; var bid=unit.baseId||''; return unit.kw.filter(function(k){ if(k==='survive') return false; if(k==='preemptive') return false; return true; }).map(function(k){return '<span class="kw-tag">'+(KW_LABELS[k]||k)+'</span>';}).join(''); }

var KW_LABELS = {taunt:'도발',shield:'보호막',cleave:'광역',reborn:'부활',windfury:'연사',poison:'독사굴',pierce:'관통',survive:'버티기',preemptive:'선제',ranged:'저격',selfdestruct:'자폭',invincible:'무적'};
var KW_DESCS = {
  invincible:'피해를 입지 않습니다.',
  taunt:'이 학생부터 공격합니다.',
  shield:'피해를 1회 막아줍니다.',
  cleave:'양 옆의 적도 공격합니다.',
  reborn:'처음 쓰러진 후, 체력 1로 부활합니다.',
  windfury:'한 턴에 두 번 공격합니다.',
  poison:'피해를 주면 대상을 즉시 쓰러뜨립니다.',
  pierce:'초과한 데미지가 양 옆으로 전달됩니다.',
  survive:'피격 후 살아남으면 발동합니다.',
  preemptive:'공격 시 발동합니다.',
  ranged:'반격을 받지 않습니다.',
  selfdestruct:'공격력과 체력을 더하여 공격 후 쓰러집니다.'
};
var TIER_COLORS = {1:'t1',2:'t2',3:'t3',4:'t4',5:'t5',6:'t6',7:'t7'};
var SCHOOL_ICONS = {'게헨나':'img/Icon/Gehenna.png','밀레니엄':'img/Icon/Millennium.png','트리니티':'img/Icon/Trinity.png','총학생회':'img/Icon/Council.png','백귀야행':'img/Icon/Hyakkiyako.png'};
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
  nagusa:3, wakamo:3, michiru:3
};
var SANDBOX = (typeof window!=='undefined' && (window.location.search.indexOf('sandbox=1')!==-1 || localStorage.getItem('babg_sandbox')==='1'));
if(typeof window!=='undefined') localStorage.removeItem('babg_sandbox');
var UPGRADE_COSTS = [0,5,7,8,9,11];
var SHOP_SIZE = [0,3,4,4,5,5,6];
var MAX_BOARD = 5;
var BATTLE_MAX = 7;
var START_HP = 40;
var MAX_STONE = SANDBOX ? 20 : 10;

// 능력 종류 분류
var BC_IDS  = {iroha:1, izuna:1, tsukuyo:1, tsubaki:1, michiru:1};                               // 첫인사
var DR_IDS  = {chinatsu:1, ako:1, kazusa:1, hifumi:1, azusa:1, kasumi:1, nagusa:1, juri:1, toramaru:1, junko:1, satsuki:1, yuzu:1, airship:1, gehenna_prefect:1, gehenna_pandemonium:1, gehenna_traingun:1, trinity_seia:1, hovercraft:1, millennium_cc:1}; // 뒤끝
var SOC_IDS = {kayoko:1, midori:1, momoi:1, mari:1, tsurugi:1, sakurako:1, rio:1, himari:1, mine:1, hibiki:1, makoto:1, kaya:1, kasumi:1, ibuki:1, akane:1, iori:1, hanako:1, pina:1, gehenna_traingun:1, trinity_nagisa:1, millennium_nameless:1, millennium_death_momoi:1, hkyk_kuzunoha:1, gehenna_p68:1, millennium_seminar:1, trinity_justice:1}; // 개전
var SURV_IDS = {toki:1, neru:1, noa:1, mimori:1}; // 버티기
var PASSIVE_IDS = {haine:1, momoka:1, ayumu:1, aoi:1, lin:1, asuna:1, hasumi:1, suzumi:1, sena:1, gehenna_traingun:1, trinity_mika:1, trinity_seia:1, shizuko:1, chise:1, wakamo:1, eimi:1, millennium_cc:1, trinity_makeup:1, gehenna_prefect:1, gehenna_pandemonium:1, millennium_death_momoi:1, gehenna_p68:1, millennium_seminar:1, trinity_justice:1, trinity_nagisa:1}; // 패시브 (영입 턴/상시)
var PRE_IDS = {aru:1, koyuki:1, koharu:1, trinity_mika:1, hkyk_kuzunoha:1}; // 선제 능력 (공격 시 데미지 계산 전 발동)

// 능력 설명 (CSV 기반)
var ABILITY_DESCS = {
  juri:     {type:'뒤끝',desc:'다른 아군이 남아 있다면\n<팬짱>을 소환합니다. (1/1)\n이번 게임에서 아군 팬짱이 쓰러진 수만큼\n+1/+1이 추가됩니다.',skinEffect:'웨이트리스 주리: 팬짱 2마리 소환',skinEffectDesc:'뒤끝: 다른 아군이 남아 있다면\n<팬짱>을 <span style="color:#ffd700;font-weight:700">2마리</span> 소환합니다. (1/1)\n이번 게임에서 아군 팬짱이 쓰러진 수만큼\n+1/+1이 추가됩니다.'},
  chinatsu: {type:'뒤끝',desc:'아군 무작위 1인에게 보호막을 부여합니다.',skinEffect:'온천 치나츠: 아군 두 명에게 부여',skinEffectDesc:'뒤끝: 아군 무작위 <span style="color:#ffd700;font-weight:700">2인에게</span> 보호막을 부여합니다.'},
  kayoko:   {type:'개전',desc:'상대방의 1~5번째 학생 배치를 역순으로 뒤집습니다.',skinEffect:'드레스 카요코: 동일'},
  midori:   {type:'개전',desc:'<모모이> 수만큼 +1/+1',skinEffect:'메이드 미도리: 수×+2/+2\n둘 다 메이드: 수×+4/+4',skinEffectDesc:'개전: <모모이> 수만큼 <span style="color:#ffd700;font-weight:700">+2/+2</span>'},
  momoi:    {type:'개전',desc:'<미도리> 수만큼 +1/+1',skinEffect:'메이드 모모이: 수×+2/+2\n둘 다 메이드: 수×+4/+4',skinEffectDesc:'개전: <미도리> 수만큼 <span style="color:#ffd700;font-weight:700">+2/+2</span>'},
  mari:     {type:'개전',desc:'아군 전체 +2/+1',skinEffect:'아이돌 마리: +3/+2',skinEffectDesc:'개전: 아군 전체 <span style="color:#ffd700;font-weight:700">+3/+2</span>'},
  aru:      {type:'선제',desc:'공격 시, 5~6티어 학생에게는 공격력이 2배가 됩니다.\n1~2티어 학생에게는 공격력이 절반(내림)이 됩니다.',skinEffect:'드레스 아루: 3배',skinEffectDesc:'선제: 공격 시, 5~6티어 학생에게는 공격력이 <span style="color:#ffd700;font-weight:700">3배</span>가 됩니다.\n1~2티어 학생에게는 공격력이 절반(내림)이 됩니다.'},
  kasumi:   {type:'뒤끝',desc:'뒤끝: 자신을 쓰러뜨린 상대를 쓰러뜨립니다.',skinEffect:'수영복 카스미: 개전 추가 (가장 체력 높은 적을 공격 대상으로 지정)',skinEffectDesc:'개전: 가장 체력이 높은 적을 공격 대상으로 지정합니다.\n뒤끝: 자신을 쓰러뜨린 상대를 쓰러뜨립니다.'},
  iroha:    {type:'첫인사',desc:'<토라마루>로 교체됩니다. (토라마루: 5/1)\n토라마루 파괴 시 이로하로 돌아옵니다.',skinEffect:'수영복 이로하: 토라마루 10/2\n토라마루 파괴 시 이로하로 돌아옵니다.',skinEffectDesc:'첫인사: <토라마루>로 교체됩니다. (토라마루: <span style="color:#ffd700;font-weight:700">10/2</span>)\n토라마루 파괴 시 이로하로 돌아옵니다.'},
  himari:   {type:'개전',desc:'아군 밀레니엄 학생의 공격력과 체력을\n각각 둘 중 높은 값으로 설정합니다.',skinEffect:'임전 히마리: 최고 공/체를 히마리에게 적용',skinEffectDesc:'개전: 아군 밀레니엄 학생의 공격력과 체력을\n각각 둘 중 높은 값으로 설정합니다.\n이후, 아군에서 <span style="color:#ffd700;font-weight:700">가장 높은 공격력과 가장 높은 체력</span>을\n히마리에게 적용합니다.'},
  rio:      {type:'개전',desc:'아군 전체의 학교를 가장 왼쪽 아군의\n학교로 통일합니다.',skinEffect:'임전 리오: 적 학교 태그 삭제',skinEffectDesc:'개전: 아군 전체의 학교를 가장 왼쪽 아군의\n학교로 통일합니다.\n<span style="color:#ffd700;font-weight:700">적의 학교 태그를 삭제합니다.</span>\n이 효과는 가장 먼저 발동합니다.'},
  ako:      {type:'뒤끝',desc:'이번 전투에서 게헨나 학생들 +4/+4',skinEffect:'드레스 아코: +8/+8',skinEffectDesc:'뒤끝: 이번 전투에서 게헨나 학생들에게 <span style="color:#ffd700;font-weight:700">+8/+8</span>을 부여합니다.'},
  kazusa:   {type:'뒤끝',desc:'<카스팔루스>로 교체됩니다. (1/1, 독사굴)',skinEffect:'밴드 카즈사: 부활 추가',skinEffectDesc:'<span style="color:#ffd700;font-weight:700">부활</span>, 뒤끝: <카스팔루스>로 교체됩니다.\n(카스팔루그: 1/1, 독사굴)'},
  hifumi:   {type:'뒤끝',desc:'<페로로님>을 소환합니다. (2/1)\n페로로님이 적을 쓰러뜨리면 히후미로 교체됩니다.',skinEffect:'수영복 히후미: 페로로님 4/2',skinEffectDesc:'뒤끝: <페로로님>을 소환합니다. (페로로님: <span style="color:#ffd700;font-weight:700">4/2</span>)\n페로로님이 적을 쓰러뜨리면 히후미로 교체됩니다.'},
  azusa:    {type:'뒤끝',desc:'적 전체에게 -2의 데미지를 줍니다.',skinEffect:'수영복 아즈사: -4 데미지',skinEffectDesc:'뒤끝: 적 전체에게 <span style="color:#ffd700;font-weight:700">-4</span>의 데미지를 줍니다.'},
  sakurako: {type:'개전',desc:'아군 트리니티 학생들의 개전을 한 번 더 발동합니다.',skinEffect:'아이돌 사쿠라코: 두 번 더 발동',skinEffectDesc:'개전: 아군 트리니티 학생들의 개전을 <span style="color:#ffd700;font-weight:700">두 번</span> 더 발동합니다.'},
  tsurugi:  {type:'개전',desc:'공/체가 두 배가 됩니다.\n개전 마지막에 발동됩니다.',skinEffect:'수영복 츠루기: 세 배',skinEffectDesc:'개전: 공/체가 <span style="color:#ffd700;font-weight:700">세 배</span>가 됩니다.'},
  mine:     {type:'개전',desc:'아군의 모든 도발을 제거합니다.',skinEffect:'아이돌 미네: 아군 적군 모든 도발을 제거합니다.',skinEffectDesc:'개전: <span style="color:#ffd700;font-weight:700">아군 적군</span> 모든 도발을 제거합니다.'},
  toki:     {type:'버티기',desc:'<아비 에슈흐>를 소환합니다.\n스케쥴 레벨만큼의 공/체를 가집니다.',skinEffect:'바니걸 토키: 스케쥴 레벨×2',skinEffectDesc:'버티기: <아비 에슈흐>를 소환합니다.\n스케쥴 레벨<span style="color:#ffd700;font-weight:700">×2</span>의 공/체를 가집니다.'},
  neru:     {type:'버티기',desc:'기본 능력 중 하나를 무작위로 얻습니다.',skinEffect:'바니걸 네루: 두 가지를 무작위로 얻습니다.',skinEffectDesc:'버티기: 기본 능력 중 <span style="color:#ffd700;font-weight:700">두 가지</span>를 무작위로 얻습니다.'},
  toramaru: {type:'뒤끝',desc:'원래의 이로하를 소환합니다.',skinEffect:'스킨 토라마루: 수영복 이로하 소환'},
  ui:       {type:'선제',desc:'상대의 모든 능력을 삭제합니다.',skinEffect:'수영복 우이: 상대 바로 옆 한 명도 함께 삭제',skinEffectDesc:'선제: <span style="color:#ffd700;font-weight:700">상대와 상대 바로 옆</span> 한 명의 모든 능력을 삭제합니다.'},
  junko:    {type:'자폭 / 뒤끝',desc:'자폭: 공격력과 체력을 합쳐 공격 후 쓰러집니다.\n뒤끝: <당고>를 소환합니다. (1/1)',skinEffect:'새해 준코: 당고 2개 소환',skinEffectDesc:'뒤끝: <당고>를 <span style="color:#ffd700;font-weight:700">2개</span> 소환합니다. (당고 1/1)'},
  eimi:     {type:'패시브',desc:'밀레니엄의 모든 토큰 소환 시\n스케쥴 레벨만큼의 공/체를 추가합니다.',skinEffect:'수영복 에이미: 스케쥴 레벨×2',skinEffectDesc:'패시브: 밀레니엄의 모든 토큰 소환 시,\n스케쥴 레벨<span style="color:#ffd700;font-weight:700">×2</span>만큼의 공/체를 추가합니다.'},
  sena:     {type:'패시브',desc:'관통의 초과 데미지만큼 아군 전체 HP를 회복합니다.\n(전투당 1회)',skinEffect:'사복 세나: 초과 데미지 x2 회복',skinEffectDesc:'패시브: 관통의 초과 데미지 <span style="color:#ffd700;font-weight:700">x2</span>만큼 아군 전체 HP를 회복합니다.\n(전투당 1회)'},
  satsuki:  {type:'뒤끝',desc:'자신을 죽인 상대를 1턴간 빼앗습니다.',skinEffect:'수영복 사츠키: 2턴간 빼앗음',skinEffectDesc:'뒤끝: 자신을 죽인 상대를 <span style="color:#ffd700;font-weight:700">2턴간</span> 빼앗습니다.'},
  makoto:   {type:'개전',desc:'<비행선>으로 교체됩니다.\n비행선: 아군 수×3 공격력/체력, 자폭',skinEffect:'수영복 마코토: 아군 수×6\n비행선 자폭 후 파마머리 마코토 소환',skinEffectDesc:'개전: <비행선>으로 교체됩니다.\n(비행선: 아군 수<span style="color:#ffd700;font-weight:700">×6</span> 공격력/체력, 자폭)'},
  hibiki:   {type:'개전',desc:'적 전체 -1/-1',skinEffect:'치어리더 히비키: -2/-2',skinEffectDesc:'개전: 적 전체에게 <span style="color:#ffd700;font-weight:700">-2/-2</span>을 부여합니다.'},
  yuzu:     {type:'뒤끝',desc:'이번 전투에서 쓰러진 아군 수×2 공/체의\n<아방가르드군>을 소환합니다.',skinEffect:'메이드 유즈: 쓰러진 아군 수×4',skinEffectDesc:'뒤끝: 이번 전투에서 쓰러진 아군 수<span style="color:#ffd700;font-weight:700">×4</span> 공/체의\n<아방가르드군>을 소환합니다.'},
  noa:      {type:'버티기',desc:'상대의 능력(키워드)을 복사합니다.\n아군 유우카에게도 부여합니다.',skinEffect:'파자마 노아: 아군 모든 밀레니엄 학생들에게도 부여',skinEffectDesc:'버티기: 상대의 능력(키워드)을 복사합니다.\n<span style="color:#ffd700;font-weight:700">아군 모든 밀레니엄 학생들에게도</span> 부여합니다.'},
  utaha:    {type:'선제',desc:'<천둥이>(8/2, 보호막)를 소환해 먼저 공격시킵니다.\n천둥이가 적을 처치하면 우타하는 공격하지 않습니다.',skinEffect:'치어리더 우타하: 천둥이 두 번 소환',skinEffectDesc:'선제: <천둥이>(8/2, 보호막)를 소환해 먼저 공격시킵니다.\n<span style="color:#ffd700;font-weight:700">두 번 시행합니다.</span>\n천둥이가 적을 처치하면 우타하는 공격하지 않습니다.'},
  mashiro:  {type:'저격',desc:'저격 공격. 반격을 받지 않습니다.',skinEffect:'수영복 마시로: 관통 추가',skinEffectDesc:'저격+관통: 저격 공격 + 관통 공격.\n반격 없이 모든 적을 관통합니다.'},
  hinata:   {type:'선제',desc:'한 번에 2~5회 공격합니다.',skinEffect:'수영복 히나타: 4~10회',skinEffectDesc:'선제: 한 번에 <span style="color:#ffd700;font-weight:700">4~10회</span> 공격합니다.'},
  airship:  {type:'뒤끝',desc:'<파마머리 마코토>를 소환합니다.',skinEffect:''},
  // 7성 히든
  gehenna_prefect:        {type:'패시브 / 뒤끝',desc:'샬레의 히나, 이오리, 아코, 치나츠를 흡수하며 등장합니다.\n흡수한 학생들 각각의 공격력 합, 체력 합을 각각 더합니다.\n뒤끝: 이번 게임에서 완전히 사라집니다.\n이후 <마지막 히나>(10/10, 광역+독사굴)를 소환합니다.',skinEffect:'',quote:'히나: 하아… 빨리 끝내지.'},
  gehenna_pandemonium:    {type:'패시브 / 뒤끝',desc:'샬레의 마코토, 사츠키, 이로하, 이부키, 치아키를 흡수하며 등장합니다.\n기본 능력치 10/10에 흡수한 학생들 각각의 공격력 합, 체력 합을 각각 더합니다.\n뒤끝: 상대 무작위 2인을 이번 전투동안 빼앗습니다.\n황금 비행선(도발)과 황금 토라마루(도발)를 소환합니다.',skinEffect:'',quote:'마코토: 이번에야말로 트리니티를 키보토스의 지도에서 없애버릴 때다!'},
  gehenna_traingun:       {type:'패시브 / 개전 / 뒤끝',desc:'공격하지 않습니다.\n개전: 상대 전체에 6의 광역 데미지.\n살아남은 전투마다 개전 발동 횟수가 증가합니다.\n뒤끝: 이번 게임에서 완전히 사라집니다.',skinEffect:'',quote:'…<뇌제>가 남긴 조각 하나, 파편 하나 남기지 마라.'},
  trinity_mika:           {type:'패시브 / 선제',desc:'패시브: 능력/효과로 인한 데미지와 쓰러짐에 면역입니다.\n전투 데미지로만 쓰러뜨릴 수 있습니다.\n선제: 공격 시 상대가 게헨나 출신이면 공격력이 두 배가 됩니다.',skinEffect:'',quote:'미카: 응! 오래 기다렸지? 이제 내가 활약할 차례인 거네☆'},
  trinity_nagisa:         {type:'패시브 / 개전',desc:'패시브: 트리니티 학생들을 대상으로 하는\n능력치 추가 효과에 +10/+10을 추가합니다.\n패시브: 자신을 쓰러뜨린 상대를 쓰러뜨립니다.\n개전: 마리(아이돌), 사쿠라코(아이돌), 미네(아이돌)에게\n+10/+10를 부여합니다.',skinEffect:'',quote:'나기사: 트리니티를 대표하여 인사드립니다.'},
  trinity_seia:           {type:'패시브 / 뒤끝',desc:'공격하지 않습니다.\n아군 트리니티 학생들은 방어 시 전투 데미지를 받지 않습니다.\n뒤끝: 아군 전체 능력이 삭제됩니다.\n세이아가 이번 게임에서 완전히 사라집니다.',skinEffect:'',quote:'세이아: 이렇듯, 모든 길은 하나로 이어지게 마련입니다.'},
  millennium_nameless:    {type:'개전',desc:'자신을 파괴합니다.\n공격력+체력 총합으로 적 왼쪽부터 순차 데미지.\n보호막을 무시하고 체력에 직접 데미지를 줍니다.',skinEffect:'',quote:'???: 결국… 언젠가는 모두가 다치게 된다는 걸.'},
  millennium_malkuth:     {type:'선제',desc:'선제: 자신은 공격하지 않습니다.\n대신 스위퍼(10/10, 보호막, 자폭)를\n아군 밀레니엄 학생 수만큼 소환합니다.\n스위퍼로 적이 쓰러지면 말쿠트는 공격하지 않습니다.',skinEffect:'',quote:'말쿠트: 깃발 아래 창조된 하나의 의지. 세상에 끝네 도달한 왕국의 순례자.',quote2:'말쿠트: …말쿠트라고 합니다.'},
  millennium_death_momoi: {type:'패시브 / 선제',desc:'샬레의 모든 모모이를 흡수하며 등장합니다.\n기본 능력치 10/10에 흡수한 모모이들의 공격력 합, 체력 합을 각각 더합니다.\n선제: 적 스탯이 기본보다 높으면 부여 수치를 제거하고 공격합니다.',skinEffect:'',quote:'데스 모모이: FATALITY!!!!',quoteCls:'chat-fatal'},
  sweeper:  {type:'자폭',desc:'보호막. 자폭 공격.',skinEffect:''},
  // 백귀야행
  izuna:    {type:'첫인사',desc:'아군 전체 공격력 +1 (자신 포함)',skinEffect:'수영복 이즈나: +1/+1',skinEffectDesc:'첫인사: 아군 전체에게 <span style="color:#ffd700;font-weight:700">+1/+1</span> (자신 포함)'},
  tsukuyo:  {type:'첫인사',desc:'아군 전체 +1/+1 (자신 포함)',skinEffect:'드레스 츠쿠요: +2/+2',skinEffectDesc:'첫인사: 아군 전체에게 <span style="color:#ffd700;font-weight:700">+2/+2</span>을 부여합니다. (자신 포함)'},
  yukari:   {type:'선제',desc:'<계승전> 카운터를 1 쌓습니다. (최대 5)',skinEffect:'수영복 유카리: 보호막 추가',skinEffectDesc:'선제: <계승전> 카운터를 1 쌓습니다.\n<span style="color:#ffd700;font-weight:700">보호막</span>을 추가로 가집니다.'},
  mimori:   {type:'버티기',desc:'이번 전투 동안 상대 전체 공격력 -1\n(공격력 0이면 공격하지 않습니다.)',skinEffect:'수영복 미모리: -2',skinEffectDesc:'버티기: 이번 전투 동안 상대 전체 공격력 <span style="color:#ffd700;font-weight:700">-2</span>\n(공격력 0이면 공격하지 않습니다.)'},
  renge:    {type:'선제',desc:'<계승전> 카운터를 1 쌓습니다. (최대 5)',skinEffect:'수영복 렌게: 부활 추가',skinEffectDesc:'선제: <계승전> 카운터를 1 쌓습니다.\n<span style="color:#ffd700;font-weight:700">부활</span>을 추가로 가집니다.'},
  shizuko:  {type:'패시브',desc:'첫인사가 2회 발동합니다.',skinEffect:'수영복 시즈코: 4회 발동',skinEffectDesc:'패시브: 첫인사가 <span style="color:#ffd700;font-weight:700">4회</span> 발동합니다.'},
  tsubaki:  {type:'첫인사',desc:'아군 백귀야행 학생들 +2/+2 (본인 포함)',skinEffect:'가이드 츠바키: +4/+4',skinEffectDesc:'첫인사: 아군 백귀야행 학생들에게 <span style="color:#ffd700;font-weight:700">+4/+4</span>를 부여합니다. (본인 포함)'},
  kikyou:   {type:'선제',desc:'<계승전> 카운터를 1 쌓습니다. (최대 5)',skinEffect:'수영복 키쿄: 보호막 추가',skinEffectDesc:'선제: <계승전> 카운터를 1 쌓습니다.\n<span style="color:#ffd700;font-weight:700">보호막</span>을 추가로 가집니다.'},
  chise:    {type:'패시브',desc:'공격한 상대의 능력 중\n무작위 1개를 이번 전투 동안 제거합니다.',skinEffect:'수영복 치세: 무작위 2개 제거',skinEffectDesc:'패시브: 공격한 상대의 능력 중\n무작위 <span style="color:#ffd700;font-weight:700">2개</span>를 이번 전투 동안 제거합니다.'},
  michiru:  {type:'첫인사',desc:'샬레의 다른 백귀야행 학생들이 가진\n모든 첫인사를 추가로 발동합니다.',skinEffect:'드레스 미치루: 추가로 두 번 발동',skinEffectDesc:'첫인사: 샬레의 다른 백귀야행 학생들이 가진\n모든 첫인사를 추가로 <span style="color:#ffd700;font-weight:700">두 번</span> 발동합니다.'},
  nagusa:   {type:'선제 / 뒤끝',desc:'2~5회 공격합니다.\n타격 1회당 <계승전> 카운터를 1 쌓습니다. (최대 5)\n뒤끝: 자신을 쓰러뜨린 상대를 쓰러뜨립니다.',skinEffect:'수영복 나구사: 부활 추가',skinEffectDesc:'선제: 2~5회 공격합니다.\n타격 1회당 <계승전> 카운터를 1 쌓습니다.\n<span style="color:#ffd700;font-weight:700">부활</span>을 추가로 가집니다.\n뒤끝: 자신을 쓰러뜨린 상대를 쓰러뜨립니다.'},
  wakamo:   {type:'선제 / 패시브',desc:'2~5회 공격합니다.\n타격 횟수만큼 <호버크래프트> 카운터를 쌓습니다.\n패시브: 카운터 4개가 쌓이면 0으로 되돌리며 <호버크래프트>를 소환합니다.\n(호버크래프트: 10/10, 뒤끝: 아군 필드에 와카모가 없다면 와카모를 불러옵니다.)',skinEffect:'수영복 와카모: 4~10회, 카운터 2배',skinEffectDesc:'선제: <span style="color:#ffd700;font-weight:700">4~10회</span> 공격합니다.\n타격 횟수<span style="color:#ffd700;font-weight:700">×2</span>만큼 <호버크래프트> 카운터를 쌓습니다.\n패시브: 카운터 4개가 쌓이면 0으로 되돌리며 <호버크래프트>를 소환합니다.\n(호버크래프트: 20/20, 뒤끝: 아군 필드에 와카모가 없다면 와카모를 불러옵니다.)'},
  hovercraft:{type:'뒤끝',desc:'아군 와카모가 모두 쓰러진 상태라면\n와카모를 소환합니다.\n(황금 호버크래프트: 와카모(수영복) 소환)',skinEffect:'스킨 호버크래프트: 20/20\n와카모(수영복) 소환'},
  // 백귀야행 7성
  hkyk_saikyo:   {type:'히든',desc:'순수한 힘. 50/50 바닐라 스탯.',skinEffect:'',quote:'???: 하여튼 뭔가 엄청나게 사악한 모습이었다……'},
  hkyk_kuzunoha: {type:'개전 / 선제',desc:'영입 시 샬레의 모든 학생을 삭제합니다.\n개전: 쿠즈노하와 상대 1번 학생을 제외한\n모든 학생을 효과 삭제 후 처치합니다.\n이 효과는 가장 먼저 발동합니다.\n선제: 공격 대상의 모든 효과를 삭제합니다.',skinEffect:'',quote:'쿠즈노하: 늦으나 빠르나… 지금의 자신이 아니게 될 것임은 분명할 게야.'},
  hkyk_showdown: {type:'액션카드',desc:'유카리, 렌게, 키쿄, 나구사에게\n+10/+10과 보호막, 연사, 부활을 부여합니다.\n(수영복 포함)',skinEffect:''},
  // 신규 7성
  gehenna_p68:            {type:'패시브 / 개전',desc:'샬레의 카요코, 무츠키, 하루카, 아루를 흡수하며 등장합니다.\n개전: 상대 배치 순서를 완전히 역순으로 변경합니다.\n도발을 무시하고, 가장 체력이 낮은 적을 공격 대상으로 정합니다.',skinEffect:'',quote:'아루: 우릴 고용하는 비용은 꽤 비싸다고? 선생님.'},
  millennium_seminar:     {type:'패시브 / 개전',desc:'샬레의 유우카, 노아, 코유키, 리오를 흡수하며 등장합니다.\n개전: 상대 전체 능력 삭제 후 공/체를 뒤집습니다.\n삭제된 기본능력 중 최대 3개, 특수능력 중 최대 3개를 자신에게 복사합니다.',skinEffect:'',quote:'리오: 우리는, 빛이 없는 곳에서 만날 거야.'},
  millennium_cc:          {type:'패시브 / 뒤끝',desc:'샬레의 네루, 아스나, 아카네, 카린, 토키를 흡수하며 등장합니다.\n패시브: 코인 토스가 항상 성공합니다.\n뒤끝: 아비 에슈흐(스케쥴×8)를 소환합니다.',skinEffect:'',quote:'네루: 야, 다들 모여. 일 할 시간이다.'},
  trinity_makeup:         {type:'패시브',desc:'샬레의 히후미, 코하루, 하나코, 아즈사를 흡수하며 등장합니다.\n전투 승리 시 보충수업부가 생존해 있으면 상대 HP를 0으로 만듭니다.',skinEffect:'',quote:'히후미: 그러니까, 지금부터 시작하겠습니다! 우리들의 이야기를!',quote2:'히후미: 학원과 청춘의 이야기를!!'},
  trinity_justice:        {type:'패시브 / 개전',desc:'샬레의 하스미, 츠루기, 마시로, 이치카를 흡수하며 등장합니다.\n패시브: 전투 중 처음으로 쓰러뜨린 적의 공/체를 두 배로 흡수합니다.\n개전: 자신의 공격력과 체력을 3배로 합니다.',skinEffect:'',quote:'츠루기: 자아, 사냥의 시간이다-!'},
  // ===== 신규 캐릭터 =====
  ibuki:    {type:'개전',desc:'아군 마코토, 치아키, 사츠키, 이로하에게\n+5/+5를 부여합니다.',skinEffect:'수영복 이부키: +10/+10',skinEffectDesc:'개전: 아군 마코토, 치아키, 사츠키, 이로하에게\n<span style="color:#ffd700;font-weight:700">+10/+10</span>을 부여합니다.'},
  chiaki:   {type:'저격',desc:'저격 공격. 반격을 받지 않습니다.',skinEffect:'수영복 치아키: 연사 추가',skinEffectDesc:'저격+연사: 저격 공격. 반격을 받지 않습니다.\n<span style="color:#ffd700;font-weight:700">연사</span>로 2회 공격합니다.'},
  koyuki:   {type:'선제',desc:'공격 대상의 공격력과 체력 수치를\n이번 전투 동안 뒤집습니다.',skinEffect:'파자마 코유키: 상대 무작위 능력 삭제 추가',skinEffectDesc:'선제: 공격 대상의 공격력과 체력 수치를 뒤집습니다.\n추가로 상대의 <span style="color:#ffd700;font-weight:700">무작위 능력 하나를 삭제</span>합니다.'},
  akane:    {type:'개전',desc:'아군 네루, 카린, 아스나, 아카네, 토키에게\n"뒤끝: C4(5/5 자폭) 소환"을 부여합니다.\n(중복되지 않습니다.)',skinEffect:'버니걸 아카네: 동일'},
  karin:    {type:'저격+관통',desc:'저격 공격 + 관통 공격.\n반격 없이 모든 적을 관통합니다.',skinEffect:'버니걸 카린: 연사 추가',skinEffectDesc:'저격+관통+<span style="color:#ffd700;font-weight:700">연사</span>: 저격 공격 + 관통 공격.\n반격 없이 모든 적을 관통합니다.\n연사로 2회 공격합니다.'},
  asuna:    {type:'패시브',desc:'우선권 코인토스에서, 아스나는 무조건 성공합니다.',skinEffect:'버니걸 아스나: 맨 왼쪽 아군도 성공 추가',skinEffectDesc:'패시브: 우선권 코인토스에서, 아스나는 무조건 성공합니다.\n추가로 <span style="color:#ffd700;font-weight:700">자신 제외 맨 왼쪽 아군</span>도 코인토스에 성공합니다.'},
  koharu:   {type:'선제',desc:'공격 시, 10% 확률로 대상의 능력을 제거하고\n즉사시킵니다.',skinEffect:'수영복 코하루: 확률 20%',skinEffectDesc:'선제: 공격 시, <span style="color:#ffd700;font-weight:700">20%</span> 확률로 대상의 능력을 제거하고\n즉사시킵니다.'},
  hasumi:   {type:'패시브',desc:'전투당 한 번, 처음으로 쓰러뜨린 적의\n공격력과 체력을 흡수합니다.',skinEffect:'수영복 하스미: 두 배로 흡수',skinEffectDesc:'패시브: 전투당 한 번, 처음으로 쓰러뜨린 적의\n공격력과 체력을 <span style="color:#ffd700;font-weight:700">두 배로</span> 흡수합니다.'},
  suzumi:   {type:'패시브',desc:'자신을 공격한 적의 공격력을\n한 바퀴 동안 0으로 만듭니다.',skinEffect:'마법소녀 스즈미: 이번 전투 동안',skinEffectDesc:'패시브: 자신을 공격한 적의 공격력을\n<span style="color:#ffd700;font-weight:700">이번 전투 동안</span> 0으로 만듭니다.'},
  mutsuki:  {type:'관통',desc:'관통 공격으로 적을 통과해 뒤의 적도 공격합니다.',skinEffect:'새해 무츠키: 동일'},
  haruka:   {type:'선제',desc:'한 번에 1~2회 공격을 합니다.\n이번 전투에서 무츠키, 카요코, 아루를 공격한\n적을 공격할 시 5회 공격합니다.',skinEffect:'새해 하루카: 2~5회 / 조건 시 10회',skinEffectDesc:'선제: 한 번에 <span style="color:#ffd700;font-weight:700">2~5회</span> 공격을 합니다.\n이번 전투에서 무츠키, 카요코, 아루를 공격한\n적을 공격할 시 <span style="color:#ffd700;font-weight:700">10회</span> 공격합니다.'},
  // 총학생회
  haine:    {type:'패시브',desc:'팔면 아군 전체 +2/+2',skinEffect:'인터뷰 하이네: +4/+4',skinEffectDesc:'패시브: 팔면 아군 전체에 <span style="color:#ffd700;font-weight:700">+4/+4</span>를 부여합니다.'},
  momoka:   {type:'패시브',desc:'매 턴 추가 리롤이 1회 무료입니다.',skinEffect:'승무원 모모카: 2회 무료',skinEffectDesc:'패시브: 매 턴 추가 리롤이 <span style="color:#ffd700;font-weight:700">2회</span> 무료입니다.'},
  ayumu:    {type:'패시브',desc:'액션카드의 수치 증가에 +2/+2가 추가됩니다.',skinEffect:'승무원 아유무: +4/+4 추가',skinEffectDesc:'패시브: 액션카드의 수치 증가에 <span style="color:#ffd700;font-weight:700">+4/+4</span> 추가됩니다.'},
  aoi:      {type:'패시브',desc:'매 턴 (청휘석)+2를 추가로 얻습니다.',skinEffect:'인터뷰 아오이: +4 추가',skinEffectDesc:'패시브: 매 턴 (청휘석아이콘)<span style="color:#ffd700;font-weight:700">+4</span>를 추가로 얻습니다.'},
  kaya:     {type:'개전',desc:'아군 맨 왼쪽 학생을 쓰러뜨리고\n공격력과 체력을 흡수합니다. (가장 마지막에 발동)',skinEffect:'쿠데타 카야: 두 배로 흡수',skinEffectDesc:'개전: 아군 맨 왼쪽 학생을 쓰러뜨리고\n공격력과 체력을 <span style="color:#ffd700;font-weight:700">두 배로</span> 흡수합니다.\n(가장 마지막에 발동)'},
  lin:      {type:'패시브',desc:'아군의 뒤끝과 첫인사가\n한 번 더 발동합니다.',skinEffect:'승무원 린: 두 번 더 발동',skinEffectDesc:'패시브: 아군의 뒤끝과 첫인사가\n<span style="color:#ffd700;font-weight:700">두 번</span> 더 발동합니다.'},
  // ===== 스킨 동일 (변화 없음) =====
  reisa:    {type:'',desc:'',skinEffect:'마법소녀 레이사: 최대 체력으로 부활',skinEffectDesc:'패시브: 최대 체력으로 부활합니다.'},
  pina:     {type:'',desc:'',skinEffect:'가이드 피나: 개전 +2/+2',skinEffectDesc:'개전: 자신에게 <span style="color:#ffd700;font-weight:700">+2/+2</span>를 부여합니다.'},
  hanako:   {type:'',desc:'',skinEffect:'수영복 하나코: 개전 체력+5',skinEffectDesc:'개전: 자신에게 <span style="color:#ffd700;font-weight:700">+0/+5</span>를 부여합니다.'},
  ichika:   {type:'',desc:'',skinEffect:'수영복 이치카: 동일'},
  iori:     {type:'',desc:'',skinEffect:'수영복 이오리: 개전 공격력+5',skinEffectDesc:'개전: 자신에게 <span style="color:#ffd700;font-weight:700">+5/+0</span>를 부여합니다.'},
  // ===== 스킨 전용 효과 (기본 능력 없이 스킨만 추가) =====
  shimiko:  {type:'',desc:'',skinEffect:'악의 간부 시미코: 보호막, 광역'},
  yuuka:    {type:'',desc:'',skinEffect:'체육복 유우카: 개전 자신에게 +2/+2'},
  arisu:    {type:'',desc:'',skinEffect:'메이드 아리스: 관통 → 광역으로 변경'},
  hina:     {type:'',desc:'',skinEffect:'드레스 히나: 보호막, 연사 추가',skinEffectDesc:'광역+<span style="color:#ffd700;font-weight:700">보호막+연사</span>: 광역에 보호막과 연사가 추가됩니다.'},
};

// ========== TOKENS ==========
var TOKENS = {
  panchan:   {id:'panchan',   name:'팬짱',       school:'게헨나',   tier:0, atk:1, hp:1, kw:[],          img:'token/panchan.png'},
  toramaru:  {id:'toramaru',  name:'토라마루',   school:'게헨나',   tier:0, atk:5, hp:1, kw:[],          img:'token/toramaru.png'},
  cathpalug: {id:'cathpalug', name:'카스팔루스', school:'트리니티', tier:0, atk:1, hp:1, kw:['poison'],  img:'token/CathPalug.png'},
  perorosama:{id:'perorosama',name:'페로로님',   school:'트리니티', tier:0, atk:2, hp:1, kw:[],          img:'token/perorosama.png'},
  abi_eshuh: {id:'abi_eshuh', name:'아비 에슈흐',school:'밀레니엄', tier:0, atk:2, hp:2, kw:[],          img:'token/Abi_Eshuh.png'},
  dango:     {id:'dango',     name:'당고',       school:'게헨나',   tier:0, atk:1, hp:1, kw:[],          img:'token/Dango.png'},
  airship:   {id:'airship',   name:'비행선',     school:'게헨나',   tier:0, atk:1, hp:1, kw:['selfdestruct'], img:'token/Airship.png'},
  makoto_perma:{id:'makoto_perma',name:'파마머리 마코토',school:'게헨나',tier:0,atk:6,hp:6,kw:[],       img:'token/Makoto_(perma).png'},
  avant_garde:{id:'avant_garde',name:'아방가르드군',school:'밀레니엄',tier:0, atk:1, hp:1, kw:[],        img:'token/Avant_garde.png'},
  thunder_e: {id:'thunder_e', name:'천둥이',     school:'밀레니엄', tier:0, atk:8, hp:2, kw:['shield'],  img:'token/Thunder_E.png'},
  sweeper:   {id:'sweeper',  name:'스위퍼',     school:'밀레니엄', tier:0, atk:10,hp:10,kw:['shield','selfdestruct'], img:'token/Sweeper.png'},
  hina_the_last:{id:'hina_the_last',name:'마지막 히나',school:'게헨나',tier:0,atk:10,hp:10,kw:['cleave','poison'],img:'token/Hina_the_last.png'},
  hovercraft:{id:'hovercraft',name:'호버크래프트',school:'백귀야행',tier:0, atk:10,hp:10,kw:[],          img:'token/HoverCraft.png'},
  c4:        {id:'c4',        name:'C4',          school:'밀레니엄', tier:0, atk:5, hp:5, kw:['selfdestruct'], img:'token/C4.png'},
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
var SPELLS = [
  {id:'encourage',name:'격려하기',cost:1,tier:1,desc:'스케쥴 학생 전체 공/체 +1',target:'auto',img:'img/spell/encourage.png',
    effect:function(G){var ab=getAyumuBonus();for(var i=0;i<G.shop.length;i++){if(G.shop[i]&&!G.shop[i].isSpell){G.shop[i].atk+=1+ab;G.shop[i].hp+=1+ab;}}}},
  {id:'gacha',name:'가챠 티켓 +1',cost:2,tier:1,desc:'스케쥴 학생 1장 랜덤 획득',target:'auto',img:'img/spell/gacha.png',
    effect:function(G){var p=G.players[0];var avail=[];for(var i=0;i<G.shop.length;i++){if(G.shop[i]&&!G.shop[i].isSpell)avail.push(i);}if(avail.length===0)return false;var pick=avail[Math.floor(Math.random()*avail.length)];var m=G.shop[pick];G.shop[pick]=null;
      // 트리플 체크 (보드+벤치)
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
  {id:'gold_bullet',name:'골드탄',cost:1,tier:1,desc:'선택 학생 공격력 +4',target:'select_ally',img:'img/spell/gold_bullet.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;var ab=getAyumuBonus();p.board[idx].atk+=4+ab;if(ab>0){p.board[idx].hp+=ab;p.board[idx].maxHp=(p.board[idx].maxHp||p.board[idx].hp)+ab;}logBuff(p.board[idx],'골드탄',4+ab,ab);return true;}},
  {id:'savings',name:'비상금',cost:1,tier:2,desc:'다음 리롤/턴 시 골드 +2',target:'auto',img:'img/spell/savings.png',
    effect:function(G){G.bonusStone=(G.bonusStone||0)+2;}},
  {id:'visit_plan',name:'방문 예정',cost:2,tier:2,desc:'다음 스케쥴 학생 공/체 +2',target:'auto',img:'img/spell/visit_plan.png',
    effect:function(G){var ab=getAyumuBonus();G.shopBuff=(G.shopBuff||0)+2+ab;}},
  {id:'visit_buff',name:'방문 예정',cost:3,tier:2,desc:'선택 학생 +4/+4',target:'select_ally',img:'img/spell/visit_buff.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;var ab=getAyumuBonus();p.board[idx].atk+=4+ab;p.board[idx].hp+=4+ab;p.board[idx].maxHp=(p.board[idx].maxHp||p.board[idx].hp)+4+ab;logBuff(p.board[idx],'방문 예정',4+ab,4+ab);return true;}},
  {id:'aggro',name:'어그로꾼',cost:2,tier:3,desc:'선택 학생에게 도발 부여',target:'select_ally',img:'img/spell/aggro.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;addKw(p.board[idx],'taunt');return true;}},
  {id:'promotion',name:'스케쥴 진급',cost:4,tier:3,desc:'업그레이드 비용 -5',target:'auto',img:'img/spell/promotion.png',
    effect:function(G){var p=G.players[0];p.upgradeCost=Math.max(0,p.upgradeCost-5);}},
  {id:'unity_mt',name:'단합 MT',cost:4,tier:3,desc:'선택 학교 학생들 +4/+4',target:'select_school',img:'img/spell/unity_mt.png',
    effect:function(G,school){var p=G.players[0];var ab=getAyumuBonus();var found=false;for(var i=0;i<p.board.length;i++){if(p.board[i].school===school){p.board[i].atk+=4+ab;p.board[i].hp+=4+ab;p.board[i].maxHp=(p.board[i].maxHp||p.board[i].hp)+4+ab;logBuff(p.board[i],'단합 MT',4+ab,4+ab);found=true;}}return found;}},
  {id:'mirror',name:'거울의 세계',cost:6,tier:6,desc:'선택 학생 복제 (게임당 1회)',target:'select_ally',once:true,img:'img/spell/mirror.png',
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
        // 풀보드지만 복제 후 트리플이 되는 경우 (기존 2장 + 복제본 = 3장)
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
  {id:'clover',name:'행운의 클로버',cost:4,tier:4,desc:'선택 학생에게 보호막 부여',target:'select_ally',img:'img/spell/clover.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;addKw(p.board[idx],'shield');return true;}},
  {id:'venom',name:'독사 무브',cost:3,tier:5,desc:'선택 학생에게 독사굴 부여',target:'select_ally',img:'img/spell/venom.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;addKw(p.board[idx],'poison');return true;}},
  {id:'dressing',name:'탈의실',cost:7,tier:6,desc:'선택 학생을 황금으로 변경 (게임당 1회)',target:'select_ally',once:true,img:'img/spell/dressing.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;var m=p.board[idx];if(m.isSkin)return false;var tmpl=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id===m.baseId)tmpl=CHARS[j];if(!tmpl)return false;m.name=tmpl.skin;m.atk=tmpl.atk*2+1;m.hp=tmpl.hp*2+1;m.maxHp=m.hp;m.isSkin=true;m.img=tmpl.imgGold;applySkinKwTransform(tmpl,m);return true;}},
  {id:'school_visit',name:'학교 방문',cost:2,tier:5,desc:'선택 학교 학생만 리롤',target:'select_school',img:'img/spell/school_visit.png',
    effect:function(G,school){var p=G.players[0];var pool=getAvailableChars(p.tier).filter(function(c){return c.school===school;});if(pool.length===0)return false;var size=SHOP_SIZE[p.tier];var shop=[];for(var i=0;i<size;i++){var tmpl=pool[Math.floor(Math.random()*pool.length)];shop.push(makeMinion(tmpl,false));}applyShopBuff(shop);G.shop=shop;addSpellToShop();return true;}},
  {id:'sensei',name:'선생님의 지휘',cost:7,tier:5,desc:'아군 전체 +5/+5 (2회 발동)',target:'auto',img:'img/spell/sensei.png',
    effect:function(G){var p=G.players[0];var ab=getAyumuBonus();for(var r=0;r<2;r++){for(var i=0;i<p.board.length;i++){p.board[i].atk+=5+ab;p.board[i].hp+=5+ab;p.board[i].maxHp=(p.board[i].maxHp||p.board[i].hp)+5+ab;logBuff(p.board[i],'선생님의 지휘',5+ab,5+ab);}}}},
  // ===== 신규 액션카드 =====
  {id:'higher_body',name:'상체 중심',cost:1,tier:1,desc:'선택 학생 +3/+1',target:'select_ally',img:'img/spell/higher_body.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;var ab=getAyumuBonus();p.board[idx].atk+=3+ab;p.board[idx].hp+=1+ab;p.board[idx].maxHp=(p.board[idx].maxHp||p.board[idx].hp)+1+ab;logBuff(p.board[idx],'상체 중심',3+ab,1+ab);return true;}},
  {id:'lower_body',name:'하체 중심',cost:1,tier:1,desc:'선택 학생 +1/+3',target:'select_ally',img:'img/spell/lower_body.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;var ab=getAyumuBonus();p.board[idx].atk+=1+ab;p.board[idx].hp+=3+ab;p.board[idx].maxHp=(p.board[idx].maxHp||p.board[idx].hp)+3+ab;logBuff(p.board[idx],'하체 중심',1+ab,3+ab);return true;}},
  {id:'surveillance',name:'감시망',cost:1,tier:2,desc:'다음 2회 리롤 무료',target:'auto',img:'img/spell/surveillance.png',
    effect:function(G){G.freeRerolls=(G.freeRerolls||0)+2;}},
  {id:'two_hands',name:'쌍수',cost:2,tier:2,desc:'선택 학생에게 연사 부여',target:'select_ally',img:'img/spell/Two_hands.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;addKw(p.board[idx],'windfury');return true;}},
  {id:'arona_cheat',name:'도전, 33%!',cost:2,tier:3,desc:'33% 확률로 현재 티어 학생 발견!\n(67% 확률로 실패)',target:'auto',img:'img/spell/Arona_cheat.png',
    effect:function(G){if(Math.random()<0.33){var p=G.players[0];var cands=[];for(var i=0;i<CHARS.length;i++){if(CHARS[i].tier===p.tier&&G.pool[CHARS[i].id]>0)cands.push(CHARS[i]);}if(cands.length===0)return true;cands.sort(function(){return Math.random()-0.5;});showDiscoverCustom(cands.slice(0,3));return true;}return true;}},
  {id:'revive_standby',name:'부활 대기중',cost:2,tier:3,desc:'선택 학생에게 부활 부여',target:'select_ally',img:'img/spell/Momoi_revive.jpg',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;addKw(p.board[idx],'reborn');return true;}},
  {id:'on_duty',name:'누가 가장 자주 왔어?',cost:4,tier:4,desc:'최다 학교 학생을 발견!',target:'auto',img:'img/spell/on_duty.png',
    effect:function(G){var p=G.players[0];var sc={};for(var i=0;i<p.board.length;i++){var s=p.board[i].school;sc[s]=(sc[s]||0)+1;}var best=null,bc=0;for(var s in sc){if(sc[s]>bc){bc=sc[s];best=s;}}if(!best)return false;var cands=[];for(var i=0;i<CHARS.length;i++){if(CHARS[i].school===best&&CHARS[i].tier<=p.tier&&G.pool[CHARS[i].id]>0)cands.push(CHARS[i]);}if(cands.length===0)return false;cands.sort(function(){return Math.random()-0.5;});showDiscoverCustom(cands.slice(0,3));return true;}},
  {id:'get_set_go',name:'겟, 셋, 고!',cost:4,tier:4,desc:'학교당 무작위 1명에게 +8/+8',target:'auto',img:'img/spell/get_set_go.jpg',
    effect:function(G){var p=G.players[0];var ab=getAyumuBonus();var schools={};for(var i=0;i<p.board.length;i++){var s=p.board[i].school;if(!schools[s])schools[s]=[];schools[s].push(i);}for(var s in schools){var arr=schools[s];var pick=arr[Math.floor(Math.random()*arr.length)];p.board[pick].atk+=8+ab;p.board[pick].hp+=8+ab;p.board[pick].maxHp=(p.board[pick].maxHp||p.board[pick].hp)+8+ab;logBuff(p.board[pick],'겟, 셋, 고!',8+ab,8+ab);}return true;}},
  {id:'twins',name:'우린 서로 닮았어요',cost:4,tier:5,desc:'2장 있는 학생을 스킨으로 합체',target:'auto',img:'img/spell/Twins.png',
    effect:function(G){var p=G.players[0];var counts={};for(var i=0;i<p.board.length;i++){if(!p.board[i].isSkin){var bid=p.board[i].baseId;counts[bid]=(counts[bid]||0)+1;}}var target=null;for(var bid in counts){if(counts[bid]>=2){target=bid;break;}}if(!target)return false;var tmpl=null;for(var i=0;i<CHARS.length;i++)if(CHARS[i].id===target){tmpl=CHARS[i];break;}if(!tmpl)return false;var mKw=[],bAtk=0,bHp=0,newBoard=[],removed=0;for(var i=0;i<p.board.length;i++){if(p.board[i].baseId===target&&!p.board[i].isSkin&&removed<2){var u=p.board[i];for(var k=0;k<(u.kw||[]).length;k++){if(mKw.indexOf(u.kw[k])===-1)mKw.push(u.kw[k]);}bAtk+=u.atk-tmpl.atk;bHp+=u.hp-tmpl.hp;removed++;}else{newBoard.push(p.board[i]);}}p.board=newBoard;var gld=makeMinion(tmpl,true);gld.kw=mKw;gld.atk+=bAtk;gld.hp+=bHp;gld.maxHp=gld.hp;applySkinKwTransform(tmpl,gld);p.board.push(gld);triggerBattlecry(gld,p);showDiscover(p);return true;}},
  {id:'on_your_mark',name:'온 유어 마크',cost:3,tier:5,desc:'학교당 1명에게 무작위 기본 능력 부여\n(중복 없음)',target:'auto',img:'img/spell/On_your_mark.png',
    effect:function(G){var p=G.players[0];var basicPool=['taunt','shield','poison','reborn','cleave','pierce','ranged','windfury','selfdestruct','preemptive'];var schools={};for(var i=0;i<p.board.length;i++){var s=p.board[i].school;if(!schools[s])schools[s]=[];schools[s].push(i);}var usedKw={};for(var s in schools){var arr=schools[s];var pick=arr[Math.floor(Math.random()*arr.length)];var u=p.board[pick];var avail=basicPool.filter(function(k){return !hasKw(u,k)&&!usedKw[k];});if(avail.length===0)continue;var kw=avail[Math.floor(Math.random()*avail.length)];addKw(u,kw);usedKw[kw]=true;}return true;}},
  {id:'bunny_toss',name:'바니 토스',cost:3,tier:6,desc:'다음 전투 코인토스 성공률 +30%',target:'auto',img:'img/spell/bunny_toss.png',
    effect:function(G){G.bunnyTossBonus=(G.bunnyTossBonus||0)+0.30;}},
];

function getAvailableSpells(tier) {
  var p=G.players[0];
  return SPELLS.filter(function(s){
    if(s.tier>tier)return false;
    if(s.id==='promotion'&&p.tier>=6)return false;
    // 우린 서로 닮았어요: 2장 있는 유닛이 있어야 표시
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
    G.shopBuff=0;
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
  for(var i=0;i<CHARS.length;i++){
    var copies=POOL_COPIES[CHARS[i].tier]||10;
    if(CHARS[i].school==='총학생회') copies=Math.round(copies*0.7);
    pool[CHARS[i].id]=copies;
  }
  for(var i=0;i<HIDDEN_CHARS.length;i++){
    pool[HIDDEN_CHARS[i].id]=1;
  }
  return pool;
}
function takeFromPool(charId) { if(SANDBOX)return true; if(G.pool[charId]>0){G.pool[charId]--;return true;} return false; }
function returnToPool(charId,count) {
  if(!count)count=1;
  var max=0;
  for(var i=0;i<CHARS.length;i++){if(CHARS[i].id===charId){max=POOL_COPIES[CHARS[i].tier];if(CHARS[i].school==='총학생회')max=Math.round(max*0.7);break;}}
  G.pool[charId]=Math.min((G.pool[charId]||0)+count,max);
}

// ========== GAME STATE ==========
var G = {};
var swapFirst = -1;

function newGame() {
  var players=[];
  var aiCount=SANDBOX?5:7;
  var aiNames=['미카','사오리','와카모','코코나','미네','히요리','코타마'];
  var startStone=SANDBOX?20:3;
  players.push({id:0,name:'선생님',hp:START_HP,tier:1,stone:startStone,board:[],bench:null,frozen:false,dead:false,isPlayer:true,upgradeCost:SANDBOX?0:UPGRADE_COSTS[1],turnStone:startStone});
  var aiStone=SANDBOX?20:3;var aiUpCost=SANDBOX?0:UPGRADE_COSTS[1];
  for(var i=0;i<aiCount;i++){
    var pType=i<4?AI_PERSONALITY_KEYS[i]:AI_PERSONALITY_KEYS[Math.floor(Math.random()*4)];
    players.push({id:i+1,name:aiNames[i%aiNames.length],hp:START_HP,tier:1,stone:aiStone,board:[],frozen:false,dead:false,isPlayer:false,upgradeCost:aiUpCost,turnStone:aiStone,purchasedSchools:{},totalDamageTaken:0,personality:AI_PERSONALITIES[pType],personalityType:pType});
  }
  G={players:players,turn:1,phase:'recruit',shop:[],aliveCount:SANDBOX?6:8,placement:0,frozen:false,bonusStone:0,shopBuff:0,pendingSpell:null,pool:initPool(),rioSchool:null,freeRerolls:0,
    purchasedSchools:{},totalDamageTaken:0,arisuDeathCount:0,millenniumTokenSummons:0,hiddenCardsOwned:{},hiddenCardsEverOwned:{},permanentAbilityBan:false,shopExclusions:[],keiseisenCounters:{},hovercraftCounter:0,soldHkyk:{}};
  rollShop();
  aiTurns();
  renderAll();
  // 백그라운드 자가대전 시뮬 (20판) — UI 비블로킹
  if(!SANDBOX) setTimeout(function(){ runSimBatch(20); }, 500);
}

// 스킨(황금) 키워드 변환: 각 캐릭터 스킨 효과 (원본 능력은 유지됨)
function applySkinKwTransform(tmpl, unit){
  if(tmpl.id==='shimiko'){if(unit.kw.indexOf('cleave')===-1)unit.kw.push('cleave');if(unit.kw.indexOf('shield')===-1)unit.kw.push('shield');}
  // 아리스 메이드: 관통→광역 (변경)
  if(tmpl.id==='arisu'){var pi=unit.kw.indexOf('pierce');if(pi!==-1)unit.kw.splice(pi,1);if(unit.kw.indexOf('cleave')===-1)unit.kw.push('cleave');}
  // 히나 드레스: 광역 유지 + 보호막+연사 추가
  if(tmpl.id==='hina'){if(unit.kw.indexOf('shield')===-1)unit.kw.push('shield');if(unit.kw.indexOf('windfury')===-1)unit.kw.push('windfury');}
  // 마시로 수영복: 관통 추가
  if(tmpl.id==='mashiro'){if(unit.kw.indexOf('pierce')===-1)unit.kw.push('pierce');}
  // 치아키 수영복: 연사 추가
  if(tmpl.id==='chiaki'){if(unit.kw.indexOf('windfury')===-1)unit.kw.push('windfury');}
  // 카즈사 밴드: 부활 추가
  if(tmpl.id==='kazusa'){if(unit.kw.indexOf('reborn')===-1)unit.kw.push('reborn');}
  // 카린 버니걸: 연사 추가
  if(tmpl.id==='karin'){if(unit.kw.indexOf('windfury')===-1)unit.kw.push('windfury');}
  // 키쿄 수영복: 보호막 추가
  if(tmpl.id==='kikyou'){if(unit.kw.indexOf('shield')===-1)unit.kw.push('shield');}
  // 렌게 수영복: 부활 추가
  if(tmpl.id==='renge'){if(unit.kw.indexOf('reborn')===-1)unit.kw.push('reborn');}
  // 유카리 수영복: 보호막 추가
  if(tmpl.id==='yukari'){if(unit.kw.indexOf('shield')===-1)unit.kw.push('shield');}
  // 나구사 수영복: 부활 추가
  if(tmpl.id==='nagusa'){if(unit.kw.indexOf('reborn')===-1)unit.kw.push('reborn');}
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

  // 게헨나 선도부: 히나+이오리+아코+치나츠 보드
  if(notOwned('gehenna_prefect')&&inPool('gehenna_prefect')&&p.tier>=6&&boardHas('hina')&&boardHas('iori')&&boardHas('ako')&&boardHas('chinatsu'))
    eligible.push('gehenna_prefect');
  // 만마전: 마코토+사츠키+이로하+이부키+치아키 보드
  if(notOwned('gehenna_pandemonium')&&inPool('gehenna_pandemonium')&&p.tier>=6&&boardHas('makoto')&&boardHas('satsuki')&&boardHas('iroha')&&boardHas('ibuki')&&boardHas('chiaki'))
    eligible.push('gehenna_pandemonium');
  // 열차포: 게헨나 온리 + 스케쥴6
  if(notOwned('gehenna_traingun')&&inPool('gehenna_traingun')&&onlySchool('게헨나')&&p.tier>=6)
    eligible.push('gehenna_traingun');
  // 미카: 트리니티 온리 + 스케쥴6
  if(notOwned('trinity_mika')&&inPool('trinity_mika')&&onlySchool('트리니티')&&p.tier>=6)
    eligible.push('trinity_mika');
  // 나기사: 마리+사쿠라코+미네 보드
  if(notOwned('trinity_nagisa')&&inPool('trinity_nagisa')&&p.tier>=6&&boardHas('mari')&&boardHas('sakurako')&&boardHas('mine'))
    eligible.push('trinity_nagisa');
  // 세이아: 피해0 + 스케쥴6 + 트리니티 온리 보드
  if(notOwned('trinity_seia')&&inPool('trinity_seia')&&pDmg===0&&p.tier>=6&&boardOnlySchool('트리니티'))
    eligible.push('trinity_seia');
  // 왕녀: 아리스 사망 10회+
  if(notOwned('millennium_nameless')&&inPool('millennium_nameless')&&p.tier>=6&&G.arisuDeathCount>=10)
    eligible.push('millennium_nameless');
  // 말쿠트: 밀레니엄 토큰 소환 20회+
  if(notOwned('millennium_malkuth')&&inPool('millennium_malkuth')&&p.tier>=6&&G.millenniumTokenSummons>=10)
    eligible.push('millennium_malkuth');
  // 데스 모모이: 모모이+미도리+유즈+아리스 보드
  if(notOwned('millennium_death_momoi')&&inPool('millennium_death_momoi')&&p.tier>=6&&boardHas('momoi')&&boardHas('midori')&&boardHas('yuzu')&&boardHas('arisu'))
    eligible.push('millennium_death_momoi');
  // 최강일각라이온: 백귀야행 온리 보드 + 스케쥴6 (5% 확률은 injectHiddenToShop에서 처리)
  if(notOwned('hkyk_saikyo')&&inPool('hkyk_saikyo')&&boardOnlySchool('백귀야행')&&p.tier>=6)
    eligible.push('hkyk_saikyo');
  // 쿠즈노하: 백귀야행 온리 구매 + 스케쥴6
  // 쿠즈노하: 모든 백귀야행 학생을 1회 이상 판매 + T6 + 60%
  if(notOwned('hkyk_kuzunoha')&&inPool('hkyk_kuzunoha')&&p.tier>=6){
    var allHkykSold=true;
    for(var _hi=0;_hi<HKYK_ALL_IDS.length;_hi++){if(!G.soldHkyk[HKYK_ALL_IDS[_hi]]){allHkykSold=false;break;}}
    if(allHkykSold) eligible.push('hkyk_kuzunoha');
  }
  // 흥신소 68: 카요코+무츠키+하루카+아루 보드
  if(notOwned('gehenna_p68')&&inPool('gehenna_p68')&&p.tier>=6&&boardHas('kayoko')&&boardHas('mutsuki')&&boardHas('haruka')&&boardHas('aru'))
    eligible.push('gehenna_p68');
  // 밀레니엄 세미나: 유우카+노아+코유키+리오 보드
  if(notOwned('millennium_seminar')&&inPool('millennium_seminar')&&p.tier>=6&&boardHas('yuuka')&&boardHas('noa')&&boardHas('koyuki')&&boardHas('rio'))
    eligible.push('millennium_seminar');
  // C&C: 네루+아스나+아카네+카린+토키 보드
  if(notOwned('millennium_cc')&&inPool('millennium_cc')&&p.tier>=6&&boardHas('neru')&&boardHas('asuna')&&boardHas('akane')&&boardHas('karin')&&boardHas('toki'))
    eligible.push('millennium_cc');
  // 보충수업부: 히후미+코하루+하나코+아즈사 보드
  if(notOwned('trinity_makeup')&&inPool('trinity_makeup')&&p.tier>=6&&boardHas('hifumi')&&boardHas('koharu')&&boardHas('hanako')&&boardHas('azusa'))
    eligible.push('trinity_makeup');
  // 정의실현부: 하스미+츠루기+마시로+이치카 보드
  if(notOwned('trinity_justice')&&inPool('trinity_justice')&&p.tier>=6&&boardHas('hasumi')&&boardHas('tsurugi')&&boardHas('mashiro')&&boardHas('ichika'))
    eligible.push('trinity_justice');

  return eligible;
}

// 백화요란 계승전: 히든 액션카드
var HKYK_SHOWDOWN_SPELL = {
  id:'hkyk_showdown',name:'백화요란 계승전',cost:3,tier:7,desc:'유카리/렌게/키쿄/나구사에게\n+10/+10, 보호막, 연사, 부활',target:'auto',once:true,
  effect:function(G2){
    var p=G2.players[0];
    var targets=['yukari','renge','kikyou','nagusa'];
    for(var i=0;i<p.board.length;i++){
      if(targets.indexOf(p.board[i].baseId)!==-1){
        p.board[i].atk+=10;p.board[i].hp+=10;p.board[i].maxHp=(p.board[i].maxHp||p.board[i].hp)+10;
        addKw(p.board[i],'shield');addKw(p.board[i],'windfury');addKw(p.board[i],'reborn');
      }
    }
    G2.hiddenCardsEverOwned['hkyk_showdown']=true;
    return true;
  }
};

function checkShowdownCondition(){
  if(G.hiddenCardsEverOwned['hkyk_showdown']) return false;
  var p=G.players[0];
  var targets=['yukari','renge','kikyou','nagusa'];
  if(!G.keiseisenCounters) return false;
  for(var t=0;t<targets.length;t++){
    // 해당 학생이 보드에 있고, 해당 baseId의 계승전 카운터가 10 이상
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
  for(var h=0;h<eligible.length;h++){
    var hid=eligible[h];
    var rate=0.30;
    if(hid==='hkyk_saikyo') rate=0.05;
    else if(hid==='gehenna_traingun'||hid==='trinity_mika') rate=0.10;
    else if(hid==='hkyk_kuzunoha') rate=0.60;
    if(Math.random()<rate){
      var htmpl=findHiddenChar(hid);
      if(htmpl&&G.pool[htmpl.id]>0){
        var unit=makeHiddenMinion(htmpl);
        G.shop.push(unit);
      }
    }
  }
  // 백화요란 계승전 액션카드
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
  var pool=[];
  for(var i=0;i<CHARS.length;i++){
    if(CHARS[i].tier<=tier){
      if(G.shopExclusions&&G.shopExclusions.indexOf(CHARS[i].id)!==-1) continue;
      pool.push(CHARS[i]);
    }
  }
  return pool;
}

function rollShop(force) {
  if(G.frozen && !force){
    // 얼린 상점: 빈 칸(null)만 새 카드로 채움
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
  // 풀보드: 상점에 트리플 가능한 유닛이 있는지 확인
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
  if(spell.target==='select_ally'){
    if(p.board.length===0)return;
    if(spell.id==='mirror'&&p.board.length>=MAX_BOARD){
      var canTriple=false;var bCounts={};for(var _mi=0;_mi<p.board.length;_mi++){var _bid=p.board[_mi].baseId;if(!p.board[_mi].isSkin){bCounts[_bid]=(bCounts[_bid]||0)+1;if(bCounts[_bid]>=2)canTriple=true;}}
      if(!canTriple)return;}
    p.stone-=item.cost;G.shop[idx]=null;
    if(spell.once){if(!G.usedOnceSpells)G.usedOnceSpells={};G.usedOnceSpells[spell.id]=true;}
    G.pendingSpell=spell;renderAll();return;
  }
  if(spell.target==='select_school'){p.stone-=item.cost;G.shop[idx]=null;G.pendingSpell=spell;showSchoolSelect();return;}
  p.stone-=item.cost;G.shop[idx]=null;
  if(spell.once){if(!G.usedOnceSpells)G.usedOnceSpells={};G.usedOnceSpells[spell.id]=true;}
  var result=spell.effect(G);
  if(result===false){p.stone+=item.cost;if(spell.once)delete G.usedOnceSpells[spell.id];}
  renderAll();
}

function applyPendingSpell(idx) {
  if(!G.pendingSpell)return;
  var result=G.pendingSpell.effect(G,idx);
  G.pendingSpell=null;
  renderAll();
}

function showSchoolSelect() {
  var overlay=document.getElementById('battle-overlay');
  var schools=['게헨나','밀레니엄','트리니티','백귀야행','총학생회'];
  var html='<div class="battle-intro"><h3 style="margin-bottom:16px">학교를 선택하세요</h3>';
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
  // 보드 풀 체크
  if(p.board.length>=MAX_BOARD){
    // 흡수형은 보드 카드를 제거하므로 OK
    var absorb=['gehenna_prefect','gehenna_pandemonium','millennium_death_momoi','gehenna_p68','millennium_seminar','millennium_cc','trinity_makeup','trinity_justice','hkyk_kuzunoha'];
    if(absorb.indexOf(bid)===-1) return;
  }
  p.stone-=3;
  G.shop[idx]=null;
  takeFromPool(bid);
  G.hiddenCardsOwned[bid]=true;
  G.hiddenCardsEverOwned[bid]=true;
  if(m.school) G.purchasedSchools[m.school]=true;

  // 흡수형: 지정 유닛 제거 + 스탯 합산
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
    // 모든 모모이 제거
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
    for(var i=0;i<p.board.length;i++){
      if(absorb.indexOf(p.board[i].baseId)!==-1){bonusAtk+=p.board[i].atk;bonusHp+=p.board[i].hp;returnToPool(p.board[i].baseId,p.board[i].isSkin?3:1);}else{newBoard.push(p.board[i]);}
    }
    p.board=newBoard;m.atk+=bonusAtk;m.hp+=bonusHp;m.maxHp=m.hp;
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

  // 쿠즈노하: 샬레의 모든 학생을 삭제하고 등장
  else if(bid==='hkyk_kuzunoha'){
    for(var i=0;i<p.board.length;i++){returnToPool(p.board[i].baseId,p.board[i].isSkin?3:1);}
    p.board=[];
  }

  // 왕녀: 아리스 상점 제외
  if(bid==='millennium_nameless'){
    if(G.shopExclusions.indexOf('arisu')===-1) G.shopExclusions.push('arisu');
  }

  p.board.push(m);
  // BC 트리거 (만마전)
  if(BC_IDS[bid]) triggerBattlecry(m,p);
  renderAll();
}

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
  G.shop[idx]=null;
  if(m.school) G.purchasedSchools[m.school]=true;
  var addedUnit;
  if(willTriple){
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
    // 벤치에서 합성 소스 제거
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
  if(willTriple) { showDiscover(p); } else { renderAll(); }
}

// ========== DISCOVER (발견) ==========
function getDiscoverChoices(p) {
  // 튜토리얼: 고정 선택지
  if(G.isTutorial && TUT.active){
    var tutIds=['kasumi','ichika','renge'];
    var res=[];
    for(var t=0;t<tutIds.length;t++){var c=findAnyChar(tutIds[t]);if(c)res.push(c);}
    return res;
  }
  var discoverTier = Math.min(p.tier + 1, 6);
  var candidates = [];
  for(var i=0;i<CHARS.length;i++){
    if(CHARS[i].tier === discoverTier && G.pool[CHARS[i].id] > 0) candidates.push(CHARS[i]);
  }
  // 풀에 없으면 현재 등급에서
  if(candidates.length === 0){
    for(var i=0;i<CHARS.length;i++){
      if(CHARS[i].tier === p.tier && G.pool[CHARS[i].id] > 0) candidates.push(CHARS[i]);
    }
  }
  // 셔플 후 최대 3장
  candidates.sort(function(){return Math.random()-0.5;});
  return candidates.slice(0, 3);
}

function showDiscover(p) {
  var choices = getDiscoverChoices(p);
  if(choices.length === 0) { renderAll(); return; }

  // 튜토리얼 중이면 오버레이 숨기고 battle-overlay를 최상위로
  if(TUT.active){
    document.getElementById('tutorial-overlay').classList.remove('active');
    document.getElementById('tutorial-bubble').style.display='none';
    document.getElementById('tut-arrow').classList.remove('active');
    // interact 클래스도 제거해서 z-index 충돌 방지
    var hi=document.querySelectorAll('.tutorial-highlight,.tutorial-interact');
    for(var h=0;h<hi.length;h++){hi[h].classList.remove('tutorial-highlight');hi[h].classList.remove('tutorial-interact');}
  }
  var overlay = document.getElementById('battle-overlay');
  if(TUT.active) overlay.style.zIndex='550';
  var html = '<div class="battle-intro"><h3 style="margin-bottom:4px;color:#ffd700">발견!</h3>';
  html += '<p style="color:#aab;font-size:13px;margin-bottom:16px">다음 등급 학생 중 1명을 선택하세요</p>';
  html += '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">';
  for(var i=0;i<choices.length;i++){
    var c = choices[i];
    var kwt = (c.kw||[]).filter(function(k){return k!=='survive'&&k!=='preemptive';}).map(function(k){return KW_LABELS[k]||k;}).join(' ');
    var aTag = '';
    if(BC_IDS[c.id]) aTag+='<span class="ability-tag bc" style="cursor:default">첫인사</span>';
    if(DR_IDS[c.id]) aTag+='<span class="ability-tag dr" style="cursor:default">뒤끝</span>';
    if(SOC_IDS[c.id]) aTag+='<span class="ability-tag soc" style="cursor:default">개전</span>';
    if(SURV_IDS[c.id]||(c.kw&&c.kw.indexOf('survive')!==-1)) aTag+='<span class="ability-tag" style="background:rgba(16,185,129,0.2);color:#6ee7b7;cursor:default">버티기</span>';
    if(PASSIVE_IDS[c.id]) aTag+='<span class="ability-tag" style="background:rgba(168,85,247,0.2);color:#c084fc;cursor:default">패시브</span>';
    if(PRE_IDS[c.id]||(c.kw&&c.kw.indexOf('preemptive')!==-1)) aTag+='<span class="ability-tag" style="background:rgba(251,191,36,0.2);color:#fbbf24;cursor:default">선제</span>';
    html += '<div class="card tier'+c.tier+' discover-pick" data-discover="'+i+'" data-base-id="'+c.id+'" style="cursor:pointer">';
    if(c.img) html += '<div class="card-bg"><img src="img/'+c.img+'" onerror="this.parentElement.style.display=\'none\'"></div>';
    html += '<div class="card-inner">';
    var dIcon=SCHOOL_ICONS[c.school];if(dIcon)html+='<img class="school-logo" src="'+dIcon+'">';
    html += '<div class="tier-stars">'+starStr(c.tier)+'</div>';
    html += '<div class="card-spacer"></div>';
    html += '<div class="name-banner">'+c.name+'</div>';
    html += '<div class="keywords">'+(kwt||'&nbsp;')+'</div>';
    if(aTag) html += '<div style="text-align:center;padding:2px 6px;background:rgba(0,0,0,0.4)">'+aTag+'</div>';
    else html += '<div style="padding:2px 6px;background:rgba(0,0,0,0.4)">&nbsp;</div>';
    html += '<div class="stat-row"><div class="stat-atk">'+c.atk+'</div><div class="stat-hp">'+c.hp+'</div></div>';
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

  // 튜토리얼 중이면 발견 선택 차단 + 아로나 설명 트리거
  if(TUT.active){
    TUT.discoverBlocked=true;
    // 발견 창이 뜬 후 잠시 뒤 튜토리얼 다음 스텝 진행
    setTimeout(function(){
      var s=TUTORIAL_STEPS[TUT.step];
      if(s&&s.action==='waitBoard') tutNext(); // 48→49로 진행
    },500);
  }

  document.getElementById('battle-intro-area').addEventListener('click', function handler(e){
    var pick = e.target.closest('.discover-pick');
    if(!pick) return;
    if(TUT.active && TUT.discoverBlocked) return; // 차단 중
    var idx = parseInt(pick.getAttribute('data-discover'));
    overlay.classList.remove('active');
    document.getElementById('battle-intro-area').innerHTML='';
    document.getElementById('battle-intro-area').removeEventListener('click', handler);
    // 선택한 캐릭터를 풀에서 빼고 보드에 추가 (트리플 체크 포함)
    var tmpl = choices[idx];
    if(takeFromPool(tmpl.id)){
      var added = addToBoard(p, makeMinion(tmpl, false));
      // 풀보드라 추가 실패 시 벤치 or 강제 추가
      if(!added){
        var newUnit = makeMinion(tmpl, false);
        if(!p.bench){p.bench=newUnit;}
        else{p.board.push(newUnit);triggerBattlecry(newUnit,p);}
      }
    }
    overlay.style.zIndex=''; // z-index 복원
    renderAll();
    if(TUT.active){
      var ts=TUTORIAL_STEPS[TUT.step];
      if(ts&&ts.action==='waitDiscover') setTimeout(function(){tutNext();},300);
    }
  });
}

// 커스텀 발견: 특정 후보 목록으로 발견 UI 표시
function showDiscoverCustom(choices) {
  if(!choices||choices.length===0){renderAll();return;}
  var p=G.players[0];
  var overlay=document.getElementById('battle-overlay');
  var html='<div class="battle-intro"><h3 style="margin-bottom:4px;color:#ffd700">발견!</h3>';
  html+='<p style="color:#aab;font-size:13px;margin-bottom:16px">1명을 선택하세요</p>';
  html+='<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">';
  for(var i=0;i<choices.length;i++){
    var c=choices[i];
    var kwt=(c.kw||[]).filter(function(k){return k!=='survive'&&k!=='preemptive';}).map(function(k){return KW_LABELS[k]||k;}).join(' ');
    var aTag='';
    if(BC_IDS[c.id])aTag+='<span class="ability-tag bc" style="cursor:default">첫인사</span>';
    if(DR_IDS[c.id])aTag+='<span class="ability-tag dr" style="cursor:default">뒤끝</span>';
    if(SOC_IDS[c.id])aTag+='<span class="ability-tag soc" style="cursor:default">개전</span>';
    if(SURV_IDS[c.id]||(c.kw&&c.kw.indexOf('survive')!==-1))aTag+='<span class="ability-tag" style="background:rgba(16,185,129,0.2);color:#6ee7b7;cursor:default">버티기</span>';
    if(PASSIVE_IDS[c.id])aTag+='<span class="ability-tag" style="background:rgba(168,85,247,0.2);color:#c084fc;cursor:default">패시브</span>';
    if(PRE_IDS[c.id]||(c.kw&&c.kw.indexOf('preemptive')!==-1))aTag+='<span class="ability-tag" style="background:rgba(251,191,36,0.2);color:#fbbf24;cursor:default">선제</span>';
    html+='<div class="card tier'+c.tier+' discover-pick" data-discover="'+i+'" data-base-id="'+c.id+'" style="cursor:pointer">';
    if(c.img)html+='<div class="card-bg"><img src="img/'+c.img+'" onerror="this.parentElement.style.display=\'none\'"></div>';
    html+='<div class="card-inner">';
    var dIcon=SCHOOL_ICONS[c.school];if(dIcon)html+='<img class="school-logo" src="'+dIcon+'">';
    html+='<div class="tier-stars">'+starStr(c.tier)+'</div><div class="card-spacer"></div>';
    html+='<div class="name-banner">'+c.name+'</div><div class="keywords">'+(kwt||'&nbsp;')+'</div>';
    if(aTag)html+='<div style="text-align:center;padding:2px 6px;background:rgba(0,0,0,0.4)">'+aTag+'</div>';
    else html+='<div style="padding:2px 6px;background:rgba(0,0,0,0.4)">&nbsp;</div>';
    html+='<div class="stat-row"><div class="stat-atk">'+c.atk+'</div><div class="stat-hp">'+c.hp+'</div></div></div></div>';
  }
  html+='</div></div>';
  document.getElementById('battle-intro-area').innerHTML=html;
  document.getElementById('battle-arena').style.display='none';
  document.getElementById('battle-log').style.display='none';
  document.getElementById('battle-result-box').style.display='none';
  document.getElementById('btn-continue').style.display='none';
  document.getElementById('btn-skip').style.display='none';
  overlay.classList.add('active');
  document.getElementById('battle-intro-area').addEventListener('click',function handler(e){
    var pick=e.target.closest('.discover-pick');if(!pick)return;
    var idx=parseInt(pick.getAttribute('data-discover'));
    overlay.classList.remove('active');
    document.getElementById('battle-intro-area').innerHTML='';
    document.getElementById('battle-intro-area').removeEventListener('click',handler);
    var chosen=choices[idx];if(!chosen){renderAll();return;}
    takeFromPool(chosen.id);
    var count=0;for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===chosen.id&&!p.board[j].isSkin)count++;}
    if(count>=2){
      var tmpl=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id===chosen.id){tmpl=CHARS[j];break;}
      if(tmpl){var nb=[],rm=0;for(var j=0;j<p.board.length;j++){if(p.board[j].baseId===chosen.id&&!p.board[j].isSkin&&rm<2){rm++;}else{nb.push(p.board[j]);}}p.board=nb;var gld=makeMinion(tmpl,true);p.board.push(gld);triggerBattlecry(gld,p);showDiscover(p);return;}
    }
    if(p.board.length<MAX_BOARD){var m=makeMinion(chosen,false);p.board.push(m);triggerBattlecry(m,p);}
    renderAll();
  });
}

function aiDiscover(p) {
  var choices = getDiscoverChoices(p);
  if(choices.length === 0) return;
  // AI: 점수 가장 높은 것 선택
  var best = null, bestScore = -1;
  for(var i=0;i<choices.length;i++){
    var s = choices[i].atk + choices[i].hp + choices[i].tier * 1.5;
    for(var k=0;k<(choices[i].kw||[]).length;k++){
      if(choices[i].kw[k]==='poison')s+=4;else if(choices[i].kw[k]==='cleave')s+=3;else if(choices[i].kw[k]==='shield')s+=2;else if(choices[i].kw[k]==='windfury')s+=3;
    }
    // 트리플 가능성 보너스
    for(var k=0;k<p.board.length;k++){if(p.board[k].baseId===choices[i].id&&!p.board[k].isSkin){s+=5;break;}}
    if(s > bestScore){bestScore = s; best = choices[i];}
  }
  if(best && takeFromPool(best.id)){
    addToBoard(p, makeMinion(best, false));
  }
}

// ========== ADD TO BOARD (트리플 체크 포함) ==========
function addToBoard(p, m) {
  // 트리플 체크
  var count=0;
  for(var i=0;i<p.board.length;i++){
    if(p.board[i].baseId===m.baseId&&!p.board[i].isSkin) count++;
  }
  if(count>=2){
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
    // 플레이어면 발견 (AI는 aiDiscover 별도 호출)
    if(p.isPlayer) showDiscover(p);
    return skinUnit;
  }
  // 트리플 아니면 그냥 추가
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
  // 미치루 연쇄 중이면 순수 1회만 발동 (시즈코/린 증폭 안 됨)
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
    // 이로하를 토라마루로 즉시 교체
    var idx=p.board.indexOf(m);
    if(idx<0) return;
    var isSkin=m.isSkin;
    var tora=makeToken('toramaru');
    tora.isToken=false; // 보드 영구 유닛이므로 전투 후 필터 대상 아님
    if(isSkin){tora.atk=10;tora.hp=2;tora.maxHp=2;tora.name='토라마루(황금)';tora.isSkin=true;tora.img='token/toramaru.png';}
    // baseId를 'iroha'로 유지 → 풀 추적 + 트리플 인식
    tora.baseId='iroha';
    tora.irohaRef={isSkin:isSkin};
    p.board[idx]=tora;
  }

  // ===== 백귀야행 첫인사 =====
  else if(id==='izuna') {
    var atkBuff=1,hpBuff=m.isSkin?1:0;
    for(var i=0;i<p.board.length;i++){
      p.board[i].atk+=atkBuff;
      if(hpBuff>0){p.board[i].hp+=hpBuff;p.board[i].maxHp=(p.board[i].maxHp||p.board[i].hp);p.board[i].maxHp+=hpBuff;}
      logBuff(p.board[i],m.name,atkBuff,hpBuff);
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
    // 아군 백귀야행 전체 +3/+3 (황금 +6/+6)
    var buff=m.isSkin?6:3;
    for(var i=0;i<p.board.length;i++){
      if(p.board[i].school==='백귀야행'){
        p.board[i].atk+=buff;p.board[i].hp+=buff;
        p.board[i].maxHp=(p.board[i].maxHp||p.board[i].hp);p.board[i].maxHp+=buff;
        logBuff(p.board[i],m.name,buff,buff);
      }
    }
  }
  else if(id==='michiru') {
    // 보드의 다른 백귀야행 BC를 추가 발동 (황금: 2회, 미치루 제외)
    if(!G._michiruChaining){
      G._michiruChaining=true;
      var repeat=m.isSkin?2:1;
      for(var r=0;r<repeat;r++){
        for(var i=0;i<p.board.length;i++){
          if(p.board[i].baseId!=='michiru'&&p.board[i].school==='백귀야행'&&BC_IDS[p.board[i].baseId]){
            _doBC(p.board[i],p); // 시즈코/린 증폭 없이 순수 1회
          }
        }
      }
      G._michiruChaining=false;
    }
  }

  // 히마리: 첫인사 제거 → 개전(SOC)으로 이동
}

// ========== 총학생회 패시브 헬퍼 ==========
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
// 에이미 패시브: 밀레니엄 소환 시 보너스
function getEimiSummonBonus(side){
  var bonus=0;
  // side가 배열(전투중)이면 전투용, player 객체면 영입용
  if(Array.isArray(side)){
    for(var i=0;i<side.length;i++){if(side[i].alive&&side[i].baseId==='eimi')bonus+=side[i].isSkin?2:1;}
  } else {
    for(var i=0;i<side.board.length;i++){if(side.board[i]&&side.board[i].baseId==='eimi')bonus+=side.board[i].isSkin?2:1;}
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

// ========== UNDO (판매 되돌리기) ==========
var lastSold=null;

function undoSell() {
  if(!lastSold) return;
  var p=G.players[0];
  if(p.board.length>=MAX_BOARD){lastSold=null;return;}
  // 골드 회수
  p.stone-=1;
  if(p.stone<0){p.stone+=1;return;} // 청휘석 부족하면 취소
  // 보드에 복원
  p.board.splice(lastSold.idx,0,lastSold.unit);
  // 풀 되돌리기
  if(lastSold.unit.isHidden){
    G.hiddenCardsOwned[lastSold.unit.baseId]=true;
    // shopExclusions 복원
    if(lastSold.exclusion){
      if(G.shopExclusions.indexOf(lastSold.exclusion)===-1) G.shopExclusions.push(lastSold.exclusion);
    }
  } else {
    takeFromPool(lastSold.unit.baseId);
    if(lastSold.unit.isSkin){takeFromPool(lastSold.unit.baseId);takeFromPool(lastSold.unit.baseId);}
  }
  // 하이네 버프 되돌리기
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
  msg.textContent='정말로 돌려 보내나요?';
  var btnRow=document.createElement('div');
  btnRow.style.cssText='display:flex;gap:12px;justify-content:center';
  var yesBtn=document.createElement('button');
  yesBtn.style.cssText='padding:8px 24px;border:none;border-radius:8px;font-size:15px;font-weight:bold;background:#ef4444;color:#fff;cursor:pointer';
  yesBtn.textContent='응';
  yesBtn.addEventListener('click',function(e){e.stopPropagation();overlay.remove();onConfirm();});
  var noBtn=document.createElement('button');
  noBtn.style.cssText='padding:8px 24px;border:none;border-radius:8px;font-size:15px;font-weight:bold;background:#475569;color:#fff;cursor:pointer';
  noBtn.textContent='아니';
  noBtn.addEventListener('click',function(e){e.stopPropagation();overlay.remove();});
  btnRow.appendChild(yesBtn);btnRow.appendChild(noBtn);
  box.appendChild(msg);box.appendChild(btnRow);overlay.appendChild(box);
  overlay.addEventListener('click',function(e){if(e.target===overlay){overlay.remove();}});
  document.body.appendChild(overlay);
}
function sellMinion(idx) {
  var p=G.players[0];
  if(!p.board[idx])return;
  var m=p.board[idx];
  // undo용 저장
  var undoData={unit:m,idx:idx,haineBuff:0,exclusion:null};
  // 하이네 패시브: 팔면 아군 전체 +2/+2 (황금 +4/+4)
  if(m.baseId==='haine'){
    var buff=m.isSkin?4:2;
    undoData.haineBuff=buff;
    for(var i=0;i<p.board.length;i++){
      if(p.board[i]&&p.board[i]!==m){
        p.board[i].atk+=buff;p.board[i].hp+=buff;
        if(!p.board[i].maxHp)p.board[i].maxHp=p.board[i].hp; else p.board[i].maxHp+=buff;
        logBuff(p.board[i],m.name+' 판매',buff,buff);
      }
    }
  }
  p.stone+=1;
  // 백귀야행 판매 추적 (쿠즈노하 등장 조건)
  if(HKYK_ALL_IDS.indexOf(m.baseId)!==-1) G.soldHkyk[m.baseId]=true;
  // 히든 카드: 풀 반환하지 않고, 소유 해제 + 상점제외 해제
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

// ========== 보관 (벤치) ==========
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
  // 트리플 체크
  var m=p.bench;
  var count=0;
  for(var i=0;i<p.board.length;i++){if(p.board[i].baseId===m.baseId&&!p.board[i].isSkin)count++;}
  var willTriple=count>=2;
  if(p.board.length>=MAX_BOARD&&!willTriple) return;
  p.bench=null;
  if(willTriple){
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
  var m=p.bench;
  // 하이네 패시브: 벤치에서 팔아도 아군 전체 버프
  if(m.baseId==='haine'){
    var buff=m.isSkin?4:2;
    for(var i=0;i<p.board.length;i++){
      if(p.board[i]){
        p.board[i].atk+=buff;p.board[i].hp+=buff;
        if(!p.board[i].maxHp)p.board[i].maxHp=p.board[i].hp; else p.board[i].maxHp+=buff;
        logBuff(p.board[i],m.name+' 판매',buff,buff);
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
  if(SANDBOX){rollShop(true);renderAll();return;}
  if(G.freeRerolls&&G.freeRerolls>0){G.freeRerolls--;rollShop(true);renderAll();return;}
  if(p.stone<1)return;p.stone-=1;rollShop(true);renderAll();
}
function doUpgrade() {
  var p=G.players[0];if(p.tier>=6)return;
  if(SANDBOX){p.tier++;p.upgradeCost=p.tier<6?0:99;renderAll();}
  else{if(p.stone<p.upgradeCost)return;
  p.stone-=p.upgradeCost;p.tier++;p.upgradeCost=p.tier<6?UPGRADE_COSTS[p.tier]:99;renderAll();}
  if(TUT.active){
    var s=TUTORIAL_STEPS[TUT.step];
    if(s&&s.action==='waitUpgrade') setTimeout(function(){tutNext();},300);
  }
}
function doFreeze() { G.frozen=!G.frozen;renderAll(); }

function boardSwap(idx) {
  if(swapFirst===-1){swapFirst=idx;renderAll();}
  else{if(swapFirst!==idx){var p=G.players[0];var tmp=p.board[swapFirst];p.board[swapFirst]=p.board[idx];p.board[idx]=tmp;}swapFirst=-1;renderAll();}
}

// ========== AI ==========
var AI_LEVEL_TARGETS={2:2,3:5,4:7,5:9,6:11}; // aiShouldUpgrade의 idealTurns 참조용으로 유지
var AI_PERSONALITIES={
  aggressive:{levelBias:15,buyThreshold:0,sellThreshold:0.7,hpDesperate:20,powerTurnSave:false},
  standard:{levelBias:0,buyThreshold:3,sellThreshold:0.85,hpDesperate:15,powerTurnSave:false},
  tempo:{levelBias:-10,buyThreshold:6,sellThreshold:0.9,hpDesperate:12,powerTurnSave:false},
  greedy:{levelBias:5,buyThreshold:3,sellThreshold:0.8,hpDesperate:15,powerTurnSave:true}
};
var AI_PERSONALITY_KEYS=['aggressive','standard','tempo','greedy'];
var HKYK_ALL_IDS=['izuna','pina','yukari','tsukuyo','mimori','renge','shizuko','tsubaki','kikyou','chise','nagusa','wakamo','michiru'];

// AI용 마법카드 효과 (G.players[0] 하드코딩 우회 — p: AI 플레이어)
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
  surveillance: function(p){/* AI는 리롤 안 함 — 스킵 */},
  two_hands: function(p){var best=p.board[0];for(var i=1;i<p.board.length;i++)if(p.board[i].atk>best.atk)best=p.board[i];if(best&&best.kw.indexOf('windfury')===-1)best.kw.push('windfury');},
  revive_standby: function(p){var best=p.board[0];for(var i=1;i<p.board.length;i++)if(p.board[i].atk+p.board[i].hp>best.atk+best.hp)best=p.board[i];if(best&&best.kw.indexOf('reborn')===-1)best.kw.push('reborn');},
  get_set_go: function(p){var schools={};for(var i=0;i<p.board.length;i++){var s=p.board[i].school;if(!schools[s])schools[s]=[];schools[s].push(i);}for(var s in schools){var arr=schools[s];var pick=arr[Math.floor(Math.random()*arr.length)];p.board[pick].atk+=8;p.board[pick].hp+=8;}},
  on_your_mark: function(p){var basicPool=['taunt','shield','poison','reborn','cleave','pierce','ranged','windfury','selfdestruct','preemptive'];var schools={};for(var i=0;i<p.board.length;i++){var s=p.board[i].school;if(!schools[s])schools[s]=[];schools[s].push(i);}var used={};for(var s in schools){var arr=schools[s];var pick=arr[Math.floor(Math.random()*arr.length)];var u=p.board[pick];var avail=basicPool.filter(function(k){return u.kw.indexOf(k)===-1&&!used[k];});if(avail.length>0){var kw=avail[Math.floor(Math.random()*avail.length)];u.kw.push(kw);used[kw]=true;}}},
};
var KW_SORT_ORDER={cleave:0,pierce:0,poison:1,windfury:2,shield:3,survive:4,reborn:5,taunt:99};

// ===== AI 덱 패턴 =====
var DECK_PATTERNS=[
  // 미도리+모모이덱: 두 장 확보 후 나머지는 자유 구성, 후반 벨류 역전 시 매각 가능
  {id:'midori_momoi',
   check:function(board){var hM=false,hD=false;for(var i=0;i<board.length;i++){if(board[i].baseId==='momoi')hM=true;if(board[i].baseId==='midori')hD=true;}return hM&&hD;},
   buyBonus:function(c,board){if(c.id==='momoi'||c.id==='midori')return 12;return 0;},
   sellProtect:function(u){if(u.baseId==='momoi'||u.baseId==='midori')return 8;return 0;}},
  // 광역덱: 광역 유닛 수 비례 시너지 (많을수록 추가 광역 유닛 우선도 상승)
  {id:'cleave',
   check:function(board){var cnt=0;for(var i=0;i<board.length;i++){if(hasKw(board[i],'cleave')||hasKw(board[i],'pierce'))cnt++;}return cnt>=2;},
   buyBonus:function(c,board){if(!hasKw(c,'cleave')&&!hasKw(c,'pierce'))return 0;var cnt=0;for(var i=0;i<board.length;i++){if(hasKw(board[i],'cleave')||hasKw(board[i],'pierce'))cnt++;}return cnt*2;},
   sellProtect:function(u){return 0;}},
  // 트리니티 개전덱/츠루기카야덱: SOC 유닛 시너지 (기작 유사)
  {id:'trinity_soc',
   check:function(board){var socCnt=0,hasTsurugi=false,hasKayaUnit=false;for(var i=0;i<board.length;i++){var bid=board[i].baseId;if(SOC_IDS[bid])socCnt++;if(bid==='tsurugi')hasTsurugi=true;if(bid==='kaya')hasKayaUnit=true;}return socCnt>=2||(hasTsurugi&&hasKayaUnit);},
   buyBonus:function(c,board){if(c.id==='tsurugi'||c.id==='kaya')return 8;if(SOC_IDS[c.id])return 5;return 0;},
   sellProtect:function(u){if(u.baseId==='tsurugi'||u.baseId==='kaya')return 5;if(SOC_IDS[u.baseId])return 3;return 0;}},
  // 츠바키 첫인사덱: BC 유닛 시너지
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
  // 턴 압박: 이상적 턴 대비 얼마나 늦는지
  var idealTurns=[0,0,2,5,7,9,11];
  var turnDelta=G.turn-idealTurns[p.tier+1];
  score+=turnDelta*3;
  // 레벨업 후 잔여 골드
  if(canBuyAfter>=2) score+=10;
  else if(canBuyAfter>=1) score+=3;
  else score-=8;
  // 보드 상태
  if(p.board.length>=MAX_BOARD) score+=5;
  if(p.board.length<=2) score-=10;
  // HP 압박
  if(p.hp<=pers.hpDesperate) score-=15;
  else if(p.hp>=30) score+=3;
  // 성격 바이어스
  score+=pers.levelBias;
  // greedy 파워턴: 지금 0골드인데 다음 턴이면 레벨+구매 가능
  if(pers.powerTurnSave){
    var nextStone=Math.min(MAX_STONE,(p.turnStone||p.stone)+1);
    var nextCost=Math.max(0,p.upgradeCost-1);
    var nextGoldAfter=nextStone-nextCost;
    if(goldAfterLevel<3&&nextGoldAfter>=3) score-=12;
  }
  // 무료/1골드 업그레이드는 무조건
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
  // 교체 후보가 주력 학교면 보너스, 약한 유닛이 학교 불일치면 마진 감소
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
      var nu=makeMinion(bestTmpl,false);p.board.push(nu);p.stone-=3;triggerBattlecry(nu,p);
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
  // 배치 우선순위: 도발 맨앞 → 뒤끝/자폭 앞쪽 → 일반 중간 → 선제/저격/버티기 뒤쪽
  function posScore(u){
    var s=50;
    var bid=u.baseId||'';
    var kw=u.kw||[];
    // 앞배치 (낮을수록 앞)
    if(kw.indexOf('taunt')!==-1) s=10; // 도발 맨앞
    if(kw.indexOf('selfdestruct')!==-1) s=Math.min(s,15); // 자폭 앞쪽
    if(DR_IDS[bid]) s=Math.min(s,20); // 뒤끝 유닛 앞쪽
    if(kw.indexOf('reborn')!==-1) s=Math.min(s,25); // 부활 앞쪽
    // 뒤배치 (높을수록 뒤)
    if(kw.indexOf('survive')!==-1) s=Math.max(s,70); // 버티기 뒤쪽
    if(SURV_IDS[bid]) s=Math.max(s,70);
    if(kw.indexOf('preemptive')!==-1&&kw.indexOf('taunt')===-1) s=Math.max(s,75); // 선제 뒤쪽
    if(kw.indexOf('ranged')!==-1) s=Math.max(s,80); // 저격 맨뒤
    // 보호막은 앞쪽에 두면 1히트 흡수 가치 높음
    if(kw.indexOf('shield')!==-1&&s>30) s=Math.min(s,30);
    return s;
  }
  board.sort(function(a,b){
    var pa=posScore(a),pb=posScore(b);
    if(pa!==pb) return pa-pb;
    return b.hp-a.hp; // 같은 우선순위면 체력 높은 유닛 앞
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
    {id:'gehenna_prefect',school:'게헨나',units:['hina','iori','ako','chinatsu'],schoolOnly:false},
    {id:'gehenna_pandemonium',school:'게헨나',units:['makoto','satsuki','iroha'],schoolOnly:false},
    {id:'gehenna_traingun',school:'게헨나',units:[],schoolOnly:true},
    {id:'trinity_mika',school:'트리니티',units:[],schoolOnly:true},
    {id:'trinity_nagisa',school:'트리니티',units:['mari','sakurako','mine'],schoolOnly:false},
    {id:'trinity_seia',school:'트리니티',units:[],schoolOnly:true},
    {id:'millennium_death_momoi',school:'밀레니엄',units:['momoi','midori','yuzu','arisu'],schoolOnly:false},
    {id:'hkyk_saikyo',school:'백귀야행',units:[],schoolOnly:true},
    {id:'hkyk_kuzunoha',school:'백귀야행',units:[],schoolOnly:true}
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
  // 덱 패턴 감지 (현재 보드 기반)
  var activePat=null;
  for(var dp=0;dp<DECK_PATTERNS.length;dp++){if(DECK_PATTERNS[dp].check(p.board)){activePat=DECK_PATTERNS[dp];break;}}
  strat.deckPattern=activePat;
  return strat;
}

function aiTurns() {
  for(var i=1;i<G.players.length;i++){
    var p=G.players[i];if(p.dead)continue;
    // Phase 1: 레벨업 판단 (스코어링)
    if(aiShouldUpgrade(p)){p.stone-=p.upgradeCost;p.tier++;p.upgradeCost=p.tier<6?UPGRADE_COSTS[p.tier]:99;}

    var aiStrat=aiGetStrategy(p);
    var aiPool=getAvailableChars(p.tier);
    // AI 마법카드 사용: 가성비 높은 순으로 최대 2회
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

    // Phase 3: 선제적 매각 (보드 풀 + 골드 부족 시)
    aiProactiveSell(p,aiStrat);

    // Phase 4: 구매 루프
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
        // ε-greedy: 시뮬 탐색 모드에서 10% 확률로 완전 랜덤 구매
        if(SIM_EXPLORE&&Math.random()<0.10){
          tmpl=candidates[Math.floor(Math.random()*candidates.length)];
        } else {
        var scored=candidates.map(function(c){
          var s=c.atk+c.hp+c.tier*1.5;
          for(var k=0;k<(c.kw||[]).length;k++){if(c.kw[k]==='poison')s+=4;else if(c.kw[k]==='cleave')s+=3;else if(c.kw[k]==='pierce')s+=2;else if(c.kw[k]==='shield')s+=2;else if(c.kw[k]==='windfury')s+=3;else if(c.kw[k]==='survive')s+=1;}
          // 특수능력 보너스 (뒤끝/개전/첫인사/선제/버티기/패시브)
          if(DR_IDS[c.id])s+=5;
          if(SOC_IDS[c.id])s+=4;
          if(BC_IDS[c.id])s+=4;
          if(PRE_IDS[c.id])s+=3;
          if(SURV_IDS[c.id])s+=3;
          if(PASSIVE_IDS[c.id])s+=3;
          var hasCopy=false;for(var k=0;k<p.board.length;k++){if(p.board[k].baseId===c.id&&!p.board[k].isSkin){hasCopy=true;break;}}
          if(hasCopy)s+=5;
          if(!aiStrat.giveUp){
            // 학교 시너지: 통일도가 높을수록 보너스 증가
            if(aiStrat.dominantSchool&&c.school===aiStrat.dominantSchool){
              var schoolUnity=0;for(var _su=0;_su<p.board.length;_su++){if(p.board[_su].school===aiStrat.dominantSchool)schoolUnity++;}
              s+=3+schoolUnity*2; // 기본3 + 아군 동일학교당 +2 (최대 3+10=13)
            }
            if(aiStrat.targetUnits.indexOf(c.id)!==-1)s+=12;
            if(aiStrat.avoidOtherSchools&&aiStrat.dominantSchool&&c.school!==aiStrat.dominantSchool)s-=10;
            // 보드에 없는 학교 유닛은 소폭 감점 (학교 분산 방지)
            if(p.board.length>=3&&aiStrat.dominantSchool&&c.school!==aiStrat.dominantSchool&&!aiStrat.avoidOtherSchools)s-=3;
          }
          // 덱 패턴 보너스
          if(aiStrat.deckPattern)s+=aiStrat.deckPattern.buyBonus(c,p.board);
          // 미도리+모모이 한 장만 있어도 짝 우선도 사전 부스팅
          if(!aiStrat.deckPattern||aiStrat.deckPattern.id!=='midori_momoi'){
            var _hM=false,_hD=false;
            for(var _bk=0;_bk<p.board.length;_bk++){if(p.board[_bk].baseId==='momoi')_hM=true;if(p.board[_bk].baseId==='midori')_hD=true;}
            if((_hM&&c.id==='midori')||(_hD&&c.id==='momoi'))s+=8;
          }
          // 자가대전 시뮬 통계 기반 보정 (10판 이상 데이터 있는 카드만)
          s+=simStatBonus(c.id);
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

    // Phase 4b: 트리플 리롤 (보드 풀 + 골드 남음 + 2장 있는 유닛)
    if(p.board.length>=MAX_BOARD&&p.stone>=4){
      var tripleNeed=null;
      var bc2={};for(var j=0;j<p.board.length;j++){if(!p.board[j].isSkin)bc2[p.board[j].baseId]=(bc2[p.board[j].baseId]||0)+1;}
      for(var bid in bc2){if(bc2[bid]>=2&&G.pool[bid]>0){tripleNeed=bid;break;}}
      if(tripleNeed&&p.stone>=4){ // 1 reroll + 3 buy
        // 풀에 남아있으면 리롤해서 찾을 확률 존재 — 최대 2회 리롤 시도
        var rerollAttempts=Math.min(2,Math.floor((p.stone-3)/1));
        for(var ra=0;ra<rerollAttempts;ra++){
          if(G.pool[tripleNeed]<=0) break;
          p.stone-=1; // reroll cost
          // 리롤로 찾았다고 가정 (확률 = pool수/전체pool * shop수)
          var totalPool=0;for(var pid in G.pool)totalPool+=G.pool[pid];
          var findChance=G.pool[tripleNeed]/Math.max(1,totalPool)*SHOP_SIZE[p.tier];
          if(Math.random()<findChance&&takeFromPool(tripleNeed)){
            // 트리플 완성!
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

    // Phase 5: 매각+교체 (개선된 버전)
    aiSellReplace(p,aiStrat,aiPool);

    // Phase 6: 잔여 골드 소비 (남은 골드로 주문)
    aiSpendRemainder(p);
    p.board=p.board.filter(function(u){return !!u;});
    aiSortBoard(p.board);

    // AI 7성 히든카드 체크 (정당한 조건 + 확률)
    aiCheckHidden(p);
  }
}

function aiCheckHidden(p) {
  if(p.dead||p.isPlayer) return;
  var eligible=checkHiddenConditionsFor(p);
  for(var h=0;h<eligible.length;h++){
    var hid=eligible[h];
    var rate=0.30;
    if(hid==='hkyk_saikyo') rate=0.05;
    else if(hid==='gehenna_traingun'||hid==='trinity_mika') rate=0.10;
    else if(hid==='hkyk_kuzunoha') rate=0.60;
    if(Math.random()<rate){
      var htmpl=findHiddenChar(hid);
      if(!htmpl||G.pool[htmpl.id]<=0) continue;
      takeFromPool(htmpl.id);
      G.hiddenCardsEverOwned[hid]=true;
      var unit=makeHiddenMinion(htmpl);
      // 흡수형 처리
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
        var bAtk=0,bHp=0,nb=[];
        for(var j=0;j<p.board.length;j++){if(absorb.indexOf(p.board[j].baseId)!==-1){bAtk+=p.board[j].atk;bHp+=p.board[j].hp;returnToPool(p.board[j].baseId,p.board[j].isSkin?3:1);}else nb.push(p.board[j]);}
        p.board=nb;unit.atk+=bAtk;unit.hp+=bHp;unit.maxHp=unit.hp;
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

// 개전 트리거 (전투 시작 전)
function triggerSOC(u, mySide, otherSide, log) {
  var id=u.baseId;
  if(id==='kayoko'){
    // 적 1~5번째 배치 역순
    var aliveIdx=[];for(var i=0;i<otherSide.length;i++)if(otherSide[i].alive)aliveIdx.push(i);
    var toRev=aliveIdx.slice(0,5);
    if(toRev.length>1){
      var units=toRev.map(function(idx){return otherSide[idx];});
      units.reverse();
      for(var i=0;i<toRev.length;i++)otherSide[toRev[i]]=units[i];
      log.push({cls:'soc',text:'[개전] '+u.name+': 적 1~'+toRev.length+'번 배치 역순!'});
    }
  }
  else if(id==='midori'){
    // 모모이 수만큼 버프 (메이드면 수×+2/+2, 둘 다 메이드면 수×+4/+4)
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].baseId==='momoi'){
        var buff=(u.isSkin&&mySide[i].isSkin)?4:(u.isSkin||mySide[i].isSkin)?2:1;
        u.atk+=buff;u.hp+=buff;
        log.push({cls:'soc',text:'[개전] '+u.name+': 모모이 → +'+buff+'/+'+buff});
      }
    }
  }
  else if(id==='momoi'){
    // 미도리 수만큼 버프
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].baseId==='midori'){
        var buff=(u.isSkin&&mySide[i].isSkin)?4:(u.isSkin||mySide[i].isSkin)?2:1;
        u.atk+=buff;u.hp+=buff;
        log.push({cls:'soc',text:'[개전] '+u.name+': 미도리 → +'+buff+'/+'+buff});
      }
    }
  }
  else if(id==='mari'){
    var atkBuff=u.isSkin?3:2,hpBuff=u.isSkin?2:1;
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=atkBuff;mySide[i].hp+=hpBuff;}}
    log.push({cls:'soc',text:'[개전] '+u.name+': 아군 전체 +'+atkBuff+'/+'+hpBuff});
  }
  else if(id==='tsurugi'){
    var mult=u.isSkin?3:2;
    u.atk=u.atk*mult; u.hp=u.hp*mult;
    log.push({cls:'soc',text:'[개전] '+u.name+': 공/체 '+mult+'배! ('+u.atk+'/'+u.hp+')'});
  }
  else if(id==='rio'){
    // 아군 전체 학교를 가장 왼쪽 아군의 학교로 통일
    var leftSchool=null;
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive){leftSchool=mySide[i].school;break;}}
    if(leftSchool){
      G.rioSchool=leftSchool;
      for(var i=0;i<mySide.length;i++){if(mySide[i].alive)mySide[i].school=leftSchool;}
      log.push({cls:'soc',text:'[개전] '+u.name+': 아군 전체 학교를 '+leftSchool+'(으)로 통일!'});
      if(u.isSkin){
        for(var i=0;i<otherSide.length;i++){if(otherSide[i].alive)otherSide[i].school='';}
        log.push({cls:'soc',text:'[개전] '+u.name+': 적 학교 태그 삭제!'});
      }
    }
  }
  else if(id==='himari'){
    // 아군 밀레니엄 학생의 공/체를 각각 max(atk,hp)로 설정
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].school==='밀레니엄'){
        var mx=Math.max(mySide[i].atk,mySide[i].hp);
        mySide[i].atk=mx;mySide[i].hp=mx;
      }
    }
    log.push({cls:'soc',text:'[개전] '+u.name+': 밀레니엄 공/체 → max값으로!'});
    // 황금: 아군 최고 공격력과 최고 체력을 히마리에게 적용
    if(u.isSkin){
      var bestAtk=0,bestHp=0;
      for(var i=0;i<mySide.length;i++){if(mySide[i].alive){if(mySide[i].atk>bestAtk)bestAtk=mySide[i].atk;if(mySide[i].hp>bestHp)bestHp=mySide[i].hp;}}
      u.atk=bestAtk;u.hp=bestHp;
      log.push({cls:'soc',text:'[개전] '+u.name+': 아군 최고 스탯 흡수! ('+bestAtk+'/'+bestHp+')'});
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
      log.push({cls:'soc',text:'[개전] '+u.name+': 아군 적군 도발 모두 제거!'});
    } else {
      log.push({cls:'soc',text:'[개전] '+u.name+': 아군 도발 모두 제거!'});
    }
  }
  else if(id==='hibiki'){
    var debuff=u.isSkin?2:1;
    var hibikiKills=[];
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive&&!otherSide[i].abilityImmune){
        otherSide[i].atk=Math.max(1,otherSide[i].atk-debuff);
        otherSide[i].hp-=debuff;
        if(otherSide[i].hp<=0){otherSide[i].hp=0;otherSide[i].alive=false;log.push({cls:'kill',text:otherSide[i].name+' 디버프로 쓰러졌다!'});hibikiKills.push(otherSide[i]);}
      }
    }
    for(var i=0;i<hibikiKills.length;i++) triggerDeathrattle(hibikiKills[i],otherSide,mySide,log);
    log.push({cls:'soc',text:'[개전] '+u.name+': 적 전체 -'+debuff+'/-'+debuff});
  }
  else if(id==='makoto'){
    // 마코토 → 비행선으로 교체
    var allyCount=0;for(var i=0;i<mySide.length;i++)if(mySide[i].alive)allyCount++;
    var mult=u.isSkin?6:3;
    var as=makeToken('airship');
    as.atk=allyCount*mult;as.hp=allyCount*mult;as.alive=true;as.poisonImmune=false;
    as.isSkin=u.isSkin;as.school='게헨나';as.baseId='airship';
    as.makotoGolden=u.isSkin; // 비행선 DR에서 파마머리 마코토 소환 시 참조
    var idx=-1;for(var i=0;i<mySide.length;i++)if(mySide[i]===u){idx=i;break;}
    if(idx!==-1)mySide[idx]=as;
    log.push({cls:'soc',text:'[개전] '+u.name+': 비행선으로 교체! ('+as.atk+'/'+as.hp+', 자폭)'});
  }
  else if(id==='kasumi'){
    // 카스미 개전: 스킨 전용. 가장 체력이 높은 적을 이번 턴 공격 대상으로 예정
    if(!u.isSkin) return;
    var bestHp=0,bestTarget=null;
    for(var i=0;i<otherSide.length;i++){if(otherSide[i].alive&&otherSide[i].hp>bestHp){bestHp=otherSide[i].hp;bestTarget=otherSide[i];}}
    if(bestTarget){
      u._forcedTarget=bestTarget;
      log.push({cls:'soc',text:'[개전] '+u.name+': '+bestTarget.name+'(HP:'+bestTarget.hp+')을 노립니다!'});
    }
  }
  else if(id==='ibuki'){
    // 이부키 개전: 마코토/치아키/사츠키/이로하 +5/+5
    var ibukiTargets=['makoto','chiaki','satsuki','iroha'];
    var ibukiBuff=u.isSkin?10:5;var ibukiCount=0;
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&ibukiTargets.indexOf(mySide[i].baseId)!==-1){
        mySide[i].atk+=ibukiBuff;mySide[i].hp+=ibukiBuff;ibukiCount++;
      }
    }
    if(ibukiCount>0)log.push({cls:'soc',text:'[개전] '+u.name+': '+ibukiCount+'명에게 +'+ibukiBuff+'/+'+ibukiBuff+'!'});
    else log.push({cls:'soc',text:'[개전] '+u.name+': 대상 없음'});
  }
  else if(id==='iori'){
    // 이오리 개전: 스킨 전용. 공격력 +5
    if(!u.isSkin) return;
    u.atk+=5;
    log.push({cls:'soc',text:'[개전] '+u.name+': 공격력 +5! ('+u.atk+')'});
  }
  else if(id==='hanako'){
    // 하나코 개전: 스킨 전용. 체력 +5
    if(!u.isSkin) return;
    u.hp+=5;u.maxHp=(u.maxHp||u.hp)+5;
    log.push({cls:'soc',text:'[개전] '+u.name+': 체력 +5! ('+u.hp+')'});
  }
  else if(id==='pina'){
    // 피나 개전: 스킨 전용. 자신에게 +2/+2
    if(!u.isSkin) return;
    u.atk+=2;u.hp+=2;u.maxHp=(u.maxHp||u.hp)+2;
    log.push({cls:'soc',text:'[개전] '+u.name+': +2/+2! ('+u.atk+'/'+u.hp+')'});
  }
  else if(id==='akane'){
    // 아카네 개전: 네루/카린/아스나/아카네/토키에게 C4 뒤끝 부여
    var akaneTargets=['neru','karin','asuna','akane','toki'];
    var akaneCount=0;
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&akaneTargets.indexOf(mySide[i].baseId)!==-1){
        mySide[i]._akaneC4DR=true;mySide[i]._akaneC4Golden=u.isSkin;akaneCount++;
      }
    }
    if(akaneCount>0)log.push({cls:'soc',text:'[개전] '+u.name+': '+akaneCount+'명에게 C4 뒤끝 부여!'});
  }
  else if(id==='kaya'){
    // 맨 왼쪽 생존 아군을 쓰러뜨리고 스탯 흡수 (황금: x2)
    var target=null;
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i]!==u){target=mySide[i];break;}}
    if(target){
      var mult=u.isSkin?2:1;
      var gainAtk=target.atk*mult,gainHp=target.hp*mult;
      target.alive=false;target._killedBy=u;
      u.atk+=gainAtk;u.hp+=gainHp;
      log.push({cls:'soc',text:'[개전] '+u.name+': '+target.name+'을(를) 흡수! +'+gainAtk+'/+'+gainHp});
      triggerDeathrattle(target,mySide,otherSide,log);
    }
  }
  // ===== 7성 히든 개전 =====
  else if(id==='gehenna_traingun'){
    // 열차포: 상대 전체에 6 저격 데미지 × (1+생존전투수)
    var repeat=1+(u._battlesSurvived||0);
    for(var r=0;r<repeat;r++){
      var trainKills=[];
      for(var i=0;i<otherSide.length;i++){
        if(otherSide[i].alive&&!otherSide[i].abilityImmune){
          otherSide[i].hp-=6;
          if(otherSide[i].hp<=0){otherSide[i].hp=0;otherSide[i].alive=false;trainKills.push(otherSide[i]);}
        }
      }
      for(var i=0;i<trainKills.length;i++) triggerDeathrattle(trainKills[i],otherSide,mySide,log);
    }
    log.push({cls:'soc',text:'[개전] '+u.name+': 상대 전체 6 데미지 ×'+repeat+'!'});
  }
  else if(id==='trinity_nagisa'){
    // 나기사: 마리(아이돌)/사쿠라코(아이돌)/미네(아이돌)에게 +10/+10
    var targets=['mari','sakurako','mine'];
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].isSkin&&targets.indexOf(mySide[i].baseId)!==-1){
        mySide[i].atk+=10;mySide[i].hp+=10;
        log.push({cls:'soc',text:'[개전] '+u.name+': '+mySide[i].name+' +10/+10!'});
      }
    }
  }
  else if(id==='millennium_nameless'){
    // 왕녀: 자신 파괴 → atk+hp 순차 데미지 (보호막 무시, 체력에 직접)
    var totalDmg=u.atk+u.hp;
    u.alive=false;
    log.push({cls:'soc',text:'[개전] '+u.name+': 자신을 파괴! '+totalDmg+' 순차 데미지! (보호막 무시)'});
    var alive=[];for(var i=0;i<otherSide.length;i++)if(otherSide[i].alive)alive.push(otherSide[i]);
    var remaining=totalDmg;
    for(var i=0;i<alive.length&&remaining>0;i++){
      var enemy=alive[i];
      if(enemy.abilityImmune) continue;
      // 보호막 무시: 체력에 직접 데미지
      if(enemy.hp<=remaining){
        remaining-=enemy.hp;enemy.hp=0;enemy.alive=false;
        log.push({cls:'kill',text:enemy.name+'은(는) 쓰러졌다! (남은: '+remaining+')'});
        triggerDeathrattle(enemy,otherSide,mySide,log);
      } else {
        enemy.hp-=remaining;
        log.push({cls:'hit',text:enemy.name+'에게 '+remaining+' 피해! (HP:'+enemy.hp+')'});
        remaining=0;
      }
    }
  }
  else if(id==='hkyk_kuzunoha'){
    // 쿠즈노하: 적 독사굴 제거 + 영구 차단 플래그 + 아군 백귀야행 독사굴 부여
    G.kuzunohaActive=true;
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive&&hasKw(otherSide[i],'poison')){
        otherSide[i].kw.splice(otherSide[i].kw.indexOf('poison'),1);
      }
    }
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].school==='백귀야행') addKw(mySide[i],'poison');
    }
    log.push({cls:'soc',text:'[개전] '+u.name+': 적 독사굴 영구 차단! 아군 백귀야행 전체 독사굴!'});
  }
  else if(id==='millennium_death_momoi'){
    // 데스 모모이 개전: 적 전체 도발 삭제
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive&&hasKw(otherSide[i],'taunt')){
        otherSide[i].kw.splice(otherSide[i].kw.indexOf('taunt'),1);
      }
    }
    log.push({cls:'soc',text:'[개전] '+u.name+': 적 전체 도발 삭제!'});
  }
  // ===== 신규 7성 개전 =====
  else if(id==='gehenna_p68'){
    // 흥신소 68: 상대 배치 완전 역순 + 비도발 강제 타겟
    var aliveIdx=[];for(var i=0;i<otherSide.length;i++)if(otherSide[i].alive)aliveIdx.push(i);
    if(aliveIdx.length>1){
      var units=aliveIdx.map(function(idx){return otherSide[idx];});
      units.reverse();
      for(var i=0;i<aliveIdx.length;i++)otherSide[aliveIdx[i]]=units[i];
    }
    log.push({cls:'soc',text:'[개전] '+u.name+': 상대 배치 완전 역순!'});
    var nonTaunt=[];
    for(var i=0;i<otherSide.length;i++){if(otherSide[i].alive&&!hasKw(otherSide[i],'taunt'))nonTaunt.push(otherSide[i]);}
    if(nonTaunt.length>0){
      var pick=nonTaunt[Math.floor(Math.random()*nonTaunt.length)];
      u._forcedTarget=pick;
      log.push({cls:'soc',text:'[개전] '+u.name+': '+pick.name+'을(를) 강제 타겟!'});
    }
  }
  else if(id==='trinity_justice'){
    // 정의실현부: 공체 3배
    u.atk*=3;u.hp*=3;
    log.push({cls:'soc',text:'[개전] '+u.name+': 공격력/체력 3배! ('+u.atk+'/'+u.hp+')'});
  }
  else if(id==='millennium_seminar'){
    // 밀레니엄 세미나: 상대 능력 수집 → 삭제 → 공체 뒤집기 → 능력 복사
    var basicKws=['taunt','shield','reborn','invincible','windfury','cleave','poison','pierce','ranged','selfdestruct'];
    var collectedBasic=[];
    var collectedSpecial=[];
    // 수집
    for(var i=0;i<otherSide.length;i++){
      var e=otherSide[i];if(!e.alive)continue;
      // 기본 키워드 수집
      for(var k=0;k<e.kw.length;k++){
        if(basicKws.indexOf(e.kw[k])!==-1&&collectedBasic.indexOf(e.kw[k])===-1) collectedBasic.push(e.kw[k]);
      }
      // 특수능력 수집
      var eid=e.baseId;
      if(SOC_IDS[eid]&&collectedSpecial.indexOf(eid+'_soc')===-1) collectedSpecial.push({baseId:eid,type:'soc'});
      if(BC_IDS[eid]&&collectedSpecial.indexOf(eid+'_bc')===-1) collectedSpecial.push({baseId:eid,type:'bc'});
      if(DR_IDS[eid]&&collectedSpecial.indexOf(eid+'_dr')===-1) collectedSpecial.push({baseId:eid,type:'dr'});
      if(SURV_IDS[eid]&&collectedSpecial.indexOf(eid+'_surv')===-1) collectedSpecial.push({baseId:eid,type:'surv'});
      if(PRE_IDS[eid]&&collectedSpecial.indexOf(eid+'_pre')===-1) collectedSpecial.push({baseId:eid,type:'pre'});
      if(PASSIVE_IDS[eid]&&collectedSpecial.indexOf(eid+'_passive')===-1) collectedSpecial.push({baseId:eid,type:'passive'});
    }
    // 상대 전체 능력 삭제 (인라인)
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive){
        var _t=otherSide[i],_rm=[],_kp=[];
        for(var _k=0;_k<_t.kw.length;_k++){if(_t.kw[_k]==='preemptive')_kp.push(_t.kw[_k]);else _rm.push(KW_LABELS[_t.kw[_k]]||_t.kw[_k]);}
        _t.kw=_kp;_t._abilitiesStripped=true;
        if(_rm.length>0)log.push({cls:'kill',text:'[개전] 세미나: '+_t.name+'의 능력 삭제: '+_rm.join(', ')});
      }
    }
    // 상대 전체 공/체 뒤집기
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive){
        var tmpA=otherSide[i].atk;otherSide[i].atk=otherSide[i].hp;otherSide[i].hp=tmpA;
        log.push({cls:'soc',text:'[개전] 세미나: '+otherSide[i].name+' 공/체 뒤집기 → '+otherSide[i].atk+'/'+otherSide[i].hp});
      }
    }
    // 기본능력 복사 (최대 3개)
    var shuffledBasic=collectedBasic.sort(function(){return Math.random()-0.5;});
    var copyBasicCount=Math.min(3,shuffledBasic.length);
    for(var i=0;i<copyBasicCount;i++){
      addKw(u,shuffledBasic[i]);
      log.push({cls:'soc',text:'[개전] 세미나: 기본능력 복사 → '+(KW_LABELS[shuffledBasic[i]]||shuffledBasic[i])});
    }
    // 특수능력 복사 (최대 3개)
    var shuffledSpecial=collectedSpecial.sort(function(){return Math.random()-0.5;});
    var copySpecialCount=Math.min(3,shuffledSpecial.length);
    u._copiedAbilities=[];
    for(var i=0;i<copySpecialCount;i++){
      u._copiedAbilities.push(shuffledSpecial[i]);
      var _spName=(findAnyChar(shuffledSpecial[i].baseId)||{}).name||shuffledSpecial[i].baseId;
      var _spType={soc:'개전',dr:'뒤끝',surv:'버티기',pre:'선제',bc:'첫인사',passive:'패시브'}[shuffledSpecial[i].type]||shuffledSpecial[i].type;
      log.push({cls:'soc',text:'[개전] 세미나: 특수능력 복사 → '+_spName+' ('+_spType+')'});
    }
    // 복사된 개전 즉시 발동
    for(var i=0;i<u._copiedAbilities.length;i++){
      var ca=u._copiedAbilities[i];
      if(ca.type==='soc'){
        var proxy={baseId:ca.baseId,name:u.name,atk:u.atk,hp:u.hp,kw:u.kw,alive:u.alive,isSkin:u.isSkin,school:u.school,sid:u.sid,_mySide:u._mySide,_forcedTarget:u._forcedTarget,_copiedAbilities:null};
        triggerSOC(proxy,mySide,otherSide,log);
        u.atk=proxy.atk;u.hp=proxy.hp;u._forcedTarget=proxy._forcedTarget;
      }
    }
    log.push({cls:'soc',text:'[개전] '+u.name+': 상대 능력 삭제+공체 뒤집기+능력 복사!'});
  }
}

// 리오 개전용: 전투 시 첫인사 효과 (임시 버프, 전투 후 원복)
// 린 패시브: BC가 추가로 발동
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
      var atkB=1,hpB=u.isSkin?1:0;
      for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=atkB;if(hpB>0)mySide[i].hp+=hpB;}}
      log.push({cls:'soc',text:'  → '+u.name+': 아군 전체 공격력 +'+atkB+(_lr>0?' (추가발동)':'')});
    }
    else if(id==='tsukuyo'){
      var buff=u.isSkin?2:1;
      for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=buff;mySide[i].hp+=buff;}}
      log.push({cls:'soc',text:'  → '+u.name+': 아군 전체 +'+buff+'/+'+buff+(_lr>0?' (추가발동)':'')});
    }
    else if(id==='tsubaki'){
      var buff=u.isSkin?4:2;
      for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i].school==='백귀야행'){mySide[i].atk+=buff;mySide[i].hp+=buff;}}
      log.push({cls:'soc',text:'  → '+u.name+': 백귀야행 +'+buff+'/+'+buff+(_lr>0?' (추가발동)':'')});
    }
    else if(id==='michiru'){
      // 미치루: 다른 백귀야행 BC 연쇄 발동 (미치루 제외)
      var mRepeat=u.isSkin?2:1;
      for(var mr=0;mr<mRepeat;mr++){
        for(var i=0;i<mySide.length;i++){
          if(mySide[i].alive&&mySide[i].baseId!=='michiru'&&mySide[i].school==='백귀야행'&&BC_IDS[mySide[i].baseId]){
            triggerSOC_battlecry_inner(mySide[i],mySide,log);
          }
        }
      }
      log.push({cls:'soc',text:'  → '+u.name+': 백귀야행 BC 연쇄!'+(_lr>0?' (추가발동)':'')});
    }
  }
}
// 미치루 연쇄용 내부 함수 (시즈코/린 증폭 없이 1회)
function triggerSOC_battlecry_inner(u, mySide, log){
  var id=u.baseId;
  if(id==='izuna'){var atkB=1,hpB=u.isSkin?1:0;for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=atkB;if(hpB>0)mySide[i].hp+=hpB;}}log.push({cls:'soc',text:'    → '+u.name+': 아군 전체 공격력 +'+atkB+' (연쇄)'});}
  else if(id==='tsukuyo'){var buff=u.isSkin?2:1;for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=buff;mySide[i].hp+=buff;}}log.push({cls:'soc',text:'    → '+u.name+': 아군 전체 +'+buff+'/+'+buff+' (연쇄)'});}
  else if(id==='tsubaki'){var buff=u.isSkin?4:2;for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i].school==='백귀야행'){mySide[i].atk+=buff;mySide[i].hp+=buff;}}log.push({cls:'soc',text:'    → '+u.name+': 백귀야행 +'+buff+'/+'+buff+' (연쇄)'});}
}

function resolveStartOfCombat(a, b, log) {
  var aFirst=(a.length>b.length)?true:(b.length>a.length)?false:(Math.random()<0.5);
  function processSide(side, other){
    // 쿠즈노하: 모든 개전보다 먼저 발동 — 자신+적1번 제외 전원 효과삭제+처치
    for(var i=0;i<side.length;i++){
      if(side[i].alive&&side[i].baseId==='hkyk_kuzunoha'){
        log.push({cls:'soc',text:'[개전] '+side[i].name+': 깨달음의 일격!'});
        // 아군: 쿠즈노하 제외 전원 처치
        for(var j=0;j<side.length;j++){
          if(j!==i&&side[j].alive){
            stripAbilities(side[j],log);
            side[j].hp=0;side[j].alive=false;
            log.push({cls:'kill',text:side[j].name+'은(는) 쓰러졌다!'});
          }
        }
        // 적군: 1번(인덱스 0) 제외 전원 처치
        var firstEnemy=true;
        for(var j=0;j<other.length;j++){
          if(other[j].alive){
            if(firstEnemy){firstEnemy=false;continue;} // 1번 살림
            stripAbilities(other[j],log);
            other[j].hp=0;other[j].alive=false;
            log.push({cls:'kill',text:other[j].name+'은(는) 쓰러졌다!'});
          }
        }
        break;
      }
    }
    // 리오: 다른 모든 개전보다 먼저 발동 (학교 통일)
    for(var i=0;i<side.length;i++){
      if(side[i].alive&&side[i].baseId==='rio') triggerSOC(side[i],side,other,log);
    }
    // 사쿠라코: 트리니티 개전 추가 횟수 합산 (일반 +1, 황금 +2, 중첩 가능)
    var trinityRepeat=1;
    for(var i=0;i<side.length;i++){
      if(side[i].alive&&side[i].baseId==='sakurako'){
        var extra=side[i].isSkin?2:1;
        trinityRepeat+=extra;
        log.push({cls:'soc',text:'[개전] '+side[i].name+': 트리니티 개전 +'+extra+'회!'});
      }
    }
    for(var i=0;i<side.length;i++){
      if(!side[i].alive||!SOC_IDS[side[i].baseId]||side[i].baseId==='sakurako'||side[i].baseId==='kaya'||side[i].baseId==='tsurugi'||side[i].baseId==='rio'||side[i].baseId==='hkyk_kuzunoha') continue;
      var repeat=(side[i].school==='트리니티')?trinityRepeat:1;
      for(var r=0;r<repeat;r++) triggerSOC(side[i],side,other,log);
    }
    // 츠루기: 다른 개전 효과를 모두 받은 후 마지막에 발동 (카야 제외)
    for(var i=0;i<side.length;i++){
      if(side[i].alive&&side[i].baseId==='tsurugi') triggerSOC(side[i],side,other,log);
    }
    // 카야는 개전 중 가장 마지막에 발동
    for(var i=0;i<side.length;i++){
      if(side[i].alive&&side[i].baseId==='kaya') triggerSOC(side[i],side,other,log);
    }
  }
  if(aFirst){processSide(a,b);processSide(b,a);}
  else{processSide(b,a);processSide(a,b);}
  // 개전 완료 후 7성 히든 캐릭터 대사 출력
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
  // 백화요란 계승전 대사: 버프 받은 나구사가 아군에 있을 때
  function outputShowdownQuote(side,isEnemy){
    if(!_G.hiddenCardsEverOwned||!_G.hiddenCardsEverOwned['hkyk_showdown']) return;
    var hasKeiseisen=false;
    for(var i=0;i<side.length;i++){if(side[i].alive&&side[i].baseId==='nagusa'){hasKeiseisen=true;break;}}
    if(hasKeiseisen&&!quotedBids['hkyk_showdown']){
      quotedBids['hkyk_showdown']=true;
      var cls=isEnemy?'chat chat-fatal':'chat';
      log.push({cls:cls,text:'나구사: 백 가지 꽃이 함께 만발하는 그 순간을 기다리며.'});
      log.push({cls:cls,text:'나구사: ……너에게 계승전을 신청한다.'});
    }
  }
  // 적에 7성 카드 존재 시 빨간 경고
  if(b.some(function(u){return u.isHidden;}))
    log.push({cls:'chat chat-fatal',text:'⚠ 적 편에 7성 카드가 있습니다!'});
  if(aFirst){outputQuotes(a,false);outputShowdownQuote(a,false);outputQuotes(b,true);outputShowdownQuote(b,true);}
  else{outputQuotes(b,true);outputShowdownQuote(b,true);outputQuotes(a,false);outputShowdownQuote(a,false);}
}

// 뒤끝 트리거
function countAlive(side){var c=0;for(var i=0;i<side.length;i++)if(side[i].alive)c++;return c;}

function triggerDeathrattle(unit, mySide, otherSide, log) {
  var id=unit.baseId;
  // 팬짱 사망 카운터 (주리 뒤끝용)
  if(id==='panchan') mySide._panchanDeaths=(mySide._panchanDeaths||0)+1;
  // 토라마루(이로하 변신)는 baseId가 'iroha'지만 토라마루 DR이 있음
  if(unit.irohaRef) id='toramaru';
  // 아카네 C4 부여 뒤끝
  if(unit._akaneC4DR&&!unit._abilitiesStripped&&!G.permanentAbilityBan){
    var c4Count=unit._akaneC4Golden?2:1;
    for(var _c4=0;_c4<c4Count;_c4++){
      if(countAlive(mySide)<BATTLE_MAX){
        var c4tk=makeToken('c4');c4tk.alive=true;c4tk.poisonImmune=false;c4tk._mySide=mySide;
        mySide.push(c4tk);
        log.push({cls:'soc',text:'[뒤끝] '+unit.name+': C4 소환! ('+c4tk.atk+'/'+c4tk.hp+')'});
      }
    }
  }
  // 나구사 패시브: 자신을 쓰러뜨린 상대를 쓰러뜨림
  if(id==='trinity_nagisa'&&unit._killedBy){
    var killer=unit._killedBy;
    if(killer.alive&&!killer.abilityImmune){
      killer.hp=0;killer.alive=false;
      log.push({cls:'kill',text:'[패시브] '+unit.name+': '+killer.name+'을(를) 쓰러뜨렸다!'});
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
  // 세미나 복사 DR 실행
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
    // 주리 뒤끝: 다른 아군이 남아 있다면 팬짱 소환
    var allyCount=0;
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i]!==unit)allyCount++;}
    if(allyCount>0){
      var pcCount=unit.isSkin?2:1;
      var bonus=mySide._panchanDeaths||0;
      for(var pc_i=0;pc_i<pcCount;pc_i++){
        if(countAlive(mySide)>=BATTLE_MAX) break;
        var pc={id:'panchan_'+Math.random().toString(36).substr(2,4),baseId:'panchan',isToken:true,
          name:'팬짱',school:G.rioSchool||'게헨나',tier:1,atk:1+bonus,hp:1+bonus,kw:[],img:'token/panchan.png',isSkin:false,alive:true,poisonImmune:false};
        pc._mySide=mySide;
        mySide.push(pc);
        log.push({cls:'soc',text:'[뒤끝] '+unit.name+' → 팬짱 소환! ('+pc.atk+'/'+pc.hp+')'});
      }
    } else {
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 다른 아군이 없어 팬짱을 부르지 못했다!'});
    }
  }
  else if(id==='chinatsu'){
    // 아군 무작위 1인에게 보호막 부여 (황금: 2인) — 학교 제한 해제
    var count=unit.isSkin?2:1;
    var candidates=[];
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&!hasKw(mySide[i],'shield'))candidates.push(mySide[i]);}
    candidates.sort(function(){return Math.random()-0.5;});
    for(var i=0;i<Math.min(count,candidates.length);i++){
      addKw(candidates[i],'shield');
      log.push({cls:'shield',text:'[뒤끝] '+unit.name+': '+candidates[i].name+'에게 보호막 부여!'});
    }
  }
  else if(id==='kasumi'||id==='nagusa'){
    // 카스미/나구사를 죽인 상대를 쓰러뜨림
    if(unit._killedBy){
      var killer=unit._killedBy;
      if(killer.alive&&!killer.abilityImmune){
        killer.hp=0;killer.alive=false;
        log.push({cls:'kill',text:'[뒤끝] '+unit.name+': '+killer.name+'을(를) 쓰러뜨렸다!'});
        triggerDeathrattle(killer,otherSide,mySide,log);
      }
    }
  }
  else if(id==='ako'){
    var buff=unit.isSkin?10:5;
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i].school==='게헨나'){mySide[i].atk+=buff;mySide[i].hp+=buff;}}
    // '이번 전투 동안' 지속 버프 등록 — 전투 중 새로 등장하는 게헨나 학생에게도 적용
    G.battleSchoolBuff['게헨나']=(G.battleSchoolBuff['게헨나']||0)+buff;
    log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 아군 게헨나 +'+buff+'/+'+buff});
  }
  else if(id==='kazusa'){
    if(countAlive(mySide)>=BATTLE_MAX) return;
    var atk=unit.isSkin?2:1,hp2=unit.isSkin?2:1;
    var cp={id:'cp_'+Math.random().toString(36).substr(2,4),baseId:'cathpalug',isToken:true,
      name:'카스팔루스',school:G.rioSchool||'트리니티',tier:6,atk:atk,hp:hp2,kw:['poison'],img:'token/CathPalug.png',isSkin:false,alive:true,poisonImmune:false};
    mySide.push(cp);
    log.push({cls:'soc',text:'[뒤끝] 카스팔루스 소환! ('+atk+'/'+hp2+', 독사굴)'});
  }
  else if(id==='hifumi'){
    if(countAlive(mySide)>=BATTLE_MAX) return;
    var pAtk=unit.isSkin?4:2,pHp=unit.isSkin?2:1;
    var pero={id:'pero_'+Math.random().toString(36).substr(2,4),baseId:'perorosama',isToken:true,
      name:'페로로님',school:G.rioSchool||'트리니티',tier:3,atk:pAtk,hp:pHp,kw:[],img:'token/perorosama.png',isSkin:false,alive:true,poisonImmune:false,
      peroKillToHifumi:true,srcGolden:unit.isSkin};
    mySide.push(pero);
    log.push({cls:'soc',text:'[뒤끝] 페로로님 소환! ('+pAtk+'/'+pHp+')'});
  }
  else if(id==='azusa'){
    var debuff=unit.isSkin?4:2;
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive&&!otherSide[i].abilityImmune){
        otherSide[i].atk=Math.max(1,otherSide[i].atk-debuff);
        otherSide[i].hp-=debuff;
      }
    }
    log.push({cls:'kill',text:'[뒤끝] '+unit.name+': 적 전체 -'+debuff+'/-'+debuff});
    // 디버프로 사망 즉시 처리 + 죽메 발동
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].hp<=0&&otherSide[i].alive){
        otherSide[i].alive=false;
        log.push({cls:'kill',text:otherSide[i].name+' 디버프로 쓰러졌다!'});
        triggerDeathrattle(otherSide[i],otherSide,mySide,log);
      }
    }
  }
  else if(id==='toramaru'){
    // 이로하 소환 (irohaRef 기반, 1회만 — 린 추가발동 무시)
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
        log.push({cls:'soc',text:'[뒤끝] 토라마루: '+newIroha.name+' 소환!'});
      }
    }
  }
  else if(id==='junko'){
    // 뒤끝: 쓰러질 때 당고 소환 (황금: 2개)
    var count=unit.isSkin?2:1;
    for(var c=0;c<count;c++){
      if(countAlive(mySide)>=BATTLE_MAX) break;
      var dg={id:'dango_'+Math.random().toString(36).substr(2,4),baseId:'dango',isToken:true,
        name:'당고',school:G.rioSchool||'게헨나',tier:1,atk:1,hp:1,kw:[],img:'token/Dango.png',isSkin:false,alive:true,poisonImmune:false};
      mySide.push(dg);
    }
    log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 당고 '+count+'개 소환!'});
  }
  else if(id==='satsuki'){
    // 자신을 죽인 상대를 빼앗기 (1턴, 황금: 2턴)
    if(unit._killedBy&&unit._killedBy.alive){
      var killer=unit._killedBy;
      var turns=unit.isSkin?2:1;
      // 적 진영에서 제거
      var kIdx=-1;for(var i=0;i<otherSide.length;i++)if(otherSide[i]===killer){kIdx=i;break;}
      if(kIdx!==-1){
        otherSide.splice(kIdx,1);
        killer._stolenTurns=turns;
        killer._stolenFrom=otherSide;
        mySide.push(killer);
        log.push({cls:'soc',text:'[뒤끝] '+unit.name+': '+killer.name+'을(를) '+turns+'턴간 빼앗았다!'});
      }
    }
  }
  else if(id==='yuzu'){
    // 이번 전투 쓰러진 아군 수 x2(스킨x4)의 아방가르드군 소환
    var deadCount=0;
    for(var i=0;i<mySide.length;i++)if(!mySide[i].alive)deadCount++;
    deadCount++; // 유즈 자신도 포함
    var mult=unit.isSkin?4:2;
    var agAtk=deadCount*mult,agHp=deadCount*mult;
    if(countAlive(mySide)<BATTLE_MAX){
      var ag={id:'ag_'+Math.random().toString(36).substr(2,4),baseId:'avant_garde',isToken:true,
        name:'아방가르드군',school:G.rioSchool||'밀레니엄',tier:3,atk:agAtk,hp:agHp,kw:[],img:'token/Avant_garde.png',isSkin:false,alive:true,poisonImmune:false};
      ag._mySide=mySide;
      applyEimiBonus(ag,mySide);
      mySide.push(ag);
      G.millenniumTokenSummons=(G.millenniumTokenSummons||0)+1;
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': '+ag.name+' 소환! ('+ag.atk+'/'+ag.hp+')'});
    }
  }
  else if(id==='airship'){
    // 비행선 자폭 후 파마머리 마코토 소환
    if(countAlive(mySide)<BATTLE_MAX){
      var mk={id:'mk_'+Math.random().toString(36).substr(2,4),baseId:'makoto_perma',isToken:true,
        name:'파마머리 마코토',school:G.rioSchool||'게헨나',tier:6,atk:6,hp:6,kw:[],img:'token/Makoto_(perma).png',isSkin:false,alive:true,poisonImmune:false};
      if(unit.makotoGolden){mk.atk=12;mk.hp=12;}
      if(G.battleSchoolBuff&&G.battleSchoolBuff[mk.school]){var mbuff=G.battleSchoolBuff[mk.school];mk.atk+=mbuff;mk.hp+=mbuff;}
      mk._mySide=mySide;
      mySide.push(mk);
      log.push({cls:'soc',text:'[뒤끝] 비행선 자폭! 파마머리 마코토 소환! ('+mk.atk+'/'+mk.hp+')'});
    }
  }
  // ===== 7성 히든 뒤끝 =====
  else if(id==='gehenna_prefect'){
    // 게헨나 선도부 DR: 영구 소멸 + 마지막 히나(10/10, 광역+독사굴) 소환
    unit._permanentlyDestroyed=true;
    log.push({cls:'kill',text:'[뒤끝] '+unit.name+': 이번 게임에서 완전히 사라집니다!'});
    if(countAlive(mySide)<BATTLE_MAX){
      var hina=makeToken('hina_the_last');
      hina.alive=true;hina.poisonImmune=false;hina.isToken=true;hina._mySide=mySide;
      mySide.push(hina);
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': <마지막 히나> 소환! ('+hina.atk+'/'+hina.hp+', 광역+독사굴)'});
    }
  }
  else if(id==='gehenna_pandemonium'){
    // 만마전 DR: 상대 무작위 2인을 2턴간 빼앗기 + 황금 비행선/토라마루 소환
    var stealCandidates=[];
    for(var i=0;i<otherSide.length;i++)if(otherSide[i].alive)stealCandidates.push(i);
    stealCandidates.sort(function(){return Math.random()-0.5;});
    var stealCount=Math.min(2,stealCandidates.length);
    for(var s=0;s<stealCount;s++){
      var sIdx=stealCandidates[s];
      var stolen=otherSide[sIdx];
      // 인덱스 보정: 이전에 splice했으면 인덱스가 밀림 → 직접 참조
      var kIdx2=-1;for(var j=0;j<otherSide.length;j++)if(otherSide[j]===stolen){kIdx2=j;break;}
      if(kIdx2!==-1){
        otherSide.splice(kIdx2,1);
        stolen._stolenTurns=2;stolen._stolenFrom=otherSide;
        mySide.push(stolen);
        log.push({cls:'soc',text:'[뒤끝] '+unit.name+': '+stolen.name+'을(를) 2턴간 빼앗았다!'});
      }
    }
    // 황금 비행선(도발) + 황금 토라마루(도발) 소환
    if(countAlive(mySide)<BATTLE_MAX){
      var gAirship=makeToken('airship');gAirship.atk=14;gAirship.hp=14;gAirship.isSkin=true;gAirship.isToken=false;addKw(gAirship,'taunt');gAirship.alive=true;gAirship._mySide=mySide;
      mySide.push(gAirship);
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 황금 비행선(14/14, 도발) 소환!'});
    }
    if(countAlive(mySide)<BATTLE_MAX){
      var gTora=makeToken('toramaru');gTora.atk=10;gTora.hp=2;gTora.isSkin=true;gTora.isToken=false;addKw(gTora,'taunt');gTora.alive=true;gTora._mySide=mySide;
      mySide.push(gTora);
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 황금 토라마루(10/2, 도발) 소환!'});
    }
  }
  else if(id==='gehenna_traingun'){
    // 열차포: 게임에서 완전히 사라짐 (killUnit에서 _permanentlyDestroyed 설정됨)
    log.push({cls:'kill',text:'[뒤끝] '+unit.name+': 이번 게임에서 완전히 사라집니다!'});
  }
  else if(id==='trinity_seia'){
    // 세이아: 게임에서 완전히 사라짐 (killUnit에서 처리됨)
    log.push({cls:'kill',text:'[뒤끝] '+unit.name+': 이번 게임에서 완전히 사라집니다!'});
  }
  // ===== 백귀야행 뒤끝 =====
  else if(id==='hovercraft'){
    // 호버크래프트 DR: 아군 와카모가 모두 쓰러진 상태라면 와카모 소환
    var wakamoAlive=false;
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i].baseId==='wakamo'){wakamoAlive=true;break;}}
    if(!wakamoAlive&&countAlive(mySide)<BATTLE_MAX){
      var wkTmpl=null;for(var i=0;i<CHARS.length;i++)if(CHARS[i].id==='wakamo'){wkTmpl=CHARS[i];break;}
      if(wkTmpl){
        var isGold=unit._wakamoGolden||unit.isSkin;
        var wk={id:'wk_'+Math.random().toString(36).substr(2,4),baseId:'wakamo',
          name:isGold?wkTmpl.skin:wkTmpl.name,school:'백귀야행',tier:6,
          atk:isGold?wkTmpl.atk*2+1:wkTmpl.atk,hp:isGold?wkTmpl.hp*2+1:wkTmpl.hp,
          kw:(wkTmpl.kw||[]).slice(),isSkin:isGold,img:isGold?wkTmpl.imgGold:wkTmpl.img,
          alive:true,poisonImmune:false,_mySide:mySide,_hovercraftCounter:0};
        mySide.push(wk);
        log.push({cls:'soc',text:'[뒤끝] 호버크래프트: '+wk.name+' 소환! ('+wk.atk+'/'+wk.hp+')'});
      }
    }
  }
  else if(id==='millennium_cc'){
    // C&C 뒤끝: 아비 에슈흐 소환
    if(countAlive(mySide)<BATTLE_MAX){
      var tierLvl=G.players[0].tier||1;
      var ae=makeToken('abi_eshuh');ae.atk=tierLvl*2;ae.hp=tierLvl*2;
      ae.alive=true;ae.poisonImmune=false;ae._mySide=mySide;
      applyEimiBonus(ae,mySide);
      mySide.push(ae);
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 아비 에슈흐 소환! ('+ae.atk+'/'+ae.hp+')'});
    }
  }
}

// 말쿠트 헬퍼 (전역)
function hasMalkuthOnSide(side){
  for(var i=0;i<side.length;i++)if(side[i].alive&&side[i].baseId==='millennium_malkuth')return true;
  return false;
}
function makeSweeper(){
  var sw=makeToken('sweeper');
  sw.alive=true;sw.poisonImmune=false;sw.isToken=true;sw.baseId='sweeper';
  return sw;
}

function runBattle(boardA, boardB, startWithA, opts) {
  var _G=(opts&&opts.simCtx)||G;
  _G.permanentAbilityBan=false;
  _G.battleSchoolBuff={};
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
      noAttack:(m.baseId==='gehenna_traingun'||m.baseId==='trinity_seia'),
      abilityImmune:(m.baseId==='trinity_mika'),
      _battlesSurvived:m._battlesSurvived||0,
      _keiseisenCounter:m._keiseisenCounter||0,
      _hovercraftCounter:m._hovercraftCounter||0,
      isHidden:m.isHidden||false,coinOff:m.coinOff||false};
  }
  var a=boardA.map(copyUnit);
  var b=boardB.map(copyUnit);
  a._panchanDeaths=(opts&&opts.panchanDeathsA)||0;
  b._panchanDeaths=(opts&&opts.panchanDeathsB)||0;
  // 사이드 참조 설정 (세이아 무적 등에 필요)
  for(var _si=0;_si<a.length;_si++) a[_si]._mySide=a;
  for(var _si=0;_si<b.length;_si++) b[_si]._mySide=b;
  // 쿠즈노하 영구 차단: 이전 게임에서 쿠즈노하가 발동했으면 b(적)의 독사굴 제거
  if(_G.kuzunohaActive){
    for(var _kz=0;_kz<b.length;_kz++){var _pi=b[_kz].kw.indexOf('poison');if(_pi!==-1)b[_kz].kw.splice(_pi,1);}
  }
  var log=[];
  var steps=[];
  var turnA=(startWithA!==undefined?startWithA:true);
  var idxA=0,idxB=0;
  var maxRounds=200;

  function snapshot(){
    function snapUnit(u){var bid=u.baseId||'';return{id:u.id,name:u.name,baseId:bid,atk:u.atk,hp:u.hp,kw:u.kw.slice(),img:u.img,isSkin:u.isSkin,tier:u.tier,school:u.school||'',alive:u.alive,stripped:!!u._abilitiesStripped,coinOff:u.coinOff||false,_akaneC4DR:u._akaneC4DR||false,_akaneC4Golden:u._akaneC4Golden||false,irohaRef:u.irohaRef||null,_copiedAbilities:u._copiedAbilities||null,_keiseisenCounter:(_G.keiseisenCounters&&_G.keiseisenCounters[bid])||0,_hovercraftCounter:u._hovercraftCounter||0,isHidden:u.isHidden||false,noAttack:u.noAttack||false,abilityImmune:u.abilityImmune||false,_battlesSurvived:u._battlesSurvived||0};}
    return{a:a.map(snapUnit),b:b.map(snapUnit)};
  }
  function getAlive(side){return side.filter(function(m){return m.alive;});}
  function findTarget(defenders){
    var alive=getAlive(defenders);if(alive.length===0)return null;
    var taunts=alive.filter(function(m){return hasKw(m,'taunt');});
    if(taunts.length>0)return taunts[Math.floor(Math.random()*taunts.length)];
    return alive[Math.floor(Math.random()*alive.length)];
  }

  function killUnit(unit,myArr,oppArr,log2,killedBy){
    // 미카: 능력/효과에 의한 사망 면역 (killedBy가 없거나 능력 사망인 경우)
    if(unit.abilityImmune&&killedBy&&killedBy._isAbilityKill){
      log2.push({cls:'shield',text:unit.name+': 미카의 면역!'});
      unit.hp=1;return;
    }
    if(hasKw(unit,'reborn')){
      unit.kw.splice(unit.kw.indexOf('reborn'),1);
      // 레이사 마법소녀: 최대 체력으로 부활
      unit.hp=(unit.isSkin&&unit.baseId==='reisa')?(unit.maxHp||1):1;
      var shIdx=unit.kw.indexOf('shield');if(shIdx!==-1)unit.kw.splice(shIdx,1);
      log2.push({cls:'shield',text:unit.name+'이(가) 부활했다! (HP:'+unit.hp+')'});
      // 카즈사 밴드: 부활해도 DR 발동 (한 게임에 카스팔루스 2기 소환)
      if(unit.baseId==='kazusa') triggerDeathrattle(unit,myArr,oppArr,log2);
    } else {
      unit.alive=false;
      if(killedBy) unit._killedBy=killedBy;
      // 하스미 패시브: 첫 처치 공/체 흡수
      var hasumiMax=killedBy&&killedBy.isSkin?2:1;
      if(killedBy&&killedBy.baseId==='hasumi'&&(killedBy._hasumiAbsorbed||0)<hasumiMax){
        killedBy._hasumiAbsorbed=(killedBy._hasumiAbsorbed||0)+1;
        killedBy.atk+=unit.atk;killedBy.hp+=unit.hp;killedBy.maxHp=killedBy.hp;
        log2.push({cls:'soc',text:'[패시브] '+killedBy.name+': '+unit.name+' 흡수! +'+unit.atk+'/+'+unit.hp});
      }
      // 정의실현부 패시브: 처음 쓰러뜨린 적 공/체 ×2 흡수
      if(killedBy&&killedBy.baseId==='trinity_justice'&&!killedBy._justiceAbsorbed){
        killedBy._justiceAbsorbed=true;
        var gainAtk=unit.atk*2,gainHp=unit.hp*2;
        killedBy.atk+=gainAtk;killedBy.hp+=gainHp;
        log2.push({cls:'soc',text:'[패시브] '+killedBy.name+': '+unit.name+' 처치! +'+gainAtk+'/+'+gainHp+' 흡수!'});
      }
      // 아리스 사망 추적
      if(unit.baseId==='arisu') _G.arisuDeathCount=(_G.arisuDeathCount||0)+1;
      // 세이아 사망 페널티: 아군 전체 능력 영구 삭제
      if(unit.baseId==='trinity_seia'){
        _G.permanentAbilityBan=true;
        for(var _se=0;_se<myArr.length;_se++){
          if(myArr[_se].alive) stripAbilities(myArr[_se],log2);
        }
        log2.push({cls:'kill',text:'세이아 사망! 모든 아군 능력이 삭제됩니다!'});
        unit._permanentlyDestroyed=true;
      }
      // 열차포 영구 소멸
      if(unit.baseId==='gehenna_traingun') unit._permanentlyDestroyed=true;
      log2.push({cls:'kill',text:unit.name+'은(는) 쓰러졌다!'});
      triggerDeathrattle(unit,myArr,oppArr,log2);
    }
  }

  function dealHit(src,dst,log2,dmgOverride,isCombatDefense){
    var dmg=dmgOverride!==undefined?dmgOverride:src.atk;
    // 하루카 추적: 무츠키/카요코/아루를 공격한 유닛 마킹
    if(['mutsuki','kayoko','aru'].indexOf(dst.baseId)!==-1) src._attackedHarukaAlly=true;
    // invincible 키워드 (일반 무적)
    if(hasKw(dst,'invincible')){
      log2.push({cls:'shield',text:dst.name+': 무적! 데미지 무효'});
      return {blocked:true,overflow:0};
    }
    // 세이아 예지: 방어 시 전투 데미지만 무효 (능력/효과 데미지는 통과)
    if(isCombatDefense&&dst.school==='트리니티'&&dst._mySide&&dst.baseId!=='trinity_seia'){
      for(var _sv=0;_sv<dst._mySide.length;_sv++){
        if(dst._mySide[_sv].alive&&dst._mySide[_sv].baseId==='trinity_seia'&&dst._mySide[_sv]!==dst){
          log2.push({cls:'shield',text:dst.name+': 세이아의 예지로 회피했다!'});
          return {blocked:true,overflow:0};
        }
      }
    }
    // 스즈미 패시브: 자신을 공격한 적 atk 0으로 (1~2회 공격 동안)
    if(dst.baseId==='suzumi'&&dst.alive&&!dst._abilitiesStripped&&!_G.permanentAbilityBan&&src!==dst){
      var suzTurns=dst.isSkin?2:1;
      if(!src._suzumiDebuff||src._suzumiDebuff<=0){
        src._suzumiOrigAtk=src.atk;src._suzumiDebuff=suzTurns;src.atk=0;
        log2.push({cls:'soc',text:'[패시브] '+dst.name+': '+src.name+' 공격력 0! ('+suzTurns+'회)'});
      }
    }
    if(hasKw(dst,'shield')){
      dst.kw.splice(dst.kw.indexOf('shield'),1);
      log2.push({cls:'shield',text:dst.name+'의 보호막이 깨졌다!'});
      return {blocked:true,overflow:0};
    } else {
      var hpBefore=dst.hp;
      dst.hp-=dmg;
      log2.push({cls:'hit',text:src.name+'가 '+dst.name+'에게 '+dmg+' 피해! (HP:'+Math.max(0,dst.hp)+')'});
      if(hasKw(src,'poison')&&dmg>=1&&dst.hp>0&&!dst.poisonImmune&&!dst.abilityImmune){
        dst.hp=0;
        log2.push({cls:'kill',text:src.name+'의 독사굴! '+dst.name+' 즉사!'});
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
      // 페로로님이 킬 → 히후미로 교체 (자신이 죽어도 발동)
      var tmpl=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id==='hifumi'){tmpl=CHARS[j];break;}
      if(tmpl){
        var hif={id:'hif_'+Math.random().toString(36).substr(2,4),baseId:'hifumi',isToken:false,
          name:attacker.srcGolden?tmpl.skin:tmpl.name,school:'트리니티',tier:3,
          atk:attacker.srcGolden?tmpl.atk*2+1:tmpl.atk,hp:attacker.srcGolden?tmpl.hp*2+1:tmpl.hp,
          kw:[],img:attacker.srcGolden?tmpl.imgGold:tmpl.img,isSkin:attacker.srcGolden||false,alive:true,poisonImmune:false};
        // 페로로님 자리에 히후미 교체
        var idx=atkArr.indexOf(attacker);
        if(idx!==-1){atkArr[idx]=hif;attacker.alive=false;}
        else{atkArr.push(hif);}
        log2.push({cls:'soc',text:'[페로로님] 적을 쓰러뜨렸다! → '+hif.name+'(으)로 교체!'});
      }
    }
  }
  // 버티기 트리거: 맞았는데 안 죽었을 때 (피격당할 때마다 체크)
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
      applyEimiBonus(ae,side);
      side.push(ae);
      _G.millenniumTokenSummons=(_G.millenniumTokenSummons||0)+1;
      log2.push({cls:'soc',text:'[버티기] '+unit.name+': '+ae.name+' 소환! ('+ae.atk+'/'+ae.hp+')'});
      surviveEffects.push({type:'summon',token:ae.baseId,isSkin:unit.isSkin});
    }
    else if(unit.baseId==='neru'){
      var pool=['taunt','shield','poison','reborn','cleave','pierce','ranged','windfury','selfdestruct','preemptive'];
      var available=pool.filter(function(k){return !hasKw(unit,k);});
      if(available.length===0) return;
      var times=unit.isSkin?2:1;
      for(var t=0;t<times;t++){
        available=pool.filter(function(k){return !hasKw(unit,k);});
        if(available.length===0) break;
        var pick=available[Math.floor(Math.random()*available.length)];
        addKw(unit,pick);
        log2.push({cls:'soc',text:'[버티기] '+unit.name+': '+(KW_LABELS[pick]||pick)+' 획득!'});
        surviveEffects.push({type:'keyword',baseId:'neru',kw:pick});
      }
    }
    else if(unit.baseId==='mimori'){
      // 미모리 버티기: 상대 전체 공격력 -1 (황금 -2)
      var debuff=unit.isSkin?2:1;
      var oppSide=(side===a)?b:a;
      for(var i=0;i<oppSide.length;i++){
        if(oppSide[i].alive) oppSide[i].atk=Math.max(0,oppSide[i].atk-debuff);
      }
      log2.push({cls:'soc',text:'[버티기] '+unit.name+': 상대 전체 공격력 -'+debuff});
      surviveEffects.push({type:'debuff',baseId:'mimori',amount:debuff});
    }
    else if(unit.baseId==='noa'&&hitBy){
      // 상대의 키워드를 복사
      var copied=[];
      for(var i=0;i<hitBy.kw.length;i++){
        var kk=hitBy.kw[i];
        if(!hasKw(unit,kk)){addKw(unit,kk);copied.push(KW_LABELS[kk]||kk);}
      }
      if(copied.length>0){
        log2.push({cls:'soc',text:'[버티기] '+unit.name+': '+hitBy.name+'의 능력 복사! ('+copied.join(', ')+')'});
        // 유우카가 있으면 유우카에게도 부여 (황금: 밀레니엄 전체)
        var targets=[];
        if(unit.isSkin){
          for(var i=0;i<side.length;i++){if(side[i].alive&&side[i].school==='밀레니엄'&&side[i]!==unit)targets.push(side[i]);}
        } else {
          for(var i=0;i<side.length;i++){if(side[i].alive&&side[i].baseId==='yuuka')targets.push(side[i]);}
        }
        for(var t=0;t<targets.length;t++){
          var tc=[];
          for(var j=0;j<hitBy.kw.length;j++){
            var kk2=hitBy.kw[j];
            if(!hasKw(targets[t],kk2)){addKw(targets[t],kk2);tc.push(KW_LABELS[kk2]||kk2);}
          }
          if(tc.length>0) log2.push({cls:'soc',text:'  → '+targets[t].name+'에게도 부여: '+tc.join(', ')});
        }
        surviveEffects.push({type:'keyword',baseId:'noa',kw:copied.join(',')});
      }
    }
    // 세미나 복사 SURV 실행
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
    // 키워드 전부 제거 (선제 제외)
    var removed=[];
    var keepKw=[];
    for(var i=0;i<target.kw.length;i++){
      if(target.kw[i]==='preemptive') keepKw.push(target.kw[i]);
      else removed.push(KW_LABELS[target.kw[i]]||target.kw[i]);
    }
    target.kw=keepKw;
    // 뒤끝·개전 등 능력 등록 무효화
    target._abilitiesStripped=true;
    if(removed.length>0) log2.push({cls:'kill',text:'[선제] '+target.name+'의 능력 삭제: '+removed.join(', ')});
  }

  function triggerPreemptive(attacker,target,defArr,atkArr,log2){
    var hasCopiedPre=attacker._copiedAbilities&&attacker._copiedAbilities.some(function(c){return c.type==='pre';});
    if(!hasKw(attacker,'preemptive')&&!PRE_IDS[attacker.baseId]&&!hasCopiedPre) return false;
    if(_G.permanentAbilityBan) return false;
    // ===== 선제 능력 (PRE_IDS) =====
    if(attacker.baseId==='aru'){
      var tTier=target.tier||0;
      var origAtk=attacker.atk;var newAtk=origAtk;
      if(tTier>=5) newAtk=origAtk*2;
      else if(tTier>=1&&tTier<=2) newAtk=Math.max(1,Math.floor(origAtk/2));
      if(newAtk!==origAtk){
        attacker._aruOrigAtk=origAtk;attacker.atk=newAtk;
        log2.push({cls:'soc',text:'[선제] '+attacker.name+': T'+tTier+' 대상 → 공격력 '+origAtk+'→'+newAtk});
      }
      return false;
    }
    if(attacker.baseId==='koyuki'){
      if(!target._koyukiSwapped){
        var oldAtk=target.atk,oldHp=target.hp;
        target.atk=oldHp;target.hp=oldAtk;target._koyukiSwapped=true;
        log2.push({cls:'soc',text:'[선제] '+attacker.name+': '+target.name+' 공/체 교환! ('+oldAtk+'/'+oldHp+'→'+target.atk+'/'+target.hp+')'});
      }
      // 파자마 코유키: 추가로 상대 무작위 능력 하나 삭제
      if(attacker.isSkin&&target.kw&&target.kw.length>0){
        var rmIdx=Math.floor(Math.random()*target.kw.length);
        var rmKw=target.kw.splice(rmIdx,1)[0];
        log2.push({cls:'kill',text:'[선제] '+attacker.name+': '+target.name+'의 '+(KW_LABELS[rmKw]||rmKw)+' 제거!'});
      }
      return false;
    }
    if(attacker.baseId==='koharu'){
      var chance=attacker.isSkin?0.2:0.1;
      if(Math.random()<chance){
        stripAbilities(target,log2);
        target.alive=false;target._killedBy=attacker;
        log2.push({cls:'kill',text:'[선제] '+attacker.name+': '+target.name+' 사형 집행! 즉사!'});
        resolveDeath(target,defArr,atkArr,log2,attacker);
        return true;
      }
      return false;
    }
    if(attacker.baseId==='trinity_mika'){
      // 미카 선제: 상대가 게헨나 출신이면 공격력 2배
      if(target.school==='게헨나'||(target.isToken&&target.school==='게헨나')){
        var origAtk=attacker.atk;
        attacker._mikaOrigAtk=origAtk;
        attacker.atk=origAtk*2;
        log2.push({cls:'soc',text:'[선제] '+attacker.name+': 게헨나 상대 → 공격력 2배! ('+origAtk+'→'+attacker.atk+')'});
      }
      return false;
    }
    if(attacker.baseId==='ui'){
      stripAbilities(target,log2);
      // 황금(수영복 우이): 타겟 왼쪽 또는 오른쪽 1인도 능력 삭제
      if(attacker.isSkin){
        var tIdx=-1;for(var _ui=0;_ui<defArr.length;_ui++)if(defArr[_ui]===target){tIdx=_ui;break;}
        if(tIdx!==-1){
          var adj=null;
          // 왼쪽 또는 오른쪽 중 살아있는 쪽
          var left=null,right=null;
          for(var _ui=tIdx-1;_ui>=0;_ui--){if(defArr[_ui].alive){left=defArr[_ui];break;}}
          for(var _ui=tIdx+1;_ui<defArr.length;_ui++){if(defArr[_ui].alive){right=defArr[_ui];break;}}
          if(left&&right) adj=Math.random()<0.5?left:right;
          else adj=left||right;
          if(adj) stripAbilities(adj,log2);
        }
      }
    }
    else if(attacker.baseId==='utaha'){
      // 천둥이 소환 후 별도 스텝으로 공격 (황금: 두 번)
      var thunderCount=attacker.isSkin?2:1;
      var teAtkSide=(atkArr===a)?'a':'b';
      var teDefSide=(atkArr===a)?'b':'a';
      for(var _tc=0;_tc<thunderCount;_tc++){
        if(!target.alive) break;
        var te;
        te=makeToken('thunder_e');te.atk=8;te.hp=2;te.alive=true;te.poisonImmune=false;te.isToken=true;te.baseId='thunder_e';te._mySide=atkArr;
        applyEimiBonus(te,atkArr);
        atkArr.push(te);
        _G.millenniumTokenSummons=(_G.millenniumTokenSummons||0)+1;
        var teLog=[];
        teLog.push({cls:'soc',text:'[선제] '+attacker.name+': '+te.name+' 소환! ('+te.atk+'/'+te.hp+')'});
        if(hasKw(te,'selfdestruct')){
          var sdDmg2=te.atk+te.hp;
          var teHit=dealHit(te,target,teLog,sdDmg2);
          checkSurvive(target,defArr,teLog,te);
          resolveDeath(target,defArr,atkArr,teLog,te);
          te.alive=false;
        } else {
          var thHit=dealHit(te,target,teLog);
          checkSurvive(target,defArr,teLog,te);
          var thCounter=dealHit(target,te,teLog);
          checkSurvive(te,atkArr,teLog,target);
          resolveDeath(target,defArr,atkArr,teLog,te);
          resolveDeath(te,atkArr,defArr,teLog,target);
        }
        if(!target.alive){
          teLog.push({cls:'soc',text:'[선제] '+te.name+'이(가) 쓰러뜨렸다! '+attacker.name+'는 공격하지 않습니다.'});
        }
        for(var tl=0;tl<teLog.length;tl++) log.push(teLog[tl]);
        steps.push({atkSide:teAtkSide,atkIdx:atkArr.indexOf(te),defSide:teDefSide,defIdx:defArr.indexOf(target),atkId:te.id,defId:target.id,log:teLog,snap:snapshot()});
      }
      if(!target.alive) return true;
    }
    // 계승전 카운터: 유카리, 렌게, 키쿄 (아군만 카운트)
    else if(attacker.baseId==='yukari'||attacker.baseId==='renge'||attacker.baseId==='kikyou'){
      if(attacker._mySide===a){
        var kAdd=attacker.isSkin?2:1;
        if(!_G.keiseisenCounters) _G.keiseisenCounters={};
        _G.keiseisenCounters[attacker.baseId]=Math.min(7,(_G.keiseisenCounters[attacker.baseId]||0)+kAdd);
        log2.push({cls:'soc',text:'[선제] '+attacker.name+': 계승전 +'+kAdd+' (현재: '+_G.keiseisenCounters[attacker.baseId]+')'});
      }
    }
    // 쿠즈노하 선제: 공격 대상의 모든 효과(키워드) 삭제
    else if(attacker.baseId==='hkyk_kuzunoha'){
      if(target.kw&&target.kw.length>0){
        var removed=target.kw.map(function(k){return KW_LABELS[k]||k;}).join(', ');
        target.kw=[];
        log2.push({cls:'kill',text:'[선제] '+attacker.name+': '+target.name+'의 모든 효과 삭제! ('+removed+')'});
      }
      stripAbilities(target,log2);
    }
    // 나구사: 선제 루프에서 처리
    else if(attacker.baseId==='nagusa'){}
    // 와카모: 선제 킬 후에 처리
    else if(attacker.baseId==='wakamo'){}
    else if(attacker.baseId==='millennium_malkuth'){
      // 말쿠트 선제: 아군 밀레니엄 학생 수만큼 스위퍼 소환 후 순차 공격
      var milCount=0;
      for(var _mc=0;_mc<atkArr.length;_mc++){if(atkArr[_mc].alive&&atkArr[_mc].school==='밀레니엄'&&atkArr[_mc]!==attacker)milCount++;}
      milCount=Math.max(1,milCount); // 최소 1체
      for(var sw=0;sw<milCount;sw++){
        if(!target.alive) break;
        var swp=makeSweeper();swp._mySide=atkArr;swp.alive=true;
        atkArr.push(swp);
        _G.millenniumTokenSummons=(_G.millenniumTokenSummons||0)+1;
        log2.push({cls:'soc',text:'[선제] '+attacker.name+': 스위퍼 소환! ('+swp.atk+'/'+swp.hp+', 보호막)'});
        // 스위퍼 자폭 공격 (보호막 있어도 자폭 후 사라짐)
        var swDmg=swp.atk+swp.hp;
        var swHit=dealHit(swp,target,log2,swDmg);
        if(!swHit.blocked) checkSurvive(target,defArr,log2,swp);
        resolveDeath(target,defArr,atkArr,log2,swp);
        swp.alive=false; // 자폭
      }
      // 말쿠트는 직접 공격하지 않음 — 항상 스킵
      return true;
    }
    else if(attacker.baseId==='millennium_death_momoi'){
      // 데스 모모이 선제: 적 부여 수치 초기화
      var baseTmpl=findAnyChar(target.baseId);
      if(baseTmpl){
        var baseAtk=target.isSkin?(baseTmpl.atk*2+1):baseTmpl.atk;
        var baseHp=target.isSkin?(baseTmpl.hp*2+1):baseTmpl.hp;
        if(target.atk>baseAtk||target.hp>baseHp){
          var oldAtk=target.atk,oldHp=target.hp;
          target.atk=baseAtk;target.hp=Math.min(target.hp,baseHp);
          log2.push({cls:'kill',text:'[선제] '+attacker.name+': '+target.name+' 부여 수치 제거! ('+oldAtk+'/'+oldHp+' → '+target.atk+'/'+target.hp+')'});
        }
      }
    }
    // 세미나 복사 PRE 실행
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

  // 치세 패시브: 공격당하면 상대 능력 무작위 제거
  function checkChisePassive(attacker,defender,log2){
    if(defender.baseId!=='chise'||!defender.alive||defender.hp<=0) return;
    if(defender._abilitiesStripped||_G.permanentAbilityBan) return;
    var count=defender.isSkin?2:1;
    var removable=[];
    for(var i=0;i<(attacker.kw||[]).length;i++){
      if(attacker.kw[i]!=='preemptive') removable.push(attacker.kw[i]);
    }
    if(DR_IDS[attacker.baseId]&&!attacker._abilitiesStripped) removable.push('_dr');
    if(BC_IDS[attacker.baseId]&&!attacker._abilitiesStripped) removable.push('_bc');
    if(SOC_IDS[attacker.baseId]&&!attacker._abilitiesStripped) removable.push('_soc');
    if(removable.length===0) return;
    removable.sort(function(){return Math.random()-0.5;});
    for(var c=0;c<Math.min(count,removable.length);c++){
      var pick=removable[c];
      if(pick==='_dr'||pick==='_bc'||pick==='_soc'){
        attacker._abilitiesStripped=true;
        log2.push({cls:'kill',text:'[치세] '+attacker.name+'의 능력이 제거됨!'});
      } else {
        var kwIdx=attacker.kw.indexOf(pick);
        if(kwIdx!==-1){attacker.kw.splice(kwIdx,1);log2.push({cls:'kill',text:'[치세] '+attacker.name+'의 '+(KW_LABELS[pick]||pick)+' 제거!'});}
      }
    }
  }

  function dealDamage(attacker,atkArr,defender,defArr,log2,isCleave,dmgOverride){
    var hitResult=dealHit(attacker,defender,log2,dmgOverride,true);
    // 방어자가 맞고 살아남았으면 버티기 체크
    checkSurvive(defender,defArr,log2,attacker);
    // 치세 패시브: 공격자 능력 제거
    if(!hitResult.blocked&&defender.alive) checkChisePassive(attacker,defender,log2);
    if(!isCleave&&!hasKw(attacker,'ranged')&&!hasKw(attacker,'selfdestruct')){
      var counterResult=dealHit(defender,attacker,log2);
      // 공격자가 반격 맞고 살아남았으면 버티기 체크
      checkSurvive(attacker,atkArr,log2,defender);
    }
    resolveDeath(defender,defArr,atkArr,log2,attacker);
    if(!isCleave&&!hasKw(attacker,'ranged')&&!hasKw(attacker,'selfdestruct'))resolveDeath(attacker,atkArr,defArr,log2,defender);
    peroCheck(attacker,defender,atkArr,log2);
    return hitResult;
  }

  // 버티기 효과 추적 (실제 보드 반영용)
  var surviveEffects=[];

  // 초기 스냅샷 (개전 전 상태)
  steps.push({atkSide:null,atkIdx:-1,defSide:null,defIdx:-1,log:[],snap:snapshot()});

  // 개전 페이즈 (skipSOC 시 건너뜀)
  if(!skipSOC){
    var socLog=[];
    resolveStartOfCombat(a,b,socLog);
    if(socLog.length>0){
      for(var i=0;i<socLog.length;i++)log.push(socLog[i]);
      steps.push({atkSide:null,atkIdx:-1,defSide:null,defIdx:-1,log:socLog,snap:snapshot()});
    }
  }

  // 공격 순서: 전체 배열에서 위치 포인터를 유지하고, 죽은 유닛은 건너뜀
  function findNextAttacker(arr, startPos){
    var len=arr.length;if(len===0)return{unit:null,pos:0};
    for(var i=0;i<len;i++){
      var idx=(startPos+i)%len;
      if(arr[idx].alive&&!arr[idx].noAttack&&arr[idx].atk>0)return{unit:arr[idx],pos:idx};
    }
    return{unit:null,pos:startPos};
  }

  for(var round=0;round<maxRounds;round++){
    var aliveA=getAlive(a),aliveB=getAlive(b);
    if(aliveA.length===0||aliveB.length===0)break;
    var atkArr2,defArr2;
    var nextAtk;
    if(coinSeq){
      // 전투 중 소환된 토큰 coinSeq에 추가 (테일즈 취급, 순서대로 뒤에 붙음)
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
      // 카스미 개전: 지정된 강제 타겟이 살아있으면 우선
      if(attacker._forcedTarget&&attacker._forcedTarget.alive){target=attacker._forcedTarget;attacker._forcedTarget=null;}
      else{target=findTarget(defArr2);}
      if(!target)break;
      var atkSide=turnA?'a':'b';
      var atkI=(atkSide==='a')?a.indexOf(attacker):b.indexOf(attacker);
      var defSide=turnA?'b':'a';
      var defI=(defSide==='a')?a.indexOf(target):b.indexOf(target);
      var stepLog=[];
      var stepMultiHits=0;
      // 선제 (우이: 능력삭제, 우타하: 천둥이)
      var skipMain=triggerPreemptive(attacker,target,defArr2,atkArr2,stepLog);

      if(!skipMain){
        // 선제 다회 공격 (하루카/히나타/나구사/와카모)
        if(['haruka','hinata','nagusa','wakamo'].indexOf(attacker.baseId)!==-1){
          var msMin,msMax,msHits;
          if(attacker.baseId==='haruka'){
            // 하루카: 무츠키/카요코/아루를 공격한 적 → 5회(황금:10회), 아니면 1~2회(황금:2~4회)
            if(target._attackedHarukaAlly){
              msHits=attacker.isSkin?10:5;
              stepLog.push({cls:'hit',text:'[선제] '+attacker.name+': 흥신소68 추적! '+msHits+'회 공격!'});
            }else{
              msMin=attacker.isSkin?2:1;msMax=attacker.isSkin?4:2;
              msHits=msMin+Math.floor(Math.random()*(msMax-msMin+1));
            }
          }else{
            msMin=attacker.isSkin?4:2;msMax=attacker.isSkin?10:5;
            msHits=msMin+Math.floor(Math.random()*(msMax-msMin+1));
          }
          stepMultiHits=msHits;
          stepLog.push({cls:'hit',text:attacker.name+'의 선제! '+msHits+'회 공격!'});
          var msKillCount=0;
          for(var ms=0;ms<msHits;ms++){
            if(!target.alive||target.hp<=0)break;
            var msHit=dealHit(attacker,target,stepLog,undefined,true);
            checkSurvive(target,defArr2,stepLog,attacker);
            // 나구사: 타격당 계승전 카운터 (아군만)
            if(attacker.baseId==='nagusa'&&!msHit.blocked&&attacker._mySide===a){
              var kAdd2=attacker.isSkin?2:1;
              if(!_G.keiseisenCounters) _G.keiseisenCounters={};
              _G.keiseisenCounters['nagusa']=Math.min(7,(_G.keiseisenCounters['nagusa']||0)+kAdd2);
            }
            // 와카모: 타격당 호버크래프트 카운터
            if(attacker.baseId==='wakamo'&&!msHit.blocked){
              var hcAdd=attacker.isSkin?2:1;
              attacker._hovercraftCounter=Math.min(4,(attacker._hovercraftCounter||0)+hcAdd);
              stepLog.push({cls:'soc',text:'[선제] '+attacker.name+': 호버크래프트 카운터 +'+hcAdd+' (현재: '+attacker._hovercraftCounter+')'});
              if(attacker._hovercraftCounter>=4){
                attacker._hovercraftCounter-=4;
                var hc=makeToken('hovercraft');
                hc.atk=attacker.isSkin?20:10;hc.hp=attacker.isSkin?20:10;
                hc.alive=true;hc.poisonImmune=false;hc._mySide=atkArr2;
                hc.isSkin=attacker.isSkin;hc._wakamoGolden=attacker.isSkin;
                if(countAlive(atkArr2)<BATTLE_MAX){atkArr2.push(hc);}
                stepLog.push({cls:'soc',text:'[패시브] '+attacker.name+': 호버크래프트 소환! ('+hc.atk+'/'+hc.hp+')'});
              }
            }
            if(target.hp<=0){msKillCount++;break;}
          }
          // 다회 공격 후 반격 1회
          if(target.alive){
            var msCounter=dealHit(target,attacker,stepLog);
            checkSurvive(attacker,atkArr2,stepLog,target);
          }
          resolveDeath(target,defArr2,atkArr2,stepLog,attacker);
          resolveDeath(attacker,atkArr2,defArr2,stepLog,target);
          peroCheck(attacker,target,atkArr2,stepLog);
        }
        // 자폭: 공+체 합산 공격 후 쓰러짐
        else if(hasKw(attacker,'selfdestruct')){
          var sdDmg=attacker.atk+attacker.hp;
          stepLog.push({cls:'hit',text:attacker.name+'의 자폭! ('+attacker.atk+'+'+attacker.hp+'='+sdDmg+' 데미지)'});
          var hitResult=dealDamage(attacker,atkArr2,target,defArr2,stepLog,false,sdDmg);
          // 자폭 유닛 강제 사망
          if(attacker.alive){
            killUnit(attacker,atkArr2,defArr2,stepLog,null);
          }
        }
        else {
          var hitResult=dealDamage(attacker,atkArr2,target,defArr2,stepLog,false);
          // 광역
          if(hasKw(attacker,'cleave')){
            var aliveD=getAlive(defArr2);var tIdx=-1;
            for(var k=0;k<aliveD.length;k++)if(aliveD[k]===target)tIdx=k;
            if(tIdx>0&&aliveD[tIdx-1])dealDamage(attacker,atkArr2,aliveD[tIdx-1],defArr2,stepLog,true);
            if(tIdx<aliveD.length-1&&aliveD[tIdx+1])dealDamage(attacker,atkArr2,aliveD[tIdx+1],defArr2,stepLog,true);
          }
          // 관통
          else if(hasKw(attacker,'pierce')&&!hitResult.blocked&&hitResult.overflow>0){
            // 세나: 초과 데미지로 아군 전체 회복
            if(attacker.baseId==='sena'&&!attacker._senaHealUsed){
              attacker._senaHealUsed=true;
              var healAmt=attacker.isSkin?hitResult.overflow*2:hitResult.overflow;
              stepLog.push({cls:'shield',text:attacker.name+'의 관통! 아군 전체 HP +'+healAmt+' 회복! (전투당 1회)'});
              for(var h=0;h<atkArr2.length;h++){if(atkArr2[h].alive)atkArr2[h].hp+=healAmt;}
            } else {
              // 아리스: 초과 데미지 양옆 전달
              var aliveD=getAlive(defArr2);var tIdx=-1;
              for(var k=0;k<aliveD.length;k++)if(aliveD[k]===target)tIdx=k;
              stepLog.push({cls:'hit',text:attacker.name+'의 관통! 초과 데미지 '+hitResult.overflow+'!'});
              if(tIdx>0&&aliveD[tIdx-1])dealDamage(attacker,atkArr2,aliveD[tIdx-1],defArr2,stepLog,true,hitResult.overflow);
              if(tIdx<aliveD.length-1&&aliveD[tIdx+1])dealDamage(attacker,atkArr2,aliveD[tIdx+1],defArr2,stepLog,true,hitResult.overflow);
            }
          }
        }
      }

      // 빼앗기 턴 카운트 (사츠키 DR로 빼앗긴 유닛)
      if(attacker._stolenTurns){
        attacker._stolenTurns--;
        if(attacker._stolenTurns<=0&&attacker.alive){
          var stIdx=atkArr2.indexOf(attacker);
          if(stIdx!==-1)atkArr2.splice(stIdx,1);
          if(attacker._stolenFrom)attacker._stolenFrom.push(attacker);
          delete attacker._stolenTurns;delete attacker._stolenFrom;
          stepLog.push({cls:'soc',text:attacker.name+'이(가) 원래 진영으로 돌아갔다!'});
        }
      }

      // 아루/미카 선제 공격력 복원
      if(attacker._aruOrigAtk!==undefined){attacker.atk=attacker._aruOrigAtk;delete attacker._aruOrigAtk;}
      if(attacker._mikaOrigAtk!==undefined){attacker.atk=attacker._mikaOrigAtk;delete attacker._mikaOrigAtk;}
      // 스즈미 debuff 턴 감소
      if(attacker._suzumiDebuff>0){
        attacker._suzumiDebuff--;
        if(attacker._suzumiDebuff<=0&&attacker._suzumiOrigAtk!==undefined){
          attacker.atk=attacker._suzumiOrigAtk;delete attacker._suzumiOrigAtk;delete attacker._suzumiDebuff;
        }
      }
      if(stepLog.length>0){
        for(var sl=0;sl<stepLog.length;sl++)log.push(stepLog[sl]);
        var stepObj={atkSide:atkSide,atkIdx:atkI,defSide:defSide,defIdx:defI,atkId:attacker.id,defId:target.id,log:stepLog,snap:snapshot()};
        if(stepMultiHits>0) stepObj.multiHits=stepMultiHits;
        steps.push(stepObj);
      }
      if(!attacker.alive)break;if(getAlive(defArr2).length===0)break;
    }
    // 다음 포인터: 현재 위치+1 (배열 끝이면 0으로 순환) — coinSeq 모드에선 coinQueuePtr이 이미 갱신됨
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

  // 보충수업부 패시브: 승리 시 생존해 있으면 상대 HP 즉사
  var makeupInstakill=false;
  if(result==='win'){
    for(var i=0;i<survivorsA.length;i++){
      if(survivorsA[i].baseId==='trinity_makeup'){makeupInstakill=true;break;}
    }
  }

  G.rioSchool=null;
  return{result:result,log:log,steps:steps,survivorsA:survivorsA,survivorsB:survivorsB,damage:damage,surviveEffects:surviveEffects,_sideA:a,_makeupInstakill:makeupInstakill,panchanDeathsA:a._panchanDeaths||0,panchanDeathsB:b._panchanDeaths||0};
}

function startBattle() {
  lastSold=null;
  _activeCoinOverlay=null;
  var p=G.players[0];
  var alive=[];for(var i=1;i<G.players.length;i++)if(!G.players[i].dead)alive.push(G.players[i]);
  if(alive.length===0)return;
  var opp=alive[Math.floor(Math.random()*alive.length)];

  var boardSnapshot=p.board.map(function(u){
    return{id:u.id,atk:u.atk,hp:u.hp,maxHp:u.maxHp,kw:(u.kw||[]).slice(),name:u.name};
  });

  // 선/후공 두 경우 미리 계산 (코인 결과에 따라 선택) — 글로벌 카운터는 resultC만 반영
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
  intro.innerHTML='<div class="battle-intro"><div class="vs-name">선생님 <span style="color:#a78bfa">(Lv.'+p.tier+')</span></div><div class="vs-text">VS</div><div class="vs-name">'+opp.name+' <span style="color:#a78bfa">(Lv.'+opp.tier+')</span></div></div>';

  setTimeout(function(){
    intro.innerHTML='';
    // 튜토리얼 중이면 전투 일시정지 — 튜토리얼 끝나면 재개
    if(G.isTutorial && TUT.active && TUT.step < TUTORIAL_STEPS.length) {
      var s=TUTORIAL_STEPS[TUT.step];
      if(s && s.bubbleMode==='battle') {
        // 전투 필드/로그 미리 보이게
        document.getElementById('battle-arena').style.display='';
        document.getElementById('battle-log').style.display='';
        // 재개 함수 저장 — 원래 흐름을 이어감
        var _savedThis = this;
        TUT.battleResumeFn = function() {
          // battle-arena/log 숨긴 상태에서 정상 흐름 재개
          startBattleAnimation(resultA,opp,resultB,_battleChosenCallback);
        };
        tutShowStep();
        return;
      }
    }
    // 개전 이후, 첫 공격 전에 코인 페이즈 삽입
    startBattleAnimation(resultA,opp,resultB,_battleChosenCallback);

    function _battleChosenCallback(chosen){
      // 주리 사망 카운터 플레이어에 반영
      p.panchanDeaths=chosen.panchanDeathsA||0;
      opp.panchanDeaths=chosen.panchanDeathsB||0;
      // 코인 무승부: 데미지 없이 넘어가기
      if(chosen.coinDraw){
        chosen.damageText='코인 무승부! 전투 없이 넘어갑니다.';
        _gBattleCounterSave=null;
        restoreBoardFromSnapshot(p,boardSnapshot);
        aiAutoBattles();
        return;
      }
      // 코인 결과로 선택된 전투 결과 처리
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
        chosen.damageText='패배! '+dmg+' 피해를 받았다 (스케쥴 '+opp.tier+' + 미니언 '+(chosen.damage)+')';
      } else if(chosen.result==='win'){
        if(chosen._makeupInstakill){
          opp.hp=0;
          chosen.damageText='승리! 보충수업부의 패시브: '+opp.name+'의 HP를 0으로!';
        } else {
          var dmg=0;for(var i=0;i<chosen.survivorsA.length;i++)dmg+=chosen.survivorsA[i].tier;
          dmg+=p.tier;if(dmg>dmgCap)dmg=dmgCap;opp.hp-=dmg;
          chosen.damageText='승리! '+opp.name+'에게 '+dmg+' 피해';
        }
        if(opp.hp<=0){opp.dead=true;G.aliveCount--;for(var k=0;k<opp.board.length;k++)returnToPool(opp.board[k].baseId,opp.board[k].isSkin?3:1);opp.board=[];chosen._eliminated=true;}
      } else {
        chosen.damageText='무승부!';
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
      }
      if(chosen._sideA){
        for(var _ci=0;_ci<chosen._sideA.length&&_ci<p.board.length;_ci++){
          if(chosen._sideA[_ci].baseId===p.board[_ci].baseId){
            if(chosen._sideA[_ci]._hovercraftCounter) p.board[_ci]._hovercraftCounter=chosen._sideA[_ci]._hovercraftCounter;
          }
        }
      }
      restoreBoardFromSnapshot(p,boardSnapshot);
      G.bunnyTossBonus=0; // 바니 토스 전투 후 리셋
      aiAutoBattles();
    }
  },1500);
}

function restoreBoardFromSnapshot(player, snapshot) {
  // 영구 소멸 카드 제거 (열차포, 세이아)
  player.board = player.board.filter(function(u){
    if(u._permanentlyDestroyed||u._permanentlyDestroyedId) return false;
    // 전투 결과에서 영구 소멸 표시된 baseId 체크
    return true;
  });
  // 토큰 제거 (전투 중 소환된 아비 에슈흐 등)
  player.board = player.board.filter(function(u){ return !u.isToken; });
  // 전투 전 스탯/키워드로 원복
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
    // AI 팬짱 카운터 추정: 주리 보유 시 전투당 팬짱 사망 추정 (스킨=2, 일반=1)
    for(var j=0;j<a2.board.length;j++){if(a2.board[j].baseId==='juri'){a2.panchanDeaths=(a2.panchanDeaths||0)+(a2.board[j].isSkin?2:1);break;}}
    for(var j=0;j<b2.board.length;j++){if(b2.board[j].baseId==='juri'){b2.panchanDeaths=(b2.panchanDeaths||0)+(b2.board[j].isSkin?2:1);break;}}
    if(Math.random()<strA/total){var dmg=a2.tier+Math.floor(Math.random()*4)+1;if(dmg>aiCap)dmg=aiCap;b2.hp-=dmg;b2.totalDamageTaken=(b2.totalDamageTaken||0)+dmg;if(b2.hp<=0){b2.dead=true;G.aliveCount--;for(var k=0;k<b2.board.length;k++)returnToPool(b2.board[k].baseId,b2.board[k].isSkin?3:1);b2.board=[];}}
    else{var dmg=b2.tier+Math.floor(Math.random()*4)+1;if(dmg>aiCap)dmg=aiCap;a2.hp-=dmg;a2.totalDamageTaken=(a2.totalDamageTaken||0)+dmg;if(a2.hp<=0){a2.dead=true;G.aliveCount--;for(var k=0;k<a2.board.length;k++)returnToPool(a2.board[k].baseId,a2.board[k].isSkin?3:1);a2.board=[];}}
  }
}

var battleState={skip:false,speed:600};
var _activeCoinOverlay=null;
var _gBattleCounterSave=null;
function saveGBattleCounters(){
  return{millenniumTokenSummons:G.millenniumTokenSummons||0,arisuDeathCount:G.arisuDeathCount||0,
    permanentAbilityBan:!!G.permanentAbilityBan,
    keiseisenCounters:JSON.parse(JSON.stringify(G.keiseisenCounters||{}))};
}
function restoreGBattleCounters(s){
  G.millenniumTokenSummons=s.millenniumTokenSummons;G.arisuDeathCount=s.arisuDeathCount;
  G.permanentAbilityBan=s.permanentAbilityBan;G.keiseisenCounters=s.keiseisenCounters;
}
var BCOIN_BASE='img/Icon/';
var BCOIN_SG='img/UI/sunglasses.png';
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
  // 가장 왼쪽 앞면 위치 (정규화: 시각적 위치 기준)
  var firstHeadA=-1,firstHeadB=-1;
  for(var i=0;i<nA;i++){if(cr['a'+i]){firstHeadA=i;break;}}
  for(var i=0;i<nB;i++){if(cr['b'+i]){firstHeadB=i;break;}}

  // 정규화 위치 비교: (index+0.5)/total → 크로스곱으로 정수 비교
  // posA = (firstHeadA+0.5)*nB, posB = (firstHeadB+0.5)*nA
  var tied=false;
  if(firstHeadA===-1&&firstHeadB===-1){
    tied=true; // 둘 다 앞면 없음
  } else if(firstHeadA===-1){
    eFirst=true; // B만 앞면 → 적 선공
  } else if(firstHeadB===-1){
    eFirst=false; // A만 앞면 → 아군 선공
  } else {
    var posA=(firstHeadA*2+1)*nB; // (firstHeadA+0.5)*nB*2
    var posB=(firstHeadB*2+1)*nA; // (firstHeadB+0.5)*nA*2
    if(posA===posB) tied=true;
    else if(posA<posB) eFirst=false; // 아군이 더 왼쪽 → 아군 선공
    else eFirst=true; // 적이 더 왼쪽 → 적 선공
  }
  if(eFirst===undefined)eFirst=Math.random()<0.5;

  var starOrder=[],circOrder=[];
  var n=Math.max(nA,nB);
  for(var i=0;i<n;i++){
    var e='b'+i,a='a'+i;
    if(eFirst){if(i<nB&&cr[e])starOrder.push(e);if(i<nA&&cr[a])starOrder.push(a);}
    else{if(i<nA&&cr[a])starOrder.push(a);if(i<nB&&cr[e])starOrder.push(e);}
  }
  for(var i=0;i<n;i++){
    var e='b'+i,a='a'+i;
    if(eFirst){if(i<nB&&!cr[e])circOrder.push(e);if(i<nA&&!cr[a])circOrder.push(a);}
    else{if(i<nA&&!cr[a])circOrder.push(a);if(i<nB&&!cr[e])circOrder.push(e);}
  }
  return{order:starOrder.concat(circOrder),eFirst:eFirst,tied:tied};
}

function buildCoinSeqForBattle(boardA,boardB,coinA,coinB,eFirst){
  // coinA[i]/coinB[i] = true(heads)/false(tails)/undefined(dead unit)
  var headsSeq=[],tailsSeq=[];
  var n=Math.max(boardA.length,boardB.length);
  for(var i=0;i<n;i++){
    var aAlive=i<boardA.length&&boardA[i].alive;
    var bAlive=i<boardB.length&&boardB[i].alive;
    if(eFirst){
      if(bAlive&&coinB[i]===true)headsSeq.push({side:'b',pos:i});
      if(aAlive&&coinA[i]===true)headsSeq.push({side:'a',pos:i});
    }else{
      if(aAlive&&coinA[i]===true)headsSeq.push({side:'a',pos:i});
      if(bAlive&&coinB[i]===true)headsSeq.push({side:'b',pos:i});
    }
  }
  for(var i=0;i<n;i++){
    var aAlive=i<boardA.length&&boardA[i].alive;
    var bAlive=i<boardB.length&&boardB[i].alive;
    if(eFirst){
      if(bAlive&&coinB[i]===false)tailsSeq.push({side:'b',pos:i});
      if(aAlive&&coinA[i]===false)tailsSeq.push({side:'a',pos:i});
    }else{
      if(aAlive&&coinA[i]===false)tailsSeq.push({side:'a',pos:i});
      if(bAlive&&coinB[i]===false)tailsSeq.push({side:'b',pos:i});
    }
  }
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
  // snap에서 살아있는 유닛만 필터 → DOM 카드와 인덱스 일치시킴
  var aliveSnapA=[];for(var j=0;j<snap.a.length;j++)if(snap.a[j].alive)aliveSnapA.push(snap.a[j]);
  var aliveSnapB=[];for(var j=0;j<snap.b.length;j++)if(snap.b[j].alive)aliveSnapB.push(snap.b[j]);
  for(var j=0;j<aliveAlly.length;j++){aliveAlly[j].sid='a'+j;aliveAlly[j].baseId=aliveSnapA[j]?aliveSnapA[j].baseId:'';}
  for(var j=0;j<aliveEnemy.length;j++){aliveEnemy[j].sid='b'+j;aliveEnemy[j].baseId=aliveSnapB[j]?aliveSnapB[j].baseId:'';}

  // snap에서 coinOff 정보 가져오기 (alive 필터된 인덱스 기준)
  var coinOffMap={};
  for(var j=0;j<aliveSnapA.length;j++)if(aliveSnapA[j].coinOff)coinOffMap['a'+j]=true;

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
    if(attempt===1){injectCoinsOnce();startAllSpins();}
    else{restartSpins();}

    setTimeout(function(){
      var cr={};
      var _btBonus=G.bunnyTossBonus||0;
      for(var j=0;j<aliveEnemy.length;j++)cr[aliveEnemy[j].sid]=Math.random()<0.5;
      for(var j=0;j<aliveAlly.length;j++){var _u=aliveAlly[j];var _isAsuna=(_u.baseId==='asuna'||_u.baseId==='millennium_cc');cr[_u.sid]=coinOffMap[_u.sid]?false:(_isAsuna?true:Math.random()<(0.5+_btBonus));}
      // 버니걸 아스나 스킨: 자신 제외 맨 왼쪽 아군도 코인토스 성공
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
        if(logEl3){var amsg=document.createElement('div');amsg.style.cssText='text-align:center;color:#fbbf24;font-weight:700;font-size:13px;padding:4px';amsg.textContent='⭐ 아스나가 행운의 코인토스를 굴렸다!';logEl3.appendChild(amsg);logEl3.scrollTop=logEl3.scrollHeight;}
      }

      setTimeout(function(){
        var calcResult=bCalcTurnOrder(cr,nA,nB);
        var order=calcResult.order;var eFirst=calcResult.eFirst;

        // 아스나 우선권: 동률 시 아군에 아스나가 있으면 아군 선공
        if(calcResult.tied){
          var _hasAsuna=aliveAlly.some(function(u){return u.baseId==='asuna'||u.baseId==='millennium_cc';});
          if(_hasAsuna){calcResult.tied=false;eFirst=false;calcResult.eFirst=false;
            var logEl2=document.getElementById('battle-log');
            if(logEl2){var asunaMsg=document.createElement('div');asunaMsg.style.cssText='text-align:center;color:#fbbf24;font-weight:700;font-size:13px;padding:2px';asunaMsg.textContent='⭐ 아스나의 우선권!';logEl2.appendChild(asunaMsg);logEl2.scrollTop=logEl2.scrollHeight;}
          }
        }
        // 동률 감지 → 재토스 또는 무승부
        if(calcResult.tied&&attempt<MAX_COIN_ATTEMPTS){
          // 동률 표시 후 재토스
          var logEl=document.getElementById('battle-log');
          if(logEl){var tieMsg=document.createElement('div');tieMsg.style.cssText='text-align:center;color:#f0c060;font-weight:700;font-size:14px;padding:4px';tieMsg.textContent='⚡ 동률! 재토스 ('+attempt+'/'+MAX_COIN_ATTEMPTS+')';logEl.appendChild(tieMsg);logEl.scrollTop=logEl.scrollHeight;}
          setTimeout(function(){doToss();},1200);
          return;
        }
        if(calcResult.tied&&attempt>=MAX_COIN_ATTEMPTS){
          // 3회 동률 → 무승부
          var logEl=document.getElementById('battle-log');
          if(logEl){var drawMsg=document.createElement('div');drawMsg.style.cssText='text-align:center;color:#ff6b6b;font-weight:900;font-size:16px;padding:6px';drawMsg.textContent='💫 3연속 동률! 무승부!';logEl.appendChild(drawMsg);logEl.scrollTop=logEl.scrollHeight;}
          _activeCoinOverlay=null;
          setTimeout(function(){callback('draw',{cr:cr,nA:nA,nB:nB,eFirst:eFirst,coinDraw:true});},1500);
          return;
        }

        // 정상 결과 처리
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

        // _activeCoinOverlay 저장 (renderBattleSnap마다 재주입용)
        var _origTotal=aliveAlly.length+aliveEnemy.length;
        var aliveAIds=[],aliveBIds=[];
        for(var _q=0;_q<snap.a.length;_q++)if(snap.a[_q].alive)aliveAIds.push(snap.a[_q].id);
        for(var _q=0;_q<snap.b.length;_q++)if(snap.b[_q].alive)aliveBIds.push(snap.b[_q].id);
        _activeCoinOverlay={
          allyCoins:aliveAlly.map(function(c,ci){var idx=order.indexOf(c.sid);return{uid:aliveAIds[ci]||'',isHeads:cr[c.sid],turnNum:idx+1,isFirst:idx===0,coinOff:!!coinOffMap[c.sid]};}),
          enemyCoins:aliveEnemy.map(function(c,ci){var idx=order.indexOf(c.sid);return{uid:aliveBIds[ci]||'',isHeads:cr[c.sid],turnNum:idx+1,isFirst:idx===0};}),
          tokenCoinMap:{},nextTokenNum:_origTotal+1
        };

        // 선글라스 1초 유지 후 페이드
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
  intro.innerHTML='<div class="battle-intro"><div class="vs-name">선생님 <span style="color:#a78bfa">(Lv.'+player.tier+')</span></div><div class="vs-text">VS</div><div class="vs-name">'+opp.name+' <span style="color:#a78bfa">(Lv.'+opp.tier+')</span></div></div>';
  setTimeout(function(){intro.innerHTML='';startBattleAnimation(result,opp);},1500);
}

function startBattleAnimation(result,opp,altResult,onCoinResult) {
  document.getElementById('battle-arena').style.display='block';
  document.getElementById('battle-log').style.display='block';
  document.getElementById('btn-skip').style.display='';
  document.getElementById('enemy-label').textContent=opp.name;
  document.getElementById('ally-label').textContent='선생님';
  var logEl=document.getElementById('battle-log');logEl.innerHTML='';
  var steps=result.steps;
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
    // SOC 단계 (atkSide===null) — 개전 버프 이펙트
    if(step.atkSide===null){
      renderBattleSnap(currSnap);
      appendLog(step.log,logEl);
      // 스탯 변화 감지 → 반짝 이펙트
      applySocEffects(prevSnap,currSnap);
      stepIdx++;setTimeout(nextStep,battleState.speed);return;
    }
    // 코인 페이즈: 개전 완료 후, 첫 공격 직전 1회
    if(!coinPhaseShown&&altResult){
      coinPhaseShown=true;
      document.getElementById('btn-skip').style.display='none';
      runBattleCoinPhase(prevSnap,function(allyFirst,coinInfo){
        document.getElementById('btn-skip').style.display='';
        // 코인 무승부: 전투 스킵
        if(allyFirst==='draw'&&coinInfo.coinDraw){
          var drawResult={result:'draw',damage:0,damageText:'코인 무승부! 전투 없이 넘어갑니다.',steps:steps,survivorsA:[],survivorsB:[],coinDraw:true};
          _gBattleCounterSave=null;_activeCoinOverlay=null;
          activeResult=drawResult;
          if(onCoinResult)onCoinResult(drawResult);
          finishBattle(drawResult);
          return;
        }
        // 개전 후 최신 스냅샷 (코인 직전 상태) 추출
        var postSOCsnap=steps[0].snap;
        for(var _si=0;_si<stepIdx;_si++){if(steps[_si].atkSide===null)postSOCsnap=steps[_si].snap;}
        var boardA=postSOCsnap.a;var boardB=postSOCsnap.b;
        // 코인 결과를 보드 포지션 인덱스로 매핑
        var aliveIdxA=[],aliveIdxB=[];
        for(var _ai=0;_ai<boardA.length;_ai++)if(boardA[_ai].alive)aliveIdxA.push(_ai);
        for(var _bi=0;_bi<boardB.length;_bi++)if(boardB[_bi].alive)aliveIdxB.push(_bi);
        var coinA={},coinB={};
        for(var _j=0;_j<aliveIdxA.length;_j++)coinA[aliveIdxA[_j]]=coinInfo.cr['a'+_j];
        for(var _j=0;_j<aliveIdxB.length;_j++)coinB[aliveIdxB[_j]]=coinInfo.cr['b'+_j];
        var coinSeq=buildCoinSeqForBattle(boardA,boardB,coinA,coinB,coinInfo.eFirst);
        // resultC만 글로벌 카운터에 실제 반영
        if(_gBattleCounterSave)restoreGBattleCounters(_gBattleCounterSave);
        var resultC=runBattle(boardA,boardB,allyFirst,{skipSOC:true,coinSeq:coinSeq,panchanDeathsA:result._initPdA||0,panchanDeathsB:result._initPdB||0});
        _gBattleCounterSave=null;
        activeResult=resultC;
        if(onCoinResult)onCoinResult(resultC);
        steps=resultC.steps;
        stepIdx=1;
        nextStep();
      });
      return;
    }
    // 공격 단계: 3페이즈 애니메이션
    var atkIsAlly=(step.atkSide==='a');
    var changes=findChanges(prevSnap,currSnap);
    // Phase 1: 느리게 들어올리기 (350ms)
    renderBattleSnap(prevSnap);
    var atkRow=atkIsAlly?document.getElementById('ally-row'):document.getElementById('enemy-row');
    var defRow=atkIsAlly?document.getElementById('enemy-row'):document.getElementById('ally-row');
    var atkCard=step.atkId?atkRow.querySelector('[data-uid="'+step.atkId+'"]'):atkRow.children[step.atkIdx];
    var defCard=step.defId?defRow.querySelector('[data-uid="'+step.defId+'"]'):defRow.children[step.defIdx];
    // 실제 좌표 차이 계산 — 상대 카드 바로 앞까지 이동
    var slamVars={rot:'0deg',x:'0px',y:atkIsAlly?'-80px':'80px'};
    if(atkCard&&defCard){
      var ar=atkCard.getBoundingClientRect();
      var dr=defCard.getBoundingClientRect();
      var dx=(dr.left+dr.width/2)-(ar.left+ar.width/2);
      var dy=(dr.top+dr.height/2)-(ar.top+ar.height/2);
      // 살짝 앞에서 멈추도록 (카드 겹치지 않게 20% 짧게)
      dx*=0.85; dy*=0.85;
      var angle=Math.max(-20,Math.min(20,dx/12));
      slamVars={rot:angle+'deg',x:dx+'px',y:dy+'px'};
    }
    if(atkCard){
      atkCard.style.setProperty('--lunge-rot',slamVars.rot);
      atkCard.style.setProperty('--slam-x',slamVars.x);
      atkCard.style.setProperty('--slam-y',slamVars.y);
      atkCard.classList.add('lift');
    }
    setTimeout(function(){
      if(battleState.skip){stepIdx=steps.length;nextStep();return;}
      // Phase 2: 폭발적으로 상대 카드까지 돌진 (200ms)
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
            // 타격마다 작은 플래시
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
          // Phase 3: 임팩트! 플래시 + 넉백 + 데미지 (500ms)
          renderBattleSnap(currSnap);
          // 공격자 원위치 복귀
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
      // 부활 감지: shield 있었는데 사라지고 hp=1이 된 경우
      if(prev.kw.indexOf('reborn')!==-1&&curr.kw.indexOf('reborn')===-1&&curr.alive&&curr.hp===1)c.reborn=true;
      if(c.hpLost>0||c.shieldBroken||c.newlyDead||c.reborn)changes[side].push(c);
    }
    // 새로 추가된 유닛 (소환) 감지
    if(currSnap[side].length>prevSnap[side].length){
      for(var j=prevSnap[side].length;j<currSnap[side].length;j++){
        changes[side].push({idx:j,uid:currSnap[side][j].id,hpLost:0,shieldBroken:false,died:false,reborn:false,newlyDead:false,summoned:true});
      }
    }
  });
  return changes;
}

function applyHitEffects(changes,step,atkIsAlly){
  // 최대 데미지 계산 → 화면 흔들림 강도
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
        spawnDmgNum(card,'보호막!',true);
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
        setTimeout(function(cd){spawnDmgNum(cd,'부활!',true);}.bind(null,card),400);
      }
    }
  });
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
        else if(atkDiff>0) txt='+'+atkDiff+' 공격력';
        else txt='+'+hpDiff+' 체력';
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
  allyRow.innerHTML=aHtml||'<div style="color:#666">빈 필드</div>';
  enemyRow.innerHTML=bHtml||'<div style="color:#666">빈 필드</div>';
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
  // 알려진 uid 수집
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
  // 코인토스 이후 소환된 토큰: coin_back + 소환 순 번호 부여
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
  // 이전 잔여물 정리
  flash.classList.remove('active');
  document.body.classList.remove('shaking');
  var oldRings=document.querySelectorAll('.elim-ring');for(var r=0;r<oldRings.length;r++)oldRings[r].remove();
  var oldCracks=document.querySelectorAll('.elim-crack');for(var c=0;c<oldCracks.length;c++)oldCracks[c].remove();
  void flash.offsetWidth; // reflow 강제 — CSS 애니메이션 재트리거 보장
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
    resEl.textContent=result.result==='win'?'승리!':result.result==='lose'?'패배...':'무승부';
    document.getElementById('battle-damage').textContent=result.damageText;
    // 튜토리얼: 결과창 뜨면 다음 스텝 진행
    if(TUT.active && TUT.waitingFor==='battleResult'){
      TUT.waitingFor=null;
      // 결과창 위에 튜토리얼 띄우기 위해 continue 숨김 (튜토리얼이 관리)
      document.getElementById('btn-continue').style.display='none';
      setTimeout(function(){tutNext();},500);
    }
  }
  if(eliminated){playEliminationEffect(_showResult);}
  else{_showResult();}
}

function miniCardHtml(m){
  var cls='minicard'+(m.isSkin?' skin':'');
  var bgTag=m.img?'<div class="mini-bg"><img src="img/'+m.img+'" onerror="this.parentElement.style.display=\'none\'"></div>':'';
  var baseAttr=' data-base-id="'+(m.baseId||'')+'" data-mini-atk="'+m.atk+'" data-mini-hp="'+m.hp+'" data-mini-kw="'+(m.kw||[]).join(',')+'" data-mini-name="'+m.name+'" data-mini-img="'+(m.img||'')+'" data-mini-golden="'+(m.isSkin?'1':'')+'"';
  var kwHtml='';
  if(m.stripped){
    kwHtml='<div class="keywords" style="color:#666;text-decoration:line-through">'+kwText(m)+'<span class="stripped-x">✕</span></div>';
  } else if(kwText(m)){
    kwHtml='<div class="keywords">'+kwText(m)+'</div>';
  }
  var sIcon=SCHOOL_ICONS[m.school];var sLogoTag=sIcon?'<img class="school-logo" src="'+sIcon+'">':'';
  // 미니카드 능력 태그
  var miniAbilTag='';
  var bid=m.baseId||'';
  if(BC_IDS[bid]) miniAbilTag+='<span class="ability-tag bc" style="font-size:8px;padding:0 3px">첫인사</span>';
  if(DR_IDS[bid]) miniAbilTag+='<span class="ability-tag dr" style="font-size:8px;padding:0 3px">뒤끝</span>';
  if(SOC_IDS[bid]) miniAbilTag+='<span class="ability-tag soc" style="font-size:8px;padding:0 3px">개전</span>';
  if(SURV_IDS[bid]||(m.kw&&m.kw.indexOf('survive')!==-1)) miniAbilTag+='<span class="ability-tag" style="font-size:8px;padding:0 3px;background:rgba(16,185,129,0.2);color:#6ee7b7;border:1px solid rgba(16,185,129,0.4)">버티기</span>';
  if(PASSIVE_IDS[bid]) miniAbilTag+='<span class="ability-tag" style="font-size:8px;padding:0 3px;background:rgba(168,85,247,0.2);color:#c084fc;border:1px solid rgba(168,85,247,0.4)">패시브</span>';
  if(PRE_IDS[bid]||(m.kw&&m.kw.indexOf('preemptive')!==-1)) miniAbilTag+='<span class="ability-tag" style="font-size:8px;padding:0 3px;background:rgba(251,191,36,0.2);color:#fbbf24;border:1px solid rgba(251,191,36,0.4)">선제</span>';
  var miniAbilHtml=miniAbilTag?'<div style="text-align:center;background:rgba(0,0,0,0.4);padding:0 2px">'+miniAbilTag+'</div>':'';
  // 전투 중 카운터 표시
  var counterHtml='';
  if(bid==='wakamo'&&m._hovercraftCounter>0){
    counterHtml='<div class="battle-counter" style="background:rgba(59,130,246,0.3);border:1px solid rgba(59,130,246,0.6);color:#93c5fd">🚁 '+m._hovercraftCounter+'/4</div>';
  }
  if((bid==='nagusa'||bid==='yukari'||bid==='renge'||bid==='kikyou')&&m._keiseisenCounter>0){
    counterHtml='<div class="battle-counter" style="background:rgba(251,191,36,0.3);border:1px solid rgba(251,191,36,0.6);color:#fde68a">⚔ '+m._keiseisenCounter+'</div>';
  }
  return '<div class="'+cls+'"'+baseAttr+'>'+bgTag+sLogoTag+'<div class="mini-inner"><div class="name">'+m.name+'</div>'+
    '<div class="mini-stats"><div class="mini-atk">'+m.atk+'</div><div class="mini-hp">'+m.hp+'</div></div>'+
    kwHtml+miniAbilHtml+counterHtml+'</div></div>';
}

function continueBattle() {
  document.getElementById('battle-overlay').classList.remove('active');
  var p=G.players[0];
  if(p.dead){showGameOver();return;}
  if(G.aliveCount<=1){G.placement=1;showGameOver();return;}
  nextTurn();
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
}

// ===== 자가대전 온라인 학습 시스템 =====

// 3단계: 카드별 승패 통계
var SIM_STATS = {};
var SIM_RUNNING = false;
var SIM_EXPLORE = false; // ε-greedy 탐색 모드 (runSimBatch 내부에서만 true)

// 4단계: 시뮬 통계 기반 구매 점수 보정 (winRate 0.5 기준 ±3)
function simStatBonus(cardId) {
  var s = SIM_STATS[cardId];
  if(!s || (s.win + s.loss) < 10) return 0;
  var wr = s.win / (s.win + s.loss);
  return Math.max(-3, Math.min(3, (wr - 0.5) * 6));
}

// 3단계: 게임 결과 집계
// 1등 board의 카드 → win++, 나머지 모든 플레이어 board의 카드 → loss++
// (같은 카드가 1등과 2등 모두 가지고 있으면 win 1 + loss 1로 50% 수렴)
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
  // 상위 50% → win, 하위 50% → loss (모든 AI 카드 집계)
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

// 2단계: 실전투 기반 배틀 페이즈
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

// 1게임 시뮬레이션 실행 (G 저장→교체→시뮬→복원)
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
    // 시뮬 풀: 모든 카드 각 6장
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

    // 최대 25턴 시뮬
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
    console.warn('[SIM] 게임 오류:', e);
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
// 순수 랜덤 AI — 전략/점수 없이 구매 가능한 카드 중 무작위 선택
function simRandomTurns() {
  for(var i = 1; i < G.players.length; i++) {
    var p = G.players[i];
    if(p.dead) continue;
    // 티어 업: 40% 확률 + 스톤 여유 있을 때
    if(p.tier < 6 && p.stone >= p.upgradeCost && Math.random() < 0.4) {
      p.stone -= p.upgradeCost;
      p.tier++;
      p.upgradeCost = p.tier < 6 ? UPGRADE_COSTS[p.tier] : 99;
    }
    // 구매: 스톤 있고 보드 자리 있으면 랜덤 카드 구매
    var buyLoop = 0;
    while(p.stone >= 3 && p.board.length < MAX_BOARD && buyLoop < 20) {
      buyLoop++;
      var avail = CHARS.filter(function(c){ return c.tier <= p.tier && G.pool[c.id] > 0; });
      if(avail.length === 0) break;
      var tmpl = avail[Math.floor(Math.random() * avail.length)];
      if(!takeFromPool(tmpl.id)) break;
      // 트리플 체크
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

// 순수 랜덤 AI로 돌리는 시뮬 (전략 편향 없이 카드 자체 성능 측정용)
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
    console.warn('[SIM-RAND] 게임 오류:', e);
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
  SIM_EXPLORE = true; // 탐색 모드 ON (시뮬 전용)
  var count = 0;
  function step() {
    if(count >= N) {
      SIM_RUNNING = false;
      SIM_EXPLORE = false; // 탐색 모드 OFF (실제 게임 복귀)
      console.log('[SIM] '+N+'판 완료. 통계 업데이트됨.');
      if(onDone) onDone(SIM_STATS);
      return;
    }
    runSimGame();
    count++;
    setTimeout(step, 0);
  }
  setTimeout(step, 0);
}
