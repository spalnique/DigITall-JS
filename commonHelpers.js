import{i as T,g as Q,b as k,s as P,c as N,u as D,a as C}from"./assets/vendor-389f7b34.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();let O=document.querySelector(".header-container"),E=document.querySelector("#themeToggle");E.addEventListener("click",U);function U(){let t=O.classList;E.checked?t.add("dark-theme"):t.remove("dark-theme")}const w=document.querySelector(".home-js"),I=document.querySelector(".shopping-js"),B=document.querySelector(".signup-js"),x=document.querySelector(".js-user-profile"),V=document.querySelector(".js-user-name");function L(){w.classList.remove("hidden"),I.classList.remove("hidden"),x.classList.remove("hidden"),B.classList.add("hidden")}function F(){w.classList.add("hidden"),I.classList.add("hidden"),x.classList.add("hidden"),B.classList.remove("hidden")}if(localStorage.getItem("userInfo")){L();const t=JSON.parse(localStorage.getItem("userInfo"));V.textContent=t.displayName}const z={apiKey:"AIzaSyCAn6DCGGRmtf9e6SAGV9R6e1JxRK2q4A8",authDomain:"digitall-project10.firebaseapp.com",projectId:"digitall-project10",storageBucket:"digitall-project10.appspot.com",messagingSenderId:"618447253868",appId:"1:618447253868:web:8e9934944d76f91f920349"},Y=document.querySelector(".js-user-profile"),M=document.querySelector(".js-user-name"),G=document.querySelector(".signup-js");T(z);const j=Q();G.addEventListener("click",X);function X(){g.show()}const g=k.create(`
<div class="authorization">
<form class="autorization-form">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <input type="password" name="password" required minlength="6" >
  <button class="form-button" >Sign up

  </button>
</form>
<button class="sign-up-btn">Sign Up</button>
<button class="sign-in-btn js-signin-btn">Sign in</button>
</div>
`,{onShow:t=>{t.element().querySelector("form").addEventListener("submit",K),t.element().querySelector(".js-signin-btn").addEventListener("click",m.show),m.close()}}),m=k.create(`
  <div class="authorization">
  <form class="autorization-form">
    
    <input type="email" name="email" required>
    <input type="password" name="password" required minlength="6" >
    <button class="form-button js-signup-btn">Sign in
    </button>
  </form>
  <button class="js-btn-signup">Sign Up</button>
  </div>
  `,{onShow:t=>{t.element().querySelector("form").addEventListener("submit",J),t.element().querySelector(".js-btn-signup").addEventListener("click",g.show),g.close()}});function J(t){t.preventDefault();let o=t.target.elements.email.value,e=t.target.elements.password.value;H(o,e),t.target.reset()}function W(t,o,e){N(j,t,o).then(a=>{const n=a.user;D(n,{displayName:e}),L(),g.close()}).catch(a=>{a.code,a.message,console.log(a)})}function H(t,o){P(j,t,o).then(e=>{const a=e.user;M.textContent=a.displayName,L(),m.close(),localStorage.setItem("userInfo",JSON.stringify(a))}).catch(e=>{e.code,e.message})}function K(t){t.preventDefault();let o=t.target.elements.email.value,e=t.target.elements.name.value,a=t.target.elements.password.value;W(o,a,e),t.target.reset(),M.textContent=e}function Z(){F(),location.pathname.includes("shopping-list")&&(location.pathname="/"),localStorage.removeItem("userInfo")}Y.addEventListener("click",Z);C.defaults.baseURL="https://books-backend.p.goit.global/books";async function l(t,o=""){try{const e=t+o;return(await C.get(e)).data}catch(e){return console.error("Error fetching data:",e),null}}function $(t){const o='<li class="sidebar-category-item"><p class="sidebar-category-text">All categories</p></li>',e=t.map(n=>`<li class="sidebar-category-item" data-category="${n.list_name}"><p class="sidebar-category-text" data-category="${n.list_name}">${n.list_name}</p></li>`).join("");return o+e}function _(t){t.target.nodeName==="LI"?(t.target.parentElement.querySelectorAll(".sidebar-category-text").forEach(e=>{e.classList.remove("make-blue")}),t.target.firstElementChild.classList.add("make-blue"),console.log(t.target.firstElementChild.textContent.split(" "))):t.target.nodeName==="P"&&(t.target.parentElement.parentElement.querySelectorAll(".sidebar-category-text").forEach(e=>{e.classList.remove("make-blue")}),t.target.classList.add("make-blue"))}function tt(t,o,e="",a="",n=""){return`<button type="button" class="${t}" data-category = "${e}" data-action = "${a}" data-id = "${n}">${o}</button>`}function p(t){return`<li class="main-category-item" data-id="${t._id}">
    <img class="main-category-img" src="${t.book_image}"
      alt="${t.title}"
      width="${t.book_image_width}"
      height="${t.book_image_height}" data-id="${t._id}">
<div class="main-category-text-wrapper" data-id="${t._id}">
  <h3 class="main-category-title" data-id="${t._id}">${t.title}</h3>
  <p class="main-category-author" data-id="${t._id}">${t.author}</p>
</div>
</li>`}function c(t,o,e){t.innerHTML=o,document.querySelectorAll(".category-list").forEach(n=>{n.addEventListener("click",e)})}function y(t,o){return`<ul class="main-category-list">${t.map(n=>o(n)).join("")}</ul>`}const et="/DigITall-JS/assets/icons-889c0fa6.svg",ot="data:image/png;base64,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",at="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOTSURBVHgB7VdJaFRBEH3VfyYTMa4QGYxCjBCXgyLkoKgILiB6EBE8eVTvoqh48STiCnoRFfGsXjwogrggiIoGNLkYUeOGWTCELBKTSabL+v/Pn+n+07ME4y0Fze+ufl39urq6pgaYllCo3CRfQzMS3nqtuF5pVSNowqREZ2SLrsxEtjV1AO8xGRJ8A8sYyVvSXS0jByzScQkTpp5zH+okjG+m/fhWkcTYVSxPeomXMjUXUy2McXFmCx3ItJvqRByXpJoH0Jh6AjnzzHybGSuIIhcBykTwlZrd0NQoDX5jR4PR2PxyTi9fZhtrrmVWy3Dd227ua5HQoM3CElGDo8Xn81+d0+vAkIVFDKt1Yqe5r3UdwrbJGanebKBJ1iXrBJQFhr4AP57IEUy09Bs2ArOaBJ8CRrqB3jfhNyYMbihJAlmkQDEaLcdAaw6BUrNtQz2t4If7hNB3YOYi0NbroMWbbMzYAPj1GaDtMlAIAb9bZ+KUPfDDJXe/fmvcBbX2ZBGB4NzpFtn4ZuB62nW3iECASc2F2ngatHQPLLsgVdoTOlhaMCInLCe0cB14zgrQ/JVlcahNh0EaCdvetkhoreykqKtIkPNWVcYEAVs63cZigmySjMp5mpKVEOGr0FZUlCERPCGyx9VsUBFEZb0ai4kgaCZFIoyjSiQQI1EmJsDKXshVxES1RCMSDpNFMYFYTEwJCfNAXLzGzpi+J4xLpqo8USVGU6EAiAXSv3uiypjg3HVwRKokibzbuDCOZHQQ3PcZflKlhjXGGsPgRAbc3wn8GQQtaAZmzCtg8mSLPefwhFEV+T/JP9ug7x0Hd78VQxMhsVpJx2sPQm05mieafXIR/OqKEOhH+PsTklW7LzueqE3EGk2cqH/IxNvyk3X14JEBMTAOl6gtQq73o2TNxeDnl5xJw79/qp0jJduQqX6cPNW31ekJMfHbdC8P9zmZR6IfnQeWbAC/uwPyPCcuSNajw9ac1pwxMRYJeQ1dQSFibM1FRvOEEVz0p2eiTATFjIkv1/eIOk2byj6aus9F5Rty43DPojLPf9Y5jHstDH3YzzKeug4WnY4yR9IdRNyM/yQSIV9T53qWmDr7OgST0d5eULYVjkp8ChgMiUd2xNXuPz/H043jY/RYuk0oJa6AKbs/t9ck1V462/XBZaqkjB1Or/QYLVLCL5S7T0qRW0WOzluWfVVGUsavrMcvUhe6OzAtFeQvBzyhnfEyHm0AAAAASUVORK5CYII=";function S(t,o){const e=o._id,a=JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[];if(t.target.textContent.toLowerCase().includes("add"))a.push(o),localStorage.setItem("cart",JSON.stringify(a));else{const n=a.findIndex(s=>s._id===e);a.splice(n,1),localStorage.setItem("cart",JSON.stringify(a))}}function v(t){const o=t._id;return JSON.parse(localStorage.getItem("cart")).some(a=>a._id===o)}const b="Add to shopping list",h="Remove from the shopping list",q='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',R="",nt="No description has been added to this book";let A;async function st(t){const o=t.target.dataset.id,e=await l(o);return A=e,`<div class="modal-container">
        <button class="modal-button-close" type="button">
        <svg class="modal-icon-close" width="24" height="24">
        <use href=${et}#x-close></use></svg></button>

        <div class="modal-book-wrapper">
        <img
          class="modal-img"
          src="${e.book_image}"
          alt="${e.title}"
          width="287"
          height="408"/>
        
        <div class="modal-book-desc-wrapper">
        <h2 class="modal-book-title">${e.title}</h2>
        <h3 class="modal-book-author">${e.author}</h3>
        <p class="modal-book-desc">${e.description?e.description:nt}</p>
            
        <div class="modal-buy-links-wrapper">
        <a
          class="modal-buy-link"
          href=${e.buy_links[0].url}
          target="_blank">
        <img 
          class="modal-link-amazon-icon" 
          src=${ot} 
          alt="Amazon product link"
          width="62"
          height="19"/></a>
        <a
          class="modal-buy-link"
          href=${e.buy_links[1].url}
          target="_blank">
        <img
          class="modal-link-apple-icon"
          src=${at}
          alt="Apple-book product link"
          width="33"
          height="32"/></a></div></div></div>

        <div class="button-toggle-wrapper">
          <button class="add-remove-button" type="button">${v(e)?h:b}</button>
          <p class="modal-text make-visible">${v(e)?q:R}</p>
        </div></div>`}async function d(t){if(t.target===t.currentTarget)return;const o=await st(t);k.create(o,{onClose:it()}).show(rt)}function rt(t){f(),document.body.classList.add("scroll-ban");const o=t.element().querySelector(".modal-button-close"),e=t.element().querySelector(".add-remove-button");o.addEventListener("click",()=>t.close()),e.addEventListener("click",ct),window.addEventListener("resize",f)}function it(){return()=>{document.body.classList.remove("scroll-ban"),window.removeEventListener("resize",f)}}function ct(t){t.currentTarget.textContent===b?(S(t,A),t.currentTarget.textContent=h,t.currentTarget.nextElementSibling.textContent=q):t.currentTarget.textContent===h&&(S(t,A),t.currentTarget.textContent=b,t.currentTarget.nextElementSibling.textContent=R)}function f(){const t=document.querySelector(".basicLightbox"),o=document.querySelector(".modal-container");window.innerHeight<o.offsetHeight?t.classList.add("lightbox-scroll"):t.classList.remove("lightbox-scroll")}function lt(t){return t.map(o=>{const e=o.list_name.split(" ");e[e.length-1]=`<span>${e[e.length-1]}</span>`;const a=`<h2 class="category-title">${e.join(" ")}</h2>`,n=y(o.books,p),s=tt("see-more-button","See more",o.list_name);return a+n+s}).join("")}const r={mainTitle:document.querySelector(".main-title"),mainCatWrap:document.querySelector(".category-list-wrapper"),mainCatList:null,catList:document.querySelector(".sidebar-category-list"),seeMoreButtons:null},u={list:"/category-list",topbooks:"/top-books",category:"/category?category=",id:"/{id}"};document.addEventListener("DOMContentLoaded",async()=>{r.mainTitle.innerHTML="Best Sellers <span>Books</span>";const t=await l(u.topbooks),o=lt(t);c(r.mainCatWrap,o,d);try{const e=await l(u.list),a=$(e);c(r.catList,a)}catch(e){console.log("Error getting sidebar category list:",e)}r.catList.addEventListener("click",async e=>{if(e.target===e.currentTarget)return;if(!e.target.dataset.category){r.mainTitle.innerHTML="Top Sellers <span>Books</span>",c(r.mainCatWrap,o,d);return}_(e);const a=e.target.dataset.category.split(" ");a[a.length-1]=`<span>${a[a.length-1]}</span>`,r.mainTitle.innerHTML=a.join(" ");try{const n=await l(u.category,e.target.textContent),s=y(n,p);c(r.mainCatWrap,s,d)}catch(n){console.log("Error getting selected category data:",n)}}),r.seeMoreButtons=document.querySelectorAll(".see-more-button"),r.seeMoreButtons.forEach(e=>e.addEventListener("click",async a=>{if(!a.target.dataset.category)return;const n=a.target.dataset.category.split(" ");n[n.length-1]=`<span>${n[n.length-1]}</span>`,r.mainTitle.innerHTML=n.join(" ");try{const s=await l(u.category,a.target.dataset.category),i=y(s,p);c(r.mainCatWrap,i,d)}catch(s){console.log("Error getting selected category data:",s)}}))});
//# sourceMappingURL=commonHelpers.js.map
