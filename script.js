let cart = [];
let total = 0;

const buttons = document.querySelectorAll(".card button");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total");
const cartBox = document.getElementById("cart");
const cartIcon = document.getElementById("cart-icon");

cartIcon.addEventListener("click", function (e) {
    e.preventDefault();

    if (cartBox.style.display === "none" || cartBox.style.display === "") {
        cartBox.style.display = "block";
    } else {
        cartBox.style.display = "none";
    }
});

buttons.forEach(button => {
    button.addEventListener("click", function () {

        const card = button.parentElement;
        const name = card.querySelector("h3").textContent;
        const price = parseInt(card.querySelector("p").textContent);

        cart.push({
            name: name,
            price: price
        });

        cartCount.textContent = cart.length;

        const li = document.createElement("li");
        li.textContent = name + " - " + price + " ريال";
        cartItems.appendChild(li);

        total += price;
        totalPrice.textContent = total;
    });
});
const checkout = document.getElementById("checkout");

checkout.addEventListener("click", function () {
    alert("تم تجهيز طلبك بنجاح");
});