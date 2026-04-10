// ========== GTS STOMPER CARD DATA ==========
// 블루아카 캐릭터 기반 GTS 스톰퍼 카드

var STOMPERS = [
  // ===== Tier 1 (기본급) =====
  // 공/방/포획/수호/기동/스태미나(max)/스킬슬롯(max)
  {id:'junko',   name:'준코',   school:'게헨나',  tier:1, atk:14, def:8,  cap:6,  grd:5,  mob:12, sta:3, slots:1, skill:{name:'자폭돌진', desc:'ATK+50%, 자신 행동불능', cost:2, type:'suicide_rush'}, img:'Junko.png'},
  {id:'midori',  name:'미도리', school:'밀레니엄',tier:1, atk:10, def:10, cap:8,  grd:8,  mob:10, sta:3, slots:1, skill:{name:'정밀사격', desc:'원거리 공격, 이동 없이 인접 존 타격', cost:1, type:'ranged_atk'}, img:'Midori.png'},
  {id:'mari',    name:'마리',   school:'트리니티',tier:1, atk:7,  def:13, cap:5,  grd:12, mob:8,  sta:3, slots:1, skill:{name:'철벽방어', desc:'이번 턴 DEF 2배', cost:1, type:'def_boost'}, img:'Mari.png'},
  {id:'reisa',   name:'레이사', school:'트리니티',tier:1, atk:9,  def:9,  cap:7,  grd:9,  mob:12, sta:4, slots:1, skill:{name:'기습이동', desc:'2존 즉시 이동', cost:1, type:'dash'}, img:'Reisa.png'},
  {id:'haruka',  name:'하루카', school:'게헨나',  tier:1, atk:12, def:7,  cap:9,  grd:5,  mob:13, sta:3, slots:1, skill:{name:'선제타격', desc:'전투 시 선공 보장', cost:1, type:'preemptive'}, img:'Haruka.png'},
  {id:'haine',   name:'하이네', school:'총학생회',tier:1, atk:10, def:10, cap:7,  grd:7,  mob:10, sta:4, slots:1, skill:{name:'지휘신호', desc:'인접 아군 ATK+20%', cost:1, type:'buff_atk'}, img:'Haine.png'},
  {id:'izuna',   name:'이즈나', school:'백귀야행',tier:1, atk:11, def:8,  cap:10, grd:5,  mob:14, sta:3, slots:1, skill:{name:'질풍추격', desc:'MOB+50% 1턴', cost:1, type:'mob_boost'}, img:'Izuna.png'},
  {id:'pina',    name:'피나',   school:'백귀야행',tier:1, atk:6,  def:14, cap:4,  grd:13, mob:7,  sta:3, slots:1, skill:{name:'육중한벽', desc:'러너 존 이동 봉쇄 1턴', cost:2, type:'zone_lock'}, img:'Pina.png'},
  {id:'koharu',  name:'코하루', school:'트리니티',tier:1, atk:8,  def:11, cap:5,  grd:11, mob:9,  sta:4, slots:1, skill:{name:'응급치료', desc:'아군 1인 행동불능 해제', cost:2, type:'revive'}, img:'Koharu.png'},
  {id:'kokona',  name:'코코나', school:'산해경',  tier:1, atk:9,  def:10, cap:8,  grd:8,  mob:11, sta:3, slots:1, skill:{name:'연막탄',   desc:'자기 존 전투 회피 1턴', cost:1, type:'smoke'}, img:'Kokona.png'},

  // ===== Tier 2 (유망주) =====
  {id:'toki',    name:'토키',   school:'밀레니엄',tier:2, atk:10, def:14, cap:6,  grd:14, mob:9,  sta:4, slots:2, skill:{name:'생존본능', desc:'행동불능 직전 1회 버팀 (HP 1 잔존)', cost:2, type:'survive'}, img:'Toki.png'},
  {id:'juri',    name:'주리',   school:'게헨나',  tier:2, atk:13, def:11, cap:10, grd:7,  mob:12, sta:4, slots:2, skill:{name:'연속공격', desc:'같은 턴 2회 공격', cost:2, type:'double_atk'}, img:'Juri.png'},
  {id:'chinatsu',name:'치나츠', school:'게헨나',  tier:2, atk:11, def:14, cap:7,  grd:10, mob:10, sta:5, slots:1, skill:{name:'도발',     desc:'적 1인을 자기 존으로 유인', cost:1, type:'taunt'}, img:'Chinatsu.png'},
  {id:'momoi',   name:'모모이', school:'밀레니엄',tier:2, atk:12, def:12, cap:8,  grd:10, mob:11, sta:4, slots:2, skill:{name:'방패진형', desc:'같은 존 아군 DEF+30%', cost:1, type:'def_aura'}, img:'Momoi.png'},
  {id:'kazusa',  name:'카즈사', school:'트리니티',tier:2, atk:16, def:9,  cap:12, grd:5,  mob:13, sta:4, slots:2, skill:{name:'관통사격', desc:'DEF 50% 무시 공격', cost:2, type:'pierce'}, img:'Kazusa.png'},
  {id:'mashiro', name:'마시로', school:'트리니티',tier:2, atk:15, def:10, cap:11, grd:6,  mob:11, sta:5, slots:1, skill:{name:'저격',     desc:'2존 거리 적 공격 (ATK 70%)', cost:2, type:'snipe'}, img:'Mashiro.png'},
  {id:'ibuki',   name:'이부키', school:'게헨나',  tier:2, atk:14, def:10, cap:9,  grd:7,  mob:12, sta:4, slots:2, skill:{name:'화염돌격', desc:'이동 후 ATK+30% 공격', cost:2, type:'charge_atk'}, img:'Ibuki.png'},
  {id:'mutsuki', name:'무츠키', school:'게헨나',  tier:2, atk:15, def:8,  cap:13, grd:4,  mob:14, sta:3, slots:2, skill:{name:'함정설치', desc:'존에 함정 (적 진입 시 ATK 판정)', cost:1, type:'trap'}, img:'Mutsuki.png'},
  {id:'yukari',  name:'유카리', school:'백귀야행',tier:2, atk:11, def:11, cap:9,  grd:9,  mob:13, sta:5, slots:2, skill:{name:'부활',     desc:'행동불능 시 1회 자동 부활', cost:3, type:'auto_revive'}, img:'Yukari.png'},
  {id:'tsukuyo', name:'츠쿠요', school:'백귀야행',tier:2, atk:13, def:10, cap:11, grd:7,  mob:12, sta:4, slots:2, skill:{name:'그림자베기',desc:'전투 승리 시 추가 이동 1존', cost:1, type:'pursuit'}, img:'Tsukuyo.png'},
  {id:'momoka',  name:'모모카', school:'총학생회',tier:2, atk:12, def:12, cap:8,  grd:9,  mob:11, sta:5, slots:1, skill:{name:'전술지원', desc:'아군 전체 MOB+2 이번 턴', cost:2, type:'team_mob'}, img:'Momoka.png'},
  {id:'ayane',   name:'아야네', school:'아비도스',tier:2, atk:10, def:15, cap:6,  grd:13, mob:9,  sta:5, slots:1, skill:{name:'결사수호', desc:'러너 존 GRD 2배 1턴', cost:2, type:'grd_boost'}, img:'Ayane.png'},
  {id:'shimiko', name:'시미코', school:'트리니티',tier:2, atk:12, def:13, cap:9,  grd:10, mob:10, sta:4, slots:2, skill:{name:'교란작전', desc:'적 1인 다음 턴 이동 불가', cost:2, type:'root'}, img:'Shimiko.png'},
  {id:'mina',    name:'미나',   school:'산해경',  tier:2, atk:9,  def:16, cap:5,  grd:14, mob:8,  sta:5, slots:1, skill:{name:'거점사수', desc:'이동 포기 시 DEF+50%', cost:1, type:'fortify'}, img:'Mina.png'},
  {id:'koyuki',  name:'코유키', school:'밀레니엄',tier:2, atk:11, def:11, cap:10, grd:8,  mob:12, sta:4, slots:2, skill:{name:'정보분석', desc:'적 배치 1턴 공개', cost:1, type:'reveal'}, img:'Koyuki.png'},

  // ===== Tier 3 (에이스급) =====
  {id:'yuuka',   name:'유우카', school:'밀레니엄',tier:3, atk:14, def:18, cap:8,  grd:16, mob:11, sta:6, slots:2, skill:{name:'방패돌진', desc:'이동+DEF 판정으로 적 밀어내기', cost:2, type:'shield_charge'}, img:'Yuuka.png'},
  {id:'hibiki',  name:'히비키', school:'밀레니엄',tier:3, atk:16, def:13, cap:12, grd:10, mob:13, sta:6, slots:2, skill:{name:'화력지원', desc:'아군이 있는 모든 존 ATK+15%', cost:3, type:'global_atk'}, img:'Hibiki.png'},
  {id:'ichika',  name:'이치카', school:'트리니티',tier:3, atk:18, def:11, cap:14, grd:7,  mob:15, sta:5, slots:2, skill:{name:'연쇄베기', desc:'같은 존 적 전원 공격', cost:3, type:'aoe'}, img:'Ichika.png'},
  {id:'hifumi',  name:'히후미', school:'트리니티',tier:3, atk:13, def:14, cap:10, grd:12, mob:12, sta:7, slots:2, skill:{name:'전술변경', desc:'아군 2인 위치 즉시 교환', cost:2, type:'swap_pos'}, img:'Hifumi.png'},
  {id:'iori',    name:'이오리', school:'게헨나',  tier:3, atk:19, def:10, cap:15, grd:5,  mob:14, sta:5, slots:2, skill:{name:'헤드샷',   desc:'CAP+100%, 이번 턴 포획 특화', cost:3, type:'cap_boost'}, img:'Iori.png'},
  {id:'iroha',   name:'이로하', school:'게헨나',  tier:3, atk:15, def:13, cap:12, grd:9,  mob:14, sta:6, slots:2, skill:{name:'페인트',   desc:'적 1인의 다음 행동 무효화', cost:2, type:'cancel'}, img:'Iroha.png'},
  {id:'eimi',    name:'에이미', school:'밀레니엄',tier:3, atk:13, def:17, cap:8,  grd:15, mob:11, sta:6, slots:2, skill:{name:'보호막',   desc:'아군 1인 다음 피격 무효', cost:3, type:'shield'}, img:'Eimi.png'},
  {id:'chiaki',  name:'치아키', school:'게헨나',  tier:3, atk:17, def:12, cap:13, grd:7,  mob:15, sta:5, slots:2, skill:{name:'기습습격', desc:'2존 이동 후 즉시 공격', cost:3, type:'blitz'}, img:'Chiaki.png'},
  {id:'mimori',  name:'미모리', school:'백귀야행',tier:3, atk:12, def:16, cap:9,  grd:15, mob:11, sta:6, slots:2, skill:{name:'결계',     desc:'러너 존 진입 CAP-30% 2턴', cost:3, type:'barrier'}, img:'Mimori.png'},
  {id:'renge',   name:'렌게',   school:'백귀야행',tier:3, atk:15, def:15, cap:11, grd:12, mob:13, sta:5, slots:2, skill:{name:'카운터',   desc:'피격 시 반격 (ATK 80%)', cost:2, type:'counter'}, img:'Renge.png'},
  {id:'serika',  name:'세리카', school:'아비도스',tier:3, atk:16, def:12, cap:13, grd:9,  mob:16, sta:5, slots:2, skill:{name:'전력질주', desc:'3존 이동 가능', cost:2, type:'sprint'}, img:'Serika.png'},
  {id:'akane',   name:'아카네', school:'밀레니엄',tier:3, atk:11, def:15, cap:7,  grd:16, mob:10, sta:7, slots:2, skill:{name:'긴급수리', desc:'아군 전원 행동불능 해제', cost:5, type:'mass_revive'}, img:'Akane.png'},
  {id:'reijo',   name:'레이죠', school:'산해경',  tier:3, atk:17, def:11, cap:14, grd:6,  mob:16, sta:5, slots:2, skill:{name:'일섬',     desc:'ATK+80% 단일 공격', cost:3, type:'power_strike'}, img:'Reijo.png'},

  // ===== Tier 4 (올스타) =====
  {id:'kayoko',  name:'카요코', school:'게헨나',  tier:4, atk:18, def:15, cap:14, grd:11, mob:15, sta:7, slots:3, skill:{name:'화력집중', desc:'3턴간 ATK+40%', cost:4, type:'atk_sustain'}, img:'Kayoko.png'},
  {id:'kasumi',  name:'카스미', school:'게헨나',  tier:4, atk:16, def:17, cap:12, grd:14, mob:13, sta:7, slots:3, skill:{name:'암살',     desc:'행동불능 적에게 CAP 판정 추가', cost:3, type:'execute'}, img:'Kasumi.png'},
  {id:'arisu',   name:'아리스', school:'밀레니엄',tier:4, atk:20, def:14, cap:16, grd:8,  mob:15, sta:6, slots:3, skill:{name:'블루아카', desc:'ATK+60% 단일 공격', cost:4, type:'mega_strike'}, img:'Arisu.png'},
  {id:'noa',     name:'노아',   school:'밀레니엄',tier:4, atk:15, def:16, cap:11, grd:15, mob:14, sta:8, slots:3, skill:{name:'전장분석', desc:'적 전원 위치 공개 + 아군 MOB+3', cost:3, type:'intel'}, img:'Noa.png'},
  {id:'azusa',   name:'아즈사', school:'트리니티',tier:4, atk:19, def:15, cap:15, grd:10, mob:16, sta:6, slots:3, skill:{name:'심판의 총',desc:'2존 거리 ATK 100% 공격', cost:4, type:'long_range'}, img:'Azusa.png'},
  {id:'hinata',  name:'히나타', school:'트리니티',tier:4, atk:16, def:16, cap:12, grd:14, mob:14, sta:7, slots:3, skill:{name:'축복',     desc:'아군 전원 GRD+30% 2턴', cost:4, type:'team_grd'}, img:'Hinata.png'},
  {id:'karin',   name:'카린',   school:'밀레니엄',tier:4, atk:20, def:12, cap:17, grd:6,  mob:17, sta:5, slots:3, skill:{name:'속사',     desc:'3회 연속 공격 (ATK 50%씩)', cost:4, type:'triple_shot'}, img:'Karin.png'},
  {id:'tsubaki', name:'츠바키', school:'백귀야행',tier:4, atk:14, def:20, cap:8,  grd:18, mob:12, sta:7, slots:3, skill:{name:'절대수호', desc:'러너 존 3턴 봉쇄 (적 진입불가)', cost:5, type:'fortress'}, img:'Tsubaki.png'},
  {id:'kikyou',  name:'키쿄',   school:'백귀야행',tier:4, atk:18, def:14, cap:15, grd:10, mob:17, sta:6, slots:3, skill:{name:'분신',     desc:'분신 생성 (ATK 50% 유닛 1턴)', cost:4, type:'clone'}, img:'Kikyou.png'},
  {id:'nonomi',  name:'노노미', school:'아비도스',tier:4, atk:17, def:15, cap:13, grd:13, mob:14, sta:7, slots:3, skill:{name:'집중포화', desc:'지정 존 전원 ATK 판정', cost:4, type:'barrage'}, img:'Nonomi.png'},
  {id:'saya',    name:'사야',   school:'산해경',  tier:4, atk:15, def:18, cap:10, grd:17, mob:13, sta:7, slots:3, skill:{name:'결계진',   desc:'러너 존 CAP 판정 -50% 3턴', cost:5, type:'grand_barrier'}, img:'Saya.png'},

  // ===== Tier 5 (챔피언급) =====
  {id:'aru',     name:'아루',   school:'게헨나',  tier:5, atk:22, def:16, cap:18, grd:10, mob:17, sta:8, slots:3, skill:{name:'문제해결부',desc:'적 최강 유닛 ATK+100% 타격', cost:6, type:'assassinate'}, img:'Aru.png'},
  {id:'sena',    name:'세나',   school:'게헨나',  tier:5, atk:24, def:13, cap:19, grd:7,  mob:18, sta:7, slots:3, skill:{name:'일격필살', desc:'ATK+120% + DEF 무시', cost:7, type:'one_shot'}, img:'Sena.png'},
  {id:'ako',     name:'아코',   school:'게헨나',  tier:5, atk:16, def:20, cap:12, grd:19, mob:14, sta:8, slots:3, skill:{name:'지휘관',   desc:'아군 전체 ATK/DEF +20% 3턴', cost:6, type:'commander'}, img:'Ako.png'},
  {id:'neru',    name:'네루',   school:'밀레니엄',tier:5, atk:18, def:22, cap:13, grd:20, mob:15, sta:8, slots:3, skill:{name:'불굴',     desc:'3턴간 행동불능 면역', cost:5, type:'unstoppable'}, img:'Neru.png'},
  {id:'utaha',   name:'우타하', school:'밀레니엄',tier:5, atk:20, def:17, cap:16, grd:14, mob:16, sta:8, slots:3, skill:{name:'전술천재', desc:'적 1인 스킬 사용 봉인 2턴', cost:4, type:'silence'}, img:'Utaha.png'},
  {id:'asuna',   name:'아스나', school:'밀레니엄',tier:5, atk:22, def:17, cap:17, grd:12, mob:17, sta:7, slots:3, skill:{name:'풀버스트', desc:'전 존 적 전원 ATK 70% 공격', cost:7, type:'full_burst'}, img:'Asuna.png'},
  {id:'ui',      name:'우이',   school:'트리니티',tier:5, atk:19, def:19, cap:15, grd:16, mob:16, sta:8, slots:3, skill:{name:'성스러운빛',desc:'아군 전원 행동불능 해제 + DEF+30%', cost:6, type:'holy_light'}, img:'Ui.png'},
  {id:'hasumi',  name:'하스미', school:'트리니티',tier:5, atk:21, def:16, cap:18, grd:11, mob:17, sta:7, slots:3, skill:{name:'정밀저격', desc:'3존 거리 ATK 100% + CAP 판정', cost:6, type:'ultra_snipe'}, img:'Hasumi.png'},
  {id:'shiroko', name:'시로코', school:'아비도스',tier:5, atk:22, def:15, cap:17, grd:12, mob:20, sta:7, slots:3, skill:{name:'은행강도', desc:'4존 이동 + 즉시 공격', cost:6, type:'bank_rush'}, img:'Shiroko.png'},
  {id:'shun',    name:'슌',     school:'산해경',  tier:5, atk:23, def:14, cap:19, grd:9,  mob:18, sta:7, slots:3, skill:{name:'저격왕',   desc:'맵 어디든 ATK 80% 공격', cost:6, type:'global_snipe'}, img:'Shun.png'},
  {id:'kaya',    name:'카야',   school:'총학생회',tier:5, atk:17, def:21, cap:13, grd:20, mob:14, sta:8, slots:3, skill:{name:'총력방어', desc:'아군 전원 DEF+40% + GRD+40% 2턴', cost:7, type:'total_def'}, img:'Kaya.png'},

  // ===== Tier 6 (레전드) =====
  {id:'hina',    name:'히나',   school:'게헨나',  tier:6, atk:26, def:18, cap:20, grd:12, mob:19, sta:9, slots:4, skill:{name:'초절화력', desc:'존 전체 ATK+150% 소멸 공격', cost:8, type:'annihilate'}, img:'Hina.png'},
  {id:'makoto',  name:'마코토', school:'게헨나',  tier:6, atk:22, def:22, cap:17, grd:17, mob:17, sta:9, slots:4, skill:{name:'풍기위원장',desc:'아군 전체 전 스탯 +25% 3턴', cost:7, type:'full_buff'}, img:'Makoto.png'},
  {id:'himari',  name:'히마리', school:'밀레니엄',tier:6, atk:20, def:20, cap:16, grd:18, mob:16, sta:10,slots:4, skill:{name:'세미나',   desc:'아군 전원 STA +2 회복', cost:5, type:'sta_restore'}, img:'Himari.png'},
  {id:'rio',     name:'리오',   school:'밀레니엄',tier:6, atk:18, def:24, cap:12, grd:22, mob:14, sta:9, slots:4, skill:{name:'요새화',   desc:'러너 존 5턴 완전봉쇄', cost:8, type:'impenetrable'}, img:'Rio.png'},
  {id:'sakurako',name:'사쿠라코',school:'트리니티',tier:6, atk:22, def:21, cap:17, grd:18, mob:17, sta:9, slots:4, skill:{name:'심판',     desc:'적 전원 DEF -40% 3턴', cost:7, type:'judgement'}, img:'Sakurako.png'},
  {id:'tsurugi', name:'츠루기', school:'트리니티',tier:6, atk:25, def:18, cap:20, grd:13, mob:19, sta:8, slots:4, skill:{name:'성검',     desc:'ATK+200% 단일 공격, 확정 행동불능', cost:8, type:'holy_blade'}, img:'Tsurugi.png'},
  {id:'mine',    name:'미네',   school:'트리니티',tier:6, atk:17, def:25, cap:10, grd:23, mob:13, sta:9, slots:4, skill:{name:'불멸',     desc:'5턴간 행동불능 완전 면역', cost:7, type:'immortal'}, img:'Mine.png'},
  {id:'nagusa',  name:'나구사', school:'백귀야행',tier:6, atk:20, def:22, cap:16, grd:20, mob:16, sta:9, slots:4, skill:{name:'야행군주', desc:'백귀야행 아군 전 스탯 +30%', cost:6, type:'faction_buff'}, img:'Nagusa.png'},
  {id:'wakamo',  name:'와카모', school:'백귀야행',tier:6, atk:25, def:16, cap:22, grd:10, mob:20, sta:8, slots:4, skill:{name:'집착',     desc:'적 러너 존으로 즉시 이동 + CAP+100%', cost:8, type:'obsession'}, img:'Wakamo.png'},
  {id:'lin',     name:'린',     school:'총학생회',tier:6, atk:23, def:23, cap:18, grd:18, mob:17, sta:10,slots:4, skill:{name:'총학생회령',desc:'필드 전체 아군 전 스탯 +20% 영구', cost:9, type:'president'}, img:'Lin.png'},
  {id:'hoshino', name:'호시노', school:'아비도스',tier:6, atk:19, def:25, cap:14, grd:24, mob:14, sta:9, slots:4, skill:{name:'대장의 등',desc:'러너 존 GRD 3배 + 행동불능 면역 3턴', cost:8, type:'captain_wall'}, img:'Hoshino.png'},
  {id:'rumi',    name:'루미',   school:'산해경',  tier:6, atk:22, def:20, cap:18, grd:16, mob:18, sta:9, slots:4, skill:{name:'용의 눈',  desc:'3턴간 모든 적 위치 공개 + CAP+30%', cost:6, type:'dragon_eye'}, img:'Rumi.png'},
  {id:'kisaki',  name:'키사키', school:'산해경',  tier:6, atk:20, def:24, cap:15, grd:22, mob:15, sta:9, slots:4, skill:{name:'절대영역', desc:'러너 주변 2존 적 전원 밀어내기', cost:7, type:'absolute_zone'}, img:'Kisaki.png'},
];

// 학교 시너지
var SCHOOL_SYNERGY = {
  '게헨나':   {name:'화력 집중',  desc:'전원 ATK/CAP +15%', minCount:3, stats:['atk','cap'], bonus:0.15},
  '밀레니엄': {name:'전술 우위',  desc:'전원 STA +1, 스킬 코스트 -1', minCount:3, special:'tech'},
  '트리니티': {name:'성스러운 방패',desc:'전원 DEF/GRD +15%', minCount:3, stats:['def','grd'], bonus:0.15},
  '백귀야행': {name:'야습',       desc:'전원 MOB +3, 선공권', minCount:3, special:'ambush'},
  '아비도스': {name:'불굴의 의지', desc:'행동불능 시 30% 확률 자동 부활', minCount:3, special:'tenacity'},
  '총학생회': {name:'총력전',     desc:'전 스탯 +8%', minCount:3, stats:['atk','def','cap','grd','mob'], bonus:0.08},
  '산해경':   {name:'간파',       desc:'적 스킬 발동 시 30% 확률 무효화', minCount:3, special:'nullify'},
};

// 티어별 드래프트 확률
var TIER_WEIGHTS = {1: 30, 2: 27, 3: 22, 4: 13, 5: 6, 6: 2};

// 특성 없이 스킬이 핵심이므로 trait 관련 제거
var TIER_NAMES = {1:'루키', 2:'레귤러', 3:'에이스', 4:'올스타', 5:'챔피언', 6:'레전드'};
var TIER_COLORS = {1:'#8a9a8a', 2:'#5a8a5a', 3:'#4a7abc', 4:'#8a5abc', 5:'#ca8a2a', 6:'#da3a3a'};

// AI 팀 이름
var AI_TEAM_NAMES = [
  '게헨나 크러셔즈', '밀레니엄 테크놀로지', '트리니티 가디언즈', '백귀야행 팬텀즈',
  '아비도스 서바이버즈', '총학생회 임페리얼', '산해경 드래곤즈', '발키리 스톰',
  '레드윈터 블리자드', 'SRT 스페셜', '아리우스 섀도우', '카이텐저 블레이드',
  '선샤인 레이즈', '난부 오리올스', '연합학원 올스타'
];
