(this["webpackJsonpfs-front"]=this["webpackJsonpfs-front"]||[]).push([[0],{116:function(e,a,t){},118:function(e,a,t){},187:function(e,a,t){e.exports=t.p+"static/media/logo.644de09a.png"},210:function(e,a,t){e.exports=t(365)},215:function(e,a,t){},221:function(e,a,t){},222:function(e,a,t){},223:function(e,a,t){},224:function(e,a,t){},225:function(e,a,t){},243:function(e,a,t){},289:function(e,a,t){},290:function(e,a,t){},365:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(16),l=t.n(i),c=(t(215),t(25)),o=t(26),s=t(28),m=t(27),u=(t(116),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar__item ".concat(this.props.selected&&"selected")},r.a.createElement(this.props.Icon,{className:"sidebarItem_icon"}),r.a.createElement("h2",{className:"sidebarItem_title"},this.props.title))}}]),t}(n.Component)),d=t(178),p=t.n(d),v=t(182),h=t.n(v),g=t(183),f=t.n(g),E=t(184),b=t.n(E),j=t(185),O=t.n(j),w=t(186),y=t.n(w),_=t(19),N=Object(n.createContext)(),S=N.Provider,k=(N.Consumer,function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).toggleSidebar=function(){console.log("clicked"),e.state.sideBar?e.setState({sideBar:!1}):e.setState({sideBar:!0})},e.state={sideBar:!0},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.toggleSidebar;return r.a.createElement(S,{value:e},r.a.createElement("div",{className:"sidebar__main",style:{display:this.state.sideBar?"block":"none"}},r.a.createElement(_.b,{to:"/",style:{color:"inherit",textDecoration:"inherit"}},r.a.createElement(u,{selected:"/"===window.location.pathname,Icon:p.a,title:"Home"})),r.a.createElement(_.b,{to:"/trending",style:{color:"inherit",textDecoration:"inherit"}},r.a.createElement(u,{selected:"/trending"===window.location.pathname,Icon:h.a,title:"Trending"})),r.a.createElement("hr",null),r.a.createElement(_.b,{to:"/myvideos",style:{color:"inherit",textDecoration:"inherit"}},r.a.createElement(u,{selected:"/myvideos"===window.location.pathname,Icon:f.a,title:"My videos"})),r.a.createElement(_.b,{to:"/likes",style:{color:"inherit",textDecoration:"inherit"}},r.a.createElement(u,{selected:"/likes"===window.location.pathname,Icon:b.a,title:"Liked videos"})),r.a.createElement("hr",null),r.a.createElement(_.b,{to:"/profile",style:{color:"inherit",textDecoration:"inherit"}},r.a.createElement(u,{selected:"/profile"===window.location.pathname,Icon:O.a,title:"Profile"})),r.a.createElement(_.b,{to:"/about",style:{color:"inherit",textDecoration:"inherit"}},r.a.createElement(u,{selected:"/about"===window.location.pathname,Icon:y.a,title:"About"}))))}}]),t}(n.Component)),C=t(7),T=(t(221),t(222),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"videoCard"},r.a.createElement(_.b,{to:"/watch?v=".concat(this.props.videoId),style:{color:"inherit",textDecoration:"inherit"}},r.a.createElement("img",{className:"videoTile__thumbnail",src:"https://cdn-firestream.s3.ap-south-1.amazonaws.com/videos/".concat(this.props.videoId,"/").concat(this.props.videoId,".jpg"),alt:"Thumbnail"}),r.a.createElement("div",{className:"videoCard__info"},r.a.createElement("img",{className:"videoCard__avtar",src:this.props.userAvtar,alt:"avtar"}),r.a.createElement("div",{className:"videoCard__text"},r.a.createElement("h4",{className:"videoCard__videoTitle"},this.props.videoTitle),r.a.createElement("p",{className:"videoCard__userName"},this.props.userName),r.a.createElement("p",null,this.props.views," \u2022 ",this.props.timestamp)))))}}]),t}(n.Component)),x=t(410),I=t(397);function D(e){var a=e.pageTitle,t=Object(n.useState)([]),i=Object(C.a)(t,2),l=i[0],c=i[1],o=Object(n.useState)(null),s=Object(C.a)(o,2),m=s[0],u=s[1],d=Object(n.useState)(null),p=Object(C.a)(d,2),v=p[0],h=p[1],g=localStorage.getItem("accessToken",null);return Object(n.useEffect)((function(){var e,a;if("/likes"===window.location.pathname){if(!g)return void u(r.a.createElement(x.a,{severity:"error"},"Please login"));e="https://api.firestreamz.co/api/list/mylikes",a="likedvideos"}else if("/myvideos"===window.location.pathname){if(!g)return void u(r.a.createElement(x.a,{severity:"error"},"Please login"));e="https://api.firestreamz.co/api/list/myvideos",a="myvideos"}else e="https://api.firestreamz.co/api/list/videos",a="videos";h(r.a.createElement(I.a,null)),fetch(e,{method:"GET",headers:{"Accept-Encoding":"gzip, deflate","x-access-token":g}}).then((function(e){return e.json()})).then((function(e){localStorage.setItem(a,JSON.stringify(e)),c(e),u(null),h(null)}))}),[a]),r.a.createElement("div",{className:"body__main"},r.a.createElement("div",{className:"body__title"},r.a.createElement("h2",null,a),v),r.a.createElement("div",{className:"body__video"},m,l.map((function(e){var a=new Date(e.createdAt),t=new Date;return r.a.createElement(T,{key:e.videoId,userAvtar:e.owner.avtarUrl,videoId:e.videoId,videoTitle:e.title,userName:e.owner.name,views:"".concat(e.views," views"),timestamp:"".concat(Math.ceil((t-a)/864e5)," days ago"),tags:e.tags,category:e.category,description:e.description})}))))}t(223);var P=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home__main"},r.a.createElement(k,null),r.a.createElement(D,{pageTitle:this.props.pageTitle}))}}]),t}(n.Component),V=t(408),W=t(188),U=t.n(W),A=t(396),z=t(400),L=t(187),R=t.n(L);t(224);function q(){var e=Object(n.useState)("https://www.gravatar.com/avatar/?d=mp"),a=Object(C.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)(""),c=Object(C.a)(l,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("avtarUrl")||null;e&&i(e)}),[]),r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar__left"},r.a.createElement(_.b,{to:"/",style:{color:"inherit",textDecoration:"inherit"}},r.a.createElement("img",{className:"navbar__logo",src:R.a,alt:""}))),r.a.createElement("div",{className:"navbar__middle"},r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(V.a,{onChange:function(e){return s(e.target.value)},name:"searchQuery",className:"navbar__search",size:"small",id:"outlined-basic",label:"Search",variant:"outlined"}),r.a.createElement(_.b,{to:"/search?q=".concat(o)},r.a.createElement(A.a,{color:"default","aria-label":"add to shopping cart"},r.a.createElement(U.a,{className:"navbar__search__btn"}))))),r.a.createElement("div",{className:"navbar__right"},r.a.createElement(_.b,{to:"/upload",style:{color:"inherit",textDecoration:"inherit"}},r.a.createElement(z.a,null,"Upload Video")),r.a.createElement(_.b,{to:"/profile"},r.a.createElement(z.a,null,r.a.createElement("img",{className:"navbar__profile",src:t,height:"40px",alt:""})))))}var B=t(18),M=(t(118),t(225),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"videoTile"},r.a.createElement("div",{className:"videoTile__main"},r.a.createElement("img",{className:"videoTile__thumbnail",src:"https://cdn-firestream.s3.ap-south-1.amazonaws.com/videos/".concat(this.props.videoId,"/").concat(this.props.videoId,".jpg"),alt:"Thumbnail"}),r.a.createElement("div",{className:"videoTile__info"},r.a.createElement("h3",{className:"videoTile__videoTitle"},this.props.videoTitle),r.a.createElement("p",{className:"videoTile__meta"},this.props.views," \u2022 ",this.props.timestamp),r.a.createElement("div",{className:"videoTile__detail"},r.a.createElement("img",{className:"videoTile__avtar",src:this.props.userAvtar,alt:"avtar"}),r.a.createElement("p",{className:"videoTile__userName"},this.props.userName)),r.a.createElement("p",{className:"videoTile__description"},this.props.description))))}}]),t}(n.Component)),F=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={redirect:!1},e}return Object(o.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(B.a,{to:"/"}):r.a.createElement("div",{className:"searchPage__main"},r.a.createElement("h2",null,"Search Page"),r.a.createElement("div",{className:"searchPage__video"},r.a.createElement(M,{userAvtar:"https://secure.gravatar.com/avatar/a001a3f46d1449494fdcb542d22afad0?default=wavatar",videoId:"vDIT7VC",videoTitle:"Cricbuddy Chatbot Demo",userName:"Abhishek Raj",views:"125M views",timestamp:"5 days ago",description:"This is a sample video description."})))}}]),t}(n.Component),G=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search__main"},r.a.createElement(k,null),r.a.createElement(F,null))}}]),t}(n.Component),J=t(412),H=t(403),Z=t(405),$=t(404),K=t(409),Q=t(58),X=t.n(Q),Y=t(197),ee=t(401),ae=t(402),te=t(54),ne=t.n(te),re=Object(ee.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ie(e){var a=re(),t=Object(n.useState)(""),i=Object(C.a)(t,2),l=i[0],c=i[1],o=Object(n.useState)(""),s=Object(C.a)(o,2),m=s[0],u=s[1],d=Object(n.useState)(!1),p=Object(C.a)(d,2),v=p[0],h=p[1],g=Object(n.useState)(!1),f=Object(C.a)(g,2),E=f[0],b=f[1],j=Object(n.useState)(!1),O=Object(C.a)(j,2),w=O[0],y=O[1],_=Object(n.useState)(!1),N=Object(C.a)(_,2),S=N[0],k=N[1],T=Object(B.g)();Object(n.useEffect)((function(){var e=parseInt(localStorage.getItem("lastLogin"))||null;if(e){Date.now()}}),[]);var I=function(e,a){y(e),k(a),b(!0)},D=function(){b(null)};return r.a.createElement(ae.a,{component:"main",maxWidth:"xs"},r.a.createElement(H.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(J.a,{className:a.avatar},r.a.createElement(X.a,null)),r.a.createElement(Y.a,{component:"h1",variant:"h5"},"Log in"),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoFocus:!0,value:l,onChange:function(e){return c(e.target.value)}}),r.a.createElement(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:m,onChange:function(e){return u(e.target.value)}}),r.a.createElement(z.a,{disabled:v,type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(e){e.preventDefault(),h(!0),D(),I("info","Processing...Please Wait");var a={username:l,password:m};ne.a.post("https://api.firestreamz.co/api/auth/signin",a,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e.data),D(),I("success","Logged in as ".concat(e.data.username)),localStorage.setItem("accessToken",e.data.accessToken),localStorage.setItem("avtarUrl",e.data.avtarUrl),localStorage.setItem("username",e.data.username),localStorage.setItem("email",e.data.email),localStorage.setItem("id",e.data.id),localStorage.setItem("lastLogin",Date.now()),T.push("/")})).catch((function(e){D(),404===e.response.status?I("error","Username or Password invalid"):I("error","Something went wrong"),h(!1)}))}},"Log In"),r.a.createElement($.a,{container:!0},r.a.createElement($.a,{item:!0,xs:!0},r.a.createElement(Z.a,{href:"/forget",variant:"body2"},"Forgot password?")),r.a.createElement($.a,{item:!0},r.a.createElement(Z.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up")))),E),r.a.createElement(K.a,{mt:8},E?r.a.createElement(x.a,{severity:w},S):null))}var le=t(406),ce=t(411),oe=Object(ee.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function se(){var e=oe(),a=Object(n.useState)(""),t=Object(C.a)(a,2),i=t[0],l=t[1],c=Object(n.useState)(""),o=Object(C.a)(c,2),s=o[0],m=o[1],u=Object(n.useState)(""),d=Object(C.a)(u,2),p=d[0],v=d[1],h=Object(n.useState)(""),g=Object(C.a)(h,2),f=g[0],E=g[1],b=Object(n.useState)(!0),j=Object(C.a)(b,2),O=j[0],w=j[1],y=Object(n.useState)(!1),_=Object(C.a)(y,2),N=_[0],S=_[1],k=Object(n.useState)(!1),T=Object(C.a)(k,2),I=T[0],D=T[1],P=Object(n.useState)(!1),W=Object(C.a)(P,2),U=W[0],A=W[1],L=Object(B.g)(),R=function(e,a){D(e),A(a),S(!0)},q=function(){S(null)};return r.a.createElement(ae.a,{component:"main",maxWidth:"xs"},r.a.createElement(H.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(J.a,{className:e.avatar},r.a.createElement(X.a,null)),r.a.createElement(Y.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement($.a,{container:!0,spacing:2},r.a.createElement($.a,{item:!0,xs:12},r.a.createElement(V.a,{autoComplete:"name",name:"name",variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"Name",autoFocus:!0,onChange:function(e){return l(e.target.value)}})),r.a.createElement($.a,{item:!0,xs:12},r.a.createElement(V.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",onChange:function(e){return m(e.target.value)}})),r.a.createElement($.a,{item:!0,xs:12},r.a.createElement(V.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return v(e.target.value)}})),r.a.createElement($.a,{item:!0,xs:12},r.a.createElement(V.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return E(e.target.value)}})),r.a.createElement($.a,{item:!0,xs:12},r.a.createElement(le.a,{control:r.a.createElement(ce.a,{color:"primary",onClick:function(){w(!O)}}),label:"I agree to the Terms  and Condition of this website."}))),r.a.createElement(z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disabled:O,onClick:function(e){if(e.preventDefault(),q(),R("info","Processing...Please Wait"),w(!0),!i.trim().length)return q(),R("warning","Please enter your name."),void w(!1);if(!s.trim().length)return q(),R("warning","Please enter your username."),void w(!1);if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(p))return q(),R("warning","Please enter a valid email."),void w(!1);if(f.length<8)return q(),R("warning","Password should be atleast 8 characters long."),void w(!1);var a={name:i,username:s,email:p,password:f};ne.a.post("https://api.firestreamz.co/api/auth/signup",a,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e),q(),R("success",e.data.message),L.push("/login")})).catch((function(e){q(),R("error",e.response.data.message),w(!1)}))}},"Sign Up"),r.a.createElement($.a,{container:!0,justify:"flex-end"},r.a.createElement($.a,{item:!0},r.a.createElement(Z.a,{href:"/login",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(K.a,{mt:8},N?r.a.createElement(x.a,{severity:I},U):null))}var me=Object(ee.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function ue(){var e=me();return r.a.createElement(ae.a,{component:"main",maxWidth:"xs"},r.a.createElement(H.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(J.a,{className:e.avatar},r.a.createElement(X.a,null)),r.a.createElement(Y.a,{component:"h1",variant:"h5"},"Reset Password"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement($.a,{container:!0,spacing:2},r.a.createElement($.a,{item:!0,xs:12},r.a.createElement(V.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"}))),r.a.createElement(z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Reset Password"),r.a.createElement($.a,{container:!0,justify:"flex-end"},r.a.createElement($.a,{item:!0},r.a.createElement(Z.a,{href:"/login",variant:"body2"},"Remember the password? Sign in"))))),r.a.createElement(K.a,{mt:5}))}t(243);var de=t(189),pe=(t(278),t(190)),ve=t.n(pe),he=t(191),ge=t.n(he),fe=t(192),Ee=t.n(fe),be=t(193),je=t.n(be),Oe={interactionDetector:{inactivityDelay:2},keyboardShortcuts:{keyMap:{togglePause:[" ","Enter","P"],toggleFullscreen:"F",decreaseVolume:["-","down"],increaseVolume:["+","up"],skipBack:[",","left"],skipForward:[".","right"],toggleUserActive:"C",toggleMute:"M"}},userSettings:{hasPrecedence:!1,storageKey:"replay-settings",settingsStoragePolicy:{volume:"local",isMuted:"local"}},responsivenessRules:[{className:"narrow",width:{max:320}},{className:"medium-width",width:{min:640,max:500}},{className:"wide",width:{max:700}}],controls:{skipButtonOffset:-10,qualitySelectionStrategy:"cap-bitrate",liveDisplayMode:"clock-time"}};function we(){var e=new URLSearchParams(window.location.search).get("v"),a=Object(n.useState)({title:"Loading",views:"Loading",createdAt:"Loading",_id:"Loading",tags:"Loading"}),t=Object(C.a)(a,2),i=t[0],l=t[1],c=Object(B.g)(),o=localStorage.getItem("accessToken")||null;o||c.push("/login"),console.log("fired"),Object(n.useEffect)((function(){var a=localStorage.getItem("videos")||null;if(!(a=JSON.parse(a))){var t={method:"GET",headers:{"x-access-token":o}};fetch("https://api.firestreamz.co/api/list/this?vId=".concat(e),t).then((function(e){return e.json()})).then((function(e){a=e}))}a.map((function(a){if(a.videoId===e){var t="";a.tags.map((function(e){t+=e})),a.tags=t;var n=new Date(a.createdAt),r=new Date;a.createdAt=Math.ceil((r-n)/864e5);var i={method:"GET",headers:{"x-access-token":o}};fetch("https://api.firestreamz.co/api/video/view/".concat(a._id),i),l(a)}}))}),[]);var s=Object(n.useRef)(),m=Object(n.useRef)();return r.a.createElement("div",{className:"watchVideo__main"},r.a.createElement("div",{className:"watchVideo__main"},r.a.createElement(de.Replay,{className:"player",options:Oe,source:i.videoUrl,initialPlaybackProps:{isPaused:!0}},r.a.createElement(ve.a,{className:"watchVideo__shaka"}))),r.a.createElement("div",{className:"watchVideo__details"},r.a.createElement("div",null,r.a.createElement("p",{className:"watchVideo__tags"},i.tags),r.a.createElement("h2",null,i.title),r.a.createElement("div",{className:"watchVideo__stats"},r.a.createElement("p",null,i.views," Views"),r.a.createElement("p",null,"\u2022"),r.a.createElement("p",null,i.createdAt," days ago"))),r.a.createElement("div",null,r.a.createElement(z.a,{onClick:function(e){e.preventDefault(),e.target.style.color="blue",m.current.style.color="black";var a={method:"GET",headers:{"x-access-token":o}};fetch("https://api.firestreamz.co/api/video/like/".concat(i._id),a)}},r.a.createElement(ge.a,{ref:s})),r.a.createElement(z.a,{onClick:function(e){e.preventDefault(),e.target.style.color="blue",s.current.style.color="black";var a={method:"GET",headers:{"x-access-token":o}};fetch("https://api.firestreamz.co/api/video/dislike/".concat(i._id),a)}},r.a.createElement(Ee.a,{ref:m})),r.a.createElement(z.a,{onClick:function(){navigator.clipboard.writeText(window.location.href),alert("Link copied")}},r.a.createElement(je.a,null)))),r.a.createElement("hr",null),r.a.createElement("div",{className:"watchVideo__desc"},r.a.createElement("p",null,i.description)))}var ye=Object(n.createContext)(null),_e=t(398),Ne=t(399),Se=(t(289),t(194)),ke=t.n(Se),Ce=t(407);function Te(){var e=Object(n.useState)(null),a=Object(C.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)(null),c=Object(C.a)(l,2),o=c[0],s=c[1],m=Object(n.useState)(!1),u=Object(C.a)(m,2),d=u[0],p=u[1],v=Object(n.useState)(!1),h=Object(C.a)(v,2),g=h[0],f=h[1],E=Object(n.useState)(!1),b=Object(C.a)(E,2),j=b[0],O=b[1],w=Object(n.useState)(""),y=Object(C.a)(w,2),_=y[0],N=y[1],S=Object(n.useState)(""),k=Object(C.a)(S,2),T=k[0],I=k[1],D=Object(n.useState)(""),P=Object(C.a)(D,2),W=P[0],U=P[1],A=Object(n.useState)(""),L=Object(C.a)(A,2),R=L[0],q=L[1],B=Object(n.useState)(!1),M=Object(C.a)(B,2),F=M[0],G=M[1],J=Object(n.useState)(!0),H=Object(C.a)(J,2),Z=H[0],$=H[1],K=Object(n.useState)(null),Q=Object(C.a)(K,2),X=Q[0],Y=Q[1];Object(n.useEffect)((function(){var e=parseInt(localStorage.getItem("lastLogin"))||null;return e?e+6048e5<Date.now()?(ee("error","Please login before uploading video."),G(!0),void $(!0)):void 0:(ee("error","Please login before uploading video."),G(!0),void $(!0))}),[]);var ee=function(e,a){f(e),O(a),p(!0)},te=function(){p(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:"videoUpload__main"},r.a.createElement("h2",null,"Upload Video "),r.a.createElement("form",{className:"videoUpload__Videoform"},r.a.createElement(_e.a,{className:"videoUpload__input",type:"file",autoFocus:!0,onChange:function(e){return i(e.target.files[0])}}),r.a.createElement(z.a,{disabled:F,variant:"outlined",type:"submit",onClick:function(e){e.preventDefault(),G(!0),te();var a=new FormData;a.append("video",t);var n=localStorage.getItem("accessToken")||null;if(Y(r.a.createElement(Ce.a,null)),n){ee("info","Video Uploading, Fill the below form.");var i={headers:{"x-access-token":n,"Content-type":"multipart/form-data"}};ne.a.post("https://api.firestreamz.co/api/video/upload",a,i).then((function(e){console.log(e),ee("info","Video Processing, Submit the below form (if not submitted) "),$(!1),s(e.data.videoId)})).catch((function(e){$(!0),G(!1),e.response&&ee("error",e.response.data.message)})),Y(null)}else ee("error","Please Login/Register")}}," Upload  ",r.a.createElement(ke.a,null))),d?r.a.createElement(x.a,{severity:g},j):null,r.a.createElement("h2",null,"Then"),r.a.createElement("form",{className:"videoUpload__register"},r.a.createElement(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,placeholder:"Video Title",name:"title",autoFocus:!0,onChange:function(e){return N(e.target.value)}}),r.a.createElement(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"description",placeholder:"Video Description",type:"text",onChange:function(e){return I(e.target.value)}}),r.a.createElement(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"tags",placeholder:"Tags",type:"text",helperText:"Enter Comma Seperated Tags",onChange:function(e){return U(e.target.value)}}),r.a.createElement("select",{name:"category",onChange:function(e){return q(e.target.value)}},r.a.createElement("option",{value:"Blog"},"Blog"),r.a.createElement("option",{value:"Comedy"},"Comedy"),r.a.createElement("option",{value:"Education"},"Education"),r.a.createElement("option",{value:"How to"},"How to"),r.a.createElement("option",{value:"News"},"News"),r.a.createElement("option",{value:"Non-Profit"},"Non-Profit"),r.a.createElement("option",{value:"Science and Tech"},"Science and Tech")),r.a.createElement(Ne.a,null,"Choose Category"),r.a.createElement(z.a,{disabled:Z,fullWidth:!0,onClick:function(e){e.preventDefault(),console.table({videoId:o,videoTitle:_,videoDescription:T,videoTags:W,videoCategory:R}),te();var a={videoId:o,title:_,description:T,tags:W,category:R},t={headers:{"x-access-token":localStorage.getItem("accessToken"),"Content-Type":"application/json"}};ne.a.post("https://api.firestreamz.co/api/video/register",a,t).then((function(e){console.log(e),te(),ee("success","Video registered, you will be informed when video is ready")})).catch((function(e){e.response&&e.response&&(te(),ee("error","Something went wrong"))}))},type:"submit",variant:"outlined"},"Submit")))),X)}function xe(){var e=Object(B.g)();return Object(n.useEffect)((function(){var a=parseInt(localStorage.getItem("lastLogin"))||null;a||e.push("/login"),a+6048e5<Date.now()&&e.push("/login")}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Profile [UNDER DEV]"))}t(290);var Ie=t(195),De=t.n(Ie);function Pe(){var e=Object(n.useState)(r.a.createElement(I.a,null)),a=Object(C.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)(""),c=Object(C.a)(l,2),o=c[0],s=c[1];return fetch("https://raw.githubusercontent.com/abhishekraj272/Video-Streaming-Backend/master/README.md").then((function(e){return e.text()})).then((function(e){s(e),i(null)})),r.a.createElement("div",{className:"about__main"},r.a.createElement(k,null),t,r.a.createElement("div",{className:"about__details"},r.a.createElement(De.a,null,o)))}function Ve(){return r.a.createElement("div",{className:"app"},r.a.createElement(_.a,null,r.a.createElement(ye.Provider,{value:{}},r.a.createElement(q,null),r.a.createElement(B.d,null,r.a.createElement(B.b,{path:"/watch"},r.a.createElement(we,null)),r.a.createElement(B.b,{path:"/about"},r.a.createElement(Pe,null)),r.a.createElement(B.b,{path:"/profile"},r.a.createElement(xe,null)),r.a.createElement(B.b,{path:"/upload"},r.a.createElement(Te,null)),r.a.createElement(B.b,{path:"/login"},r.a.createElement(ie,null)),r.a.createElement(B.b,{path:"/signup"},r.a.createElement(se,null)),r.a.createElement(B.b,{path:"/forget"},r.a.createElement(ue,null)),r.a.createElement(B.b,{path:"/search"},r.a.createElement(G,null)),r.a.createElement(B.b,{path:"/trending"},r.a.createElement(P,{pageTitle:"Trending"})),r.a.createElement(B.b,{path:"/likes"},r.a.createElement(P,{pageTitle:"Liked Videos"})),r.a.createElement(B.b,{path:"/myvideos"},r.a.createElement(P,{pageTitle:"My Videos"})),r.a.createElement(B.b,{path:"/"},r.a.createElement(P,{pageTitle:"Recommended"}))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[210,1,2]]]);
//# sourceMappingURL=main.66b0c6b0.chunk.js.map