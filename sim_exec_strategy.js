// 전략 매치 시뮬 (8명 NPC, 3가지 전략 분배)
// strategies: 7성 노림(seven_star), 효율 밸류(value), 단일 학교(single_school)
G={players:[],pool:{},turn:1,aliveCount:0,phase:'recruit',shop:[],
  hiddenCardsEverOwned:{},kuzunohaActive:false,permanentAbilityBan:false,
  battleSchoolBuff:{},millenniumTokenSummons:0,arisuDeathCount:0,
  keiseisenCounters:{},bonusStone:0,freeRerolls:0,
  shopExclusions:[],shopBuff:0,shopSchoolBuff:{},juriDeaths:0,
  valkyrieKills:0,valkyrieDeaths:0};
SIM_STATS={};SIM_RUNNING=false;SIM_EXPLORE=true;
SIM_STRATEGY_STATS={};

// 8명 분배: 각 전략 별도 NPC 수 (균형)
// seven_star: 3, value: 3, single_school: 2 → 총 8
var STRATEGIES = ['seven_star','seven_star','seven_star',
                  'value','value','value',
                  'single_school','single_school'];
var N=300;

process.stdout.write('[SIM] 전략 매치 '+N+'판 시작 (8명 NPC, 전설 난이도)\n');
process.stdout.write('  분배: 7성 노림 ×3, 효율 밸류 ×3, 단일 학교 ×2\n');

var st=Date.now();
for(var i=0;i<N;i++){
  try{runSimGameStrategyMatch(STRATEGIES);}
  catch(e){process.stderr.write('[ERR] '+(i+1)+': '+e.message+'\n');}
  if((i+1)%30===0) process.stdout.write('  '+(i+1)+'/'+N+' 진행 ('+(((Date.now()-st)/1000).toFixed(1))+'초)\n');
}
var el=Date.now()-st;
process.stdout.write('\n[SIM] '+N+'판 완료 / '+(el/1000).toFixed(1)+'초\n\n');

function pad(s,n){s=String(s);while(s.length<n)s+=' ';return s;}
function lp(s,n){s=String(s);while(s.length<n)s=' '+s;return s;}

// 전략별 통계
process.stdout.write('=== 전략별 순위 분포 ('+N+'판, NPC 인스턴스 수 기준) ===\n');
process.stdout.write(pad('전략',16)+lp('1등',5)+lp('2등',5)+lp('3등',5)+lp('4등',5)+lp('5등',5)+lp('6등',5)+lp('7등',5)+lp('8등',5)+lp('승률(1등)',10)+lp('평균순위',9)+lp('상위3등',9)+'\n');
process.stdout.write('-'.repeat(95)+'\n');

var STRAT_LABELS={
  'seven_star':'7성 노림',
  'value':'효율 밸류',
  'single_school':'단일 학교'
};

var rows=[];
for(var s in SIM_STRATEGY_STATS){
  var ss=SIM_STRATEGY_STATS[s];
  var winRate=(ss.ranks[0]/ss.games*100).toFixed(2);
  var avgRank=(ss.totalRank/ss.games).toFixed(2);
  var top3 = ((ss.ranks[0]+ss.ranks[1]+ss.ranks[2])/ss.games*100).toFixed(1);
  rows.push({key:s,label:STRAT_LABELS[s]||s,ranks:ss.ranks,games:ss.games,winRate:parseFloat(winRate),avgRank:parseFloat(avgRank),top3:top3});
}
rows.sort(function(a,b){return a.avgRank-b.avgRank;});
rows.forEach(function(r){
  var line=pad(r.label,16);
  for(var i=0;i<8;i++) line+=lp(r.ranks[i],5);
  line+=lp(r.winRate+'%',10)+lp(r.avgRank,9)+lp(r.top3+'%',9);
  process.stdout.write(line+'\n');
});

process.stdout.write('\n=== 분석 ===\n');
process.stdout.write('• 평균순위 낮을수록 좋음 (4.5가 평균치)\n');
process.stdout.write('• 8명 중 각 전략별 NPC 수가 다르므로 게임 수도 다름:\n');
process.stdout.write('  - 7성 노림: 인스턴스 '+(SIM_STRATEGY_STATS.seven_star?SIM_STRATEGY_STATS.seven_star.games:0)+'개 (3명/판 × '+N+'판)\n');
process.stdout.write('  - 효율 밸류: 인스턴스 '+(SIM_STRATEGY_STATS.value?SIM_STRATEGY_STATS.value.games:0)+'개 (3명/판 × '+N+'판)\n');
process.stdout.write('  - 단일 학교: 인스턴스 '+(SIM_STRATEGY_STATS.single_school?SIM_STRATEGY_STATS.single_school.games:0)+'개 (2명/판 × '+N+'판)\n');

process.stdout.write('\n[SIM] 완료\n');
