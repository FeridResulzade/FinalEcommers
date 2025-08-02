document.addEventListener('DOMContentLoaded', function () {
    let categorylist = document.getElementById("category-list")

   getProducts();

    fetch('http://195.26.245.5:9505/api/categories')
    .then(response => response.json())
    .then(categories => {
        if (!categories || categories.length === 0) {
            categorylist.innerHTML = '<p class="text-center">Kateqoriya tapılmadı.</p>';
            return;
        }
        categories.forEach(category => {
            const categoryItem = document.createElement("li");
            categoryItem.onclick =()=> getProducts(category.id);
            categoryItem.textContent = category.name;
            categorylist.appendChild(categoryItem);
        });
    })
});


function getProducts(categoryId){
    const productList = document.querySelector('.productlist');
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
                if (categoryId && product.categoryId !== categoryId) {
                    return; // Skip products that do not match the selected category
                }
                const productCard = document.createElement("div");
                productCard.classList.add("product", "mb-4");
                productCard.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.brand}" class="product-image" />
                    <h6 class="product-title">${product.brand} ${product.model}</h6>
                    <p class="price">${product.price}$</p>
                    <p class="rating">${product.rating} (${Math.floor(Math.random() * 100) + 1})</p>
                    <button class="btn btn-danger btn-add-to-cart" data-id="${product.id}">Add to cart</button>
                `;
                productCard.onclick = () => {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    window.location.href = `./Məhsul/məhsul.html`;
                }
                productList.appendChild(productCard);
            });
        })
        

}