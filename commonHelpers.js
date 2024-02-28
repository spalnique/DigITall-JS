import{r as n,i as E,a as I,b as B,c as l,d as k,e as h,f as T,s as w,g as M,h as $}from"./assets/showHideFn-25d126ab.js";import{a as L,b as A}from"./assets/vendor-4a53a031.js";L.defaults.baseURL="https://books-backend.p.goit.global/books";const i={list:"/category-list",topbooks:"/top-books",category:"/category?category=",id:"/{id}"};async function c(t,e=""){try{const o=t+e;return(await L.get(o)).data}catch(o){return console.error("Error fetching data:",o),null}}function y(t,e){const o=JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[];if(t.target.textContent.toLowerCase().includes("add"))o.push(e),localStorage.setItem("cart",JSON.stringify(o));else{const a=o.findIndex(s=>s._id===e._id);o.splice(a,1),localStorage.setItem("cart",JSON.stringify(o))}}function f(t){const e=q();return e?e.some(o=>o._id===t._id):!1}function q(){return JSON.parse(localStorage.getItem("cart"))||[]}const d="Add to shopping list",m="Remove from the shopping list",S='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',x="",_="No description has been added to this book";let u;async function W(t){const e=t.target.dataset.id,o=await c(e);return u=o,`<div class="modal-container">
        <button class="modal-button-close" type="button">
        <svg class="modal-icon-close" width="24" height="24">
        <use href=${E}#x-close></use></svg></button>
        <div class="modal-book-wrapper">
        <img
          class="modal-img"
          src="${o.book_image}"
          alt="${o.title}"
          width="287"
          height="408"/>
        <div class="modal-book-desc-wrapper">
        <h2 class="modal-book-title">${o.title}</h2>
        <h3 class="modal-book-author">${o.author}</h3>
        <p class="modal-book-desc">${o.description?o.description:_}</p>
        <div class="modal-buy-links-wrapper">
        <a
          class="modal-buy-link"
          href=${o.buy_links[0].url}
          target="_blank">
        <img
          class="modal-link-amazon-icon"
          src=${I}
          alt="Amazon product link"
          width="62"
          height="19"/></a>
        <a
          class="modal-buy-link"
          href=${o.buy_links[1].url}
          target="_blank">
        <img
          class="modal-link-apple-icon"
          src=${B}
          alt="Apple-book product link"
          width="33"
          height="32"/></a></div></div></div>
        <div class="button-toggle-wrapper">
          <button class="add-remove-button" type="button">${f(o)?m:d}</button>
          <p class="modal-text make-visible">${f(o)?S:x}</p>
        </div></div>`}async function b(t){if(t.target.dataset.action==="open-modal"&&window.innerWidth>768||t.target!==t.currentTarget&&window.innerWidth<=768){const e=await W(t),o=A.create(e,{onClose:D()});N(o),o.show(z),document.addEventListener("keydown",a=>{a.key==="Escape"&&o.close()})}else return}function z(t){p(),document.body.classList.add("scroll-ban");const e=t.element().querySelector(".modal-button-close"),o=t.element().querySelector(".add-remove-button");e.addEventListener("click",()=>t.close()),o.addEventListener("click",R),window.addEventListener("resize",p)}function D(){return()=>{document.body.classList.remove("scroll-ban"),window.removeEventListener("resize",p)}}function R(t){t.currentTarget.textContent===d?(y(t,u),t.currentTarget.textContent=m,t.currentTarget.nextElementSibling.textContent=S):t.currentTarget.textContent===m&&(y(t,u),t.currentTarget.textContent=d,t.currentTarget.nextElementSibling.textContent=x)}function p(){const t=document.querySelector(".basicLightbox"),e=document.querySelector(".modal-container");window.innerHeight<e.offsetHeight?t.classList.add("lightbox-scroll"):t.classList.remove("lightbox-scroll")}function N(t){const e={container:t.element().querySelector(".modal-container").classList,closeIcon:t.element().querySelector(".modal-icon-close").classList,bookTitle:t.element().querySelector(".modal-book-title").classList,desc:t.element().querySelector(".modal-book-desc").classList,amazonIcon:t.element().querySelector(".modal-link-amazon-icon").classList,appleIcon:t.element().querySelector(".modal-link-apple-icon").classList,addRemoveButton:t.element().querySelector(".add-remove-button").classList};n.checkbox.checked?(e.container.add("modal-container-dark-theme"),e.closeIcon.add("modal-icon-close-dark-theme"),e.bookTitle.add("modal-text-dark-theme"),e.desc.add("modal-text-dark-theme"),e.amazonIcon.add("modal-icon-amazon-dark-theme"),e.appleIcon.add("modal-icon-apple-dark-theme"),e.addRemoveButton.add("modal-text-dark-theme")):(e.container.remove("modal-container-dark-theme"),e.closeIcon.remove("modal-icon-close-dark-theme"),e.bookTitle.remove("modal-text-dark-theme"),e.desc.remove("modal-text-dark-theme"),e.amazonIcon.remove("modal-icon-amazon-dark-theme"),e.appleIcon.remove("modal-icon-apple-dark-theme"),e.addRemoveButton.remove("modal-text-dark-theme"))}function O(t){return t.map(e=>{const o=e.list_name.split(" ");o[o.length-1]=`<span>${o[o.length-1]}</span>`;const a=`<h2 class="category-title">${o.join(" ")}</h2>`,s=k(e.books,h),r=T("see-more-button","See more",e.list_name);return a+s+r}).join("")}async function C(){const t=await c(i.topbooks),e=O(t);l(n.mainCatWrap,e,b)}H();n.catList.addEventListener("click",J);async function H(){const t=await c(i.list),e=j(t);l(n.catList,e)}function j(t){const e='<li class="sidebar-category-item"><p class="sidebar-category-text make-blue">All categories</p></li>',o=t.map(s=>`<li class="sidebar-category-item" data-category="${s.list_name}"><p class="sidebar-category-text" data-category="${s.list_name}">${s.list_name}</p></li>`).join("");return e+o}function v(t){t.target.nodeName==="LI"?(t.target.parentElement.querySelectorAll(".sidebar-category-text").forEach(o=>{o.classList.remove("make-blue")}),t.target.firstElementChild.classList.add("make-blue")):t.target.nodeName==="P"&&(t.target.parentElement.parentElement.querySelectorAll(".sidebar-category-text").forEach(o=>{o.classList.remove("make-blue")}),t.target.classList.add("make-blue"))}async function J(t){if(t.target===t.currentTarget)return;if(!t.target.dataset.category){n.mainTitle.innerHTML="Best Sellers <span>Books</span>",v(t),C();return}v(t);const e=t.target.dataset.category.split(" ");e[e.length-1]=`<span>${e[e.length-1]}</span>`,n.mainTitle.innerHTML=e.join(" ");const o=await c(i.category,t.target.dataset.category),a=k(o,h);l(n.mainCatWrap,a,b),document.querySelectorAll(".main-category-item").forEach(r=>w(r))}const g=document.querySelector(".button-up"),F=document.querySelector(".header-container");g.addEventListener("click",U);window.addEventListener("scroll",P);function P(){const t=window.pageYOffset,e=document.documentElement.clientHeight;t>e?g.classList.add("button-up--show"):g.classList.remove("button-up--show")}function U(){window.pageYOffset>0&&(window.scrollBy(),setTimeout(()=>{F.scrollIntoView({block:"end",behavior:"smooth"})},250))}M();$("header-nav-link-home");C();n.mainCatWrap.addEventListener("click",Y);async function Y(t){if(!t.target.dataset.category)return;const e=t.target.dataset.category.split(" ");e[e.length-1]=`<span>${e[e.length-1]}</span>`,n.mainTitle.innerHTML=e.join(" ");const o=await c(i.category,t.target.dataset.category),a=k(o,h);l(n.mainCatWrap,a,b),document.querySelectorAll(".main-category-item").forEach(r=>w(r))}
//# sourceMappingURL=commonHelpers.js.map
