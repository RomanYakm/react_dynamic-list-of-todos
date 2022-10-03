(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(7),s=c.n(a),n=c(5),l=c(2),r=c(3),i=c.n(r),o=c(1),d=(c(13),c(14),c(4)),j=c.n(d),u=c(0),b=function(e){var t=e.todos,c=e.selectedTodo,a=e.setSelectedTodo;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title,n=e.completed;return Object(u.jsxs)("tr",{"data-cy":"todo",className:j()({"has-background-info-light":c===e}),children:[Object(u.jsx)("td",{className:"is-vcentered",children:t}),Object(u.jsx)("td",{className:"is-vcentered",children:n&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-danger":!n},{"has-text-success":n}),children:s})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(e)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:j()("far",{"fa-eye":c!==e},{"fa-eye-slash":c===e})})})})})]},t)}))})]})},h=function(e){var t=e.selectValue,c=e.filterValue,a=e.handleSelect,s=e.handleChange;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return a(e.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(u.jsx)("button",{"aria-label":"close","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return s("")}})})]})]})};function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){return m("/users/".concat(e))},x=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),f=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,a=t.id,s=t.title,r=t.completed,d=t.userId,b=Object(o.useState)(),h=Object(l.a)(b,2),m=h[0],f=h[1],p=Object(o.useState)(!0),v=Object(l.a)(p,2),N=v[0],y=v[1];return Object(o.useEffect)((function(){var e=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(d);case 2:t=e.sent,f(t),y(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),N?Object(u.jsx)(x,{}):Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"close",onClick:function(){return c(null)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:s}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(u.jsx)("strong",{className:j()({"has-text-danger":!r},{"has-text-success":r}),children:r?"Done":"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(null===m||void 0===m?void 0:m.email),children:null===m||void 0===m?void 0:m.name})]})]})]})]})},p=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(o.useState)(!0),r=Object(l.a)(s,2),d=r[0],j=r[1],O=Object(o.useState)(null),p=Object(l.a)(O,2),v=p[0],N=p[1],y=Object(o.useState)("all"),g=Object(l.a)(y,2),w=g[0],S=g[1],k=Object(o.useState)(""),C=Object(l.a)(k,2),T=C[0],L=C[1];Object(o.useEffect)((function(){var e=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/todos");case 2:t=e.sent,a(t),j(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var _=c.filter((function(e){var t=e.title,c=e.completed;switch(w){case"active":return!c&&t.toLowerCase().includes(T.toLowerCase());case"completed":return c&&t.toLowerCase().includes(T.toLowerCase());default:return t.toLowerCase().includes(T.toLowerCase())}}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{selectValue:w,filterValue:T,handleSelect:S,handleChange:L})}),Object(u.jsx)("div",{className:"block",children:d?Object(u.jsx)(x,{}):Object(u.jsx)(b,{todos:_,selectedTodo:v,setSelectedTodo:N})})]})})}),v&&Object(u.jsx)(f,{selectedTodo:v,setSelectedTodo:N})]})};s.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0d55e5d2.chunk.js.map