(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=(a(10),a(1)),s=a(2),i=(a(11),function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],l=function(t){t.preventDefault(),c&&(e.addTaskFn(c),o(""))};return r.a.createElement("form",{onSubmit:l,className:"form"},r.a.createElement("input",{className:"form-input-field",type:"text",placeholder:"Enter a task...",value:c,onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{className:"form-input-button",onClick:l},r.a.createElement("span",{className:"material-icons"},"add_circle")))}),m=(a(12),function(e){return r.a.createElement("div",{className:"task-wrapper"},r.a.createElement("input",{type:"checkbox",checked:e.taskCompleted,className:"task-checkbox",onChange:function(){return e.completeTask(e.id)}}),r.a.createElement("p",{className:e.taskCompleted?"task-text task-completed":"task-text"},e.taskText),r.a.createElement("button",{className:"task-remove-button",onClick:function(){return e.removeTask(e.id)}},r.a.createElement("span",{className:"material-icons task-remove-icon"},"delete")))}),u=(a(13),function(e){return 0===e.taskListArr.length?r.a.createElement("div",{className:"no-tasks"},r.a.createElement("p",null,"YOU DON'T HAVE TASKS!")):r.a.createElement("div",{className:"task-list"},e.taskListArr.map((function(t){return r.a.createElement(m,{key:t.id,id:t.id,taskText:t.text,taskCompleted:t.completed,removeTask:e.removeTaskFn,completeTask:e.completeTaskFn})})))}),d=(a(14),function(e){return e.taskListArr.length>0?r.a.createElement("div",{className:"task-footer"},r.a.createElement("button",{className:"remove-completed-button",onClick:function(){return e.removeCompletedFn()}},r.a.createElement("span",{className:"material-icons"},"delete_forever"),"Clear Completed"),r.a.createElement("button",{className:"remove-all-button",onClick:function(){return e.removeAllFn()}},r.a.createElement("span",{className:"material-icons"},"delete_outline"),"Clear All")):null}),k=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("h1",null,"TO-DO REACT APP"),r.a.createElement(i,{addTaskFn:function(e){var t=a.length?a[a.length-1].id+1:0,n=[].concat(Object(l.a)(a),[{id:t,text:e,completed:!1}]);c(n)}}),r.a.createElement(u,{taskListArr:a,removeTaskFn:function(e){var t=Object(l.a)(a).filter((function(t){return t.id!==e}));c(t)},completeTaskFn:function(e){var t=Object(l.a)(a).map((function(t){return t.id===e&&(t.completed=!t.completed),t}));c(t)}}),r.a.createElement(d,{taskListArr:a,removeCompletedFn:function(){var e=Object(l.a)(a).filter((function(e){return!1===e.completed}));c(e)},removeAllFn:function(){c([])}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.84c2cb06.chunk.js.map