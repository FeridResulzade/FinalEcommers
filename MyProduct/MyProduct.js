const API_URL = "http://195.26.245.5:9505/api/products/myProducts?page=1&size=1";

async function fetchProducts() {
  const errorDiv = document.getElementById('error');
  const tbody = document.getElementById('product-body');

  try {
    const response = await fetch(API_URL);

    const data = await response.json();

    if (!response.ok) {
      errorDiv.classList.remove('hidden');
      errorDiv.textContent = `Xəta: ${data.message || 'Naməlum xəta'}`;
      return;
    }

    errorDiv.classList.add('hidden');

    
  } catch (error) {
    errorDiv.classList.remove('hidden');
    errorDiv.textContent = `Şəbəkə xətası: ${error.message}`;
  }
}

window.onload = fetchProducts;
