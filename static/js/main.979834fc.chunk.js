(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{140:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},152:function(e,t){},154:function(e,t){},168:function(e,t){},170:function(e,t){},198:function(e,t){},200:function(e,t){},201:function(e,t){},206:function(e,t){},208:function(e,t){},227:function(e,t){},239:function(e,t){},242:function(e,t){},259:function(e,t,n){},260:function(e,t,n){},262:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(132),r=n.n(c),s=n(11),o=n(14),i=n.n(o),u=n(21),j=(n(140),n(20)),l=n(263),b=n(264),p=n(265),h=n(266),d=n(267),O=n(268),x=n(2),f=function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),c=n[0],r=n[1],o=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://warm-ravine-05729.herokuapp.com/admin/blog/all",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()}),[]),e.token?c?c.map((function(e){return Object(x.jsx)(l.a,{sm:6,className:"mx-auto mt-5 post-container",children:Object(x.jsx)(j.b,{to:{pathname:"/post",state:{postId:e._id}},id:e._id,className:"post-container",children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(p.a,{tag:"h5",children:e.title}),Object(x.jsx)(h.a,{children:e.text}),e.published?Object(x.jsx)(d.a,{className:"btn",color:"success",children:"Public"}):Object(x.jsx)(d.a,{className:"btn",color:"danger",children:"Private"})]})})},e._id)})):Object(x.jsx)("div",{className:"spinner",children:Object(x.jsx)(O.a,{color:"primary mx-auto mt-5 "})}):Object(x.jsx)("h1",{children:"Please Log in"})},m=(n(146),n(147),function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){localStorage.getItem("token")&&r(localStorage.getItem("token"))}),[]),Object(x.jsxs)("div",{className:"header-container",children:[Object(x.jsx)("h1",{children:"Admin Stuff"}),Object(x.jsxs)("div",{className:"nav-bts",children:[Object(x.jsx)(j.b,{className:"link",to:"/",children:"Home"}),Object(x.jsx)(j.b,{className:"link",to:"/create",children:"Create Post"}),c?null:Object(x.jsx)(j.b,{className:"link",to:"/login",children:"Log in"})]})]})}),v=n(9),g=(n(148),n(269)),k=n(270),w=n(271),S=n(272),y=function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(),j=Object(s.a)(o,2),b=j[0],p=j[1],h=Object(a.useState)(),O=Object(s.a)(h,2),f=O[0],m=O[1],y=Object(v.g)(),N=function(){var t=Object(u.a)(i.a.mark((function t(n){var a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("https://warm-ravine-05729.herokuapp.com/login",{method:"POST",body:JSON.stringify({username:c,password:b}),headers:{"Content-Type":"application/json"}});case 3:return a=t.sent,t.next=6,a.json();case 6:(r=t.sent)?(e.setToken(r.token),localStorage.setItem("token",r.token),y.push("/")):m("Invalid username or password");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)(g.a,{className:"login-form mt-5 mx-auto",children:Object(x.jsxs)(l.a,{sm:6,className:"mx-auto",children:[Object(x.jsxs)(k.a,{children:[Object(x.jsx)(w.a,{children:"Enter username"}),Object(x.jsx)(S.a,{onChange:function(e){r(e.target.value)},type:"text",name:"username",placeholder:"Username"})]}),Object(x.jsxs)(k.a,{children:[Object(x.jsx)(w.a,{children:"Enter Password"}),Object(x.jsx)(S.a,{onChange:function(e){p(e.target.value)},type:"password",name:"password",placeholder:"Password"})]}),Object(x.jsx)(d.a,{onClick:N,type:"submit",color:"success",children:"Log in"}),f?Object(x.jsx)(k.a,{className:"mt-4",children:Object(x.jsx)(w.a,{children:f})}):null]})})},N=n(134),C=n.n(N),T=(n(259),function(e){var t=e.location.state.postId,n=Object(a.useState)(),c=Object(s.a)(n,2),r=c[0],o=c[1],j=Object(a.useState)(""),l=Object(s.a)(j,2),b=l[0],p=l[1],h=Object(a.useState)(""),f=Object(s.a)(h,2),m=f[0],g=f[1],k=Object(a.useState)(),w=Object(s.a)(k,2),S=w[0],y=w[1],N=Object(a.useState)(),C=Object(s.a)(N,2),T=C[0],E=C[1],P=Object(a.useState)(),I=Object(s.a)(P,2),D=I[0],A=I[1],B=Object(v.g)(),J=function(){var e=Object(u.a)(i.a.mark((function e(){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=localStorage.getItem("token"))){e.next=13;break}return E(n),e.next=5,fetch("/blog/"+t,{method:"GET",headers:{Authorization:"Bearer "+T,"Content-Type":"application/json"}});case 5:return a=e.sent,e.next=8,a.json();case 8:c=e.sent,o(c),y(c.published),p(c.title),g(c.text);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){J()}),[]);var z=function(){var e=Object(u.a)(i.a.mark((function e(){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/admin/"+t+"/public",{method:"PUT"});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,y(a.published);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("https://warm-ravine-05729.herokuapp.com/admin/".concat(t,"/edit"),{method:"PUT",body:JSON.stringify({title:b,text:m}),headers:{Authorization:"Bearer "+T,"Content-Type":"application/json"}});case 3:200===e.sent.status&&A(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://warm-ravine-05729.herokuapp.com/admin/"+t+"/delete",{method:"DELETE",headers:{Authorization:"Bearer "+T}});case 2:200===e.sent.status&&B.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r?D?Object(x.jsx)(v.a,{to:"/"}):Object(x.jsxs)("div",{className:"singlepost-container",children:[Object(x.jsx)("div",{children:Object(x.jsx)("h4",{children:"Here you can Edit your post title, text and make it public"})}),Object(x.jsxs)("form",{action:"",children:[Object(x.jsx)("input",{className:"title",type:"text",onChange:function(e){p(e.target.value)},value:b}),Object(x.jsx)("textarea",{rows:"10",onChange:function(e){g(e.target.value)},value:m,className:"singlepost-text"}),Object(x.jsx)("p",{children:"Click to Change Status"}),S?Object(x.jsx)("p",{onClick:z,className:"public",children:"publicado"}):Object(x.jsx)("p",{onClick:z,className:"private",children:"no publicado"}),Object(x.jsx)("div",{children:Object(x.jsxs)(d.a,{onClick:U,color:"danger",children:["Delete"," "]})}),Object(x.jsx)("input",{type:"submit",onClick:L,value:"Save",className:"save-post"})]})]}):Object(x.jsx)("div",{className:"spinner",children:Object(x.jsx)(O.a,{color:"primary"})})}),E=(n(260),function(e){var t=Object(v.g)(),n=Object(a.useState)(),c=Object(s.a)(n,2),r=c[0],o=c[1],j=Object(a.useState)(),l=Object(s.a)(j,2),b=l[0],p=l[1],h=function(){var e=Object(u.a)(i.a.mark((function e(){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,fetch("https://warm-ravine-05729.herokuapp.com/admin/blog/new",{method:"POST",body:JSON.stringify({title:r,text:b}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}});case 3:return a=e.sent,e.next=6,a.json();case 6:e.sent,200===a.status&&t.push("/");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(g.a,{className:"form-container mx-auto",children:[Object(x.jsxs)(k.a,{children:[Object(x.jsx)(w.a,{for:"title",children:"Post Title"}),Object(x.jsx)(S.a,{onChange:function(e){o(e.target.value)},type:"text",name:"title",placeholder:"Enter title.."})]}),Object(x.jsxs)(k.a,{children:[Object(x.jsx)(w.a,{for:"text",children:"Post Text"}),Object(x.jsx)(S.a,{onChange:function(e){p(e.target.value)},type:"textarea",rows:"10",name:"text",className:"input-text",placeholder:"Enter post text..."})]}),Object(x.jsx)(d.a,{onClick:h,color:"success",children:"Submit"})]})});var P=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token"),t=C.a.decode(e);new Date(1e3*t.exp)<new Date(Date.now())?localStorage.clear():e&&c(e)}}()})),Object(x.jsxs)(j.a,{children:[Object(x.jsx)("div",{children:Object(x.jsx)(m,{})}),Object(x.jsxs)(v.d,{children:[Object(x.jsx)(v.b,{exact:!0,path:"/",children:Object(x.jsx)(f,{token:n})}),Object(x.jsx)(v.b,{path:"/login",children:Object(x.jsx)(y,{setToken:c})}),Object(x.jsx)(v.b,{path:"/post",component:T}),Object(x.jsx)(v.b,{path:"/create",component:E})]})]})};n(261);r.a.render(Object(x.jsx)(P,{}),document.getElementById("root"))}},[[262,1,2]]]);
//# sourceMappingURL=main.979834fc.chunk.js.map