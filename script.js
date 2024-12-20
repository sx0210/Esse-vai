let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    totalPrice.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function checkout() {
    alert("Redirecionando para a área de pagamentos.");
    // Você pode implementar redirecionamento aqui.
}

function copyPix() {
    const pixKey = document.getElementById("pix-key");
    pixKey.select();
    pixKey.setSelectionRange(0, 99999); // Para mobile
    document.execCommand("copy");
    alert("Chave PIX copiada!");
}