import{f as i,i as B,a as M,b as T,e as c,r as l,c as r,d as h,g as b,h as $,j as A,s as I,k as _}from"./assets/showHideFn-5625e620.js";import{b as L}from"./assets/vendor-389f7b34.js";function v(t,e){const n=JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[];if(t.target.textContent.toLowerCase().includes("add"))n.push(e),localStorage.setItem("cart",JSON.stringify(n));else{const o=n.findIndex(a=>a._id===e._id);n.splice(o,1),localStorage.setItem("cart",JSON.stringify(n))}}function y(t){const e=q();return e?e.some(n=>n._id===t._id):!1}function q(){return JSON.parse(localStorage.getItem("cart"))||[]}const d="Add to shopping list",u="Remove from the shopping list",C='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',S="",H="No description has been added to this book";let m;async function D(t){const e=t.target.dataset.id,n=await i(e);return m=n,`<div class="modal-container">
        <button class="modal-button-close" type="button">
        <svg class="modal-icon-close" width="24" height="24">
        <use href=${B}#x-close></use></svg></button>

        <div class="modal-book-wrapper">
        <img
          class="modal-img"
          src="${n.book_image}"
          alt="${n.title}"
          width="287"
          height="408"/>
        <div class="modal-book-desc-wrapper">
        <h2 class="modal-book-title">${n.title}</h2>
        <h3 class="modal-book-author">${n.author}</h3>
        <p class="modal-book-desc">${n.description?n.description:H}</p>
        <div class="modal-buy-links-wrapper">
        <a
          class="modal-buy-link"
          href=${n.buy_links[0].url}
          target="_blank">
        <img
          class="modal-link-amazon-icon"
          src=${M}
          alt="Amazon product link"
          width="62"
          height="19"/></a>
        <a
          class="modal-buy-link"
          href=${n.buy_links[1].url}
          target="_blank">
        <img
          class="modal-link-apple-icon"
          src=${T}
          alt="Apple-book product link"
          width="33"
          height="32"/></a></div></div></div>
        <div class="button-toggle-wrapper">
          <button class="add-remove-button" type="button">${y(n)?u:d}</button>
          <p class="modal-text make-visible">${y(n)?C:S}</p>
        </div></div>`}async function k(t){if(t.target===t.currentTarget)return;const e=await D(t);L.create(e,{onClose:O()}).show(N)}function N(t){g(),document.body.classList.add("scroll-ban");const e=t.element().querySelector(".modal-button-close"),n=t.element().querySelector(".add-remove-button");e.addEventListener("click",()=>t.close()),n.addEventListener("click",W),window.addEventListener("resize",g)}function O(){return()=>{document.body.classList.remove("scroll-ban"),window.removeEventListener("resize",g)}}function W(t){t.currentTarget.textContent===d?(v(t,m),t.currentTarget.textContent=u,t.currentTarget.nextElementSibling.textContent=C):t.currentTarget.textContent===u&&(v(t,m),t.currentTarget.textContent=d,t.currentTarget.nextElementSibling.textContent=S)}function g(){const t=document.querySelector(".basicLightbox"),e=document.querySelector(".modal-container");window.innerHeight<e.offsetHeight?t.classList.add("lightbox-scroll"):t.classList.remove("lightbox-scroll")}function z(t){return t.map(e=>{const n=e.list_name.split(" ");n[n.length-1]=`<span>${n[n.length-1]}</span>`;const o=`<h2 class="category-title">${n.join(" ")}</h2>`,a=h(e.books,b),s=$("see-more-button","See more",e.list_name);return o+a+s}).join("")}async function E(){const t=await i(c.topbooks),e=z(t);l(r.mainCatWrap,e,k)}j();r.catList.addEventListener("click",J);async function j(){const t=await i(c.list),e=R(t);l(r.catList,e)}function R(t){const e='<li class="sidebar-category-item"><p class="sidebar-category-text make-blue">All categories</p></li>',n=t.map(a=>`<li class="sidebar-category-item" data-category="${a.list_name}"><p class="sidebar-category-text" data-category="${a.list_name}">${a.list_name}</p></li>`).join("");return e+n}function w(t){t.target.nodeName==="LI"?(t.target.parentElement.querySelectorAll(".sidebar-category-text").forEach(n=>{n.classList.remove("make-blue")}),t.target.firstElementChild.classList.add("make-blue")):t.target.nodeName==="P"&&(t.target.parentElement.parentElement.querySelectorAll(".sidebar-category-text").forEach(n=>{n.classList.remove("make-blue")}),t.target.classList.add("make-blue"))}async function J(t){if(t.target===t.currentTarget)return;if(!t.target.dataset.category){r.mainTitle.innerHTML="Best Sellers <span>Books</span>",w(t),E();return}w(t);const e=t.target.dataset.category.split(" ");e[e.length-1]=`<span>${e[e.length-1]}</span>`,r.mainTitle.innerHTML=e.join(" ");const n=await i(c.category,t.target.dataset.category),o=h(n,b);l(r.mainCatWrap,o,k),document.querySelectorAll(".main-category-item").forEach(s=>showElement(s))}const p=document.querySelector(".button-up");p.addEventListener("click",x);window.addEventListener("scroll",P);function P(){const t=window.pageYOffset,e=document.documentElement.clientHeight;t>e?p.classList.add("button-up--show"):p.classList.remove("button-up--show")}function x(){window.pageYOffset>0&&(window.scrollBy(0,-75),setTimeout(x,0))}function F(){return`
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
  `}const f=document.querySelector("header");f.style.zIndex=99999;f.style.position="relative";f.style.background="#fff";function U(){const t=document.createElement("div");t.classList.add("menu-container");const e=F();t.innerHTML=e;const n=L.create(t,{className:"mob-menu-lightbox"}),o=document.querySelector(".header-modal-open-button"),a=o.parentElement,s=document.createElement("button");s.classList.add("header-menu-close-button"),o.classList.add("hidden-on-desktop"),s.setAttribute("type","button"),s.innerHTML=`
    <svg class="header-menu-close-icon" width="18" height="18">
      <use href="./img/icons.svg#x-close"></use>
    </svg>
  `,s.addEventListener("click",()=>{n.close(),o.style.display="block",a.removeChild(s)}),a.insertBefore(s,o.nextSibling),o.style.display="none",n.show()}const Y=document.querySelector(".header-modal-open-button");Y.addEventListener("click",U);A();I("header-nav-link-home");E();r.mainCatWrap.addEventListener("click",G);async function G(t){if(!t.target.dataset.category)return;const e=t.target.dataset.category.split(" ");e[e.length-1]=`<span>${e[e.length-1]}</span>`,r.mainTitle.innerHTML=e.join(" ");const n=await i(c.category,t.target.dataset.category),o=h(n,b);l(r.mainCatWrap,o,k),document.querySelectorAll(".main-category-item").forEach(s=>_(s))}
//# sourceMappingURL=commonHelpers.js.map
