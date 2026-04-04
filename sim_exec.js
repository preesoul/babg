G={players:[],pool:{},turn:1,aliveCount:0,phase:'recruit',shop:[],
  hiddenCardsEverOwned:{},kuzunohaActive:false,permanentAbilityBan:false,
  battleSchoolBuff:{},millenniumTokenSummons:0,arisuDeathCount:0,
  keiseisenCounters:{},bonusStone:0,freeRerolls:0,
  shopExclusions:[],shopBuff:0,juriDeaths:0};
SIM_STATS={};SIM_RUNNING=false;SIM_EXPLORE=true;

var N=5000;
process.stdout.write('[SIM] '+N+'\ud310 \uc2dc\ubc00 \uc2dc\uc791...\n');
var st=Date.now();
for(var i=0;i<N;i++){
  try{runSimGame();}
  catch(e){process.stderr.write('[ERR] '+(i+1)+': '+e.message+'\n');}
}
var el=Date.now()-st;

var rows=[];
for(var id in SIM_STATS){
  var s=SIM_STATS[id];
  var tot=s.win+s.loss;
  if(tot<1)continue;
  rows.push({id:id,win:s.win,loss:s.loss,total:tot,wr:(s.win/tot*100).toFixed(1)});
}
rows.sort(function(a,b){return parseFloat(b.wr)-parseFloat(a.wr)||b.total-a.total;});

function pad(s,n){s=String(s);while(s.length<n)s+=' ';return s;}
function lp(s,n){s=String(s);while(s.length<n)s=' '+s;return s;}

process.stdout.write('\n== \uc2b9\ub960 \uc0c1\uc704 15 (total>=50 \uc81c\ud55c) ==\n');
process.stdout.write(pad('\uce74\ub4dcID',26)+lp('\uc2b9',4)+lp('\ud328',5)+lp('\ucd1d',5)+lp('\uc2b9\ub960',7)+'\n');
process.stdout.write('-'.repeat(50)+'\n');
rows.filter(function(r){return r.total>=50;}).slice(0,15).forEach(function(r){
  process.stdout.write(pad(r.id,26)+lp(r.win,4)+lp(r.loss,5)+lp(r.total,5)+lp(r.wr+'%',7)+'\n');
});

process.stdout.write('\n== \uc2b9\ub960 \ud558\uc704 15 (total>=50 \uc81c\ud55c) ==\n');
process.stdout.write(pad('\uce74\ub4dcID',26)+lp('\uc2b9',4)+lp('\ud328',5)+lp('\ucd1d',5)+lp('\uc2b9\ub960',7)+'\n');
process.stdout.write('-'.repeat(50)+'\n');
var highRows=rows.filter(function(r){return r.total>=50;});
highRows.slice().reverse().slice(0,15).forEach(function(r){
  process.stdout.write(pad(r.id,26)+lp(r.win,4)+lp(r.loss,5)+lp(r.total,5)+lp(r.wr+'%',7)+'\n');
});

process.stdout.write('\n== \uc804\uccb4 \uce74\ub4dc \ud1b5\uacc4 (total\uae30\uc900 \ub0b4\ub9bc\ucc28\uc21c) ==\n');
rows.sort(function(a,b){return b.total-a.total;});
rows.forEach(function(r){
  process.stdout.write(pad(r.id,26)+lp(r.win,4)+lp(r.loss,5)+lp(r.total,5)+lp(r.wr+'%',7)+'\n');
});

process.stdout.write('\n[SIM] '+N+'\ud310 \uc644\ub8cc / '+(el/1000).toFixed(1)+'\ucd08\n');
process.stdout.write('[SIM] \ud1b5\uacc4 \uce74\ub4dc \uc218: '+rows.length+' (total>=10: '+rows.filter(function(r){return r.total>=10;}).length+')\n');
