function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");

  cart.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "cart-card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="placeSingleOrder(${index})">Place Order</button>
    `;

    cartContainer.appendChild(card);
  });
}

function placeSingleOrder(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart[index];
  alert(`Order placed for ${item.name}!`);
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

if (document.getElementById("cart-items")) {
  loadCart();
}

function filterDishes() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const cards = document.getElementsByClassName("dish-card");

  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].getElementsByTagName("h2")[0].textContent.toLowerCase();
    if (title.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}