!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2)},function(e,t,n){},function(e,t){document.querySelector(".btn_collapse").onclick=function(){document.querySelector(".text_collapse").classList.toggle("show"),document.querySelector(".text_collapse").textContent="Традиция отмечать Новый год 1 января зародилась на Руси в 1700 году. Эту дату назначил правящий в те времена Петр Первый. До этого в стране встречали начало года 1 сентября, а до 1492 года новогоднее празднование приходилось на 1 марта. Традиция отмечать Новый год 1 января зародилась на Руси в 1700 году."},document.querySelector(".btn-push").onclick=function(){document.querySelector(".btn-push").style="transform: scale(0, 0);";const e=document.createElement("div");e.classList.add("feedback-container"),setTimeout(()=>{e.classList.add("fd-push-in")},100);const t=document.createElement("p");t.classList.add("fb-title"),t.textContent="Напишите нам";const n=document.createElement("textarea");n.classList.add("description-text"),n.setAttribute("placeholder","Ваше мнение очень важно для нас...");const o=document.createElement("div");o.classList.add("btn-send"),o.textContent="Отправить";const r=document.createElement("div");r.classList.add("close"),r.innerText="✖",document.querySelector("aside").before(e),e.append(r,t,n,o),document.querySelector(".close").onmouseup=function(){e.classList.remove("fd-push-in"),setTimeout(()=>{e.remove()},100),document.querySelector(".btn-push").style=""}}}]);