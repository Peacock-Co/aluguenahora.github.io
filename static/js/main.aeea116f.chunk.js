(this["webpackJsonpalugue-na-hora-project"]=this["webpackJsonpalugue-na-hora-project"]||[]).push([[0],{65:function(e,a,t){"use strict";(function(e){var n=t(32),r=t(22),o=t(31),c=t(0),i=t.n(c),l=t(20),m=t(93),s=t(94),u=t(104),d=t(96),p=t(106),g=t(99),b=t(105),f=t(98),h=t(76),E=t(107),v=t(100),k=t(101),x=t(102),I=t(103),w=t(75),O=t(12),j=t(67),y=t.n(j),C=t(66),N=t.n(C);function S(e){var a=e.children,t=Object(m.a)({disableHysteresis:!0,threshold:0});return i.a.cloneElement(a,{elevation:t?4:0})}var V=Object(w.a)((function(e){var a;return{toolbarMargin:Object(o.a)({},e.mixins.toolbar),tabContainer:{marginLeft:"auto"},tab:Object(o.a)(Object(o.a)({},e.typography.tab),{},{minWidth:10,marginLeft:"25px"}),logoContainer:Object(r.a)({padding:0,"&:hover":{backgroundColor:"transparent"}},e.breakpoints.down("md"),{}),logo:{height:"2.7em",marginLeft:"1em"},menuItem:Object(o.a)(Object(o.a)({},e.typography.tab),{},{fontSize:14,opacity:.6,"&:hover":{opacity:1.1}}),drawerIconContainer:{"&:hover":{backgroundColor:"transparent"},marginLeft:"auto"},drawerIcon:(a={height:"40px",width:"40px"},Object(r.a)(a,e.breakpoints.down("md"),{height:"30px",width:"30"}),Object(r.a)(a,e.breakpoints.down("xs"),{height:"25px",width:"25"}),a),drawer:{backgroundColor:e.palette.common.algBlue},drawerItems:Object(o.a)(Object(o.a)({},e.typography.tab),{},{fontSize:14,opacity:.6}),drawerItemSelected:{opacity:1.1},appbar:{zIndex:e.zIndex.modal+1}}}));a.a=function(a){var t=V(),r=Object(O.a)(),o=Object(s.a)(r.breakpoints.down("md")),m=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),w=Object(c.useState)(null),j=Object(n.a)(w,2),C=j[0],F=j[1],P=Object(c.useState)(!1),z=Object(n.a)(P,2),M=z[0],T=z[1],L=Object(c.useState)(!1),q=Object(n.a)(L,2),A=q[0],B=q[1],W=function(e){F(null),T(!1)},D=[{name:"Para propriet\xe1rios",link:"/para-proprietarios",activeIndex:2,selectedIndex:0},{name:"Anunciar im\xf3vel para alugar",link:"/anunciar-para-alugar",activeIndex:2,selectedIndex:1},{name:"Meus Im\xf3veis",link:"/meus-imoveis",activeIndex:2,selectedIndex:2}],H=[{name:"Home",link:"/",activeIndex:0},{name:"Im\xf3veis para alugar",link:"/imoveis-para-alugar",activeIndex:1},{name:"Para proprietarios",link:"/para-proprietarios",activeIndex:2,ariaOwns:C?"simple-menu":void 0,ariaPopup:C?"true":void 0,mouseOver:function(e){return F(e.currentTarget),void T(!0)}},{name:"Quem somos",link:"/quem-somos",activeIndex:3},{name:"Contate nos",link:"/contato",activeIndex:4}];Object(c.useEffect)((function(){[].concat(D,H).forEach((function(e){switch(window.location.pathname){case"".concat(e.link):a.value!==e.activeIndex&&(a.setValue(e.activeIndex),e.selectedIndex&&e.selectedIndex!==a.selectedIndex&&a.setSelectedIndex(e.selectedIndex))}}))}),[a.value,D,a.selectedIndex,H,a]);var R=i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{value:a.value,onChange:function(e,t){a.setValue(t)},className:t.tabContainer,indicatorColor:"primary"},H.map((function(e,a){return i.a.createElement(d.a,{key:"".concat(e).concat(a),className:t.tab,component:l.b,to:e.link,label:e.name,"aria-owns":e.ariaOwns,"aria-haspopup":e.ariaPopup,onMouseOver:e.mouseOver})}))),i.a.createElement(p.a,{id:"simple-menu",anchorEl:C,open:M,onClose:W,classes:{paper:t.menu},MenuListProps:{onMouseLeave:W},style:{zIndex:1302},keepMounted:!0},D.map((function(e,n){return i.a.createElement(g.a,{key:"".concat(e).concat(n),component:l.b,to:e.link,classes:{root:t.menuItem},onClick:function(e){!function(e,t){F(null),T(!1),a.setSelectedIndex(t)}(0,n),a.setValue(1),W()},selected:n===a.selectedIndex&&1===a.value},e.name)})))),_=i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{disableBackdropTransition:!m,disableDiscovery:m,open:A,onClose:function(){return B(!1)},onOpen:function(){return B(!0)},classes:{paper:t.drawer}},i.a.createElement("div",{className:t.toolbarMagin}),i.a.createElement(f.a,{disablePadding:!0},H.map((function(e){return i.a.createElement(h.a,{divider:!0,key:"".concat(e).concat(e.activeIndex),button:!0,component:l.b,to:e.link,selected:a.value===e.activeIndex,classes:{selected:t.drawerItemSelected},onClick:function(){B(!1),a.setValue(e.activeIndex)}},i.a.createElement(E.a,{className:t.drawerItems,disableTypography:!0},e.name))})))),i.a.createElement(v.a,{className:t.drawerIconContainer,onClick:function(){return B(!A)},disableRipple:!0},i.a.createElement(y.a,{className:t.drawerIcon})));return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,null,i.a.createElement(k.a,{position:"fixed",className:t.appbar},i.a.createElement(x.a,{disableGutters:!0},i.a.createElement("img",{alt:"logo marca",src:N.a,className:t.logo}),i.a.createElement(I.a,{component:l.b,to:"/",className:t.logoContainer,onClick:function(){return a.setValue(0)},disableRipple:!0}),o?_:R))),i.a.createElement("div",{className:t.toolbarMargin}))}}).call(this,t(86))},66:function(e,a,t){e.exports=t.p+"static/media/aluguenahora.logo.f496b5f0.svg"},68:function(e,a,t){e.exports=t.p+"static/media/homeclock.0f5ee7cb.jpg"},69:function(e,a,t){e.exports=t.p+"static/media/facebook-square-brands.34e73505.svg"},70:function(e,a,t){e.exports=t.p+"static/media/twitter-brands.6620c8ae.svg"},71:function(e,a,t){e.exports=t.p+"static/media/instagram-square-brands.6c6931f4.svg"},72:function(e,a,t){e.exports=t.p+"static/media/linkedin-brands.d9049f46.svg"},79:function(e,a,t){e.exports=t(92)},92:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),c=t.n(o),i=t(32),l=t(140),m=t(20),s=t(11),u=t(73),d=Object(u.a)({palette:{common:{algBlue:"".concat("#F4F4F8"),algOrange:"".concat("#dc2f02")},primary:{main:"".concat("#F4F4F8")},secondary:{main:"".concat("#dc2f02")}},typography:{tab:{fontFamily:"Raleway",textTransform:"none",fontWeight:"700"},h2:{fontWeight:"500",fontSize:"2rem"},h3:{fontWeight:"300",fontSize:"1.5rem",color:"gray",lineHeight:"1.5em"}}}),p=t(65),g=t(138),b=t(75),f=t(68),h=t.n(f),E=Object(b.a)((function(e){return{background:{backgroundImage:"url(".concat(h.a,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"30em",opacity:".8"}}}));var v=function(e){var a=E();return r.a.createElement(g.a,{container:!0,direction:"column"},r.a.createElement("section",{className:a.background}))},k=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Im\xf3veis para alugar"))},x=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Quem somos"),r.a.createElement("h2",null,"Chupa cadelao!!!"),r.a.createElement("span",null),"\ud83e\udd23 \ud83e\udd23 \ud83e\udd23 \ud83e\udd23 \ud83e\udd23 \ud83e\udd23 \ud83e\udd23 \ud83e\udd23 \ud83e\udd23 \ud83e\udd23 \ud83e\udd23 \ud83e\udd23")},I=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Pagina contato"))},w=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Anuncie seu im\xf3vel para alugar"))},O=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Meus im\xf3veis"))},j=t(22),y=t(139),C=t(142),N=t(69),S=t.n(N),V=t(70),F=t.n(V),P=t(71),z=t.n(P),M=t(72),T=t.n(M),L=Object(y.a)((function(e){var a,t;return{footer:(a={backgroundColor:e.palette.common.algBlue,width:"100%",height:"13em",zIndex:1302,position:"relative"},Object(j.a)(a,e.breakpoints.down("md"),{height:"10em"}),Object(j.a)(a,e.breakpoints.down("xs"),{height:"5em"}),a),mainContainer:{position:"absolute",height:"13em",left:"-10em"},link:{fontFamily:"Arial",fontSize:"0.75rem",fontWeight:"bold",textDecoration:"none",color:"#5D5F62"},gridItem:{margin:"3em"},icon:Object(j.a)({height:"2em",width:"2em"},e.breakpoints.down("xs"),{height:"1.5em",width:"1.5em"}),socialContainer:(t={position:"absolute",marginTop:"6em",right:"12em"},Object(j.a)(t,e.breakpoints.down("md"),{marginTop:"3.5em",justifyContent:"center",right:"0"}),Object(j.a)(t,e.breakpoints.down("xs"),{marginTop:"1.5em",right:"0"}),t)}})),q=function(e){var a=L();return r.a.createElement("footer",{className:a.footer},r.a.createElement(C.a,{mdDown:!0},r.a.createElement(g.a,{container:!0,justify:"center",className:a.mainContainer},r.a.createElement(g.a,{item:!0,className:a.gridItem},r.a.createElement(g.a,{container:!0,direction:"column"},r.a.createElement(g.a,{item:!0,component:m.b,onClick:function(){return e.setValue(0)},to:"/",className:a.link},"Home"))),r.a.createElement(g.a,{item:!0,className:a.gridItem},r.a.createElement(g.a,{container:!0,direction:"column",spacing:2},r.a.createElement(g.a,{item:!0,component:m.b,onClick:function(){return e.setValue(1)},to:"/imoveis-para-alugar",className:a.link},"Im\xf3veis para alugar"))),r.a.createElement(g.a,{item:!0,className:a.gridItem},r.a.createElement(g.a,{container:!0,direction:"column",spacing:2},r.a.createElement(g.a,{item:!0,className:a.link},"Para propriet\xe1rios"),r.a.createElement(g.a,{item:!0,component:m.b,onClick:function(){e.setValue(2),e.setSelectedIndex(0)},to:"/anunciar-para-alugar",className:a.link},"Anunciar im\xf3vel para alugar"),r.a.createElement(g.a,{item:!0,component:m.b,onClick:function(){e.setValue(2),e.setSelectedIndex(1)},to:"/meus-imoveis",className:a.link},"Meus im\xf3veis"))),r.a.createElement(g.a,{item:!0,className:a.gridItem},r.a.createElement(g.a,{container:!0,direction:"column",spacing:2},r.a.createElement(g.a,{item:!0,component:m.b,onClick:function(){return e.setValue(3)},to:"/quem-somos",className:a.link},"Quem somos"),r.a.createElement(g.a,{item:!0,component:m.b,onClick:function(){return e.setValue(5)},to:"/contato",className:a.link},"Contate nos"))))),r.a.createElement(g.a,{container:!0,justify:"flex-end",spacing:2,className:a.socialContainer},r.a.createElement(g.a,{item:!0,component:"a",href:"https://www.facebook.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{alt:"facebook logo",src:S.a,className:a.icon})),r.a.createElement(g.a,{item:!0,component:"a",href:"https://www.twitter.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{alt:"twitter logo",src:F.a,className:a.icon})),r.a.createElement(g.a,{item:!0,component:"a",href:"https://www.instagram.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{alt:"instagram logo",src:z.a,className:a.icon})),r.a.createElement(g.a,{item:!0,component:"a",href:"https://www.linkedin.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{alt:"linkedin logo",src:T.a,className:a.icon}))))},A=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(0),u=Object(i.a)(c,2),g=u[0],b=u[1];return r.a.createElement(l.a,{theme:d},r.a.createElement(m.a,null,r.a.createElement(p.a,{value:g,setValue:b,selectedIndex:t,setSelectedIndex:o}),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:function(){return r.a.createElement(v,null)}}),r.a.createElement(s.a,{exact:!0,path:"/imoveis-para-alugar",component:function(){return r.a.createElement(k,null)}}),r.a.createElement(s.a,{exact:!0,path:"/quem-somos",component:function(){return r.a.createElement(x,null)}}),r.a.createElement(s.a,{exact:!0,path:"/contato",component:function(){return r.a.createElement(I,null)}}),r.a.createElement(s.a,{exact:!0,path:"/anunciar-para-alugar",component:function(){return r.a.createElement(w,null)}}),r.a.createElement(s.a,{exact:!0,path:"/meus-imoveis",component:function(){return r.a.createElement(O,null)}}),r.a.createElement(s.a,{exact:!0,path:"/contato",component:function(){return r.a.createElement(I,null)}})),r.a.createElement(q,{value:g,setValue:b,selectedIndex:t,setSelectedIndex:o})))};c.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.aeea116f.chunk.js.map