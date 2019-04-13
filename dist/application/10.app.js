(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"Treatments",function(){return h});var s=n(1),a=n(5),c=n(2),l=n(4),i=n(6),r=n(3),d=n(8),m=n(46),o=n(20),p=n(13),b=n(18),u=n(0);let h=class extends u.Component{constructor(){super(...arguments),this.selectedID=c.y.currentLocation.split("/")[1]}get canEdit(){return c.C.currentUser.canEditTreatments}get selectedIndex(){return l.sb.list.findIndex(e=>e._id===this.selectedID)}get selectedTreatment(){return l.sb.list[this.selectedIndex]}render(){return u.createElement("div",{className:"tc-pg p-15 p-l-10 p-r-10"},u.createElement(a.e,{onDelete:this.canEdit?e=>{l.sb.deleteModal(e)}:void 0,commands:this.canEdit?[{key:"addNew",title:"Add new",name:Object(c.B)("Add new"),onClick:()=>{const e=new l.F;l.sb.list.push(e),this.selectedID=e._id},iconProps:{iconName:"Add"}}]:[],heads:[Object(c.B)("Treatment"),Object(c.B)("Expenses/unit"),Object(c.B)("Done appointments"),Object(c.B)("Upcoming appointments")],rows:l.sb.list.map(e=>{const t=(new Date).getTime();let n=0,s=0;const i=l.I.list;for(let a=0;a<i.length;a++){const c=i[a];c.treatmentID===e._id&&(c.date>t&&s++,c.isDone&&n++)}return{id:e._id,searchableString:e.searchableString,cells:[{dataValue:e.type,component:u.createElement(a.l,{text:e.type,subText:`${Object(c.B)("Expenses")}: ${l.kb.getSetting("currencySymbol")}${e.expenses} ${Object(c.B)("per unit")}`}),onClick:()=>{this.selectedID=e._id},className:"no-label"},{dataValue:e.expenses,component:u.createElement("span",null,l.kb.getSetting("currencySymbol"),e.expenses),className:"hidden-xs"},{dataValue:n,component:u.createElement("span",null,n," ",Object(c.B)("done")),className:"hidden-xs"},{dataValue:s,component:u.createElement("span",null,s," ",Object(c.B)("upcoming")),className:"hidden-xs"}]}}),maxItemsOnLoad:20}),this.selectedTreatment?u.createElement(m.a,{isOpen:!!this.selectedTreatment,type:o.a.medium,closeButtonAriaLabel:"Close",isLightDismiss:!0,onDismiss:()=>{this.selectedID=""},onRenderNavigation:()=>u.createElement(a.m,{className:"panel-heading"},u.createElement(a.c,{span:20},this.selectedTreatment?u.createElement(a.l,{text:this.selectedTreatment.type,subText:`${Object(c.B)("Expenses")}: ${l.kb.getSetting("currencySymbol")}${this.selectedTreatment.expenses} ${Object(c.B)("per unit")}`}):u.createElement("p",null)),u.createElement(a.c,{span:4,className:"close"},u.createElement(p.a,{iconProps:{iconName:"cancel"},onClick:()=>{this.selectedID=""}})))},u.createElement("div",{className:"treatment-editor"},u.createElement(a.n,{title:Object(c.B)("Treatment Details")},u.createElement("div",{className:"treatment-input"},u.createElement(b.a,{label:Object(c.B)("Treatment title"),value:this.selectedTreatment.type,onChange:(e,t)=>l.sb.list[this.selectedIndex].type=t,disabled:!this.canEdit}),u.createElement(b.a,{label:Object(c.B)("Treatment expenses (per unit)"),type:"number",value:this.selectedTreatment.expenses.toString(),onChange:(e,t)=>l.sb.list[this.selectedIndex].expenses=Object(i.r)(t),prefix:l.kb.getSetting("currencySymbol"),disabled:!this.canEdit}))))):"")}};s.c([r.k],h.prototype,"selectedID",void 0),s.c([r.d],h.prototype,"canEdit",null),s.c([r.d],h.prototype,"selectedIndex",null),s.c([r.d],h.prototype,"selectedTreatment",null),h=s.c([d.a],h)}}]);