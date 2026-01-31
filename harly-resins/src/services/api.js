

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";


export async function fetchProducts() {
  try {
    const res = await fetch(`${API_BASE_URL}/products`);

    if (!res.ok) {
      throw new Error(`Server responded with status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("❌ API Error (fetchProducts):", error.message);

    return [];
  }
}


export async function filterProducts(filters) {
  try {
    const res = await fetch(`${API_BASE_URL}/products/filter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
    });

    if (!res.ok) throw new Error("Filter request failed");

    return await res.json();
  } catch (error) {
    console.error("❌ API Error (filterProducts):", error.message);
    return [];
  }
}


export async function submitOrder(orderData) {
  try {
    const res = await fetch(`${API_BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || "Failed to submit order");

    return data;
  } catch (error) {
    console.error("❌ API Error (submitOrder):", error.message);
    return { success: false, error: error.message };
  }
}