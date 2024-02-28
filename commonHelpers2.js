import{d as _,a as q,b as D,g as A,h as H,r as T}from"./assets/showHideFn-7538a417.js";import"./assets/vendor-4a53a031.js";const E=document.querySelector(".cart-timer-wrap"),G=()=>`<div class="cart-timer">
      <h3 class="cart-timer-title">
        Place your order within next 2 hours and get 10% discount!
      </h3>
      <div class="cart-timer-box">
         <div id="hours" class="cart-timer-item">
          <div class="cart-timer-circle">
            <svg class="cart-circle" viewbox="0 0 100 100">
              <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop class="cart-gradient_1" offset="0%"></stop>
                <stop class="cart-gradient_2" offset="70%"></stop>
                <stop class="cart-gradient_3" offset="100%"></stop>
              </linearGradient>
              <circle class="cart-segment" r="9.55%" cx="50%" cy="50%"></circle>
            </svg>
            <div class="cart-timer-num">0</div>
          </div>
          <p class="cart-time-name">hours</p>
        </div>
         <div id="minutes" class="cart-timer-item">
          <div class="cart-timer-circle">
            <svg class="cart-circle" viewbox="0 0 100 100">
              <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop class="cart-gradient_1" offset="0%"></stop>
                <stop class="cart-gradient_2" offset="70%"></stop>
                <stop class="cart-gradient_3" offset="100%"></stop>
              </linearGradient>
              <circle class="cart-segment" r="9.55%" cx="50%" cy="50%"></circle>
            </svg>
            <div class="cart-timer-num">0</div>
          </div>
          <p class="cart-time-name">minutes</p>
        </div>
         <div id="seconds" class="cart-timer-item">
          <div class="cart-timer-circle">
            <svg class="cart-circle" viewbox="0 0 100 100">
              <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop class="cart-gradient_1" offset="0%"></stop>
                <stop class="cart-gradient_2" offset="70%"></stop>
                <stop class="cart-gradient_3" offset="100%"></stop>
              </linearGradient>
              <circle class="cart-segment" r="9.55%" cx="50%" cy="50%"></circle>
            </svg>
            <div class="cart-timer-num">0</div>
          </div>
          <p class="cart-time-name">seconds</p>
        </div>
      </div>
    </div>`;E.innerHTML=G();const P={hours:document.getElementById("hours"),minutes:document.getElementById("minutes"),seconds:document.getElementById("seconds")};let $=!1;const W=()=>{const t=localStorage.getItem("time");if(t)return t;const e=1e4,r=Date.now()+e;return localStorage.setItem("time",r),r},z=setInterval(()=>{const t=Date.now(),e=W()-t,r=F(e);if(r.seconds<0&&!$){clearInterval(z),localStorage.removeItem("time"),$=!0;const a=document.querySelector(".cart-timer-wrap");a&&(a.style.display="none")}N(r,P)},1e3);function F(t){return{hours:Math.floor(t%72e5/36e5),minutes:Math.floor(t%36e5/6e4),seconds:Math.floor(t%6e4/1e3)}}function N(t,e){Object.keys(t).forEach(r=>{e[r]&&(e[r].querySelector(".cart-timer-num").innerHTML=t[r])})}const i="",m=t=>{try{const e=localStorage.getItem(`${i?`${i}_`:""}${t}`);if(e)return JSON.parse(e);throw new Error(`I do not find ${i?`${i}_`:""}${t}`)}catch{return null}},S=(t,e)=>{try{e===null?localStorage.removeItem(`${i?`${i}_`:""}${t}`):localStorage.setItem(`${i?`${i}_`:""}${t}`,JSON.stringify(e))}catch(r){return console.warn("[setLS]: ",r),null}},J="/DigITall-JS/assets/cart-background-967c20ad.png",o={offset:0,count:3},w=()=>{const t=m("cart")||[];return t!=null&&t.length?t.slice(o.offset,o.offset+o.count):[]},O=t=>{const e=m("cart");return e!=null&&e.length?(o.offset=(t-1)*o.count,w()):[]};function l(t,e){const r=document.createElement("button");return r.classList.add("cart-pagination-btn"),r.textContent=t,r.onclick=e,r}const j=(t,e)=>{const r=m("cart")||[],a=Math.ceil(r.length/o.count),s=o.offset/o.count+1;if(a===1)return;if(a===0){e(0);return}const c=document.createElement("div");c.classList.add("cart-pagination-btns");const p=3,y=s>=p,k=s!==a&&a>p,u=l("<<",()=>{e(1)});u.disabled=s===1,u.disabled||(u.classList.add("cart-shrink"),u.classList.add("cart-last-arrow-btn")),c.appendChild(u);const g=l("<",()=>{e(s-1)});g.disabled=s===1,g.disabled||(g.classList.add("cart-shrink"),g.classList.add("cart-last-arrow-btn")),c.appendChild(g);const L=l("...",()=>{});y||L.setAttribute("style","display:none;"),c.appendChild(L);for(let d=1;d<=p;d++){const b=y?d+s-p+Number(k):d,n=l(b,()=>{e(b)});d===1&&y&&n.setAttribute("style","display:none;"),d===p&&k&&n.setAttribute("style","display:none;"),s===b?(n.classList.add("cart-pagination-btn-active"),n.classList.add("cart-shrink")):s!==b&&s>b?(n.classList.add("cart-last-arrow-btn"),n.classList.add("cart-shrink"),L.classList.add("cart-last-arrow-btn")):n.classList.add("cart-shrink"),c.appendChild(n)}const C=l("...",()=>{});k||C.setAttribute("style","display:none;"),c.appendChild(C);const f=l(">",()=>{e(s+1)});f.disabled=a===s,f.disabled||(f.classList.add("cart-shrink"),f.classList.add("cart-next-arrow-btn")),c.appendChild(f);const h=l(">>",()=>{e(a)});h.disabled=a===s,h.disabled||(h.classList.add("cart-shrink"),h.classList.add("cart-next-arrow-btn")),c.appendChild(h),t.appendChild(c)},K=t=>e=>{const a=m("cart").filter(s=>s._id!==e);S("cart",a.length>0?a:null),I(t,w())},R=t=>`<li class="cart-item-glow cart-item">
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
                <img src=${q} alt=${t.buy_links[0].name} />
              </a>
              <a
                href=${t.buy_links[1].url}
                class="cart-apple-books cart-apple-books-dark"
              >
                <img src=${D} alt=${t.buy_links[1].name} />
              </a>
            </div>
            </div>
          </div>
        </li>`,U=()=>`<li class="cart-background">
        <p class="cart-background-text">
          This page is empty, add some books and proceed to order.
        </p>
        <img class="cart-bg-img" src="${J}" />
      </li>`,V=t=>e=>{const r=O(e);B(t,r)},I=(t,e)=>{t.innerHTML=_(e,R),j(t,V(t))},B=(t,e)=>{if(!(e!=null&&e.length)){t.innerHTML=_([""],U);return}I(t,e)},Q=t=>{m("cart"),B(t,w())};A();H("header-nav-link-shop");const x={body:document.querySelector("body"),mainContainer:document.querySelector(".main-container"),mainTitle:document.querySelector(".main-title"),cartTimerWrap:document.querySelector(".cart-timer-wrap"),cartItem:document.querySelector(".cart-item"),cartBookTitle:document.querySelector(".cart-book-title"),cartBookDescription:document.querySelector(".cart-book-description"),cartAmazon:document.querySelector(".cart-amazon"),cartAppleBooks:document.querySelector(".cart-apple-books")};T.mainTitle.innerHTML="Shopping <span>List</span>";Q(T.shopListWrap);window.deleteCardFromLSHandler=K(T.shopListWrap);const v=document.querySelector("#themeToggle"),M=t=>{const{value:e}=m("isDarkTheme")||{};(t?v.checked:e)?(x.body.classList.add("dark-theme"),v.checked=!0,S("isDarkTheme",{value:!0})):(v.checked=!1,x.body.classList.remove("dark-theme"),S("isDarkTheme",null))};M();v.addEventListener("click",M);
//# sourceMappingURL=commonHelpers2.js.map
