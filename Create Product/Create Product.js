document.getElementById("productForm").addEventListener("submit", function (event)) {
    event.preventDefault()
  
    const productData = {
        brand: document.getElementById("brand").value,
        model: document.getElementById("model").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        price: parseFloat(document.getElementById("price").value),
        rating: parseFloat(document.getElementById("rating").value),
        imageurl: document.getElementById("imageurl").value
    }

    fetch("http://195.26.245.5:9505/api/products/myProducts?page=1&size=1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Server error: " + response.status)
        }
        return response.json();
    })
    .then(data => {
        alert("Product successfully saved!");
        console.log(data);
        document.getElementById("productForm").reset();
    .catch(error => {
        console.error("Error:", error)
        alert("Failed to save product. Please try again.")
    })
})