(()=>{var e={656:()=>{const e=document.getElementById("modalContent"),o=document.getElementById("openModalContent"),t=document.getElementById("modalNotes"),l=document.getElementById("openModalNotes"),n=document.getElementById("modalAddNote"),c=document.getElementById("openModalAddNote"),d=document.getElementById("modalLoading"),s=(document.getElementById("openModalLoading"),document.getElementById("modalDictionary")),r=document.getElementById("openModalDictionary"),u=document.querySelectorAll(".modal-heading__close");o&&(o.onclick=function(){e.style.display="block",document.body.style.overflow="hidden"}),l&&(l.onclick=function(){t.style.display="block",document.body.style.overflow="hidden"}),c&&(c.onclick=function(){n.style.display="block",document.body.style.overflow="hidden"}),r&&(r.onclick=function(){s.style.display="block",document.body.style.overflow="hidden"}),d&&(d.style.display="block",setTimeout((function(){d.style.display="none"}),3e3));for(let o of u)o.onclick=function(){e.style.display="none",t.style.display="none",n.style.display="none",s.style.display="none"};document.querySelector(".burger-menu");const i=document.querySelectorAll(".header-blue-nav__burger-button");let a=!1;for(let e of i){const o=document.querySelector(".burger-menu");document.querySelectorAll(".header-blue-nav__burger-button"),e.onclick=function(){a=!a,a?(document.body.style.overflow="hidden",o.classList.add("burger-menu--active")):(document.body.style.overflow="",o.classList.remove("burger-menu--active"))}}const y=document.querySelector(".base-button-hidden");let m=!1;y&&(y.onclick=function(){m=!m,m?document.body.mozRequestFullScreen?document.body.mozRequestFullScreen():document.body.webkitRequestFullScreen&&document.body.webkitRequestFullScreen():document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()});const b=document.querySelectorAll(".description-block-control__add");let f=!1;for(let e of b)e.onclick=function(o){if(f=!f,f){o.preventDefault(),e.style.display="none";const t=document.querySelectorAll(".description-block-control__remove");for(let e of t)e.style.display="flex"}else{o.preventDefault(),e.style.display="block";const t=document.querySelectorAll(".description-block-control__remove");for(let e of t)e.style.display="flex"}};const p=document.getElementById("popupButton"),g=document.getElementById("popup");p.addEventListener("click",(()=>{"none"===g.style.display||""===g.style.display?g.style.display="block":g.style.display="none"}));const k=document.querySelectorAll(".base-button.white");let v="light";k[1].onclick=function(){const e=document.querySelectorAll(".header-blue, .reader, .reader-navigation__back, .reader-control, .base-button.white, .base-button, .footer");if("light"==v){v="dark",console.log(v),k[1].children[0].src="../src/img/icons/moon.svg";for(let o of e)o.style.transition="all 600ms",o.classList.add("dark")}else if("dark"==v){v="sepia",console.log(v),k[1].children[0].src="../src/img/icons/sun.svg";for(let o of e)o.style.transition="all 600ms",o.classList.remove("dark"),o.classList.add("sepia")}else if("sepia"==v){v="light",console.log(v),k[1].children[0].src="../src/img/icons/sun.svg";for(let o of e)o.style.transition="all 600ms",o.classList.remove("sepia")}}}},o={};function t(l){var n=o[l];if(void 0!==n)return n.exports;var c=o[l]={exports:{}};return e[l](c,c.exports,t),c.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var l in o)t.o(o,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:o[l]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{"use strict";t(656)})()})();