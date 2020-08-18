(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(26)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r,a,o,c,l=n(0),i=n.n(l),u=n(9),s=n.n(u),E=(n(20),n(21),n(22),n(23),n(5)),m=n(3),d=n(1),f=n(2);!function(e){e.TEXT="TEXT",e.VIDEO="VIDEO",e.IMAGE="IMAGE",e.SYSTEM="SYSTEM",e.MODEL="MODEL"}(r||(r={})),function(e){e.GRAPHIC="GRAPHIC",e.LINK="LINK"}(a||(a={})),function(e){e.LOADING="LOADING",e.SENT="SENT",e.FAILED="FAILED",e.READ="READ"}(o||(o={})),function(e){e.SENDER="SENDER",e.RECEIVER="RECEIVER",e.SYSTEM="SYSTEM"}(c||(c={}));function p(e){var t=e.url;return i.a.createElement("div",null,i.a.createElement("img",{style:{width:"100%"},src:t}))}function h(){var e=Object(d.a)(["\n"]);return h=function(){return e},e}var v=f.a.section(h());var b=/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;function g(e){var t=e.content;if(!t)return null;console.log("content",t);var n=t.replace(b,"@$@$1$2@$@");console.log("content",n);var r=n.split("@$@");return console.log(r),i.a.createElement(v,null,r.map((function(e,t){return function(e){var t=e;return 1==new RegExp(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/).test(t)}(e)?i.a.createElement("a",{href:"".concat(e),style:{margin:"0 3px",color:"#00A2FF",cursor:"pointer"},key:t},e):i.a.createElement("span",{key:t},e)})))}function w(e){return Object(m.a)(e),i.a.createElement("div",{className:"flex1"})}function x(e){var t=e.url;return i.a.createElement("div",null,i.a.createElement("video",{src:t,controls:!0}))}function y(e){var t=e.content;return i.a.createElement("div",{className:"flex1"},t)}function S(){var e=Object(d.a)(['\n    border-radius: 4px;\n    padding: 10px;\n    max-width: 80%;\n    position: relative;\n    width: fit-content;\n    background-color: #95ec69;\n    margin-right: 10px;\n    overflow: hidden;\n\n    &:before {\n        content: "";\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        position: absolute;\n        top: 10px;\n        border-left-color: #95ec69;\n        right: -12px;\n    }\n']);return S=function(){return e},e}function R(){var e=Object(d.a)(['\n    border-radius: 4px;\n    padding: 10px;\n    max-width: 80%;\n    position: relative;\n    background-color: #fff;\n    width: fit-content;\n    margin-left: 10px;\n    overflow: hidden;\n\n    &:before {\n        content: "";\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        position: absolute;\n        top: 10px;\n        border-right-color: #fff;\n        left: -12px;\n    }\n']);return R=function(){return e},e}function T(){var e=Object(d.a)(["\n    color: #A6A6A6;\n    font-size: 12px;\n"]);return T=function(){return e},e}var M=f.a.div(T()),O=f.a.div(R()),D=f.a.div(S());var I=n(14);function N(){var e=Object(d.a)(["\n\n"]);return N=function(){return e},e}var j=f.a.div(N());function A(e){var t=e.author,n=t.thumbnail?{}:{background:"#fff"};return i.a.createElement(j,null,i.a.createElement("div",{className:"row-flex-center jc-center",style:Object(I.a)({height:50,width:50,borderRadius:"5px"},n)},t.thumbnail?i.a.createElement("img",{src:t.thumbnail}):t.name.substring(0,1)))}function C(e){var t=function(e){var t=e.type,n=e.model;switch(t){case r.TEXT:return g;case r.IMAGE:return p;case r.SYSTEM:return y;case r.VIDEO:return x;case r.MODEL:switch(n&&n.modelType){case a.GRAPHIC:return w}default:return g}}(e),n=function(e){switch(e.role){case c.SYSTEM:return M;case c.RECEIVER:return O;case c.SENDER:return D;default:return M}}(e),o=e.role,l=function(e){switch(e.role){case c.SYSTEM:return"jc-center";case c.RECEIVER:return"jc-start";case c.SENDER:return"jc-end";default:return"jc-center"}}(e);return i.a.createElement("div",{className:"row-flex-baseline ".concat(l),style:{marginBottom:10}},o===c.RECEIVER&&i.a.createElement(A,e),i.a.createElement(n,null,i.a.createElement(t,e)),o===c.SENDER&&i.a.createElement(A,e))}function k(e){var t=e.messages;return i.a.createElement(i.a.Fragment,null,t.map((function(e){return i.a.createElement(C,Object.assign({key:"".concat(e.id)},e))})))}function Y(e){var t=e.name,n=e.style;return i.a.createElement("i",{className:"iconfont fg-".concat(t),style:n})}var V=n(13);function L(e){var t=e.onPressEnter,n=Object(V.a)(e,["onPressEnter"]);return i.a.createElement("input",Object.assign({},n,{onKeyPress:function(e){"Enter"===e.key&&t(e.target.value)}}))}function F(){var e=Object(d.a)(["\n    height: 40px;\n    border-top: 1px solid #ddd;\n    padding: 0 20px 0 15px;\n    background: #F6F6F6;\n"]);return F=function(){return e},e}var G=f.a.section(F());function P(e){var t=e.onAddMessage,n=Object(l.useState)(""),a=Object(E.a)(n,2),o=a[0],u=a[1];return i.a.createElement(G,null,i.a.createElement("div",{className:"row-flex-center",style:{height:"100%"}},i.a.createElement(Y,{name:"run_task"}),i.a.createElement("div",{className:"row-flex-center jc-center flex1",style:{margin:"0 10px"}},i.a.createElement(L,{value:o,style:{width:"100%"},onChange:function(e){u(e.target.value)},onPressEnter:function(e){t(function(e){return{id:Math.ceil(1e5*Math.random()),content:e,role:c.SENDER,type:r.TEXT,author:{name:"Zhalice"}}}(e)),u("")}})),i.a.createElement(Y,{name:"member",style:{marginRight:10}}),i.a.createElement(Y,{name:"add_item"})))}function Z(e){var t=e.className,n=e.style,r=e.children;return i.a.createElement("div",{className:t,style:n},r)}function X(){var e=Object(d.a)(["\n    height: 40px;\n    border-bottom: 1px solid #D5D5D5;\n    padding: 0 20px 0 15px;\n"]);return X=function(){return e},e}var $=f.a.section(X());function H(e){var t=e.name;return i.a.createElement($,null,i.a.createElement("div",{className:"row-flex-center",style:{height:"100%"}},i.a.createElement(Y,{name:"arrow_left"}),i.a.createElement("div",{className:"row-flex-center jc-center flex1"},i.a.createElement(Z,null,t)),i.a.createElement(Y,{name:"more"})))}var _=[{id:1,content:"hello world",role:c.SENDER,type:r.TEXT,author:{name:"Zhalice"}},{id:2,content:"hello, https://www.ringcentral.com",role:c.RECEIVER,type:r.TEXT,status:o.LOADING,author:{name:"Claire"}},{id:3,url:"https://pic2.zhimg.com/v2-59540e83a77fc9148bd967b83af0d19c_r.jpg?source=172ae18b",role:c.RECEIVER,type:r.IMAGE,status:o.FAILED,author:{name:"Zhalice"}},{id:4,url:"https://youtu.be/r09vPFM0RVM",upvote:0,downvote:0,role:c.RECEIVER,type:r.VIDEO,author:{name:"Zhalice"}},{id:5,title:"Upvote Me",desc:"This behaviour is only supported within the context of Styled Components",upvote:0,downvote:0,content:'\u4f60\u62cd\u4e86\u62cd "Claire" ',role:c.SYSTEM,type:r.SYSTEM,author:{name:"Zhalice"}},{id:6,title:"Upvote Me",desc:"This behaviour is only supported within the context of Styled Components",upvote:0,downvote:0,content:"\u4f60\u62cd\u4e86\u62cd\u81ea\u5df1",role:c.SYSTEM,type:r.SYSTEM,author:{name:"Zhalice"}},{id:7,title:"Upvote Me",desc:"This behaviour is only supported within the context of Styled Components",upvote:0,downvote:0,content:'"Claire" \u62cd\u4e86\u62cd\u4f60 ',role:c.SYSTEM,type:r.SYSTEM,author:{name:"Zhalice"}}];function B(){var e=Object(d.a)(["\n    height: 667px;\n    width: 375px;\n    margin: 20px auto;\n    background-color: #EDEDED;\n"]);return B=function(){return e},e}var K=f.a.section(B());function U(e){Object(m.a)(e);var t=Object(l.useState)(_),n=Object(E.a)(t,2),r=n[0],a=n[1],o=Object(l.useRef)(null);return i.a.createElement(K,null,i.a.createElement("div",{className:"column-flex",style:{height:"100%"}},i.a.createElement(H,{name:"Claire"}),i.a.createElement("div",{ref:o,className:"flex1",style:{padding:"5px 10px",overflowY:"auto"}},i.a.createElement(k,{messages:r})),i.a.createElement(P,{onAddMessage:function(e){a(r.concat([e])),setTimeout((function(){o.current.scrollTop=o.current.scrollHeight}))}})))}var z=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.10106c00.chunk.js.map