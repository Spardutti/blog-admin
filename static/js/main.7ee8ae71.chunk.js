(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{140:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},152:function(e,t){},154:function(e,t){},168:function(e,t){},170:function(e,t){},198:function(e,t){},200:function(e,t){},201:function(e,t){},206:function(e,t){},208:function(e,t){},227:function(e,t){},239:function(e,t){},242:function(e,t){},259:function(e,t,n){},260:function(e,t,n){},262:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(132),r=n.n(c),s=n(11),o=n(14),i=n.n(o),u=n(21),l=(n(140),n(20)),j=n(263),b=n(264),d=n(265),p=n(266),h=n(267),m=n(268),O=n(2),x=function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),c=n[0],r=n[1],o=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://warm-ravine-05729.herokuapp.com/admin/blog/all",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()}),[]),e.token?c?c.map((function(e){return Object(O.jsx)(j.a,{sm:6,className:"mx-auto mt-5 post-container",children:Object(O.jsx)(l.b,{to:{pathname:"/blog-admin/post",state:{postId:e._id}},id:e._id,className:"post-container",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(d.a,{tag:"h5",children:e.title}),Object(O.jsx)(p.a,{children:e.text}),e.published?Object(O.jsx)(h.a,{className:"btn",color:"success",children:"Public"}):Object(O.jsx)(h.a,{className:"btn",color:"danger",children:"Private"})]})})},e._id)})):Object(O.jsx)("div",{className:"spinner",children:Object(O.jsx)(m.a,{color:"primary mx-auto mt-5 "})}):Object(O.jsx)("h1",{children:"Please Log in"})},f=(n(146),n(147),function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){localStorage.getItem("token")&&r(localStorage.getItem("token"))}),[]),Object(O.jsxs)("div",{className:"header-container",children:[Object(O.jsx)("h1",{children:"Admin Stuff"}),Object(O.jsxs)("div",{className:"nav-bts",children:[Object(O.jsx)(l.b,{className:"link",to:"/blog-admin",children:"Home"}),Object(O.jsx)(l.b,{className:"link",to:"/blog-admin/create",children:"Create Post"}),c?null:Object(O.jsx)(l.b,{className:"link",to:"/blog-admin/login",children:"Log in"})]})]})}),g=n(9),v=(n(148),n(269)),k=n(270),w=n(271),S=n(272),y=function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(),l=Object(s.a)(o,2),b=l[0],d=l[1],p=Object(a.useState)(),m=Object(s.a)(p,2),x=m[0],f=m[1],y=Object(g.g)(),N=function(){var t=Object(u.a)(i.a.mark((function t(n){var a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("https://warm-ravine-05729.herokuapp.com/login",{method:"POST",body:JSON.stringify({username:c,password:b}),headers:{"Content-Type":"application/json"}});case 3:return a=t.sent,t.next=6,a.json();case 6:(r=t.sent)?(e.setToken(r.token),localStorage.setItem("token",r.token),y.push("/blog-admin")):f("Invalid username or password");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)(v.a,{className:"login-form mt-5 mx-auto",children:Object(O.jsxs)(j.a,{sm:6,className:"mx-auto",children:[Object(O.jsxs)(k.a,{children:[Object(O.jsx)(w.a,{children:"Enter username"}),Object(O.jsx)(S.a,{onChange:function(e){r(e.target.value)},type:"text",name:"username",placeholder:"Username"})]}),Object(O.jsxs)(k.a,{children:[Object(O.jsx)(w.a,{children:"Enter Password"}),Object(O.jsx)(S.a,{onChange:function(e){d(e.target.value)},type:"password",name:"password",placeholder:"Password"})]}),Object(O.jsx)(h.a,{onClick:N,type:"submit",color:"success",children:"Log in"}),x?Object(O.jsx)(k.a,{className:"mt-4",children:Object(O.jsx)(w.a,{children:x})}):null]})})},N=n(134),C=n.n(N),T=(n(259),function(e){var t=e.location.state.postId,n=Object(a.useState)(),c=Object(s.a)(n,2),r=c[0],o=c[1],l=Object(a.useState)(""),j=Object(s.a)(l,2),b=j[0],d=j[1],p=Object(a.useState)(""),x=Object(s.a)(p,2),f=x[0],v=x[1],k=Object(a.useState)(),w=Object(s.a)(k,2),S=w[0],y=w[1],N=Object(a.useState)(),C=Object(s.a)(N,2),T=C[0],E=C[1],P=Object(a.useState)(),I=Object(s.a)(P,2),D=I[0],A=I[1],B=Object(g.g)(),J=function(){var e=Object(u.a)(i.a.mark((function e(){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=localStorage.getItem("token"))){e.next=13;break}return E(n),e.next=5,fetch("/blog/"+t,{method:"GET",headers:{Authorization:"Bearer "+T,"Content-Type":"application/json"}});case 5:return a=e.sent,e.next=8,a.json();case 8:c=e.sent,o(c),y(c.published),d(c.title),v(c.text);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){J()}),[]);var z=function(){var e=Object(u.a)(i.a.mark((function e(){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/admin/"+t+"/public",{method:"PUT"});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,y(a.published);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("https://warm-ravine-05729.herokuapp.com/admin/".concat(t,"/edit"),{method:"PUT",body:JSON.stringify({title:b,text:f}),headers:{Authorization:"Bearer "+T,"Content-Type":"application/json"}});case 3:200===e.sent.status&&A(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://warm-ravine-05729.herokuapp.com/admin/"+t+"/delete",{method:"DELETE",headers:{Authorization:"Bearer "+T}});case 2:200===e.sent.status&&B.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r?D?Object(O.jsx)(g.a,{to:"/blog-admin"}):Object(O.jsxs)("div",{className:"singlepost-container",children:[Object(O.jsx)("div",{children:Object(O.jsx)("h4",{children:"Here you can Edit your post title, text and make it public"})}),Object(O.jsxs)("form",{action:"",children:[Object(O.jsx)("input",{className:"title",type:"text",onChange:function(e){d(e.target.value)},value:b}),Object(O.jsx)("textarea",{rows:"10",onChange:function(e){v(e.target.value)},value:f,className:"singlepost-text"}),Object(O.jsx)("p",{children:"Click to Change Status"}),S?Object(O.jsx)("p",{onClick:z,className:"public",children:"publicado"}):Object(O.jsx)("p",{onClick:z,className:"private",children:"no publicado"}),Object(O.jsx)("div",{children:Object(O.jsxs)(h.a,{onClick:U,color:"danger",children:["Delete"," "]})}),Object(O.jsx)("input",{type:"submit",onClick:L,value:"Save",className:"save-post"})]})]}):Object(O.jsx)("div",{className:"spinner",children:Object(O.jsx)(m.a,{color:"primary"})})}),E=(n(260),function(e){var t=Object(g.g)(),n=Object(a.useState)(),c=Object(s.a)(n,2),r=c[0],o=c[1],l=Object(a.useState)(),j=Object(s.a)(l,2),b=j[0],d=j[1],p=function(){var e=Object(u.a)(i.a.mark((function e(){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.next=3,fetch("https://warm-ravine-05729.herokuapp.com/admin/blog/new",{method:"POST",body:JSON.stringify({title:r,text:b}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}});case 3:return a=e.sent,e.next=6,a.json();case 6:e.sent,200===a.status&&t.push("/blog-admin");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)(v.a,{className:"form-container mx-auto",children:[Object(O.jsxs)(k.a,{children:[Object(O.jsx)(w.a,{for:"title",children:"Post Title"}),Object(O.jsx)(S.a,{onChange:function(e){o(e.target.value)},type:"text",name:"title",placeholder:"Enter title.."})]}),Object(O.jsxs)(k.a,{children:[Object(O.jsx)(w.a,{for:"text",children:"Post Text"}),Object(O.jsx)(S.a,{onChange:function(e){d(e.target.value)},type:"textarea",rows:"10",name:"text",className:"input-text",placeholder:"Enter post text..."})]}),Object(O.jsx)(h.a,{onClick:p,color:"success",children:"Submit"})]})});var P=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){!function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token"),t=C.a.decode(e);new Date(1e3*t.exp)<new Date(Date.now())?localStorage.clear():e&&c(e)}}()})),Object(O.jsxs)(l.a,{children:[Object(O.jsx)("div",{children:Object(O.jsx)(f,{})}),Object(O.jsxs)(g.d,{children:[Object(O.jsx)(g.b,{exact:!0,path:"/blog-admin",children:Object(O.jsx)(x,{token:n})}),Object(O.jsx)(g.b,{path:"/blog-admin/login",children:Object(O.jsx)(y,{setToken:c})}),Object(O.jsx)(g.b,{path:"/blog-admin/post",component:T}),Object(O.jsx)(g.b,{path:"/blog-admin/create",component:E})]})]})};n(261);r.a.render(Object(O.jsx)(P,{}),document.getElementById("root"))}},[[262,1,2]]]);
//# sourceMappingURL=main.7ee8ae71.chunk.js.map