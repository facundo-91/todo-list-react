(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),c=n.n(r),i=(n(10),n(1)),l=n(2),s=(n(11),function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1],i=function(t){t.preventDefault(),r&&(e.addTaskFn(r),c(""))};return o.a.createElement("form",{onSubmit:i,className:"form"},o.a.createElement("input",{className:"form-input-field",type:"text",placeholder:"Enter a task...",value:r,onChange:function(e){return c(e.target.value)}}),o.a.createElement("button",{className:"form-input-button",onClick:i},o.a.createElement("span",{className:"material-icons"},"add_circle")))}),u=(n(12),function(e){return o.a.createElement("div",{className:"task-wrapper"},o.a.createElement("input",{type:"checkbox",checked:e.taskCompleted,className:"task-checkbox",onChange:function(){return e.completeTask(e.id)}}),o.a.createElement("p",{className:e.taskCompleted?"task-text task-completed":"task-text"},e.taskText),o.a.createElement("button",{className:"task-remove-button",onClick:function(){return e.removeTask(e.id)}},o.a.createElement("span",{className:"material-icons task-remove-icon"},"delete")))}),m=(n(13),function(e){return 0===e.taskListArr.length?o.a.createElement("div",{className:"no-tasks"},o.a.createElement("p",null,"YOU DON'T HAVE TASKS!")):o.a.createElement("div",{className:"task-list"},e.taskListArr.map((function(t){return o.a.createElement(u,{key:t.id,id:t.id,taskText:t.text,taskCompleted:t.completed,removeTask:e.removeTaskFn,completeTask:e.completeTaskFn})})))}),d=(n(14),function(e){return e.taskListArr.length>0?o.a.createElement("div",{className:"task-footer"},o.a.createElement("button",{className:"remove-completed-button",onClick:function(){return e.removeCompletedFn()}},o.a.createElement("span",{className:"material-icons"},"delete_forever"),"Clear Completed"),o.a.createElement("button",{className:"remove-all-button",onClick:function(){return e.removeAllFn()}},o.a.createElement("span",{className:"material-icons"},"delete_outline"),"Clear All")):null}),f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){var e=localStorage.getItem("tasks");e&&r(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(n))}));return o.a.createElement("div",null,o.a.createElement("h1",null,"TO-DO REACT APP"),o.a.createElement(s,{addTaskFn:function(e){var t=n.length?n[n.length-1].id+1:0,a=[].concat(Object(i.a)(n),[{id:t,text:e,completed:!1}]);r(a)}}),o.a.createElement(m,{taskListArr:n,removeTaskFn:function(e){var t=Object(i.a)(n).filter((function(t){return t.id!==e}));r(t)},completeTaskFn:function(e){var t=Object(i.a)(n).map((function(t){return t.id===e&&(t.completed=!t.completed),t}));r(t)}}),o.a.createElement(d,{taskListArr:n,removeCompletedFn:function(){var e=Object(i.a)(n).filter((function(e){return!1===e.completed}));r(e)},removeAllFn:function(){r([])}}))},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(f,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todo-list-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todo-list-react","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}],[[5,1,2]]]);
//# sourceMappingURL=main.83b7dfb0.chunk.js.map