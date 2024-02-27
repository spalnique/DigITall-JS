import{d as _,a as B,b as M,u as I,s as A,c as C}from"./assets/showHideFn-bdab7341.js";import"./assets/vendor-389f7b34.js";const c="",p=t=>{try{const s=localStorage.getItem(`${c?`${c}_`:""}${t}`);if(s)return JSON.parse(s);throw new Error(`I do not find ${c?`${c}_`:""}${t}`)}catch(s){return console.warn("[getLS]: ",s),null}},H=(t,s)=>{try{s===null?localStorage.removeItem(`${c?`${c}_`:""}${t}`):localStorage.setItem(`${c?`${c}_`:""}${t}`,JSON.stringify(s))}catch(n){return console.warn("[setLS]: ",n),null}},T="/DigITall-JS/assets/cart-background-967c20ad.png",i={offset:0,count:3},L=()=>{const t=p("cart")||[];return t!=null&&t.length?t.slice(i.offset,i.offset+i.count):[]},D=t=>{const s=p("cart");return s!=null&&s.length?(i.offset=(t-1)*i.count,L()):[]};function o(t,s){const n=document.createElement("button");return n.classList.add("cart-pagination-btn"),n.textContent=t,n.onclick=s,n}const P=(t,s)=>{const n=p("cart")||[],e=Math.ceil(n.length/i.count),a=i.offset/i.count+1;if(e===1)return;if(e===0){s(0);return}const r=document.createElement("div");r.classList.add("cart-pagination-btns");const d=3,h=a>=d,$=a!==e&&e>d,u=o("<<",()=>{s(1)});u.disabled=a===1,u.disabled||u.classList.add("cart-shrink"),r.appendChild(u);const g=o("<",()=>{s(a-1)});g.disabled=a===1,g.disabled||g.classList.add("cart-shrink"),r.appendChild(g);const y=o("...",()=>{});h||y.setAttribute("style","display:none;"),r.appendChild(y);for(let l=1;l<=d;l++){const k=h?l+a-d+Number($):l,m=o(k,()=>{s(k)});l===1&&h&&m.setAttribute("style","display:none;"),l===d&&$&&m.setAttribute("style","display:none;"),a===k&&m.classList.add("pagination-btn-active"),r.appendChild(m)}const S=o("...",()=>{});$||S.setAttribute("style","display:none;"),r.appendChild(S);const b=o(">",()=>{s(a+1)});b.disabled=e===a,b.disabled||b.classList.add("cart-shrink"),r.appendChild(b);const f=o(">>",()=>{s(e)});f.disabled=e===a,f.disabled||f.classList.add("cart-shrink"),r.appendChild(f),t.appendChild(r)},x=t=>s=>{const e=p("cart").filter(a=>a._id!==s);H("cart",e.length>0?e:null),v(t,L())},z=t=>`<li class="cart-item-glow cart-item">
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
             ${t.description}
            </p>

            <p class="cart-book-autor">${t.author}</p>
            <div class="cart-book-links">
              <a href=${t.buy_links[0].url} class="cart-amazon cart-amazon-dark">
                <img src=${B} alt=${t.buy_links[0].name} />
              </a>
              <a
                href=${t.buy_links[1].url}
                class="cart-apple-books cart-apple-books-dark"
              >
                <img src=${M} alt=${t.buy_links[1].name} />
              </a>
            </div>
          </div>
        </li>`,F=()=>`<li class="cart-background">
        <p class="cart-background-text">
          This page is empty, add some books and proceed to order.
        </p>
        <img class="cart-bg-img" src="${T}" />
      </li>`,J=t=>s=>{const n=D(s);w(t,n)},v=(t,s)=>{t.innerHTML=_(s,z),P(t,J(t))},w=(t,s)=>{if(!(s!=null&&s.length)){t.innerHTML=_([""],F);return}v(t,s)},N=t=>{p("cart"),w(t,L())};I();A("header-nav-link-shop");C.mainTitle.innerHTML="Shopping <span>List</span>";N(C.shopListWrap);window.deleteCardFromLSHandler=x(C.shopListWrap);
//# sourceMappingURL=commonHelpers2.js.map
