(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(12),l=a.n(r),c=a(249),i=a(252),o=a(247),m=a(239),u=a(248),s=a(251),d=a(245),h=function(e){var t=e.value,a=e.onChange;return n.createElement(o.a,{component:"fieldset"},n.createElement(m.a,{component:"legend"},"Advantage/Disadvantage"),n.createElement(u.a,{"aria-label":"Advantage/Disadvantage",defaultValue:"normal",name:"radio-buttons-group",row:!0,value:t,onChange:function(e){return a(e.target.value)}},n.createElement(s.a,{value:"normal",control:n.createElement(d.a,null),label:"Normal"}),n.createElement(s.a,{value:"advantage",control:n.createElement(d.a,null),label:"Advantage"}),n.createElement(s.a,{value:"disadvantage",control:n.createElement(d.a,null),label:"Disadvantage"})))},g=a(20),v=a.n(g),p=a(89),f=a.n(p),E=a(250),b=a(246),y=["value","onChange","label"],x=function(e){var t=e.value,a=e.onChange,r=e.label,l=f()(e,y);return n.createElement(E.a,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}},n.createElement(s.a,{control:n.createElement(b.a,v()({},l,{checked:t,onChange:function(e,t){a(t)}})),label:r}))},C=a(90),w=a.n(C),P=a(181),k=a(253),O=a(244),A=["value","onChange"],D=function(e){var t=e.value,a=e.onChange,r=f()(e,A);return n.createElement(O.a,v()({variant:"outlined",type:"number",value:t||"",onChange:function(e){return a(function(e){var t=parseFloat(e);return isNaN(t)?0:t}(e.target.value))},sx:{maxWidth:"200px"}},r))};function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){w()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B=["d4","d6","d8","d10","d12","d20"],M=Object(P.a)("div")((function(e){var t=e.theme;return w()({display:"grid",gap:t.spacing(3),gridTemplate:"repeat(6, 1fr) / 1fr"},t.breakpoints.up("md"),{gridTemplate:"repeat(3, 1fr) / repeat(2, 1fr)"})})),N=function(e){var t=e.die,a=e.value,r=e.onChange;return n.createElement(D,{label:t,name:t,value:a[t],onChange:function(e){return r(T(T({},a),{},w()({},t,e)))}})},I=function(e){var t=e.value,a=e.onChange;return n.createElement(k.a,{display:"flex",flexDirection:"column"},n.createElement(m.a,{sx:{marginBottom:3}},"Damage Dice"),n.createElement(M,null,B.map((function(e,r){return n.createElement(N,{key:r,die:e,value:t,onChange:a})}))))},S=function(e){var t=e.label,a=e.value,r=e.style,l=void 0===r?"decimal":r,c=isNaN(a)?"n/a":new Intl.NumberFormat("en-US",{style:l,maximumFractionDigits:"decimal"===l?10:2}).format(a);return n.createElement(i.a,null,t?"".concat(t,": "):"",c)},F=function(e){return e<4?3:e<8?4:5},H=function(e,t,a){var n=W(F(e)+L(e),t,20,a);return{accuracy:n,damage:function(e){return e<5?1:e<11?2:e<17?3:4}(e)*z(n,R(20,a),{d4:0,d6:1,d8:0,d10:1,d12:0,d20:0},function(e){return e<2?0:F(e)}(e))}},R=function(e,t){var a=(21-e)/20,n=1-a;return"normal"===t?a:"advantage"===t?1-Math.pow(n,2):Math.pow(a,2)},J=function(e){return"normal"===e?.05:"advantage"===e?.0975:.0025},W=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"normal",r=R(a,"normal"),l=J("normal"),c=q((21+e-t)/20,r,1-l),i=1-c;return"normal"===n?c:"advantage"===n?1-Math.pow(i,2):Math.pow(c,2)},q=function(e,t,a){return Math.max(Math.min(e,a),t)},z=function(e,t,a,n){var r=Object.keys(a).reduce((function(e,t){return e+(1+function(e){switch(e){case"d4":return 4;case"d6":return 6;case"d8":return 8;case"d10":return 10;case"d12":return 12;case"d20":return 20}}(t))/2*a[t]}),0);return e*(r+n)+t*r},L=function(e){return Math.max(2,2+Math.floor((e-1)/4))},U=n.useState,V=function(){var e=U(0),t=l()(e,2),a=t[0],r=t[1],o=U(0),m=l()(o,2),u=m[0],s=m[1],d=U(1),g=l()(d,2),v=g[0],p=g[1],f=U("normal"),E=l()(f,2),b=E[0],y=E[1],C=U(0),w=l()(C,2),P=w[0],k=w[1],O=U({d4:0,d6:0,d8:0,d10:0,d12:0,d20:0}),A=l()(O,2),j=A[0],T=A[1],B=U(0),M=l()(B,2),N=M[0],F=M[1],J=U(!0),q=l()(J,2),V=q[0],G=q[1],K=U(20),Q=l()(K,2),X=Q[0],Y=Q[1],Z=L(v),$=R(X,b),_=u+(V?Z:0),ee=W(_,a,X,b),te=P*z(ee,$,j,N),ae=H(v,a,b);return n.createElement(c.a,{container:!0,spacing:3,sx:{height:"100%",width:"100%",padding:3,"& h5":{marginTop:3}}},n.createElement(c.a,{item:!0,xs:12,md:3},n.createElement(c.a,{item:!0},n.createElement(i.a,{variant:"h4"},"Inputs")),n.createElement(c.a,{container:!0,spacing:3},n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{variant:"h5"},"Accuracy")),n.createElement(c.a,{item:!0,xs:12,md:6},n.createElement(D,{label:"Level/CR (PB = ".concat(Z,")"),title:"The level or Challenge Rating (CR) of the attacker, which determines its Proficiency Bonus (PB).",name:"level",value:v,onChange:p,InputProps:{inputProps:{min:0,max:30}}})),n.createElement(c.a,{item:!0,xs:12,md:6},n.createElement(x,{label:"Proficient?",title:"If checked, the attacker's Proficiency Bonus will be included in its modifiers on the attack roll(s).",value:V,onChange:G})),n.createElement(c.a,{item:!0,xs:12,md:6},n.createElement(D,{label:"To-Hit Modifiers (sans PB)",title:"Any modifiers to hit besides proficiency bonus, such as your attack modifier, Archery, Sharpshooter, +1/2/3 weapons, etc.",name:"to-hit",value:u,onChange:s})),n.createElement(c.a,{item:!0,xs:12,md:6},n.createElement(D,{InputProps:{inputProps:{min:0}},label:"Target AC",title:"The Armor Class (AC) of the enemy being attacked.",name:"ac",value:a,onChange:r})),n.createElement(c.a,{item:!0,xs:12},n.createElement(h,{value:b,onChange:y})),n.createElement(c.a,{item:!0,xs:12},n.createElement(D,{label:"Crit Threshold",title:"The minimum roll on the d20 needed to get a critical hit.",InputProps:{inputProps:{min:1,max:20}},value:X,onChange:Y}))),n.createElement(c.a,{container:!0,spacing:3},n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{variant:"h5"},"Damage")),n.createElement(c.a,{item:!0,xs:12,md:6},n.createElement(D,{label:"Number of Attacks",title:"Total number of attacks the attacker makes during a round.",name:"attacks",value:P,onChange:k})),n.createElement(c.a,{item:!0,xs:12,md:6},n.createElement(D,{label:"Damage Modifiers",title:"Any modifiers to damage, such as your attack modifier, Sharpshooter, +1/+2/+3 weapons, etc.",value:N,onChange:F})),n.createElement(c.a,{item:!0,xs:12},n.createElement(I,{value:j,onChange:T})))),n.createElement(c.a,{item:!0,xs:12,md:9},n.createElement(c.a,{item:!0},n.createElement(i.a,{variant:"h4"},"Outputs")),n.createElement(c.a,{container:!0,spacing:3},n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{variant:"h5"},"Accuracy")),n.createElement(c.a,{item:!0,xs:12},n.createElement(S,{label:"Combined + to hit",value:_}),n.createElement(S,{label:"Chance to hit AC ".concat(a),style:"percent",value:ee}),n.createElement(S,{label:"Baseline chance to hit",style:"percent",value:ae.accuracy}),n.createElement(S,{label:"Percent of baseline",style:"percent",value:ee/ae.accuracy})),n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{variant:"h5"},"Damage")),n.createElement(c.a,{item:!0,xs:12},n.createElement(S,{label:"Average damage per round",value:te}),n.createElement(S,{label:"Baseline average damage per round",value:ae.damage}),n.createElement(S,{label:"Percentage of baseline",style:"percent",value:te/ae.damage})),n.createElement(c.a,{item:!0,xs:12},n.createElement(i.a,{component:"p",variant:"subtitle2",maxWidth:"80ch"},"The accuracy and damage baseline is equal to a warlock who begins with 16 CHA, increases it to 18 at 4th level and 20 at 8th level, and attacks using Eldritch Blast with Agonizing Blast and Hex.")))))};t.default=function(){return n.createElement(V,null)}}}]);