(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),s=(n(10),n(2)),i=n(1),l=(n(11),function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],s=function(t){t.preventDefault(),c&&(e.addTaskFn(c),o(""))};return r.a.createElement("form",{onSubmit:s},r.a.createElement("input",{className:"form-input-field",type:"text",placeholder:"Enter a task...",value:c,onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{className:"form-input-button",onClick:s},"ADD"))}),u=(n(12),function(e){return r.a.createElement("div",{className:"task-wrapper"},r.a.createElement("input",{type:"checkbox",className:"task-checkbox"}),r.a.createElement("p",{className:"task-text"},e.taskText),r.a.createElement("button",{className:"task-remove-button",onClick:function(){return e.removeTask(e.id)}},"X"))}),m=(n(13),function(e){return 0===e.taskListArr.length?r.a.createElement("div",{className:"no-tasks"},r.a.createElement("p",null,"YOU DON'T HAVE TASKS!")):r.a.createElement("div",{className:"task-list"},e.taskListArr.map((function(t){return r.a.createElement(u,{key:t.id,id:t.id,taskText:t.text,removeTask:e.removeTaskFn})})))}),d=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("h1",null,"TO-DO REACT APP"),r.a.createElement(l,{addTaskFn:function(e){var t=n.length?n[n.length-1].id+1:0,a=[].concat(Object(s.a)(n),[{id:t,text:e,completed:!1}]);c(a)}}),r.a.createElement(m,{taskListArr:n,removeTaskFn:function(e){var t=Object(s.a)(n).filter((function(t){return t.id!==e}));c(t)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.f4ae7afd.chunk.js.map