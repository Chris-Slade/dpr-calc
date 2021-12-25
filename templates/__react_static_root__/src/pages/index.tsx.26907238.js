(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{92:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t(12),r=t.n(l),c=t(251),o=t(254),i=t(253),u=t(181),m=t(250),s=t(242),d=t(248),h=t(252),g=t(247),v=function(e){var a=e.value,t=e.onChange;return n.createElement(c.a,null,n.createElement(m.a,{component:"fieldset"},n.createElement(s.a,{component:"legend"},"Advantage/Disadvantage"),n.createElement(d.a,{"aria-label":"Advantage/Disadvantage",defaultValue:"normal",name:"radio-buttons-group",row:!0,value:a,onChange:function(e){return t(e.target.value)}},n.createElement(h.a,{value:"normal",control:n.createElement(g.a,null),label:"Normal"}),n.createElement(h.a,{value:"advantage",control:n.createElement(g.a,null),label:"Advantage"}),n.createElement(h.a,{value:"disadvantage",control:n.createElement(g.a,null),label:"Disadvantage"}))))},f=function(e){return e<5?1:e<11?2:e<17?3:4},p=function(e){return e<5?1:e<11?2:e<20?3:4},E=function(e){return e<4?3:e<8?4:5},b=function(e,a,t){var n=w(E(e)+A(e),a,20,t);return{accuracy:n,damage:f(e)*k(n,y(20,t),{d4:0,d6:1,d8:0,d10:1,d12:0,d20:0},function(e){return e<2?0:E(e)}(e))}},y=function(e,a){var t=(21-e)/20,n=1-t;return"normal"===a?t:"advantage"===a?1-Math.pow(n,2):Math.pow(t,2)},C=function(e){return"normal"===e?.05:"advantage"===e?.0975:.0025},w=function(e,a,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"normal",l=y(t,"normal"),r=C("normal"),c=x((21+e-a)/20,l,1-r),o=1-c;return"normal"===n?c:"advantage"===n?1-Math.pow(o,2):Math.pow(c,2)},x=function(e,a,t){return Math.max(Math.min(e,t),a)},k=function(e,a,t,n){var l=Object.keys(t).reduce((function(e,a){return e+(1+function(e){switch(e){case"d4":return 4;case"d6":return 6;case"d8":return 8;case"d10":return 10;case"d12":return 12;case"d20":return 20}}(a))/2*t[a]}),0);return e*(l+n)+a*l},A=function(e){return Math.max(2,2+Math.floor((e-1)/4))},O=n.useEffect,P=n.useState,D=function(e){var a=e.onChange,t=e.level,l=P(0),o=r()(l,2),i=o[0],u=o[1],m=P(!0),s=r()(m,2),d=s[0],h=s[1];return O((function(){a(d?i+A(t):i)}),[i,d,t]),n.createElement(c.a,{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:3},n.createElement(N,{sx:{flexGrow:1},label:"Attack Mods",title:"Any modifiers to hit besides proficiency bonus, such as your attack modifier, Archery, Sharpshooter, +1/2/3 weapons, etc.",name:"to-hit",value:i,onChange:u}),n.createElement(U,{label:"Auto proficiency",title:"If checked, the attacker's Proficiency Bonus will be included in its modifiers on the attack roll(s).",value:d,onChange:h}))},j=t(20),M=t.n(j),W=t(89),B=t.n(W),S=t(246),T=["value","onChange"],F=Object(u.a)(S.a)({minWidth:"8ch",maxWidth:"30ch"}),N=function(e){var a=e.value,t=e.onChange,l=B()(e,T);return n.createElement(F,M()({variant:"outlined",type:"number",value:a||"",onChange:function(e){return t(function(e){var a=parseFloat(e);return isNaN(a)?0:a}(e.target.value))}},l))},R=n.useEffect,I=n.useState,H=function(e){var a=e.value,t=e.onChange,l=e.level,c=I("manual"),o=r()(c,2),i=o[0],u=o[1];return R((function(){"cantrip"===i?t(f(l)):"fighter"===i?t(p(l)):"fighter-ba"===i&&t(p(l)+1)}),[l,i]),n.createElement(n.Fragment,null,n.createElement(m.a,{component:"fieldset"},n.createElement(s.a,{component:"legend",sx:{marginBottom:1}},"Attack Progression"),n.createElement(d.a,{"aria-label":"Attack Progression",defaultValue:"manual",name:"radio-buttons-group",value:i,onChange:function(e){return u(e.target.value)}},n.createElement(h.a,{value:"manual",control:n.createElement(g.a,null),label:n.createElement(N,{label:"Manual",title:"Total number of attacks the attacker makes during a round.",name:"attacks",value:a,size:"small",onChange:t,disabled:"manual"!==i})}),n.createElement(h.a,{value:"fighter",control:n.createElement(g.a,null),label:"Fighter"}),n.createElement(h.a,{value:"fighter-ba",control:n.createElement(g.a,null),label:"Fighter (with BA attack)"}),n.createElement(h.a,{value:"cantrip",control:n.createElement(g.a,null),label:"Cantrip (EB)"}))))},q=t(249),G=["value","onChange","label"],U=function(e){var a=e.value,t=e.onChange,l=e.label,r=B()(e,G);return n.createElement(h.a,{control:n.createElement(q.a,M()({},r,{checked:a,onChange:function(e,a){t(a)}})),label:l})},z=t(90),J=t.n(z);function V(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function L(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?V(Object(t),!0).forEach((function(a){J()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var K=["d4","d6","d8","d10","d12","d20"],Q=Object(u.a)(c.a)((function(e){var a=e.theme;return{gap:a.spacing(3),display:"flex",flexFlow:"row wrap",flex:"1 1 0",maxWidth:"calc(3 * (10ch + ".concat(a.spacing(3),"))")}})),X=Object(u.a)(N)({maxWidth:"10ch"}),Y=function(e){var a=e.die,t=e.value,l=e.onChange;return n.createElement(X,{label:a,name:a,value:t[a],onChange:function(e){return l(L(L({},t),{},J()({},a,e)))}})},Z=function(e){var a=e.value,t=e.onChange;return n.createElement(c.a,{display:"flex",flexDirection:"column"},n.createElement(s.a,{sx:{marginBottom:3}},"Damage Dice"),n.createElement(Q,null,K.map((function(e,l){return n.createElement(Y,{key:l,die:e,value:a,onChange:t})}))))},$=function(e){var a=e.label,t=e.value,l=e.style,r=void 0===l?"decimal":l,c=isNaN(t)?"n/a":new Intl.NumberFormat("en-US",{style:r,maximumFractionDigits:"decimal"===r?10:2}).format(t);return n.createElement(i.a,null,a?"".concat(a,": "):"",c)},_=t(255),ee=t(256),ae=t(257),te=t(258),ne=t(259),le=t(260),re=function(e){var a=e.title,t=e.rows;return n.createElement(_.a,{component:o.a,elevation:1,sx:{maxWidth:"max-content"}},n.createElement(ee.a,null,n.createElement(ae.a,null,n.createElement(te.a,null,n.createElement(ne.a,{colSpan:2,variant:"head",sx:{fontWeight:"h3.fontWeight"}},a))),n.createElement(le.a,null,t.map((function(e){return n.createElement(te.a,{key:e.label},n.createElement(ne.a,null,e.label),n.createElement(ne.a,null,n.createElement($,{value:e.value,style:e.style})))})))))},ce=function(e){var a=e.advantage,t=e.attacks,l=e.critThreshold,r=e.damageDice,o=e.damageMods,i=e.level,u=e.targetAC,m=e.toHitMods,s=y(l,a),d=w(m,u,l,a),h=t*k(d,s,r,o),g=b(i,u,a),v=[{label:"Combined + to hit",style:"decimal",value:m},{label:"Chance to hit AC ".concat(u),style:"percent",value:d},{label:"Baseline chance to hit",style:"percent",value:g.accuracy},{label:"Percentage of baseline",style:"percent",value:d/g.accuracy}],f=[{label:"Average damage per round",style:"decimal",value:h},{label:"Baseline average damage per round",style:"decimal",value:g.damage},{label:"Percentage of baseline",style:"percent",value:h/g.damage}];return n.createElement(c.a,{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:3},n.createElement(re,{title:"Accuracy",rows:v}),n.createElement(re,{title:"Damage",rows:f}))},oe=n.useEffect,ie=n.useState,ue=function(e){var a=e.level,t=e.onChange,l=e.value,o=ie(!1),i=r()(o,2),u=i[0],m=i[1];return oe((function(){var e;u&&t((e=a)<=1/8?12:13+Math.floor(e/3))}),[a,u]),n.createElement(c.a,{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:3},n.createElement(N,{sx:{flexGrow:1},InputProps:{inputProps:{min:0}},label:"Target AC",title:"The Armor Class (AC) of the enemy being attacked.",name:"ac",value:l,onChange:t,disabled:u}),n.createElement(U,{label:"Use average AC",title:"Use the average AC for a monster whose CR equals your level (equal to 13 + CR/3 for CRs above 1/8).",value:u,onChange:m}))},me=n.useState,se=Object(u.a)(c.a)((function(e){var a=e.theme;return{display:"flex",flex:"0 100%",flexDirection:"row",flexWrap:"wrap",height:"100%",width:"100%",padding:a.spacing(1),gap:a.spacing(1)}})),de=Object(u.a)(o.a)((function(e){var a=e.theme;return{display:"flex",flexDirection:"column",padding:a.spacing(3),gap:a.spacing(3),flex:"1 1 0px",minWidth:"20em"}})),he=function(){var e=me(0),a=r()(e,2),t=a[0],l=a[1],c=me(0),o=r()(c,2),u=o[0],m=o[1],s=me(1),d=r()(s,2),h=d[0],g=d[1],f=me("normal"),p=r()(f,2),E=p[0],b=p[1],y=me(0),C=r()(y,2),w=C[0],x=C[1],k=me({d4:0,d6:0,d8:0,d10:0,d12:0,d20:0}),O=r()(k,2),P=O[0],j=O[1],M=me(0),W=r()(M,2),B=W[0],S=W[1],T=me(20),F=r()(T,2),R=F[0],I=F[1],q=A(h);return n.createElement(se,null,n.createElement(de,null,n.createElement(i.a,{variant:"h5"},"Accuracy"),n.createElement(N,{label:"Level/CR (PB = ".concat(q,")"),title:"The level or Challenge Rating (CR) of the attacker, which determines its Proficiency Bonus (PB).",name:"level",value:h,onChange:g,InputProps:{inputProps:{min:0,max:30}}}),n.createElement(D,{value:u,onChange:m,level:h}),n.createElement(ue,{value:t,onChange:l,level:h}),n.createElement(N,{label:"Crit Threshold",title:"The minimum roll on the d20 needed to get a critical hit.",InputProps:{inputProps:{min:1,max:20}},value:R,onChange:I}),n.createElement(v,{value:E,onChange:b})),n.createElement(de,null,n.createElement(i.a,{variant:"h5"},"Damage"),n.createElement(H,{level:h,value:w,onChange:x}),n.createElement(N,{label:"Damage Mods",title:"Any modifiers to damage, such as your attack modifier, Sharpshooter, +1/+2/+3 weapons, etc.",value:B,onChange:S}),n.createElement(Z,{value:P,onChange:j})),n.createElement(de,{sx:{flexGrow:2}},n.createElement(i.a,{variant:"h5"},"Outputs"),n.createElement(ce,{advantage:E,attacks:w,critThreshold:R,damageDice:P,damageMods:B,level:h,targetAC:t,toHitMods:u}),n.createElement(i.a,{component:"p",variant:"subtitle2",maxWidth:"80ch"},"The accuracy and damage baseline is equal to a warlock who begins with 16 CHA, increases it to 18 at 4th level and 20 at 8th level, and attacks using Eldritch Blast with Agonizing Blast and Hex.")))};a.default=function(){return n.createElement(he,null)}}}]);