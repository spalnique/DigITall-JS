import{d as _,a as q,b as D,j as H,k as A,r as w,i as E}from"./assets/showHideFn-e1797d3d.js";import"./assets/vendor-4a53a031.js";const G=document.querySelector(".cart-timer-wrap"),P=()=>`<div class="cart-timer">
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
    </div>`;G.innerHTML=P();const W={hours:document.getElementById("hours"),minutes:document.getElementById("minutes"),seconds:document.getElementById("seconds")};let x=!1;const z=()=>{const t=localStorage.getItem("time");if(t)return t;const e=2e4,r=Date.now()+e;return localStorage.setItem("time",r),r},F=setInterval(()=>{const t=Date.now(),e=z()-t,r=N(e);if(r.seconds<0&&!x){clearInterval(F),localStorage.removeItem("time"),x=!0;const s=document.querySelector(".cart-timer-wrap");s&&(s.style.display="none")}J(r,W)},1e3);function N(t){return{hours:Math.floor(t%72e5/36e5),minutes:Math.floor(t%36e5/6e4),seconds:Math.floor(t%6e4/1e3)}}function J(t,e){Object.keys(t).forEach(r=>{e[r]&&(e[r].querySelector(".cart-timer-num").innerHTML=t[r])})}const i="",u=t=>{try{const e=localStorage.getItem(`${i?`${i}_`:""}${t}`);if(e)return JSON.parse(e);throw new Error(`I do not find ${i?`${i}_`:""}${t}`)}catch{return null}},S=(t,e)=>{try{e===null?localStorage.removeItem(`${i?`${i}_`:""}${t}`):localStorage.setItem(`${i?`${i}_`:""}${t}`,JSON.stringify(e))}catch(r){return console.warn("[setLS]: ",r),null}},O="/DigITall-JS/assets/cart-background-967c20ad.png",o={offset:0,count:3},$=()=>{const t=u("cart")||[];return t!=null&&t.length?t.slice(o.offset,o.offset+o.count):[]},j=t=>{const e=u("cart");return e!=null&&e.length?(o.offset=(t-1)*o.count,$()):[]};function l(t,e){const r=document.createElement("button");return r.classList.add("cart-pagination-btn"),r.textContent=t,r.onclick=e,r}const K=(t,e)=>{const r=u("cart")||[],s=Math.ceil(r.length/o.count),a=o.offset/o.count+1;if(s===1)return;if(s===0){e(0);return}const c=document.createElement("div");c.classList.add("cart-pagination-btns");const d=r.length>6?3:2,y=d===3&&a>=d,k=a!==s&&s>d,p=l("<<",()=>{e(1)});p.disabled=a===1,p.disabled||(p.classList.add("cart-shrink"),p.classList.add("cart-last-arrow-btn")),c.appendChild(p);const g=l("<",()=>{e(a-1)});g.disabled=a===1,g.disabled||(g.classList.add("cart-shrink"),g.classList.add("cart-last-arrow-btn")),c.appendChild(g);const L=l("...",()=>{});y||L.setAttribute("style","display:none;"),c.appendChild(L);for(let m=1;m<=d;m++){const b=y?m+a-d+Number(k):m,n=l(b,()=>{e(b)});m===1&&y&&n.setAttribute("style","display:none;"),m===d&&k&&n.setAttribute("style","display:none;"),a===b?(n.classList.add("cart-pagination-btn-active"),n.classList.add("cart-shrink")):a!==b&&a>b?(n.classList.add("cart-last-arrow-btn"),n.classList.add("cart-shrink"),L.classList.add("cart-last-arrow-btn")):n.classList.add("cart-shrink"),c.appendChild(n)}const C=l("...",()=>{});k||C.setAttribute("style","display:none;"),c.appendChild(C);const h=l(">",()=>{e(a+1)});h.disabled=s===a,h.disabled||(h.classList.add("cart-shrink"),h.classList.add("cart-next-arrow-btn")),c.appendChild(h);const f=l(">>",()=>{e(s)});f.disabled=s===a,f.disabled||(f.classList.add("cart-shrink"),f.classList.add("cart-next-arrow-btn")),c.appendChild(f),t.appendChild(c)},R=t=>e=>{const s=u("cart").filter(a=>a._id!==e);S("cart",s.length>0?s:null),I(t,$())},U=t=>`<li class="cart-item-glow cart-item">
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
        </li>`,V=()=>`<li class="cart-background">
        <p class="cart-background-text">
          This page is empty, add some books and proceed to order.
        </p>
        <img class="cart-bg-img" src="${O}" />
      </li>`,Q=t=>e=>{const r=j(e);B(t,r)},I=(t,e)=>{t.innerHTML=_(e,U),K(t,Q(t))},B=(t,e)=>{if(!(e!=null&&e.length)){t.innerHTML=_([""],V);return}I(t,e)},X=t=>{u("cart"),B(t,$())};H();A("header-nav-link-shop");const T={body:document.querySelector("body"),logoIcon:document.querySelector(".header-logo-icon:nth-child(2)"),mainContainer:document.querySelector(".main-container"),mainTitle:document.querySelector(".main-title"),cartTimerWrap:document.querySelector(".cart-timer-wrap"),cartItem:document.querySelector(".cart-item"),cartBookTitle:document.querySelector(".cart-book-title"),cartBookDescription:document.querySelector(".cart-book-description"),cartAmazon:document.querySelector(".cart-amazon"),cartAppleBooks:document.querySelector(".cart-apple-books")};w.mainTitle.innerHTML="Shopping <span>List</span>";X(w.shopListWrap);window.deleteCardFromLSHandler=R(w.shopListWrap);const v=document.querySelector("#themeToggle"),Y=t=>{const s=`<use href="${`${E}#bookshelf-${t?"dark":"light"}`}"></use>`;T.logoIcon.innerHTML=s},M=t=>{const{value:e}=u("isDarkTheme")||{};Y(v.checked),(t?v.checked:e)?(T.body.classList.add("dark-theme"),v.checked=!0,S("isDarkTheme",{value:!0})):(v.checked=!1,T.body.classList.remove("dark-theme"),S("isDarkTheme",null))};M();v.addEventListener("click",M);
//# sourceMappingURL=commonHelpers2.js.map
