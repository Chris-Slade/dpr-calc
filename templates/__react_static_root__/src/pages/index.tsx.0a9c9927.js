(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(12),l=a.n(r),c=a(247),i=a(249),m=function(e,t,a){return Math.max(Math.min(e,a),t)},o=a(246),u=a(238),d=a(245),s=a(248),v=a(244),g=function(e){var t=e.value,a=e.onChange;return n.createElement(o.a,{component:"fieldset"},n.createElement(u.a,{component:"legend"},"Advantage/Disadvantage"),n.createElement(d.a,{"aria-label":"Advantage/Disadvantage",defaultValue:"normal",name:"radio-buttons-group",row:!0,value:t,onChange:function(e){return a(e.target.value)}},n.createElement(s.a,{value:"normal",control:n.createElement(v.a,null),label:"Normal"}),n.createElement(s.a,{value:"advantage",control:n.createElement(v.a,null),label:"Advantage"}),n.createElement(s.a,{value:"disadvantage",control:n.createElement(v.a,null),label:"Disadvantage"})))},E=a(89),p=a.n(E),h=a(181),f=a(250),b=a(20),x=a.n(b),y=a(90),C=a.n(y),D=a(243),O=["value","onChange"],w=function(e){var t=e.value,a=e.onChange,r=C()(e,O);return n.createElement(D.a,x()({variant:"outlined",type:"number",value:t,onChange:function(e){return a(function(e){var t=parseFloat(e);return isNaN(t)?0:t}(e.target.value))},sx:{maxWidth:"200px"}},r))};function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){p()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H=["d4","d6","d8","d10","d12","d20"],k=Object(h.a)("div")((function(e){var t=e.theme;return p()({display:"grid",gap:t.spacing(3),gridTemplate:"repeat(6, 1fr) / 1fr"},t.breakpoints.up("md"),{gridTemplate:"repeat(3, 1fr) / repeat(2, 1fr)"})})),P=function(e){var t=e.die,a=e.value,r=e.onChange;return n.createElement(w,{label:t,name:t,value:a[t],onChange:function(e){return r(A(A({},a),{},p()({},t,e)))}})},W=function(e){var t=e.value,a=e.onChange;return n.createElement(f.a,{display:"flex",flexDirection:"column"},n.createElement(u.a,{sx:{marginBottom:3}},"Damage Dice"),n.createElement(k,null,H.map((function(e,r){return n.createElement(P,{key:r,die:e,value:t,onChange:a})}))))},N=function(e){var t=e.value,a=e.style,r=void 0===a?"decimal":a,l=new Intl.NumberFormat("en-US",{style:r,maximumFractionDigits:10}).format(t);return n.createElement("span",null,l)},M=n.useState,T=function(){var e=M(0),t=l()(e,2),a=t[0],r=t[1],o=M(0),u=l()(o,2),d=u[0],s=u[1],v=M("normal"),E=l()(v,2),p=E[0],h=E[1],f=M(0),b=l()(f,2),x=b[0],y=b[1],C=M({d4:0,d6:0,d8:0,d10:0,d12:0,d20:0}),D=l()(C,2),O=D[0],j=D[1],A=M(0),H=l()(A,2),k=H[0],P=H[1],T=function(e,t){var a=m((21+e-t)/20,0,1),n=m((t-e-1)/20,0,1);return{toHit:a,toMiss:n,toHitWithAdvantage:1-n*n,toHitWithDisadvantage:a*a}}(d,a),S=x*function(e,t){return Object.keys(e).reduce((function(t,a){return t+(1+function(e){switch(e){case"d4":return 4;case"d6":return 6;case"d8":return 8;case"d10":return 10;case"d12":return 12;case"d20":return 20}}(a))/2*e[a]}),0)+t}(O,k);return n.createElement(c.a,{container:!0,spacing:3,sx:{height:"100%",width:"100%",padding:3,"& h5":{marginTop:3}}},n.createElement(c.a,{item:!0,xs:12,md:3},n.createElement(c.a,{item:!0},n.createElement(i.a,{variant:"h4"},"Inputs")),n.createElement(c.a,{container:!0,spacing:3},n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{variant:"h5"},"Accuracy")),n.createElement(c.a,{item:!0,xs:12,md:6},n.createElement(w,{label:"To-Hit Modifiers",name:"to-hit",value:d,onChange:s})),n.createElement(c.a,{item:!0,xs:12,md:6},n.createElement(w,{label:"Target AC",name:"ac",value:a,onChange:r})),n.createElement(c.a,{item:!0,xs:12},n.createElement(g,{value:p,onChange:h}))),n.createElement(c.a,{container:!0,spacing:3},n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{variant:"h5"},"Damage")),n.createElement(c.a,{item:!0,xs:12,md:6},n.createElement(w,{label:"Number of Attacks",name:"attacks",value:x,onChange:y})),n.createElement(c.a,{item:!0,xs:12,md:6},n.createElement(w,{label:"Damage Modifiers",value:k,onChange:P})),n.createElement(c.a,{item:!0,xs:12},n.createElement(W,{value:O,onChange:j})))),n.createElement(c.a,{item:!0,xs:12,md:9},n.createElement(c.a,{item:!0},n.createElement(i.a,{variant:"h4"},"Outputs")),n.createElement(c.a,{container:!0,spacing:3},n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{variant:"h5"},"Accuracy")),n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,null,"Chance to hit: ",n.createElement(N,{value:T.toHit})),n.createElement(i.a,null,"Chance to hit (advantage):"," ",n.createElement(N,{value:T.toHitWithAdvantage})),n.createElement(i.a,null,"Chance to hit (disadvantage):"," ",n.createElement(N,{value:T.toHitWithDisadvantage}))),n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{variant:"h5"},"Damage")),n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,null,"Damage per round: ",n.createElement(N,{value:T.toHit*S})),n.createElement(i.a,null,"Damage per round (advantage):"," ",n.createElement(N,{value:T.toHitWithAdvantage*S})),n.createElement(i.a,null,"Damage per round (disadvantage):"," ",n.createElement(N,{value:T.toHitWithDisadvantage*S}))),n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{component:"p",variant:"subtitle2"},"Note: Critical hits/misses, crit damage, and independent accuracy/damage per attack are WIP.")))))};t.default=function(){return n.createElement(T,null)}}}]);