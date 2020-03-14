(this["webpackJsonpword-frequency"]=this["webpackJsonpword-frequency"]||[]).push([[0],{15:function(n,e,t){n.exports=t(24)},24:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),c=t(8),a=t.n(c),u=t(3),i=t(1);var l=function(n,e){var t=localStorage.getItem(n),o=t?JSON.parse(t):e,c=Object(r.useState)(o),a=Object(u.a)(c,2),i=a[0],l=a[1];return Object(r.useEffect)((function(){localStorage.setItem(n,JSON.stringify(i))}),[n,i]),[i,l]},f={theme:"dark",colors:{primary:"#232831",secondary:"#393e46",text:"#ffffff"}},m={theme:"light",colors:{primary:"#eeeeee",secondary:"#929aab",text:"#393e46"}},s=t(2);function d(){var n=Object(s.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: 0;\n    font-family: 'Muli', sans-serif;\n  }\n\n  html, body, #root {\n    background: ",";\n  }\n"]);return d=function(){return n},n}var b=Object(i.c)(d(),(function(n){return n.theme.colors.primary}));function p(){var n=Object(s.a)(["\n  width: 100%;\n  resize: none;\n  height: 320px;\n  font-size: 1.125rem;\n  padding: 8px;\n  background: ",";\n  border: none;\n  color: ",";\n"]);return p=function(){return n},n}function h(){var n=Object(s.a)(["\n  max-width: 1140px;\n  width: 100%;\n  margin: 0 auto;\n  background: ",";\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  padding: 16px;\n  margin-top: 10vh;\n"]);return h=function(){return n},n}var g=i.d.div(h(),(function(n){return n.theme.colors.secondary})),v=i.d.textarea(p(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.text})),x=t(4),j=t(13),O=Object(r.createContext)({text:"",setText:function(){},countWords:function(){},countChars:function(){},wordFrequency:function(){}}),y=function(n){var e=n.children,t=Object(r.useState)(""),c=Object(u.a)(t,2),a=c[0],i=c[1],l=function(){return a.split(/[\s,.!?:]+/).filter((function(n){return""!==n})).length};return o.a.createElement(O.Provider,{value:{text:a,setText:i,countWords:l,countChars:function(){return a.length},wordFrequency:function(){var n=a.split(/[\s,.!?:]+/).filter((function(n){return""!==n}));n=n.reduce((function(n,e){var t=e.trim().toLowerCase();return Object(j.a)({},n,{},Object(x.a)({},t,n[t]?n[t]+1:1))}),{});var e=[];return Object.keys(n).forEach((function(t){var r=(n[t]/l()*100).toFixed(2);e.push([t,n[t],r])})),e.sort((function(n,e){return e[1]-n[1]}))}}},e)};function E(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-around;\n  background: ",";\n  margin-bottom: 16px;\n  color: ",";\n"]);return E=function(){return n},n}var k=i.d.div(E(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.text}));function w(){var n=Object(s.a)(["\n  margin-top: 8px;\n  font-size: 1.5rem;\n  letter-spacing: 0.25rem;\n"]);return w=function(){return n},n}function C(){var n=Object(s.a)(["\n  font-size: 2rem;\n  font-weight: bold;\n"]);return C=function(){return n},n}function z(){var n=Object(s.a)(["\n  text-align: center;\n  padding: 16px;\n"]);return z=function(){return n},n}var S=i.d.div(z()),q=i.d.p(C()),T=i.d.p(w()),F=function(n){var e=n.count,t=n.item;return o.a.createElement(S,null,o.a.createElement(q,null,e),o.a.createElement(T,null,t))},W=function(){var n=Object(r.useContext)(O),e=n.countChars,t=n.countWords,c=e(),a=t();return o.a.createElement(k,null,o.a.createElement(F,{count:c,item:"Characters"}),o.a.createElement(F,{count:a,item:"Words"}))};function J(){var n=Object(s.a)(["\n  height: 128px;\n  background: #aaa;\n  animation: fading 1.5s infinite;\n\n  @keyframes fading {\n    0% {\n      opacity: 0.1;\n    }\n    50% {\n      opacity: 0.2;\n    }\n    100% {\n      opacity: 0.1;\n    }\n  }\n"]);return J=function(){return n},n}function I(){var n=Object(s.a)([""]);return I=function(){return n},n}function N(){var n=Object(s.a)(["\n  list-style-type: none;\n  margin-top: 8px;\n  color: ",";\n"]);return N=function(){return n},n}function P(){var n=Object(s.a)(["\n  font-size: 1.5rem;\n  color: ",";\n"]);return P=function(){return n},n}function B(){var n=Object(s.a)(["\n  margin-top: 16px;\n  padding: 16px;\n  background: ",";\n"]);return B=function(){return n},n}var L,M=i.d.div(B(),(function(n){return n.theme.colors.primary})),A=i.d.p(P(),(function(n){return n.theme.colors.text})),D=i.d.ul(N(),(function(n){return n.theme.colors.text})),G=i.d.li(I()),H=i.d.div(J()),K=function(){var n=Object(r.useContext)(O),e=n.wordFrequency,t=n.text,c=Object(r.useState)([]),a=Object(u.a)(c,2),i=a[0],l=a[1],f=Object(r.useState)(!1),m=Object(u.a)(f,2),s=m[0],d=m[1];return Object(r.useEffect)((function(){L&&(d(!0),clearTimeout(L)),L=setTimeout((function(){l(e),d(!1)}),1e3)}),[t,e]),i.length>0&&o.a.createElement(M,null,o.a.createElement(A,null,"Word Frequency:"),o.a.createElement(D,null,s?o.a.createElement(H,null):i.map((function(n){return o.a.createElement(G,{key:n[0]},"".concat(n[1]," - ").concat(n[0]," (").concat(n[2],"%)"))}))))},Q=function(){var n=Object(r.useContext)(O),e=n.text,t=n.setText;return o.a.createElement(g,null,o.a.createElement(W,null),o.a.createElement(v,{value:e,onChange:function(n){return t(n.target.value)},placeholder:"Paste or write the text here..."}),o.a.createElement(K,null))},R=t(6);function U(){var n=Object(s.a)(["\n  color: ",";\n  background: none;\n  border: none;\n  font-size: 1.125rem;\n"]);return U=function(){return n},n}function V(){var n=Object(s.a)(["\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: ",";\n  padding: 0 24px;\n\n  h1 {\n    font-size: 1rem;\n    color: ",";\n  }\n"]);return V=function(){return n},n}var X=i.d.div(V(),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.text})),Y=i.d.button(U(),(function(n){return n.theme.colors.text})),Z=function(n){var e=n.toggleTheme,t=Object(r.useContext)(i.a).theme;return o.a.createElement(X,null,o.a.createElement("h1",null,"Word Frequency"),o.a.createElement(Y,{onClick:e},"dark"===t?o.a.createElement(R.a,null):o.a.createElement(R.b,null)))};var $=function(){var n=l("theme",f),e=Object(u.a)(n,2),t=e[0],r=e[1];return o.a.createElement(i.b,{theme:t},o.a.createElement(y,null,o.a.createElement(Z,{toggleTheme:function(){r("dark"===t.theme?m:f)}}),o.a.createElement(Q,null),o.a.createElement(b,null)))};a.a.render(o.a.createElement($,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0551087d.chunk.js.map