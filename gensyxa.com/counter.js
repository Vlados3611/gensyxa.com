window.addEventListener(`click`, function (event) {
    let counter;

    if (event.target.dataset.action === `plus` || event.target.dataset.action === `minus`) {
       const counterWrapper = event.target.closest(`.counter-inner`);

       counter = counterWrapper.querySelector(`[data-counter]`);
      

       if (event.target.dataset.action === `plus`) {
        counter.innerText = ++counter.innerText;
       }

       if (event.target.dataset.action === `minus`) {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
        else if (event.target.closest(`.cart-items`) && parseInt(counter.innerText) === 1) {
            const subCartItems = document.querySelector(`.sub-cart-items`);
            subCartItems.remove();
        }
       }


    }
})


