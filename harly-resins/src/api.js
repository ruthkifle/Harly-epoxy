export async function fetchProducts() {
  const res = await fetch("http://localhost:4000/api/products");
  return res.json();
}
