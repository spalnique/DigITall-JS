import{f as c,i as x,a as E,b as I,e as l,r as i,c as s,d as k,g as h,h as B,j as T,s as M,k as $}from"./assets/showHideFn-010dea24.js";import{b as A}from"./assets/vendor-389f7b34.js";function f(t,o){const e=JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[];if(t.target.textContent.toLowerCase().includes("add"))e.push(o),localStorage.setItem("cart",JSON.stringify(e));else{const a=e.findIndex(n=>n._id===o._id);e.splice(a,1),localStorage.setItem("cart",JSON.stringify(e))}}function y(t){const o=q();return o?o.some(e=>e._id===t._id):!1}function q(){return JSON.parse(localStorage.getItem("cart"))||[]}const d="Add to shopping list",m="Remove from the shopping list",w='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',L="",_="No description has been added to this book";let u;async function z(t){const o=t.target.dataset.id,e=await c(o);return u=e,`<div class="modal-container">
        <button class="modal-button-close" type="button">
        <svg class="modal-icon-close" width="24" height="24">
        <use href=${x}#x-close></use></svg></button>

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
        <p class="modal-book-desc">${e.description?e.description:_}</p>
        <div class="modal-buy-links-wrapper">
        <a
          class="modal-buy-link"
          href=${e.buy_links[0].url}
          target="_blank">
        <img
          class="modal-link-amazon-icon"
          src=${E}
          alt="Amazon product link"
          width="62"
          height="19"/></a>
        <a
          class="modal-buy-link"
          href=${e.buy_links[1].url}
          target="_blank">
        <img
          class="modal-link-apple-icon"
          src=${I}
          alt="Apple-book product link"
          width="33"
          height="32"/></a></div></div></div>
        <div class="button-toggle-wrapper">
          <button class="add-remove-button" type="button">${y(e)?m:d}</button>
          <p class="modal-text make-visible">${y(e)?w:L}</p>
        </div></div>`}async function b(t){if(t.target===t.currentTarget)return;const o=await z(t),e=A.create(o,{onClose:W()});N(e),e.show(D)}function D(t){p(),document.body.classList.add("scroll-ban");const o=t.element().querySelector(".modal-button-close"),e=t.element().querySelector(".add-remove-button");o.addEventListener("click",()=>t.close()),e.addEventListener("click",R),window.addEventListener("resize",p)}function W(){return()=>{document.body.classList.remove("scroll-ban"),window.removeEventListener("resize",p)}}function R(t){t.currentTarget.textContent===d?(f(t,u),t.currentTarget.textContent=m,t.currentTarget.nextElementSibling.textContent=w):t.currentTarget.textContent===m&&(f(t,u),t.currentTarget.textContent=d,t.currentTarget.nextElementSibling.textContent=L)}function p(){const t=document.querySelector(".basicLightbox"),o=document.querySelector(".modal-container");window.innerHeight<o.offsetHeight?t.classList.add("lightbox-scroll"):t.classList.remove("lightbox-scroll")}function N(t){const o=document.querySelector("#themeToggle");console.log(o),console.log(o.checked);const e={container:t.element().querySelector(".modal-container").classList,closeIcon:t.element().querySelector(".modal-icon-close").classList,bookTitle:t.element().querySelector(".modal-book-title").classList,desc:t.element().querySelector(".modal-book-desc").classList,amazonIcon:t.element().querySelector(".modal-link-amazon-icon").classList,appleIcon:t.element().querySelector(".modal-link-apple-icon").classList,addRemoveButton:t.element().querySelector(".add-remove-button").classList};o.checked?(e.container.add("modal-container-dark-theme"),e.closeIcon.add("modal-icon-close-dark-theme"),e.bookTitle.add("modal-text-dark-theme"),e.desc.add("modal-text-dark-theme"),e.amazonIcon.add("modal-icon-amazon-dark-theme"),e.appleIcon.add("modal-icon-apple-dark-theme"),e.addRemoveButton.add("modal-text-dark-theme")):(e.container.remove("modal-container-dark-theme"),e.closeIcon.remove("modal-icon-close-dark-theme"),e.bookTitle.remove("modal-text-dark-theme"),e.desc.remove("modal-text-dark-theme"),e.amazonIcon.remove("modal-icon-amazon-dark-theme"),e.appleIcon.remove("modal-icon-apple-dark-theme"),e.addRemoveButton.remove("modal-text-dark-theme"))}function O(t){return t.map(o=>{const e=o.list_name.split(" ");e[e.length-1]=`<span>${e[e.length-1]}</span>`;const a=`<h2 class="category-title">${e.join(" ")}</h2>`,n=k(o.books,h),r=B("see-more-button","See more",o.list_name);return a+n+r}).join("")}async function S(){const t=await c(l.topbooks),o=O(t);i(s.mainCatWrap,o,b)}H();s.catList.addEventListener("click",J);async function H(){const t=await c(l.list),o=j(t);i(s.catList,o)}function j(t){const o='<li class="sidebar-category-item"><p class="sidebar-category-text make-blue">All categories</p></li>',e=t.map(n=>`<li class="sidebar-category-item" data-category="${n.list_name}"><p class="sidebar-category-text" data-category="${n.list_name}">${n.list_name}</p></li>`).join("");return o+e}function v(t){t.target.nodeName==="LI"?(t.target.parentElement.querySelectorAll(".sidebar-category-text").forEach(e=>{e.classList.remove("make-blue")}),t.target.firstElementChild.classList.add("make-blue")):t.target.nodeName==="P"&&(t.target.parentElement.parentElement.querySelectorAll(".sidebar-category-text").forEach(e=>{e.classList.remove("make-blue")}),t.target.classList.add("make-blue"))}async function J(t){if(t.target===t.currentTarget)return;if(!t.target.dataset.category){s.mainTitle.innerHTML="Best Sellers <span>Books</span>",v(t),S();return}v(t);const o=t.target.dataset.category.split(" ");o[o.length-1]=`<span>${o[o.length-1]}</span>`,s.mainTitle.innerHTML=o.join(" ");const e=await c(l.category,t.target.dataset.category),a=k(e,h);i(s.mainCatWrap,a,b),document.querySelectorAll(".main-category-item").forEach(r=>showElement(r))}const g=document.querySelector(".button-up");g.addEventListener("click",C);window.addEventListener("scroll",F);function F(){const t=window.pageYOffset,o=document.documentElement.clientHeight;t>o?g.classList.add("button-up--show"):g.classList.remove("button-up--show")}function C(){window.pageYOffset>0&&(window.scrollBy(0,-75),setTimeout(C,0))}T();M("header-nav-link-home");S();s.mainCatWrap.addEventListener("click",P);async function P(t){if(!t.target.dataset.category)return;const o=t.target.dataset.category.split(" ");o[o.length-1]=`<span>${o[o.length-1]}</span>`,s.mainTitle.innerHTML=o.join(" ");const e=await c(l.category,t.target.dataset.category),a=k(e,h);i(s.mainCatWrap,a,b),document.querySelectorAll(".main-category-item").forEach(r=>$(r))}
//# sourceMappingURL=commonHelpers.js.map
