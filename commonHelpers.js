import{i as w,g as E,b as y,s as $,c as j,u as I,a as h}from"./assets/vendor-7d3a11d1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();let M=document.querySelector(".header-container"),b=document.querySelector("#themeToggle");b.addEventListener("click",_);function _(){let e=M.classList;b.checked?e.add("dark-theme"):e.remove("dark-theme")}const k=document.querySelector(".home-js"),S=document.querySelector(".shopping-js"),L=document.querySelector(".signup-js"),v=document.querySelector(".js-user-profile"),B=document.querySelector(".js-user-name");function f(){k.classList.remove("hidden"),S.classList.remove("hidden"),v.classList.remove("hidden"),L.classList.add("hidden")}function A(){k.classList.add("hidden"),S.classList.add("hidden"),v.classList.add("hidden"),L.classList.remove("hidden")}if(localStorage.getItem("userInfo")){f();const e=JSON.parse(localStorage.getItem("userInfo"));B.textContent=e.displayName}const D={apiKey:"AIzaSyCAn6DCGGRmtf9e6SAGV9R6e1JxRK2q4A8",authDomain:"digitall-project10.firebaseapp.com",projectId:"digitall-project10",storageBucket:"digitall-project10.appspot.com",messagingSenderId:"618447253868",appId:"1:618447253868:web:8e9934944d76f91f920349"},N=document.querySelector(".js-user-profile"),C=document.querySelector(".js-user-name"),x=document.querySelector(".signup-js");w(D);const q=E();x.addEventListener("click",O);function O(){u.show()}const u=y.create(`
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
`,{onShow:e=>{e.element().querySelector("form").addEventListener("submit",U),e.element().querySelector(".js-signin-btn").addEventListener("click",p.show),p.close()}}),p=y.create(`
  <div class="authorization">
  <form class="autorization-form">
    
    <input type="email" name="email" required>
    <input type="password" name="password" required minlength="6" >
    <button class="form-button js-signup-btn">Sign in
    </button>
  </form>
  <button class="js-btn-signup">Sign Up</button>
  </div>
  `,{onShow:e=>{e.element().querySelector("form").addEventListener("submit",P),e.element().querySelector(".js-btn-signup").addEventListener("click",u.show),u.close()}});function P(e){e.preventDefault();let t=e.target.elements.email.value,o=e.target.elements.password.value;z(t,o),e.target.reset()}function T(e,t,o){j(q,e,t).then(r=>{const n=r.user;I(n,{displayName:o}),f(),u.close()}).catch(r=>{r.code,r.message,console.log(r)})}function z(e,t){$(q,e,t).then(o=>{const r=o.user;C.textContent=r.displayName,f(),p.close(),localStorage.setItem("userInfo",JSON.stringify(r))}).catch(o=>{o.code,o.message})}function U(e){e.preventDefault();let t=e.target.elements.email.value,o=e.target.elements.name.value,r=e.target.elements.password.value;T(t,r,o),e.target.reset(),C.textContent=o}function W(){A(),location.pathname.includes("shopping-list")&&(location.pathname="/"),localStorage.removeItem("userInfo")}N.addEventListener("click",W);h.defaults.baseURL="https://books-backend.p.goit.global/books";async function i(e,t=""){try{const o=e+t;return(await h.get(o)).data}catch(o){return console.error("Error fetching data:",o),null}}function H(e){return Array.from(e,t=>`<li class="sidebar-category-list-item">${t.list_name}</li>`).join("")}function R(e,t,o="",r="",n=""){return`<button type="button" class="${e}" data-category = "${o}" data-action = "${r}" data-id = "${n}">${t}</button>`}function m(e){return`<li class="card-book" data-id="${e._id}">
  <a class="book-link" href="${e.book_image}" data-id="${e._id}"></a>
    <img class="book-image" src="${e.book_image}"
      alt="${e.title}"
      width="${e.book_image_width}"
      height="${e.book_image_height}" data-id="${e._id}">
<div class="book-content" data-id="${e._id}">
  <h3 class="book-title" data-id="${e._id}">${e.title}</h3>
  <p class="book-author" data-id="${e._id}">${e.author}</p>
</div>
</li>`}function c(e,t){e.innerHTML=t}function g(e,t){return`<ul class="category-list">${e.map(n=>t(n)).join("")}</ul>`}const a={mainTitle:document.querySelector(".main-title"),mainCatWrap:document.querySelector(".category-list-wrapper"),sidebarCatList:null,catList:document.querySelector(".sidebar-category-list"),seeMoreButtons:null},l={list:"/category-list",topbooks:"/top-books",category:"/category?category=",id:"/{id}"};document.addEventListener("DOMContentLoaded",async()=>{a.mainTitle.textContent="Best Sellers Books";try{const t=(await i(l.topbooks)).map(o=>{const r=`<h2 class="category-title">${o.list_name}</h2>`,n=g(o.books,m),s=R("see-more-button","See more",o.list_name);return r+n+s}).join("");c(a.mainCatWrap,t)}catch(e){console.log("Error getting top sellers book data:",e)}try{const e=await i(l.list),t=H(e);c(a.catList,t)}catch(e){console.log("Error getting sidebar category list:",e)}a.catList.addEventListener("click",async e=>{if(e.target!==e.currentTarget){a.mainTitle.textContent=e.target.textContent;try{const t=await i(l.category,e.target.textContent),o=g(t,m);c(a.mainCatWrap,o)}catch(t){console.log("Error getting selected category data:",t)}}}),a.seeMoreButtons=document.querySelectorAll(".see-more-button"),a.seeMoreButtons.forEach(e=>e.addEventListener("click",async t=>{if(t.target.dataset.category){a.mainTitle.textContent=t.target.dataset.category;try{const o=await i(l.category,t.target.dataset.category),r=g(o,m);c(a.mainCatWrap,r)}catch(o){console.log("Error getting selected category data:",o)}}})),a.sidebarCatList=document.querySelectorAll(".category-list"),a.sidebarCatList.forEach(e=>{e.addEventListener("click",async t=>{t.target,t.currentTarget})})});
//# sourceMappingURL=commonHelpers.js.map
