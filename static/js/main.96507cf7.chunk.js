(this["webpackJsonpcoding-test"]=this["webpackJsonpcoding-test"]||[]).push([[0],{148:function(t,e,n){},149:function(t,e,n){},150:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),s=n(41),u=n.n(s),o=n(6),i=n.n(o),j=n(15),b=n(4),f=n(42),O=(n(148),function(t){var e=t.locationID,n=t.tokenID,r=t.LOCATION_API,s=t.fetchData,u=Object(c.useState)("2020-05-01"),o=Object(b.a)(u,2),i=o[0],j=o[1],O=Object(c.useState)("2020-05-02"),l=Object(b.a)(O,2),d=l[0],p=l[1],h=Object(c.useState)([]),v=Object(b.a)(h,2),x=v[0],m=v[1],g=Object(c.useState)({}),D=Object(b.a)(g,2),k=D[0],I=D[1],N=Object(c.useState)([]),S=Object(b.a)(N,2),w=S[0],A=S[1],y="".concat(r,"/").concat(e,"/alerts?start_date=").concat(i,"&end_date=").concat(d,"&selector=").concat("[ADAM]");return Object(c.useEffect)((function(){e&&s(y,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){return A(t.data)}))}),[y]),Object(c.useEffect)((function(){for(var t=[],e=new Date(i),n=i;n<d;)n=e.toISOString().slice(0,10),t.push(n),e.setDate(e.getDate()+1);m(t)}),[i,d]),Object(c.useEffect)((function(){for(var t=x.reduce((function(t,e){return t[e]=0,t}),{}),e=0;e<w.length;e++){var n=new Date(1e3*w[e].timestamp);t[new Date(n.getTime()-6e4*n.getTimezoneOffset()).toISOString().slice(0,10)]++}I({labels:Object.keys(t),datasets:[{label:"Number of events",data:Object.values(t),backgroundColor:"rgba(32, 121, 199, 0.2)"}]})}),[w]),Object(a.jsxs)("div",{className:"DateFrequencyChart",children:[Object(a.jsxs)("div",{className:"datepicker",children:[Object(a.jsx)("label",{htmlFor:"startDate",children:"From"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"date",value:i,onChange:function(t){return j(t.target.value)}}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{className:"datepicker",children:[Object(a.jsx)("label",{htmlFor:"endDate",children:"To"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"date",value:d,onChange:function(t){return p(t.target.value)}}),Object(a.jsx)("br",{})]}),Object(a.jsx)("div",{className:"Bar",children:Object(a.jsx)(f.Bar,{data:k})})]})}),l=(n(149),function(){var t=Object(c.useState)(""),e=Object(b.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)(""),u=Object(b.a)(s,2),o=u[0],f=u[1],l="https://appsrv.fastsensor.us:8890/",d="".concat(l,"oauth2/token?client_id=").concat("20AF566F","&api_key=").concat("Vu112d0Wmg99bx/ax02bUlNipBEOv3uIPrf73ZNJ8NgvN0qlnhpqYfVP80eXhX2X"),p="".concat(l,"v1/locations"),h=function(){var t=Object(j.a)(i.a.mark((function t(e,n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,n);case 2:return a=t.sent,t.next=5,a.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var t=Object(j.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(d);case 2:e=t.sent,r(e.access_token);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(j.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n?h(p,{headers:{Authorization:"Bearer ".concat(n)}}):null;case 2:e=t.sent,f(e?e.data[0].id:"");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){v()}),[]),Object(c.useEffect)((function(){x()}),[n]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(O,{locationID:o,tokenID:n,LOCATION_API:p,fetchData:h})})});u.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.96507cf7.chunk.js.map