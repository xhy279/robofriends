(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(9),c=n.n(a),i=(n(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(26);var l=n(2),u=n(3),d=n(5),h=n(4),f=n(6),b=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(o,"?200*200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},p=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(b,{key:e.id,id:e.id,name:e.name,email:e.email})}))},E=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{onChange:t,className:"pa3 ba b--green bg-light-blue",type:"search",placeholder:"search robots"}))},g=function(e){return r.a.createElement("div",{style:{overflow:"scroll",height:"800px",border:"5px solid black"}},e.children)},m=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," Opps, some errors "):this.props.children}}]),t}(o.Component),v=(n(27),n(10)),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).updateCount=function(){e.setState(function(e){return{count:e.count+1}},function(){console.log("state udpate")})},e.state={count:0},e}return Object(f.a)(t,e),Object(u.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return t.count!==this.state.count}},{key:"render",value:function(){return r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(o.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{color:"red"}),r.a.createElement("h1",{className:"f1"},"Robofriends"))}}]),t}(o.Component);console.log("production");var j=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.onRequestRobots)()}},{key:"render",value:function(){var e=this.props,t=e.onSearchChange,n=e.searchField,o=e.robots,a=e.isPending,c=o.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement(w,null),r.a.createElement(E,{searchChange:t}),r.a.createElement(g,null,r.a.createElement(m,null,r.a.createElement(p,{robots:c}))))}}]),t}(o.Component),y=Object(v.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(j),S=n(7),C=n(19),R={searchField:""},_={isPending:!1,robots:[],error:""},k=n(17),T=n(18),N=Object(k.createLogger)(),U=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):S.d)(Object(S.a)(N,T.a)),P=Object(S.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(C.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{isPending:!1,error:t.payload});default:return e}}}),D=Object(S.e)(P,U);c.a.render(r.a.createElement(v.a,{store:D},r.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/robofriends","/service-worker.js");i?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):s(t,e)})}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.0d0a66d7.chunk.js.map