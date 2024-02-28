import{d as B,a as x,b as T,g as q,s as M,c as C}from"./assets/showHideFn-cfaa2d15.js";import"./assets/vendor-389f7b34.js";const c="",f=t=>{try{const e=localStorage.getItem(`${c?`${c}_`:""}${t}`);if(e)return JSON.parse(e);throw new Error(`I do not find ${c?`${c}_`:""}${t}`)}catch(e){return console.warn("[getLS]: ",e),null}},I=(t,e)=>{try{e===null?localStorage.removeItem(`${c?`${c}_`:""}${t}`):localStorage.setItem(`${c?`${c}_`:""}${t}`,JSON.stringify(e))}catch(s){return console.warn("[setLS]: ",s),null}},D="/DigITall-JS/assets/cart-background-967c20ad.png",o={offset:0,count:3},$=()=>{const t=f("cart")||[];return t!=null&&t.length?t.slice(o.offset,o.offset+o.count):[]},H=t=>{const e=f("cart");return e!=null&&e.length?(o.offset=(t-1)*o.count,$()):[]};function i(t,e){const s=document.createElement("button");return s.classList.add("cart-pagination-btn"),s.textContent=t,s.onclick=e,s}const z=(t,e)=>{const s=f("cart")||[],r=Math.ceil(s.length/o.count),a=o.offset/o.count+1;if(r===1)return;if(r===0){e(0);return}const n=document.createElement("div");n.classList.add("cart-pagination-btns");const d=3,k=a>=d,L=a!==r&&r>d,p=i("<<",()=>{e(1)});p.disabled=a===1,p.disabled||(p.classList.add("cart-shrink"),p.classList.add("cart-last-arrow-btn")),n.appendChild(p);const u=i("<",()=>{e(a-1)});u.disabled=a===1,u.disabled||(u.classList.add("cart-shrink"),u.classList.add("cart-last-arrow-btn")),n.appendChild(u);const y=i("...",()=>{});k||y.setAttribute("style","display:none;"),n.appendChild(y);for(let l=1;l<=d;l++){const g=k?l+a-d+Number(L):l,h=i(g,()=>{e(g)});l===1&&k&&h.setAttribute("style","display:none;"),l===d&&L&&h.setAttribute("style","display:none;"),a===g?h.classList.add("cart-pagination-btn-active"):a!==g&&a>g&&(h.classList.add("cart-last-arrow-btn"),y.classList.add("cart-last-arrow-btn")),n.appendChild(h)}const S=i("...",()=>{});L||S.setAttribute("style","display:none;"),n.appendChild(S);const m=i(">",()=>{e(a+1)});m.disabled=r===a,m.disabled||(m.classList.add("cart-shrink"),m.classList.add("cart-next-arrow-btn")),n.appendChild(m);const b=i(">>",()=>{e(r)});b.disabled=r===a,b.disabled||(b.classList.add("cart-shrink"),b.classList.add("cart-next-arrow-btn")),n.appendChild(b),t.appendChild(n)},P=t=>e=>{const r=f("cart").filter(a=>a._id!==e);I("cart",r.length>0?r:null),_(t,$())},N=t=>`<li class="cart-item-glow cart-item">
          <img class="cart-image" src="${t.book_image}"/>
          <div class="cart-book-section">
            <h3 class="cart-book-title">${t.title}</h3>
            <button class="cart-remove-book-btn" onclick="window.deleteCardFromLSHandler('${t._id}')">
              <span class="cart-trash">
                <span></span>
                <i></i>
              </span>
            </button>
            <p class="cart-book-category">${t.list_name}</p>
            <p class="cart-book-description">
             ${t.description?t.description:"No description has been added to this book"}
            </p>
            <div class="cart-info-wrapper">
            <p class="cart-book-autor">${t.author}</p>
            <div class="cart-book-links">
              <a href=${t.buy_links[0].url} class="cart-amazon cart-amazon-dark">
                <img src=${x} alt=${t.buy_links[0].name} />
              </a>
              <a
                href=${t.buy_links[1].url}
                class="cart-apple-books cart-apple-books-dark"
              >
                <img src=${T} alt=${t.buy_links[1].name} />
              </a>
            </div>
            </div>
          </div>
        </li>`,E=()=>`<li class="cart-background">
        <p class="cart-background-text">
          This page is empty, add some books and proceed to order.
        </p>
        <img class="cart-bg-img" src="${D}" />
      </li>`,F=t=>e=>{const s=H(e);A(t,s)},_=(t,e)=>{t.innerHTML=B(e,N),z(t,F(t))},A=(t,e)=>{if(!(e!=null&&e.length)){t.innerHTML=B([""],E);return}_(t,e)},J=t=>{f("cart"),A(t,$())};q();M("header-nav-link-shop");const w={mainContainer:document.querySelector(".main-container"),mainTitle:document.querySelector(".main-title"),cartItem:document.querySelector(".cart-item"),cartBookTitle:document.querySelector(".cart-book-title"),cartBookDescription:document.querySelector(".cart-book-description"),cartAmazon:document.querySelector(".cart-amazon"),cartAppleBooks:document.querySelector(".cart-apple-books")};C.mainTitle.innerHTML="Shopping <span>List</span>";J(C.shopListWrap);window.deleteCardFromLSHandler=P(C.shopListWrap);const v=document.querySelector("#themeToggle");v.addEventListener("click",()=>{v.checked?w.mainContainer.classList.add("dark-theme"):w.mainContainer.classList.remove("dark-theme")});
//# sourceMappingURL=commonHelpers2.js.map
