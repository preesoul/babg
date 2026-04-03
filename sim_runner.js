// sim_runner.js — 번들 빌드 후 child process 실행
'use strict';
var fs=require('fs'),os=require('os'),path=require('path'),cp=require('child_process');
var D=__dirname;

var core=fs.readFileSync(path.join(D,'game_core.js'),'utf8');
core=core.replace(/var ABILITY_DESCS\s*=\s*\{[\s\S]*?\n\};\s*\n/,'var ABILITY_DESCS={};\n');

var stub=fs.readFileSync(path.join(D,'sim_stub.js'),'utf8');
var exec=fs.readFileSync(path.join(D,'sim_exec.js'),'utf8');

var tmp=path.join(os.tmpdir(),'babg_sim_bundle.js');
fs.writeFileSync(tmp,stub+'\n'+core+'\n'+exec,'utf8');

var r=cp.spawnSync('node',[tmp],{encoding:'utf8',timeout:180000,maxBuffer:10*1024*1024});
if(r.stdout) process.stdout.write(r.stdout);
if(r.stderr) process.stderr.write(r.stderr);
if(r.status===139) console.error('[SIM] child segfault');
else if(r.status!==0) console.error('[SIM] status:'+r.status);
