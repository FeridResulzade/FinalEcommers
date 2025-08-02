const productData = localStorage.getItem("selectedProduct");
if (productData) {
    const product = JSON.parse(productData);

    const imgElement = document.querySelector(".product-image img");
    imgElement.src = product.imageUrl;
    imgElement.alt = product.model;

    document.querySelector(".product-details h2").textContent = product.model;

    const ratingHTML = `★★★★☆ (${product.reviewCount} Reviews) <span class="stock">${product.inStock ? 'In Stock' : 'Out of Stock'}</span>`;
    document.querySelector(".product-details .rating").innerHTML = ratingHTML;

    document.querySelector(".product-details .price").textContent = `$${product.price.toFixed(2)}`;

    document.querySelector(".product-details p").textContent = product.description;
} else {
    document.querySelector(".product-details").innerHTML = "<p>Məhsul tapılmadı.</p>";
}


function addToCart() {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const product = JSON.parse(productData);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Məhsul səbətə əlavə edildi!");
    window.location.href = "../../səbət/səbət.html";
}