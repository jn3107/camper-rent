"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[215],{2502:function(e,n,s){s.d(n,{Z:function(){return u}});var i=s(2791),t=s(4420),c=s(7972),a=s(7703),r="Modal_backdrop__rxD7r",l="Modal_backdropActive__i8H3t",o="Modal_modalContent__rRYZG",d="Modal_modalContentActive__KVvhl",_="Modal_button__uMjH2",m=s(184),u=function(e){var n=e.children,s=(0,t.v9)(a.r),u=(0,t.I0)(),v=(0,i.useCallback)((function(e){"Escape"===e.code&&u((0,c.Mr)()),e.currentTarget===e.target&&u((0,c.Mr)())}),[u]);return(0,i.useEffect)((function(){return document.addEventListener("keydown",v),function(){document.removeEventListener("keydown",v)}}),[v]),(0,m.jsx)("div",{className:s?r+" "+l:r,onClick:v,children:(0,m.jsxs)("div",{className:s?o+" "+d:o,children:[(0,m.jsx)("button",{className:_,onClick:function(){return u((0,c.Mr)())}}),n]})})}},6215:function(e,n,s){s.r(n),s.d(n,{default:function(){return E}});var i=s(2791),t=s(9439),c=s(4420),a=s(7972),r=s(7703),l=s(775),o=s(3146),d=s(6005),_=s(7928),m=s(1218),u=s(2502),v="Reviews_flex__MeipD",h="Reviews_list__f6R8E",x="Reviews_card__q1jc0",j="Reviews_user__lxkR8",p="Reviews_avatar__AFWw9",f="Reviews_desc__K3cbb",N=s(184),g=function(e){var n=e.camper,s=function(e){for(var n=[],s=0;s<e;s++)n.push();for(var i=0;i<5-e;i++)n.push();return n};return(0,N.jsx)("div",{className:v,children:(0,N.jsx)("ul",{className:h,children:n.reviews.map((function(e){var n=e.reviewer_name,i=e.reviewer_rating,t=e.comment;return(0,N.jsxs)("li",{className:x,children:[(0,N.jsxs)("div",{className:j,children:[(0,N.jsx)("div",{className:p,children:n.charAt(0).toUpperCase()}),(0,N.jsxs)("div",{children:[(0,N.jsx)("p",{children:n}),(0,N.jsx)("div",{children:s(i)})]})]}),(0,N.jsx)("p",{className:f,children:t})]},i)}))})})},Z="ModalContent_img__NXYay",w="ModalContent_title__0yW7l",C="ModalContent_loc_container__gSdAl",b="ModalContent_gap__iCQaB",k="ModalContent_price__bi0Sw",M="ModalContent_img_container__PjKpM",L="ModalContent_desc__i8LxW",R="ModalContent_options__m1Mto",y="ModalContent_option__VyXQ5",A=function(e){var n=e.camper,s=(0,i.useState)(!1),c=(0,t.Z)(s,2),a=c[0],r=c[1],l=(0,i.useState)(!1),o=(0,t.Z)(l,2),d=o[0],_=o[1];return(0,N.jsxs)("div",{children:[(0,N.jsx)("div",{className:w,children:n.name}),(0,N.jsxs)("div",{className:C,children:[(0,N.jsx)("p",{className:b,children:"".concat(n.rating,"(").concat(n.reviews.length," Reviews)")}),(0,N.jsx)("p",{className:b,children:n.location})]}),(0,N.jsxs)("div",{className:k,children:["\u20ac",n.price.toFixed(2)]}),(0,N.jsxs)("div",{className:M,children:[(0,N.jsx)("img",{className:Z,src:n.gallery[0],width:290,alt:"camper"}),(0,N.jsx)("img",{className:Z,src:n.gallery[1],width:290,alt:"camper"}),(0,N.jsx)("img",{className:Z,src:n.gallery[2],width:290,alt:"camper"})]}),(0,N.jsx)("p",{className:L,children:n.description}),(0,N.jsxs)("div",{className:R,children:[(0,N.jsx)("div",{className:y,onClick:function(){r(!a),d&&_(!d)},children:"Features"}),(0,N.jsx)("div",{className:y,onClick:function(){_(!d),a&&r(!a)},children:"Reviews"})]}),d&&(0,N.jsx)(g,{camper:n})]})},S=function(){var e=(0,c.I0)(),n=(0,c.v9)(o.b),s=(0,c.v9)(l.t),v=(0,c.v9)(r.r),h=(0,i.useState)(4),x=(0,t.Z)(h,2),j=x[0],p=x[1],f=(0,i.useState)(null),g=(0,t.Z)(f,2),Z=g[0],w=g[1];(0,i.useEffect)((function(){e((0,d.z)())}),[e]);var C=function(n){w(n),e((0,a.h7)())};return(0,N.jsxs)("div",{className:"".concat(m.Z.container," container"),children:[(0,N.jsx)("ul",{className:m.Z.list,children:n.slice(0,j).map((function(i){var t=i._id,c=i.name,a=i.price,r=i.rating,l=i.location,o=i.adults,d=i.engine,h=i.transmission,x=i.description,j=i.details,p=i.gallery,f=i.reviews;return(0,N.jsxs)("li",{className:m.Z.card,children:[(0,N.jsx)("img",{className:m.Z.img,src:p[0],alt:"camper"}),(0,N.jsxs)("div",{children:[(0,N.jsxs)("div",{className:m.Z.title_container,children:[(0,N.jsx)("h2",{style:{fontSize:"24px"},children:c}),(0,N.jsxs)("div",{className:m.Z.price,children:[(0,N.jsxs)("p",{children:["\u20ac",a.toFixed(2)]}),(0,N.jsx)("button",{className:m.Z.like,onClick:function(){return function(n){var i=s.some((function(e){return e._id===n._id}));e(i?(0,_.bZ)(n):(0,_.IY)(n))}(n[t-1])}})]})]}),(0,N.jsxs)("div",{className:m.Z.loc_container,children:[(0,N.jsx)("p",{className:m.Z.gap,children:"".concat(r,"(").concat(f.length," Reviews)")}),(0,N.jsx)("p",{className:m.Z.gap,children:l})]}),(0,N.jsx)("p",{className:m.Z.desc,children:x}),(0,N.jsxs)("div",{className:m.Z.benefits,children:[(0,N.jsx)("div",{className:m.Z.item,children:"".concat(o," adults")}),(0,N.jsx)("div",{className:m.Z.item,children:h.charAt(0).toUpperCase()+h.slice(1)}),(0,N.jsx)("div",{className:m.Z.item,children:d.charAt(0).toUpperCase()+d.slice(1)}),(0,N.jsx)("div",{className:m.Z.item,children:"".concat(j.kitchen," Kitchen")}),(0,N.jsx)("div",{className:m.Z.item,children:"".concat(j.beds," Beds")}),(0,N.jsx)("div",{className:m.Z.item,children:"AC"})]}),(0,N.jsx)("button",{className:m.Z.button,onClick:function(){return C(t)},children:"Show more"}),v&&Z===t&&(0,N.jsx)(u.Z,{children:(0,N.jsx)(A,{camper:n[t-1]})})]})]},t)}))}),j<n.length&&(0,N.jsx)("button",{className:"".concat(m.Z.button," ").concat(m.Z.load),onClick:function(){p((function(e){return e+4}))},children:"Load more"})]})},E=function(){return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("div",{children:(0,N.jsx)(S,{})})})}},3146:function(e,n,s){s.d(n,{b:function(){return i}});var i=function(e){return e.campers.items}},775:function(e,n,s){s.d(n,{t:function(){return i}});var i=function(e){return e.favorites.favorites}},7703:function(e,n,s){s.d(n,{r:function(){return i}});var i=function(e){return e.modal.showModal}},1218:function(e,n){n.Z={container:"List_container__8-smP",list:"List_list__DrYFp",card:"List_card__xMGct",img:"List_img__lOKLO",price:"List_price__-J6tw",gap:"List_gap__ThRev",desc:"List_desc__4q3NV",benefits:"List_benefits__IPqGv",item:"List_item__5gNlE",button:"List_button__VYNCd",load:"List_load__BWw3U",like:"List_like__1Q54o",title_container:"List_title_container__UVryG",loc_container:"List_loc_container__jG2Nu"}}}]);
//# sourceMappingURL=215.c6b4b49d.chunk.js.map