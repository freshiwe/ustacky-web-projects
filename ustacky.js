// Get all the product elements
const products = document.querySelectorAll('.gadget');

// Add event listener for mouseover on each product
products.forEach((product) => {
  product.addEventListener('mouseover', () => {
    const priceElement = product.querySelector('.price');
    priceElement.style.display = 'block';
  });

  product.addEventListener('mouseout', () => {
    const priceElement = product.querySelector('.price');
    priceElement.style.display = 'none';
  });
});

// Add event listener for "Add to Cart" button
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
const cartItemCountElement = document.getElementById('cart-item-count');
let cartItemCount = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cartItemCount++;
    cartItemCountElement.textContent = cartItemCount;
  });
});
