document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart-icon-anchor');
    const cartSlider = document.querySelector('.cart-slider');
    const cartOverlay = document.querySelector('.cart-slider-overlay');
    const closeCart = document.getElementById('close-cart');

    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            cartSlider.classList.add('show');
            cartOverlay.classList.add('show');
        });
    }

    if (closeCart) {
        closeCart.addEventListener('click', function() {
            cartSlider.classList.remove('show');
            cartOverlay.classList.remove('show');
        });
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', function() {
            cartSlider.classList.remove('show');
            cartOverlay.classList.remove('show');
        });
    }

    const searchIcon = document.getElementById('search-icon-anchor');
    const searchSlider = document.querySelector('.search-slider');
    const searchOverlay = document.querySelector('.search-slider-overlay');
    const closeSearch = document.getElementById('close-search');

    if (searchIcon) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            searchSlider.classList.add('show');
            searchOverlay.classList.add('show');
        });
    }

    if (closeSearch) {
        closeSearch.addEventListener('click', function() {
            searchSlider.classList.remove('show');
            searchOverlay.classList.remove('show');
        });
    }

    if (searchOverlay) {
        searchOverlay.addEventListener('click', function() {
            searchSlider.classList.remove('show');
            searchOverlay.classList.remove('show');
        });
    }

    const shopIcon = document.getElementById('shop-icon-anchor');
    const shopSlider = document.querySelector('.shop-slider');
    const shopOverlay = document.querySelector('.shop-slider-overlay');
    const closeShop = document.getElementById('close-shop');

    if (shopIcon) {
        shopIcon.addEventListener('click', function(e) {
            e.preventDefault();
            shopSlider.classList.add('show');
            shopOverlay.classList.add('show');
        });
    }

    if (closeShop) {
        closeShop.addEventListener('click', function() {
            shopSlider.classList.remove('show');
            shopOverlay.classList.remove('show');
        });
    }

    if (shopOverlay) {
        shopOverlay.addEventListener('click', function() {
            shopSlider.classList.remove('show');
            shopOverlay.classList.remove('show');
        });
    }
});