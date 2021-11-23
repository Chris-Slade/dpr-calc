(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(12),l=a.n(r),c=a(247),i=a(249),o=a(19),m=a.n(o),u=a(90),s=a.n(u),d=a(243),g=["value","onChange"],v=function(e){var t=e.value,a=e.onChange,r=s()(e,g);return n.createElement(d.a,m()({variant:"outlined",type:"number",value:t,onChange:function(e){return a(function(e){var t=parseFloat(e);return isNaN(t)?0:t}(e.target.value))}},r))},E=a(246),h=a(239),p=a(245),f=a(248),b=a(244),x=function(e){var t=e.value,a=e.onChange;return n.createElement(E.a,{component:"fieldset"},n.createElement(h.a,{component:"legend"},"Advantage/Disadvantage"),n.createElement(p.a,{"aria-label":"Advantage/Disadvantage",defaultValue:"normal",name:"radio-buttons-group",row:!0,value:t,onChange:function(e){return a(e.target.value)}},n.createElement(f.a,{value:"normal",control:n.createElement(b.a,null),label:"Normal"}),n.createElement(f.a,{value:"advantage",control:n.createElement(b.a,null),label:"Advantage"}),n.createElement(f.a,{value:"disadvantage",control:n.createElement(b.a,null),label:"Disadvantage"})))},C=a(89),y=a.n(C),D=a(250);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){y()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(e){var t=e.die,a=e.value,r=e.onChange;return n.createElement(v,{label:t,name:t,value:a[t],onChange:function(e){return r(w(w({},a),{},y()({},t,e)))}})},A=["d4","d6","d8","d10","d12","d20"],H=function(e){var t=e.value,a=e.onChange;return n.createElement(D.a,{display:"flex",flexDirection:"column"},n.createElement(h.a,{sx:{marginBottom:3}},"Damage Dice"),n.createElement(D.a,{sx:{display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(2, 1fr)",gap:3}},A.map((function(e,r){return n.createElement(j,{key:r,die:e,value:t,onChange:a})}))))},P=function(e,t,a){return Math.max(Math.min(e,a),t)},k=n.useState,W=function(){var e=k(0),t=l()(e,2),a=t[0],r=t[1],o=k(0),m=l()(o,2),u=m[0],s=m[1],d=k("normal"),g=l()(d,2),E=g[0],h=g[1],p=k(0),f=l()(p,2),b=f[0],C=f[1],y=k({d4:0,d6:0,d8:0,d10:0,d12:0,d20:0}),D=l()(y,2),O=D[0],w=D[1],j=k(0),A=l()(j,2),W=A[0],M=A[1],N=function(e,t){var a=P((21+e-t)/20,0,1),n=P((t-e-1)/20,0,1);return{toHit:a,toMiss:n,toHitWithAdvantage:1-n*n,toHitWithDisadvantage:a*a}}(u,a),T=b*function(e,t){return Object.keys(e).reduce((function(t,a){return t+(1+function(e){switch(e){case"d4":return 4;case"d6":return 6;case"d8":return 8;case"d10":return 10;case"d12":return 12;case"d20":return 20}}(a))/2*e[a]}),0)+t}(O,W);return n.createElement(c.a,{container:!0,spacing:3,sx:{height:"100%",width:"100%",margin:3,"& h5":{marginTop:3}}},n.createElement(c.a,{item:!0,xs:3},n.createElement(c.a,{item:!0},n.createElement(i.a,{variant:"h4"},"Inputs")),n.createElement(c.a,{container:!0,spacing:3},n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{variant:"h5"},"Accuracy")),n.createElement(c.a,{item:!0,xs:6},n.createElement(v,{label:"To-Hit Modifiers",name:"to-hit",value:u,onChange:s})),n.createElement(c.a,{item:!0,xs:6},n.createElement(v,{label:"Target AC",name:"ac",value:a,onChange:r})),n.createElement(c.a,{item:!0,xs:12},n.createElement(x,{value:E,onChange:h}))),n.createElement(c.a,{container:!0,spacing:3},n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{variant:"h5"},"Damage")),n.createElement(c.a,{item:!0,xs:6},n.createElement(v,{label:"Number of Attacks",name:"attacks",value:b,onChange:C})),n.createElement(c.a,{item:!0,xs:6},n.createElement(v,{label:"Damage Modifiers",value:W,onChange:M})),n.createElement(c.a,{item:!0,xs:12},n.createElement(H,{value:O,onChange:w})))),n.createElement(c.a,{item:!0,xs:9},n.createElement(c.a,{item:!0},n.createElement(i.a,{variant:"h4"},"Outputs")),n.createElement(c.a,{container:!0,spacing:3},n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{variant:"h5"},"Accuracy")),n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,null,"Chance to hit: ",N.toHit),n.createElement(i.a,null,"Chance to hit (advantage): ",N.toHitWithAdvantage),n.createElement(i.a,null,"Chance to hit (disadvantage): ",N.toHitWithDisadvantage)),n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{variant:"h5"},"Damage")),n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,null,"Damage per round: ",N.toHit*T),n.createElement(i.a,null,"Damage per round (advantage):"," ",N.toHitWithAdvantage*T),n.createElement(i.a,null,"Damage per round (disadvantage):"," ",N.toHitWithDisadvantage*T)),n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{component:"p",variant:"subtitle2"},"Note: Critical hits/misses, crit damage, and independent accuracy/damage per attack are WIP.")))))};t.default=function(){return n.createElement(W,null)}}}]);