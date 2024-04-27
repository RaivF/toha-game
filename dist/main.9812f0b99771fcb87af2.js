(()=>{"use strict";function e(e,t,n){e[t.code]=n}function t(e){e.element.style.top="".concat(e.y,"px"),e.element.style.left="".concat(e.x,"px")}function n(e,t,n){e.style.width="".concat(t/n*50,"%")}var i="./sound/pause.mp3",o="./sound/resume.mp3",r=new Audio("./sound/mainTheme.mp3");function a(e){var t=new Audio(e);t.volume=M,t.play()}function l(){r.addEventListener("ended",(function(){this.currentTime=0,this.play()})),r.play()}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,h(i.key),i)}}function c(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}var y=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"x",100),c(this,"y",350),c(this,"health",100),c(this,"width",30),c(this,"height",25),c(this,"element",void 0),c(this,"sprite",void 0)},t=[{key:"handlePlayerMovement",value:function(e,t){var n=5;e.KeyF&&(n=10),e.KeyW&&(this.y-=n),e.KeyS&&(this.y+=n),e.KeyA&&(this.x-=n),e.KeyD&&(this.x+=n),this.x=Math.max(0,Math.min(t.offsetWidth-this.width,this.x)),this.y=Math.max(200,Math.min(t.offsetHeight-this.height,this.y))}}],t&&m(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,v(i.key),i)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}var x=f((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"x",10),p(this,"y",20),p(this,"health",100),p(this,"width",100),p(this,"height",100),p(this,"speed",4),p(this,"direction",1),p(this,"element",void 0)}));function b(e,n,i,o,r){var a={x:e,y:n,vx:i,vy:o,element:document.createElement("div")};return a.element.className=r,document.getElementById("gameContainer").appendChild(a.element),t(a),a}var g=document.getElementById("alert"),E=document.getElementById("txt-pole");function w(e){e?g.classList.remove("none"):g.classList.add("none")}function S(e){w(!0),E.textContent=e,setTimeout(w,3e3,!1)}w(!1);var P=new y;P.element=document.createElement("div"),P.sprite=document.createElement("div"),P.sprite.className="sprite",P.element.appendChild(P.sprite),P.element.className="player",gameContainer.appendChild(P.element);var I=new x;I.element=document.createElement("div");var M=.2,B=!0,C=!0,k={},L=[],j=[],T=document.createElement("div");T.textContent="Сохранить";var O=document.createElement("div");function K(){(function(e){e?(r.pause(),a(i)):(r.play(),a(o))})(B=!B),S(B?"Пауза":"Пауза снята")}function N(){K(),r.pause();var e={player:{x:P.x,y:P.y,health:P.health},enemy:{x:I.x,y:I.y,health:I.health},playerBullets:L.map((function(e){return{x:e.x,y:e.y}})),enemyBullets:j.map((function(e){return{x:e.x,y:e.y}})),isPaused:B,volume:M};localStorage.setItem("gameState",JSON.stringify(e)),S("Игра сохранена!")}function H(){K(),S("Игра загружена!");var e=JSON.parse(localStorage.getItem("gameState"));e&&(P.x=e.player.x,P.y=e.player.y,P.health=e.player.health,t(P),I.x=e.enemy.x,I.y=e.enemy.y,I.health=e.enemy.health,t(I),B=e.isPaused,M=e.volume,L.forEach((function(e){return e.element.remove()})),j.forEach((function(e){return e.element.remove()})),L=e.playerBullets.map((function(e){return b(e.x,e.y,0,-10,"bullet")})),j=e.enemyBullets.map((function(e){return b(e.x,e.y,3*Math.cos(Math.PI/4),3*Math.sin(Math.PI/4),"enemy-bullet")}))),r.play(),r.volume=e.volume}O.innerText="Загрузить",menu.prepend(O),menu.prepend(T),function(){var i=document.getElementById("gameContainer"),o=(document.getElementById("menu"),document.getElementById("volumeControl"));T.addEventListener("click",N),O.addEventListener("click",H),o.addEventListener("input",(function(){M=this.value})),t(P),t(I),document.addEventListener("keydown",(function(n){"Space"!==n.code||k[n.code]||(function(e,t){var n=b(e.x+e.width/2,e.y,0,-10,"bullet");t.push(n)}(P,L),P.sprite.style.backgroundImage="url(./img/wizard_attack.png)",setTimeout((function(){P.sprite.style.backgroundImage="url(./img/wizard.png)"}),500)),"KeyP"===n.code&&C&&K(),"KeyR"===n.code&&(P.x=350,P.y=400,P.health=100,t(P),r.play(),I.element.classList.remove("hide"),I.x=100,I.y=20,I.health=100,t(I),B=!1,C=!0,L.forEach((function(e){return e.element.remove()})),j.forEach((function(e){return e.element.remove()})),L=[],j=[]),e(k,n,!0)})),document.addEventListener("keyup",(function(t){e(k,t,!1)})),I.element.className="enemy",i.appendChild(I.element),r.addEventListener("ended",l),setInterval((function(){B||(r.volume=M,P.handlePlayerMovement(k,i),t(P),I.x+=I.speed*I.direction,(I.x>i.offsetWidth-I.width||I.x<0)&&(I.direction*=-1),t(P),t(I),L.forEach((function(e,n){e.y+=e.vy,t(e),e.y<0&&(e.element.remove(),L.splice(n,1))})),j.forEach((function(e,n){e.x+=e.vx,e.y+=e.vy,t(e),(e.y>i.offsetHeight||e.x<0||e.x>i.offsetWidth)&&(e.element.remove(),j.splice(n,1))})),L.forEach((function(e,t){e.x<I.x+I.width&&e.x+e.vx>I.x&&e.y<I.y+I.height&&e.y+e.vy>I.y&&(I.health-=5,e.element.remove(),L.splice(t,1),a("./sound/hit.mp3"),I.health<=0&&(I.element.classList.add("hide"),a("./sound/killEnemy.mp3"),K(),C=!1,S("Вы выиграли")))})),j.forEach((function(e,t){e.x+e.vx>P.x&&e.x<P.x+P.width&&e.y<P.y+P.height&&e.y+e.vy>P.y&&(P.health-=30,e.element.remove(),j.splice(t,1),a("./sound/hitToPlayer.mp3"),n(document.getElementById("playerHealth"),P.health,100),I.speed=2+6*(1-I.health/100),P.health<=0&&(P.health=0,a("./sound/gameOver.mp3"),K(),C=!1,S("Вы проиграли :(")))})),n(document.getElementById("playerHealth"),P.health,100),I.speed=2+6*(1-I.health/100),n(document.getElementById("enemyHealth"),I.health,100),I.speed=2+6*(1-I.health/100))}),16),setInterval((function(){!function(e,t,n){if(!e){var i=Math.PI/4+Math.random()*Math.PI/1.6,o=b(n.x+n.width/2,n.y,3*Math.cos(i),3*Math.sin(i),"enemy-bullet");t.push(o)}}(B,j,I)}),100)}()})();