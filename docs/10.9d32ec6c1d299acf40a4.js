(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1n7H":function(t,e,n){"use strict";n.r(e),n.d(e,"TimerWithoutServiceModule",function(){return d});var i=n("ofXK"),s=n("tyNb"),r=n("fXoL"),o=n("XNiG");let c=(()=>{class t{constructor(){this.timerEvent=new o.a,this.resetEvent=new o.a,this.startPauseEvent=new o.a,this.withService=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),a=(()=>{class t{constructor(t){this.timerService=t,this.countDownTimer=""}ngOnInit(){this.timerService.withService&&(this._subscribe=this.timerService.timerEvent.subscribe(t=>{this.countDownTimer=t.timer}),this._resetSubscribe=this.timerService.resetEvent.subscribe(()=>{this.countDownTimer=""}))}ngOnDestroy(){this._subscribe&&this._subscribe.unsubscribe(),this._resetSubscribe&&this._resetSubscribe.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(c))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-count-down-timer"]],inputs:{countDownTimer:"countDownTimer"},decls:5,vars:1,consts:[[1,"transfor-center"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"h2"),r.hc(2,"Count Down Timer"),r.Mb(),r.Nb(3,"p"),r.hc(4),r.Mb(),r.Mb()),2&t&&(r.yb(4),r.jc(" ",e.countDownTimer," "))},styles:[".transfor-center[_ngcontent-%COMP%]{position:relative;top:50%;transform:translateY(-50%)}h2[_ngcontent-%COMP%]{font-size:20px}h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{line-height:1;font-weight:700;color:#282c3f;padding:10px;text-align:center}p[_ngcontent-%COMP%]{font-size:27px;margin:10px}"]}),t})();var u=n("3Pt+");let b=(()=>{class t{constructor(t){this.timerService=t,this.toggleState=!1,this.count=0,this.startCount=0,this.pauseCount=0,this.timer=3e3,this.timerEvent=new r.n,this.resetEvent=new r.n,this.startPauseEvent=new r.n}ngOnInit(){this.count=this.timer-1}ngModelChangeEvent(){this.timer<10&&(this.timer=10),this.count=this.timer-1}startPause(){this.toggleState=!this.toggleState,this.toggleState?(this.timerService.withService?this.timerService.startPauseEvent.next({type:"start",message:`Start at ${(new Date).toLocaleString()}`,count:this.startCount+=1}):this.startPauseEvent.emit({type:"start",message:`Start at ${(new Date).toLocaleString()}`,count:this.startCount+=1}),this.clearInterval=setInterval(()=>{if(this.timerService.withService?this.timerService.timerEvent.next({timer:this.count}):this.timerEvent.emit({timer:this.count}),0===this.count)return this.toggleState=!1,this.count=this.timer-1,this.timerService.withService?this.timerService.startPauseEvent.next({type:"pause",message:`Pause at ${(new Date).toLocaleString()}`,count:this.pauseCount+=1}):this.startPauseEvent.emit({type:"pause",message:`Pause at ${(new Date).toLocaleString()}`,count:this.pauseCount+=1}),void clearInterval(this.clearInterval);this.count=this.count-1},1e3)):(this.timerService.withService?this.timerService.startPauseEvent.next({type:"pause",message:`Pause at ${(new Date).toLocaleString()}`,count:this.pauseCount+=1}):this.startPauseEvent.emit({type:"pause",message:`Pause at ${(new Date).toLocaleString()}`,count:this.pauseCount+=1}),clearInterval(this.clearInterval))}reset(){clearInterval(this.clearInterval),this.timerService.withService?this.timerService.resetEvent.next():this.resetEvent.emit(),this.startCount=0,this.pauseCount=0,this.count=this.timer-1,this.toggleState=!1}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(c))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-input-timer-limit"]],inputs:{timer:"timer"},outputs:{timerEvent:"timerEvent",resetEvent:"resetEvent",startPauseEvent:"startPauseEvent"},decls:10,vars:4,consts:[[1,"transfor-center"],[1,"input-text-con"],["type","number",1,"input-text-field",3,"disabled","min","ngModel","ngModelChange","keyup","mouseup"],[1,"action-btn"],[1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"label"),r.hc(3," Enter Time Limit"),r.Mb(),r.Nb(4,"input",2),r.Ub("ngModelChange",function(t){return e.timer=t})("keyup",function(){return e.ngModelChangeEvent()})("mouseup",function(){return e.ngModelChangeEvent()}),r.Mb(),r.Mb(),r.Nb(5,"div",3),r.Nb(6,"button",4),r.Ub("click",function(){return e.startPause()}),r.hc(7),r.Mb(),r.Nb(8,"button",4),r.Ub("click",function(){return e.reset()}),r.hc(9,"Reset"),r.Mb(),r.Mb(),r.Mb()),2&t&&(r.yb(4),r.Zb("disabled",e.toggleState)("min",10)("ngModel",e.timer),r.yb(3),r.ic(e.toggleState?"Pause":"Start"))},directives:[u.f,u.a,u.c,u.d],styles:[".transfor-center[_ngcontent-%COMP%]{position:relative;top:50%;transform:translateY(-50%)}.input-text-con[_ngcontent-%COMP%]{text-align:center}.input-text-con[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:inline-block;margin:10px;vertical-align:middle;font-weight:900;font-size:19px}.input-text-con[_ngcontent-%COMP%]   .input-text-field[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;padding:10px;margin:10px;border:2px solid #a9a9a9;border-radius:5px;outline:0;max-width:115px;text-align:center}.action-btn[_ngcontent-%COMP%]{text-align:center}.action-btn[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]{display:inline-block;font-size:15px;padding:10px 20px;text-align:center;background-color:#fe414d;cursor:pointer;border-radius:4px;outline:0;border:0;color:#fff;text-transform:uppercase;font-weight:700;margin:10px}"]}),t})();function p(t,e){if(1&t&&(r.Nb(0,"li"),r.Nb(1,"p"),r.hc(2),r.Mb(),r.Mb()),2&t){const t=e.$implicit;r.yb(2),r.jc(" ",t,"")}}let h=(()=>{class t{constructor(t){this.timerService=t,this.logs=[]}ngOnInit(){this.timerService.withService&&(this._subscribe=this.timerService.startPauseEvent.subscribe(t=>{this.logs.push(t.message)}),this._resetSubscribe=this.timerService.resetEvent.subscribe(()=>{this.logs=[]}))}ngOnDestroy(){this._subscribe&&this._subscribe.unsubscribe(),this._resetSubscribe&&this._resetSubscribe.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(c))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-log-timestamp"]],inputs:{logs:"logs"},decls:2,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(r.Nb(0,"ul"),r.gc(1,p,3,1,"li",0),r.Mb()),2&t&&(r.yb(1),r.Zb("ngForOf",e.logs))},directives:[i.i],styles:["ul[_ngcontent-%COMP%]{max-height:225px;overflow:auto}p[_ngcontent-%COMP%]{margin:10px;font-weight:700}"]}),t})(),l=(()=>{class t{constructor(t){this.timerService=t,this.start=0,this.pause=0}ngOnInit(){this.timerService.withService&&(this._subscribe=this.timerService.startPauseEvent.subscribe(t=>{"start"===t.type&&(this.start=t.count),"pause"===t.type&&(this.pause=t.count)}),this._resetSubscribe=this.timerService.resetEvent.subscribe(()=>{this.start=0}),this._resetSubscribe=this.timerService.resetEvent.subscribe(()=>{this.pause=0}))}ngOnDestroy(){this._subscribe&&this._subscribe.unsubscribe(),this._resetSubscribe&&this._resetSubscribe.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(c))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-log-start-pause-count"]],inputs:{start:"start",pause:"pause"},decls:13,vars:2,consts:[[1,"box"]],template:function(t,e){1&t&&(r.Nb(0,"ul"),r.Nb(1,"li"),r.Nb(2,"div",0),r.Nb(3,"span"),r.hc(4),r.Mb(),r.Nb(5,"label"),r.hc(6,"Started"),r.Mb(),r.Mb(),r.Mb(),r.Nb(7,"li"),r.Nb(8,"div",0),r.Nb(9,"span"),r.hc(10),r.Mb(),r.Nb(11,"label"),r.hc(12,"Paused"),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&t&&(r.yb(4),r.ic(e.start),r.yb(6),r.ic(e.pause))},styles:["ul[_ngcontent-%COMP%]{text-align:center;position:relative;top:50%;transform:translateY(-50%)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:25px}.box[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.box[_ngcontent-%COMP%]{width:100px;height:100px;border:2px solid #a9a9a9;text-align:center}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:27px;font-weight:900;padding:10px}.box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:20px;font-weight:900}"]}),t})(),g=(()=>{class t{constructor(t,e){this.route=t,this.timerService=e,this._logs=[],this.coutTime="",this.startedCount=0,this.pausedCount=0}ngOnInit(){this.route.params.subscribe(t=>{this.timerService.withService=!!t.withService})}timerEventHandler(t){this.coutTime=t.timer}startPauseEventHandler(t){"start"===t.type&&(this.startedCount=t.count),"pause"===t.type&&(this.pausedCount=t.count),this._logs.push(t.message)}resetEventHandler(){this._logs=[],this.coutTime="",this.startedCount=0,this.pausedCount=0}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(s.a),r.Ib(c))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-timer-without-service"]],decls:9,vars:4,consts:[[1,"timer-app-container"],[1,"col"],[3,"countDownTimer"],[3,"resetEvent","startPauseEvent","timerEvent"],[3,"logs"],[3,"start","pause"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Jb(2,"app-count-down-timer",2),r.Mb(),r.Nb(3,"div",1),r.Nb(4,"app-input-timer-limit",3),r.Ub("resetEvent",function(){return e.resetEventHandler()})("startPauseEvent",function(t){return e.startPauseEventHandler(t)})("timerEvent",function(t){return e.timerEventHandler(t)}),r.Mb(),r.Mb(),r.Nb(5,"div",1),r.Jb(6,"app-log-timestamp",4),r.Mb(),r.Nb(7,"div",1),r.Jb(8,"app-log-start-pause-count",5),r.Mb(),r.Mb()),2&t&&(r.yb(2),r.Zb("countDownTimer",e.coutTime),r.yb(4),r.Zb("logs",e._logs),r.yb(2),r.Zb("start",e.startedCount)("pause",e.pausedCount))},directives:[a,b,h,l],styles:[".timer-app-container[_ngcontent-%COMP%]{max-width:745px;margin:25px auto;display:flex;flex-wrap:wrap;border:2px solid #a9a9a9}.timer-app-container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{min-height:225px;width:50%;border:2px solid #a9a9a9}.timer-app-container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:first-child, .timer-app-container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2){border-left:0;border-top:0}.timer-app-container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(2){border-right:0}.timer-app-container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(3), .timer-app-container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-child(4){border:0}"]}),t})();const m=[{path:"",component:g},{path:":withService",component:g}];let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({imports:[[s.d.forChild(m)],s.d]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({imports:[[i.b,u.b,v]]}),t})()}}]);