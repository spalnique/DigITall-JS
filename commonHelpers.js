import{i as z,g as Y,b as v,s as G,c as X,u as W,a as j}from"./assets/vendor-389f7b34.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();let J=document.querySelector(".header-container"),q=document.querySelector("#themeToggle");q.addEventListener("click",H);function H(){let t=J.classList;q.checked?t.add("dark-theme"):t.remove("dark-theme")}const T=document.querySelector(".home-js"),R=document.querySelector(".shopping-js"),P=document.querySelector(".signup-js"),Q=document.querySelector(".js-user-profile"),K=document.querySelector(".js-user-name");function L(){T.classList.remove("hidden"),R.classList.remove("hidden"),Q.classList.remove("hidden"),P.classList.add("hidden")}function Z(){T.classList.add("hidden"),R.classList.add("hidden"),Q.classList.add("hidden"),P.classList.remove("hidden")}if(localStorage.getItem("userInfo")){L();const t=JSON.parse(localStorage.getItem("userInfo"));K.textContent=t.displayName}const $={apiKey:"AIzaSyCAn6DCGGRmtf9e6SAGV9R6e1JxRK2q4A8",authDomain:"digitall-project10.firebaseapp.com",projectId:"digitall-project10",storageBucket:"digitall-project10.appspot.com",messagingSenderId:"618447253868",appId:"1:618447253868:web:8e9934944d76f91f920349"},_=document.querySelector(".js-user-profile"),D=document.querySelector(".js-user-name"),tt=document.querySelector(".signup-js");z($);const N=Y();tt.addEventListener("click",et);function et(){p.show()}const p=v.create(`
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
`,{onShow:t=>{t.element().querySelector("form").addEventListener("submit",rt),t.element().querySelector(".js-signin-btn").addEventListener("click",b.show),b.close()}}),b=v.create(`
  <div class="authorization">
  <form class="autorization-form">
    
    <input type="email" name="email" required>
    <input type="password" name="password" required minlength="6" >
    <button class="form-button js-signup-btn">Sign in
    </button>
  </form>
  <button class="js-btn-signup">Sign Up</button>
  </div>
  `,{onShow:t=>{t.element().querySelector("form").addEventListener("submit",nt),t.element().querySelector(".js-btn-signup").addEventListener("click",p.show),p.close()}});function nt(t){t.preventDefault();let n=t.target.elements.email.value,e=t.target.elements.password.value;at(n,e),t.target.reset()}function ot(t,n,e){X(N,t,n).then(a=>{const o=a.user;W(o,{displayName:e}),L(),p.close()}).catch(a=>{a.code,a.message,console.log(a)})}function at(t,n){G(N,t,n).then(e=>{const a=e.user;D.textContent=a.displayName,L(),b.close(),localStorage.setItem("userInfo",JSON.stringify(a))}).catch(e=>{e.code,e.message})}function rt(t){t.preventDefault();let n=t.target.elements.email.value,e=t.target.elements.name.value,a=t.target.elements.password.value;ot(n,a,e),t.target.reset(),D.textContent=e}function st(){Z(),location.pathname.includes("shopping-list")&&(location.pathname="/"),localStorage.removeItem("userInfo")}_.addEventListener("click",st);j.defaults.baseURL="https://books-backend.p.goit.global/books";async function d(t,n=""){try{const e=t+n;return(await j.get(e)).data}catch(e){return console.error("Error fetching data:",e),null}}function it(t){const n='<li class="sidebar-category-item"><p class="sidebar-category-text">All categories</p></li>',e=t.map(o=>`<li class="sidebar-category-item" data-category="${o.list_name}"><p class="sidebar-category-text" data-category="${o.list_name}">${o.list_name}</p></li>`).join("");return n+e}function ct(t){t.target.nodeName==="LI"?(t.target.parentElement.querySelectorAll(".sidebar-category-text").forEach(e=>{e.classList.remove("make-blue")}),t.target.firstElementChild.classList.add("make-blue"),console.log(t.target.firstElementChild.textContent.split(" "))):t.target.nodeName==="P"&&(t.target.parentElement.parentElement.querySelectorAll(".sidebar-category-text").forEach(e=>{e.classList.remove("make-blue")}),t.target.classList.add("make-blue"))}function f(t){return`<li class="main-category-item" data-id="${t._id}">
    <img class="main-category-img" src="${t.book_image}"
      alt="${t.title}"
      width="${t.book_image_width}"
      height="${t.book_image_height}" data-id="${t._id}">
<div class="main-category-text-wrapper" data-id="${t._id}">
  <h3 class="main-category-title" data-id="${t._id}">${t.title}</h3>
  <p class="main-category-author" data-id="${t._id}">${t.author}</p>
</div>
</li>`}function l(t,n,e){t.innerHTML=n,document.querySelectorAll(".main-category-list").forEach(o=>{o.addEventListener("click",e)})}function y(t,n){return`<ul class="main-category-list">${t.map(o=>n(o)).join("")}</ul>`}const lt="/DigITall-JS/assets/icons-889c0fa6.svg",dt="data:image/png;base64,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",ut="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOTSURBVHgB7VdJaFRBEH3VfyYTMa4QGYxCjBCXgyLkoKgILiB6EBE8eVTvoqh48STiCnoRFfGsXjwogrggiIoGNLkYUeOGWTCELBKTSabL+v/Pn+n+07ME4y0Fze+ufl39urq6pgaYllCo3CRfQzMS3nqtuF5pVSNowqREZ2SLrsxEtjV1AO8xGRJ8A8sYyVvSXS0jByzScQkTpp5zH+okjG+m/fhWkcTYVSxPeomXMjUXUy2McXFmCx3ItJvqRByXpJoH0Jh6AjnzzHybGSuIIhcBykTwlZrd0NQoDX5jR4PR2PxyTi9fZhtrrmVWy3Dd227ua5HQoM3CElGDo8Xn81+d0+vAkIVFDKt1Yqe5r3UdwrbJGanebKBJ1iXrBJQFhr4AP57IEUy09Bs2ArOaBJ8CRrqB3jfhNyYMbihJAlmkQDEaLcdAaw6BUrNtQz2t4If7hNB3YOYi0NbroMWbbMzYAPj1GaDtMlAIAb9bZ+KUPfDDJXe/fmvcBbX2ZBGB4NzpFtn4ZuB62nW3iECASc2F2ngatHQPLLsgVdoTOlhaMCInLCe0cB14zgrQ/JVlcahNh0EaCdvetkhoreykqKtIkPNWVcYEAVs63cZigmySjMp5mpKVEOGr0FZUlCERPCGyx9VsUBFEZb0ai4kgaCZFIoyjSiQQI1EmJsDKXshVxES1RCMSDpNFMYFYTEwJCfNAXLzGzpi+J4xLpqo8USVGU6EAiAXSv3uiypjg3HVwRKokibzbuDCOZHQQ3PcZflKlhjXGGsPgRAbc3wn8GQQtaAZmzCtg8mSLPefwhFEV+T/JP9ug7x0Hd78VQxMhsVpJx2sPQm05mieafXIR/OqKEOhH+PsTklW7LzueqE3EGk2cqH/IxNvyk3X14JEBMTAOl6gtQq73o2TNxeDnl5xJw79/qp0jJduQqX6cPNW31ekJMfHbdC8P9zmZR6IfnQeWbAC/uwPyPCcuSNajw9ac1pwxMRYJeQ1dQSFibM1FRvOEEVz0p2eiTATFjIkv1/eIOk2byj6aus9F5Rty43DPojLPf9Y5jHstDH3YzzKeug4WnY4yR9IdRNyM/yQSIV9T53qWmDr7OgST0d5eULYVjkp8ChgMiUd2xNXuPz/H043jY/RYuk0oJa6AKbs/t9ck1V462/XBZaqkjB1Or/QYLVLCL5S7T0qRW0WOzluWfVVGUsavrMcvUhe6OzAtFeQvBzyhnfEyHm0AAAAASUVORK5CYII=";function I(t,n){const e=JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[];if(t.target.textContent.toLowerCase().includes("add"))e.push(n),localStorage.setItem("cart",JSON.stringify(e));else{const a=e.findIndex(o=>o._id===n._id);e.splice(a,1),localStorage.setItem("cart",JSON.stringify(e))}}function B(t){const n=JSON.parse(localStorage.getItem("cart"));return n?n.some(e=>e._id===t._id):!1}const A="Add to shopping list",k="Remove from the shopping list",O='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',U="",gt="No description has been added to this book";let w;async function mt(t){const n=t.target.dataset.id,e=await d(n);return w=e,`<div class="modal-container">
        <button class="modal-button-close" type="button">
        <svg class="modal-icon-close" width="24" height="24">
        <use href=${lt}#x-close></use></svg></button>

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
        <p class="modal-book-desc">${e.description?e.description:gt}</p>
        <div class="modal-buy-links-wrapper">
        <a
          class="modal-buy-link"
          href=${e.buy_links[0].url}
          target="_blank">
        <img
          class="modal-link-amazon-icon"
          src=${dt}
          alt="Amazon product link"
          width="62"
          height="19"/></a>
        <a
          class="modal-buy-link"
          href=${e.buy_links[1].url}
          target="_blank">
        <img
          class="modal-link-apple-icon"
          src=${ut}
          alt="Apple-book product link"
          width="33"
          height="32"/></a></div></div></div>
        <div class="button-toggle-wrapper">
          <button class="add-remove-button" type="button">${B(e)?k:A}</button>
          <p class="modal-text make-visible">${B(e)?O:U}</p>
        </div></div>`}async function u(t){if(t.target===t.currentTarget)return;const n=await mt(t);v.create(n,{onClose:ht()}).show(pt)}function pt(t){S(),document.body.classList.add("scroll-ban");const n=t.element().querySelector(".modal-button-close"),e=t.element().querySelector(".add-remove-button");n.addEventListener("click",()=>t.close()),e.addEventListener("click",bt),window.addEventListener("resize",S)}function ht(){return()=>{document.body.classList.remove("scroll-ban"),window.removeEventListener("resize",S)}}function bt(t){t.currentTarget.textContent===A?(I(t,w),t.currentTarget.textContent=k,t.currentTarget.nextElementSibling.textContent=O):t.currentTarget.textContent===k&&(I(t,w),t.currentTarget.textContent=A,t.currentTarget.nextElementSibling.textContent=U)}function S(){const t=document.querySelector(".basicLightbox"),n=document.querySelector(".modal-container");window.innerHeight<n.offsetHeight?t.classList.add("lightbox-scroll"):t.classList.remove("lightbox-scroll")}function ft(t,n,e="",a="",o=""){return`<button type="button" class="${t}" data-category = "${e}" data-action = "${a}" data-id = "${o}">${n}</button>`}function yt(t){return t.map(n=>{const e=n.list_name.split(" ");e[e.length-1]=`<span>${e[e.length-1]}</span>`;const a=`<h2 class="category-title">${e.join(" ")}</h2>`,o=y(n.books,f),r=ft("see-more-button","See more",n.list_name);return a+o+r}).join("")}function x(t){t.classList.add("visible"),t.classList.remove("hidden")}let c=0,m=!0;function At(t,n){return`<li class="sidebar-donation-list-name">
                <p class="sidebar-donation-name-number">${(n+1).toString().padStart(2,0)}</p>
                <a
                  class="sidebar-donation-name-link"
                  href="${t.url}"
                  target="_blank"
                  ><img
                    class="sidebar-donation-name-logo"
                    src="${t.img}"
                    alt="${t.title}"
                  />
                </a>
              </li>`}function kt(t){return t.map((n,e)=>At(n,e+c)).join("")}function F(t,n){const e=n.slice(c,c+6),a=kt(e);t.innerHTML=a}function wt(t){m=!m,t.style.transform=m?"rotate(0deg)":"rotate(180deg)"}function St(t,n){m?c+6<n.length?c+=3:c=0:c-3>=0?c-=3:c=n.length-6,F(t,n)}const M=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/new_png/save-the-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/new_png/project-hope.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/new_png/int-med-corps.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/new_png/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/new_png/act-against-hunger.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/new_png/prytula.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/new_png/msf.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/new_png/world-vision.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/new_png/united24.png"}],s={mainTitle:document.querySelector(".main-title"),mainCatWrap:document.querySelector(".category-list-wrapper"),mainCatList:null,catList:document.querySelector(".sidebar-category-list"),seeMoreButtons:null,donationListElement:document.querySelector(".sidebar-donation-list"),arrowIcon:document.querySelector(".sidebar-arrow-btn"),scrollButton:document.querySelector(".sidebar-scroll-btn")},g={list:"/category-list",topbooks:"/top-books",category:"/category?category=",id:"/{id}"};document.addEventListener("DOMContentLoaded",async()=>{s.mainTitle.innerHTML="Best Sellers <span>Books</span>";const t=await d(g.topbooks),n=yt(t);l(s.mainCatWrap,n,u);const e=await d(g.list),a=it(e);l(s.catList,a),s.catList.addEventListener("click",async o=>{if(o.target===o.currentTarget)return;if(!o.target.dataset.category){s.mainTitle.innerHTML="Top Sellers <span>Books</span>",l(s.mainCatWrap,n,u);return}ct(o);const r=o.target.dataset.category.split(" ");r[r.length-1]=`<span>${r[r.length-1]}</span>`,s.mainTitle.innerHTML=r.join(" ");const i=await d(g.category,o.target.textContent),h=y(i,f);l(s.mainCatWrap,h,u),document.querySelectorAll(".main-category-item").forEach(C=>x(C))}),F(s.donationListElement,M),s.scrollButton.addEventListener("click",()=>{St(s.donationListElement,M),wt(s.arrowIcon)}),s.seeMoreButtons=document.querySelectorAll(".see-more-button"),s.seeMoreButtons.forEach(o=>o.addEventListener("click",async r=>{if(!r.target.dataset.category)return;const i=r.target.dataset.category.split(" ");i[i.length-1]=`<span>${i[i.length-1]}</span>`,s.mainTitle.innerHTML=i.join(" ");const h=await d(g.category,r.target.dataset.category),E=y(h,f);l(s.mainCatWrap,E,u),document.querySelectorAll(".main-category-item").forEach(V=>x(V))}))});
//# sourceMappingURL=commonHelpers.js.map
