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
