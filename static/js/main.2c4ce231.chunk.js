(this["webpackJsonpkellys-law"]=this["webpackJsonpkellys-law"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),s=n.n(i),c=n(5),r=n.n(c),l=(n(12),n.p,n(13),n(2)),j=(n(14),n(4)),b=n.n(j),d=n(6),u=n.n(d);function o(){var e=Object(i.useState)(2e3),t=Object(l.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)(1e3),r=Object(l.a)(c,2),j=r[0],d=r[1],o=Object(i.useState)(55),h=Object(l.a)(o,2),p=h[0],x=h[1],O=Object(i.useState)(20),m=Object(l.a)(O,2),v=m[0],g=m[1],f=Object(i.useState)({title:{text:"Line Graph"},series:[{name:"Bankroll",data:[]}],xAxis:{title:{text:"Number of bets"}},yAxis:{title:{text:"Dollars"}},credits:{enabled:!1}}),w=Object(l.a)(f,2),N=w[0],k=w[1];function S(e){return Math.random()<=e}function y(e){"bankroll"===e.target.name?s(parseInt(e.target.value)):"profit"===e.target.name?d(parseInt(e.target.value)):"win"===e.target.name&&(x(e.target.value),g(Number((100*(e.target.value/100*2-1)).toFixed(2))))}return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Investment Strategy"}),Object(a.jsxs)("div",{className:"information-box",children:[Object(a.jsxs)("div",{className:"info-detail",children:[Object(a.jsx)("label",{children:"Bankroll"}),Object(a.jsxs)("div",{className:"input-wrapper",children:["$",Object(a.jsx)("input",{name:"bankroll",type:"number",min:"0",onChange:y,value:n})]})]}),Object(a.jsxs)("div",{className:"info-detail",children:[Object(a.jsx)("label",{children:"Profit Target"}),Object(a.jsxs)("div",{className:"input-wrapper",children:["$",Object(a.jsx)("input",{name:"profit",type:"number",min:"0",onChange:y,value:j})]})]}),Object(a.jsxs)("div",{className:"info-detail",children:[Object(a.jsx)("label",{children:"Win Percentage"}),Object(a.jsxs)("div",{className:"input-wrapper-win",children:[Object(a.jsx)("input",{name:"win",id:"win",min:"50",max:"100",onChange:y,value:p}),"%"]})]}),Object(a.jsxs)("div",{className:"info-detail",children:[Object(a.jsx)("label",{children:"Wager Percentage"}),Object(a.jsxs)("div",{className:"input-wrapper-wager",children:[Object(a.jsx)("input",{disabled:!0,value:v}),"%"]})]}),Object(a.jsx)("div",{className:"button-simulate-wrapper",children:Object(a.jsx)("button",{onClick:function(){for(var e=p/100,t=v/100,a=[],i=n;i>1&&i<n+j&&a.length<10001;){var s=i*t;S(e)?i+=s:i-=s,a.push(parseInt(i.toFixed(2)))}k({series:[{name:"Bankroll",data:a}]})},children:"Simulate"})})]}),Object(a.jsx)("div",{className:"line-chart",children:Object(a.jsx)(u.a,{highcharts:b.a,options:N,updateArgs:[!0]})})]})}var h=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(o,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.2c4ce231.chunk.js.map