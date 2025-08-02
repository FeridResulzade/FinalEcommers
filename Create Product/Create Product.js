let category = document.getElementById("category");


fetch('http://195.26.245.5:9505/api/categories')
    .then(response => response.json())
    .then(categories => {
        categories.forEach(obj => {
            const option = document.createElement("option");
            option.value = obj.id;
            option.innerHTML = obj.name;
            category.append(option);
        });
    })

document.getElementById("productForm").addEventListener("submit", function (event) {
    event.preventDefault()



    let formData = new FormData(event.target);
    let productData = Object.fromEntries(formData.entries());

    fetch("http://195.26.245.5:9505/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : ''}`
        },
        body: JSON.stringify(productData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Server error: " + response.status)
            }
            window.location.href = "../shop/shop.html";
            return response.json();
        })
        .then(data => {
            alert("Product successfully saved!");
            console.log(data);
            document.getElementById("productForm").reset();
        })
        .catch(error => {
            console.error("Error:", error)
            alert("Failed to save product. Please try again.")
        })
})