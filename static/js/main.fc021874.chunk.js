(this.webpackJsonppplfinder=this.webpackJsonppplfinder||[]).push([[0],{113:function(e,n,t){"use strict";t.r(n);var a,i,l,r,c,o,u,s,d,m,f,p,v,b,x,E,h,g,y,j,O,k,C,z,w,S,F=t(0),U=t.n(F),L=t(25),N=t.n(L),A=t(34),D=t(9),J=t(115),M=t(5),V=t(6),T=V.a.div(a||(a=Object(M.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),B=function(e){var n=e.size,t=void 0===n?"14px":n,a=e.children,i=e.bold;return U.a.createElement(J.a,null,U.a.createElement(T,{size:t,bold:i},a))},I=t(28),G=t(13),H=t(142),R=function(e){var n=e.size,t=e.color,a=e.thickness,i=e.variant;return U.a.createElement(H.a,{size:n,color:t,thickness:a,variant:i})},q=t(149),P=t(143),K=V.a.div(i||(i=Object(M.a)([""]))),Q=function(e){var n=e.isChecked,t=e.onChange,a=e.label;e.value;return U.a.createElement(K,null,U.a.createElement(P.a,{control:U.a.createElement(q.a,{checked:n,onChange:function(e){t&&t(a,e.target.checked)},color:"primary"}),label:a}))},W=t(144),X=t(44),Y=t.n(X),Z=t(45),$=t.n(Z),_=V.a.div(l||(l=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),ee=V.a.div(r||(r=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),ne=V.a.div(c||(c=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),te=V.a.div(o||(o=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),ae=V.a.img(u||(u=Object(M.a)(["\n  border-radius: 45%;\n"]))),ie=V.a.div(s||(s=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n"]))),le=V.a.div(d||(d=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),re=V.a.div(m||(m=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),ce=function(e){var n=e.users,t=e.isLoading,a=e.fetchUsers,i=localStorage.getItem("favoriteUsers"),l=Object(F.useState)(JSON.parse(i)),r=Object(G.a)(l,2),c=r[0],o=r[1],u=Object(F.useState)(),s=Object(G.a)(u,2),d=s[0],m=s[1],f=Object(F.useState)([]),p=Object(G.a)(f,2),v=p[0],b=p[1],x=Object(F.useState)(0),E=Object(G.a)(x,2),h=E[0],g=E[1],y=function(){m()};function j(e,n){return U.a.createElement(ne,{key:n,onMouseEnter:function(){return function(e){m(e)}(n)},onMouseLeave:y},U.a.createElement(ae,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),U.a.createElement(te,null,U.a.createElement(B,{size:"22px",bold:!0},null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last),U.a.createElement(B,{size:"14px"},null===e||void 0===e?void 0:e.email),U.a.createElement(B,{size:"14px"},null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name),U.a.createElement(B,{size:"14px"},null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country)),U.a.createElement(le,{onClick:function(){return!1===e.isFavorite?e.isFavorite=!0:e.isFavorite=!1},isVisible:n===d||!0===e.isFavorite},U.a.createElement(W.a,null,U.a.createElement(Y.a,{color:"error"}))),U.a.createElement(le,{onClick:function(){navigator.clipboard.writeText(e.email)},isVisible:n===d},U.a.createElement(W.a,null,U.a.createElement($.a,{color:"primary"}))))}function O(e,t){var a=[];t?(g(h+1),n.forEach((function(n){n.location.country===e&&a.push(n)})),b([].concat(Object(I.a)(v),a))):(g(h-1),b(v.filter((function(n){return n.location.country!==e}))))}return U.a.createElement(_,null,U.a.createElement(re,null,U.a.createElement(Q,{onChange:O,value:"BR",label:"Brazil"}),U.a.createElement(Q,{onChange:O,value:"AU",label:"Australia"}),U.a.createElement(Q,{onChange:O,value:"CA",label:"Canada"}),U.a.createElement(Q,{onChange:O,value:"DE",label:"Germany"}),U.a.createElement(Q,{onChange:O,value:"DN",label:"Denmark"})),U.a.createElement(ee,{onScroll:function(e){var n=e.currentTarget,t=n.scrollTop,i=n.clientHeight,l=n.scrollHeight;0===h&&l-t===i&&a()}},0===h?n.map((function(e,n){return j(e,n)})):v.map((function(e,n){return j(e,n)})),n.map((function(e){return function(e){!0!==e.isFavorite||c.includes(e)||o([].concat(Object(I.a)(c),[e])),!1===e.isFavorite&&c.includes(e)&&o(c.filter((function(n){return n!==e}))),localStorage.setItem("favoriteUsers",JSON.stringify(c))}(e)})),t&&U.a.createElement(ie,null,U.a.createElement(R,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"}))))},oe=t(49),ue=t.n(oe),se=t(77),de=t(78),me=t.n(de),fe=V.a.div(f||(f=Object(M.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),pe=V.a.div(p||(p=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),ve=V.a.div(v||(v=Object(M.a)(["\n  display: flex;\n"]))),be=(V.a.div(b||(b=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=function(){var e=Object(F.useState)([]),n=Object(G.a)(e,2),t=n[0],a=n[1],i=Object(F.useState)(!1),l=Object(G.a)(i,2),r=l[0],c=l[1];function o(){return u.apply(this,arguments)}function u(){return(u=Object(se.a)(ue.a.mark((function e(){var n;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,me.a.get("https://randomuser.me/api/?results=25&page=1");case 3:n=e.sent,c(!1),a(t.concat(n.data.results)),t.map((function(e){return e.isFavorite=!1}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(F.useEffect)((function(){o()}),[]),{users:t,isLoading:r,fetchUsers:o}}(),n=e.users,t=e.isLoading,a=e.fetchUsers;return U.a.createElement(fe,null,U.a.createElement(pe,null,U.a.createElement(ve,null,U.a.createElement(B,{size:"64px",bold:!0},"PplFinder")),U.a.createElement(B,{size:"12",bold:!0},"click mail button to copy email"),U.a.createElement(ce,{users:n,isLoading:t,fetchUsers:a})))}),xe=V.a.div(x||(x=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Ee=V.a.div(E||(E=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),he=V.a.div(h||(h=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),ge=V.a.div(g||(g=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),ye=V.a.img(y||(y=Object(M.a)(["\n  border-radius: 45%;\n"]))),je=V.a.div(j||(j=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Oe=V.a.div(O||(O=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),ke=V.a.div(k||(k=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),Ce=function(e){var n=e.users,t=e.isLoading,a=Object(F.useState)([]),i=Object(G.a)(a,2),l=i[0],r=i[1],c=Object(F.useState)(),o=Object(G.a)(c,2),u=o[0],s=o[1],d=Object(F.useState)([]),m=Object(G.a)(d,2),f=m[0],p=m[1],v=Object(F.useState)(0),b=Object(G.a)(v,2),x=b[0],E=b[1],h=function(){s()};function g(e,n){return U.a.createElement(he,{key:n,onMouseEnter:function(){return function(e){s(e)}(n)},onMouseLeave:h},U.a.createElement(ye,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),U.a.createElement(ge,null,U.a.createElement(B,{size:"22px",bold:!0},null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last),U.a.createElement(B,{size:"14px"},null===e||void 0===e?void 0:e.email),U.a.createElement(B,{size:"14px"},null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name),U.a.createElement(B,{size:"14px"},null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country)),U.a.createElement(Oe,{onClick:function(){return!1===e.isFavorite?e.isFavorite=!0:e.isFavorite=!1},isVisible:n===u||!0===e.isFavorite},U.a.createElement(W.a,null,U.a.createElement(Y.a,{color:"error"}))),U.a.createElement(Oe,{onClick:function(){navigator.clipboard.writeText(e.email)},isVisible:n===u},U.a.createElement(W.a,null,U.a.createElement($.a,{color:"primary"}))))}function y(e,t){var a=[];t?(E(x+1),n.forEach((function(n){n.location.country===e&&a.push(n)})),p([].concat(Object(I.a)(f),a))):(E(x-1),p(f.filter((function(n){return n.location.country!==e}))))}return U.a.createElement(xe,null,U.a.createElement(ke,null,U.a.createElement(Q,{onChange:y,value:"BR",label:"Brazil"}),U.a.createElement(Q,{onChange:y,value:"AU",label:"Australia"}),U.a.createElement(Q,{onChange:y,value:"CA",label:"Canada"}),U.a.createElement(Q,{onChange:y,value:"DE",label:"Germany"}),U.a.createElement(Q,{onChange:y,value:"DN",label:"Denmark"})),U.a.createElement(Ee,null,0===x?n.map((function(e,n){return g(e,n)})):f.map((function(e,n){return g(e,n)})),n.map((function(e){return function(e){!0!==e.isFavorite||l.includes(e)||r([].concat(Object(I.a)(l),[e])),!1===e.isFavorite&&l.includes(e)&&r(l.filter((function(n){return n!==e}))),localStorage.setItem("favoriteUsers",JSON.stringify(l))}(e)})),t&&U.a.createElement(je,null,U.a.createElement(R,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"}))))},ze=V.a.div(C||(C=Object(M.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),we=V.a.div(z||(z=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),Se=V.a.div(w||(w=Object(M.a)(["\n  display: flex;\n"]))),Fe=(V.a.div(S||(S=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){return U.a.createElement(ze,null,U.a.createElement(we,null,U.a.createElement(Se,null,U.a.createElement(B,{size:"64px",bold:!0},"favorite people")),U.a.createElement(B,{size:"12",bold:!0},"click mail button to copy email"),U.a.createElement(Ce,{users:JSON.parse(localStorage.getItem("favoriteUsers")),isLoading:!1})))}),Ue=t(79),Le=t(145),Ne=t(146),Ae=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},a=U.a.useMemo((function(){return Object(Ue.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return U.a.createElement(Le.a,{theme:a},U.a.createElement(Ne.a,null),n)},De=t(150),Je=t(148),Me=t(147),Ve=function(){var e=Object(F.useState)(0),n=Object(G.a)(e,2),t=n[0],a=n[1];return U.a.createElement(De.a,{position:"static",color:"transparent",style:{position:"fixed",top:0}},U.a.createElement(Je.a,{value:t,onChange:function(e,n){a(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary"},U.a.createElement(Me.a,{label:"home",index:0,to:"/",component:A.b}),U.a.createElement(Me.a,{label:"Favorites",index:1,to:"/Favorites",component:A.b})))},Te=function(){return U.a.createElement(Ae,null,U.a.createElement(A.a,null,U.a.createElement(Ve,null),U.a.createElement(D.c,null,U.a.createElement(D.a,{exact:!0,path:"/",render:function(){return U.a.createElement(be,null)}}),U.a.createElement(D.a,{path:"/Favorites",render:function(){return U.a.createElement(Fe,null)}})," />")))};N.a.render(U.a.createElement(Te,null),document.querySelector("#root"))},83:function(e,n,t){e.exports=t(113)}},[[83,1,2]]]);
//# sourceMappingURL=main.fc021874.chunk.js.map