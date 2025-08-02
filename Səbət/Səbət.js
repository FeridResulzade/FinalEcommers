const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const subtotal = item.price;
    total += subtotal;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <img src="${item.imageUrl}" alt="${item.model}" width="50" />
        ${item.model}
      </td>
      <td class="price">${item.price.toFixed(2)}</td>
      <td><input type="number" class="qty" value="1" min="1" data-index="${index}" /></td>
      <td class="subtotal">${subtotal.toFixed(2)}</td>
      <td><button class="remove-btn" data-index="${index}">Remove</button></td>
    `;
    cartItemsContainer.appendChild(row);
  });

  document.getElementById("cart-subtotal").textContent = total.toFixed(2);
  document.getElementById("cart-total").textContent = total.toFixed(2);

  // Remove item
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload();
    });
  });