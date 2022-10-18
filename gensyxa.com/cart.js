const cartbutton = document.querySelector (`.cart`);
const buttonclose = document.querySelector(`.page-close-button`);
const cartsection = document.querySelector(`.cart-section`);

cartbutton.addEventListener(`click`, function () {
buttonclose.style.display = `flex`;
cartsection.style.display = `block`;

buttonclose.addEventListener(`click`, function () {
    buttonclose.style.display = `none`;
    cartsection.style.display = `none`;
});
});

const emailInput = document.querySelector(`#Email`);
const mobileNumber = document.querySelector(`#Mobile_number`);
const buttonPurchase = document.querySelector(`.button-for-purchase`);


emailInput.addEventListener(`keyup`, function () {
  if (emailInput.value.length < 4 || emailInput.value.length == 0) {
    emailInput.style.borderBottom = `1px solid rgb(167, 7, 7)`;
  }
  if (emailInput.value.length > 4) {
    emailInput.style.borderBottom = `1px solid rgb(30, 161, 194)`;
  }
});

mobileNumber.addEventListener(`keyup`, function () {
  if (mobileNumber.value.length < 4 || mobileNumber.value.length == 0) {
    mobileNumber.style.borderBottom = `1px solid rgb(167, 7, 7)`;
  }
  if (mobileNumber.value.length > 4) {
    mobileNumber.style.borderBottom = `1px solid rgb(30, 161, 194)`;
  }
});



buttonPurchase.addEventListener(`click`, function () {
  if (emailInput.value.length == 0 || emailInput.value.length < 4 || mobileNumber.value.length == 0 ||  mobileNumber.value.length < 4) {
    emailInput.style.borderBottom = `1px solid rgb(167, 7, 7)`;
    mobileNumber.style.borderBottom = `1px solid rgb(167, 7, 7)`;
  }
  else {
    emailInput.style.borderBottom = `1px solid rgb(13, 179, 35)`;
    mobileNumber.style.borderBottom = `1px solid rgb(13, 179, 35)`;
  }
});