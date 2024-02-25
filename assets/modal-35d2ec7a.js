import{i as T,g as q,b as p,s as j,c as R,u as M,a as A}from"./vendor-389f7b34.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();let Q=document.querySelector(".header-container"),y=document.querySelector("#themeToggle");y.addEventListener("click",P);function P(){let t=Q.classList;y.checked?t.add("dark-theme"):t.remove("dark-theme")}const w=document.querySelector(".home-js"),S=document.querySelector(".shopping-js"),v=document.querySelector(".signup-js"),k=document.querySelector(".js-user-profile"),D=document.querySelector(".js-user-name");function h(){w.classList.remove("hidden"),S.classList.remove("hidden"),k.classList.remove("hidden"),v.classList.add("hidden")}function N(){w.classList.add("hidden"),S.classList.add("hidden"),k.classList.add("hidden"),v.classList.remove("hidden")}if(localStorage.getItem("userInfo")){h();const t=JSON.parse(localStorage.getItem("userInfo"));D.textContent=t.displayName}const O={apiKey:"AIzaSyCAn6DCGGRmtf9e6SAGV9R6e1JxRK2q4A8",authDomain:"digitall-project10.firebaseapp.com",projectId:"digitall-project10",storageBucket:"digitall-project10.appspot.com",messagingSenderId:"618447253868",appId:"1:618447253868:web:8e9934944d76f91f920349"},U=document.querySelector(".js-user-profile"),L=document.querySelector(".js-user-name"),F=document.querySelector(".signup-js");T(O);const I=q();F.addEventListener("click",V);function V(){s.show()}const s=p.create(`
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
`,{onShow:t=>{t.element().querySelector("form").addEventListener("submit",X),t.element().querySelector(".js-signin-btn").addEventListener("click",c.show),c.close()}}),c=p.create(`
  <div class="authorization">
  <form class="autorization-form">
    
    <input type="email" name="email" required>
    <input type="password" name="password" required minlength="6" >
    <button class="form-button js-signup-btn">Sign in
    </button>
  </form>
  <button class="js-btn-signup">Sign Up</button>
  </div>
  `,{onShow:t=>{t.element().querySelector("form").addEventListener("submit",z),t.element().querySelector(".js-btn-signup").addEventListener("click",s.show),s.close()}});function z(t){t.preventDefault();let o=t.target.elements.email.value,e=t.target.elements.password.value;G(o,e),t.target.reset()}function Y(t,o,e){R(I,t,o).then(r=>{const n=r.user;M(n,{displayName:e}),h(),s.close()}).catch(r=>{r.code,r.message,console.log(r)})}function G(t,o){j(I,t,o).then(e=>{const r=e.user;L.textContent=r.displayName,h(),c.close(),localStorage.setItem("userInfo",JSON.stringify(r))}).catch(e=>{e.code,e.message})}function X(t){t.preventDefault();let o=t.target.elements.email.value,e=t.target.elements.name.value,r=t.target.elements.password.value;Y(o,r,e),t.target.reset(),L.textContent=e}function H(){N(),location.pathname.includes("shopping-list")&&(location.pathname="/"),localStorage.removeItem("userInfo")}U.addEventListener("click",H);const C={mainTitle:document.querySelector(".main-title"),mainCatWrap:document.querySelector(".category-list-wrapper"),mainCatList:null,catList:document.querySelector(".sidebar-category-list"),seeMoreButtons:null,donationListElement:document.querySelector(".sidebar-donation-list"),arrowIcon:document.querySelector(".sidebar-arrow-btn"),scrollButton:document.querySelector(".sidebar-scroll-btn"),shopListWrap:document.querySelector(".main-shopping-list")};let l=0;function mt(t,o,e="",r="",n=""){return`<button type="button" class="${t}" data-category = "${e}" data-action = "${r}" data-id = "${n}">${o}</button>`}function pt(t,o){return`<ul class="main-category-list">${t.map(n=>o(n)).join("")}</ul>`}function ht(t){return`<li class="main-category-item" data-id="${t._id}">
    <img class="main-category-img" src="${t.book_image}"
      alt="${t.title}"
      width="${t.book_image_width}"
      height="${t.book_image_height}" data-id="${t._id}">
<div class="main-category-text-wrapper" data-id="${t._id}">
  <h3 class="main-category-title" data-id="${t._id}">${t.title}</h3>
  <p class="main-category-author" data-id="${t._id}">${t.author}</p>
</div>
</li>`}function bt(t,o,e){t.innerHTML=o,document.querySelectorAll(".main-category-list").forEach(n=>{n.addEventListener("click",e)})}function J(t,o){return`<li class="sidebar-donation-list-name">
                <p class="sidebar-donation-name-number">${(o+1).toString().padStart(2,0)}</p>
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
              </li>`}function W(t){return t.map((o,e)=>J(o,e+l)).join("")}function K(t,o){const e=o.slice(l,l+6),r=W(e);t.innerHTML=r}const Z=document.querySelector(".sidebar-scroll-btn"),E=document.querySelector(".sidebar-donation-list"),$=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/new_png/save-the-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/new_png/project-hope.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/new_png/int-med-corps.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/new_png/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/new_png/act-against-hunger.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/new_png/prytula.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/new_png/msf.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/new_png/world-vision.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/new_png/united24.png"}];K(C.donationListElement,$);C.scrollButton.addEventListener("click",()=>{});function _(t){t.currentTarget.scrollTop===t.currentTarget.scrollHeight-t.currentTarget.clientHeight?t.currentTarget.nextElementSibling.style.transform="rotate(180deg)":t.currentTarget.scrollTop===0&&(t.currentTarget.nextElementSibling.style.transform="rotate(0deg)")}E.addEventListener("scroll",_);function tt(t,o){if(o.currentTarget.style.transform==="rotate(0deg)"){let e=+(t.scrollHeight/t.children.length).toFixed(2);t.scrollTop+=e,t.scrollTo({top:t.scrollTop,behavior:"smooth"}),t.scrollTop===t.scrollHeight-t.clientHeight&&(o.currentTarget.style.transform="rotate(180deg)")}else o.currentTarget.style.transform==="rotate(180deg)"&&t.scrollTo({top:0,behavior:"smooth"})}const et=tt.bind(null,E);Z.addEventListener("click",et);A.defaults.baseURL="https://books-backend.p.goit.global/books";const ft={list:"/category-list",topbooks:"/top-books",category:"/category?category=",id:"/{id}"};async function ot(t,o=""){try{const e=t+o;return(await A.get(e)).data}catch(e){return console.error("Error fetching data:",e),null}}const nt="/DigITall-JS/assets/icons-65de63e3.svg",rt="data:image/png;base64,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",at="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOTSURBVHgB7VdJaFRBEH3VfyYTMa4QGYxCjBCXgyLkoKgILiB6EBE8eVTvoqh48STiCnoRFfGsXjwogrggiIoGNLkYUeOGWTCELBKTSabL+v/Pn+n+07ME4y0Fze+ufl39urq6pgaYllCo3CRfQzMS3nqtuF5pVSNowqREZ2SLrsxEtjV1AO8xGRJ8A8sYyVvSXS0jByzScQkTpp5zH+okjG+m/fhWkcTYVSxPeomXMjUXUy2McXFmCx3ItJvqRByXpJoH0Jh6AjnzzHybGSuIIhcBykTwlZrd0NQoDX5jR4PR2PxyTi9fZhtrrmVWy3Dd227ua5HQoM3CElGDo8Xn81+d0+vAkIVFDKt1Yqe5r3UdwrbJGanebKBJ1iXrBJQFhr4AP57IEUy09Bs2ArOaBJ8CRrqB3jfhNyYMbihJAlmkQDEaLcdAaw6BUrNtQz2t4If7hNB3YOYi0NbroMWbbMzYAPj1GaDtMlAIAb9bZ+KUPfDDJXe/fmvcBbX2ZBGB4NzpFtn4ZuB62nW3iECASc2F2ngatHQPLLsgVdoTOlhaMCInLCe0cB14zgrQ/JVlcahNh0EaCdvetkhoreykqKtIkPNWVcYEAVs63cZigmySjMp5mpKVEOGr0FZUlCERPCGyx9VsUBFEZb0ai4kgaCZFIoyjSiQQI1EmJsDKXshVxES1RCMSDpNFMYFYTEwJCfNAXLzGzpi+J4xLpqo8USVGU6EAiAXSv3uiypjg3HVwRKokibzbuDCOZHQQ3PcZflKlhjXGGsPgRAbc3wn8GQQtaAZmzCtg8mSLPefwhFEV+T/JP9ug7x0Hd78VQxMhsVpJx2sPQm05mieafXIR/OqKEOhH+PsTklW7LzueqE3EGk2cqH/IxNvyk3X14JEBMTAOl6gtQq73o2TNxeDnl5xJw79/qp0jJduQqX6cPNW31ekJMfHbdC8P9zmZR6IfnQeWbAC/uwPyPCcuSNajw9ac1pwxMRYJeQ1dQSFibM1FRvOEEVz0p2eiTATFjIkv1/eIOk2byj6aus9F5Rty43DPojLPf9Y5jHstDH3YzzKeug4WnY4yR9IdRNyM/yQSIV9T53qWmDr7OgST0d5eULYVjkp8ChgMiUd2xNXuPz/H043jY/RYuk0oJa6AKbs/t9ck1V462/XBZaqkjB1Or/QYLVLCL5S7T0qRW0WOzluWfVVGUsavrMcvUhe6OzAtFeQvBzyhnfEyHm0AAAAASUVORK5CYII=";function b(t,o){const e=JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[];if(t.target.textContent.toLowerCase().includes("add"))e.push(o),localStorage.setItem("cart",JSON.stringify(e));else{const r=e.findIndex(n=>n._id===o._id);e.splice(r,1),localStorage.setItem("cart",JSON.stringify(e))}}function f(t){const o=st();return o?o.some(e=>e._id===t._id):!1}function st(){return JSON.parse(localStorage.getItem("cart"))||[]}const d="Add to shopping list",u="Remove from the shopping list",B='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',x="",it="No description has been added to this book";let g;async function ct(t){const o=t.target.dataset.id,e=await ot(o);return g=e,`<div class="modal-container">
        <button class="modal-button-close" type="button">
        <svg class="modal-icon-close" width="24" height="24">
        <use href=${nt}#x-close></use></svg></button>

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
        <p class="modal-book-desc">${e.description?e.description:it}</p>
        <div class="modal-buy-links-wrapper">
        <a
          class="modal-buy-link"
          href=${e.buy_links[0].url}
          target="_blank">
        <img
          class="modal-link-amazon-icon"
          src=${rt}
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
          <button class="add-remove-button" type="button">${f(e)?u:d}</button>
          <p class="modal-text make-visible">${f(e)?B:x}</p>
        </div></div>`}async function At(t){if(t.target===t.currentTarget)return;const o=await ct(t);p.create(o,{onClose:dt()}).show(lt)}function lt(t){m(),document.body.classList.add("scroll-ban");const o=t.element().querySelector(".modal-button-close"),e=t.element().querySelector(".add-remove-button");o.addEventListener("click",()=>t.close()),e.addEventListener("click",ut),window.addEventListener("resize",m)}function dt(){return()=>{document.body.classList.remove("scroll-ban"),window.removeEventListener("resize",m)}}function ut(t){t.currentTarget.textContent===d?(b(t,g),t.currentTarget.textContent=u,t.currentTarget.nextElementSibling.textContent=B):t.currentTarget.textContent===u&&(b(t,g),t.currentTarget.textContent=d,t.currentTarget.nextElementSibling.textContent=x)}function m(){const t=document.querySelector(".basicLightbox"),o=document.querySelector(".modal-container");window.innerHeight<o.offsetHeight?t.classList.add("lightbox-scroll"):t.classList.remove("lightbox-scroll")}export{C as a,pt as b,At as c,ht as d,ft as e,ot as f,mt as g,st as h,bt as r};
//# sourceMappingURL=modal-35d2ec7a.js.map
