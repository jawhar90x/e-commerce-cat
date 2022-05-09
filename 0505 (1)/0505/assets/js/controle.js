//Objet JSON { attr1 : value , attr2 : value ..... }
let categories = [
    { serie: 1, nom: "Tous" },
    { serie: 2, nom: "Torki" },
    { serie: 3, nom: "Persan" },
    { serie: 4, nom: "Noir" },
]

let products = [
    { 
        serie: 1, cat: 3, image: "https://img-3.journaldesfemmes.fr/14a5dlvjTiJR86s3J5EPPvskA3s=/1500x/smart/559bdfc339f94c0ab89310cf118c31f5/ccmcms-jdf/11623035.jpg", nom: "Minou", prix: 500 },
    { serie: 2, cat: 2, image: "https://www.monde-des-chats.fr/wp-content/uploads/2021/01/angora-turc-02.jpg", nom: "Mimi", prix: 300 },
    { serie: 3, cat: 4, image: "https://www.josera.fr/media/chat_noir_1.jpg", nom: "Languer", prix: 200 }
]

let cart = []

let categoriesList = document.getElementById("categories")
let productsList = document.getElementById("products")
let countCart = document.getElementById("count")

const displayCategories = () => {
    for (let i = 0; i < categories.length; i++) {
        categoriesList.innerHTML += `<li class="list-group-item">${categories[i].nom}</li>`
    }
}

const displayProducts = () => {
    for (let i = 0; i < products.length; i++) {
        productsList.innerHTML += `
                    <div class="col">
                        <div class="card">
                            <img src="${products[i].image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${products[i].nom}</h5>
                                <p class="card-text">${products[i].prix} DT</p>
                            </div>
                            <div class="card-footer d-grid gap-2">
                                <button  onclick="addToCart(${products[i].serie})" class="btn btn-block btn-primary btn-sm btn-basket">
                                    <i class="fa fa-plus"></i> Ajouter Panier
                                </button>
                            </div>
                        </div>
                    </div>
        `
    }
}

const getCartNumber = () => {
    let cartNumber = localStorage.getItem('cart-number')
    if (cartNumber == null) {
        countCart.textContent = 0
    }
    else {
        countCart.textContent = cartNumber
    }
}

const getCartItems = () => {
    let productsInCart = localStorage.getItem('cart')

    if (productsInCart != null) {
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}

const init = () => {
    displayCategories()
    displayProducts()
    getCartNumber()
    getCartItems()
}

const addToCart = (serie) => {
    countCart.textContent = Number(countCart.textContent) + 1
    localStorage.setItem('cart-number', countCart.textContent)
    // add product to local storage
    // get product by serie
    let product = products.find((prod) => { return prod.serie == serie })

    // add product to 
    let productInCart = cart.find((prod) => { return prod.serie == serie })

    if (productInCart == null) {
        product.qte = 1
        cart.push(product)
    } else {
        let index = cart.indexOf(productInCart)
        cart[index].qte++
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

init()