import{f as l,i as B,a as I,b as M,e as c,r as i,c as r,d as h,g as k,h as T,j as q,s as $,k as A}from"./assets/showHideFn-010dea24.js";import{b as L}from"./assets/vendor-389f7b34.js";function f(e,o){const t=JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[];if(e.target.textContent.toLowerCase().includes("add"))t.push(o),localStorage.setItem("cart",JSON.stringify(t));else{const a=t.findIndex(n=>n._id===o._id);t.splice(a,1),localStorage.setItem("cart",JSON.stringify(t))}}function y(e){const o=_();return o?o.some(t=>t._id===e._id):!1}function _(){return JSON.parse(localStorage.getItem("cart"))||[]}const d="Add to shopping list",m="Remove from the shopping list",S='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',C="",z="No description has been added to this book";let u;async function D(e){const o=e.target.dataset.id,t=await l(o);return u=t,`<div class="modal-container">
        <button class="modal-button-close" type="button">
        <svg class="modal-icon-close" width="24" height="24">
        <use href=${B}#x-close></use></svg></button>

        <div class="modal-book-wrapper">
        <img
          class="modal-img"
          src="${t.book_image}"
          alt="${t.title}"
          width="287"
          height="408"/>
        <div class="modal-book-desc-wrapper">
        <h2 class="modal-book-title">${t.title}</h2>
        <h3 class="modal-book-author">${t.author}</h3>
        <p class="modal-book-desc">${t.description?t.description:z}</p>
        <div class="modal-buy-links-wrapper">
        <a
          class="modal-buy-link"
          href=${t.buy_links[0].url}
          target="_blank">
        <img
          class="modal-link-amazon-icon"
          src=${I}
          alt="Amazon product link"
          width="62"
          height="19"/></a>
        <a
          class="modal-buy-link"
          href=${t.buy_links[1].url}
          target="_blank">
        <img
          class="modal-link-apple-icon"
          src=${M}
          alt="Apple-book product link"
          width="33"
          height="32"/></a></div></div></div>
        <div class="button-toggle-wrapper">
          <button class="add-remove-button" type="button">${y(t)?m:d}</button>
          <p class="modal-text make-visible">${y(t)?S:C}</p>
        </div></div>`}async function b(e){if(e.target===e.currentTarget)return;const o=await D(e),t=L.create(o,{onClose:W()});O(t),t.show(H)}function H(e){g(),document.body.classList.add("scroll-ban");const o=e.element().querySelector(".modal-button-close"),t=e.element().querySelector(".add-remove-button");o.addEventListener("click",()=>e.close()),t.addEventListener("click",N),window.addEventListener("resize",g)}function W(){return()=>{document.body.classList.remove("scroll-ban"),window.removeEventListener("resize",g)}}function N(e){e.currentTarget.textContent===d?(f(e,u),e.currentTarget.textContent=m,e.currentTarget.nextElementSibling.textContent=S):e.currentTarget.textContent===m&&(f(e,u),e.currentTarget.textContent=d,e.currentTarget.nextElementSibling.textContent=C)}function g(){const e=document.querySelector(".basicLightbox"),o=document.querySelector(".modal-container");window.innerHeight<o.offsetHeight?e.classList.add("lightbox-scroll"):e.classList.remove("lightbox-scroll")}function O(e){const o=document.querySelector("#themeToggle");console.log(o),console.log(o.checked);const t={container:e.element().querySelector(".modal-container").classList,closeIcon:e.element().querySelector(".modal-icon-close").classList,bookTitle:e.element().querySelector(".modal-book-title").classList,desc:e.element().querySelector(".modal-book-desc").classList,amazonIcon:e.element().querySelector(".modal-link-amazon-icon").classList,appleIcon:e.element().querySelector(".modal-link-apple-icon").classList,addRemoveButton:e.element().querySelector(".add-remove-button").classList};o.checked?(t.container.add("modal-container-dark-theme"),t.closeIcon.add("modal-icon-close-dark-theme"),t.bookTitle.add("modal-text-dark-theme"),t.desc.add("modal-text-dark-theme"),t.amazonIcon.add("modal-icon-amazon-dark-theme"),t.appleIcon.add("modal-icon-apple-dark-theme"),t.addRemoveButton.add("modal-text-dark-theme")):(t.container.remove("modal-container-dark-theme"),t.closeIcon.remove("modal-icon-close-dark-theme"),t.bookTitle.remove("modal-text-dark-theme"),t.desc.remove("modal-text-dark-theme"),t.amazonIcon.remove("modal-icon-amazon-dark-theme"),t.appleIcon.remove("modal-icon-apple-dark-theme"),t.addRemoveButton.remove("modal-text-dark-theme"))}function R(e){return e.map(o=>{const t=o.list_name.split(" ");t[t.length-1]=`<span>${t[t.length-1]}</span>`;const a=`<h2 class="category-title">${t.join(" ")}</h2>`,n=h(o.books,k),s=T("see-more-button","See more",o.list_name);return a+n+s}).join("")}async function x(){const e=await l(c.topbooks),o=R(e);i(r.mainCatWrap,o,b)}j();r.catList.addEventListener("click",F);async function j(){const e=await l(c.list),o=J(e);i(r.catList,o)}function J(e){const o='<li class="sidebar-category-item"><p class="sidebar-category-text make-blue">All categories</p></li>',t=e.map(n=>`<li class="sidebar-category-item" data-category="${n.list_name}"><p class="sidebar-category-text" data-category="${n.list_name}">${n.list_name}</p></li>`).join("");return o+t}function w(e){e.target.nodeName==="LI"?(e.target.parentElement.querySelectorAll(".sidebar-category-text").forEach(t=>{t.classList.remove("make-blue")}),e.target.firstElementChild.classList.add("make-blue")):e.target.nodeName==="P"&&(e.target.parentElement.parentElement.querySelectorAll(".sidebar-category-text").forEach(t=>{t.classList.remove("make-blue")}),e.target.classList.add("make-blue"))}async function F(e){if(e.target===e.currentTarget)return;if(!e.target.dataset.category){r.mainTitle.innerHTML="Best Sellers <span>Books</span>",w(e),x();return}w(e);const o=e.target.dataset.category.split(" ");o[o.length-1]=`<span>${o[o.length-1]}</span>`,r.mainTitle.innerHTML=o.join(" ");const t=await l(c.category,e.target.dataset.category),a=h(t,k);i(r.mainCatWrap,a,b),document.querySelectorAll(".main-category-item").forEach(s=>showElement(s))}const p=document.querySelector(".button-up");p.addEventListener("click",E);window.addEventListener("scroll",P);function P(){const e=window.pageYOffset,o=document.documentElement.clientHeight;e>o?p.classList.add("button-up--show"):p.classList.remove("button-up--show")}function E(){window.pageYOffset>0&&(window.scrollBy(0,-75),setTimeout(E,0))}function U(){return`
    <div class="menu-user-profile">
      <div class="menu-user-icon-wrapper">
        <svg class="menu-user-icon" width="19" height="19">
          <use href="./img/icons.svg#user-fill"></use>
        </svg>
      </div>
      <p class="menu-user-name">User</p>
      </div>
      <ul id="menu-list" class="menu-nav-list">
        <li class="menu-nav-item">
          <a class="menu-nav-link menu-nav-link-home make-yellow" href="./index.html">Home</a>
        </li>
        <li class="menu-nav-item">
          <a class="menu-nav-link menu-nav-link-shop shopping-link" href="../shopping-list.html">
            Shopping List
            <span class="shoping-test">
              <svg class="menu-nav-icon-shop" width="20" height="20">
                <use href="./img/icons.svg#uil-cart"></use>
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="menu-log-out">
    <button type="button" class="log-out-btn">
        Log out
        <svg class="log-out-icon" width="20" height="20">
          <use href="./img/icons.svg#arrow-narrow-right"></use>
        </svg>
      </button>
      </div>
  `}const v=document.querySelector("header");v.style.zIndex=99999;v.style.position="relative";v.style.background="#fff";function Y(){const e=document.createElement("div");e.classList.add("menu-container");const o=U();e.innerHTML=o;const t=L.create(e,{className:"mob-menu-lightbox"}),a=document.querySelector(".header-modal-open-button"),n=a.parentElement,s=document.createElement("button");s.classList.add("header-menu-close-button"),a.classList.add("hidden-on-desktop"),s.setAttribute("type","button"),s.innerHTML=`
    <svg class="header-menu-close-icon" width="18" height="18">
      <use href="./img/icons.svg#x-close"></use>
    </svg>
  `,s.addEventListener("click",()=>{t.close(),a.style.display="block",n.removeChild(s)}),n.insertBefore(s,a.nextSibling),a.style.display="none",t.show()}const G=document.querySelector(".header-modal-open-button");G.addEventListener("click",Y);q();$("header-nav-link-home");x();r.mainCatWrap.addEventListener("click",K);async function K(e){if(!e.target.dataset.category)return;const o=e.target.dataset.category.split(" ");o[o.length-1]=`<span>${o[o.length-1]}</span>`,r.mainTitle.innerHTML=o.join(" ");const t=await l(c.category,e.target.dataset.category),a=h(t,k);i(r.mainCatWrap,a,b),document.querySelectorAll(".main-category-item").forEach(s=>A(s))}
//# sourceMappingURL=commonHelpers.js.map
