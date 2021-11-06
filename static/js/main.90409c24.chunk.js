(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),i=n.n(s),r=(n(12),n.p,n(13),n(14),n(4)),o=n.n(r),l=n(6),u=n(2),j=n(3),h=(n(16),n(17),n(18),n(0));var d=function(e){var t=e.show,n=e.toggleAction,c=e.title,a=e.text;return Object(h.jsxs)("div",{className:"InfoBubble",style:{display:t?"block":"none"},onClick:n,children:[Object(h.jsx)("h2",{className:"info-title",children:c}),Object(h.jsx)("p",{className:"info-text",children:a})]})};var m=function(e){var t=e.element,n=e.request,a=Object(c.useState)("1999-12-31"),s=Object(u.a)(a,2),i=s[0],r=s[1],o=Object(c.useState)(!1),l=Object(u.a)(o,2),j=l[0],m=l[1],b=function(){return m(!j)};return Object(h.jsxs)("div",{className:"DateSelector",style:{display:"DateSelector"===t?"flex":"none"},children:[Object(h.jsx)(d,{show:j,toggleAction:b,title:"What is this app?",text:Object(h.jsxs)(h.Fragment,{children:["This is a web application that creates playlists that take you back in time! All you need to do is enter a date, wait a few seconds while we search the songs and ... thats it! You will receive a playlist with the most played songs from that period when you met your partner or when you did that amazing trip! More info about this project on my ",Object(h.jsx)("a",{href:"https://github.com/guilemvieira",children:"GitHub"})," page or in my WebPage ",Object(h.jsx)("a",{href:"https://guile.ga",children:"guile.ga"}),"."]})}),Object(h.jsxs)("div",{className:"form-header",children:[Object(h.jsx)("p",{className:"form-title",children:"Enter a date:"}),Object(h.jsx)("p",{className:"info",onClick:b,children:"?"})]}),Object(h.jsxs)("form",{action:"",method:"get",className:"date-selector-form",onSubmit:function(e){e.preventDefault(),console.log(e.target.value);var t=n(i);console.log(t)},children:[Object(h.jsx)("input",{className:"date-selector",type:"date",name:"",id:"",required:!0,value:i,min:"1960-01-01",max:"2021-11-01",onChange:function(e){r(e.target.value)}}),Object(h.jsx)("input",{type:"submit",value:"Create playlist",className:"button-fill"})]})]})};n(20);var b=function(e){var t=e.element;return Object(h.jsx)("div",{className:"Loader",style:{display:"Loader"===t?"flex":"none"},children:Object(h.jsx)("div",{className:"circle"})})};n(21);var p=function(e){var t=e.element,n=e.APIresponse,a=e.reset,s=n.code,i=Object(c.useState)(-1===s||0===s),r=Object(u.a)(i,2),o=r[0],l=r[1],j="https://scannables.scdn.co/uri/plain/png/000000/white/640/".concat(n.uri);return console.log(n),Object(h.jsxs)("div",{className:"Results",style:{display:"Results"===t?"flex":"none"},children:[Object(h.jsx)(d,{title:"Whops... ",text:Object(h.jsxs)(h.Fragment,{children:["We are experiencing some problems in our servers right now... Try again later or contact me in ",Object(h.jsx)("a",{href:"https://guile.ga",children:"here"}),"!"]}),toggleAction:function(){return l(!1)},show:o}),Object(h.jsxs)("div",{className:"results-container",style:{display:1===s?"block":"none"},children:[Object(h.jsx)("p",{className:"playlist-name",children:n.name}),Object(h.jsx)("a",{href:n.uri,children:Object(h.jsx)("img",{src:j,alt:"URI",className:"uri"})}),Object(h.jsx)("a",{href:n.url,children:Object(h.jsx)("button",{className:"listen-button",children:"Listen"})})]}),Object(h.jsx)("button",{className:"again-button",onClick:a,children:"Try again!"})]})};var f=function(e){Object(j.a)(e);var t=["DateSelector","Loader","Results"],n=Object(c.useState)(t[0]),a=Object(u.a)(n,2),s=a[0],i=a[1],r=Object(c.useState)({code:0,link:"",name:""}),d=Object(u.a)(r,2),f=d[0],g=d[1],O="https://spotitime.herokuapp.com/";function x(){return(x=Object(l.a)(o.a.mark((function e(n){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O,c={date:n},a={method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}},i(t[1]),e.next=6,fetch("https://spotitime.herokuapp.com/",a).then((function(e){return e.json()})).then((function(e){i(t[2]),g(e)})).catch((function(e){i(t[2]),console.log("Error: ",e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O+"test",t={method:"GET",headers:{"Content-Type":"application/json"}},e.next=4,fetch("https://spotitime.herokuapp.com/test",t).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),Object(h.jsx)("div",{className:"Card",children:Object(h.jsxs)("div",{className:"card-inner-container",children:[Object(h.jsx)(m,{element:s,request:function(e){return x.apply(this,arguments)}}),Object(h.jsx)(b,{element:s}),Object(h.jsx)(p,{element:s,APIresponse:f,reset:function(){return i(t[0])}})]})})},g=(n(22),n.p+"static/media/logo-col-black.47391283.svg"),O=n.p+"static/media/name-col.ace763c8.svg";var x=function(e){return Object(j.a)(e),Object(h.jsxs)("div",{className:"Logo",children:[Object(h.jsx)("img",{src:g,alt:"Logo",className:"logo-image"}),Object(h.jsx)("img",{src:O,alt:"Name",className:"name"})]})},v=(n(23),n.p+"static/media/web-logo.95de1433.png"),y=n.p+"static/media/github.a855c397.png",N=n.p+"static/media/gmail.a2f2146f.png",w=n.p+"static/media/whatsapp.1dd8ca27.png";var k=function(e){return Object(j.a)(e),Object(h.jsxs)("div",{className:"Footer",children:[Object(h.jsx)("p",{children:"\xa9 Guile Vieira"}),Object(h.jsxs)("div",{className:"links",children:[Object(h.jsx)("a",{href:"https://guile.ga",children:Object(h.jsx)("img",{src:v,alt:""})}),Object(h.jsx)("a",{href:"https://github.com/guilevieiram",children:Object(h.jsx)("img",{src:y,alt:""})}),Object(h.jsx)("a",{href:"https://wa.me/5531998524668",children:Object(h.jsx)("img",{src:w,alt:""})}),Object(h.jsx)("a",{href:"mailto:guilhermevmanhaes@gmail.com",children:Object(h.jsx)("img",{src:N,alt:""})})]})]})};var S=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(x,{}),Object(h.jsx)(f,{}),Object(h.jsx)(k,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),C()}],[[24,1,2]]]);
//# sourceMappingURL=main.90409c24.chunk.js.map