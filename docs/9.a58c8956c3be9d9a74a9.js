(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{sqCO:function(t,e,n){"use strict";n.r(e),n.d(e,"TableModule",function(){return d});var a=n("ofXK"),o=n("tyNb"),i=n("fXoL"),r=n("uiMJ");function s(t,e){if(1&t){const t=i.Ob();i.Nb(0,"th"),i.Nb(1,"div",2),i.Ub("click",function(){i.ec(t);const n=e.$implicit;return i.Wb().headerEvent(n)}),i.ic(2),i.Mb(),i.Mb()}if(2&t){const t=e.$implicit;i.yb(2),i.jc(t)}}function c(t,e){if(1&t&&(i.Nb(0,"td"),i.Nb(1,"span"),i.ic(2),i.Mb(),i.Mb()),2&t){const t=e.$implicit,n=i.Wb().$implicit;i.yb(2),i.jc(n[t])}}function b(t,e){if(1&t&&(i.Nb(0,"tr"),i.hc(1,c,3,1,"td",1),i.Mb()),2&t){const t=i.Wb();i.yb(1),i.Zb("ngForOf",t.tableHeader)}}const l=[{path:"",component:(()=>{class t{constructor(t){this._HttpService=t,this.tableHeader=[],this.tableData=[],this._tableData=[],this.order="none",this.key=""}ngOnInit(){this._HttpService.get("assets/students.json").subscribe(t=>{this._tableData=[...t],this.tableData=t,this.tableHeader=[];for(let e in t[0])this.tableHeader.push(e);this.key=this.tableHeader[0]})}headerEvent(t){switch(t===this.key||(this.key=t,this.order="none"),this.order){case"none":this.order="asc";break;case"asc":this.order="desc";break;case"desc":this.order="none"}if("none"===this.order){let t=[...this._tableData];this.tableData=t}else{let t=[...this._tableData];this.tableData=t.sort((t,e)=>"string"==typeof t[this.key]||"string"==typeof e[this.key]?"asc"===this.order?t[this.key].localeCompare(e[this.key]):e[this.key].localeCompare(t[this.key]):"asc"===this.order?t[this.key]-e[this.key]:e[this.key]-t[this.key])}}}return t.\u0275fac=function(e){return new(e||t)(i.Ib(r.a))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-table"]],decls:7,vars:2,consts:[[1,"table-container"],[4,"ngFor","ngForOf"],[1,"text-transform",3,"click"]],template:function(t,e){1&t&&(i.Nb(0,"div",0),i.Nb(1,"table"),i.Nb(2,"thead"),i.Nb(3,"tr"),i.hc(4,s,3,1,"th",1),i.Mb(),i.Mb(),i.Nb(5,"tbody"),i.hc(6,b,2,1,"tr",1),i.Mb(),i.Mb(),i.Mb()),2&t&&(i.yb(4),i.Zb("ngForOf",e.tableHeader),i.yb(2),i.Zb("ngForOf",e.tableData))},directives:[a.i],styles:[".table-container[_ngcontent-%COMP%]{max-width:90%;margin:25px auto}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;box-shadow:0 0 8px 1px #a9a9a9}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #bebebe;text-align:center;padding:12px 10px}.table-container[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{box-shadow:0 4px 3px -2px #a9a9a9}.table-container[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#262626;color:#fff;cursor:pointer}.table-container[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .text-transform[_ngcontent-%COMP%]{text-transform:capitalize;font-size:.85rem}.table-container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:.95rem}"]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({imports:[[o.d.forChild(l)],o.d]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({imports:[[a.b,h]]}),t})()}}]);