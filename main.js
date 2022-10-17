const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modalRegister = document.querySelector('.modal__register');
const modalLogin = document.querySelector('.modal__login');
const register = document.querySelector('.header__navbar-item-link-register');
const login = document.querySelector('.header__navbar-item-link-login');
const authForm = document.querySelector('.auth-form');
const backBtn1 = document.querySelector('.auth-form__controls--back1');
const backBtn2 = document.querySelector('.auth-form__controls--back2');
const headerCartIcon = document.querySelector('.header__cart-icon')
const headerCartList = document.querySelector('.header__cart-list')
const closeBtn = document.querySelector('.header__cart-close-cart')


// Register,login open/close

register.onclick = () => {
    modalRegister.classList.add("active");
};
backBtn1.onclick = () => {
    modalRegister.classList.remove("active");
};
login.onclick = () => {
    modalLogin.classList.add("active");
};
backBtn2.onclick = () => {
    modalLogin.classList.remove("active");
};

// Header cart open/close
headerCartIcon.onclick = () => {
    headerCartList.classList.add("active")
};
closeBtn.onclick = () => {
    headerCartList.classList.remove("active")
};


// Cart Working JS

if (document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// Making Funtion

function ready() {
    // Remove item from cart
    var removeCartButtons = document.getElementsByClassName('header__cart-item-remove');
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    // Quantity changes
    var quantityInputs = document.getElementsByClassName('header__cart-item-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    // Add to cart
    var addCart = document.getElementsByClassName('home-product-item__add-to-cart');
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
}

// Remove items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}
// Quantity Changes
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}
// Add to cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var name = shopProducts.getElementsByClassName('home-product-item__name')[0].innerText;
    var price = shopProducts.getElementsByClassName('home-product-item__price-current')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('home-product-item__img')[0].src;
    addProductToCart(name, price, productImg);
    updateTotal();
}

function addProductToCart(name, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("header__cart-item");
    var cartItems = document.getElementsByClassName('header__cart-cart-list-item')[0];
    var cartItemNames = cartItems.getElementsByClassName('header__cart-item-name');
    var cartBoxContent = `
                        <img src="${productImg}" alt="" class="header__cart-img">
                        <div class="header__cart-item-info">
                            <div class="header__cart-item-name">${name}</div>
                            <div class="header__cart-item-price">${price}</div>
                            <input type="number" value="1" class="header__cart-item-quantity">
                        </div>
                        <i class="header__cart-item-remove ti-trash"></i>`
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerHTML == name) {
            alert("Bạn đã thêm sản phẩm này vào giỏ hàng");
            return;
        }
    }
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('header__cart-item-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('header__cart-item-quantity')[0].addEventListener('change', quantityChanged);
}

// Update Total
function updateTotal() {
    var cartListItem = document.getElementsByClassName('header__cart-cart-list-item')[0];
    var cartItem = cartListItem.getElementsByClassName('header__cart-item');
    var total = 0;
    for (var i = 0; i < cartItem.length; i++){
        var cartBox = cartItem[i];
        var priceElement = cartBox.getElementsByClassName('header__cart-item-price')[0];
        var quantityElement = cartBox.getElementsByClassName('header__cart-item-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("đ", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    document.getElementsByClassName('header__cart-list-total-total-price')[0].innerText = 'đ' + total;
}