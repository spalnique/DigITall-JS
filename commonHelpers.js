import{f as c,e as i,r as l,c as m,a as r,b as g,d,g as y}from"./assets/modal-a0627c3d.js";import"./assets/vendor-389f7b34.js";function k(t){return t.map(a=>{const e=a.list_name.split(" ");e[e.length-1]=`<span>${e[e.length-1]}</span>`;const n=`<h2 class="category-title">${e.join(" ")}</h2>`,s=g(a.books,d),o=y("see-more-button","See more",a.list_name);return n+s+o}).join("")}async function u(){const t=await c(i.topbooks),a=k(t);l(r.mainCatWrap,a,m)}f();r.catList.addEventListener("click",C);async function f(){const t=await c(i.list),a=h(t);l(r.catList,a)}function h(t){const a='<li class="sidebar-category-item"><p class="sidebar-category-text">All categories</p></li>',e=t.map(s=>`<li class="sidebar-category-item" data-category="${s.list_name}"><p class="sidebar-category-text" data-category="${s.list_name}">${s.list_name}</p></li>`).join("");return a+e}function p(t){t.target.nodeName==="LI"?(t.target.parentElement.querySelectorAll(".sidebar-category-text").forEach(e=>{e.classList.remove("make-blue")}),t.target.firstElementChild.classList.add("make-blue"),console.log(t.target.firstElementChild.textContent.split(" "))):t.target.nodeName==="P"&&(t.target.parentElement.parentElement.querySelectorAll(".sidebar-category-text").forEach(e=>{e.classList.remove("make-blue")}),t.target.classList.add("make-blue"))}async function C(t){if(t.target===t.currentTarget)return;if(!t.target.dataset.category){p(t),u();return}p(t);const a=t.target.dataset.category.split(" ");a[a.length-1]=`<span>${a[a.length-1]}</span>`,r.mainTitle.innerHTML=a.join(" ");const e=await c(i.category,t.target.dataset.category),n=g(e,d);l(r.mainCatWrap,n,m),document.querySelectorAll(".main-category-item").forEach(o=>showElement(o))}function E(t){t.classList.add("visible"),t.classList.remove("hidden")}u();r.mainCatWrap.addEventListener("click",L);async function L(t){if(!t.target.dataset.category)return;const a=t.target.dataset.category.split(" ");a[a.length-1]=`<span>${a[a.length-1]}</span>`,r.mainTitle.innerHTML=a.join(" ");const e=await c(i.category,t.target.dataset.category),n=g(e,d);l(r.mainCatWrap,n,m),document.querySelectorAll(".main-category-item").forEach(o=>E(o))}
//# sourceMappingURL=commonHelpers.js.map