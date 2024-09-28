let cart = [];
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const title = button.getAttribute('data-title');
    const price = parseFloat(button.getAttribute('data-price'));

    // Add item to cart
    cart.push({ title, price });
    updateCart();
  });
});

function updateCart() {
  // Clear the current cart items
  cartItemsContainer.innerHTML = '';

  // Calculate total price
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.title} - ₹${item.price.toFixed(2)}`;
    cartItemsContainer.appendChild(li);
    total += item.price;
  });

  // Update total display
  cartTotal.textContent = `₹${total.toFixed(2)}`;
}
