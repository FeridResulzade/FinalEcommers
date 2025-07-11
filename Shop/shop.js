document.addEventListener('DOMContentLoaded', function () {
    const productList = document.querySelector('.productlist');
    let categorylist = document.getElementById("category-list")
    if (!productList) return;

    fetch('http://195.26.245.5:9505/api/products')
        .then(response => response.json())
        .then(products => {
            productList.innerHTML = "";
            if (!products || products.length === 0) {
                productList.innerHTML = '<p class="text-center">Məhsul tapılmadı.</p>';
                return;
            }
            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product", "mb-4");
                productCard.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.brand}" class="product-image" />
                    <h6 class="product-title">${product.brand} ${product.model}</h6>
                    <p class="price">${product.price}$</p>
                    <p class="rating">${product.rating} (${Math.floor(Math.random() * 100) + 1})</p>
                    <button class="btn btn-danger btn-add-to-cart" data-id="${product.id}">Add to cart</button>
                `;
                productList.appendChild(productCard);
            });
        })
        .catch(error => {
            productList.innerHTML = '<p class="text-center text-danger">Error məhsul tapılmadı.</p>';
        });


    fetch('http://195.26.245.5:9505/api/categories')
    .then(response => response.json())
    .then(categories => {
        if (!categories || categories.length === 0) {
            categorylist.innerHTML = '<p class="text-center">Kateqoriya tapılmadı.</p>';
            return;
        }
        categories.forEach(category => {
            const categoryItem = document.createElement("li");
            categoryItem.textContent = category.name;
            categorylist.appendChild(categoryItem);
        });
    })
});
