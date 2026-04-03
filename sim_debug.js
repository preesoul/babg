G={players:[],pool:{},turn:1,aliveCount:0,phase:'recruit',shop:[],
  hiddenCardsEverOwned:{},kuzunohaActive:false,permanentAbilityBan:false,
  battleSchoolBuff:{},millenniumTokenSummons:0,arisuDeathCount:0,
  keiseisenCounters:{},bonusStone:0,freeRerolls:0,
  shopExclusions:[],shopBuff:0,juriDeaths:0};
SIM_STATS={};SIM_RUNNING=false;

// runSimGame 내부를 직접 실행 (패치해서 디버그)
var simPool={};
for(var ci=0;ci<CHARS.length;ci++) simPool[CHARS[ci].id]=6;
G.pool=simPool;

var simPlayers=[{id:'sim_dummy',hp:0,dead:true,board:[],isPlayer:false,purchasedSchools:{},stone:0,turnStone:0,tier:1,upgradeCost:99}];
for(var si=0;si<4;si++){
  simPlayers.push({id:'sim_'+si,name:'SimAI_'+si,hp:40,stone:3,turnStone:2,tier:1,upgradeCost:UPGRADE_COSTS[1],board:[],dead:false,isPlayer:false,purchasedSchools:{},totalDamageTaken:0});
}
G.players=simPlayers;
G.turn=1;G.aliveCount=4;
G.hiddenCardsEverOwned={};G.kuzunohaActive=false;G.permanentAbilityBan=false;
G.battleSchoolBuff={};G.millenniumTokenSummons=0;G.arisuDeathCount=0;G.keiseisenCounters={};G.bonusStone=0;G.freeRerolls=0;

// 5턴만 돌리고 상태 확인
for(var t=0;t<5&&G.aliveCount>1;t++){
  G.turn=t+1;
  for(var pi=1;pi<G.players.length;pi++){
    var sp=G.players[pi];
    if(sp.dead)continue;
    sp.turnStone=Math.min(MAX_STONE,sp.turnStone+1);
    sp.stone=sp.turnStone;
    if(sp.upgradeCost>0)sp.upgradeCost=Math.max(0,sp.upgradeCost-1);
  }
  aiTurns();
  simBattlePhase();
  // 턴 후 상태 출력
  process.stdout.write('=== turn '+G.turn+' aliveCount='+G.aliveCount+'\n');
  for(var pi=1;pi<G.players.length;pi++){
    var p=G.players[pi];
    process.stdout.write('  '+p.name+' hp='+p.hp+' tier='+p.tier+' board='+p.board.length+' dead='+p.dead+'\n');
  }
}
