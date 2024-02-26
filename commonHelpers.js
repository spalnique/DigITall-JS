import{f as l,e as p,r as d,c as g,a as r,b as i,d as u,g as b,h as L,i as C}from"./assets/modal-528150f8.js";import"./assets/vendor-389f7b34.js";function M(t){return t.map(a=>{const e=a.list_name.split(" ");e[e.length-1]=`<span>${e[e.length-1]}</span>`;const s=`<h2 class="category-title">${e.join(" ")}</h2>`,n=i(a.books,u),c=b("see-more-button","See more",a.list_name);return s+n+c}).join("")}async function f(){const t=await l(p.topbooks),a=M(t);d(r.mainCatWrap,a,g)}S();r.catList.addEventListener("click",w);async function S(){const t=await l(p.list),a=E(t);d(r.catList,a)}function E(t){const a='<li class="sidebar-category-item"><p class="sidebar-category-text make-blue">All categories</p></li>',e=t.map(n=>`<li class="sidebar-category-item" data-category="${n.list_name}"><p class="sidebar-category-text" data-category="${n.list_name}">${n.list_name}</p></li>`).join("");return a+e}function y(t){t.target.nodeName==="LI"?(t.target.parentElement.querySelectorAll(".sidebar-category-text").forEach(e=>{e.classList.remove("make-blue")}),t.target.firstElementChild.classList.add("make-blue")):t.target.nodeName==="P"&&(t.target.parentElement.parentElement.querySelectorAll(".sidebar-category-text").forEach(e=>{e.classList.remove("make-blue")}),t.target.classList.add("make-blue"))}async function w(t){if(t.target===t.currentTarget)return;if(!t.target.dataset.category){y(t),f();return}y(t);const a=t.target.dataset.category.split(" ");a[a.length-1]=`<span>${a[a.length-1]}</span>`,r.mainTitle.innerHTML=a.join(" ");const e=await l(p.category,t.target.dataset.category),s=i(e,u);d(r.mainCatWrap,s,g),document.querySelectorAll(".main-category-item").forEach(c=>showElement(c))}function _(t){t.classList.add("visible"),t.classList.remove("hidden")}const o="",k=t=>{try{const a=localStorage.getItem(`${o?`${o}_`:""}${t}`);if(a)return JSON.parse(a);throw new Error(`I do not find ${o?`${o}_`:""}${t}`)}catch(a){return console.warn("[getLS]: ",a),null}},v=(t,a)=>{try{a===null?localStorage.removeItem(`${o?`${o}_`:""}${t}`):localStorage.setItem(`${o?`${o}_`:""}${t}`,JSON.stringify(a))}catch(e){return console.warn("[setLS]: ",e),null}},m={offset:0,count:3},h=()=>{const t=k("cart")||[];return t!=null&&t.length?t.slice(m.offset,m.offset+m.count):[]},T=t=>a=>{const s=k("cart").filter(n=>n._id!==a);v("cart",s.length>0?s:null),$(t,h())},A=t=>`<li class="cart-item-glow cart-item">
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
                <img src=${L} alt=${t.buy_links[0].name} />
              </a>
              <a
                href=${t.buy_links[1].url}
                class="cart-apple-books cart-apple-books-dark"
              >
                <img src=${C} alt=${t.buy_links[1].name} />
              </a>
            </div>
          </div>
        </li>`,B=()=>`<li class="cart-background">
        <p class="cart-background-text">
          This page is empty, add some books and proceed to order.
        </p>
        <img class="cart-bg-img" src="../img/png/cart-background.png" />
      </li>`,$=(t,a)=>{if(!(a!=null&&a.length)){t.innerHTML=i([""],B);return}t.innerHTML=i(a,A)},H=t=>{k("cart"),$(t,h())};f();r.mainCatWrap.addEventListener("click",D);async function D(t){if(!t.target.dataset.category)return;const a=t.target.dataset.category.split(" ");a[a.length-1]=`<span>${a[a.length-1]}</span>`,r.mainTitle.innerHTML=a.join(" ");const e=await l(p.category,t.target.dataset.category),s=i(e,u);d(r.mainCatWrap,s,g),document.querySelectorAll(".main-category-item").forEach(c=>_(c))}r.shoppingListBtn.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),r.mainTitle.innerHTML="Shopping <span>List</span>",H(r.mainCatWrap),window.deleteCardFromLSHandler=T(r.mainCatWrap)});
//# sourceMappingURL=commonHelpers.js.map
