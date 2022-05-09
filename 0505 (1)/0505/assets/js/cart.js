let countCart = document.getElementById("count")
let productsList = document.getElementById("products")

const getCartNumber = () => {
    let cartNumber = localStorage.getItem('cart-number')
    if (cartNumber == null) {
        countCart.textContent = 0
    }
    else {
        countCart.textContent = cartNumber
    }
}

const displayProducts = () => {

    let products = JSON.parse(localStorage.getItem('cart'))

    if (products != null) {
        for (let i = 0; i < products.length; i++) {
            productsList.innerHTML += `
            <div class="d-flex align-items-center mb-5">
                <div class="flex-shrink-0">
                    <img src="${products[i].image}"
                        class="img-fluid" style="width: 150px;" alt="Generic placeholder image">
                </div>
                <div class="flex-grow-1 ms-3">
                    <a href="#!" class="float-end text-black"><i class="fas fa-times"></i></a>
                    <h5 class="text-primary">${products[i].nom}</h5>

                    <div class="d-flex align-items-center">
                        <p class="fw-bold mb-0 me-5 pe-3">${products[i].prix * products[i].qte} DT</p>
                        <div class="def-number-input number-input safari_only">
                            <button
                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                class="minus"></button>
                            <input class="quantity fw-bold text-black" min="0" name="quantity"
                                value="${products[i].qte}" type="number">
                            <button
                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                class="plus"></button>
                        </div>
                    </div>
                </div>
            </div>
            `
        }

    }
    else {
        productsList.innerHTML = `
        <div class="alert alert-warning" role="alert">
            Aucun produit trouvé !
        </div>
        `
    }

}

const init = () => {
    displayProducts()
    getCartNumber()
}

init()