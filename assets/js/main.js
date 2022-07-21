(function() {

    // Open Menu
    const openMenu = (menuOpen, menuItem) => {
        let menuOpenID = document.querySelector(menuOpen),
            menuItemID = document.querySelector(menuItem);
        if (menuOpenID && menuItemID) {
            menuOpenID.onclick = () => {
                menuItemID.classList.add("active");
            }
        }
    }
    openMenu('#openMenuBtn', '#menuItem');

    // Close Menu
    const closeMenu = (menuClose, menuItem) => {
        let menuCloseID = document.querySelector(menuClose),
            menuItemID = document.querySelector(menuItem);
        if (menuCloseID && menuItemID) {
            menuCloseID.onclick = () => {
                menuItemID.classList.remove("active");
            }
        }
    }
    closeMenu('#closeMenuBtn', '#menuItem');

})();