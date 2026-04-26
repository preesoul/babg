// 난이도 매치 시뮬 — 신화/신 vs 기존 전설 강도 비교
G={players:[],pool:{},turn:1,aliveCount:0,phase:'recruit',shop:[],
  hiddenCardsEverOwned:{},kuzunohaActive:false,permanentAbilityBan:false,
  battleSchoolBuff:{},millenniumTokenSummons:0,arisuDeathCount:0,
  keiseisenCounters:{},bonusStone:0,freeRerolls:0,
  shopExclusions:[],shopBuff:0,shopSchoolBuff:{},juriDeaths:0,
  valkyrieKills:0,valkyrieDeaths:0};
SIM_STATS={};SIM_RUNNING=false;SIM_EXPLORE=true;
SIM_DIFFICULTY_STATS={};

// 8명 NPC 분배: 전설(1.0) ×4, 신화(1.2) ×2, 신(1.5) ×2
// 균등 비교를 위해 같은 라운드에 모두 등장
var DIFFS = [1.0, 1.0, 1.0, 1.0, 1.2, 1.2, 1.5, 1.5];
var N=200;

process.stdout.write('[SIM] 난이도 매치 '+N+'판 시작 (8명 NPC: 전설×4, 신화×2, 신×2)\n');
var st=Date.now();
for(var i=0;i<N;i++){
  try{runSimGameDifficultyMatch(DIFFS);}
  catch(e){process.stderr.write('[ERR] '+(i+1)+': '+e.message+'\n');}
  if((i+1)%20===0) process.stdout.write('  '+(i+1)+'/'+N+' 진행 ('+(((Date.now()-st)/1000).toFixed(1))+'초)\n');
}
var el=Date.now()-st;
process.stdout.write('\n[SIM] '+N+'판 완료 / '+(el/1000).toFixed(1)+'초\n\n');

function pad(s,n){s=String(s);while(s.length<n)s+=' ';return s;}
function lp(s,n){s=String(s);while(s.length<n)s=' '+s;return s;}

var DIFF_LABELS={
  '1.00':'전설(d=1.00)',
  '1.20':'신화(d=1.20)',
  '1.50':'신  (d=1.50)'
};

process.stdout.write('=== 난이도별 순위 분포 ('+N+'판) ===\n');
process.stdout.write(pad('난이도',16)+lp('1등',5)+lp('2등',5)+lp('3등',5)+lp('4등',5)+lp('5등',5)+lp('6등',5)+lp('7등',5)+lp('8등',5)+lp('1등%',8)+lp('평균순위',9)+lp('생존율',8)+lp('평균HP(생존)',13)+'\n');
process.stdout.write('-'.repeat(100)+'\n');

var rows=[];
for(var s in SIM_DIFFICULTY_STATS){
  var ss=SIM_DIFFICULTY_STATS[s];
  var winRate=(ss.ranks[0]/ss.games*100).toFixed(2);
  var avgRank=(ss.totalRank/ss.games).toFixed(2);
  var survRate=(ss.survivors/ss.games*100).toFixed(1);
  var avgHpSurv=ss.survivors>0?(ss.finalHpSum/ss.survivors).toFixed(1):'-';
  rows.push({key:s,label:DIFF_LABELS[s]||('d='+s),ranks:ss.ranks,games:ss.games,winRate:parseFloat(winRate),avgRank:parseFloat(avgRank),survRate:survRate,avgHpSurv:avgHpSurv});
}
rows.sort(function(a,b){return a.avgRank-b.avgRank;});
rows.forEach(function(r){
  var line=pad(r.label,16);
  for(var i=0;i<8;i++) line+=lp(r.ranks[i],5);
  line+=lp(r.winRate+'%',8)+lp(r.avgRank,9)+lp(r.survRate+'%',8)+lp(r.avgHpSurv,13);
  process.stdout.write(line+'\n');
});

process.stdout.write('\n=== 분석 ===\n');
process.stdout.write('• 균등 분포라면 평균순위 = 4.5 (모든 NPC 동등). 낮을수록 강함.\n');
process.stdout.write('• 신화/신이 전설을 압도하면 평균순위가 4.5보다 낮아야 함.\n');
process.stdout.write('• 전설 인스턴스 수: '+(SIM_DIFFICULTY_STATS['1.00']?SIM_DIFFICULTY_STATS['1.00'].games:0)+' (4명/판 × '+N+'판)\n');
process.stdout.write('• 신화 인스턴스 수: '+(SIM_DIFFICULTY_STATS['1.20']?SIM_DIFFICULTY_STATS['1.20'].games:0)+' (2명/판 × '+N+'판)\n');
process.stdout.write('• 신   인스턴스 수: '+(SIM_DIFFICULTY_STATS['1.50']?SIM_DIFFICULTY_STATS['1.50'].games:0)+' (2명/판 × '+N+'판)\n');

process.stdout.write('\n[SIM] 완료\n');
