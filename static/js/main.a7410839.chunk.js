(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{114:function(e,n,t){"use strict";t.r(n);var i,c,a,r,o,l,s,j,d,u,b,x,f,O,p,v,h,m,g,y,C,k,z,S,w,F,U=t(0),L=t.n(U),E=t(27),N=t.n(E),A=t(23),D=t(13),J=t(35),M=t(10),V=t(116),T=t(6),B=t(7),I=B.a.div(i||(i=Object(T.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),G=t(2),H=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,c=e.bold;return Object(G.jsx)(V.a,{children:Object(G.jsx)(I,{size:t,bold:c,children:i})})},R=t(143),q=function(e){var n=e.size,t=e.color,i=e.thickness,c=e.variant;return Object(G.jsx)(R.a,{size:n,color:t,thickness:i,variant:c})},P=t(150),K=t(144),Q=B.a.div(c||(c=Object(T.a)([""]))),W=function(e){var n=e.isChecked,t=e.onChange,i=e.label;e.value;return Object(G.jsx)(Q,{children:Object(G.jsx)(K.a,{control:Object(G.jsx)(P.a,{checked:n,onChange:function(){t&&t(i,event.target.checked)},color:"primary"}),label:i})})},X=t(145),Y=t(45),Z=t.n(Y),$=t(46),_=t.n($),ee=B.a.div(a||(a=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),ne=B.a.div(r||(r=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),te=B.a.div(o||(o=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),ie=B.a.div(l||(l=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),ce=B.a.img(s||(s=Object(T.a)(["\n  border-radius: 45%;\n"]))),ae=B.a.div(j||(j=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n"]))),re=B.a.div(d||(d=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),oe=B.a.div(u||(u=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),le=function(e){var n=e.users,t=e.isLoading,i=e.fetchUsers,c=Object(U.useState)(JSON.parse(localStorage.getItem("favoriteUsers"))),a=Object(D.a)(c,2),r=a[0],o=a[1],l=Object(U.useState)(),s=Object(D.a)(l,2),j=s[0],d=s[1],u=Object(U.useState)([]),b=Object(D.a)(u,2),x=b[0],f=b[1],O=Object(U.useState)(0),p=Object(D.a)(O,2),v=p[0],h=p[1],m=function(){d()};function g(e,n){return Object(G.jsxs)(te,{onMouseEnter:function(){return function(e){d(e)}(n)},onMouseLeave:m,children:[Object(G.jsx)(ce,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(G.jsxs)(ie,{children:[Object(G.jsxs)(H,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(G.jsx)(H,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(G.jsxs)(H,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(G.jsxs)(H,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(G.jsx)(re,{onClick:function(){return!1===e.isFavorite?e.isFavorite=!0:e.isFavorite=!1},isVisible:n===j||!0===e.isFavorite,children:Object(G.jsx)(X.a,{children:Object(G.jsx)(Z.a,{color:"error"})})}),Object(G.jsx)(re,{onClick:function(){navigator.clipboard.writeText(e.email)},isVisible:n===j,children:Object(G.jsx)(X.a,{children:Object(G.jsx)(_.a,{color:"primary"})})})]},n)}function y(e,t){var i=[];t?(h(v+1),n.forEach((function(n){n.location.country===e&&i.push(n)})),f([].concat(Object(A.a)(x),i))):(h(v-1),f(x.filter((function(n){return n.location.country!==e}))))}return Object(G.jsxs)(ee,{children:[Object(G.jsxs)(oe,{children:[Object(G.jsx)(W,{onChange:y,value:"BR",label:"Brazil"}),Object(G.jsx)(W,{onChange:y,value:"AU",label:"Australia"}),Object(G.jsx)(W,{onChange:y,value:"CA",label:"Canada"}),Object(G.jsx)(W,{onChange:y,value:"DE",label:"Germany"}),Object(G.jsx)(W,{onChange:y,value:"DN",label:"Denmark"})]}),Object(G.jsxs)(ne,{onScroll:function(e){var n=e.currentTarget,t=n.scrollTop,c=n.clientHeight,a=n.scrollHeight;0===v&&a-t===c&&i()},children:[0===v?n.map((function(e,n){return g(e,n)})):x.map((function(e,n){return g(e,n)})),n.map((function(e){return function(e){!0!==e.isFavorite||r.includes(e)||o([].concat(Object(A.a)(r),[e])),!1===e.isFavorite&&r.includes(e)&&o(r.filter((function(n){return n!==e}))),localStorage.setItem("favoriteUsers",JSON.stringify(r))}(e)})),t&&Object(G.jsx)(ae,{children:Object(G.jsx)(q,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})},se=t(51),je=t.n(se),de=t(78),ue=t(79),be=t.n(ue),xe=B.a.div(b||(b=Object(T.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),fe=B.a.div(x||(x=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),Oe=B.a.div(f||(f=Object(T.a)(["\n  display: flex;\n"]))),pe=(B.a.div(O||(O=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=function(){var e=Object(U.useState)([]),n=Object(D.a)(e,2),t=n[0],i=n[1],c=Object(U.useState)(!1),a=Object(D.a)(c,2),r=a[0],o=a[1];function l(){return s.apply(this,arguments)}function s(){return(s=Object(de.a)(je.a.mark((function e(){var n;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,be.a.get("https://randomuser.me/api/?results=25&page=1");case 3:n=e.sent,o(!1),i(t.concat(n.data.results)),t.map((function(e){return e.isFavorite=!1}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(U.useEffect)((function(){l()}),[]),{users:t,isLoading:r,fetchUsers:l}}(),n=e.users,t=e.isLoading,i=e.fetchUsers;return Object(G.jsx)(xe,{children:Object(G.jsxs)(fe,{children:[Object(G.jsx)(Oe,{children:Object(G.jsx)(H,{size:"64px",bold:!0,children:"PplFinder"})}),Object(G.jsx)(H,{size:"12",bold:!0,children:"click mail icon to copy to clipboard"}),Object(G.jsx)(le,{users:n,isLoading:t,fetchUsers:i})]})})}),ve=B.a.div(p||(p=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),he=B.a.div(v||(v=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),me=B.a.div(h||(h=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),ge=B.a.div(m||(m=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),ye=B.a.img(g||(g=Object(T.a)(["\n  border-radius: 45%;\n"]))),Ce=B.a.div(y||(y=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n"]))),ke=B.a.div(C||(C=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),ze=B.a.div(k||(k=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),Se=function(e){var n=e.users,t=e.isLoading,i=Object(U.useState)([]),c=Object(D.a)(i,2),a=c[0],r=c[1],o=Object(U.useState)(),l=Object(D.a)(o,2),s=l[0],j=l[1],d=Object(U.useState)([]),u=Object(D.a)(d,2),b=u[0],x=u[1],f=Object(U.useState)(0),O=Object(D.a)(f,2),p=O[0],v=O[1],h=function(){j()};function m(e,n){return Object(G.jsxs)(me,{onMouseEnter:function(){return function(e){j(e)}(n)},onMouseLeave:h,children:[Object(G.jsx)(ye,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(G.jsxs)(ge,{children:[Object(G.jsxs)(H,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(G.jsx)(H,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(G.jsxs)(H,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(G.jsxs)(H,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(G.jsx)(ke,{onClick:function(){return!1===e.isFavorite?e.isFavorite=!0:e.isFavorite=!1},isVisible:n===s||!0===e.isFavorite,children:Object(G.jsx)(X.a,{children:Object(G.jsx)(Z.a,{color:"error"})})}),Object(G.jsx)(ke,{onClick:function(){navigator.clipboard.writeText(e.email)},isVisible:n===s,children:Object(G.jsx)(X.a,{children:Object(G.jsx)(_.a,{color:"primary"})})})]},n)}function g(e,t){var i=[];t?(v(p+1),n.forEach((function(n){n.location.country===e&&i.push(n)})),x([].concat(Object(A.a)(b),i))):(v(p-1),x(b.filter((function(n){return n.location.country!==e}))))}return Object(G.jsxs)(ve,{children:[Object(G.jsxs)(ze,{children:[Object(G.jsx)(W,{onChange:g,value:"BR",label:"Brazil"}),Object(G.jsx)(W,{onChange:g,value:"AU",label:"Australia"}),Object(G.jsx)(W,{onChange:g,value:"CA",label:"Canada"}),Object(G.jsx)(W,{onChange:g,value:"DE",label:"Germany"}),Object(G.jsx)(W,{onChange:g,value:"DN",label:"Denmark"})]}),Object(G.jsxs)(he,{children:[0===p?n.map((function(e,n){return m(e,n)})):b.map((function(e,n){return m(e,n)})),n.map((function(e){return function(e){!0!==e.isFavorite||a.includes(e)||r([].concat(Object(A.a)(a),[e])),!1===e.isFavorite&&a.includes(e)&&r(a.filter((function(n){return n!==e}))),localStorage.setItem("favoriteUsers",JSON.stringify(a))}(e)})),t&&Object(G.jsx)(Ce,{children:Object(G.jsx)(q,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})},we=B.a.div(z||(z=Object(T.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),Fe=B.a.div(S||(S=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),Ue=B.a.div(w||(w=Object(T.a)(["\n  display: flex;\n"]))),Le=(B.a.div(F||(F=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){return Object(G.jsx)(we,{children:Object(G.jsxs)(Fe,{children:[Object(G.jsx)(Ue,{children:Object(G.jsx)(H,{size:"64px",bold:!0,children:"favorite people"})}),Object(G.jsx)(H,{size:"12",bold:!0,children:"click mail icon to copy to clipboard"}),Object(G.jsx)(Se,{users:JSON.parse(localStorage.getItem("favoriteUsers")),isLoading:!1})]})})}),Ee=t(80),Ne=t(146),Ae=t(147),De=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=L.a.useMemo((function(){return Object(Ee.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(G.jsxs)(Ne.a,{theme:i,children:[Object(G.jsx)(Ae.a,{}),n]})},Je=t(151),Me=t(149),Ve=t(148),Te=function(){var e=Object(U.useState)(0),n=Object(D.a)(e,2),t=n[0],i=n[1];return Object(G.jsx)(Je.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(G.jsxs)(Me.a,{value:t,onChange:function(e,n){i(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(G.jsx)(Ve.a,{label:"home",index:0,to:"/",component:J.b}),Object(G.jsx)(Ve.a,{label:"Favorites",index:1,to:"/Favorites",component:J.b})]})})},Be=function(){var e=Object(U.useState)([]),n=Object(D.a)(e,2),t=n[0],i=n[1],c=function(e){t.some((function(n){return n.email==e.email}))?i(t.filter((function(n){return n.email!==e.email}))):i([].concat(Object(A.a)(t),[e])),console.log(t)};return Object(G.jsx)(De,{children:Object(G.jsxs)(J.a,{children:[Object(G.jsx)(Te,{}),Object(G.jsxs)(M.c,{children:[Object(G.jsx)(M.a,{exact:!0,path:"/",render:function(){return Object(G.jsx)(pe,{addFavorite:c})}}),Object(G.jsx)(M.a,{path:"/Favorites",render:function(){return Object(G.jsx)(Le,{favoriteUser:t})}})," />"]})]})})};N.a.render(Object(G.jsx)(Be,{}),document.querySelector("#root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.a7410839.chunk.js.map