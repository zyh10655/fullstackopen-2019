(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=t(14),l=t(2),i=function(e){var n=e.persons,t=e.removePerson;return r.a.createElement(r.a.Fragment,null,n.map(function(e){return r.a.createElement("div",{key:e.id},e.name,e.number,r.a.createElement("button",{onClick:function(){return t(e.id,e.name)}}," delete"))}))},m=function(e){var n=e.persons,t=e.filter,a=e.updateFilter;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(t)}},r.a.createElement("div",null,"filter shown with:",r.a.createElement("input",{value:t,onChange:a}))))},d=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"success"},n)},s=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},f=function(e){var n=e.newName,t=e.newNumber,a=e.addPerson,c=e.handlePersonChange,o=e.handleNumberChange;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:n,onChange:c})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:t,onChange:o}),r.a.createElement("br",null)),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add or update"))))},v=t(3),h=t.n(v),b="api/persons",E=function(){return h.a.get(b).then(function(e){return e.data})},p=function(e){return h.a.post(b,e).then(function(e){return e.data})},w=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then(function(e){return e.data})},g=function(e){return h.a.delete("".concat(b,"/").concat(e)).then(function(e){return e.data})},O=(t(38),function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),v=Object(l.a)(o,2),h=v[0],b=v[1],O=Object(a.useState)(""),j=Object(l.a)(O,2),C=j[0],N=j[1],S=Object(a.useState)(""),y=Object(l.a)(S,2),P=y[0],k=y[1],D=Object(a.useState)(null),F=Object(l.a)(D,2),I=F[0],x=F[1],A=Object(a.useState)(null),J=Object(l.a)(A,2),L=J[0],T=J[1];Object(a.useEffect)(function(){E().then(function(e){c(e)})},[]);var B=function(e,n){var t=e.response.data?"Error: ".concat(e.response.data.error):n;T(t),setTimeout(function(){T(null)},5e3)},H=function(e){x(e),setTimeout(function(){x(null)},5e3)},U=t.filter(function(e){return e.name.toLowerCase().includes(P.toLowerCase())});return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(d,{message:I}),r.a.createElement(s,{message:L}),r.a.createElement(m,{value:P,updateFilter:function(e){k(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(f,{newName:h,newNumber:C,addPerson:function(e){e.preventDefault();var n={name:h,number:C},a=t.map(function(e){return e.name}).indexOf(h);if(a>-1){var r=t[a];window.confirm("".concat(h," is already added to the phonebook, replace the old number with a new one?")),w(r.id,n).then(function(e){c(t.map(function(t){return t.id===r.id?Object(u.a)({},n,{id:e.id}):t})),H("Updated ".concat(h))}).catch(function(e){B(e,"Error: Information of ".concat(h," was already removed from the server "))})}else p(n).then(function(e){c(t.concat(e)),H("Added ".concat(h)),b(""),N("")}).catch(function(e){B(e,e.message),console.log(e.response.data)})},handlePersonChange:function(e){b(e.target.value)},handleNumberChange:function(e){N(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(i,{persons:U,removePerson:function(e,n){window.confirm("Delete ".concat(n,"?"))&&g(e).then(function(){c(t.filter(function(n){return n.id!==e})),console.log(h),x("Information of ".concat(n," has been removed from the server"))}).catch(function(e){B(e,"Have you already deleted ".concat(n,"?"))})}}))});o.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.830cd5b7.chunk.js.map