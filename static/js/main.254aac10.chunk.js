(this["webpackJsonpcoding-test"]=this["webpackJsonpcoding-test"]||[]).push([[0],{148:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(41),u=n.n(s),o=n(6),i=n.n(o),j=n(15),b=n(4),l=n(42),f=(n(148),function(e){var t=e.tokenID,n=e.locationID,r=e.LOCATION_API,s=e.fetchData,u=Object(c.useState)("2020-05-01"),o=Object(b.a)(u,2),i=o[0],j=o[1],f=Object(c.useState)("2020-05-10"),O=Object(b.a)(f,2),d=O[0],h=O[1],p=Object(c.useState)([]),v=Object(b.a)(p,2),x=v[0],m=v[1],g=Object(c.useState)([]),D=Object(b.a)(g,2),y=D[0],k=D[1],w=Object(c.useState)({}),I=Object(b.a)(w,2),N=I[0],S=I[1],A="".concat(r,"/").concat(n,"/alerts?start_date=").concat(i,"&end_date=").concat(d,"&selector=").concat("[ADAM]"),F=function(e){var t=new Date(1e3*e);return new Date(t.getTime()-6e4*t.getTimezoneOffset()).toISOString().slice(0,10)};Object(c.useEffect)((function(){n&&s(A,{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return k(e.data)}))}),[A]),Object(c.useEffect)((function(){var e=new Date(i),t=new Date(d),n=Math.abs(e.getFullYear()-t.getFullYear());if(e.getFullYear()&&e.getMonth()&&e.getDate()&&n<100){var a=function(e,t){for(var n=[],a=new Date(e),c=e;c<t;)c=a.toISOString().slice(0,10),n.push(c),a.setDate(a.getDate()+1);return n}(i,d);m(a)}}),[i,d]),Object(c.useEffect)((function(){var e=x.reduce((function(e,t){return e[t]=0,e}),{});e=function(e,t){for(var n=0;n<e.length;n++)t[F(e[n].timestamp)]++;return t}(y,e),S({labels:Object.keys(e),datasets:[{label:"Number of events",data:Object.values(e)}]})}),[y]);return Object(a.jsxs)("div",{className:"DateFrequencyChart",children:[Object(a.jsxs)("div",{className:"datepicker",children:[Object(a.jsx)("label",{htmlFor:"startDate",children:"From"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"date",value:i,placeholder:"yyyy-mm-dd",onChange:function(e){return j(e.target.value)}}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{className:"datepicker",children:[Object(a.jsx)("label",{htmlFor:"endDate",children:"To"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"date",value:d,placeholder:"yyyy-mm-dd",onChange:function(e){return h(e.target.value)}}),Object(a.jsx)("br",{})]}),Object(a.jsx)("div",{className:"Bar",children:Object(a.jsx)(l.Line,{data:N})})]})}),O=(n(149),function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),u=Object(b.a)(s,2),o=u[0],l=u[1],O="https://appsrv.fastsensor.us:8890/",d="".concat(O,"oauth2/token?client_id=").concat("20AF566F","&api_key=").concat("Vu112d0Wmg99bx/ax02bUlNipBEOv3uIPrf73ZNJ8NgvN0qlnhpqYfVP80eXhX2X"),h="".concat(O,"v1/locations"),p=function(){var e=Object(j.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(d);case 2:t=e.sent,r(t.access_token);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n?p(h,{headers:{Authorization:"Bearer ".concat(n)}}):null;case 2:t=e.sent,l(t?t.data[0].id:"");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){v()}),[]),Object(c.useEffect)((function(){x()}),[n]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(f,{tokenID:n,locationID:o,LOCATION_API:h,fetchData:p})})});u.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.254aac10.chunk.js.map