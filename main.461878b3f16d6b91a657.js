(()=>{var e={333:()=>{document.getElementById("burger-menu").addEventListener("click",(function(){this.classList.toggle("active"),document.querySelector(".menu-items").classList.toggle("hidden")}))}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}(()=>{"use strict";function e(e,t,n){e[t.code]=n}function t(e){e.element.style.top="".concat(e.y,"px"),e.element.style.left="".concat(e.x,"px")}function i(e,t,n){e.style.width="".concat(t/n*50,"%")}var r="./sound/pause.mp3",o="./sound/resume.mp3",a=new Audio("./sound/mainTheme.mp3");function l(e){var t=new Audio(e);t.volume=B,t.play()}function u(){a.addEventListener("ended",(function(){this.currentTime=0,this.play()})),a.play()}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,h(i.key),i)}}function s(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=c(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}var y=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"x",100),s(this,"y",350),s(this,"health",100),s(this,"width",30),s(this,"height",25),s(this,"element",void 0),s(this,"sprite",void 0)},t=[{key:"handlePlayerMovement",value:function(e,t){var n=5;e.KeyF&&(n=10),e.KeyW&&(this.y-=n),e.KeyS&&(this.y+=n),e.KeyA&&(this.x-=n),e.KeyD&&(this.x+=n),this.x=Math.max(0,Math.min(t.offsetWidth-this.width,this.x)),this.y=Math.max(200,Math.min(t.offsetHeight-this.height,this.y))}}],t&&m(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,x(i.key),i)}}function p(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function v(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){var t=function(e,t){if("object"!=d(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=d(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(t)?t:t+""}var b=p((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,"x",10),v(this,"y",20),v(this,"health",100),v(this,"width",100),v(this,"height",100),v(this,"speed",4),v(this,"direction",1),v(this,"element",void 0)}));function g(e,n,i,r,o){var a={x:e,y:n,vx:i,vy:r,element:document.createElement("div")};return a.element.className=o,document.getElementById("gameContainer").appendChild(a.element),t(a),a}var E=document.getElementById("alert"),w=document.getElementById("txt-pole");function S(e){e?E.classList.remove("none"):E.classList.add("none")}function I(e){S(!0),w.textContent=e,setTimeout(S,3e3,!1)}S(!1),n(333);var P=new y;P.element=document.createElement("div"),P.sprite=document.createElement("div"),P.sprite.className="sprite",P.element.appendChild(P.sprite),P.element.className="player",gameContainer.appendChild(P.element);var M=new b;M.element=document.createElement("div");var B=.2,L=!0,k=!0,C={},j=[],T=[],O=document.createElement("div");O.textContent="Сохранить";var K=document.createElement("div");function N(){(function(e){e?(a.pause(),l(r)):(a.play(),l(o))})(L=!L),I(L?"Пауза":"Пауза снята")}function H(){N(),a.pause();var e={player:{x:P.x,y:P.y,health:P.health},enemy:{x:M.x,y:M.y,health:M.health},playerBullets:j.map((function(e){return{x:e.x,y:e.y}})),enemyBullets:T.map((function(e){return{x:e.x,y:e.y}})),isPaused:L,volume:B};localStorage.setItem("gameState",JSON.stringify(e)),I("Игра сохранена!")}function W(){N(),I("Игра загружена!");var e=JSON.parse(localStorage.getItem("gameState"));e&&(P.x=e.player.x,P.y=e.player.y,P.health=e.player.health,t(P),M.x=e.enemy.x,M.y=e.enemy.y,M.health=e.enemy.health,t(M),L=e.isPaused,B=e.volume,j.forEach((function(e){return e.element.remove()})),T.forEach((function(e){return e.element.remove()})),j=e.playerBullets.map((function(e){return g(e.x,e.y,0,-10,"bullet")})),T=e.enemyBullets.map((function(e){return g(e.x,e.y,3*Math.cos(Math.PI/4),3*Math.sin(Math.PI/4),"enemy-bullet")}))),a.play(),a.volume=e.volume}K.innerText="Загрузить",menu.prepend(K),menu.prepend(O),function(){var n=document.getElementById("gameContainer"),r=(document.getElementById("menu"),document.getElementById("volumeControl"));O.addEventListener("click",H),K.addEventListener("click",W),r.addEventListener("input",(function(){B=this.value})),t(P),t(M),document.addEventListener("keydown",(function(n){"Space"!==n.code||C[n.code]||(function(e,t){var n=g(e.x+e.width/2,e.y,0,-10,"bullet");t.push(n)}(P,j),P.sprite.style.backgroundImage="url(./img/wizard_attack.png)",setTimeout((function(){P.sprite.style.backgroundImage="url(./img/wizard.png)"}),500)),"KeyP"===n.code&&k&&N(),"KeyR"===n.code&&(P.x=350,P.y=400,P.health=100,t(P),a.play(),M.element.classList.remove("hide"),M.x=100,M.y=20,M.health=100,t(M),L=!1,k=!0,j.forEach((function(e){return e.element.remove()})),T.forEach((function(e){return e.element.remove()})),j=[],T=[]),e(C,n,!0)})),document.addEventListener("keyup",(function(t){e(C,t,!1)})),M.element.className="enemy",n.appendChild(M.element),a.addEventListener("ended",u),setInterval((function(){L||(a.volume=B,P.handlePlayerMovement(C,n),t(P),M.x+=M.speed*M.direction,(M.x>n.offsetWidth-M.width||M.x<0)&&(M.direction*=-1),t(P),t(M),j.forEach((function(e,n){e.y+=e.vy,t(e),e.y<0&&(e.element.remove(),j.splice(n,1))})),T.forEach((function(e,i){e.x+=e.vx,e.y+=e.vy,t(e),(e.y>n.offsetHeight||e.x<0||e.x>n.offsetWidth)&&(e.element.remove(),T.splice(i,1))})),j.forEach((function(e,t){e.x<M.x+M.width&&e.x+e.vx>M.x&&e.y<M.y+M.height&&e.y+e.vy>M.y&&(M.health-=5,e.element.remove(),j.splice(t,1),l("./sound/hit.mp3"),M.health<=0&&(M.element.classList.add("hide"),l("./sound/killEnemy.mp3"),N(),k=!1,I("Вы выиграли")))})),T.forEach((function(e,t){e.x+e.vx>P.x&&e.x<P.x+P.width&&e.y<P.y+P.height&&e.y+e.vy>P.y&&(P.health-=30,e.element.remove(),T.splice(t,1),l("./sound/hitToPlayer.mp3"),i(document.getElementById("playerHealth"),P.health,100),M.speed=2+6*(1-M.health/100),P.health<=0&&(P.health=0,l("./sound/gameOver.mp3"),N(),k=!1,I("Вы проиграли :(")))})),i(document.getElementById("playerHealth"),P.health,100),M.speed=2+6*(1-M.health/100),i(document.getElementById("enemyHealth"),M.health,100),M.speed=2+6*(1-M.health/100))}),16),setInterval((function(){!function(e,t,n){if(!e){var i=Math.PI/4+Math.random()*Math.PI/1.6,r=g(n.x+n.width/2,n.y,3*Math.cos(i),3*Math.sin(i),"enemy-bullet");t.push(r)}}(L,T,M)}),100)}()})()})();