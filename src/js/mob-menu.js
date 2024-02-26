import * as basicLightbox from 'basiclightbox';

const menuOpen = document.addEventListener('click', createMenuContent);

function createMenuContent() {
  const menuContent = `
    <div class="menu-container">
        <div class="menu-header"></div>
        <div class="menu-body">
          <div class="menu-user-profile">
            <p class="menu-user-name"></p>
            <svg class="menu-user-fill" width="22" height="22">
              <use href="./img/icons.svg#user-fill"></use>
            </svg>
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
          <button type="button" class="log-out">
            Log out
            <svg class="log-out-icon" width="20" height="20">
              <use href="./img/icons.svg#arrow-narrow-right"></use>
            </svg>
          </button>
        </div>
        </div>
      `;

  return menuContent;
}

const menuContainer = document.querySelector('.menu-container');
const menuContent = createMenuContent();
menuContainer.innerHTML = menuContent;
const menuModal = basicLightbox.create(menuContainer, {
  className: 'my-lightbox',
});
menuModal.show();
