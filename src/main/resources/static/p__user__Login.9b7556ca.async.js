(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[531],{49101:function(S,g,e){"use strict";e.d(g,{Z:function(){return F}});var h=e(28991),l=e(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},s=a,p=e(27029),j=function(i,v){return l.createElement(p.Z,(0,h.Z)((0,h.Z)({},i),{},{ref:v,icon:s}))};j.displayName="PlusOutlined";var F=l.forwardRef(j)},5966:function(S,g,e){"use strict";var h=e(22122),l=e(81253),a=e(67294),s=e(38128),p=["fieldProps","proFieldProps"],j=["fieldProps","proFieldProps"],F="text",z=function(m){var M=m.fieldProps,N=m.proFieldProps,O=(0,l.Z)(m,p);return a.createElement(s.Z,(0,h.Z)({mode:"edit",valueType:F,fieldProps:M,filedConfig:{valueType:F},proFieldProps:N},O))},i=function(m){var M=m.fieldProps,N=m.proFieldProps,O=(0,l.Z)(m,j);return a.createElement(s.Z,(0,h.Z)({mode:"edit",valueType:"password",fieldProps:M,proFieldProps:N,filedConfig:{valueType:F}},O))},v=z;v.Password=i,v.displayName="ProFormComponent",g.Z=v},34687:function(S){S.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",icon:"icon___rzGKO"}},32384:function(){},71105:function(S,g,e){"use strict";e.r(g),e.d(g,{default:function(){return ie}});var h=e(34792),l=e(48086),a=e(11849),s=e(3182),p=e(2824),j=e(17462),F=e(76772),z=e(94043),i=e.n(z),v=e(28991),t=e(67294),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},M=m,N=e(27029),O=function(o,y){return t.createElement(N.Z,(0,v.Z)((0,v.Z)({},o),{},{ref:y,icon:M}))};O.displayName="LockOutlined";var Y=t.forwardRef(O),Q=e(89366),X=e(22122),ue=e(84305),w=e(69224),k=e(81253),q=e(5894),_=e(13717),ce=e(32384),ee=["logo","message","title","subTitle","actions","children"];function te(u){var o=u.logo,y=u.message,C=u.title,U=u.subTitle,A=u.actions,W=u.children,B=(0,k.Z)(u,ee),G=(0,_.YB)(),K=(0,v.Z)({searchConfig:{submitText:G.getMessage("loginForm.submitText","\u767B\u5F55")},render:function(R,L){return L.pop()},submitButtonProps:{size:"large",style:{width:"100%"}}},B.submitter),T=(0,t.useContext)(w.ZP.ConfigContext),H=T.getPrefixCls("pro-form-login"),c=function(R){return"".concat(H,"-").concat(R)},I=(0,t.useMemo)(function(){return o?typeof o=="string"?t.createElement("img",{src:o}):o:null},[o]);return t.createElement("div",{className:c("container")},t.createElement("div",{className:c("top")},C||I?t.createElement("div",{className:c("header")},I?t.createElement("span",{className:c("logo")},I):null,C?t.createElement("span",{className:c("title")},C):null):null,U?t.createElement("div",{className:c("desc")},U):null),t.createElement("div",{className:c("main")},t.createElement(q.Z,(0,X.Z)({isKeyPressSubmit:!0,submitter:K},B),y,W),A?t.createElement("div",{className:c("other")},A):null))}var re=te,b=e(5966),P=e(21010),ne=e(92002),ae=e(5029),se=e(34687),D=e.n(se),r=e(85893),le=function(o){var y=o.content;return(0,r.jsx)(F.Z,{style:{marginBottom:24},message:y,type:"error",showIcon:!0})},oe=function(){var o=(0,t.useState)({}),y=(0,p.Z)(o,2),C=y[0],U=y[1],A=(0,t.useState)("account"),W=(0,p.Z)(A,2),B=W[0],G=W[1],K=(0,P.tT)("@@initialState"),T=K.initialState,H=K.setInitialState,c=function(){var L=(0,s.Z)(i().mark(function Z(){var x,f;return i().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,T==null||(x=T.fetchUserInfo)===null||x===void 0?void 0:x.call(T);case 2:if(f=d.sent,!f){d.next=6;break}return d.next=6,H(function(V){return(0,a.Z)((0,a.Z)({},V),{},{currentUser:f})});case 6:case"end":return d.stop()}},Z)}));return function(){return L.apply(this,arguments)}}(),I=function(){var L=(0,s.Z)(i().mark(function Z(x){var f,E,d,V,J;return i().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,ae.x4)((0,a.Z)((0,a.Z)({},x),{},{type:B}));case 3:if(f=n.sent,f.status!=="ok"){n.next=17;break}return E="\u767B\u5F55\u6210\u529F",l.default.success(E),n.next=9,c();case 9:if(console.log("log----1: history = "+JSON.stringify(P.m8)),P.m8){n.next=12;break}return n.abrupt("return");case 12:return console.log("log----2: history.locaton + "+JSON.stringify(P.m8.location)),d=P.m8.location.query,V=d.redirect,P.m8.push(V||"/"),n.abrupt("return");case 17:console.log(f),U(f),n.next=25;break;case 21:n.prev=21,n.t0=n.catch(0),J="\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01",l.default.error(J);case 25:case"end":return n.stop()}},Z,null,[[0,21]])}));return function(x){return L.apply(this,arguments)}}(),$=C.status,R=C.type;return(0,r.jsxs)("div",{className:D().container,children:[(0,r.jsx)("div",{className:D().lang,"data-lang":!0,children:P.pD&&(0,r.jsx)(P.pD,{})}),(0,r.jsx)("div",{className:D().content,children:(0,r.jsxs)(re,{logo:(0,r.jsx)("img",{alt:"logo",src:"/logo.svg"}),title:"\u7CD6\u53CB\u83DC\u80B4\u5F81\u96C6\u7CFB\u7EDF",subTitle:" ",initialValues:{autoLogin:!0},onFinish:function(){var L=(0,s.Z)(i().mark(function Z(x){return i().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,I(x);case 2:case"end":return E.stop()}},Z)}));return function(Z){return L.apply(this,arguments)}}(),children:[$==="error"&&R==="account"&&(0,r.jsx)(le,{content:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF"}),B==="account"&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.Z,{name:"username",fieldProps:{size:"large",prefix:(0,r.jsx)(Q.Z,{className:D().prefixIcon})},placeholder:"\u7528\u6237\u540D:",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"}]}),(0,r.jsx)(b.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,r.jsx)(Y,{className:D().prefixIcon})},placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]})]})]})}),(0,r.jsx)(ne.Z,{})]})},ie=oe},97435:function(S,g){"use strict";function e(h,l){for(var a=Object.assign({},h),s=0;s<l.length;s+=1){var p=l[s];delete a[p]}return a}g.Z=e}}]);
