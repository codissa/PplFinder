(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{114:function(e,n,t){"use strict";t.r(n);var i,c,a,r,o,s,l,j,d,u,b,x,f,O,v,p,h,m,g,y,C,k,z,w,S,F,U=t(0),L=t.n(U),E=t(26),N=t.n(E),A=t(35),D=t(10),J=t(116),M=t(6),V=t(7),T=V.a.div(i||(i=Object(M.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),B=t(2),I=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,c=e.bold;return Object(B.jsx)(J.a,{children:Object(B.jsx)(T,{size:t,bold:c,children:i})})},G=t(29),H=t(14),R=t(143),q=function(e){var n=e.size,t=e.color,i=e.thickness,c=e.variant;return Object(B.jsx)(R.a,{size:n,color:t,thickness:i,variant:c})},P=t(150),K=t(144),Q=V.a.div(c||(c=Object(M.a)([""]))),W=function(e){var n=e.isChecked,t=e.onChange,i=e.label;e.value;return Object(B.jsx)(Q,{children:Object(B.jsx)(K.a,{control:Object(B.jsx)(P.a,{checked:n,onChange:function(){t&&t(i,event.target.checked)},color:"primary"}),label:i})})},X=t(145),Y=t(45),Z=t.n(Y),$=t(46),_=t.n($),ee=V.a.div(a||(a=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),ne=V.a.div(r||(r=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),te=V.a.div(o||(o=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),ie=V.a.div(s||(s=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),ce=V.a.img(l||(l=Object(M.a)(["\n  border-radius: 45%;\n"]))),ae=V.a.div(j||(j=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n"]))),re=V.a.div(d||(d=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),oe=V.a.div(u||(u=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),se=function(e){var n=e.users,t=e.isLoading,i=e.fetchUsers,c=Object(U.useState)(JSON.parse(localStorage.getItem("favoriteUsers"))),a=Object(H.a)(c,2),r=a[0],o=a[1],s=Object(U.useState)(),l=Object(H.a)(s,2),j=l[0],d=l[1],u=Object(U.useState)([]),b=Object(H.a)(u,2),x=b[0],f=b[1],O=Object(U.useState)(0),v=Object(H.a)(O,2),p=v[0],h=v[1],m=function(){d()};function g(e,n){return Object(B.jsxs)(te,{onMouseEnter:function(){return function(e){d(e)}(n)},onMouseLeave:m,children:[Object(B.jsx)(ce,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(B.jsxs)(ie,{children:[Object(B.jsxs)(I,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(B.jsx)(I,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(B.jsxs)(I,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(B.jsxs)(I,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(B.jsx)(re,{onClick:function(){return!1===e.isFavorite?e.isFavorite=!0:e.isFavorite=!1},isVisible:n===j||!0===e.isFavorite,children:Object(B.jsx)(X.a,{children:Object(B.jsx)(Z.a,{color:"error"})})}),Object(B.jsx)(re,{onClick:function(){navigator.clipboard.writeText(e.email)},isVisible:n===j,children:Object(B.jsx)(X.a,{children:Object(B.jsx)(_.a,{color:"primary"})})})]},n)}function y(e,t){var i=[];t?(h(p+1),n.forEach((function(n){n.location.country===e&&i.push(n)})),f([].concat(Object(G.a)(x),i))):(h(p-1),f(x.filter((function(n){return n.location.country!==e}))))}return Object(B.jsxs)(ee,{children:[Object(B.jsxs)(oe,{children:[Object(B.jsx)(W,{onChange:y,value:"BR",label:"Brazil"}),Object(B.jsx)(W,{onChange:y,value:"AU",label:"Australia"}),Object(B.jsx)(W,{onChange:y,value:"CA",label:"Canada"}),Object(B.jsx)(W,{onChange:y,value:"DE",label:"Germany"}),Object(B.jsx)(W,{onChange:y,value:"DN",label:"Denmark"})]}),Object(B.jsxs)(ne,{onScroll:function(e){var n=e.currentTarget,t=n.scrollTop,c=n.clientHeight,a=n.scrollHeight;0===p&&a-t===c&&i()},children:[0===p?n.map((function(e,n){return g(e,n)})):x.map((function(e,n){return g(e,n)})),n.map((function(e){return function(e){!0!==e.isFavorite||r.includes(e)||o([].concat(Object(G.a)(r),[e])),!1===e.isFavorite&&r.includes(e)&&o(r.filter((function(n){return n!==e}))),localStorage.setItem("favoriteUsers",JSON.stringify(r))}(e)})),t&&Object(B.jsx)(ae,{children:Object(B.jsx)(q,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})},le=t(51),je=t.n(le),de=t(78),ue=t(79),be=t.n(ue),xe=V.a.div(b||(b=Object(M.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),fe=V.a.div(x||(x=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),Oe=V.a.div(f||(f=Object(M.a)(["\n  display: flex;\n"]))),ve=(V.a.div(O||(O=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=function(){var e=Object(U.useState)([]),n=Object(H.a)(e,2),t=n[0],i=n[1],c=Object(U.useState)(!1),a=Object(H.a)(c,2),r=a[0],o=a[1];function s(){return l.apply(this,arguments)}function l(){return(l=Object(de.a)(je.a.mark((function e(){var n;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,be.a.get("https://randomuser.me/api/?results=25&page=1");case 3:n=e.sent,o(!1),i(t.concat(n.data.results)),t.map((function(e){return e.isFavorite=!1}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(U.useEffect)((function(){s()}),[]),{users:t,isLoading:r,fetchUsers:s}}(),n=e.users,t=e.isLoading,i=e.fetchUsers;return Object(B.jsx)(xe,{children:Object(B.jsxs)(fe,{children:[Object(B.jsx)(Oe,{children:Object(B.jsx)(I,{size:"64px",bold:!0,children:"PplFinder"})}),Object(B.jsx)(se,{users:n,isLoading:t,fetchUsers:i})]})})}),pe=V.a.div(v||(v=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),he=V.a.div(p||(p=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),me=V.a.div(h||(h=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),ge=V.a.div(m||(m=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),ye=V.a.img(g||(g=Object(M.a)(["\n  border-radius: 45%;\n"]))),Ce=V.a.div(y||(y=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n"]))),ke=V.a.div(C||(C=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),ze=V.a.div(k||(k=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),we=function(e){var n=e.users,t=e.isLoading,i=Object(U.useState)([]),c=Object(H.a)(i,2),a=c[0],r=c[1],o=Object(U.useState)(),s=Object(H.a)(o,2),l=s[0],j=s[1],d=Object(U.useState)([]),u=Object(H.a)(d,2),b=u[0],x=u[1],f=Object(U.useState)(0),O=Object(H.a)(f,2),v=O[0],p=O[1],h=function(){j()};function m(e,n){return Object(B.jsxs)(me,{onMouseEnter:function(){return function(e){j(e)}(n)},onMouseLeave:h,children:[Object(B.jsx)(ye,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(B.jsxs)(ge,{children:[Object(B.jsxs)(I,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(B.jsx)(I,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(B.jsxs)(I,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(B.jsxs)(I,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(B.jsx)(ke,{onClick:function(){return!1===e.isFavorite?e.isFavorite=!0:e.isFavorite=!1},isVisible:n===l||!0===e.isFavorite,children:Object(B.jsx)(X.a,{children:Object(B.jsx)(Z.a,{color:"error"})})}),Object(B.jsx)(ke,{onClick:function(){navigator.clipboard.writeText(e.email)},isVisible:n===l,children:Object(B.jsx)(X.a,{children:Object(B.jsx)(_.a,{color:"primary"})})})]},n)}function g(e,t){var i=[];t?(p(v+1),n.forEach((function(n){n.location.country===e&&i.push(n)})),x([].concat(Object(G.a)(b),i))):(p(v-1),x(b.filter((function(n){return n.location.country!==e}))))}return Object(B.jsxs)(pe,{children:[Object(B.jsxs)(ze,{children:[Object(B.jsx)(W,{onChange:g,value:"BR",label:"Brazil"}),Object(B.jsx)(W,{onChange:g,value:"AU",label:"Australia"}),Object(B.jsx)(W,{onChange:g,value:"CA",label:"Canada"}),Object(B.jsx)(W,{onChange:g,value:"DE",label:"Germany"}),Object(B.jsx)(W,{onChange:g,value:"DN",label:"Denmark"})]}),Object(B.jsxs)(he,{children:[0===v?n.map((function(e,n){return m(e,n)})):b.map((function(e,n){return m(e,n)})),n.map((function(e){return function(e){!0!==e.isFavorite||a.includes(e)||r([].concat(Object(G.a)(a),[e])),!1===e.isFavorite&&a.includes(e)&&r(a.filter((function(n){return n!==e}))),localStorage.setItem("favoriteUsers",JSON.stringify(a))}(e)})),t&&Object(B.jsx)(Ce,{children:Object(B.jsx)(q,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})},Se=V.a.div(z||(z=Object(M.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),Fe=V.a.div(w||(w=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),Ue=V.a.div(S||(S=Object(M.a)(["\n  display: flex;\n"]))),Le=(V.a.div(F||(F=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){return Object(B.jsx)(Se,{children:Object(B.jsxs)(Fe,{children:[Object(B.jsx)(Ue,{children:Object(B.jsx)(I,{size:"64px",bold:!0,children:"favorite people"})}),Object(B.jsx)(we,{users:JSON.parse(localStorage.getItem("favoriteUsers")),isLoading:!1})]})})}),Ee=t(80),Ne=t(146),Ae=t(147),De=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=L.a.useMemo((function(){return Object(Ee.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(B.jsxs)(Ne.a,{theme:i,children:[Object(B.jsx)(Ae.a,{}),n]})},Je=t(151),Me=t(149),Ve=t(148),Te=function(){var e=Object(U.useState)(0),n=Object(H.a)(e,2),t=n[0],i=n[1];return Object(B.jsx)(Je.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(B.jsxs)(Me.a,{value:t,onChange:function(e,n){i(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(B.jsx)(Ve.a,{label:"home",index:0,to:"/",component:A.b}),Object(B.jsx)(Ve.a,{label:"Favorites",index:1,to:"/Favorites",component:A.b})]})})},Be=function(){return Object(B.jsx)(De,{children:Object(B.jsxs)(A.a,{children:[Object(B.jsx)(Te,{}),Object(B.jsxs)(D.c,{children:[Object(B.jsx)(D.a,{exact:!0,path:"/",render:function(){return Object(B.jsx)(ve,{})}}),Object(B.jsx)(D.a,{path:"/Favorites",render:function(){return Object(B.jsx)(Le,{})}})," />"]})]})})};N.a.render(Object(B.jsx)(Be,{}),document.querySelector("#root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.dec01589.chunk.js.map