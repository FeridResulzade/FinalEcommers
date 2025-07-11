
function updateCart() {
  let cartItems = document.querySelectorAll("#cart-items tr");
  let subtotal = 0;

  cartItems.forEach(row => {
    const price = parseFloat(row.querySelector(".price").textContent);
    const qtyInput = row.querySelector(".qty");
    const qty = parseInt(qtyInput.value);
    const itemSubtotal = price * qty;

    row.querySelector(".subtotal").textContent = itemSubtotal.toFixed(2);
    subtotal += itemSubtotal;
  });

  document.getElementById("cart-subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("cart-total").textContent = subtotal.toFixed(2);
}


document.querySelectorAll(".qty").forEach(input => {
  input.addEventListener("change", updateCart);
});

document.querySelectorAll(".remove-btn").forEach(button => {
  button.addEventListener("click", function () {
    this.closest("tr").remove();
    updateCart();
  });
});

updateCart();
