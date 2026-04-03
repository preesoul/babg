var _n=function(){};
var _d={
  style:{},
  classList:{add:_n,remove:_n,contains:function(){return false;},toggle:_n},
  innerHTML:'',textContent:'',
  addEventListener:_n,removeEventListener:_n,
  appendChild:function(){return _d;},
  querySelector:function(){return _d;},
  querySelectorAll:function(){return [];},
  src:'',className:'',id:'',value:'',checked:false,
  offsetWidth:0,offsetHeight:0
};
global.document={
  getElementById:function(){return _d;},
  querySelectorAll:function(){return [];},
  querySelector:function(){return _d;},
  createElement:function(){return _d;},
  addEventListener:_n,removeEventListener:_n,
  body:_d
};
global.window={addEventListener:_n,removeEventListener:_n,location:{reload:_n}};
global.Image=function(){return _d;};
global.localStorage={getItem:function(){return null;},setItem:_n};
global.alert=_n;
global.confirm=function(){return false;};
