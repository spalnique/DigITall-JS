import{i as q,g as R,b as h,s as M,c as Q,u as P,a as y}from"./vendor-389f7b34.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();let F=document.querySelector(".header-container"),w=document.querySelector("#themeToggle");w.addEventListener("click",T);function T(){let t=F.classList;w.checked?t.add("dark-theme"):t.remove("dark-theme")}const S=document.querySelector(".home-js"),v=document.querySelector(".shopping-js"),k=document.querySelector(".signup-js"),I=document.querySelector(".js-user-profile"),N=document.querySelector(".js-user-name");function b(){S.classList.remove("hidden"),v.classList.remove("hidden"),I.classList.remove("hidden"),k.classList.add("hidden")}function O(){S.classList.add("hidden"),v.classList.add("hidden"),I.classList.add("hidden"),k.classList.remove("hidden")}if(localStorage.getItem("userInfo")){b();const t=JSON.parse(localStorage.getItem("userInfo"));N.textContent=t.displayName}const U={apiKey:"AIzaSyCAn6DCGGRmtf9e6SAGV9R6e1JxRK2q4A8",authDomain:"digitall-project10.firebaseapp.com",projectId:"digitall-project10",storageBucket:"digitall-project10.appspot.com",messagingSenderId:"618447253868",appId:"1:618447253868:web:8e9934944d76f91f920349"},D=document.querySelector(".js-user-profile"),L=document.querySelector(".js-user-name"),V=document.querySelector(".signup-js");q(U);const C=R();V.addEventListener("click",z);function z(){i.show()}const i=h.create(`
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
`,{onShow:t=>{t.element().querySelector("form").addEventListener("submit",J),t.element().querySelector(".js-signin-btn").addEventListener("click",l.show),l.close()}}),l=h.create(`
  <div class="authorization">
  <form class="autorization-form">
    
    <input type="email" name="email" required>
    <input type="password" name="password" required minlength="6" >
    <button class="form-button js-signup-btn">Sign in
    </button>
  </form>
  <button class="js-btn-signup">Sign Up</button>
  </div>
  `,{onShow:t=>{t.element().querySelector("form").addEventListener("submit",Y),t.element().querySelector(".js-btn-signup").addEventListener("click",i.show),i.close()}});function Y(t){t.preventDefault();let o=t.target.elements.email.value,e=t.target.elements.password.value;X(o,e),t.target.reset()}function G(t,o,e){Q(C,t,o).then(a=>{const n=a.user;P(n,{displayName:e}),b(),i.close()}).catch(a=>{a.code,a.message,console.log(a)})}function X(t,o){M(C,t,o).then(e=>{const a=e.user;L.textContent=a.displayName,b(),l.close(),localStorage.setItem("userInfo",JSON.stringify(a))}).catch(e=>{e.code,e.message})}function J(t){t.preventDefault();let o=t.target.elements.email.value,e=t.target.elements.name.value,a=t.target.elements.password.value;G(o,a,e),t.target.reset(),L.textContent=e}function W(){O(),location.pathname.includes("shopping-list")&&(location.pathname="/"),localStorage.removeItem("userInfo")}D.addEventListener("click",W);const s={mainTitle:document.querySelector(".main-title"),mainCatWrap:document.querySelector(".category-list-wrapper"),mainCatList:null,catList:document.querySelector(".sidebar-category-list"),seeMoreButtons:null,donationListElement:document.querySelector(".sidebar-donation-list"),arrowIcon:document.querySelector(".sidebar-arrow-btn"),scrollButton:document.querySelector(".sidebar-scroll-btn"),shopListWrap:document.querySelector(".main-shopping-list")};let d=0;function dt(t,o,e="",a="",n=""){return`<button type="button" class="${t}" data-category = "${e}" data-action = "${a}" data-id = "${n}">${o}</button>`}function ut(t,o){return`<ul class="main-category-list">${t.map(n=>o(n)).join("")}</ul>`}function gt(t){return`<li class="main-category-item" data-id="${t._id}">
    <img class="main-category-img" src="${t.book_image}"
      alt="${t.title}"
      width="${t.book_image_width}"
      height="${t.book_image_height}" data-id="${t._id}">
<div class="main-category-text-wrapper" data-id="${t._id}">
  <h3 class="main-category-title" data-id="${t._id}">${t.title}</h3>
  <p class="main-category-author" data-id="${t._id}">${t.author}</p>
</div>
</li>`}function mt(t,o,e){t.innerHTML=o,document.querySelectorAll(".main-category-list").forEach(n=>{n.addEventListener("click",e)})}function H(t,o){return`<li class="sidebar-donation-list-name">
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
              </li>`}function K(t){return t.map((o,e)=>H(o,e+d)).join("")}function E(t,o){const e=o.slice(d,d+6),a=K(e);t.innerHTML=a}const x=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/new_png/save-the-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/new_png/project-hope.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/new_png/int-med-corps.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/new_png/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/new_png/act-against-hunger.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/new_png/prytula.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/new_png/msf.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/new_png/world-vision.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/new_png/united24.png"}];E(s.donationListElement,x);s.scrollButton.addEventListener("click",()=>{$(s.donationListElement,x),Z(s.arrowIcon)});function Z(t){isForward=!isForward,t.style.transform=isForward?"rotate(0deg)":"rotate(180deg)"}function $(t,o){isForward?startIndex+6<o.length?startIndex+=3:startIndex=0:startIndex-3>=0?startIndex-=3:startIndex=o.length-6,E(t,o)}y.defaults.baseURL="https://books-backend.p.goit.global/books";const pt={list:"/category-list",topbooks:"/top-books",category:"/category?category=",id:"/{id}"};async function _(t,o=""){try{const e=t+o;return(await y.get(e)).data}catch(e){return console.error("Error fetching data:",e),null}}const tt="/DigITall-JS/assets/icons-889c0fa6.svg",et="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAUCAYAAADV9o4UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdESURBVHgBxVhrbFRFFD4zd7e0WwpbbIWW7S5bVCggiIAWA1IVxASjggpGE6BQBAyiQDBGElspJvIDRRTCyxgUraQJ/DFAgOIPNW2RpwZ5tdvttmgfPPtcunvv+M3du7dLW2SBNZ5keubOnDmPOY85W0YR4EpLy2IWyyROlKAKcfZ6S0vpNUB43+l0ZrJAoFcHUWOC3x8I2mxjOecWam4u94IuJSUlKclqHS8UhVNLS5k34qyEQYMG2UUw+ARXlCyhaVcsnJ+sqK4+Ed6X5/vExw8SRIy6AA8E6irr6xvC326320XB4CjQ3iC//5S3sbHOlGO320VCQpqqKIHa2toK54ABwxRFGaZZLJXVhjxdQGpq6oDeCQmb8TGNGLOY0oSoCBK95PP5TuvCXK460PTH9CuMcRgjDbo/VMbm4uBOKJKlLxFVBVR1IgRflN+DXa7pWNuOab9O9kKA3waPz7dMfoLmadCUUE8gxFrQvT9mzBjrlYaGTxnnC7Day9it1zStwFtTs1mX5XQuFYx9LudYXwznrDdphVgNPvlczvvYbIWMsRdBzEG5B0u7dSLGHrAwtiYsm4U9IcRzptEhuofB6Puw0Qat28rYIjl/yOEYqBFtlEbLC2FCbAGPi5DJcPadwenp4w2+1/H3WsQImHYz1izx1cbGFTB6iWFICeScAe4PVusyMzLGGvrEdarGPoy4ILmwDJE3QBrOoMwjOm+iIk9NzQxPdfXLWCs3PPcodYdemqpmw2GvRngkFeE0BXhK6BgYcz5cYj/nQ8HbLh2AFJpc6fMtkgabRxUlW2KsH4PsZDmoo2MUloIGia/N71+fk5NjwQW8a+hVBrrJzGodjfllGGgTETwj4Dfm9/eHXgeM7yQM3XABBuPiExPjk1NScvv169cHN5INr3DDc9ZurBg74q2tLa/y+fZEeOXEBY/nEMLoEOaXQncR4oFUKYEMW3xbW1/MqzIyMgYjBJ2m4ZzHd5GgUFyc5J1g6JBbX1/fWlVVNdJINXhL7JO4oqLiBuZlIbXYdHk5N6kqRKGsDcBFpjwhEkyi9qamN/2trbn2pKTRJFOPdasvkdBkYJVkcQldTkvEvjAUEeEFl8uV1S7E8kyXaxaFbv2WgBxdYUYa0gKRcFhOuRDDI/Rq6rSO1RuzxHPnztltcWakk8q5XmNIUdrByzyheyTT7d7IFOULCgkrwo3MBMkJig54VyOpS1Ue4nK5FaL9oMkD0UXUkeVQIr8nZoMdjgdEKC+l0ZUomh+ZgoRQejoDb4ZTgmw2G79pr1Ovm3Ti8IQbiszXvzRtN0LyDYRwMYQ2UnQgbrcXEGI2kB7aWkfHDNSRz6DQL9STDYpSDJwYUkfLw/Pzd3gTz5PXZCxEojlnrE/nlF2/jU46cKaq91O46jFWIxFyPF5WaoOmdw6Rhe4F8DqEp0HOGwzFx5n7mjZQIrfTmUehQhtSTlH2ITVqEfrbHA7HgxaL5TiFvcvYJInk84a1CTpPXKbMeYoCOI+LuwolNOPgTAifjZAqQlykGTRJPqezkO4NmsMTK+eFbodjCWQti9BiBiIvDd56vMs5WfQGgjbPqihbYVQT5jvkBvR7Cn3FKjxvG3AJDl1/Vd1EUQL3eDwXgIsNZlK4ZDwVsfIxcBuGDLWSWzFg0YSVEBvBtylkI18s6wnOVcJTmw0eZdhv14mFOIrxCfJ2Lgx6HfMC+XQxI79b29tX4fusbLRwbg0ZvQLW1qGB2UVRggxhEdC0t9A+HgajERjtKCg/yNbO5XAcRwvr8VZXnwxZyQoQlqmqqh4LM8C7vArVxI48Ptl5Gyw/kq4CnZ87Pf0x8JqD6EqC9adgfHFycnLblUuXjuGNLpLPFcL5PYRzW9Vcb5BSqC96PEbnaRekrkb6DZG8Ghoa6tFpjutts82C3GzIUtH+/jhn3ry9BQUFuhPQYxxED5GP6NC8Xq9eq4JCnFKMgtpL06pZNLcDvzxDdVQKBdroPwSxnVx4IGUTItvR3voiQwfH6XmWR79SDIFHSedDxh9Bo7m0px8QMYMOVH6NfkbcTgOeALwSw475fRRjiNoIsYkycU37STYrjLbg73dsHtVQjEF8CSOtJPP2PLzvQQ93FL3hCLaETlMM4Y68B4/3BfoAYyXJwifoJ3D4BvNythBRcZcg1qKT60vTSf465PQC+J6Bsa/hkc2GtwvAO5NiDHcVtriAoUDbMCZELFdglGL8CcV/B2cPOu0aNptazXMFKKZplA5jsrAvu0Q3sPyBIn/VyULbjL0VeMS+ZbnkF1vpAPZ3sgX65cYU7ilfxTaaCEVlMXqWbt1/y34+iMvgkGbpQaasxGfxdzuodiCkL+uLXyO3b+C5Wkhvoz2/7ZN5pxCTQoUISAGnV3AJU4Hl73TZnv5btye7t1qYsxf4IM6UIpwD3fgK2WrH3mgJMa/Q+IWu0JMwXMHPR4bMZfp/XKz4ljXhL2qnRjxUdWx+Zzf3f8A/L2T3ZcnjLesAAAAASUVORK5CYII=",ot="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOTSURBVHgB7VdJaFRBEH3VfyYTMa4QGYxCjBCXgyLkoKgILiB6EBE8eVTvoqh48STiCnoRFfGsXjwogrggiIoGNLkYUeOGWTCELBKTSabL+v/Pn+n+07ME4y0Fze+ufl39urq6pgaYllCo3CRfQzMS3nqtuF5pVSNowqREZ2SLrsxEtjV1AO8xGRJ8A8sYyVvSXS0jByzScQkTpp5zH+okjG+m/fhWkcTYVSxPeomXMjUXUy2McXFmCx3ItJvqRByXpJoH0Jh6AjnzzHybGSuIIhcBykTwlZrd0NQoDX5jR4PR2PxyTi9fZhtrrmVWy3Dd227ua5HQoM3CElGDo8Xn81+d0+vAkIVFDKt1Yqe5r3UdwrbJGanebKBJ1iXrBJQFhr4AP57IEUy09Bs2ArOaBJ8CRrqB3jfhNyYMbihJAlmkQDEaLcdAaw6BUrNtQz2t4If7hNB3YOYi0NbroMWbbMzYAPj1GaDtMlAIAb9bZ+KUPfDDJXe/fmvcBbX2ZBGB4NzpFtn4ZuB62nW3iECASc2F2ngatHQPLLsgVdoTOlhaMCInLCe0cB14zgrQ/JVlcahNh0EaCdvetkhoreykqKtIkPNWVcYEAVs63cZigmySjMp5mpKVEOGr0FZUlCERPCGyx9VsUBFEZb0ai4kgaCZFIoyjSiQQI1EmJsDKXshVxES1RCMSDpNFMYFYTEwJCfNAXLzGzpi+J4xLpqo8USVGU6EAiAXSv3uiypjg3HVwRKokibzbuDCOZHQQ3PcZflKlhjXGGsPgRAbc3wn8GQQtaAZmzCtg8mSLPefwhFEV+T/JP9ug7x0Hd78VQxMhsVpJx2sPQm05mieafXIR/OqKEOhH+PsTklW7LzueqE3EGk2cqH/IxNvyk3X14JEBMTAOl6gtQq73o2TNxeDnl5xJw79/qp0jJduQqX6cPNW31ekJMfHbdC8P9zmZR6IfnQeWbAC/uwPyPCcuSNajw9ac1pwxMRYJeQ1dQSFibM1FRvOEEVz0p2eiTATFjIkv1/eIOk2byj6aus9F5Rty43DPojLPf9Y5jHstDH3YzzKeug4WnY4yR9IdRNyM/yQSIV9T53qWmDr7OgST0d5eULYVjkp8ChgMiUd2xNXuPz/H043jY/RYuk0oJa6AKbs/t9ck1V462/XBZaqkjB1Or/QYLVLCL5S7T0qRW0WOzluWfVVGUsavrMcvUhe6OzAtFeQvBzyhnfEyHm0AAAAASUVORK5CYII=";function f(t,o){const e=JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[];if(t.target.textContent.toLowerCase().includes("add"))e.push(o),localStorage.setItem("cart",JSON.stringify(e));else{const a=e.findIndex(n=>n._id===o._id);e.splice(a,1),localStorage.setItem("cart",JSON.stringify(e))}}function A(t){const o=nt();return o?o.some(e=>e._id===t._id):!1}function nt(){return JSON.parse(localStorage.getItem("cart"))||[]}const u="Add to shopping list",g="Remove from the shopping list",B='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',j="",at="No description has been added to this book";let m;async function rt(t){const o=t.target.dataset.id,e=await _(o);return m=e,`<div class="modal-container">
        <button class="modal-button-close" type="button">
        <svg class="modal-icon-close" width="24" height="24">
        <use href=${tt}#x-close></use></svg></button>

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
        <p class="modal-book-desc">${e.description?e.description:at}</p>
        <div class="modal-buy-links-wrapper">
        <a
          class="modal-buy-link"
          href=${e.buy_links[0].url}
          target="_blank">
        <img
          class="modal-link-amazon-icon"
          src=${et}
          alt="Amazon product link"
          width="62"
          height="19"/></a>
        <a
          class="modal-buy-link"
          href=${e.buy_links[1].url}
          target="_blank">
        <img
          class="modal-link-apple-icon"
          src=${ot}
          alt="Apple-book product link"
          width="33"
          height="32"/></a></div></div></div>
        <div class="button-toggle-wrapper">
          <button class="add-remove-button" type="button">${A(e)?g:u}</button>
          <p class="modal-text make-visible">${A(e)?B:j}</p>
        </div></div>`}async function ht(t){if(t.target===t.currentTarget)return;const o=await rt(t);h.create(o,{onClose:it()}).show(st)}function st(t){p(),document.body.classList.add("scroll-ban");const o=t.element().querySelector(".modal-button-close"),e=t.element().querySelector(".add-remove-button");o.addEventListener("click",()=>t.close()),e.addEventListener("click",ct),window.addEventListener("resize",p)}function it(){return()=>{document.body.classList.remove("scroll-ban"),window.removeEventListener("resize",p)}}function ct(t){t.currentTarget.textContent===u?(f(t,m),t.currentTarget.textContent=g,t.currentTarget.nextElementSibling.textContent=B):t.currentTarget.textContent===g&&(f(t,m),t.currentTarget.textContent=u,t.currentTarget.nextElementSibling.textContent=j)}function p(){const t=document.querySelector(".basicLightbox"),o=document.querySelector(".modal-container");window.innerHeight<o.offsetHeight?t.classList.add("lightbox-scroll"):t.classList.remove("lightbox-scroll")}export{s as a,ut as b,ht as c,gt as d,pt as e,_ as f,dt as g,nt as h,mt as r};
//# sourceMappingURL=modal-a0627c3d.js.map
