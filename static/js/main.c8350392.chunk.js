(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/HP.70b01090.png"},27:function(e,t,a){e.exports=a(55)},32:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),o=(a(32),a(7)),i=a(4),u=a(5),s=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"\u0421\u0430\u0439\u0442 \u043e\u0434\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u0430"),l.a.createElement("p",null,"\u041a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u043e\u0442\u0435\u043b \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u0432\u0441\u0435 \u043d\u0430 \u0441\u0432\u0435\u0442\u0435"),l.a.createElement("p",null,"\u041d\u043e \u0432\u0441\u0435 \u043e\u0431\u044a\u044f\u0442\u044c \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e"),l.a.createElement("p",null,"\u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u043d \u0437\u043d\u0430\u0435\u0442 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u043d\u0435\u043c\u043d\u043e\u0433\u0443"),l.a.createElement("p",null,"\u042d\u0442\u0430 \u0432\u0438\u0437\u0438\u0442\u043a\u0430 \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u0430\u044f \u043d\u0430 React... \u043d\u043e \u0442\u0430\u043a \u0436\u0435 \u043e\u043d\u0430 \u043c\u043e\u0433\u043b\u0430 \u0431\u044b \u0431\u044b\u0442\u044c \u043d\u0430 Vue"))},m=a(11),E=a(23),p=a.n(E),d={isLoading:!1,data:null,error:null},f=function(e,t){switch(t.type){case"loading":return Object(m.a)({},e,{isLoading:!0});case"error":return Object(m.a)({},e,{error:t.payload,isLoading:!1});case"success":return{isLoading:!1,data:t.payload,error:null};default:throw new Error}},h=function(e){var t=e.url,a=e.children,l=Object(n.useReducer)(f,d),r=Object(o.a)(l,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){i({type:"loading"}),p.a.get(t,{timeout:1e4}).then((function(e){200==e.status?i({type:"success",payload:e.data}):i({type:"error",payload:e.statusText})})).catch((function(e){i({type:"error",payload:e})}))}),[]),"function"==typeof a?a(c.isLoading,c.error,c.data):a},g=function(e){var t=e.username;return l.a.createElement(h,{url:"https://api.github.com/users/".concat(t,"/repos")},(function(e,t,a){return l.a.createElement(l.a.Fragment,null,e?l.a.createElement("p",null," \u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432..."):l.a.createElement("ul",null,a&&a.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:e.html_url,className:"light"},e.name," <"))}))),t&&l.a.createElement("p",null,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432: ",t.message))}))},b=function(e){var t=Math.trunc((Date.now()-new Date("1989-02-06"))/31536e6);return l.a.createElement(h,{url:"https://api.github.com/users/".concat(e.username)},(function(e,a,n){return e?l.a.createElement("p",null,"Loading..."):l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"\u041e\u0431\u043e \u043c\u043d\u0435"),l.a.createElement("p",null,n&&l.a.createElement("img",{src:n.avatar_url,className:"github--avatar"}),"\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u0421\u0442\u0430\u043d\u0438\u0441\u043b\u0430\u0432, \u043c\u043d\u0435 ",t,". \u0415\u0449\u0435 \u0432 \u0448\u043a\u043e\u043b\u0435 \u044f \u043d\u0430\u0447\u0430\u043b \u0443\u0432\u043b\u0435\u043a\u0430\u0442\u0441\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c. \u041d\u0430 \u0441\u0442\u0430\u0440\u0442\u0435 \u0431\u044b\u043b Basic. \u042d\u0442\u043e \u0431\u044b\u043b 7-8\u043a\u043b\u0430\u0441\u0441 \u0448\u043a\u043e\u043b\u044b. \u041f\u043e\u0441\u0442\u0443\u043f\u0438\u043b \u044f \u0432 \u0443\u043d\u0438\u0432\u0435\u0441\u0438\u0442\u0435\u0442 \u043d\u0430 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0443 \u0432 \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u043a\u0435, \u041f\u043e\u043b\u0443\u0447\u0438\u043b \u0434\u0438\u043f\u043b\u043e\u043c \u043f\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a-\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u0441\u0442. \u0412\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432 \u0438\u043d\u0441\u0442\u0438\u0442\u0443\u0442\u0435, \u044f \u0437\u0430\u043d\u044f\u043b\u0441\u044f Web-\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c, \u043d\u043e \u0434\u043e \u043a\u043e\u043d\u0446\u0430 \u043d\u0435 \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u0438\u043b\u0441\u044f \u0438\u043c. \u0412 \u0438\u043d\u0441\u0442\u0438\u0442\u0443\u0442\u0435 \u043d\u0430\u0441 \u043e\u0431\u0443\u0447\u0430\u043b\u0438 Delphi, \u0434\u0430\u043b\u0438 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043e\u0441\u043d\u043e\u0432 assambler'\u0430. \u0414\u0438\u043f\u043b\u043e\u043c \u044f \u0437\u0430\u0449\u0438\u0449\u0430\u044e \u043f\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443 \u043d\u0430 FoxPro. \u041f\u043e\u0441\u043b\u0435 \u0432\u0440\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0438\u043f\u043b\u043e\u043c\u0430, \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0435, \u043c\u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u043d\u043e \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u0442\u0441\u044f \u0441 1\u0421 7.7, \u044f \u0442\u0430\u043c \u0436\u0435 \u0432\u043d\u0438\u043a\u0430\u044e \u0432 \u0421++ \u0438 \u0421#, \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u044f\u0437\u044b\u043a \u0437\u0430\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u043c\u0435\u043d\u044f. \u0421\u043c\u0435\u043d\u0430 \u043c\u0435\u0441\u0442\u0430 \u0440\u0430\u0431\u043e\u0442\u044b, \u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u044e \u043a\u043e\u0434\u0438\u0442\u044c \u043d\u0430 C#, \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043f\u043b\u043e\u0442\u043d\u043e \u043f\u043e\u0433\u0440\u0443\u0436\u0430\u044f\u0441\u044c \u0432 1\u0421 8.\u0445. \u041f\u0435\u0440\u0435\u0434 \u043b\u0438\u0446\u043e\u043c \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0437\u0430\u0434\u0430\u0447\u0430, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 Ruby on Rails, \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434 \u0431\u044b\u043b \u043f\u0440\u0438\u043a\u0440\u0443\u0447\u0435\u043d \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e JQuery. 1C \u043d\u0435 \u043e\u0442\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043c\u0435\u043d\u044f \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0435, \u044d\u0442\u043e \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0432\u0438\u0434\u043e\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041d\u043e \u043c\u0435\u043d\u044f \u0442\u044f\u043d\u0435\u0442 \u0432 web, \u0438 \u044f \u0438\u0437\u0443\u0447\u0430\u044e JavaScript \u0438 React, \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u043d\u0438\u043c\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u044e \u0437\u043d\u0430\u043d\u0438\u044f \u043f\u043e webpack, express, nodejs, graphql \u043a\u043e\u0440\u043e\u0447\u0435 \u043f\u044b\u0442\u0430\u044e\u0441\u044c \u043f\u043e\u0441\u0442\u0438\u0433\u043d\u0443\u0442\u044c full stack. \u0414\u0435\u043b\u0430\u044e \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0434\u043b\u044f \u0441\u0435\u0431\u044f, \u0434\u043b\u044f \u0434\u0443\u0448\u0438. \u041e\u043a\u0443\u043d\u0430\u044e\u0441\u044c \u0432 React Native. \u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044f \u0441\u0442\u0430\u0432\u0438\u043b \u043f\u0435\u0440\u0435\u0434 \u0441\u043e\u0431\u043e\u0439, \u044f \u0440\u0435\u0448\u0438\u043b. \u041c\u043d\u0435 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043c\u0430\u043b\u043e. \u041f\u0435\u0440\u0435\u0445\u043e\u0436\u0443 \u043d\u0430 Vue. \u0418 \u0432\u043e\u0442 \u043c\u044b \u043f\u043e\u0434\u043e\u0448\u043b\u0438 \u043a \u0442\u0435\u043a\u0443\u0449\u0435\u043c\u0443 \u043c\u043e\u043c\u0435\u043d\u0442\u0443 \u043c\u043e\u0438\u0445 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u0441 \u044f\u0437\u044b\u043a\u0430\u043c\u0438. \u0421\u0435\u0439\u0447\u0430\u0441 \u0443 \u043c\u0435\u043d\u044f \u0443\u043f\u0430\u043b \u0433\u043b\u0430\u0437 \u043d\u0430 svelte, \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0432 \u0434\u0435\u043b\u0435. \u041d\u043e \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u043c\u043d\u0435 \u043d\u0435\u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u0438 \u0441\u0435\u0440\u044c\u0435\u0437\u043d\u044b\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0431\u044f. \u0423\u0432\u0435\u0440\u0435\u043d, \u0447\u0442\u043e \u043c\u043e\u0438\u0445 \u0437\u043d\u0430\u043d\u0438\u0439 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u043d\u0430 \u0434\u0436\u0443\u043d\u0438\u043e\u0440\u0430, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043e\u043f\u044b\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432."),l.a.createElement("h3",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u0441 Github"),n&&l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,n.name),l.a.createElement("p",null,n.location),l.a.createElement("p",null,l.a.createElement("a",{href:n.html_url,className:"light"}," GitHub")),l.a.createElement("p",null,"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0435\u0432: ",n.public_repos),l.a.createElement(g,{username:n.login})),a&&l.a.createElement("p",null," \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435: ",a.message," "))}))},v=a(24),k=a.n(v),w=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],m="mobile-mnu-links",E="mobile-mnu-button",p="<<";r&&(m+=" open",E+=" open",p=">>");return l.a.createElement(i.a,null,l.a.createElement("main",null,l.a.createElement("section",{className:"header"},l.a.createElement("div",{className:"header--logo"},"innei system")),l.a.createElement("section",{className:"mnu"},l.a.createElement("div",{className:E},l.a.createElement("div",{className:"mnu--button"},l.a.createElement("a",{href:"/#",onClick:function(e){e.preventDefault(),c(!r)}},p))),l.a.createElement("div",{className:"desktop-command-line"},"C:\\>",l.a.createElement("span",{className:"blink"},"_"))),l.a.createElement("section",{className:"content"},l.a.createElement("div",{className:"content--body"},l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",exact:!0},l.a.createElement(s,null)),l.a.createElement(u.a,{path:"/about"},l.a.createElement(b,{username:"pomatsuev"})),l.a.createElement(u.a,{path:"/feedback"},l.a.createElement("p",null,"\u0422\u0443\u0442 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u043b\u0430 \u0431\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0437\u0432\u044f\u0437\u0438... \u041d\u043e \u044d\u0442\u043e \u0436\u0435 \u0432\u0438\u0437\u0438\u0442\u043a\u0430..."),l.a.createElement("p",null,"\u0412\u044b \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0438\u0448\u0438\u0442\u0435 \u043c\u043d\u0435 \u043d\u0430 ",l.a.createElement("a",{href:"mailto:pomatsuev@gmail.com",className:"light"},"pomatsuev@gmail.com"))),l.a.createElement(u.a,{path:"/game"},l.a.createElement("h2",null,"\u041c\u043e\u044f \u0438\u0433\u0440\u0430"),l.a.createElement("p",null,"\u041d\u0430 \u043a\u043e\u043b\u0435\u043d\u043e\u0447\u043a\u0435 \u0441\u0434\u0435\u043b\u0430\u043b \u0438\u0433\u0440\u0443 \u041c\u043e\u043d\u043e\u043f\u043e\u043b\u0438\u044e \u0434\u043b\u044f \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043e\u0432, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u0430 \u043d\u0430 VUE, \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 PWA (\u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0435\u0431\u0435 \u043d\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d)"),l.a.createElement("p",null,"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430. \u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043a\u043b\u0438\u043a\u0430\u0431\u0435\u043b\u044c\u043d\u0430"),l.a.createElement("a",{href:"https://harry-monopoly.github.io"},l.a.createElement("img",{src:k.a})))))),l.a.createElement("section",{className:"links"},l.a.createElement("ul",{className:"desktop-menu-links"},l.a.createElement("li",null,l.a.createElement(i.b,{to:"/",onClick:function(){return c(!r)}},"> \u0413\u043b\u0430\u0432\u043d\u0430\u044f")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/about",onClick:function(){return c(!r)}},"> \u041e\u0431\u043e \u043c\u043d\u0435")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/feedback",onClick:function(){return c(!r)}},"> \u0421\u0432\u044f\u0437\u044c")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/game",onClick:function(){return c(!r)}},"> \u041c\u043e\u044f \u0438\u0433\u0440\u0430"))),l.a.createElement("ul",{className:m},r&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement(i.b,{to:"/",onClick:function(){return c(!r)}},"> \u0413\u043b\u0430\u0432\u043d\u0430\u044f")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/about",onClick:function(){return c(!r)}},"> \u041e\u0431\u043e \u043c\u043d\u0435")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/feedback",onClick:function(){return c(!r)}},"> \u0421\u0432\u044f\u0437\u044c")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/game",onClick:function(){return c(!r)}},"> \u041c\u043e\u044f \u0438\u0433\u0440\u0430")))))))},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(w,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.c8350392.chunk.js.map