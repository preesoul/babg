// ========== GAME CORE ==========
// Pure game logic - shared between PC and Mobile

// ========== DATA ==========
var CHARS = [
  // ===== Tier 1 (밸류5) =====
  // 게헨나 3학년
  {id:'kayoko', name:'카요코', school:'게헨나',  tier:4,atk:5,hp:5,kw:[],            skin:'카요코(드레스)',   img:'Kayoko.png',         imgGold:'Kayoko_(Dress).png'},
  // 게헨나 1학년
  {id:'junko',  name:'준코',   school:'게헨나',  tier:1,atk:1,hp:2,kw:['selfdestruct'],            skin:'준코(새해)',       img:'Junko.png',          imgGold:'Junko_(New_Year).png'},
  // 밀레니엄 1학년
  {id:'toki',   name:'토키',   school:'밀레니엄',tier:2,atk:1,hp:4,kw:['survive'],   skin:'토키(바니걸)',     img:'Toki.png',           imgGold:'Toki_(Bunny_Girl).png'},
  {id:'midori', name:'미도리', school:'밀레니엄',tier:1,atk:2,hp:2,kw:[],            skin:'미도리(메이드)',   img:'Midori.png',         imgGold:'Midori_(Maid).png'},
  // 트리니티 1학년
  {id:'mari',   name:'마리',   school:'트리니티',tier:1,atk:1,hp:1,kw:['taunt'],     skin:'마리(아이돌)',     img:'Mari.png',           imgGold:'Mari_(Idol).png'},
  {id:'reisa',  name:'레이사', school:'트리니티',tier:1,atk:2,hp:3,kw:['survive'],   skin:'레이사(마법소녀)', img:'Reisa.png',          imgGold:'Reisa_(Magical).png'},

  // ===== Tier 2 (밸류7) =====
  // 게헨나 1학년
  {id:'juri',    name:'주리',   school:'게헨나',  tier:1,atk:2,hp:2,kw:[],             skin:'주리(웨이트리스)',img:'Juri.png',           imgGold:'Juri_(maid).png'},
  {id:'chinatsu',name:'치나츠', school:'게헨나',  tier:2,atk:1,hp:4,kw:[],            skin:'치나츠(온천)',     img:'Chinatsu.png',       imgGold:'Chinatsu_(Hot_Spring).png'},
  // 밀레니엄 1학년
  {id:'momoi',   name:'모모이', school:'밀레니엄',tier:1,atk:2,hp:2,kw:['taunt'],     skin:'모모이(메이드)',   img:'Momoi.png',          imgGold:'Momoi_(Maid).png'},
  // 밀레니엄 2학년
  {id:'yuuka',   name:'유우카', school:'밀레니엄',tier:3,atk:4,hp:4,kw:['taunt','shield'],skin:'유우카(체육복)',   img:'Yuuka.png',          imgGold:'Yuuka_(Sportswear).png'},
  // 트리니티 1학년
  {id:'kazusa',  name:'카즈사', school:'트리니티',tier:2,atk:3,hp:2,kw:['pierce'],    skin:'카즈사(밴드)',     img:'Kazusa.png',         imgGold:'Kazusa_(Band).png'},
  {id:'mashiro', name:'마시로', school:'트리니티',tier:2,atk:4,hp:2,kw:['ranged'],    skin:'마시로(수영복)',   img:'Mashiro.png',        imgGold:'Mashiro_(Swimsuit).png'},

  // ===== Tier 3 (밸류9) =====
  // 게헨나 2학년
  {id:'aru',     name:'아루',   school:'게헨나',  tier:5,atk:6,hp:5,kw:['preemptive','ambush'], skin:'아루(드레스)',     img:'Aru.png',            imgGold:'Aru_(Dress).png'},
  {id:'kasumi',  name:'카스미', school:'게헨나',  tier:4,atk:4,hp:6,kw:['ambush'],             skin:'카스미(수영복)',   img:'Kasumi.png',         imgGold:'Kasumi_(Swimsuit).png'},  // +개전(SOC)
  // 게헨나 3학년
  {id:'sena',    name:'세나',   school:'게헨나',  tier:5,atk:7,hp:4,kw:['pierce'],    locked:true, skin:'세나(사복)',       img:'Sena.png',           imgGold:'Sena_(Casual).png'},
  // 밀레니엄 1학년
  {id:'arisu',   name:'아리스', school:'밀레니엄',tier:4,atk:7,hp:3,kw:['pierce'],    skin:'아리스(메이드)',   img:'Arisu.png',          imgGold:'Arisu_(Maid).png'},
  {id:'hibiki',  name:'히비키', school:'밀레니엄',tier:3,atk:4,hp:3,kw:[],             skin:'히비키(치어리더)',img:'Hibiki.png',          imgGold:'Hibiki_(Cheerleader).png'},
  {id:'yuzu',    name:'유즈',   school:'밀레니엄',tier:2,atk:2,hp:3,kw:[],            skin:'유즈(메이드)',     img:'Yuzu.png',           imgGold:'Yuzu_(Maid).png'},
  // 트리니티 2학년
  {id:'ichika',  name:'이치카', school:'트리니티',tier:3,atk:5,hp:1,kw:['shield','windfury'],skin:'이치카(수영복)',img:'Ichika.png',     imgGold:'Ichika_(Swimsuit).png'},
  {id:'hanako',  name:'하나코', school:'트리니티',tier:4,atk:3,hp:6,kw:['poison'],    skin:'하나코(수영복)',   img:'Hanako.png',         imgGold:'Hanako_(Swimsuit).png'},
  {id:'hifumi',  name:'히후미', school:'트리니티',tier:3,atk:2,hp:3,kw:[],    skin:'히후미(수영복)',   img:'Hifumi.png',         imgGold:'Hifumi_(Swimsuit).png'},

  // ===== Tier 4 (밸류12) =====
  // 게헨나 2학년
  {id:'iori',    name:'이오리', school:'게헨나',  tier:3,atk:5,hp:1,kw:['shield','windfury'],skin:'이오리(수영복)',img:'Iori.png',     imgGold:'Iori_(Swimsuit).png'},
  {id:'iroha',   name:'이로하', school:'게헨나',  tier:3,atk:3,hp:3,kw:[],            skin:'이로하(수영복)',   img:'Iroha.png',          imgGold:'Iroha_(Swimsuit).png'},
  // 밀레니엄 1학년
  {id:'eimi',    name:'에이미', school:'밀레니엄',tier:3,atk:3,hp:4,kw:['shield'],             skin:'에이미(수영복)',   img:'Eimi.png',           imgGold:'Eimi_(Swimsuit).png'},
  // 밀레니엄 2학년
  {id:'noa',     name:'노아',   school:'밀레니엄',tier:4,atk:2,hp:6,kw:['survive'],   skin:'노아(파자마)',     img:'Noa.png',            imgGold:'Noa_(Pajama).png'},
  // 트리니티 2학년
  {id:'azusa',   name:'아즈사', school:'트리니티',tier:4,atk:5,hp:5,kw:['ambush'],            skin:'아즈사(수영복)',   img:'Azusa.png',          imgGold:'Azusa_(Swimsuit).png'},
  // 트리니티 3학년
  {id:'hinata',  name:'히나타', school:'트리니티',tier:4,atk:3,hp:5,kw:['preemptive'],skin:'히나타(수영복)',   img:'Hinata.png',         imgGold:'Hinata_(Swimsuit).png'},

  // ===== Tier 5 (밸류15) =====
  // 게헨나 3학년
  {id:'ako',     name:'아코',   school:'게헨나',  tier:4,atk:3,hp:5,kw:['taunt'],     skin:'아코(드레스)',     img:'Ako.png',            imgGold:'Ako_(Dress).png'},
  {id:'satsuki', name:'사츠키', school:'게헨나',  tier:5,atk:5,hp:6,kw:[],            skin:'사츠키(수영복)',   img:'Satsuki.png',        imgGold:'Satsuki_(Swinsuit).png'},
  // 밀레니엄 3학년
  {id:'himari',  name:'히마리', school:'밀레니엄',tier:6,atk:6,hp:7,kw:[],            locked:true, skin:'히마리(임전)',     img:'Himari.png',         imgGold:'Himari_(Battle).png'},
  {id:'rio',     name:'리오',   school:'밀레니엄',tier:6,atk:7,hp:7,kw:[],            skin:'리오(임전)',       img:'Rio.png',            imgGold:'Rio_(Battle).png'},
  // 트리니티 3학년
  {id:'sakurako',name:'사쿠라코',school:'트리니티',tier:6,atk:7,hp:7,kw:[],           skin:'사쿠라코(아이돌)', img:'Sakurako.png',       imgGold:'Sakurako_(Idol).png'},
  {id:'ui',      name:'우이',   school:'트리니티',tier:5,atk:6,hp:5,kw:['preemptive'],locked:true, skin:'우이(수영복)',     img:'Ui.png',             imgGold:'Ui_(Swimsuit).png'},

  // ===== Tier 6 (밸류18) =====
  // 게헨나 3학년
  {id:'hina',    name:'히나',   school:'게헨나',  tier:6,atk:13,hp:3,kw:['cleave'],   skin:'히나(드레스)',     img:'Hina.png',           imgGold:'Hina_(Dress).png'},
  {id:'makoto',  name:'마코토', school:'게헨나',  tier:6,atk:7,hp:7,kw:[],            skin:'마코토(수영복)',   img:'Makoto.png',         imgGold:'Makoto_(Swimsuit).png'},
  // 밀레니엄 3학년
  {id:'neru',    name:'네루',   school:'밀레니엄',tier:5,atk:5,hp:5,kw:['shield','survive','ambush'],skin:'네루(바니걸)',img:'Neru.png',       imgGold:'Neru_(Bunny_Girl).png'},
  {id:'utaha',   name:'우타하', school:'밀레니엄',tier:5,atk:5,hp:5,kw:['ambush'], skin:'우타하(치어리더)',img:'Utaha.png',       imgGold:'Utaha_(Cheerleader).png'},
  // 트리니티 3학년
  {id:'tsurugi', name:'츠루기', school:'트리니티',tier:6,atk:7,hp:7,kw:[],            skin:'츠루기(수영복)',   img:'Tsurugi.png',        imgGold:'Tsurugi_(Swimsuit).png'},
  {id:'mine',    name:'미네',   school:'트리니티',tier:6,atk:6,hp:6,kw:['taunt','shield','reborn'],skin:'미네(아이돌)',img:'Mine.png', imgGold:'Mine_(Idol).png'},

  // ===== 게헨나 신규 =====
  // 게헨나 1학년
  {id:'haruka',  name:'하루카', school:'게헨나',  tier:1,atk:1,hp:2,kw:['preemptive'],   skin:'하루카(새해)',     img:'Haruka.png',         imgGold:'Haruka_(New_Year).png'},
  {id:'ibuki',   name:'이부키', school:'게헨나',  tier:2,atk:2,hp:3,kw:[],               skin:'이부키(수영복)',   img:'Ibuki.png',          imgGold:'Ibuki_(Swimsuit).png'},
  // 게헨나 2학년
  {id:'mutsuki', name:'무츠키', school:'게헨나',  tier:2,atk:3,hp:2,kw:['pierce'],        skin:'무츠키(새해)',     img:'Mutsuki.png',        imgGold:'Mutsuki_(New_Year).png'},
  {id:'chiaki',  name:'치아키', school:'게헨나',  tier:3,atk:5,hp:3,kw:['ranged'],        skin:'치아키(수영복)',   img:'Chiaki.png',         imgGold:'Chiaki_(Swimsuit).png'},
  // ===== 밀레니엄 신규 =====
  // 밀레니엄 1학년
  {id:'koyuki',  name:'코유키', school:'밀레니엄',tier:2,atk:1,hp:1,kw:['preemptive'],   skin:'코유키(파자마)',   img:'Koyuki.png',         imgGold:'Koyuki_(Pajama).png'},
  // 밀레니엄 2학년
  {id:'akane',   name:'아카네', school:'밀레니엄',tier:3,atk:2,hp:4,kw:[],               skin:'아카네(버니걸)',   img:'Akane.png',          imgGold:'Akane_(Bunny_Girl).png'},
  {id:'karin',   name:'카린',   school:'밀레니엄',tier:4,atk:6,hp:3,kw:['ranged','pierce'],skin:'카린(버니걸)',   img:'Karin.png',          imgGold:'Karin_(Bunny_Girl).png'},
  // 밀레니엄 3학년
  {id:'asuna',   name:'아스나', school:'밀레니엄',tier:5,atk:7,hp:6,kw:[],               skin:'아스나(버니걸)',   img:'Asuna.png',          imgGold:'Asuna_(Bunny_Girl).png'},
  // ===== 트리니티 신규 =====
  // 트리니티 1학년
  {id:'koharu',  name:'코하루', school:'트리니티',tier:1,atk:1,hp:2,kw:['preemptive'],   skin:'코하루(수영복)',   img:'Koharu.png',         imgGold:'Koharu_(Swimsuit).png'},
  {id:'shimiko', name:'시미코', school:'트리니티',tier:2,atk:4,hp:4,kw:[],                skin:'시미코(악의 간부)',img:'Shimiko.png',         imgGold:'Shimiko_Evil_boss.png'},
  // 트리니티 2학년
  {id:'suzumi',  name:'스즈미', school:'트리니티',tier:3,atk:2,hp:4,kw:[],                skin:'스즈미(마법소녀)', img:'Suzumi.png',          imgGold:'Suzumi_(Magical).png'},
  // 트리니티 3학년
  {id:'hasumi',  name:'하스미', school:'트리니티',tier:5,atk:7,hp:5,kw:['ambush'],               skin:'하스미(수영복)',   img:'Hasumi.png',         imgGold:'Hasumi_(Swimsuit).png'},
  // ===== 총학생회 (중립) =====
  // 총학생회 1학년
  {id:'haine',   name:'하이네', school:'총학생회',tier:1,atk:3,hp:2,kw:[],            skin:'하이네(인터뷰)',   img:'Haine.png',          imgGold:'Haine_(Interview).png'},
  {id:'momoka',  name:'모모카', school:'총학생회',tier:2,atk:4,hp:3,kw:[],            skin:'모모카(승무원)',   img:'Momoka.png',         imgGold:'Momoka_(flight).png'},
  // 총학생회 2학년
  {id:'ayumu',   name:'아유무', school:'총학생회',tier:3,atk:5,hp:2,kw:[],            skin:'아유무(승무원)',   img:'Ayumu.png',          imgGold:'Ayumu_(flight).png'},
  {id:'aoi',     name:'아오이', school:'총학생회',tier:4,atk:5,hp:4,kw:[],            skin:'아오이(인터뷰)',   img:'Aoi.png',            imgGold:'Aoi_(Interview).png'},
  // 총학생회 3학년
  {id:'kaya',    name:'카야',   school:'총학생회',tier:5,atk:5,hp:5,kw:[],            locked:true, skin:'카야(쿠데타)',     img:'Kaya.png',           imgGold:'Kaya_(Coup).png'},
  {id:'lin',     name:'린',     school:'총학생회',tier:6,atk:8,hp:8,kw:[],            locked:true, skin:'린(승무원)',       img:'Lin.png',            imgGold:'Lin_(flight).png'},

  // ===== 백귀야행 =====
  // 백귀야행 1학년
  {id:'izuna',   name:'이즈나', school:'백귀야행',tier:1,atk:1,hp:1,kw:[],            skin:'이즈나(수영복)',   img:'Izuna.png',          imgGold:'Izuna_(Swimsuit).png'},
  {id:'pina',    name:'피나',   school:'백귀야행',tier:1,atk:1,hp:2,kw:['shield','taunt'],skin:'피나(가이드)',  img:'Pina.png',           imgGold:'Pina_(Guide).png'},
  {id:'yukari',  name:'유카리', school:'백귀야행',tier:2,atk:2,hp:1,kw:['reborn','preemptive'],skin:'유카리(수영복)',img:'Yukari.png',     imgGold:'Yukari_(Swimsuit).png'},
  {id:'tsukuyo', name:'츠쿠요', school:'백귀야행',tier:2,atk:3,hp:2,kw:[],            skin:'츠쿠요(드레스)',   img:'Tsukuyo.png',        imgGold:'Tsukuyo_(Dress).png'},
  // 백귀야행 2학년
  {id:'mimori',  name:'미모리', school:'백귀야행',tier:3,atk:2,hp:3,kw:['taunt'],skin:'미모리(수영복)',img:'Mimori.png',       imgGold:'Mimori_(Swimsuit).png'},
  {id:'renge',   name:'렌게',   school:'백귀야행',tier:3,atk:3,hp:2,kw:['shield','preemptive'],skin:'렌게(수영복)',img:'Renge.png',       imgGold:'Renge_(Swimsuit).png'},
  {id:'shizuko', name:'시즈코', school:'백귀야행',tier:5,atk:5,hp:6,kw:[],             skin:'시즈코(수영복)',   img:'Shizuko.png',        imgGold:'Shizuko_(Swimsuit).png'},
  {id:'tsubaki', name:'츠바키', school:'백귀야행',tier:4,atk:4,hp:3,kw:['taunt','shield'],skin:'츠바키(가이드)',img:'Tsubaki.png',      imgGold:'Tsubaki_(Guide).png'},
  {id:'kikyou',  name:'키쿄',   school:'백귀야행',tier:4,atk:4,hp:4,kw:['windfury','preemptive','ambush'],skin:'키쿄(수영복)',img:'Kikyou.png',   imgGold:'Kikyou_(Swimsuit).png'},
  {id:'chise',   name:'치세',   school:'백귀야행',tier:4,atk:4,hp:5,kw:['taunt'],     locked:true, skin:'치세(수영복)',     img:'Chise.png',          imgGold:'Chise_(Swimsuit).png'},
  // 백귀야행 3학년
  {id:'nagusa',  name:'나구사', school:'백귀야행',tier:6,atk:5,hp:7,kw:['preemptive'],skin:'나구사(수영복)',img:'Nagusa.png',imgGold:'Nagusa_(Swimsuit).png'},
  {id:'wakamo',  name:'와카모', school:'백귀야행',tier:6,atk:5,hp:7,kw:['preemptive'],locked:true, skin:'와카모(수영복)',img:'Wakamo.png',imgGold:'Wakamo_(Swimsuit).png'},
  {id:'michiru', name:'미치루', school:'백귀야행',tier:5,atk:5,hp:5,kw:[],            skin:'미치루(드레스)',   img:'Michiru.png',        imgGold:'Michiru_(Dress).png'},

  // ===== 아비도스 (잠금 해제 필요) =====
  {id:'ayane',   name:'아야네', school:'아비도스', tier:2, atk:2, hp:4, kw:['taunt'],          locked:true, skin:'아야네(수영복)',   img:'Ayane.png',          imgGold:'Ayane_(Swimsuit).png'},
  {id:'serika',  name:'세리카', school:'아비도스', tier:3, atk:4, hp:2, kw:['windfury'],       locked:true, skin:'세리카(수영복)',   img:'Serika.png',         imgGold:'Serika_(Swimsuit).png'},
  {id:'nonomi',  name:'노노미', school:'아비도스', tier:4, atk:4, hp:4, kw:[],                 locked:true, skin:'노노미(수영복)',   img:'Nonomi.png',         imgGold:'Nonomi_(Swimsuit).png'},
  {id:'shiroko', name:'시로코', school:'아비도스', tier:5, atk:7, hp:4, kw:['reborn'],         locked:true, skin:'시로코(수영복)',   img:'Shiroko.png',        imgGold:'Shiroko_(Swimsuit).png'},
  {id:'hoshino', name:'호시노', school:'아비도스', tier:6, atk:5, hp:7, kw:['taunt','shield'], locked:true, skin:'호시노(수영복)',   img:'Hoshino.png',        imgGold:'Hoshino_(Swimsuit).png'},

  // ===== 산해경 (잠금 해제 필요) =====
  {id:'kokona',  name:'코코나', school:'산해경', tier:1, atk:1, hp:1, kw:[],                locked:true, skin:'코코나(아르바이트)', img:'Kokona.png',         imgGold:'Kokona_(Work).png'},
  // ===== 아리우스 분교 (추가 카드군, 신비해방 대상) =====
  {id:'subaru',  name:'스바루', school:'아리우스 분교', tier:2, atk:6,  hp:6,  kw:[],          locked:true, skin:'스바루(메이드)',     img:'Subaru.png',         imgGold:'Subaru_(maid).png'},
  {id:'hiyori',  name:'히요리', school:'아리우스 분교', tier:3, atk:9,  hp:4,  kw:['ranged'],  locked:true, skin:'히요리(수영복)',     img:'Hiyori.png',         imgGold:'Hiyori_(Swimsuit).png'},
  {id:'misaki',  name:'미사키', school:'아리우스 분교', tier:4, atk:12, hp:3,  kw:['cleave'],  locked:true, skin:'미사키(수영복)',     img:'Misaki.png',         imgGold:'Misaki_(Swimsuit).png'},
  {id:'saori',   name:'사오리', school:'아리우스 분교', tier:5, atk:13, hp:13, kw:['shield','poison'], locked:true, skin:'사오리(수영복)', img:'Saori.png',          imgGold:'Saori_(Swimsuit).png'},
  {id:'atsuko',  name:'아츠코', school:'아리우스 분교', tier:6, atk:5,  hp:5,  kw:[],          locked:true, skin:'아츠코(수영복)',     img:'Atsuko.png',         imgGold:'Atsuko_(Swimsuit).png'},
  {id:'mina',    name:'미나',   school:'산해경', tier:2, atk:2, hp:4, kw:['taunt'],          locked:true, skin:'미나(리코더)',       img:'Mina.png',           imgGold:'Mina_(Recorder).png'},
  {id:'reijo',   name:'레이죠', school:'산해경', tier:3, atk:4, hp:2, kw:['windfury'],       locked:true, skin:'레이죠(사복)',       img:'Reijo.png',          imgGold:'Reijo_(Casual).png'},
  {id:'saya',    name:'사야',   school:'산해경', tier:4, atk:4, hp:5, kw:[],                 locked:true, skin:'사야(사복)',         img:'Saya.png',           imgGold:'Saya_(Casual).png'},
  {id:'rumi',    name:'루미',   school:'산해경', tier:6, atk:7, hp:7, kw:[],                 locked:true, skin:'루미(어린이)',       img:'Rumi.png',           imgGold:'Rumi_(Kid).png'},
  {id:'shun',    name:'슌',     school:'산해경', tier:5, atk:7, hp:3, kw:['ranged'],         locked:true, skin:'슌(어린이)',         img:'Shun.png',           imgGold:'Shun_(Kid).png'},
  {id:'kisaki',  name:'키사키', school:'산해경', tier:6, atk:5, hp:7, kw:[],                 locked:true, skin:'키사키(사복)',       img:'Kisaki.png',         imgGold:'Kisaki_(Casual).png'},
  // ===== 발키리/SRT (추가 카드군) =====
  // sub: 'valkyrie' = 발키리 경찰학원, 'srt' = SRT 특수학원
  // ===== 발키리/SRT (추가 카드군, 신비해방 대상) =====
  {id:'kirino',  name:'키리노',  school:'발키리/SRT', sub:'valkyrie', tier:1, atk:2,  hp:2, kw:['taunt'],            locked:true, skin:'키리노(수영복)', img:'Kirino.png',  imgGold:'Kirino_(Swimsuit).png'},
  {id:'fubuki',  name:'후부키',  school:'발키리/SRT', sub:'valkyrie', tier:2, atk:2,  hp:2, kw:[],                   locked:true, skin:'후부키(수영복)', img:'Fubuki.png',  imgGold:'Fubuki_(Swimsuit).png'},
  {id:'miyu',    name:'미유',    school:'발키리/SRT', sub:'srt',      tier:2, atk:1,  hp:5, kw:['ranged'],           locked:true, skin:'미유(수영복)',   img:'Miyu.png',    imgGold:'Miyu_(Swimsuit).png'},
  {id:'moe',     name:'모에',    school:'발키리/SRT', sub:'srt',      tier:3, atk:4,  hp:1, kw:['pierce'],           locked:true, skin:'모에(수영복)',   img:'Moe.png',     imgGold:'Moe_(Swimsuit).png'},
  {id:'saki',    name:'사키',    school:'발키리/SRT', sub:'srt',      tier:3, atk:3,  hp:3, kw:[],                   locked:true, skin:'사키(수영복)',   img:'Saki.png',    imgGold:'Saki_(Swimsuit).png'},
  {id:'kurumi',  name:'쿠루미',  school:'발키리/SRT', sub:'srt',      tier:4, atk:2,  hp:8, kw:['taunt','survive'],  locked:true, skin:'쿠루미(사복)',   img:'Kurumi.png',  imgGold:'Kurumi_(Private).png'},
  {id:'otogi',   name:'오토기',  school:'발키리/SRT', sub:'srt',      tier:4, atk:4,  hp:1, kw:['ranged','reborn'], locked:true, skin:'오토기(수영복)', img:'Otogi.png',   imgGold:'Otogi_(Swimsuit).png'},
  {id:'niko',    name:'니코',    school:'발키리/SRT', sub:'srt',      tier:5, atk:5,  hp:5, kw:[],                   locked:true, skin:'니코(사복)',     img:'Niko.png',    imgGold:'Niko_(Private).png'},
  {id:'konoka',  name:'코노카',  school:'발키리/SRT', sub:'valkyrie', tier:5, atk:5,  hp:5, kw:['taunt'],            locked:true, skin:'코노카(수영복)', img:'Konoka.png',  imgGold:'Konoka_(Swimsuit).png'},
  {id:'miyako',  name:'미야코',  school:'발키리/SRT', sub:'srt',      tier:6, atk:5,  hp:4, kw:['reborn'],           locked:true, skin:'미야코(수영복)', img:'Miyako.png',  imgGold:'Miyako_(Swimsuit).png'},
  {id:'yukino',  name:'유키노',  school:'발키리/SRT', sub:'srt',      tier:6, atk:6,  hp:6, kw:[],                   locked:true, skin:'유키노(수영복)', img:'Yukino.png',  imgGold:'Yukino_(Swimsuit).png'},
  {id:'kanna',   name:'칸나',    school:'발키리/SRT', sub:'valkyrie', tier:6, atk:1,  hp:1, kw:[],                   locked:true, skin:'칸나(수영복)',   img:'Kanna.png',   imgGold:'Kanna_(Swimsuit).png'},
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
  {id:'hkyk_saikyo',            name:'최강일각라이온',       school:'백귀야행', tier:7, atk:40, hp:40, kw:[],                                     img:'unique/HKYK_Saikyo_ikaku_raion.png'},
  {id:'hkyk_kuzunoha',          name:'쿠즈노하',            school:'백귀야행', tier:7, atk:1, hp:1, kw:['shield','poison'],                    img:'unique/HKYK_Kuzunoha.png'},
  // 아리우스 분교
  {id:'arius_squad',            name:'아리우스 스쿼드',     school:'아리우스 분교', tier:7, atk:20, hp:20, kw:[],                                img:'unique/Arius_squad.png'},
  // 신규 7성
  {id:'gehenna_p68',             name:'흥신소 68',            school:'게헨나',   tier:7, atk:15, hp:15, kw:['pierce'],                               img:'unique/Problem_solver_68.png'},
  {id:'millennium_seminar',      name:'밀레니엄 세미나',      school:'밀레니엄', tier:7, atk:15, hp:15, kw:[],                                     img:'unique/Seminar.png'},
  {id:'millennium_cc',           name:'Cleaning&Clearing',    school:'밀레니엄', tier:7, atk:12, hp:12, kw:['ranged','shield'],                     img:'unique/Cleaning_Clearing.png'},
  {id:'trinity_makeup',          name:'보충수업부',           school:'트리니티', tier:7, atk:10, hp:10, kw:[],                                     img:'unique/Make_Up_Work_Club.png'},
  {id:'trinity_justice',         name:'정의실현부',           school:'트리니티', tier:7, atk:10, hp:10, kw:['shield','windfury'],                   img:'unique/Justice_Task_Force.png'},
  // 아비도스
  {id:'Shiroko_Terror',          name:'시로코 테러',          school:'아비도스', tier:7, atk:10, hp:10, kw:['shield'],                                   img:'unique/Shiroko_Terror.png'},
  // 산해경
  {id:'shanhai_kiki',            name:'키키',                 school:'산해경',   tier:7, atk:1,  hp:1,  kw:['ambush'],                                   img:'unique/Kiki.png'},
  // 밀레니엄 (케이 계열)
  {id:'Kei_usb',                 name:'케이(USB)',            school:'밀레니엄', tier:7, atk:1,  hp:1,  kw:['shield'],                                   img:'unique/Kei_usb.png'},
  {id:'Arisu_Kei',               name:'아리스&케이',          school:'밀레니엄', tier:7, atk:40, hp:40, kw:['shield','ranged','preemptive'],              img:'unique/Arisu_Kei.png'},
  // 붉은겨울
  {id:'red_winter_minori',       name:'미노리(성난 군중)',     school:'붉은겨울', tier:7, atk:0,  hp:10, kw:[],                                                img:'unique/Revolution.png'},
];

// 히든 캐릭터 조회 헬퍼
function findHiddenChar(id){for(var i=0;i<HIDDEN_CHARS.length;i++)if(HIDDEN_CHARS[i].id===id)return HIDDEN_CHARS[i];return null;}
function findAnyChar(id){for(var i=0;i<CHARS.length;i++)if(CHARS[i].id===id)return CHARS[i];return findHiddenChar(id);}

// 스탯 색상 (기본보다 높으면 초록, 낮으면 빨강)
function statColor(baseId,isSkin,type,current){
  var tmpl=findAnyChar(baseId);if(!tmpl)return'';
  var base=isSkin?(type==='atk'?tmpl.atk*2+1:tmpl.hp*2+1):(type==='atk'?tmpl.atk:tmpl.hp);
  var _ol='text-shadow:-1.5px -1.5px 0 #000,1.5px -1.5px 0 #000,-1.5px 1.5px 0 #000,1.5px 1.5px 0 #000';
  if(current>base)return'color:#00ff00;font-weight:900;'+_ol;if(current<base)return'color:#ff0000;font-weight:900;'+_ol;return _ol;
}

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
function addKw(unit, kw) { if(!unit.kw) unit.kw=[]; var basicKws=['taunt','shield','cleave','reborn','windfury','poison','pierce','ranged','selfdestruct','invincible','ambush']; if(unit._noBC&&basicKws.indexOf(kw)!==-1) return; if(unit.kw.indexOf(kw)===-1) unit.kw.push(kw); }
function kwText(unit) { if(!unit.kw||unit.kw.length===0) return ''; var bid=unit.baseId||''; return unit.kw.filter(function(k){ if(k==='survive') return false; if(k==='preemptive') return false; return true; }).map(function(k){return '<span class="kw-tag">'+(KW_LABELS[k]||k)+'</span>';}).join(''); }

var KW_LABELS = {taunt:'지켜줌',shield:'보호막',cleave:'광역',reborn:'부활',windfury:'연사',poison:'독사굴',pierce:'관통',survive:'버티기',preemptive:'선빵',ranged:'저격',selfdestruct:'자폭',invincible:'무적',ambush:'기습'};
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
  selfdestruct:'공격력과 체력을 더하여 공격 후 쓰러집니다.',
  ambush:'첫 공격 전까지 대상 지정 불가.'
};
var TIER_COLORS = {1:'t1',2:'t2',3:'t3',4:'t4',5:'t5',6:'t6',7:'t7'};
var SCHOOL_ICONS = {'게헨나':'img/Icon/Gehenna.png','밀레니엄':'img/Icon/Millennium.png','트리니티':'img/Icon/Trinity.png','총학생회':'img/Icon/Council.png','백귀야행':'img/Icon/Hyakkiyako.png','아비도스':'img/Icon/Abydos.png','산해경':'img/Icon/Shanhaijing.png','붉은겨울':'img/icon/Red_Winter.png','아리우스 분교':'img/Icon/Arius.png','발키리/SRT':'img/Icon/Valkyrie.png'};
// 발키리/SRT는 단일 학교지만 카드 카탈로그에서 학원별 아이콘 병기 (sub: 'valkyrie' / 'srt')
var SUB_SCHOOL_ICONS = {'valkyrie':'img/Icon/Valkyrie.png','srt':'img/Icon/SRT.png'};
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

// ===== 마스터 볼륨 =====
// HTMLMediaElement.volume setter를 가로채서 window._masterVolume 배수로 스케일.
// 원본 값은 _babgRawVol에 저장해서 fade 등 읽기/쓰기 반복 시 배율이 중첩되지 않도록 함.
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
  // 현재 재생 중인 모든 audio/video 볼륨 재적용
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

// 능력 종류 분류
var BC_IDS  = {iroha:1, izuna:1, tsukuyo:1, tsubaki:1, michiru:1, kokona:1, kisaki:1, fubuki:1};                               // 첫인사
var DR_IDS  = {chinatsu:1, ako:1, hifumi:1, azusa:1, kasumi:1, nagusa:1, juri:1, toramaru:1, junko:1, satsuki:1, yuzu:1, chise:1, airship:1, gehenna_prefect:1, gehenna_pandemonium:1, gehenna_traingun:1, trinity_seia:1, trinity_justice:1, gehenna_p68:1, hovercraft:1, millennium_cc:1, ayane:1, hoshino:1, Shiroko_Terror:1, mina:1, shanhai_kiki:1, red_winter_minori:1, citizen_wave:1, arius_squad:1, moe:1, konoka:1}; // 뒤끝
var SOC_IDS = {kayoko:1, midori:1, momoi:1, mari:1, tsurugi:1, sakurako:1, rio:1, himari:1, mine:1, hibiki:1, makoto:1, kaya:1, kasumi:1, ibuki:1, akane:1, iori:1, hanako:1, pina:1, michiru:1, eimi:1, gehenna_traingun:1, trinity_nagisa:1, millennium_nameless:1, millennium_death_momoi:1, hkyk_kuzunoha:1, gehenna_p68:1, millennium_seminar:1, trinity_justice:1, nonomi:1, Shiroko_Terror:1, mina:1, rumi:1, mutsuki:1, red_winter_minori:1, shizuko:1, saori:1, misaki:1, atsuko:1, hiyori:1, subaru:1, arius_squad:1, saki:1, kanna:1}; // 개전
var SURV_IDS = {toki:1, neru:1, noa:1, reisa:1, kirino:1, kurumi:1}; // 버티기
var PASSIVE_IDS = {haine:1, momoka:1, ayumu:1, aoi:1, lin:1, asuna:1, hasumi:1, suzumi:1, sena:1, mimori:1, utaha:1, gehenna_traingun:1, trinity_mika:1, trinity_seia:1, wakamo:1, millennium_cc:1, trinity_makeup:1, gehenna_prefect:1, gehenna_pandemonium:1, millennium_death_momoi:1, gehenna_p68:1, millennium_seminar:1, trinity_justice:1, trinity_nagisa:1, serika:1, shiroko:1, Shiroko_Terror:1, reijo:1, saya:1, shun:1, shanhai_kiki:1, haruka:1, Kei_usb:1, kazusa:1, red_winter_minori:1, arius_squad:1, miyu:1, niko:1, miyako:1, yukino:1}; // 패시브 (영입 턴/상시) — shizuko는 개전(SOC)으로 변경됨
var PRE_IDS = {aru:1, koyuki:1, koharu:1, trinity_mika:1, hkyk_kuzunoha:1, millennium_malkuth:1, millennium_death_momoi:1, Arisu_Kei:1}; // 선빵 능력 (공격 시 데미지 계산 전 발동)

// 능력 설명 (CSV 기반)
var ABILITY_DESCS = {
  juri:     {type:'뒤끝',desc:'다른 아군이 남아 있다면\n<팬짱>을 소환합니다. (1/1)\n이번 게임에서 아군 팬짱이 쓰러진 수만큼\n+1/+1이 추가됩니다.',skinEffect:'웨이트리스 주리: 팬짱 2마리 소환',skinEffectDesc:'뒤끝: 다른 아군이 남아 있다면\n<팬짱>을 <span style="color:#ffd700;font-weight:700">2마리</span> 소환합니다. (1/1)\n이번 게임에서 아군 팬짱이 쓰러진 수만큼\n+1/+1이 추가됩니다.'},
  chinatsu: {type:'뒤끝',desc:'아군 무작위 1인에게 보호막을 부여합니다.',skinEffect:'온천 치나츠: 부활 추가',skinEffectDesc:'부활. 뒤끝: 아군 무작위 1인에게 보호막을 부여합니다.'},
  kayoko:   {type:'개전',desc:'상대방의 1~5번째 학생 배치를 역순으로 뒤집습니다.',skinEffect:'드레스 카요코: 지켜줌 뒤집기',skinEffectDesc:'개전: 상대의 <span style="color:#ffd700;font-weight:700">지켜줌을 해제하고, 지켜줌 없던 학생에게 지켜줌을 부여</span>합니다.\n배치를 역순으로 뒤집습니다.'},
  midori:   {type:'개전',desc:'<모모이> 수만큼 +2/+2',skinEffect:'메이드 미도리: 수×+4/+4\n둘 다 메이드: 수×+8/+8',skinEffectDesc:'개전: <모모이> 수만큼 <span style="color:#ffd700;font-weight:700">+4/+4</span>'},
  momoi:    {type:'개전',desc:'<미도리> 수만큼 +2/+2',skinEffect:'메이드 모모이: 수×+4/+4\n둘 다 메이드: 수×+8/+8',skinEffectDesc:'개전: <미도리> 수만큼 <span style="color:#ffd700;font-weight:700">+4/+4</span>'},
  mari:     {type:'개전',desc:'아군 전체 +2/+1',skinEffect:'아이돌 마리: +3/+3',skinEffectDesc:'개전: 아군 전체 <span style="color:#ffd700;font-weight:700">+3/+3</span>'},
  aru:      {type:'선빵',desc:'공격 시, 5~6티어 학생에게는 공격력이 2배가 됩니다.\n1~2티어 학생에게는 공격력이 절반(내림)이 됩니다.',skinEffect:'드레스 아루: 3배',skinEffectDesc:'선빵: 공격 시, 5~6티어 학생에게는 공격력이 <span style="color:#ffd700;font-weight:700">3배</span>가 됩니다.\n1~2티어 학생에게는 공격력이 절반(내림)이 됩니다.'},
  kasumi:   {type:'뒤끝',desc:'뒤끝: 자신을 쓰러뜨린 상대를 쓰러뜨립니다.',skinEffect:'수영복 카스미: 개전 추가 (가장 체력 높은 적을 공격 대상으로 지정)',skinEffectDesc:'개전: 가장 체력이 높은 적을 공격 대상으로 지정합니다.\n뒤끝: 자신을 쓰러뜨린 상대를 쓰러뜨립니다.'},
  iroha:    {type:'첫인사',desc:'<토라마루>로 교체됩니다. (토라마루: 5/1)\n토라마루 파괴 시 이로하로 돌아옵니다.',skinEffect:'수영복 이로하: 토라마루 10/2\n토라마루 파괴 시 이로하로 돌아옵니다.',skinEffectDesc:'첫인사: <토라마루>로 교체됩니다. (토라마루: <span style="color:#ffd700;font-weight:700">10/2</span>)\n토라마루 파괴 시 이로하로 돌아옵니다.'},
  himari:   {type:'개전',desc:'아군 2인에게 무작위 기본능력 키워드를 추가합니다.',skinEffect:'임전 히마리: 아군 전원',skinEffectDesc:'개전: 아군 <span style="color:#ffd700;font-weight:700">전원</span>에게 무작위 기본능력 키워드를 추가합니다.'},
  rio:      {type:'개전',desc:'무작위 적 2인의 모든 능력을 삭제합니다.\n이 효과는 가장 먼저(쿠즈노하·세이아 제외) 발동합니다.',skinEffect:'임전 리오: 적 3인의 능력 삭제',skinEffectDesc:'개전: 무작위 적 <span style="color:#ffd700;font-weight:700">3인</span>의 모든 능력을 삭제합니다.\n이 효과는 가장 먼저(쿠즈노하·세이아 제외) 발동합니다.'},
  ako:      {type:'뒤끝',desc:'이번 전투에서 게헨나 학생들 +4/+4',skinEffect:'드레스 아코: +8/+8',skinEffectDesc:'뒤끝: 이번 전투에서 게헨나 학생들에게 <span style="color:#ffd700;font-weight:700">+8/+8</span>을 부여합니다.'},
  kazusa:   {type:'패시브',desc:'관통. 공격으로 적을 쓰러뜨렸을 시,\n레이사를 불러옵니다. (전투 중 1회)',skinEffect:'밴드 카즈사: 마법소녀 레이사 소환',skinEffectDesc:'관통. 패시브: 공격으로 적을 쓰러뜨렸을 시,\n마법소녀 레이사를 불러옵니다. (전투 중 1회)'},
  hifumi:   {type:'뒤끝',desc:'<페로로님>을 소환합니다. (3/1)\n페로로님이 적을 쓰러뜨리면 히후미로 교체됩니다.',skinEffect:'수영복 히후미: 페로로님 6/2',skinEffectDesc:'뒤끝: <페로로님>을 소환합니다. (페로로님: <span style="color:#ffd700;font-weight:700">6/2</span>)\n페로로님이 적을 쓰러뜨리면 히후미로 교체됩니다.'},
  azusa:    {type:'뒤끝',desc:'적 전체에게 -2의 데미지를 줍니다.',skinEffect:'수영복 아즈사: -4 데미지',skinEffectDesc:'뒤끝: 적 전체에게 <span style="color:#ffd700;font-weight:700">-4</span>의 데미지를 줍니다.'},
  sakurako: {type:'개전',desc:'아군 트리니티 학생들의 개전을 두 번 더 발동합니다.',skinEffect:'아이돌 사쿠라코: 세 번 더 발동',skinEffectDesc:'개전: 아군 트리니티 학생들의 개전을 <span style="color:#ffd700;font-weight:700">세 번</span> 더 발동합니다.'},
  tsurugi:  {type:'개전',desc:'공/체가 두 배가 됩니다.\n개전 마지막에 발동됩니다.',skinEffect:'수영복 츠루기: 세 배',skinEffectDesc:'개전: 공/체가 <span style="color:#ffd700;font-weight:700">세 배</span>가 됩니다.'},
  mine:     {type:'개전',desc:'아군의 모든 지켜줌을 제거합니다.',skinEffect:'아이돌 미네: 아군 적군 모든 지켜줌을 제거합니다.',skinEffectDesc:'개전: <span style="color:#ffd700;font-weight:700">아군 적군</span> 모든 지켜줌을 제거합니다.'},
  toki:     {type:'버티기',desc:'<아비 에슈흐>를 소환합니다.\n스케쥴 레벨만큼의 공/체를 가집니다.',skinEffect:'바니걸 토키: 스케쥴 레벨×2',skinEffectDesc:'버티기: <아비 에슈흐>를 소환합니다.\n스케쥴 레벨<span style="color:#ffd700;font-weight:700">×2</span>의 공/체를 가집니다.'},
  neru:     {type:'버티기',desc:'기본 능력 중 하나를 무작위로 얻습니다.',skinEffect:'바니걸 네루: 두 가지를 무작위로 얻습니다.',skinEffectDesc:'버티기: 기본 능력 중 <span style="color:#ffd700;font-weight:700">두 가지</span>를 무작위로 얻습니다.'},
  toramaru: {type:'뒤끝',desc:'원래의 이로하를 소환합니다.',skinEffect:'스킨 토라마루: 수영복 이로하 소환'},
  ui:       {type:'선빵',desc:'상대의 모든 능력을 삭제합니다.',skinEffect:'수영복 우이: 상대 바로 옆 한 명도 함께 삭제',skinEffectDesc:'선빵: <span style="color:#ffd700;font-weight:700">상대와 상대 바로 옆</span> 한 명의 모든 능력을 삭제합니다.'},
  junko:    {type:'자폭 / 뒤끝',desc:'자폭: 공격력과 체력을 합쳐 공격 후 쓰러집니다.\n뒤끝: <당고>를 소환합니다. (1/1)',skinEffect:'새해 준코: 당고 2개 소환',skinEffectDesc:'뒤끝: <당고>를 <span style="color:#ffd700;font-weight:700">2개</span> 소환합니다. (당고 1/1)'},
  eimi:     {type:'개전',desc:'아군 밀레니엄 학생 수만큼 +1/+1',skinEffect:'수영복 에이미: 수×+2/+2',skinEffectDesc:'개전: 아군 밀레니엄 학생 수만큼 <span style="color:#ffd700;font-weight:700">+2/+2</span>'},
  sena:     {type:'패시브',desc:'관통의 초과 데미지만큼 아군 전체 HP를 회복합니다.',skinEffect:'사복 세나: 초과 데미지 x2 회복',skinEffectDesc:'패시브: 관통의 초과 데미지 <span style="color:#ffd700;font-weight:700">x2</span>만큼 아군 전체 HP를 회복합니다.'},
  satsuki:  {type:'뒤끝',desc:'자신을 <span style="color:#ffd700;font-weight:700">전투로</span> 쓰러뜨린 상대를 1턴간 빼앗습니다.\n(능력/효과로 사망 시엔 발동하지 않음)',skinEffect:'수영복 사츠키: 2턴간 빼앗기',skinEffectDesc:'뒤끝: 자신을 <span style="color:#ffd700;font-weight:700">전투로</span> 쓰러뜨린 상대를 <span style="color:#ffd700;font-weight:700">2턴</span>간 빼앗습니다.\n(능력/효과로 사망 시엔 발동하지 않음)'},
  makoto:   {type:'개전',desc:'<비행선>으로 교체됩니다.\n비행선: 마코토의 공/체 ×2, 자폭',skinEffect:'수영복 마코토: 비행선 자폭 후 파마머리 마코토 소환',skinEffectDesc:'개전: <비행선>으로 교체됩니다.\n(비행선: 마코토의 공/체 ×2, 자폭)\n비행선 자폭 후 <파마머리 마코토> 소환.'},
  hibiki:   {type:'개전',desc:'적 전체 -1/-1',skinEffect:'치어리더 히비키: -2/-2',skinEffectDesc:'개전: 적 전체에게 <span style="color:#ffd700;font-weight:700">-2/-2</span>을 부여합니다.'},
  yuzu:     {type:'뒤끝',desc:'이번 전투에서 쓰러진 아군 수×2 공/체의\n<아방가르드군>을 소환합니다.',skinEffect:'메이드 유즈: 쓰러진 아군 수×4',skinEffectDesc:'뒤끝: 이번 전투에서 쓰러진 아군 수<span style="color:#ffd700;font-weight:700">×4</span> 공/체의\n<아방가르드군>을 소환합니다.'},
  noa:      {type:'버티기',desc:'상대의 능력(키워드)을 복사합니다.\n아군 유우카에게도 부여합니다.',skinEffect:'파자마 노아: 아군 모든 밀레니엄 학생들에게도 부여',skinEffectDesc:'버티기: 상대의 능력(키워드)을 복사합니다.\n<span style="color:#ffd700;font-weight:700">아군 모든 밀레니엄 학생들에게도</span> 부여합니다.'},
  utaha:    {type:'패시브',desc:'밀레니엄의 모든 토큰 소환 시\n스케쥴 레벨만큼의 공/체를 추가합니다.',skinEffect:'치어리더 우타하: 스케쥴 레벨×2',skinEffectDesc:'패시브: 밀레니엄의 모든 토큰 소환 시,\n스케쥴 레벨<span style="color:#ffd700;font-weight:700">×2</span>만큼의 공/체를 추가합니다.'},
  mashiro:  {type:'저격',desc:'저격 공격. 반격을 받지 않습니다.',skinEffect:'수영복 마시로: 관통 추가',skinEffectDesc:'저격+관통: 저격 공격 + 관통 공격.\n반격 없이 모든 적을 관통합니다.'},
  hinata:   {type:'선빵',desc:'1~5회 공격합니다.',skinEffect:'수영복 히나타: 연사 추가',skinEffectDesc:'<span style="color:#ffd700;font-weight:700">연사</span>. 선빵: 1~5회 공격합니다.'},
  airship:  {type:'뒤끝',desc:'<파마머리 마코토>를 소환합니다.',skinEffect:''},
  // 7성 히든
  gehenna_prefect:        {type:'패시브 / 뒤끝',hiddenCond:'샬레에 히나·이오리·아코·치나츠가 모두 있을 때 등장.',desc:'샬레의 히나, 이오리, 아코, 치나츠를 흡수하며 등장합니다.\n흡수한 학생들 각각의 공격력 합, 체력 합을 각각 더합니다.\n뒤끝: 이번 게임에서 완전히 사라집니다.\n이후 <마지막 히나>(10/10, 광역+독사굴)를 소환합니다.',skinEffect:'',quote:'히나: 하아… 빨리 끝내지.'},
  gehenna_pandemonium:    {type:'패시브 / 뒤끝',hiddenCond:'샬레에 마코토·사츠키·이로하·이부키·치아키가 모두 있을 때 등장.',desc:'샬레의 마코토, 사츠키, 이로하, 이부키, 치아키를 흡수하며 등장합니다.\n기본 능력치 10/10에 흡수한 학생들 각각의 공격력 합, 체력 합을 각각 더합니다.\n뒤끝: 상대 무작위 2인을 이번 전투동안 빼앗습니다.\n황금 비행선(지켜줌)과 황금 토라마루(지켜줌)를 소환합니다.',skinEffect:'',quote:'마코토: 이번에야말로 트리니티를 키보토스의 지도에서 없애버릴 때다!'},
  gehenna_traingun:       {type:'패시브 / 개전 / 뒤끝',hiddenCond:'스케쥴 Lv.6 이상, 게헨나 학생만 영입했을 때 등장.',desc:'공격하지 않습니다.\n개전: 상대 전체에 6의 광역 데미지.\n살아남은 전투마다 개전 발동 횟수가 증가합니다.\n뒤끝: 이번 게임에서 완전히 사라집니다.',skinEffect:'',quote:'…<뇌제>가 남긴 조각 하나, 파편 하나 남기지 마라.'},
  trinity_mika:           {type:'패시브 / 선빵',hiddenCond:'스케쥴 Lv.6 이상, 트리니티 학생만 영입했을 때 등장.',desc:'패시브: 능력/효과로 인한 데미지와 쓰러짐에 면역입니다.\n전투 데미지로만 쓰러뜨릴 수 있습니다.\n선빵: 공격 시 상대가 게헨나 출신이면 공격력이 두 배가 됩니다.',skinEffect:'',quote:'미카: 응! 오래 기다렸지? 이제 내가 활약할 차례인 거네☆'},
  trinity_nagisa:         {type:'패시브 / 개전',hiddenCond:'샬레에 마리·사쿠라코·미네가 모두 있을 때 등장.',desc:'패시브: 트리니티 학생들을 대상으로 하는\n능력치 추가 효과에 +10/+10을 추가합니다.\n패시브: 자신을 쓰러뜨린 상대를 쓰러뜨립니다.\n개전: 마리(아이돌), 사쿠라코(아이돌), 미네(아이돌)에게\n+10/+10를 부여합니다.',skinEffect:'',quote:'나기사: 트리니티를 대표하여 인사드립니다.'},
  trinity_seia:           {type:'패시브 / 뒤끝',hiddenCond:'스케쥴 Lv.6 이상, 샬레가 트리니티만으로 구성되고 이번 게임 동안 HP 피해를 받지 않았을 때 등장.',desc:'공격하지 않습니다.\n자기 자신을 제외한 아군 트리니티 학생들은 방어 시 전투 데미지를 받지 않습니다.\n뒤끝: 아군 전체 능력이 삭제됩니다.\n세이아가 이번 게임에서 완전히 사라집니다.',skinEffect:'',quote:'세이아: 이렇듯, 모든 길은 하나로 이어지게 마련입니다.'},
  millennium_nameless:    {type:'개전',hiddenCond:'스케쥴 Lv.6 이상, 밀레니엄 학생만 영입, 아리스를 한 번도 영입하지 않았을 때 등장.',desc:'자신을 파괴합니다.\n공격력+체력 총합으로 적 왼쪽부터 순차 데미지.\n보호막을 무시하고 체력에 직접 데미지를 줍니다.',skinEffect:'',quote:'???: 결국… 언젠가는 모두가 다치게 된다는 걸.'},
  millennium_malkuth:     {type:'선빵',hiddenCond:'스케쥴 Lv.6 이상, 이번 게임에서 밀레니엄 토큰을 10회 이상 소환했을 때 등장.',desc:'선빵: 자신은 공격하지 않습니다.\n대신 스위퍼(10/10, 보호막, 자폭)를\n아군 밀레니엄 학생 수만큼 소환합니다.\n스위퍼로 적이 쓰러지면 말쿠트는 공격하지 않습니다.',skinEffect:'',quote:'말쿠트: 깃발 아래 창조된 하나의 의지. 세상에 끝네 도달한 왕국의 순례자.',quote2:'말쿠트: …말쿠트라고 합니다.'},
  millennium_death_momoi: {type:'패시브 / 선빵',hiddenCond:'샬레에 모모이·미도리·유즈·아리스가 모두 있을 때 등장.',desc:'샬레의 모든 모모이를 흡수하며 등장합니다.\n기본 능력치 10/10에 흡수한 모모이들의 공격력 합, 체력 합을 각각 더합니다.\n선빵: 적 스탯이 기본보다 높으면 부여 수치를 제거하고 공격합니다.',skinEffect:'',quote:'데스 모모이: FATALITY!!!!',quoteCls:'chat-fatal'},
  sweeper:  {type:'자폭',desc:'보호막. 자폭 공격.',skinEffect:''},
  black_lord:{type:'패시브 / 선빵',desc:'키키가 쓰러질 때 소환되는 토큰입니다.\n패시브: 모든 효과 사망/부여에 면역입니다.\n선빵: 공격 시 발동합니다.',skinEffect:''},
  // 백귀야행
  izuna:    {type:'첫인사',desc:'아군 전체 +1/+1 (자신 포함)',skinEffect:'수영복 이즈나: +2/+2',skinEffectDesc:'첫인사: 아군 전체에게 <span style="color:#ffd700;font-weight:700">+2/+2</span> (자신 포함)'},
  tsukuyo:  {type:'첫인사',desc:'아군 전체 +1/+2 (자신 포함)',skinEffect:'드레스 츠쿠요: +2/+4',skinEffectDesc:'첫인사: 아군 전체에게 <span style="color:#ffd700;font-weight:700">+2/+4</span>를 부여합니다. (자신 포함)'},
  yukari:   {type:'선빵',desc:'<계승전> 카운터를 1 쌓습니다. (최대 7)',skinEffect:'수영복 유카리: 보호막 추가',skinEffectDesc:'선빵: <계승전> 카운터를 1 쌓습니다.\n<span style="color:#ffd700;font-weight:700">보호막</span>을 추가로 가집니다.'},
  mimori:   {type:'패시브',desc:'자신을 공격한 적의 공격력을\n한 바퀴 동안 0으로 만듭니다.',skinEffect:'수영복 미모리: 이번 전투 동안',skinEffectDesc:'패시브: 자신을 공격한 적의 공격력을\n<span style="color:#ffd700;font-weight:700">이번 전투 동안</span> 0으로 만듭니다.'},
  renge:    {type:'선빵',desc:'<계승전> 카운터를 1 쌓습니다. (최대 7)',skinEffect:'수영복 렌게: 부활 추가',skinEffectDesc:'선빵: <계승전> 카운터를 1 쌓습니다.\n<span style="color:#ffd700;font-weight:700">부활</span>을 추가로 가집니다.'},
  shizuko:  {type:'개전',desc:'버프 받은 적 1명의 추가된 공격력과 체력을\n완전히 삭제합니다. (버프 받은 적 우선)\n이 효과는 모든 개전 후 가장 마지막에 발동합니다.',skinEffect:'수영복 시즈코: 적 2명 대상',skinEffectDesc:'개전: 버프 받은 적 <span style="color:#ffd700;font-weight:700">2명</span>의 추가된 공격력과 체력을\n완전히 삭제합니다. (버프 받은 적 우선)\n이 효과는 모든 개전 후 가장 마지막에 발동합니다.'},
  tsubaki:  {type:'첫인사',desc:'아군 백귀야행 학생들 +2/+2 (본인 포함)',skinEffect:'가이드 츠바키: +4/+4',skinEffectDesc:'첫인사: 아군 백귀야행 학생들에게 <span style="color:#ffd700;font-weight:700">+4/+4</span>를 부여합니다. (본인 포함)'},
  kikyou:   {type:'선빵',desc:'<계승전> 카운터를 1 쌓습니다. (최대 7)',skinEffect:'수영복 키쿄: 보호막 추가',skinEffectDesc:'선빵: <계승전> 카운터를 1 쌓습니다.\n<span style="color:#ffd700;font-weight:700">보호막</span>을 추가로 가집니다.'},
  chise:    {type:'뒤끝',desc:'아군 백귀야행 학생 2명의\n첫인사를 발동합니다.',skinEffect:'수영복 치세: 전원의 첫인사를 발동',skinEffectDesc:'뒤끝: 아군 백귀야행 <span style="color:#ffd700;font-weight:700">전원</span>의\n첫인사를 발동합니다.'},
  michiru:  {type:'개전 / 첫인사',desc:'개전: 아군 백귀야행 학생 무작위 1명에게\n기습을 부여합니다.\n첫인사: 다른 모든 백귀야행 학생들의\n첫인사를 추가로 발동합니다.',skinEffect:'드레스 미치루: 기습 2명 부여 / 첫인사 두 번 발동',skinEffectDesc:'개전: 아군 백귀야행 학생 무작위 <span style="color:#ffd700;font-weight:700">2명</span>에게\n기습을 부여합니다.\n첫인사: 다른 모든 백귀야행 학생들의\n첫인사를 추가로 <span style="color:#ffd700;font-weight:700">두 번</span> 발동합니다.'},
  nagusa:   {type:'선빵 / 뒤끝',desc:'2~5회 공격합니다.\n타격 1회당 <계승전> 카운터를 1 쌓습니다. (최대 7)\n뒤끝: 자신을 쓰러뜨린 상대를 쓰러뜨립니다.',skinEffect:'수영복 나구사: 부활 추가',skinEffectDesc:'선빵: 2~5회 공격합니다.\n타격 1회당 <계승전> 카운터를 1 쌓습니다.\n<span style="color:#ffd700;font-weight:700">부활</span>을 추가로 가집니다.\n뒤끝: 자신을 쓰러뜨린 상대를 쓰러뜨립니다.'},
  wakamo:   {type:'선빵 / 패시브',desc:'2~5회 공격합니다.\n타격 횟수만큼 <호버크래프트> 카운터를 쌓습니다.\n패시브: 카운터 4개가 쌓이면 0으로 되돌리며 <호버크래프트>를 소환합니다.\n(호버크래프트: 10/10, 뒤끝: 아군 필드에 와카모가 없다면 와카모를 불러옵니다.)',skinEffect:'수영복 와카모: 4~10회, 카운터 2배',skinEffectDesc:'선빵: <span style="color:#ffd700;font-weight:700">4~10회</span> 공격합니다.\n타격 횟수<span style="color:#ffd700;font-weight:700">×2</span>만큼 <호버크래프트> 카운터를 쌓습니다.\n패시브: 카운터 4개가 쌓이면 0으로 되돌리며 <호버크래프트>를 소환합니다.\n(호버크래프트: 20/20, 뒤끝: 아군 필드에 와카모가 없다면 와카모를 불러옵니다.)'},
  hovercraft:{type:'뒤끝',desc:'아군 와카모가 모두 쓰러진 상태라면\n와카모를 소환합니다.\n(황금 호버크래프트: 와카모(수영복) 소환)',skinEffect:'스킨 호버크래프트: 20/20\n와카모(수영복) 소환'},
  // 백귀야행 7성
  hkyk_saikyo:   {type:'히든',hiddenCond:'스케쥴 Lv.6 이상, 샬레가 백귀야행 학생만으로 구성되었을 때 등장.',desc:'순수한 힘. 40/40 바닐라 스탯.',skinEffect:'',quote:'???: 하여튼 뭔가 엄청나게 사악한 모습이었다……'},
  hkyk_kuzunoha: {type:'개전 / 선빵',hiddenCond:'이번 게임에서 백귀야행 학생 13명 전원을 한 번이라도 영입/발견한 적이 있을 때 등장.',desc:'영입 시 샬레의 모든 학생을 삭제합니다.\n개전: 쿠즈노하와 상대 1번 학생을 제외한\n모든 학생을 효과 삭제 후 처치합니다.\n이 효과는 가장 먼저 발동합니다.\n선빵: 공격 대상의 모든 효과를 삭제합니다.',skinEffect:'',quote:'쿠즈노하: 늦으나 빠르나… 지금의 자신이 아니게 될 것임은 분명할 게야.'},
  hkyk_showdown: {type:'액션카드',desc:'유카리, 렌게, 키쿄, 나구사에게\n+10/+10과 보호막, 연사, 부활을 부여합니다.\n(수영복 포함)',skinEffect:''},
  // 신규 7성
  gehenna_p68:            {type:'패시브 / 개전 / 뒤끝',hiddenCond:'샬레에 카요코·무츠키·하루카·아루가 모두 있을 때 등장.',desc:'샬레의 카요코, 무츠키, 하루카, 아루를 흡수하며 등장합니다.\n개전: 상대 배치 순서를 완전히 역순으로 변경합니다.\n지켜줌을 무시하고, 가장 체력이 낮은 적을 공격 대상으로 정합니다.\n뒤끝: 흡수한 아루·카요코·무츠키·하루카를 다시 불러냅니다. 능력치는 흡수될 때의 스탯을 가집니다.',skinEffect:'',quote:'아루: 우릴 고용하는 비용은 꽤 비싸다고? 선생님.'},
  millennium_seminar:     {type:'패시브 / 개전',hiddenCond:'샬레에 유우카·노아·코유키·리오가 모두 있을 때 등장.',desc:'샬레의 유우카, 노아, 코유키, 리오를 흡수하며 등장합니다.\n개전: 상대 전체 능력 삭제 후 공/체를 뒤집습니다.\n삭제된 기본능력 중 최대 3개, 특수능력 중 최대 3개를 자신에게 복사합니다.',skinEffect:'',quote:'리오: 우리는, 빛이 없는 곳에서 만날 거야.'},
  millennium_cc:          {type:'패시브 / 뒤끝',hiddenCond:'샬레에 네루·아스나·아카네·카린·토키가 모두 있을 때 등장.',desc:'샬레의 네루, 아스나, 아카네, 카린, 토키를 흡수하며 등장합니다.\n패시브: <span style="color:#ffd700;font-weight:700">아군 전체의 코인토스가 항상 성공</span>합니다.\n뒤끝: <TNT>(1/20, 자폭) 4개와 <아비 에슈흐 프로토>(10/10) 1개를 소환합니다.',skinEffect:'',quote:'네루: 야, 다들 모여. 일 할 시간이다.'},
  trinity_makeup:         {type:'패시브',hiddenCond:'샬레에 히후미·코하루·하나코·아즈사가 모두 있을 때 등장.',desc:'샬레의 히후미, 코하루, 하나코, 아즈사를 흡수하며 등장합니다.\n전투 승리 시 보충수업부가 생존해 있으면 상대 HP를 0으로 만듭니다.',skinEffect:'',quote:'히후미: 그러니까, 지금부터 시작하겠습니다! 우리들의 이야기를!',quote2:'히후미: 학원과 청춘의 이야기를!!'},
  trinity_justice:        {type:'패시브 / 개전 / 뒤끝',hiddenCond:'샬레에 하스미·츠루기·마시로·이치카가 모두 있을 때 등장.',desc:'샬레의 하스미, 츠루기, 마시로, 이치카를 흡수하며 등장합니다.\n패시브: 전투 중 쓰러뜨린 학생의 공격력과 최대 체력을 흡수합니다.\n개전: 자신의 공격력과 체력을 3배로 합니다.\n뒤끝: <span style="color:#ffd700;font-weight:700">보호막, 연사</span>를 가진 진지한 츠루기를 불러냅니다.',skinEffect:'',quote:'츠루기: 자아, 사냥의 시간이다-!'},
  // ===== 신규 캐릭터 =====
  ibuki:    {type:'개전',desc:'아군 마코토, 치아키, 사츠키, 이로하에게\n+5/+5를 부여합니다.',skinEffect:'수영복 이부키: +10/+10',skinEffectDesc:'개전: 아군 마코토, 치아키, 사츠키, 이로하에게\n<span style="color:#ffd700;font-weight:700">+10/+10</span>을 부여합니다.'},
  chiaki:   {type:'저격',desc:'저격 공격. 반격을 받지 않습니다.',skinEffect:'수영복 치아키: 연사 추가',skinEffectDesc:'저격+연사: 저격 공격. 반격을 받지 않습니다.\n<span style="color:#ffd700;font-weight:700">연사</span>로 2회 공격합니다.'},
  koyuki:   {type:'선빵',desc:'공격 대상의 공격력과 체력 수치를\n이번 전투 동안 뒤집습니다.',skinEffect:'파자마 코유키: 상대 무작위 능력 삭제 추가',skinEffectDesc:'선빵: 공격 대상의 공격력과 체력 수치를 뒤집습니다.\n추가로 상대의 <span style="color:#ffd700;font-weight:700">무작위 능력 하나를 삭제</span>합니다.'},
  akane:    {type:'개전',desc:'아군 네루, 카린, 아스나, 아카네, 토키에게\n"뒤끝: C4(5/1 자폭) 소환"을 부여합니다.\n(중복되지 않습니다.)',skinEffect:'버니걸 아카네: C4를 2개 소환',skinEffectDesc:'개전: 아군 네루, 카린, 아스나, 아카네, 토키에게\n"뒤끝: C4(5/1 자폭) <span style="color:#ffd700;font-weight:700">2개</span> 소환"을 부여합니다.\n(중복되지 않습니다.)'},
  karin:    {type:'저격+관통',desc:'저격 공격 + 관통 공격.\n반격 없이 모든 적을 관통합니다.',skinEffect:'버니걸 카린: 연사 추가',skinEffectDesc:'저격+관통+<span style="color:#ffd700;font-weight:700">연사</span>: 저격 공격 + 관통 공격.\n반격 없이 모든 적을 관통합니다.\n연사로 2회 공격합니다.'},
  asuna:    {type:'패시브',desc:'우선권 코인토스에서, 아스나는 무조건 성공합니다.',skinEffect:'버니걸 아스나: 맨 왼쪽 아군도 성공 추가',skinEffectDesc:'패시브: 우선권 코인토스에서, 아스나는 무조건 성공합니다.\n추가로 <span style="color:#ffd700;font-weight:700">자신 제외 맨 왼쪽 아군</span>도 코인토스에 성공합니다.'},
  koharu:   {type:'선빵',desc:'공격 시, 5% 확률로 대상의 능력을 제거하고\n즉사시킵니다.',skinEffect:'수영복 코하루: 확률 10%',skinEffectDesc:'선빵: 공격 시, <span style="color:#ffd700;font-weight:700">10%</span> 확률로 대상의 능력을 제거하고\n즉사시킵니다.'},
  hasumi:   {type:'패시브',desc:'전투당 한 번, 처음으로 쓰러뜨린 적의\n공격력과 체력을 흡수합니다.',skinEffect:'수영복 하스미: 두 배로 흡수',skinEffectDesc:'패시브: 전투당 한 번, 처음으로 쓰러뜨린 적의\n공격력과 체력을 <span style="color:#ffd700;font-weight:700">두 배로</span> 흡수합니다.'},
  suzumi:   {type:'패시브',desc:'상대 전원의 코인토스 확률을\n40% 내립니다.',skinEffect:'마법소녀 스즈미: 70% 내림',skinEffectDesc:'패시브: 상대 전원의 코인토스 확률을\n<span style="color:#ffd700;font-weight:700">70%</span> 내립니다.'},
  mutsuki:  {type:'관통',desc:'관통 공격으로 적을 통과해 뒤의 적도 공격합니다.',skinEffect:'새해 무츠키: 개전 공격력+5',skinEffectDesc:'관통: 관통 공격으로 적을 통과해 뒤의 적도 공격합니다.\n<span style="color:#ffd700;font-weight:700">개전: 공격력 +5</span>'},
  haruka:   {type:'패시브',desc:'아루, 무츠키, 카요코가 공격받으면\n공격자에게 5회 반격합니다.',skinEffect:'새해 하루카: 10회 반격',skinEffectDesc:'패시브: 아루, 무츠키, 카요코가 공격받으면\n공격자에게 <span style="color:#ffd700;font-weight:700">10회</span> 반격합니다.'},
  // 총학생회
  haine:    {type:'패시브',desc:'팔면 아군 전체 +2/+2',skinEffect:'인터뷰 하이네: +4/+4',skinEffectDesc:'패시브: 팔면 아군 전체에 <span style="color:#ffd700;font-weight:700">+4/+4</span>를 부여합니다.'},
  momoka:   {type:'패시브',desc:'매 턴 추가 리롤이 1회 무료입니다.',skinEffect:'승무원 모모카: 2회 무료',skinEffectDesc:'패시브: 매 턴 추가 리롤이 <span style="color:#ffd700;font-weight:700">2회</span> 무료입니다.'},
  ayumu:    {type:'패시브',desc:'액션카드의 수치 증가에 +2/+2가 추가됩니다.',skinEffect:'승무원 아유무: +4/+4 추가',skinEffectDesc:'패시브: 액션카드의 수치 증가에 <span style="color:#ffd700;font-weight:700">+4/+4</span> 추가됩니다.'},
  aoi:      {type:'패시브',desc:'매 턴 (청휘석)+2를 추가로 얻습니다.',skinEffect:'인터뷰 아오이: +4 추가',skinEffectDesc:'패시브: 매 턴 (청휘석아이콘)<span style="color:#ffd700;font-weight:700">+4</span>를 추가로 얻습니다.'},
  kaya:     {type:'개전',desc:'아군 맨 왼쪽 학생을 쓰러뜨리고\n먹은 상대의 공격력과 체력을 각각 2배로 적용하여 흡수합니다. (가장 마지막에 발동)',skinEffect:'쿠데타 카야: 네 배로 흡수',skinEffectDesc:'개전: 아군 맨 왼쪽 학생을 쓰러뜨리고\n먹은 상대의 공격력과 체력을 각각 <span style="color:#ffd700;font-weight:700">네 배로</span> 적용하여 흡수합니다.\n(가장 마지막에 발동)'},
  lin:      {type:'패시브',desc:'아군의 뒤끝과 첫인사가\n한 번 더 발동합니다.',skinEffect:'승무원 린: 두 번 더 발동',skinEffectDesc:'패시브: 아군의 뒤끝과 첫인사가\n<span style="color:#ffd700;font-weight:700">두 번</span> 더 발동합니다.'},
  // ===== 아비도스 =====
  ayane:    {type:'뒤끝',desc:'다음 턴 청휘석 +1',skinEffect:'수영복 아야네: 청휘석 +2',skinEffectDesc:'뒤끝: 다음 턴 청휘석 <span style="color:#ffd700;font-weight:700">+2</span>'},
  serika:   {type:'패시브',desc:'영입 페이즈가 끝나는 순간, 남은 청휘석을 공격력과 체력에 영구히 더합니다.',skinEffect:'수영복 세리카: 두 배로 더합니다.',skinEffectDesc:'패시브: 영입 페이즈가 끝나는 순간, 남은 청휘석을 공격력과 체력에 영구히 <span style="color:#ffd700;font-weight:700">두 배로</span> 더합니다.'},
  nonomi:   {type:'개전',desc:'노노미가 샬레에 존재한 후부터 사용된 모든 청휘석 양을 반으로 나누어,\n맨 왼쪽 학생의 공/체에 각각 더합니다. (소수점 버림)',skinEffect:'수영복 노노미: 나누지 않고 그대로 더합니다.',skinEffectDesc:'개전: 노노미가 샬레에 존재한 후부터 사용된 모든 청휘석 양을,\n맨 왼쪽 학생의 공/체에 각각 <span style="color:#ffd700;font-weight:700">그대로</span> 더합니다.'},
  shiroko:  {type:'패시브',desc:'전투 중 시로코가 쓰러뜨린 적의 수만큼,\n다음 턴 청휘석을 얻습니다.',skinEffect:'수영복 시로코: 두 배로 얻습니다.',skinEffectDesc:'패시브: 전투 중 시로코가 쓰러뜨린 적의 수의 <span style="color:#ffd700;font-weight:700">두 배</span>만큼,\n다음 턴 청휘석을 얻습니다.'},
  hoshino:  {type:'뒤끝',desc:'자신의 공격력과 체력을 무작위 아군 1인에게 부여합니다.',skinEffect:'수영복 호시노: 2인에게 부여합니다.',skinEffectDesc:'뒤끝: 자신의 공격력과 체력을 무작위 아군 <span style="color:#ffd700;font-weight:700">2인</span>에게 부여합니다.'},
  Shiroko_Terror: {type:'패시브 / 개전 / 뒤끝',hiddenCond:'샬레에 시로코·호시노·노노미·아야네·세리카가 모두 있을 때 등장.',desc:'패시브: 샬레의 시로코, 호시노, 노노미, 아야네, 세리카를 흡수하며 등장합니다.\n개전: 가장 체력이 높은 적과 자신만 남고 모두 파괴합니다.\n뒤끝: 흡수한 모두를 다시 불러냅니다.',skinEffect:'',quote:'시로코: 그러니까 아마 나도…… 괜찮을 거야.'},
  // ===== 산해경 =====
  kokona:   {type:'첫인사',desc:'스케쥴 레벨 이하의 자기 자신을 제외한\n무작위 학생을 <span style="color:#ffd700;font-weight:700">벤치</span>로 불러옵니다.\n벤치가 차 있으면 발동하지 않습니다.',skinEffect:'',skinEffectDesc:''},
  mina:     {type:'개전 / 뒤끝',desc:'개전: 아군 전체 -1/-1을 부여합니다.\n뒤끝: 아군 전체 +3/+3을 부여합니다.',skinEffect:'리코더 미나: 뒤끝 +6/+6',skinEffectDesc:'개전: 아군 전체 -1/-1을 부여합니다.\n뒤끝: 아군 전체 <span style="color:#ffd700;font-weight:700">+6/+6</span>을 부여합니다.'},
  reijo:    {type:'패시브',desc:'데미지를 주지 못하면,\n자신도 데미지를 받지 않습니다.',skinEffect:'사복 레이죠: 관통 추가',skinEffectDesc:'패시브: 데미지를 주지 못하면, 자신도 데미지를 받지 않습니다.\n<span style="color:#ffd700;font-weight:700">관통</span>을 추가로 가집니다.'},
  saya:     {type:'패시브',desc:'전투 중 효과를 받지 않습니다.',skinEffect:'사복 사야: 적의 효과만 면역',skinEffectDesc:'패시브: 전투 중 <span style="color:#ffd700;font-weight:700">적의</span> 효과를 받지 않습니다.'},
  // ===== 아리우스 분교 =====
  saori:    {type:'개전',desc:'코인토스에 실패했다면, 기본 능력이 모두 삭제됩니다.',skinEffect:'',skinEffectDesc:'개전: 코인토스에 실패했다면, 기본 능력이 모두 삭제됩니다.'},
  misaki:   {type:'개전',desc:'코인토스에 실패했다면, 파괴됩니다.',skinEffect:'스킨 미사키: 저격 추가',skinEffectDesc:'개전: 코인토스에 실패했다면, 파괴됩니다.\n<span style="color:#ffd700;font-weight:700">저격</span> 추가.'},
  atsuko:   {type:'개전',desc:'무작위 아군 3인의 개전 효과를 삭제합니다.\n이 효과는 가장 먼저(쿠즈노하·리오 다음) 발동합니다.',skinEffect:'스킨 아츠코: 아군 전체',skinEffectDesc:'개전: <span style="color:#ffd700;font-weight:700">아군 전체</span>의 개전 효과를 삭제합니다.\n이 효과는 가장 먼저(쿠즈노하·리오 다음) 발동합니다.'},
  hiyori:   {type:'개전',desc:'코인토스에 실패했다면, 공격할 수 없습니다.',skinEffect:'스킨 히요리: 질풍(연사) 추가',skinEffectDesc:'개전: 코인토스에 실패했다면, 공격할 수 없습니다.\n<span style="color:#ffd700;font-weight:700">연사</span> 추가.'},
  subaru:   {type:'개전',desc:'코인토스에 실패했다면, 공격력과 체력을 절반(내림)으로 합니다.',skinEffect:'스킨 스바루: 환생(부활) 추가',skinEffectDesc:'개전: 코인토스에 실패했다면, 공격력과 체력을 절반(내림)으로 합니다.\n<span style="color:#ffd700;font-weight:700">부활</span> 추가.'},
  arius_squad: {type:'패시브 / 개전 / 뒤끝',hiddenCond:'샬레에 사오리, 미사키, 아츠코, 히요리가 모두 있을 때 등장.',desc:'패시브: 샬레의 사오리, 미사키, 아츠코, 히요리를 흡수하며 등장합니다.\n개전: base 공격력만큼 아군 적군 전체에게 데미지를 준 후 자신을 파괴합니다.\n뒤끝: 흡수했던 학생들을 흡수 시점 상태로 다시 소환합니다.',skinEffect:'',quote:'아리우스: 우리는 너희와 다른 곳에서 왔어.'},
  // ===== 발키리/SRT =====
  kirino:  {type:'',desc:'',skinEffect:'스킨 키리노: 버티기 시 +2/+2',skinEffectDesc:'<span style="color:#ffd700;font-weight:700">버티기</span> 추가: 버틸 때마다 자신에게 <span style="color:#ffd700;font-weight:700">+2/+2</span>.'},
  fubuki:  {type:'첫인사',desc:'아군 학생 1인을 선택해\n자신의 현재 공격력과 체력만큼 부여합니다.',skinEffect:'스킨 후부키: 두 번 부여',skinEffectDesc:'첫인사: 아군 학생 1인을 선택해\n자신의 현재 공격력과 체력만큼 <span style="color:#ffd700;font-weight:700">두 번</span> 부여합니다.'},
  miyu:    {type:'패시브',desc:'공격 시 공격력 대신\n자신의 체력으로 데미지를 계산합니다.',skinEffect:'스킨 미유: 연사 추가',skinEffectDesc:'패시브: 공격 시 공격력 대신 체력으로 계산.\n<span style="color:#ffd700;font-weight:700">연사</span> 추가.'},
  moe:     {type:'뒤끝',desc:'자신을 공격한 대상에게\n자신의 공격력만큼 피해를 줍니다.\n(보호막에 막힙니다)',skinEffect:'스킨 모에: 뒤끝 관통',skinEffectDesc:'뒤끝: 자신을 공격한 대상에게 자신의 공격력만큼 피해.\n뒤끝 데미지에 <span style="color:#ffd700;font-weight:700">관통</span> 추가.'},
  saki:    {type:'개전',desc:'상대의 지켜줌 무작위 1인을 해제합니다.',skinEffect:'스킨 사키: 전원 해제',skinEffectDesc:'개전: 상대의 지켜줌을 <span style="color:#ffd700;font-weight:700">전원</span> 해제합니다.'},
  kurumi:  {type:'버티기',desc:'버틸 때마다 아군 전체에게 +1/+2 부여.',skinEffect:'스킨 쿠루미: +2/+4',skinEffectDesc:'버티기: 버틸 때마다 아군 전체에게 <span style="color:#ffd700;font-weight:700">+2/+4</span> 부여.'},
  otogi:   {type:'',desc:'',skinEffect:'스킨 오토기: 연사 추가',skinEffectDesc:'저격+부활+<span style="color:#ffd700;font-weight:700">연사</span>.'},
  niko:    {type:'패시브',desc:'아군의 버티기가 두 번 발동합니다.\n(니코가 여러 명이어도 2회만 적용)',skinEffect:'스킨 니코: 세 번 발동',skinEffectDesc:'패시브: 아군의 버티기가 <span style="color:#ffd700;font-weight:700">세 번</span> 발동합니다.'},
  konoka:  {type:'뒤끝',desc:'이번 전투 동안, 아군 발키리/SRT 전체 +4/+4.',skinEffect:'스킨 코노카: +8/+8',skinEffectDesc:'뒤끝: 이번 전투 동안, 아군 발키리/SRT 전체 <span style="color:#ffd700;font-weight:700">+8/+8</span>.'},
  miyako:  {type:'패시브',desc:'미야코 외에 발키리/SRT 학생이 살아있는 한,\n부활이 항상 유지됩니다.',skinEffect:'스킨 미야코: 부활 시 +3 공격력',skinEffectDesc:'패시브: 미야코 외에 발키리/SRT 학생이 살아있는 한, 부활이 항상 유지됩니다.\n부활이 발동할 때마다 <span style="color:#ffd700;font-weight:700">+3 공격력</span>.'},
  yukino:  {type:'패시브',desc:'전투 시 상대를 쓰러뜨리는 경우,\n유키노는 전투 피해를 받지 않습니다.\n(공격·방어 모두 적용. 효과 피해는 받습니다.)',skinEffect:'스킨 유키노: +5/+5',skinEffectDesc:'패시브: 전투 시 상대를 쓰러뜨리는 경우, 전투 피해 X (공격·방어 모두).\n<span style="color:#ffd700;font-weight:700">+5/+5</span>.'},
  kanna:   {type:'개전',desc:'이번 게임에서 발키리/SRT 학생이 직접\n쓰러뜨린 적의 수의 절반(올림)을 공격력에,\n직접 쓰러진 발키리/SRT 학생 수의 절반(올림)을\n체력에 추가합니다. (전투 개전 시점 갱신)',skinEffect:'스킨 칸나: 절반이 아닌 전체',skinEffectDesc:'개전: 이번 게임에서 발키리/SRT 학생이 직접 쓰러뜨린 적의 수 <span style="color:#ffd700;font-weight:700">전체</span>를 공격력에, 직접 쓰러진 발키리/SRT 학생 수 <span style="color:#ffd700;font-weight:700">전체</span>를 체력에 추가합니다.'},
  rumi:     {type:'개전',desc:'자신에게 걸려 있는 모든 기본능력을\n무작위 아군 1인에게 부여합니다.',skinEffect:'어린이 루미: 2인에게',skinEffectDesc:'개전: 자신에게 걸려 있는 모든 기본능력을\n무작위 아군 <span style="color:#ffd700;font-weight:700">2인</span>에게 부여합니다.'},
  shun:     {type:'패시브',desc:'공격에 적이 쓰러지면, 다음 무작위 대상을 공격합니다. 가능하다면 반복합니다.',skinEffect:'어린이 슌: 보호막 추가',skinEffectDesc:'패시브: 공격에 적이 쓰러지면, 다음 무작위 대상을 공격합니다. 가능하다면 반복합니다.\n<span style="color:#ffd700;font-weight:700">보호막</span>을 추가로 가집니다.'},
  kisaki:   {type:'첫인사',desc:'아군 학생 1인을 선택하여\n스킨으로 교체합니다.',skinEffect:'사복 키사키: 전원 교체',skinEffectDesc:'첫인사: 아군 학생 <span style="color:#ffd700;font-weight:700">전원</span>을\n스킨으로 교체합니다.'},
  shanhai_kiki: {type:'패시브',hiddenCond:'스케쥴 Lv.6 이상, 샬레에 키사키가 있고 산해경 학생 5명 이상이 있을 때 등장.',desc:'패시브: 샬레의 키사키를 흡수하며 등장합니다. 공격력과 체력을 더합니다.\n쓰러지면 <현룡문의 검은 군주>(30/30)를 소환합니다.',skinEffect:'',quote:'키키: 와아-! 높-이, 높-이!! 키키는 선생님이 너무 좋아!!'},
  red_winter_minori: {type:'패시브 / 개전 / 뒤끝',hiddenCond:'10턴 이상, 스케쥴 Lv.1 유지 시 리롤 60% 등장.',desc:'패시브: 이 카드는 공격하지 않습니다. 아군 필드에 이 카드가 마지막으로 남아 있을 경우, 패배합니다.\n개전: 이 카드에 걸린 모든 기본 능력을 해제합니다. 이후 기본 능력을 얻어도 효과가 없습니다.\n뒤끝: <성난 군중> 토큰을 소환합니다. 파괴될 경우 다음 토큰을 소환합니다. 13번까지 반복됩니다.',skinEffect:'',quote:'미노리: 아무거나 규탄한다! 이것저것 보장하라!!'},
  Kei_usb: {type:'패시브',hiddenCond:'스케쥴 Lv.6 이상, 밀레니엄 학생만 영입, 샬레에 아리스가 있고 왕녀를 영입한 적이 없을 때 등장.',desc:'공격하지 않습니다.\n전투 데미지를 받으면 아리스가 대신 받습니다.\n전투 종료 시 생존하면 아리스&케이로 변화합니다.',skinEffect:''},
  Arisu_Kei: {type:'선빵',desc:'보드의 아리스와 케이를 흡수하며 등장합니다.\n선빵: 상대 전원을 왼쪽부터 1회씩 공격합니다.\n이 공격은 보호막을 무시합니다.',skinEffect:''},
  // ===== 스킨 동일 (변화 없음) =====
  reisa:    {type:'버티기',desc:'카즈사를 불러옵니다. (전투 중 1회)',skinEffect:'마법소녀 레이사: 밴드 카즈사 소환',skinEffectDesc:'버티기: 밴드 카즈사를 불러옵니다. (전투 중 1회)'},
  pina:     {type:'',desc:'',skinEffect:'가이드 피나: 개전 +2/+2',skinEffectDesc:'개전: 자신에게 <span style="color:#ffd700;font-weight:700">+2/+2</span>를 부여합니다.'},
  hanako:   {type:'',desc:'',skinEffect:'수영복 하나코: 개전 체력+5',skinEffectDesc:'개전: 자신에게 <span style="color:#ffd700;font-weight:700">+0/+5</span>를 부여합니다.'},
  ichika:   {type:'',desc:'',skinEffect:'수영복 이치카: 부활 추가',skinEffectDesc:'보호막+연사+<span style="color:#ffd700;font-weight:700">부활</span>'},
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
  cathpalug: {id:'cathpalug', name:'카스팔루스', school:'트리니티', tier:0, atk:4, hp:3, kw:[],  img:'token/CathPalug.png'},
  perorosama:{id:'perorosama',name:'페로로님',   school:'트리니티', tier:0, atk:3, hp:1, kw:[],          img:'token/perorosama.png'},
  abi_eshuh: {id:'abi_eshuh', name:'아비 에슈흐',school:'밀레니엄', tier:0, atk:2, hp:2, kw:[],          img:'token/Abi_Eshuh.png'},
  dango:     {id:'dango',     name:'당고',       school:'게헨나',   tier:0, atk:1, hp:1, kw:[],          img:'token/Dango.png'},
  airship:   {id:'airship',   name:'비행선',     school:'게헨나',   tier:0, atk:1, hp:1, kw:['selfdestruct'], img:'token/Airship.png'},
  makoto_perma:{id:'makoto_perma',name:'파마머리 마코토',school:'게헨나',tier:0,atk:6,hp:6,kw:[],       img:'token/Makoto_(perma).png'},
  avant_garde:{id:'avant_garde',name:'아방가르드군',school:'밀레니엄',tier:0, atk:1, hp:1, kw:[],        img:'token/Avant_garde.png'},
  thunder_e: {id:'thunder_e', name:'천둥이',     school:'밀레니엄', tier:0, atk:8, hp:2, kw:['shield'],  img:'token/Thunder_E.png'},
  sweeper:   {id:'sweeper',  name:'스위퍼',     school:'밀레니엄', tier:0, atk:10,hp:10,kw:['shield','selfdestruct'], img:'token/Sweeper.png'},
  hina_the_last:{id:'hina_the_last',name:'마지막 히나',school:'게헨나',tier:0,atk:10,hp:10,kw:['cleave','poison'],img:'token/Hina_the_last.png'},
  hovercraft:{id:'hovercraft',name:'호버크래프트',school:'백귀야행',tier:0, atk:10,hp:10,kw:[],          img:'token/HoverCraft.png'},
  c4:        {id:'c4',        name:'C4',          school:'밀레니엄', tier:0, atk:5, hp:1, kw:['selfdestruct'], img:'token/C4.png'},
  tnt:       {id:'tnt',       name:'TNT',         school:'밀레니엄', tier:0, atk:1, hp:20, kw:['selfdestruct'], img:'token/C4.png'},
  abi_eshuh_proto:{id:'abi_eshuh_proto',name:'아비 에슈흐 프로토',school:'밀레니엄',tier:0, atk:10, hp:10, kw:[], img:'token/Abi_Eshuh.png'},
  black_lord:{id:'black_lord',name:'현룡문의 검은 군주',school:'산해경',tier:0,atk:30,hp:30,kw:['shield','preemptive'],img:'token/Black_lord.png'},
  citizen_wave:{id:'citizen_wave',name:'성난 군중',school:'붉은겨울',tier:0,atk:15,hp:15,kw:['selfdestruct'],img:'token/Citizen_wave.png'},
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
  {id:'visit_plan',name:'정기 일정',cost:3,tier:2,desc:'이번 게임 동안 스케쥴 학생 공/체 +2',target:'auto',img:'img/spell/visit_plan.png',
    effect:function(G){var ab=getAyumuBonus();var buff=2+ab;G.shopBuff=(G.shopBuff||0)+buff;
      // 현재 상점에도 즉시 적용
      for(var _vi=0;_vi<G.shop.length;_vi++){if(G.shop[_vi]&&!G.shop[_vi].isSpell&&!G.shop[_vi].isHidden){G.shop[_vi].atk+=buff;G.shop[_vi].hp+=buff;}}
    }},
  {id:'visit_buff',name:'방과 후 수업',cost:2,tier:2,desc:'선택 학생 +4/+4',target:'select_ally',img:'img/spell/Hard_work.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;var ab=getAyumuBonus();p.board[idx].atk+=4+ab;p.board[idx].hp+=4+ab;p.board[idx].maxHp=(p.board[idx].maxHp||p.board[idx].hp)+4+ab;logBuff(p.board[idx],'방문 예정',4+ab,4+ab);return true;}},
  {id:'aggro',name:'어그로꾼',cost:1,tier:3,desc:'선택 학생에게 지켜줌 부여',target:'select_ally',img:'img/spell/aggro.png',
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
  {id:'clover',name:'행운의 클로버',cost:6,tier:4,desc:'선택 학생에게 보호막 부여',target:'select_ally',img:'img/spell/clover.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;addKw(p.board[idx],'shield');return true;}},
  {id:'venom',name:'독사 무브',cost:3,tier:5,desc:'선택 학생에게 독사굴 부여',target:'select_ally',img:'img/spell/venom.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;addKw(p.board[idx],'poison');return true;}},
  {id:'dressing',name:'탈의실',cost:7,tier:6,desc:'선택 학생을 황금으로 변경 (게임당 1회)',target:'select_ally',once:true,img:'img/spell/dressing.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;var m=p.board[idx];if(m.isSkin)return false;var tmpl=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id===m.baseId)tmpl=CHARS[j];if(!tmpl)return false;var bonusAtk=m.atk-tmpl.atk;var bonusHp=m.hp-tmpl.hp;m.name=tmpl.skin;m.atk=tmpl.atk*2+1+bonusAtk;m.hp=tmpl.hp*2+1+bonusHp;m.maxHp=m.hp;m.isSkin=true;m.img=tmpl.imgGold;applySkinKwTransform(tmpl,m);return true;}},
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
  {id:'get_set_go',name:'겟, 셋, 고!',cost:5,tier:4,desc:'학교당 무작위 1명에게 +8/+8',target:'auto',img:'img/spell/get_set_go.jpg',
    effect:function(G){var p=G.players[0];var ab=getAyumuBonus();var schools={};for(var i=0;i<p.board.length;i++){var s=p.board[i].school;if(!schools[s])schools[s]=[];schools[s].push(i);}for(var s in schools){var arr=schools[s];var pick=arr[Math.floor(Math.random()*arr.length)];p.board[pick].atk+=8+ab;p.board[pick].hp+=8+ab;p.board[pick].maxHp=(p.board[pick].maxHp||p.board[pick].hp)+8+ab;logBuff(p.board[pick],'겟, 셋, 고!',8+ab,8+ab);}return true;}},
  {id:'twins',name:'우린 서로 닮았어요',cost:4,tier:5,desc:'2장 있는 학생을 스킨으로 합체',target:'auto',img:'img/spell/Twins.png',
    effect:function(G){var p=G.players[0];var counts={};for(var i=0;i<p.board.length;i++){if(!p.board[i].isSkin){var bid=p.board[i].baseId;counts[bid]=(counts[bid]||0)+1;}}var target=null;for(var bid in counts){if(counts[bid]>=2){target=bid;break;}}if(!target)return false;var tmpl=null;for(var i=0;i<CHARS.length;i++)if(CHARS[i].id===target){tmpl=CHARS[i];break;}if(!tmpl)return false;var mKw=[],bAtk=0,bHp=0,newBoard=[],removed=0;for(var i=0;i<p.board.length;i++){if(p.board[i].baseId===target&&!p.board[i].isSkin&&removed<2){var u=p.board[i];for(var k=0;k<(u.kw||[]).length;k++){if(mKw.indexOf(u.kw[k])===-1)mKw.push(u.kw[k]);}bAtk+=u.atk-tmpl.atk;bHp+=u.hp-tmpl.hp;removed++;}else{newBoard.push(p.board[i]);}}p.board=newBoard;var gld=makeMinion(tmpl,true);gld.kw=mKw;gld.atk+=bAtk;gld.hp+=bHp;gld.maxHp=gld.hp;applySkinKwTransform(tmpl,gld);p.board.push(gld);triggerBattlecry(gld,p);showDiscover(p);return true;}},
  {id:'on_your_mark',name:'온 유어 마크',cost:3,tier:5,desc:'학교당 1명에게 무작위 기본 능력 부여\n(중복 없음)',target:'auto',img:'img/spell/On_your_mark.png',
    effect:function(G){var p=G.players[0];var basicPool=['taunt','shield','poison','reborn','cleave','pierce','ranged','windfury','selfdestruct'];var schools={};for(var i=0;i<p.board.length;i++){var s=p.board[i].school;if(!schools[s])schools[s]=[];schools[s].push(i);}var usedKw={};for(var s in schools){var arr=schools[s];var pick=arr[Math.floor(Math.random()*arr.length)];var u=p.board[pick];var avail=basicPool.filter(function(k){return !hasKw(u,k)&&!usedKw[k];});if(avail.length===0)continue;var kw=avail[Math.floor(Math.random()*avail.length)];addKw(u,kw);usedKw[kw]=true;}return true;}},
  {id:'bunny_toss',name:'바니 토스',cost:3,tier:6,desc:'다음 전투 코인토스 성공률 +30%',target:'auto',img:'img/spell/bunny_toss.png',
    effect:function(G){G.bunnyTossBonus=(G.bunnyTossBonus||0)+0.30;}},
  {id:'poison_grail',name:'독이 든 성배',cost:4,tier:6,desc:'아군 학생 1명을 돌려보내고,\n그 공격력과 체력을 무작위 아군 1명에게 부여합니다.',target:'select_ally',img:'img/spell/consume.png',
    effect:function(G,idx){var p=G.players[0];if(idx===undefined||!p.board[idx])return false;if(p.board.length<=1)return false;var removed=p.board.splice(idx,1)[0];returnToPool(removed.baseId,removed.isSkin?3:1);var targets=[];for(var i=0;i<p.board.length;i++)targets.push(i);if(targets.length===0)return false;var pick=targets[Math.floor(Math.random()*targets.length)];var ab=getAyumuBonus();p.board[pick].atk+=removed.atk+ab;p.board[pick].hp+=removed.hp+ab;p.board[pick].maxHp=(p.board[pick].maxHp||p.board[pick].hp)+removed.hp+ab;logBuff(p.board[pick],'독이 든 성배',removed.atk+ab,removed.hp+ab);return true;}},
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
    // shopBuff는 리셋하지 않음 — 게임 내내 유지
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
    if(CHARS[i].school==='총학생회') copies=Math.round(copies*0.7);
    pool[CHARS[i].id]=copies;
  }
  for(var i=0;i<HIDDEN_CHARS.length;i++){
    pool[HIDDEN_CHARS[i].id]=1;
  }
  return pool;
}
// ========== 엘리그마 (아비도스 해금) 시스템 ==========
var ENIGMA_UNLOCK_COST = 5; // 신비해방 1회당 비용
// 신비해방 카드 풀 — 엘리그마를 소비해 순차적으로 해방. 계속 확장 예정.
var MYSTERY_CARD_POOL = ['ayane','serika','nonomi','shiroko','hoshino','kokona','mina','reijo','saya','rumi','shun','kisaki','sena','ui','himari','chise','wakamo','kaya','lin',
  // 아리우스 분교 (5종)
  'subaru','hiyori','misaki','saori','atsuko',
  // 발키리/SRT (12종)
  'kirino','fubuki','miyu','moe','saki','kurumi','otogi','niko','konoka','miyako','yukino','kanna'];
var ABYDOS_LOCKED_IDS = MYSTERY_CARD_POOL; // 하위 호환 별칭
var ABYDOS_UNLOCK_KEY = 'babg_abydos_unlocked';

// 해방된 카드 목록 (localStorage, 계정별)
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
// 마지막으로 fetch된 엘리그마 포인트 캐시 (renderAll 표시용)
function getEnigmaPoints() { return window._enigmaPointsCache||0; }

// 7성 유니크 영입 이력 (계정별, localStorage + 서버 pd.recruitedTier7 동기화)
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
    // 서버 동기화 (비동기, 실패해도 로컬은 유지)
    if(window._babgLogin&&window._babgLogin.name&&typeof fetchRecords==='function'){
      fetchRecords(function(err,data,sha){
        if(err||!data||!data.players)return;
        var pd=data.players[window._babgLogin.name];
        if(!pd)return;
        var srv=pd.recruitedTier7||[];
        var changed=false;
        for(var i=0;i<list.length;i++){if(srv.indexOf(list[i])===-1){srv.push(list[i]);changed=true;}}
        // 서버에서 로컬로 역병합
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
// 로그인 시 서버 pd.recruitedTier7 → localStorage 병합 (크로스 디바이스 동기화)
function syncRecruitedTier7FromPd(pd){
  if(!pd||!pd.recruitedTier7||!pd.recruitedTier7.length)return;
  var list=getRecruitedTier7();
  var changed=false;
  for(var i=0;i<pd.recruitedTier7.length;i++){
    if(list.indexOf(pd.recruitedTier7[i])===-1){list.push(pd.recruitedTier7[i]);changed=true;}
  }
  if(changed)setRecruitedTier7(list);
}

// 신비해방 — 퀘스트 창에서 호출. pd.points에서 차감 후 서버 저장.
var _mysteryUnlocking=false;
var _mysteryUnlockCooldown=0;
function doMysteryUnlock() {
  if(_mysteryUnlocking)return;
  // 쿨다운: 마지막 해방 후 2초 이내 재호출 차단 (터치 이벤트 중복 방지)
  var now=Date.now();
  if(now-_mysteryUnlockCooldown<2000)return;
  if(!window._babgLogin||!window._babgLogin.name){alert('로그인이 필요합니다.');return;}
  _mysteryUnlocking=true;
  var _retries=0;
  function _tryUnlock(){
    var unlocked = getUnlockedAbydos();
    var locked = MYSTERY_CARD_POOL.filter(function(id){return unlocked.indexOf(id)===-1;});
    if(locked.length===0){_mysteryUnlocking=false;alert('더 이상 해방할 신비해방 카드가 없습니다.');return;}
    fetchRecords(function(err,data,sha){
      if(err||!data){_mysteryUnlocking=false;alert('서버 연결 실패. 잠시 후 다시 시도해주세요.');return;}
      var pd=data.players[window._babgLogin.name];
      if(!pd){_mysteryUnlocking=false;alert('플레이어 데이터를 찾을 수 없습니다.');return;}
      if(!pd.points||pd.points<ENIGMA_UNLOCK_COST){
        _mysteryUnlocking=false;alert('엘리그마가 부족합니다.\n필요: '+ENIGMA_UNLOCK_COST+'P / 보유: '+(pd.points||0)+'P');return;
      }
      pd.points-=ENIGMA_UNLOCK_COST;
      // 서버 데이터 기준으로 잠금 목록 병합 (다른 기기에서 해금한 것 반영)
      var serverUnlocked=pd.unlockedAbydos||[];
      for(var _ui=0;_ui<serverUnlocked.length;_ui++){
        if(unlocked.indexOf(serverUnlocked[_ui])===-1) unlocked.push(serverUnlocked[_ui]);
      }
      var locked2=MYSTERY_CARD_POOL.filter(function(id){return unlocked.indexOf(id)===-1;});
      if(locked2.length===0){_mysteryUnlocking=false;alert('더 이상 해방할 신비해방 카드가 없습니다.');pd.points+=ENIGMA_UNLOCK_COST;return;}
      var pick=locked2[Math.floor(Math.random()*locked2.length)];
      unlocked.push(pick);
      pd.unlockedAbydos=unlocked.slice();
      saveRecords(data,sha,function(saveErr){
        if(saveErr){
          _retries++;
          if(_retries<=2){setTimeout(_tryUnlock,800);return;}
          _mysteryUnlocking=false;
          alert('저장 실패. 잠시 후 다시 시도해주세요.');
          return;
        }
        _mysteryUnlocking=false;
        _mysteryUnlockCooldown=Date.now();
        setUnlockedAbydos(unlocked);
        window._enigmaPointsCache=pd.points;
        var pickedName=pick,pickedImg='',pickedSchool='';
        for(var i=0;i<CHARS.length;i++){if(CHARS[i].id===pick){pickedName=CHARS[i].name;pickedImg=CHARS[i].img;pickedSchool=CHARS[i].school||'';break;}}
        if(typeof showUnlockPopup==='function') showUnlockPopup(pickedName,pickedImg,pickedSchool);
        else alert('[신비해방] '+pickedName+' 해방!');
        if(typeof renderQuestUI==='function') renderQuestUI();
        // 게임이 진행중일 때만 renderAll 호출 (타이틀/퀘스트 화면에서 오류 방지)
        if(typeof G!=='undefined'&&G&&G.players&&G.phase==='recruit'&&typeof renderAll==='function') renderAll();
      });
    });
  }
  _tryUnlock();
}

// 개발용: 엘리그마 +10P (서버에 반영)
function devAddEnigma() {
  if(!window._babgLogin||!window._babgLogin.name){alert('로그인 필요');return;}
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
  for(var i=0;i<CHARS.length;i++){if(CHARS[i].id===charId){max=POOL_COPIES[CHARS[i].tier];if(CHARS[i].school==='총학생회')max=Math.round(max*0.7);break;}}
  G.pool[charId]=Math.min((G.pool[charId]||0)+count,max);
}

// ========== GAME STATE ==========
var G = {};
var swapFirst = -1;

// 플레이어/NPC 얼굴 아이콘 매핑 (이름→아이콘 경로)
// 새 NPC 추가 시 여기에 한 줄씩 추가:  '이름':'img/UI/player/파일명.png',
var PLAYER_ICONS={
  // === 플래티넘 1 (전설) ===
  '나기사':'img/UI/player/nagisa.png',
  '마코토':'img/UI/player/makoto.png',
  '리오':'img/UI/player/rio.png',
  '호시노':'img/UI/player/hoshino.png',
  '니야':'img/UI/player/niya.png',
  '키사키':'img/UI/player/kisaki.png',
  '체리노':'img/UI/player/cherino.png',
  // === 브론즈 ===
  '세리카':'img/UI/player/serika.png',
  '하루카':'img/UI/player/haruka.png',
  '모모이':'img/UI/player/momoi.png',
  '마리':'img/UI/player/mari.png',
  '이즈나':'img/UI/player/izuna.png',
  '코코나':'img/UI/player/kokona.png',
  '노도카':'img/UI/player/nodoka.png',
  // === 실버 ===
  '아야네':'img/UI/player/ayane.png',
  '야쿠모':'img/UI/player/yakumo.png',
  '사야':'img/UI/player/saya.png',
  '미치루':'img/UI/player/michiru.png',
  '히후미':'img/UI/player/hifumi.png',
  '아리스':'img/UI/player/arisu.png',
  '이로하':'img/UI/player/iroha.png',
  // === 골드 ===
  '노노미':'img/UI/player/nonomi.png',
  '우타하':'img/UI/player/utaha.png',
  '이치카':'img/UI/player/ichika.png',
  '카스미':'img/UI/player/kasumi.png',
  '시즈코':'img/UI/player/shizuko.png',
  '슌':'img/UI/player/shun.png',
  '토모에':'img/UI/player/tomoe.png',
  // === 플래티넘 2 ===
  '시로코':'img/UI/player/shiroko.png',
  '카요코':'img/UI/player/kayoko.png',
  '히마리':'img/UI/player/himari.png',
  '사쿠라코':'img/UI/player/sakurako.png',
  '와카모':'img/UI/player/wakamo.png',
  '루미':'img/UI/player/rumi.png',
  '미노리':'img/UI/player/minori.png'
};
var PLAYER_DEFAULT_ICON='img/UI/player/player.png';
function getPlayerIconUrl(name, isPlayer){
  if(isPlayer) return PLAYER_DEFAULT_ICON;
  return PLAYER_ICONS[name]||PLAYER_DEFAULT_ICON;
}

// ===== 티어별 NPC 이름 풀 =====
// 각 풀에 7개씩 이름 채우면 매 게임 그 풀에서 랜덤으로 뽑힘
// (한 게임 NPC 최대 7명이라 한 풀에서 최대 7명까지만 사용 — 7개면 충분)
// 풀이 비어있거나 부족하면 NPC_NAME_FALLBACK에서 자동 보충
var NPC_NAME_POOLS={
  bronze:['세리카','하루카','모모이','마리','이즈나','코코나','노도카'],         // 난이도 0.1
  silver:['아야네','야쿠모','사야','미치루','히후미','아리스','이로하'],         // 난이도 0.4
  gold:['노노미','우타하','이치카','카스미','시즈코','슌','토모에'],             // 난이도 0.6
  plat2:['시로코','카요코','히마리','사쿠라코','와카모','루미','미노리'],        // 난이도 0.9
  plat1:['호시노','마코토','리오','나기사','체리노','키사키','니야']             // 난이도 1.0
};
// 풀이 비었을 때 사용하는 기본 이름 (현재 NPC들)
var NPC_NAME_FALLBACK=['나기사','마코토','리오','호시노','니야','키사키','체리노'];

// 난이도 → 풀 키 매핑
function _difficultyToPoolKey(d){
  if(typeof d!=='number') return 'silver';
  if(d<=0.15) return 'bronze';
  if(d<=0.45) return 'silver';
  if(d<=0.65) return 'gold';
  if(d<=0.95) return 'plat2';
  return 'plat1';
}
// diffArray: NPC별 난이도 배열. 각 난이도에 맞는 이름을 풀에서 랜덤 뽑되 게임 내 중복 회피.
// 풀이 비었거나 다 쓰였으면 fallback 큐에서 보충.
function pickNpcNamesForDifficulties(diffArray){
  var used={};
  var result=[];
  // 셔플된 fallback 큐 (풀 부족 시 순서대로 소비)
  var fbShuffled=NPC_NAME_FALLBACK.slice();
  for(var fi=fbShuffled.length-1;fi>0;fi--){
    var fj=Math.floor(Math.random()*(fi+1));
    var ft=fbShuffled[fi];fbShuffled[fi]=fbShuffled[fj];fbShuffled[fj]=ft;
  }
  var fbIdx=0;
  for(var i=0;i<diffArray.length;i++){
    var poolKey=_difficultyToPoolKey(diffArray[i]);
    var pool=NPC_NAME_POOLS[poolKey]||[];
    var avail=pool.filter(function(n){return !used[n];});
    var pick=null;
    if(avail.length>0){
      pick=avail[Math.floor(Math.random()*avail.length)];
    } else {
      // 풀 비었거나 모두 사용 → fallback 큐
      while(fbIdx<fbShuffled.length && used[fbShuffled[fbIdx]]) fbIdx++;
      if(fbIdx<fbShuffled.length){
        pick=fbShuffled[fbIdx]; fbIdx++;
      } else {
        pick='NPC'+(i+1); // 마지막 안전망
      }
    }
    used[pick]=true;
    result.push(pick);
  }
  return result;
}
// AI 난이도 → 티어 배지 아이콘 (영입 페이즈 NPC 칩에 표시)
// 9(d=0.1)=브론즈, 6(d=0.4)=실버, 4(d=0.6)=골드, 1(d=0.9)/전(1.0)=플래티넘
function getNpcDifficultyIcon(d){
  if(typeof d!=='number') return '';
  if(d<=0.15) return 'img/UI/bronze.png';
  if(d<=0.45) return 'img/UI/silver.png';
  if(d<=0.65) return 'img/UI/gold.png';
  return 'img/UI/platinum.png';
}

function newGame() {
  deleteSave(); // 새 게임 시 저장 데이터 삭제
  resetQuestTracker();
  // 이전 게임의 오버레이 정리 (발견/전투 팝업 잔존 방지)
  var _bo=document.getElementById('battle-overlay');if(_bo){_bo.classList.remove('active');_bo.style.zIndex='';}
  var _bia=document.getElementById('battle-intro-area');if(_bia)_bia.innerHTML='';
  var _ba=document.getElementById('battle-arena');if(_ba)_ba.style.display='';
  var _bl=document.getElementById('battle-log');if(_bl)_bl.style.display='';
  var players=[];
  var aiCount=SANDBOX?5:7;
  var startStone=SANDBOX?20:3;
  var playerName=window._babgLogin?window._babgLogin.name:'선생님';
  players.push({id:0,name:playerName,hp:START_HP,tier:1,stone:startStone,board:[],bench:null,frozen:false,dead:false,isPlayer:true,upgradeCost:SANDBOX?0:UPGRADE_COSTS[1],turnStone:startStone});
  var aiStone=SANDBOX?20:3;var aiUpCost=SANDBOX?0:UPGRADE_COSTS[1];
  // AI 난이도: 플레이어 등급에 따른 7명 분포 (셔플)
  var _aiDiffArray=_getAiDifficultyDistribution(window._babgPlayerRank);
  // 평균 난이도(폴백/G 전역용) — 호환성 유지
  var _avgDiff=0;
  for(var _ad=0;_ad<_aiDiffArray.length;_ad++) _avgDiff+=_aiDiffArray[_ad];
  _avgDiff/=Math.max(1,_aiDiffArray.length);
  var _aiDiff=_avgDiff;
  // NPC 이름은 각자의 난이도에 맞는 이름 풀에서 뽑힘
  var _npcNames=pickNpcNamesForDifficulties(_aiDiffArray.slice(0,aiCount));
  for(var i=0;i<aiCount;i++){
    var thisDiff=(i<_aiDiffArray.length)?_aiDiffArray[i]:_avgDiff;
    var pType=_pickAiPersonality(i, thisDiff);
    var thisName=(i<_npcNames.length)?_npcNames[i]:('NPC'+(i+1));
    players.push({id:i+1,name:thisName,hp:START_HP,tier:1,stone:aiStone,board:[],frozen:false,dead:false,isPlayer:false,upgradeCost:aiUpCost,turnStone:aiStone,purchasedSchools:{},totalDamageTaken:0,personality:AI_PERSONALITIES[pType],personalityType:pType,aiDifficulty:thisDiff});
  }
  G={players:players,turn:1,phase:'recruit',shop:[],aliveCount:SANDBOX?6:8,placement:0,frozen:false,bonusStone:0,shopBuff:0,pendingSpell:null,pool:initPool(),rioSchool:null,freeRerolls:0,
    purchasedSchools:{},totalDamageTaken:0,arisuDeathCount:0,arisuPurchased:false,maxPurchasedTier:0,millenniumTokenSummons:0,hiddenCardsOwned:{},hiddenCardsEverOwned:{},permanentAbilityBan:false,shopExclusions:[],keiseisenCounters:{},hovercraftCounter:0,soldHkyk:{},
    nonomiStoneSinceJoined:0,_shirokoTerrorAbsorbed:[],_shirokoKillsThisBattle:0,_ayaneDeathsThisBattle:0,
    valkyrieKills:0,valkyrieDeaths:0,
    aiDifficulty:_aiDiff};
  rollShop();
  aiTurns();
  renderAll();
  // 백그라운드 자가대전 시뮬 (20판) — UI 비블로킹
  if(!SANDBOX) setTimeout(function(){ runSimBatch(20); }, 500);
}

// 스킨(황금) 키워드 변환: 각 캐릭터 스킨 효과 (원본 능력은 유지됨)
function applySkinKwTransform(tmpl, unit){
  if(tmpl.id==='shimiko'){if(unit.kw.indexOf('cleave')===-1)unit.kw.push('cleave');if(unit.kw.indexOf('shield')===-1)unit.kw.push('shield');}
  // 스킨 키리노: 버티기 추가 (일반 키리노에는 survive 없음)
  if(tmpl.id==='kirino'){if(unit.kw.indexOf('survive')===-1)unit.kw.push('survive');}
  // 치나츠 온천: 부활 추가
  if(tmpl.id==='chinatsu'){if(unit.kw.indexOf('reborn')===-1)unit.kw.push('reborn');}
  // 아리스 메이드: 관통→광역 (변경)
  if(tmpl.id==='arisu'){var pi=unit.kw.indexOf('pierce');if(pi!==-1)unit.kw.splice(pi,1);if(unit.kw.indexOf('cleave')===-1)unit.kw.push('cleave');}
  // 히나타 수영복: 연사 추가
  if(tmpl.id==='hinata'){if(unit.kw.indexOf('windfury')===-1)unit.kw.push('windfury');}
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
  // 레이죠 사복: 관통 추가
  if(tmpl.id==='reijo'){if(unit.kw.indexOf('pierce')===-1)unit.kw.push('pierce');}
  // 이치카 수영복: 부활 추가
  if(tmpl.id==='ichika'){if(unit.kw.indexOf('reborn')===-1)unit.kw.push('reborn');}
  // 어린이 슌: 보호막 추가
  if(tmpl.id==='shun'){if(unit.kw.indexOf('shield')===-1)unit.kw.push('shield');}
}

function makeMinion(template, skinUnit) {
  var unit={
    id: template.id+'_'+Math.random().toString(36).substr(2,5),
    baseId: template.id,
    name: skinUnit ? template.skin : template.name,
    school: template.school,
    sub: template.sub||null,
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

// ===== 학교 아이콘 헬퍼 =====
// 카드 단위 표시: sub 메타가 있으면 학원 아이콘(Valkyrie/SRT) 사용, 없으면 학교 아이콘
function getCardSchoolIcon(unit){
  if(!unit) return '';
  if(unit.sub){
    if(SUB_SCHOOL_ICONS[unit.sub]) return SUB_SCHOOL_ICONS[unit.sub];
  }
  return SCHOOL_ICONS[unit.school]||'';
}
// 학교 헤더 표시: '발키리/SRT'면 Valkyrie + SRT 아이콘 둘 다 병기, 아니면 단일
function getSchoolHeaderIconHtml(school, cls){
  cls=cls||'school-logo';
  if(school==='발키리/SRT'){
    return '<img class="'+cls+'" src="'+SUB_SCHOOL_ICONS['valkyrie']+'">'+
           '<img class="'+cls+'" src="'+SUB_SCHOOL_ICONS['srt']+'">';
  }
  var ico=SCHOOL_ICONS[school];
  return ico?'<img class="'+cls+'" src="'+ico+'">':'';
}
// 카드용 한 줄 헬퍼 (img 태그 직접 반환)
function getCardSchoolIconHtml(unit, cls){
  cls=cls||'school-logo';
  var ico=getCardSchoolIcon(unit);
  return ico?'<img class="'+cls+'" src="'+ico+'">':'';
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

  // === 보드 멤버 조건 (멤버 티어가 자연 진입장벽 → Lv 제한 없음) ===
  // 게헨나 선도부: 히나(5)+이오리(5)+아코(4)+치나츠(2)
  if(notOwned('gehenna_prefect')&&inPool('gehenna_prefect')&&boardHas('hina')&&boardHas('iori')&&boardHas('ako')&&boardHas('chinatsu'))
    eligible.push('gehenna_prefect');
  // 만마전: 마코토(3)+사츠키(3)+이로하(3)+이부키(4)+치아키(2)
  if(notOwned('gehenna_pandemonium')&&inPool('gehenna_pandemonium')&&boardHas('makoto')&&boardHas('satsuki')&&boardHas('iroha')&&boardHas('ibuki')&&boardHas('chiaki'))
    eligible.push('gehenna_pandemonium');
  // 흥신소 68: 카요코(1)+무츠키(1)+하루카(1)+아루(5)
  if(notOwned('gehenna_p68')&&inPool('gehenna_p68')&&boardHas('kayoko')&&boardHas('mutsuki')&&boardHas('haruka')&&boardHas('aru'))
    eligible.push('gehenna_p68');
  // 나기사: 마리(1)+사쿠라코(2)+미네(6)
  if(notOwned('trinity_nagisa')&&inPool('trinity_nagisa')&&boardHas('mari')&&boardHas('sakurako')&&boardHas('mine'))
    eligible.push('trinity_nagisa');
  // 보충수업부: 히후미(3)+코하루(1)+하나코(4)+아즈사(4)
  if(notOwned('trinity_makeup')&&inPool('trinity_makeup')&&boardHas('hifumi')&&boardHas('koharu')&&boardHas('hanako')&&boardHas('azusa'))
    eligible.push('trinity_makeup');
  // 정의실현부: 하스미(5)+츠루기(3)+마시로(4)+이치카(3)
  if(notOwned('trinity_justice')&&inPool('trinity_justice')&&boardHas('hasumi')&&boardHas('tsurugi')&&boardHas('mashiro')&&boardHas('ichika'))
    eligible.push('trinity_justice');
  // 데스 모모이: 모모이(1)+미도리(1)+유즈(3)+아리스(4)
  if(notOwned('millennium_death_momoi')&&inPool('millennium_death_momoi')&&boardHas('momoi')&&boardHas('midori')&&boardHas('yuzu')&&boardHas('arisu'))
    eligible.push('millennium_death_momoi');
  // 밀레니엄 세미나: 유우카(2)+노아(3)+코유키(2)+리오(5)
  if(notOwned('millennium_seminar')&&inPool('millennium_seminar')&&boardHas('yuuka')&&boardHas('noa')&&boardHas('koyuki')&&boardHas('rio'))
    eligible.push('millennium_seminar');
  // C&C: 네루(5)+아스나(4)+아카네(3)+카린(4)+토키(5)
  if(notOwned('millennium_cc')&&inPool('millennium_cc')&&boardHas('neru')&&boardHas('asuna')&&boardHas('akane')&&boardHas('karin')&&boardHas('toki'))
    eligible.push('millennium_cc');
  // 시로코 테러: 호시노(5)+시로코(5)+노노미+아야네+세리카
  if(notOwned('Shiroko_Terror')&&inPool('Shiroko_Terror')&&boardHas('hoshino')&&boardHas('shiroko')&&boardHas('nonomi')&&boardHas('ayane')&&boardHas('serika'))
    eligible.push('Shiroko_Terror');
  // 아리우스 스쿼드: 사오리(5)+미사키(4)+아츠코(6)+히요리(3)
  if(notOwned('arius_squad')&&inPool('arius_squad')&&boardHas('saori')&&boardHas('misaki')&&boardHas('atsuko')&&boardHas('hiyori'))
    eligible.push('arius_squad');
  // 키키: 키사키(6) + 산해경 5명 이상
  if(notOwned('shanhai_kiki')&&inPool('shanhai_kiki')&&boardHas('kisaki')){
    var shCount=0;for(var _sh=0;_sh<p.board.length;_sh++){if(p.board[_sh].school==='산해경')shCount++;}
    if(shCount>=5) eligible.push('shanhai_kiki');
  }
  // 케이(USB): 밀레니엄 온리 + Lv.6 + 아리스 보드 + 왕녀를 산 적 없음 (분기 배타)
  if(notOwned('Kei_usb')&&inPool('Kei_usb')&&!G.hiddenCardsEverOwned['millennium_nameless']&&onlySchool('밀레니엄')&&p.tier>=6&&boardHas('arisu'))
    eligible.push('Kei_usb');
  // === 특수 조건 (Lv.6 유지 — 보드 조건이 없거나 약한 경우) ===
  // 열차포: 게헨나 온리 구매
  if(notOwned('gehenna_traingun')&&inPool('gehenna_traingun')&&onlySchool('게헨나')&&p.tier>=6)
    eligible.push('gehenna_traingun');
  // 미카: 트리니티 온리 구매
  if(notOwned('trinity_mika')&&inPool('trinity_mika')&&onlySchool('트리니티')&&p.tier>=6)
    eligible.push('trinity_mika');
  // 세이아: 피해0 + 트리니티 온리 보드
  if(notOwned('trinity_seia')&&inPool('trinity_seia')&&pDmg===0&&p.tier>=6&&boardOnlySchool('트리니티'))
    eligible.push('trinity_seia');
  // 최강일각라이온: 백귀야행 온리 보드
  if(notOwned('hkyk_saikyo')&&inPool('hkyk_saikyo')&&boardOnlySchool('백귀야행')&&p.tier>=6)
    eligible.push('hkyk_saikyo');
  // 왕녀: 밀레니엄 온리 구매 + Lv.6 + 아리스를 산 적 없음
  // 왕녀: 밀레니엄 온리 + Lv.6 + 아리스 미구매 + 케이를 산 적 없음 (분기 배타)
  if(notOwned('millennium_nameless')&&inPool('millennium_nameless')&&!G.hiddenCardsEverOwned['Kei_usb']&&!G.hiddenCardsEverOwned['Arisu_Kei']&&onlySchool('밀레니엄')&&p.tier>=6&&!G.arisuPurchased)
    eligible.push('millennium_nameless');
  // 말쿠트: 밀레니엄 토큰 소환 10회+
  if(notOwned('millennium_malkuth')&&inPool('millennium_malkuth')&&p.tier>=6&&G.millenniumTokenSummons>=10)
    eligible.push('millennium_malkuth');
  // 미노리: 10턴까지 스케쥴 1레벨 유지
  if(notOwned('red_winter_minori')&&inPool('red_winter_minori')&&G.turn>=10&&p.tier===1)
    eligible.push('red_winter_minori');
  // === 누적 조건 (Lv 무관) ===
  // 쿠즈노하: 백귀야행 13명 전원 구매/발견 기록
  if(notOwned('hkyk_kuzunoha')&&inPool('hkyk_kuzunoha')){
    var allHkykBought=true;
    for(var _hi=0;_hi<HKYK_ALL_IDS.length;_hi++){if(!G.soldHkyk[HKYK_ALL_IDS[_hi]]){allHkykBought=false;break;}}
    if(allHkykBought) eligible.push('hkyk_kuzunoha');
  }

  return eligible;
}

// 백화요란 계승전: 히든 액션카드
var HKYK_SHOWDOWN_SPELL = {
  id:'hkyk_showdown',name:'백화요란 계승전',cost:3,tier:7,desc:'유카리/렌게/키쿄/나구사에게\n+10/+10, 보호막, 연사, 부활, 독사굴',target:'auto',once:true,
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
    try{var snd=new Audio('audio/keiseisen.mp3');snd.volume=0.7;snd.play();
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
  // 플레이어 티어 기반 7성 확률 테이블 (조합형 7성용)
  var _pTier=(G.players[0]&&G.players[0].tier)||1;
  var _tierRates={1:0, 2:0, 3:0.10, 4:0.15, 5:0.30, 6:0.60};
  var _baseRate=_tierRates[_pTier]||0;
  // 단일 학교 전용/세레모니형 7성: 6T 제한 자체가 난이도라 고정 확률 유지
  var _singleSchoolRates={
    hkyk_saikyo:0.60,
    gehenna_traingun:0.60,
    trinity_mika:0.60,
    trinity_seia:0.60,
    Kei_usb:0.60,
    millennium_nameless:0.60,
    millennium_malkuth:0.60,
    hkyk_kuzunoha:0.60,
    red_winter_minori:0.60
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
  // 발견 계열 auto 주문: 보드 풀이면 차단
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
  var schools=['게헨나','밀레니엄','트리니티','백귀야행','아비도스','산해경','총학생회'];
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
    var absorb=['gehenna_prefect','gehenna_pandemonium','millennium_death_momoi','gehenna_p68','millennium_seminar','millennium_cc','trinity_makeup','trinity_justice','hkyk_kuzunoha','Shiroko_Terror','shanhai_kiki','Kei_usb','arius_squad'];
    if(absorb.indexOf(bid)===-1) return;
  }
  p.stone-=3;
  trackNonomiStone(3);
  G.shop[idx]=null;
  takeFromPool(bid);
  G.hiddenCardsOwned[bid]=true;
  G.hiddenCardsEverOwned[bid]=true;
  if(m.school) G.purchasedSchools[m.school]=true;
  // 7성 영입 이력 기록 (계정별)
  recordRecruitTier7(bid);
  // 퀘스트 트래킹: 7성 카드 완성
  if(window._questTracker) window._questTracker.hiddenCompleted = true;

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
    var p68Absorbed=[];
    for(var i=0;i<p.board.length;i++){
      if(absorb.indexOf(p.board[i].baseId)!==-1){
        bonusAtk+=p.board[i].atk;bonusHp+=p.board[i].hp;
        // 뒤끝용 스냅샷 저장 (흡수 시점 상태)
        p68Absorbed.push({id:p.board[i].id,baseId:p.board[i].baseId,name:p.board[i].name,school:p.board[i].school,tier:p.board[i].tier,atk:p.board[i].atk,hp:p.board[i].hp,maxHp:p.board[i].hp,kw:(p.board[i].kw||[]).slice(),img:p.board[i].img,isSkin:p.board[i].isSkin||false});
        returnToPool(p.board[i].baseId,p.board[i].isSkin?3:1);
      }else{newBoard.push(p.board[i]);}
    }
    p.board=newBoard;m.atk+=bonusAtk;m.hp+=bonusHp;m.maxHp=m.hp;
    m._p68Absorbed=p68Absorbed;
    G._p68Absorbed=p68Absorbed; // 전역 폴백 (시로코 테러와 동일 패턴)
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
  // 시로코 테러: 아비도스 5인을 흡수하며 등장
  else if(bid==='Shiroko_Terror'){
    var stAbsorbIds=['shiroko','hoshino','nonomi','ayane','serika'];
    var absorbedUnits=[];
    var newBoard=[];
    for(var i=0;i<p.board.length;i++){
      if(stAbsorbIds.indexOf(p.board[i].baseId)!==-1){
        // 흡수 당시 상태 스냅샷 저장 (풀에는 반환하지 않음)
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
    // 흡수한 학생들의 스탯을 시로코 테러에 합산
    var stBonusAtk=0,stBonusHp=0;
    for(var _sab=0;_sab<absorbedUnits.length;_sab++){stBonusAtk+=absorbedUnits[_sab].atk;stBonusHp+=absorbedUnits[_sab].hp;}
    m.atk+=stBonusAtk;m.hp+=stBonusHp;m.maxHp=m.hp;
    m._shirokoAbsorbed=absorbedUnits;
    G._shirokoTerrorAbsorbed=absorbedUnits;
    // 노노미 카운터 초기화 (흡수됨)
    G.nonomiStoneSinceJoined=0;
  }

  // 키키: 키사키 흡수
  else if(bid==='shanhai_kiki'){
    var newBoard=[];
    for(var i=0;i<p.board.length;i++){
      if(p.board[i].baseId==='kisaki'){
        m.atk+=p.board[i].atk;m.hp+=p.board[i].hp;m.maxHp=m.hp;
      } else { newBoard.push(p.board[i]); }
    }
    p.board=newBoard;
  }
  else if(bid==='arius_squad'){
    // 사오리/미사키/아츠코/히요리 흡수 + 스냅샷 저장 (DR 재소환용)
    var ariusAbsorb=['saori','misaki','atsuko','hiyori'];
    var ariusBA=0,ariusBH=0;var nbAr=[];var arSnap=[];
    for(var i=0;i<p.board.length;i++){
      if(ariusAbsorb.indexOf(p.board[i].baseId)!==-1){
        ariusBA+=p.board[i].atk;ariusBH+=p.board[i].hp;
        arSnap.push({id:p.board[i].id,baseId:p.board[i].baseId,name:p.board[i].name,school:p.board[i].school,tier:p.board[i].tier,atk:p.board[i].atk,hp:p.board[i].hp,maxHp:p.board[i].hp,kw:(p.board[i].kw||[]).slice(),img:p.board[i].img,isSkin:p.board[i].isSkin||false});
        returnToPool(p.board[i].baseId,p.board[i].isSkin?3:1);
      } else { nbAr.push(p.board[i]); }
    }
    p.board=nbAr;
    m.atk+=ariusBA;m.hp+=ariusBH;m.maxHp=m.hp;
    m._ariusAbsorbed=arSnap;
    G._ariusAbsorbed=arSnap; // 전역 폴백 (시로코 테러/p68과 동일 패턴)
  }

  // 케이(USB): 아리스는 흡수하지 않음 — 보드에 같이 존재
  else if(bid==='Kei_usb'){
    // 아리스 스탯을 흡수하지 않고 그대로 추가 (아리스는 보드에 남음)
  }

  // 왕녀: 아리스 상점 제외
  if(bid==='millennium_nameless'){
    if(G.shopExclusions.indexOf('arisu')===-1) G.shopExclusions.push('arisu');
  }

  // 7성 고유 연출
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

// 7성 등장 연출 헬퍼
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
  // 해당 파일에 미카 보이스가 섞여 있어 다른 7성 등장 시 "미카 보이스"가
  // 먼저 들리는 혼선이 있어 generic impact SFX로 교체.
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
  // 카드를 바로 추가하고 렌더 (먹통 방지)
  p.board.push(m);if(BC_IDS[m.baseId])triggerBattlecry(m,p);
  playRecruitVoice(m.baseId);
  renderAll();
  // 카드를 하얗게 → 점점 원래 색 복원
  var boardEl=document.getElementById('ui-board');var cards=boardEl?boardEl.querySelectorAll('.card'):[];
  var lastCard=cards[cards.length-1];
  if(lastCard){
    lastCard.style.filter='brightness(3) saturate(0)';
    lastCard.style.transition='filter 3s ease-out 1.5s';
    requestAnimationFrame(function(){requestAnimationFrame(function(){lastCard.style.filter='brightness(1) saturate(1)';});});
  }
  // 화면: 1.5초 유지 후 2.5초간 복원
  setTimeout(function(){
    fl.style.transition='opacity 2.5s ease-out';fl.style.opacity='0';
    setTimeout(function(){if(fl.parentNode)fl.remove();},2500);
  },1500);
}
function _entranceDark(m,p){
  var fl=document.createElement('div');fl.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,1);pointer-events:none;z-index:9999;opacity:0;transition:opacity 0.3s;';
  document.body.appendChild(fl);
  requestAnimationFrame(function(){fl.style.opacity='1';});
  // 카드를 바로 추가하고 렌더 (먹통 방지)
  p.board.push(m);if(BC_IDS[m.baseId])triggerBattlecry(m,p);
  playRecruitVoice(m.baseId);
  renderAll();
  // 카드를 검정으로 → 점점 밝아짐
  var boardEl=document.getElementById('ui-board');var cards=boardEl?boardEl.querySelectorAll('.card'):[];
  var lastCard=cards[cards.length-1];
  if(lastCard){
    lastCard.style.filter='brightness(0)';
    lastCard.style.transition='filter 3.5s ease-out 1s';
    requestAnimationFrame(function(){requestAnimationFrame(function(){lastCard.style.filter='brightness(1)';});});
  }
  // 화면: 1초 유지 후 3.5초간 밝아짐
  setTimeout(function(){
    fl.style.transition='opacity 3.5s ease-out';fl.style.opacity='0';
    setTimeout(function(){if(fl.parentNode)fl.remove();},3500);
  },1000);
}

// 7성 고유 등장 연출
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

  // === 산해경 ===
  shanhai_kiki: function(m,p){_entranceGlow(m,p);},
  // === 붉은겨울 ===
  red_winter_minori: function(m,p){
    // 쿵쿵쾅 — 쿵×2 (400ms 간격) 후 쾅으로 착지
    var step=0;
    function doStep(){
      if(step>=2){
        // 쾅! 착지
        p.board.push(m);
        if(BC_IDS[m.baseId]) triggerBattlecry(m,p);
        playSfx('attack_impact_large',0.8);
        shakeScreen('heavy');
        // 하얀 플래시
        var ov=document.createElement('div');
        ov.style.cssText='position:fixed;inset:0;background:#fff;opacity:0.7;pointer-events:none;z-index:9999;transition:opacity 0.35s';
        document.body.appendChild(ov);
        setTimeout(function(){ov.style.opacity='0';setTimeout(function(){ov.remove();},400);},50);
        playCardDrop(7);
        playRecruitVoice('red_winter_minori');
        renderAll();
        // 카드 흔들림
        var boardEl=document.getElementById('ui-board');
        var cards=boardEl?boardEl.querySelectorAll('.card'):[];
        var lastCard=cards[cards.length-1];
        if(lastCard){
          lastCard.style.transition='transform 0.07s ease-in-out';
          lastCard.style.transform='scale(1.2)';
          setTimeout(function(){
            lastCard.style.transform='translateX(-10px) rotate(-3deg)';
            setTimeout(function(){lastCard.style.transform='translateX(8px) rotate(3deg)';
            setTimeout(function(){lastCard.style.transform='translateX(-6px) rotate(-2deg)';
            setTimeout(function(){lastCard.style.transform='translateX(0) rotate(0) scale(1)';},70);},70);},70);
          },80);
        }
        return;
      }
      // 쿵 (작은 소리 — 미카와 동일)
      playSfx('attack_impact_large',0.2);
      shakeScreen('light');
      step++;
      setTimeout(doStep,1500);
    }
    doStep();
  },
  Kei_usb: function(m,p){
    // 일반 1~2성 소환처럼 조용하게
    p.board.push(m);playCardDrop(1);renderAll();
  },

  trinity_mika: function(m,p){
    var footSfx=new Audio('sfx/mika_footstep.webm');
    footSfx.volume=0.5;
    var step=0;
    function doStep(){
      if(step>=3){
        // 착지!
        p.board.push(m);
        if(BC_IDS[m.baseId]) triggerBattlecry(m,p);
        var landing=new Audio('sfx/mika_landing.webm');
        landing.volume=0.7;landing.play().catch(function(){});
        playSfx('attack_impact_large',0.5);
        shakeScreen('heavy');
        // 하늘에서 떨어지는 카드 이펙트
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
  if(m.tier>G.maxPurchasedTier) G.maxPurchasedTier=m.tier;
  // 아리스 구매 기록 (왕녀 해금 조건: 아리스를 산 적 없어야 함)
  if(m.baseId==='arisu') G.arisuPurchased=true;
  // 백귀야행 구매 기록 (쿠즈노하 해금 조건)
  if(HKYK_ALL_IDS.indexOf(m.baseId)!==-1) G.soldHkyk[m.baseId]=true;
  // 퀘스트 트래킹: 영입
  if(m.school && window._questTracker && window._questTracker.recruits[m.school] !== undefined) {
    window._questTracker.recruits[m.school]++;
  }
  var addedUnit;
  if(willTriple){
    playSfx('triple');
    // 퀘스트 트래킹: 스킨 갈아입히기
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
  // 영입 효과음
  playCardDrop(addedUnit.tier);
  playRecruitVoice(addedUnit.baseId);
  // 5~6성 영입 시 화면 흔들림
  if(addedUnit.tier>=5) shakeScreen(addedUnit.tier>=6?'heavy':'light');
  if(willTriple) { showDiscover(p); } else { renderAll(); }
}

// 캐릭터 영입 보이스
var RECRUIT_VOICES = {
  satsuki: 'sfx/satsuki_recruit.webm',
  arisu: 'sfx/arisu_recruit.webm',
  makoto: 'sfx/makoto_recruit.m4a',
  hina: 'sfx/hina_recruit.webm',
  himari: 'sfx/himari_recruit.webm',
  wakamo: 'sfx/wakamo_recruit.webm',
  sakurako: 'sfx/sakurako_recruit.webm',
  tsurugi: 'sfx/tsurugi_recruit.webm',
  nagusa: 'sfx/nagusa_recruit.webm',
  mine: 'sfx/mine_recruit.webm',
  shizuko: 'sfx/shizuko_recruit.webm',
  rio: 'sfx/rio_recruit.webm',
  neru: 'sfx/neru_recruit.webm',
  michiru: 'sfx/michiru_recruit.webm',
  utaha: 'sfx/utaha_recruit.webm',
  asuna: 'sfx/asuna_recruit.webm',
  ui: 'sfx/ui_recruit.m4a',
  lin: 'sfx/lin_recruit.webm',
  hasumi: 'sfx/hasumi_recruit.webm',
  sena: 'sfx/sena_recruit.webm',
  aru: 'sfx/aru_recruit.m4a',
  kaya: 'audio/kaya_recruit.mp3',
  izuna: 'sfx/izuna_recruit.webm',
  tsukuyo: 'sfx/tsukuyo_recruit.webm',
  hoshino: 'audio/abydos_hoshino.mp3',
  shiroko: 'audio/abydos_shiroko.mp3',
  Shiroko_Terror: 'audio/abydos_shiroko_terror.mp3',
  gehenna_prefect: 'audio/gehenna_prefect.mp3',
  gehenna_pandemonium: 'audio/gehenna_pandemonium.mp3',
  gehenna_traingun: 'audio/gehenna_traingun.mp3',
  trinity_seia: 'audio/trinity_seia.mp3',
  trinity_nagisa: 'audio/trinity_nagisa.mp3',
  trinity_makeup: 'audio/trinity_makeup.mp3',
  trinity_justice: 'audio/trinity_justice.mp3',
  millennium_nameless: 'audio/millennium_nameless.mp3',
  millennium_malkuth: 'audio/millennium_malkuth.mp3',
  millennium_death_momoi: 'audio/millennium_death_momoi.mp3',
  millennium_cc: 'audio/millennium_cc.mp3',
  millennium_seminar: 'audio/millennium_seminar.mp3',
  hkyk_saikyo: 'audio/hovercraft.mp3',
  hkyk_kuzunoha: 'audio/hkyk_kuzunoha.mp3',
  gehenna_p68: 'audio/gehenna_p68.mp3',
  kisaki: 'audio/kisaki.mp3',
  rumi: 'audio/rumi.mp3',
  red_winter_minori: 'audio/red_winter_minori.mp3',
  shun: 'audio/shun.mp3',
  shanhai_kiki: 'audio/shanhai_kiki.mp3',
  red_winter_minori: 'audio/red_winter_minori.mp3'
};
function playRecruitVoice(baseId){
  var src=RECRUIT_VOICES[baseId];
  if(!src)return;
  try{
    var a=new Audio(src);a.volume=0.7;a.play();
    // 1초 fadeOut으로 자연스럽게 끝내기
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
  try{if(!_cardPickSfx)_cardPickSfx=new Audio('sfx/card_pick.mp3');_cardPickSfx.currentTime=0;_cardPickSfx.volume=0.4;_cardPickSfx.play();}catch(e){}
}
// ===== SFX 시스템 =====
var SFX_CACHE={};
function playSfx(name,vol){
  vol=vol||0.5;
  var paths={
    levelup:'sfx/wow_levelup.ogg',
    coinflip:'sfx/FX_MulliganCoin03_CoinFlip.ogg',
    shield_on:'sfx/taunt_shield_up.ogg',
    shield_break:'sfx/Shared_Armor_Destroyed_1.ogg',
    taunt_on:'sfx/taunt_shield_up.ogg',
    reroll:'sfx/FX_MulliganCoin09_DeckShuffle.ogg',
    sell:'sfx/GadgetzanAuctioneer_card_spawn_coins.ogg',
    triple:'sfx/wow_levelup.ogg',
    battle_start:'sfx/Brawl_Start_Bell.ogg',
    victory:'sfx/the_coin_card.ogg',
    defeat:'sfx/defeat_thunder_rumble_loop.ogg',
    heal:'sfx/Holy_Heal_Cast_01.ogg',
    freeze:'sfx/FrostBoltHit1.ogg',
    unfreeze:'sfx/FrostArmorTarget1.ogg',
    hit:'sfx/Brawl_punch_minion_out_1.ogg',
    deathrattle:'sfx/Warlock_DrainLife_Cast_1.ogg',
    enrage:'sfx/enrage.ogg',
    bomb:'sfx/Bomb_Missile_Dynamite_Sound_01.ogg',
    secret:'sfx/FX_Secret_Trigger.ogg',
    frost:'sfx/FrostBoltHit1.ogg',
    coin_drop:'sfx/FX_MulliganCoin01_HeroCoinDrop.ogg',
    attack_launch:'sfx/Charge_Summon.ogg',
    attack_impact:'sfx/FX_Minion_AttackImpact.ogg',
    attack_impact_mid:'sfx/FX_Minion_AttackImpactMid.ogg',
    attack_impact_large:'sfx/FX_Minion_AttackImpactLarge.ogg',
    whoosh:'sfx/Lightning_Targeted_Whoosh_01.ogg',
    arrow_hit:'sfx/Arrow_Targeted_Impact_01.ogg',
    backstab:'sfx/backstab_impact_chestdru.ogg',
    fireball_impact:'sfx/FX_FireballEvent04_SpellImpact_01.ogg',
    selfdestruct:'sfx/Barrel_exp_base.ogg',
    poison:'sfx/CrazedAlchemist_Transmute_Impact_1.ogg',
    soc_trigger:'sfx/Generic_Untargeted_Cast_01.ogg',
    token_spawn:'sfx/Nerubian_custom_spawn.ogg',
    cleave:'sfx/Shared_ClawSlash_Impact_2.ogg',
    pierce:'sfx/Shared_ClawSlash_Impact_1.ogg',
    windfury_hit:'sfx/Shared_DoubleClawSlash_Impact_1.ogg',
    airship_explode:'sfx/Shared_Fire_Impact_Large.ogg',
    stealth_on:'sfx/stealth_on.ogg',
    battlecry:'sfx/Battlecry_1.ogg',
    buff:'sfx/Spell_Swordsmith_Missile_1.ogg',
    coin_toggle:'sfx/tutorial_mission_hero_coin_mouse_over.ogg',
    hero_explode:'sfx/hero_portrait_explode_1.ogg',
    aoe_damage:'sfx/Arrow_Targeted_Explode_01.ogg',
    mika_footstep:'sfx/mika_footstep.webm',
    mika_landing:'sfx/mika_landing.webm',
    spell_low:'sfx/Arrow_Targeted_Explode_01.ogg',
    spell_high:'sfx/spell_HolyLight_cast_1.ogg',
    ui_open:'sfx/Card_Transition_In.ogg',
    ui_close:'sfx/Card_Transition_Out.ogg',
    game_start:'sfx/tutorial_intro_box_opens.ogg',
    roster_open:'sfx/collection_manager_book_open.ogg',
    roster_close:'sfx/collection_manager_book_close.ogg',
    roster_click:'sfx/collection_manager_book_latch_jiggle.ogg',
    drop_low:'sfx/FX_MinionSummon_Drop.ogg',
    drop_mid:'sfx/FX_MinionSummonMedium_Drop.ogg',
    drop_high:'sfx/FX_MinionSummonLarge_Drop.ogg'
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
  void el.offsetWidth; // reflow로 애니메이션 리셋
  el.classList.add(cls);
  setTimeout(function(){el.classList.remove(cls);},500);
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
  var unlocked=getUnlockedAbydos();
  var candidates = [];
  for(var i=0;i<CHARS.length;i++){
    if(CHARS[i].locked && unlocked.indexOf(CHARS[i].id)===-1) continue;
    if(CHARS[i].tier === discoverTier && G.pool[CHARS[i].id] > 0) candidates.push(CHARS[i]);
  }
  // 풀에 없으면 현재 등급에서
  if(candidates.length === 0){
    for(var i=0;i<CHARS.length;i++){
      if(CHARS[i].locked && unlocked.indexOf(CHARS[i].id)===-1) continue;
      if(CHARS[i].tier === p.tier && G.pool[CHARS[i].id] > 0) candidates.push(CHARS[i]);
    }
  }
  // 셔플 후 최대 3장
  candidates.sort(function(){return Math.random()-0.5;});
  return candidates.slice(0, 3);
}

function showDiscover(p) {
  console.trace('[DEBUG] showDiscover called, p.isPlayer='+p.isPlayer+', turn='+G.turn);
  if(!p.isPlayer){aiDiscover(p);return;} // AI가 호출한 경우 aiDiscover로 전환
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
    if(SOC_IDS[c.id]&&!({iori:1,hanako:1,pina:1,kasumi:1})[c.id]) aTag+='<span class="ability-tag soc" style="cursor:default">개전</span>';
    if((SURV_IDS[c.id]&&c.id!=='kirino')||(c.kw&&c.kw.indexOf('survive')!==-1)) aTag+='<span class="ability-tag" style="background:rgba(16,185,129,0.2);color:#6ee7b7;cursor:default">버티기</span>';
    if(PASSIVE_IDS[c.id]) aTag+='<span class="ability-tag" style="background:rgba(168,85,247,0.2);color:#c084fc;cursor:default">패시브</span>';
    if(PRE_IDS[c.id]||(c.kw&&c.kw.indexOf('preemptive')!==-1)) aTag+='<span class="ability-tag" style="background:rgba(251,191,36,0.2);color:#fbbf24;cursor:default">선빵</span>';
    html += '<div class="card tier'+c.tier+' discover-pick" data-discover="'+i+'" data-base-id="'+c.id+'" style="cursor:pointer;position:relative">';
    if(c.img) html += '<div class="card-bg"><img src="img/'+c.img+'" onerror="this.parentElement.style.display=\'none\'"></div>';
    html += '<div class="card-inner">';
    html += getCardSchoolIconHtml(c);
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

  // 튜토리얼 중이면 발견 선택 차단 + 아로나 설명 트리거
  if(TUT.active){
    TUT.discoverBlocked=true;
    // 발견 창이 뜬 후 잠시 뒤 튜토리얼 다음 스텝 진행
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
    // 백귀야행 발견도 구매 기록으로 인정 (쿠즈노하 조건)
    if(HKYK_ALL_IDS.indexOf(tmpl.id)!==-1) G.soldHkyk[tmpl.id]=true;
    if(tmpl.id==='arisu') G.arisuPurchased=true;
    if(tmpl.tier>G.maxPurchasedTier) G.maxPurchasedTier=tmpl.tier;
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
    // 카드 클릭 → floating 팝업 표시
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
    var btnSelect=document.createElement('button');btnSelect.className='btn btn-blue';btnSelect.style.cssText='font-size:12px;padding:4px 12px';btnSelect.innerHTML='<span class="btn-inner">선택</span>';
    var btnDetail=document.createElement('button');btnDetail.className='btn btn-stone';btnDetail.style.cssText='font-size:12px;padding:4px 12px';btnDetail.innerHTML='<span class="btn-inner">자세히</span>';
    popup.appendChild(btnSelect);popup.appendChild(btnDetail);
    document.body.appendChild(popup);
    btnSelect.addEventListener('click',function(ev){ev.stopPropagation();var fp=document.getElementById('discover-float-popup');if(fp)fp.remove();doDiscoverSelect(parseInt(idx));});
    btnDetail.addEventListener('click',function(ev){ev.stopPropagation();var pk=document.querySelector('.discover-pick[data-discover="'+idx+'"]');if(pk){var r=pk.getBoundingClientRect();showTooltip(bid,r,null);}});
  });
}

// 커스텀 발견: 특정 후보 목록으로 발견 UI 표시
function showDiscoverCustom(choices) {
  console.trace('[DEBUG] showDiscoverCustom called, turn='+G.turn+', choices='+((choices||[]).map(function(c){return c.id||c.name;}).join(',')));
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
    if((SURV_IDS[c.id]&&c.id!=='kirino')||(c.kw&&c.kw.indexOf('survive')!==-1))aTag+='<span class="ability-tag" style="background:rgba(16,185,129,0.2);color:#6ee7b7;cursor:default">버티기</span>';
    if(PASSIVE_IDS[c.id])aTag+='<span class="ability-tag" style="background:rgba(168,85,247,0.2);color:#c084fc;cursor:default">패시브</span>';
    if(PRE_IDS[c.id]||(c.kw&&c.kw.indexOf('preemptive')!==-1))aTag+='<span class="ability-tag" style="background:rgba(251,191,36,0.2);color:#fbbf24;cursor:default">선빵</span>';
    html+='<div class="card tier'+c.tier+' discover-pick" data-discover="'+i+'" data-base-id="'+c.id+'" style="cursor:pointer;position:relative">';
    if(c.img)html+='<div class="card-bg"><img src="img/'+c.img+'" onerror="this.parentElement.style.display=\'none\'"></div>';
    html+='<div class="card-inner">';
    html+=getCardSchoolIconHtml(c);
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
    // 백귀야행 발견도 구매 기록으로 인정 (쿠즈노하 조건)
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
    var btnSelect=document.createElement('button');btnSelect.className='btn btn-blue';btnSelect.style.cssText='font-size:12px;padding:4px 12px';btnSelect.innerHTML='<span class="btn-inner">선택</span>';
    var btnDetail=document.createElement('button');btnDetail.className='btn btn-stone';btnDetail.style.cssText='font-size:12px;padding:4px 12px';btnDetail.innerHTML='<span class="btn-inner">자세히</span>';
    popup.appendChild(btnSelect);popup.appendChild(btnDetail);
    document.body.appendChild(popup);
    btnSelect.addEventListener('click',function(ev){ev.stopPropagation();var fp=document.getElementById('discover-float-popup');if(fp)fp.remove();doCustomSelect(parseInt(idx));});
    btnDetail.addEventListener('click',function(ev){ev.stopPropagation();var pk=document.querySelector('.discover-pick[data-discover="'+idx+'"]');if(pk){var r=pk.getBoundingClientRect();showTooltip(bid,r,null);}});
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
  // 영입 효과음 (모든 경로 공통)
  if(p.isPlayer){playCardDrop(m.tier);playRecruitVoice(m.baseId);if(m.tier>=5)shakeScreen(m.tier>=6?'heavy':'light');}
  // 퀘스트 트래킹: 영입 (플레이어만)
  if(p.isPlayer && m.school && window._questTracker && window._questTracker.recruits[m.school] !== undefined) {
    window._questTracker.recruits[m.school]++;
  }
  // 트리플 체크
  var count=0;
  for(var i=0;i<p.board.length;i++){
    if(p.board[i].baseId===m.baseId&&!p.board[i].isSkin) count++;
  }
  if(count>=2){
    // 퀘스트 트래킹: 스킨 갈아입히기 (플레이어만)
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
  if(m._noBC) return; // 미노리 개전: 기본 능력 영구 면역
  if(G.permanentAbilityBan) return;
  // 미치루 연쇄는 다른 유닛의 첫인사를 복제 발동하는 로직이라 _bcFired 체크 우회.
  if(G._michiruChaining){
    if(p===G.players[0]) playSfx('battlecry',0.3);
    _doBC(m,p);
    return;
  }
  // 이미 첫인사를 발동한 유닛은 재발동 금지 (벤치 왕복 중복 발동 방지)
  if(m._bcFired) return;
  m._bcFired=true;
  if(p===G.players[0]) playSfx('battlecry',0.3);
  var linRepeat=1+getLinExtraRecruit(p);
  var shizukoRepeat=getShizukoExtraRecruit(p);
  var totalRepeat=linRepeat+shizukoRepeat;
  for(var _lr=0;_lr<totalRepeat;_lr++){
    _doBC(m,p);
  }
}
// 시즈코 영입 추가 발동 효과는 제거됨 (효과 변경)
function getShizukoExtraRecruit(p){
  return 0;
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
    // 아군 전체 +1/+1 (스킨 +2/+2)
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
    if(G._michiruChaining) return; // 연쇄 중 자신 재발동 방지
    // 아군 백귀야행(자신 제외) BC 연쇄 (황금: 2회)
    G._michiruChaining=true;
    var repeat=m.isSkin?2:1;
    for(var r=0;r<repeat;r++){
      for(var i=0;i<p.board.length;i++){
        if(p.board[i].school==='백귀야행'&&p.board[i].baseId!=='michiru'&&BC_IDS[p.board[i].baseId]){
          _doBC(p.board[i],p);
        }
      }
    }
    G._michiruChaining=false;
  }

  // ===== 산해경 첫인사 =====
  else if(id==='kokona'){
    // 코코나: 스케쥴 레벨 이하의 무작위 학생(코코나 제외)을 벤치로 불러옵니다.
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
    // 키사키: 아군 학생(키사키 제외, 비스킨) 1인 선택(스킨: 전원)을 스킨으로 교체
    var ksTargets=[];
    for(var i=0;i<p.board.length;i++){if(!p.board[i].isSkin&&p.board[i].baseId!=='kisaki'&&!p.board[i].isHidden)ksTargets.push(i);}
    if(ksTargets.length>0){
      if(m.isSkin){
        // 골든 키사키: 전원 자동 스킨 변환
        for(var _ki=0;_ki<ksTargets.length;_ki++){
          _applySkinUpgrade(p.board[ksTargets[_ki]]);
        }
      } else if(p.isPlayer){
        // 일반 키사키 (플레이어): 대상 선택 UI
        G.pendingSpell={id:'kisaki_bc',name:'키사키 첫인사',target:'select_ally',
          effect:function(G2,idx){
            var p2=G2.players[0];if(!p2.board[idx]||p2.board[idx].isSkin||p2.board[idx].isHidden)return false;
            _applySkinUpgrade(p2.board[idx]);
            return true;
          }};
        renderAll();
      } else {
        // AI: 무작위 1인 자동 스킨 변환
        var aiPick=ksTargets[Math.floor(Math.random()*ksTargets.length)];
        _applySkinUpgrade(p.board[aiPick]);
      }
    }
  }
  // ===== 발키리/SRT 첫인사 =====
  else if(id==='fubuki'){
    // 후부키: 아군 1인에게 자신의 현재 공격력/체력만큼 부여 (스킨: 같은 1인에게 두 번)
    var fbTargets=[];
    for(var i=0;i<p.board.length;i++){if(p.board[i]!==m)fbTargets.push(i);}
    if(fbTargets.length===0) return;
    var fbAtk=m.atk, fbHp=m.hp;
    var fbMult = m.isSkin ? 2 : 1;
    if(p.isPlayer){
      // 플레이어: 대상 선택 UI
      G.pendingSpell={id:'fubuki_bc',name:'후부키 첫인사',target:'select_ally',
        effect:function(G2,idx){
          var p2=G2.players[0];var t=p2.board[idx];if(!t||t===m)return false;
          var ga=fbAtk*fbMult, gh=fbHp*fbMult;
          t.atk+=ga;t.hp+=gh;t.maxHp=(t.maxHp||t.hp);t.maxHp+=gh;
          logBuff(t,m.name,ga,gh);
          return true;
        }};
      renderAll();
    } else {
      // AI: 가장 stat 높은 비스킨 대상 우선 (없으면 무작위)
      var aiPickIdx=fbTargets[0];
      var bestS=-1;
      for(var fi=0;fi<fbTargets.length;fi++){
        var u2=p.board[fbTargets[fi]];
        var s=u2.atk+u2.hp+(u2.isSkin?5:0);
        if(s>bestS){bestS=s;aiPickIdx=fbTargets[fi];}
      }
      var t=p.board[aiPickIdx];
      var ga=fbAtk*fbMult, gh=fbHp*fbMult;
      t.atk+=ga;t.hp+=gh;t.maxHp=(t.maxHp||t.hp);t.maxHp+=gh;
      logBuff(t,m.name,ga,gh);
    }
  }
  // 히마리: 첫인사 제거 → 개전(SOC)으로 이동
}
function _applySkinUpgrade(u){
  var tmpl=null;for(var j=0;j<CHARS.length;j++)if(CHARS[j].id===u.baseId){tmpl=CHARS[j];break;}
  if(!tmpl||!tmpl.skin)return;
  var bonusAtk=u.atk-tmpl.atk,bonusHp=u.hp-tmpl.hp;
  u.name=tmpl.skin;u.atk=tmpl.atk*2+1+bonusAtk;u.hp=tmpl.hp*2+1+bonusHp;u.maxHp=u.hp;
  u.isSkin=true;u.img=tmpl.imgGold;
  applySkinKwTransform(tmpl,u);
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
  playSfx('sell',0.4);
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
  // 노노미 판매 시 청휘석 카운터 초기화
  if(m.baseId==='nonomi') G.nonomiStoneSinceJoined=0;
  // 시로코 테러 판매 시 흡수된 학생 귀환
  if(m.baseId==='Shiroko_Terror'&&G._shirokoTerrorAbsorbed&&G._shirokoTerrorAbsorbed.length>0){
    for(var _sta=0;_sta<G._shirokoTerrorAbsorbed.length;_sta++){
      if(p.board.length<MAX_BOARD) p.board.push(G._shirokoTerrorAbsorbed[_sta]);
    }
    G._shirokoTerrorAbsorbed=[];
  }
  // 백귀야행 판매 시에도 구매 기록 유지 (쿠즈노하 조건은 구매 기록 기준)
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
  // 벤치→샬레 이동은 재획득이 아니므로 첫인사(BC) 발동 안 함
  renderAll();
}
function sellBench() {
  var p=G.players[0];
  if(p.bench===null) return;
  playSfx('sell',0.4);
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

// ===== 노노미 청휘석 소비 추적 =====
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
var AI_LEVEL_TARGETS={2:2,3:5,4:7,5:9,6:11}; // aiShouldUpgrade의 idealTurns 참조용으로 유지
var AI_PERSONALITIES={
  aggressive:{levelBias:15,buyThreshold:0,sellThreshold:0.7,hpDesperate:20,powerTurnSave:false},
  standard:{levelBias:0,buyThreshold:3,sellThreshold:0.85,hpDesperate:15,powerTurnSave:false},
  tempo:{levelBias:-10,buyThreshold:6,sellThreshold:0.9,hpDesperate:12,powerTurnSave:false},
  greedy:{levelBias:5,buyThreshold:3,sellThreshold:0.8,hpDesperate:15,powerTurnSave:true}
};
var AI_PERSONALITY_KEYS=['aggressive','standard','tempo','greedy'];
var HKYK_ALL_IDS=['izuna','pina','yukari','tsukuyo','mimori','renge','shizuko','tsubaki','kikyou','chise','nagusa','wakamo','michiru'];

// ===== AI 난이도 (플레이어 등급에 비례) =====
// 0.0(9등급) ~ 1.0(전설). 기본 0.4 (4등급 수준)
function _calcAiDifficulty(rank){
  if(!rank) return 0.4;
  if(rank.tier===0) return 1.0; // 전설
  // tier 1=0.9, 2=0.8, ..., 9=0.1
  return Math.max(0.1, Math.min(1.0, 1.0 - rank.tier*0.1));
}
function getAiDifficulty(){
  // 개별 AI 난이도 (테스트용 또는 미래 확장용) → G._currentAiDifficulty
  if(typeof G!=='undefined' && G._currentAiDifficulty!=null) return G._currentAiDifficulty;
  if(typeof G!=='undefined' && G.aiDifficulty!=null) return G.aiDifficulty;
  return _calcAiDifficulty(window._babgPlayerRank);
}
// AI 시뮬 깊이 (forecast N회): 9등급=4, 4등급=13, 1등급=18, 전설=20
function _aiSimN(){
  var d=getAiDifficulty();
  return Math.max(2, Math.round(2 + d*18));
}
// 배치 후보 K개 (aiOptimizeOrder): 9등급=2, 4등급=8, 1등급=12, 전설=14
function _aiOptK(){
  var d=getAiDifficulty();
  return Math.max(2, Math.round(2 + d*12));
}
// 휴리스틱 노이즈: 9등급은 점수 평가 자체가 크게 왜곡됨 (±양방향)
// 9등급=±11, 4등급=±5, 1등급=±0.7, 전설=±0.3
function _aiNoise(){
  var d=getAiDifficulty();
  return Math.max(0.3, 11.5 - d*11.2);
}
// 잘못된 결정 확률: 9등급=85%, 4등급=35%, 1등급=4%, 전설=1%
function _aiMistakeRate(){
  var d=getAiDifficulty();
  return Math.max(0.01, 0.94 - d*0.93);
}
// 학생 카드 forecast 가중치: 약한 보너스만 (단기 매치업 매몰 방지)
// 1등급=0.05, 전설=0.10 — 휴리스틱 위주 + 약간의 매치업 적응
function _aiForecastWeight(){
  var d=getAiDifficulty();
  if(d<0.8) return 0;
  return Math.min(0.10, (d-0.8)*0.5);
}
// mistake 발생 시 동작: random non-top swap 비율
// 9등급: 80% 완전 random, 20% top↔2nd swap
// 전설: 0% random, 100% 미발동 (mistake rate 1% 자체가 매우 낮음)
function _aiMistakeRandomness(){
  var d=getAiDifficulty();
  return Math.max(0, 0.85 - d*0.85); // 0~0.85
}
// 학생 카드를 영입했다고 가정한 보드의 승률 forecast
function _aiStudentForecast(p, item, oppBoard){
  if(!oppBoard||oppBoard.length===0) return null;
  var tmpl=findAnyChar(item.baseId);
  if(!tmpl) return null;
  var testBoard=_aiCopyBoard(p.board);
  // 트리플이면 스킨, 아니면 일반
  var copyCount=0;
  for(var k=0;k<p.board.length;k++){if(p.board[k].baseId===item.baseId&&!p.board[k].isSkin)copyCount++;}
  if(copyCount>=2){
    // 시뮬에서는 단순화: 기존 2장 제거 후 골든 1장 추가
    testBoard=testBoard.filter(function(u){return !(u.baseId===item.baseId&&!u.isSkin);});
    testBoard=testBoard.slice(0,Math.max(0,testBoard.length-2)); // 안전용
    var skinUnit={
      id:'sim_'+Math.random().toString(36).substr(2,4),
      baseId:tmpl.id,name:tmpl.skin||tmpl.name,school:tmpl.school,tier:tmpl.tier,
      atk:tmpl.atk*2+1,hp:tmpl.hp*2+1,kw:(tmpl.kw||[]).slice(),img:tmpl.imgGold||tmpl.img,
      isSkin:true,alive:true,maxHp:tmpl.hp*2+1
    };
    testBoard.push(skinUnit);
  } else if(testBoard.length<MAX_BOARD){
    var newUnit={
      id:'sim_'+Math.random().toString(36).substr(2,4),
      baseId:tmpl.id,name:tmpl.name,school:tmpl.school,tier:tmpl.tier,
      atk:item.atk||tmpl.atk,hp:item.hp||tmpl.hp,kw:(item.kw||tmpl.kw||[]).slice(),
      img:item.img||tmpl.img,isSkin:item.isSkin||false,alive:true,maxHp:item.hp||tmpl.hp
    };
    testBoard.push(newUnit);
  } else {
    return null; // 보드 가득 (트리플 아님)
  }
  return aiForecast(testBoard, oppBoard, _aiSimN());
}
// 플레이어 등급에 따른 personality 분포 (낮음→소극적, 높음→공격적)
function _pickAiPersonality(idx, difficulty){
  // 약한 분포: tempo/greedy 비중 ↑
  var weak=['tempo','greedy','tempo','standard','greedy','standard','aggressive'];
  // 중립 분포: 균등
  var mid=['aggressive','standard','tempo','greedy','aggressive','standard','greedy'];
  // 강한 분포: aggressive 비중 ↑
  var strong=['aggressive','aggressive','standard','aggressive','greedy','aggressive','standard'];
  if(difficulty<0.35) return weak[idx]||'standard';
  if(difficulty<0.7) return mid[idx]||'standard';
  return strong[idx]||'aggressive';
}

// ===== 등급별 NPC 7명 난이도 분포 =====
// 9=0.1, 6=0.4, 4=0.6, 1=0.9, 전=1.0 (전설)
// 키: rank.tier (0=전설, 1~9=일반 등급)
var RANK_AI_DIFFICULTY_DISTRIBUTION={
  9:[0.1,0.1,0.1,0.1,0.1,0.1,0.1],         // 9999999
  8:[0.1,0.1,0.1,0.1,0.4,0.4,0.4],         // 9999666
  7:[0.1,0.1,0.1,0.4,0.4,0.4,0.4],         // 9996666
  6:[0.4,0.4,0.4,0.4,0.4,0.4,0.4],         // 6666666
  5:[0.4,0.4,0.4,0.4,0.6,0.6,0.6],         // 6666444
  4:[0.6,0.6,0.6,0.6,0.6,0.6,0.6],         // 4444444
  3:[0.6,0.6,0.6,0.6,0.9,0.9,0.9],         // 4444111
  2:[0.6,0.6,0.6,0.9,0.9,0.9,1.0],         // 444111전
  1:[0.9,0.9,0.9,0.9,1.0,1.0,1.0],         // 1111전전전
  0:[1.0,1.0,1.0,1.0,1.0,1.0,1.0]          // 전설: 전전전전전전전
};
// 등급에 맞는 NPC 난이도 배열 반환 (셔플된 사본)
function _getAiDifficultyDistribution(rank){
  // rank 미캐시 시 localStorage에서 즉시 시도
  if(!rank){
    try{
      var raw=localStorage.getItem('babg_player_rank');
      if(raw){
        rank=JSON.parse(raw);
        if(typeof window!=='undefined') window._babgPlayerRank=rank;
      }
    }catch(e){}
  }
  var key;
  if(!rank) key=9; // 진짜로 등급 모름 → 가장 보수적(브론즈 2 분포, 모두 멍청 NPC)
  else if(rank.tier===0) key=0; // 전설
  else key=rank.tier;
  var arr=(RANK_AI_DIFFICULTY_DISTRIBUTION[key]||RANK_AI_DIFFICULTY_DISTRIBUTION[9]).slice();
  // Fisher-Yates 셔플
  for(var i=arr.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var t=arr[i];arr[i]=arr[j];arr[j]=t;
  }
  return arr;
}

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
  on_your_mark: function(p){var basicPool=['taunt','shield','poison','reborn','cleave','pierce','ranged','windfury','selfdestruct'];var schools={};for(var i=0;i<p.board.length;i++){var s=p.board[i].school;if(!schools[s])schools[s]=[];schools[s].push(i);}var used={};for(var s in schools){var arr=schools[s];var pick=arr[Math.floor(Math.random()*arr.length)];var u=p.board[pick];var avail=basicPool.filter(function(k){return u.kw.indexOf(k)===-1&&!used[k];});if(avail.length>0){var kw=avail[Math.floor(Math.random()*avail.length)];u.kw.push(kw);used[kw]=true;}}},
};
var KW_SORT_ORDER={cleave:0,pierce:0,poison:1,windfury:2,ambush:2.5,shield:3,survive:4,reborn:5,taunt:99};

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
   sellProtect:function(u){if(u.baseId==='tsubaki')return 8;if(BC_IDS[u.baseId])return 3;return 0;}},
  // 만마전 흡수 콤보: 마코토+사츠키+이로하+이부키+치아키 (게헨나 흡수형)
  {id:'gehenna_absorb',
   check:function(board){var ids={makoto:0,satsuki:0,iroha:0,ibuki:0,chiaki:0};for(var i=0;i<board.length;i++)if(ids[board[i].baseId]!==undefined)ids[board[i].baseId]++;var c=0;for(var k in ids)if(ids[k]>0)c++;return c>=2;},
   buyBonus:function(c,board){var combo={makoto:1,satsuki:1,iroha:1,ibuki:1,chiaki:1};if(combo[c.id])return 10;return 0;},
   sellProtect:function(u){var combo={makoto:1,satsuki:1,iroha:1,ibuki:1,chiaki:1};if(combo[u.baseId])return 6;return 0;}},
  // 백귀야행 통일덱 (쿠즈노하 노림): 4명 이상부터 적극 영입
  {id:'hkyk_unity',
   check:function(board){var c=0;for(var i=0;i<board.length;i++)if(board[i].school==='백귀야행')c++;return c>=4;},
   buyBonus:function(c,board){if(c.school!=='백귀야행')return -3;var cnt=0;for(var i=0;i<board.length;i++)if(board[i].school==='백귀야행')cnt++;return 4+cnt;},
   sellProtect:function(u){if(u.school==='백귀야행')return 5;return 0;}},
  // 미사 트리오 (미카+사야 등 트리니티 7성 노림)
  {id:'trinity_unity',
   check:function(board){var c=0;for(var i=0;i<board.length;i++)if(board[i].school==='트리니티')c++;return c>=4;},
   buyBonus:function(c,board){if(c.school!=='트리니티')return -3;var cnt=0;for(var i=0;i<board.length;i++)if(board[i].school==='트리니티')cnt++;return 3+cnt;},
   sellProtect:function(u){if(u.school==='트리니티')return 4;return 0;}}
];

// ===== AI 빌드 청사진 (사용자 키 카드 매핑 기반) =====
// 5턴(=7청휘석) 시점에 보드 진행도 평가 → 가장 가까운 빌드 선택 → p._buildPlan 저장
// 이후 영입 점수에 큰 보너스 가산하여 빌드 추구
var BUILD_PLANS = [
  // === 게헨나 7성 3종 ===
  {id:'gehenna_p68', target7:'gehenna_p68', school:'게헨나',
   coreCards:['kayoko','mutsuki','haruka','aru'],
   schoolValue:['chiaki','chinatsu','iori','satsuki','kasumi','hina']},
  {id:'gehenna_prefect', target7:'gehenna_prefect', school:'게헨나',
   coreCards:['hina','iori','ako','chinatsu'],
   schoolValue:['chiaki','satsuki','kasumi','kayoko','mutsuki']},
  {id:'gehenna_pandemonium', target7:'gehenna_pandemonium', school:'게헨나',
   coreCards:['makoto','satsuki','iroha','ibuki','chiaki'],
   schoolValue:['chinatsu','iori','kasumi','hina','kayoko']},
  // === 트리니티 7성 3종 ===
  {id:'trinity_justice', target7:'trinity_justice', school:'트리니티',
   coreCards:['hasumi','tsurugi','mashiro','ichika'],
   schoolValue:['mari','azusa','hanako','hifumi','koharu','hina']},
  {id:'trinity_makeup', target7:'trinity_makeup', school:'트리니티',
   coreCards:['hifumi','koharu','hanako','azusa'],
   schoolValue:['mari','hasumi','tsurugi','mashiro','ichika']},
  {id:'trinity_nagisa', target7:'trinity_nagisa', school:'트리니티',
   coreCards:['mari','sakurako','mine'],
   schoolValue:['hasumi','tsurugi','hifumi','koharu','hanako','azusa','mashiro','ichika']},
  // === 밀레니엄 7성 3종 ===
  {id:'millennium_death_momoi', target7:'millennium_death_momoi', school:'밀레니엄',
   coreCards:['momoi','midori','yuzu','arisu'],
   schoolValue:['yuuka','noa','koyuki','toki']},
  {id:'millennium_seminar', target7:'millennium_seminar', school:'밀레니엄',
   coreCards:['yuuka','noa','koyuki','rio'],
   schoolValue:['momoi','midori','yuzu','arisu','toki']},
  {id:'millennium_cc', target7:'millennium_cc', school:'밀레니엄',
   coreCards:['neru','asuna','akane','karin','toki'],
   schoolValue:['yuuka','noa','koyuki','rio','momoi','midori','yuzu','utaha']},
  // === 백귀야행 통일 (쿠즈노하) ===
  {id:'hkyk_unity', target7:'hkyk_kuzunoha', school:'백귀야행',
   coreCards:['michiru','izuna','tsukuyo','shizuko'],
   schoolValue:HKYK_ALL_IDS.slice()},
  // === 시로코 테러 (아비도스) ===
  {id:'shiroko_terror', target7:'Shiroko_Terror', school:'아비도스',
   coreCards:['hoshino','shiroko','nonomi','ayane','serika'],
   schoolValue:['aoi','momoka','kaya']},
  // === 아리우스 스쿼드 (아리우스 분교) ===
  {id:'arius_squad', target7:'arius_squad', school:'아리우스 분교',
   coreCards:['saori','misaki','atsuko','hiyori'],
   schoolValue:['subaru']},
  // === 발키리/SRT 빌드 (학교 시너지) ===
  {id:'valkyrie_srt', target7:null, school:'발키리/SRT',
   coreCards:['konoka','kanna','niko','miyako','kurumi'],
   schoolValue:['kirino','fubuki','miyu','moe','saki','otogi','yukino']}
];

// 빌드 진행도 평가
function evaluateBuildPlan(p, plan){
  var coreCount=0, valueCount=0, schoolBonus=0;
  for(var i=0;i<p.board.length;i++){
    var bid=p.board[i].baseId;
    if(plan.coreCards.indexOf(bid)!==-1) coreCount++;
    else if(plan.schoolValue.indexOf(bid)!==-1) valueCount++;
    if(p.board[i].school===plan.school) schoolBonus+=0.4;
  }
  return coreCount*3 + valueCount*1.2 + schoolBonus;
}

// 빌드 결정: 7청휘석 시점에 평가
function aiDecideBuildPlan(p){
  if(p._buildPlan) return; // 이미 결정됨
  if(p.stone < 7) return;  // 7청휘석 미만이면 아직 결정 X
  var bestPlan=null, bestScore=0;
  for(var i=0;i<BUILD_PLANS.length;i++){
    var pl=BUILD_PLANS[i];
    var sc=evaluateBuildPlan(p, pl);
    if(sc > bestScore){
      bestScore=sc;
      bestPlan=pl;
    }
  }
  // 진행도 너무 낮으면 빌드 결정 X (기존 휴리스틱 그대로)
  if(bestPlan && bestScore >= 2.5){
    p._buildPlan = bestPlan;
  }
}

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
  var decision=score>0;
  // 난이도 비례 실수 (잘못된 결정 확률 적용)
  if(Math.random() < _aiMistakeRate()) decision=!decision;
  return decision;
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

// AI가 이미 takeFromPool 후 tmpl을 board에 추가할 때 공통 처리 (트리플 체크 포함)
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

// 사용자 정의 자리 배치 카탈로그 (우선순위 높음, 키워드보다 강함)
var FRONT_LINE_CARDS={
  'ui':1,'iori':1,'ichika':1,
  'wakamo':1,'shiroko':1,'hoshino':1,'shun':1,'mina':1,'ako':1,'azusa':1,
  'gehenna_prefect':1,'gehenna_pandemonium':1,'gehenna_p68':1,
  'trinity_mika':1,'trinity_makeup':1,'trinity_justice':1,
  'millennium_nameless':1,'millennium_malkuth':1,'millennium_death_momoi':1,
  'millennium_cc':1,'millennium_seminar':1,'Arisu_Kei':1,
  'arius_squad':1,'subaru':1,
  // 발키리/SRT: 키리노/쿠루미/코노카(taunt), 미야코(reborn), 유키노(킬 면역)
  'kirino':1,'kurumi':1,'konoka':1,'miyako':1,'yukino':1
};
var BACK_LINE_CARDS={
  'mine':1,'mari':1,'momoi':1,'yuuka':1,'yuzu':1,'utaha':1,
  'tsubaki':1,'mimori':1,'pina':1,'ayane':1,'rin':1,
  'gehenna_traingun':1,'trinity_seia':1,'Kei_usb':1,'red_winter_minori':1,
  // 발키리/SRT: 미유/모에/오토기(저격), 후부키(BC, 뒤로), 칸나(약함), 니코(버티기 트리거)
  'miyu':1,'moe':1,'otogi':1,'fubuki':1,'kanna':1,'niko':1
};
var KEISEISEN_CARDS={'yukari':1,'renge':1,'kikyou':1,'nagusa':1};

function aiSortBoard(board){
  // 배치 우선순위: 사용자 정의 → 키워드 휴리스틱 → 기본
  function posScore(u){
    var s=50;
    var bid=u.baseId||'';
    var kw=u.kw||[];
    // === 사용자 정의 우선 (명시되면 키워드 처리로 덮어쓰지 않음) ===
    var explicitFront=false, explicitBack=false;
    if(FRONT_LINE_CARDS[bid]){ s=18; explicitFront=true; }
    if(BACK_LINE_CARDS[bid]){ s=85; explicitBack=true; }
    // 토키: 자체 1/4도 선봉 OK (사용자 정의)
    if(bid==='toki'){ s=18; explicitFront=true; }
    // 계승전 카운터 카드: 7스택 미만이면 선봉, 이후 후방
    if(KEISEISEN_CARDS[bid]){
      var ksCnt=u._keiseisenCounter||0;
      if(ksCnt<7){ s=22; explicitFront=true; }
      else { s=75; explicitBack=true; }
    }
    // === 명시 분류된 카드는 키워드 처리 스킵 (사용자 의도 보호) ===
    if(explicitFront||explicitBack) return s;
    // === 키워드 기반 ===
    if(kw.indexOf('ranged')!==-1||kw.indexOf('pierce')!==-1||kw.indexOf('cleave')!==-1){
      if(s>=40) s=22;
    }
    if(kw.indexOf('taunt')!==-1) s=Math.min(s,10);
    if(kw.indexOf('selfdestruct')!==-1) s=Math.min(s,15);
    if(DR_IDS[bid]) s=Math.min(s,20);
    if(kw.indexOf('reborn')!==-1) s=Math.min(s,25);
    if(kw.indexOf('survive')!==-1) s=Math.max(s,70);
    if(SURV_IDS[bid]) s=Math.max(s,70);
    if(kw.indexOf('preemptive')!==-1&&kw.indexOf('taunt')===-1) s=Math.max(s,75);
    if(kw.indexOf('shield')!==-1&&s>30&&s<70) s=Math.min(s,30);
    return s;
  }
  board.sort(function(a,b){
    var pa=posScore(a),pb=posScore(b);
    if(pa!==pb) return pa-pb;
    return b.hp-a.hp;
  });
  // 카야 예외처리: 보드에 카야 있을 때 1번 자리에 효과 없는/뒤끝 카드 강제
  _applyKayaException(board);
}
// 카야 보유 시 1번 자리에 "이미 효과 발동 끝나서 변수 없는" 카드 우선
// 후보 우선순위: 뒤끝(DR) → 첫인사/개전 (BC/SOC, 한 번 발동 후 끝) → 바닐라
// 카야는 개전을 마지막에 쓰니, 다른 BC/SOC 발동 후 흡수해도 무관
function _applyKayaException(board){
  var hasKaya=false;
  for(var i=0;i<board.length;i++){if(board[i].baseId==='kaya'){hasKaya=true;break;}}
  if(!hasKaya) return;
  var candidate=-1;
  // 1순위: 뒤끝 (죽을 때 발동, 죽기까지 안전한 자리 가치 X)
  for(var i=0;i<board.length;i++){
    if(board[i].baseId==='kaya') continue;
    if(DR_IDS[board[i].baseId]){candidate=i;break;}
  }
  // 2순위: 첫인사/개전 (한 번 발동 후 자리 무관)
  // 단, 지속 효과 보유(패시브/선빵/버티기)는 제외
  if(candidate<0){
    for(var i=0;i<board.length;i++){
      if(board[i].baseId==='kaya') continue;
      var bid=board[i].baseId;
      var hasOngoing=PASSIVE_IDS[bid]||PRE_IDS[bid]||SURV_IDS[bid];
      if(hasOngoing) continue;
      if(BC_IDS[bid]||SOC_IDS[bid]){candidate=i;break;}
    }
  }
  // 3순위: 효과 없는 바닐라
  if(candidate<0){
    for(var i=0;i<board.length;i++){
      if(board[i].baseId==='kaya') continue;
      var bid=board[i].baseId;
      var kw=board[i].kw||[];
      var hasAbility=DR_IDS[bid]||SOC_IDS[bid]||BC_IDS[bid]||PRE_IDS[bid]||SURV_IDS[bid]||PASSIVE_IDS[bid];
      if(!hasAbility&&kw.length===0){candidate=i;break;}
    }
  }
  if(candidate<0) return;
  if(candidate===0) return;
  var tmp=board[0];board[0]=board[candidate];board[candidate]=tmp;
}

// ===== AI Forecast (가상 전투 시뮬 기반 의사결정) =====
function _aiCopyBoard(board){
  if(!board) return [];
  return board.map(function(u){
    var c={};for(var k in u){
      if(k==='kw') c.kw=(u.kw||[]).slice();
      else c[k]=u[k];
    }
    return c;
  });
}
function _aiGetOppBoard(p){
  if(!G.matchups||!G.matchups[p.id]) return null;
  var info=G.matchups[p.id];
  if(info.opponentId==null) return null;
  var oppRef=null;
  for(var i=0;i<G.players.length;i++) if(G.players[i].id===info.opponentId){oppRef=G.players[i];break;}
  if(!oppRef) return null;
  if(info.isGhost) return oppRef._ghostBoard||null;
  return oppRef.board||null;
}
// 가상 전투 N판 시뮬레이션해서 승률(0~1) 반환
function aiForecast(myBoard,oppBoard,n){
  if(!oppBoard||oppBoard.length===0) return (myBoard&&myBoard.length>0)?0.7:0.5;
  if(!myBoard||myBoard.length===0) return 0.0;
  // 난이도에 따라 시뮬 횟수 자동 조정 (호출 측 n 지정 시 무시 X — 호출자가 명시적이면 그대로 사용)
  n=n||_aiSimN();
  var wins=0,draws=0;
  var simCtx={
    permanentAbilityBan:false,battleSchoolBuff:{},
    kuzunohaActive:false,millenniumTokenSummons:0,
    arisuDeathCount:0,keiseisenCounters:{},
    players:G.players
  };
  for(var i=0;i<n;i++){
    var aBoard=_aiCopyBoard(myBoard);
    var bBoard=_aiCopyBoard(oppBoard);
    var startWithA=Math.random()<0.5;
    try{
      var res=runBattle(aBoard,bBoard,startWithA,{simCtx:simCtx,skipSOC:false,panchanDeathsA:0,panchanDeathsB:0});
      if(res&&res.result==='win') wins++;
      else if(res&&res.result==='draw') draws++;
    }catch(e){draws++;}
  }
  return (wins+draws*0.4)/n;
}
// 배치 후보 K개 시뮬해서 승률 최선 채택
function aiOptimizeOrder(p,oppBoard){
  if(!oppBoard||oppBoard.length===0||p.board.length<=1){
    aiSortBoard(p.board);
    return;
  }
  // 후보 0: 휴리스틱
  var heuristic=p.board.slice();
  aiSortBoard(heuristic);
  // 사용자 명시 카드 인덱스를 lock — forecast가 절대 건드리지 못함
  var lockedIndices={};
  for(var i=0;i<heuristic.length;i++){
    var bid=heuristic[i].baseId;
    if(FRONT_LINE_CARDS[bid]||BACK_LINE_CARDS[bid]||bid==='toki'||KEISEISEN_CARDS[bid]||bid==='kaya'){
      lockedIndices[i]=true;
    }
  }
  var hasLocked=Object.keys(lockedIndices).length>0;
  var bestOrder=heuristic.slice();
  var _simN=_aiSimN();
  var bestScore=aiForecast(heuristic,oppBoard,_simN);
  // 후보 K개: 휴리스틱 기반 인접 swap 변형 (lock된 자리는 swap 후보 X)
  var attempts=Math.min(_aiOptK(),p.board.length);
  for(var k=0;k<attempts;k++){
    var candidate=heuristic.slice();
    var swapCount=(Math.random()<0.55)?1:2;
    var didSwap=false;
    for(var s=0;s<swapCount;s++){
      // lock 안 된 인접 쌍 후보 수집
      var freeIdx=[];
      for(var ii=0;ii<candidate.length-1;ii++){
        if(!lockedIndices[ii]&&!lockedIndices[ii+1]) freeIdx.push(ii);
      }
      if(freeIdx.length===0) break;
      var idx=freeIdx[Math.floor(Math.random()*freeIdx.length)];
      var t=candidate[idx];candidate[idx]=candidate[idx+1];candidate[idx+1]=t;
      didSwap=true;
    }
    if(!didSwap) continue;
    var sc=aiForecast(candidate,oppBoard,_simN);
    if(sc>bestScore){bestScore=sc;bestOrder=candidate.slice();}
  }
  // 리버스 후보: 명시 카드가 있으면 명시 위치 깨질 수 있어서 스킵
  if(!hasLocked){
    var rev=heuristic.slice().reverse();
    var revSc=aiForecast(rev,oppBoard,_simN);
    if(revSc>bestScore){bestScore=revSc;bestOrder=rev;}
  }
  p.board=bestOrder;
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

// ===== 매치업 사전 결정 (영입 페이즈 시작 시 호출) =====
// 사망 직전 보드를 ghost 매치용으로 보존
function _snapshotForGhost(p){
  if(!p||!p.board) return [];
  return p.board.map(function(u){
    var c={};for(var k in u) c[k]=u[k];
    if(u.kw) c.kw=u.kw.slice();
    return c;
  });
}
function pairMatchups(){
  var alive=[];
  for(var i=0;i<G.players.length;i++) if(!G.players[i].dead) alive.push(G.players[i]);
  G.matchups={};
  if(alive.length<2) return;
  var lastM=G.lastMatchups||{};
  var matchups={};
  // player 0(=선생님)는 부전승 받지 않도록 우선 매칭
  var pool=alive.filter(function(pp){return pp.id!==0;});
  var hasPlayer0=alive.some(function(pp){return pp.id===0;});
  // 셔플
  for(var i=pool.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var t=pool[i];pool[i]=pool[j];pool[j]=t;
  }
  if(hasPlayer0&&pool.length>0){
    var pickIdx=0;
    for(var k=0;k<pool.length;k++){if(lastM[0]!==pool[k].id){pickIdx=k;break;}}
    var opp0=pool.splice(pickIdx,1)[0];
    matchups[0]={opponentId:opp0.id,isGhost:false};
    matchups[opp0.id]={opponentId:0,isGhost:false};
  }
  // 홀수면 고스트(직전 사망자) 또는 부전승
  if(pool.length%2===1){
    var ghostCand=null,bestT=-1;
    for(var i=0;i<G.players.length;i++){
      var pp=G.players[i];
      if(pp.dead && pp._ghostBoard && pp._ghostBoard.length>0 && (pp._deathTurn||0)>bestT){
        bestT=pp._deathTurn||0;ghostCand=pp;
      }
    }
    if(ghostCand){
      var pickIdx=0;
      for(var k=0;k<pool.length;k++){if(lastM[pool[k].id]!==ghostCand.id){pickIdx=k;break;}}
      var matcher=pool.splice(pickIdx,1)[0];
      matchups[matcher.id]={opponentId:ghostCand.id,isGhost:true};
    } else {
      var bye=pool.pop();
      if(bye) matchups[bye.id]={opponentId:null,bye:true};
    }
  }
  // 나머지 짝짓기 — 직전 매치 회피
  while(pool.length>=2){
    var a=pool.shift();
    var pickIdx=0;
    for(var k=0;k<pool.length;k++){if(lastM[a.id]!==pool[k].id){pickIdx=k;break;}}
    var b=pool.splice(pickIdx,1)[0];
    matchups[a.id]={opponentId:b.id,isGhost:false};
    matchups[b.id]={opponentId:a.id,isGhost:false};
  }
  G.matchups=matchups;
  G.lastMatchups={};
  for(var k in matchups) if(matchups[k].opponentId!=null) G.lastMatchups[k]=matchups[k].opponentId;
}

// ===== AI 상점 (플레이어와 동등한 메커니즘) =====
// 플레이어 상점과 동일하게 SHOP_SIZE[tier] 학생 카드 + 마법 1장
function aiGenerateShop(p){
  // 기존 상점 카드는 풀로 반환
  aiReturnShop(p);
  var pool=getAvailableChars(p.tier);
  var size=SHOP_SIZE[p.tier]||4;
  var shop=[];
  for(var i=0;i<size;i++){
    var available=pool.filter(function(c){return G.pool[c.id]>0;});
    if(available.length===0) break;
    var totalWeight=0;
    for(var j=0;j<available.length;j++) totalWeight+=G.pool[available[j].id];
    var roll=Math.random()*totalWeight;
    var cumul=0;var picked=available[0];
    for(var j=0;j<available.length;j++){cumul+=G.pool[available[j].id];if(roll<cumul){picked=available[j];break;}}
    takeFromPool(picked.id);
    shop.push(makeMinion(picked,false));
  }
  // 마법 카드 1장
  if(!G.usedOnceSpells) G.usedOnceSpells={};
  var availSpells=getAvailableSpells(p.tier).filter(function(s){return AI_SPELL_EFFECTS[s.id]&&(!s.once||!G.usedOnceSpells[s.id]);});
  if(availSpells.length>0){
    var sp=availSpells[Math.floor(Math.random()*availSpells.length)];
    shop.push({isSpell:true,spell:sp,name:sp.name,cost:sp.cost,desc:sp.desc,tier:sp.tier,target:sp.target});
  }
  p.aiShop=shop;
}
function aiReturnShop(p){
  if(!p.aiShop) return;
  for(var i=0;i<p.aiShop.length;i++){
    if(p.aiShop[i]&&!p.aiShop[i].isSpell) returnToPool(p.aiShop[i].baseId);
  }
  p.aiShop=[];
}
// AI 상점 얼림 결정 (영입 종료 후, 상점 반환 전에 평가)
// 조건:
// 1) 트리플 직전 카드(보드 같은 baseId 2장+) 상점에 있음
// 2) 빌드 코어 카드 상점에 있고 보드에 그게 아직 없음
// 3) 강한 액션 카드(tier 4+)가 비싸서 못 산 상태
function aiShouldFreezeShop(p){
  if(!p.aiShop) return false;
  for(var s=0;s<p.aiShop.length;s++){
    var item=p.aiShop[s];
    if(!item) continue;
    if(!item.isSpell){
      // 트리플 직전
      var copyCount=0;
      for(var b=0;b<p.board.length;b++){
        if(p.board[b].baseId===item.baseId&&!p.board[b].isSkin) copyCount++;
      }
      if(copyCount>=2) return true;
      // 빌드 코어 카드 + 보드에 그 카드 없음
      if(p._buildPlan&&p._buildPlan.coreCards.indexOf(item.baseId)!==-1){
        var hasCore=false;
        for(var b=0;b<p.board.length;b++){
          if(p.board[b].baseId===item.baseId) hasCore=true;
        }
        if(!hasCore) return true;
      }
    } else {
      // 강한 액션 카드 (tier 4+) 못 산 경우
      if(item.cost>p.stone&&item.tier>=4) return true;
    }
  }
  return false;
}
// 난이도별 매 턴 무료 리롤 횟수
function _aiFreeRerollsForTurn(){
  var d=getAiDifficulty();
  if(d>=1.0) return 3;     // 전설(플래티넘 1)
  if(d>=0.85) return 2;    // 1등급(플래티넘 2)
  if(d>=0.55) return 1;    // 4등급(골드)
  return 0;                // 실버 이하
}
function aiReroll(p){
  // 무료 리롤 우선 사용
  if((p._aiFreeRerolls||0)>0){
    p._aiFreeRerolls--;
    aiGenerateShop(p);
    return true;
  }
  if(p.stone<1) return false;
  p.stone-=1;
  aiGenerateShop(p);
  return true;
}
// 상점 카드 영입 시도 (성공 시 true)
function aiBuyFromShop(p, slotIdx, oppBoard){
  var item=p.aiShop[slotIdx];
  if(!item) return false;
  if(item.isSpell){
    if(p.stone<item.cost) return false;
    // 마법 즉시 발동 (플레이어와 동일)
    try{AI_SPELL_EFFECTS[item.spell.id](p);}catch(e){return false;}
    p.stone-=item.cost;
    if(item.spell.once) G.usedOnceSpells[item.spell.id]=true;
    p.aiShop[slotIdx]=null;
    return true;
  } else {
    if(p.stone<3) return false;
    var tmpl=null;for(var j=0;j<CHARS.length;j++){if(CHARS[j].id===item.baseId){tmpl=CHARS[j];break;}}
    if(!tmpl) return false;
    // 트리플 체크
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
    } else {
      return false; // 보드 풀
    }
    p.aiShop[slotIdx]=null; // 상점에서 제거 (이미 보드로)
    return true;
  }
}
// 상점 슬롯 점수 평가 (forecast 우선, 폴백은 휴리스틱)
function aiEvalShopSlot(p, slotIdx, oppBoard, aiStrat){
  var item=p.aiShop[slotIdx];
  if(!item) return -1;
  if(item.isSpell){
    if(p.stone<item.cost) return -1;
    if(p.board.length===0) return -1;
    if(oppBoard&&oppBoard.length>0){
      var baseScore=aiForecast(p.board,oppBoard,3);
      var testBoard=_aiCopyBoard(p.board);
      var testP={board:testBoard,stone:p.stone};
      try{AI_SPELL_EFFECTS[item.spell.id](testP);}catch(e){return -1;}
      var sc=aiForecast(testP.board,oppBoard,3);
      return (sc-baseScore)-item.cost*0.012;
    }
    // 폴백: 가성비
    return (item.tier/Math.max(1,item.cost))*0.01;
  }
  // 학생 카드: 휴리스틱 점수 (forecast는 비싸므로 기본은 휴리스틱)
  if(p.stone<3) return -1;
  var c=findAnyChar(item.baseId)||item;
  var s=item.atk+item.hp+(item.tier||1)*1.5;
  for(var k=0;k<(item.kw||[]).length;k++){
    var kw=item.kw[k];
    if(kw==='poison')s+=4;else if(kw==='cleave')s+=3;else if(kw==='pierce')s+=2;
    else if(kw==='shield')s+=2;else if(kw==='windfury')s+=3;else if(kw==='survive')s+=1;
  }
  if(DR_IDS[item.baseId])s+=5;
  if(SOC_IDS[item.baseId])s+=4;
  if(BC_IDS[item.baseId])s+=4;
  if(PRE_IDS[item.baseId])s+=3;
  if(SURV_IDS[item.baseId])s+=3;
  if(PASSIVE_IDS[item.baseId])s+=3;
  // 트리플/페어 보너스
  var hasCopy=false;var copyCount=0;
  for(var k=0;k<p.board.length;k++){if(p.board[k].baseId===item.baseId&&!p.board[k].isSkin){hasCopy=true;copyCount++;}}
  if(copyCount===1)s+=5;
  else if(copyCount>=2)s+=20; // 트리플 직전 — 매우 가치 큼
  if(aiStrat){
    if(aiStrat.dominantSchool&&item.school===aiStrat.dominantSchool){
      var unity=0;for(var u=0;u<p.board.length;u++){if(p.board[u].school===aiStrat.dominantSchool)unity++;}
      s+=5+unity*3; // 강화: 기본 5, 동일학교당 +3 (이전 3+2)
    }
    if(aiStrat.targetUnits&&aiStrat.targetUnits.indexOf(item.baseId)!==-1)s+=15; // 강화: 12→15
    if(aiStrat.avoidOtherSchools&&aiStrat.dominantSchool&&item.school!==aiStrat.dominantSchool)s-=15; // 강화: -10→-15
    if(aiStrat.deckPattern)s+=aiStrat.deckPattern.buyBonus(c,p.board);
  }
  // === 빌드 청사진 보너스 (5턴 이후 결정된 빌드 추구) ===
  if(p._buildPlan){
    var bp=p._buildPlan;
    if(bp.coreCards.indexOf(item.baseId)!==-1) s+=30;        // 코어 카드 (흡수 대상)
    else if(bp.schoolValue.indexOf(item.baseId)!==-1) s+=15; // 학교 밸류 카드
    else if(item.school===bp.school) s+=8;                   // 같은 학교
    else s-=5;                                                // 빌드 외 카드
  }
  s+=simStatBonus(item.baseId);
  // === 키워드/패턴 시너지 가산 ===
  // 광역/관통 보드 시너지: 같은 키워드 가진 카드끼리 시너지
  var itemHasAOE=hasKw(item,'cleave')||hasKw(item,'pierce');
  if(itemHasAOE){
    var aoeOnBoard=0;
    for(var u=0;u<p.board.length;u++){
      if(hasKw(p.board[u],'cleave')||hasKw(p.board[u],'pierce')) aoeOnBoard++;
    }
    s+=aoeOnBoard*2; // 광역 보드 시너지
  }
  // 게헨나 흡수 콤보 (마코토+사츠키+이로하+이부키+치아키 → 만마전)
  var gehennaComboIds={makoto:1,satsuki:1,iroha:1,ibuki:1,chiaki:1};
  if(gehennaComboIds[item.baseId]){
    var gComboCount=0;
    for(var u=0;u<p.board.length;u++) if(gehennaComboIds[p.board[u].baseId]) gComboCount++;
    if(gComboCount>=2) s+=8;
    else if(gComboCount>=1) s+=4;
  }
  // 트리니티 SOC 콤보 (츠루기+카야 + SOC 카드들)
  if(SOC_IDS[item.baseId]){
    var hasTsurugi=false,hasKaya=false,socCount=0;
    for(var u=0;u<p.board.length;u++){
      if(p.board[u].baseId==='tsurugi') hasTsurugi=true;
      else if(p.board[u].baseId==='kaya') hasKaya=true;
      if(SOC_IDS[p.board[u].baseId]) socCount++;
    }
    if(hasTsurugi||hasKaya) s+=socCount*2; // 츠루기/카야 있으면 SOC 늘릴수록 가치
  }
  // 백귀야행 통일 (쿠즈노하 발동 조건 진행도)
  if(item.school==='백귀야행'){
    var hkykCount=0;
    for(var u=0;u<p.board.length;u++) if(p.board[u].school==='백귀야행') hkykCount++;
    if(hkykCount>=4) s+=hkykCount*2; // 4명 이상부터 폭발적 가산
  }
  // 양방향 노이즈: 낮은 등급은 점수 평가 자체가 왜곡 (좋은 카드를 나쁘게/나쁜 카드를 좋게)
  s+=(Math.random()-0.5)*_aiNoise()*2;
  // 보드 가득 + 트리플 아니면 영입 불가
  if(p.board.length>=MAX_BOARD&&copyCount<2) return -1;
  // 휴리스틱 → 0~1 정규화 (대략)
  var heu=s/100;
  // 난이도 비례 forecast 블렌딩 (d>=0.4에서 작동, 매치업 보드 있을 때만)
  var fw=_aiForecastWeight();
  if(fw>0&&oppBoard&&oppBoard.length>0){
    var fc=_aiStudentForecast(p, item, oppBoard);
    if(fc!=null) return heu*(1-fw) + fc*fw;
  }
  return heu;
}
// 리롤이 가치 있는지 판단 (현재 상점 최고치 < 임계 + 골드 여유)
function aiShouldReroll(p, currentBest){
  // 무료 리롤이 남아있으면 골드 체크 생략 + 임계 더 관대
  var hasFree=(p._aiFreeRerolls||0)>0;
  if(!hasFree && p.stone<5) return false; // 일반 리롤은 골드 5+ 필요
  var decision;
  if(p.board.length>=MAX_BOARD){
    var bc={};for(var j=0;j<p.board.length;j++){if(!p.board[j].isSkin)bc[p.board[j].baseId]=(bc[p.board[j].baseId]||0)+1;}
    var hasTripleNeed=false;
    for(var bid in bc){if(bc[bid]>=2&&G.pool[bid]>0){hasTripleNeed=true;break;}}
    decision = hasTripleNeed && currentBest < (hasFree?0.30:0.20); // 무료면 더 관대
  } else {
    decision = currentBest < (hasFree?0.20:0.12); // 무료면 더 적극
  }
  // 난이도 비례 실수 — 무료 리롤은 mistake 영향 거의 안 받음 (강력함 유지)
  if(!hasFree && Math.random() < _aiMistakeRate()) decision = !decision;
  return decision;
}

function aiTurns() {
  // 매치업 사전 결정 (이번 영입 페이즈 1회만)
  if(G._matchupsTurn!==G.turn){pairMatchups();G._matchupsTurn=G.turn;}
  for(var i=1;i<G.players.length;i++){
    var p=G.players[i];if(p.dead)continue;
    // 개별 AI 난이도 override (있으면 적용)
    G._currentAiDifficulty = (p.aiDifficulty!=null) ? p.aiDifficulty : null;
    // 난이도별 매 턴 무료 리롤 부여 (4등급=1, 1등급=2, 전설=3)
    p._aiFreeRerolls = _aiFreeRerollsForTurn();
    // 매치업 상대 보드 (forecast용)
    var _oppBoard=_aiGetOppBoard(p);
    // Phase 1: 레벨업 판단 (스코어링)
    if(aiShouldUpgrade(p)){p.stone-=p.upgradeCost;p.tier++;p.upgradeCost=p.tier<6?UPGRADE_COSTS[p.tier]:99;}

    var aiStrat=aiGetStrategy(p);
    var aiPool=getAvailableChars(p.tier);

    // 빌드 청사진 결정 (7청휘석 이상에서 보드 진행도 평가)
    aiDecideBuildPlan(p);

    // Phase 0: AI 상점 생성 (얼린 상태면 기존 상점 유지)
    if(p._aiFrozen && p.aiShop && p.aiShop.length>0){
      // 얼림 유효 — 기존 상점 그대로 사용
      p._aiFrozen=false; // 한 턴 사용 후 자동 해제
    } else {
      aiGenerateShop(p);
    }

    // Phase 3: 선빵적 매각 (보드 풀 + 골드 부족 시)
    aiProactiveSell(p,aiStrat);

    // Phase 2+4 통합: 상점 기반 의사결정 루프
    // 매 사이클마다 (a) 상점 슬롯 영입 (b) 리롤 중 최선 선택
    var actLoop=0;
    var rerollCount=0;
    var MAX_REROLLS=Math.max(2, Math.floor(p.tier*1.5)); // 티어 비례 (1티어=3회, 6티어=9회 상한)
    while(actLoop<25){
      actLoop++;
      // 모든 상점 슬롯 점수 평가 (랭킹 후 mistake-rate로 top↔2nd 스왑)
      var slotRanks=[];
      for(var s=0;s<p.aiShop.length;s++){
        if(!p.aiShop[s]) continue;
        var sc=aiEvalShopSlot(p,s,_oppBoard,aiStrat);
        if(sc>0) slotRanks.push({slot:s, score:sc});
      }
      slotRanks.sort(function(a,b){return b.score-a.score;});
      // 난이도 비례 실수: 낮은 등급은 완전 무작위 픽, 중간 등급은 top↔non-top swap
      if(slotRanks.length>=2 && Math.random()<_aiMistakeRate()){
        if(Math.random()<_aiMistakeRandomness()){
          // 완전 무작위 픽 (점수 무시)
          var randIdx=Math.floor(Math.random()*slotRanks.length);
          var t=slotRanks[0]; slotRanks[0]=slotRanks[randIdx]; slotRanks[randIdx]=t;
        } else {
          // top↔무작위 비1위 swap (가벼운 실수)
          var swapIdx=1+Math.floor(Math.random()*(slotRanks.length-1));
          var t=slotRanks[0]; slotRanks[0]=slotRanks[swapIdx]; slotRanks[swapIdx]=t;
        }
      }
      var bestSlot=slotRanks.length>0?slotRanks[0].slot:-1;
      var bestSlotScore=slotRanks.length>0?slotRanks[0].score:-Infinity;
      // 리롤 결정 (현재 상점 가치가 너무 낮으면, 단 상한 적용)
      var doReroll=(rerollCount<MAX_REROLLS) && aiShouldReroll(p, bestSlotScore);
      if(doReroll){
        if(!aiReroll(p)) break;
        rerollCount++;
        continue; // 새 상점으로 다시 평가
      }
      if(bestSlot<0||bestSlotScore<=0) break;
      // 영입 시도
      var bought=aiBuyFromShop(p,bestSlot,_oppBoard);
      if(!bought) break;
    }

    // Phase 5: 매각+교체 — 보드 약체를 매각하고 상점/풀에서 더 좋은 걸 영입
    // (상점 우선, 상점에 더 좋은 게 없으면 풀에서 영입하지 않음 — 공평성 유지)
    aiSellReplaceShop(p,aiStrat,_oppBoard);

    // Phase 6: 잔여 골드로 추가 액션 시도 (상점에서만)
    var lateLoop=0;
    while(lateLoop<5 && p.stone>=3){
      lateLoop++;
      var bs=-1, bsScore=-Infinity;
      for(var s=0;s<p.aiShop.length;s++){
        if(!p.aiShop[s]) continue;
        var sc=aiEvalShopSlot(p,s,_oppBoard,aiStrat);
        if(sc>bsScore){bsScore=sc;bs=s;}
      }
      if(bs<0||bsScore<=0) break;
      if(!aiBuyFromShop(p,bs,_oppBoard)) break;
    }

    // 얼림 결정: 좋은 카드 남았으면 얼리고 다음 턴 보존
    if(aiShouldFreezeShop(p)){
      p._aiFrozen=true;
      // aiReturnShop 호출 안 함 — 상점 카드는 풀로 반환되지 않음 (다음 턴 사용)
    } else {
      aiReturnShop(p);
    }

    p.board=p.board.filter(function(u){return !!u;});
    // Forecast 기반 배치 최적화 (매치업 보드 있을 때)
    var _oppB2=_aiGetOppBoard(p);
    if(_oppB2&&_oppB2.length>0&&p.board.length>1){
      aiOptimizeOrder(p,_oppB2);
    } else {
      aiSortBoard(p.board);
    }

    // AI 7성 히든카드 체크 (정당한 조건 + 확률)
    aiCheckHidden(p);
  }
  G._currentAiDifficulty=null; // 개별 난이도 override 해제
}

// 상점 기반 매각+교체: 보드에서 가장 약한 유닛 매각 후 상점에서 더 좋은 카드 영입 가능 시 실행
function aiSellReplaceShop(p, aiStrat, oppBoard){
  if(!p.aiShop || p.board.length===0) return;
  // 상점 최고 학생 카드 평가
  var bestSlot=-1, bestSlotScore=-Infinity;
  for(var s=0;s<p.aiShop.length;s++){
    if(!p.aiShop[s] || p.aiShop[s].isSpell) continue;
    var sc=aiEvalShopSlot(p,s,oppBoard,aiStrat);
    if(sc>bestSlotScore){bestSlotScore=sc;bestSlot=s;}
  }
  if(bestSlot<0) return;
  var shopCard=p.aiShop[bestSlot];
  // 보드에서 가장 약한 유닛 선택 (영입 후보보다 명백히 약할 때만)
  var weakIdx=-1, weakScore=Infinity;
  for(var i=0;i<p.board.length;i++){
    var u=p.board[i];
    if(u.isSkin) continue; // 스킨 매각 안 함
    var us=aiUnitScore(u);
    if(us<weakScore){weakScore=us;weakIdx=i;}
  }
  if(weakIdx<0) return;
  // 매각 가치는 영입 후보보다 분명히 낮아야 (마진 +2 이상)
  var shopUnitScore=shopCard.atk+shopCard.hp+(shopCard.tier||1)*1.5;
  if(shopUnitScore <= weakScore+2) return;
  // 매각 후 영입 가능한지 (매각으로 1골드 회수 + 영입 3골드)
  if(p.stone+1 < 3) return;
  // 매각
  returnToPool(p.board[weakIdx].baseId);
  p.stone+=1;
  p.board.splice(weakIdx,1);
  // 영입
  aiBuyFromShop(p,bestSlot,oppBoard);
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
      } else if(hid==='arius_squad'){
        var absorb=['saori','misaki','atsuko','hiyori'];
        var bAtk=0,bHp=0,nb=[];var arA=[];
        for(var j=0;j<p.board.length;j++){
          if(absorb.indexOf(p.board[j].baseId)!==-1){
            bAtk+=p.board[j].atk;bHp+=p.board[j].hp;
            arA.push({id:p.board[j].id,baseId:p.board[j].baseId,name:p.board[j].name,school:p.board[j].school,tier:p.board[j].tier,atk:p.board[j].atk,hp:p.board[j].hp,maxHp:p.board[j].hp,kw:(p.board[j].kw||[]).slice(),img:p.board[j].img,isSkin:p.board[j].isSkin||false});
            returnToPool(p.board[j].baseId,p.board[j].isSkin?3:1);
          }else nb.push(p.board[j]);
        }
        p.board=nb;unit.atk+=bAtk;unit.hp+=bHp;unit.maxHp=unit.hp;unit._ariusAbsorbed=arA;G._ariusAbsorbed=arA;
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
    // 스킨: 지켜줌 뒤집기
    if(u.isSkin){
      for(var i=0;i<otherSide.length;i++){
        if(!otherSide[i].alive)continue;
        var ti=otherSide[i].kw.indexOf('taunt');
        if(ti!==-1){otherSide[i].kw.splice(ti,1);}
        else{otherSide[i].kw.push('taunt');}
      }
      log.push({cls:'soc',text:'[개전] '+u.name+': 적 지켜줌 뒤집기!'});
    }
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
  else if(id==='mutsuki'&&u.isSkin){
    // 새해 무츠키: 개전 공격력 +5
    u.atk+=5;
    log.push({cls:'soc',text:'[개전] '+u.name+': 공격력 +5! ('+u.atk+')'});
  }
  else if(id==='midori'){
    // 모모이 수만큼 버프 (메이드면 수×+4/+4, 둘 다 메이드면 수×+8/+8)
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].baseId==='momoi'){
        var buff=(u.isSkin&&mySide[i].isSkin)?8:(u.isSkin||mySide[i].isSkin)?4:2;
        u.atk+=buff;u.hp+=buff;
        log.push({cls:'soc',text:'[개전] '+u.name+': 모모이 → +'+buff+'/+'+buff});
      }
    }
  }
  else if(id==='momoi'){
    // 미도리 수만큼 버프
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].baseId==='midori'){
        var buff=(u.isSkin&&mySide[i].isSkin)?8:(u.isSkin||mySide[i].isSkin)?4:2;
        u.atk+=buff;u.hp+=buff;
        log.push({cls:'soc',text:'[개전] '+u.name+': 미도리 → +'+buff+'/+'+buff});
      }
    }
  }
  else if(id==='mari'){
    var atkBuff=u.isSkin?3:2,hpBuff=u.isSkin?3:1;
    var mariBuffed=[];
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=atkBuff;mySide[i].hp+=hpBuff;mariBuffed.push(mySide[i].name+'('+mySide[i].atk+'/'+mySide[i].hp+')');}}
    log.push({cls:'soc',text:'[개전] '+u.name+': 아군 전체 +'+atkBuff+'/+'+hpBuff});
    if(mariBuffed.length>0) log.push({cls:'soc',text:'  → '+mariBuffed.join(', ')});
  }
  // ===== 아리우스 분교 (코인 의존) =====
  else if(id==='saori'){
    if(u._coinResult===false){
      var basicKws=['taunt','shield','poison','reborn','cleave','pierce','ranged','windfury','selfdestruct','invincible','ambush'];
      var removed=[];var newKw=[];
      for(var i=0;i<u.kw.length;i++){
        if(basicKws.indexOf(u.kw[i])!==-1) removed.push(KW_LABELS[u.kw[i]]||u.kw[i]);
        else newKw.push(u.kw[i]);
      }
      u.kw=newKw;
      log.push({cls:'kill',text:'[개전] '+u.name+': 코인 실패! 기본 능력 삭제'+(removed.length>0?' ('+removed.join(', ')+')':'')});
    } else {
      log.push({cls:'soc',text:'[개전] '+u.name+': 코인 성공!'});
    }
  }
  else if(id==='misaki'){
    // 스킨: 저격 추가
    if(u.isSkin&&u.kw.indexOf('ranged')===-1) u.kw.push('ranged');
    if(u._coinResult===false){
      u.hp=0;u.alive=false;
      log.push({cls:'kill',text:'[개전] '+u.name+': 코인 실패! 자폭!'});
    } else {
      log.push({cls:'soc',text:'[개전] '+u.name+': 코인 성공!'});
    }
  }
  else if(id==='hiyori'){
    // 스킨: 연사 추가
    if(u.isSkin&&u.kw.indexOf('windfury')===-1) u.kw.push('windfury');
    if(u._coinResult===false){
      u.noAttack=true;
      log.push({cls:'kill',text:'[개전] '+u.name+': 코인 실패! 공격 불가!'});
    } else {
      log.push({cls:'soc',text:'[개전] '+u.name+': 코인 성공!'});
    }
  }
  else if(id==='subaru'){
    // 스킨: 부활 추가
    if(u.isSkin&&u.kw.indexOf('reborn')===-1) u.kw.push('reborn');
    if(u._coinResult===false){
      var oldA=u.atk,oldH=u.hp;
      u.atk=Math.floor(u.atk/2);
      u.hp=Math.floor(u.hp/2);
      if(u.maxHp) u.maxHp=Math.floor(u.maxHp/2);
      log.push({cls:'kill',text:'[개전] '+u.name+': 코인 실패! 절반! ('+oldA+'/'+oldH+' → '+u.atk+'/'+u.hp+')'});
    } else {
      log.push({cls:'soc',text:'[개전] '+u.name+': 코인 성공!'});
    }
  }
  else if(id==='atsuko'){
    // 무작위 아군 N인의 개전 효과 무력화 (일반 3, 스킨 전원)
    var atsukoTargets=[];
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i]!==u&&SOC_IDS[mySide[i].baseId]&&!mySide[i]._socStripped){
        atsukoTargets.push(mySide[i]);
      }
    }
    for(var i=atsukoTargets.length-1;i>0;i--){
      var j=Math.floor(Math.random()*(i+1));
      var t=atsukoTargets[i];atsukoTargets[i]=atsukoTargets[j];atsukoTargets[j]=t;
    }
    var atsukoCount = u.isSkin ? atsukoTargets.length : Math.min(3, atsukoTargets.length);
    var atsukoPicked = atsukoTargets.slice(0, atsukoCount);
    for(var i=0;i<atsukoPicked.length;i++){
      atsukoPicked[i]._socStripped=true;
      log.push({cls:'soc',text:'[개전] '+u.name+': 아군 '+atsukoPicked[i].name+'의 개전 삭제!'});
    }
    if(atsukoPicked.length===0) log.push({cls:'soc',text:'[개전] '+u.name+': 삭제할 개전 효과가 없습니다.'});
  }
  // ===== 아리우스 7성 =====
  else if(id==='arius_squad'){
    // base atk 20만큼 아군 적군 전체 데미지 후 자신 파괴
    var ariusBase=20;
    log.push({cls:'soc',text:'[개전] '+u.name+': 자폭! 아군 적군 전체 '+ariusBase+' 데미지!'});
    // 적군 (사야 면역)
    for(var i=0;i<otherSide.length;i++){
      var et=otherSide[i];
      if(!et.alive) continue;
      if(et.abilityImmune||et._sayaImmune){
        log.push({cls:'shield',text:'  → 적 '+et.name+': 면역!'});
        continue;
      }
      et.hp-=ariusBase;
      log.push({cls:'hit',text:'  → 적 '+et.name+'에게 '+ariusBase+' 피해 (HP:'+Math.max(0,et.hp)+')'});
      if(et.hp<=0){et.hp=0;et.alive=false;et._killedBy=u;}
    }
    // 아군 (자기 제외, 사야 일반은 면역)
    for(var i=0;i<mySide.length;i++){
      var at=mySide[i];
      if(!at.alive||at===u) continue;
      if(at.abilityImmune){
        log.push({cls:'shield',text:'  → 아군 '+at.name+': 면역!'});
        continue;
      }
      at.hp-=ariusBase;
      log.push({cls:'hit',text:'  → 아군 '+at.name+'에게 '+ariusBase+' 피해 (HP:'+Math.max(0,at.hp)+')'});
      if(at.hp<=0){
        at.hp=0;at.alive=false;at._killedBy=u;
        triggerDeathrattle(at,mySide,otherSide,log);
      }
    }
    // 자기 파괴
    u.hp=0;u.alive=false;
    log.push({cls:'kill',text:'  → '+u.name+': 자신 파괴!'});
  }
  // ===== 발키리/SRT 개전 =====
  else if(id==='saki'){
    // 적의 지켜줌 무작위 1인 해제 (스킨 전원)
    var sakiTargets=[];
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive&&hasKw(otherSide[i],'taunt')&&!otherSide[i].abilityImmune&&!otherSide[i]._sayaImmune)
        sakiTargets.push(otherSide[i]);
    }
    if(sakiTargets.length===0){
      log.push({cls:'soc',text:'[개전] '+u.name+': 해제할 지켜줌이 없습니다.'});
    } else if(u.isSkin){
      var sakiNames=[];
      for(var i=0;i<sakiTargets.length;i++){
        var ti=sakiTargets[i].kw.indexOf('taunt');if(ti!==-1) sakiTargets[i].kw.splice(ti,1);
        sakiNames.push(sakiTargets[i].name);
      }
      log.push({cls:'soc',text:'[개전] '+u.name+': 적 지켜줌 전원 해제! ('+sakiNames.join(', ')+')'});
    } else {
      var pickIdx=Math.floor(Math.random()*sakiTargets.length);
      var pick=sakiTargets[pickIdx];
      var ti=pick.kw.indexOf('taunt');if(ti!==-1) pick.kw.splice(ti,1);
      log.push({cls:'soc',text:'[개전] '+u.name+': '+pick.name+'의 지켜줌 해제!'});
    }
  }
  else if(id==='kanna'){
    // 게임 누적 학교 킬/사망의 절반(올림)을 stat에 추가 (스킨은 전체)
    var kk=G.valkyrieKills||0, kd=G.valkyrieDeaths||0;
    var addAtk = u.isSkin ? kk : Math.ceil(kk/2);
    var addHp  = u.isSkin ? kd : Math.ceil(kd/2);
    u.atk += addAtk;
    u.hp  += addHp;
    if(u.maxHp) u.maxHp += addHp;
    if(addAtk>0||addHp>0){
      log.push({cls:'soc',text:'[개전] '+u.name+': 학교 누적 킬 '+kk+'·사망 '+kd+' → +'+addAtk+'/+'+addHp+' ('+u.atk+'/'+u.hp+')'});
    } else {
      log.push({cls:'soc',text:'[개전] '+u.name+': 누적 킬/사망 없음'});
    }
  }
  else if(id==='tsurugi'){
    var mult=u.isSkin?3:2;
    u.atk=u.atk*mult; u.hp=u.hp*mult;
    log.push({cls:'soc',text:'[개전] '+u.name+': 공/체 '+mult+'배! ('+u.atk+'/'+u.hp+')'});
  }
  else if(id==='rio'){
    // 무작위 적 N인의 모든 능력 삭제 (일반 2명, 스킨 3명)
    // 사야 면역(abilityImmune / _sayaImmune) 카드는 후보 X
    var rioCount=u.isSkin?3:2;
    var rioTargets=[];
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive && !otherSide[i].abilityImmune && !otherSide[i]._sayaImmune)
        rioTargets.push(otherSide[i]);
    }
    // 셔플
    for(var i=rioTargets.length-1;i>0;i--){
      var j=Math.floor(Math.random()*(i+1));
      var t=rioTargets[i];rioTargets[i]=rioTargets[j];rioTargets[j]=t;
    }
    var rioPicked=rioTargets.slice(0,rioCount);
    for(var i=0;i<rioPicked.length;i++) stripAbilities(rioPicked[i], log);
    log.push({cls:'soc',text:'[개전] '+u.name+': 무작위 적 '+rioPicked.length+'명의 능력 삭제!'});
  }
  else if(id==='shizuko'){
    // 무작위 적 N인의 버프(기본 stat 초과분) 완전 삭제 (일반 1명, 스킨 2명)
    // 버프 받은 적만 후보 — 안 받은 적은 절대 픽 X (불발 방지)
    // 사야 면역(abilityImmune / _sayaImmune) 카드도 후보 X
    var shizCount = u.isSkin ? 2 : 1;
    var shizCandidates=[];
    for(var i=0;i<otherSide.length;i++){
      if(!otherSide[i].alive) continue;
      if(otherSide[i].abilityImmune || otherSide[i]._sayaImmune) continue;
      var sztgt=otherSide[i];
      var sztmpl=findAnyChar(sztgt.baseId);
      if(!sztmpl) continue;
      var sbAtk = sztgt.isSkin?(sztmpl.atk*2+1):sztmpl.atk;
      var sbHp  = sztgt.isSkin?(sztmpl.hp*2+1):sztmpl.hp;
      // maxHp 기준으로 hp 버프 측정 (현재 hp는 데미지 받았을 수도)
      var refHp = sztgt.maxHp || sztgt.hp;
      if(sztgt.atk > sbAtk || refHp > sbHp){
        shizCandidates.push({unit:sztgt, baseAtk:sbAtk, baseHp:sbHp});
      }
    }
    if(shizCandidates.length===0){
      log.push({cls:'soc',text:'[개전] '+u.name+': 버프 받은 적이 없습니다.'});
    } else {
      // 셔플 후 N명 픽
      for(var i=shizCandidates.length-1;i>0;i--){
        var j=Math.floor(Math.random()*(i+1));
        var t=shizCandidates[i];shizCandidates[i]=shizCandidates[j];shizCandidates[j]=t;
      }
      var shizPicked=shizCandidates.slice(0, Math.min(shizCount, shizCandidates.length));
      for(var i=0;i<shizPicked.length;i++){
        var sc=shizPicked[i];
        var lostAtk=Math.max(0, sc.unit.atk - sc.baseAtk);
        var refHp2=sc.unit.maxHp || sc.unit.hp;
        var lostHp=Math.max(0, refHp2 - sc.baseHp);
        if(lostAtk>0) sc.unit.atk -= lostAtk;
        if(lostHp>0){
          sc.unit.hp = Math.max(0, sc.unit.hp - lostHp);
          if(sc.unit.maxHp) sc.unit.maxHp -= lostHp;
        }
        log.push({cls:'soc',text:'[개전] '+u.name+': '+sc.unit.name+'의 버프 삭제! (-'+lostAtk+'/-'+lostHp+')'});
      }
    }
  }
  else if(id==='himari'){
    // 히마리 개전: 아군 2인(스킨: 전원)에게 무작위 기본능력 키워드 추가 (중복 없음, 전투 전용)
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
      log.push({cls:'soc',text:'[개전] '+u.name+': '+_hmt.name+'에게 '+(KW_LABELS[pick]||pick)+' 부여!'});
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
      log.push({cls:'soc',text:'[개전] '+u.name+': 아군 적군 지켜줌 모두 제거!'});
    } else {
      log.push({cls:'soc',text:'[개전] '+u.name+': 아군 지켜줌 모두 제거!'});
    }
  }
  else if(id==='hibiki'){
    var debuff=u.isSkin?2:1;
    var hibikiKills=[];
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive&&!otherSide[i].abilityImmune){
        otherSide[i].atk=Math.max(1,otherSide[i].atk-debuff);
        otherSide[i].hp-=debuff;
        if(otherSide[i].hp<=0){otherSide[i].hp=0;otherSide[i].alive=false;otherSide[i]._killedBy=u;log.push({cls:'kill',text:otherSide[i].name+' 디버프로 쓰러졌다!'});hibikiKills.push(otherSide[i]);}
      }
    }
    for(var i=0;i<hibikiKills.length;i++) triggerDeathrattle(hibikiKills[i],otherSide,mySide,log);
    log.push({cls:'soc',text:'[개전] '+u.name+': 적 전체 -'+debuff+'/-'+debuff});
  }
  else if(id==='makoto'){
    // 마코토 → 비행선으로 교체 (비행선 공/체 = 마코토 현재 공/체 × 2)
    var as=makeToken('airship');
    as.atk=(u.atk||0)*2;as.hp=(u.hp||0)*2;as.alive=true;as.poisonImmune=false;
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
        log.push({cls:'soc',text:'  → [개전] '+mySide[i].name+': +'+ibukiBuff+'/+'+ibukiBuff+' ('+mySide[i].atk+'/'+mySide[i].hp+')'});
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
        log.push({cls:'soc',text:'  → [개전] '+mySide[i].name+': C4 뒤끝 부여'+(u.isSkin?' (황금×2)':'')});
      }
    }
    if(akaneCount>0)log.push({cls:'soc',text:'[개전] '+u.name+': '+akaneCount+'명에게 C4 뒤끝 부여!'});
  }
  else if(id==='kaya'){
    // 맨 왼쪽 생존 아군을 쓰러뜨리고 스탯 흡수 (황금: x2)
    var target=null;
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i]!==u){target=mySide[i];break;}}
    if(target){
      var mult=u.isSkin?4:2;
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
          if(otherSide[i].hp<=0){otherSide[i].hp=0;otherSide[i].alive=false;otherSide[i]._killedBy=u;trainKills.push(otherSide[i]);}
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
    var poisonGranted=[];
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].school==='백귀야행'){addKw(mySide[i],'poison');poisonGranted.push(mySide[i].name);}
    }
    log.push({cls:'soc',text:'[개전] '+u.name+': 적 독사굴 영구 차단! 아군 백귀야행 전체 독사굴!'});
    if(poisonGranted.length>0) log.push({cls:'soc',text:'  → 독사굴 부여: '+poisonGranted.join(', ')});
  }
  else if(id==='millennium_death_momoi'){
    // 데스 모모이 개전: 적 전체 지켜줌 삭제 (사야 면역)
    for(var i=0;i<otherSide.length;i++){
      if(otherSide[i].alive&&hasKw(otherSide[i],'taunt')&&!otherSide[i].abilityImmune&&!otherSide[i]._sayaImmune){
        otherSide[i].kw.splice(otherSide[i].kw.indexOf('taunt'),1);
      }
    }
    log.push({cls:'soc',text:'[개전] '+u.name+': 적 전체 지켜줌 삭제!'});
  }
  // ===== 신규 7성 개전 =====
  else if(id==='gehenna_p68'){
    // 흥신소 68: 상대 배치 완전 역순 + 비지켜줌 강제 타겟
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
      var _spType={soc:'개전',dr:'뒤끝',surv:'버티기',pre:'선빵',bc:'첫인사',passive:'패시브'}[shuffledSpecial[i].type]||shuffledSpecial[i].type;
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
  // 미치�� 개전: 아군 백귀야행 무작위 1명에게 기습 부여
  else if(id==='eimi'){
    var milCount=0;
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i].school==='밀레니엄')milCount++;}
    var buff=u.isSkin?milCount*2:milCount;
    u.atk+=buff;u.hp+=buff;
    log.push({cls:'soc',text:'[개전] '+u.name+': 밀레니엄 '+milCount+'명 → +'+buff+'/+'+buff});
  }
  else if(id==='michiru'){
    var hkykAlive=[];
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].school==='백귀야행'&&mySide[i]!==u&&!hasKw(mySide[i],'ambush'))
        hkykAlive.push(mySide[i]);
    }
    var targets=u.isSkin?2:1;
    for(var t=0;t<targets&&hkykAlive.length>0;t++){
      var pick=Math.floor(Math.random()*hkykAlive.length);
      var chosen=hkykAlive.splice(pick,1)[0];
      addKw(chosen,'ambush');
      log.push({cls:'soc',text:'[개전] '+u.name+': '+chosen.name+'에게 기습 부여!'});
    }
  }
  else if(id==='nonomi'){
    // 노노미 개전: 샬레에 존재한 이후 소비된 청휘석 / 2 (내림)를 맨 왼쪽 학생 공/체에 추가
    var nonomiStone=u.isSkin?(G.nonomiStoneSinceJoined||0):Math.floor((G.nonomiStoneSinceJoined||0)/2);
    if(nonomiStone>0&&mySide.length>0){
      var leftmost=null;
      for(var _nli=0;_nli<mySide.length;_nli++){if(mySide[_nli].alive){leftmost=mySide[_nli];break;}}
      if(leftmost){
        leftmost.atk+=nonomiStone;leftmost.hp+=nonomiStone;
        log.push({cls:'soc',text:'[개전] '+u.name+': '+leftmost.name+'에게 +'+nonomiStone+'/+'+nonomiStone+' (소비 청휘석 '+(G.nonomiStoneSinceJoined||0)+(u.isSkin?'':' 의 절반')+')'});
      }
    } else {
      log.push({cls:'soc',text:'[개전] '+u.name+': 소비 청휘석 없음 (0)'});
    }
  }
  else if(id==='mina'){
    // 미나 개전: 아군 전체 -1/-1
    for(var _mi=0;_mi<mySide.length;_mi++){
      if(mySide[_mi].alive&&!mySide[_mi].abilityImmune){mySide[_mi].atk=Math.max(1,mySide[_mi].atk-1);mySide[_mi].hp-=1;
        if(mySide[_mi].hp<=0){mySide[_mi].hp=1;}}
    }
    log.push({cls:'soc',text:'[개전] '+u.name+': 아군 전체 -1/-1!'});
  }
  else if(id==='rumi'){
    // 루미 개전: 자신의 기본능력을 아군 1인(스킨:2인)에게 복사
    var rumiKw=u.kw.filter(function(k){return k!=='survive'&&k!=='preemptive';});
    if(rumiKw.length>0){
      // 새 키워드를 받을 수 있는 대상 우선 선택
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
        log.push({cls:'soc',text:'[개전] '+u.name+': '+rumiTarget.name+'에게 '+rumiKw.join(',')+' 부여!'});
      }
    }
  }
  else if(id==='Shiroko_Terror'){
    // 시로코 테러 개전: 적 가장 체력 높은 1인 + 자신을 제외한 모든 학생 쓰러뜨림
    // 사야 면역(abilityImmune / _sayaImmune) 카드는 처치 대상에서 제외
    var maxEnemyHp=-1;
    for(var _sti=0;_sti<otherSide.length;_sti++){
      if(otherSide[_sti].alive&&otherSide[_sti].hp>maxEnemyHp) maxEnemyHp=otherSide[_sti].hp;
    }
    var topEnemies=[];
    for(var _sti=0;_sti<otherSide.length;_sti++){
      if(otherSide[_sti].alive&&otherSide[_sti].hp===maxEnemyHp) topEnemies.push(otherSide[_sti]);
    }
    var spared=topEnemies.length>0?topEnemies[Math.floor(Math.random()*topEnemies.length)]:null;
    // 발동 시점 유닛 스냅샷 (DR로 추가되는 유닛은 대상에서 제외)
    // 자기편: 일반 사야(abilityImmune)만 면역. 스킨 사야는 자기편 효과는 받음.
    var allyTargets=mySide.filter(function(m){return m.alive&&m!==u&&!m.abilityImmune;});
    // 적: 일반/스킨 사야 모두 면역 (적이 가하는 효과)
    var enemyTargets=otherSide.filter(function(m){return m.alive&&m!==spared&&!m.abilityImmune&&!m._sayaImmune;});
    // 2. 아군 자신 제외 전체 처치 (먼저 — DR로 귀환할 학생들이 다시 죽지 않도록)
    for(var _sti=0;_sti<allyTargets.length;_sti++){
      allyTargets[_sti].hp=0;allyTargets[_sti].alive=false;allyTargets[_sti]._killedBy=u;
      log.push({cls:'kill',text:'[개전] '+u.name+': 아군 '+allyTargets[_sti].name+' 처치!'});
      triggerDeathrattle(allyTargets[_sti],mySide,otherSide,log);
    }
    // 3. 적 전체 (최고체력 1인 제외) 처치
    for(var _sti=0;_sti<enemyTargets.length;_sti++){
      enemyTargets[_sti].hp=0;enemyTargets[_sti].alive=false;enemyTargets[_sti]._killedBy=u;
      log.push({cls:'kill',text:'[개전] '+u.name+': '+enemyTargets[_sti].name+' 처치!'});
      triggerDeathrattle(enemyTargets[_sti],otherSide,mySide,log);
    }
    if(spared) log.push({cls:'soc',text:'[개전] '+u.name+': '+spared.name+'은(는) 살아남았다! (체력 '+spared.hp+')'});
  }
  else if(id==='red_winter_minori'){
    // 미노리 개전: 기본 능력 전체 해제 + 이후 기본 능력 영구 면역
    var basicKws=['taunt','shield','cleave','reborn','windfury','poison','pierce','ranged','selfdestruct','invincible','ambush'];
    var removed=[];
    for(var _bk=u.kw.length-1;_bk>=0;_bk--){
      if(basicKws.indexOf(u.kw[_bk])!==-1){removed.push(KW_LABELS[u.kw[_bk]]||u.kw[_bk]);u.kw.splice(_bk,1);}
    }
    u._noBC=true;
    if(removed.length>0) log.push({cls:'soc',text:'[개전] '+u.name+': '+removed.join(', ')+' 해제! 이후 기본 능력 면역.'});
    else log.push({cls:'soc',text:'[개전] '+u.name+': 모든 기본 능력이 해제됩니다! 이후 기본 능력 면역.'});
  }
}

// 리오 개전용: 전투 시 첫인사 효과 (임시 버프, 전투 후 원복)
// 린 패시브: BC가 추가로 발동
// 시즈코 BC 추가 발동 효과는 제거됨 (효과 변경: 적 버프 절반화 SOC로 교체)
function getShizukoExtra(side){
  return 0;
}
function triggerSOC_battlecry(u, mySide, log) {
  var id=u.baseId;
  var linRepeat=1+getLinExtra(mySide)+getShizukoExtra(mySide);
  for(var _lr=0;_lr<linRepeat;_lr++){
    if(id==='izuna'){
      var atkB=u.isSkin?2:1,hpB=u.isSkin?2:1;
      for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=atkB;mySide[i].hp+=hpB;}}
      log.push({cls:'soc',text:'  → '+u.name+': 아군 전체 +'+atkB+'/+'+hpB+(_lr>0?' (추가발동)':'')});
    }
    else if(id==='tsukuyo'){
      var atkB2=u.isSkin?2:1,hpB2=u.isSkin?4:2;
      for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=atkB2;mySide[i].hp+=hpB2;}}
      log.push({cls:'soc',text:'  → '+u.name+': 아군 전체 +'+atkB2+'/+'+hpB2+(_lr>0?' (추가발동)':'')});
    }
    else if(id==='tsubaki'){
      var buff=u.isSkin?4:2;
      for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i].school==='백귀야행'){mySide[i].atk+=buff;mySide[i].hp+=buff;}}
      log.push({cls:'soc',text:'  → '+u.name+': 백귀야행 +'+buff+'/+'+buff+(_lr>0?' (추가발동)':'')});
    }
    else if(id==='michiru'){
      // 아군 백귀야행(자신 제외) BC 연쇄 (미치루 재귀 방지)
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
  if(id==='izuna'){var atkB=u.isSkin?2:1,hpB=u.isSkin?2:1;for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=atkB;mySide[i].hp+=hpB;}}log.push({cls:'soc',text:'    → '+u.name+': 아군 전체 +'+atkB+'/+'+hpB+' (연쇄)'});}
  else if(id==='tsukuyo'){var atkB2=u.isSkin?2:1,hpB2=u.isSkin?4:2;for(var i=0;i<mySide.length;i++){if(mySide[i].alive){mySide[i].atk+=atkB2;mySide[i].hp+=hpB2;}}log.push({cls:'soc',text:'    → '+u.name+': 아군 전체 +'+atkB2+'/+'+hpB2+' (연쇄)'});}
  else if(id==='tsubaki'){var buff=u.isSkin?4:2;for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i].school==='백귀야행'){mySide[i].atk+=buff;mySide[i].hp+=buff;}}log.push({cls:'soc',text:'    → '+u.name+': 백귀야행 +'+buff+'/+'+buff+' (연쇄)'});}
}

// stripAbilities top-level 버전 (resolveStartOfCombat 등 runBattle 밖에서 호출하기 위함)
// runBattle 안에는 같은 이름의 inner function이 별도로 있음 (그건 inner scope에서 우선)
function stripAbilities(target,log2){
  if(!target||!target.kw) return;
  var removed=[];
  var keepKw=[];
  for(var i=0;i<target.kw.length;i++){
    if(target.kw[i]==='preemptive') keepKw.push(target.kw[i]);
    else removed.push((typeof KW_LABELS!=='undefined'&&KW_LABELS[target.kw[i]])||target.kw[i]);
  }
  target.kw=keepKw;
  target._abilitiesStripped=true;
  if(removed.length>0&&log2) log2.push({cls:'kill',text:'[선빵] '+target.name+'의 능력 삭제: '+removed.join(', ')});
}

function resolveStartOfCombat(a, b, log) {
  // 미노리 전투 시작 대사
  for(var _mn=0;_mn<a.length;_mn++){if(a[_mn].alive&&a[_mn].baseId==='red_winter_minori'){log.push({cls:'chat',text:'미노리: 아무거나 규탄한다! 이것저것 보장하라!!'});break;}}
  for(var _mn=0;_mn<b.length;_mn++){if(b[_mn].alive&&b[_mn].baseId==='red_winter_minori'){log.push({cls:'chat',text:'미노리: 아무거나 규탄한다! 이것저것 보장하라!!'});break;}}
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
    // 아츠코: 리오 다음, 사쿠라코 전 발동 (아군 SOC 무력화)
    for(var i=0;i<side.length;i++){
      if(side[i].alive&&side[i].baseId==='atsuko') triggerSOC(side[i],side,other,log);
    }
    // 사쿠라코: 트리니티 개전 추가 횟수 합산 (일반 +2, 황금 +3, 중첩 가능)
    // 단, 아츠코로 SOC 무력화된 사쿠라코는 카운트 X
    var trinityRepeat=1;
    for(var i=0;i<side.length;i++){
      if(side[i].alive&&side[i].baseId==='sakurako'&&!side[i]._socStripped){
        var extra=side[i].isSkin?3:2;
        trinityRepeat+=extra;
        log.push({cls:'soc',text:'[개전] '+side[i].name+': 트리니티 개전 +'+extra+'회!'});
      }
    }
    for(var i=0;i<side.length;i++){
      if(!side[i].alive||!SOC_IDS[side[i].baseId]||side[i].baseId==='sakurako'||side[i].baseId==='kaya'||side[i].baseId==='tsurugi'||side[i].baseId==='rio'||side[i].baseId==='hkyk_kuzunoha'||side[i].baseId==='shizuko'||side[i].baseId==='atsuko') continue;
      if(side[i]._socStripped) continue; // 아츠코로 무력화된 카드 제외
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
    // 시즈코는 모든 개전이 끝난 후 마지막에 발동 (다른 SOC가 다시 적 버프할 수 없도록)
    for(var i=0;i<side.length;i++){
      if(side[i].alive&&side[i].baseId==='shizuko') triggerSOC(side[i],side,other,log);
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
    if(!G.hiddenCardsEverOwned||!G.hiddenCardsEverOwned['hkyk_showdown']) return;
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
  // 아카네 C4 부여 뒤끝 (린 반복 포함)
  if(unit._akaneC4DR&&!unit._abilitiesStripped&&!G.permanentAbilityBan){
    var c4LinRepeat=1+getLinExtra(mySide);
    for(var _c4lr=0;_c4lr<c4LinRepeat;_c4lr++){
      var c4Count=unit._akaneC4Golden?2:1;
      for(var _c4=0;_c4<c4Count;_c4++){
        if(countAlive(mySide)<BATTLE_MAX){
          var c4tk=makeToken('c4');c4tk.alive=true;c4tk.poisonImmune=false;c4tk._mySide=mySide;
          applyEimiBonus(c4tk,mySide);
          mySide.push(c4tk);
          log.push({cls:'soc',text:'[뒤끝] '+unit.name+': C4 소환! ('+c4tk.atk+'/'+c4tk.hp+')'+(_c4lr>0?' (린 추가)':'')});
        } else {
          log.push({cls:'soc',text:'[뒤끝] '+unit.name+': C4 소환 실패 (필드 가득)'});
        }
      }
    }
  }
  // 나구사 패시브: 자신을 쓰러뜨린 상대를 쓰러뜨림
  if(id==='trinity_nagisa'&&unit._killedBy){
    var killer=unit._killedBy;
    if(killer.alive&&!killer.abilityImmune&&!killer._sayaImmune&&!killer._effectImmune){
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
    // 아군 무작위 1인에게 보호막 부여 (스킨도 1인 동일)
    var candidates=[];
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&!hasKw(mySide[i],'shield'))candidates.push(mySide[i]);}
    if(candidates.length>0){
      var pick=candidates[Math.floor(Math.random()*candidates.length)];
      addKw(pick,'shield');
      log.push({cls:'shield',text:'[뒤끝] '+unit.name+': '+pick.name+'에게 보호막 부여!'});
    }
  }
  else if(id==='kasumi'||id==='nagusa'){
    // 카스미/나구사를 죽인 상대를 쓰러뜨림 (부활 존중)
    // killUnit은 runBattle 스코프 안이라 여기서 접근 불가 → 인라인 처리
    if(unit._killedBy){
      var killer=unit._killedBy;
      var _immune=killer.abilityImmune||killer._sayaImmune||killer._effectImmune;
      if(killer.alive&&!_immune){
        log.push({cls:'kill',text:'[뒤끝] '+unit.name+': '+killer.name+'을(를) 쓰러뜨렸다!'});
        killer.hp=0;
        if(hasKw(killer,'reborn')){
          killer.kw.splice(killer.kw.indexOf('reborn'),1);
          killer.hp=(killer.isSkin&&killer.baseId==='reisa')?(killer._reisaFullHp||killer.maxHp||1):1;
          log.push({cls:'shield',text:killer.name+'이(가) 부활했다! (HP:'+killer.hp+')'});
          triggerDeathrattle(killer,otherSide,mySide,log);
        } else {
          killer.alive=false;
          killer._killedBy=unit;
          triggerDeathrattle(killer,otherSide,mySide,log);
        }
      } else if(killer.alive&&_immune){
        log.push({cls:'shield',text:killer.name+': 면역! (효과 사망 무효)'});
      }
    }
  }
  else if(id==='ako'){
    var buff=unit.isSkin?10:5;
    var akoBuffed=[];
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i].school==='게헨나'){mySide[i].atk+=buff;mySide[i].hp+=buff;akoBuffed.push(mySide[i].name+'('+mySide[i].atk+'/'+mySide[i].hp+')');}}
    // '이번 전투 동안' 지속 버프 등록 — 전투 중 새로 등장하는 게헨나 학생에게도 적용
    G.battleSchoolBuff['게헨나']=(G.battleSchoolBuff['게헨나']||0)+buff;
    log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 아군 게헨나 +'+buff+'/+'+buff});
    if(akoBuffed.length>0) log.push({cls:'soc',text:'  → '+akoBuffed.join(', ')});
  }
  else if(id==='kazusa'){
    if(countAlive(mySide)>=BATTLE_MAX) return;
    var atk=unit.isSkin?6:4,hp2=unit.isSkin?4:3;
    var cp={id:'cp_'+Math.random().toString(36).substr(2,4),baseId:'cathpalug',isToken:true,
      name:'카스팔루스',school:G.rioSchool||'트리니티',tier:6,atk:atk,hp:hp2,kw:[],img:'token/CathPalug.png',isSkin:false,alive:true,poisonImmune:false};
    mySide.push(cp);
    log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 카스팔루스 소환! ('+atk+'/'+hp2+')'});
  }
  else if(id==='hifumi'){
    if(countAlive(mySide)>=BATTLE_MAX) return;
    var pAtk=unit.isSkin?4:2,pHp=unit.isSkin?2:1;
    var pero={id:'pero_'+Math.random().toString(36).substr(2,4),baseId:'perorosama',isToken:true,
      name:'페로로님',school:G.rioSchool||'트리니티',tier:3,atk:pAtk,hp:pHp,kw:[],img:'token/perorosama.png',isSkin:false,alive:true,poisonImmune:false,
      peroKillToHifumi:true,srcGolden:unit.isSkin};
    mySide.push(pero);
    log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 페로로님 소환! ('+pAtk+'/'+pHp+')'});
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
    log.push({cls:'kill',text:'[뒤끝] '+unit.name+': 적 전체 -'+debuff+'/-'+debuff});
    if(azusaDebuffed.length>0) log.push({cls:'kill',text:'  → '+azusaDebuffed.join(', ')});
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
        log.push({cls:'soc',text:'[뒤끝] 토라마루: '+newIroha.name+' 소환! ('+newIroha.atk+'/'+newIroha.hp+')'});
        if(G.battleSchoolBuff&&G.battleSchoolBuff[newIroha.school]&&G.battleSchoolBuff[newIroha.school]>0) log.push({cls:'soc',text:'  → 전투 중 학교 버프 적용: +'+G.battleSchoolBuff[newIroha.school]+'/+'+G.battleSchoolBuff[newIroha.school]});
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
    log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 당고 '+count+'개 소환! (각 1/1)'});
  }
  else if(id==='satsuki'){
    // 뒤끝: 자신을 전투(공격 교환)로 쓰러뜨린 상대를 빼앗기 (1턴, 스킨: 2턴)
    // 능력/효과로 사망한 경우엔 발동하지 않음
    if(unit._killedByCombat&&unit._killedBy&&unit._killedBy.alive){
      var stolen=unit._killedBy;
      var stolenIdx=otherSide.indexOf(stolen);
      if(stolenIdx!==-1){
        var turns=unit.isSkin?2:1;
        otherSide.splice(stolenIdx,1);
        stolen._stolenTurns=turns;
        stolen._stolenFrom=otherSide;
        mySide.push(stolen);
        log.push({cls:'soc',text:'[뒤끝] '+unit.name+': '+stolen.name+'을(를) '+turns+'턴간 빼앗았다!'});
      }
    } else if(unit._killedBy&&!unit._killedByCombat){
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 전투가 아닌 능력에 쓰러져 빼앗기에 실패!'});
    }
  }
  else if(id==='yuzu'){
    // 이번 전투 쓰러진 아군 수 x2(스킨x4)의 아방가르드군 소환
    // (유즈 자신도 alive=false 상태라 자동으로 카운트에 포함됨)
    var deadCount=0;
    for(var i=0;i<mySide.length;i++)if(!mySide[i].alive)deadCount++;
    var mult=unit.isSkin?4:2;
    var agAtk=deadCount*mult,agHp=deadCount*mult;
    if(countAlive(mySide)<BATTLE_MAX){
      var ag={id:'ag_'+Math.random().toString(36).substr(2,4),baseId:'avant_garde',isToken:true,
        name:'아방가르드군',school:G.rioSchool||'밀레니엄',tier:3,atk:agAtk,hp:agHp,kw:[],img:'token/Avant_garde.png',isSkin:false,alive:true,poisonImmune:false};
      ag._mySide=mySide;
      var eimiPre=ag.atk;
      applyEimiBonus(ag,mySide);
      mySide.push(ag);
      G.millenniumTokenSummons=(G.millenniumTokenSummons||0)+1;
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': '+ag.name+' 소환! ('+ag.atk+'/'+ag.hp+')'});
      if(ag.atk>eimiPre) log.push({cls:'soc',text:'  → [패시브] 에이미: 밀레니엄 소환 보너스 +'+( ag.atk-eimiPre)+'/+'+(ag.hp-agHp)});
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
      if(G.battleSchoolBuff&&G.battleSchoolBuff[mk.school]&&G.battleSchoolBuff[mk.school]>0) log.push({cls:'soc',text:'  → 전투 중 학교 버프 적용: +'+G.battleSchoolBuff[mk.school]+'/+'+G.battleSchoolBuff[mk.school]});
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
    // 황금 비행선(지켜줌) + 황금 토라마루(지켜줌) 소환
    if(countAlive(mySide)<BATTLE_MAX){
      var gAirship=makeToken('airship');gAirship.atk=14;gAirship.hp=14;gAirship.isSkin=true;gAirship.isToken=false;addKw(gAirship,'taunt');gAirship.alive=true;gAirship._mySide=mySide;
      mySide.push(gAirship);
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 황금 비행선(14/14, 지켜줌) 소환!'});
    }
    if(countAlive(mySide)<BATTLE_MAX){
      var gTora=makeToken('toramaru');gTora.atk=10;gTora.hp=2;gTora.isSkin=true;gTora.isToken=false;addKw(gTora,'taunt');gTora.alive=true;gTora._mySide=mySide;
      mySide.push(gTora);
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 황금 토라마루(10/2, 지켜줌) 소환!'});
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
  else if(id==='trinity_justice'){
    // 정의실현부 뒤끝: 보호막+연사를 가진 츠루기를 이번 전투 최대 공/체로 소환
    if(countAlive(mySide)<BATTLE_MAX){
      var _tjAtk=Math.max(unit._peakAtk||0, unit.atk);
      var _tjHp=Math.max(unit._peakHp||0, unit.maxHp||unit.hp);
      var _tsurugiTmpl=null;
      for(var _ti=0;_ti<CHARS.length;_ti++)if(CHARS[_ti].id==='tsurugi'){_tsurugiTmpl=CHARS[_ti];break;}
      var _tsu={
        id:'tsurugi_'+Math.random().toString(36).substr(2,5),
        baseId:'tsurugi',
        name:_tsurugiTmpl?_tsurugiTmpl.name:'츠루기',
        school:'트리니티',
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
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 츠루기 소환! ('+_tjAtk+'/'+_tjHp+', 보호막+연사)'});
    }
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
    // C&C 뒤끝: TNT 4개 + 아비 에슈흐 프로토 1개 소환
    for(var _cci=0;_cci<4;_cci++){
      if(countAlive(mySide)>=BATTLE_MAX)break;
      var _tnt=makeToken('tnt');_tnt.alive=true;_tnt.poisonImmune=false;_tnt._mySide=mySide;
      applyEimiBonus(_tnt,mySide);
      mySide.push(_tnt);
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': TNT 소환! ('+_tnt.atk+'/'+_tnt.hp+')'});
    }
    if(countAlive(mySide)<BATTLE_MAX){
      var _aep=makeToken('abi_eshuh_proto');_aep.alive=true;_aep.poisonImmune=false;_aep._mySide=mySide;
      applyEimiBonus(_aep,mySide);
      mySide.push(_aep);
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 아비 에슈흐 프로토 소환! ('+_aep.atk+'/'+_aep.hp+')'});
    }
  }
  else if(id==='chise'){
    // 치세 뒤끝: 아군 백귀야행 무작위 2명의 첫인사 발동 (황금: 전원)
    var hkykBC=[];
    for(var i=0;i<mySide.length;i++){
      if(mySide[i].alive&&mySide[i].school==='백귀야행'&&mySide[i]!==unit&&BC_IDS[mySide[i].baseId])
        hkykBC.push(mySide[i]);
    }
    if(hkykBC.length>0){
      if(unit.isSkin){
        for(var i=0;i<hkykBC.length;i++){
          triggerSOC_battlecry_inner(hkykBC[i],mySide,log);
        }
        log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 백귀야행 전원 첫인사 발동!'});
      } else {
        // 셔플 후 최대 2명 선택
        for(var _ci=hkykBC.length-1;_ci>0;_ci--){
          var _cj=Math.floor(Math.random()*(_ci+1));
          var _ct=hkykBC[_ci];hkykBC[_ci]=hkykBC[_cj];hkykBC[_cj]=_ct;
        }
        var picks=hkykBC.slice(0,Math.min(2,hkykBC.length));
        for(var i=0;i<picks.length;i++){
          triggerSOC_battlecry_inner(picks[i],mySide,log);
          log.push({cls:'soc',text:'[뒤끝] '+unit.name+': '+picks[i].name+'의 첫인사 발동!'});
        }
      }
    }
  }
  // ===== 산해경 뒤끝 =====
  else if(id==='mina'){
    // 미나 뒤끝: 아군 전체 +3/+3 (스킨: +6/+6)
    var minaBuff=unit.isSkin?6:3;
    for(var _mi=0;_mi<mySide.length;_mi++){
      if(mySide[_mi].alive&&!mySide[_mi].abilityImmune){mySide[_mi].atk+=minaBuff;mySide[_mi].hp+=minaBuff;}
    }
    log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 아군 전체 +'+minaBuff+'/+'+minaBuff+'!'});
  }
  else if(id==='shanhai_kiki'){
    // 키키 뒤끝: 현룡문의 검은 군주 소환
    if(countAlive(mySide)<BATTLE_MAX){
      var bl=makeToken('black_lord');
      bl.alive=true;bl.isToken=true;bl._mySide=mySide;
      // 패시브 면역
      bl.abilityImmune=true;bl._effectImmune=true;
      mySide.push(bl);
      // audio 플래그를 로그 엔트리에 심어 애니메이션 재생 시점(nextStep)에서 발동
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 현룡문의 검은 군주 소환! ('+bl.atk+'/'+bl.hp+')',audio:'black_lord'});
    }
  }
  // ===== 아비도스 뒤끝 =====
  else if(id==='ayane'){
    // 아야네 뒤끝: 다음 턴 청휘석 +1
    var _ayaneBonus=unit.isSkin?2:1;
    G._ayaneDeathsThisBattle=(G._ayaneDeathsThisBattle||0)+_ayaneBonus;
    log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 다음 턴 청휘석 +'+_ayaneBonus+'!'});
  }
  else if(id==='hoshino'){
    // 호시노 뒤끝: 자신의 공격력과 체력을 무작위 아군 1인에게 부여
    var hoshinoCands=[];
    var _hoshinoHp=unit._peakHp||unit.maxHp||Math.max(1,unit.hp);
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i]!==unit)hoshinoCands.push(mySide[i]);}
    var hoshinoCount=unit.isSkin?2:1;
    for(var _hi=0;_hi<hoshinoCount&&hoshinoCands.length>0;_hi++){
      var _hpIdx=Math.floor(Math.random()*hoshinoCands.length);
      var hoshinoPick=hoshinoCands.splice(_hpIdx,1)[0];
      hoshinoPick.atk+=unit.atk;hoshinoPick.hp+=_hoshinoHp;
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': '+hoshinoPick.name+'에게 +'+unit.atk+'/+'+_hoshinoHp+' 부여!'});
    }
  }
  else if(id==='Shiroko_Terror'){
    // 시로코 테러 뒤끝: 흡수한 학생들을 흡수 당시 상태로 귀환
    var stAbsorbed=unit._shirokoAbsorbed||(G._shirokoTerrorAbsorbed||[]);
    if(stAbsorbed.length>0){
      for(var _si=0;_si<stAbsorbed.length;_si++){
        if(countAlive(mySide)>=BATTLE_MAX) break;
        var ab=stAbsorbed[_si];
        var revUnit={
          id:ab.id,baseId:ab.baseId,name:ab.name,school:ab.school||'아비도스',
          tier:ab.tier,atk:ab.atk,hp:ab.hp,maxHp:ab.hp,kw:(ab.kw||[]).slice(),
          img:ab.img,isSkin:ab.isSkin||false,isToken:false,
          alive:true,poisonImmune:false,_mySide:mySide,_shirokoTerrorSpawned:true
        };
        mySide.push(revUnit);
        log.push({cls:'soc',text:'[뒤끝] '+unit.name+': '+revUnit.name+' 귀환! ('+revUnit.atk+'/'+revUnit.hp+')'});
      }
    }
    unit._shirokoTerrorDRFired=true;
  }
  else if(id==='arius_squad'){
    // 아리우스 스쿼드 뒤끝: 흡수한 사오리/미사키/아츠코/히요리를 흡수 당시 상태로 귀환
    var arAbsorbed=unit._ariusAbsorbed||(G._ariusAbsorbed||[]);
    if(arAbsorbed.length>0){
      for(var _ari=0;_ari<arAbsorbed.length;_ari++){
        if(countAlive(mySide)>=BATTLE_MAX) break;
        var arAb=arAbsorbed[_ari];
        var arRev={
          id:arAb.id,baseId:arAb.baseId,name:arAb.name,school:arAb.school||'아리우스 분교',
          tier:arAb.tier,atk:arAb.atk,hp:arAb.hp,maxHp:arAb.hp,kw:(arAb.kw||[]).slice(),
          img:arAb.img,isSkin:arAb.isSkin||false,isToken:false,
          alive:true,poisonImmune:false,_mySide:mySide,_ariusSpawned:true,
          // 부활한 아리우스는 SOC 재발동을 막는다 (스쿼드가 흡수한 본체이므로)
          _abilitiesStripped:true
        };
        mySide.push(arRev);
        log.push({cls:'soc',text:'[뒤끝] '+unit.name+': '+arRev.name+' 귀환! ('+arRev.atk+'/'+arRev.hp+')'});
      }
    }
  }
  else if(id==='gehenna_p68'){
    // 흥신소 68 뒤끝: 흡수한 아루·카요코·무츠키·하루카를 흡수 당시 상태로 귀환
    // 시로코 테러와 동일하게 전역 폴백(G._p68Absorbed) 사용 — copyUnit 누락/save-load 경유 상황 대응
    var p68Abs=unit._p68Absorbed||(G._p68Absorbed||[]);
    for(var _pi=0;_pi<p68Abs.length;_pi++){
      if(countAlive(mySide)>=BATTLE_MAX)break;
      var pab=p68Abs[_pi];
      var pRev={
        id:pab.id,baseId:pab.baseId,name:pab.name,school:pab.school||'게헨나',
        tier:pab.tier,atk:pab.atk,hp:pab.hp,maxHp:pab.hp,kw:(pab.kw||[]).slice(),
        img:pab.img,isSkin:pab.isSkin||false,isToken:false,
        alive:true,poisonImmune:false,_mySide:mySide,_p68Spawned:true
      };
      mySide.push(pRev);
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': '+pRev.name+' 귀환! ('+pRev.atk+'/'+pRev.hp+')'});
    }
  }
  else if(id==='red_winter_minori'){
    // 미노리 뒤끝: 성난 군중 1번 소환
    log.push({cls:'chat',text:'미노리: 붉은겨울에서 이 정도 탄압은 인삿말도 안 된다!!!!'});
    if(countAlive(mySide)<BATTLE_MAX){
      var cw=makeToken('citizen_wave');
      cw.alive=true;cw.poisonImmune=false;cw._mySide=mySide;cw._citizenCount=1;
      cw.name='성난 군중 1';
      mySide.push(cw);
      log.push({cls:'soc',text:'[뒤끝] '+unit.name+': <성난 군중 1> 소환! ('+cw.atk+'/'+cw.hp+')'});
    }
  }
  else if(id==='citizen_wave'){
    // 성난 군중 연쇄: 다음 번호 소환 (최대 13)
    var nextCount=(unit._citizenCount||1)+1;
    if(nextCount<=13&&countAlive(mySide)<BATTLE_MAX){
      var ncw=makeToken('citizen_wave');
      ncw.alive=true;ncw.poisonImmune=false;ncw._mySide=mySide;ncw._citizenCount=nextCount;
      ncw.name='성난 군중 '+nextCount;
      mySide.push(ncw);
      log.push({cls:'soc',text:'[뒤끝] 성난 군중 '+(nextCount-1)+': <성난 군중 '+nextCount+'> 소환! ('+ncw.atk+'/'+ncw.hp+')'});
    }
  }
  // ===== 발키리/SRT 뒤끝 =====
  else if(id==='moe'){
    // 자신을 공격한 대상에게 자신의 atk만큼 피해 (보호막에 막힘, 스킨이면 pierce)
    if(!unit._killedBy) return;
    var killer=unit._killedBy;
    if(!killer.alive) return;
    if(killer.abilityImmune||killer._sayaImmune||killer._effectImmune){
      log.push({cls:'shield',text:'  → 적 '+killer.name+': 면역!'});
      return;
    }
    var dmg=unit.atk;
    var pierce=unit.isSkin;
    var hasSh=hasKw(killer,'shield');
    if(hasSh&&!pierce){
      // 보호막 1개 소비, 데미지 무효
      var si=killer.kw.indexOf('shield');if(si!==-1) killer.kw.splice(si,1);
      log.push({cls:'shield',text:'[뒤끝] '+unit.name+' → '+killer.name+': 보호막에 막힘! (보호막 소모)'});
    } else {
      killer.hp-=dmg;
      log.push({cls:'kill',text:'[뒤끝] '+unit.name+' → '+killer.name+': '+dmg+' 피해'+(pierce?' (관통)':'')+' (HP:'+Math.max(0,killer.hp)+')'});
      if(killer.hp<=0){
        if(hasKw(killer,'reborn')){
          killer.kw.splice(killer.kw.indexOf('reborn'),1);
          killer.hp=(killer.isSkin&&killer.baseId==='reisa')?(killer._reisaFullHp||killer.maxHp||1):1;
          log.push({cls:'shield',text:killer.name+'이(가) 부활했다! (HP:'+killer.hp+')'});
        } else {
          killer.hp=0;killer.alive=false;killer._killedBy=unit;
          triggerDeathrattle(killer,otherSide,mySide,log);
        }
      }
    }
  }
  else if(id==='konoka'){
    // 이번 전투 동안 발키리/SRT 전체 +N/+N (스킨 +8/+8)
    var kBuff=unit.isSkin?8:4;
    var kBuffed=[];
    for(var i=0;i<mySide.length;i++){if(mySide[i].alive&&mySide[i].school==='발키리/SRT'){mySide[i].atk+=kBuff;mySide[i].hp+=kBuff;kBuffed.push(mySide[i].name+'('+mySide[i].atk+'/'+mySide[i].hp+')');}}
    G.battleSchoolBuff['발키리/SRT']=(G.battleSchoolBuff['발키리/SRT']||0)+kBuff;
    log.push({cls:'soc',text:'[뒤끝] '+unit.name+': 아군 발키리/SRT +'+kBuff+'/+'+kBuff});
    if(kBuffed.length>0) log.push({cls:'soc',text:'  → '+kBuffed.join(', ')});
  }
}

// 말쿠트 헬퍼 (전역)
function hasMalkuthOnSide(side){
  for(var i=0;i<side.length;i++)if(side[i].alive&&side[i].baseId==='millennium_malkuth')return true;
  return false;
}
function makeSweeper(side){
  var sw=makeToken('sweeper');
  sw.school='밀레니엄'; // rioSchool 오버라이드 방지: 항상 밀레니엄
  sw.alive=true;sw.poisonImmune=false;sw.isToken=true;sw.baseId='sweeper';
  // 우타하 패시브: 밀레니엄 토큰 소환 시 스케쥴 레벨 보너스
  if(side) applyEimiBonus(sw,side);
  // 전투 중 학교 버프 적용
  if(G.battleSchoolBuff&&G.battleSchoolBuff['밀레니엄']){
    var sbuff=G.battleSchoolBuff['밀레니엄'];
    sw.atk+=sbuff;sw.hp+=sbuff;
  }
  return sw;
}

function runBattle(boardA, boardB, startWithA, opts) {
  var _G=(opts&&opts.simCtx)||G;
  // 전투 중 획득 키워드가 보드에 잔존하지 않도록 _baseKw 스냅샷 (시뮬 제외)
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
      noAttack:(m.baseId==='gehenna_traingun'||m.baseId==='trinity_seia'||m.baseId==='Kei_usb'||m.baseId==='red_winter_minori'),
      abilityImmune:(m.baseId==='trinity_mika'),
      _battlesSurvived:m._battlesSurvived||0,
      _keiseisenCounter:m._keiseisenCounter||0,
      _hovercraftCounter:m._hovercraftCounter||0,
      // 뒤끝 흡수 복원용 스냅샷 (흥신소68, 시로코 테러, 아리우스 스쿼드 등)
      _p68Absorbed:(m._p68Absorbed||null),
      _shirokoAbsorbed:(m._shirokoAbsorbed||null),
      _ariusAbsorbed:(m._ariusAbsorbed||null),
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
  // 전투 중 최대 체력/공격력 추적 (호시노 뒤끝, 정의실현부 뒤끝 등에 사용)
  for(var _pi=0;_pi<a.length;_pi++){a[_pi]._peakHp=a[_pi].hp;a[_pi]._peakAtk=a[_pi].atk;}
  for(var _pi=0;_pi<b.length;_pi++){b[_pi]._peakHp=b[_pi].hp;b[_pi]._peakAtk=b[_pi].atk;}
  var turnA=(startWithA!==undefined?startWithA:true);
  var idxA=0,idxB=0;
  var maxRounds=200;

  function snapshot(){
    function snapUnit(u){var bid=u.baseId||'';return{id:u.id,name:u.name,baseId:bid,atk:u.atk,hp:u.hp,maxHp:u.maxHp||u.hp,_peakHp:u._peakHp||u.hp,kw:u.kw.slice(),img:u.img,isSkin:u.isSkin,tier:u.tier,school:u.school||'',alive:u.alive,stripped:!!u._abilitiesStripped,coinOff:u.coinOff||false,_akaneC4DR:u._akaneC4DR||false,_akaneC4Golden:u._akaneC4Golden||false,irohaRef:u.irohaRef||null,_copiedAbilities:u._copiedAbilities||null,_keiseisenCounter:(_G.keiseisenCounters&&_G.keiseisenCounters[bid])||0,_hovercraftCounter:u._hovercraftCounter||0,isHidden:u.isHidden||false,noAttack:u.noAttack||false,abilityImmune:u.abilityImmune||false,_battlesSurvived:u._battlesSurvived||0,_hasAttacked:u._hasAttacked||false,_coinResult:u._coinResult};}
    return{a:a.map(snapUnit),b:b.map(snapUnit)};
  }
  function getAlive(side){return side.filter(function(m){return m.alive;});}
  function findTarget(defenders){
    var alive=getAlive(defenders);if(alive.length===0)return null;
    // 기습 필터: 아직 공격하지 않은 기습 유닛은 타겟 제외
    var visible=alive.filter(function(m){return !hasKw(m,'ambush')||m._hasAttacked;});
    var taunts=(visible.length>0?visible:alive).filter(function(m){return hasKw(m,'taunt');});
    if(taunts.length>0)return taunts[Math.floor(Math.random()*taunts.length)];
    if(visible.length>0)return visible[Math.floor(Math.random()*visible.length)];
    return alive[Math.floor(Math.random()*alive.length)];
  }

  function killUnit(unit,myArr,oppArr,log2,killedBy,isCombat){
    // 미카: 능력/효과에 의한 사망 면역 (killedBy가 없거나 능력 사망인 경우)
    if(unit.abilityImmune&&killedBy&&killedBy._isAbilityKill){
      log2.push({cls:'shield',text:unit.name+': 면역!'});
      unit.hp=1;return;
    }
    if(hasKw(unit,'reborn')){
      unit.kw.splice(unit.kw.indexOf('reborn'),1);
      // 레이사 마법소녀: 최대 체력으로 부활
      if(unit.isSkin&&unit.baseId==='reisa'){
        unit.hp=unit._reisaFullHp||unit.maxHp||1;
      } else {unit.hp=1;}
      // 부활 시 보호막 등 기본 키워드 유지 (reborn만 제거)
      log2.push({cls:'shield',text:unit.name+'이(가) 부활했다! (HP:'+unit.hp+')'});
      // 미야코 패시브: 부활 발동 즉시 — 다른 발키리/SRT가 살아있으면 reborn 재부여 + 스킨 +3 atk
      if(unit.baseId==='miyako'&&!unit._abilitiesStripped&&!_G.permanentAbilityBan){
        var hasOtherVk=false;
        for(var _vi=0;_vi<myArr.length;_vi++){
          if(myArr[_vi].alive&&myArr[_vi]!==unit&&myArr[_vi].school==='발키리/SRT'){hasOtherVk=true;break;}
        }
        if(hasOtherVk){
          if(unit.kw.indexOf('reborn')===-1) unit.kw.push('reborn');
          if(unit.isSkin){unit.atk+=3;log2.push({cls:'soc',text:'[패시브] '+unit.name+': 부활 유지 + 공격력 +3 ('+unit.atk+'/'+unit.hp+')'});}
          else log2.push({cls:'soc',text:'[패시브] '+unit.name+': 부활 유지 (다른 발키리/SRT 생존)'});
        }
      }
      // 미야코 외 다른 카드들도 동일 패턴 (현재는 미야코만)
      // 부활 시에도 뒤끝 발동 (모든 DR 보유 유닛)
      triggerDeathrattle(unit,myArr,oppArr,log2);
    } else {
      unit.alive=false;
      if(killedBy) unit._killedBy=killedBy;
      // 전투(공격 교환)로 사망 시에만 표시 — 사츠키 뒤끝 등 일부 능력에서 사용
      if(isCombat) unit._killedByCombat=true;
      // 하스미 패시브: 첫 처치 공/체 흡수
      var hasumiMax=killedBy&&killedBy.isSkin?2:1;
      if(killedBy&&killedBy.baseId==='hasumi'&&killedBy.hp>0&&!killedBy._poisonKilled&&(killedBy._hasumiAbsorbed||0)<hasumiMax){
        killedBy._hasumiAbsorbed=(killedBy._hasumiAbsorbed||0)+1;
        var absHp=unit._hpBeforeKill!==undefined?unit._hpBeforeKill:Math.max(0,unit.hp);
        killedBy.atk+=unit.atk;killedBy.hp+=absHp;killedBy.maxHp=killedBy.hp;
        log2.push({cls:'soc',text:'[패시브] '+killedBy.name+': '+unit.name+' 흡수! +'+unit.atk+'/+'+absHp});
      }
      // 정의실현부 패시브: 쓰러뜨린 적의 공/최대체력 흡수 (매 킬마다)
      if(killedBy&&killedBy.baseId==='trinity_justice'&&killedBy.hp>0&&!killedBy._poisonKilled){
        var absHp2=unit._peakHp||unit.maxHp||Math.max(1,unit.hp);
        killedBy.atk+=unit.atk;killedBy.hp+=absHp2;killedBy.maxHp=killedBy.hp;
        log2.push({cls:'soc',text:'[패시브] '+killedBy.name+': '+unit.name+' 흡수! +'+unit.atk+'/+'+absHp2});
      }
      // 아리스 사망 추적
      if(unit.baseId==='arisu') _G.arisuDeathCount=(_G.arisuDeathCount||0)+1;
      // 시로코 킬 추적 (패시브: 다음 턴 청휘석)
      if(killedBy&&killedBy.baseId==='shiroko'&&killedBy._mySide===a){
        var _shirokoGain=killedBy.isSkin?2:1;
        _G._shirokoKillsThisBattle=(_G._shirokoKillsThisBattle||0)+_shirokoGain;
        log2.push({cls:'soc',text:'[패시브] '+killedBy.name+': 청휘석을 '+_shirokoGain+' 얻었다!'});
      }
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
    // 미유 패시브: 공격 시 atk 대신 hp로 데미지 계산 (능력 데미지/오버라이드 제외)
    if(dmgOverride===undefined&&src.baseId==='miyu'&&!src._abilitiesStripped&&!_G.permanentAbilityBan){
      dmg=Math.max(0,src.hp);
    }
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
    // 케이(USB) 패시브: 케이 보호막이 없을 때, 전투 데미지를 아리스에게 전가
    if(dst.baseId==='Kei_usb'&&!hasKw(dst,'shield')&&dst.alive&&!dst._abilitiesStripped&&!_G.permanentAbilityBan&&dst._mySide){
      for(var _ka=0;_ka<dst._mySide.length;_ka++){
        if(dst._mySide[_ka].alive&&dst._mySide[_ka].baseId==='arisu'){
          var _arisuProxy=dst._mySide[_ka];
          // 아리스 보호막 체크
          if(hasKw(_arisuProxy,'shield')){
            _arisuProxy.kw.splice(_arisuProxy.kw.indexOf('shield'),1);
            log2.push({cls:'soc',text:'[패시브] '+dst.name+': '+_arisuProxy.name+'이(가) 대신 받습니다!'});
            log2.push({cls:'shield',text:_arisuProxy.name+'의 보호막이 깨졌다!'});
            return {blocked:true,overflow:0,_keiRedirect:true};
          }
          log2.push({cls:'soc',text:'[패시브] '+dst.name+': '+_arisuProxy.name+'이(가) 대신 피해를 받습니다!'});
          var _arisuHpBefore=_arisuProxy.hp;
          _arisuProxy.hp-=dmg;
          log2.push({cls:'hit',text:src.name+'가 '+_arisuProxy.name+'에게 '+dmg+' 피해! (HP:'+Math.max(0,_arisuProxy.hp)+')'});
          // 아리스 사망 처리
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
    // 미모리 패시브: 자신을 공격한 적의 atk을 한 바퀴 동안 0으로 (황금: 이번 전투 동안)
    if(dst.baseId==='mimori'&&dst.alive&&!dst._abilitiesStripped&&!_G.permanentAbilityBan&&src!==dst){
      var mimTurns=dst.isSkin?99:1;
      if(!src._mimoriDebuff||src._mimoriDebuff<=0){
        src._mimoriOrigAtk=src.atk;src._mimoriDebuff=mimTurns;src.atk=0;
        // 이번 공격 끝에서 즉시 감소되지 않도록 플래그 설정
        src._mimoriJustSet=true;
        log2.push({cls:'soc',text:'[패시브] '+dst.name+': '+src.name+' 공격력 0! ('+(mimTurns>=99?'전투 동안':mimTurns+'회')+')'});
      }
    }
    if(hasKw(dst,'shield')){
      dst.kw.splice(dst.kw.indexOf('shield'),1);
      log2.push({cls:'shield',text:dst.name+'의 보호막이 깨졌다!'});
      return {blocked:true,overflow:0};
    } else {
      var hpBefore=dst.hp;
      dst.hp-=dmg;
      // 흡수 효과용: 치명타 직전 HP 보존 (음수 hp로 흡수 시 공격자 사망 버그 방지)
      if(dst.hp<=0&&dst._hpBeforeKill===undefined) dst._hpBeforeKill=Math.max(0,hpBefore);
      log2.push({cls:'hit',text:src.name+'가 '+dst.name+'에게 '+dmg+' 피해! (HP:'+Math.max(0,dst.hp)+')'});
      // 하루카 패시브: 아루/무츠키/카요코가 피해받으면 반격 대기
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
        log2.push({cls:'kill',text:src.name+'의 독사굴! '+dst.name+' 즉사!'});
      }
      var overflow=dmg-hpBefore;
      return {blocked:false,overflow:overflow>0?overflow:0};
    }
  }

  function resolveDeath(unit,myArr,oppArr,log2,killedBy,isCombat){
    if(unit.hp<=0&&unit.alive)killUnit(unit,myArr,oppArr,log2,killedBy,isCombat);
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
    // === 니코 패시브: 첫 호출일 때만, 추가 발동 횟수를 결정 ===
    var nikoExtra=0;
    if(!unit._nikoBoosting){
      var hasNiko=false,hasSkinNiko=false;
      for(var _ni=0;_ni<side.length;_ni++){
        if(side[_ni].alive&&side[_ni].baseId==='niko'&&!side[_ni]._abilitiesStripped){
          hasNiko=true;if(side[_ni].isSkin)hasSkinNiko=true;
        }
      }
      if(hasSkinNiko) nikoExtra=2;
      else if(hasNiko) nikoExtra=1;
    }
    if(unit.baseId==='toki'){
      var ae;
      var tierLvl=(_G.players&&_G.players[0]?_G.players[0].tier:1)||1;
      ae=makeToken('abi_eshuh');var mult=unit.isSkin?2:1;ae.atk=tierLvl*mult;ae.hp=tierLvl*mult;ae.maxHp=ae.hp;
      ae.alive=true;ae.poisonImmune=false;ae._mySide=side;
      var eimiPreToki=ae.atk;
      applyEimiBonus(ae,side);
      side.push(ae);
      _G.millenniumTokenSummons=(_G.millenniumTokenSummons||0)+1;
      log2.push({cls:'soc',text:'[버티기] '+unit.name+': '+ae.name+' 소환! ('+ae.atk+'/'+ae.hp+')'});
      if(ae.atk>eimiPreToki) log2.push({cls:'soc',text:'  → [패시브] 에이미: 밀레니엄 소환 보너스 +'+(ae.atk-eimiPreToki)+'/+'+(ae.atk-eimiPreToki)});
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
        log2.push({cls:'soc',text:'[버티기] '+unit.name+': '+(KW_LABELS[pick]||pick)+' 획득!'});
        surviveEffects.push({type:'keyword',baseId:'neru',kw:pick});
      }
    }
    else if(unit.baseId==='reisa'){
      // 레이사 버티기: 카즈사 소환 (전투 중 1회)
      if(!_G._reisaSummonedKazusa&&countAlive(side)<BATTLE_MAX){
        var kazTmpl=findAnyChar('kazusa');
        if(kazTmpl){
          _G._reisaSummonedKazusa=true;
          var kaz={id:'kaz_'+Math.random().toString(36).substr(2,4),baseId:'kazusa',isToken:true,
            name:kazTmpl.name,school:kazTmpl.school,tier:kazTmpl.tier,
            atk:unit.isSkin?(kazTmpl.atk*2+1):kazTmpl.atk,hp:unit.isSkin?(kazTmpl.hp*2+1):kazTmpl.hp,
            kw:kazTmpl.kw.slice(),img:unit.isSkin?kazTmpl.imgGold:kazTmpl.img,isSkin:unit.isSkin,alive:true,poisonImmune:false,_mySide:side};
          side.push(kaz);
          log2.push({cls:'soc',text:'[버티기] '+unit.name+': '+kaz.name+' 소환! ('+kaz.atk+'/'+kaz.hp+')'});
        }
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
    // ===== 발키리/SRT 버티기 =====
    else if(unit.baseId==='kirino'&&unit.isSkin){
      // 스킨 키리노: 본인 +2/+2
      unit.atk+=2;unit.hp+=2;
      if(unit.maxHp) unit.maxHp+=2;
      log2.push({cls:'soc',text:'[버티기] '+unit.name+': 자체 +2/+2 ('+unit.atk+'/'+unit.hp+')'});
      surviveEffects.push({type:'self',baseId:'kirino'});
    }
    else if(unit.baseId==='kurumi'){
      // 쿠루미: 아군 전체 +1/+2 (스킨 +2/+4)
      var kuA=unit.isSkin?2:1, kuH=unit.isSkin?4:2;
      var kuBuffed=[];
      for(var _ki=0;_ki<side.length;_ki++){
        if(side[_ki].alive){
          side[_ki].atk+=kuA;side[_ki].hp+=kuH;
          if(side[_ki].maxHp) side[_ki].maxHp+=kuH;
          kuBuffed.push(side[_ki].name);
        }
      }
      log2.push({cls:'soc',text:'[버티기] '+unit.name+': 아군 전체 +'+kuA+'/+'+kuH});
      if(kuBuffed.length>0) log2.push({cls:'soc',text:'  → '+kuBuffed.join(', ')});
      surviveEffects.push({type:'buff',baseId:'kurumi'});
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
    // === 니코 추가 발동 (1회 이상 효과 처리 후) ===
    if(nikoExtra>0){
      unit._nikoBoosting=true;
      for(var _nb=0;_nb<nikoExtra;_nb++){
        log2.push({cls:'soc',text:'[패시브] 니코: '+unit.name+' 버티기 추가 발동!'});
        checkSurvive(unit,side,log2,hitBy);
      }
      unit._nikoBoosting=false;
    }
  }

  function stripAbilities(target,log2){
    // 키워드 전부 제거 (선빵 제외)
    var removed=[];
    var keepKw=[];
    for(var i=0;i<target.kw.length;i++){
      if(target.kw[i]==='preemptive') keepKw.push(target.kw[i]);
      else removed.push(KW_LABELS[target.kw[i]]||target.kw[i]);
    }
    target.kw=keepKw;
    // 뒤끝·개전 등 능력 등록 무효화
    target._abilitiesStripped=true;
    if(removed.length>0) log2.push({cls:'kill',text:'[선빵] '+target.name+'의 능력 삭제: '+removed.join(', ')});
  }

  function triggerPreemptive(attacker,target,defArr,atkArr,log2){
    var hasCopiedPre=attacker._copiedAbilities&&attacker._copiedAbilities.some(function(c){return c.type==='pre';});
    if(!hasKw(attacker,'preemptive')&&!PRE_IDS[attacker.baseId]&&!hasCopiedPre) return false;
    if(_G.permanentAbilityBan) return false;
    // ===== 선빵 능력 (PRE_IDS) =====
    if(attacker.baseId==='aru'){
      var tTier=target.tier||0;
      var origAtk=attacker.atk;var newAtk=origAtk;
      if(tTier>=5) newAtk=origAtk*2;
      else if(tTier>=1&&tTier<=2) newAtk=Math.max(1,Math.floor(origAtk/2));
      if(newAtk!==origAtk){
        attacker._aruOrigAtk=origAtk;attacker.atk=newAtk;
        log2.push({cls:'soc',text:'[선빵] '+attacker.name+': T'+tTier+' 대상 → 공격력 '+origAtk+'→'+newAtk});
      }
      return false;
    }
    if(attacker.baseId==='koyuki'){
      if(!target._koyukiSwapped){
        var oldAtk=target.atk,oldHp=target.hp;
        target.atk=oldHp;target.hp=oldAtk;target._koyukiSwapped=true;
        log2.push({cls:'soc',text:'[선빵] '+attacker.name+': '+target.name+' 공/체 교환! ('+oldAtk+'/'+oldHp+'→'+target.atk+'/'+target.hp+')'});
      }
      // 파자마 코유키: 추가로 상대 무작위 능력 하나 삭제
      if(attacker.isSkin&&target.kw&&target.kw.length>0){
        var rmIdx=Math.floor(Math.random()*target.kw.length);
        var rmKw=target.kw.splice(rmIdx,1)[0];
        log2.push({cls:'kill',text:'[선빵] '+attacker.name+': '+target.name+'의 '+(KW_LABELS[rmKw]||rmKw)+' 제거!'});
      }
      return false;
    }
    if(attacker.baseId==='koharu'){
      var chance=attacker.isSkin?0.1:0.05;
      if(Math.random()<chance){
        stripAbilities(target,log2);
        target.alive=false;target._killedBy=attacker;
        log2.push({cls:'kill',text:'[선빵] '+attacker.name+': '+target.name+' 사형 집행! 즉사!'});
        resolveDeath(target,defArr,atkArr,log2,attacker);
        return true;
      }
      return false;
    }
    if(attacker.baseId==='trinity_mika'){
      // 미카 선빵: 상대가 게헨나 출신이면 공격력 2배
      if(target.school==='게헨나'||(target.isToken&&target.school==='게헨나')){
        var origAtk=attacker.atk;
        attacker._mikaOrigAtk=origAtk;
        attacker.atk=origAtk*2;
        log2.push({cls:'soc',text:'[선빵] '+attacker.name+': 게헨나 상대 → 공격력 2배! ('+origAtk+'→'+attacker.atk+')'});
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
    // 계승전 카운터: 유카리, 렌게, 키쿄 (아군만 카운트)
    else if(attacker.baseId==='yukari'||attacker.baseId==='renge'||attacker.baseId==='kikyou'){
      if(attacker._mySide===a){
        var kAdd=attacker.isSkin?2:1;
        if(!_G.keiseisenCounters) _G.keiseisenCounters={};
        _G.keiseisenCounters[attacker.baseId]=Math.min(7,(_G.keiseisenCounters[attacker.baseId]||0)+kAdd);
        log2.push({cls:'soc',text:'[선빵] '+attacker.name+': 계승전 +'+kAdd+' (현재: '+_G.keiseisenCounters[attacker.baseId]+')'});
      }
    }
    // 쿠즈노하 선빵: 공격 대상의 모든 효과(키워드) 삭제
    else if(attacker.baseId==='hkyk_kuzunoha'){
      if(target.kw&&target.kw.length>0){
        var removed=target.kw.map(function(k){return KW_LABELS[k]||k;}).join(', ');
        target.kw=[];
        log2.push({cls:'kill',text:'[선빵] '+attacker.name+': '+target.name+'의 모든 효과 삭제! ('+removed+')'});
      }
      stripAbilities(target,log2);
    }
    // 나구사: 선빵 루프에서 처리
    else if(attacker.baseId==='nagusa'){}
    // 와카모: 선빵 킬 후에 처리
    else if(attacker.baseId==='wakamo'){}
    else if(attacker.baseId==='millennium_malkuth'){
      // 말쿠트 선빵: 스위퍼 2체 소환 → 말쿠트 턴 내에서 즉시 자폭 공격
      // (stepLog에 추가하지 않고 steps에 직접 push — 개별 애니메이션)
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
        summonLog.push({cls:'soc',text:'[선빵] '+attacker.name+': 스위퍼 소환! ('+swp.atk+'/'+swp.hp+')'});
        sweepers.push(swp);
      }
      // 소환 스텝 (말쿠트 카드로 표시)
      for(var _sl=0;_sl<summonLog.length;_sl++)log.push(summonLog[_sl]);
      steps.push({atkSide:_mSide,atkIdx:_mAtkI,atkId:attacker.id,defSide:_mDefSide,defIdx:_mDefI,defId:target.id,log:summonLog,snap:snapshot()});
      // 각 스위퍼 자폭 공격 (말쿠트 턴 내 즉시 실행)
      for(var sw2=0;sw2<sweepers.length;sw2++){
        if(!target.alive)break; // 적 사망 → 나머지 스위퍼 생존 (다음 자기 차례에 공격)
        var _sw=sweepers[sw2];
        var swLog=[];
        var swDmg=_sw.atk+_sw.hp;
        swLog.push({cls:'hit',text:_sw.name+'의 자폭! ('+_sw.atk+'+'+_sw.hp+'='+swDmg+' 데미지)'});
        dealHit(_sw,target,swLog,swDmg);
        checkSurvive(target,defArr,swLog,_sw);
        resolveDeath(target,defArr,atkArr,swLog,_sw);
        _sw.alive=false; // 자폭 사망
        for(var _swl=0;_swl<swLog.length;_swl++)log.push(swLog[_swl]);
        steps.push({atkSide:_mSide,atkIdx:atkArr.indexOf(_sw),atkId:_sw.id,defSide:_mDefSide,defIdx:defArr.indexOf(target),defId:target.id,log:swLog,snap:snapshot()});
      }
      return true; // stepLog 비워서 메인 스텝 push 방지
    }
    else if(attacker.baseId==='Arisu_Kei'){
      // 아리스&케이 선빵: 적 전원을 왼쪽부터 1회씩 공격 (보호막 무시, HP 직격)
      var _akSide=(atkArr===a)?'a':'b';
      var _akDefSide=(_akSide==='a')?'b':'a';
      var _akAtkI=atkArr.indexOf(attacker);
      var akLog=[];
      akLog.push({cls:'soc',text:'[선빵] '+attacker.name+': 적 전원 순차 공격!'});
      for(var _ei=0;_ei<defArr.length;_ei++){
        var _enemy=defArr[_ei];
        if(!_enemy.alive)continue;
        // 보호막 무시하고 HP 직격
        var _akDmg=attacker.atk;
        if(hasKw(_enemy,'shield')){
          _enemy.kw.splice(_enemy.kw.indexOf('shield'),1);
          akLog.push({cls:'shield',text:_enemy.name+'의 보호막 무시!'});
        }
        _enemy.hp-=_akDmg;
        akLog.push({cls:'hit',text:attacker.name+'가 '+_enemy.name+'에게 '+_akDmg+' 피해! (HP:'+Math.max(0,_enemy.hp)+')'});
        checkSurvive(_enemy,defArr,akLog,attacker);
        // 아리스&케이 선빵 광역도 전투 데미지로 인정 (사츠키 빼앗기 발동)
        resolveDeath(_enemy,defArr,atkArr,akLog,attacker,true);
      }
      for(var _akl=0;_akl<akLog.length;_akl++)log.push(akLog[_akl]);
      steps.push({atkSide:_akSide,atkIdx:_akAtkI,atkId:attacker.id,defSide:_akDefSide,defIdx:0,defId:(defArr[0]||{}).id,log:akLog,snap:snapshot()});
      return true;
    }
    else if(attacker.baseId==='millennium_death_momoi'){
      // 데스 모모이 선빵: 적 부여 수치 초기화 (사야 면역)
      if(target.abilityImmune||target._sayaImmune){
        log2.push({cls:'shield',text:'[선빵] '+attacker.name+': '+target.name+' 면역!'});
      } else {
        var baseTmpl=findAnyChar(target.baseId);
        if(baseTmpl){
          var baseAtk=target.isSkin?(baseTmpl.atk*2+1):baseTmpl.atk;
          var baseHp=target.isSkin?(baseTmpl.hp*2+1):baseTmpl.hp;
          if(target.atk>baseAtk||target.hp>baseHp){
            var oldAtk=target.atk,oldHp=target.hp;
            target.atk=baseAtk;target.hp=Math.min(target.hp,baseHp);
            log2.push({cls:'kill',text:'[선빵] '+attacker.name+': '+target.name+' 부여 수치 제거! ('+oldAtk+'/'+oldHp+' → '+target.atk+'/'+target.hp+')'});
          }
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

  // 치세 패시브: 반격할 때 상대 능력 무작위 제거 (골든: 영구 제거)
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
      log2.push({cls:'kill',text:'[치세] '+target.name+'의 능력이 제거됨!'+(isGolden?' (영구)':'')});
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
        log2.push({cls:'kill',text:'[치세] '+target.name+'의 '+(KW_LABELS[pick]||pick)+' 제거!'+(isGolden?' (영구)':'')});
      }
    }
  }

  function dealDamage(attacker,atkArr,defender,defArr,log2,isCleave,dmgOverride){
    // === 유키노 패시브 (방어 시): 반격으로 상대를 쓰러뜨릴 수 있다면 전투 피해 면역 ===
    // attacker가 ranged/selfdestruct/cleave면 반격 자체가 없으므로 무관
    // 사전 예측: 보호막 미보유 + (poison 있고 atk≥1, 또는 atk≥hp) 면 반격 처치 가능
    if(defender.baseId==='yukino' && defender.alive && !defender._abilitiesStripped && !_G.permanentAbilityBan
       && !isCleave && !hasKw(attacker,'ranged') && !hasKw(attacker,'selfdestruct')){
      var _atkHasShield = hasKw(attacker,'shield');
      var _yukinoWillKill = false;
      if(!_atkHasShield){
        if(hasKw(defender,'poison') && defender.atk >= 1) _yukinoWillKill = true;
        else if(defender.atk >= attacker.hp) _yukinoWillKill = true;
      }
      if(_yukinoWillKill){
        log2.push({cls:'shield',text:'[패시브] '+defender.name+': '+attacker.name+' 반격 처치 → 전투 피해 면역.'});
        // attacker → defender 데미지 스킵, defender → attacker 반격만 진행
        var _yCounter = dealHit(defender, attacker, log2);
        checkSurvive(attacker, atkArr, log2, defender);
        var _atkOrigBoardY = (!opts||!opts.simCtx) ? (atkArr===a?boardA:boardB) : null;
        if(defender.alive) checkChisePassive(defender, attacker, _atkOrigBoardY, log2);
        resolveDeath(attacker, atkArr, defArr, log2, defender, true);
        peroCheck(attacker, defender, atkArr, log2);
        return {blocked:true, overflow:0, _yukinoDefense:true};
      }
    }
    var hitResult=dealHit(attacker,defender,log2,dmgOverride,true);
    // 방어자가 맞고 살아남았으면 버티기 체크
    checkSurvive(defender,defArr,log2,attacker);
    // 레이죠 패시브: 데미지를 주지 못하면 반격도 받지 않음
    var _reijoBlock=(attacker.baseId==='reijo'&&!attacker._abilitiesStripped&&hitResult&&hitResult.blocked);
    if(!isCleave&&!hasKw(attacker,'ranged')&&!hasKw(attacker,'selfdestruct')&&!_reijoBlock){
      // 유키노 패시브 (공격 시): 공격으로 상대를 쓰러뜨렸다면 반격을 받지 않음
      var _yukinoNoCounter=(attacker.baseId==='yukino'&&!attacker._abilitiesStripped&&!_G.permanentAbilityBan&&(defender.hp<=0||!defender.alive));
      if(_yukinoNoCounter){
        log2.push({cls:'shield',text:'[패시브] '+attacker.name+': '+defender.name+' 처치! 전투 피해 면역.'});
      }
      else if(defender.baseId==='haruka'&&defender.alive&&!defender._abilitiesStripped){
        // 하루카 반격: 5회(스킨 10회) 다회 반격
        var counterHits=defender.isSkin?10:5;
        log2.push({cls:'hit',text:defender.name+'의 반격! '+counterHits+'회!'});
        for(var _ch=0;_ch<counterHits;_ch++){
          if(!attacker.alive||attacker.hp<=0)break;
          dealHit(defender,attacker,log2);
          checkSurvive(attacker,atkArr,log2,defender);
        }
      } else {
        var counterResult=dealHit(defender,attacker,log2);
        // 공격자가 반격 맞고 살아남았으면 버티기 체크
        checkSurvive(attacker,atkArr,log2,defender);
      }
      // 치세 패시브: 반격 후 상대 능력 제거
      var _atkOrigBoard=(!opts||!opts.simCtx)?(atkArr===a?boardA:boardB):null;
      if(defender.alive) checkChisePassive(defender,attacker,_atkOrigBoard,log2);
    }
    resolveDeath(defender,defArr,atkArr,log2,attacker,true);
    if(!isCleave&&!hasKw(attacker,'ranged')&&!hasKw(attacker,'selfdestruct'))resolveDeath(attacker,atkArr,defArr,log2,defender,true);
    peroCheck(attacker,defender,atkArr,log2);
    return hitResult;
  }

  // 버티기 효과 추적 (실제 보드 반영용)
  var surviveEffects=[];

  // 사야 패시브: 전투 중 효과 면역 (기본: 전체, 스킨: 적만) — 개전 전에 설정
  for(var _sy=0;_sy<a.length;_sy++){if(a[_sy].baseId==='saya'&&a[_sy].alive&&!a[_sy]._abilitiesStripped){a[_sy]._sayaImmune=true;if(!a[_sy].isSkin)a[_sy].abilityImmune=true;}}
  for(var _sy=0;_sy<b.length;_sy++){if(b[_sy].baseId==='saya'&&b[_sy].alive&&!b[_sy]._abilitiesStripped){b[_sy]._sayaImmune=true;if(!b[_sy].isSkin)b[_sy].abilityImmune=true;}}

  // ===== 코인 결과 사전 결정 (개전 전) =====
  // 각 카드에 _coinResult 부여 → 개전이 참조 가능
  // 실제 코인 애니메이션은 이 결과를 그대로 표시 (random 다시 X)
  (function decideCoinResults(){
    var btBonus = _G.bunnyTossBonus || 0;
    // suzumi 페널티: a의 suzumi → b 페널티, b의 suzumi → a 페널티
    var suzPenA = 0, suzPenB = 0;
    for(var i=0;i<b.length;i++){if(b[i].alive&&b[i].baseId==='suzumi'&&!b[i]._abilitiesStripped) suzPenA += b[i].isSkin?0.7:0.4;}
    for(var i=0;i<a.length;i++){if(a[i].alive&&a[i].baseId==='suzumi'&&!a[i]._abilitiesStripped) suzPenB += a[i].isSkin?0.7:0.4;}
    var aHasCC = a.some(function(u){return u.alive&&u.baseId==='millennium_cc';});
    var bHasCC = b.some(function(u){return u.alive&&u.baseId==='millennium_cc';});
    function _setCoin(side, hasCC, suzPen, withBunnyBonus){
      for(var i=0;i<side.length;i++){
        var u=side[i];
        if(!u.alive){ u._coinResult=undefined; continue; }
        if(u.coinOff){ u._coinResult=false; continue; }
        if(hasCC||u.baseId==='asuna'){ u._coinResult=true; continue; }
        var p = withBunnyBonus ? Math.max(0, 0.5+btBonus-suzPen) : Math.max(0, 0.5-suzPen);
        u._coinResult = Math.random() < p;
      }
      // 아스나 스킨: 자신 제외 맨 왼쪽 아군도 코인 성공
      var hasAsunaGold = side.some(function(u){return u.alive&&(u.baseId==='asuna'||u.baseId==='millennium_cc')&&u.isSkin;});
      if(hasAsunaGold){
        for(var i=0;i<side.length;i++){
          if(side[i].alive&&side[i].baseId!=='asuna'&&side[i].baseId!=='millennium_cc'&&!side[i].coinOff){
            side[i]._coinResult=true; break;
          }
        }
      }
    }
    // a는 아군 측이라 bunny toss 보너스 적용 (기존 동작 유지)
    _setCoin(a, aHasCC, suzPenA, true);
    _setCoin(b, bHasCC, suzPenB, false);
  })();

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

  // 키키 패시브: 필드 전체 5/5 이하로 제한 (개전 후 적용, 키키 본인 제외)
  var _kikiOnField=false;
  for(var _kk=0;_kk<a.length;_kk++){if(a[_kk].alive&&a[_kk].baseId==='shanhai_kiki'){_kikiOnField=true;break;}}
  if(!_kikiOnField){for(var _kk=0;_kk<b.length;_kk++){if(b[_kk].alive&&b[_kk].baseId==='shanhai_kiki'){_kikiOnField=true;break;}}}
  if(_kikiOnField){
    var _both=a.concat(b);
    for(var _kk=0;_kk<_both.length;_kk++){
      // 효과 면역 유닛(사야/미카/검은 군주 등)은 키키 공체 제한을 받지 않음
      if(_both[_kk].alive&&_both[_kk].baseId!=='shanhai_kiki'&&!_both[_kk].abilityImmune&&!_both[_kk]._sayaImmune&&!_both[_kk]._effectImmune){
        if(_both[_kk].atk>5)_both[_kk].atk=5;
        if(_both[_kk].hp>5)_both[_kk].hp=5;
        if(_both[_kk].maxHp>5)_both[_kk].maxHp=5;
      }
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

  // 레이사 마법소녀: 개전 버프 후 풀 hp 기록
  for(var _r=0;_r<a.length;_r++)if(a[_r].isSkin&&a[_r].baseId==='reisa')a[_r]._reisaFullHp=a[_r].hp;
  for(var _r=0;_r<b.length;_r++)if(b[_r].isSkin&&b[_r].baseId==='reisa')b[_r]._reisaFullHp=b[_r].hp;

  for(var round=0;round<maxRounds;round++){
    var aliveA=getAlive(a),aliveB=getAlive(b);
    // 미노리 패시브: 아군에서 마지막으로 남으면 패배 (종료 판정보다 먼저)
    if(aliveA.length===1&&aliveA[0].baseId==='red_winter_minori'){
      log.push({cls:'kill',text:'[패시브] '+aliveA[0].name+': 마지막으로 남아 패배!'});
      aliveA[0].alive=false;aliveA=getAlive(a);
    }
    if(aliveB.length===1&&aliveB[0].baseId==='red_winter_minori'){
      log.push({cls:'kill',text:'[패시브] '+aliveB[0].name+': 마지막으로 남아 패배!'});
      aliveB[0].alive=false;aliveB=getAlive(b);
    }
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
      // 기습 해제: 첫 공격 시 기습 상태 해제
      if(!attacker._hasAttacked){attacker._hasAttacked=true;}
      // 연사 2회째 공격 알림
      if(s>0) stepLog.push({cls:'hit',text:'  → [연사] '+attacker.name+': 2회째 공격!'});
      // 선빵 (우이: 능력삭제, 우타하: 천둥이)
      var skipMain=triggerPreemptive(attacker,target,defArr2,atkArr2,stepLog);

      if(!skipMain){
        // 선빵 다회 공격 (하루카/히나타/나구사/와카모)
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
          stepLog.push({cls:'hit',text:attacker.name+'의 선빵! '+msHits+'회 공격!'});
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
              stepLog.push({cls:'soc',text:'[선빵] '+attacker.name+': 호버크래프트 카운터 +'+hcAdd+' (현재: '+attacker._hovercraftCounter+')'});
              if(attacker._hovercraftCounter>=4){
                attacker._hovercraftCounter-=4;
                var hc=makeToken('hovercraft');
                hc.atk=attacker.isSkin?20:10;hc.hp=attacker.isSkin?20:10;
                hc.alive=true;hc.poisonImmune=false;hc._mySide=atkArr2;
                hc.isSkin=attacker.isSkin;hc._wakamoGolden=attacker.isSkin;
                applyEimiBonus(hc,atkArr2);
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
          resolveDeath(target,defArr2,atkArr2,stepLog,attacker,true);
          resolveDeath(attacker,atkArr2,defArr2,stepLog,target,true);
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
            var cleaveHit=false;
            if(tIdx>0&&aliveD[tIdx-1]){dealDamage(attacker,atkArr2,aliveD[tIdx-1],defArr2,stepLog,true);cleaveHit=true;}
            if(tIdx<aliveD.length-1&&aliveD[tIdx+1]){dealDamage(attacker,atkArr2,aliveD[tIdx+1],defArr2,stepLog,true);cleaveHit=true;}
            if(cleaveHit) stepLog.push({cls:'hit',text:'  → [광역] '+attacker.name+': 양옆 공격!'});
          }
          // 관통
          else if(hasKw(attacker,'pierce')&&!hitResult.blocked&&hitResult.overflow>0){
            // 세나: 초과 데미지로 아군 전체 회복
            if(attacker.baseId==='sena'){
              var healAmt=attacker.isSkin?hitResult.overflow*2:hitResult.overflow;
              stepLog.push({cls:'shield',text:attacker.name+'의 관통! 아군 전체 HP +'+healAmt+' 회복!'});
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
          // 슌 패시브: 킬 시 다음 무작위 대상 추가 공격 연쇄 (기본/스킨 동일)
          // 스킨(어린이)은 보호막 추가만 다름. 추가 공격 로직은 동일.
          if(attacker.baseId==='shun'&&!attacker._abilitiesStripped&&!target.alive&&hitResult&&!hitResult.blocked){
            if(!_G._shunPendingSteps)_G._shunPendingSteps=[];
            var _shunChain=0;
            while(_shunChain<20&&attacker.alive){
              var shunNext=findTarget(defArr2);
              if(!shunNext)break;
              var shunDefI2=(defSide==='a')?a.indexOf(shunNext):b.indexOf(shunNext);
              var shunLog=[];
              shunLog.push({cls:'hit',text:'[패시브] '+attacker.name+': '+shunNext.name+'을(를) 추가 공격!'});
              dealDamage(attacker,atkArr2,shunNext,defArr2,shunLog,true);
              _G._shunPendingSteps.push({atkSide:atkSide,atkIdx:atkI,defSide:defSide,defIdx:shunDefI2,atkId:attacker.id,defId:shunNext.id,log:shunLog,snap:snapshot()});
              if(!shunNext.alive){_shunChain++;continue;}
              break;
            }
          }
        }
      }

          // 카즈사 패시브: 킬 시 레이사 소환 (전투 중 1회)
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
                stepLog.push({cls:'soc',text:'[패시브] '+attacker.name+': '+rei.name+' 소환! ('+rei.atk+'/'+rei.hp+')'});
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

      // 아루/미카 선빵 공격력 복원
      if(attacker._aruOrigAtk!==undefined){attacker.atk=attacker._aruOrigAtk;delete attacker._aruOrigAtk;}
      if(attacker._mikaOrigAtk!==undefined){attacker.atk=attacker._mikaOrigAtk;delete attacker._mikaOrigAtk;}
      // 스즈미 debuff 턴 감소
      if(attacker._suzumiDebuff>0){
        attacker._suzumiDebuff--;
        if(attacker._suzumiDebuff<=0&&attacker._suzumiOrigAtk!==undefined){
          attacker.atk=attacker._suzumiOrigAtk;delete attacker._suzumiOrigAtk;delete attacker._suzumiDebuff;
        }
      }
      // 미모리 debuff 턴 감소 (이번 공격에 막 설정됐으면 1회 skip)
      if(attacker._mimoriDebuff>0&&attacker._mimoriDebuff<99){
        if(attacker._mimoriJustSet){
          delete attacker._mimoriJustSet;
        } else {
          attacker._mimoriDebuff--;
          if(attacker._mimoriDebuff<=0&&attacker._mimoriOrigAtk!==undefined){
            attacker.atk=attacker._mimoriOrigAtk;delete attacker._mimoriOrigAtk;delete attacker._mimoriDebuff;
          }
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
        // 슌 패시브 추가공격 steps
        if(_G._shunPendingSteps&&_G._shunPendingSteps.length>0){
          for(var _ss=0;_ss<_G._shunPendingSteps.length;_ss++){
            var _sStep=_G._shunPendingSteps[_ss];
            for(var _ssl=0;_ssl<_sStep.log.length;_ssl++)log.push(_sStep.log[_ssl]);
            steps.push(_sStep);
          }
          _G._shunPendingSteps=[];
        }
        // 하루카 패시브 반격 step
        if(_G._harukaCounterPending){
          var _hcp=_G._harukaCounterPending;
          delete _G._harukaCounterPending;
          if(_hcp.haruka.alive&&_hcp.target.alive){
            var hcLog=[];
            var hcHits=_hcp.haruka.isSkin?10:5;
            hcLog.push({cls:'hit',text:'[패시브] '+_hcp.haruka.name+': 반격! '+hcHits+'회 공격!'});
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
  // 전투 종료 후 보드 원본 kw 복원 (시뮬 제외)
  if(!opts||!opts.simCtx){
    for(var _bk=0;_bk<boardA.length;_bk++) if(boardA[_bk]._baseKw!==undefined){boardA[_bk].kw=boardA[_bk]._baseKw.slice();delete boardA[_bk]._baseKw;}
    for(var _bk=0;_bk<boardB.length;_bk++) if(boardB[_bk]._baseKw!==undefined){boardB[_bk].kw=boardB[_bk]._baseKw.slice();delete boardB[_bk]._baseKw;}
    // 발키리/SRT 트래킹: 사망/킬 누적 (실제 전투만)
    function _vkTrack(side){
      for(var i=0;i<side.length;i++){
        var u=side[i];
        if(u.alive) continue;
        if(u.school==='발키리/SRT') G.valkyrieDeaths=(G.valkyrieDeaths||0)+1;
        if(u._killedBy&&u._killedBy.school==='발키리/SRT'){
          // 사망한 적이 발키리/SRT에게 살해된 경우
          // 단, 같은 사이드 학생이면 자해/오발 케이스라 카운트 X
          if(u._mySide!==u._killedBy._mySide) G.valkyrieKills=(G.valkyrieKills||0)+1;
        }
      }
    }
    _vkTrack(a);
    _vkTrack(b);
  }
  return{result:result,log:log,steps:steps,survivorsA:survivorsA,survivorsB:survivorsB,damage:damage,surviveEffects:surviveEffects,_sideA:a,_makeupInstakill:makeupInstakill,panchanDeathsA:a._panchanDeaths||0,panchanDeathsB:b._panchanDeaths||0};
}

function _playBattleHiddenSfx(p,opp){
  var enemyHas7=false,allyHas7=false;
  if(opp&&opp.board){for(var i=0;i<opp.board.length;i++){if(opp.board[i].tier>=7||opp.board[i].isHidden){enemyHas7=true;break;}}}
  for(var i=0;i<p.board.length;i++){if(p.board[i].tier>=7||p.board[i].isHidden||p.board[i]._keiseisenBuffed){allyHas7=true;break;}}
  var src=null;
  if(enemyHas7) src='audio/battle_hidden_enemy.mp3';
  else if(allyHas7) src='audio/battle_hidden_ally.mp3';
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
  document.title='[전투시작] 턴'+G.turn+' '+Date.now();
  try {
  // 잔여 상태 초기화 (스펠 사용 후 상태가 남아있을 경우 방어)
  G.pendingSpell=null;
  var _sho=document.querySelector('.spell-hint-overlay');if(_sho)_sho.remove();
  var _bov=document.getElementById('battle-overlay');if(_bov)_bov.classList.remove('active');
  var _bia=document.getElementById('battle-intro-area');if(_bia)_bia.innerHTML='';
  playSfx('battle_start');
  lastSold=null;
  _activeCoinOverlay=null;
  var p=G.players[0];
  // 세리카 패시브: 영입 페이즈 종료 시 남은 청휘석을 모두 소비하여 공/체에 영구 추가
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
          logBuff(p.board[_sk],'세리카 패시브',_sSt,_sSt);
        }
      }
      trackNonomiStone(_serikaStone);
      p.stone=0;
    }
  }
  var alive=[];for(var i=1;i<G.players.length;i++)if(!G.players[i].dead)alive.push(G.players[i]);
  if(alive.length===0)return;
  // 사전 결정된 매치업 사용 (없으면 랜덤 폴백)
  var opp=null;
  var matchInfo=G.matchups&&G.matchups[0];
  if(matchInfo&&matchInfo.opponentId!=null){
    var oppRef=null;
    for(var _mi=0;_mi<G.players.length;_mi++) if(G.players[_mi].id===matchInfo.opponentId){oppRef=G.players[_mi];break;}
    if(oppRef){
      if(matchInfo.isGhost){
        // 고스트(직전 사망자) — 별도 임시 객체로 본체 보호
        var gb=oppRef._ghostBoard||[];
        opp={id:oppRef.id,name:oppRef.name+' (♢)',hp:999,tier:oppRef.tier,
             board:gb.map(function(u){var c={};for(var k in u)c[k]=u[k];if(u.kw)c.kw=u.kw.slice();return c;}),
             dead:false,_isGhost:true,panchanDeaths:oppRef.panchanDeaths||0,personality:oppRef.personality};
      } else {
        opp=oppRef;
      }
    }
  }
  if(!opp) opp=alive[Math.floor(Math.random()*alive.length)];
  _playBattleHiddenSfx(p,opp);
  // 적 7성/히든 카드 마주치면 자동 해금 (학생명부 노출용)
  if(opp&&opp.board){
    for(var _ei=0;_ei<opp.board.length;_ei++){
      var _eu=opp.board[_ei];
      if(_eu&&(_eu.tier>=7||_eu.isHidden)&&_eu.baseId){
        if(typeof recordRecruitTier7==='function')recordRecruitTier7(_eu.baseId);
      }
    }
  }

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
  var _myName=(window._babgLogin&&window._babgLogin.name)?window._babgLogin.name:'선생님';
  var _vsIconStyle='width:64px;height:64px;border-radius:50%;vertical-align:middle;margin-right:12px;object-fit:cover;border:3px solid rgba(255,255,255,0.35);box-shadow:0 4px 12px rgba(0,0,0,0.5)';
  var _enIcon='<img src="'+getPlayerIconUrl(opp.name,false)+'" style="'+_vsIconStyle+'" onerror="this.style.display=\'none\'">';
  var _myIcon='<img src="'+getPlayerIconUrl(_myName,true)+'" style="'+_vsIconStyle+'" onerror="this.style.display=\'none\'">';
  // 적 NPC 티어 배지 (큰 사이즈)
  var _vsTierBadge='';
  if(opp&&opp.aiDifficulty!=null){
    var _vsTierIcon=getNpcDifficultyIcon(opp.aiDifficulty);
    if(_vsTierIcon) _vsTierBadge='<img src="'+_vsTierIcon+'" style="width:32px;height:32px;vertical-align:middle;margin-right:8px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.6))" onerror="this.style.display=\'none\'">';
  }
  // 플레이어 본인 티어 배지 (큰 사이즈)
  var _vsMyTierBadge='';
  if(window._babgPlayerRank){
    var _vsMyTierInfo=rankTierInfo(window._babgPlayerRank);
    if(_vsMyTierInfo&&_vsMyTierInfo.icon){
      _vsMyTierBadge='<img src="'+_vsMyTierInfo.icon+'" style="width:32px;height:32px;vertical-align:middle;margin-right:8px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.6))" onerror="this.style.display=\'none\'">';
    }
  }
  intro.innerHTML='<div class="battle-intro"><div class="vs-name">'+_enIcon+_vsTierBadge+opp.name+' <span style="color:#a78bfa">(스케쥴 '+opp.tier+')</span></div><div class="vs-text">VS</div><div class="vs-name">'+_myIcon+_vsMyTierBadge+_myName+' <span style="color:#a78bfa">(스케쥴 '+p.tier+')</span></div></div>';

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
      var _questEnemyBoardLen = opp.board.length; // 퀘스트용 적 보드 크기 캡처
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
        if(opp.hp<=0&&!opp._isGhost){opp._ghostBoard=_snapshotForGhost(opp);opp._deathTurn=G.turn;opp.dead=true;G.aliveCount--;for(var k=0;k<opp.board.length;k++)returnToPool(opp.board[k].baseId,opp.board[k].isSkin?3:1);opp.board=[];chosen._eliminated=true;}
      } else {
        chosen.damageText='무승부!';
      }
      if(p.hp<=0){p._ghostBoard=_snapshotForGhost(p);p._deathTurn=G.turn;p.dead=true;G.placement=G.aliveCount;G.aliveCount--;chosen._eliminated=true;}
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
        // 적(opp) 보드에서도 영구 소멸 카드 제거
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
      // 퀘스트 트래킹: 킬 수, 7성 카드 생존
      if(window._questTracker) {
        var enemyTotal = _questEnemyBoardLen;
        var enemySurvivors = (chosen.survivorsB||[]).length;
        window._questTracker.kills += (enemyTotal - enemySurvivors);
        // 7성 카드 생존 체크 (승리 시)
        if(chosen.result==='win' && chosen.survivorsA) {
          for(var _qi=0;_qi<chosen.survivorsA.length;_qi++) {
            if(chosen.survivorsA[_qi].isHidden) { window._questTracker.hiddenSurvived = true; break; }
          }
        }
      }
      // 시로코 테러 DR 체크: 복원 전에 플래그 저장
      var _stDRFired=false;
      for(var _sti=0;_sti<p.board.length;_sti++){
        if(p.board[_sti].baseId==='Shiroko_Terror'&&p.board[_sti]._shirokoTerrorDRFired){_stDRFired=true;break;}
      }
      restoreBoardFromSnapshot(p,boardSnapshot);
      // 시로코 패시브: 이번 전투 킬 수만큼 다음 턴 청휘석
      if(G._shirokoKillsThisBattle>0){
        G.bonusStone=(G.bonusStone||0)+G._shirokoKillsThisBattle;
        G._shirokoKillsThisBattle=0;
      }
      // 아야네 뒤끝: 이번 전투 아야네 사망 수만큼 다음 턴 청휘석
      if(G._ayaneDeathsThisBattle>0){
        G.bonusStone=(G.bonusStone||0)+G._ayaneDeathsThisBattle;
        G._ayaneDeathsThisBattle=0;
      }
      // 케이(USB) 생존 → 아리스&케이로 변환
      if(chosen.survivorsA){
        var _keiSurvived=false;
        for(var _ki=0;_ki<chosen.survivorsA.length;_ki++){
          if(chosen.survivorsA[_ki].baseId==='Kei_usb'){_keiSurvived=true;break;}
        }
        if(_keiSurvived){
          var akTmpl=findHiddenChar('Arisu_Kei');
          if(akTmpl){
            // 보드에서 Kei_usb와 arisu 제거, Arisu_Kei 추가
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
            // 연출은 continueBattle → 영입 페이즈 진입 시 재생
            G._pendingArisuKeiEntrance=true;
          }
        }
      }
      // 시로코 테러 DR: 뒤끝 발동 시 흡수된 학생들 보드 귀환
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
      G.bunnyTossBonus=0; // 바니 토스 전투 후 리셋
      aiAutoBattles();
    }
  },1500);
  } catch(e) {
    console.error('[startBattle ERROR]',e);
    document.title='[에러!] '+e.message;
    alert('전투 시작 에러: '+e.message);
    var _bov2=document.getElementById('battle-overlay');if(_bov2)_bov2.classList.remove('active');
  }
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
  // 매치업 사전 결정 결과 활용 (player 0 매치는 startBattle에서 처리됨)
  var pairs=[];
  var ghostMatches=[]; // {a, ghostBoard, ghostTier}
  var processed={};processed[0]=true;
  if(G.matchups){
    var p0Opp=(G.matchups[0]&&G.matchups[0].opponentId);
    if(p0Opp!=null) processed[p0Opp]=true;
    for(var pid in G.matchups){
      var ipid=parseInt(pid,10);
      if(processed[ipid]) continue;
      var info=G.matchups[ipid];
      if(!info||info.bye||info.opponentId==null){processed[ipid]=true;continue;}
      var a2=null,b2=null;
      for(var i=0;i<G.players.length;i++){
        if(G.players[i].id===ipid)a2=G.players[i];
        if(G.players[i].id===info.opponentId)b2=G.players[i];
      }
      if(!a2){processed[ipid]=true;continue;}
      processed[ipid]=true;
      if(info.isGhost){
        if(!b2||!b2._ghostBoard){continue;}
        ghostMatches.push({a:a2,ghostBoard:b2._ghostBoard,ghostTier:b2.tier});
      } else {
        if(!b2||processed[b2.id])continue;
        processed[b2.id]=true;
        pairs.push([a2,b2]);
      }
    }
  }
  // 폴백: matchups 없으면 기존 셔플 로직
  if(pairs.length===0&&ghostMatches.length===0&&(!G.matchups||Object.keys(G.matchups).length===0)){
    var alive=[];for(var i=1;i<G.players.length;i++)if(!G.players[i].dead)alive.push(G.players[i]);
    var shuffled=alive.slice().sort(function(){return Math.random()-0.5;});
    for(var i=0;i+1<shuffled.length;i+=2)pairs.push([shuffled[i],shuffled[i+1]]);
  }
  function _aiCap(){var c=9999;if(G.turn<=5)c=10;else if(G.aliveCount>4)c=15;return c;}

  // 실제 runBattle을 사용한 AI vs AI 전투 (플레이어 vs AI와 동일한 시뮬)
  // simCtx로 격리하여 플레이어 게임 상태(시로코 킬 카운트 등)에 영향 X
  function _runAiPair(a2, b2) {
    var aBoard=_aiCopyBoard(a2.board), bBoard=_aiCopyBoard(b2.board);
    var pdA=a2.panchanDeaths||0, pdB=b2.panchanDeaths||0;
    var simCtx={
      permanentAbilityBan:false, battleSchoolBuff:{},
      kuzunohaActive:!!G.kuzunohaActive, millenniumTokenSummons:0,
      arisuDeathCount:0, keiseisenCounters:{},
      players:G.players,
      _shirokoKillsThisBattle:0, _ayaneDeathsThisBattle:0
    };
    var startWithA=Math.random()<0.5;
    try{
      return runBattle(aBoard, bBoard, startWithA, {simCtx:simCtx, panchanDeathsA:pdA, panchanDeathsB:pdB});
    }catch(e){
      console.log('AI vs AI 전투 시뮬 실패:', e);
      return null;
    }
  }
  // 데미지 계산: 플레이어 vs AI 공식과 동일 — 생존자 티어 합 + 패자 티어
  function _calcDmg(survivors, loserTier, aiCap) {
    var dmg=loserTier;
    if(survivors){for(var i=0;i<survivors.length;i++) dmg+=(survivors[i].tier||1);}
    if(dmg>aiCap) dmg=aiCap;
    return dmg;
  }
  // 사망 처리
  function _killAi(p) {
    p._ghostBoard=_snapshotForGhost(p);
    p._deathTurn=G.turn;
    p.dead=true;
    G.aliveCount--;
    for(var k=0;k<p.board.length;k++) returnToPool(p.board[k].baseId, p.board[k].isSkin?3:1);
    p.board=[];
  }
  // 트레인건 영구 소멸 (전투 결과 기준)
  function _checkPermaDestroy(p, snapSide) {
    if(p.dead||!snapSide) return;
    var PERMA=['gehenna_traingun','trinity_seia','gehenna_prefect'];
    for(var i=0;i<snapSide.length;i++){
      if(!snapSide[i].alive && PERMA.indexOf(snapSide[i].baseId)!==-1){
        for(var j=p.board.length-1;j>=0;j--){
          if(p.board[j].baseId===snapSide[i].baseId){
            returnToPool(p.board[j].baseId, p.board[j].isSkin?3:1);
            p.board.splice(j,1);
            break;
          }
        }
      }
    }
  }
  // 일반 페어
  for(var pi=0;pi<pairs.length;pi++){
    var a2=pairs[pi][0], b2=pairs[pi][1];
    var aiCap=_aiCap();
    var result=_runAiPair(a2,b2);
    if(!result){
      // 폴백: 휴리스틱
      var strA=0,strB=0;
      for(var j=0;j<a2.board.length;j++)strA+=a2.board[j].atk+a2.board[j].hp;
      for(var j=0;j<b2.board.length;j++)strB+=b2.board[j].atk+b2.board[j].hp;
      var total=strA+strB+1;
      if(Math.random()<strA/total){var dmg=b2.tier+Math.floor(Math.random()*4)+1;if(dmg>aiCap)dmg=aiCap;b2.hp-=dmg;b2.totalDamageTaken=(b2.totalDamageTaken||0)+dmg;if(b2.hp<=0)_killAi(b2);}
      else{var dmg=a2.tier+Math.floor(Math.random()*4)+1;if(dmg>aiCap)dmg=aiCap;a2.hp-=dmg;a2.totalDamageTaken=(a2.totalDamageTaken||0)+dmg;if(a2.hp<=0)_killAi(a2);}
      continue;
    }
    // 결과 적용 (a2 관점: result.result === 'win'이면 a2 승, 'lose'면 b2 승)
    if(result.result==='win'){
      var dmg=_calcDmg(result.survivorsA, b2.tier, aiCap);
      b2.hp-=dmg; b2.totalDamageTaken=(b2.totalDamageTaken||0)+dmg;
      if(b2.hp<=0) _killAi(b2);
    } else if(result.result==='lose'){
      var dmg=_calcDmg(result.survivorsB, a2.tier, aiCap);
      a2.hp-=dmg; a2.totalDamageTaken=(a2.totalDamageTaken||0)+dmg;
      if(a2.hp<=0) _killAi(a2);
    }
    // 주리 사망 카운터 갱신
    a2.panchanDeaths=result.panchanDeathsA||a2.panchanDeaths||0;
    b2.panchanDeaths=result.panchanDeathsB||b2.panchanDeaths||0;
    // 영구 소멸 처리
    if(result.steps&&result.steps.length>0){
      var finalSnap=result.steps[result.steps.length-1].snap;
      if(finalSnap){_checkPermaDestroy(a2, finalSnap.a); _checkPermaDestroy(b2, finalSnap.b);}
    }
    // 트레인건 생존 카운터 (원래 50% 랜덤은 의도치 않은 강제 제거였음 — 이제 영구 소멸은 위에서 처리)
    [a2,b2].forEach(function(ai){
      if(ai.dead) return;
      for(var j=0;j<ai.board.length;j++){
        if(ai.board[j].baseId==='gehenna_traingun'){
          ai.board[j]._battlesSurvived=(ai.board[j]._battlesSurvived||0)+1;
        }
      }
    });
  }
  // 고스트 매치: 살아있는 a만 데미지 받을 수 있음 (고스트는 이미 사망해서 데미지 영향 X)
  for(var gi=0;gi<ghostMatches.length;gi++){
    var gm=ghostMatches[gi]; var a2=gm.a;
    if(a2.dead) continue;
    var aiCap=_aiCap();
    // 고스트 보드를 일회성 dummy player로 만들어 _runAiPair 재사용
    var ghostDummy={board:gm.ghostBoard,tier:gm.ghostTier,panchanDeaths:0,dead:false,hp:9999,id:-1};
    var result=_runAiPair(a2, ghostDummy);
    if(!result){
      // 폴백: 휴리스틱
      var strA=0,strB=0;
      for(var j=0;j<a2.board.length;j++)strA+=a2.board[j].atk+a2.board[j].hp;
      for(var j=0;j<gm.ghostBoard.length;j++)strB+=(gm.ghostBoard[j].atk||0)+(gm.ghostBoard[j].hp||0);
      var total=strA+strB+1;
      if(Math.random()>=strA/total){
        var dmg=gm.ghostTier+Math.floor(Math.random()*4)+1;if(dmg>aiCap)dmg=aiCap;
        a2.hp-=dmg;a2.totalDamageTaken=(a2.totalDamageTaken||0)+dmg;
        if(a2.hp<=0) _killAi(a2);
      }
      continue;
    }
    if(result.result==='lose'){
      var dmg=_calcDmg(result.survivorsB, a2.tier, aiCap);
      a2.hp-=dmg; a2.totalDamageTaken=(a2.totalDamageTaken||0)+dmg;
      if(a2.hp<=0) _killAi(a2);
    }
    // a2 승/무승부면 a2는 데미지 X (고스트는 죽어있는 상태라 영향 X)
    a2.panchanDeaths=result.panchanDeathsA||a2.panchanDeaths||0;
    // 영구 소멸 (a2만)
    if(!a2.dead && result.steps && result.steps.length>0){
      var finalSnap=result.steps[result.steps.length-1].snap;
      if(finalSnap) _checkPermaDestroy(a2, finalSnap.a);
    }
    if(!a2.dead){
      for(var j=0;j<a2.board.length;j++){
        if(a2.board[j].baseId==='gehenna_traingun'){
          a2.board[j]._battlesSurvived=(a2.board[j]._battlesSurvived||0)+1;
        }
      }
    }
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
  // 왼쪽부터 시각 열(visual col) 단위 스캔으로 선공 결정
  // 카드는 중앙 정렬이므로, 기물 수가 적은 쪽의 col 0는 기물 수가 많은 쪽의 col 0보다 더 오른쪽에 위치.
  // offset = floor((maxN - sideCount)/2)
  // 시각 col k → 실제 인덱스 (k - offset)
  // - 한 쪽만 앞면 → 그 쪽 선공
  // - 양쪽 앞면 + 기물 수 동일 → 재토스 (규칙5)
  // - 양쪽 앞면 + 기물 수 다름 → 다음 열로
  // - 양쪽 뒷면(또는 한 쪽 칸 없음+뒷면) → 다음 열로
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
    // 둘 다 뒷면 혹은 한 쪽 없음+뒷면(카드 자체 없음) → 다음 열
  }
  if(!resolved){
    if(nA>nB)eFirst=false;
    else if(nB>nA)eFirst=true;
    else tied=true;
  }
  if(eFirst===undefined)eFirst=Math.random()<0.5;

  // 각 사이드의 그룹별 리스트 (왼쪽부터)
  var aHeads=[],bHeads=[],aTails=[],bTails=[];
  for(var i=0;i<nA;i++){if(cr['a'+i]===true)aHeads.push('a'+i);else aTails.push('a'+i);}
  for(var i=0;i<nB;i++){if(cr['b'+i]===true)bHeads.push('b'+i);else bTails.push('b'+i);}

  // 번갈아 머지: bFirst가 true면 b부터 시작, false면 a부터 시작. 한 쪽 소진되면 나머지 연속.
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

  // 앞면 그룹: eFirst면 b(적)부터, 아니면 a(아군)부터
  var starOrder=_interleave(aHeads,bHeads,eFirst);
  // 뒷면 그룹: 앞면 그룹 마지막 턴자의 반대 사이드부터 시작 (턴 이어감)
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
  // 뒷면 그룹은 앞면 그룹 마지막 턴자의 반대 사이드부터 시작.
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
  // snap에서 살아있는 유닛만 필터 → DOM 카드와 인덱스 일치시킴
  var aliveSnapA=[];for(var j=0;j<snap.a.length;j++)if(snap.a[j].alive)aliveSnapA.push(snap.a[j]);
  var aliveSnapB=[];for(var j=0;j<snap.b.length;j++)if(snap.b[j].alive)aliveSnapB.push(snap.b[j]);
  for(var j=0;j<aliveAlly.length;j++){aliveAlly[j].sid='a'+j;aliveAlly[j].baseId=aliveSnapA[j]?aliveSnapA[j].baseId:'';}
  for(var j=0;j<aliveEnemy.length;j++){aliveEnemy[j].sid='b'+j;aliveEnemy[j].baseId=aliveSnapB[j]?aliveSnapB[j].baseId:'';}

  // snap에서 coinOff 정보 가져오기 (alive 필터된 인덱스 기준)
  var coinOffMap={};
  for(var j=0;j<aliveSnapA.length;j++)if(aliveSnapA[j].coinOff)coinOffMap['a'+j]=true;

  // 스즈미 패시브: 상대 코인 성공률 감소 (-20%, 황금: -40%)
  var _suzumiPenaltyForEnemy=0,_suzumiPenaltyForAlly=0;
  for(var j=0;j<aliveSnapA.length;j++){if(aliveSnapA[j].baseId==='suzumi')_suzumiPenaltyForEnemy+=aliveSnapA[j].isSkin?0.7:0.4;}
  for(var j=0;j<aliveSnapB.length;j++){if(aliveSnapB[j].baseId==='suzumi')_suzumiPenaltyForAlly+=aliveSnapB[j].isSkin?0.7:0.4;}

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
      // 코인 결과는 runBattle 시작 시점에 decideCoinResults로 미리 결정되어 snap의 _coinResult에 저장됨
      // 여기서는 그 값을 그대로 사용 (random 다시 던지지 X). 미정의 시 fallback random.
      // ※ aliveEnemy/aliveAlly는 DOM 객체라 _coinResult가 없음 → snap에서 가져와야 함
      for(var j=0;j<aliveEnemy.length;j++){
        var _eu=aliveEnemy[j];
        var _esnap=aliveSnapB[j];
        var _ecr=_esnap?_esnap._coinResult:undefined;
        cr[_eu.sid] = (_ecr===true||_ecr===false) ? _ecr : (Math.random()<0.5);
      }
      for(var j=0;j<aliveAlly.length;j++){
        var _au=aliveAlly[j];
        var _asnap=aliveSnapA[j];
        var _acr=_asnap?_asnap._coinResult:undefined;
        cr[_au.sid] = (_acr===true||_acr===false) ? _acr : (coinOffMap[_au.sid]?false:(Math.random()<0.5));
      }
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
          if(_hasAsuna){
            calcResult.tied=false;eFirst=false;calcResult.eFirst=false;
            // order 배열을 새 eFirst(아군 선공) 기준으로 재계산
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
  var _myName=(window._babgLogin&&window._babgLogin.name)?window._babgLogin.name:'선생님';
  var _vsIconStyle='width:64px;height:64px;border-radius:50%;vertical-align:middle;margin-right:12px;object-fit:cover;border:3px solid rgba(255,255,255,0.35);box-shadow:0 4px 12px rgba(0,0,0,0.5)';
  var _enIcon='<img src="'+getPlayerIconUrl(opp.name,false)+'" style="'+_vsIconStyle+'" onerror="this.style.display=\'none\'">';
  var _myIcon='<img src="'+getPlayerIconUrl(_myName,true)+'" style="'+_vsIconStyle+'" onerror="this.style.display=\'none\'">';
  var _vsTierBadge='';
  if(opp&&opp.aiDifficulty!=null){
    var _vsTierIcon=getNpcDifficultyIcon(opp.aiDifficulty);
    if(_vsTierIcon) _vsTierBadge='<img src="'+_vsTierIcon+'" style="width:32px;height:32px;vertical-align:middle;margin-right:8px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.6))" onerror="this.style.display=\'none\'">';
  }
  var _vsMyTierBadge='';
  if(window._babgPlayerRank){
    var _vsMyTierInfo=rankTierInfo(window._babgPlayerRank);
    if(_vsMyTierInfo&&_vsMyTierInfo.icon){
      _vsMyTierBadge='<img src="'+_vsMyTierInfo.icon+'" style="width:32px;height:32px;vertical-align:middle;margin-right:8px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.6))" onerror="this.style.display=\'none\'">';
    }
  }
  intro.innerHTML='<div class="battle-intro"><div class="vs-name">'+_enIcon+_vsTierBadge+opp.name+' <span style="color:#a78bfa">(스케쥴 '+opp.tier+')</span></div><div class="vs-text">VS</div><div class="vs-name">'+_myIcon+_vsMyTierBadge+_myName+' <span style="color:#a78bfa">(스케쥴 '+player.tier+')</span></div></div>';
  setTimeout(function(){intro.innerHTML='';startBattleAnimation(result,opp);},1500);
}

function startBattleAnimation(result,opp,altResult,onCoinResult) {
  document.getElementById('battle-arena').style.display='block';
  document.getElementById('battle-log').style.display='block';
  document.getElementById('btn-skip').style.display='';
  var _myName=(window._babgLogin&&window._babgLogin.name)?window._babgLogin.name:'선생님';
  var _myTier=(G.players[0]&&G.players[0].tier)||1;
  var _enIcon=getPlayerIconUrl(opp.name,false);
  var _myIcon=getPlayerIconUrl(_myName,true);
  var _iconStyle='width:40px;height:40px;border-radius:50%;vertical-align:middle;margin-right:8px;object-fit:cover;border:2px solid rgba(255,255,255,0.25);box-shadow:0 2px 6px rgba(0,0,0,0.4)';
  // 적의 NPC 난이도 티어 배지
  var _enTierBadge='';
  if(opp&&opp.aiDifficulty!=null){
    var _enTierIcon=getNpcDifficultyIcon(opp.aiDifficulty);
    if(_enTierIcon){
      _enTierBadge='<img src="'+_enTierIcon+'" style="width:24px;height:24px;vertical-align:middle;margin-right:6px;object-fit:contain;filter:drop-shadow(0 1px 2px rgba(0,0,0,0.6))" onerror="this.style.display=\'none\'">';
    }
  }
  // 플레이어 본인 티어 배지 (window._babgPlayerRank 기반)
  var _myTierBadge='';
  if(window._babgPlayerRank){
    var _myTierInfo=rankTierInfo(window._babgPlayerRank);
    if(_myTierInfo&&_myTierInfo.icon){
      _myTierBadge='<img src="'+_myTierInfo.icon+'" style="width:24px;height:24px;vertical-align:middle;margin-right:6px;object-fit:contain;filter:drop-shadow(0 1px 2px rgba(0,0,0,0.6))" onerror="this.style.display=\'none\'">';
    }
  }
  document.getElementById('enemy-label').innerHTML='<img src="'+_enIcon+'" style="'+_iconStyle+'" onerror="this.style.display=\'none\'">'+_enTierBadge+opp.name+' (스케쥴 '+(opp.tier||1)+')';
  document.getElementById('ally-label').innerHTML='<img src="'+_myIcon+'" style="'+_iconStyle+'" onerror="this.style.display=\'none\'">'+_myTierBadge+_myName+' (스케쥴 '+_myTier+')';
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
      playSfx('soc_trigger',0.3);
      // 광역 데미지 감지 (히비키/아즈사/열차포 등) → AoE 효과음
      var hasAoeDmg=false;
      if(step.log){for(var _l=0;_l<step.log.length;_l++){var _t=step.log[_l].text||'';if(_t.indexOf('적 전체')!==-1||_t.indexOf('광역 데미지')!==-1||_t.indexOf('디버프로 쓰러')!==-1){hasAoeDmg=true;break;}}}
      if(hasAoeDmg) setTimeout(function(){playSfx('aoe_damage',0.4);},200);
      // 사망 감지 → 히어로 폭발
      ['a','b'].forEach(function(side){for(var i=0;i<currSnap[side].length;i++){var prev2=prevSnap[side]&&prevSnap[side][i];var curr2=currSnap[side][i];if(prev2&&prev2.alive&&curr2&&!curr2.alive){playSfx('aoe_damage',0.3);break;}}});
      // 스탯 변화 감지 → 반짝 이펙트
      applySocEffects(prevSnap,currSnap);
      // 기습 부여 감지 → 은신음
      ['a','b'].forEach(function(side){for(var i=0;i<currSnap[side].length;i++){var prev=prevSnap[side]&&prevSnap[side][i];var curr=currSnap[side][i];if(curr&&curr.kw&&curr.kw.indexOf('ambush')!==-1&&(!prev||!prev.kw||prev.kw.indexOf('ambush')===-1))playSfx('stealth_on',0.3);}});
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
    // 말쿠트 선언 스텝: 소환 로그만 표시하고 넘어감
    var isMalkuthDecl=prevSnap[step.atkSide]&&prevSnap[step.atkSide][step.atkIdx]&&prevSnap[step.atkSide][step.atkIdx].baseId==='millennium_malkuth';
    if(isMalkuthDecl&&step.log&&step.log.some(function(l){return(l.text||'').indexOf('스위퍼 소환')!==-1;})){
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
      var atkSnap=prevSnap[step.atkSide]&&prevSnap[step.atkSide][step.atkIdx];
      if(atkSnap&&atkSnap.kw&&atkSnap.kw.indexOf('ambush')!==-1&&!atkSnap._hasAttacked) playSfx('backstab',0.4);
      else playSfx('attack_launch',0.3);
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
          // Phase 3: 임팩트! 플래시 + 넉백 + 데미지 (500ms)
          var atkSnap2=prevSnap[step.atkSide]&&prevSnap[step.atkSide][step.atkIdx];
          // 자폭 전용
          if(atkSnap2&&atkSnap2.kw&&atkSnap2.kw.indexOf('selfdestruct')!==-1){playSfx('selfdestruct',0.5);}
          // 연사 전용
          else if(atkSnap2&&atkSnap2.kw&&atkSnap2.kw.indexOf('windfury')!==-1){playSfx('windfury_hit',0.4);}
          // 공격력 기반 충돌음
          else{
            var atkVal=atkSnap2?atkSnap2.atk:5;
            if(atkVal>=11) playSfx('attack_impact_large',0.5);
            else if(atkVal>=6) playSfx('attack_impact_mid',0.4);
            else playSfx('attack_impact',0.4);
          }
          // 독사굴 추가음
          if(atkSnap2&&atkSnap2.kw&&atkSnap2.kw.indexOf('poison')!==-1) playSfx('poison',0.4);
          // 광역 0.3초 후
          if(atkSnap2&&atkSnap2.kw&&atkSnap2.kw.indexOf('cleave')!==-1) setTimeout(function(){playSfx('cleave',0.3);},300);
          // 관통 0.3초 후
          if(atkSnap2&&atkSnap2.kw&&atkSnap2.kw.indexOf('pierce')!==-1){
            setTimeout(function(){playSfx('pierce',0.3);},300);
          }
          // 뒤끝 등 광역 데미지 로그 감지 (아즈사 등)
          if(step.log){for(var _al=0;_al<step.log.length;_al++){var _at=step.log[_al].text||'';if(_at.indexOf('적 전체')!==-1){setTimeout(function(){playSfx('aoe_damage',0.4);},300);break;}}}
          // 커스텀 audio 플래그 감지 (키키 뒤끝 → 검은 군주 소환음 등)
          if(step.log){for(var _cl=0;_cl<step.log.length;_cl++){var _le=step.log[_cl];if(_le&&_le.audio==='black_lord'){setTimeout(function(){try{var snd=new Audio('audio/black_lord.mp3');snd.volume=0.7;snd.play();}catch(e){}},300);break;}}}
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
  // 하루카 빠직 이펙트
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

function spawnPajdik(parentEl){
  var el=document.createElement('div');
  el.className='pajdik-text';
  el.textContent='빠직!';
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
  if(eliminated){playSfx('hero_explode',0.6);shakeScreen('heavy');playEliminationEffect(_showResult);}
  else{_showResult();}
}

function miniCardHtml(m){
  var cls='minicard'+(m.isSkin?' skin':'')+(hasKw(m,'ambush')&&!m._hasAttacked?' ambush':'')+(hasKw(m,'taunt')?' has-taunt':'');
  var shieldOrb=hasKw(m,'shield')?'<div class="shield-orb"></div>':'';
  var bgTag=m.img?'<div class="mini-bg"><img src="img/'+m.img+'" onerror="this.parentElement.style.display=\'none\'">'+shieldOrb+'</div>':'';
  var baseAttr=' data-base-id="'+(m.baseId||'')+'" data-mini-atk="'+m.atk+'" data-mini-hp="'+m.hp+'" data-mini-kw="'+(m.kw||[]).join(',')+'" data-mini-name="'+m.name+'" data-mini-img="'+(m.img||'')+'" data-mini-golden="'+(m.isSkin?'1':'')+'"';
  var kwHtml='';
  if(m.stripped){
    kwHtml='<div class="keywords" style="color:#666;text-decoration:line-through">'+kwText(m)+'<span class="stripped-x">✕</span></div>';
  } else if(kwText(m)){
    kwHtml='<div class="keywords">'+kwText(m)+'</div>';
  }
  var sLogoTag=getCardSchoolIconHtml(m);
  // 미니카드 능력 태그
  var miniAbilTag='';
  var bid=m.baseId||'';
  if(BC_IDS[bid]) miniAbilTag+='<span class="ability-tag bc" style="font-size:8px;padding:0 3px">첫인사</span>';
  if(DR_IDS[bid]) miniAbilTag+='<span class="ability-tag dr" style="font-size:8px;padding:0 3px">뒤끝</span>';
  var SKIN_ONLY_SOC={iori:1,hanako:1,pina:1,kasumi:1};
  if(SOC_IDS[bid]&&!(SKIN_ONLY_SOC[bid]&&!m.isSkin)) miniAbilTag+='<span class="ability-tag soc" style="font-size:8px;padding:0 3px">개전</span>';
  if((SURV_IDS[bid]&&!(bid==='kirino'&&!m.isSkin))||(m.kw&&m.kw.indexOf('survive')!==-1)) miniAbilTag+='<span class="ability-tag" style="font-size:8px;padding:0 3px;background:rgba(16,185,129,0.2);color:#6ee7b7;border:1px solid rgba(16,185,129,0.4)">버티기</span>';
  if(PASSIVE_IDS[bid]) miniAbilTag+='<span class="ability-tag" style="font-size:8px;padding:0 3px;background:rgba(168,85,247,0.2);color:#c084fc;border:1px solid rgba(168,85,247,0.4)">패시브</span>';
  if(PRE_IDS[bid]||(m.kw&&m.kw.indexOf('preemptive')!==-1)) miniAbilTag+='<span class="ability-tag" style="font-size:8px;padding:0 3px;background:rgba(251,191,36,0.2);color:#fbbf24;border:1px solid rgba(251,191,36,0.4)">선빵</span>';
  var miniAbilHtml=miniAbilTag?'<div style="text-align:center;background:rgba(0,0,0,0.4);padding:0 2px">'+miniAbilTag+'</div>':'';
  // 전투 중 카운터 표시
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
  if((SURV_IDS[bid]&&!(bid==='kirino'&&!m.isSkin))||(m.kw&&m.kw.indexOf('survive')!==-1)) mIconBar+='<span class="abi">'+SVG_ICONS.SURV+'</span>';
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
  // 아리스&케이 변환 연출 (영입 페이즈 진입 직후)
  if(G._pendingArisuKeiEntrance){
    delete G._pendingArisuKeiEntrance;
    try{var _akSnd=new Audio('audio/arisu_kei.mp3');_akSnd.volume=0.6;_akSnd.play();
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
  // 모모카 보너스로 보장하되 감시망 등으로 누적된 무료 리롤은 보존
  G.freeRerolls=Math.max(G.freeRerolls||0, getMomokaFreeRerolls());
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
  saveGame(); // 매 턴 자동 저장
}

// ===== 진행도 저장/복원 =====
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
          aiDifficulty:(p.aiDifficulty!=null?p.aiDifficulty:null),
          buildPlanId:(p._buildPlan&&p._buildPlan.id)||null,
          aiFrozen:p._aiFrozen||false,
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
      matchups:G.matchups||{},lastMatchups:G.lastMatchups||{},_matchupsTurn:G._matchupsTurn||0,
      aiDifficulty:G.aiDifficulty,
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
      aiDifficulty:(p.aiDifficulty!=null?p.aiDifficulty:null),
      _buildPlan:(function(){if(!p.buildPlanId)return null;for(var _bp=0;_bp<BUILD_PLANS.length;_bp++)if(BUILD_PLANS[_bp].id===p.buildPlanId)return BUILD_PLANS[_bp];return null;})(),
      _aiFrozen:p.aiFrozen||false,
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
    _shirokoTerrorAbsorbed:save._shirokoTerrorAbsorbed||[],
    matchups:save.matchups||{},lastMatchups:save.lastMatchups||{},_matchupsTurn:save._matchupsTurn||0,
    aiDifficulty:(save.aiDifficulty!=null?save.aiDifficulty:_calcAiDifficulty(window._babgPlayerRank))};
  rollShop();
}

// ===== 퀘스트 시스템 =====
var REPEAT_QUESTS = [
  {id:'repeat_play1', name:'게임 1판 하기 (반복)', target:1, points:2, repeatable:true}
];
var DAILY_QUESTS = [
  {id:'play3', name:'게임 3판 하기', target:3, points:5},
  {id:'win1', name:'1등 1판 하기', target:1, points:5},
  {id:'trinity10', name:'트리니티 학생 10번 영입하기', target:10, points:5},
  {id:'gehenna10', name:'게헨나 학생 10번 영입하기', target:10, points:5},
  {id:'hyakkiyako10', name:'백귀야행 학생 10번 영입하기', target:10, points:5},
  {id:'millennium10', name:'밀레니엄 학생 10번 영입하기', target:10, points:5},
  {id:'kill10', name:'학생 10명 쓰러뜨리기', target:10, points:5},
  {id:'skin3', name:'영입으로 스킨 3회 갈아입히기', target:3, points:5},
  {id:'discover3', name:'발견! 3회 하기', target:3, points:5}
];
var WEEKLY_QUESTS = [
  {id:'win3', name:'1등 3판 하기', target:3, points:10},
  {id:'play10', name:'게임 10판 하기', target:10, points:10},
  {id:'discover10', name:'발견! 10회 하기', target:10, points:10},
  {id:'skin10', name:'영입으로 스킨 10회 갈아입히기', target:10, points:10},
  {id:'hidden1', name:'7성 카드 완성하기', target:1, points:10},
  {id:'hidden_win', name:'7성 카드가 생존한 채 1등하기', target:1, points:10}
];

window._questTracker = {
  recruits: {'트리니티':0, '게헨나':0, '백귀야행':0, '밀레니엄':0},
  kills: 0,
  discovers: 0,
  skins: 0,
  hiddenCompleted: false,
  hiddenSurvived: false
};

function resetQuestTracker() {
  window._questTracker = {
    recruits: {'트리니티':0, '게헨나':0, '백귀야행':0, '밀레니엄':0},
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
  // 유효성 검증: 현재 정의에 없는 퀘스트가 있으면 강제 갱신
  var dailyIds={};for(var _qi=0;_qi<DAILY_QUESTS.length;_qi++)dailyIds[DAILY_QUESTS[_qi].id]=true;
  var weeklyIds={};for(var _qi=0;_qi<WEEKLY_QUESTS.length;_qi++)weeklyIds[WEEKLY_QUESTS[_qi].id]=true;
  var dailyValid=true;if(qs.daily.quests){for(var _qi=0;_qi<qs.daily.quests.length;_qi++){if(!dailyIds[qs.daily.quests[_qi].id]){dailyValid=false;break;}}}
  var weeklyValid=true;if(qs.weekly.quests){for(var _qi=0;_qi<qs.weekly.quests.length;_qi++){if(!weeklyIds[qs.weekly.quests[_qi].id]){weeklyValid=false;break;}}}
  if(!dailyValid) qs.daily.date='';
  if(!weeklyValid) qs.weekly.weekStart='';
  // 일일 퀘스트 갱신
  if (qs.daily.date !== today) {
    var picked = pickRandom(DAILY_QUESTS, 3);
    qs.daily = {
      date: today,
      quests: picked.map(function(q) { return {id: q.id, progress: 0, completed: false}; }),
      rerolled: false
    };
  }
  // 주간 퀘스트 갱신
  if (qs.weekly.weekStart !== monday) {
    var wpicked = pickRandom(WEEKLY_QUESTS, 3);
    qs.weekly = {
      weekStart: monday,
      quests: wpicked.map(function(q) { return {id: q.id, progress: 0, completed: false}; })
    };
  }
  // 반복 퀘스트 (항상 존재, 완료 시 리셋, ID 변경 시 재생성)
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

  // 퀘스트 정의 맵 만들기
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

      // 진행도 업데이트
      if (q.id === 'repeat_play1') {
        q.progress += 1;
      } else if (q.id === 'play3' || q.id === 'play10') {
        q.progress += 1;
      } else if (q.id === 'win1' || q.id === 'win3') {
        if (placement === 1) q.progress += 1;
      } else if (q.id === 'trinity10') {
        q.progress += tracker.recruits['트리니티'] || 0;
      } else if (q.id === 'gehenna10') {
        q.progress += tracker.recruits['게헨나'] || 0;
      } else if (q.id === 'hyakkiyako10') {
        q.progress += tracker.recruits['백귀야행'] || 0;
      } else if (q.id === 'millennium10') {
        q.progress += tracker.recruits['밀레니엄'] || 0;
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
      // login, login3은 submitGameRecord에서 처리하지 않음 (checkLoginQuest에서 처리)

      // 완료 체크
      if (q.progress >= def.target && !q.completed) {
        q.completed = true;
        playerData.points += def.points;
      }
    }
  }

  updateList(qs.daily.quests);
  updateList(qs.weekly.quests);
  // 반복 퀘스트: 완료 시 progress 리셋
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
    // 이미 오늘 로그인 처리했는지 체크
    if (pd.questState._lastLoginDate === today) return;
    pd.questState._lastLoginDate = today;

    // 일일 login 퀘스트 진행
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
      if (e) console.log('로그인 퀘스트 저장 실패:', e);
      else console.log('로그인 퀘스트 처리 완료');
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
    if (qs.daily.rerolled) { console.log('오늘 이미 리롤함'); return; }
    if (questIndex < 0 || questIndex >= qs.daily.quests.length) return;
    if (qs.daily.quests[questIndex].completed) return;

    // 현재 활성 퀘스트 ID 목록
    var activeIds = {};
    for (var i = 0; i < qs.daily.quests.length; i++) activeIds[qs.daily.quests[i].id] = true;
    // 대체 가능한 퀘스트 필터
    var candidates = DAILY_QUESTS.filter(function(q) { return !activeIds[q.id]; });
    if (candidates.length === 0) return;
    var newQuest = candidates[Math.floor(Math.random() * candidates.length)];
    qs.daily.quests[questIndex] = {id: newQuest.id, progress: 0, completed: false};
    qs.daily.rerolled = true;

    data.players[name] = pd;
    saveRecords(data, sha, function(e) {
      if (e) console.log('리롤 저장 실패:', e);
      else console.log('퀘스트 리롤 완료');
    });
  });
}

// ===== 전적 기록 시스템 (Worker Proxy) =====
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

// ===== 티어/등급 시스템 (하스스톤 전장 스타일) =====
// rank = {tier:9~1 또는 0(전설), stars:현재 별, streak:연승, legendPoints:전설 점수}
// 9~6등급: 3별마다 승급, 5~1등급: 5별마다 승급
// 1등=승리, 1연승=+1, 2연승=+2, 3연승+=+3
// 5등급 이하(전설 포함)에서 비1등 = -1별 (또는 전설 -1점)

function rankStarsRequired(tier){
  if(tier===0) return 999; // 플래티넘 1 (구 전설)은 승급 없음 (점수 누적)
  return 3; // 모든 등급 3별로 통일
}
function rankCanDemote(tier){
  // 골드 3(tier 4) 이상에서만 강등 가능
  return tier<=4;
}
function defaultRank(){
  return {tier:9, stars:0, streak:0, legendPoints:0};
}
function applyRankChange(rank, placement){
  if(!rank) rank = defaultRank();
  if(typeof rank.tier!=='number') rank.tier=9;
  if(typeof rank.stars!=='number') rank.stars=0;
  if(typeof rank.streak!=='number') rank.streak=0;
  if(typeof rank.legendPoints!=='number') rank.legendPoints=0;
  var prev={tier:rank.tier, stars:rank.stars, streak:rank.streak, legendPoints:rank.legendPoints};
  var isWin = (placement === 1);
  var delta = {promoted:false, demoted:false, starsGained:0, starsLost:0, legendPointsGained:0, legendPointsLost:0, gain:0};

  if(isWin){
    var newStreak = (rank.streak||0) + 1;
    var gain;
    if(rank.tier===0) gain = 1; // 전설은 연승 보너스 없음
    else if(newStreak===1) gain = 1;
    else if(newStreak===2) gain = 2;
    else gain = 3;
    rank.streak = newStreak;
    delta.gain = gain;

    if(rank.tier===0){
      rank.legendPoints = (rank.legendPoints||0) + gain;
      delta.legendPointsGained = gain;
    } else {
      rank.stars += gain;
      delta.starsGained = gain;
      // 승급 처리 (한 번에 여러 단계 가능)
      while(rank.tier>0 && rank.stars >= rankStarsRequired(rank.tier)){
        rank.stars -= rankStarsRequired(rank.tier);
        rank.tier -= 1;
        delta.promoted = true;
        if(rank.tier===0){
          // 전설 진입
          rank.stars = 0;
          break;
        }
      }
    }
  } else {
    rank.streak = 0;
    // 강등 규칙:
    // - 실버 1 이하 (tier>=5): 강등 없음
    // - 골드 3~1 (tier 4~2): 5위 이하만 -1별, 골드 3 이하로 안 떨어짐
    // - 플래티넘 2 (tier 1): 비1등이면 -1별, 골드 1로 강등 가능
    // - 플래티넘 1 (tier 0): 비1등이면 -1pt, 0pt 아래면 플래티넘 2로 강등
    if(rank.tier===0){
      // 플래티넘 1: 비1등이면 -1pt
      rank.legendPoints = (rank.legendPoints||0) - 1;
      delta.legendPointsLost = 1;
      if(rank.legendPoints < 0){
        rank.legendPoints = 0;
        rank.tier = 1; // 플래티넘 2로 강등
        rank.stars = Math.max(0, rankStarsRequired(1)-1); // 2/3
        delta.demoted = true;
      }
    } else if(rank.tier===1){
      // 플래티넘 2: 비1등이면 -1별, 별 음수면 골드 1로 강등
      rank.stars -= 1;
      delta.starsLost = 1;
      if(rank.stars < 0){
        rank.tier = 2; // 골드 1로 강등
        rank.stars = Math.max(0, rankStarsRequired(2)-1); // 2/3
        delta.demoted = true;
      }
    } else if(rank.tier<=4 && placement>=5){
      // 골드 3~1: 5위 이하만 -1별
      rank.stars -= 1;
      delta.starsLost = 1;
      if(rank.stars < 0){
        if(rank.tier < 4){
          // 골드 1, 골드 2 → 한 단계 아래로
          rank.tier += 1;
          rank.stars = Math.max(0, rankStarsRequired(rank.tier)-1); // 2/3
          delta.demoted = true;
        } else {
          // 골드 3 (tier 4): 골드 3 이하로 강등 안 함, 별 0 유지
          rank.stars = 0;
          delta.starsLost = 0;
        }
      }
    }
    // 그 외 (실버 1 이하): 별 변동 없음
  }

  return {rank:rank, prev:prev, delta:delta, placement:placement};
}
// 내부 tier(0~9) → 신규 티어/숫자 표기 매핑
// 9=브론즈2, 8=브론즈1, 7=실버3, 6=실버2, 5=실버1, 4=골드3, 3=골드2, 2=골드1, 1=플래티넘2, 0=플래티넘1
var RANK_TIER_MAP={
  9:{tierName:'브론즈',num:2,icon:'img/UI/bronze.png',color:'#a97142'},
  8:{tierName:'브론즈',num:1,icon:'img/UI/bronze.png',color:'#a97142'},
  7:{tierName:'실버',  num:3,icon:'img/UI/silver.png', color:'#c0c0c0'},
  6:{tierName:'실버',  num:2,icon:'img/UI/silver.png', color:'#c0c0c0'},
  5:{tierName:'실버',  num:1,icon:'img/UI/silver.png', color:'#c0c0c0'},
  4:{tierName:'골드',  num:3,icon:'img/UI/gold.png',   color:'#fbbf24'},
  3:{tierName:'골드',  num:2,icon:'img/UI/gold.png',   color:'#fbbf24'},
  2:{tierName:'골드',  num:1,icon:'img/UI/gold.png',   color:'#fbbf24'},
  1:{tierName:'플래티넘',num:2,icon:'img/UI/platinum.png',color:'#22d3ee'},
  0:{tierName:'플래티넘',num:1,icon:'img/UI/platinum.png',color:'#22d3ee'}
};
function rankTierInfo(rank){
  if(!rank) return RANK_TIER_MAP[9];
  return RANK_TIER_MAP[rank.tier]||RANK_TIER_MAP[9];
}
// 등급 위치 별 [채움, 최대] — 그 등급 안에서의 단계 시각화 (낮은 숫자 = 위 단계 = 별 많음)
function rankPositionStars(tier){
  if(tier===9) return [1,2];   // 브론즈 2 (낮음)
  if(tier===8) return [2,2];   // 브론즈 1 (위)
  if(tier===7) return [1,3];   // 실버 3 (낮음)
  if(tier===6) return [2,3];   // 실버 2
  if(tier===5) return [3,3];   // 실버 1 (위)
  if(tier===4) return [1,3];   // 골드 3 (낮음)
  if(tier===3) return [2,3];   // 골드 2
  if(tier===2) return [3,3];   // 골드 1 (위)
  if(tier===1) return [1,2];   // 플래티넘 2 (낮음)
  if(tier===0) return [2,2];   // 플래티넘 1 (위)
  return [0,3];
}
function rankLabel(rank){
  if(!rank) return '브론즈 2';
  var info=rankTierInfo(rank);
  if(rank.tier===0&&rank.legendPoints) return info.tierName+' '+info.num+' (+'+rank.legendPoints+'pt)';
  return info.tierName+' '+info.num;
}
function rankColor(rank){
  return rankTierInfo(rank).color;
}
function rankIconUrl(rank){
  return rankTierInfo(rank).icon;
}
function estimateRankFromRecords(records){
  var rank = defaultRank();
  if(!records || !records.length) return rank;
  // 기록은 chronological 순서 (records.push) — 날짜 정렬로 안전 보장
  var sorted = records.slice().sort(function(a,b){
    var ad=a.date||'', bd=b.date||'';
    if(ad<bd) return -1; if(ad>bd) return 1; return 0;
  });
  for(var i=0;i<sorted.length;i++){
    var r = sorted[i];
    if(!r.placement) continue;
    applyRankChange(rank, r.placement);
  }
  return rank;
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
  var tracker = window._questTracker || {recruits:{'트리니티':0,'게헨나':0,'백귀야행':0,'밀레니엄':0},kills:0,discovers:0,skins:0,hiddenCompleted:false,hiddenSurvived:false};
  var placement = G.placement;
  // 등급 변동 결과는 _lastRankChange에 저장 (showGameOver에서 폴링)
  window._lastRankChange = null;
  // race condition 대비: 빠르게 여러 게임 돌릴 때 sha 충돌 시 충분히 retry
  var _retryCount=0;
  var MAX_RETRIES=8;
  var _alreadyApplied=false;
  function _doSubmit(){
    fetchRecords(function(err,data,sha){
      if(err||!data){
        console.log('[submit] fetch 실패:',err,'재시도',_retryCount+1,'/',MAX_RETRIES);
        if(_retryCount<MAX_RETRIES){_retryCount++;setTimeout(_doSubmit,1500+_retryCount*500);}
        return;
      }
      if(!data.players)data.players={};
      var name=login.name;
      if(!data.players[name]){
        data.players[name]={records:[],points:0,questState:null};
      }
      // 등급 초기화/추정 (rank 없으면 기존 기록으로 추정)
      if(!data.players[name].rank){
        data.players[name].rank = estimateRankFromRecords(data.players[name].records||[]);
      }
      data.players[name].records.push(record);
      // 최근 10전만 유지
      if(data.players[name].records.length>10) data.players[name].records=data.players[name].records.slice(-10);
      // 등급 변동 적용 (이미 적용됐으면 다시 적용 X — 같은 게임 두 번 카운트 방지)
      if(!_alreadyApplied){
        var changeResult = applyRankChange(data.players[name].rank, placement);
        data.players[name].rank = changeResult.rank;
        window._lastRankChange = changeResult;
        _alreadyApplied=true;
      }
      // 퀘스트 진행도 업데이트
      data.players[name] = initQuestState(data.players[name]);
      data.players[name] = updateQuestProgress(data.players[name], tracker, placement);
      saveRecords(data,sha,function(e){
        if(e){
          console.log('[submit] save 실패 (sha 충돌 가능):',e,'재시도',_retryCount+1,'/',MAX_RETRIES);
          if(_retryCount<MAX_RETRIES){_retryCount++;setTimeout(_doSubmit,1500+_retryCount*500);}
          else console.log('[submit] 최대 재시도 횟수 초과 — 이번 게임 기록 누락');
        }
        else console.log('[submit] 기록 저장 완료 (퀘스트+등급 포함)');
      });
    });
  }
  _doSubmit();
}

function _renderRecordCard(r,showPin,pinIdx){
  var placeColor=r.placement===1?'#ffd700':r.placement<=3?'#60a5fa':'#c0d0e0';
  var h='<div style="margin-bottom:12px;padding:8px;background:rgba(0,0,0,0.2);border-radius:6px;border-left:3px solid '+placeColor+'">';
  h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">';
  if(showPin) h+='<label style="cursor:pointer;display:flex;align-items:center;gap:4px"><input type="checkbox" class="pin-check" data-pin-idx="'+pinIdx+'" '+(r.pinned?'checked':'')+' style="cursor:pointer"><span style="font-size:10px;color:#6a8a9e">공개</span></label>';
  h+='<span style="color:'+placeColor+';font-weight:900;font-size:18px">'+r.placement+'등</span>';
  h+='<span style="color:#6a8a9e;font-size:11px">'+r.date.slice(0,16).replace('T',' ')+' | 턴 '+r.turn+' | 스케쥴 '+r.tier+'</span>';
  h+='</div>';
  h+='<div style="display:flex;gap:8px;flex-wrap:wrap">';
  var board=r.board||[];
  for(var j=0;j<board.length;j++){
    var u=board[j];
    if(typeof u==='string'){
      h+='<div style="background:#1e2d3d;border:2px solid #3a5a6e;border-radius:4px;padding:4px 8px;font-size:11px;color:#c0d0e0">'+u+'</div>';
    } else {
      // 미해금 카드는 히든 표시
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
  el.innerHTML='로딩 중...';
  fetchRecords(function(err,data,sha){
    if(err||!data){el.innerHTML='기록을 불러올 수 없습니다.';return;}
    _recData=data;_recSha=sha;
    if(!data.players||Object.keys(data.players).length===0){el.innerHTML='아직 기록이 없습니다.';return;}
    var html='';
    var myName=window._babgLogin?window._babgLogin.name:null;
    // 내 기록
    if(myName&&data.players[myName]){
      var p=data.players[myName];
      var recs=p.records||[];
      // 4등 이상을 '승'으로 집계, 1등 횟수 별도 표기
      var wins=recs.filter(function(r){return r.placement&&r.placement<=4;}).length;
      var firsts=recs.filter(function(r){return r.placement===1;}).length;
      // 등급 (없으면 추정)
      var myRank = p.rank || estimateRankFromRecords(recs);
      var myRankColor = rankColor(myRank);
      var myRankInfo = rankTierInfo(myRank);
      var streakText = (myRank.streak>=2)?(' <span style="color:#fb923c;font-size:11px">🔥'+myRank.streak+'연승</span>'):'';
      var rankIconHtml='<img src="'+myRankInfo.icon+'" style="width:22px;height:22px;vertical-align:middle;object-fit:contain;margin-right:4px" onerror="this.style.display=\'none\'">';
      // 등급 위치 별 (★★☆)
      var posStars=rankPositionStars(myRank.tier);
      var posStarsViz='<span style="font-size:13px;letter-spacing:1.5px;color:'+myRankColor+';margin-left:6px">';
      for(var _ps=0;_ps<posStars[1];_ps++) posStarsViz+= _ps<posStars[0]?'★':'☆';
      posStarsViz+='</span>';
      // 진행도 (다음 등급까지)
      var progressText='';
      if(myRank.tier===0){
        if(myRank.legendPoints) progressText='<span style="font-size:11px;color:'+myRankColor+';margin-left:6px;opacity:0.85">+'+myRank.legendPoints+'pt</span>';
      } else {
        progressText='<span style="font-size:11px;color:#94a3b8;margin-left:6px">('+myRank.stars+'/'+rankStarsRequired(myRank.tier)+' 다음까지)</span>';
      }
      html+='<div style="margin-bottom:20px;padding:12px;background:rgba(255,255,255,0.05);border-radius:8px;border:1px solid #3a5a6e">';
      html+='<div style="font-size:16px;font-weight:700;color:#ffd700;margin-bottom:4px">'+myName+' <span style="font-size:12px;color:#6a8a9e">('+recs.length+'전 '+wins+'승 · 1등 '+firsts+'회)</span></div>';
      html+='<div style="margin-bottom:8px;display:inline-flex;align-items:center;padding:4px 10px;background:rgba(0,0,0,0.3);border-radius:6px;border:1px solid '+myRankColor+'">'+rankIconHtml+'<span style="color:'+myRankColor+';font-weight:800;font-size:14px">'+myRankInfo.tierName+' '+myRankInfo.num+'</span>'+posStarsViz+progressText+streakText+'</div>';
      html+='<div style="font-size:10px;color:#6a8a9e;margin-bottom:12px">체크하면 다른 선생님들에게 공개됩니다</div>';
      if(recs.length===0){html+='<div style="color:#6a8a9e">기록 없음</div>';}
      else{for(var i=recs.length-1;i>=0;i--) html+=_renderRecordCard(recs[i],true,i);}
      html+='</div>';
    }
    // 다른 선생님들의 공개 기록 (작성자 등급 포함)
    var otherPinned=[];
    for(var name in data.players){
      if(name===myName) continue;
      var recs2=data.players[name].records||[];
      var theirRank = data.players[name].rank || estimateRankFromRecords(recs2);
      for(var i=0;i<recs2.length;i++){
        if(recs2[i].pinned){
          var entry=recs2[i];
          entry._ownerName=name;
          entry._ownerRank=theirRank;
          otherPinned.push(entry);
        }
      }
    }
    if(otherPinned.length>0){
      // 셔플 후 최대 10개
      otherPinned.sort(function(){return Math.random()-0.5;});
      otherPinned=otherPinned.slice(0,10);
      html+='<div style="margin-top:24px;border-top:2px solid rgba(255,255,255,0.1);padding-top:16px">';
      html+='<div style="font-size:15px;font-weight:700;color:#a78bfa;margin-bottom:12px">다른 선생님들의 기록</div>';
      for(var i=0;i<otherPinned.length;i++) html+=_renderRecordCard(otherPinned[i],false,-1);
      html+='</div>';
    }
    el.innerHTML=html;
    // 핀 체크박스 이벤트
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
