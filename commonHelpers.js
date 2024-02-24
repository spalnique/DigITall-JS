import{i as M,g as j,b as f,s as R,c as q,u as Q,a as v}from"./assets/vendor-389f7b34.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&a(g)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();let T=document.querySelector(".header-container"),L=document.querySelector("#themeToggle");L.addEventListener("click",P);function P(){let t=T.classList;L.checked?t.add("dark-theme"):t.remove("dark-theme")}const C=document.querySelector(".home-js"),S=document.querySelector(".shopping-js"),w=document.querySelector(".signup-js"),E=document.querySelector(".js-user-profile"),U=document.querySelector(".js-user-name");function y(){C.classList.remove("hidden"),S.classList.remove("hidden"),E.classList.remove("hidden"),w.classList.add("hidden")}function V(){C.classList.add("hidden"),S.classList.add("hidden"),E.classList.add("hidden"),w.classList.remove("hidden")}if(localStorage.getItem("userInfo")){y();const t=JSON.parse(localStorage.getItem("userInfo"));U.textContent=t.displayName}const D={apiKey:"AIzaSyCAn6DCGGRmtf9e6SAGV9R6e1JxRK2q4A8",authDomain:"digitall-project10.firebaseapp.com",projectId:"digitall-project10",storageBucket:"digitall-project10.appspot.com",messagingSenderId:"618447253868",appId:"1:618447253868:web:8e9934944d76f91f920349"},F=document.querySelector(".js-user-profile"),B=document.querySelector(".js-user-name"),z=document.querySelector(".signup-js");M(D);const I=j();z.addEventListener("click",N);function N(){u.show()}const u=f.create(`
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
`,{onShow:t=>{t.element().querySelector("form").addEventListener("submit",X),t.element().querySelector(".js-signin-btn").addEventListener("click",b.show),b.close()}}),b=f.create(`
  <div class="authorization">
  <form class="autorization-form">
    
    <input type="email" name="email" required>
    <input type="password" name="password" required minlength="6" >
    <button class="form-button js-signup-btn">Sign in
    </button>
  </form>
  <button class="js-btn-signup">Sign Up</button>
  </div>
  `,{onShow:t=>{t.element().querySelector("form").addEventListener("submit",O),t.element().querySelector(".js-btn-signup").addEventListener("click",u.show),u.close()}});function O(t){t.preventDefault();let o=t.target.elements.email.value,e=t.target.elements.password.value;G(o,e),t.target.reset()}function Y(t,o,e){q(I,t,o).then(a=>{const n=a.user;Q(n,{displayName:e}),y(),u.close()}).catch(a=>{a.code,a.message,console.log(a)})}function G(t,o){R(I,t,o).then(e=>{const a=e.user;B.textContent=a.displayName,y(),b.close(),localStorage.setItem("userInfo",JSON.stringify(a))}).catch(e=>{e.code,e.message})}function X(t){t.preventDefault();let o=t.target.elements.email.value,e=t.target.elements.name.value,a=t.target.elements.password.value;Y(o,a,e),t.target.reset(),B.textContent=e}function W(){V(),location.pathname.includes("shopping-list")&&(location.pathname="/"),localStorage.removeItem("userInfo")}F.addEventListener("click",W);v.defaults.baseURL="https://books-backend.p.goit.global/books";async function i(t,o=""){try{const e=t+o;return(await v.get(e)).data}catch(e){return console.error("Error fetching data:",e),null}}function J(t){return Array.from(t,o=>`<li class="sidebar-category-list-item">${o.list_name}</li>`).join("")}function H(t,o,e="",a="",n=""){return`<button type="button" class="${t}" data-category = "${e}" data-action = "${a}" data-id = "${n}">${o}</button>`}function m(t){return`<li class="card-book" data-id="${t._id}">
  <a class="book-link" href="${t.book_image}" data-id="${t._id}"></a>
    <img class="book-image" src="${t.book_image}"
      alt="${t.title}"
      width="${t.book_image_width}"
      height="${t.book_image_height}" data-id="${t._id}">
<div class="book-content" data-id="${t._id}">
  <h3 class="book-title" data-id="${t._id}">${t.title}</h3>
  <p class="book-author" data-id="${t._id}">${t.author}</p>
</div>
</li>`}function c(t,o,e){t.innerHTML=o,document.querySelectorAll(".category-list").forEach(n=>{n.addEventListener("click",e)})}function p(t,o){return`<ul class="category-list">${t.map(n=>o(n)).join("")}</ul>`}const K="/DigITall-JS/assets/icons-889c0fa6.svg",Z="data:image/png;base64,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",$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOTSURBVHgB7VdJaFRBEH3VfyYTMa4QGYxCjBCXgyLkoKgILiB6EBE8eVTvoqh48STiCnoRFfGsXjwogrggiIoGNLkYUeOGWTCELBKTSabL+v/Pn+n+07ME4y0Fze+ufl39urq6pgaYllCo3CRfQzMS3nqtuF5pVSNowqREZ2SLrsxEtjV1AO8xGRJ8A8sYyVvSXS0jByzScQkTpp5zH+okjG+m/fhWkcTYVSxPeomXMjUXUy2McXFmCx3ItJvqRByXpJoH0Jh6AjnzzHybGSuIIhcBykTwlZrd0NQoDX5jR4PR2PxyTi9fZhtrrmVWy3Dd227ua5HQoM3CElGDo8Xn81+d0+vAkIVFDKt1Yqe5r3UdwrbJGanebKBJ1iXrBJQFhr4AP57IEUy09Bs2ArOaBJ8CRrqB3jfhNyYMbihJAlmkQDEaLcdAaw6BUrNtQz2t4If7hNB3YOYi0NbroMWbbMzYAPj1GaDtMlAIAb9bZ+KUPfDDJXe/fmvcBbX2ZBGB4NzpFtn4ZuB62nW3iECASc2F2ngatHQPLLsgVdoTOlhaMCInLCe0cB14zgrQ/JVlcahNh0EaCdvetkhoreykqKtIkPNWVcYEAVs63cZigmySjMp5mpKVEOGr0FZUlCERPCGyx9VsUBFEZb0ai4kgaCZFIoyjSiQQI1EmJsDKXshVxES1RCMSDpNFMYFYTEwJCfNAXLzGzpi+J4xLpqo8USVGU6EAiAXSv3uiypjg3HVwRKokibzbuDCOZHQQ3PcZflKlhjXGGsPgRAbc3wn8GQQtaAZmzCtg8mSLPefwhFEV+T/JP9ug7x0Hd78VQxMhsVpJx2sPQm05mieafXIR/OqKEOhH+PsTklW7LzueqE3EGk2cqH/IxNvyk3X14JEBMTAOl6gtQq73o2TNxeDnl5xJw79/qp0jJduQqX6cPNW31ekJMfHbdC8P9zmZR6IfnQeWbAC/uwPyPCcuSNajw9ac1pwxMRYJeQ1dQSFibM1FRvOEEVz0p2eiTATFjIkv1/eIOk2byj6aus9F5Rty43DPojLPf9Y5jHstDH3YzzKeug4WnY4yR9IdRNyM/yQSIV9T53qWmDr7OgST0d5eULYVjkp8ChgMiUd2xNXuPz/H043jY/RYuk0oJa6AKbs/t9ck1V462/XBZaqkjB1Or/QYLVLCL5S7T0qRW0WOzluWfVVGUsavrMcvUhe6OzAtFeQvBzyhnfEyHm0AAAAASUVORK5CYII=",k="Add to shopping list",h="Remove from the shopping list",x='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',_="",tt="No description has been added to this book";async function et(t){const o=t.target.dataset.id,e=await i(o);return`<div class="modal-container">
        <button class="modal-button-close" type="button">
        <svg class="modal-icon-close" width="24" height="24">
        <use href=${K}#x-close></use></svg></button>

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
        <p class="modal-book-desc">${e.description?e.description:tt}</p>
            
        <div class="modal-buy-links-wrapper">
        <a
          class="modal-buy-link"
          href=${e.buy_links[0].url}
          target="_blank">
        <img 
          class="modal-link-amazon-icon" 
          src=${Z} 
          alt="Amazon product link"
          width="62"
          height="19"/></a>
        <a
          class="modal-buy-link"
          href=${e.buy_links[1].url}
          target="_blank">
        <img
          class="modal-link-apple-icon"
          src=${$}
          alt="Apple-book product link"
          width="33"
          height="32"/></a></div></div></div>

        <div class="button-toggle-wrapper">
          <button class="add-remove-button" type="button">${h}</button>
          <p class="modal-text make-visible">${x}</p>
        </div></div>`}async function l(t){if(t.target===t.currentTarget)return;const o=await et(t);f.create(o,{onClose:nt()}).show(ot)}function ot(t){A(),document.body.classList.add("scroll-ban");const o=t.element().querySelector(".modal-button-close"),e=t.element().querySelector(".add-remove-button");o.addEventListener("click",()=>t.close()),e.addEventListener("click",at),window.addEventListener("resize",A)}function nt(){return()=>{document.body.classList.remove("scroll-ban"),window.removeEventListener("resize",A)}}function at(t){t.currentTarget.textContent===k?(console.log("Here will be a function that add books"),t.currentTarget.textContent=h,t.currentTarget.nextElementSibling.textContent=x):t.currentTarget.textContent===h&&(console.log("Here will be a function that remove books"),t.currentTarget.textContent=k,t.currentTarget.nextElementSibling.textContent=_)}function A(){const t=document.querySelector(".basicLightbox"),o=document.querySelector(".modal-container");window.innerHeight<o.offsetHeight?t.classList.add("lightbox-scroll"):t.classList.remove("lightbox-scroll")}const r={mainTitle:document.querySelector(".main-title"),mainCatWrap:document.querySelector(".category-list-wrapper"),mainCatList:null,catList:document.querySelector(".sidebar-category-list"),seeMoreButtons:null},d={list:"/category-list",topbooks:"/top-books",category:"/category?category=",id:"/{id}"};document.addEventListener("DOMContentLoaded",async()=>{r.mainTitle.textContent="Best Sellers Books";try{const o=(await i(d.topbooks)).map(e=>{const a=`<h2 class="category-title">${e.list_name}</h2>`,n=p(e.books,m),s=H("see-more-button","See more",e.list_name);return a+n+s}).join("");c(r.mainCatWrap,o,l)}catch(t){console.log("Error getting top sellers book data:",t)}try{const t=await i(d.list),o=J(t);c(r.catList,o,l)}catch(t){console.log("Error getting sidebar category list:",t)}r.catList.addEventListener("click",async t=>{if(t.target!==t.currentTarget){r.mainTitle.textContent=t.target.textContent;try{const o=await i(d.category,t.target.textContent),e=p(o,m);c(r.mainCatWrap,e,l)}catch(o){console.log("Error getting selected category data:",o)}}}),r.seeMoreButtons=document.querySelectorAll(".see-more-button"),r.seeMoreButtons.forEach(t=>t.addEventListener("click",async o=>{if(o.target.dataset.category){r.mainTitle.textContent=o.target.dataset.category;try{const e=await i(d.category,o.target.dataset.category),a=p(e,m);c(r.mainCatWrap,a,l)}catch(e){console.log("Error getting selected category data:",e)}}}))});
//# sourceMappingURL=commonHelpers.js.map
